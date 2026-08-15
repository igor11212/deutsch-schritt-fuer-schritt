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

/** Німецькі голоси, відсортовані за очікуваною якістю. */
function germanVoices() {
  if (!voices.length) loadVoices();
  const de = voices.filter(v => /^de(-|_|$)/i.test(v.lang || ''));
  const score = v => {
    const n = (v.name || '');
    let s = 0;
    if (/premium|enhanced|neural|natural/i.test(n)) s += 40;   // сучасні синтезатори
    if (/google/i.test(n)) s += 25;                            // якісні хмарні
    if (/siri/i.test(n)) s += 20;
    if (/^de-DE/i.test(v.lang)) s += 6;                        // стандартна вимова
    if (v.localService) s += 4;
    if (/compact|eloquence/i.test(n)) s -= 30;                 // старі, дуже механічні
    return s;
  };
  return de.sort((a, b) => score(b) - score(a));
}

function bestVoice() {
  return germanVoices()[0] || null;
}

export function hasGermanVoice() {
  return ttsSupported && germanVoices().length > 0;
}

/** Скільки різних голосів доступно — щоб не обіцяти діалог двома голосами даремно. */
export function germanVoiceCount() {
  return ttsSupported ? germanVoices().length : 0;
}

/* ─────────────────────────── розбиття на синтагми ────────────────────── */

/** Ділить фразу за розділовими знаками; кожен шматок отримує паузу після себе. */
function chunks(text) {
  const out = [];
  const re = /[^,;:.!?…]+[,;:.!?…]*/g;
  for (const m of String(text).match(re) || []) {
    const piece = m.trim();
    if (!piece) continue;
    const last = piece.slice(-1);
    const pause = /[.!?…]/.test(last) ? 380
                : /[;:]/.test(last)   ? 260
                : /,/.test(last)      ? 190
                : 0;
    out.push({ text: piece, pause });
  }
  return out.length ? out : [{ text: String(text), pause: 0 }];
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

    const go = () => setTimeout(next, item.pause);
    u.addEventListener('end', go);
    u.addEventListener('error', () => setTimeout(next, 60));
    synth.speak(u);
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
  const rate = opts.rate ?? 0.92;
  const list = chunks(text).map((c, i) => ({
    ...c, voice,
    rate: rate + jitter(i + 1, 0.02),
    pitch: 1 + jitter(i + 7, 0.03),
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

  const pool = germanVoices();
  const base = opts.rate ?? 0.92;

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
        rate: v.rate + jitter(li * 31 + ci, 0.015),
        pitch: v.pitch + jitter(li * 17 + ci, 0.025),
        // пауза між репліками помітно довша, ніж усередині фрази
        pause: isLast ? (li === lines.length - 1 ? 0 : 560) : c.pause,
      });
    });
  });

  speakChunks(list, opts);
}

/* Зупиняти мовлення при переході між сторінками. */
window.addEventListener('hashchange', stop);
window.addEventListener('pagehide', stop);
