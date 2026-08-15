/* A1 — модулі 6–10 */

export const modules = [

/* ══════════════════════════════════ МОДУЛЬ 6 ══════════════════════════════ */
{
  id: 'm6',
  title: 'Modalverben',
  titleUk: 'Модальні дієслова: можу, мушу, хочу, дозволено',
  can: [
    'вживати können, müssen, wollen, möchten, dürfen, sollen',
    'будувати рамкову конструкцію з двома дієсловами',
    'ввічливо про щось просити й пропонувати',
    'говорити про здібності, обов’язки, заборони й бажання',
  ],

  grammar: [
    {
      title: '1. Шість модальних дієслів',
      html: `
<p>Модальне дієслово показує <em>ставлення</em> до дії: можу, мушу, хочу. Основне дієслово при цьому стоїть
в інфінітиві <strong>у кінці речення</strong>.</p>
<table>
<thead><tr><th></th><th>können<br><small>могти, уміти</small></th><th>müssen<br><small>мусити</small></th><th>wollen<br><small>хотіти</small></th><th>möchten<br><small>хотів би</small></th><th>dürfen<br><small>мати дозвіл</small></th><th>sollen<br><small>слід, мати за завданням</small></th></tr></thead>
<tbody>
<tr><td>ich</td><td>kann</td><td>muss</td><td>will</td><td>möchte</td><td>darf</td><td>soll</td></tr>
<tr><td>du</td><td>kannst</td><td>musst</td><td>willst</td><td>möchtest</td><td>darfst</td><td>sollst</td></tr>
<tr><td>er/sie/es</td><td>kann</td><td>muss</td><td>will</td><td>möchte</td><td>darf</td><td>soll</td></tr>
<tr><td>wir</td><td>können</td><td>müssen</td><td>wollen</td><td>möchten</td><td>dürfen</td><td>sollen</td></tr>
<tr><td>ihr</td><td>könnt</td><td>müsst</td><td>wollt</td><td>möchtet</td><td>dürft</td><td>sollt</td></tr>
<tr><td>sie/Sie</td><td>können</td><td>müssen</td><td>wollen</td><td>möchten</td><td>dürfen</td><td>sollen</td></tr>
</tbody></table>
<p><strong>Що означає кожна форма в перекладі:</strong></p>
<table>
<thead><tr><th>Форма</th><th>Переклад</th><th>Форма</th><th>Переклад</th></tr></thead>
<tbody>
<tr><td><em>ich kann</em></td><td>я можу, я вмію</td><td><em>ich möchte</em></td><td>я хотів би</td></tr>
<tr><td><em>ich muss</em></td><td>я мушу, мені треба</td><td><em>ich darf</em></td><td>мені можна, мені дозволено</td></tr>
<tr><td><em>ich will</em></td><td>я хочу (твердо)</td><td><em>ich soll</em></td><td>мені слід, мені сказали</td></tr>
</tbody></table>
<div class="callout"><strong>Дві особливості, які треба помітити відразу.</strong><br>
1. Форми <em>ich</em> та <em>er/sie/es</em> <strong>однакові</strong> й <strong>без закінчення -t</strong>:
<em>er kann</em>, а не «er kannt».<br>
2. У множині голосна повертається до інфінітивної: <em>ich k<strong>a</strong>nn</em> →
<em>wir k<strong>ö</strong>nnen</em>.</div>`,
    },
    {
      title: '2. Рамкова конструкція (Satzklammer)',
      html: `
<p>Модальне дієслово змінюється й стоїть на другому місці. Смислове дієслово — в інфінітиві в самому кінці.
Разом вони утворюють «рамку», всередині якої розташовується решта речення.</p>
<table>
<thead><tr><th>1</th><th>2 — модальне</th><th>середина</th><th>кінець — інфінітив</th></tr></thead>
<tbody>
<tr><td><em>Ich</em></td><td><em>kann</em></td><td><em>gut Deutsch</em></td><td><em>sprechen.</em></td></tr>
<tr><td><em>Am Montag</em></td><td><em>muss</em></td><td><em>er früh</em></td><td><em>aufstehen.</em></td></tr>
<tr><td><em>Was</em></td><td><em>möchten</em></td><td><em>Sie</em></td><td><em>trinken?</em></td></tr>
<tr><td><em>—</em></td><td><em>Darf</em></td><td><em>ich hier</em></td><td><em>rauchen?</em></td></tr>
</tbody></table>
<p>Якщо основне дієслово має відокремлюваний префікс, воно <strong>не розривається</strong>, бо стоїть
в інфінітиві: <em>Ich muss um sechs <strong>aufstehen</strong>.</em> (а не «auf…stehen»).</p>
<div class="callout callout--tip"><strong>Модальне дієслово може стояти й саме,</strong> якщо дія зрозуміла з
контексту: <em>Ich kann Deutsch.</em> (Я знаю німецьку.) <em>Ich muss nach Hause.</em> (Мені треба додому.)
<em>Ich möchte einen Kaffee.</em></div>`,
    },
    {
      title: '3. Що саме означає кожне',
      html: `
<table>
<thead><tr><th>Дієслово</th><th>Значення</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td rowspan="2"><strong>können</strong></td><td>уміння, здатність</td><td><em>Ich kann schwimmen.</em></td></tr>
<tr><td>можливість, ввічливе прохання</td><td><em>Können Sie mir helfen?</em></td></tr>
<tr><td rowspan="2"><strong>müssen</strong></td><td>обов’язок, необхідність</td><td><em>Ich muss arbeiten.</em></td></tr>
<tr><td><em>nicht müssen</em> = не обов’язково</td><td><em>Du musst nicht kommen.</em> — Тобі не обов’язково приходити.</td></tr>
<tr><td><strong>wollen</strong></td><td>тверде бажання, намір</td><td><em>Ich will Arzt werden.</em></td></tr>
<tr><td><strong>möchten</strong></td><td>ввічливе бажання («хотів би»)</td><td><em>Ich möchte bitte zahlen.</em></td></tr>
<tr><td rowspan="2"><strong>dürfen</strong></td><td>дозвіл</td><td><em>Darf ich das Fenster öffnen?</em></td></tr>
<tr><td><em>nicht dürfen</em> = заборона</td><td><em>Hier darf man nicht rauchen.</em></td></tr>
<tr><td><strong>sollen</strong></td><td>чужа вимога, порада</td><td><em>Der Arzt sagt, ich soll mehr schlafen.</em></td></tr>
</tbody></table>
<div class="callout"><strong>Найважливіша різниця для іспиту.</strong>
<em>Du musst nicht kommen</em> — «тобі <u>не обов’язково</u> приходити» (немає обов’язку).
<em>Du darfst nicht kommen</em> — «тобі <u>не можна</u> приходити» (заборона).
Українською обидва легко перекласти як «ти не мусиш», тому цю пару перевіряють часто.</div>
<p><strong>wollen чи möchten?</strong> <em>wollen</em> звучить прямо й наполегливо, <em>möchten</em> — ввічливо.
У кафе, магазині, з незнайомими завжди кажіть <em>möchte</em>: <em>Ich möchte einen Kaffee, bitte.</em></p>`,
    },
    {
      title: '4. Безособове man',
      html: `
<p><em>man</em> — це «люди взагалі», відповідник українського «можна / треба / кажуть». Воно завжди вимагає
форми <strong>er/sie/es</strong>:</p>
<ul>
<li><em>Hier <strong>kann man</strong> gut essen.</em> — Тут можна смачно поїсти.</li>
<li><em>In Deutschland <strong>spricht man</strong> Deutsch.</em> — У Німеччині говорять німецькою.</li>
<li><em>Im Museum <strong>darf man</strong> nicht fotografieren.</em> — У музеї не можна фотографувати.</li>
</ul>
<div class="callout"><strong>Не плутайте!</strong> <em>man</em> (безособове) ≠ <em>der Mann</em> (чоловік).
Різні слова, різне написання.</div>`,
    },
  ],

  vocab: [
    {
      group: 'Модальні дієслова та вирази',
      items: [
        { de: 'können', uk: 'могти, уміти', ex: 'Kannst du Auto fahren?' },
        { de: 'müssen', uk: 'мусити, бути змушеним', ex: 'Ich muss heute arbeiten.' },
        { de: 'wollen', uk: 'хотіти (твердо)', ex: 'Er will nach Berlin ziehen.' },
        { de: 'möchten', uk: 'хотів би (ввічливо)', ex: 'Ich möchte bestellen.' },
        { de: 'dürfen', uk: 'мати дозвіл', ex: 'Darf ich fragen?' },
        { de: 'sollen', uk: 'слід, мусиш за чиєюсь вимогою', ex: 'Du sollst mehr Wasser trinken.' },
        { de: 'man', uk: 'безособове «можна / треба»' },
        { de: 'vielleicht', uk: 'можливо' },
        { de: 'bestimmt', uk: 'напевно, точно' },
        { de: 'gern', uk: 'охоче' },
      ],
    },
    {
      group: 'Здібності та захоплення',
      items: [
        { de: 'schwimmen', uk: 'плавати' },
        { de: 'Auto fahren', uk: 'керувати авто' },
        { de: 'Fahrrad fahren', uk: 'їздити на велосипеді' },
        { de: 'kochen', uk: 'готувати їжу' },
        { de: 'tanzen', uk: 'танцювати' },
        { de: 'singen', uk: 'співати' },
        { de: 'Klavier spielen', uk: 'грати на фортепіано' },
        { de: 'Fußball spielen', uk: 'грати у футбол' },
        { de: 'reisen', uk: 'подорожувати' },
        { de: 'malen / zeichnen', uk: 'малювати' },
        { de: 'das Hobby, -s', uk: 'хобі' },
        { de: 'der Sport', uk: 'спорт' },
      ],
    },
    {
      group: 'У кафе та в магазині',
      items: [
        { de: 'bestellen', uk: 'замовляти', ex: 'Ich möchte bestellen.' },
        { de: 'zahlen / bezahlen', uk: 'платити', ex: 'Ich möchte bitte zahlen.' },
        { de: 'die Speisekarte', uk: 'меню' },
        { de: 'die Rechnung', uk: 'рахунок' },
        { de: 'zusammen / getrennt', uk: 'разом / окремо (про рахунок)' },
        { de: 'Was darf es sein?', uk: 'Що бажаєте?' },
        { de: 'Noch etwas?', uk: 'Ще щось?' },
        { de: 'Das macht 8 Euro 50.', uk: 'З Вас 8 євро 50.' },
        { de: 'öffnen / schließen', uk: 'відчиняти / зачиняти' },
        { de: 'rauchen', uk: 'палити' },
        { de: 'fotografieren', uk: 'фотографувати' },
        { de: 'verboten', uk: 'заборонено' },
      ],
    },
  ],

  exercises: [
    { type: 'choice', q: 'Er ___ sehr gut Klavier spielen.', options: ['kann', 'kannt', 'könnt', 'können'], answer: 0,
      explain: 'У модальних дієслів форми ich і er/sie/es однакові й без -t.' },
    { type: 'choice', q: 'Wir ___ heute lange arbeiten.', options: ['muss', 'musst', 'müssen', 'müsst'], answer: 2 },
    { type: 'gap', q: '___ du mir bitte helfen? (können)', answers: ['Kannst'] },
    { type: 'gap', q: 'Ich ___ einen Kaffee, bitte. (möchten)', answers: ['möchte|moechte'] },
    { type: 'gap', q: 'Ihr ___ hier nicht parken. (dürfen)', answers: ['dürft|duerft'] },
    { type: 'order', q: 'Складіть речення.', words: ['Ich', 'kann', 'gut', 'Deutsch', 'sprechen'],
      answer: 'Ich kann gut Deutsch sprechen' },
    { type: 'order', q: 'Складіть речення.', words: ['Am', 'Montag', 'muss', 'er', 'früh', 'aufstehen'],
      answer: 'Am Montag muss er früh aufstehen' },
    { type: 'order', q: 'Складіть питання.', words: ['Darf', 'ich', 'das', 'Fenster', 'öffnen', '?'],
      answer: 'Darf ich das Fenster öffnen ?|Darf ich das Fenster öffnen?' },
    { type: 'choice', q: 'Яке речення правильне?',
      options: ['Ich muss aufstehe früh.', 'Ich muss früh aufstehen.', 'Ich muss früh stehe auf.', 'Ich früh aufstehen muss.'],
      answer: 1, explain: 'При модальному дієслові інфінітив не розривається й стоїть у кінці.' },
    { type: 'choice', q: '«Тобі не обов’язково приходити» — це…',
      options: ['Du darfst nicht kommen.', 'Du musst nicht kommen.', 'Du kannst nicht kommen.', 'Du sollst nicht kommen.'],
      answer: 1, explain: 'nicht müssen = немає обов’язку. nicht dürfen = заборона.' },
    { type: 'choice', q: 'Im Museum ___ man nicht fotografieren.',
      options: ['muss', 'darf', 'will', 'möchte'], answer: 1, explain: 'Заборона — nicht dürfen.' },
    { type: 'gap', q: 'In Österreich ___ man Deutsch. (sprechen)', answers: ['spricht'],
      explain: 'man вимагає форми er/sie/es: man spricht.' },
    { type: 'match', q: 'Доберіть значення.',
      pairs: [['Ich kann schwimmen.', 'уміння'], ['Ich muss arbeiten.', 'обов’язок'], ['Darf ich rauchen?', 'дозвіл'], ['Ich möchte zahlen.', 'ввічливе бажання'], ['Du sollst mehr schlafen.', 'чужа порада']],
      speak: false },
    { type: 'multi', q: 'Позначте правильні форми.',
      options: ['er kann', 'er kannt', 'du musst', 'ich möchte', 'wir könnt', 'sie dürfen'],
      answers: [0, 2, 3, 5],
      explain: 'Помилки: «er kannt» (правильно er kann) і «wir könnt» (правильно wir können).' },
  ],

  listening: [
    {
      exam: 'Goethe A1 · Hören Teil 2',
      title: 'Im Café',
      instruction: 'Двоє гостей роблять замовлення. Дайте відповіді на запитання.',
      lines: [
        { speaker: 'Kellner', de: 'Guten Tag! Was darf es sein?', uk: 'Добрий день! Що бажаєте?' },
        { speaker: 'Gast 1', de: 'Ich möchte einen Kaffee und ein Stück Kuchen, bitte.', uk: 'Я хотіла б каву і шматок торта, будь ласка.' },
        { speaker: 'Kellner', de: 'Gern. Und Sie?', uk: 'Залюбки. А Ви?' },
        { speaker: 'Gast 2', de: 'Für mich bitte einen Tee. Kann ich auch ein Mineralwasser haben?', uk: 'Мені, будь ласка, чай. Можна ще й мінеральну воду?' },
        { speaker: 'Kellner', de: 'Natürlich. Möchten Sie auch etwas essen?', uk: 'Звісно. Бажаєте щось із їжі?' },
        { speaker: 'Gast 2', de: 'Nein danke, ich muss gleich weiter.', uk: 'Ні, дякую, мені треба скоро йти.' },
        { speaker: 'Kellner', de: 'Das macht dann elf Euro zwanzig. Zusammen oder getrennt?', uk: 'З Вас одинадцять євро двадцять. Разом чи окремо?' },
        { speaker: 'Gast 1', de: 'Zusammen, bitte.', uk: 'Разом, будь ласка.' },
      ],
      tasks: [
        { type: 'multi', q: 'Was bestellen die Gäste?', options: ['Kaffee', 'Bier', 'Kuchen', 'Tee', 'Mineralwasser'], answers: [0, 2, 3, 4] },
        { type: 'gap', q: 'Alles zusammen kostet ___ Euro ___.', answers: ['11|elf', '20|zwanzig'] },
        { type: 'truefalse', q: 'Gast 2 möchte auch etwas essen.', answer: false },
        { type: 'choice', q: 'Wie zahlen sie?', options: ['Getrennt', 'Zusammen', 'Mit Karte', 'Gar nicht'], answer: 1 },
      ],
    },
    {
      exam: 'ÖSD A1 · Hören',
      title: 'Hausordnung im Wohnhaus',
      instruction: 'Комендант пояснює правила будинку. Що дозволено, а що ні?',
      lines: [
        { de: 'Guten Tag und willkommen im Haus. Ich erkläre kurz die Hausordnung.', uk: 'Добрий день і вітаємо в будинку. Коротко поясню правила.' },
        { de: 'Von zweiundzwanzig Uhr bis sieben Uhr ist Ruhezeit. Dann darf man keine Musik hören.', uk: 'З двадцять другої до сьомої — час тиші. Тоді не можна слухати музику.' },
        { de: 'Im Treppenhaus darf man nicht rauchen. Das ist verboten.', uk: 'На сходах палити не можна. Це заборонено.' },
        { de: 'Sie können den Müll jeden Tag in den Hof bringen.', uk: 'Сміття можна виносити у двір щодня.' },
        { de: 'Am Sonntag sollen Sie keine Waschmaschine benutzen.', uk: 'У неділю не слід користуватися пральною машиною.' },
        { de: 'Bei Problemen können Sie mich anrufen. Vielen Dank!', uk: 'У разі проблем можете мені зателефонувати. Дуже дякую!' },
      ],
      tasks: [
        { type: 'gap', q: 'Ruhezeit ist von ___ bis ___ Uhr.', answers: ['22|zweiundzwanzig', '7|sieben'] },
        { type: 'truefalse', q: 'Im Treppenhaus darf man rauchen.', answer: false },
        { type: 'choice', q: 'Was soll man am Sonntag nicht machen?',
          options: ['Musik hören', 'Waschmaschine benutzen', 'Müll bringen', 'Telefonieren'], answer: 1 },
        { type: 'choice', q: 'Wie oft kann man den Müll in den Hof bringen?',
          options: ['Einmal pro Woche', 'Jeden Tag', 'Nur am Samstag', 'Nie'], answer: 1 },
      ],
    },
  ],

  writing: [
    {
      exam: 'Goethe A1 · Schreiben Teil 2',
      title: 'E-Mail: Sie können nicht zum Deutschkurs kommen',
      situation: 'Ви захворіли й не зможете прийти на курс німецької цього тижня. Напишіть викладачеві, пані Fischer. <strong>30–40 слів</strong>.',
      points: ['Warum können Sie nicht kommen?', 'Wie lange?', 'Was möchten Sie bekommen (Hausaufgaben)?', 'Entschuldigen Sie sich.'],
      minWords: 30,
      phrases: [
        { de: 'Sehr geehrte Frau Fischer,', uk: 'Шановна пані Фішер, (найформальніше звертання)' },
        { de: 'leider kann ich diese Woche nicht zum Kurs kommen.', uk: 'на жаль, цього тижня я не можу прийти на курс.' },
        { de: 'Ich bin krank und muss zu Hause bleiben.', uk: 'Я хворію і мушу залишатися вдома.' },
        { de: 'Können Sie mir bitte die Hausaufgaben schicken?', uk: 'Чи могли б Ви надіслати мені домашнє завдання?' },
        { de: 'Es tut mir sehr leid.', uk: 'Мені дуже прикро.' },
        { de: 'Mit freundlichen Grüßen', uk: 'З повагою' },
      ],
      checklist: [
        'Формальне звертання «Sehr geehrte Frau …» і кінцівка «Mit freundlichen Grüßen»?',
        'Інфінітив стоїть у самому кінці речення після модального дієслова?',
        'Ви послідовно вживаєте Sie?',
        'Прохання сформульоване ввічливо через können?',
        'Розкрито всі чотири пункти?',
      ],
      model:
`Sehr geehrte Frau Fischer,

leider kann ich diese Woche nicht zum Deutschkurs kommen. Ich bin krank und muss bis Freitag zu Hause bleiben.
Können Sie mir bitte die Hausaufgaben per E-Mail schicken? Ich möchte zu Hause weiterlernen.
Es tut mir sehr leid.

Mit freundlichen Grüßen
Oksana Melnyk`,
      modelUk: 'Переклад: Шановна пані Фішер, на жаль, цього тижня я не можу прийти на курс німецької. Я хвора й мушу до п’ятниці залишатися вдома. Чи могли б Ви надіслати мені домашнє завдання електронною поштою? Я хотіла б продовжувати навчання вдома. Мені дуже прикро. З повагою, Оксана Мельник.',
    },
  ],

  test: [
    { type: 'choice', q: 'Meine Schwester ___ sehr gut kochen.', options: ['kann', 'kannst', 'könnt', 'können'], answer: 0 },
    { type: 'choice', q: 'Ihr ___ pünktlich sein!', options: ['muss', 'musst', 'müsst', 'müssen'], answer: 2 },
    { type: 'choice', q: '___ ich Sie etwas fragen?', options: ['Darf', 'Darfst', 'Dürfen', 'Dürft'], answer: 0 },
    { type: 'choice', q: 'Was ___ Sie trinken?', options: ['möchte', 'möchtest', 'möchten', 'möchtet'], answer: 2 },
    { type: 'gap', q: 'Er ___ Arzt werden. (wollen)', answers: ['will'] },
    { type: 'gap', q: 'Der Arzt sagt, ich ___ mehr Sport machen. (sollen)', answers: ['soll'] },
    { type: 'gap', q: 'Hier ___ man nicht rauchen. (dürfen)', answers: ['darf'] },
    { type: 'order', q: 'Складіть речення.', words: ['Wir', 'wollen', 'im', 'Sommer', 'nach', 'Italien', 'fahren'],
      answer: 'Wir wollen im Sommer nach Italien fahren' },
    { type: 'order', q: 'Складіть речення.', words: ['Ich', 'muss', 'heute', 'früh', 'nach', 'Hause', 'gehen'],
      answer: 'Ich muss heute früh nach Hause gehen' },
    { type: 'choice', q: 'Заборона «палити не можна» — це…',
      options: ['Man muss nicht rauchen.', 'Man darf nicht rauchen.', 'Man kann nicht rauchen.', 'Man soll rauchen.'],
      answer: 1 },
    { type: 'choice', q: 'У кафе ввічливіше сказати…',
      options: ['Ich will einen Kaffee.', 'Ich möchte einen Kaffee, bitte.', 'Gib mir Kaffee.', 'Ich muss Kaffee.'],
      answer: 1 },
    { type: 'multi', q: 'Позначте речення без помилок.',
      options: ['Er kann gut singen.', 'Ich muss früh aufstehe.', 'Sie möchte einen Tee.', 'Wir könnt kommen.', 'Darf ich hier parken?'],
      answers: [0, 2, 4],
      explain: 'Помилки: «Ich muss früh aufstehe» (треба інфінітив aufstehen) і «Wir könnt kommen» (треба können).' },
    { type: 'truefalse', q: 'У модальних дієслів форма er має закінчення -t: «er musst».', answer: false,
      explain: 'Правильно: er muss.' },
    { type: 'match', q: 'Доберіть переклад.',
      pairs: [['dürfen', 'мати дозвіл'], ['müssen', 'мусити'], ['wollen', 'хотіти'], ['sollen', 'слід (за чиєюсь вимогою)'], ['können', 'могти, уміти']] },
  ],
},

/* ══════════════════════════════════ МОДУЛЬ 7 ══════════════════════════════ */
{
  id: 'm7',
  title: 'Imperativ und Wegbeschreibung',
  titleUk: 'Наказовий спосіб, орієнтація в місті та Dativ місця',
  can: [
    'давати вказівки й поради у формах du, ihr, Sie',
    'запитати дорогу й зрозуміти пояснення',
    'вживати прийменники місця з Dativ (in, an, auf, bei, zu, mit …)',
    'розрізняти Wo? і Wohin?',
    'описати своє місто й район',
  ],

  grammar: [
    {
      title: '1. Наказовий спосіб (Imperativ)',
      html: `
<p>У німецькій три форми наказу — залежно від того, до кого ви звертаєтесь.</p>
<table>
<thead><tr><th>До кого</th><th>Як утворюється</th><th>Приклад (kommen)</th></tr></thead>
<tbody>
<tr><td><strong>du</strong></td><td>основа без закінчення й без займенника</td><td><em>Komm!</em> / <em>Geh geradeaus!</em></td></tr>
<tr><td><strong>ihr</strong></td><td>як звичайна форма ihr, але без займенника</td><td><em>Kommt!</em> / <em>Geht geradeaus!</em></td></tr>
<tr><td><strong>Sie</strong></td><td>інфінітив + <em>Sie</em> (займенник залишається!)</td><td><em>Kommen Sie!</em> / <em>Gehen Sie geradeaus!</em></td></tr>
</tbody></table>
<p><strong>Особливі випадки у формі du:</strong></p>
<ul>
<li>Дієслова зі зміною <em>e → i / ie</em> зберігають її: <em>sprechen → <strong>Sprich</strong> langsam!</em>,
<em>lesen → <strong>Lies</strong> den Text!</em>, <em>nehmen → <strong>Nimm</strong> die U-Bahn!</em></li>
<li>Дієслова зі зміною <em>a → ä</em> умлаут <strong>втрачають</strong>:
<em>fahren → <strong>Fahr</strong> langsam!</em> (а не «Fähr»)</li>
<li>Основа на -t, -d, -ig отримує -e: <em>Arbeit<strong>e</strong>!</em>, <em>Entschuldig<strong>e</strong>!</em></li>
<li><em>sein</em> — цілком особливе: <em>Sei ruhig! / Seid ruhig! / Seien Sie ruhig!</em></li>
</ul>
<p>Дієслова з відокремлюваним префіксом розриваються й тут:
<em><strong>Steh</strong> bitte <strong>auf</strong>!</em>, <em><strong>Rufen</strong> Sie mich <strong>an</strong>!</em></p>
<div class="callout callout--tip"><strong>Пом’якшуйте наказ.</strong> Слова <em>bitte</em>, <em>mal</em>, <em>doch</em>
роблять його ввічливим: <em>Komm doch mal vorbei!</em> — «Заходь якось!» Без них імператив звучить різко.</div>`,
    },
    {
      title: '2. Прийменники, що завжди вимагають Dativ',
      html: `
<p>Dativ (давальний) відповідає на питання <strong>Wem?</strong> (кому?) і <strong>Wo?</strong> (де?).
Ці прийменники вимагають Dativ <em>завжди</em>, без винятків:</p>
<p class="de" style="font-size:1.05rem"><strong>aus · bei · mit · nach · seit · von · zu · gegenüber</strong></p>
<table>
<thead><tr><th>Прийменник</th><th>Значення</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td><em>aus</em></td><td>з (зсередини), походження</td><td><em>Ich komme aus <strong>der</strong> Ukraine.</em></td></tr>
<tr><td><em>bei</em></td><td>у когось, біля, при</td><td><em>Ich wohne bei <strong>meinen</strong> Eltern.</em></td></tr>
<tr><td><em>mit</em></td><td>з (кимось), транспортом</td><td><em>Ich fahre mit <strong>dem</strong> Bus.</em></td></tr>
<tr><td><em>nach</em></td><td>до (міст, країн без артикля), після</td><td><em>Ich fahre nach Wien.</em></td></tr>
<tr><td><em>seit</em></td><td>з якогось часу (досі)</td><td><em>Ich lerne seit <strong>einem</strong> Jahr Deutsch.</em></td></tr>
<tr><td><em>von</em></td><td>від, з, чийсь</td><td><em>Das ist das Auto von <strong>meinem</strong> Bruder.</em></td></tr>
<tr><td><em>zu</em></td><td>до (людей, установ)</td><td><em>Ich gehe zu<strong>m</strong> Arzt.</em></td></tr>
</tbody></table>
<p><strong>Артиклі в Dativ:</strong></p>
<table>
<thead><tr><th></th><th>чоловічий</th><th>жіночий</th><th>середній</th><th>множина</th></tr></thead>
<tbody>
<tr><td>Nominativ</td><td>der / ein</td><td>die / eine</td><td>das / ein</td><td>die</td></tr>
<tr><td><strong>Dativ</strong></td><td><strong>dem / einem</strong></td><td><strong>der / einer</strong></td><td><strong>dem / einem</strong></td><td><strong>den + -n</strong></td></tr>
</tbody></table>
<p>У множині до самого іменника додається <strong>-n</strong>, якщо його там ще немає:
<em>die Kinder → mit <strong>den</strong> Kinder<strong>n</strong></em>, <em>die Freunde → mit den Freunde<strong>n</strong></em>.</p>
<p><strong>Обов’язкові злиття:</strong> <em>zu dem = <strong>zum</strong></em>, <em>zu der = <strong>zur</strong></em>,
<em>bei dem = <strong>beim</strong></em>, <em>von dem = <strong>vom</strong></em>, <em>in dem = <strong>im</strong></em>,
<em>an dem = <strong>am</strong></em>.</p>`,
    },
    {
      title: '3. Wo? чи Wohin? — nach, zu, in',
      html: `
<p>Українською ми кажемо «до» і «в», і саме тут виникає найбільше помилок. Німецька розрізняє
<strong>місце</strong> (Wo? — Dativ) і <strong>напрямок</strong> (Wohin?).</p>
<table>
<thead><tr><th>Куди?</th><th>Прийменник</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td>міста, країни без артикля</td><td><strong>nach</strong></td><td><em>nach Berlin, nach Österreich, nach Hause</em></td></tr>
<tr><td>країни з артиклем</td><td><strong>in + Akk.</strong></td><td><em>in die Ukraine, in die Schweiz, in die Türkei</em></td></tr>
<tr><td>до людей та установ</td><td><strong>zu + Dat.</strong></td><td><em>zum Arzt, zur Post, zu meiner Freundin</em></td></tr>
<tr><td>усередину приміщення</td><td><strong>in + Akk.</strong></td><td><em>in die Schule, ins Kino, in den Park</em></td></tr>
</tbody></table>
<table>
<thead><tr><th>Де?</th><th>Прийменник</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td>усередині</td><td><strong>in + Dat.</strong></td><td><em>im Kino, in der Schule, in der Ukraine</em></td></tr>
<tr><td>у когось</td><td><strong>bei + Dat.</strong></td><td><em>beim Arzt, bei meiner Freundin</em></td></tr>
<tr><td>вдома</td><td>—</td><td><em>zu Hause</em> (вдома) ↔ <em>nach Hause</em> (додому)</td></tr>
</tbody></table>
<div class="callout"><strong>Запам’ятайте пару:</strong> <em>Ich gehe <strong>nach</strong> Hause</em> (рух додому) —
<em>Ich bin <strong>zu</strong> Hause</em> (перебування вдома). Це найчастіша помилка на A1.</div>`,
    },
    {
      title: '4. Як пояснюють дорогу',
      html: `
<p>Стандартні формули, які точно будуть на іспиті в частині Hören:</p>
<ul>
<li><em><strong>Gehen Sie geradeaus</strong> bis zur Kreuzung.</em> — Ідіть прямо до перехрестя.</li>
<li><em><strong>Biegen Sie</strong> links / rechts <strong>ab</strong>.</em> — Поверніть ліворуч / праворуч.</li>
<li><em>Gehen Sie die erste Straße <strong>rechts</strong>.</em> — Перша вулиця праворуч.</li>
<li><em>Gehen Sie <strong>über</strong> die Brücke / <strong>an</strong> der Kirche <strong>vorbei</strong>.</em>
— Ідіть через міст / повз церкву.</li>
<li><em>Das Museum ist <strong>auf der linken Seite</strong>, <strong>neben</strong> der Bank,
<strong>gegenüber</strong> dem Park.</em></li>
<li><em>Nehmen Sie die U-Bahn <strong>Linie 3</strong> bis zur Haltestelle Rathaus.</em></li>
<li><em>Das ist ungefähr <strong>zehn Minuten zu Fuß</strong>.</em> — Це приблизно 10 хвилин пішки.</li>
</ul>
<p><strong>Питання:</strong> <em>Entschuldigung, wie komme ich zum Bahnhof?</em> /
<em>Wo ist die nächste Apotheke?</em> / <em>Ist es weit von hier?</em></p>`,
    },
  ],

  vocab: [
    {
      group: 'У місті',
      items: [
        { de: 'der Bahnhof, ¨-e', uk: 'вокзал' },
        { de: 'die Haltestelle, -n', uk: 'зупинка' },
        { de: 'die Apotheke, -n', uk: 'аптека' },
        { de: 'die Post', uk: 'пошта' },
        { de: 'die Bank, -en', uk: 'банк' },
        { de: 'das Rathaus', uk: 'ратуша' },
        { de: 'die Kirche, -n', uk: 'церква' },
        { de: 'das Krankenhaus', uk: 'лікарня' },
        { de: 'die Bibliothek, -en', uk: 'бібліотека' },
        { de: 'das Kino, -s', uk: 'кінотеатр' },
        { de: 'der Park, -s', uk: 'парк' },
        { de: 'die Straße, -n', uk: 'вулиця' },
        { de: 'der Platz, ¨-e', uk: 'площа' },
        { de: 'die Kreuzung, -en', uk: 'перехрестя' },
        { de: 'die Ampel, -n', uk: 'світлофор' },
        { de: 'die Brücke, -n', uk: 'міст' },
      ],
    },
    {
      group: 'Напрямок і рух',
      items: [
        { de: 'geradeaus', uk: 'прямо' },
        { de: 'links / rechts', uk: 'ліворуч / праворуч' },
        { de: 'abbiegen', uk: 'повертати', ex: 'Biegen Sie links ab!' },
        { de: 'vorbeigehen an', uk: 'проходити повз' },
        { de: 'über', uk: 'через' },
        { de: 'neben', uk: 'поруч із' },
        { de: 'gegenüber', uk: 'навпроти' },
        { de: 'zwischen', uk: 'між' },
        { de: 'hinter / vor', uk: 'за / перед' },
        { de: 'weit / nah', uk: 'далеко / близько' },
        { de: 'zu Fuß', uk: 'пішки' },
        { de: 'die U-Bahn / die Straßenbahn', uk: 'метро / трамвай' },
        { de: 'die Linie, -n', uk: 'лінія, маршрут' },
        { de: 'aussteigen / einsteigen / umsteigen', uk: 'виходити / заходити / пересідати' },
      ],
    },
    {
      group: 'Ввічливі формули',
      items: [
        { de: 'Entschuldigung, wie komme ich zu …?', uk: 'Перепрошую, як мені дістатися до …?' },
        { de: 'Wo ist der / die / das nächste …?', uk: 'Де найближчий / -а / -е …?' },
        { de: 'Ist es weit von hier?', uk: 'Це далеко звідси?' },
        { de: 'Können Sie das bitte wiederholen?', uk: 'Могли б Ви повторити?' },
        { de: 'Sprechen Sie bitte langsamer.', uk: 'Говоріть, будь ласка, повільніше.' },
        { de: 'Vielen Dank! — Gern geschehen.', uk: 'Дуже дякую! — Будь ласка.' },
        { de: 'Es tut mir leid, ich bin auch fremd hier.', uk: 'Вибачте, я тут теж не місцевий.' },
      ],
    },
  ],

  exercises: [
    { type: 'gap', q: '___ bitte langsamer! (sprechen, du)', answers: ['Sprich'],
      explain: 'sprechen має e → i, і в імперативі du ця зміна зберігається: Sprich!' },
    { type: 'gap', q: '___ Sie geradeaus bis zur Ampel! (gehen)', answers: ['Gehen'] },
    { type: 'gap', q: '___ nicht so schnell! (fahren, du)', answers: ['Fahr'],
      explain: 'a → ä в імперативі du втрачається: Fahr!, а не «Fähr!».' },
    { type: 'gap', q: '___ ruhig, Kinder! (sein, ihr)', answers: ['Seid'] },
    { type: 'choice', q: 'Ich fahre ___ dem Bus zur Arbeit.', options: ['mit', 'bei', 'zu', 'nach'], answer: 0 },
    { type: 'choice', q: 'Ich gehe ___ Arzt.', options: ['nach dem', 'zum', 'im', 'bei dem'], answer: 1,
      explain: 'До людей та установ — zu + Dativ; zu dem = zum.' },
    { type: 'choice', q: 'Wir fliegen im Sommer ___ die Ukraine.', options: ['nach', 'zu', 'in', 'bei'], answer: 2,
      explain: 'Ukraine вживається з артиклем, тому не nach, а in die Ukraine.' },
    { type: 'choice', q: 'Ich fahre morgen ___ Berlin.', options: ['in', 'zu', 'nach', 'bei'], answer: 2 },
    { type: 'gap', q: 'Ich bin müde und gehe jetzt ___ Hause. Um acht bin ich ___ Hause.', answers: ['nach', 'zu'],
      explain: 'nach Hause — рух; zu Hause — перебування.' },
    { type: 'gap', q: 'Ich wohne ___ meinen Eltern. (bei)', answers: ['bei'] },
    { type: 'gap', q: 'Ich lerne ___ einem Jahr Deutsch.', answers: ['seit'] },
    { type: 'order', q: 'Складіть вказівку.', words: ['Biegen', 'Sie', 'an', 'der', 'Kreuzung', 'links', 'ab'],
      answer: 'Biegen Sie an der Kreuzung links ab' },
    { type: 'order', q: 'Складіть речення.', words: ['Die', 'Apotheke', 'ist', 'gegenüber', 'dem', 'Bahnhof'],
      answer: 'Die Apotheke ist gegenüber dem Bahnhof' },
    { type: 'match', q: 'Доберіть переклад.',
      pairs: [['geradeaus', 'прямо'], ['die Haltestelle', 'зупинка'], ['umsteigen', 'пересідати'], ['die Kreuzung', 'перехрестя'], ['zu Fuß', 'пішки']] },
    { type: 'multi', q: 'Які прийменники завжди вимагають Dativ?',
      options: ['aus', 'für', 'mit', 'ohne', 'bei', 'seit'], answers: [0, 2, 4, 5],
      explain: 'für і ohne — це прийменники з Akkusativ.' },
  ],

  listening: [
    {
      exam: 'Goethe A1 · Hören Teil 1',
      title: 'Wie komme ich zum Bahnhof?',
      instruction: 'Турист питає дорогу. Простежте маршрут.',
      lines: [
        { speaker: 'Tourist', de: 'Entschuldigung, wie komme ich zum Hauptbahnhof?', uk: 'Перепрошую, як дістатися до головного вокзалу?' },
        { speaker: 'Frau', de: 'Gehen Sie hier geradeaus bis zur Ampel.', uk: 'Ідіть тут прямо до світлофора.' },
        { speaker: 'Tourist', de: 'Bis zur Ampel, ja.', uk: 'До світлофора, так.' },
        { speaker: 'Frau', de: 'Dann biegen Sie rechts ab und gehen Sie an der Kirche vorbei.', uk: 'Потім поверніть праворуч і йдіть повз церкву.' },
        { speaker: 'Tourist', de: 'Und dann?', uk: 'А потім?' },
        { speaker: 'Frau', de: 'Der Bahnhof ist auf der linken Seite, neben der Post.', uk: 'Вокзал буде ліворуч, поруч із поштою.' },
        { speaker: 'Tourist', de: 'Ist es weit?', uk: 'Це далеко?' },
        { speaker: 'Frau', de: 'Nein, ungefähr zehn Minuten zu Fuß.', uk: 'Ні, приблизно десять хвилин пішки.' },
        { speaker: 'Tourist', de: 'Vielen Dank! — Gern geschehen.', uk: 'Дуже дякую! — Будь ласка.' },
      ],
      tasks: [
        { type: 'choice', q: 'Wohin biegt der Tourist ab?', options: ['Links', 'Rechts', 'Geradeaus', 'Zurück'], answer: 1 },
        { type: 'choice', q: 'Neben welchem Gebäude ist der Bahnhof?', options: ['Neben der Kirche', 'Neben der Post', 'Neben der Bank', 'Neben dem Park'], answer: 1 },
        { type: 'gap', q: 'Der Weg dauert ungefähr ___ Minuten zu Fuß.', answers: ['10|zehn'] },
        { type: 'truefalse', q: 'Der Bahnhof ist auf der rechten Seite.', answer: false },
      ],
    },
    {
      exam: 'ÖSD A1 · Hören',
      title: 'Ansage in der U-Bahn',
      instruction: 'Оголошення в метро. Слухайте уважно — таких завдань багато на іспиті.',
      lines: [
        { de: 'Nächste Station: Rathausplatz. Ausstieg links.', uk: 'Наступна станція: Ратушна площа. Вихід ліворуч.' },
        { de: 'Umsteigen zur Linie drei und zur Straßenbahn Linie zwei.', uk: 'Пересадка на лінію три і трамвай номер два.' },
        { de: 'Achtung: Die Linie fünf fährt heute nicht bis Hauptbahnhof.', uk: 'Увага: лінія п’ять сьогодні не їде до головного вокзалу.' },
        { de: 'Bitte nehmen Sie den Bus Nummer sechzig.', uk: 'Будь ласка, скористайтеся автобусом номер шістдесят.' },
        { de: 'Wir wünschen Ihnen eine gute Fahrt.', uk: 'Бажаємо приємної поїздки.' },
      ],
      tasks: [
        { type: 'gap', q: 'Die nächste Station heißt ___.', answers: ['Rathausplatz'] },
        { type: 'choice', q: 'Wo ist der Ausstieg?', options: ['Rechts', 'Links', 'Vorne', 'Hinten'], answer: 1 },
        { type: 'choice', q: 'Welche Linie fährt heute nicht bis Hauptbahnhof?', options: ['Linie 2', 'Linie 3', 'Linie 5', 'Linie 60'], answer: 2 },
        { type: 'gap', q: 'Man soll den Bus Nummer ___ nehmen.', answers: ['60|sechzig'] },
      ],
    },
  ],

  writing: [
    {
      exam: 'ÖSD A1 · Schreiben',
      title: 'Wegbeschreibung für einen Gast',
      situation: 'До вас у гості приїжджає подруга Nina. Вона приїде на вокзал. Напишіть, як дійти від вокзалу до вашої квартири. <strong>35–45 слів</strong>.',
      points: ['Wann kommen Sie / wo treffen Sie sich?', 'Der Weg vom Bahnhof (mindestens drei Schritte)', 'Wie lange dauert es?', 'Ihre Telefonnummer für Notfälle'],
      minWords: 35,
      phrases: [
        { de: 'Ich freue mich sehr auf deinen Besuch!', uk: 'Я дуже тішуся з твого приїзду!' },
        { de: 'Vom Bahnhof gehst du zuerst geradeaus.', uk: 'Від вокзалу спочатку йди прямо.' },
        { de: 'Dann biegst du links ab.', uk: 'Потім повертай ліворуч.' },
        { de: 'Geh an der Apotheke vorbei.', uk: 'Пройди повз аптеку.' },
        { de: 'Mein Haus ist neben dem Park, Nummer 12.', uk: 'Мій будинок поруч із парком, номер 12.' },
        { de: 'Das sind ungefähr zehn Minuten zu Fuß.', uk: 'Це приблизно десять хвилин пішки.' },
        { de: 'Ruf mich an, wenn du da bist!', uk: 'Подзвони, коли будеш на місці!' },
      ],
      checklist: [
        'Ви вживаєте імператив du (Geh! Biegt ab! Nimm!) без займенника?',
        'Дієслова з префіксом розірвані: «Biege links ab»?',
        'Прийменники місця з Dativ: an der Apotheke, neben dem Park?',
        'Пояснення має щонайменше три кроки?',
        'Є привітання і прощання?',
      ],
      model:
`Liebe Nina,

ich freue mich sehr auf deinen Besuch am Samstag!
Vom Bahnhof gehst du zuerst geradeaus bis zur Ampel. Dann biege rechts ab und geh an der Apotheke vorbei.
Nach der Brücke siehst du einen kleinen Park. Mein Haus ist gegenüber dem Park, Nummer 12, zweiter Stock.
Das sind ungefähr zehn Minuten zu Fuß. Ruf mich bitte an, wenn du am Bahnhof bist: 0664 55 12 30.

Bis Samstag!
Olha`,
      modelUk: 'Переклад: Люба Ніно, я дуже тішуся з твого приїзду в суботу! Від вокзалу спочатку йди прямо до світлофора. Потім поверни праворуч і пройди повз аптеку. Після мосту побачиш маленький парк. Мій будинок навпроти парку, номер 12, другий поверх. Це приблизно десять хвилин пішки. Подзвони, будь ласка, коли будеш на вокзалі: 0664 55 12 30. До суботи! Ольга.',
    },
  ],

  test: [
    { type: 'gap', q: '___ mir bitte! (helfen, du)', answers: ['Hilf'] },
    { type: 'gap', q: '___ Sie bitte langsamer! (sprechen)', answers: ['Sprechen'] },
    { type: 'gap', q: '___ den Text laut! (lesen, du)', answers: ['Lies'] },
    { type: 'gap', q: '___ vorsichtig! (sein, du)', answers: ['Sei'] },
    { type: 'choice', q: 'Ich komme ___ der Ukraine.', options: ['von', 'aus', 'bei', 'nach'], answer: 1 },
    { type: 'choice', q: 'Sie wohnt ___ ihrer Schwester.', options: ['bei', 'mit', 'zu', 'in'], answer: 0 },
    { type: 'choice', q: 'Wir fahren ___ die Schweiz.', options: ['nach', 'zu', 'in', 'bei'], answer: 2 },
    { type: 'choice', q: 'Ich gehe jetzt ___ Post.', options: ['zur', 'nach der', 'in die', 'bei der'], answer: 0 },
    { type: 'gap', q: 'Ich spiele oft mit ___ Kinder___. (die Kinder)', answers: ['den', 'n'],
      explain: 'У Dativ множини артикль den, а до іменника додається -n: mit den Kindern.' },
    { type: 'order', q: 'Складіть вказівку.', words: ['Gehen', 'Sie', 'geradeaus', 'bis', 'zur', 'Kreuzung'],
      answer: 'Gehen Sie geradeaus bis zur Kreuzung' },
    { type: 'order', q: 'Складіть речення.', words: ['Das', 'Kino', 'ist', 'neben', 'der', 'Bank'],
      answer: 'Das Kino ist neben der Bank' },
    { type: 'order', q: 'Складіть вказівку (du).', words: ['Nimm', 'die', 'U-Bahn', 'Linie', 'drei'],
      answer: 'Nimm die U-Bahn Linie drei' },
    { type: 'match', q: 'Доберіть переклад.',
      pairs: [['abbiegen', 'повертати'], ['gegenüber', 'навпроти'], ['die Ampel', 'світлофор'], ['umsteigen', 'пересідати'], ['die Brücke', 'міст']] },
    { type: 'choice', q: 'Яка пара правильна?',
      options: ['Ich gehe zu Hause. / Ich bin nach Hause.', 'Ich gehe nach Hause. / Ich bin zu Hause.', 'Ich gehe in Hause. / Ich bin bei Hause.', 'Ich gehe bei Hause. / Ich bin in Hause.'],
      answer: 1 },
    { type: 'truefalse', q: 'У формі Sie імператив утворюється інфінітивом + Sie: «Kommen Sie!»', answer: true },
  ],
},

/* ══════════════════════════════════ МОДУЛЬ 8 ══════════════════════════════ */
{
  id: 'm8',
  title: 'Perfekt — die Vergangenheit',
  titleUk: 'Минулий час: як розповісти про те, що вже сталося',
  can: [
    'утворювати Partizip II правильних і найважливіших неправильних дієслів',
    'обирати між haben і sein',
    'розповісти про вихідні, відпустку, вчорашній день',
    'вживати Präteritum від sein і haben (war, hatte)',
  ],

  grammar: [
    {
      title: '1. Що таке Perfekt і навіщо він',
      html: `
<p>У розмовній німецькій минулий час майже завжди виражають <strong>Perfekt</strong> — складеною формою
з двох частин:</p>
<p style="font-size:1.05rem" class="de"><strong>haben / sein</strong> (змінюється, 2 місце) + … +
<strong>Partizip II</strong> (не змінюється, кінець речення)</p>
<table>
<thead><tr><th>1</th><th>2 — haben/sein</th><th>середина</th><th>кінець — Partizip II</th></tr></thead>
<tbody>
<tr><td><em>Ich</em></td><td><em>habe</em></td><td><em>gestern Fußball</em></td><td><em>gespielt.</em></td></tr>
<tr><td><em>Wir</em></td><td><em>sind</em></td><td><em>am Samstag nach Wien</em></td><td><em>gefahren.</em></td></tr>
<tr><td><em>Was</em></td><td><em>hast</em></td><td><em>du am Wochenende</em></td><td><em>gemacht?</em></td></tr>
</tbody></table>
<p>Це та сама рамкова конструкція, що й із модальними дієсловами. Українською <em>Ich habe gespielt</em>
перекладається просто «я грав» — жодного «я маю зіграно» не існує.</p>`,
    },
    {
      title: '2. Partizip II: три групи',
      html: `
<table>
<thead><tr><th>Група</th><th>Схема</th><th>Приклади</th></tr></thead>
<tbody>
<tr><td><strong>Слабкі</strong> (правильні)</td><td>ge- + основа + <strong>-t</strong></td>
<td><em>machen → <strong>ge</strong>mach<strong>t</strong></em><br><em>spielen → gespielt</em>, <em>lernen → gelernt</em>, <em>kaufen → gekauft</em></td></tr>
<tr><td><strong>Сильні</strong> (неправильні)</td><td>ge- + <u>змінена</u> основа + <strong>-en</strong></td>
<td><em>trinken → <strong>ge</strong>trunk<strong>en</strong></em><br><em>schreiben → geschrieben</em>, <em>fahren → gefahren</em></td></tr>
<tr><td><strong>Мішані</strong></td><td>ge- + змінена основа + <strong>-t</strong></td>
<td><em>bringen → gebracht</em>, <em>denken → gedacht</em>, <em>wissen → gewusst</em></td></tr>
</tbody></table>
<p><strong>Коли ge- <u>не</u> ставиться:</strong></p>
<ul>
<li>дієслова на <em>-ieren</em>: <em>studieren → studiert</em>, <em>telefonieren → telefoniert</em>,
<em>fotografieren → fotografiert</em>;</li>
<li>з невідокремлюваним префіксом (be-, ge-, er-, ver-, zer-, ent-, emp-, miss-):
<em>besuchen → besucht</em>, <em>verstehen → verstanden</em>, <em>bekommen → bekommen</em>.</li>
</ul>
<p><strong>Відокремлюваний префікс:</strong> <em>ge-</em> ставиться <u>всередину</u>:
<em>ein<strong>ge</strong>kauft</em>, <em>auf<strong>ge</strong>standen</em>, <em>an<strong>ge</strong>rufen</em>,
<em>fern<strong>ge</strong>sehen</em>.</p>`,
    },
    {
      title: '3. haben чи sein?',
      html: `
<p><strong>Приблизно 95 % дієслів утворюють Perfekt із haben.</strong> Із <em>sein</em> — лише три групи,
які варто вивчити напам’ять.</p>
<table>
<thead><tr><th>З <em>sein</em></th><th>Приклади</th></tr></thead>
<tbody>
<tr><td>рух з місця на місце</td><td><em>gehen, fahren, fliegen, kommen, laufen, reisen, steigen</em><br>
<em>Ich <strong>bin</strong> nach Wien gefahren.</em></td></tr>
<tr><td>зміна стану</td><td><em>aufstehen, einschlafen, aufwachen, werden, sterben, wachsen</em><br>
<em>Er <strong>ist</strong> um sechs aufgestanden.</em></td></tr>
<tr><td>три винятки</td><td><em><strong>sein</strong> (gewesen), <strong>bleiben</strong> (geblieben),
<strong>passieren</strong> (passiert)</em><br><em>Ich <strong>bin</strong> zu Hause geblieben.</em></td></tr>
</tbody></table>
<div class="callout"><strong>Пастка.</strong> Одне й те саме дієслово може мати обидва допоміжні —
залежно від того, чи є прямий додаток: <em>Ich <strong>bin</strong> nach Berlin gefahren</em> (я їхав) —
<em>Ich <strong>habe</strong> das Auto gefahren</em> (я вів авто). На A1 достатньо першого варіанта.</div>`,
    },
    {
      title: '4. Найважливіші неправильні Partizip II',
      html: `
<p>Це мінімальний список для A1. Вчіть трійками: інфінітив → Partizip II → допоміжне дієслово.</p>
<table>
<thead><tr><th>Інфінітив</th><th>Partizip II</th><th>haben / sein</th><th>Значення</th></tr></thead>
<tbody>
<tr><td>sein</td><td>gewesen</td><td>ist</td><td>бути</td></tr>
<tr><td>haben</td><td>gehabt</td><td>hat</td><td>мати</td></tr>
<tr><td>gehen</td><td>gegangen</td><td>ist</td><td>іти</td></tr>
<tr><td>fahren</td><td>gefahren</td><td>ist</td><td>їхати</td></tr>
<tr><td>fliegen</td><td>geflogen</td><td>ist</td><td>летіти</td></tr>
<tr><td>kommen</td><td>gekommen</td><td>ist</td><td>приходити</td></tr>
<tr><td>bleiben</td><td>geblieben</td><td>ist</td><td>залишатися</td></tr>
<tr><td>aufstehen</td><td>aufgestanden</td><td>ist</td><td>вставати</td></tr>
<tr><td>essen</td><td>gegessen</td><td>hat</td><td>їсти</td></tr>
<tr><td>trinken</td><td>getrunken</td><td>hat</td><td>пити</td></tr>
<tr><td>schlafen</td><td>geschlafen</td><td>hat</td><td>спати</td></tr>
<tr><td>lesen</td><td>gelesen</td><td>hat</td><td>читати</td></tr>
<tr><td>schreiben</td><td>geschrieben</td><td>hat</td><td>писати</td></tr>
<tr><td>sprechen</td><td>gesprochen</td><td>hat</td><td>говорити</td></tr>
<tr><td>sehen</td><td>gesehen</td><td>hat</td><td>бачити</td></tr>
<tr><td>nehmen</td><td>genommen</td><td>hat</td><td>брати</td></tr>
<tr><td>treffen</td><td>getroffen</td><td>hat</td><td>зустрічати</td></tr>
<tr><td>helfen</td><td>geholfen</td><td>hat</td><td>допомагати</td></tr>
<tr><td>finden</td><td>gefunden</td><td>hat</td><td>знаходити</td></tr>
<tr><td>verstehen</td><td>verstanden</td><td>hat</td><td>розуміти</td></tr>
</tbody></table>`,
    },
    {
      title: '5. war і hatte — виняток на користь простоти',
      html: `
<p>Два дієслова німці <em>ніколи</em> не вживають у Perfekt в розмові — <em>sein</em> і <em>haben</em>.
Замість «ich bin gewesen» кажуть просто <strong>ich war</strong>, замість «ich habe gehabt» —
<strong>ich hatte</strong>. Це форми Präteritum, і на A1 їх треба знати.</p>
<table>
<thead><tr><th></th><th>sein → war</th><th>Переклад</th><th>haben → hatte</th><th>Переклад</th></tr></thead>
<tbody>
<tr><td>ich</td><td>war</td><td>я був / була</td><td>hatte</td><td>я мав / мала</td></tr>
<tr><td>du</td><td>warst</td><td>ти був / була</td><td>hattest</td><td>ти мав / мала</td></tr>
<tr><td>er/sie/es</td><td>war</td><td>він був / вона була</td><td>hatte</td><td>він мав / вона мала</td></tr>
<tr><td>wir</td><td>waren</td><td>ми були</td><td>hatten</td><td>ми мали</td></tr>
<tr><td>ihr</td><td>wart</td><td>ви були</td><td>hattet</td><td>ви мали</td></tr>
<tr><td>sie/Sie</td><td>waren</td><td>вони були / Ви були</td><td>hatten</td><td>вони мали / Ви мали</td></tr>
</tbody></table>
<p><em>Gestern <strong>war</strong> ich krank und <strong>hatte</strong> keine Zeit.</em> —
Учора я був хворий і не мав часу.</p>`,
    },
  ],

  vocab: [
    {
      group: 'Час у минулому',
      items: [
        { de: 'gestern', uk: 'учора' },
        { de: 'vorgestern', uk: 'позавчора' },
        { de: 'letzte Woche', uk: 'минулого тижня' },
        { de: 'letztes Jahr', uk: 'минулого року' },
        { de: 'am Wochenende', uk: 'на вихідних' },
        { de: 'vor zwei Tagen', uk: 'два дні тому' },
        { de: 'früher', uk: 'раніше, колись' },
        { de: 'zuerst / dann / danach', uk: 'спочатку / потім / після цього' },
        { de: 'schließlich / am Ende', uk: 'нарешті / врешті' },
      ],
    },
    {
      group: 'Дозвілля та подорож',
      items: [
        { de: 'der Urlaub', uk: 'відпустка', ex: 'Ich war im Urlaub in Italien.' },
        { de: 'die Reise, -n', uk: 'подорож' },
        { de: 'das Meer / der See', uk: 'море / озеро' },
        { de: 'die Berge (Pl.)', uk: 'гори' },
        { de: 'das Hotel, -s', uk: 'готель' },
        { de: 'besuchen', uk: 'відвідувати', ex: 'Ich habe meine Oma besucht.' },
        { de: 'spazieren gehen', uk: 'гуляти' },
        { de: 'schwimmen gehen', uk: 'ходити плавати' },
        { de: 'Fotos machen', uk: 'фотографувати' },
        { de: 'sich ausruhen', uk: 'відпочивати' },
        { de: 'das Wetter war schön', uk: 'погода була гарна' },
        { de: 'toll / super / langweilig', uk: 'чудово / супер / нудно' },
      ],
    },
    {
      group: 'Часті дієслова в Perfekt',
      items: [
        { de: 'machen — hat gemacht', uk: 'робити' },
        { de: 'arbeiten — hat gearbeitet', uk: 'працювати' },
        { de: 'kaufen — hat gekauft', uk: 'купувати' },
        { de: 'lernen — hat gelernt', uk: 'вчити' },
        { de: 'spielen — hat gespielt', uk: 'грати' },
        { de: 'besuchen — hat besucht', uk: 'відвідувати (без ge-!)' },
        { de: 'studieren — hat studiert', uk: 'навчатися (без ge-!)' },
        { de: 'einkaufen — hat eingekauft', uk: 'робити покупки' },
        { de: 'anrufen — hat angerufen', uk: 'телефонувати' },
        { de: 'aufstehen — ist aufgestanden', uk: 'вставати' },
        { de: 'gehen — ist gegangen', uk: 'іти' },
        { de: 'bleiben — ist geblieben', uk: 'залишатися' },
      ],
    },
  ],

  exercises: [
    { type: 'gap', q: 'Ich ___ gestern Fußball ___. (spielen)', answers: ['habe', 'gespielt'] },
    { type: 'gap', q: 'Wir ___ am Samstag nach Wien ___. (fahren)', answers: ['sind', 'gefahren'] },
    { type: 'gap', q: 'Was ___ du am Wochenende ___? (machen)', answers: ['hast', 'gemacht'] },
    { type: 'gap', q: 'Er ___ um sechs Uhr ___. (aufstehen)', answers: ['ist', 'aufgestanden'] },
    { type: 'gap', q: 'Ich ___ meine Oma ___. (besuchen)', answers: ['habe', 'besucht'],
      explain: 'be- — невідокремлюваний префікс, тому без ge-.' },
    { type: 'choice', q: 'Partizip II від <span class="de-inline">trinken</span>:',
      options: ['getrinkt', 'getrunken', 'trinkt', 'getrinken'], answer: 1 },
    { type: 'choice', q: 'Partizip II від <span class="de-inline">telefonieren</span>:',
      options: ['getelefoniert', 'telefoniert', 'getelefonieren', 'telefonierte'], answer: 1,
      explain: 'Дієслова на -ieren не отримують ge-.' },
    { type: 'choice', q: 'Partizip II від <span class="de-inline">einkaufen</span>:',
      options: ['geeinkauft', 'einkauft', 'eingekauft', 'einkaufte'], answer: 2,
      explain: 'ge- ставиться між префіксом і основою.' },
    { type: 'choice', q: 'Ich ___ zu Hause geblieben.', options: ['habe', 'bin', 'war', 'hatte'], answer: 1,
      explain: 'bleiben — один із трьох винятків із sein.' },
    { type: 'multi', q: 'Які дієслова утворюють Perfekt із <span class="de-inline">sein</span>?',
      options: ['gehen', 'essen', 'fliegen', 'kaufen', 'aufstehen', 'bleiben'],
      answers: [0, 2, 4, 5] },
    { type: 'gap', q: 'Gestern ___ ich krank und ___ keine Zeit. (sein / haben, Präteritum)',
      answers: ['war', 'hatte'] },
    { type: 'order', q: 'Складіть речення.', words: ['Ich', 'habe', 'gestern', 'einen', 'Film', 'gesehen'],
      answer: 'Ich habe gestern einen Film gesehen' },
    { type: 'order', q: 'Складіть речення.', words: ['Am', 'Sonntag', 'sind', 'wir', 'ins', 'Kino', 'gegangen'],
      answer: 'Am Sonntag sind wir ins Kino gegangen' },
    { type: 'order', q: 'Складіть питання.', words: ['Wann', 'bist', 'du', 'nach', 'Hause', 'gekommen', '?'],
      answer: 'Wann bist du nach Hause gekommen ?|Wann bist du nach Hause gekommen?' },
    { type: 'match', q: 'Доберіть Partizip II.',
      pairs: [['essen', 'gegessen'], ['schreiben', 'geschrieben'], ['nehmen', 'genommen'], ['verstehen', 'verstanden'], ['fliegen', 'geflogen'], ['helfen', 'geholfen']] },
  ],

  listening: [
    {
      exam: 'Goethe A1 · Hören Teil 2',
      title: 'Wie war dein Wochenende?',
      instruction: 'Двоє друзів говорять про вихідні.',
      lines: [
        { speaker: 'Ben', de: 'Hallo Katja! Wie war dein Wochenende?', uk: 'Привіт, Катю! Як минули твої вихідні?' },
        { speaker: 'Katja', de: 'Super! Am Samstag bin ich mit Freunden an den See gefahren.', uk: 'Чудово! У суботу я з друзями поїхала на озеро.' },
        { speaker: 'Ben', de: 'Und was habt ihr dort gemacht?', uk: 'І що ви там робили?' },
        { speaker: 'Katja', de: 'Wir sind geschwommen und haben gegrillt. Das Wetter war fantastisch.', uk: 'Ми купалися і смажили на грилі. Погода була фантастична.' },
        { speaker: 'Ben', de: 'Und am Sonntag?', uk: 'А в неділю?' },
        { speaker: 'Katja', de: 'Am Sonntag bin ich zu Hause geblieben. Ich habe gelesen und ferngesehen.', uk: 'У неділю я залишилася вдома. Читала й дивилася телевізор.' },
        { speaker: 'Katja', de: 'Am Abend habe ich meine Eltern angerufen. Und du?', uk: 'Увечері зателефонувала батькам. А ти?' },
        { speaker: 'Ben', de: 'Ich habe leider gearbeitet. Ich war beide Tage im Büro.', uk: 'Я, на жаль, працював. Обидва дні був в офісі.' },
      ],
      tasks: [
        { type: 'choice', q: 'Wohin ist Katja am Samstag gefahren?', options: ['In die Berge', 'An den See', 'Nach Wien', 'Ins Kino'], answer: 1 },
        { type: 'multi', q: 'Was hat Katja am Sonntag gemacht?',
          options: ['gelesen', 'gegrillt', 'ferngesehen', 'ihre Eltern angerufen', 'gearbeitet'], answers: [0, 2, 3] },
        { type: 'truefalse', q: 'Ben hat am Wochenende gearbeitet.', answer: true },
        { type: 'gap', q: 'Das Wetter am Samstag ___ fantastisch.', answers: ['war'] },
      ],
    },
    {
      exam: 'ÖSD A1 · Hören',
      title: 'Ein Anruf: Entschuldigung für gestern',
      instruction: 'Чоловік телефонує й пояснює, чому вчора не прийшов.',
      lines: [
        { speaker: 'Martin', de: 'Hallo Frau Klein, hier ist Martin Weber. Entschuldigen Sie bitte.', uk: 'Добрий день, пані Кляйн, це Мартін Вебер. Прошу вибачення.' },
        { speaker: 'Martin', de: 'Gestern bin ich leider nicht zum Termin gekommen.', uk: 'Учора я, на жаль, не прийшов на зустріч.' },
        { speaker: 'Frau Klein', de: 'Ja, wir haben auf Sie gewartet. Was ist passiert?', uk: 'Так, ми Вас чекали. Що сталося?' },
        { speaker: 'Martin', de: 'Mein Sohn war krank. Ich bin mit ihm ins Krankenhaus gefahren.', uk: 'Мій син захворів. Я поїхав із ним до лікарні.' },
        { speaker: 'Frau Klein', de: 'Oh, das tut mir leid. Geht es ihm jetzt besser?', uk: 'О, мені шкода. Йому вже краще?' },
        { speaker: 'Martin', de: 'Ja, danke. Können wir einen neuen Termin machen? Vielleicht am Donnerstag?', uk: 'Так, дякую. Можемо призначити нову зустріч? Може, у четвер?' },
        { speaker: 'Frau Klein', de: 'Donnerstag um vierzehn Uhr geht.', uk: 'Четвер о чотирнадцятій підходить.' },
      ],
      tasks: [
        { type: 'choice', q: 'Warum ist Martin gestern nicht gekommen?',
          options: ['Er hat gearbeitet.', 'Sein Sohn war krank.', 'Er hat den Termin vergessen.', 'Er war im Urlaub.'], answer: 1 },
        { type: 'gap', q: 'Er ist mit seinem Sohn ins ___ gefahren.', answers: ['Krankenhaus'] },
        { type: 'choice', q: 'Wann ist der neue Termin?', options: ['Mittwoch um 14 Uhr', 'Donnerstag um 14 Uhr', 'Donnerstag um 4 Uhr', 'Freitag um 14 Uhr'], answer: 1 },
        { type: 'truefalse', q: 'Frau Klein hat auf Martin gewartet.', answer: true },
      ],
    },
  ],

  writing: [
    {
      exam: 'Goethe A1 · Schreiben Teil 2',
      title: 'E-Mail: Ihr Wochenende',
      situation: 'Ваш друг Lukas запитав, як минули ваші вихідні. Напишіть відповідь у Perfekt. <strong>40–50 слів</strong>.',
      points: ['Was haben Sie am Samstag gemacht?', 'Wo waren Sie?', 'Mit wem?', 'Wie war es? Fragen Sie auch Lukas.'],
      minWords: 40,
      phrases: [
        { de: 'Mein Wochenende war wirklich schön.', uk: 'Мої вихідні були справді гарні.' },
        { de: 'Am Samstag bin ich … gefahren.', uk: 'У суботу я поїхав/поїхала …' },
        { de: 'Zuerst … , dann … , danach …', uk: 'Спочатку …, потім …, після цього …' },
        { de: 'Wir haben zusammen gegessen und viel gelacht.', uk: 'Ми разом поїли й багато сміялися.' },
        { de: 'Am Sonntag bin ich zu Hause geblieben.', uk: 'У неділю я залишився/лася вдома.' },
        { de: 'Und wie war dein Wochenende?', uk: 'А як минули твої вихідні?' },
      ],
      checklist: [
        'Кожне речення має допоміжне дієслово (habe/bin) на другому місці?',
        'Partizip II стоїть у самому кінці речення?',
        'Ви правильно обрали haben чи sein (рух і зміна стану — sein)?',
        'Для sein і haben ви вжили war / hatte, а не Perfekt?',
        'Є щонайменше два зв’язних слова (zuerst, dann, danach)?',
      ],
      model:
`Hallo Lukas,

mein Wochenende war wirklich toll!
Am Samstag bin ich mit zwei Freundinnen in die Berge gefahren. Zuerst sind wir drei Stunden gewandert,
dann haben wir in einem kleinen Restaurant gegessen. Danach habe ich viele Fotos gemacht.
Am Sonntag bin ich zu Hause geblieben und habe ein Buch gelesen. Ich war sehr müde, aber glücklich.

Und wie war dein Wochenende?

Liebe Grüße
Iryna`,
      modelUk: 'Переклад: Привіт, Лукасе! Мої вихідні були справді чудові! У суботу я з двома подругами поїхала в гори. Спочатку ми три години йшли в похід, потім поїли в маленькому ресторані. Після цього я зробила багато фотографій. У неділю залишилася вдома й прочитала книжку. Я була дуже втомлена, але щаслива. А як минули твої вихідні? Сердечні вітання, Ірина.',
    },
  ],

  test: [
    { type: 'gap', q: 'Ich ___ gestern einen Film ___. (sehen)', answers: ['habe', 'gesehen'] },
    { type: 'gap', q: 'Sie ___ letztes Jahr nach Italien ___. (fliegen)', answers: ['ist', 'geflogen'] },
    { type: 'gap', q: 'Wir ___ am Abend Pizza ___. (essen)', answers: ['haben', 'gegessen'] },
    { type: 'gap', q: 'Er ___ den ganzen Tag zu Hause ___. (bleiben)', answers: ['ist', 'geblieben'] },
    { type: 'gap', q: 'Ich ___ meine Freundin ___. (anrufen)', answers: ['habe', 'angerufen'] },
    { type: 'choice', q: 'Partizip II від <span class="de-inline">studieren</span>:',
      options: ['gestudiert', 'studiert', 'gestudieren', 'studierte'], answer: 1 },
    { type: 'choice', q: 'Partizip II від <span class="de-inline">verstehen</span>:',
      options: ['geverstanden', 'verstanden', 'gestanden', 'verstehte'], answer: 1 },
    { type: 'choice', q: 'Partizip II від <span class="de-inline">aufstehen</span>:',
      options: ['geaufstanden', 'aufstanden', 'aufgestanden', 'gestandenauf'], answer: 2 },
    { type: 'choice', q: 'Gestern ___ ich sehr müde.', options: ['bin', 'habe', 'war', 'hatte'], answer: 2 },
    { type: 'choice', q: 'Letzte Woche ___ wir keine Zeit.', options: ['waren', 'hatten', 'sind', 'haben'], answer: 1 },
    { type: 'multi', q: 'Позначте дієслова з <span class="de-inline">sein</span> у Perfekt.',
      options: ['kommen', 'lesen', 'einschlafen', 'trinken', 'fahren', 'passieren'],
      answers: [0, 2, 4, 5] },
    { type: 'order', q: 'Складіть речення.', words: ['Wir', 'haben', 'am', 'Samstag', 'im', 'Park', 'gegrillt'],
      answer: 'Wir haben am Samstag im Park gegrillt' },
    { type: 'order', q: 'Складіть речення.', words: ['Ich', 'bin', 'um', 'sieben', 'Uhr', 'aufgestanden'],
      answer: 'Ich bin um sieben Uhr aufgestanden' },
    { type: 'match', q: 'Доберіть Partizip II.',
      pairs: [['gehen', 'gegangen'], ['sprechen', 'gesprochen'], ['finden', 'gefunden'], ['bringen', 'gebracht'], ['sein', 'gewesen']] },
    { type: 'truefalse', q: 'У розмові німці зазвичай кажуть «ich bin gewesen», а не «ich war».', answer: false,
      explain: 'Навпаки: для sein і haben вживають Präteritum — war, hatte.' },
  ],
},

/* ══════════════════════════════════ МОДУЛЬ 9 ══════════════════════════════ */
{
  id: 'm9',
  title: 'Dativ und Personalpronomen',
  titleUk: 'Давальний відмінок, займенники та подарунки',
  can: [
    'вживати Dativ як непрямий додаток (кому?)',
    'знати дієслова, що вимагають тільки Dativ',
    'замінювати іменники займенниками в Akkusativ і Dativ',
    'правильно розташовувати два додатки в реченні',
    'говорити про подарунки, здоров’я і те, що вам подобається',
  ],

  grammar: [
    {
      title: '1. Dativ — кому? (непрямий додаток)',
      html: `
<p>Багато дієслів мають <em>два</em> додатки: щось (Akkusativ) — комусь (Dativ).</p>
<p><em>Ich schenke <strong>meiner Mutter</strong> (кому? Dativ) <strong>Blumen</strong> (що? Akkusativ).</em></p>
<table>
<thead><tr><th></th><th>чоловічий</th><th>жіночий</th><th>середній</th><th>множина</th></tr></thead>
<tbody>
<tr><td>Nominativ</td><td>der / ein / mein</td><td>die / eine / meine</td><td>das / ein / mein</td><td>die / meine</td></tr>
<tr><td>Akkusativ</td><td>de<strong>n</strong> / eine<strong>n</strong> / meine<strong>n</strong></td><td>die / eine / meine</td><td>das / ein / mein</td><td>die / meine</td></tr>
<tr><td><strong>Dativ</strong></td><td>de<strong>m</strong> / eine<strong>m</strong> / meine<strong>m</strong></td><td>de<strong>r</strong> / eine<strong>r</strong> / meine<strong>r</strong></td><td>de<strong>m</strong> / eine<strong>m</strong> / meine<strong>m</strong></td><td>de<strong>n</strong> + <strong>-n</strong> / meine<strong>n</strong> + <strong>-n</strong></td></tr>
</tbody></table>
<div class="callout callout--tip"><strong>Мнемоніка.</strong> Dativ: чоловічий і середній — <em>-m</em>,
жіночий — <em>-r</em>, множина — <em>-n</em> (і ще -n до іменника):
<em>dem Mann, der Frau, dem Kind, den Kindern</em>.</div>
<p><strong>Дієслова з двома додатками:</strong> <em>geben, schenken, zeigen, erklären, schicken, bringen,
kaufen, sagen, empfehlen</em>.</p>`,
    },
    {
      title: '2. Дієслова тільки з Dativ',
      html: `
<p>Кілька частотних дієслів вимагають Dativ там, де українська дає знахідний. Їх треба знати напам’ять,
бо помилка чутна одразу.</p>
<table>
<thead><tr><th>Дієслово</th><th>Приклад</th><th>Українською</th></tr></thead>
<tbody>
<tr><td><strong>helfen</strong></td><td><em>Ich helfe <strong>dir</strong>.</em></td><td>я допомагаю тобі</td></tr>
<tr><td><strong>danken</strong></td><td><em>Ich danke <strong>Ihnen</strong>.</em></td><td>я дякую Вам</td></tr>
<tr><td><strong>gefallen</strong></td><td><em>Das Buch gefällt <strong>mir</strong>.</em></td><td>книжка мені подобається</td></tr>
<tr><td><strong>schmecken</strong></td><td><em>Die Suppe schmeckt <strong>mir</strong>.</em></td><td>суп мені смакує</td></tr>
<tr><td><strong>gehören</strong></td><td><em>Das Auto gehört <strong>meinem Bruder</strong>.</em></td><td>авто належить моєму братові</td></tr>
<tr><td><strong>antworten</strong></td><td><em>Antworte <strong>mir</strong>!</em></td><td>відповідай мені</td></tr>
<tr><td><strong>passen</strong></td><td><em>Der Termin passt <strong>mir</strong> nicht.</em></td><td>час мені не підходить</td></tr>
<tr><td><strong>gehen</strong> (про самопочуття)</td><td><em>Wie geht es <strong>dir</strong>?</em></td><td>як твої справи</td></tr>
</tbody></table>
<div class="callout"><strong>gefallen vs. mögen.</strong> <em>Mir gefällt der Film</em> — «мені подобається
фільм» (враження, часто про зовнішнє). <em>Ich mag den Film</em> — «я люблю цей фільм» (Akkusativ).
На іспиті трапляються обидва.</div>`,
    },
    {
      title: '3. Особові займенники в трьох відмінках',
      html: `
<table>
<thead><tr><th>Nominativ (хто?)</th><th>Akkusativ (кого?)</th><th>Dativ (кому?)</th></tr></thead>
<tbody>
<tr><td>ich</td><td><strong>mich</strong></td><td><strong>mir</strong></td></tr>
<tr><td>du</td><td><strong>dich</strong></td><td><strong>dir</strong></td></tr>
<tr><td>er</td><td><strong>ihn</strong></td><td><strong>ihm</strong></td></tr>
<tr><td>sie (вона)</td><td><strong>sie</strong></td><td><strong>ihr</strong></td></tr>
<tr><td>es</td><td><strong>es</strong></td><td><strong>ihm</strong></td></tr>
<tr><td>wir</td><td><strong>uns</strong></td><td><strong>uns</strong></td></tr>
<tr><td>ihr</td><td><strong>euch</strong></td><td><strong>euch</strong></td></tr>
<tr><td>sie (вони)</td><td><strong>sie</strong></td><td><strong>ihnen</strong></td></tr>
<tr><td>Sie (ввічливо)</td><td><strong>Sie</strong></td><td><strong>Ihnen</strong></td></tr>
</tbody></table>
<p><strong>Займенник замінює й неживі предмети</strong> — за родом іменника, а не за «живістю»:</p>
<ul>
<li><em>Wo ist <strong>der Schlüssel</strong>? — <strong>Er</strong> ist auf dem Tisch. Ich sehe <strong>ihn</strong> nicht.</em></li>
<li><em>Wie findest du <strong>die Wohnung</strong>? — Ich finde <strong>sie</strong> super.</em></li>
</ul>`,
    },
    {
      title: '4. Порядок двох додатків',
      html: `
<p>Просте правило з двох частин:</p>
<table>
<thead><tr><th>Ситуація</th><th>Порядок</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td>обидва — іменники</td><td><strong>Dativ → Akkusativ</strong></td><td><em>Ich gebe <u>dem Kind</u> <u>das Buch</u>.</em></td></tr>
<tr><td>один — займенник</td><td><strong>займенник іде першим</strong></td><td><em>Ich gebe <u>es</u> dem Kind.</em><br><em>Ich gebe <u>ihm</u> das Buch.</em></td></tr>
<tr><td>обидва — займенники</td><td><strong>Akkusativ → Dativ</strong></td><td><em>Ich gebe <u>es</u> <u>ihm</u>.</em></td></tr>
</tbody></table>
<div class="callout"><strong>Коротке правило:</strong> «займенник любить бути раніше», а якщо займенники
обидва — знахідний вискакує вперед. Порівняйте українське «Я дам йому книжку» → «Я дам її йому».</div>`,
    },
  ],

  vocab: [
    {
      group: 'Подарунки та свята',
      items: [
        { de: 'schenken', uk: 'дарувати', ex: 'Ich schenke ihr Blumen.' },
        { de: 'das Geschenk, -e', uk: 'подарунок' },
        { de: 'der Geburtstag, -e', uk: 'день народження', ex: 'Herzlichen Glückwunsch zum Geburtstag!' },
        { de: 'die Blumen (Pl.)', uk: 'квіти' },
        { de: 'die Schokolade', uk: 'шоколад' },
        { de: 'die Karte, -n', uk: 'листівка; квиток' },
        { de: 'gratulieren', uk: 'вітати' },
        { de: 'feiern', uk: 'святкувати' },
        { de: 'einladen', uk: 'запрошувати', ex: 'Ich lade dich ein.' },
        { de: 'die Party, -s', uk: 'вечірка' },
      ],
    },
    {
      group: 'Дієслова з Dativ',
      items: [
        { de: 'helfen + Dat.', uk: 'допомагати комусь' },
        { de: 'danken + Dat.', uk: 'дякувати комусь' },
        { de: 'gefallen + Dat.', uk: 'подобатися комусь' },
        { de: 'schmecken + Dat.', uk: 'смакувати комусь' },
        { de: 'gehören + Dat.', uk: 'належати комусь' },
        { de: 'passen + Dat.', uk: 'підходити комусь' },
        { de: 'antworten + Dat.', uk: 'відповідати комусь' },
        { de: 'geben + Dat. + Akk.', uk: 'давати комусь щось' },
        { de: 'zeigen + Dat. + Akk.', uk: 'показувати комусь щось' },
        { de: 'erklären + Dat. + Akk.', uk: 'пояснювати комусь щось' },
        { de: 'schicken + Dat. + Akk.', uk: 'надсилати комусь щось' },
        { de: 'empfehlen + Dat. + Akk.', uk: 'радити комусь щось' },
      ],
    },
    {
      group: 'Здоров’я і самопочуття',
      items: [
        { de: 'Wie geht es dir / Ihnen?', uk: 'Як твої / Ваші справи?' },
        { de: 'Mir geht es gut / schlecht.', uk: 'Мені добре / погано.' },
        { de: 'krank / gesund', uk: 'хворий / здоровий' },
        { de: 'Ich habe Kopfschmerzen.', uk: 'У мене болить голова.' },
        { de: 'Ich habe Bauchschmerzen / Halsschmerzen.', uk: 'У мене болить живіт / горло.' },
        { de: 'Ich habe Fieber.', uk: 'У мене температура.' },
        { de: 'die Erkältung', uk: 'застуда' },
        { de: 'der Arzt / die Ärztin', uk: 'лікар / лікарка' },
        { de: 'die Medizin / das Medikament', uk: 'ліки' },
        { de: 'Gute Besserung!', uk: 'Одужуйте!' },
      ],
    },
  ],

  exercises: [
    { type: 'gap', q: 'Ich schenke ___ Mutter Blumen. (meine)', answers: ['meiner'],
      explain: 'Кому? — Dativ, жіночий рід → meiner.' },
    { type: 'gap', q: 'Er gibt ___ Kind das Buch. (das)', answers: ['dem'] },
    { type: 'gap', q: 'Ich helfe ___ Bruder. (mein)', answers: ['meinem'],
      explain: 'helfen завжди вимагає Dativ.' },
    { type: 'choice', q: 'Das Auto gehört ___.', options: ['meinen Vater', 'meinem Vater', 'mein Vater', 'meines Vaters'], answer: 1 },
    { type: 'choice', q: 'Wie geht es ___? (ти)', options: ['dich', 'du', 'dir', 'deiner'], answer: 2 },
    { type: 'choice', q: 'Das Buch gefällt ___ sehr.', options: ['mich', 'mir', 'ich', 'meine'], answer: 1 },
    { type: 'gap', q: 'Wo ist der Schlüssel? — Ich sehe ___ nicht.', answers: ['ihn'],
      explain: 'der Schlüssel → Akkusativ ihn.' },
    { type: 'gap', q: 'Wie findest du die Wohnung? — Ich finde ___ super.', answers: ['sie'] },
    { type: 'gap', q: 'Kannst du ___ helfen? (я)', answers: ['mir'] },
    { type: 'gap', q: 'Ich danke ___ herzlich! (Ви, ввічливо)', answers: ['Ihnen'] },
    { type: 'choice', q: 'Обидва додатки — займенники. Який порядок правильний?',
      options: ['Ich gebe ihm es.', 'Ich gebe es ihm.', 'Ich es ihm gebe.', 'Ich gebe ihn es.'], answer: 1,
      explain: 'Два займенники: Akkusativ (es) перед Dativ (ihm).' },
    { type: 'order', q: 'Складіть речення (обидва — іменники).',
      words: ['Ich', 'zeige', 'dem', 'Gast', 'die', 'Stadt'],
      answer: 'Ich zeige dem Gast die Stadt' },
    { type: 'order', q: 'Складіть речення.', words: ['Er', 'schenkt', 'seiner', 'Freundin', 'ein', 'Buch'],
      answer: 'Er schenkt seiner Freundin ein Buch' },
    { type: 'match', q: 'Доберіть форму Dativ.',
      pairs: [['ich', 'mir'], ['du', 'dir'], ['er', 'ihm'], ['sie (вона)', 'ihr'], ['sie (вони)', 'ihnen'], ['wir', 'uns']],
      speak: false },
    { type: 'multi', q: 'Які дієслова вимагають лише Dativ?',
      options: ['helfen', 'sehen', 'danken', 'kaufen', 'gefallen', 'gehören'],
      answers: [0, 2, 4, 5] },
  ],

  listening: [
    {
      exam: 'Goethe A1 · Hören Teil 2',
      title: 'Ein Geschenk für Oma',
      instruction: 'Брат і сестра обирають подарунок бабусі.',
      lines: [
        { speaker: 'Tim', de: 'Omas Geburtstag ist am Freitag. Was schenken wir ihr?', uk: 'День народження бабусі в п’ятницю. Що ми їй подаруємо?' },
        { speaker: 'Lea', de: 'Blumen gefallen ihr immer. Aber das ist langweilig.', uk: 'Квіти їй завжди подобаються. Але це нудно.' },
        { speaker: 'Tim', de: 'Wir können ihr ein Buch kaufen. Sie liest sehr gern.', uk: 'Можемо купити їй книжку. Вона дуже любить читати.' },
        { speaker: 'Lea', de: 'Gute Idee! Und ich backe ihr einen Kuchen.', uk: 'Гарна ідея! А я спечу їй торт.' },
        { speaker: 'Tim', de: 'Perfekt. Zeigst du mir nachher das Rezept?', uk: 'Чудово. Покажеш мені потім рецепт?' },
        { speaker: 'Lea', de: 'Klar, ich schicke es dir per Handy.', uk: 'Звісно, надішлю тобі його на телефон.' },
      ],
      tasks: [
        { type: 'multi', q: 'Was bekommt die Oma?', options: ['Blumen', 'ein Buch', 'einen Kuchen', 'Schokolade'], answers: [1, 2] },
        { type: 'choice', q: 'Wann hat die Oma Geburtstag?', options: ['Am Donnerstag', 'Am Freitag', 'Am Samstag', 'Am Sonntag'], answer: 1 },
        { type: 'choice', q: 'Wie bekommt Tim das Rezept?',
          options: ['Lea zeigt es ihm morgen.', 'Lea schickt es ihm per Handy.', 'Tim sucht es im Internet.', 'Die Oma gibt es ihm.'], answer: 1,
          explain: 'Lea: «ich schicke es dir per Handy» — тобто вона надсилає рецепт Тімові.' },
        { type: 'truefalse', q: 'Die Oma liest gern.', answer: true },
      ],
    },
    {
      exam: 'ÖSD A1 · Hören',
      title: 'Beim Arzt',
      instruction: 'Пацієнтка на прийомі в лікаря.',
      lines: [
        { speaker: 'Arzt', de: 'Guten Tag, Frau Bondar. Wie geht es Ihnen?', uk: 'Добрий день, пані Бондар. Як Ви почуваєтесь?' },
        { speaker: 'Patientin', de: 'Nicht so gut. Ich habe seit drei Tagen Halsschmerzen und Fieber.', uk: 'Не дуже добре. Уже три дні болить горло і температура.' },
        { speaker: 'Arzt', de: 'Wie hoch ist das Fieber?', uk: 'Яка температура?' },
        { speaker: 'Patientin', de: 'Achtunddreißig Grad. Und ich kann nachts nicht schlafen.', uk: 'Тридцять вісім градусів. І я не можу спати вночі.' },
        { speaker: 'Arzt', de: 'Sie haben eine Erkältung. Ich gebe Ihnen ein Medikament.', uk: 'У Вас застуда. Я випишу Вам ліки.' },
        { speaker: 'Arzt', de: 'Sie sollen viel trinken und drei Tage zu Hause bleiben.', uk: 'Вам слід багато пити і три дні залишатися вдома.' },
        { speaker: 'Patientin', de: 'Vielen Dank, Herr Doktor. — Gute Besserung!', uk: 'Дуже дякую, пане лікарю. — Одужуйте!' },
      ],
      tasks: [
        { type: 'multi', q: 'Welche Symptome hat die Patientin?',
          options: ['Halsschmerzen', 'Kopfschmerzen', 'Fieber', 'Bauchschmerzen'], answers: [0, 2] },
        { type: 'gap', q: 'Das Fieber ist ___ Grad.', answers: ['38|achtunddreißig|achtunddreissig'] },
        { type: 'choice', q: 'Was soll die Patientin machen?',
          options: ['Sport machen', 'Viel trinken und zu Hause bleiben', 'Ins Büro gehen', 'Nichts essen'], answer: 1 },
        { type: 'gap', q: 'Der Arzt sagt: «Ich gebe ___ ein Medikament.» (ввічливе «Вам»)', answers: ['Ihnen'] },
      ],
    },
  ],

  writing: [
    {
      exam: 'Goethe A1 · Schreiben Teil 2',
      title: 'Einladung zum Geburtstag',
      situation: 'У вас день народження. Напишіть запрошення другові Stefan. <strong>35–45 слів</strong>.',
      points: ['Wann und wo feiern Sie?', 'Wen laden Sie noch ein?', 'Was soll Stefan mitbringen?', 'Bitten Sie um eine Antwort.'],
      minWords: 35,
      phrases: [
        { de: 'Ich lade dich herzlich zu meinem Geburtstag ein.', uk: 'Щиро запрошую тебе на свій день народження.' },
        { de: 'Die Party ist am Samstag um 19 Uhr bei mir zu Hause.', uk: 'Вечірка в суботу о 19:00 у мене вдома.' },
        { de: 'Ich habe auch Anna und Max eingeladen.', uk: 'Я запросив/ла також Анну і Макса.' },
        { de: 'Kannst du mir bitte einen Salat mitbringen?', uk: 'Чи можеш принести мені салат?' },
        { de: 'Ein Geschenk brauchst du nicht.', uk: 'Подарунок не потрібен.' },
        { de: 'Bitte antworte mir bis Donnerstag.', uk: 'Будь ласка, відповідай мені до четверга.' },
      ],
      checklist: [
        'Займенники в Dativ правильні (mir, dir, ihm, ihr, uns)?',
        'Після helfen, danken, antworten, gefallen ви вжили Dativ?',
        'Порядок додатків: іменники — Dativ перед Akkusativ?',
        'Дієслово einladen розірване (Ich lade dich … ein)?',
        'Розкрито всі чотири пункти?',
      ],
      model:
`Lieber Stefan,

ich lade dich herzlich zu meinem Geburtstag ein!
Die Party ist am Samstag um 19 Uhr bei mir zu Hause, in der Bahnhofstraße 8.
Ich habe auch Anna und Max eingeladen — sie freuen sich schon sehr.
Kannst du mir bitte einen Salat mitbringen? Ein Geschenk brauchst du wirklich nicht.
Bitte antworte mir bis Donnerstag.

Liebe Grüße
Taras`,
      modelUk: 'Переклад: Любий Штефане, щиро запрошую тебе на свій день народження! Вечірка в суботу о 19:00 у мене вдома, на Банхофштрасе, 8. Я запросив також Анну і Макса — вони вже дуже тішаться. Можеш принести мені салат? Подарунок справді не потрібен. Будь ласка, відповідай мені до четверга. Сердечні вітання, Тарас.',
    },
  ],

  test: [
    { type: 'gap', q: 'Ich schenke ___ Freundin ein Buch. (meine)', answers: ['meiner'] },
    { type: 'gap', q: 'Sie zeigt ___ Gästen die Wohnung. (die)', answers: ['den'] },
    { type: 'gap', q: 'Kannst du ___ bitte helfen? (ми)', answers: ['uns'] },
    { type: 'gap', q: 'Der Film gefällt ___ nicht. (я)', answers: ['mir'] },
    { type: 'gap', q: 'Ich danke ___ für das Geschenk! (ти)', answers: ['dir'] },
    { type: 'choice', q: 'Das Fahrrad gehört ___.', options: ['mein Bruder', 'meinen Bruder', 'meinem Bruder', 'meines Bruders'], answer: 2 },
    { type: 'choice', q: 'Wo ist das Buch? — Ich habe ___ nicht gesehen.', options: ['ihn', 'sie', 'es', 'ihm'], answer: 2 },
    { type: 'choice', q: 'Kennst du Herrn Weber? — Ja, ich kenne ___.', options: ['er', 'ihn', 'ihm', 'sein'], answer: 1 },
    { type: 'choice', q: 'Правильний порядок із двома займенниками:',
      options: ['Ich schicke dir es.', 'Ich schicke es dir.', 'Ich es dir schicke.', 'Ich schicke dich es.'], answer: 1 },
    { type: 'order', q: 'Складіть речення.', words: ['Er', 'erklärt', 'den', 'Studenten', 'die', 'Grammatik'],
      answer: 'Er erklärt den Studenten die Grammatik' },
    { type: 'order', q: 'Складіть питання.', words: ['Wie', 'geht', 'es', 'Ihnen', '?'],
      answer: 'Wie geht es Ihnen ?|Wie geht es Ihnen?' },
    { type: 'match', q: 'Доберіть Akkusativ до займенника.',
      pairs: [['ich', 'mich'], ['du', 'dich'], ['er', 'ihn'], ['wir', 'uns'], ['ihr', 'euch']], speak: false },
    { type: 'match', q: 'Доберіть переклад.',
      pairs: [['schenken', 'дарувати'], ['gehören', 'належати'], ['empfehlen', 'радити'], ['Gute Besserung!', 'Одужуйте!'], ['Kopfschmerzen', 'головний біль']] },
    { type: 'multi', q: 'Позначте речення без помилок.',
      options: ['Ich helfe dir.', 'Ich helfe dich.', 'Das gefällt mir.', 'Das gefällt mich.', 'Ich danke Ihnen.'],
      answers: [0, 2, 4] },
    { type: 'truefalse', q: 'У Dativ множини до іменника додається -n: «mit den Kindern».', answer: true },
  ],
},

/* ══════════════════════════════════ МОДУЛЬ 10 ═════════════════════════════ */
{
  id: 'm10',
  title: 'Wechselpräpositionen, Wetter und Vergleich',
  titleUk: 'Прийменники місця й напрямку, погода, одяг, порівняння',
  can: [
    'розрізняти Wo? (Dativ) і Wohin? (Akkusativ) з дев’ятьма прийменниками',
    'описувати погоду й пори року',
    'говорити про одяг і покупки',
    'порівнювати за допомогою gern — lieber, gut — besser',
    'підбити підсумок усього рівня A1',
  ],

  grammar: [
    {
      title: '1. Дев’ять прийменників подвійної дії',
      html: `
<p>Це найважливіша тема наприкінці A1. Дев’ять прийменників можуть вимагати <strong>і Dativ, і Akkusativ</strong> —
залежно від того, чи є рух до нової точки.</p>
<p class="de" style="font-size:1.05rem"><strong>in · an · auf · über · unter · vor · hinter · neben · zwischen</strong></p>
<table>
<thead><tr><th></th><th>Wo? — де? (стан)</th><th>Wohin? — куди? (рух)</th></tr></thead>
<tbody>
<tr><td>Відмінок</td><td><strong>Dativ</strong></td><td><strong>Akkusativ</strong></td></tr>
<tr><td>in</td><td><em>Ich bin <strong>in der</strong> Schule.</em></td><td><em>Ich gehe <strong>in die</strong> Schule.</em></td></tr>
<tr><td>auf</td><td><em>Das Buch liegt <strong>auf dem</strong> Tisch.</em></td><td><em>Ich lege das Buch <strong>auf den</strong> Tisch.</em></td></tr>
<tr><td>an</td><td><em>Das Bild hängt <strong>an der</strong> Wand.</em></td><td><em>Ich hänge das Bild <strong>an die</strong> Wand.</em></td></tr>
<tr><td>neben</td><td><em>Er sitzt <strong>neben mir</strong>.</em></td><td><em>Er setzt sich <strong>neben mich</strong>.</em></td></tr>
</tbody></table>
<div class="callout"><strong>Тест на «куди».</strong> Поставте питання до фрази.
Якщо відповідає на <em>Wo?</em> — Dativ. Якщо на <em>Wohin?</em> — Akkusativ.
Українською часто працює той самий тест: «у школі» (де) — «у школу» (куди).</div>
<p><strong>Обов’язкові злиття:</strong> <em>in dem = im</em>, <em>in das = ins</em>, <em>an dem = am</em>,
<em>an das = ans</em>, <em>auf das = aufs</em>.</p>
<p><strong>Пари дієслів,</strong> які часто ходять із цими прийменниками:</p>
<table>
<thead><tr><th>Wo? + Dativ</th><th>Wohin? + Akkusativ</th></tr></thead>
<tbody>
<tr><td><em>liegen</em> — лежати</td><td><em>legen</em> — класти</td></tr>
<tr><td><em>stehen</em> — стояти</td><td><em>stellen</em> — ставити</td></tr>
<tr><td><em>sitzen</em> — сидіти</td><td><em>sich setzen</em> — сідати</td></tr>
<tr><td><em>hängen</em> — висіти</td><td><em>hängen</em> — вішати</td></tr>
</tbody></table>`,
    },
    {
      title: '2. Погода і пори року',
      html: `
<p>Про погоду німці говорять безособовим <em>es</em>:</p>
<ul>
<li><em><strong>Es</strong> regnet.</em> — Іде дощ. &nbsp; <em><strong>Es</strong> schneit.</em> — Іде сніг.</li>
<li><em><strong>Es</strong> ist warm / kalt / heiß / kühl / sonnig / windig / bewölkt / neblig.</em></li>
<li><em>Die Sonne scheint.</em> — Світить сонце. &nbsp; <em>Es sind 20 Grad.</em> — 20 градусів.</li>
<li><em>Wie ist das Wetter heute?</em> — Яка сьогодні погода?</li>
</ul>
<table>
<thead><tr><th>Пора року</th><th>Місяці</th></tr></thead>
<tbody>
<tr><td><em>der Frühling</em> — весна</td><td><em>März, April, Mai</em></td></tr>
<tr><td><em>der Sommer</em> — літо</td><td><em>Juni, Juli, August</em></td></tr>
<tr><td><em>der Herbst</em> — осінь</td><td><em>September, Oktober, November</em></td></tr>
<tr><td><em>der Winter</em> — зима</td><td><em>Dezember, Januar, Februar</em></td></tr>
</tbody></table>
<p>З порами року й місяцями вживають <strong>im</strong>: <em>im Sommer, im Juli</em>.</p>`,
    },
    {
      title: '3. Порівняння: gern — lieber — am liebsten',
      html: `
<p>На A1 достатньо трьох найважливіших рядів. Усі вони неправильні, тому вчаться напам’ять.</p>
<table>
<thead><tr><th>Позитив</th><th>Компаратив</th><th>Суперлатив</th><th>Значення</th></tr></thead>
<tbody>
<tr><td><em>gern</em></td><td><em>lieber</em></td><td><em>am liebsten</em></td><td>охоче — охочіше — найохочіше</td></tr>
<tr><td><em>gut</em></td><td><em>besser</em></td><td><em>am besten</em></td><td>добре — краще — найкраще</td></tr>
<tr><td><em>viel</em></td><td><em>mehr</em></td><td><em>am meisten</em></td><td>багато — більше — найбільше</td></tr>
</tbody></table>
<p><em>Ich trinke <strong>gern</strong> Tee, aber ich trinke <strong>lieber</strong> Kaffee.
<strong>Am liebsten</strong> trinke ich Wasser.</em></p>
<p><strong>Правильні прикметники</strong> утворюють ступені через <em>-er</em> і <em>am …-sten</em>,
короткі часто з умлаутом:</p>
<ul>
<li><em>klein → kleiner → am kleinsten</em></li>
<li><em>alt → <strong>ä</strong>lter → am ältesten</em>, <em>groß → gr<strong>ö</strong>ßer → am größten</em>,
<em>jung → j<strong>ü</strong>nger → am jüngsten</em></li>
</ul>
<p><strong>Порівняння з als і wie:</strong></p>
<ul>
<li>нерівність — <em><strong>als</strong></em>: <em>Wien ist größer <strong>als</strong> Salzburg.</em></li>
<li>рівність — <em>so … <strong>wie</strong></em>: <em>Heute ist es <strong>so</strong> kalt <strong>wie</strong> gestern.</em></li>
</ul>`,
    },
  ],

  vocab: [
    {
      group: 'Погода',
      items: [
        { de: 'das Wetter', uk: 'погода' },
        { de: 'die Sonne / sonnig', uk: 'сонце / сонячно' },
        { de: 'der Regen / Es regnet.', uk: 'дощ / іде дощ' },
        { de: 'der Schnee / Es schneit.', uk: 'сніг / іде сніг' },
        { de: 'der Wind / windig', uk: 'вітер / вітряно' },
        { de: 'die Wolke, -n / bewölkt', uk: 'хмара / хмарно' },
        { de: 'warm / heiß', uk: 'тепло / спекотно' },
        { de: 'kalt / kühl', uk: 'холодно / прохолодно' },
        { de: 'das Grad', uk: 'градус', ex: 'Es sind minus fünf Grad.' },
        { de: 'der Frühling / der Sommer', uk: 'весна / літо' },
        { de: 'der Herbst / der Winter', uk: 'осінь / зима' },
      ],
    },
    {
      group: 'Одяг',
      items: [
        { de: 'die Kleidung', uk: 'одяг' },
        { de: 'die Hose, -n', uk: 'штани' },
        { de: 'das Hemd, -en', uk: 'сорочка' },
        { de: 'die Bluse, -n', uk: 'блуза' },
        { de: 'der Pullover, -', uk: 'светр' },
        { de: 'die Jacke, -n', uk: 'куртка' },
        { de: 'der Mantel, ¨-', uk: 'пальто' },
        { de: 'das Kleid, -er', uk: 'сукня' },
        { de: 'die Schuhe (Pl.)', uk: 'взуття' },
        { de: 'der Schal / die Mütze', uk: 'шарф / шапка' },
        { de: 'anziehen', uk: 'одягати', ex: 'Zieh die Jacke an!' },
        { de: 'anprobieren', uk: 'приміряти' },
        { de: 'die Größe, -n', uk: 'розмір' },
        { de: 'passen / stehen', uk: 'бути в пору / личити', ex: 'Das Kleid steht dir gut.' },
      ],
    },
    {
      group: 'Місце та рух',
      items: [
        { de: 'liegen / legen', uk: 'лежати / класти' },
        { de: 'stehen / stellen', uk: 'стояти / ставити' },
        { de: 'sitzen / sich setzen', uk: 'сидіти / сідати' },
        { de: 'hängen', uk: 'висіти; вішати' },
        { de: 'in / an / auf', uk: 'у / біля, на (вертикально) / на (горизонтально)' },
        { de: 'über / unter', uk: 'над / під' },
        { de: 'vor / hinter', uk: 'перед / за' },
        { de: 'neben / zwischen', uk: 'поруч / між' },
        { de: 'die Wand, ¨-e', uk: 'стіна' },
        { de: 'der Boden', uk: 'підлога' },
      ],
    },
  ],

  exercises: [
    { type: 'choice', q: 'Ich gehe ___ Schule. (куди?)', options: ['in der', 'in die', 'im', 'an der'], answer: 1,
      explain: 'Рух → Akkusativ: in die Schule.' },
    { type: 'choice', q: 'Ich bin ___ Schule. (де?)', options: ['in der', 'in die', 'ins', 'an die'], answer: 0 },
    { type: 'gap', q: 'Das Buch liegt ___ Tisch. (auf + der Tisch, де?)', answers: ['auf dem'] },
    { type: 'gap', q: 'Ich lege das Buch ___ Tisch. (auf + der Tisch, куди?)', answers: ['auf den'] },
    { type: 'gap', q: 'Das Bild hängt ___ Wand. (an + die Wand, де?)', answers: ['an der'] },
    { type: 'gap', q: 'Wir gehen heute ___ Kino. (in + das Kino)', answers: ['ins'],
      explain: 'in das = ins, бо є рух.' },
    { type: 'choice', q: 'Die Katze sitzt ___ Stuhl.', options: ['unter den', 'unter dem', 'unter der', 'unters'], answer: 1 },
    { type: 'gap', q: 'Heute ___ es und es ist sehr kalt. (сніжить)', answers: ['schneit'] },
    { type: 'gap', q: 'Wie ist das Wetter? — ___ ist sonnig und warm.', answers: ['Es'] },
    { type: 'gap', q: 'Ich trinke gern Tee, aber ___ trinke ich Kaffee.', answers: ['lieber'] },
    { type: 'choice', q: 'Wien ist größer ___ Salzburg.', options: ['wie', 'als', 'so', 'wie als'], answer: 1 },
    { type: 'choice', q: 'Heute ist es so kalt ___ gestern.', options: ['als', 'wie', 'so', 'mehr'], answer: 1 },
    { type: 'order', q: 'Складіть речення.', words: ['Der', 'Stuhl', 'steht', 'zwischen', 'dem', 'Tisch', 'und', 'dem', 'Bett'],
      answer: 'Der Stuhl steht zwischen dem Tisch und dem Bett' },
    { type: 'order', q: 'Складіть речення.', words: ['Im', 'Winter', 'ziehe', 'ich', 'einen', 'warmen', 'Mantel', 'an'],
      answer: 'Im Winter ziehe ich einen warmen Mantel an' },
    { type: 'match', q: 'Доберіть пару «стан — рух».',
      pairs: [['liegen', 'legen'], ['stehen', 'stellen'], ['sitzen', 'sich setzen'], ['Wo? + Dativ', 'Wohin? + Akkusativ']],
      speak: false },
  ],

  listening: [
    {
      exam: 'Goethe A1 · Hören Teil 3',
      title: 'Der Wetterbericht',
      instruction: 'Прогноз погоди на радіо. Занотуйте температури й опади.',
      lines: [
        { de: 'Und nun das Wetter für morgen, Mittwoch, den zwölften Oktober.', uk: 'А тепер погода на завтра, середу, дванадцяте жовтня.' },
        { de: 'Am Vormittag ist es bewölkt und kühl, nur zehn Grad.', uk: 'До обіду хмарно й прохолодно, лише десять градусів.' },
        { de: 'Am Nachmittag scheint die Sonne, und es wird wärmer: siebzehn Grad.', uk: 'По обіді світить сонце і теплішає: сімнадцять градусів.' },
        { de: 'Am Abend regnet es im Süden. Im Norden bleibt es trocken.', uk: 'Увечері на півдні дощ. На півночі залишиться сухо.' },
        { de: 'In der Nacht wird es sehr kalt: nur zwei Grad.', uk: 'Уночі буде дуже холодно: лише два градуси.' },
        { de: 'Bitte ziehen Sie eine warme Jacke an!', uk: 'Будь ласка, вдягайте теплу куртку!' },
      ],
      tasks: [
        { type: 'gap', q: 'Am Vormittag sind es ___ Grad.', answers: ['10|zehn'] },
        { type: 'gap', q: 'Am Nachmittag sind es ___ Grad.', answers: ['17|siebzehn'] },
        { type: 'choice', q: 'Wo regnet es am Abend?', options: ['Im Norden', 'Im Süden', 'Überall', 'Nirgendwo'], answer: 1 },
        { type: 'truefalse', q: 'In der Nacht wird es wärmer.', answer: false },
      ],
    },
    {
      exam: 'ÖSD A1 · Hören',
      title: 'Im Kleidungsgeschäft',
      instruction: 'Покупець приміряє куртку.',
      lines: [
        { speaker: 'Verkäuferin', de: 'Guten Tag! Kann ich Ihnen helfen?', uk: 'Добрий день! Чим можу допомогти?' },
        { speaker: 'Kunde', de: 'Ja, ich suche eine Winterjacke. Größe zweiundfünfzig.', uk: 'Так, я шукаю зимову куртку. Розмір п’ятдесят два.' },
        { speaker: 'Verkäuferin', de: 'Diese hier ist sehr warm. Möchten Sie sie anprobieren?', uk: 'Ось ця дуже тепла. Хочете приміряти?' },
        { speaker: 'Kunde', de: 'Gern. … Hmm, sie ist ein bisschen zu klein.', uk: 'Залюбки. … Хм, вона трохи замала.' },
        { speaker: 'Verkäuferin', de: 'Kein Problem, ich bringe Ihnen Größe vierundfünfzig.', uk: 'Без проблем, принесу Вам розмір п’ятдесят чотири.' },
        { speaker: 'Kunde', de: 'Danke, die passt gut. Was kostet sie?', uk: 'Дякую, ця в пору. Скільки коштує?' },
        { speaker: 'Verkäuferin', de: 'Neunundachtzig Euro. Heute mit zwanzig Prozent Rabatt.', uk: 'Вісімдесят дев’ять євро. Сьогодні зі знижкою двадцять відсотків.' },
        { speaker: 'Kunde', de: 'Super, ich nehme sie.', uk: 'Чудово, беру.' },
      ],
      tasks: [
        { type: 'choice', q: 'Was sucht der Kunde?', options: ['Eine Hose', 'Eine Winterjacke', 'Einen Pullover', 'Schuhe'], answer: 1 },
        { type: 'gap', q: 'Am Ende nimmt er Größe ___.', answers: ['54|vierundfünfzig|vierundfuenfzig'] },
        { type: 'gap', q: 'Die Jacke kostet ___ Euro.', answers: ['89|neunundachtzig'] },
        { type: 'choice', q: 'Wie hoch ist der Rabatt?', options: ['10 %', '15 %', '20 %', '25 %'], answer: 2 },
      ],
    },
  ],

  writing: [
    {
      exam: 'Goethe A1 · Schreiben Teil 2',
      title: 'Postkarte aus dem Urlaub',
      situation: 'Ви у відпустці. Напишіть листівку подрузі Marie про місце, погоду й свої заняття. <strong>40–50 слів</strong>.',
      points: ['Wo sind Sie?', 'Wie ist das Wetter?', 'Was machen Sie dort?', 'Wann kommen Sie zurück?'],
      minWords: 40,
      phrases: [
        { de: 'Viele Grüße aus …!', uk: 'Вітання з …!' },
        { de: 'Hier ist es wunderschön.', uk: 'Тут чудово.' },
        { de: 'Das Wetter ist super: Die Sonne scheint und es sind 28 Grad.', uk: 'Погода супер: світить сонце, 28 градусів.' },
        { de: 'Am Vormittag gehe ich ins Meer, am Nachmittag liege ich am Strand.', uk: 'До обіду йду в море, по обіді лежу на пляжі.' },
        { de: 'Gestern bin ich in die Berge gefahren.', uk: 'Учора я їздив/ла в гори.' },
        { de: 'Am Sonntag komme ich zurück.', uk: 'У неділю повертаюся.' },
      ],
      checklist: [
        'Для «куди» ви вжили Akkusativ (ins Meer, in die Berge), для «де» — Dativ (am Strand, in den Bergen)?',
        'Погода описана через безособове es?',
        'Є принаймні одне речення в Perfekt про вчорашній день?',
        'Дієслово стоїть на другому місці навіть після обставини?',
        'Розкрито всі чотири пункти?',
      ],
      model:
`Liebe Marie,

viele Grüße aus Italien! Hier ist es wunderschön.
Das Wetter ist super: Die Sonne scheint jeden Tag und es sind achtundzwanzig Grad.
Am Vormittag gehe ich ins Meer, am Nachmittag liege ich am Strand und lese.
Gestern bin ich mit dem Bus in die Berge gefahren und habe viele Fotos gemacht.
Am Sonntag komme ich zurück. Dann erzähle ich dir alles!

Liebe Grüße
Olha`,
      modelUk: 'Переклад: Люба Марі, вітання з Італії! Тут неймовірно гарно. Погода супер: сонце світить щодня, двадцять вісім градусів. До обіду я йду в море, по обіді лежу на пляжі й читаю. Учора автобусом їздила в гори і зробила багато фотографій. У неділю повертаюся. Тоді все тобі розкажу! Сердечні вітання, Ольга.',
    },
  ],

  test: [
    { type: 'choice', q: 'Ich hänge das Bild ___ Wand.', options: ['an der', 'an die', 'am', 'auf der'], answer: 1 },
    { type: 'choice', q: 'Das Bild hängt ___ Wand.', options: ['an der', 'an die', 'ans', 'auf die'], answer: 0 },
    { type: 'gap', q: 'Die Kinder spielen ___ Garten. (in + der Garten, де?)', answers: ['im'] },
    { type: 'gap', q: 'Die Kinder gehen ___ Garten. (in + der Garten, куди?)', answers: ['in den'] },
    { type: 'gap', q: 'Der Hund liegt ___ Bett. (unter + das Bett, де?)', answers: ['unter dem'] },
    { type: 'gap', q: 'Heute ___ es stark. (дощить)', answers: ['regnet'] },
    { type: 'gap', q: 'Im Winter ist es kalt, ___ Sommer ist es heiß.', answers: ['im'] },
    { type: 'gap', q: 'Ich esse gern Fisch, aber ich esse ___ Fleisch.', answers: ['lieber'] },
    { type: 'choice', q: 'Mein Bruder ist ___ als ich.', options: ['alt', 'älter', 'am ältesten', 'alter'], answer: 1 },
    { type: 'choice', q: 'Sie spricht ___ Deutsch als ich.', options: ['gut', 'besser', 'am besten', 'guter'], answer: 1 },
    { type: 'order', q: 'Складіть речення.', words: ['Ich', 'stelle', 'die', 'Lampe', 'neben', 'das', 'Sofa'],
      answer: 'Ich stelle die Lampe neben das Sofa' },
    { type: 'order', q: 'Складіть речення.', words: ['Am', 'Wochenende', 'fahren', 'wir', 'in', 'die', 'Berge'],
      answer: 'Am Wochenende fahren wir in die Berge' },
    { type: 'match', q: 'Доберіть переклад.',
      pairs: [['bewölkt', 'хмарно'], ['der Mantel', 'пальто'], ['anprobieren', 'приміряти'], ['die Größe', 'розмір'], ['zwischen', 'між']] },
    { type: 'multi', q: 'Позначте прийменники подвійної дії (Wechselpräpositionen).',
      options: ['in', 'mit', 'auf', 'aus', 'zwischen', 'seit'], answers: [0, 2, 4] },
    { type: 'truefalse', q: 'Речення «Ich gehe in der Schule» правильне, якщо йдеться про рух до школи.', answer: false,
      explain: 'Рух → Akkusativ: Ich gehe in die Schule.' },
  ],
},

];
