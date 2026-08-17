/* A2 — модулі 3–5 */

export const modules = [

/* ══════════════════════════════════ МОДУЛЬ 3 ══════════════════════════════ */
{
  id: 'm3',
  title: 'Präteritum: über die Vergangenheit erzählen',
  titleUk: 'Простий минулий час: розповідь про минуле',
  can: [
    'утворювати Präteritum правильних і сильних дієслів',
    'відрізняти, коли доречніший Präteritum, а коли Perfekt',
    'розповідати історію з послідовністю подій',
    'читати й розуміти оповідні тексти та новини',
  ],

  grammar: [
    {
      title: '1. Навіщо потрібен другий минулий час',
      html: `
<p>У німецькій два минулих часи, і вони не взаємозамінні за стилем:</p>
<table>
<thead><tr><th>Час</th><th>Де вживають</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td><strong>Perfekt</strong></td><td>розмова, лист другові, усна розповідь</td>
<td><em>Ich habe einen Film gesehen.</em><span class="uk">Я подивився фільм.</span></td></tr>
<tr><td><strong>Präteritum</strong></td><td>книги, новини, звіти, письмова оповідь</td>
<td><em>Ich sah einen Film.</em><span class="uk">Я подивився фільм. (те саме значення)</span></td></tr>
</tbody></table>
<div class="callout"><strong>Головне для A2.</strong> Обидва перекладаються однаково. Різниця не в часі,
а в <u>стилі</u>: скажете <em>ich sah</em> у розмові — звучатиме як із книжки. Але шість дієслів
у Präteritum вживають <strong>і в розмові</strong>: <em>sein, haben</em> і модальні
(<em>können, müssen, wollen, dürfen, sollen</em>). Їх треба знати обов’язково.</div>`,
    },
    {
      title: '2. Правильні дієслова: -te-',
      html: `
<p>До основи додається <strong>-te-</strong> і особові закінчення. Форми <em>ich</em> та
<em>er/sie/es</em> <strong>однакові</strong> — як і в модальних дієсловах.</p>
<table>
<thead><tr><th></th><th>machen — робити</th><th>arbeiten — працювати</th><th>Переклад</th></tr></thead>
<tbody>
<tr><td>ich</td><td>mach<strong>te</strong></td><td>arbeit<strong>ete</strong></td><td>я робив / працював</td></tr>
<tr><td>du</td><td>machtest</td><td>arbeitetest</td><td>ти робив</td></tr>
<tr><td>er/sie/es</td><td>mach<strong>te</strong></td><td>arbeitete</td><td>він робив</td></tr>
<tr><td>wir</td><td>machten</td><td>arbeiteten</td><td>ми робили</td></tr>
<tr><td>ihr</td><td>machtet</td><td>arbeitetet</td><td>ви робили</td></tr>
<tr><td>sie/Sie</td><td>machten</td><td>arbeiteten</td><td>вони робили</td></tr>
</tbody></table>
<p>Якщо основа закінчується на <em>-t, -d</em> або на приголосну + <em>-n</em>, вставляємо
<strong>-e-</strong> для вимови: <em>arbeit<u>e</u>te, red<u>e</u>te, öffn<u>e</u>te</em>.</p>`,
    },
    {
      title: '3. Сильні дієслова: змінюється корінь',
      html: `
<p>Сильні дієслова не мають <em>-te-</em>: у них змінюється коренева голосна, а форми
<em>ich</em> та <em>er</em> — <strong>без закінчення взагалі</strong>.</p>
<table>
<thead><tr><th>Інфінітив</th><th>Präteritum (ich / er)</th><th>Perfekt</th><th>Переклад</th></tr></thead>
<tbody>
<tr><td>sein</td><td><strong>war</strong></td><td>ist gewesen</td><td>бути</td></tr>
<tr><td>haben</td><td><strong>hatte</strong></td><td>hat gehabt</td><td>мати</td></tr>
<tr><td>werden</td><td><strong>wurde</strong></td><td>ist geworden</td><td>ставати</td></tr>
<tr><td>gehen</td><td><strong>ging</strong></td><td>ist gegangen</td><td>іти</td></tr>
<tr><td>kommen</td><td><strong>kam</strong></td><td>ist gekommen</td><td>приходити</td></tr>
<tr><td>fahren</td><td><strong>fuhr</strong></td><td>ist gefahren</td><td>їхати</td></tr>
<tr><td>sehen</td><td><strong>sah</strong></td><td>hat gesehen</td><td>бачити</td></tr>
<tr><td>essen</td><td><strong>aß</strong></td><td>hat gegessen</td><td>їсти</td></tr>
<tr><td>trinken</td><td><strong>trank</strong></td><td>hat getrunken</td><td>пити</td></tr>
<tr><td>sprechen</td><td><strong>sprach</strong></td><td>hat gesprochen</td><td>говорити</td></tr>
<tr><td>lesen</td><td><strong>las</strong></td><td>hat gelesen</td><td>читати</td></tr>
<tr><td>schreiben</td><td><strong>schrieb</strong></td><td>hat geschrieben</td><td>писати</td></tr>
<tr><td>nehmen</td><td><strong>nahm</strong></td><td>hat genommen</td><td>брати</td></tr>
<tr><td>finden</td><td><strong>fand</strong></td><td>hat gefunden</td><td>знаходити</td></tr>
<tr><td>bleiben</td><td><strong>blieb</strong></td><td>ist geblieben</td><td>залишатися</td></tr>
<tr><td>geben</td><td><strong>gab</strong></td><td>hat gegeben</td><td>давати</td></tr>
</tbody></table>
<p><strong>Закінчення сильних дієслів:</strong> ich —, du <em>-st</em>, er —, wir <em>-en</em>,
ihr <em>-t</em>, sie <em>-en</em>. Наприклад: <em>ich ging, du gingst, er ging, wir gingen,
ihr gingt, sie gingen</em>.</p>`,
    },
    {
      title: '4. Модальні дієслова в минулому',
      html: `
<p>Модальні дієслова в минулому <strong>завжди</strong> ставлять у Präteritum — форми з Perfekt
існують, але в мові майже не вживаються. Умлаут при цьому <u>зникає</u>.</p>
<table>
<thead><tr><th>Present</th><th>Präteritum</th><th>Приклад і переклад</th></tr></thead>
<tbody>
<tr><td>kann</td><td><strong>konnte</strong></td><td><em>Ich konnte nicht kommen.</em><span class="uk">Я не міг прийти.</span></td></tr>
<tr><td>muss</td><td><strong>musste</strong></td><td><em>Wir mussten warten.</em><span class="uk">Ми мусили чекати.</span></td></tr>
<tr><td>will</td><td><strong>wollte</strong></td><td><em>Er wollte helfen.</em><span class="uk">Він хотів допомогти.</span></td></tr>
<tr><td>darf</td><td><strong>durfte</strong></td><td><em>Sie durfte mitfahren.</em><span class="uk">Їй дозволили поїхати.</span></td></tr>
<tr><td>soll</td><td><strong>sollte</strong></td><td><em>Ich sollte um acht da sein.</em><span class="uk">Я мав бути там о восьмій.</span></td></tr>
<tr><td>mag</td><td><strong>mochte</strong></td><td><em>Als Kind mochte ich Milch nicht.</em><span class="uk">Дитиною я не любив молока.</span></td></tr>
</tbody></table>
<div class="callout"><strong>Не переплутайте.</strong> <em>konnte</em> — «міг» (минуле),
<em>könnte</em> — «міг би» (умовно). Одна крапка над буквою змінює час на спосіб.</div>`,
    },
    {
      title: '5. Слова, що тримають розповідь',
      html: `
<p>Без цих слів оповідь розсипається на окремі речення. Вони ж дають бали за зв’язність тексту.</p>
<table>
<thead><tr><th>Слово</th><th>Переклад</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td><em>zuerst</em></td><td>спочатку</td><td><em>Zuerst fuhren wir nach Wien.</em></td></tr>
<tr><td><em>dann</em> / <em>danach</em></td><td>потім / після цього</td><td><em>Dann gingen wir ins Museum.</em></td></tr>
<tr><td><em>plötzlich</em></td><td>раптом</td><td><em>Plötzlich begann es zu regnen.</em></td></tr>
<tr><td><em>später</em></td><td>пізніше</td><td><em>Später trafen wir Freunde.</em></td></tr>
<tr><td><em>schließlich</em></td><td>нарешті, врешті</td><td><em>Schließlich fanden wir das Hotel.</em></td></tr>
<tr><td><em>am Ende</em></td><td>у кінці</td><td><em>Am Ende waren alle müde.</em></td></tr>
<tr><td><em>damals</em></td><td>тоді, у ті часи</td><td><em>Damals war ich zehn.</em></td></tr>
<tr><td><em>als</em></td><td>коли (одноразово в минулому)</td><td><em>Als ich klein war, …</em></td></tr>
</tbody></table>`,
    },
    {
      title: '6. Слова з прикладів цієї теми',
      html: `
<table>
<thead><tr><th>Слово</th><th>Переклад</th><th>Як ужито</th></tr></thead>
<tbody>
<tr><td><em>reden</em></td><td>говорити, балакати</td><td><em>redete</em> — правильне дієслово з -e-</td></tr>
<tr><td><em>öffnen</em></td><td>відчиняти</td><td><em>öffnete</em></td></tr>
<tr><td><em>beginnen</em></td><td>починатися</td><td><em>Plötzlich begann es zu regnen.</em><span class="uk">Раптом почався дощ.</span></td></tr>
<tr><td><em>treffen</em></td><td>зустрічати</td><td><em>Später trafen wir Freunde.</em></td></tr>
<tr><td><em>mitfahren</em></td><td>їхати разом</td><td><em>Sie durfte mitfahren.</em></td></tr>
<tr><td><em>warten auf</em></td><td>чекати на</td><td><em>Wir mussten warten.</em></td></tr>
<tr><td><em>müde</em></td><td>втомлений</td><td><em>Am Ende waren alle müde.</em></td></tr>
<tr><td><em>die Erinnerung, -en</em></td><td>спогад</td><td>тема розповіді про дитинство</td></tr>
<tr><td><em>die Kindheit</em></td><td>дитинство</td><td><em>In meiner Kindheit …</em></td></tr>
</tbody></table>`,
    },
  ],
  exercises: [
    { type: 'gap', q: 'Gestern ___ ich viel Arbeit. (haben, Präteritum)', answers: ['hatte'] },
    { type: 'gap', q: 'Als Kind ___ ich oft krank. (sein)', answers: ['war'] },
    { type: 'gap', q: 'Wir ___ um sieben Uhr nach Hause. (gehen)', answers: ['gingen'] },
    { type: 'gap', q: 'Er ___ den ganzen Tag im Büro. (arbeiten)', answers: ['arbeitete'],
      explain: 'Основа на -t, тому вставляємо -e-: arbeitete.' },
    { type: 'gap', q: 'Sie ___ das Buch in zwei Tagen. (lesen)', answers: ['las'] },
    { type: 'gap', q: 'Ich ___ nicht kommen, weil ich krank war. (können)', answers: ['konnte'] },
    { type: 'gap', q: 'Wir ___ eine Stunde warten. (müssen)', answers: ['mussten'] },
    { type: 'choice', q: 'Яка форма правильна для «він писав»?',
      options: ['er schreibte', 'er schrieb', 'er schriebte', 'er schreib'], answer: 1,
      explain: 'schreiben — сильне дієслово: schrieb, без -te-.' },
    { type: 'choice', q: 'У сильних дієсловах форма er має закінчення…',
      options: ['-te', '-t', 'жодного', '-e'], answer: 2,
      explain: 'ich ging / er ging — обидві без закінчення.' },
    { type: 'choice', q: 'Де доречніший Präteritum?',
      options: ['У повідомленні другові', 'У новинній статті', 'У розмові в кафе', 'У телефонній розмові'],
      answer: 1 },
    { type: 'choice', q: '«konnte» чи «könnte»? — Вчора я ___ прийти, але не встиг.',
      options: ['könnte', 'konnte', 'kann', 'könntest'], answer: 1,
      explain: 'Ідеться про минуле, тому konnte без умлаута.' },
    { type: 'order', q: 'Складіть речення.',
      words: ['Zuerst', 'fuhren', 'wir', 'nach', 'Wien'],
      answer: 'Zuerst fuhren wir nach Wien' },
    { type: 'order', q: 'Складіть речення.',
      words: ['Plötzlich', 'begann', 'es', 'zu', 'regnen'],
      answer: 'Plötzlich begann es zu regnen' },
    { type: 'match', q: 'Доберіть Präteritum.',
      pairs: [['gehen', 'ging'], ['kommen', 'kam'], ['sehen', 'sah'], ['nehmen', 'nahm'], ['bleiben', 'blieb'], ['finden', 'fand']] },
    { type: 'multi', q: 'Які дієслова вживають у Präteritum навіть у розмові?',
      options: ['sein', 'machen', 'haben', 'können', 'gehen', 'müssen'],
      answers: [0, 2, 3, 5],
      explain: 'sein, haben і модальні. Решту в розмові ставлять у Perfekt.' },
  ],

  listening: [
    {
      exam: 'Goethe A2 · Hören Teil 2',
      title: 'Eine Kindheitserinnerung',
      instruction: 'Чоловік згадує дитинство. Зверніть увагу на форми минулого часу.',
      lines: [
        { speaker: 'Martin', de: 'Als ich klein war, wohnten wir in einem Dorf bei Salzburg.', uk: 'Коли я був малий, ми жили в селі біля Зальцбурга.' },
        { speaker: 'Martin', de: 'Wir hatten kein Auto, deshalb fuhr ich jeden Tag mit dem Rad zur Schule.', uk: 'Ми не мали авто, тому я щодня їздив до школи велосипедом.' },
        { speaker: 'Lena', de: 'Und im Winter? Das war doch sicher kalt.', uk: 'А взимку? Це ж, певно, було холодно.' },
        { speaker: 'Martin', de: 'Im Winter brachte mich mein Vater mit dem Bus. Aber das mochte ich nicht — der Bus war immer voll.', uk: 'Узимку батько віз мене автобусом. Але мені це не подобалося — автобус завжди був повний.' },
        { speaker: 'Lena', de: 'Was machtest du nach der Schule?', uk: 'Що ти робив після школи?' },
        { speaker: 'Martin', de: 'Zuerst Hausaufgaben, dann spielten wir bis zum Abend Fußball. Damals gab es keine Handys.', uk: 'Спочатку домашнє завдання, потім ми до вечора грали у футбол. Тоді не було мобільних.' },
      ],
      tasks: [
        { type: 'choice', q: 'Wo wohnte Martin als Kind?',
          options: ['In Salzburg', 'In einem Dorf bei Salzburg', 'In Wien', 'In München'], answer: 1 },
        { type: 'choice', q: 'Wie kam er normalerweise zur Schule?',
          options: ['Mit dem Auto', 'Mit dem Rad', 'Mit dem Bus', 'Zu Fuß'], answer: 1 },
        { type: 'truefalse', q: 'Martin mochte die Busfahrten im Winter.', answer: false,
          explain: '«Aber das mochte ich nicht».' },
        { type: 'gap', q: 'Nach der Schule spielten sie ___.', answers: ['Fußball|Fussball'] },
      ],
    },
  ],

  writing: [
    {
      exam: 'Goethe A2 · Schreiben Teil 2',
      title: 'Erzählen Sie von einem Tag, der schiefging',
      situation: 'Напишіть подрузі про день, коли все йшло не так. Використайте минулий час і слова послідовності. <strong>50–60 слів</strong>.',
      points: ['Was passierte zuerst?', 'Was ging dann schief?', 'Wie endete der Tag?', 'Wie fühlten Sie sich?'],
      minWords: 50,
      phrases: [
        { de: 'Gestern hatte ich einen schlechten Tag.', uk: 'Учора в мене був поганий день.' },
        { de: 'Zuerst verpasste ich den Bus.', uk: 'Спочатку я проґавив автобус.' },
        { de: 'Dann begann es zu regnen.', uk: 'Потім почався дощ.' },
        { de: 'Plötzlich merkte ich, dass ich den Schlüssel vergessen hatte.', uk: 'Раптом я зрозумів, що забув ключ.' },
        { de: 'Am Ende war ich einfach müde.', uk: 'У кінці я був просто втомлений.' },
      ],
      checklist: [
        'Ви вжили Präteritum від sein, haben і модальних (war, hatte, konnte, musste)?',
        'Є щонайменше три слова послідовності (zuerst, dann, plötzlich, am Ende)?',
        'Форми ich і er однакові — ви не додали -t до модальних?',
        'Є звертання і прощання?',
        'Обсяг 50–60 слів?',
      ],
      model:
`Liebe Katja,

gestern hatte ich wirklich einen schlechten Tag.
Zuerst klingelte mein Wecker nicht, deshalb musste ich ohne Frühstück los.
Dann verpasste ich den Bus und kam zwanzig Minuten zu spät zur Arbeit.
Am Nachmittag wollte ich früher nach Hause, aber mein Chef gab mir noch eine Aufgabe.
Plötzlich fiel auch noch der Computer aus. Am Ende blieb ich bis sieben und war völlig müde.
Heute ist zum Glück alles besser!

Liebe Grüße
Oksana`,
      modelUk: 'Переклад: Люба Катю, учора в мене був справді поганий день. Спочатку не задзвонив будильник, тож я мусила вийти без сніданку. Потім я проґавила автобус і на двадцять хвилин спізнилася на роботу. По обіді хотіла піти раніше, але шеф дав ще одне завдання. Раптом іще й комп’ютер вийшов з ладу. У кінці я лишилася до сьомої і була зовсім втомлена. Сьогодні, на щастя, все краще!',
    },
  ],

  test: [
    { type: 'gap', q: 'Letztes Jahr ___ wir in Italien. (sein)', answers: ['waren'] },
    { type: 'gap', q: 'Er ___ als Kind ein Fahrrad. (haben)', answers: ['hatte'] },
    { type: 'gap', q: 'Ich ___ den Zug nicht mehr. (finden)', answers: ['fand'] },
    { type: 'gap', q: 'Sie ___ drei Stunden am Computer. (arbeiten)', answers: ['arbeitete'] },
    { type: 'gap', q: 'Wir ___ leider nicht kommen. (können)', answers: ['konnten'] },
    { type: 'gap', q: 'Er ___ mir einen Brief. (schreiben)', answers: ['schrieb'] },
    { type: 'choice', q: 'Яка форма «ми їхали»?',
      options: ['wir fuhrten', 'wir fuhren', 'wir fahrten', 'wir fuhr'], answer: 1 },
    { type: 'choice', q: 'У якому тексті природніше звучить Präteritum?',
      options: ['SMS другові', 'Роман', 'Розмова по телефону', 'Голосове повідомлення'], answer: 1 },
    { type: 'choice', q: '«Als Kind ___ ich keinen Kaffee.» (mögen)',
      options: ['möchte', 'mochte', 'mag', 'mochtete'], answer: 1 },
    { type: 'order', q: 'Складіть речення.',
      words: ['Danach', 'gingen', 'wir', 'ins', 'Kino'],
      answer: 'Danach gingen wir ins Kino' },
    { type: 'order', q: 'Складіть речення.',
      words: ['Damals', 'gab', 'es', 'keine', 'Handys'],
      answer: 'Damals gab es keine Handys' },
    { type: 'match', q: 'Доберіть переклад.',
      pairs: [['plötzlich', 'раптом'], ['schließlich', 'нарешті'], ['damals', 'тоді'], ['die Kindheit', 'дитинство'], ['passieren', 'ставатися']] },
    { type: 'multi', q: 'Позначте правильні форми Präteritum.',
      options: ['er ging', 'er gingte', 'wir hatten', 'ich konnte', 'sie sahte', 'ihr wart'],
      answers: [0, 2, 3, 5] },
    { type: 'truefalse', q: 'Perfekt і Präteritum перекладаються українською однаково.', answer: true,
      explain: 'Різниця лише стилістична: розмова проти письмової оповіді.' },
  ],
},

/* ══════════════════════════════════ МОДУЛЬ 4 ══════════════════════════════ */
{
  id: 'm4',
  title: 'Reflexive Verben und Verben mit Präpositionen',
  titleUk: 'Зворотні дієслова та дієслова з прийменниками',
  can: [
    'вживати sich у правильному відмінку',
    'описувати свій розпорядок і почуття',
    'запам’ятати дієслова з фіксованими прийменниками',
    'ставити питання Worauf? Woran? і відповідати darauf, daran',
  ],

  grammar: [
    {
      title: '1. Зворотні дієслова: дія повертається на того, хто її робить',
      html: `
<p>Українською ми кажемо «мити<u>ся</u>», «готувати<u>ся</u>» — те саме «-ся» німецька передає
окремим словом <strong>sich</strong>, яке змінюється за особами.</p>
<table>
<thead><tr><th>Особа</th><th>Форма</th><th>Приклад і переклад</th></tr></thead>
<tbody>
<tr><td>ich</td><td><strong>mich</strong></td><td><em>Ich wasche mich.</em><span class="uk">Я мию́ся.</span></td></tr>
<tr><td>du</td><td><strong>dich</strong></td><td><em>Du wäschst dich.</em><span class="uk">Ти мий́ся / ти мий́шся.</span></td></tr>
<tr><td>er/sie/es</td><td><strong>sich</strong></td><td><em>Er wäscht sich.</em><span class="uk">Він мий́ться.</span></td></tr>
<tr><td>wir</td><td><strong>uns</strong></td><td><em>Wir waschen uns.</em><span class="uk">Ми мий́мося.</span></td></tr>
<tr><td>ihr</td><td><strong>euch</strong></td><td><em>Ihr wascht euch.</em><span class="uk">Ви мий́теся.</span></td></tr>
<tr><td>sie/Sie</td><td><strong>sich</strong></td><td><em>Sie waschen sich.</em><span class="uk">Вони мий́ться.</span></td></tr>
</tbody></table>
<div class="callout"><strong>Порядок слів.</strong> <em>sich</em> стоїть одразу після зміненого
дієслова: <em>Ich <u>ziehe mich</u> schnell an.</em> А якщо речення починається не з підмета —
після підмета: <em>Morgen <u>ziehe ich mich</u> wärmer an.</em></div>`,
    },
    {
      title: '2. Найважливіші зворотні дієслова',
      html: `
<table>
<thead><tr><th>Дієслово</th><th>Переклад</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td><em>sich waschen</em></td><td>митися</td><td><em>Ich wasche mich morgens.</em></td></tr>
<tr><td><em>sich duschen</em></td><td>приймати душ</td><td><em>Er duscht sich abends.</em></td></tr>
<tr><td><em>sich anziehen</em></td><td>одягатися</td><td><em>Zieh dich warm an!</em></td></tr>
<tr><td><em>sich ausruhen</em></td><td>відпочивати</td><td><em>Ruh dich aus!</em></td></tr>
<tr><td><em>sich beeilen</em></td><td>поспішати</td><td><em>Beeil dich, wir sind spät!</em></td></tr>
<tr><td><em>sich setzen</em></td><td>сідати</td><td><em>Setzen Sie sich, bitte.</em></td></tr>
<tr><td><em>sich fühlen</em></td><td>почуватися</td><td><em>Ich fühle mich nicht gut.</em></td></tr>
<tr><td><em>sich treffen</em></td><td>зустрічатися</td><td><em>Wir treffen uns um acht.</em></td></tr>
<tr><td><em>sich verspäten</em></td><td>запізнюватися</td><td><em>Er hat sich verspätet.</em></td></tr>
<tr><td><em>sich vorstellen</em></td><td>представлятися</td><td><em>Darf ich mich vorstellen?</em></td></tr>
</tbody></table>
<p><strong>Іноді sich стоїть у Dativ</strong> — коли в реченні вже є прямий додаток:
<em>Ich wasche <u>mir</u> die Hände.</em><span class="uk">Я мию собі руки.</span>
Порівняйте: <em>Ich wasche <u>mich</u></em> (мию себе) — <em>Ich wasche <u>mir</u> die Haare</em>
(мию собі волосся).</p>`,
    },
    {
      title: '3. Дієслова з фіксованим прийменником',
      html: `
<p>Багато дієслів «зрослися» з певним прийменником, і той прийменник керує відмінком.
Український відповідник часто інший, тому такі пари вчать напам’ять цілком.</p>
<table>
<thead><tr><th>Дієслово + прийменник</th><th>Переклад</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td><em>warten <strong>auf</strong> + Akk.</em></td><td>чекати на</td><td><em>Ich warte auf den Bus.</em></td></tr>
<tr><td><em>sich freuen <strong>auf</strong> + Akk.</em></td><td>радісно чекати на</td><td><em>Ich freue mich auf den Urlaub.</em></td></tr>
<tr><td><em>sich freuen <strong>über</strong> + Akk.</em></td><td>радіти чомусь, що вже сталося</td><td><em>Sie freut sich über das Geschenk.</em></td></tr>
<tr><td><em>sich interessieren <strong>für</strong> + Akk.</em></td><td>цікавитися</td><td><em>Er interessiert sich für Musik.</em></td></tr>
<tr><td><em>sich ärgern <strong>über</strong> + Akk.</em></td><td>сердитися на</td><td><em>Ich ärgere mich über den Lärm.</em></td></tr>
<tr><td><em>denken <strong>an</strong> + Akk.</em></td><td>думати про</td><td><em>Ich denke an dich.</em></td></tr>
<tr><td><em>sich erinnern <strong>an</strong> + Akk.</em></td><td>пам’ятати про</td><td><em>Erinnerst du dich an ihn?</em></td></tr>
<tr><td><em>Angst haben <strong>vor</strong> + Dat.</em></td><td>боятися</td><td><em>Sie hat Angst vor Hunden.</em></td></tr>
<tr><td><em>sprechen <strong>mit</strong> + Dat.</em></td><td>говорити з</td><td><em>Ich spreche mit dem Chef.</em></td></tr>
<tr><td><em>sprechen <strong>über</strong> + Akk.</em></td><td>говорити про</td><td><em>Wir sprechen über die Arbeit.</em></td></tr>
<tr><td><em>helfen <strong>bei</strong> + Dat.</em></td><td>допомагати в</td><td><em>Er hilft mir bei den Hausaufgaben.</em></td></tr>
<tr><td><em>sich bewerben <strong>um</strong> + Akk.</em></td><td>подаватися на</td><td><em>Ich bewerbe mich um die Stelle.</em></td></tr>
</tbody></table>
<div class="callout callout--tip"><strong>freuen auf чи über?</strong> <em>auf</em> — про майбутнє
(«тішуся, що буде»), <em>über</em> — про те, що вже сталося. <em>Ich freue mich auf den Sommer</em>
(літо ще буде) — <em>Ich freue mich über deinen Brief</em> (лист уже прийшов).</div>`,
    },
    {
      title: '4. Питання й відповіді: Worauf? — Darauf',
      html: `
<p>Коли йдеться про <u>річ</u>, прийменник зростається з <em>wo-</em> у питанні й <em>da-</em> у відповіді.
Якщо про <u>людину</u> — прийменник лишається окремо з <em>wen/wem</em>.</p>
<table>
<thead><tr><th></th><th>Про річ</th><th>Про людину</th></tr></thead>
<tbody>
<tr><td>питання</td><td><em><strong>Worauf</strong> wartest du?</em><span class="uk">На що ти чекаєш?</span></td>
<td><em><strong>Auf wen</strong> wartest du?</em><span class="uk">На кого ти чекаєш?</span></td></tr>
<tr><td>відповідь</td><td><em>Ich warte <strong>darauf</strong>.</em><span class="uk">Я чекаю на це.</span></td>
<td><em>Ich warte <strong>auf ihn</strong>.</em><span class="uk">Я чекаю на нього.</span></td></tr>
</tbody></table>
<p>Якщо прийменник починається з голосної, вставляється <strong>-r-</strong>:
<em>wo<u>r</u>auf, wo<u>r</u>an, wo<u>r</u>über, da<u>r</u>auf, da<u>r</u>an, da<u>r</u>über</em>.
Порівняйте з <em>womit, damit, wovon, davon</em> — там вставки немає.</p>`,
    },
    {
      title: '5. Слова з прикладів цієї теми',
      html: `
<table>
<thead><tr><th>Слово</th><th>Переклад</th><th>Як ужито</th></tr></thead>
<tbody>
<tr><td><em>der Lärm</em></td><td>шум</td><td><em>sich über den Lärm ärgern</em></td></tr>
<tr><td><em>das Geschenk, -e</em></td><td>подарунок</td><td><em>sich über das Geschenk freuen</em></td></tr>
<tr><td><em>die Stelle, -n</em></td><td>посада</td><td><em>sich um die Stelle bewerben</em></td></tr>
<tr><td><em>die Hausaufgabe, -n</em></td><td>домашнє завдання</td><td><em>bei den Hausaufgaben helfen</em></td></tr>
<tr><td><em>der Hund, -e</em></td><td>пес</td><td><em>Angst vor Hunden haben</em></td></tr>
<tr><td><em>wärmer</em></td><td>тепліше</td><td><em>sich wärmer anziehen</em></td></tr>
<tr><td><em>die Hände</em> (мн.)</td><td>руки</td><td><em>sich die Hände waschen</em></td></tr>
<tr><td><em>die Haare</em> (мн.)</td><td>волосся</td><td><em>sich die Haare waschen</em></td></tr>
</tbody></table>`,
    },
  ],
  exercises: [
    { type: 'gap', q: 'Ich wasche ___ jeden Morgen.', answers: ['mich'] },
    { type: 'gap', q: 'Beeil ___, wir sind spät!', answers: ['dich'] },
    { type: 'gap', q: 'Wir treffen ___ um acht vor dem Kino.', answers: ['uns'] },
    { type: 'gap', q: 'Setzen Sie ___, bitte.', answers: ['sich'] },
    { type: 'gap', q: 'Ich wasche ___ die Hände. (Dativ)', answers: ['mir'],
      explain: 'Є прямий додаток «die Hände», тому sich стоїть у Dativ: mir.' },
    { type: 'choice', q: 'Ich warte ___ den Bus.', options: ['auf', 'für', 'über', 'an'], answer: 0 },
    { type: 'choice', q: 'Sie interessiert sich ___ Musik.', options: ['auf', 'für', 'über', 'an'], answer: 1 },
    { type: 'choice', q: 'Ich freue mich ___ den Urlaub im Juli.', options: ['über', 'auf', 'für', 'an'], answer: 1,
      explain: 'Відпустка ще буде → auf.' },
    { type: 'choice', q: 'Sie freut sich ___ das Geschenk.', options: ['auf', 'über', 'für', 'vor'], answer: 1,
      explain: 'Подарунок уже отримано → über.' },
    { type: 'choice', q: 'Er hat Angst ___ Hunden.', options: ['von', 'vor', 'über', 'auf'], answer: 1 },
    { type: 'gap', q: '___ wartest du? — Auf den Zug. (питання про річ)', answers: ['Worauf'] },
    { type: 'gap', q: 'Ich denke oft ___ meine Kindheit.', answers: ['an'] },
    { type: 'order', q: 'Складіть речення.',
      words: ['Ich', 'ziehe', 'mich', 'schnell', 'an'],
      answer: 'Ich ziehe mich schnell an' },
    { type: 'order', q: 'Складіть питання.',
      words: ['Erinnerst', 'du', 'dich', 'an', 'ihn', '?'],
      answer: 'Erinnerst du dich an ihn ?|Erinnerst du dich an ihn?' },
    { type: 'match', q: 'Доберіть прийменник.',
      pairs: [['warten …', 'auf + Akk.'], ['Angst haben …', 'vor + Dat.'], ['sich interessieren …', 'für + Akk.'], ['helfen …', 'bei + Dat.'], ['sich ärgern …', 'über + Akk.']],
      speak: false },
  ],

  listening: [
    {
      exam: 'Goethe A2 · Hören Teil 1',
      title: 'Am Telefon: Verspätung',
      instruction: 'Колега телефонує, бо запізнюється. Слухайте зворотні дієслова.',
      lines: [
        { speaker: 'Jan', de: 'Hallo Frau Weber, ich muss mich entschuldigen — ich verspäte mich um zwanzig Minuten.', uk: 'Добрий день, пані Вебер, мушу вибачитися — я запізнюся на двадцять хвилин.' },
        { speaker: 'Frau Weber', de: 'Kein Problem. Was ist passiert?', uk: 'Без проблем. Що сталося?' },
        { speaker: 'Jan', de: 'Die U-Bahn fährt nicht. Ich ärgere mich wirklich über diese Ausfälle.', uk: 'Метро не їздить. Мене справді дратують ці зупинки.' },
        { speaker: 'Frau Weber', de: 'Beeilen Sie sich nicht zu sehr. Wir fangen einfach später an.', uk: 'Не надто спішіть. Ми просто почнемо пізніше.' },
        { speaker: 'Jan', de: 'Danke. Können Sie sich um die Unterlagen kümmern? Sie liegen auf meinem Tisch.', uk: 'Дякую. Чи могли б Ви подбати про документи? Вони лежать на моєму столі.' },
        { speaker: 'Frau Weber', de: 'Mache ich. Bis später!', uk: 'Зроблю. До зустрічі!' },
      ],
      tasks: [
        { type: 'gap', q: 'Jan verspätet sich um ___ Minuten.', answers: ['20|zwanzig'] },
        { type: 'choice', q: 'Warum kommt er zu spät?',
          options: ['Er hat verschlafen.', 'Die U-Bahn fährt nicht.', 'Er ist krank.', 'Es gibt einen Stau.'], answer: 1 },
        { type: 'gap', q: 'Er bittet: «Können Sie sich ___ die Unterlagen kümmern?»', answers: ['um'] },
        { type: 'truefalse', q: 'Frau Weber ist verärgert und verlangt Eile.', answer: false,
          explain: '«Beeilen Sie sich nicht zu sehr.»' },
      ],
    },
  ],

  writing: [
    {
      exam: 'ÖSD A2 · Schreiben',
      title: 'E-Mail: Ihr typischer Morgen',
      situation: 'Ваш друг з листування питає, як проходить ваш ранок. Опишіть його, вживаючи зворотні дієслова. <strong>50–60 слів</strong>.',
      points: ['Wann stehen Sie auf?', 'Was machen Sie danach?', 'Wie fühlen Sie sich morgens?', 'Eine Frage an den Freund'],
      minWords: 50,
      phrases: [
        { de: 'Ich stehe um halb sieben auf.', uk: 'Я встаю о пів на сьому.' },
        { de: 'Zuerst dusche ich mich und ziehe mich an.', uk: 'Спочатку приймаю душ і одягаюся.' },
        { de: 'Dann muss ich mich beeilen.', uk: 'Потім мушу поспішати.' },
        { de: 'Morgens fühle ich mich oft noch müde.', uk: 'Зранку я часто ще втомлений.' },
        { de: 'Ich freue mich immer auf den Kaffee.', uk: 'Я завжди з нетерпінням чекаю на каву.' },
        { de: 'Und wie sieht dein Morgen aus?', uk: 'А як виглядає твій ранок?' },
      ],
      checklist: [
        'Ви вжили щонайменше три зворотні дієслова з правильною формою sich?',
        'sich стоїть одразу після зміненого дієслова?',
        'Є дієслово з прийменником (sich freuen auf, warten auf)?',
        'Є запитання до адресата?',
        'Обсяг 50–60 слів?',
      ],
      model:
`Hallo Tim,

du hast gefragt, wie mein Morgen aussieht — hier die Wahrheit.
Ich stehe um halb sieben auf, dusche mich und ziehe mich schnell an.
Frühstück habe ich selten Zeit, deshalb muss ich mich immer beeilen.
Morgens fühle ich mich noch müde, aber im Bus wache ich langsam auf.
Am meisten freue ich mich auf den ersten Kaffee im Büro.

Und wie sieht dein Morgen aus? Stehst du auch so früh auf?

Liebe Grüße
Andrij`,
      modelUk: 'Переклад: Привіт, Тіме! Ти питав, як виглядає мій ранок — ось правда. Я встаю о пів на сьому, приймаю душ і швидко одягаюся. На сніданок рідко маю час, тому завжди мушу поспішати. Зранку почуваюся ще втомленим, але в автобусі поволі просинаюся. Найбільше тішуся першій каві в офісі. А як виглядає твій ранок? Ти теж встаєш так рано? Сердечні вітання, Андрій.',
    },
  ],

  test: [
    { type: 'gap', q: 'Ich fühle ___ heute nicht gut.', answers: ['mich'] },
    { type: 'gap', q: 'Wir müssen ___ beeilen.', answers: ['uns'] },
    { type: 'gap', q: 'Zieh ___ warm an!', answers: ['dich'] },
    { type: 'gap', q: 'Er putzt ___ die Zähne. (Dativ)', answers: ['sich'] },
    { type: 'choice', q: 'Sie ärgert sich ___ den Lärm.', options: ['auf', 'über', 'für', 'von'], answer: 1 },
    { type: 'choice', q: 'Ich bewerbe mich ___ die Stelle.', options: ['für', 'auf', 'um', 'über'], answer: 2 },
    { type: 'choice', q: 'Er hilft mir ___ der Arbeit.', options: ['bei', 'mit', 'für', 'an'], answer: 0 },
    { type: 'choice', q: 'Ich freue mich ___ deine Nachricht. (лист уже прийшов)',
      options: ['auf', 'über', 'für', 'an'], answer: 1 },
    { type: 'gap', q: '___ denkst du? — An die Prüfung. (питання про річ)', answers: ['Woran'] },
    { type: 'gap', q: 'Ich warte auf den Zug. → Ich warte ___.', answers: ['darauf'] },
    { type: 'order', q: 'Складіть речення.',
      words: ['Morgen', 'treffen', 'wir', 'uns', 'um', 'sechs'],
      answer: 'Morgen treffen wir uns um sechs' },
    { type: 'order', q: 'Складіть речення.',
      words: ['Sie', 'kümmert', 'sich', 'um', 'die', 'Kinder'],
      answer: 'Sie kümmert sich um die Kinder' },
    { type: 'match', q: 'Доберіть переклад.',
      pairs: [['sich beeilen', 'поспішати'], ['sich ausruhen', 'відпочивати'], ['sich verspäten', 'запізнюватися'], ['sich kümmern um', 'піклуватися про'], ['aufgeregt', 'схвильований']] },
    { type: 'truefalse', q: 'У питанні про людину кажуть «Worauf wartest du?».', answer: false,
      explain: 'Про людину — «Auf wen wartest du?». Wo(r)- лише про речі.' },
  ],
},

/* ══════════════════════════════════ МОДУЛЬ 5 ══════════════════════════════ */
{
  id: 'm5',
  title: 'Genitiv und Wechselpräpositionen',
  titleUk: 'Родовий відмінок і прийменники подвійної дії — поглиблено',
  can: [
    'виражати належність через Genitiv і через von',
    'вживати прийменники wegen, trotz, während',
    'упевнено обирати Akkusativ або Dativ після in, an, auf',
    'описувати розташування речей у приміщенні',
  ],

  grammar: [
    {
      title: '1. Genitiv: чий? чого?',
      html: `
<p>Genitiv відповідає на питання <strong>Wessen?</strong> — «чий?». Українською це родовий відмінок:
«книга <u>брата</u>», «початок <u>фільму</u>».</p>
<table>
<thead><tr><th></th><th>чоловічий</th><th>жіночий</th><th>середній</th><th>множина</th></tr></thead>
<tbody>
<tr><td>Nominativ</td><td>der / ein Mann</td><td>die / eine Frau</td><td>das / ein Kind</td><td>die Kinder</td></tr>
<tr><td><strong>Genitiv</strong></td><td><strong>des / eines Mann<u>es</u></strong></td><td><strong>der / einer Frau</strong></td>
<td><strong>des / eines Kind<u>es</u></strong></td><td><strong>der Kinder</strong></td></tr>
</tbody></table>
<p><strong>Два правила, і Genitiv готовий:</strong></p>
<ul>
<li>чоловічий і середній рід: артикль <em>des</em>, а до іменника додається <strong>-s</strong> або
<strong>-es</strong> (<em>des Vaters</em>, <em>des Kindes</em>);</li>
<li>жіночий рід і множина: артикль <em>der</em>, іменник не змінюється.</li>
</ul>
<p><em>Das ist das Auto <strong>meines Bruders</strong>.</em><span class="uk">Це авто мого брата.</span><br>
<em>Der Anfang <strong>des Films</strong> war langweilig.</em><span class="uk">Початок фільму був нудний.</span></p>
<div class="callout callout--tip"><strong>У розмові частіше von.</strong> Замість
<em>das Auto meines Bruders</em> німці спокійно кажуть <em>das Auto <u>von</u> meinem Bruder</em>.
Genitiv лишається обов’язковим у письмі, з іменами (<em>Annas Buch</em>) і після прийменників нижче.</div>`,
    },
    {
      title: '2. Прийменники з Genitiv',
      html: `
<table>
<thead><tr><th>Прийменник</th><th>Переклад</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td><strong>wegen</strong></td><td>через (причина)</td><td><em>Wegen des Regens bleiben wir zu Hause.</em><span class="uk">Через дощ ми лишаємося вдома.</span></td></tr>
<tr><td><strong>trotz</strong></td><td>попри, незважаючи на</td><td><em>Trotz der Kälte gingen wir spazieren.</em><span class="uk">Попри холод ми пішли гуляти.</span></td></tr>
<tr><td><strong>während</strong></td><td>під час</td><td><em>Während der Pause telefonierte er.</em><span class="uk">Під час перерви він телефонував.</span></td></tr>
<tr><td><strong>statt</strong></td><td>замість</td><td><em>Statt eines Kuchens brachte sie Obst.</em><span class="uk">Замість торта вона принесла фрукти.</span></td></tr>
</tbody></table>
<p>Ці чотири варто знати вже на A2 — вони часто трапляються в текстах на читання.</p>`,
    },
    {
      title: '3. Wechselpräpositionen: повторення й тонкощі',
      html: `
<p>Дев’ять прийменників вимагають Akkusativ при русі й Dativ при місці. Повний список із перекладом:</p>
<table>
<thead><tr><th>Прийменник</th><th>Переклад</th><th>Wohin? — Akkusativ</th><th>Wo? — Dativ</th></tr></thead>
<tbody>
<tr><td><strong>in</strong></td><td>у, в</td><td><em>in die Küche</em> — на кухню</td><td><em>in der Küche</em> — на кухні</td></tr>
<tr><td><strong>an</strong></td><td>до, біля; на (вертикально)</td><td><em>an die Wand</em> — на стіну</td><td><em>an der Wand</em> — на стіні</td></tr>
<tr><td><strong>auf</strong></td><td>на (горизонтально)</td><td><em>auf den Tisch</em> — на стіл</td><td><em>auf dem Tisch</em> — на столі</td></tr>
<tr><td><strong>über</strong></td><td>над</td><td><em>über das Sofa</em></td><td><em>über dem Sofa</em></td></tr>
<tr><td><strong>unter</strong></td><td>під</td><td><em>unter den Stuhl</em></td><td><em>unter dem Stuhl</em></td></tr>
<tr><td><strong>vor</strong></td><td>перед</td><td><em>vor die Tür</em></td><td><em>vor der Tür</em></td></tr>
<tr><td><strong>hinter</strong></td><td>за, позаду</td><td><em>hinter das Haus</em></td><td><em>hinter dem Haus</em></td></tr>
<tr><td><strong>neben</strong></td><td>поруч</td><td><em>neben das Bett</em></td><td><em>neben dem Bett</em></td></tr>
<tr><td><strong>zwischen</strong></td><td>між</td><td><em>zwischen die Bücher</em></td><td><em>zwischen den Büchern</em></td></tr>
</tbody></table>
<div class="callout"><strong>Перевірка одним питанням.</strong> Запитайте себе: «куди?» або «де?».
Якщо в українському перекладі стоїть знахідний («на стіл»), у німецькій теж Akkusativ.
Якщо місцевий («на столі») — Dativ.</div>`,
    },
    {
      title: '4. Пари дієслів, які видають відмінок',
      html: `
<p>Ці дієслова майже завжди супроводжують Wechselpräpositionen, і саме вони підказують відмінок.
Ліві — про стан, праві — про рух.</p>
<table>
<thead><tr><th>Wo? + Dativ</th><th>Переклад</th><th>Wohin? + Akkusativ</th><th>Переклад</th></tr></thead>
<tbody>
<tr><td><em>liegen</em></td><td>лежати</td><td><em>legen</em></td><td>класти</td></tr>
<tr><td><em>stehen</em></td><td>стояти</td><td><em>stellen</em></td><td>ставити</td></tr>
<tr><td><em>sitzen</em></td><td>сидіти</td><td><em>sich setzen</em></td><td>сідати</td></tr>
<tr><td><em>hängen</em> (hing)</td><td>висіти</td><td><em>hängen</em> (hängte)</td><td>вішати</td></tr>
<tr><td><em>stecken</em></td><td>бути всередині</td><td><em>stecken</em></td><td>засовувати</td></tr>
</tbody></table>
<p><em>Das Buch <strong>liegt auf dem</strong> Tisch.</em><span class="uk">Книжка лежить на столі.</span><br>
<em>Ich <strong>lege</strong> das Buch <strong>auf den</strong> Tisch.</em><span class="uk">Я кладу книжку на стіл.</span></p>`,
    },
    {
      title: '5. Слова з прикладів цієї теми',
      html: `
<table>
<thead><tr><th>Слово</th><th>Переклад</th><th>Як ужито</th></tr></thead>
<tbody>
<tr><td><em>der Anfang</em></td><td>початок</td><td><em>der Anfang des Films</em></td></tr>
<tr><td><em>die Kälte</em></td><td>холод</td><td><em>trotz der Kälte</em></td></tr>
<tr><td><em>die Pause, -n</em></td><td>перерва</td><td><em>während der Pause</em></td></tr>
<tr><td><em>der Kuchen, -</em></td><td>торт, пиріг</td><td><em>statt eines Kuchens</em></td></tr>
<tr><td><em>das Regal, -e</em></td><td>полиця</td><td><em>ins Regal stellen</em></td></tr>
<tr><td><em>die Wand, ¨-e</em></td><td>стіна</td><td><em>an der Wand hängen</em></td></tr>
<tr><td><em>die Ecke, -n</em></td><td>кут</td><td><em>in der Ecke stehen</em></td></tr>
<tr><td><em>der Teppich, -e</em></td><td>килим</td><td><em>auf dem Teppich liegen</em></td></tr>
<tr><td><em>umstellen</em></td><td>переставляти</td><td>тема опису кімнати</td></tr>
</tbody></table>`,
    },
  ],
  exercises: [
    { type: 'gap', q: 'Das ist das Auto ___ Bruders. (mein)', answers: ['meines'] },
    { type: 'gap', q: 'Der Anfang ___ Films war langweilig. (der Film)', answers: ['des'] },
    { type: 'gap', q: 'Das Zimmer ___ Kinder ist klein. (die Kinder)', answers: ['der'] },
    { type: 'gap', q: 'Die Tasche ___ Mutter liegt hier. (meine)', answers: ['meiner'] },
    { type: 'gap', q: '___ des Regens bleiben wir zu Hause. (через)', answers: ['Wegen'] },
    { type: 'gap', q: '___ der Kälte gingen wir spazieren. (попри)', answers: ['Trotz'] },
    { type: 'gap', q: '___ der Pause telefonierte er. (під час)', answers: ['Während'] },
    { type: 'gap', q: 'Ich stelle die Lampe ___ Ecke. (in + die Ecke, куди?)', answers: ['in die'] },
    { type: 'gap', q: 'Die Lampe steht ___ Ecke. (in + die Ecke, де?)', answers: ['in der'] },
    { type: 'gap', q: 'Das Bild hängt ___ Wand. (an + die Wand, де?)', answers: ['an der'] },
    { type: 'choice', q: 'Ich lege das Buch ___ Tisch.',
      options: ['auf dem', 'auf den', 'auf der', 'aufs dem'], answer: 1,
      explain: 'legen — рух, тому Akkusativ: auf den Tisch.' },
    { type: 'choice', q: 'Der Schlüssel liegt ___ Schublade.',
      options: ['in die', 'in der', 'in den', 'ins'], answer: 1 },
    { type: 'order', q: 'Складіть речення.',
      words: ['Wegen', 'des', 'Staus', 'kamen', 'wir', 'zu', 'spät'],
      answer: 'Wegen des Staus kamen wir zu spät' },
    { type: 'order', q: 'Складіть речення.',
      words: ['Ich', 'hänge', 'den', 'Spiegel', 'an', 'die', 'Wand'],
      answer: 'Ich hänge den Spiegel an die Wand' },
    { type: 'match', q: 'Доберіть пару «стан — рух».',
      pairs: [['liegen', 'legen'], ['stehen', 'stellen'], ['sitzen', 'sich setzen'], ['Dativ', 'Akkusativ']],
      speak: false },
  ],

  listening: [
    {
      exam: 'ÖSD A2 · Hören',
      title: 'Das neue Zimmer einrichten',
      instruction: 'Пара обставляє кімнату. Простежте, що куди ставлять.',
      lines: [
        { speaker: 'Nina', de: 'Wohin stellen wir das Regal? In die Ecke neben das Fenster?', uk: 'Куди поставимо полицю? У кут біля вікна?' },
        { speaker: 'Ben', de: 'Lieber an die andere Wand. In der Ecke ist es zu dunkel.', uk: 'Краще до іншої стіни. У куті занадто темно.' },
        { speaker: 'Nina', de: 'Gut. Und der Spiegel? Der hing in der alten Wohnung über dem Sofa.', uk: 'Добре. А дзеркало? У старій квартирі воно висіло над диваном.' },
        { speaker: 'Ben', de: 'Häng ihn neben die Tür, dann sieht man sich beim Rausgehen.', uk: 'Повісь його біля дверей, тоді бачиш себе, коли виходиш.' },
        { speaker: 'Nina', de: 'Und wo liegt der Teppich? Ich finde ihn nicht.', uk: 'А де килим? Не можу його знайти.' },
        { speaker: 'Ben', de: 'Der steckt noch in einer Kiste, wahrscheinlich unter den Büchern.', uk: 'Він ще в коробці, ймовірно, під книжками.' },
      ],
      tasks: [
        { type: 'choice', q: 'Wohin kommt das Regal?',
          options: ['In die Ecke', 'An die andere Wand', 'Neben die Tür', 'Unter das Fenster'], answer: 1 },
        { type: 'choice', q: 'Warum nicht in die Ecke?',
          options: ['Zu klein', 'Zu dunkel', 'Zu kalt', 'Zu laut'], answer: 1 },
        { type: 'gap', q: 'Der Spiegel soll ___ die Tür kommen.', answers: ['neben'] },
        { type: 'truefalse', q: 'Der Teppich liegt schon auf dem Boden.', answer: false,
          explain: 'Він ще в коробці під книжками.' },
      ],
    },
  ],

  writing: [
    {
      exam: 'Goethe A2 · Schreiben Teil 2',
      title: 'Beschreiben Sie Ihr Zimmer',
      situation: 'Ваша подруга хоче побачити ваше нове житло, але ще не може приїхати. Опишіть їй кімнату — що де стоїть. <strong>50–60 слів</strong>.',
      points: ['Wie groß ist das Zimmer?', 'Was steht wo? (mindestens vier Möbelstücke)', 'Was gefällt Ihnen am meisten?', 'Was möchten Sie noch ändern?'],
      minWords: 50,
      phrases: [
        { de: 'Mein Zimmer ist nicht groß, aber hell.', uk: 'Моя кімната невелика, але світла.' },
        { de: 'Das Bett steht an der Wand neben dem Fenster.', uk: 'Ліжко стоїть біля стіни поруч із вікном.' },
        { de: 'Auf dem Schreibtisch liegen meine Bücher.', uk: 'На письмовому столі лежать мої книжки.' },
        { de: 'Über dem Sofa hängt ein Bild.', uk: 'Над диваном висить картина.' },
        { de: 'Am besten gefällt mir der Balkon.', uk: 'Найбільше мені подобається балкон.' },
        { de: 'Wegen des Lärms möchte ich neue Fenster.', uk: 'Через шум я хотів би нові вікна.' },
      ],
      checklist: [
        'Ви описали розташування щонайменше чотирьох речей?',
        'Після in, an, auf для місця стоїть Dativ (dem, der)?',
        'Є дієслова стану: liegen, stehen, hängen?',
        'Є щонайменше один Genitiv або wegen / trotz / während?',
        'Обсяг 50–60 слів?',
      ],
      model:
`Liebe Marta,

endlich kann ich dir mein Zimmer beschreiben!
Es ist nicht groß, etwa achtzehn Quadratmeter, aber sehr hell.
Das Bett steht an der Wand neben dem Fenster, davor liegt ein kleiner Teppich.
Links steht ein Schreibtisch; darauf liegen immer zu viele Bücher.
Über dem Sofa hängt ein Bild von meiner Schwester.
Am besten gefällt mir der Blick auf den Park. Trotz des Lärms schlafe ich gut.
Nur den Schrank möchte ich noch umstellen.

Liebe Grüße
Oksana`,
      modelUk: 'Переклад: Люба Марто, нарешті можу описати тобі свою кімнату! Вона невелика, близько вісімнадцяти квадратних метрів, але дуже світла. Ліжко стоїть біля стіни поруч із вікном, перед ним лежить маленький килим. Ліворуч стоїть письмовий стіл; на ньому завжди лежить надто багато книжок. Над диваном висить картина моєї сестри. Найбільше мені подобається вид на парк. Попри шум я добре сплю. Хочу лише переставити шафу.',
    },
  ],

  test: [
    { type: 'gap', q: 'Das ist die Tasche ___ Lehrerin. (die Lehrerin)', answers: ['der'] },
    { type: 'gap', q: 'Das Ende ___ Buches war traurig. (das Buch)', answers: ['des'] },
    { type: 'gap', q: 'Das Haus ___ Eltern ist alt. (meine Eltern)', answers: ['meiner'] },
    { type: 'gap', q: '___ der Krankheit blieb er zu Hause. (через)', answers: ['Wegen'] },
    { type: 'gap', q: '___ des Regens spielten die Kinder draußen. (попри)', answers: ['Trotz'] },
    { type: 'gap', q: 'Ich stelle die Blumen ___ Tisch. (auf, куди?)', answers: ['auf den'] },
    { type: 'gap', q: 'Die Blumen stehen ___ Tisch. (auf, де?)', answers: ['auf dem'] },
    { type: 'gap', q: 'Die Katze schläft ___ Bett. (unter, де?)', answers: ['unter dem'] },
    { type: 'choice', q: 'Wohin hängst du das Bild?',
      options: ['an der Wand', 'an die Wand', 'auf der Wand', 'in der Wand'], answer: 1 },
    { type: 'choice', q: 'Який відмінок після wegen?',
      options: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'], answer: 3 },
    { type: 'order', q: 'Складіть речення.',
      words: ['Während', 'der', 'Ferien', 'arbeitete', 'ich', 'im', 'Café'],
      answer: 'Während der Ferien arbeitete ich im Café' },
    { type: 'order', q: 'Складіть речення.',
      words: ['Der', 'Schlüssel', 'liegt', 'in', 'der', 'Schublade'],
      answer: 'Der Schlüssel liegt in der Schublade' },
    { type: 'match', q: 'Доберіть переклад.',
      pairs: [['wessen?', 'чий?'], ['während', 'під час'], ['statt', 'замість'], ['das Regal', 'полиця'], ['die Ecke', 'кут']] },
    { type: 'multi', q: 'Позначте прийменники з Genitiv.',
      options: ['wegen', 'mit', 'trotz', 'bei', 'während', 'statt'], answers: [0, 2, 4, 5] },
  ],
},

];
