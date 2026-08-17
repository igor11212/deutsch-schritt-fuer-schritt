/* Рушій вправ: рендер + перевірка.
   Типи: choice, multi, truefalse, gap, match, order. */

import { speak, ttsSupported } from './tts.js?v=20260816j';

/* --------------------------------------------------------- утиліти ------ */

export function el(tag, attrs = {}, ...kids) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v === null || v === undefined || v === false) continue;
    if (k === 'class') node.className = v;
    else if (k === 'html') node.innerHTML = v;
    else if (k === 'text') node.textContent = v;
    else if (k.startsWith('on') && typeof v === 'function') node.addEventListener(k.slice(2).toLowerCase(), v);
    else node.setAttribute(k, v === true ? '' : v);
  }
  for (const kid of kids.flat()) {
    if (kid === null || kid === undefined || kid === false) continue;
    node.append(kid instanceof Node ? kid : document.createTextNode(String(kid)));
  }
  return node;
}

export function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Порівняння відповіді користувача з еталоном — толерантне, але не безмежне. */
function norm(s) {
  return String(s ?? '')
    .toLowerCase()
    .replace(/[.,!?;:„“"»«]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/ß/g, 'ss')
    .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue');
}

function matches(input, expected) {
  const got = norm(input);
  if (!got) return false;
  return String(expected).split('|').some(v => norm(v) === got);
}

function firstVariant(expected) {
  return String(expected).split('|')[0];
}

function speakBtn(text, label = 'Прослухати') {
  if (!ttsSupported) return null;
  const btn = el('button', { class: 'speak-btn', type: 'button', 'aria-label': label, title: label }, '🔊');
  btn.addEventListener('click', () => {
    speak(text, {
      onStart: () => btn.classList.add('is-playing'),
      onEnd:   () => btn.classList.remove('is-playing'),
    });
  });
  return btn;
}

/* ----------------------------------------------------- рендер вправи ---- */

/**
 * @param {object} ex   опис вправи
 * @param {number} no   порядковий номер (1-based)
 * @param {{instant?: boolean}} opts  instant=false → перевірка лише зовнішньою кнопкою (тест)
 * @returns {{el: HTMLElement, check: () => boolean, reveal: () => void, isAnswered: () => boolean}}
 */
export function renderExercise(ex, no, opts = {}) {
  const instant = opts.instant !== false;
  const card = el('div', { class: 'ex' });
  const feedback = el('div', { class: 'feedback' });

  const head = el('div', { class: 'ex__head' },
    el('span', { class: 'ex__no' }, String(no)),
    el('p', { class: 'ex__q', html: ex.q ? ex.q.replace(/___/g, '<span class="muted">___</span>') : (ex.instruction || '') }),
  );
  if (ex.audio) {
    const b = speakBtn(ex.audio);
    if (b) head.append(b);
  }
  card.append(head);

  const impl = BUILDERS[ex.type]?.(ex, card) ?? BUILDERS.choice(ex, card);
  card.append(impl.body);

  let done = false;

  const showFeedback = (ok) => {
    feedback.className = 'feedback show ' + (ok ? 'ok' : 'no');
    const solution = impl.solutionText?.();
    feedback.innerHTML = ok
      ? `<strong>Правильно.</strong>${ex.explain ? ' ' + ex.explain : ''}`
      : `<strong>Ще ні.</strong> Правильна відповідь: <b>${solution}</b>${ex.explain ? '<br>' + ex.explain : ''}`;
  };

  const check = () => {
    const ok = impl.check();
    done = true;
    showFeedback(ok);
    return ok;
  };

  const reveal = () => {
    impl.reveal();
    done = true;
    feedback.className = 'feedback show no';
    feedback.innerHTML = `<strong>Відповідь:</strong> <b>${impl.solutionText?.()}</b>${ex.explain ? '<br>' + ex.explain : ''}`;
  };

  if (instant) {
    const checkBtn = el('button', { class: 'btn btn--sm', type: 'button' }, 'Перевірити');
    const showBtn  = el('button', { class: 'btn btn--ghost btn--sm', type: 'button' }, 'Показати відповідь');
    checkBtn.addEventListener('click', () => check());
    showBtn.addEventListener('click', () => reveal());
    const actions = el('div', { class: 'ex__actions' }, checkBtn, showBtn);
    if (ex.hint) {
      const hintBtn = el('button', { class: 'btn btn--ghost btn--sm', type: 'button' }, '💡 Підказка');
      hintBtn.addEventListener('click', () => {
        feedback.className = 'feedback show';
        feedback.style.background = 'var(--warn-soft)';
        feedback.innerHTML = ex.hint;
      });
      actions.append(hintBtn);
    }
    card.append(actions);
  }

  card.append(feedback);

  return { el: card, check, reveal, isAnswered: () => impl.isAnswered?.() ?? done };
}

/* ------------------------------------------------- реалізації типів ----- */

const BUILDERS = {

  /* Один правильний варіант ------------------------------------------- */
  choice(ex) {
    const name = 'q' + Math.random().toString(36).slice(2);
    const opts = ex.options.map((text, i) => {
      const input = el('input', { type: 'radio', name });
      const label = el('label', { class: 'opt' }, input, el('span', {}, text));
      label.dataset.i = i;
      return { label, input, i };
    });
    const body = el('div', { class: 'opts' }, opts.map(o => o.label));

    const paint = () => opts.forEach(o => {
      o.label.classList.remove('is-correct', 'is-wrong', 'is-missed');
      if (o.i === ex.answer) o.label.classList.add(o.input.checked ? 'is-correct' : 'is-missed');
      else if (o.input.checked) o.label.classList.add('is-wrong');
    });

    return {
      body,
      check: () => { paint(); return opts.some(o => o.input.checked && o.i === ex.answer); },
      reveal: () => { opts[ex.answer].input.checked = true; paint(); },
      solutionText: () => ex.options[ex.answer],
      isAnswered: () => opts.some(o => o.input.checked),
    };
  },

  /* Кілька правильних варіантів ---------------------------------------- */
  multi(ex) {
    const answers = new Set(ex.answers);
    const opts = ex.options.map((text, i) => {
      const input = el('input', { type: 'checkbox' });
      const label = el('label', { class: 'opt' }, input, el('span', {}, text));
      return { label, input, i };
    });
    const body = el('div', { class: 'opts' }, opts.map(o => o.label));

    const paint = () => opts.forEach(o => {
      o.label.classList.remove('is-correct', 'is-wrong', 'is-missed');
      if (answers.has(o.i)) o.label.classList.add(o.input.checked ? 'is-correct' : 'is-missed');
      else if (o.input.checked) o.label.classList.add('is-wrong');
    });

    return {
      body,
      check: () => { paint(); return opts.every(o => o.input.checked === answers.has(o.i)); },
      reveal: () => { opts.forEach(o => { o.input.checked = answers.has(o.i); }); paint(); },
      solutionText: () => ex.answers.map(i => ex.options[i]).join(' · '),
      isAnswered: () => opts.some(o => o.input.checked),
    };
  },

  /* Richtig / Falsch ---------------------------------------------------- */
  truefalse(ex) {
    const name = 'q' + Math.random().toString(36).slice(2);
    const labels = ex.labels || ['Richtig', 'Falsch'];
    const opts = [true, false].map((val, i) => {
      const input = el('input', { type: 'radio', name });
      const label = el('label', { class: 'opt' }, input, el('span', {}, labels[i]));
      return { label, input, val };
    });
    const body = el('div', { class: 'tf' }, opts.map(o => o.label));

    const paint = () => opts.forEach(o => {
      o.label.classList.remove('is-correct', 'is-wrong', 'is-missed');
      if (o.val === ex.answer) o.label.classList.add(o.input.checked ? 'is-correct' : 'is-missed');
      else if (o.input.checked) o.label.classList.add('is-wrong');
    });

    return {
      body,
      check: () => { paint(); return opts.some(o => o.input.checked && o.val === ex.answer); },
      reveal: () => { opts.find(o => o.val === ex.answer).input.checked = true; paint(); },
      solutionText: () => (ex.answer ? labels[0] : labels[1]),
      isAnswered: () => opts.some(o => o.input.checked),
    };
  },

  /* Пропуски: q містить ___ на кожну відповідь --------------------------- */
  gap(ex, card) {
    // Речення вже виведено в шапці — прибираємо його звідти й будуємо з полями.
    card.querySelector('.ex__q')?.remove();

    const answers = Array.isArray(ex.answers) ? ex.answers : [ex.answers];
    const parts = String(ex.q).split('___');
    const line = el('p', { class: 'gap-line' });
    const inputs = [];

    parts.forEach((chunk, i) => {
      line.append(el('span', { html: chunk }));
      if (i < parts.length - 1) {
        const expected = answers[i] ?? '';
        const width = firstVariant(expected).length;
        const input = el('input', {
          class: 'gap' + (width <= 4 ? ' w-sm' : width >= 12 ? ' w-lg' : ''),
          type: 'text', autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false',
          'aria-label': `Пропуск ${i + 1}`,
        });
        inputs.push({ input, expected });
        line.append(input);
      }
    });

    const body = el('div', {}, line);
    if (ex.options) {
      body.prepend(el('p', { class: 'muted', style: 'font-size:.88rem;margin-bottom:.4rem' },
        'Слова для вибору: ', el('span', { class: 'de' }, ex.options.join(' · '))));
    }

    const paint = () => inputs.forEach(({ input, expected }) => {
      input.classList.remove('is-correct', 'is-wrong');
      input.classList.add(matches(input.value, expected) ? 'is-correct' : 'is-wrong');
    });

    return {
      body,
      check: () => { paint(); return inputs.every(({ input, expected }) => matches(input.value, expected)); },
      reveal: () => { inputs.forEach(({ input, expected }) => { input.value = firstVariant(expected); }); paint(); },
      solutionText: () => answers.map(firstVariant).join(' / '),
      isAnswered: () => inputs.some(({ input }) => input.value.trim()),
    };
  },

  /* Відповідності: ліворуч німецьке, праворуч select ---------------------- */
  match(ex) {
    const rights = ex.pairs.map(p => p[1]);
    const shuffled = shuffle(rights);
    const rows = ex.pairs.map(([left, right]) => {
      const select = el('select', {},
        el('option', { value: '' }, '— оберіть —'),
        shuffled.map(r => el('option', { value: r }, r)));
      const leftBox = el('div', { class: 'match__de' }, left);
      const b = ex.speak !== false ? speakBtn(left) : null;
      const row = el('div', { class: 'match__row' },
        el('div', { style: 'display:flex;align-items:center;gap:.5rem' }, leftBox, b),
        select);
      return { row, select, right };
    });

    const body = el('div', { class: 'match' }, rows.map(r => r.row));

    const paint = () => rows.forEach(r => {
      r.select.classList.remove('is-correct', 'is-wrong');
      r.select.classList.add(r.select.value === r.right ? 'is-correct' : 'is-wrong');
    });

    return {
      body,
      check: () => { paint(); return rows.every(r => r.select.value === r.right); },
      reveal: () => { rows.forEach(r => { r.select.value = r.right; }); paint(); },
      solutionText: () => ex.pairs.map(([l, r]) => `${l} — ${r}`).join('; '),
      isAnswered: () => rows.some(r => r.select.value),
    };
  },

  /* Порядок слів: клікаєш слова, збираєш речення -------------------------- */
  order(ex) {
    const slot = el('div', { class: 'order__slot', 'aria-label': 'Ваше речення' });
    const bank = el('div', { class: 'order__bank' });
    const body = el('div', {}, slot, bank);

    const build = () => {
      slot.replaceChildren();
      bank.replaceChildren();
      shuffle(ex.words).forEach(word => {
        const chip = el('button', { class: 'word-chip', type: 'button' }, word);
        chip.addEventListener('click', () => {
          chip.classList.add('is-used');
          const placed = el('button', { class: 'word-chip', type: 'button' }, word);
          placed.addEventListener('click', () => { placed.remove(); chip.classList.remove('is-used'); });
          slot.append(placed);
        });
        bank.append(chip);
      });
    };
    build();

    const built = () => [...slot.children].map(c => c.textContent).join(' ');

    const paint = (ok) => {
      slot.classList.remove('is-correct', 'is-wrong');
      slot.classList.add(ok ? 'is-correct' : 'is-wrong');
    };

    return {
      body,
      check: () => {
        const ok = String(ex.answer).split('|').some(v => norm(v) === norm(built()));
        paint(ok);
        return ok;
      },
      reveal: () => {
        slot.replaceChildren();
        bank.replaceChildren();
        firstVariant(ex.answer).replace(/[.?!]$/, '').split(' ').forEach(w => {
          slot.append(el('span', { class: 'word-chip' }, w));
        });
        paint(true);
        slot.classList.remove('is-correct');
      },
      solutionText: () => firstVariant(ex.answer),
      isAnswered: () => slot.children.length > 0,
    };
  },
};

/* --------------------------------------------- набір вправ (секція) ----- */

export function renderExerciseSet(list, opts = {}) {
  const wrapper = el('div', { class: 'stack' });
  const items = list.map((ex, i) => {
    const r = renderExercise(ex, i + 1, opts);
    wrapper.append(r.el);
    return r;
  });
  return { el: wrapper, items };
}
