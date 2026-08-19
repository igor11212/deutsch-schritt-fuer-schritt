/* Пошук по всьому курсу: модулі, розділи граматики, слова, тексти й завдання.

   Індекс будується один раз при першому пошуку — для цього доводиться
   довантажити всі п'ять рівнів, тому робимо це на вимогу, а не на старті. */

import { LEVELS, loadLevel } from '../data/index.js?v=20260819k';

const NO_UMLAUT = { ä: 'a', ö: 'o', ü: 'u', ß: 's' };

/** Зводимо ä і ae до одного вигляду: учень шукає як йому зручно. */
export function norm(s) {
  return String(s).toLowerCase()
    .replace(/[äöüß]/g, c => NO_UMLAUT[c])
    .replace(/ae/g, 'a').replace(/oe/g, 'o').replace(/ue/g, 'u').replace(/ss/g, 's')
    .replace(/[’'`]/g, '');
}

/** Текст без тегів — щоб шукати всередині пояснень, а не по розмітці. */
function plain(html) {
  return String(html)
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ').replace(/&[a-z]+;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/* Вага типу запису: чим менше число, тим вище в результатах. */
const RANK = {
  module: 0, grammar: 1, word: 2, skill: 3, reading: 4, listening: 5, writing: 6, sprechen: 7,
};

const TYPE_LABEL = {
  module:    { icon: '📘', label: 'Модуль' },
  grammar:   { icon: '📐', label: 'Пояснення' },
  word:      { icon: '🗂', label: 'Слово' },
  skill:     { icon: '🎯', label: 'Навичка' },
  reading:   { icon: '📖', label: 'Читання' },
  listening: { icon: '🎧', label: 'Аудіювання' },
  writing:   { icon: '✍', label: 'Письмо' },
  sprechen:  { icon: '🗣', label: 'Мовлення' },
};

export { TYPE_LABEL };

let INDEX = null;
let building = null;

/** Будує індекс один раз; повторні виклики чекають на ту саму обіцянку. */
export function buildIndex() {
  if (INDEX) return Promise.resolve(INDEX);
  if (building) return building;

  building = (async () => {
    const out = [];
    for (const meta of LEVELS) out.push(...indexLevel(meta, await loadLevel(meta.id)));
    INDEX = out;
    return out;
  })();

  return building;
}

/** Записи одного рівня. Винесено окремо й синхронно — щоб логіку індексу
    можна було перевірити тестом, не піднімаючи браузер. */
export function indexLevel(meta, level) {
  const out = [];

  level.modules.forEach((m, i) => {
    const href = `#/${meta.id}/${i + 1}`;
    out.push({
      type: 'module', level: meta.code, href,
      title: m.title, sub: m.titleUk,
      hay: norm([m.title, m.titleUk, ...(m.can || [])].join(' ')),
    });

    (m.grammar || []).forEach(g => {
      const body = plain(g.html);
      out.push({
        type: 'grammar', level: meta.code, href: `${href}/grammar`,
        title: g.title, sub: `${m.title} · ${meta.code}`,
        body,
        hay: norm(g.title + ' ' + body),
      });
    });

    (m.listening || []).forEach(t => out.push({
      type: 'listening', level: meta.code, href: `#/${meta.id}/hoeren`,
      title: t.title, sub: `${t.exam || 'Hören'} · ${meta.code}`,
      hay: norm([t.title, t.instruction, (t.lines || []).map(l => l.de + ' ' + (l.uk || '')).join(' ')].join(' ')),
    }));

    (m.writing || []).forEach(t => out.push({
      type: 'writing', level: meta.code, href: `#/${meta.id}/schreiben`,
      title: t.title, sub: `${t.exam || 'Schreiben'} · ${meta.code}`,
      hay: norm([t.title, plain(t.situation || ''), (t.points || []).join(' ')].join(' ')),
    }));
  });

  (level.reading || []).forEach(t => out.push({
    type: 'reading', level: meta.code, href: `#/${meta.id}/lesen`,
    title: t.title, sub: `${t.exam || 'Lesen'} · ${meta.code}`,
    hay: norm([t.title, t.instruction, plain(t.text)].join(' ')),
  }));

  (level.speaking || []).forEach(t => out.push({
    type: 'sprechen', level: meta.code, href: `#/${meta.id}/sprechen`,
    title: t.title, sub: `${t.exam} · ${t.titleUk}`,
    hay: norm([t.title, t.titleUk, t.instruction, (t.card?.items || []).join(' ')].join(' ')),
  }));

  (level.vocab || []).forEach(g => g.items.forEach(it => out.push({
    type: 'word', level: meta.code, href: `#/${meta.id}/wortschatz`,
    title: it.de, sub: `${it.uk} · ${g.group}`,
    hay: norm([it.de, it.uk, it.ex || ''].join(' ')),
  })));

  return out;
}

/** Чи всі слова запиту трапляються в записі. */
function matches(entry, words) {
  return words.every(w => entry.hay.includes(w));
}

/** Оцінка: точний збіг у назві важить більше, ніж згадка десь у тексті. */
function score(entry, words, raw) {
  const title = norm(entry.title);
  let s = RANK[entry.type] * 10;
  if (title === raw) s -= 25;
  else if (title.startsWith(raw)) s -= 15;
  else if (title.includes(raw)) s -= 8;
  if (words.every(w => title.includes(w))) s -= 4;
  return s;
}

/** Уривок пояснення навколо знайденого слова — щоб було видно контекст. */
export function snippet(entry, raw) {
  if (!entry.body) return '';
  const at = norm(entry.body).indexOf(raw);
  if (at < 0) return entry.body.slice(0, 120) + '…';
  const from = Math.max(0, at - 60);
  return (from ? '…' : '') + entry.body.slice(from, from + 160).trim() + '…';
}

export function search(index, query, limit = 40) {
  const raw = norm(query.trim());
  if (raw.length < 2) return [];
  const words = raw.split(/\s+/).filter(Boolean);
  return index
    .filter(e => matches(e, words))
    .map(e => ({ e, s: score(e, words, raw) }))
    .sort((a, b) => a.s - b.s)
    .slice(0, limit)
    .map(x => x.e);
}
