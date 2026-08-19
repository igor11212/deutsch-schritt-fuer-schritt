/* Каталог рівнів. Вміст кожного рівня довантажується окремо (dynamic import),
   тому головна сторінка відкривається миттєво.

   examWords — скільки слів вимагає сам іспит цього рівня,
   vocab — скільки слів реально є в модулі «Лексика». Це різні числа,
   і плутати їх не можна: інакше сайт обіцяє більше, ніж дає. */

export const LEVELS = [
  {
    id: 'a1', modules: 10, code: 'A1', title: 'Anfänger',
    desc: 'Перші кроки: алфавіт, знайомство, теперішній час, артиклі, Perfekt. Ви розумієте прості фрази про себе, родину, покупки та побут.',
    exam: 'Goethe-Zertifikat A1 · ÖSD Zertifikat A1',
    examWords: '≈ 650 слів', vocab: 261, hours: '≈ 120 годин', status: 'full',
  },
  {
    id: 'a2', modules: 10, code: 'A2', title: 'Grundstufe',
    desc: 'Підрядні речення, прикметники, Präteritum, зворотні дієслова, Genitiv, Relativsätze й порівняння. Ви даєте раду в типових побутових ситуаціях.',
    exam: 'Goethe-Zertifikat A2 · ÖSD Zertifikat A2',
    examWords: '≈ 1300 слів', vocab: 185, hours: '≈ 200 годин', status: 'full',
  },
  {
    id: 'b1', modules: 8, code: 'B1', title: 'Mittelstufe',
    desc: 'Konjunktiv II, пасив, часові підрядні з Plusquamperfekt, інфінітив із zu, непрямі питання, парні сполучники, Futur I і дієприкметники як означення. Ви впораєтеся в подорожі, на роботі й у навчанні.',
    exam: 'Goethe-Zertifikat B1 · ÖSD Zertifikat B1',
    examWords: '≈ 2400 слів', vocab: 154, hours: '≈ 350 годин', status: 'full',
  },
  {
    id: 'b2', modules: 8, code: 'B2', title: 'Gute Mittelstufe',
    desc: 'Аргументація на конекторах, минулий Konjunktiv II, номінальний і вербальний стиль, партиципні означення, пасив у всіх часах, порядок слів і зв’язність тексту. Ви розумієте абстрактні тексти й ведете дискусію.',
    exam: 'Goethe-Zertifikat B2 · ÖSD Zertifikat B2',
    examWords: '≈ 4000 слів', vocab: 131, hours: '≈ 600 годин', status: 'full',
  },
  {
    id: 'c1', modules: 8, code: 'C1', title: 'Fortgeschritten',
    desc: 'Konjunktiv I і непряма мова, партиципні конструкції, модальні частки, книжні конектори, замінники пасиву, стійкі звороти, словотвір і свідома робота з реєстром. Ви висловлюєтесь вільно й точно.',
    exam: 'Goethe-Zertifikat C1 · ÖSD Zertifikat C1',
    examWords: '≈ 6000 слів', vocab: 130, hours: '≈ 800 годин', status: 'full',
  },
];

import { READING } from './reading.js?v=20260819k';
import { SPRECHEN } from './sprechen.js?v=20260819k';

const CACHE = new Map();

export async function loadLevel(id) {
  if (CACHE.has(id)) return CACHE.get(id);
  // Граматика й словник рівня лежать окремо й довантажуються разом.
  const [mod, voc] = await Promise.all([
    import(`./${id}.js?v=20260819k`),
    import(`./vocab-${id}.js?v=20260819k`),
  ]);
  const level = {
    ...mod.default,
    reading: READING[id] || [],
    speaking: SPRECHEN[id] || [],
    vocab: voc.groups || [],
  };
  CACHE.set(id, level);
  return level;
}
