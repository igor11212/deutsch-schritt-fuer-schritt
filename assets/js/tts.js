/* Озвучення німецьких текстів через Web Speech API браузера.
   Жодних аудіофайлів — працює офлайн і на GitHub Pages. */

const synth = window.speechSynthesis;

let voices = [];
let current = null;          // { utter, onEnd }

export const ttsSupported = typeof synth !== 'undefined' && typeof window.SpeechSynthesisUtterance !== 'undefined';

function loadVoices() {
  if (!ttsSupported) return;
  voices = synth.getVoices() || [];
}
if (ttsSupported) {
  loadVoices();
  synth.addEventListener?.('voiceschanged', loadVoices);
}

/** Найкращий доступний німецький голос. */
function pickVoice() {
  if (!voices.length) loadVoices();
  const de = voices.filter(v => /^de(-|_|$)/i.test(v.lang || ''));
  if (!de.length) return null;
  // Локальні голоси звучать стабільніше й не потребують мережі.
  const preferred = ['Anna', 'Markus', 'Petra', 'Yannick', 'Helena', 'Google Deutsch'];
  for (const name of preferred) {
    const hit = de.find(v => (v.name || '').includes(name));
    if (hit) return hit;
  }
  return de.find(v => v.localService) || de[0];
}

export function hasGermanVoice() {
  if (!ttsSupported) return false;
  if (!voices.length) loadVoices();
  return voices.some(v => /^de(-|_|$)/i.test(v.lang || ''));
}

export function stop() {
  if (!ttsSupported) return;
  synth.cancel();
  if (current?.onEnd) current.onEnd();
  current = null;
}

/**
 * Промовити німецький текст.
 * @param {string} text
 * @param {{rate?: number, onStart?: Function, onEnd?: Function}} opts
 */
export function speak(text, opts = {}) {
  if (!ttsSupported || !text) return;
  stop();

  const utter = new SpeechSynthesisUtterance(String(text));
  const voice = pickVoice();
  if (voice) utter.voice = voice;
  utter.lang = voice?.lang || 'de-DE';
  utter.rate = opts.rate ?? 0.92;
  utter.pitch = 1;

  const finish = () => {
    if (current?.utter === utter) current = null;
    opts.onEnd?.();
  };
  utter.addEventListener('end', finish);
  utter.addEventListener('error', finish);

  current = { utter, onEnd: opts.onEnd };
  opts.onStart?.();
  synth.speak(utter);
}

/**
 * Промовити діалог репліками з паузами між ними.
 * @param {Array<{speaker?: string, de: string}>} lines
 */
export function speakDialogue(lines, opts = {}) {
  if (!ttsSupported || !lines?.length) return;
  stop();

  const voice = pickVoice();
  const rate = opts.rate ?? 0.92;
  let cancelled = false;
  let i = 0;

  opts.onStart?.();

  const next = () => {
    if (cancelled) return;
    if (i >= lines.length) { current = null; opts.onEnd?.(); return; }
    const line = lines[i++];
    const utter = new SpeechSynthesisUtterance(line.de);
    if (voice) utter.voice = voice;
    utter.lang = voice?.lang || 'de-DE';
    utter.rate = rate;
    // Легка зміна висоти голосу, щоб репліки різних мовців було чути окремо.
    utter.pitch = i % 2 === 0 ? 0.92 : 1.08;
    utter.addEventListener('end', () => setTimeout(next, 380));
    utter.addEventListener('error', () => setTimeout(next, 120));
    synth.speak(utter);
  };

  current = { utter: null, onEnd: () => { cancelled = true; opts.onEnd?.(); } };
  next();
}

/** Зупиняти мовлення при переході між сторінками. */
window.addEventListener('hashchange', stop);
window.addEventListener('pagehide', stop);
