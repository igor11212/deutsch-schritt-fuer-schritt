/* Роутер + сторінки. Хеш-навігація, щоб працювало на GitHub Pages без сервера. */

import { LEVELS, loadLevel } from '../data/index.js';
import { el, renderExercise, renderExerciseSet } from './exercises.js';
import { speak, speakDialogue, stop as stopSpeech, ttsSupported, hasGermanVoice } from './tts.js';

const main = document.getElementById('main');

/* ------------------------------------------------------- тема ----------- */

const THEME_KEY = 'dssf-theme';
function applyTheme(t) {
  document.documentElement.dataset.theme = t;
  document.getElementById('themeIcon').textContent = t === 'dark' ? '☀' : '☾';
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', t === 'dark' ? '#191a19' : '#f8f6f1');
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
topnav.append(...LEVELS.map(l => el('a', { href: `#/${l.id}`, 'data-level': l.id }, l.code)));

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
      'П’ять рівнів, розбитих на модулі. У кожному модулі: пояснення граматики українською, ' +
      'словниковий запас із озвученням, вправи, аудіювання, завдання на письмо і підсумковий тест. ' +
      'Формати завдань узяті зі структури іспитів Goethe-Zertifikat та ÖSD.'),
    el('div', { class: 'hero__facts' },
      el('span', { class: 'tag' }, '📘 Граматика українською'),
      el('span', { class: 'tag' }, '🔊 Аудіювання в браузері'),
      el('span', { class: 'tag' }, '✍ Письмо з модельними відповідями'),
      el('span', { class: 'tag' }, '🎯 Тест після кожного модуля'),
    ),
  );

  const cards = LEVELS.map(l => el('a', {
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
  ));

  const how = el('section', { class: 'card stack' },
    el('h2', {}, 'Як користуватися'),
    el('ol', { style: 'padding-left:1.2rem;color:var(--text-soft)' },
      el('li', {}, 'Оберіть рівень і відкрийте перший модуль.'),
      el('li', {}, el('strong', {}, 'Граматика'), ' — прочитайте пояснення й розберіть таблиці.'),
      el('li', {}, el('strong', {}, 'Лексика'), ' — вивчіть слова, натискайте 🔊, щоб почути вимову.'),
      el('li', {}, el('strong', {}, 'Вправи'), ' — відпрацюйте граматику й лексику з миттєвою перевіркою.'),
      el('li', {}, el('strong', {}, 'Аудіювання'), ' — спершу слухайте без тексту, транскрипт відкривайте лише після відповідей.'),
      el('li', {}, el('strong', {}, 'Письмо'), ' — напишіть свій текст, потім порівняйте з модельним.'),
      el('li', {}, el('strong', {}, 'Тест'), ' — перевірте себе. 60 % — прохідний бал, як на реальному іспиті.'),
    ),
  );

  setView(el('div', {}, hero, el('h2', {}, 'Рівні'), el('div', { class: 'levels' }, cards), el('div', { style: 'height:2rem' }), how));
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

  const list = el('div', { class: 'module-list' },
    level.modules.map((m, i) => el('a', {
      class: 'module-card', href: `#/${levelId}/${i + 1}`, style: `--c: var(--${levelId})`,
    },
      el('span', { class: 'module-card__no' }, String(i + 1)),
      el('div', {},
        el('h3', {}, m.title),
        el('p', {}, m.titleUk),
      ),
      el('span', { class: 'module-card__go', 'aria-hidden': 'true' }, '›'),
    )),
  );

  const view = el('div', {},
    crumbs({ label: 'Головна', href: '#/' }, { label: meta.code }),
    head,
    el('h2', {}, 'Модулі'),
    list,
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

const TABS = [
  { id: 'grammar',   label: 'Граматика',  key: 'grammar' },
  { id: 'vocab',     label: 'Лексика',    key: 'vocab' },
  { id: 'exercises', label: 'Вправи',     key: 'exercises' },
  { id: 'listening', label: 'Аудіювання', key: 'listening' },
  { id: 'writing',   label: 'Письмо',     key: 'writing' },
  { id: 'test',      label: 'Тест',       key: 'test' },
];

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

/* ------------------------------------------------- рендер розділів ------ */

const RENDERERS = {

  grammar(mod) {
    return el('div', { class: 'stack' },
      mod.grammar.map(g => el('section', { class: 'gram' },
        el('h3', {}, g.title),
        el('div', { html: g.html }),
      )),
    );
  },

  vocab(mod) {
    const box = el('div', { class: 'stack' });
    const total = mod.vocab.reduce((n, g) => n + g.items.length, 0);

    const allBtn = el('button', { class: 'btn btn--soft btn--sm', type: 'button' }, '🔊 Прослухати всі слова');
    let playing = false;
    allBtn.addEventListener('click', () => {
      if (playing) { stopSpeech(); return; }
      const lines = mod.vocab.flatMap(g => g.items.map(i => ({ de: i.de })));
      speakDialogue(lines, {
        rate: 0.85,
        onStart: () => { playing = true; allBtn.textContent = '⏹ Зупинити'; },
        onEnd:   () => { playing = false; allBtn.textContent = '🔊 Прослухати всі слова'; },
      });
    });

    box.append(el('div', { class: 'section-note' },
      `У модулі ${total} ${plural(total, 'слово', 'слова', 'слів')}. Натисніть 🔊 біля слова, щоб почути вимову. `,
      ttsSupported ? allBtn : 'Ваш браузер не підтримує синтез мовлення.'));

    if (ttsSupported && !hasGermanVoice()) {
      box.append(el('div', { class: 'no-tts' },
        'У системі не знайдено німецького голосу. Додайте його: macOS — Системні налаштування → Спеціальні можливості → Вимовлений вміст → Голоси системи; Windows — Параметри → Час і мова → Мова → Додати німецьку.'));
    }

    mod.vocab.forEach(group => {
      box.append(el('section', { class: 'vocab-group' },
        el('h3', {}, group.group),
        el('div', { class: 'vocab-list' },
          group.items.map(it => {
            const btn = ttsSupported ? el('button', { class: 'speak-btn', type: 'button', 'aria-label': `Прослухати: ${it.de}` }, '🔊') : null;
            btn?.addEventListener('click', () => speak(it.de, {
              onStart: () => btn.classList.add('is-playing'),
              onEnd:   () => btn.classList.remove('is-playing'),
            }));
            return el('div', { class: 'vocab-item' },
              el('span', { class: 'vocab-item__de' }, it.de),
              btn || el('span', {}),
              el('span', { class: 'vocab-item__uk' }, it.uk),
              it.ex ? el('span', { class: 'vocab-item__ex' }, it.ex, it.exUk ? el('span', { class: 'tr' }, it.exUk) : null) : null,
            );
          }),
        ),
      ));
    });

    return box;
  },

  exercises(mod) {
    const box = el('div', { class: 'stack' },
      el('div', { class: 'section-note' },
        'Виконуйте по порядку. Перевірка миттєва — після кожної спроби ви бачите правильну відповідь і пояснення.'),
    );
    box.append(renderExerciseSet(mod.exercises, { instant: true }).el);
    return box;
  },

  listening(mod) {
    const box = el('div', { class: 'stack' });

    if (!ttsSupported) {
      box.append(el('div', { class: 'no-tts' },
        'Ваш браузер не підтримує синтез мовлення. Спробуйте Chrome, Safari або Edge — тексти нижче можна читати вголос самостійно.'));
    }

    mod.listening.forEach((task, ti) => {
      const card = el('section', { class: 'audio-card' },
        el('span', { class: 'tag tag--accent' }, task.exam || 'Hörverstehen'),
        el('h3', { style: 'margin-top:.6rem' }, task.title),
        el('p', { class: 'muted' }, task.instruction),
      );

      let rate = 0.85;
      let playing = false;
      const playBtn = el('button', { class: 'play-btn', type: 'button', 'aria-label': 'Відтворити' }, '▶');
      const setIdle = () => { playing = false; playBtn.textContent = '▶'; playBtn.classList.remove('is-playing'); };
      const play = () => {
        if (playing) { stopSpeech(); setIdle(); return; }
        playing = true; playBtn.textContent = '⏹'; playBtn.classList.add('is-playing');
        speakDialogue(task.lines, { rate, onEnd: setIdle });
      };
      playBtn.addEventListener('click', play);

      const speeds = [['0,75×', 0.7], ['Норм.', 0.85], ['1,15×', 1.0]];
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
          el('strong', {}, task.lines.length > 1 ? `Діалог · ${task.lines.length} реплік` : 'Текст'),
          'Слухайте двічі, як на іспиті. Швидкість:'),
        speedBox,
      ));

      card.append(renderExerciseSet(task.tasks, { instant: true }).el);

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

    return box;
  },

  writing(mod) {
    const box = el('div', { class: 'stack' },
      el('div', { class: 'section-note' },
        'Спершу напишіть свій варіант, і лише потім відкривайте модельну відповідь. Текст зберігається лише у вікні браузера.'));

    mod.writing.forEach(task => {
      const card = el('section', { class: 'writing-card' },
        el('span', { class: 'tag tag--accent' }, task.exam),
        el('h3', { style: 'margin-top:.6rem' }, task.title),
      );

      card.append(el('div', { class: 'prompt' },
        el('p', { html: task.situation }),
        task.points?.length ? el('div', {},
          el('strong', {}, 'Schreiben Sie etwas zu diesen Punkten:'),
          el('ul', {}, task.points.map(p => el('li', {}, p))),
        ) : null,
      ));

      const ta = el('textarea', { class: 'write', placeholder: 'Schreiben Sie hier…', spellcheck: 'false' });
      const count = el('span', { class: 'count' }, '0 слів');
      ta.addEventListener('input', () => {
        const n = ta.value.trim() ? ta.value.trim().split(/\s+/).length : 0;
        count.textContent = `${n} ${plural(n, 'слово', 'слова', 'слів')}`;
        count.classList.toggle('ok', n >= task.minWords);
      });
      card.append(ta, el('div', { class: 'write-meta' },
        count, el('span', {}, `Орієнтир: від ${task.minWords} слів`)));

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

      card.append(el('details', { class: 'transcript', style: 'margin-top:1rem' },
        el('summary', {}, 'Модельна відповідь'),
        el('div', { class: 'transcript__body' },
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
      const pass = pct >= 60;
      const ringColor = pass ? 'var(--ok)' : 'var(--warn)';

      const result = el('div', { class: 'score-card' },
        el('div', { class: 'score-ring', style: `--p:${pct}; --ring-c:${ringColor}` }, el('span', {}, pct + '%')),
        el('h2', {}, pass ? 'Тест складено' : 'Ще потрібно попрацювати'),
        el('p', { class: 'muted' }, `Правильних відповідей: ${right} з ${total}.`),
        el('p', {}, pass
          ? 'Ви впевнено засвоїли матеріал модуля — можна переходити далі.'
          : 'Поверніться до розділів «Граматика» і «Лексика», повторіть матеріал і пройдіть тест ще раз. Нижче біля кожного завдання показано правильну відповідь.'),
      );
      box.prepend(result);
      result.scrollIntoView({ behavior: 'smooth', block: 'center' });
      checkBtn.disabled = true;
    });

    return box;
  },
};

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
    if (!modNo) return await viewLevel(levelId);
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
