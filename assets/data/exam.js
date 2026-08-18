/* Структура пробного іспиту (Modelltest) за рівнями.
   Хвилини й розподіл балів узяті зі структури Goethe-Zertifikat:
   кожна частина дає 25 балів, разом 100.

   perModule: true — на B2 і C1 кожну частину треба скласти окремо,
   на A1–B1 достатньо 60 % від суми. */

export const EXAM = {
  a1: {
    title: 'Goethe-Zertifikat A1 · Start Deutsch 1',
    perModule: false,
    lesen: 12, hoeren: 3,
    parts: [
      { id: 'lesen',     minutes: 25 },
      { id: 'hoeren',    minutes: 20 },
      { id: 'schreiben', minutes: 20 },
      { id: 'sprechen',  minutes: 15 },
    ],
    note: 'На справжньому іспиті письмова частина йде без перерви, а усна — окремо, у парі з іншим кандидатом. Прохідний бал — 60 зі 100.',
  },
  a2: {
    title: 'Goethe-Zertifikat A2',
    perModule: false,
    lesen: 10, hoeren: 3,
    parts: [
      { id: 'lesen',     minutes: 30 },
      { id: 'hoeren',    minutes: 30 },
      { id: 'schreiben', minutes: 30 },
      { id: 'sprechen',  minutes: 15 },
    ],
    note: 'Письмова частина триває 90 хвилин без перерви. Прохідний бал — 60 зі 100.',
  },
  b1: {
    title: 'Goethe-Zertifikat B1',
    perModule: false,
    lesen: 10, hoeren: 4,
    parts: [
      { id: 'lesen',     minutes: 65 },
      { id: 'hoeren',    minutes: 40 },
      { id: 'schreiben', minutes: 60 },
      { id: 'sprechen',  minutes: 15 },
    ],
    note: 'B1 можна складати помодульно: кожну частину окремо й у різні дні. Тут усе зібрано в один захід. Прохідний бал — 60 зі 100.',
  },
  b2: {
    title: 'Goethe-Zertifikat B2',
    perModule: true,
    lesen: 10, hoeren: 4,
    parts: [
      { id: 'lesen',     minutes: 65 },
      { id: 'hoeren',    minutes: 40 },
      { id: 'schreiben', minutes: 75 },
      { id: 'sprechen',  minutes: 15 },
    ],
    note: 'З 2019 року B2 складають помодульно, і кожен модуль треба скласти окремо на 60 %. Загальних 60 % недостатньо.',
  },
  c1: {
    title: 'Goethe-Zertifikat C1',
    perModule: true,
    lesen: 10, hoeren: 4,
    parts: [
      { id: 'lesen',     minutes: 70 },
      { id: 'hoeren',    minutes: 40 },
      { id: 'schreiben', minutes: 80 },
      { id: 'sprechen',  minutes: 15 },
    ],
    note: 'Кожен модуль оцінюють окремо, прохідний бал у кожному — 60 %. Усна частина відбувається в парі й триває близько 15 хвилин.',
  },
};

export const PART_META = {
  lesen:     { label: 'Читання',    de: 'Lesen',     icon: '📖' },
  hoeren:    { label: 'Аудіювання', de: 'Hören',     icon: '🎧' },
  schreiben: { label: 'Письмо',     de: 'Schreiben', icon: '✍' },
  sprechen:  { label: 'Мовлення',   de: 'Sprechen',  icon: '🗣' },
};
