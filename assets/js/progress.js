/* Прогрес по всьому курсу. Усе живе в localStorage браузера — ані реєстрації,
   ані сервера. Тут лише дані й підрахунки: жодного DOM, щоб логіку можна було
   перевірити окремо від сторінки. */

const KEY = 'dssf-progress';
export const PASS = 60;            // прохідний бал, як на реальному іспиті

/* Порожня структура рівня. Тримаємо все в одному об'єкті, щоб зберігати
   одним записом і не боятися часткових оновлень. */
function emptyLevel() {
  return { tests: {}, ex: {}, skills: {}, exam: null };
}

export function load() {
  let raw;
  try { raw = JSON.parse(localStorage.getItem(KEY) || '{}'); } catch { raw = {}; }
  if (!raw || typeof raw !== 'object') raw = {};
  if (!raw.levels || typeof raw.levels !== 'object') raw.levels = {};
  return { v: 1, levels: raw.levels, last: raw.last || null };
}

export function save(state) {
  try { localStorage.setItem(KEY, JSON.stringify(state)); } catch { /* приватний режим */ }
  return state;
}

function levelOf(state, levelId) {
  if (!state.levels[levelId]) state.levels[levelId] = emptyLevel();
  const L = state.levels[levelId];
  L.tests ||= {}; L.ex ||= {}; L.skills ||= {};
  return L;
}

export function today() {
  const d = new Date();
  const p = n => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

/** Дату показуємо по-людськи: 18.08.2026. */
export function human(date) {
  if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) return '';
  const [y, m, d] = date.split('-');
  return `${d}.${m}.${y}`;
}

/* ------------------------------------------------------------ тести ---- */

/** Записує результат тесту модуля. Зберігаємо найкращу спробу, але й лічимо,
    скільки разів тест проходили — це чесніше, ніж показувати лише рекорд. */
export function saveTest(levelId, index, { right, total }) {
  const state = load();
  const L = levelOf(state, levelId);
  const key = String(index);
  const pct = total ? Math.round((right / total) * 100) : 0;
  const prev = L.tests[key];
  L.tests[key] = {
    pct: prev ? Math.max(prev.pct, pct) : pct,
    right: prev && prev.pct >= pct ? prev.right : right,
    total,
    last: pct,
    date: today(),
    tries: (prev?.tries || 0) + 1,
  };
  return save(state).levels[levelId].tests[key];
}

export function getTest(state, levelId, index) {
  return state.levels[levelId]?.tests?.[String(index)] || null;
}

/* ----------------------------------------------------------- вправи ---- */

/** Скільки завдань модуля вже опрацьовано. Свідомо не називаємо це
    «правильно»: у вправах відповідь можна просто показати. */
export function saveExercises(levelId, index, { done, total }) {
  const state = load();
  const L = levelOf(state, levelId);
  const key = String(index);
  const prev = L.ex[key];
  if (prev && prev.done >= done && prev.total === total) return prev;
  L.ex[key] = { done: Math.max(done, prev?.done || 0), total, date: today() };
  return save(state).levels[levelId].ex[key];
}

export function getExercises(state, levelId, index) {
  return state.levels[levelId]?.ex?.[String(index)] || null;
}

/* ---------------------------------------------------------- навички ---- */

export function saveSkill(levelId, skillId, patch) {
  const state = load();
  const L = levelOf(state, levelId);
  const prev = L.skills[skillId] || {};
  const next = { ...prev, ...patch, date: today() };
  if (typeof prev.done === 'number' && typeof next.done === 'number') {
    next.done = Math.max(prev.done, next.done);
  }
  L.skills[skillId] = next;
  return save(state).levels[levelId].skills[skillId];
}

export function getSkill(state, levelId, skillId) {
  return state.levels[levelId]?.skills?.[skillId] || null;
}

/* ------------------------------------------------------- пробний іспит - */

export function saveExam(levelId, result) {
  const state = load();
  const L = levelOf(state, levelId);
  const prev = L.exam;
  const next = { ...result, date: today(), tries: (prev?.tries || 0) + 1 };
  // Зберігаємо кращу спробу, але завжди пам'ятаємо дату останньої.
  L.exam = (prev && prev.pct > next.pct) ? { ...prev, tries: next.tries, lastDate: next.date } : next;
  return save(state).levels[levelId].exam;
}

export function getExam(state, levelId) {
  return state.levels[levelId]?.exam || null;
}

/* --------------------------------------------------------- «продовжити» */

export function setLast(hash, title) {
  if (!hash || hash === '#/' || hash === '#/progress') return;
  const state = load();
  state.last = { hash, title, date: today() };
  save(state);
}

export function getLast(state) {
  return state.last || null;
}

/* ------------------------------------------------------------ підсумки - */

/** Зведення по рівню: скільки модулів складено, середній бал, стан навичок. */
export function levelStats(state, levelId, moduleCount) {
  const L = state.levels[levelId] || emptyLevel();
  const tests = Object.entries(L.tests || {})
    .filter(([k]) => Number(k) >= 1 && Number(k) <= moduleCount)
    .map(([, v]) => v);
  const passed = tests.filter(t => t.pct >= PASS).length;

  const avg = tests.length ? Math.round(tests.reduce((s, t) => s + t.pct, 0) / tests.length) : 0;
  const exam = L.exam || null;
  return {
    passed, started: tests.length, avg, total: moduleCount,
    pct: moduleCount ? Math.round((passed / moduleCount) * 100) : 0,
    exam,
    skills: L.skills || {},
    touched: tests.length > 0 || !!exam || Object.keys(L.skills || {}).length > 0,
  };
}

/** Один відсоток на весь курс — для головної сторінки. */
export function courseStats(state, counts) {
  let passed = 0, total = 0;
  Object.entries(counts).forEach(([levelId, n]) => {
    total += n;
    passed += levelStats(state, levelId, n).passed;
  });
  return { passed, total, pct: total ? Math.round((passed / total) * 100) : 0 };
}

/* ------------------------------------------------------------ скидання - */

export function resetLevel(levelId) {
  const state = load();
  delete state.levels[levelId];
  return save(state);
}

export function resetAll() {
  const state = { v: 1, levels: {}, last: null };
  return save(state);
}
