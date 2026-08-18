/* Роутер + сторінки. Хеш-навігація, щоб працювало на GitHub Pages без сервера. */

import { LEVELS, loadLevel } from '../data/index.js?v=20260819i';
import { el, renderExercise, renderExerciseSet } from './exercises.js?v=20260819i';
import { speak, speakDialogue, stop as stopSpeech, ttsSupported, hasGermanVoice } from './tts.js?v=20260819i';
import { checkWriting } from './writing-check.js?v=20260819i';
import { glossTerms } from './glossary.js?v=20260819i';
import {
  load as srsLoad, save as srsSave, stats as srsStats, isKnown as srsIsKnown,
  isDue as srsIsDue, boxOf as srsBox, promote as srsPromote, demote as srsDemote,
  cleanWord, buildQuiz as buildQuizData, quizableThemes,
  pickForWriting, containsWord, knownCount,
  loadStars, toggleStar, wordStatus, whenBack, schedule,
} from './vocab-srs.js?v=20260819i';
import * as prog from './progress.js?v=20260819i';
import { renderExam } from './exam.js?v=20260819i';
import { EXAM, PART_META } from '../data/exam.js?v=20260819i';
import { buildIndex, search as runSearch, snippet, TYPE_LABEL } from './search.js?v=20260819i';

const main = document.getElementById('main');

/* ------------------------------------------------------- тема ----------- */

const THEME_KEY = 'dssf-theme';
function applyTheme(t) {
  document.documentElement.dataset.theme = t;
  document.getElementById('themeIcon').textContent = t === 'dark' ? '☀' : '☾';
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', t === 'dark' ? '#16181f' : '#f4f5f8');
}
{
  const saved = localStorage.getItem(THEME_KEY);
  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
  applyTheme(saved || (prefersDark ? 'dark' : 'light'));
}
document.getElementById('themeBtn').addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem(THEME_KEY, next);
  applyTheme(next);
});

/* ------------------------------------------------------- навігація ------ */

const topnav = document.getElementById('topnav');
topnav.append(
  ...LEVELS.map(l => el('a', { href: `#/${l.id}`, 'data-level': l.id }, l.code)),
  el('a', { href: '#/suche', 'data-level': 'suche', class: 'topnav__prog', title: 'Пошук (Ctrl + K)' }, '🔍'),
  el('a', { href: '#/progress', 'data-level': 'progress', class: 'topnav__prog', title: 'Мій прогрес' }, '📊'),
);

// Ctrl/⌘ + K відкриває пошук із будь-якої сторінки — звична комбінація.
document.addEventListener('keydown', e => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    location.hash = '#/suche';
  }
});

function markNav(levelId) {
  topnav.querySelectorAll('a').forEach(a => {
    if (a.dataset.level === levelId) a.setAttribute('aria-current', 'page');
    else a.removeAttribute('aria-current');
  });
}

function crumbs(...parts) {
  const box = el('nav', { class: 'crumbs', 'aria-label': 'Навігація' });
  parts.forEach((p, i) => {
    if (i) box.append(el('span', { 'aria-hidden': 'true' }, '›'));
    box.append(p.href ? el('a', { href: p.href }, p.label) : el('span', {}, p.label));
  });
  return box;
}

/** Таблиці всередині html-блоків загортаємо в горизонтальний скрол. */
function enhanceTables(root) {
  root.querySelectorAll('table').forEach(t => {
    if (t.parentElement?.classList.contains('tbl-scroll')) return;
    t.classList.add('tbl');
    const box = el('div', { class: 'tbl-scroll' });
    t.replaceWith(box);
    box.append(t);
  });
}

function setView(node, title) {
  stopSpeech();
  main.replaceChildren(node);
  document.title = title ? `${title} — Deutsch Schritt für Schritt` : 'Deutsch Schritt für Schritt';
  enhanceTables(main);
  main.focus({ preventScroll: true });
  if (title) prog.setLast(location.hash || '#/', title);
}

function loading() {
  setView(el('div', { class: 'card center muted' }, 'Завантаження…'));
}

/* ------------------------------------------------------- головна -------- */

function viewHome() {
  markNav(null);

  const hero = el('section', { class: 'hero' },
    el('span', { class: 'tag tag--accent' }, 'Безкоштовно · без реєстрації'),
    el('h1', {}, 'Німецька від A1 до C1 — самостійно'),
    el('p', { class: 'lead' },
      'На кожному рівні — модулі граматики (пояснення українською, вправи, тест) ' +
      'і п’ять окремих модулів навичок: лексика, читання, аудіювання, письмо та мовлення. ' +
      'Формати завдань узяті зі структури іспитів Goethe-Zertifikat та ÖSD.'),
    el('div', { class: 'hero__facts' },
      el('span', { class: 'tag' }, '📘 Граматика українською'),
      el('span', { class: 'tag' }, '🗂 Словник із флеш-картками'),
      el('span', { class: 'tag' }, '📖 Читання з текстами'),
      el('span', { class: 'tag' }, '🔊 Аудіювання в браузері'),
      el('span', { class: 'tag' }, '✍ Письмо з модельними відповідями'),
      el('span', { class: 'tag' }, '🗣 Мовлення із зразками'),
      el('span', { class: 'tag' }, '🎯 Тест після кожного модуля'),
      el('span', { class: 'tag' }, '📝 Повний пробний іспит'),
    ),
  );

  const state = prog.load();
  const course = prog.courseStats(state, Object.fromEntries(LEVELS.map(l => [l.id, l.modules])));

  const cards = LEVELS.map(l => {
    const st = prog.levelStats(state, l.id, l.modules);
    return el('a', {
      class: 'level-card', href: `#/${l.id}`, style: `--c: var(--${l.id})`,
    },
      el('span', { class: 'level-card__code' }, l.code),
      el('h3', {}, l.title),
      el('p', {}, l.desc),
      el('div', { class: 'level-card__meta' },
        el('span', { class: 'tag' }, l.words),
        el('span', { class: 'tag' }, l.hours),
        l.status === 'full'
          ? el('span', { class: 'tag tag--accent' }, 'Повний курс')
          : el('span', { class: 'tag tag--warn' }, 'Модулі додаються'),
      ),
      st.touched ? el('div', { class: 'level-card__prog' },
        el('div', { class: 'progress-line' }, el('i', { style: `width:${st.pct}%` })),
        el('small', {}, `Модулів складено: ${st.passed} з ${st.total}`
          + (st.exam ? ` · пробний іспит ${st.exam.pct}/100` : '')),
      ) : null,
    );
  });

  const last = prog.getLast(state);
  const resume = last ? el('section', { class: 'card resume' },
    el('div', {},
      el('strong', {}, 'Продовжити навчання'),
      el('p', { class: 'muted', style: 'margin:.2rem 0 0' },
        `${last.title} · ${prog.human(last.date)}`)),
    el('span', { class: 'grow' }),
    el('a', { class: 'btn', href: last.hash }, 'Далі →'),
  ) : null;

  const overview = course.passed ? el('section', { class: 'card resume' },
    el('div', {},
      el('strong', {}, `Пройдено ${course.passed} ${plural(course.passed, 'модуль', 'модулі', 'модулів')} з ${course.total}`),
      el('p', { class: 'muted', style: 'margin:.2rem 0 0' }, 'Прогрес зберігається у вашому браузері.')),
    el('span', { class: 'grow' }),
    el('a', { class: 'btn btn--soft', href: '#/progress' }, 'Мій прогрес'),
  ) : null;

  const how = el('section', { class: 'card stack' },
    el('h2', {}, 'Як користуватися'),
    el('ol', { style: 'padding-left:1.2rem;color:var(--text-soft)' },
      el('li', {}, 'Оберіть рівень. Угорі — навички, нижче — граматика за модулями.'),
      el('li', {}, el('strong', {}, 'Граматика'), ' — прочитайте пояснення й розберіть таблиці.'),
      el('li', {}, el('strong', {}, 'Вправи'), ' — відпрацюйте граматику з миттєвою перевіркою.'),
      el('li', {}, el('strong', {}, 'Тест'), ' — перевірте себе. 60 % — прохідний бал, як на реальному іспиті.'),
      el('li', {}, el('strong', {}, 'Лексика'), ' — окремий модуль: увесь словник рівня за темами, з озвученням і флеш-картками.'),
      el('li', {}, el('strong', {}, 'Читання'), ' — окремий модуль: тексти зі словничком і завданнями.'),
      el('li', {}, el('strong', {}, 'Аудіювання'), ' — окремий модуль: слухайте без тексту, транскрипт відкривайте після відповідей.'),
      el('li', {}, el('strong', {}, 'Письмо'), ' — окремий модуль: пишіть, перевіряйте текст, порівнюйте з прикладом.'),
    ),
  );

  setView(el('div', {}, hero, resume, overview,
    el('h2', {}, 'Рівні'), el('div', { class: 'levels' }, cards),
    el('div', { style: 'height:2rem' }), how));
}

/* ------------------------------------------------------- рівень --------- */

async function viewLevel(levelId) {
  const meta = LEVELS.find(l => l.id === levelId);
  if (!meta) return viewNotFound();
  markNav(levelId);
  loading();

  const level = await loadLevel(levelId);

  const head = el('section', { class: 'level-head', style: `--c: var(--${levelId})` },
    el('span', { class: 'tag' }, meta.exam),
    el('h1', {}, `${meta.code} — ${meta.title}`),
    el('p', { class: 'lead' }, level.intro || meta.desc),
    el('div', { class: 'hero__facts' },
      el('span', { class: 'tag' }, meta.words),
      el('span', { class: 'tag' }, meta.hours),
      el('span', { class: 'tag' }, `${level.modules.length} ${plural(level.modules.length, 'модуль', 'модулі', 'модулів')}`),
    ),
  );

  const state = prog.load();
  const stats = prog.levelStats(state, levelId, level.modules.length);

  const list = el('div', { class: 'module-list' },
    level.modules.map((m, i) => {
      const t = prog.getTest(state, levelId, i + 1);
      const ex = prog.getExercises(state, levelId, i + 1);
      const passed = t && t.pct >= prog.PASS;
      return el('a', {
        class: 'module-card' + (passed ? ' is-passed' : ''),
        href: `#/${levelId}/${i + 1}`, style: `--c: var(--${levelId})`,
      },
        el('span', { class: 'module-card__no' }, passed ? '✓' : String(i + 1)),
        el('div', {},
          el('h3', {}, m.title),
          el('p', {}, m.titleUk),
          (t || ex) ? el('div', { class: 'module-card__tags' },
            t ? el('span', { class: 'tag ' + (passed ? 'tag--accent' : 'tag--warn') }, `тест ${t.pct} %`) : null,
            ex ? el('span', { class: 'tag' }, `вправи ${ex.done}/${ex.total}`) : null,
          ) : null,
        ),
        el('span', { class: 'module-card__go', 'aria-hidden': 'true' }, '›'),
      );
    }),
  );

  const skills = buildSkills(level);
  const skillCards = el('div', { class: 'levels' },
    SKILLS.map(sk => {
      const list = skills[sk.id];
      let badge;
      if (sk.id === 'wortschatz') {
        const p = srsStats(list, srsLoad(levelId));
        badge = p.due ? `До повторення сьогодні: ${p.due}`
          : p.known ? `Вивчено ${p.known} з ${p.total}`
          : `${p.total} ${plural(p.total, 'слово', 'слова', 'слів')} · ${list.length} ${plural(list.length, 'тема', 'теми', 'тем')}`;
      } else {
        const sp = prog.getSkill(state, levelId, sk.id);
        badge = sp && sp.total
          ? `Опрацьовано ${sp.done} з ${sp.total}`
          : `${list.length} ${plural(list.length, 'завдання', 'завдання', 'завдань')}`;
      }
      return el('a', {
        class: 'level-card', href: `#/${levelId}/${sk.id}`, style: `--c: var(--${levelId})`,
      },
        el('span', { class: 'level-card__code' }, sk.icon),
        el('h3', {}, `${sk.de} — ${sk.label}`),
        el('p', {}, sk.desc),
        el('div', { class: 'level-card__meta' },
          el('span', { class: 'tag tag--accent' }, badge)),
      );
    }),
  );

  const examPlan = EXAM[levelId];
  const examCard = examPlan ? el('section', { class: 'card exam-cta', style: `--c: var(--${levelId})` },
    el('div', {},
      el('span', { class: 'tag tag--accent' }, 'Пробний іспит'),
      el('h3', { style: 'margin:.5rem 0 .3rem' }, examPlan.title),
      el('p', { class: 'muted', style: 'margin:0' },
        `Чотири частини поспіль із таймером, разом ${examPlan.parts.reduce((a, b) => a + b.minutes, 0)} хвилин. `
        + 'Бали рахуються за схемою Goethe.'),
      stats.exam ? el('p', { style: 'margin:.6rem 0 0' },
        el('span', { class: 'tag ' + (stats.exam.pass ? 'tag--accent' : 'tag--warn') },
          `Ваш результат: ${stats.exam.pct} / 100`),
        el('span', { class: 'tag' }, `спроб: ${stats.exam.tries}`)) : null),
    el('span', { class: 'grow' }),
    el('a', { class: 'btn', href: `#/${levelId}/pruefung` }, stats.exam ? 'Пройти ще раз' : 'Почати іспит'),
  ) : null;

  const progressCard = stats.touched ? el('section', { class: 'card' },
    el('div', { class: 'flash__bar' },
      el('strong', {}, `Ваш прогрес на ${meta.code}`),
      el('span', { class: 'grow' }),
      el('a', { class: 'btn btn--ghost btn--sm', href: '#/progress' }, 'Подробиці')),
    el('div', { class: 'progress-line' }, el('i', { style: `width:${stats.pct}%` })),
    el('div', { class: 'vocab-progress__pills' },
      el('span', { class: 'pill pill--ok' }, `Модулів складено: ${stats.passed} з ${stats.total}`),
      el('span', { class: 'pill' }, `Тестів пройдено: ${stats.started}`),
      stats.avg ? el('span', { class: 'pill' }, `Середній бал: ${stats.avg} %`) : null),
  ) : null;

  const view = el('div', {},
    crumbs({ label: 'Головна', href: '#/' }, { label: meta.code }),
    head,
    progressCard,
    el('h2', {}, 'Навички'),
    el('p', { class: 'muted', style: 'margin-top:-.5rem' },
      'Лексика, читання, аудіювання, письмо й мовлення зібрані окремо — так, як їх перевіряють на іспиті.'),
    skillCards,
    el('div', { style: 'height:2rem' }),
    el('h2', {}, 'Граматика за модулями'),
    el('p', { class: 'muted', style: 'margin-top:-.5rem' },
      'Кожен модуль розкриває одну тему: пояснення, лексика, вправи й тест.'),
    list,
    el('div', { style: 'height:2rem' }),
    examCard,
  );

  if (level.planned?.length) {
    view.append(el('div', { style: 'height:1.5rem' }), el('div', { class: 'planned' },
      el('strong', {}, 'Наступні модулі рівня (у розробці)'),
      el('ul', {}, level.planned.map(p => el('li', {}, p))),
    ));
  }
  if (level.examNote) {
    view.append(el('div', { style: 'height:1.5rem' }), el('div', { class: 'card' },
      el('h3', {}, `Формат іспиту ${meta.code}`),
      el('div', { html: level.examNote }),
    ));
  }

  setView(view, `${meta.code} — ${meta.title}`);
}

/* ------------------------------------------------------- модуль --------- */

/* Модуль розкриває одну граматичну тему. Читання, аудіювання й письмо
   винесені в окремі модулі навичок на рівні цілого рівня. */
const TABS = [
  { id: 'grammar',   label: 'Граматика', key: 'grammar' },
  { id: 'exercises', label: 'Вправи',    key: 'exercises' },
  { id: 'test',      label: 'Тест',      key: 'test' },
];

/* Навички — окремі модулі рівня. Словник іде першим: він живить решту. */
const SKILLS = [
  { id: 'wortschatz', de: 'Wortschatz', label: 'Лексика',   icon: '🗂',
    desc: 'Увесь словник рівня, згрупований за темами й у логічному порядку — з таблицями та флеш-картками.' },
  { id: 'lesen',     de: 'Lesen',     label: 'Читання',   icon: '📖',
    desc: 'Тексти у форматі іспиту: оголошення, листи, статті — зі словником і завданнями.' },
  { id: 'hoeren',    de: 'Hören',     label: 'Аудіювання', icon: '🎧',
    desc: 'Усі діалоги й монологи рівня зібрані разом, із транскриптом і завданнями.' },
  { id: 'schreiben', de: 'Schreiben', label: 'Письмо',     icon: '✍',
    desc: 'Завдання на письмо з перевіркою тексту, корисними фразами й прикладом.' },
  { id: 'sprechen', de: 'Sprechen', label: 'Мовлення',  icon: '🗣',
    desc: 'Усні завдання у форматі іспиту: картка, таймер підготовки, зразок відповіді та власний запис.' },
];

/** Збирає матеріали навичок з усіх модулів рівня. */
function buildSkills(level) {
  const hoeren = [], schreiben = [];
  level.modules.forEach((m, i) => {
    const from = `Модуль ${i + 1} · ${m.title}`;
    (m.listening || []).forEach(t => hoeren.push({ ...t, from, mod: m }));
    (m.writing   || []).forEach(t => schreiben.push({ ...t, from, mod: m }));
  });
  return { wortschatz: level.vocab || [], lesen: level.reading || [], hoeren, schreiben, sprechen: level.speaking || [] };
}

async function viewModule(levelId, index, tabId) {
  const meta = LEVELS.find(l => l.id === levelId);
  if (!meta) return viewNotFound();
  markNav(levelId);
  loading();

  const level = await loadLevel(levelId);
  const mod = level.modules[index - 1];
  if (!mod) return viewNotFound();

  const available = TABS.filter(t => (mod[t.key]?.length ?? 0) > 0);
  const active = available.find(t => t.id === tabId) || available[0];

  const head = el('header', { class: 'level-head', style: `--c: var(--${levelId})` },
    el('span', { class: 'tag' }, `${meta.code} · Модуль ${index}`),
    el('h1', {}, mod.title),
    el('p', { class: 'lead' }, mod.titleUk),
    mod.can?.length ? el('div', { class: 'card', style: 'margin-top:1.2rem;background:var(--surface)' },
      el('strong', {}, 'Після модуля ви зможете:'),
      el('ul', { style: 'margin:.5rem 0 0;padding-left:1.2rem;color:var(--text-soft)' },
        mod.can.map(c => el('li', {}, c))),
    ) : null,
  );

  const tabsBar = el('div', { class: 'tabs', role: 'tablist' },
    available.map(t => {
      const b = el('button', { type: 'button', role: 'tab', 'aria-selected': String(t.id === active.id) }, t.label);
      b.addEventListener('click', () => { location.hash = `#/${levelId}/${index}/${t.id}`; });
      return b;
    }),
  );

  const panel = el('div', { role: 'tabpanel' });
  panel.append(RENDERERS[active.id](mod, meta, index));

  const nav = el('div', { class: 'ex__actions', style: 'margin-top:2.4rem;justify-content:space-between' },
    index > 1 ? el('a', { class: 'btn btn--ghost', href: `#/${levelId}/${index - 1}` }, '← Модуль ' + (index - 1)) : el('span', {}),
    level.modules[index] ? el('a', { class: 'btn', href: `#/${levelId}/${index + 1}` }, 'Модуль ' + (index + 1) + ' →') : el('a', { class: 'btn btn--soft', href: `#/${levelId}` }, 'До списку модулів'),
  );

  setView(el('div', {},
    crumbs({ label: 'Головна', href: '#/' }, { label: meta.code, href: `#/${levelId}` }, { label: `Модуль ${index}` }),
    head, tabsBar, panel, nav,
  ), `${mod.title} · ${meta.code}`);
}

/* --------------------------------------------- звіт перевірки письма ---- */

const KIND = {
  error: { label: 'Помилка',      icon: '✕' },
  warn:  { label: 'Варте уваги',  icon: '!' },
  tip:   { label: 'Як покращити', icon: '↑' },
};

function renderReport(res) {
  if (res.empty) {
    return el('div', { class: 'report__box report__box--empty' },
      'Спочатку напишіть текст у полі вище.');
  }

  const errors = res.issues.filter(i => i.kind === 'error');
  const warns  = res.issues.filter(i => i.kind === 'warn');
  const tips   = res.issues.filter(i => i.kind === 'tip');

  const head = el('div', { class: 'report__head' },
    el('div', { class: 'report__stats' },
      el('span', {}, `${res.stats.words} ${plural(res.stats.words, 'слово', 'слова', 'слів')}`),
      el('span', {}, `${res.stats.sentences} ${plural(res.stats.sentences, 'речення', 'речення', 'речень')}`),
      res.stats.avgLen ? el('span', {}, `у середньому ${res.stats.avgLen} слів у реченні`) : null),
    el('div', { class: 'report__score' },
      errors.length
        ? el('span', { class: 'pill pill--err' }, `${errors.length} ${plural(errors.length, 'помилка', 'помилки', 'помилок')}`)
        : el('span', { class: 'pill pill--ok' }, 'Явних помилок не знайдено'),
      warns.length ? el('span', { class: 'pill pill--warn' }, `${warns.length} до уваги`) : null,
      tips.length  ? el('span', { class: 'pill' }, `${tips.length} ${plural(tips.length, 'порада', 'поради', 'порад')}`) : null),
  );

  const list = el('div', { class: 'report__list' },
    [...errors, ...warns, ...tips].map(i => el('div', { class: `issue issue--${i.kind}` },
      el('span', { class: 'issue__icon', 'aria-hidden': 'true' }, KIND[i.kind].icon),
      el('div', {},
        el('strong', {}, i.title),
        el('p', {}, i.detail),
        i.quote ? el('pre', { class: 'issue__quote' }, i.quote) : null),
    )),
  );

  const note = el('p', { class: 'report__note' },
    'Перевірка автоматична: вона ловить типові помилки, але не читає зміст як викладач. ' +
    'Якщо помилок не знайдено — це ще не гарантія бездоганного тексту. Порівняйте свій варіант із прикладом нижче.');

  return el('div', { class: 'report__box' }, head, res.issues.length ? list : null, note);
}

/* ------------------------------------------------- модуль навички ------- */

async function viewSkill(levelId, skillId) {
  const meta = LEVELS.find(l => l.id === levelId);
  const sk = SKILLS.find(x => x.id === skillId);
  if (!meta || !sk) return viewNotFound();
  markNav(levelId);
  loading();

  const level = await loadLevel(levelId);
  const items = buildSkills(level)[skillId];

  const head = el('header', { class: 'level-head', style: `--c: var(--${levelId})` },
    el('span', { class: 'tag' }, `${meta.code} · ${sk.de}`),
    el('h1', {}, `${sk.icon} ${sk.label}`),
    el('p', { class: 'lead' }, sk.desc),
  );

  const body = el('div', { class: 'stack' });

  if (!items.length) {
    body.append(el('div', { class: 'card center muted' },
      'Матеріали цієї навички для рівня ще готуються.'));
  } else if (skillId === 'wortschatz') {
    body.append(renderVocabulary(items, levelId));
  } else if (skillId === 'lesen') {
    body.append(renderReading(items, levelId));
  } else if (skillId === 'sprechen') {
    body.append(renderSpeaking(items, meta));
  } else if (skillId === 'hoeren') {
    body.append(RENDERERS.listening({ listening: items }, meta, null, { track: true }));
  } else {
    body.append(RENDERERS.writing({ writing: items, vocab: level.vocab || [], id: 'skill' }, meta, null, { track: true }));
  }

  const nav = el('div', { class: 'ex__actions', style: 'margin-top:2.4rem;justify-content:space-between' },
    el('a', { class: 'btn btn--ghost', href: `#/${levelId}` }, '← До рівня ' + meta.code),
    el('a', { class: 'btn btn--soft', href: `#/${levelId}/${SKILLS[(SKILLS.findIndex(x => x.id === skillId) + 1) % SKILLS.length].id}` },
      'Наступна навичка →'),
  );

  setView(el('div', {},
    crumbs({ label: 'Головна', href: '#/' }, { label: meta.code, href: `#/${levelId}` }, { label: sk.label }),
    head, body, nav,
  ), `${sk.label} · ${meta.code}`);
}

/* ------------------------------------------------------ словник рівня --- */

/** Словник рівня: таблиці за темами, флеш-картки з інтервальним повторенням
    і вправи, які самі підсовують те, що сьогодні на повторення. */
function renderVocabulary(groups, levelId) {
  const map = srsLoad(levelId);
  const box = el('div', { class: 'stack' });
  const total = groups.reduce((n, g) => n + g.items.length, 0);

  /* — смуга прогресу — */
  const bar = el('i');
  const barLabel = el('strong');
  const pillKnown = el('span', { class: 'pill pill--ok' });
  const pillLearn = el('span', { class: 'pill' });
  const pillDue   = el('span', { class: 'pill pill--warn' });
  const resetBtn  = el('button', { class: 'btn btn--ghost btn--sm', type: 'button' }, 'Скинути прогрес');
  const schedBox  = el('div', { class: 'vocab-sched' });

  const progressBox = el('div', { class: 'vocab-progress' },
    el('div', { class: 'vocab-progress__head' }, barLabel, el('span', { class: 'grow' }), resetBtn),
    el('div', { class: 'progress-line' }, bar),
    el('div', { class: 'vocab-progress__pills' }, pillKnown, pillLearn, pillDue),
    schedBox,
    el('p', { class: 'muted', style: 'margin:.7rem 0 0;font-size:.85rem' },
      'Слово проходить п’ять коробок: після правильної відповіді воно повертається ' +
      'через 1, 3, 7, 14 і 30 днів, після помилки — знову завтра. Вивченим вважається ' +
      'те, що пережило три повторення. Прогрес зберігається у вашому браузері.'),
  );

  const groupCounters = new Map();

  function refresh() {
    const st = srsStats(groups, map);
    const pct = st.total ? Math.round(st.known / st.total * 100) : 0;
    barLabel.textContent = `Вивчено ${st.known} з ${st.total} (${pct} %)`;
    bar.style.width = pct + '%';
    pillKnown.textContent = `Вивчено: ${st.known}`;
    pillLearn.textContent = `У роботі: ${st.learning}`;
    pillDue.textContent = st.due ? `До повторення сьогодні: ${st.due}` : 'На сьогодні все повторено';
    pillDue.classList.toggle('pill--warn', st.due > 0);
    pillDue.classList.toggle('pill--ok', st.due === 0);

    const sc = schedule(groups, map);
    schedBox.replaceChildren(
      el('strong', { class: 'vocab-sched__title' }, 'Коли слова повернуться'),
      el('div', { class: 'vocab-sched__row' },
        el('span', { class: 'chip chip--due' },  `сьогодні ${sc.due}`),
        el('span', { class: 'chip' }, `завтра ${sc.tomorrow}`),
        el('span', { class: 'chip' }, `цього тижня ${sc.week}`),
        el('span', { class: 'chip' }, `пізніше ${sc.later}`),
        el('span', { class: 'chip chip--fresh' }, `ще не бачили ${sc.fresh}`)),
    );

    groups.forEach(g => {
      const c = groupCounters.get(g.group);
      if (!c) return;
      const k = g.items.filter(i => srsIsKnown(map, i.de)).length;
      c.el.textContent = `${k} / ${g.items.length}`;
      c.el.classList.toggle('pill--ok', k === g.items.length);
      c.rows.forEach(({ tr, de, status }) => {
        const st = wordStatus(map, de);
        tr.classList.toggle('is-known', st.known === true);
        tr.classList.toggle('is-learning', !st.known && st.box > 0);
        tr.dataset.state = st.key;
        status.replaceChildren(
          el('span', { class: 'wstate wstate--' + st.key },
            st.key === 'fresh' ? 'нове'
              : st.key === 'due' ? 'на повторення'
              : st.known ? `вивчено · коробка ${st.box}`
              : `вчиться · коробка ${st.box}`),
          st.days === null ? null
            : el('small', { class: 'wstate__when' }, whenBack(st.days)),
        );
      });
    });
    applyFilter();
  }

  /* — фільтр за станом: показуємо лише те, що цікавить — */
  let filter = 'all';
  function applyFilter() {
    groupCounters.forEach(({ rows, section }) => {
      let shown = 0;
      rows.forEach(({ tr, de }) => {
        const st = wordStatus(map, de);
        const ok = filter === 'all'
          || (filter === 'fresh'    && st.key === 'fresh')
          || (filter === 'learning' && st.box > 0 && !st.known)
          || (filter === 'known'    && st.known)
          || (filter === 'due'      && st.key === 'due');
        tr.hidden = !ok;
        if (ok) shown++;
      });
      if (section) section.hidden = shown === 0;
    });
  }

  const commit = () => { srsSave(levelId, map); refresh(); };

  resetBtn.addEventListener('click', () => {
    if (!Object.keys(map).length) return;
    Object.keys(map).forEach(k => delete map[k]);
    commit();
  });

  /* — перемикач режимів — */
  const modes = [
    { id: 'cards', label: '🃏 Картки',  panel: el('div', { class: 'flash', hidden: 'hidden' }),
      build: p => p.append(buildFlashcards(groups, map, levelId, commit)) },
    { id: 'quiz',  label: '✍ Вправи',  panel: el('div', { class: 'vquiz', hidden: 'hidden' }),
      build: p => p.append(buildVocabQuiz(groups, map, commit)) },
    { id: 'write', label: '📝 Речення', panel: el('div', { class: 'vsent', hidden: 'hidden' }),
      build: p => p.append(buildSentencePractice(groups, map, levelId, commit)) },
  ];

  modes.forEach(m => {
    m.btn = el('button', { class: 'btn btn--soft', type: 'button' }, m.label);
    m.btn.addEventListener('click', () => {
      const opening = m.panel.hasAttribute('hidden');
      modes.forEach(x => {
        x.panel.setAttribute('hidden', 'hidden');
        x.btn.textContent = x.label;
        x.btn.classList.remove('btn--active');
      });
      if (!opening) return;
      if (!m.built) { m.build(m.panel); m.built = true; }
      m.panel.removeAttribute('hidden');
      m.btn.textContent = '✕ Сховати';
      m.btn.classList.add('btn--active');
      m.panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  box.append(el('div', { class: 'section-note' },
    `Словник рівня: ${total} ${plural(total, 'слово', 'слова', 'слів')} у ${groups.length} ${plural(groups.length, 'темі', 'темах', 'темах')}. `,
    'Слова в кожній темі стоять не за абеткою, а в логічному порядку — так їх легше запам’ятати. ',
    el('div', { class: 'ex__actions', style: 'margin-top:.8rem' }, modes.map(m => m.btn))));

  /* — кнопки фільтра над таблицями — */
  const FILTERS = [
    { id: 'all',      label: 'Усі слова' },
    { id: 'due',      label: '⏰ На повторення' },
    { id: 'learning', label: '📖 Вчаться' },
    { id: 'known',    label: '✓ Вивчені' },
    { id: 'fresh',    label: '○ Ще не бачили' },
  ];
  const filterBar = el('div', { class: 'vocab-filter' },
    el('span', { class: 'muted', style: 'font-size:.85rem' }, 'Показати:'),
    FILTERS.map(f => {
      const b = el('button', { class: 'btn btn--ghost btn--sm' + (f.id === 'all' ? ' btn--active' : ''),
        type: 'button', 'data-filter': f.id }, f.label);
      b.addEventListener('click', () => {
        filter = f.id;
        filterBar.querySelectorAll('button').forEach(x =>
          x.classList.toggle('btn--active', x.dataset.filter === filter));
        applyFilter();
      });
      return b;
    }));

  box.append(progressBox, ...modes.map(m => m.panel), filterBar);

  if (ttsSupported && !hasGermanVoice()) {
    box.append(el('div', { class: 'no-tts' },
      'У системі не знайдено німецького голосу. Додайте його: macOS — Системні налаштування → Спеціальні можливості → Вимовлений вміст → Голоси системи; Windows — Параметри → Час і мова → Мова → Додати німецьку.'));
  }

  /* — таблиці за темами — */
  groups.forEach((group, gi) => {
    const rows = [];
    const trs = group.items.map((it, i) => {
      const btn = ttsSupported
        ? el('button', { class: 'speak-btn', type: 'button', 'aria-label': `Прослухати: ${it.de}` }, '🔊')
        : null;
      btn?.addEventListener('click', () => speak(cleanWord(it.de), {
        onStart: () => btn.classList.add('is-playing'),
        onEnd:   () => btn.classList.remove('is-playing'),
      }));
      const status = el('td', { class: 'vt__state' });
      const tr = el('tr', {},
        el('td', { class: 'vt__no' }, String(i + 1)),
        el('td', { class: 'vt__de' }, el('span', { class: 'de' }, it.de), btn),
        el('td', { class: 'vt__uk' }, it.uk),
        status,
        el('td', { class: 'vt__ex' }, it.ex || ''),
      );
      rows.push({ tr, de: it.de, status });
      return tr;
    });

    const counter = el('span', { class: 'pill' });

    const playBtn = ttsSupported
      ? el('button', { class: 'btn btn--soft btn--sm', type: 'button' }, '🔊 Прослухати тему')
      : null;
    let playing = false;
    playBtn?.addEventListener('click', () => {
      if (playing) { stopSpeech(); return; }
      speakDialogue(group.items.map(i => ({ de: cleanWord(i.de) })), {
        rate: 0.98, pauseScale: 1.4,
        onStart: () => { playing = true; playBtn.textContent = '⏹ Зупинити'; },
        onEnd:   () => { playing = false; playBtn.textContent = '🔊 Прослухати тему'; },
      });
    });

    const section = el('section', { class: 'vocab-group' },
      el('div', { class: 'vocab-group__head' },
        el('h3', {}, `${gi + 1}. ${group.group}`), counter, playBtn),
      group.note ? el('p', { class: 'vocab-group__note' }, group.note) : null,
      el('div', { class: 'tbl-scroll' },
        el('table', { class: 'tbl vt' },
          el('thead', {}, el('tr', {},
            el('th', {}, '#'), el('th', {}, 'Deutsch'),
            el('th', {}, 'Українською'), el('th', {}, 'Стан'), el('th', {}, 'Примітка'))),
          el('tbody', {}, trs))),
    );
    groupCounters.set(group.group, { el: counter, rows, section });
    box.append(section);
  });

  refresh();
  return box;
}

/** Вправи зі словника: раунд із 12 завдань, перевірка одразу всіх, оцінка йде в повторення. */
function buildVocabQuiz(groups, map, onChange) {
  const wrap = el('div', { class: 'card stack' });

  // теми з пар і стрілок (groß / klein, kriegen ↔ erhalten) завдань не дають —
  // не показуємо їх у списку, щоб користувач не впирався в порожній раунд
  const usableThemes = quizableThemes(groups);
  const themeSel = el('select', { class: 'flash__select', 'aria-label': 'Тема' },
    el('option', { value: 'all' }, 'Усі теми'),
    usableThemes.map(i => el('option', { value: String(i) }, `${i + 1}. ${groups[i].group}`)));
  const sizeSel = el('select', { class: 'flash__select', 'aria-label': 'Скільки завдань' },
    [8, 12, 20].map(n => el('option', { value: String(n), selected: n === 12 ? 'selected' : null },
      `${n} завдань`)));
  const startBtn = el('button', { class: 'btn', type: 'button' }, 'Новий раунд');

  const body = el('div', { class: 'stack' });
  const scoreBox = el('div');

  function run() {
    stopSpeech();
    scoreBox.replaceChildren();
    const quiz = buildQuizData(groups, map, {
      size: Number(sizeSel.value),
      groupIndex: themeSel.value === 'all' ? null : Number(themeSel.value),
      withAudio: ttsSupported,
    });

    if (!quiz.length) {
      body.replaceChildren(el('div', { class: 'card center muted' },
        'У цій темі замало слів, придатних для вправ. Оберіть іншу тему.'));
      return;
    }

    const set = renderExerciseSet(quiz, { instant: false });
    const checkBtn = el('button', { class: 'btn', type: 'button' }, '✓ Перевірити раунд');
    const status = el('span', { class: 'grow muted' }, `Завдань: ${quiz.length}`);

    checkBtn.addEventListener('click', () => {
      let ok = 0;
      set.items.forEach((item, i) => {
        const correct = item.check();
        if (correct) { ok++; srsPromote(map, quiz[i].word); }
        else srsDemote(map, quiz[i].word);
      });
      onChange();
      checkBtn.disabled = true;
      const pct = Math.round(ok / quiz.length * 100);
      scoreBox.replaceChildren(el('div', { class: 'vquiz__score' },
        el('strong', {}, `${ok} з ${quiz.length} (${pct} %)`),
        el('p', { class: 'muted', style: 'margin:.3rem 0 0' },
          ok === quiz.length
            ? 'Усі слова піднялися на коробку вище.'
            : `Правильні слова піднялися на коробку вище, решта ${quiz.length - ok} повернуться завтра.`)));
      scoreBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });

    body.replaceChildren(set.el,
      el('div', { class: 'test-bar' }, status, checkBtn));
  }

  startBtn.addEventListener('click', run);
  [themeSel, sizeSel].forEach(c => c.addEventListener('change', run));

  wrap.append(
    el('div', { class: 'flash__bar' }, themeSel, sizeSel, el('span', { class: 'grow' }), startBtn),
    el('p', { class: 'muted', style: 'margin:0;font-size:.85rem' },
      'Раунд починається зі слів, які сьогодні на повторення, далі йдуть нові. ' +
      'Відволікачі у варіантах беруться з тієї самої теми — щоб вибір не був надто легким.'),
    body, scoreBox);

  run();
  return wrap;
}

/** Речення з новим словом: власна фраза замість вибору з готового — і перевірка тексту. */
function buildSentencePractice(groups, map, levelId, onChange) {
  const wrap = el('div', { class: 'card stack' });

  const themeSel = el('select', { class: 'flash__select', 'aria-label': 'Тема' },
    el('option', { value: 'all' }, 'Усі теми'),
    groups.map((g, i) => el('option', { value: String(i) }, `${i + 1}. ${g.group}`)));
  const newBtn = el('button', { class: 'btn', type: 'button' }, 'Нові слова');

  const counter = el('span', { class: 'flash__counter' });
  const barFill = el('span', { class: 'flash__progress__fill' });
  const bar = el('div', { class: 'flash__progress', role: 'presentation' }, barFill);
  const scoreTag = el('span', { class: 'tag' });

  const wordBox = el('div', { class: 'vsent__word' });
  const ta = el('textarea', { class: 'write', rows: '3', spellcheck: 'true', lang: 'de',
    placeholder: 'Напишіть одне речення з цим словом…' });
  const report = el('div', { class: 'report' });
  const modelBox = el('div');

  const prevBtn  = el('button', { class: 'btn btn--ghost', type: 'button', title: 'Alt + ←' }, '←');
  const nextBtn  = el('button', { class: 'btn btn--ghost', type: 'button', title: 'Alt + →' }, '→');
  const checkBtn = el('button', { class: 'btn', type: 'button' }, '✓ Перевірити');
  const speakBtn = el('button', { class: 'btn btn--ghost btn--sm', type: 'button' }, '🔊 Вимова');

  // Чернетки живуть по кожному слову окремо: пішли назад — текст на місці.
  let list = [], pos = 0, drafts = [], solved = [];

  function load() {
    list = pickForWriting(groups, map, {
      count: 5,
      groupIndex: themeSel.value === 'all' ? null : Number(themeSel.value),
    });
    pos = 0;
    drafts = list.map(() => '');
    solved = list.map(() => false);
    show();
  }

  function okBox(it) {
    return el('div', { class: 'vsent__ok' },
      el('strong', {}, '✓ Слово зараховано'),
      el('p', { class: 'muted', style: 'margin:.3rem 0 0' },
        'Слово піднялося на коробку вище — воно повернеться на повторення пізніше.'),
      it.ex ? el('p', { style: 'margin:.5rem 0 0' },
        el('span', { class: 'muted' }, 'Приклад зі словника: '),
        el('span', { class: 'de' }, it.ex)) : null);
  }

  /** Лічильник зарахованих слів і смужка — оновлюються й одразу після
      вдалої перевірки, не чекаючи автопереходу. */
  function drawScore() {
    const ok = solved.filter(Boolean).length;
    barFill.style.width = list.length ? `${Math.round((ok / list.length) * 100)}%` : '0%';
    scoreTag.textContent = list.length ? `Зараховано: ${ok} з ${list.length}` : '';
    scoreTag.className = 'tag' + (list.length && ok === list.length ? ' tag--accent' : '');
    return ok;
  }

  function show() {
    report.replaceChildren();
    modelBox.replaceChildren();

    if (!list.length) {
      counter.textContent = '0 / 0';
      drawScore();
      wordBox.replaceChildren(el('div', { class: 'flash__done' },
        el('strong', {}, 'У цій темі немає слів для речень'),
        el('p', { class: 'muted' },
          'Оберіть іншу тему — у цій самі пари й схеми, з яких речення не складеш.')));
      [ta, checkBtn, speakBtn, prevBtn, nextBtn].forEach(b => b.disabled = true);
      return;
    }

    const okCount = drawScore();
    [ta, speakBtn].forEach(b => b.disabled = false);
    prevBtn.disabled = pos === 0;
    nextBtn.disabled = pos === list.length - 1;
    counter.textContent = `${pos + 1} / ${list.length}`;

    const it = list[pos];
    wordBox.replaceChildren(
      el('span', { class: 'vsent__de de' }, cleanWord(it.de)),
      el('span', { class: 'vsent__uk' }, it.uk),
      it.ex ? el('span', { class: 'vsent__note muted' }, it.ex) : null,
      el('span', { class: 'tag' }, it.group),
      solved[pos] ? el('span', { class: 'vsent__mark' }, '✓ зараховано') : null,
    );

    ta.value = drafts[pos] || '';
    checkBtn.disabled = solved[pos];
    if (solved[pos]) modelBox.replaceChildren(okBox(it));
    else if (okCount === list.length) modelBox.replaceChildren(roundDone());
    ta.focus();
  }

  function roundDone() {
    return el('div', { class: 'vsent__ok' },
      el('strong', {}, 'Раунд завершено 🎉'),
      el('p', { class: 'muted', style: 'margin:.3rem 0 0' },
        'Усі п’ять слів ужито в реченнях. Натисніть «Нові слова» — або поверніться стрілками й перечитайте свої речення.'));
  }

  /** Перехід між словами: спершу зберігаємо те, що вже написано. */
  function go(step) {
    if (!list.length) return;
    const next = pos + step;
    if (next < 0 || next >= list.length) return;
    drafts[pos] = ta.value;
    pos = next;
    show();
  }

  function check() {
    const text = ta.value.trim();
    if (!text) return;
    const it = list[pos];
    drafts[pos] = ta.value;

    // жанр «Satz» навмисне не схожий на лист — тому перевірка не вимагає
    // звертання й прощання, а дивиться лише на саме речення
    const res = checkWriting(text, { exam: 'Satz', title: 'Satz mit neuem Wort', minWords: 4 },
      { levelId, moduleId: 'satz', vocab: groups });

    // Для окремого речення дві базові вимоги суворіші, ніж у листі:
    // велика літера на початку й розділовий знак у кінці.
    if (!/^[A-ZÄÖÜ]/.test(text)) {
      // перевіряльник уже має таке попередження — не дублюємо, а піднімаємо до помилки
      const existing = res.issues.find(i => i.title === 'Речення починається з малої літери');
      if (existing) existing.kind = 'error';
      else res.issues.unshift({ kind: 'error', title: 'Речення починається з малої літери',
        detail: 'Кожне німецьке речення починається з великої літери — так само, як українське.' });
    }
    if (!/[.!?]$/.test(text)) {
      res.issues.unshift({ kind: 'error', title: 'У кінці немає розділового знака',
        detail: 'Поставте крапку, знак питання або оклику — інакше це не речення, а фрагмент.' });
    }

    const used = containsWord(text, it.de);
    if (!used) {
      res.issues.unshift({
        kind: 'error', title: 'У реченні немає самого слова',
        detail: `Завдання — ужити «${cleanWord(it.de)}». Перевірте написання: саме це слово (у будь-якій формі) має бути в реченні.`,
      });
    }

    report.replaceChildren(renderReport(res));
    const clean = used && !res.issues.some(i => i.kind === 'error');
    if (clean && !solved[pos]) { solved[pos] = true; srsPromote(map, it.de); onChange(); }
    drawScore();

    if (clean) {
      // Слово зараховано: самі переходимо далі, але лише якщо попереду є що робити.
      const nextUnsolved = solved.findIndex((v, i) => !v && i > pos);
      const anyUnsolved = solved.findIndex(v => !v);
      checkBtn.disabled = true;
      modelBox.replaceChildren(okBox(it));
      const target = nextUnsolved !== -1 ? nextUnsolved : anyUnsolved;
      if (target !== -1) setTimeout(() => { pos = target; show(); }, 1600);
      else setTimeout(show, 1600);
    } else {
      modelBox.replaceChildren(el('div', { class: 'vsent__again' },
        el('strong', {}, 'Спробуйте ще раз'),
        el('p', { class: 'muted', style: 'margin:.3rem 0 0' },
          'Виправте помічене вище й перевірте знову. Коробка не змінилася.'),
        it.ex ? el('p', { style: 'margin:.5rem 0 0' },
          el('span', { class: 'muted' }, 'Приклад зі словника: '),
          el('span', { class: 'de' }, it.ex)) : null));
    }
  }

  checkBtn.addEventListener('click', check);
  prevBtn.addEventListener('click', () => go(-1));
  nextBtn.addEventListener('click', () => go(1));
  speakBtn.addEventListener('click', () => { if (list[pos]) speak(cleanWord(list[pos].de)); });
  newBtn.addEventListener('click', load);
  themeSel.addEventListener('change', load);
  ta.addEventListener('input', () => { drafts[pos] = ta.value; });
  ta.addEventListener('keydown', e => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) { e.preventDefault(); check(); return; }
    // Прості стрілки лишаємо курсору — гортаємо з Alt.
    if (e.altKey && e.key === 'ArrowRight') { e.preventDefault(); go(1); }
    if (e.altKey && e.key === 'ArrowLeft')  { e.preventDefault(); go(-1); }
  });

  wrap.append(
    el('div', { class: 'flash__bar' }, themeSel, el('span', { class: 'grow' }), scoreTag, counter, newBtn),
    bar,
    el('p', { class: 'muted', style: 'margin:0;font-size:.85rem' },
      'Складіть власне речення зі словом — це найкоротший шлях від «упізнаю» до «вживаю». ' +
      'Текст перевіряється тими самими правилами, що й у модулі письма: великі літери в іменниках, ' +
      'кома перед підрядним, порядок слів. Вдале речення піднімає слово на коробку вище.'),
    wordBox, ta,
    el('div', { class: 'ex__actions' }, prevBtn, checkBtn, nextBtn, ttsSupported ? speakBtn : null),
    el('p', { class: 'muted', style: 'margin:0;font-size:.82rem' },
      'Стрілки ← та → гортають між словами — написане не губиться. '
      + 'З клавіатури: Alt + ← або Alt + →, перевірка — Ctrl (⌘) + Enter.'),
    report, modelBox);

  load();
  return wrap;
}

/** Флеш-картки: фіксована колода, вільна навігація, оцінка веде інтервальне повторення. */
function buildFlashcards(groups, map, levelId, onChange) {
  const wrap = el('div', { class: 'card stack flash-deck' });
  const allWords = groups.flatMap(g => g.items.map(it => ({ ...it, group: g.group })));
  const stars = loadStars(levelId);

  const themeSel = el('select', { class: 'flash__select', 'aria-label': 'Тема' },
    el('option', { value: 'all' }, `Усі теми (${allWords.length})`),
    groups.map((g, i) => el('option', { value: String(i) }, `${i + 1}. ${g.group} (${g.items.length})`)));

  const dirSel = el('select', { class: 'flash__select', 'aria-label': 'Напрямок' },
    el('option', { value: 'de' }, 'Німецька → українська'),
    el('option', { value: 'uk' }, 'Українська → німецька'));

  const modeSel = el('select', { class: 'flash__select', 'aria-label': 'Які слова' },
    el('option', { value: 'due' }, 'До повторення сьогодні'),
    el('option', { value: 'new' }, 'Тільки нові'),
    el('option', { value: 'hard' }, 'Складні (коробки 1–2)'),
    el('option', { value: 'star' }, '⭐ Тільки з зіркою'),
    el('option', { value: 'all' }, 'Усі слова'));

  const sizeSel = el('select', { class: 'flash__select', 'aria-label': 'Розмір підходу' },
    el('option', { value: '15' }, 'Підхід: 15 карток'),
    el('option', { value: '30', selected: 'selected' }, 'Підхід: 30 карток'),
    el('option', { value: '0' }, 'Підхід: усі одразу'));

  const shuffleBox = el('input', { type: 'checkbox', checked: 'checked' });
  const autoBox = el('input', { type: 'checkbox', checked: 'checked' });

  const counter = el('span', { class: 'flash__counter' });
  const statKnown = el('span', { class: 'pill pill--ok' });
  const statLeft  = el('span', { class: 'pill' });
  const statStars = el('span', { class: 'pill' });

  /* Смужка з двох частин, як у Quizlet: зелена — вивчене, бурштинова — у роботі. */
  const barKnown = el('span', { class: 'flash__seg flash__seg--known' });
  const barLearn = el('span', { class: 'flash__seg flash__seg--learn' });
  const bar = el('div', { class: 'flash__progress flash__progress--split', role: 'presentation' },
    barKnown, barLearn);

  const theme = el('span', { class: 'flash__theme' });
  const mark  = el('span', { class: 'flash__mark' });
  const starBtn = el('button', { class: 'flash__star', type: 'button',
    'aria-label': 'Позначити зіркою', title: 'Зірочка (клавіша S)' }, '☆');

  /* Одна грань, вміст якої підмінюється. Двошарова конструкція з обертанням
     тут не працює: досить одного transform на будь-якому з батьків, щоб
     3D-контекст сплющився, і перегортання тихо зникає. */
  const face = el('div', { class: 'flash__face' });
  const inner = el('div', { class: 'flash__inner' }, face);
  const hint  = el('div', { class: 'flash__hint' });
  const card  = el('div', { class: 'flash__card', tabindex: '0', role: 'button' },
    mark, theme, starBtn, inner, hint);
  const stage = el('div', { class: 'flash__stage' }, card);

  const prevBtn  = el('button', { class: 'btn btn--ghost', type: 'button', title: 'Стрілка ліворуч' }, '←');
  const nextBtn  = el('button', { class: 'btn btn--ghost', type: 'button', title: 'Стрілка праворуч' }, '→');
  const knowBtn  = el('button', { class: 'btn btn--soft', type: 'button' }, '✓ Знаю');
  const againBtn = el('button', { class: 'btn btn--ghost', type: 'button' }, '↻ Ще вчу');
  const speakBtn = el('button', { class: 'btn btn--ghost btn--sm', type: 'button' }, '🔊 Вимова');
  const exBtn    = el('button', { class: 'btn btn--ghost btn--sm', type: 'button' }, '🔊 Приклад');
  const playBtn  = el('button', { class: 'btn btn--ghost btn--sm', type: 'button' }, '▶ Автогра');
  const fullBtn  = el('button', { class: 'btn btn--ghost btn--sm', type: 'button' }, '⛶ На весь екран');

  const controls = [prevBtn, againBtn, knowBtn, nextBtn];

  let deck = [], pos = 0, flipped = false, done = false;
  let seen = 0, right = 0;
  let auto = null;
  const repeated = new Set();

  function pool() {
    const pick = themeSel.value === 'all'
      ? allWords
      : allWords.filter(w => w.group === groups[Number(themeSel.value)].group);
    const mode = modeSel.value;
    return pick.filter(w => {
      const b = srsBox(map, w.de);
      if (mode === 'all')  return true;
      if (mode === 'new')  return b === 0;
      if (mode === 'hard') return b === 1 || b === 2;
      if (mode === 'star') return stars.has(w.de);
      return b === 0 || srsIsDue(map, w.de);
    });
  }

  function build() {
    stopAuto();
    deck = pool();
    if (shuffleBox.checked) {
      for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
      }
    }
    const size = Number(sizeSel.value);
    if (size > 0) deck = deck.slice(0, size);
    pos = 0; done = false; seen = 0; right = 0;
    repeated.clear();
    render();
  }

  function drawStats() {
    const kn = deck.filter(w => srsIsKnown(map, w.de)).length;
    const learn = deck.filter(w => !srsIsKnown(map, w.de) && srsBox(map, w.de) > 0).length;
    statKnown.textContent = `Вивчено в колоді: ${kn}`;
    statLeft.textContent = `Лишилось: ${Math.max(0, deck.length - kn)}`;
    statStars.textContent = `⭐ ${stars.size}`;
    statStars.hidden = !stars.size;
    const n = deck.length || 1;
    barKnown.style.width = `${Math.round((kn / n) * 100)}%`;
    barLearn.style.width = `${Math.round((learn / n) * 100)}%`;
  }

  function render() {
    drawStats();
    card.classList.toggle('is-done', done || !deck.length);

    if (!deck.length || done) {
      counter.textContent = deck.length ? `${deck.length} / ${deck.length}` : '0 / 0';
      mark.textContent = '';
      theme.textContent = '';
      starBtn.hidden = true;
      card.classList.remove('is-known');
      hint.textContent = '';
      controls.forEach(b => b.disabled = true);
      [speakBtn, exBtn, playBtn].forEach(b => b.disabled = true);

      if (!deck.length) {
        face.replaceChildren(el('div', { class: 'flash__done' },
          el('strong', {}, 'На сьогодні тут порожньо 🎉'),
          el('p', { class: 'muted' },
            modeSel.value === 'due'
              ? 'Усе, що мало повернутися сьогодні, вже повторено. Оберіть «тільки нові» або «усі слова».'
              : modeSel.value === 'star'
                ? 'Ви ще не позначили жодного слова зіркою. Натисніть ☆ на картці — і слово потрапить сюди.'
                : 'Оберіть іншу тему або інший режим.')));
        return;
      }

      const again = el('button', { class: 'btn btn--soft', type: 'button' }, '↻ Ще один підхід');
      again.addEventListener('click', build);
      face.replaceChildren(el('div', { class: 'flash__done' },
        el('strong', {}, 'Підхід завершено 👏'),
        el('p', { class: 'flash__summary' },
          `Ви переглянули ${seen} ${plural(seen, 'картку', 'картки', 'карток')}, `
          + `з них ${right} позначено «знаю».`),
        el('p', { class: 'muted' },
          'Слова з «ще вчу» повернуться в наступному підході, а «знаю» — за розкладом повторень.'),
        again));
      return;
    }

    controls.forEach(b => b.disabled = false);
    [speakBtn, exBtn, playBtn].forEach(b => b.disabled = false);
    prevBtn.disabled = pos === 0;
    nextBtn.disabled = pos === deck.length - 1;

    const it = deck[pos];
    const b = srsBox(map, it.de);
    card.classList.toggle('is-known', srsIsKnown(map, it.de));
    counter.textContent = `${pos + 1} / ${deck.length}`;
    // На картці видно не лише коробку, а й коли слово повернеться саме.
    const st = wordStatus(map, it.de);
    mark.textContent = repeated.has(it.de) ? 'повтор'
      : b ? `коробка ${b} з 5 · ${whenBack(st.days)}`
      : 'нове слово';
    theme.textContent = it.group || '';
    starBtn.hidden = false;
    drawStar();
    exBtn.hidden = !it.ex;

    showFront(false);
  }

  function drawStar() {
    const on = deck.length && !done && stars.has(deck[pos].de);
    starBtn.textContent = on ? '★' : '☆';
    starBtn.classList.toggle('is-on', !!on);
  }

  /* Перегортання: коротке затухання грані, підміна вмісту, поява назад.
     Тримаємося opacity — вона на цій сторінці працює скрізь і завжди. */
  let turnTimer = null;
  function paint(toBack) {
    const it = deck[pos];
    if (!toBack) {
      face.replaceChildren(
        el('span', { class: 'flash__front' + (dirSel.value === 'de' ? ' de' : '') },
          dirSel.value === 'de' ? cleanWord(it.de) : it.uk));
      return;
    }
    face.replaceChildren(...[
      el('span', { class: 'flash__front' + (dirSel.value === 'de' ? ' de' : '') },
        dirSel.value === 'de' ? it.de : it.uk),
      el('span', { class: 'flash__back' + (dirSel.value === 'uk' ? ' de' : '') },
        dirSel.value === 'de' ? it.uk : it.de),
      it.ex ? el('span', { class: 'flash__ex' }, it.ex) : null,
    ].filter(Boolean));
  }

  function setSide(toBack, animate) {
    clearTimeout(turnTimer);
    if (!animate) {
      face.classList.remove('is-fading');
      paint(toBack);
      return;
    }
    face.classList.add('is-fading');
    turnTimer = setTimeout(() => {
      paint(toBack);
      face.classList.remove('is-fading');
    }, 130);
  }

  function showFront(animate) {
    if (!deck.length || done) return;
    flipped = false;
    setSide(false, animate);
    hint.textContent = 'Картка або пробіл — перевернути. Свайп: ← ще вчу, → знаю';
    if (dirSel.value === 'de' && autoBox.checked && ttsSupported) speak(cleanWord(deck[pos].de));
  }

  function showBack(animate = true) {
    if (!deck.length || done) return;
    flipped = true;
    setSide(true, animate);
    hint.textContent = 'Знаєте це слово? Натисніть ще раз, щоб сховати переклад';
    if (dirSel.value === 'uk' && autoBox.checked && ttsSupported) speak(cleanWord(deck[pos].de));
  }

  function flip() { if (deck.length && !done) flipped ? showFront(true) : showBack(true); }

  function grade(good) {
    if (!deck.length || done) return;
    const it = deck[pos];
    good ? srsPromote(map, it.de) : srsDemote(map, it.de);
    seen++;
    if (good) right++;
    // «Ще вчу» повертає слово в кінець колоди — один раз, щоб підхід не став нескінченним.
    if (!good && !repeated.has(it.de)) { repeated.add(it.de); deck.push(it); }
    onChange();
    stage.classList.add(good ? 'is-swipe-right' : 'is-swipe-left');
    setTimeout(() => {
      stage.classList.remove('is-swipe-right', 'is-swipe-left');
      if (pos < deck.length - 1) pos++;
      else done = true;
      render();
    }, 180);
  }

  function move(step) {
    if (!deck.length || done) return;
    const next = pos + step;
    if (next < 0 || next >= deck.length) return;
    pos = next;
    render();
  }

  /* ── автогра: перевертає картку, потім переходить далі ──────────────── */
  function stopAuto() {
    if (!auto) return;
    clearInterval(auto);
    auto = null;
    playBtn.textContent = '▶ Автогра';
    playBtn.classList.remove('btn--active');
  }

  function startAuto() {
    let phase = 0;
    playBtn.textContent = '⏸ Пауза';
    playBtn.classList.add('btn--active');
    auto = setInterval(() => {
      if (!deck.length || done) { stopAuto(); return; }
      if (phase === 0) { showBack(); phase = 1; return; }
      phase = 0;
      if (pos < deck.length - 1) move(1);
      else { done = true; render(); stopAuto(); }
    }, 2600);
  }

  card.addEventListener('click', e => {
    if (e.target === starBtn || starBtn.contains(e.target)) return;
    flip();
  });

  starBtn.addEventListener('click', e => {
    e.stopPropagation();
    if (!deck.length || done) return;
    toggleStar(levelId, stars, deck[pos].de);
    drawStar();
    drawStats();
  });

  // Клавіші працюють, поки блок карток на екрані, а не лише коли фокус на самій картці.
  const onKey = e => {
    if (!wrap.isConnected || wrap.closest('[hidden]')) return;
    const t = e.target;
    if (t && typeof t.matches === 'function'
        && (t.matches('input, textarea, select, button') || t.isContentEditable)) return;
    const act = { ' ': 'flip', Enter: 'know', ArrowRight: 'next', ArrowLeft: 'prev',
      Backspace: 'again', s: 'star', S: 'star', і: 'star', ы: 'star',
      f: 'speak', F: 'speak', а: 'speak' }[e.key];
    if (!act) return;
    e.preventDefault();
    if (act !== 'flip') stopAuto();
    if (act === 'flip')  flip();
    if (act === 'know')  flipped ? grade(true) : flip();
    if (act === 'again') grade(false);
    if (act === 'next')  move(1);
    if (act === 'prev')  move(-1);
    if (act === 'star')  starBtn.click();
    if (act === 'speak' && deck.length && !done) speak(cleanWord(deck[pos].de));
  };
  document.addEventListener('keydown', onKey);

  /* ── свайп сортує картку, як у Quizlet: ліворуч «ще вчу», праворуч «знаю» ── */
  let x0 = null, y0 = null, dragging = false;
  card.addEventListener('touchstart', e => {
    x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; dragging = true; stopAuto();
  }, { passive: true });
  card.addEventListener('touchmove', e => {
    if (!dragging) return;
    const dx = e.touches[0].clientX - x0;
    const dy = e.touches[0].clientY - y0;
    if (Math.abs(dx) < Math.abs(dy)) return;
    stage.style.transform = `translateX(${dx * 0.4}px) rotate(${dx * 0.02}deg)`;
  }, { passive: true });
  card.addEventListener('touchend', e => {
    if (!dragging) return;
    dragging = false;
    stage.style.transform = '';
    const dx = e.changedTouches[0].clientX - x0;
    const dy = e.changedTouches[0].clientY - y0;
    x0 = null;
    if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy)) grade(dx > 0);
  }, { passive: true });

  prevBtn.addEventListener('click', () => { stopAuto(); move(-1); });
  nextBtn.addEventListener('click', () => { stopAuto(); move(1); });
  knowBtn.addEventListener('click', () => { stopAuto(); flipped ? grade(true) : flip(); });
  againBtn.addEventListener('click', () => { stopAuto(); grade(false); });
  speakBtn.addEventListener('click', () => { if (deck.length && !done) speak(cleanWord(deck[pos].de)); });
  exBtn.addEventListener('click', () => { if (deck.length && !done && deck[pos].ex) speak(deck[pos].ex); });
  playBtn.addEventListener('click', () => { auto ? stopAuto() : startAuto(); });

  fullBtn.addEventListener('click', () => {
    if (document.fullscreenElement) { document.exitFullscreen?.(); return; }
    wrap.requestFullscreen?.().catch(() => { /* браузер відмовив — не страшно */ });
  });
  document.addEventListener('fullscreenchange', () => {
    const on = document.fullscreenElement === wrap;
    wrap.classList.toggle('is-full', on);
    fullBtn.textContent = on ? '⛶ Звичайний вигляд' : '⛶ На весь екран';
  });

  [themeSel, dirSel, modeSel, sizeSel, shuffleBox].forEach(c => c.addEventListener('change', build));

  wrap.append(
    el('div', { class: 'flash__bar' },
      themeSel, dirSel, modeSel, sizeSel,
      el('label', { class: 'flash__check' }, shuffleBox, ' перемішати'),
      ttsSupported ? el('label', { class: 'flash__check' }, autoBox, ' озвучувати') : null,
      el('span', { class: 'grow' }), counter),
    bar,
    stage,
    el('div', { class: 'flash__actions' }, prevBtn, againBtn, knowBtn, nextBtn),
    el('div', { class: 'flash__stats' },
      statKnown, statLeft, statStars, el('span', { class: 'grow' }),
      playBtn, fullBtn,
      ttsSupported ? speakBtn : null, ttsSupported ? exBtn : null),
    el('p', { class: 'muted flash__keys', style: 'margin:0;font-size:.82rem' },
      'Клавіші: пробіл — перевернути, Enter — «знаю», Backspace — «ще вчу», ← та → — гортати, '
      + 'S — зірочка, F — вимова. На телефоні гортайте картку пальцем: ліворуч — «ще вчу», праворуч — «знаю».'),
  );

  build();
  return wrap;
}

/** Рахує опрацьовані завдання набору й віддає їх назовні.
    Слухаємо click/change на контейнері: самі кнопки «Перевірити» лежать
    усередині карток, тож окремо підписуватися на кожну не треба. */
function trackAnswered(root, items, save) {
  if (!items.length) return;
  let last = -1;
  const refresh = () => {
    const done = items.filter(i => i.isAnswered()).length;
    if (done === last) return;
    last = done;
    save(done, items.length);
  };
  root.addEventListener('click', () => setTimeout(refresh, 0));
  root.addEventListener('change', () => setTimeout(refresh, 0));
}

/** Мовлення: картка завдання, таймери підготовки й відповіді,
    власний запис у браузері та зразок із озвученням. */
function renderSpeaking(items, meta) {
  const box = el('div', { class: 'stack' },
    el('div', { class: 'section-note' },
      'Це найважча навичка для самостійного вивчення, тому працюйте вголос. '
      + 'Прочитайте картку, увімкніть таймер підготовки, а потім говоріть — без пауз на роздуми. '
      + 'Запис ведеться лише у вашому браузері: він нікуди не надсилається і зникає, щойно ви закриєте сторінку.'));

  items.forEach((task, ti) => {
    const card = el('section', { class: 'writing-card' },
      el('span', { class: 'tag tag--accent' }, task.exam),
      el('h3', { style: 'margin-top:.6rem' }, `${task.title} — ${task.titleUk}`),
      el('p', { class: 'muted' }, task.instruction),
    );

    if (task.card) {
      card.append(el('div', { class: 'prompt sprech-card' },
        el('strong', {}, task.card.heading),
        el('ul', {}, task.card.items.map(i => el('li', {}, i))),
        task.card.note ? el('p', { class: 'muted', style: 'margin-bottom:0' }, task.card.note) : null));
    }

    /* ── таймери ─────────────────────────────────────────────────── */
    const clock = el('span', { class: 'sprech-clock' }, '—');
    const phase = el('strong', {}, 'Готові?');
    let timer = null;

    const run = (seconds, label, done) => {
      clearInterval(timer);
      let left = seconds;
      phase.textContent = label;
      const tick = () => {
        const m = Math.floor(left / 60), sec = left % 60;
        clock.textContent = `${m}:${String(sec).padStart(2, '0')}`;
        clock.classList.toggle('is-low', left <= 10);
        if (left <= 0) { clearInterval(timer); done?.(); return; }
        left--;
      };
      tick();
      timer = setInterval(tick, 1000);
    };

    const prepBtn = task.prep
      ? el('button', { class: 'btn btn--ghost btn--sm', type: 'button' }, `⏳ Підготовка ${Math.round(task.prep / 60) || 1} хв`)
      : null;
    const speakStart = el('button', { class: 'btn btn--sm', type: 'button' }, '▶ Почати відповідь');
    const stopBtn = el('button', { class: 'btn btn--ghost btn--sm', type: 'button' }, '⏹ Стоп');

    prepBtn?.addEventListener('click', () => run(task.prep, 'Підготовка', () => {
      phase.textContent = 'Час підготовки вичерпано — говоріть';
    }));
    speakStart.addEventListener('click', () => run(task.speak, 'Ваша відповідь', () => {
      phase.textContent = 'Час вийшов';
    }));
    stopBtn.addEventListener('click', () => { clearInterval(timer); phase.textContent = 'Зупинено'; });

    card.append(el('div', { class: 'sprech-bar' },
      phase, el('span', { class: 'grow' }), clock,
      prepBtn, speakStart, stopBtn));

    /* ── власний запис ───────────────────────────────────────────── */
    const canRecord = !!(navigator.mediaDevices?.getUserMedia && window.MediaRecorder);
    const player = el('div', { class: 'sprech-rec' });
    if (canRecord) {
      const recBtn = el('button', { class: 'btn btn--soft btn--sm', type: 'button' }, '🎙 Записати себе');
      let rec = null, chunks = [], url = null;

      recBtn.addEventListener('click', async () => {
        if (rec && rec.state === 'recording') { rec.stop(); return; }
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
          chunks = [];
          rec = new MediaRecorder(stream);
          rec.addEventListener('dataavailable', e => { if (e.data.size) chunks.push(e.data); });
          rec.addEventListener('stop', () => {
            stream.getTracks().forEach(t => t.stop());
            if (url) URL.revokeObjectURL(url);
            url = URL.createObjectURL(new Blob(chunks, { type: rec.mimeType || 'audio/webm' }));
            player.replaceChildren(
              el('audio', { controls: 'controls', src: url }),
              el('span', { class: 'muted', style: 'font-size:.8rem' },
                'Запис лише у вашому браузері. Послухайте себе: чи не було довгих пауз і чи звучите ви впевнено?'));
            recBtn.textContent = '🎙 Записати ще раз';
            recBtn.classList.remove('is-rec');
          });
          rec.start();
          recBtn.textContent = '⏹ Зупинити запис';
          recBtn.classList.add('is-rec');
        } catch {
          player.replaceChildren(el('span', { class: 'muted' },
            'Браузер не дав доступу до мікрофона. Це не заважає виконати завдання — просто говоріть уголос.'));
        }
      });
      card.append(el('div', { class: 'ex__actions' }, recBtn), player);
    } else {
      card.append(el('p', { class: 'muted', style: 'font-size:.85rem' },
        'Ваш браузер не вміє записувати звук — просто говоріть уголос і оцініть себе за критеріями нижче.'));
    }

    /* ── фрази ───────────────────────────────────────────────────── */
    if (task.phrases?.length) {
      card.append(el('details', { class: 'transcript', style: 'margin-top:1rem' },
        el('summary', {}, 'Корисні фрази (Redemittel)'),
        el('div', { class: 'transcript__body' },
          task.phrases.map(ph => el('p', { class: 'line' },
            el('span', {}, ph.de), el('span', { class: 'tr' }, ph.uk))))));
    }

    /* ── зразок ──────────────────────────────────────────────────── */
    const modelBody = el('div', { class: 'transcript__body' },
      el('p', { class: 'muted', style: 'margin-top:0' },
        'Спершу скажіть своє — і лише потім відкривайте зразок. Інакше ви запам’ятаєте чужі слова замість власних.'));

    if (task.modelLines) {
      modelBody.append(el('div', { class: 'model-answer' },
        task.modelLines.map(l => el('p', { class: 'line' },
          el('b', {}, l.speaker + ': '), el('span', {}, l.de),
          l.uk ? el('span', { class: 'tr' }, l.uk) : null))));
    } else {
      modelBody.append(el('div', { class: 'model-answer' }, task.model));
    }

    if (ttsSupported) {
      const playBtn = el('button', { class: 'btn btn--ghost btn--sm', type: 'button' }, '🔊 Прослухати зразок');
      playBtn.addEventListener('click', () => {
        const rate = { a1: 0.95, a2: 1.0, b1: 1.05, b2: 1.1, c1: 1.16 }[meta.id] ?? 1;
        if (task.modelLines) speakDialogue(task.modelLines, { rate, pauseScale: 1.2 });
        else speakDialogue([{ de: task.model }], { rate, pauseScale: 1.2 });
      });
      modelBody.append(el('div', { class: 'ex__actions' }, playBtn));
    }
    if (task.modelUk) modelBody.append(el('p', { class: 'muted' }, task.modelUk));

    card.append(el('details', { class: 'transcript transcript--model', style: 'margin-top:1rem' },
      el('summary', {}, '📄 Зразок відповіді'), modelBody));

    /* ── самоперевірка з підрахунком ─────────────────────────────── */
    if (task.checklist?.length) {
      const badge = el('span', { class: 'tag' }, `0 / ${task.checklist.length}`);
      const list = el('ul', { class: 'checklist' }, task.checklist.map(c => {
        const id = 'sp' + Math.random().toString(36).slice(2);
        return el('li', {}, el('input', { type: 'checkbox', id }), el('label', { for: id }, c));
      }));
      list.addEventListener('change', () => {
        const boxes = [...list.querySelectorAll('input')];
        const ok = boxes.filter(b => b.checked).length;
        badge.textContent = `${ok} / ${boxes.length}`;
        badge.className = 'tag' + (ok === boxes.length ? ' tag--accent' : '');
        prog.saveSkill(meta.id, 'sprechen', { done: ok === boxes.length ? ti + 1 : 0, total: items.length });
      });
      card.append(el('div', { style: 'margin-top:1rem' },
        el('div', { class: 'flash__bar' }, el('strong', {}, 'Критерії оцінювання:'),
          el('span', { class: 'grow' }), badge),
        list));
    }

    box.append(card);
  });

  return box;
}

/** Тексти для читання: сам текст, словничок і завдання. */
function renderReading(items, levelId) {
  const all = [];
  const box = el('div', { class: 'stack' },
    el('div', { class: 'section-note' },
      'Спершу прочитайте текст цілком, не зупиняючись на кожному слові, — і лише потім ' +
      'беріться до завдань. Незнайомі слова зібрані під текстом.'));

  items.forEach(t => {
    const card = el('section', { class: 'audio-card' },
      el('span', { class: 'tag tag--accent' }, t.exam),
      el('h3', { style: 'margin-top:.6rem' }, t.title),
      el('p', { class: 'muted' }, t.instruction),
      el('div', { class: 'reading-text', html: t.text }),
    );

    if (t.glossary?.length) {
      card.append(el('details', { class: 'transcript' },
        el('summary', {}, `Словничок до тексту (${t.glossary.length})`),
        el('div', { class: 'transcript__body' },
          el('div', { class: 'vocab-list' },
            t.glossary.map(([de, uk]) => el('div', { class: 'vocab-item' },
              el('span', { class: 'vocab-item__de' }, de),
              el('span', {}),
              el('span', { class: 'vocab-item__uk' }, uk))))),
      ));
    }

    const set = renderExerciseSet(t.tasks, { instant: true });
    all.push(...set.items);
    card.append(set.el);
    box.append(card);
  });

  if (levelId) trackAnswered(box, all, (done, total) => prog.saveSkill(levelId, 'lesen', { done, total }));
  return box;
}

/* ------------------------------------------------- рендер розділів ------ */

const RENDERERS = {

  grammar(mod) {
    return el('div', { class: 'stack' },
      mod.grammar.map(g => {
        const body = el('div', { html: g.html });
        glossTerms(body);           // німецькі терміни отримують переклад при першій появі
        return el('section', { class: 'gram' }, el('h3', {}, g.title), body);
      }),
    );
  },

  exercises(mod, meta, index) {
    const box = el('div', { class: 'stack' },
      el('div', { class: 'section-note' },
        'Виконуйте по порядку. Перевірка миттєва — після кожної спроби ви бачите правильну відповідь і пояснення.'),
    );
    const set = renderExerciseSet(mod.exercises, { instant: true });
    box.append(set.el);
    if (meta && index) {
      const before = prog.getExercises(prog.load(), meta.id, index);
      if (before?.done) {
        box.querySelector('.section-note').append(el('div', { style: 'margin-top:.5rem' },
          el('span', { class: 'tag tag--accent' },
            `Минулого разу опрацьовано ${before.done} з ${before.total}`)));
      }
      trackAnswered(box, set.items, (done, total) => prog.saveExercises(meta.id, index, { done, total }));
    }
    return box;
  },

  listening(mod, meta, _i, opts = {}) {
    const box = el('div', { class: 'stack' });
    const all = [];
    // Темп скрізь близький до людського — розтягнуті звуки якраз і звучать
    // машинно. Різницю між рівнями дають ПАУЗИ: на A1 вони майже вдвічі
    // довші, тож новачок встигає зрозуміти, а мовлення лишається живим.
    const LEVEL_RATE  = { a1: 0.95, a2: 1.00, b1: 1.05, b2: 1.10, c1: 1.16 };
    const LEVEL_PAUSE = { a1: 1.9,  a2: 1.6,  b1: 1.3,  b2: 1.1,  c1: 1.0 };
    const baseRate  = LEVEL_RATE[meta.id] ?? 1.0;
    const pauseScale = LEVEL_PAUSE[meta.id] ?? 1.2;

    if (!ttsSupported) {
      box.append(el('div', { class: 'no-tts' },
        'Ваш браузер не підтримує синтез мовлення. Спробуйте Chrome, Safari або Edge — тексти нижче можна читати вголос самостійно.'));
    }

    mod.listening.forEach((task, ti) => {
      const card = el('section', { class: 'audio-card' },
        el('span', { class: 'tag tag--accent' }, task.exam || 'Hörverstehen'),
        task.from ? el('span', { class: 'tag', style: 'margin-left:.4rem' }, task.from) : null,
        el('h3', { style: 'margin-top:.6rem' }, task.title),
        el('p', { class: 'muted' }, task.instruction),
      );

      let rate = baseRate;
      let playing = false;
      const playBtn = el('button', { class: 'play-btn', type: 'button', 'aria-label': 'Відтворити' }, '▶');
      const setIdle = () => { playing = false; playBtn.textContent = '▶'; playBtn.classList.remove('is-playing'); };
      const play = () => {
        if (playing) { stopSpeech(); setIdle(); return; }
        playing = true; playBtn.textContent = '⏹'; playBtn.classList.add('is-playing');
        speakDialogue(task.lines, { rate, pauseScale, onEnd: setIdle });
      };
      playBtn.addEventListener('click', play);

      // Швидкості рахуються від темпу рівня, а не від сталої величини.
      const speeds = [
        ['Повільніше', +(baseRate * 0.88).toFixed(2)],
        ['Природно', baseRate],
        ['Швидко', +(baseRate * 1.12).toFixed(2)],
      ];
      const speedBox = el('div', { class: 'speed-group' },
        speeds.map(([label, val]) => {
          const b = el('button', { type: 'button', 'aria-pressed': String(val === rate) }, label);
          b.addEventListener('click', () => {
            rate = val;
            speedBox.querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', String(x === b)));
            if (playing) { stopSpeech(); setIdle(); play(); }
          });
          return b;
        }));

      card.append(el('div', { class: 'player' },
        playBtn,
        el('div', { class: 'player__meta' },
          el('strong', {}, task.lines.length > 1
            ? `Діалог · ${task.lines.length} реплік · ${new Set(task.lines.map(l => l.speaker || '—')).size} голоси`
            : 'Текст'),
          pauseScale >= 1.5
            ? `Живий темп, але подовжені паузи між фразами — щоб на ${meta.code} встигати за думкою. Слухайте двічі, як на іспиті:`
            : `Темп і паузи як у природній розмові носіїв. Слухайте двічі, як на іспиті:`),
        speedBox,
      ));

      const tset = renderExerciseSet(task.tasks, { instant: true });
      all.push(...tset.items);
      card.append(tset.el);

      card.append(el('details', { class: 'transcript' },
        el('summary', {}, 'Транскрипт і переклад — відкривайте після відповідей'),
        el('div', { class: 'transcript__body' },
          task.lines.map(l => el('p', { class: 'line' },
            l.speaker ? el('b', {}, l.speaker + ': ') : null,
            el('span', {}, l.de),
            l.uk ? el('span', { class: 'tr' }, l.uk) : null,
          )),
        ),
      ));

      box.append(card);
    });

    if (opts.track) trackAnswered(box, all, (done, total) => prog.saveSkill(meta.id, 'hoeren', { done, total }));
    return box;
  },

  writing(mod, meta, _i, opts = {}) {
    const box = el('div', { class: 'stack' },
      el('div', { class: 'section-note' },
        'Напишіть свій текст і натисніть «Перевірити текст» — сайт знайде типові помилки й підкаже, ' +
        'що покращити. Приклад готового тексту є під кожним завданням. Нічого нікуди не надсилається.'));
    const written = new Set();

    mod.writing.forEach(task => {
      const card = el('section', { class: 'writing-card' },
        el('span', { class: 'tag tag--accent' }, task.exam),
        task.from ? el('span', { class: 'tag', style: 'margin-left:.4rem' }, task.from) : null,
        el('h3', { style: 'margin-top:.6rem' }, task.title),
      );

      card.append(el('div', { class: 'prompt' },
        el('p', { html: task.situation }),
        task.points?.length ? el('div', {},
          el('strong', {}, 'Schreiben Sie etwas zu diesen Punkten:'),
          el('ul', {}, task.points.map(p => el('li', {}, p))),
        ) : null,
      ));

      // lang="de" + spellcheck вмикає німецький словник самого браузера —
      // він підкреслює орфографію, чого правилами не зробиш.
      const ta = el('textarea', {
        class: 'write', placeholder: 'Schreiben Sie hier…',
        spellcheck: 'true', lang: 'de', autocapitalize: 'sentences',
      });
      const count = el('span', { class: 'count' }, '0 слів');
      ta.addEventListener('input', () => {
        const n = ta.value.trim() ? ta.value.trim().split(/\s+/).length : 0;
        count.textContent = `${n} ${plural(n, 'слово', 'слова', 'слів')}`;
        count.classList.toggle('ok', n >= task.minWords);
      });
      card.append(ta, el('div', { class: 'write-meta' },
        count, el('span', {}, `Орієнтир: від ${task.minWords} слів`)));

      /* ── перевірка тексту ─────────────────────────────────────────── */
      const report = el('div', { class: 'report' });
      const checkBtn = el('button', { class: 'btn', type: 'button' }, '✓ Перевірити текст');
      const clearBtn = el('button', { class: 'btn btn--ghost', type: 'button' }, 'Очистити');

      checkBtn.addEventListener('click', () => {
        if (opts.track) {
          written.add(task.title);
          prog.saveSkill(meta.id, 'schreiben', { done: written.size, total: mod.writing.length });
        }
        const res = checkWriting(ta.value, task, {
          levelId: meta.id,
          moduleId: task.mod?.id || mod.id,
          vocab: mod.vocab || [],          // словник рівня: з нього беруться іменники
        });
        report.replaceChildren(renderReport(res));
        report.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
      clearBtn.addEventListener('click', () => {
        ta.value = ''; ta.dispatchEvent(new Event('input')); report.replaceChildren();
      });

      card.append(el('div', { class: 'ex__actions' }, checkBtn, clearBtn), report);

      if (task.phrases?.length) {
        card.append(el('details', { class: 'transcript', style: 'margin-top:1rem' },
          el('summary', {}, 'Корисні фрази (Redemittel)'),
          el('div', { class: 'transcript__body' },
            task.phrases.map(p => el('p', { class: 'line' },
              el('span', {}, p.de), el('span', { class: 'tr' }, p.uk)))),
        ));
      }

      if (task.checklist?.length) {
        card.append(el('div', { style: 'margin-top:1rem' },
          el('strong', {}, 'Самоперевірка:'),
          el('ul', { class: 'checklist' }, task.checklist.map(c => {
            const id = 'c' + Math.random().toString(36).slice(2);
            return el('li', {}, el('input', { type: 'checkbox', id }), el('label', { for: id }, c));
          })),
        ));
      }

      card.append(el('details', { class: 'transcript transcript--model', style: 'margin-top:1rem' },
        el('summary', {}, '📄 Приклад тексту, який можна написати в цьому завданні'),
        el('div', { class: 'transcript__body' },
          el('p', { class: 'muted', style: 'margin-top:0' },
            'Це один із можливих варіантів, а не єдина правильна відповідь. ' +
            'Порівняйте зі своїм текстом: що ви сказали інакше, а яких зворотів вам бракувало?'),
          el('div', { class: 'model-answer' }, task.model),
          task.modelUk ? el('p', { class: 'muted', style: 'margin-top:1rem' }, task.modelUk) : null),
      ));

      box.append(card);
    });

    return box;
  },

  test(mod, meta, index) {
    const box = el('div', {});
    const total = mod.test.length;

    box.append(el('div', { class: 'test-intro' },
      el('h2', {}, `Тест до модуля ${index}`),
      el('p', { class: 'muted' },
        `${total} ${plural(total, 'завдання', 'завдання', 'завдань')} з граматики, лексики та аудіювання цього модуля. ` +
        'Відповіді перевіряються всі одразу — як на справжньому іспиті. Прохідний бал — 60 %.'),
      el('div', { class: 'progress-line' }, el('i', { style: 'width:0%' })),
    ));

    const best = prog.getTest(prog.load(), meta.id, index);
    if (best) {
      box.querySelector('.test-intro').append(el('div', { class: 'test-best' },
        el('span', { class: 'tag ' + (best.pct >= prog.PASS ? 'tag--accent' : 'tag--warn') },
          `Найкращий результат: ${best.pct} %`),
        el('span', { class: 'tag' }, `Спроб: ${best.tries}`),
        el('span', { class: 'tag' }, `Востаннє: ${prog.human(best.date)}`)));
    }

    const set = renderExerciseSet(mod.test, { instant: false });
    box.append(set.el);

    const bar = el('div', { class: 'test-bar' });
    const status = el('span', { class: 'grow muted' }, `Відповіли: 0 / ${total}`);
    const checkBtn = el('button', { class: 'btn', type: 'button' }, 'Перевірити тест');
    const againBtn = el('button', { class: 'btn btn--ghost', type: 'button' }, 'Пройти ще раз');
    bar.append(status, checkBtn, againBtn);
    box.append(bar);

    const progress = box.querySelector('.progress-line i');
    const refresh = () => {
      const answered = set.items.filter(i => i.isAnswered()).length;
      status.textContent = `Відповіли: ${answered} / ${total}`;
      progress.style.width = `${Math.round(answered / total * 100)}%`;
    };
    box.addEventListener('change', refresh);
    box.addEventListener('input', refresh);
    box.addEventListener('click', () => setTimeout(refresh, 0));

    againBtn.addEventListener('click', () => { location.hash = `#/${meta.id}/${index}/test`; location.reload(); });

    checkBtn.addEventListener('click', () => {
      const right = set.items.reduce((n, i) => n + (i.check() ? 1 : 0), 0);
      const pct = Math.round(right / total * 100);
      const pass = pct >= prog.PASS;
      const saved = prog.saveTest(meta.id, index, { right, total });
      const ringColor = pass ? 'var(--ok)' : 'var(--warn)';

      const result = el('div', { class: 'score-card' },
        el('div', { class: 'score-ring', style: `--p:${pct}; --ring-c:${ringColor}` }, el('span', {}, pct + '%')),
        el('h2', {}, pass ? 'Тест складено' : 'Ще потрібно попрацювати'),
        el('p', { class: 'muted' }, `Правильних відповідей: ${right} з ${total}.`),
        el('p', {}, pass
          ? 'Ви впевнено засвоїли матеріал модуля — можна переходити далі.'
          : 'Поверніться до розділів «Граматика» і «Лексика», повторіть матеріал і пройдіть тест ще раз. Нижче біля кожного завдання показано правильну відповідь.'),
        el('p', { class: 'muted', style: 'font-size:.85rem' },
          saved.tries > 1
            ? `Результат збережено. Це спроба № ${saved.tries}, ваш найкращий результат — ${saved.pct} %.`
            : 'Результат збережено — його видно на сторінці «Мій прогрес».'),
        el('div', { class: 'ex__actions' },
          el('a', { class: 'btn btn--ghost btn--sm', href: '#/progress' }, 'Мій прогрес')),
      );
      box.prepend(result);
      result.scrollIntoView({ behavior: 'smooth', block: 'center' });
      checkBtn.disabled = true;
    });

    return box;
  },
};

/* ------------------------------------------------------------ пошук ----- */

async function viewSearch(query) {
  markNav('suche');

  const input = el('input', {
    class: 'search__input', type: 'search', autocomplete: 'off', spellcheck: 'false',
    placeholder: 'Тема, слово або німецька фраза…', 'aria-label': 'Пошук по курсу',
    value: query || '',
  });
  const status = el('p', { class: 'muted', style: 'margin:.2rem 0 0;font-size:.85rem' },
    'Шукає по назвах модулів, поясненнях граматики, словнику, текстах і завданнях усіх п’яти рівнів.');
  const results = el('div', { class: 'stack' });

  const head = el('header', { class: 'level-head' },
    el('span', { class: 'tag' }, 'Пошук'),
    el('h1', {}, '🔍 Знайти в курсі'),
    el('div', { class: 'search__box' }, input),
    status,
  );

  setView(el('div', {},
    crumbs({ label: 'Головна', href: '#/' }, { label: 'Пошук' }),
    head, results,
  ), 'Пошук');

  input.focus();
  input.setSelectionRange(input.value.length, input.value.length);

  let index = null;
  let token = 0;

  function render(list, q) {
    results.replaceChildren();
    if (!q || q.trim().length < 2) {
      results.append(el('div', { class: 'card muted center' },
        'Уведіть щонайменше дві літери. Наприклад: «Konjunktiv», «weil», «Wetter» або «поспішати».'));
      return;
    }
    if (!list.length) {
      results.append(el('div', { class: 'card center stack' },
        el('strong', {}, 'Нічого не знайшлося'),
        el('p', { class: 'muted' },
          'Спробуйте коротший запит або інше слово. Пошук розуміє й ä, і ae — писати умлаути не обов’язково.')));
      return;
    }

    status.textContent = `Знайдено: ${list.length} ${plural(list.length, 'збіг', 'збіги', 'збігів')}`;
    const raw = q.trim().toLowerCase();

    list.forEach(e => {
      const t = TYPE_LABEL[e.type] || { icon: '•', label: e.type };
      const card = el('a', { class: 'search__hit', href: e.href },
        el('span', { class: 'search__icon', 'aria-hidden': 'true' }, t.icon),
        el('div', { class: 'search__body' },
          el('div', { class: 'search__meta' },
            el('span', { class: 'tag' }, t.label),
            el('span', { class: 'tag tag--accent' }, e.level)),
          el('strong', { class: e.type === 'word' ? 'de' : '' }, e.title),
          e.sub ? el('span', { class: 'muted' }, e.sub) : null,
          e.body ? el('span', { class: 'search__snippet' }, snippet(e, raw)) : null),
        el('span', { class: 'module-card__go', 'aria-hidden': 'true' }, '›'),
      );
      results.append(card);
    });
  }

  async function run() {
    const q = input.value;
    const my = ++token;
    if (location.hash !== `#/suche/${encodeURIComponent(q)}` && q.trim().length >= 2) {
      history.replaceState(null, '', `#/suche/${encodeURIComponent(q)}`);
    }
    if (q.trim().length < 2) { render([], q); return; }

    if (!index) {
      results.replaceChildren(el('div', { class: 'card center muted' },
        'Готую покажчик — це буває лише раз за візит…'));
      index = await buildIndex();
      if (my !== token) return;                 // поки чекали, запит змінився
    }
    render(runSearch(index, q), q);
  }

  let timer = null;
  input.addEventListener('input', () => { clearTimeout(timer); timer = setTimeout(run, 180); });
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const first = results.querySelector('.search__hit');
      if (first) { e.preventDefault(); location.hash = first.getAttribute('href'); }
    }
  });

  run();
}

/* ------------------------------------------------- пробний іспит -------- */

async function viewExam(levelId) {
  const meta = LEVELS.find(l => l.id === levelId);
  if (!meta || !EXAM[levelId]) return viewNotFound();
  markNav(levelId);
  loading();

  const level = await loadLevel(levelId);
  setView(el('div', {},
    crumbs({ label: 'Головна', href: '#/' }, { label: meta.code, href: `#/${levelId}` }, { label: 'Пробний іспит' }),
    el('header', { class: 'level-head', style: `--c: var(--${levelId})` },
      el('span', { class: 'tag' }, `${meta.code} · Modelltest`),
      el('h1', {}, '📝 Пробний іспит'),
      el('p', { class: 'lead' },
        'Повний прогін іспиту: усі частини поспіль, із таймером і підрахунком балів. '
        + 'Проходьте його раз на кілька тижнів — так видно справжній рівень, а не окремі теми.')),
    renderExam(level, meta, level.speaking || []),
  ), `Пробний іспит · ${meta.code}`);
}

/* ------------------------------------------------------ мій прогрес ----- */

function viewProgress() {
  markNav('progress');
  const state = prog.load();
  const counts = Object.fromEntries(LEVELS.map(l => [l.id, l.modules]));
  const course = prog.courseStats(state, counts);

  const head = el('header', { class: 'level-head' },
    el('span', { class: 'tag' }, 'Особисте'),
    el('h1', {}, '📊 Мій прогрес'),
    el('p', { class: 'lead' },
      'Усі результати зберігаються лише у вашому браузері: ані реєстрації, ані сервера. '
      + 'Якщо очистити дані сайту або відкрити його в іншому браузері, прогрес почнеться з нуля.'),
  );

  const top = el('section', { class: 'card stack' },
    el('div', { class: 'flash__bar' },
      el('strong', {}, `Пройдено ${course.passed} ${plural(course.passed, 'модуль', 'модулі', 'модулів')} з ${course.total}`),
      el('span', { class: 'grow' }),
      el('span', { class: 'tag tag--accent' }, course.pct + ' %')),
    el('div', { class: 'progress-line' }, el('i', { style: `width:${course.pct}%` })),
    el('p', { class: 'muted', style: 'margin:0;font-size:.85rem' },
      'Модуль вважається складеним, коли його тест написано щонайменше на 60 % — так само, як на іспиті.'),
  );

  const body = el('div', { class: 'stack' });

  LEVELS.forEach(l => {
    const st = prog.levelStats(state, l.id, l.modules);
    const card = el('section', { class: 'card stack', style: `--c: var(--${l.id})` });

    card.append(el('div', { class: 'flash__bar' },
      el('h3', { style: 'margin:0' }, `${l.code} — ${l.title}`),
      el('span', { class: 'grow' }),
      el('a', { class: 'btn btn--ghost btn--sm', href: `#/${l.id}` }, 'До рівня')));

    if (!st.touched) {
      card.append(el('p', { class: 'muted', style: 'margin:0' }, 'Цей рівень ще не починали.'));
      body.append(card);
      return;
    }

    card.append(el('div', { class: 'progress-line' }, el('i', { style: `width:${st.pct}%` })));
    card.append(el('div', { class: 'vocab-progress__pills' },
      el('span', { class: 'pill pill--ok' }, `Складено: ${st.passed} з ${st.total}`),
      el('span', { class: 'pill' }, `Тестів пройдено: ${st.started}`),
      st.avg ? el('span', { class: 'pill' }, `Середній бал: ${st.avg} %`) : null,
      st.exam ? el('span', { class: 'pill ' + (st.exam.pass ? 'pill--ok' : '') },
        `Пробний іспит: ${st.exam.pct} / 100`) : null));

    // Тести за модулями
    const rows = [];
    for (let i = 1; i <= l.modules; i++) {
      const t = prog.getTest(state, l.id, i);
      if (!t) continue;
      rows.push(el('tr', {},
        el('td', {}, el('a', { href: `#/${l.id}/${i}/test` }, `Модуль ${i}`)),
        el('td', {}, `${t.right} з ${t.total}`),
        el('td', {}, el('span', { class: 'tag ' + (t.pct >= prog.PASS ? 'tag--accent' : 'tag--warn') }, t.pct + ' %')),
        el('td', { class: 'muted' }, `${t.tries} · ${prog.human(t.date)}`)));
    }
    if (rows.length) {
      card.append(el('div', { class: 'tbl-scroll' }, el('table', { class: 'tbl' },
        el('thead', {}, el('tr', {},
          el('th', {}, 'Модуль'), el('th', {}, 'Відповіді'), el('th', {}, 'Бал'), el('th', {}, 'Спроб · дата'))),
        el('tbody', {}, rows))));
    }

    // Навички
    const skillRows = SKILLS.filter(sk => sk.id !== 'wortschatz').map(sk => {
      const d = prog.getSkill(state, l.id, sk.id);
      if (!d || !d.total) return null;
      return el('span', { class: 'pill' }, `${sk.icon} ${sk.label}: ${d.done} з ${d.total}`);
    }).filter(Boolean);
    const learned = knownCount(srsLoad(l.id));
    if (learned) skillRows.unshift(el('span', { class: 'pill pill--ok' }, `🗂 Слів вивчено: ${learned}`));
    if (skillRows.length) card.append(el('div', { class: 'vocab-progress__pills' }, skillRows));

    const reset = el('button', { class: 'btn btn--ghost btn--sm', type: 'button' }, 'Скинути прогрес рівня');
    reset.addEventListener('click', () => {
      if (!confirm(`Стерти всі результати рівня ${l.code}? Слова у флеш-картках це не зачепить.`)) return;
      prog.resetLevel(l.id);
      route();
    });
    card.append(el('div', { class: 'ex__actions' }, reset));
    body.append(card);
  });

  const wipe = el('button', { class: 'btn btn--ghost btn--sm', type: 'button' }, 'Стерти весь прогрес');
  wipe.addEventListener('click', () => {
    if (!confirm('Стерти геть усе: результати тестів, іспитів і вивчені слова? Це не можна скасувати.')) return;
    prog.resetAll();
    LEVELS.forEach(l => srsSave(l.id, {}));
    route();
  });

  setView(el('div', {},
    crumbs({ label: 'Головна', href: '#/' }, { label: 'Мій прогрес' }),
    head, top, body,
    el('div', { class: 'ex__actions', style: 'margin-top:1.5rem' }, wipe),
  ), 'Мій прогрес');
}

/* ------------------------------------------------------- інше ----------- */

function viewNotFound() {
  setView(el('div', { class: 'card center stack' },
    el('h1', {}, 'Сторінку не знайдено'),
    el('p', { class: 'muted' }, 'Можливо, цей модуль ще в розробці.'),
    el('p', {}, el('a', { class: 'btn', href: '#/' }, 'На головну')),
  ), 'Не знайдено');
}

function plural(n, one, few, many) {
  const m10 = n % 10, m100 = n % 100;
  if (m10 === 1 && m100 !== 11) return one;
  if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return few;
  return many;
}

/* ------------------------------------------------------- роутер --------- */

async function route() {
  const path = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  window.scrollTo({ top: 0 });

  try {
    if (!path.length) return viewHome();
    const [levelId, modNo, tab] = path;
    if (levelId === 'progress') return viewProgress();
    if (levelId === 'suche') return await viewSearch(modNo ? decodeURIComponent(modNo) : '');
    if (!modNo) return await viewLevel(levelId);
    if (modNo === 'pruefung') return await viewExam(levelId);
    if (SKILLS.some(sk => sk.id === modNo)) return await viewSkill(levelId, modNo);
    const index = parseInt(modNo, 10);
    if (!Number.isInteger(index)) return viewNotFound();
    return await viewModule(levelId, index, tab);
  } catch (err) {
    console.error(err);
    setView(el('div', { class: 'card center stack' },
      el('h1', {}, 'Не вдалося завантажити розділ'),
      el('p', { class: 'muted' }, String(err?.message || err)),
      el('p', {}, el('a', { class: 'btn', href: '#/' }, 'На головну')),
    ), 'Помилка');
  }
}

window.addEventListener('hashchange', route);
route();
