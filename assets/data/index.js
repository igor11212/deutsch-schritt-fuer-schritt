/* Каталог рівнів. Вміст кожного рівня довантажується окремо (dynamic import),
   тому головна сторінка відкривається миттєво. */

export const LEVELS = [
  {
    id: 'a1', code: 'A1', title: 'Anfänger',
    desc: 'Перші кроки: алфавіт, знайомство, теперішній час, артиклі, Perfekt. Ви розумієте прості фрази про себе, родину, покупки та побут.',
    exam: 'Goethe-Zertifikat A1 · ÖSD Zertifikat A1',
    words: '≈ 650 слів', hours: '≈ 120 годин', status: 'full',
  },
  {
    id: 'a2', code: 'A2', title: 'Grundstufe',
    desc: 'Минулий час, підрядні речення з weil і dass, відмінювання прикметників. Ви даєте раду в типових побутових ситуаціях.',
    exam: 'Goethe-Zertifikat A2 · ÖSD Zertifikat A2',
    words: '≈ 1300 слів', hours: '≈ 200 годин', status: 'partial',
  },
  {
    id: 'b1', code: 'B1', title: 'Mittelstufe',
    desc: 'Konjunktiv II, пасив, Genitiv, зв’язний виклад думки. Ви впораєтеся в подорожі, на роботі й у навчанні.',
    exam: 'Goethe-Zertifikat B1 · ÖSD Zertifikat B1',
    words: '≈ 2400 слів', hours: '≈ 350 годин', status: 'partial',
  },
  {
    id: 'b2', code: 'B2', title: 'Gute Mittelstufe',
    desc: 'Складний синтаксис, номіналізація, аргументація. Ви розумієте абстрактні тексти й ведете дискусію.',
    exam: 'Goethe-Zertifikat B2 · ÖSD Zertifikat B2',
    words: '≈ 4000 слів', hours: '≈ 600 годин', status: 'partial',
  },
  {
    id: 'c1', code: 'C1', title: 'Fortgeschritten',
    desc: 'Стилістика, Konjunktiv I, партиципні конструкції, наукова мова. Ви висловлюєтесь вільно й точно.',
    exam: 'Goethe-Zertifikat C1 · ÖSD Zertifikat C1',
    words: '≈ 6000 слів', hours: '≈ 800 годин', status: 'partial',
  },
];

import { READING } from './reading.js?v=20260816i';

const CACHE = new Map();

export async function loadLevel(id) {
  if (CACHE.has(id)) return CACHE.get(id);
  const mod = await import(`./${id}.js?v=20260816i`);
  const level = { ...mod.default, reading: READING[id] || [] };
  CACHE.set(id, level);
  return level;
}
