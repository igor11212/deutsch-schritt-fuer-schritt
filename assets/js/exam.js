/* Пробний іспит (Modelltest): усі чотири частини поспіль, із таймером
   і підрахунком балів за схемою Goethe — по 25 балів на частину.

   Читання й аудіювання рахуються автоматично. Письмо оцінює той самий
   офлайновий перевіряльник, що й у модулі «Письмо», а мовлення учень
   оцінює сам за критеріями — і сайт про це чесно попереджає. */

import { el, renderExerciseSet } from './exercises.js?v=20260819a';
import { speakDialogue, stop as stopSpeech, ttsSupported } from './tts.js?v=20260819a';
import { checkWriting } from './writing-check.js?v=20260819a';
import { EXAM, PART_META } from '../data/exam.js?v=20260819a';
import { saveExam } from './progress.js?v=20260819a';

const PART_POINTS = 25;

function pick(list, n) {
  const a = list.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a.slice(0, n);
}

/** Вердикт іспиту. Винесено окремо, щоб правило можна було перевірити
    тестом, а не лише очима: на B2 і C1 кожну частину треба скласти окремо. */
export function verdict(points, plan) {
  const rows = plan.parts.map(p => ({ id: p.id, points: points[p.id] || 0 }));
  const sum = rows.reduce((s, r) => s + r.points, 0);
  const weak = rows.filter(r => r.points < PART_POINTS * 0.6).map(r => r.id);
  return {
    sum, weak,
    pass: plan.perModule ? weak.length === 0 && sum >= 60 : sum >= 60,
  };
}

function mmss(sec) {
  const m = Math.floor(Math.max(0, sec) / 60);
  const s = Math.max(0, sec) % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
}

/** Збирає матеріал іспиту з того, що вже є на рівні. */
export function buildExamSet(level, levelId, speaking) {
  const plan = EXAM[levelId];
  const listening = [];
  const writing = [];
  level.modules.forEach(m => {
    (m.listening || []).forEach(t => listening.push(t));
    (m.writing || []).forEach(t => writing.push(t));
  });

  // Читання: добираємо тексти, доки не набереться потрібна кількість ЗАВДАНЬ
  // (а не текстів) — інакше рівень із чотирма короткими текстами давав би
  // удвічі довшу частину, ніж рівень із двома довгими.
  const lesen = [];
  let need = plan.lesen;
  for (const text of pick(level.reading || [], (level.reading || []).length)) {
    if (need <= 0) break;
    const tasks = (text.tasks || []).slice(0, need);
    if (!tasks.length) continue;
    lesen.push({ text, tasks });
    need -= tasks.length;
  }

  return {
    plan,
    lesen,
    hoeren: pick(listening, plan.hoeren),
    schreiben: pick(writing, 1)[0] || null,
    sprechen: pick(speaking || [], 1)[0] || null,
  };
}

/* --------------------------------------------------------- частини ------ */

function partLesen(set) {
  const box = el('div', { class: 'stack' });
  const items = [];
  set.lesen.forEach((block, i) => {
    const card = el('section', { class: 'audio-card' },
      el('span', { class: 'tag tag--accent' }, block.text.exam),
      el('h3', { style: 'margin-top:.6rem' }, `Text ${i + 1}: ${block.text.title}`),
      el('p', { class: 'muted' }, block.text.instruction),
      el('div', { class: 'reading-text', html: block.text.text }),
    );
    const set2 = renderExerciseSet(block.tasks, { instant: false });
    items.push(...set2.items);
    card.append(set2.el);
    box.append(card);
  });
  return { el: box, items };
}

function partHoeren(set, meta) {
  const box = el('div', { class: 'stack' });
  const items = [];

  if (!ttsSupported) {
    box.append(el('div', { class: 'no-tts' },
      'Ваш браузер не підтримує синтез мовлення, тому цю частину доведеться пропустити. ' +
      'Спробуйте Chrome, Safari або Edge.'));
  }

  const RATE  = { a1: 0.95, a2: 1.00, b1: 1.05, b2: 1.10, c1: 1.16 };
  const PAUSE = { a1: 1.9, a2: 1.6, b1: 1.3, b2: 1.1, c1: 1.0 };

  set.hoeren.forEach((task, i) => {
    const card = el('section', { class: 'audio-card' },
      el('span', { class: 'tag tag--accent' }, task.exam || 'Hörverstehen'),
      el('h3', { style: 'margin-top:.6rem' }, `Aufgabe ${i + 1}: ${task.title}`),
      el('p', { class: 'muted' }, task.instruction),
    );

    // На іспиті запис дають рівно двічі — тут так само.
    let left = 2, playing = false;
    const btn = el('button', { class: 'play-btn', type: 'button', 'aria-label': 'Відтворити' }, '▶');
    const note = el('strong', {}, 'Прослухати можна двічі');
    const idle = () => { playing = false; btn.textContent = '▶'; btn.classList.remove('is-playing'); };
    btn.addEventListener('click', () => {
      if (playing) { stopSpeech(); idle(); return; }
      if (left <= 0) return;
      left--;
      note.textContent = left ? 'Лишилося прослуховувань: 1' : 'Прослуховування використані';
      if (!left) btn.disabled = true;
      playing = true; btn.textContent = '⏹'; btn.classList.add('is-playing');
      speakDialogue(task.lines, { rate: RATE[meta.id] ?? 1, pauseScale: PAUSE[meta.id] ?? 1.2, onEnd: idle });
    });

    card.append(el('div', { class: 'player' }, btn,
      el('div', { class: 'player__meta' }, note,
        'Транскрипт на іспиті недоступний — він відкриється лише в результатах.')));

    const s = renderExerciseSet(task.tasks, { instant: false });
    items.push(...s.items);
    card.append(s.el);
    box.append(card);
  });

  return { el: box, items };
}

function partSchreiben(set, meta, level) {
  const task = set.schreiben;
  const box = el('div', { class: 'stack' });
  if (!task) {
    box.append(el('div', { class: 'card center muted' }, 'Завдань на письмо для цього рівня немає.'));
    return { el: box, score: () => ({ points: 0, detail: 'немає завдання' }) };
  }

  const card = el('section', { class: 'writing-card' },
    el('span', { class: 'tag tag--accent' }, task.exam),
    el('h3', { style: 'margin-top:.6rem' }, task.title),
    el('div', { class: 'prompt' },
      el('p', { html: task.situation }),
      task.points?.length ? el('div', {},
        el('strong', {}, 'Schreiben Sie etwas zu diesen Punkten:'),
        el('ul', {}, task.points.map(p => el('li', {}, p)))) : null,
    ),
  );

  const ta = el('textarea', {
    class: 'write', placeholder: 'Schreiben Sie hier…',
    spellcheck: 'true', lang: 'de', autocapitalize: 'sentences',
  });
  const count = el('span', { class: 'count' }, '0 слів');
  ta.addEventListener('input', () => {
    const n = ta.value.trim() ? ta.value.trim().split(/\s+/).length : 0;
    count.textContent = `${n} слів`;
    count.classList.toggle('ok', n >= task.minWords);
  });
  card.append(ta, el('div', { class: 'write-meta' }, count,
    el('span', {}, `Орієнтир: від ${task.minWords} слів`)));
  box.append(card);

  /* Бали: повний обсяг — основа, кожна помилка знімає бал.
     Це наближення, і в результатах ми про це прямо пишемо. */
  const score = () => {
    const text = ta.value.trim();
    const words = text ? text.split(/\s+/).length : 0;
    if (!words) return { points: 0, detail: 'текст не написано', res: null, task, text };

    const res = checkWriting(text, task, {
      levelId: meta.id, moduleId: task.mod?.id || 'exam', vocab: level.vocab || [],
    });
    const errors = res.issues.filter(i => i.kind === 'error').length;
    const warns  = res.issues.filter(i => i.kind === 'warn').length;

    // Обсяг дає до 15 балів, чистота мови — решту 10.
    const volume = Math.min(1, words / task.minWords) * 15;
    const clean  = Math.max(0, 10 - errors * 2.5 - warns * 1);
    const points = Math.max(0, Math.min(PART_POINTS, Math.round(volume + clean)));
    return {
      points, res, task, text, words,
      detail: `${words} слів, помилок: ${errors}, зауважень: ${warns}`,
    };
  };

  return { el: box, score };
}

function partSprechen(set) {
  const task = set.sprechen;
  const box = el('div', { class: 'stack' });
  if (!task) {
    box.append(el('div', { class: 'card center muted' }, 'Завдань на мовлення для цього рівня немає.'));
    return { el: box, score: () => ({ points: 0, detail: 'немає завдання' }) };
  }

  const card = el('section', { class: 'writing-card' },
    el('span', { class: 'tag tag--accent' }, task.exam),
    el('h3', { style: 'margin-top:.6rem' }, task.title),
    el('p', { class: 'muted' }, task.instruction),
  );

  if (task.card) {
    card.append(el('div', { class: 'prompt' },
      el('strong', {}, task.card.heading),
      el('ul', {}, task.card.items.map(i => el('li', {}, i))),
      task.card.note ? el('p', { class: 'muted' }, task.card.note) : null));
  }

  card.append(el('p', {},
    'Говоріть уголос — саме так, як говорили б на іспиті. Запис не ведеться й нікуди не надсилається. ',
    'Після відповіді чесно позначте, що вам вдалося: із цих позначок складається оцінка частини.'));

  const boxes = [];
  card.append(el('div', {},
    el('strong', {}, 'Самооцінка за критеріями іспиту:'),
    el('ul', { class: 'checklist' }, task.checklist.map(c => {
      const id = 'sp' + Math.random().toString(36).slice(2);
      const inp = el('input', { type: 'checkbox', id });
      boxes.push(inp);
      return el('li', {}, inp, el('label', { for: id }, c));
    }))));

  box.append(card);

  const score = () => {
    const ok = boxes.filter(b => b.checked).length;
    const points = boxes.length ? Math.round((ok / boxes.length) * PART_POINTS) : 0;
    return { points, detail: `виконано критеріїв: ${ok} з ${boxes.length}`, task };
  };

  return { el: box, score };
}

/* ------------------------------------------------------------ іспит ---- */

export function renderExam(level, meta, speaking, onFinish) {
  const plan = EXAM[meta.id];
  const set = buildExamSet(level, meta.id, speaking);
  const root = el('div', { class: 'stack' });

  const totalMin = plan.parts.reduce((s, p) => s + p.minutes, 0);
  const results = {};
  let idx = 0, timer = null, built = null;

  /* ── вступ ──────────────────────────────────────────────────────── */
  const intro = el('div', { class: 'card stack' },
    el('h2', {}, plan.title),
    el('p', {}, `Повний пробний іспит: чотири частини поспіль, разом ${totalMin} хвилин. `
      + 'Кожна частина дає 25 балів, максимум — 100.'),
    el('div', { class: 'exam-plan' }, plan.parts.map(p => {
      const m = PART_META[p.id];
      return el('div', { class: 'exam-plan__row' },
        el('span', { class: 'exam-plan__icon' }, m.icon),
        el('strong', {}, `${m.de} — ${m.label}`),
        el('span', { class: 'grow' }),
        el('span', { class: 'tag' }, `${p.minutes} хв`),
        el('span', { class: 'tag' }, '25 балів'));
    })),
    el('div', { class: 'section-note' }, plan.note),
    el('p', { class: 'muted' },
      'Чесно про оцінювання: читання й аудіювання сайт перевіряє автоматично. '
      + 'Письмо оцінює вбудований перевіряльник за обсягом і знайденими помилками — це наближення, '
      + 'а не робота екзаменатора. Мовлення ви оцінюєте самі за критеріями іспиту.'),
    el('p', { class: 'muted' },
      'Таймер кожної частини не зупиняється. Коли час вичерпано, частина закривається — як на іспиті. '
      + 'Перезавантаження сторінки перерве спробу.'),
  );
  const startBtn = el('button', { class: 'btn', type: 'button' }, '▶ Почати іспит');
  intro.append(el('div', { class: 'ex__actions' }, startBtn));
  root.append(intro);

  /* ── робоча зона ────────────────────────────────────────────────── */
  const clock = el('span', { class: 'exam-clock' });
  const partTitle = el('strong', {});
  const stepPills = el('div', { class: 'exam-steps' });
  const nextBtn = el('button', { class: 'btn', type: 'button' }, 'Далі →');
  const bar = el('div', { class: 'exam-bar', hidden: 'hidden' },
    partTitle, el('span', { class: 'grow' }), stepPills, clock, nextBtn);
  const stage = el('div', {});
  root.append(bar, stage);

  function drawSteps() {
    stepPills.replaceChildren(...plan.parts.map((p, i) => el('span', {
      class: 'exam-steps__dot' + (i < idx ? ' is-done' : i === idx ? ' is-now' : ''),
      title: PART_META[p.id].label,
    }, PART_META[p.id].icon)));
  }

  function startPart() {
    const p = plan.parts[idx];
    const m = PART_META[p.id];
    partTitle.textContent = `${m.de} — ${m.label}`;
    drawSteps();
    nextBtn.textContent = idx === plan.parts.length - 1 ? 'Завершити іспит' : 'Далі →';

    if (p.id === 'lesen')      built = partLesen(set);
    else if (p.id === 'hoeren')    built = partHoeren(set, meta);
    else if (p.id === 'schreiben') built = partSchreiben(set, meta, level);
    else                           built = partSprechen(set);

    stage.replaceChildren(built.el);
    window.scrollTo({ top: 0 });

    let left = p.minutes * 60;
    const tick = () => {
      clock.textContent = '⏱ ' + mmss(left);
      clock.classList.toggle('is-low', left <= 60);
      if (left <= 0) { closePart(); return; }
      left--;
    };
    clearInterval(timer);
    tick();
    timer = setInterval(tick, 1000);
  }

  function closePart() {
    clearInterval(timer);
    stopSpeech();
    const p = plan.parts[idx];
    if (built.items) {
      const right = built.items.reduce((n, i) => n + (i.check() ? 1 : 0), 0);
      const total = built.items.length;
      results[p.id] = {
        points: total ? Math.round((right / total) * PART_POINTS) : 0,
        detail: `правильних: ${right} з ${total}`, right, total,
      };
    } else {
      results[p.id] = built.score();
    }
    idx++;
    if (idx < plan.parts.length) startPart();
    else finish();
  }

  nextBtn.addEventListener('click', () => {
    if (!confirm('Завершити цю частину? Повернутися до неї вже не можна — як на іспиті.')) return;
    closePart();
  });

  startBtn.addEventListener('click', () => {
    intro.remove();
    bar.removeAttribute('hidden');
    startPart();
  });

  /* ── результат ──────────────────────────────────────────────────── */
  function finish() {
    bar.setAttribute('hidden', 'hidden');
    const rows = plan.parts.map(p => ({ id: p.id, ...results[p.id] }));
    const v = verdict(Object.fromEntries(rows.map(r => [r.id, r.points])), plan);
    const sum = v.sum;
    const pct = sum;                                  // 100 балів = 100 %
    const weak = rows.filter(r => v.weak.includes(r.id));
    const pass = v.pass;

    const saved = saveExam(meta.id, {
      pct, pass, parts: Object.fromEntries(rows.map(r => [r.id, r.points])),
      perModule: plan.perModule,
    });

    const ring = el('div', { class: 'score-ring', style: `--p:${pct}; --ring-c:${pass ? 'var(--ok)' : 'var(--warn)'}` },
      el('span', {}, sum + ' / 100'));

    const table = el('div', { class: 'exam-plan' }, rows.map(r => {
      const m = PART_META[r.id];
      const ok = r.points >= PART_POINTS * 0.6;
      return el('div', { class: 'exam-plan__row' + (ok ? '' : ' is-weak') },
        el('span', { class: 'exam-plan__icon' }, m.icon),
        el('strong', {}, `${m.de} — ${m.label}`),
        el('span', { class: 'grow' }),
        el('span', { class: 'muted', style: 'font-size:.85rem' }, r.detail || ''),
        el('span', { class: 'tag ' + (ok ? 'tag--accent' : 'tag--warn') }, `${r.points} / 25`));
    }));

    const box = el('div', { class: 'stack' },
      el('div', { class: 'score-card' }, ring,
        el('h2', {}, pass ? 'Іспит складено' : 'Іспит не складено'),
        el('p', { class: 'muted' }, plan.perModule
          ? 'На цьому рівні кожну частину треба скласти окремо на 60 % (15 балів).'
          : 'Прохідний бал — 60 зі 100 за сумою всіх частин.'),
        el('p', {}, pass
          ? 'За цією спробою ви впевнено тримаєте рівень. Повторіть іспит через кілька тижнів на іншому матеріалі.'
          : weak.length
            ? 'Слабкі частини позначені нижче — почніть саме з них.'
            : 'До прохідного балу трохи не вистачило. Перегляньте частини з найнижчим результатом.')),
      el('h3', {}, 'За частинами'),
      table,
    );

    if (results.schreiben?.res) {
      box.append(el('details', { class: 'transcript' },
        el('summary', {}, 'Що перевіряльник знайшов у вашому тексті'),
        el('div', { class: 'transcript__body' },
          el('p', { class: 'muted', style: 'margin-top:0' },
            'Це автоматична перевірка за правилами, а не оцінка екзаменатора: вона бачить типові помилки, '
            + 'але не бачить змісту й доречності. Порівняйте свій текст зі зразком у модулі «Письмо».'),
          el('ul', {}, results.schreiben.res.issues.length
            ? results.schreiben.res.issues.map(i => el('li', {}, `${i.title} — ${i.detail}`))
            : [el('li', {}, 'Помилок за правилами не знайдено.')]),
          el('div', { class: 'model-answer', style: 'margin-top:1rem' }, results.schreiben.task.model),
        )));
    }

    if (set.hoeren.length) {
      box.append(el('details', { class: 'transcript' },
        el('summary', {}, 'Транскрипти аудіювання'),
        el('div', { class: 'transcript__body' },
          set.hoeren.map(t => el('div', { style: 'margin-bottom:1rem' },
            el('strong', {}, t.title),
            t.lines.map(l => el('p', { class: 'line' },
              l.speaker ? el('b', {}, l.speaker + ': ') : null,
              el('span', {}, l.de),
              l.uk ? el('span', { class: 'tr' }, l.uk) : null)))))));
    }

    const again = el('button', { class: 'btn btn--soft', type: 'button' }, '↻ Пройти ще раз');
    again.addEventListener('click', () => location.reload());
    box.append(el('div', { class: 'ex__actions' }, again,
      el('a', { class: 'btn btn--ghost', href: `#/${meta.id}` }, `До рівня ${meta.code}`),
      el('a', { class: 'btn btn--ghost', href: '#/progress' }, 'Мій прогрес')));

    stage.replaceChildren(box);
    window.scrollTo({ top: 0 });
    onFinish?.(saved);
  }

  return root;
}
