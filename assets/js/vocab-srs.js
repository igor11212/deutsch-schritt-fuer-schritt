/* Інтервальне повторення (система Ляйтнера) і генератор вправ зі словника рівня.
   Модуль чисто логічний: не створює DOM і нічого не малює — лише рахує стан слів
   і повертає готові об’єкти вправ для рушія exercises.js. */

const KEY = 'dssf-vocab';

/* Коробка 1..5 і скільки днів до наступного показу. Слово, яке щойно вивчили,
   повертається завтра; те, що вижило п’ять разів, — аж через місяць. */
export const INTERVALS = [1, 3, 7, 14, 30];
export const LAST_BOX = 5;

/** Слово вважаємо вивченим, коли воно пройшло три успішні повторення. */
export const KNOWN_BOX = 3;

function today() {
  const d = new Date();
  return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
}

function addDays(n) {
  const d = new Date();
  d.setDate(d.getDate() + n);
  return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
}

/** Читає стан рівня. Старий формат (простий список вивчених) переносить у коробки. */
export function load(levelId) {
  let all = {};
  try { all = JSON.parse(localStorage.getItem(KEY) || '{}'); } catch { /* приватний режим */ }
  const raw = all[levelId];
  if (Array.isArray(raw)) {                       // формат до появи повторень
    const map = {};
    raw.forEach(w => { map[w] = { b: LAST_BOX, d: addDays(30) }; });
    return map;
  }
  return raw && typeof raw === 'object' ? raw : {};
}

export function save(levelId, map) {
  try {
    const all = JSON.parse(localStorage.getItem(KEY) || '{}');
    all[levelId] = map;
    localStorage.setItem(KEY, JSON.stringify(all));
  } catch { /* приватний режим — просто не зберігаємо */ }
}

export function isKnown(map, word) { return (map[word]?.b || 0) >= KNOWN_BOX; }
export function isDue(map, word) {
  const e = map[word];
  return !!e && e.d <= today();
}
export function boxOf(map, word) { return map[word]?.b || 0; }

/** Успішна відповідь: слово піднімається на коробку вище. */
export function promote(map, word) {
  const b = Math.min((map[word]?.b || 0) + 1, LAST_BOX);
  map[word] = { b, d: addDays(INTERVALS[b - 1]) };
  return map;
}

/** Помилка або «ще вчу»: слово падає в першу коробку й повертається завтра. */
export function demote(map, word) {
  map[word] = { b: 1, d: addDays(INTERVALS[0]) };
  return map;
}

export function reset(map, word) { delete map[word]; return map; }

/** Зведення для смуги прогресу. */
export function stats(groups, map) {
  const all = groups.flatMap(g => g.items);
  let known = 0, learning = 0, due = 0;
  all.forEach(it => {
    const b = boxOf(map, it.de);
    if (b >= KNOWN_BOX) known++;
    else if (b > 0) learning++;
    if (b > 0 && isDue(map, it.de)) due++;
  });
  return { total: all.length, known, learning, due, fresh: all.length - known - learning };
}

/** Скільки слів рівня вже вважаються вивченими — без потреби вантажити
    сам словник (потрібно сторінці прогресу). */
export function knownCount(map) {
  return Object.values(map || {}).filter(v => (v?.b || 0) >= KNOWN_BOX).length;
}

/* ─────────────────────────── генератор вправ ─────────────────────────── */

/** Прибирає службові хвости: «der Name, -n (des Namens)» → «der Name». */
export function cleanWord(de) {
  return String(de)
    .replace(/\s*\((?:Pl\.|des)[^)]*\)/g, '')
    .replace(/,\s*[^,]*$/, '')
    .trim();
}

/** Придатне для завдань із вибором: без пар, стрілок і трьох крапок. */
function usable(it) {
  const de = String(it.de);
  return it.uk && !/[↔→…]/.test(de) && !/\s\/\s/.test(de) && de.length <= 34;
}

/** Придатне для власного речення: не готовий вигук чи запитання-зразок. */
function writable(it) {
  const w = bareWord(it.de);
  return usable(it) && !/[!?]/.test(it.de) && w.split(/\s+/).length <= 4;
}

/** Придатне для диктанту: ще й без прийменникових позначок і не задовге. */
function dictatable(it) {
  const w = cleanWord(it.de);
  return usable(it) && !/[+«»]/.test(w) && w.split(/\s+/).length <= 3 && w.length <= 24;
}

function shuffle(a) {
  const r = a.slice();
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [r[i], r[j]] = [r[j], r[i]];
  }
  return r;
}

/**
 * Три відволікачі з тієї самої теми — інакше вибір стає надто легким.
 * Варіанти, що збігаються з правильною відповіддю, відкидаємо: у словнику є
 * різні слова з однаковим перекладом (in Betracht ziehen і Rechnung tragen —
 * обидва «враховувати»), і такий варіант зробив би завдання нерозв’язним.
 */
function distractors(item, pool, field, correct, n = 3) {
  const text = x => (field === 'uk' ? x.uk : cleanWord(x.de));
  const seen = new Set([correct]);
  const take = list => {
    const out = [];
    for (const x of shuffle(list)) {
      if (out.length >= n) break;
      const t = text(x);
      if (x.de === item.de || seen.has(t)) continue;
      seen.add(t);
      out.push(t);
    }
    return out;
  };
  const picked = take(pool.filter(x => x.group === item.group));
  if (picked.length < n) {
    picked.push(...take(pool.filter(x => x.group !== item.group)).slice(0, n - picked.length));
  }
  return picked;
}

/** Індекси тем, з яких генератор узагалі може скласти завдання. */
export function quizableThemes(groups) {
  return groups.map((g, i) => (g.items.filter(usable).length >= 4 ? i : -1)).filter(i => i >= 0);
}

/**
 * Складає раунд вправ. Спершу беруться слова, які сьогодні на повторення,
 * потім нові, потім решта — тож вправи самі ведуть до потрібного матеріалу.
 * @returns {Array} об’єкти вправ для renderExerciseSet; кожен має поле `word`.
 */
export function buildQuiz(groups, map, { size = 12, groupIndex = null, withAudio = true } = {}) {
  const source = groupIndex === null ? groups : [groups[groupIndex]];
  const pool = source.flatMap(g => g.items.map(it => ({ ...it, group: g.group }))).filter(usable);
  if (pool.length < 4) return [];

  const due   = pool.filter(it => isDue(map, it.de));
  const fresh = pool.filter(it => boxOf(map, it.de) === 0);
  const other = pool.filter(it => !due.includes(it) && !fresh.includes(it));
  const queue = [...shuffle(due), ...shuffle(fresh), ...shuffle(other)].slice(0, size);

  const out = queue.map((it, i) => {
    const de = cleanWord(it.de);
    const kind = i % 4;

    if (kind === 3 && withAudio && dictatable(it)) {
      return {
        type: 'gap', word: it.de, audio: de,
        q: 'Прослухайте й запишіть слово: ___',
        answers: [de.replace(/ß/g, 'ß')],
        hint: `Тема: ${it.group}. Переклад: ${it.uk}`,
        explain: it.uk,
      };
    }

    if (kind === 1) {                                  // українська → німецька
      const options = shuffle([de, ...distractors(it, pool, 'de', de)]);
      return {
        type: 'choice', word: it.de,
        q: `Як буде «${it.uk}»?`,
        options, answer: options.indexOf(de),
        explain: it.ex || '',
      };
    }

    const options = shuffle([it.uk, ...distractors(it, pool, 'uk', it.uk)]);  // німецька → українська
    return {
      type: 'choice', word: it.de,
      q: `Що означає <span class="de-inline">${de}</span>?`,
      options, answer: options.indexOf(it.uk),
      audio: withAudio ? de : undefined,
      explain: it.ex || '',
    };
  });

  // завдання з неповним набором варіантів краще не показувати зовсім
  return out.filter(ex => ex.type !== 'choice' || ex.options.length === 4);
}

/* ───────────────────── речення з новим словом ───────────────────── */

/** Прибирає службові позначки: «sich freuen über + Akk.» → «sich freuen über». */
function bareWord(de) {
  return cleanWord(de).replace(/\s*\+\s*(Akk|Dat|Gen)\.?/g, '').trim();
}

const NO_UMLAUT = { ä: 'a', ö: 'o', ü: 'u', ß: 's' };
/** Зводимо ä і ae до одного вигляду — учень може написати будь-як. */
function norm(s) {
  return String(s).toLowerCase()
    .replace(/[äöüß]/g, c => NO_UMLAUT[c])
    .replace(/ae/g, 'a').replace(/oe/g, 'o').replace(/ue/g, 'u').replace(/ss/g, 's');
}

/** Префікси, які в реченні відриваються: Ich stehe … auf. */
const SEPARABLE = ['zurück', 'wieder', 'durch', 'unter', 'statt', 'über', 'nach', 'vor',
  'aus', 'ein', 'mit', 'weg', 'los', 'bei', 'her', 'hin', 'an', 'auf', 'ab', 'zu', 'um'];

/**
 * Форми, за якими шукаємо слово в реченні. Німецьке слово змінюється
 * (wohnen → wohne, der Tisch → dem Tisch), тому шукаємо не ціле слово,
 * а достатньо довгу основу — і окремо частини складених дієслів.
 */
export function wordForms(de) {
  const bare = bareWord(de);
  const words = bare.split(/\s+/).filter(w => !/^(der|die|das|sich|ein|eine)$/i.test(w));
  const forms = new Set();
  words.forEach(w => {
    const n = norm(w).replace(/[^a-z]/g, '');
    if (n.length >= 3) forms.add(n);
    if (n.length >= 5) forms.add(n.slice(0, -2));   // wohnen → wohn, machen → mach
    if (n.length >= 6) forms.add(n.slice(0, -3));   // arbeiten → arbei

    // відокремлюване дієслово: у реченні лишається сама основа — «stehe … auf»
    const pref = SEPARABLE.find(p => n.startsWith(norm(p)) && n.length - norm(p).length >= 4);
    if (pref) {
      const stem = n.slice(norm(pref).length);
      forms.add(stem);
      if (stem.length >= 5) forms.add(stem.slice(0, -2));
    }
  });
  return [...forms].filter(f => f.length >= 3);
}

/** Чи вжито слово в реченні (з поправкою на відмінювання й умлаути). */
export function containsWord(sentence, de) {
  const hay = norm(sentence);
  return wordForms(de).some(f => hay.includes(f));
}

/**
 * Слова для письмової практики: спершу ті, що сьогодні на повторення,
 * потім ті, що в роботі, потім нові. Пари й схеми відкидаємо — з них
 * речення не складеш.
 */
export function pickForWriting(groups, map, { count = 5, groupIndex = null } = {}) {
  const source = groupIndex === null ? groups : [groups[groupIndex]];
  const pool = source
    .flatMap(g => g.items.map(it => ({ ...it, group: g.group })))
    .filter(it => writable(it));

  const due      = pool.filter(it => isDue(map, it.de));
  const learning = pool.filter(it => boxOf(map, it.de) > 0 && !isDue(map, it.de));
  const fresh    = pool.filter(it => boxOf(map, it.de) === 0);
  return [...shuffle(due), ...shuffle(fresh), ...shuffle(learning)].slice(0, count);
}
