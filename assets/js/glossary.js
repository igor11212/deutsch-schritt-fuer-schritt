/* Автоматичний переклад німецьких граматичних термінів у поясненнях.

   Термін перекладається один раз — при першій появі в межах теми, — щоб
   людина не мусила шукати значення деінде, але й не читала те саме двадцять
   разів. Німецькі приклади (<em>) не чіпаємо: там переклад стоїть окремо. */

const TERMS = [
  // будова речення
  ['Hauptsatz', 'головне речення'],
  ['Nebensatz', 'підрядне речення'],
  ['Nebensätze', 'підрядні речення'],
  ['Satzklammer', 'дієслівна рамка'],
  ['Wortstellung', 'порядок слів'],
  ['W-Frage', 'питання з питальним словом'],
  ['Ja/Nein-Frage', 'питання без питального слова'],
  ['Relativsatz', 'підрядне означальне'],
  ['Relativsätze', 'підрядні означальні'],
  ['Temporalsätze', 'підрядні часу'],
  ['Konnektoren', 'сполучні засоби'],
  ['Konnektor', 'сполучний засіб'],

  // часи й способи
  ['Präsens', 'теперішній час'],
  ['Präteritum', 'простий минулий час'],
  ['Plusquamperfekt', 'давноминулий час'],
  ['Perfekt', 'складений минулий час'],
  ['Futur', 'майбутній час'],
  ['Imperativ', 'наказовий спосіб'],
  ['Indikativ', 'дійсний спосіб'],
  ['Konjunktiv I', 'спосіб переказу чужих слів'],
  ['Konjunktiv II', 'умовний спосіб'],

  // форми дієслова
  ['Partizip II', 'дієприкметник, третя форма дієслова'],
  ['Partizip I', 'дієприкметник теперішнього часу'],
  ['Infinitiv', 'неозначена форма дієслова'],
  ['Modalverben', 'модальні дієслова'],
  ['Modalverb', 'модальне дієслово'],
  ['Vorgangspassiv', 'пасив дії'],
  ['Zustandspassiv', 'пасив стану'],
  ['Passiversatz', 'замінник пасиву'],
  ['Passiv', 'пасивний стан'],
  ['Aktiv', 'активний стан'],

  // відмінки й частини мови
  ['Nominativ', 'називний відмінок'],
  ['Akkusativ', 'знахідний відмінок'],
  ['Dativ', 'давальний відмінок'],
  ['Genitiv', 'родовий відмінок'],
  ['Personalpronomen', 'особові займенники'],
  ['Possessivartikel', 'присвійні артиклі'],
  ['Wechselpräpositionen', 'прийменники подвійної дії'],
  ['Adjektivdeklination', 'відмінювання прикметників'],
  ['Komparativ', 'вищий ступінь порівняння'],
  ['Superlativ', 'найвищий ступінь порівняння'],
  ['Umlaut', 'дві крапки над голосною: ä ö ü'],

  // стиль і лексика
  ['erweiterte Attribute', 'поширені означення'],
  ['erweitertes Attribut', 'поширене означення'],
  ['Nominalstil', 'номінальний стиль'],
  ['Behördendeutsch', 'канцелярська німецька'],
  ['Redemittel', 'готові мовні звороти'],
  ['Hörverstehen', 'аудіювання'],
];

/* Довші терміни — першими, щоб «Konjunktiv II» не розпався на «Konjunktiv». */
const SORTED = [...TERMS].sort((a, b) => b[0].length - a[0].length);

const SKIP = new Set(['CODE', 'ABBR', 'EM', 'SCRIPT', 'STYLE', 'TEXTAREA']);

/**
 * Додає український переклад до першої появи кожного німецького терміна.
 * @param {HTMLElement} root  контейнер із поясненням
 */
export function glossTerms(root) {
  const done = new Set();

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      for (let p = node.parentElement; p && p !== root; p = p.parentElement) {
        if (SKIP.has(p.tagName) || p.classList.contains('term')) return NodeFilter.FILTER_REJECT;
      }
      return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    },
  });

  const targets = [];
  for (let n = walker.nextNode(); n; n = walker.nextNode()) targets.push(n);

  for (const node of targets) {
    let text = node.nodeValue;
    let hit = null;

    for (const [term, uk] of SORTED) {
      if (done.has(term)) continue;
      // Межа слова з урахуванням «W-Frage» та «Konjunktiv II».
      const re = new RegExp(`(^|[^\\p{L}\\p{M}-])(${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})(?![\\p{L}\\p{M}])`, 'u');
      const m = text.match(re);
      if (m && (!hit || m.index < hit.index)) hit = { term, uk, m, index: m.index + m[1].length };
    }
    if (!hit) continue;

    done.add(hit.term);
    const before = text.slice(0, hit.index);
    const after = text.slice(hit.index + hit.term.length);

    const span = document.createElement('span');
    span.className = 'term';
    span.append(hit.term);
    const gloss = document.createElement('i');
    gloss.textContent = hit.uk;
    span.append(gloss);

    const frag = document.createDocumentFragment();
    if (before) frag.append(document.createTextNode(before));
    frag.append(span);
    if (after) frag.append(document.createTextNode(after));
    node.replaceWith(frag);
  }
}
