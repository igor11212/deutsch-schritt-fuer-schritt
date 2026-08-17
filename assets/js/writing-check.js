/* Перевірка написаного тексту: граматика, лексика, структура.
   Працює офлайн, без мережі. Це не заміна викладачеві — правила підібрані так,
   щоб ловити типові помилки тих, хто вчить німецьку, майже без хибних спрацювань.
   Усе, що менш надійне, потрапляє в «варте уваги», а не в «помилки». */

/* ─────────────────────────────── допоміжне ─────────────────────────────── */

const FINITE = ['bin','bist','ist','sind','seid','war','warst','waren','wart',
  'habe','hast','hat','haben','habt','hatte','hattest','hatten','hattet',
  'kann','kannst','können','könnt','muss','musst','müssen','müsst',
  'will','willst','wollen','wollt','darf','darfst','dürfen','dürft',
  'soll','sollst','sollen','sollt','möchte','möchtest','möchten','möchtet',
  'werde','wirst','wird','werden','werdet','wurde','wurden'];

const GREETING = /\b(hallo|liebe[rn]?|sehr geehrte[rn]?|guten (tag|morgen|abend)|servus|grüß gott)\b/i;
/* Прощання буває й коротким: «Bis Samstag!», «Alles Liebe», «Deine Olha». */
const CLOSING  = /\b(viele grüße|liebe grüße|herzliche grüße|beste grüße|freundliche grüße|mit freundlichen grüßen|tschüss|ciao|alles (liebe|gute)|bis (bald|dann|später|morgen|montag|dienstag|mittwoch|donnerstag|freitag|samstag|sonntag)|dein[e]? [A-ZÄÖÜ])/i;

/* Службові слова, які повторюються в будь-якому тексті — не привід шукати синонім. */
const STOPWORDS = new Set(`einen einem einer eines eine nicht auch schon noch aber oder denn
sehr sein seine seinen seinem ihre ihren ihrem meine meinen meinem deine deinen deinem
haben habe hast hatte hatten sind ist bist waren dass wenn weil dieser diese dieses
schon immer wieder etwas mehr viele viel alle alles etwa dann damit dabei
werden wurde wird kann können muss müssen möchte möchten sollte sollten würde würden
hätte hätten hättest wäre wären wärst könnte könnten müsste müssten dürfte sollten wüsste
worden geworden
über unter durch gegen ohne nach beim zum zur vom bei mit von für auf aus
ihnen mich mir dich dir uns euch`.split(/\s+/).filter(Boolean));

/** Розбиття на речення з урахуванням крапки в скороченнях і числах. */
function sentences(text) {
  return text
    .replace(/\b(z\.\s?B|bzw|usw|ca|Nr|Hr|Fr|Dr|St)\./gi, '$1<DOT>')
    .split(/(?<=[.!?])\s+/)
    .map(s => s.replace(/<DOT>/g, '.').trim())
    .filter(Boolean);
}

function words(text) {
  return (text.match(/[\p{L}\p{M}’'-]+/gu) || []);
}

/* Частотні іменники — щоб перевірка великої літери працювала й тоді,
   коли слова немає у словнику конкретного модуля. */
const COMMON_NOUNS = `Kurs Zeit Material Materialien Woche Tag Monat Jahr Stunde Minute
Arbeit Beruf Firma Büro Chef Kollege Kollegin Termin Prüfung Aufgabe Hausaufgabe
Schule Universität Student Studentin Lehrer Lehrerin Unterricht Sprache Deutsch
Familie Eltern Vater Mutter Bruder Schwester Kind Kinder Freund Freundin Mann Frau
Wohnung Haus Zimmer Küche Bad Garten Balkon Miete Stadt Land Straße Platz
Auto Bus Zug Bahn Fahrrad Flughafen Bahnhof Reise Urlaub Hotel Ticket
Geld Euro Preis Rechnung Konto Bank Post Geschäft Supermarkt Markt
Essen Brot Milch Kaffee Wasser Wein Bier Fleisch Gemüse Obst Apfel
Wetter Sonne Regen Schnee Wind Sommer Winter Frühling Herbst
Arzt Ärztin Krankenhaus Apotheke Medikament Problem Frage Antwort Grund Idee
Buch Zeitung Film Musik Sport Fußball Computer Handy Internet Foto
Morgen Abend Nacht Mittag Wochenende Geburtstag Party Geschenk Einladung
Leute Menschen Person Name Adresse Telefonnummer Information Nachricht Brief`
  .split(/\s+/).filter(Boolean);

/** Слова, які в німецькій пишуть з великої лише як іменники. */
function nounsFromVocab(vocab) {
  const set = new Set(COMMON_NOUNS);
  (vocab || []).forEach(g => (g.items || []).forEach(it => {
    const m = String(it.de).match(/^(?:der|die|das)\s+([A-ZÄÖÜ][\p{L}]+)/u);
    if (m) set.add(m[1]);
  }));
  return set;
}

/* ───────────────────── що очікується на кожному рівні ──────────────────── */

const EXPECTED = {
  'a1/m8':  { re: /\b(habe|hat|haben|bin|ist|sind)\b[\s\S]{0,60}\bge\p{L}+(t|en)\b/u,
              label: 'Perfekt', hint: 'Тема модуля — минулий час. Додайте речення на кшталт «Ich habe … gemacht» або «Ich bin … gefahren».' },
  'a1/m6':  { re: /\b(kann|muss|will|möchte|darf|soll|können|müssen|wollen|möchten|dürfen|sollen)\b/i,
              label: 'модальні дієслова', hint: 'Уживіть können, müssen або möchten з інфінітивом у кінці.' },
  'a2/m1':  { re: /\b(weil|dass|wenn|denn|deshalb)\b/i,
              label: 'підрядні речення', hint: 'Тема модуля — weil / dass / wenn. Поясніть причину через weil.' },
  'a2/m2':  { re: /\b(ein|eine|einen|einem|einer|der|die|das|den|dem)\s+\p{L}+(e|en|er|es)\s+[A-ZÄÖÜ]/u,
              label: 'прикметники перед іменником', hint: 'Опишіть речі прикметниками: «eine helle Wohnung», «ein großes Zimmer».' },
  'b1/m1':  { re: /\b(würde[nst]?|könnte[nst]?|hätte[nst]?|wäre[nst]?|sollte[nst]?|dürfte[nst]?|müsste[nst]?)\b/i,
              label: 'Konjunktiv II', hint: 'Тема модуля — ввічливість. Додайте «Könnten Sie …?», «Ich hätte gern …», «Es wäre schön, wenn …».' },
  'b1/m2':  { re: /\b(wird|werden|wurde|wurden)\b[\s\S]{0,60}\b(ge\p{L}+(t|en)|\p{L}+iert)\b|\bworden\b/u,
              label: 'пасив', hint: 'Тема модуля — Passiv. Опишіть процес: «Der Müll wird getrennt», «… wurde eingeführt».' },
  'b2/m1':  { re: /\b(obwohl|trotzdem|allerdings|jedoch|zwar|dennoch|einerseits|andererseits|folglich|zudem|außerdem)\b/i,
              label: 'конектори', hint: 'Аргументативний текст тримається на конекторах: obwohl, allerdings, zwar … aber, außerdem.', min: 3 },
  'b2/m2':  { re: /\b(ist|sind)\s+(zu\s+\p{L}+|\p{L}+bar)\b|\blässt sich\b|\blassen sich\b/u,
              label: 'замінники пасиву', hint: 'Уживіть sein + zu + Infinitiv («ist einzureichen»), lassen sich або прикметник на -bar.' },
  'c1/m1':  { re: /\b(sei|seien|habe|haben|werde|könne|müsse|solle)\b/,
              label: 'Konjunktiv I', hint: 'Переказ чужих слів вимагає Konjunktiv I: «er sei», «sie habe», «es werde».' },
  'c1/m2':  { re: /\b(aufgrund|infolge|hinsichtlich|angesichts|mittels|zwecks|im Rahmen|im Falle|nach Unterzeichnung)\b/i,
              label: 'номінальний стиль', hint: 'Замініть підрядні на прийменникові групи: aufgrund …, im Falle …, nach …' },
};

/* ───────────────── лексика: заміни для вищого рівня ───────────────── */

const UPGRADE = [
  [/\bsehr gut\b/gi,   'ausgezeichnet, hervorragend'],
  [/\bschön\b/gi,      'wunderbar, angenehm, ansprechend'],
  [/\bschlecht\b/gi,   'unbefriedigend, mangelhaft'],
  // не «lässt sich sagen» чи «sagen, dass» — це стійкі звороти самого C1
  [/\b(ich sage|er sagt|sie sagt)\b/gi, 'erklären, betonen, erwähnen'],
  // саме «machen» — одне з найчастотніших дієслів; підказка лише для сполук,
  // де справді є точніший відповідник
  [/\b(eine Aufgabe|die Arbeit|Hausaufgaben|einen Termin) machen\b/gi, 'erledigen, durchführen, vereinbaren'],
  [/\bbekommen\b/gi,   'erhalten'],
  [/\bkaufen\b/gi,     'erwerben, anschaffen'],
  [/\bwichtig\b/gi,    'entscheidend, wesentlich, zentral'],
  [/\b(großes|viele) Problem/g, 'Schwierigkeit, Herausforderung'],
  [/\bviele? Leute\b/gi, 'zahlreiche Menschen'],
  [/\bsehr viel\b/gi,  'erheblich, beträchtlich'],
  [/\bIch finde\b/gi,  'Meiner Ansicht nach, Aus meiner Sicht'],
  [/\bIch denke\b/gi,  'Ich bin der Meinung, dass …'],
];

/* ─────────────────────────────── перевірка ─────────────────────────────── */

/**
 * @param {string} text   написане користувачем
 * @param {object} task   опис завдання (points, minWords, exam …)
 * @param {object} ctx    { levelId, moduleId, vocab }
 */
export function checkWriting(text, task, ctx = {}) {
  const t = (text || '').trim();
  const issues = [];
  const add = (kind, title, detail, quote) => issues.push({ kind, title, detail, quote });

  const ws = words(t);
  const ss = sentences(t);
  const stats = {
    words: ws.length,
    sentences: ss.length,
    avgLen: ss.length ? Math.round(ws.length / ss.length) : 0,
  };

  if (!ws.length) return { stats, issues: [], empty: true };

  /* ── 1. Обсяг і формат ─────────────────────────────────────────────── */
  const min = task.minWords || 0;
  if (min && stats.words < min) {
    add('error', `Замало слів: ${stats.words} із ${min}`,
      `На іспиті недостатній обсяг знижує оцінку, навіть якщо текст правильний. Додайте ще ${min - stats.words} ${plural(min - stats.words, 'слово', 'слова', 'слів')} — найпростіше розгорнути один із пунктів завдання.`);
  } else if (min && stats.words > min * 2.2) {
    add('warn', `Забагато слів: ${stats.words}`,
      'Довгий текст — більше шансів на помилку, а балів за нього не додають. Орієнтир — приблизно вдвічі менше.');
  }

  // Звертання й прощання потрібні лише в листі. Форумний пост, коментар,
  // резюме тексту чи стилістичне переписування їх не мають — і не повинні.
  const genre = (task.exam || '') + ' ' + (task.title || '');
  const isLetter = /E-Mail|Brief|Nachricht|SMS|Einladung|Postkarte|Mitteilung/i.test(genre)
    && !/Forumsbeitrag|Forum|Kommentar|Zusammenfassung|Stellungnahme|Umformung|Bericht|Aufsatz/i.test(genre);
  if (isLetter) {
    if (!GREETING.test(t)) add('warn', 'Немає звертання',
      'Лист чи повідомлення починають зі звертання: «Hallo Max,», «Liebe Anna,», «Sehr geehrte Frau …,». Без нього знімають бали за формат.');
    if (!CLOSING.test(t)) add('warn', 'Немає прощання',
      'У кінці потрібне «Viele Grüße», «Liebe Grüße» або «Mit freundlichen Grüßen» і ваше ім’я.');
  }

  /* ── 2. Орфографія і пунктуація ────────────────────────────────────── */

  // Кома перед підрядним сполучником — у німецькій обов’язкова.
  // «damit» тут немає навмисно: воно буває й займенником (da+mit) усередині речення,
  // де кома не потрібна — «dass sich damit alles ändert».
  // Кома «спрацьовує» самою будовою регексу: якщо перед сполучником стоїть кома,
  // то перед пробілом уже не літера — і збігу просто немає.
  const commaRe = /(\p{L}+)\s+(weil|dass|obwohl|wenn|sodass|falls|während|bevor|nachdem|sobald)\s+(\p{L}+)/giu;
  for (const m of t.matchAll(commaRe)) {
    // «während» і «bis» бувають прийменниками: «während des Studiums» — коми не потребують.
    if (/^(während|bis)$/i.test(m[2]) && /^(des|der|dem|den|eines|einer|meines|meiner|ihres|ihrer|seines|seiner)$/i.test(m[3])) continue;
    // після іншого сполучника коми теж немає: «…, sondern weil …», «und dass …».
    if (/^(sondern|und|aber|oder|denn|sowie)$/i.test(m[1])) continue;
    add('error', `Пропущена кома перед «${m[2]}»`,
      'У німецькій кома перед підрядним реченням обов’язкова — це не стилістика, а правило.',
      `…${m[1]} ${m[2]} …  →  …${m[1]}, ${m[2]} …`);
    break;                                     // одного прикладу досить
  }

  // weil / dass / obwohl + дієслово не в кінці.
  // «wenn du willst,» — правильно: дієслово вже останнє. Помилка лише тоді,
  // коли після дієслова в тому самому підрядному ще щось є.
  const v2Re = new RegExp(`\\b(weil|dass|obwohl|damit|wenn)\\s+(\\p{L}+)\\s+(${FINITE.join('|')})\\s+(\\p{L}+)`, 'giu');
  for (const m of t.matchAll(v2Re)) {
    add('error', `Після «${m[1]}» дієслово має стояти в кінці`,
      'У підрядному реченні змінене дієслово йде останнім. Це найчастіша помилка на A2–B1.',
      `${m[1]} ${m[2]} ${m[3]} …  →  ${m[1]} ${m[2]} … ${m[3]}`);
    break;
  }

  // das / dass  (явні діапазони, а не \p{Lu} — юнікодний клас тут не спрацьовує)
  const dassRe = /\b(denke|glaube|hoffe|meine|finde|weiß|sage|sagte|erklärte|freue mich)\s*,?\s+das\s+(?![A-ZÄÖÜ])/g;
  const dm = t.match(dassRe);
  if (dm) add('error', 'Схоже, тут потрібне «dass», а не «das»',
    '«das» — артикль або займенник (das Buch). «dass» — сполучник «що». Перевірка: якщо слово можна замінити на «dieses» — пишіть «das».',
    `${dm[0].trim()} …  →  ${dm[0].trim().replace(/\bdas$/, 'dass')} …`);

  // seit / seid
  if (/\bseit\s+(ihr|Ihr)\b/.test(t))
    add('error', '«seit» → «seid»', '«seid» — форма дієслова sein для ihr. «seit» — прийменник часу.', 'seit ihr → seid ihr');
  if (/\bseid\s+(einem|einer|zwei|drei|\d)/.test(t))
    add('error', '«seid» → «seit»', 'Тут потрібен прийменник часу: seit einem Jahr.', 'seid einem Jahr → seit einem Jahr');

  // Умлаути, записані як ae / oe / ue / ss
  if (!/[äöüß]/i.test(t) && /\b\p{L}*(ae|oe|ue|ss)\p{L}*\b/iu.test(t) && stats.words > 15)
    add('warn', 'У тексті немає жодного умлаута',
      'Якщо ви писали ae / oe / ue / ss замість ä / ö / ü / ß — на іспиті це вважають помилкою. Увімкніть німецьку розкладку або копіюйте літери: ä ö ü ß.');

  // Іменники з малої літери
  const known = nounsFromVocab(ctx.vocab);
  const lowerNouns = [];
  ws.forEach((w, i) => {
    const cap = w[0].toUpperCase() + w.slice(1);
    if (w[0] === w[0].toLowerCase() && known.has(cap)) {
      const prev = ws[i - 1];
      const atStart = i === 0 || (prev && /[.!?]$/.test(prev));
      if (!atStart && !lowerNouns.includes(w)) lowerNouns.push(w);
    }
  });
  if (lowerNouns.length)
    add('error', 'Іменники пишуться з великої літери',
      'У німецькій усі іменники — з великої, навіть у середині речення.',
      lowerNouns.slice(0, 6).map(w => `${w} → ${w[0].toUpperCase() + w.slice(1)}`).join(' · '));

  // Речення з малої літери
  const badStart = ss.find(s => /^[a-zäöüß]/.test(s));
  if (badStart) add('warn', 'Речення починається з малої літери',
    'Перевірте початок кожного речення.', badStart.slice(0, 45) + '…');

  /* ── 3. Регістр звертання ──────────────────────────────────────────── */
  const hasDu  = /\b(du|dich|dir|dein[emrs]?)\b/i.test(t);
  // «Sie» — це ще й «вона/вони»: «Sie ist meine Mutter». Тому ознакою офіційного
  // звертання вважаємо лише Ihnen / Ihr- або «Sehr geehrte», а не саме «Sie».
  const hasSie = /\bIhnen\b|\bIhre[nmrs]?\b|\bsehr geehrte/i.test(t);
  if (hasDu && hasSie)
    add('error', 'Змішані «du» і «Sie»',
      'В одному листі звертання має бути однакове від початку до кінця. Оберіть du (друг) або Sie (офіційно) і витримайте всюди.');

  /* ── 4. Те, що вимагає саме ця тема ────────────────────────────────── */
  const exp = EXPECTED[`${ctx.levelId}/${ctx.moduleId}`];
  if (exp) {
    const hits = (t.match(new RegExp(exp.re.source, exp.re.flags.replace('g', '') + 'g')) || []).length;
    if (hits < (exp.min || 1))
      add('warn', `У тексті бракує теми модуля: ${exp.label}`,
        exp.hint + (exp.min ? ` Потрібно щонайменше ${exp.min}, знайдено ${hits}.` : ''));
  }

  /* ── 5. Стиль і лексика ────────────────────────────────────────────── */
  const starts = ss.map(s => (s.match(/^\p{L}+/u) || [''])[0].toLowerCase());
  const ich = starts.filter(s => s === 'ich').length;
  if (ss.length >= 4 && ich >= Math.ceil(ss.length * 0.6))
    add('tip', 'Майже всі речення починаються з «Ich»',
      'Починайте частину речень з обставини — тоді підмет іде після дієслова: «Am Samstag habe ich …», «Danach bin ich …». Це одразу піднімає оцінку за різноманітність.');

  if (['b2', 'c1'].includes(ctx.levelId) && stats.avgLen && stats.avgLen < 9)
    add('tip', 'Речення надто короткі для цього рівня',
      `Середня довжина — ${stats.avgLen} слів. На ${ctx.levelId.toUpperCase()} очікують складніші конструкції: поєднайте пари речень через obwohl, sodass, während.`);

  // Повтори
  const freq = {};
  ws.forEach(w => {
    const k = w.toLowerCase();
    if (k.length > 4 && !STOPWORDS.has(k)) freq[k] = (freq[k] || 0) + 1;
  });
  // Порогом керує довжина: у тексті на 200 слів ключове слово теми законно
  // трапляється частіше, ніж у записці на 50 слів.
  const repLimit = Math.max(4, Math.round(ws.length / 40));
  const repeated = Object.entries(freq).filter(([, n]) => n >= repLimit).map(([w]) => w);
  if (repeated.length)
    add('tip', 'Слово повторюється забагато разів',
      'Пошукайте синонім — оцінювачі окремо дивляться на різноманітність лексики.',
      repeated.slice(0, 4).join(' · '));

  // Пропозиції «підняти» лексику
  if (['b1', 'b2', 'c1'].includes(ctx.levelId)) {
    const ups = [];
    UPGRADE.forEach(([re, better]) => {
      const m = t.match(re);
      if (m && ups.length < 5) ups.push(`${m[0]} → ${better}`);
    });
    if (ups.length)
      add('tip', 'Можна сказати точніше',
        'Ці слова доречні, але для вашого рівня є виразніші відповідники.',
        ups.join('\n'));
  }

  return { stats, issues };
}

function plural(n, one, few, many) {
  const m10 = n % 10, m100 = n % 100;
  if (m10 === 1 && m100 !== 11) return one;
  if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return few;
  return many;
}
