/* Озвучення німецьких текстів через Web Speech API браузера.
   Жодних аудіофайлів — працює офлайн і на GitHub Pages.

   Природність досягається трьома речами:
   1) вибираємо найякісніший доступний голос (Premium / Enhanced / Neural);
   2) кожному мовцеві діалогу — свій голос, а не та сама вимова з іншою висотою;
   3) фраза розбивається на синтагми, між якими стоять паузи різної довжини —
      саме рівні паузи й монотонний темп роблять машинну мову «роботною». */

const synth = window.speechSynthesis;

let voices = [];
let session = null;          // поточне відтворення

export const ttsSupported = typeof synth !== 'undefined' && typeof window.SpeechSynthesisUtterance !== 'undefined';

function loadVoices() {
  if (!ttsSupported) return;
  voices = synth.getVoices() || [];
}
if (ttsSupported) {
  loadVoices();
  synth.addEventListener?.('voiceschanged', loadVoices);
}

/* ─────────────────────────────── голоси ─────────────────────────────── */

/* Голоси, які краще не ставити першими: застарілі рушії або надто
   стилізовані «характерні» голоси — для мовного курсу потрібна нейтральна вимова. */
const LEGACY   = /^(anna|petra|yannick|helena|steffi)\b/i;      // старі compact-голоси macOS
const NOVELTY  = /grandma|grandpa|rocko|bubbles|jester|organ|trinoids|wobble|whisper/i;

/** Німецькі голоси, відсортовані за очікуваною якістю. */
function germanVoices() {
  if (!voices.length) loadVoices();
  const de = voices.filter(v => /^de(-|_|$)/i.test(v.lang || ''));
  const score = v => {
    const n = (v.name || '');
    let s = 0;
    if (/premium|enhanced|neural|natural/i.test(n)) s += 60;   // сучасні синтезатори
    if (/siri/i.test(n)) s += 40;
    // Голоси Apple нового покоління підписані як «Ім’я (Мова (Країна))» —
    // вони живіші за старі хмарні, тож ідуть попереду Google.
    if (/\(.+\(.+\)\)/.test(n)) s += 34;
    if (/google/i.test(n)) s += 30;                            // якісні хмарні
    if (/^de-DE/i.test(v.lang)) s += 6;                        // стандартна вимова
    if (v.localService) s += 3;
    if (NOVELTY.test(n)) s -= 25;                              // характерні, не для навчання
    if (LEGACY.test(n) && !/premium|enhanced/i.test(n)) s -= 35;
    if (/compact|eloquence/i.test(n)) s -= 40;
    return s;
  };
  return de.map((v, i) => ({ v, i, s: score(v) }))
           .sort((a, b) => b.s - a.s || a.i - b.i)
           .map(x => x.v);
}

/* ─────────────────── вибір голосу користувачем ─────────────────── */

const PREF_KEY = 'dssf-voices';
let prefs = [];
try { prefs = JSON.parse(localStorage.getItem(PREF_KEY) || '[]'); } catch { prefs = []; }

/** Усі німецькі голоси системи — для списку вибору в інтерфейсі. */
export function listGermanVoices() {
  return germanVoices().map(v => ({ name: v.name, local: v.localService }));
}

export function getVoicePrefs() { return [...prefs]; }

export function setVoicePrefs(names) {
  prefs = (names || []).filter(Boolean);
  try { localStorage.setItem(PREF_KEY, JSON.stringify(prefs)); } catch { /* приватний режим */ }
}

/** Обрані користувачем ідуть першими, решта — за рейтингом якості. */
function voicePool() {
  const all = germanVoices();
  const chosen = prefs.map(n => all.find(v => v.name === n)).filter(Boolean);
  return [...chosen, ...all.filter(v => !chosen.includes(v))];
}

function bestVoice() {
  return voicePool()[0] || null;
}

export function hasGermanVoice() {
  return ttsSupported && germanVoices().length > 0;
}

/** Скільки різних голосів доступно — щоб не обіцяти діалог двома голосами даремно. */
export function germanVoiceCount() {
  return ttsSupported ? germanVoices().length : 0;
}

/* ─────────────────────────── розбиття на синтагми ────────────────────── */

/** Ділить фразу за розділовими знаками; кожен шматок отримує паузу й інтонацію.
 *  Інтонація важлива: у німецькій крапка = падіння тону, кома = утримання,
 *  знак питання = підйом. Рівний тон усюди — головна ознака машинної мови. */
function chunks(text) {
  const out = [];
  const re = /[^,;:.!?…]+[,;:.!?…]*/g;
  for (const m of String(text).match(re) || []) {
    const piece = m.trim();
    if (!piece) continue;
    const last = piece.slice(-1);
    const isQuestion = /\?/.test(piece);
    const pause = /[.!?…]/.test(last) ? 400
                : /[;:]/.test(last)   ? 280
                : /,/.test(last)      ? 200
                : 0;
    // Перед протиставленням людина мимоволі робить коротку паузу.
    const beforeContrast = /^(aber|sondern|denn|doch|allerdings|trotzdem)\b/i.test(piece) ? 120 : 0;
    out.push({
      text: piece,
      pause,
      lead: beforeContrast,
      tone: isQuestion ? 0.07                       // питання — вгору
          : /[.!…]/.test(last) ? -0.05              // завершення — вниз
          : 0.02,                                   // продовження — трохи вище
    });
  }
  return out.length ? out : [{ text: String(text), pause: 0, lead: 0, tone: 0 }];
}

/** Невелике детерміноване відхилення, щоб репліки не звучали під копірку. */
function jitter(seed, spread) {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return (x - Math.floor(x) - 0.5) * 2 * spread;
}

/* ────────────────────────────── відтворення ──────────────────────────── */

export function stop() {
  if (!ttsSupported) return;
  const s = session;
  session = null;
  if (s) { s.cancelled = true; s.onEnd?.(); }
  synth.cancel();
}

function speakChunks(list, opts) {
  const s = { cancelled: false, onEnd: opts.onEnd };
  session = s;
  opts.onStart?.();

  let i = 0;
  const next = () => {
    if (s.cancelled) return;
    if (i >= list.length) { if (session === s) session = null; opts.onEnd?.(); return; }

    const item = list[i++];
    const u = new SpeechSynthesisUtterance(item.text);
    if (item.voice) u.voice = item.voice;
    u.lang = item.voice?.lang || 'de-DE';
    u.rate = Math.max(0.5, Math.min(1.6, item.rate));
    u.pitch = Math.max(0.6, Math.min(1.5, item.pitch));

    // Пауза з невеликим розкидом — рівні інтервали звучать механічно.
    const wait = Math.round(item.pause * (0.85 + Math.random() * 0.3));
    const go = () => setTimeout(next, wait);
    u.addEventListener('end', go);
    u.addEventListener('error', () => setTimeout(next, 60));

    if (item.lead) setTimeout(() => synth.speak(u), item.lead);
    else synth.speak(u);
  };
  next();
}

/**
 * Промовити окремий текст — слово, приклад, репліку вправи.
 * @param {string} text
 * @param {{rate?: number, onStart?: Function, onEnd?: Function}} opts
 */
export function speak(text, opts = {}) {
  if (!ttsSupported || !text) return;
  stop();
  const voice = bestVoice();
  const rate = opts.rate ?? 1.0;
  const scale = opts.pauseScale ?? 1;
  const list = chunks(text).map((c, i) => ({
    ...c,
    voice,
    pause: Math.round(c.pause * scale),
    rate: rate + jitter(i + 1, 0.02),
    pitch: 1 + c.tone + jitter(i + 7, 0.025),
  }));
  speakChunks(list, opts);
}

/**
 * Промовити діалог: кожному мовцеві — свій голос і своя манера.
 * @param {Array<{speaker?: string, de: string}>} lines
 * @param {{rate?: number, onStart?: Function, onEnd?: Function}} opts
 */
export function speakDialogue(lines, opts = {}) {
  if (!ttsSupported || !lines?.length) return;
  stop();

  const pool = voicePool();
  const base = opts.rate ?? 1.0;
  // Для новачків розтягуємо не звуки, а паузи — саме так робить викладач.
  const scale = opts.pauseScale ?? 1;

  // Стабільне закріплення голосу за мовцем у межах діалогу.
  const speakers = [...new Set(lines.map(l => l.speaker || '—'))];
  const bySpeaker = new Map();
  speakers.forEach((name, idx) => {
    const voice = pool.length > 1 ? pool[idx % pool.length] : pool[0] || null;
    bySpeaker.set(name, {
      voice,
      // якщо голос лише один, розводимо мовців висотою й темпом
      pitch: pool.length > 1 ? 1 + jitter(idx + 3, 0.04)
                             : (idx % 2 === 0 ? 1.09 : 0.93),
      rate:  base + (pool.length > 1 ? jitter(idx + 11, 0.03) : (idx % 2 === 0 ? 0.02 : -0.02)),
    });
  });

  const list = [];
  lines.forEach((line, li) => {
    const v = bySpeaker.get(line.speaker || '—');
    const cs = chunks(line.de);
    cs.forEach((c, ci) => {
      const isLast = ci === cs.length - 1;
      list.push({
        text: c.text,
        voice: v.voice,
        lead: c.lead,
        rate: v.rate + jitter(li * 31 + ci, 0.015),
        pitch: v.pitch + c.tone + jitter(li * 17 + ci, 0.02),
        // Пауза між репліками довша за внутрішньофразову; на низьких рівнях
        // саме вона дає час зрозуміти почуте, а темп лишається живим.
        pause: Math.round((isLast ? (li === lines.length - 1 ? 0 : 520) : c.pause) * scale),
      });
    });
  });

  speakChunks(list, opts);
}

/* Зупиняти мовлення при переході між сторінками. */
window.addEventListener('hashchange', stop);
window.addEventListener('pagehide', stop);
