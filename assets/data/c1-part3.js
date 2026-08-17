/* C1, модулі 6–8: Funktionsverbgefüge високого реєстру, словотвір
   (префікси, суфікси, родини слів) і робота зі стилістичними регістрами. */

const m6 = {
  id: 'm6',
  title: 'Funktionsverbgefüge im gehobenen Stil',
  titleUk: 'Іменниково-дієслівні звороти високого реєстру',
  can: [
    'уживати звороти на кшталт in Erwägung ziehen, Anspruch erheben',
    'обирати правильне дієслово до іменника',
    'розгортати зворот у просте дієслово й навпаки',
    'відчувати, коли зворот доречний, а коли надмірний',
    'читати наукові та юридичні тексти без спотикання',
  ],

  grammar: [
    {
      title: '1. Що таке Funktionsverbgefüge',
      html: `
<p><em>Funktionsverbgefüge</em> — це зв’язка «іменник + дієслово», у якій
<strong>смисл несе іменник</strong>, а дієслово втратило власне значення й лише
виконує граматичну функцію. На B2 ви вчили базовий набір; на C1 потрібен
книжний рівень і чуття міри.</p>
<table>
<thead><tr><th>Зворот</th><th>Просте дієслово</th><th>Переклад</th></tr></thead>
<tbody>
<tr><td><em>in Erwägung <strong>ziehen</strong></em></td><td><em>erwägen</em></td><td>брати до розгляду</td></tr>
<tr><td><em>Anspruch <strong>erheben</strong></em> auf + Akk.</td><td><em>beanspruchen</em></td><td>заявляти претензію на</td></tr>
<tr><td><em>zur Sprache <strong>bringen</strong></em></td><td><em>ansprechen</em></td><td>порушувати (тему)</td></tr>
<tr><td><em>in Kauf <strong>nehmen</strong></em></td><td><em>hinnehmen</em></td><td>змиритися, приймати як плату</td></tr>
<tr><td><em>Rechnung <strong>tragen</strong></em> + Dat.</td><td><em>berücksichtigen</em></td><td>враховувати</td></tr>
<tr><td><em>zur Verfügung <strong>stehen</strong></em></td><td><em>verfügbar sein</em></td><td>бути в розпорядженні</td></tr>
<tr><td><em>in Frage <strong>stellen</strong></em></td><td><em>bezweifeln</em></td><td>ставити під сумнів</td></tr>
<tr><td><em>zum Ausdruck <strong>bringen</strong></em></td><td><em>ausdrücken</em></td><td>висловлювати</td></tr>
<tr><td><em>Abstand <strong>nehmen</strong></em> von + Dat.</td><td><em>verzichten</em></td><td>відступитися від</td></tr>
<tr><td><em>Folge <strong>leisten</strong></em> + Dat.</td><td><em>befolgen</em></td><td>виконувати (вимогу)</td></tr>
<tr><td><em>Einfluss <strong>nehmen</strong></em> auf + Akk.</td><td><em>beeinflussen</em></td><td>впливати на</td></tr>
<tr><td><em>zur Kenntnis <strong>nehmen</strong></em></td><td><em>erfahren</em></td><td>брати до відома</td></tr>
</tbody></table>
<div class="callout"><strong>Дієслово не можна вибрати логікою.</strong> Пара фіксована,
і німець чує кожну підміну: <em>Erwägung <u>ziehen</u></em>, а не «machen»;
<em>Anspruch <u>erheben</u></em>, а не «machen»; <em>Folge <u>leisten</u></em>, а не «geben».
Вивчайте зворот як одне слово — і разом із прийменником, якщо він є.</div>`,
    },
    {
      title: '2. Дієслова-функції та їхні «господарі»',
      html: `
<p>Корисно бачити систему з іншого боку: одне «слабке» дієслово збирає навколо себе
цілу групу іменників.</p>
<table>
<thead><tr><th>Дієслово</th><th>Із чим уживають</th></tr></thead>
<tbody>
<tr><td><strong>nehmen</strong></td><td><em>Rücksicht, Abstand, Einfluss, Kenntnis, Stellung, Platz, Rache, in Kauf</em></td></tr>
<tr><td><strong>ziehen</strong></td><td><em>in Erwägung, in Betracht, Konsequenzen, Bilanz, in Zweifel, Nutzen</em></td></tr>
<tr><td><strong>bringen</strong></td><td><em>zum Ausdruck, zur Sprache, in Erfahrung, zu Ende, in Ordnung, ins Spiel</em></td></tr>
<tr><td><strong>stellen</strong></td><td><em>in Frage, zur Verfügung, einen Antrag, eine Frage, Bedingungen, unter Beweis</em></td></tr>
<tr><td><strong>leisten</strong></td><td><em>Hilfe, Folge, Widerstand, einen Beitrag, Arbeit</em></td></tr>
<tr><td><strong>treffen</strong></td><td><em>eine Entscheidung, Maßnahmen, eine Vereinbarung, Vorkehrungen</em></td></tr>
<tr><td><strong>erheben</strong></td><td><em>Anspruch, Einspruch, Klage, Vorwürfe, Gebühren</em></td></tr>
<tr><td><strong>tragen</strong></td><td><em>Rechnung, Verantwortung, Sorge, Kosten, Früchte</em></td></tr>
<tr><td><strong>üben</strong></td><td><em>Kritik, Geduld, Zurückhaltung, Druck (ausüben)</em></td></tr>
<tr><td><strong>finden</strong></td><td><em>Anwendung, Berücksichtigung, Zustimmung, statt (stattfinden)</em></td></tr>
</tbody></table>
<div class="callout callout--tip"><strong>Як це вчити ефективно.</strong> Не списком
з тридцяти зворотів, а «гронами» по дієслову: сьогодні все з <em>nehmen</em>,
завтра все з <em>ziehen</em>. Так мозок бачить систему, а не набір випадковостей.
І одразу проговорюйте цілим реченням, бо саме в реченні видно відмінок і прийменник.</div>`,
    },
    {
      title: '3. Пасив і номіналізація зворотів',
      html: `
<p>Ці звороти живуть у писемних текстах, тому часто стоять у пасиві або самі
перетворюються на іменникову групу.</p>
<table>
<thead><tr><th>Активно</th><th>Пасивно</th><th>Номінально</th></tr></thead>
<tbody>
<tr><td><em>Wir haben Maßnahmen getroffen.</em></td>
<td><em>Es wurden Maßnahmen getroffen.</em></td>
<td><em>nach dem Treffen der Maßnahmen</em> — рідко; частіше <em>nach Ergreifen der Maßnahmen</em></td></tr>
<tr><td><em>Die Behörde hat den Antrag in Frage gestellt.</em></td>
<td><em>Der Antrag wurde in Frage gestellt.</em></td>
<td><em>die Infragestellung des Antrags</em></td></tr>
<tr><td><em>Er hat Einspruch erhoben.</em></td>
<td><em>Es wurde Einspruch erhoben.</em></td>
<td><em>die Erhebung des Einspruchs</em></td></tr>
<tr><td><em>Wir tragen den Bedenken Rechnung.</em></td>
<td><em>Den Bedenken wird Rechnung getragen.</em></td>
<td><em>unter Berücksichtigung der Bedenken</em></td></tr>
</tbody></table>
<p><strong>Часті пасивні формули</strong> з цими зворотами, які варто вміти читати:</p>
<ul>
<li><em>Es wurde Klage erhoben.</em><span class="uk">Було подано позов.</span></li>
<li><em>Diese Regel findet keine Anwendung.</em><span class="uk">Це правило не застосовується.</span></li>
<li><em>Der Vorschlag fand breite Zustimmung.</em><span class="uk">Пропозиція здобула широку підтримку.</span></li>
<li><em>Es wird darauf Wert gelegt, dass …</em><span class="uk">Надається значення тому, щоб …</span></li>
</ul>
<div class="callout"><strong>Одна деталь порядку слів.</strong> Іменник звороту тримається
дієслова й іде в кінець рамки разом із ним: <em>Wir haben die Bedenken <u>zur Kenntnis genommen</u></em>.
Розривати пару зайвими словами не варто — речення стає важким.</div>`,
    },
    {
      title: '4. Коли зворот шкодить',
      html: `
<p>C1 — це вже не «чим складніше, тим краще». Уміння <strong>прибрати</strong> зворот
цінується так само, як уміння його вжити.</p>
<table>
<thead><tr><th>Перевантажено</th><th>Краще</th></tr></thead>
<tbody>
<tr><td><em>Wir möchten zum Ausdruck bringen, dass wir Ihre Entscheidung in Frage stellen.</em></td>
<td><em>Wir bezweifeln Ihre Entscheidung.</em><span class="uk">Ми сумніваємося у Вашому рішенні.</span></td></tr>
<tr><td><em>Es wurde die Entscheidung getroffen, von dem Vorhaben Abstand zu nehmen.</em></td>
<td><em>Wir haben das Vorhaben aufgegeben.</em><span class="uk">Ми відмовилися від задуму.</span></td></tr>
<tr><td><em>Der Vorschlag hat unsere Zustimmung gefunden.</em></td>
<td><em>Wir stimmen dem Vorschlag zu.</em><span class="uk">Ми погоджуємося з пропозицією.</span></td></tr>
</tbody></table>
<p><strong>Три ознаки, що зворотів забагато:</strong></p>
<ol>
<li>у реченні два й більше зворотів;</li>
<li>підмет — <em>es</em> або взагалі відсутній, і незрозуміло, хто діє;</li>
<li>зворот подовжує речення, не додаючи точності.</li>
</ol>
<div class="callout callout--tip"><strong>Робоче правило для іспиту.</strong>
Один-два звороти на абзац — саме те, що показує рівень. Далі кожен наступний
працює проти вас. Найкращий ефект дає контраст: важкий зворот у тезі
й коротке просте речення у висновку.</div>`,
    },
    {
      title: '5. Слова з прикладів цієї теми',
      html: `
<table>
<thead><tr><th>Слово</th><th>Переклад</th><th>Як ужито в темі</th></tr></thead>
<tbody>
<tr><td><em>erwägen</em></td><td>розглядати, обмірковувати</td><td>Просте дієслово до <em>in Erwägung ziehen</em>.</td></tr>
<tr><td><em>beanspruchen</em></td><td>претендувати на</td><td>Просте дієслово до <em>Anspruch erheben</em>.</td></tr>
<tr><td><em>hinnehmen</em></td><td>змиритися, стерпіти</td><td>Просте дієслово до <em>in Kauf nehmen</em>.</td></tr>
<tr><td><em>der Einspruch, ¨-e</em></td><td>заперечення, апеляція</td><td><em>Es wurde Einspruch erhoben.</em></td></tr>
<tr><td><em>die Bedenken (Pl.)</em></td><td>застереження, сумніви</td><td><em>Den Bedenken wird Rechnung getragen.</em></td></tr>
<tr><td><em>die Vorkehrung, -en</em></td><td>запобіжний захід</td><td><em>Vorkehrungen treffen</em></td></tr>
<tr><td><em>der Widerstand</em></td><td>опір</td><td><em>Widerstand leisten</em></td></tr>
<tr><td><em>die Zurückhaltung</em></td><td>стриманість</td><td><em>Zurückhaltung üben</em></td></tr>
<tr><td><em>Anwendung finden</em></td><td>застосовуватися</td><td><em>Diese Regel findet keine Anwendung.</em></td></tr>
<tr><td><em>das Vorhaben, -</em></td><td>задум, план</td><td><em>… von dem Vorhaben Abstand zu nehmen.</em></td></tr>
</tbody></table>`,
    },
  ],
  exercises: [
    { type: 'gap', q: 'Wir ___ diese Möglichkeit in Erwägung. (яке дієслово?)', answers: ['ziehen'] },
    { type: 'gap', q: 'Er hat Anspruch auf eine Entschädigung ___. (яке дієслово?)',
      answers: ['erhoben'] },
    { type: 'gap', q: 'Ich möchte das Thema zur Sprache ___.', answers: ['bringen'] },
    { type: 'gap', q: 'Die Behörde hat den Antrag in Frage ___.', answers: ['gestellt'] },
    { type: 'gap', q: 'Wir müssen den Bedenken Rechnung ___.', answers: ['tragen'] },
    { type: 'gap', q: 'Diese Regel findet keine ___. (застосування)', answers: ['Anwendung'] },
    { type: 'gap', q: 'Der Anordnung ist Folge zu ___.', answers: ['leisten'] },
    { type: 'choice', q: 'Просте дієслово до <span class="de-inline">in Kauf nehmen</span>:',
      options: ['kaufen', 'hinnehmen', 'einkaufen', 'verkaufen'], answer: 1 },
    { type: 'choice', q: 'Просте дієслово до <span class="de-inline">Rechnung tragen</span>:',
      options: ['rechnen', 'bezahlen', 'berücksichtigen', 'abrechnen'], answer: 2 },
    { type: 'choice', q: 'Яка пара правильна?',
      options: ['Erwägung machen', 'Erwägung ziehen', 'Erwägung geben', 'Erwägung leisten'],
      answer: 1 },
    { type: 'choice', q: 'Що робить текст гіршим?',
      options: ['один зворот на абзац', 'два звороти в одному реченні',
        'контраст звороту й короткого речення', 'зворот у тезі'], answer: 1 },
    { type: 'order', q: 'Складіть речення.',
      words: ['Wir', 'haben', 'Ihre', 'Bedenken', 'zur', 'Kenntnis', 'genommen'],
      answer: 'Wir haben Ihre Bedenken zur Kenntnis genommen' },
    { type: 'match', q: 'Доберіть дієслово.',
      pairs: [['in Erwägung', 'ziehen'], ['Anspruch', 'erheben'], ['zur Sprache', 'bringen'],
        ['in Frage', 'stellen'], ['Rechnung', 'tragen'], ['Widerstand', 'leisten']] },
    { type: 'multi', q: 'Позначте звороти з дієсловом <span class="de-inline">nehmen</span>.',
      options: ['Rücksicht', 'Abstand', 'Bilanz', 'Einfluss', 'Klage'],
      answers: [0, 1, 3] },
    { type: 'truefalse', q: 'У Funktionsverbgefüge смисл несе іменник, а не дієслово.', answer: true },
  ],

  listening: [
    {
      exam: 'Goethe C1 · Hören Teil 2',
      title: 'Vorstandssitzung: ein Vorhaben wird gestoppt',
      instruction: 'Засідання правління. Мова високого реєстру — багато стійких зворотів.',
      lines: [
        { speaker: 'Vorsitzende', de: 'Wir müssen heute Stellung zu dem Bauvorhaben nehmen. Die Kalkulation liegt vor.', uk: 'Ми мусимо сьогодні висловити позицію щодо будівельного задуму. Кошторис наявний.' },
        { speaker: 'Herr Adam', de: 'Ich stelle die Zahlen nicht in Frage, aber wir sollten die Zinsentwicklung in Betracht ziehen.', uk: 'Я не ставлю цифри під сумнів, але нам варто врахувати динаміку процентних ставок.' },
        { speaker: 'Frau Neumann', de: 'Genau. Wenn wir jetzt bauen, nehmen wir ein erhebliches Risiko in Kauf.', uk: 'Саме так. Якщо ми будуємо тепер, ми змиряємося зі значним ризиком.' },
        { speaker: 'Vorsitzende', de: 'Sie schlagen also vor, von dem Vorhaben zunächst Abstand zu nehmen?', uk: 'Отже, Ви пропонуєте поки що відступитися від задуму?' },
        { speaker: 'Frau Neumann', de: 'Für zwölf Monate. Danach ziehen wir Bilanz und entscheiden neu.', uk: 'На дванадцять місяців. Потім підводимо підсумок і вирішуємо заново.' },
        { speaker: 'Herr Adam', de: 'Den Sorgen der Mieter muss dabei Rechnung getragen werden. Ihnen wurde ein Termin genannt.', uk: 'При цьому треба врахувати занепокоєння орендарів. Їм назвали термін.' },
        { speaker: 'Vorsitzende', de: 'Einverstanden. Wir bringen die Verschiebung schriftlich zum Ausdruck und stellen den neuen Zeitplan zur Verfügung.', uk: 'Погоджуюсь. Ми висловимо перенесення письмово й надамо новий графік.' },
        { speaker: 'Frau Neumann', de: 'Dann leisten wir auch einen Beitrag zur Transparenz — das war letztes Jahr der Hauptvorwurf.', uk: 'Тоді ми зробимо й внесок у прозорість — це був головний закид минулого року.' },
      ],
      tasks: [
        { type: 'choice', q: 'Was ist der Beschluss?',
          options: ['Sofort bauen', 'Das Vorhaben für zwölf Monate zurückstellen',
            'Das Vorhaben endgültig streichen', 'Die Kalkulation neu erstellen'], answer: 1 },
        { type: 'choice', q: 'Welches Risiko nennt Frau Neumann?',
          options: ['Die Zinsentwicklung', 'Fehlende Genehmigungen',
            'Personalmangel', 'Schlechtes Wetter'], answer: 0 },
        { type: 'choice', q: 'Was soll den Mietern gegenüber geschehen?',
          options: ['Nichts', 'Die Verschiebung schriftlich mitteilen',
            'Die Miete senken', 'Eine Versammlung einberufen'], answer: 1 },
        { type: 'gap', q: 'Nach ___ Monaten wird Bilanz gezogen.', answers: ['zwölf|12'] },
        { type: 'multi', q: 'Welche Funktionsverbgefüge kommen vor?',
          options: ['Stellung nehmen', 'in Frage stellen', 'in Betracht ziehen',
            'in Kauf nehmen', 'Abstand nehmen', 'Bilanz ziehen', 'Rechnung tragen',
            'zum Ausdruck bringen', 'zur Verfügung stellen', 'einen Beitrag leisten'],
          answers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
      ],
    },
  ],

  writing: [
    {
      exam: 'Goethe C1 · Schreiben Teil 2',
      title: 'Formelles Schreiben: eine Entscheidung mitteilen und begründen',
      situation: 'Ви від імені правління повідомляєте орендарям, що ремонт даху переносять на рік. Напишіть офіційний лист: <strong>150–180 слів</strong>. Уживіть щонайменше чотири різні Funktionsverbgefüge — але не більше двох на абзац.',
      points: [
        'Teilen Sie die Entscheidung mit.',
        'Begründen Sie sie sachlich.',
        'Gehen Sie auf die Bedenken der Mieter ein.',
        'Nennen Sie den nächsten Schritt.',
      ],
      minWords: 150,
      phrases: [
        { de: 'Wir möchten Ihnen die Entscheidung des Vorstands zur Kenntnis bringen.', uk: 'Хочемо довести до Вашого відома рішення правління.' },
        { de: 'Der Vorstand hat beschlossen, von dem Vorhaben zunächst Abstand zu nehmen.', uk: 'Правління ухвалило поки що відступитися від задуму.' },
        { de: 'Die Zinsentwicklung wurde dabei in Betracht gezogen.', uk: 'Динаміку процентних ставок при цьому було враховано.' },
        { de: 'Ihren Bedenken wird selbstverständlich Rechnung getragen.', uk: 'Ваші застереження, звісно, буде враховано.' },
        { de: 'Wir stellen Ihnen den überarbeiteten Zeitplan zur Verfügung.', uk: 'Ми надаємо Вам перероблений графік.' },
        { de: 'In zwölf Monaten wird erneut Bilanz gezogen.', uk: 'За дванадцять місяців буде знову підведено підсумок.' },
        { de: 'Für Rückfragen stehen wir Ihnen zur Verfügung.', uk: 'Для додаткових питань ми у Вашому розпорядженні.' },
      ],
      checklist: [
        'Є щонайменше чотири різні Funktionsverbgefüge?',
        'У жодному абзаці їх не більше двох?',
        'Правильно підібрано дієслово до кожного іменника?',
        'Названо причину й наступний крок із датою?',
        'Обсяг 150–180 слів, тон формальний (Sie), без модальних часток?',
      ],
      model:
`Sehr geehrte Mieterinnen und Mieter,

wir möchten Ihnen eine Entscheidung des Vorstands zur Kenntnis bringen: Die für den Frühling
geplante Dachsanierung wird um zwölf Monate verschoben.

Der Vorstand hat sich nicht leichtfertig dazu entschlossen. Bei der Beratung wurde vor allem die
Zinsentwicklung in Betracht gezogen; eine Finanzierung zu den derzeitigen Konditionen würde die
Rücklage vollständig aufbrauchen. Damit hätten wir ein Risiko in Kauf genommen, das im Fall
weiterer Reparaturen niemandem dient.

Ihren Bedenken wird dabei Rechnung getragen. Die undichten Stellen über dem dritten Obergeschoss
werden bereits im Oktober provisorisch abgedichtet, und die Kosten dafür trägt die Gemeinschaft
nicht zusätzlich. Sollte sich der Zustand verschlechtern, nehmen wir umgehend erneut Stellung.

Den überarbeiteten Zeitplan stellen wir Ihnen mit der nächsten Abrechnung zur Verfügung.
Im Herbst des kommenden Jahres wird erneut Bilanz gezogen und über den Baubeginn entschieden.
Für Rückfragen stehen wir Ihnen dienstags und donnerstags zur Verfügung.

Mit freundlichen Grüßen
Der Vorstand`,
      modelUk: 'Переклад: Шановні орендарки й орендарі, хочемо довести до Вашого відома рішення правління: заплановану на весну реконструкцію даху перенесено на дванадцять місяців. Правління дійшло цього не легковажно. Під час обговорення передусім було враховано динаміку процентних ставок; фінансування за нинішніх умов повністю вичерпало б резерв. Тим ми змирилися б із ризиком, який у разі подальших ремонтів нікому не служить. Ваші застереження при цьому враховано. Місця протікання над третім поверхом уже в жовтні буде тимчасово загерметизовано, і витрат на це спільнота додатково не несе. Якщо стан погіршиться, ми негайно висловимо позицію заново. Перероблений графік ми надамо Вам разом із наступним розрахунком. Восени наступного року буде знову підведено підсумок і вирішено щодо початку робіт. Для додаткових питань ми у Вашому розпорядженні у вівторок і четвер. З повагою, правління.',
    },
  ],

  test: [
    { type: 'gap', q: 'Wir ___ Ihre Einwände zur Kenntnis. (яке дієслово)', answers: ['nehmen'] },
    { type: 'gap', q: 'Sie hat Klage ___. (яке дієслово, Perfekt)', answers: ['erhoben'] },
    { type: 'gap', q: 'Wir müssen Konsequenzen ___.', answers: ['ziehen'] },
    { type: 'gap', q: 'Er hat seine Kompetenz unter Beweis ___.', answers: ['gestellt'] },
    { type: 'gap', q: 'Die Firma hat einen Beitrag zur Lösung ___.', answers: ['geleistet'] },
    { type: 'gap', q: 'Wir legen großen ___ auf Pünktlichkeit. (надавати значення)', answers: ['Wert'] },
    { type: 'choice', q: 'Просте дієслово до <span class="de-inline">zum Ausdruck bringen</span>:',
      options: ['drucken', 'ausdrücken', 'bringen', 'aussprechen'], answer: 1 },
    { type: 'choice', q: 'Просте дієслово до <span class="de-inline">Folge leisten</span>:',
      options: ['folgen', 'befolgen', 'verfolgen', 'erfolgen'], answer: 1 },
    { type: 'choice', q: 'Яка пара НЕправильна?',
      options: ['Bilanz ziehen', 'Widerstand leisten', 'Anspruch machen', 'Sorge tragen'],
      answer: 2,
      explain: 'Anspruch erheben, не machen.' },
    { type: 'order', q: 'Складіть речення.',
      words: ['Den', 'Bedenken', 'der', 'Mieter', 'wird', 'Rechnung', 'getragen'],
      answer: 'Den Bedenken der Mieter wird Rechnung getragen' },
    { type: 'match', q: 'Доберіть переклад.',
      pairs: [['der Einspruch', 'заперечення'], ['die Bedenken', 'застереження'],
        ['die Vorkehrung', 'запобіжний захід'], ['das Vorhaben', 'задум'],
        ['die Zurückhaltung', 'стриманість'], ['der Widerstand', 'опір']] },
    { type: 'multi', q: 'Позначте звороти з дієсловом <span class="de-inline">stellen</span>.',
      options: ['in Frage', 'zur Verfügung', 'in Betracht', 'unter Beweis', 'Bilanz'],
      answers: [0, 1, 3] },
    { type: 'truefalse', q: 'Два Funktionsverbgefüge в одному реченні роблять текст кращим.',
      answer: false,
      explain: 'Це вже перевантаження; на C1 цінують міру.' },
    { type: 'truefalse', q: 'Іменник звороту тримається дієслова й іде в кінець рамки разом із ним.',
      answer: true },
  ],
};

const m7 = {
  id: 'm7',
  title: 'Wortbildung: Präfixe, Suffixe, Wortfamilien',
  titleUk: 'Словотвір: префікси, суфікси й родини слів',
  can: [
    'вивести значення незнайомого слова з його будови',
    'розрізняти значення префіксів be-, ver-, ent-, zer-, er-',
    'утворювати іменники й прикметники потрібними суфіксами',
    'будувати родину слів від одного кореня',
    'розбирати довгі складені іменники',
  ],

  grammar: [
    {
      title: '1. Дієслівні префікси: система значень',
      html: `
<p>Німецькі невідокремлювані префікси не випадкові — кожен має свою логіку.
Знання цієї логіки дозволяє <strong>вгадувати значення слів, яких ви ніколи не бачили</strong>,
а це головна навичка читання на C1.</p>
<table>
<thead><tr><th>Префікс</th><th>Логіка</th><th>Приклади</th></tr></thead>
<tbody>
<tr><td><strong>be-</strong></td><td>робить дієслово перехідним, «діяти <u>на</u> об’єкт»</td>
<td><em>antworten → be<strong>antworten</strong></em> (відповідати <u>на щось</u>),
<em>arbeiten → be<strong>arbeiten</strong></em> (опрацьовувати),
<em>wohnen → be<strong>wohnen</strong></em> (заселяти)</td></tr>
<tr><td><strong>ver-</strong></td><td>1) хибна дія; 2) зникнення; 3) зміна стану</td>
<td><em>sprechen → ver<strong>sprechen</strong></em> (обіцяти; <em>sich versprechen</em> — обмовитися),
<em>schwinden → ver<strong>schwinden</strong></em> (зникати),
<em>besser → ver<strong>bessern</strong></em> (покращувати)</td></tr>
<tr><td><strong>ent-</strong></td><td>віддалення, позбавлення, «від-»</td>
<td><em>laden → ent<strong>laden</strong></em> (розвантажувати),
<em>decken → ent<strong>decken</strong></em> (відкривати),
<em>lassen → ent<strong>lassen</strong></em> (звільняти з роботи)</td></tr>
<tr><td><strong>zer-</strong></td><td>руйнування, розпад на частини</td>
<td><em>brechen → zer<strong>brechen</strong></em> (розбивати),
<em>stören → zer<strong>stören</strong></em> (руйнувати),
<em>reißen → zer<strong>reißen</strong></em> (роздирати)</td></tr>
<tr><td><strong>er-</strong></td><td>початок, досягнення результату</td>
<td><em>kennen → er<strong>kennen</strong></em> (розпізнавати),
<em>arbeiten → er<strong>arbeiten</strong></em> (здобувати працею),
<em>finden → er<strong>finden</strong></em> (винаходити)</td></tr>
<tr><td><strong>miss-</strong></td><td>невдача, неправильність</td>
<td><em>verstehen → miss<strong>verstehen</strong></em> (не так зрозуміти),
<em>trauen → miss<strong>trauen</strong></em> (не довіряти)</td></tr>
<tr><td><strong>über-</strong></td><td>надмір або перехід через межу</td>
<td><em>sehen → über<strong>sehen</strong></em> (не помітити),
<em>treiben → über<strong>treiben</strong></em> (перебільшувати)</td></tr>
<tr><td><strong>unter-</strong></td><td>нижче норми, приховано</td>
<td><em>schätzen → unter<strong>schätzen</strong></em> (недооцінювати),
<em>drücken → unter<strong>drücken</strong></em> (пригнічувати)</td></tr>
</tbody></table>
<div class="callout"><strong>Обережно: логіка допомагає, але не гарантує.</strong>
Багато слів пішли від початкового значення далеко: <em>versprechen</em> — «обіцяти»,
хоча <em>ver-</em> «хибності» видно лише у зворотному <em>sich versprechen</em> — «обмовитися».
Тому префікс — це підказка для здогаду, а не словник.</div>`,
    },
    {
      title: '2. Суфікси іменників: рід за будовою',
      html: `
<p>Величезна перевага німецької: у більшості випадків <strong>суфікс однозначно
задає рід</strong>. Це знімає найбільшу проблему тих, хто вчить мову.</p>
<table>
<thead><tr><th>Суфікс</th><th>Рід</th><th>Значення</th><th>Приклади</th></tr></thead>
<tbody>
<tr><td><strong>-ung</strong></td><td><strong>die</strong></td><td>дія або її результат</td>
<td><em>die Lösung, die Regelung, die Wohnung</em></td></tr>
<tr><td><strong>-heit, -keit</strong></td><td><strong>die</strong></td><td>властивість</td>
<td><em>die Freiheit, die Möglichkeit, die Einsamkeit</em></td></tr>
<tr><td><strong>-schaft</strong></td><td><strong>die</strong></td><td>спільність, стан</td>
<td><em>die Freundschaft, die Gesellschaft, die Mannschaft</em></td></tr>
<tr><td><strong>-tion, -ität, -ie, -ur</strong></td><td><strong>die</strong></td><td>запозичені</td>
<td><em>die Situation, die Qualität, die Energie, die Kultur</em></td></tr>
<tr><td><strong>-nis</strong></td><td><strong>das</strong> (частіше)</td><td>результат, стан</td>
<td><em>das Ergebnis, das Verhältnis, das Erlebnis</em></td></tr>
<tr><td><strong>-tum</strong></td><td><strong>das</strong></td><td>сукупність, стан</td>
<td><em>das Eigentum, das Wachstum</em> (виняток: <em>der Irrtum, der Reichtum</em>)</td></tr>
<tr><td><strong>-chen, -lein</strong></td><td><strong>das</strong></td><td>зменшення</td>
<td><em>das Mädchen, das Häuschen</em></td></tr>
<tr><td><strong>-er, -ling</strong></td><td><strong>der</strong></td><td>особа або пристрій</td>
<td><em>der Lehrer, der Drucker, der Lehrling</em></td></tr>
<tr><td><strong>-ismus, -ant, -ent, -ist</strong></td><td><strong>der</strong></td><td>напрям або особа</td>
<td><em>der Kapitalismus, der Praktikant, der Student, der Journalist</em></td></tr>
</tbody></table>
<div class="callout callout--tip"><strong>Практичний висновок.</strong> Побачивши незнайоме
слово на <em>-heit</em>, ви вже знаєте: це <em>die</em>, це абстрактна властивість,
і корінь — прикметник. <em>die Gelassenheit</em> ← <em>gelassen</em> (спокійний) —
«спокій, врівноваженість». Такий розбір швидший за словник.</div>`,
    },
    {
      title: '3. Прикметникові суфікси й родини слів',
      html: `
<p>Від одного кореня німецька будує цілу <strong>родину слів</strong> (<em>Wortfamilie</em>).
Уміння її розгортати — це те, що на іспиті рятує, коли потрібного слова не пригадуєш.</p>
<table>
<thead><tr><th>Корінь</th><th>Дієслово</th><th>Іменник</th><th>Прикметник</th></tr></thead>
<tbody>
<tr><td><em>-arbeit-</em></td><td><em>arbeiten, bearbeiten, erarbeiten</em></td>
<td><em>die Arbeit, der Arbeiter, die Bearbeitung, der Arbeitgeber</em></td>
<td><em>arbeitsam, arbeitslos, arbeitsfähig</em></td></tr>
<tr><td><em>-such-</em></td><td><em>suchen, versuchen, untersuchen, besuchen</em></td>
<td><em>die Suche, der Versuch, die Untersuchung, der Besuch</em></td>
<td><em>versuchsweise, unversucht</em></td></tr>
<tr><td><em>-halt-</em></td><td><em>halten, behalten, erhalten, verhalten, einhalten</em></td>
<td><em>der Halt, das Verhalten, der Erhalt, der Inhalt, die Haltung</em></td>
<td><em>haltbar, unhaltbar, inhaltlich</em></td></tr>
<tr><td><em>-teil-</em></td><td><em>teilen, verteilen, mitteilen, beteiligen</em></td>
<td><em>der Teil, die Verteilung, die Mitteilung, die Beteiligung, das Urteil</em></td>
<td><em>teilweise, unteilbar, beteiligt</em></td></tr>
</tbody></table>
<p><strong>Головні прикметникові суфікси:</strong></p>
<table>
<thead><tr><th>Суфікс</th><th>Значення</th><th>Приклади</th></tr></thead>
<tbody>
<tr><td><strong>-ig</strong></td><td>наявність якості</td><td><em>mutig</em> (смілий), <em>sonnig</em> (сонячний)</td></tr>
<tr><td><strong>-lich</strong></td><td>приналежність або можливість</td><td><em>freundlich</em>, <em>monatlich</em>, <em>verständlich</em></td></tr>
<tr><td><strong>-isch</strong></td><td>походження, характер</td><td><em>praktisch</em>, <em>kritisch</em>, <em>kindisch</em> (по-дитячому)</td></tr>
<tr><td><strong>-haft</strong></td><td>подібність</td><td><em>vorteilhaft</em>, <em>zweifelhaft</em>, <em>fehlerhaft</em></td></tr>
<tr><td><strong>-sam</strong></td><td>схильність</td><td><em>sparsam</em>, <em>aufmerksam</em>, <em>langsam</em></td></tr>
</tbody></table>
<div class="callout"><strong>Пильнуйте пари на <em>-lich</em> і <em>-isch</em>.</strong>
Вони можуть значити різне: <em>kindlich</em> — «дитячий, властивий дитині» (нейтрально),
<em>kindisch</em> — «інфантильний» (негативно). Так само <em>geistlich</em> (духовний,
церковний) і <em>geistig</em> (розумовий).</div>`,
    },
    {
      title: '4. Складені іменники: як розбирати довге слово',
      html: `
<p>Німецький складений іменник читають <strong>справа наліво</strong>:
останній компонент задає рід і головне значення, попередні уточнюють.</p>
<table>
<thead><tr><th>Слово</th><th>Розбір</th><th>Переклад</th></tr></thead>
<tbody>
<tr><td><em>die Arbeitserlaubnis</em></td><td>Arbeit + s + <u>Erlaubnis</u></td><td>дозвіл (який?) на роботу</td></tr>
<tr><td><em>der Krankenversicherungsbeitrag</em></td><td>Kranken + Versicherung + s + <u>Beitrag</u></td>
<td>внесок (який?) медичного страхування</td></tr>
<tr><td><em>die Geschwindigkeitsbeschränkung</em></td><td>Geschwindigkeit + s + <u>Beschränkung</u></td>
<td>обмеження (чого?) швидкості</td></tr>
<tr><td><em>der Mietvertragsabschluss</em></td><td>Miet + Vertrag + s + <u>Abschluss</u></td>
<td>укладення договору найму</td></tr>
</tbody></table>
<p><strong>Сполучні елементи</strong> між частинами: <em>-s-</em> (найчастіше),
<em>-n-</em>, <em>-en-</em>, <em>-es-</em>, або нічого. Правил тут майже немає —
це запам’ятовують разом зі словом. Але для <u>розуміння</u> вони не важливі:
просто відкиньте їх і читайте корені.</p>
<div class="callout callout--tip"><strong>Техніка на іспиті.</strong> Побачивши слово
на двадцять літер, не панікуйте: знайдіть <u>останній</u> корінь — і ви вже знаєте,
про що йдеться. <em>…beschränkung</em> — про обмеження. <em>…genehmigung</em> — про дозвіл.
<em>…verordnung</em> — про постанову. Деталі дадуть попередні частини.</div>
<p><strong>Наголос</strong> у складеному іменнику завжди на <u>першому</u> компоненті:
<em><u>AR</u>beitserlaubnis</em>, <em><u>GE</u>schwindigkeitsbeschränkung</em>.
Це помітно на слух і допомагає в частині Hören.</p>`,
    },
    {
      title: '5. Слова з прикладів цієї теми',
      html: `
<table>
<thead><tr><th>Слово</th><th>Переклад</th><th>Як ужито в темі</th></tr></thead>
<tbody>
<tr><td><em>bearbeiten</em></td><td>опрацьовувати</td><td>Приклад префікса <em>be-</em>.</td></tr>
<tr><td><em>entlassen</em></td><td>звільняти з роботи</td><td>Приклад префікса <em>ent-</em>.</td></tr>
<tr><td><em>zerreißen</em></td><td>роздирати</td><td>Приклад префікса <em>zer-</em>.</td></tr>
<tr><td><em>unterschätzen</em></td><td>недооцінювати</td><td>Приклад префікса <em>unter-</em>.</td></tr>
<tr><td><em>die Gelassenheit</em></td><td>врівноваженість</td><td>Розбір суфікса <em>-heit</em>.</td></tr>
<tr><td><em>das Verhältnis, -se</em></td><td>співвідношення; стосунки</td><td>Приклад суфікса <em>-nis</em>.</td></tr>
<tr><td><em>zweifelhaft</em></td><td>сумнівний</td><td>Приклад суфікса <em>-haft</em>.</td></tr>
<tr><td><em>die Arbeitserlaubnis</em></td><td>дозвіл на роботу</td><td>Розбір складеного іменника.</td></tr>
<tr><td><em>die Beschränkung, -en</em></td><td>обмеження</td><td>Останній корінь у довгому слові.</td></tr>
<tr><td><em>der Beitrag, ¨-e</em></td><td>внесок</td><td>Останній корінь у <em>Krankenversicherungsbeitrag</em>.</td></tr>
</tbody></table>`,
    },
  ],
  exercises: [
    { type: 'gap', q: 'Префікс «діяти на об’єкт»: eine Frage ___antworten', answers: ['be'] },
    { type: 'gap', q: 'Префікс руйнування: das Glas ___brechen', answers: ['zer'] },
    { type: 'gap', q: 'Префікс «від-, позбавлення»: einen Mitarbeiter ___lassen', answers: ['ent'] },
    { type: 'gap', q: 'Префікс «нижче норми»: die Gefahr ___schätzen', answers: ['unter'] },
    { type: 'gap', q: 'Суфікс властивості: möglich → die Möglich___', answers: ['keit'] },
    { type: 'gap', q: 'Суфікс дії: lösen → die Lös___', answers: ['ung'] },
    { type: 'gap', q: 'Суфікс: das Ergeb___ (результат)', answers: ['nis'] },
    { type: 'choice', q: 'Який рід у слова на <span class="de-inline">-heit</span>?',
      options: ['der', 'die', 'das', 'залежить від кореня'], answer: 1 },
    { type: 'choice', q: 'Останній корінь визначає:',
      options: ['наголос', 'рід і головне значення', 'сполучний елемент', 'нічого'], answer: 1 },
    { type: 'choice', q: 'Наголос у складеному іменнику падає на:',
      options: ['останній компонент', 'перший компонент', 'сполучний -s-', 'середину'], answer: 1 },
    { type: 'choice', q: '<span class="de-inline">kindisch</span> означає:',
      options: ['дитячий, властивий дитині', 'інфантильний', 'дитинячий у доброму сенсі', 'малий'],
      answer: 1 },
    { type: 'choice', q: '<span class="de-inline">übersehen</span> означає:',
      options: ['оглянути зверху', 'не помітити', 'передивитися', 'наглядати'], answer: 1 },
    { type: 'match', q: 'Доберіть значення префікса.',
      pairs: [['be-', 'робить дієслово перехідним'], ['zer-', 'руйнування'],
        ['ent-', 'позбавлення, віддалення'], ['er-', 'досягнення результату'],
        ['miss-', 'невдача'], ['über-', 'надмір']] },
    { type: 'multi', q: 'Позначте іменники жіночого роду за суфіксом.',
      options: ['die Freiheit', 'das Ergebnis', 'die Regelung', 'der Lehrling', 'die Gesellschaft'],
      answers: [0, 2, 4] },
    { type: 'truefalse', q: 'Складений іменник читають справа наліво.', answer: true },
  ],

  listening: [
    {
      exam: 'Goethe C1 · Hören Teil 1',
      title: 'Sprachkurs für Fortgeschrittene: Wörter zerlegen',
      instruction: 'Викладачка показує, як розбирати незнайомі слова. Слухайте техніку.',
      lines: [
        { speaker: 'Dozentin', de: 'Sie werden im Prüfungstext auf Wörter stoßen, die Sie nie gesehen haben. Panik hilft nicht, Zerlegen hilft.', uk: 'У тексті іспиту ви натрапите на слова, яких ніколи не бачили. Паніка не допомагає, розбір допомагає.' },
        { speaker: 'Teilnehmer', de: 'Bei «Geschwindigkeitsbeschränkung» habe ich sofort aufgegeben.', uk: 'На «Geschwindigkeitsbeschränkung» я відразу здався.' },
        { speaker: 'Dozentin', de: 'Genau der falsche Reflex. Lesen Sie von hinten: Beschränkung — es geht um eine Grenze. Und Geschwindigkeit kennen Sie.', uk: 'Саме хибний рефлекс. Читайте з кінця: Beschränkung — ідеться про межу. А Geschwindigkeit ви знаєте.' },
        { speaker: 'Teilnehmerin', de: 'Und bei Verben? «Unterschätzen» habe ich als «unten schätzen» gelesen.', uk: 'А з дієсловами? «Unterschätzen» я прочитала як «оцінювати внизу».' },
        { speaker: 'Dozentin', de: 'Da ist die Logik sogar hilfreich: unter- heißt unter der Norm. Also die Gefahr zu niedrig einschätzen.', uk: 'Тут логіка навіть корисна: unter- означає нижче норми. Тобто оцінювати небезпеку занизько.' },
        { speaker: 'Teilnehmer', de: 'Funktioniert das immer?', uk: 'Це завжди працює?' },
        { speaker: 'Dozentin', de: 'Nein. «Versprechen» heißt nicht falsch sprechen, sondern etwas zusagen. Der Präfix ist ein Hinweis, kein Beweis.', uk: 'Ні. «Versprechen» означає не «неправильно говорити», а обіцяти. Префікс — це підказка, не доказ.' },
        { speaker: 'Teilnehmerin', de: 'Und wie merke ich mir das Genus?', uk: 'А як мені запам’ятати рід?' },
        { speaker: 'Dozentin', de: 'Über das Suffix. Alles auf -ung, -heit, -keit, -schaft ist feminin — das sind Tausende Wörter mit einer Regel.', uk: 'Через суфікс. Усе на -ung, -heit, -keit, -schaft — жіночого роду; це тисячі слів за одним правилом.' },
      ],
      tasks: [
        { type: 'choice', q: 'Wie soll man ein langes Kompositum lesen?',
          options: ['Von vorn', 'Von hinten', 'Nur die Mitte', 'Man soll es überspringen'], answer: 1 },
        { type: 'choice', q: 'Was bedeutet «unterschätzen» laut Dozentin?',
          options: ['zu hoch einschätzen', 'zu niedrig einschätzen',
            'gar nicht einschätzen', 'unten messen'], answer: 1 },
        { type: 'choice', q: 'Was sagt sie über Präfixe?',
          options: ['Sie sind ein Beweis', 'Sie sind ein Hinweis, kein Beweis',
            'Sie sind nutzlos', 'Sie bestimmen das Genus'], answer: 1 },
        { type: 'gap', q: 'Alles auf -ung, -heit, -keit, -schaft ist ___. (рід)', answers: ['feminin'] },
        { type: 'multi', q: 'Welche Suffixe nennt die Dozentin für feminin?',
          options: ['-ung', '-heit', '-nis', '-keit', '-schaft'],
          answers: [0, 1, 3, 4] },
      ],
    },
  ],

  writing: [
    {
      exam: 'ÖSD C1 · Schreiben',
      title: 'Sachtext: Wortschatz selbst erarbeiten',
      situation: 'Ви пишете для мовного блогу коротку методичну статтю: як самостійно розширювати словник через словотвір. <strong>150–180 слів</strong>. Наведіть щонайменше два конкретні приклади розбору й один приклад родини слів.',
      points: [
        'Formulieren Sie das Problem.',
        'Erklären Sie die Technik am Beispiel eines Kompositums.',
        'Erklären Sie die Technik am Beispiel eines Präfixes.',
        'Nennen Sie die Grenze der Methode.',
      ],
      minWords: 150,
      phrases: [
        { de: 'Wer Zeitungen liest, stößt täglich auf unbekannte Wörter.', uk: 'Хто читає газети, щодня натрапляє на незнайомі слова.' },
        { de: 'Ein Kompositum liest man von hinten nach vorn.', uk: 'Складений іменник читають з кінця до початку.' },
        { de: 'Das letzte Glied bestimmt Genus und Grundbedeutung.', uk: 'Останній компонент визначає рід і головне значення.' },
        { de: 'Alle Wörter auf -heit und -keit sind feminin.', uk: 'Усі слова на -heit і -keit — жіночого роду.' },
        { de: 'Aus einem Stamm lässt sich eine ganze Wortfamilie ableiten.', uk: 'Від одного кореня можна вивести цілу родину слів.' },
        { de: 'Die Methode hat allerdings eine Grenze.', uk: 'Проте метод має межу.' },
      ],
      checklist: [
        'Є конкретний розбір складеного іменника з поясненням?',
        'Є приклад із префіксом і його логікою?',
        'Є приклад родини слів від одного кореня?',
        'Названо межу методу (де здогад не працює)?',
        'Обсяг 150–180 слів, тон нейтрально-пояснювальний?',
      ],
      model:
`Wer deutsche Zeitungen liest, stößt täglich auf Wörter, die in keinem Kurs vorkamen.
Ein Wörterbuch hilft, kostet aber Zeit. Schneller ist es, die Wörter zu zerlegen.

Ein zusammengesetztes Substantiv liest man von hinten nach vorn. In «Geschwindigkeitsbeschränkung»
steht am Ende «Beschränkung»: Es geht also um eine Grenze, das Wort ist feminin, und der erste
Teil sagt nur, wovon die Grenze gilt. Nach diesem Prinzip erschließt sich fast jedes Behördenwort.

Bei Verben hilft das Präfix. «Unter-» bedeutet unterhalb der Norm, deshalb heißt «unterschätzen»,
etwas zu niedrig einzuschätzen. «Zer-» steht für Zerfall, «ent-» für Wegnahme. Wer diese Logik kennt,
errät die Richtung auch bei unbekannten Verben.

Besonders ergiebig sind Wortfamilien: aus «halten» entstehen «behalten», «erhalten», «Verhalten»,
«Inhalt» und «haltbar» — fünf Einträge für einen Stamm.

Nützlich sind außerdem die Suffixe: Alles auf -heit, -keit und -schaft ist feminin, alles auf
-chen ist neutral. Das sind tausende Wörter, deren Genus man nicht einzeln lernen muss.

Die Methode hat allerdings eine Grenze. «Versprechen» heißt nicht falsch sprechen, sondern zusagen.
Das Präfix liefert eine Vermutung, keine Übersetzung — prüfen muss man sie am Kontext.`,
      modelUk: 'Переклад: Хто читає німецькі газети, щодня натрапляє на слова, яких не було на жодному курсі. Словник допомагає, але коштує часу. Швидше — розкладати слова на частини. Складений іменник читають з кінця до початку. У «Geschwindigkeitsbeschränkung» у кінці стоїть «Beschränkung»: отже, йдеться про межу, слово жіночого роду, а перша частина лише каже, чого ця межа стосується. За цим принципом розкривається майже будь-яке чиновницьке слово. У дієсловах допомагає префікс. «Unter-» означає нижче норми, тому «unterschätzen» — це оцінювати щось занизько. «Zer-» означає розпад, «ent-» — відібрання. Хто знає цю логіку, вгадує напрям і в незнайомих дієсловах. Особливо продуктивні родини слів: від «halten» виникають «behalten», «erhalten», «Verhalten», «Inhalt» і «haltbar» — п’ять одиниць на один корінь. Проте метод має межу. «Versprechen» означає не «неправильно говорити», а обіцяти. Префікс дає припущення, не переклад — перевіряти його треба контекстом.',
    },
  ],

  test: [
    { type: 'gap', q: 'Префікс надміру: die Zahlen ___treiben (перебільшувати)', answers: ['über'] },
    { type: 'gap', q: 'Префікс невдачі: jemanden ___verstehen', answers: ['miss'] },
    { type: 'gap', q: 'Префікс досягнення: einen Ausweg ___kennen', answers: ['er'] },
    { type: 'gap', q: 'Суфікс: zuverlässig → die Zuverlässig___', answers: ['keit'] },
    { type: 'gap', q: 'Суфікс: bereit → die Bereit___', answers: ['schaft'] },
    { type: 'gap', q: 'Родина слів від halten: der ___halt (зміст тексту)', answers: ['In'] },
    { type: 'choice', q: 'Який рід у <span class="de-inline">das Ergebnis</span> за суфіксом?',
      options: ['-nis дає переважно das', '-nis дає die', '-nis дає der', 'суфікс не впливає'],
      answer: 0 },
    { type: 'choice', q: '<span class="de-inline">geistlich</span> означає:',
      options: ['розумовий', 'духовний, церковний', 'дотепний', 'привидний'], answer: 1 },
    { type: 'choice', q: 'Що визначає рід складеного іменника?',
      options: ['перший компонент', 'останній компонент', 'сполучний елемент', 'наголос'],
      answer: 1 },
    { type: 'order', q: 'Складіть речення.',
      words: ['Ein', 'Kompositum', 'liest', 'man', 'von', 'hinten', 'nach', 'vorn'],
      answer: 'Ein Kompositum liest man von hinten nach vorn' },
    { type: 'match', q: 'Доберіть переклад.',
      pairs: [['die Gelassenheit', 'врівноваженість'], ['zweifelhaft', 'сумнівний'],
        ['nachträglich', 'зроблений потім'], ['die Bereitschaft', 'готовність'],
        ['sparsam', 'ощадливий'], ['das Wachstum', 'зростання']] },
    { type: 'multi', q: 'Позначте слова однієї родини з <span class="de-inline">halten</span>.',
      options: ['behalten', 'Verhalten', 'Haltung', 'Handlung', 'haltbar'],
      answers: [0, 1, 2, 4] },
    { type: 'truefalse', q: 'Префікс дає надійний переклад незнайомого дієслова.',
      answer: false,
      explain: 'Він дає лише припущення — перевіряти треба контекстом.' },
    { type: 'truefalse', q: 'Усі іменники на <span class="de-inline">-schaft</span> — жіночого роду.',
      answer: true },
  ],
};

const m8 = {
  id: 'm8',
  title: 'Stilebenen und Textsorten',
  titleUk: 'Стилістичні рівні й типи текстів: як перемикати реєстр',
  can: [
    'розпізнавати п’ять стилістичних рівнів',
    'переписувати той самий зміст в іншому реєстрі',
    'коректно цитувати й переказувати чужу думку',
    'уживати засоби дистанції та обережності',
    'обирати структуру відповідно до типу тексту',
  ],

  grammar: [
    {
      title: '1. П’ять рівнів того самого змісту',
      html: `
<p>На C1 оцінюють не «складність» мови, а <strong>відповідність</strong> тексту його
призначенню. Ось один зміст у п’яти реєстрах.</p>
<table>
<thead><tr><th>Реєстр</th><th>Приклад</th><th>Де доречно</th></tr></thead>
<tbody>
<tr><td><strong>розмовний, фамільярний</strong></td>
<td><em>Der Termin ist geplatzt, wir müssen das nochmal neu machen.</em>
<span class="uk">Зустріч накрилася, треба все переробити.</span></td>
<td>чат із колегою, розмова</td></tr>
<tr><td><strong>нейтральний</strong></td>
<td><em>Der Termin hat nicht stattgefunden; wir müssen einen neuen finden.</em>
<span class="uk">Зустріч не відбулася; треба знайти нову дату.</span></td>
<td>звичайний імейл, стаття в блозі</td></tr>
<tr><td><strong>формальний</strong></td>
<td><em>Der Termin musste abgesagt werden. Wir bitten um einen neuen Vorschlag.</em>
<span class="uk">Зустріч довелося скасувати. Просимо про нову пропозицію.</span></td>
<td>ділове листування</td></tr>
<tr><td><strong>офіційно-канцелярський</strong></td>
<td><em>Der Termin konnte nicht wahrgenommen werden; um Mitteilung eines Ersatztermins wird gebeten.</em>
<span class="uk">Зустріч не могла відбутися; просимо повідомити альтернативну дату.</span></td>
<td>відомство, договір</td></tr>
<tr><td><strong>науковий</strong></td>
<td><em>Die Terminverschiebung ist auf organisatorische Gründe zurückzuführen.</em>
<span class="uk">Перенесення зустрічі зумовлене організаційними причинами.</span></td>
<td>звіт, дослідження</td></tr>
</tbody></table>
<div class="callout"><strong>Помилка рівня C1 — не граматична, а стилістична.</strong>
Канцелярський зворот у листі другові й розмовне <em>geplatzt</em> у діловому листі —
обидва однаково недоречні. Екзаменатор знижує оцінку саме за це, а не за складність.</div>`,
    },
    {
      title: '2. Ознаки реєстру: за чим його видно',
      html: `
<table>
<thead><tr><th>Ознака</th><th>Розмовний</th><th>Офіційний</th></tr></thead>
<tbody>
<tr><td>дієслово чи іменник</td><td>дієслово: <em>Wir haben entschieden.</em></td>
<td>іменник: <em>Es wurde eine Entscheidung getroffen.</em></td></tr>
<tr><td>активний / пасивний стан</td><td>активний, є «я» і «ти»</td><td>пасив і безособові конструкції</td></tr>
<tr><td>частки</td><td>багато: <em>ja, doch, mal, eben</em></td><td>жодних</td></tr>
<tr><td>підсилювачі</td><td><em>total, echt, riesig, mega</em></td><td><em>erheblich, beträchtlich, deutlich</em></td></tr>
<tr><td>скорочення</td><td><em>gibt’s, hab’, ’ne</em></td><td>ніколи</td></tr>
<tr><td>речення</td><td>короткі, паратаксис</td><td>довгі, гіпотаксис із означеннями</td></tr>
<tr><td>звертання</td><td><em>Hallo Max</em>, <em>Hi</em></td><td><em>Sehr geehrte Damen und Herren</em></td></tr>
<tr><td>оцінка</td><td>пряма: <em>Das ist schlecht.</em></td><td>дистанційована: <em>Das erscheint problematisch.</em></td></tr>
</tbody></table>
<p><strong>Слова-індикатори офіційного стилю</strong>, які варто знати активно:</p>
<ul>
<li><em>erfolgen</em> замість «відбуватися»: <em>Die Auszahlung erfolgt im Mai.</em></li>
<li><em>vorliegen</em> замість «бути»: <em>Die Unterlagen liegen vor.</em></li>
<li><em>zurückzuführen sein auf</em> замість «через»: <em>Der Fehler ist auf einen Defekt zurückzuführen.</em></li>
<li><em>Kenntnis erlangen von</em> замість «дізнатися»</li>
<li><em>hinsichtlich</em>, <em>bezüglich</em>, <em>gemäß</em>, <em>laut</em> замість «щодо», «за»</li>
</ul>
<div class="callout callout--tip"><strong>Вправа, що найшвидше піднімає рівень.</strong>
Візьміть власний абзац і перепишіть його двічі: раз максимально розмовно,
раз максимально офіційно. Через десять таких пар ви почнете відчувати реєстр
без обдумування — а це саме те, що перевіряють у Schreiben.</div>`,
    },
    {
      title: '3. Цитування й переказ чужої думки',
      html: `
<p>У науковому й публіцистичному тексті потрібно чітко відділяти свою думку від чужої.
Німецька має для цього повний набір засобів.</p>
<table>
<thead><tr><th>Спосіб</th><th>Приклад</th><th>Дистанція</th></tr></thead>
<tbody>
<tr><td><strong>пряма цитата</strong></td><td><em>Müller schreibt: «Die Daten sind eindeutig.»</em></td>
<td>максимальна точність</td></tr>
<tr><td><strong>непряма мова, Konjunktiv I</strong></td><td><em>Müller schreibt, die Daten <strong>seien</strong> eindeutig.</em></td>
<td>нейтральний переказ, без власної оцінки</td></tr>
<tr><td><strong>непряма мова з dass</strong></td><td><em>Müller schreibt, dass die Daten eindeutig <strong>sind</strong>.</em></td>
<td>переказ; Indikativ = ви теж так вважаєте</td></tr>
<tr><td><strong>іменникова формула</strong></td><td><em>Nach Müller sind die Daten eindeutig.</em></td>
<td>компактно, часто в науці</td></tr>
<tr><td><strong>дистанція через zufolge</strong></td><td><em>Müller <strong>zufolge</strong> sind die Daten eindeutig.</em></td>
<td>«за Мюллером», нейтрально</td></tr>
<tr><td><strong>сумнів</strong></td><td><em>Müller <strong>will</strong> gezeigt haben, dass …</em></td>
<td>«нібито показав» — виразний скепсис</td></tr>
</tbody></table>
<div class="callout"><strong>Тонка, але важлива деталь.</strong> Konjunktiv I
(<em>seien</em>) сигналізує: «це його слова, я їх не підтверджую».
Indikativ у тому самому реченні (<em>sind</em>) означає, що ви приймаєте твердження
як факт. Це різниця в один звук — і в усю позицію автора. Тому в академічному тексті
переказ роблять саме Konjunktiv I.</div>
<p><strong>Дієслова введення цитати</strong> теж несуть оцінку:
<em>feststellen</em> (констатувати — нейтрально), <em>betonen</em> (наголошувати — погоджуюсь),
<em>behaupten</em> (стверджувати — сумніваюсь), <em>einräumen</em> (визнавати — це поступка),
<em>kritisieren</em>, <em>bezweifeln</em>.</p>`,
    },
    {
      title: '4. Структура за типом тексту',
      html: `
<p>Кожен жанр має власний каркас. Знання каркаса економить на іспиті найбільше часу.</p>
<table>
<thead><tr><th>Тип тексту</th><th>Структура</th><th>Реєстр</th></tr></thead>
<tbody>
<tr><td><strong>Erörterung</strong> (аргументативний твір)</td>
<td>теза → аргумент «за» → визнання протилежного → заперечення → обмеження власної тези → висновок</td>
<td>нейтрально-формальний</td></tr>
<tr><td><strong>Leserbrief</strong></td>
<td>покликання на статтю → власна позиція → 2 аргументи з прикладом → заклик або пропозиція</td>
<td>формальний, але живий</td></tr>
<tr><td><strong>Zusammenfassung</strong></td>
<td>джерело й тема одним реченням → головні тези без прикладів → без власної оцінки</td>
<td>нейтральний, Konjunktiv I</td></tr>
<tr><td><strong>Stellungnahme</strong> у роботі</td>
<td>предмет → оцінка → обґрунтування → рекомендація</td>
<td>формальний</td></tr>
<tr><td><strong>Bericht</strong></td>
<td>що, коли, де, хто → перебіг у хронології → результат → відкриті питання</td>
<td>офіційний, пасив</td></tr>
<tr><td><strong>Anleitung</strong></td>
<td>мета → передумови → кроки в порядку → винятки</td>
<td>безособовий: <em>ist zu</em>, <em>lässt sich</em></td></tr>
</tbody></table>
<div class="callout callout--tip"><strong>Що екзаменатор бачить першими очима.</strong>
Абзаци. Якщо текст — одна суцільна стіна, оцінка падає ще до читання.
Один абзац — одна функція: теза, аргумент, заперечення, висновок.
І в резюме (<em>Zusammenfassung</em>) головна помилка — додати власну думку;
цього там не має бути взагалі.</div>`,
    },
    {
      title: '5. Слова з прикладів цієї теми',
      html: `
<table>
<thead><tr><th>Слово</th><th>Переклад</th><th>Як ужито в темі</th></tr></thead>
<tbody>
<tr><td><em>platzen (розм.)</em></td><td>накритися, зірватися</td><td><em>Der Termin ist geplatzt.</em></td></tr>
<tr><td><em>wahrnehmen</em></td><td>скористатися, відбути (зустріч)</td><td><em>Der Termin konnte nicht wahrgenommen werden.</em></td></tr>
<tr><td><em>zurückzuführen sein auf + Akk.</em></td><td>бути зумовленим чимось</td><td><em>… ist auf organisatorische Gründe zurückzuführen.</em></td></tr>
<tr><td><em>erfolgen</em></td><td>відбуватися (офіційно)</td><td><em>Die Auszahlung erfolgt im Mai.</em></td></tr>
<tr><td><em>vorliegen</em></td><td>бути наявним</td><td><em>Die Unterlagen liegen vor.</em></td></tr>
<tr><td><em>zufolge</em> + Dat.</td><td>за (словами), згідно з</td><td><em>Müller zufolge sind die Daten eindeutig.</em></td></tr>
<tr><td><em>behaupten</em></td><td>стверджувати (з відтінком сумніву)</td><td>Дієслово введення цитати.</td></tr>
<tr><td><em>einräumen</em></td><td>визнавати</td><td>Дієслово введення цитати.</td></tr>
<tr><td><em>feststellen</em></td><td>констатувати</td><td>Нейтральне введення цитати.</td></tr>
<tr><td><em>der Ersatztermin, -e</em></td><td>альтернативна дата</td><td><em>… um Mitteilung eines Ersatztermins wird gebeten.</em></td></tr>
</tbody></table>`,
    },
  ],
  exercises: [
    { type: 'gap', q: 'Офіційно замість «passiert»: Die Auszahlung ___ im Mai.', answers: ['erfolgt'] },
    { type: 'gap', q: 'Офіційно замість «ist da»: Die Unterlagen ___ vor.', answers: ['liegen'] },
    { type: 'gap', q: 'Офіційно замість «wegen»: Der Fehler ist auf einen Defekt ___.',
      answers: ['zurückzuführen'] },
    { type: 'gap', q: 'Непряма мова, Konjunktiv I: Müller schreibt, die Daten ___ eindeutig.',
      answers: ['seien'] },
    { type: 'gap', q: '«за Мюллером»: Müller ___ sind die Daten eindeutig.', answers: ['zufolge'] },
    { type: 'gap', q: 'Книжний відповідник до «kriegen»: ___', answers: ['erhalten|bekommen'] },
    { type: 'choice', q: 'Який зворот НЕ належить офіційному реєстру?',
      options: ['Die Auszahlung erfolgt.', 'Der Termin ist geplatzt.',
        'Die Unterlagen liegen vor.', 'Um Mitteilung wird gebeten.'], answer: 1 },
    { type: 'choice', q: 'Що сигналізує Konjunktiv I у переказі?',
      options: ['автор погоджується', 'це чужі слова, автор їх не підтверджує',
        'це сумнівно', 'це наказ'], answer: 1 },
    { type: 'choice', q: 'Яке дієслово введення цитати виражає скепсис?',
      options: ['feststellen', 'betonen', 'behaupten', 'einräumen'], answer: 2 },
    { type: 'choice', q: 'Чого НЕ має бути в Zusammenfassung?',
      options: ['теми одним реченням', 'головних тез', 'власної оцінки', 'назви джерела'],
      answer: 2 },
    { type: 'choice', q: 'Ознака розмовного реєстру:',
      options: ['пасив', 'модальні частки', 'номіналізація', 'zufolge'], answer: 1 },
    { type: 'order', q: 'Складіть офіційне речення.',
      words: ['Um', 'Mitteilung', 'eines', 'Ersatztermins', 'wird', 'gebeten'],
      answer: 'Um Mitteilung eines Ersatztermins wird gebeten' },
    { type: 'match', q: 'Доберіть книжний відповідник.',
      pairs: [['kriegen', 'erhalten'], ['reden', 'sich äußern'], ['gucken', 'betrachten'],
        ['jetzt', 'derzeit'], ['total', 'erheblich'], ['Sachen', 'Angelegenheiten']] },
    { type: 'multi', q: 'Позначте ознаки офіційного стилю.',
      options: ['пасив і безособові конструкції', 'модальні частки',
        'номіналізація', 'скорочення на кшталт «gibt’s»', 'дистанційована оцінка'],
      answers: [0, 2, 4] },
    { type: 'truefalse', q: 'Канцелярський зворот у листі другові — стилістична помилка.',
      answer: true },
  ],

  listening: [
    {
      exam: 'Goethe C1 · Hören Teil 2',
      title: 'Redaktionsgespräch: derselbe Text, zwei Fassungen',
      instruction: 'Редакторка й автор обговорюють дві версії того самого тексту.',
      lines: [
        { speaker: 'Redakteurin', de: 'Ihre erste Fassung ist lebendig, aber für die Rubrik zu locker. «Das Projekt ist geplatzt» geht so nicht.', uk: 'Ваша перша версія жива, але для рубрики надто вільна. «Проєкт накрився» так не піде.' },
        { speaker: 'Autor', de: 'Und was schlagen Sie vor? «Das Projekt wurde nicht realisiert»?', uk: 'А що Ви пропонуєте? «Проєкт не було реалізовано»?' },
        { speaker: 'Redakteurin', de: 'Genau, oder «kam nicht zustande». Neutral, aber nicht behördlich.', uk: 'Саме так, або «не відбувся». Нейтрально, але не по-чиновницьки.' },
        { speaker: 'Autor', de: 'In der zweiten Fassung habe ich es formeller gemacht. Zu formell?', uk: 'У другій версії я зробив це формальніше. Занадто формально?' },
        { speaker: 'Redakteurin', de: 'Ja, jetzt kippt es. «Die Nichtrealisierung ist auf finanzielle Gründe zurückzuführen» liest niemand freiwillig.', uk: 'Так, тепер перехиляє. «Нереалізацію зумовлено фінансовими причинами» ніхто добровільно не читає.' },
        { speaker: 'Autor', de: 'Also die Mitte. Wie erkenne ich die?', uk: 'Отже, середина. Як мені її розпізнати?' },
        { speaker: 'Redakteurin', de: 'Ein Test: Würden Sie den Satz einer Kollegin am Telefon so sagen? Wenn nein, ist er zu steif. Würden Sie ihn dem Vorstand so sagen? Wenn nein, ist er zu locker.', uk: 'Тест: чи сказали б Ви це речення колезі по телефону? Якщо ні — воно надто дубове. Чи сказали б його правлінню? Якщо ні — надто вільне.' },
        { speaker: 'Autor', de: 'Und die Zitate? Ich habe überall Indikativ.', uk: 'А цитати? У мене всюди Indikativ.' },
        { speaker: 'Redakteurin', de: 'Da müssen Sie in den Konjunktiv I. Sonst klingt es, als würden Sie jede Behauptung des Sprechers teilen.', uk: 'Тут треба перейти в Konjunktiv I. Інакше звучить, ніби Ви поділяєте кожне твердження промовця.' },
      ],
      tasks: [
        { type: 'choice', q: 'Was ist das Problem der ersten Fassung?',
          options: ['Zu formell', 'Zu locker für die Rubrik', 'Zu lang', 'Fehlende Zitate'], answer: 1 },
        { type: 'choice', q: 'Was ist das Problem der zweiten Fassung?',
          options: ['Zu locker', 'Zu behördlich', 'Zu kurz', 'Zu viele Zitate'], answer: 1 },
        { type: 'choice', q: 'Welchen Test empfiehlt die Redakteurin?',
          options: ['Den Satz laut lesen', 'Sich Telefon und Vorstand vorstellen',
            'Die Wörter zählen', 'Einen Kollegen fragen'], answer: 1 },
        { type: 'gap', q: 'Für Zitate braucht der Autor den ___ I.', answers: ['Konjunktiv'] },
        { type: 'truefalse', q: 'Indikativ im Zitat signalisiert Distanz zum Sprecher.', answer: false,
          explain: 'Навпаки — він звучить так, ніби автор поділяє твердження.' },
        { type: 'multi', q: 'Welche neutralen Varianten nennt die Redakteurin?',
          options: ['wurde nicht realisiert', 'kam nicht zustande', 'ist geplatzt',
            'Die Nichtrealisierung ist zurückzuführen auf …'],
          answers: [0, 1] },
      ],
    },
  ],

  writing: [
    {
      exam: 'Goethe C1 · Schreiben Teil 1',
      title: 'Zusammenfassung und Kommentar: zwei Register in einem Text',
      situation: 'Ви прочитали доповідь про мовну політику в школах. Напишіть текст із двох частин: <strong>резюме</strong> доповіді (нейтрально, у Konjunktiv I, без власної оцінки) і <strong>власний коментар</strong> (аргументативно). Разом <strong>180–220 слів</strong>. Позначте частини підзаголовками.',
      points: [
        'Nennen Sie Quelle und Thema in einem Satz.',
        'Geben Sie die Hauptthesen im Konjunktiv I wieder.',
        'Trennen Sie klar zur eigenen Position.',
        'Begründen Sie Ihre Position und schränken Sie sie ein.',
      ],
      minWords: 180,
      phrases: [
        { de: 'In ihrem Vortrag befasst sich Reiter mit der Sprachförderung an Grundschulen.', uk: 'У своїй доповіді Райтер розглядає мовну підтримку в початкових школах.' },
        { de: 'Reiter zufolge sei die frühe Förderung entscheidend.', uk: 'За Райтер, рання підтримка є вирішальною.' },
        { de: 'Sie räumt ein, dass Daten für ländliche Regionen fehlten.', uk: 'Вона визнає, що даних для сільських регіонів бракує.' },
        { de: 'Die Autorin betont, es komme auf die Ausbildung der Lehrkräfte an.', uk: 'Авторка наголошує, що все залежить від підготовки вчителів.' },
        { de: 'Soweit die Darstellung des Vortrags. Meiner Ansicht nach greift sie zu kurz.', uk: 'Такий виклад доповіді. На мою думку, вона недостатня.' },
        { de: 'Das gilt allerdings nur, sofern genügend Personal vorhanden ist.', uk: 'Це, щоправда, чинне лише за умови, що є достатньо персоналу.' },
      ],
      checklist: [
        'Частини чітко розділені підзаголовками?',
        'У резюме є Konjunktiv I і немає власної оцінки?',
        'У коментарі позиція сформульована прямо?',
        'Є обмеження власної тези (sofern / es sei denn / allerdings)?',
        'Обсяг 180–220 слів, реєстр витриманий у кожній частині?',
      ],
      model:
`Zusammenfassung

In ihrem Vortrag «Sprache als Schlüssel» befasst sich die Bildungsforscherin Reiter mit der
Sprachförderung an Grundschulen. Entscheidend sei nach ihrer Darstellung der Zeitpunkt: Wer bis
zum dritten Schuljahr keinen ausreichenden Wortschatz aufbaue, hole diesen Rückstand später kaum
auf. Zusätzliche Stunden allein genügten jedoch nicht; es komme vor allem auf die Ausbildung der
Lehrkräfte an. Reiter räumt ein, dass belastbare Daten für ländliche Regionen weitgehend fehlten,
und fordert deshalb eine bundesweite Erhebung.

Kommentar

Soweit die Darstellung des Vortrags. Ihre Grundthese halte ich für überzeugend, den Schluss
allerdings für zu eng. Reiter behandelt Sprachförderung als schulische Aufgabe, obwohl der
Wortschatz zu Hause entsteht. Programme, die Eltern einbeziehen, zeigen in mehreren Städten
deutlich bessere Ergebnisse als reine Zusatzstunden — und sie kosten weniger.

Zudem bleibt die Personalfrage offen. Eine bessere Ausbildung wirkt nur, sofern es überhaupt
genügend Lehrkräfte gibt; derzeit fehlt in manchen Bezirken jede vierte Stelle. Wer zusätzliche
Förderstunden ansetzt, ohne dieses Defizit zu benennen, verschiebt die Aufgabe lediglich auf
ein Kollegium, das sie nicht mehr leisten kann.

Insofern trifft Reiters Kritik zu, greift aber am falschen Ende an: Nicht die Methode ist das
Hauptproblem, sondern die Zahl der Menschen, die sie anwenden könnten.`,
      modelUk: 'Переклад: Резюме. У своїй доповіді «Мова як ключ» дослідниця освіти Райтер розглядає мовну підтримку в початкових школах. Вирішальним, за її викладом, є момент часу: хто до третього класу не набудує достатнього словникового запасу, той пізніше цього відставання майже не надолужить. Проте додаткових годин самих не досить; передусім усе залежить від підготовки вчителів. Райтер визнає, що надійних даних для сільських регіонів значною мірою бракує, і тому вимагає загальнодержавного дослідження. Коментар. Такий виклад доповіді. Її основну тезу я вважаю переконливою, а от висновок — надто вузьким. Райтер розглядає мовну підтримку як шкільне завдання, хоча словниковий запас виникає вдома. Програми, які залучають батьків, показують у кількох містах помітно кращі результати, ніж лише додаткові години, — і коштують менше. До того ж залишається відкритим питання персоналу. Краща підготовка діє лише за умови, що вчителів узагалі досить; на цей час у деяких районах бракує кожної четвертої посади. Тією мірою критика Райтер слушна, але вона заходить із хибного боку: головна проблема не метод, а кількість людей, які могли б його застосувати.',
    },
  ],

  test: [
    { type: 'gap', q: 'Офіційно: Die Zahlung ___ am Monatsende. (відбувається)', answers: ['erfolgt'] },
    { type: 'gap', q: 'Konjunktiv I: Er sagt, er ___ krank. (sein)', answers: ['sei'] },
    { type: 'gap', q: 'Konjunktiv I: Sie schreibt, sie ___ keine Zeit. (haben)', answers: ['habe'] },
    { type: 'gap', q: '«за словами експерта»: dem Experten ___', answers: ['zufolge'] },
    { type: 'gap', q: 'Книжно замість «wegen»: ___ des Vertrags (щодо, + Genitiv)',
      answers: ['hinsichtlich|bezüglich'] },
    { type: 'choice', q: 'Яке дієслово вводить цитату нейтрально?',
      options: ['behaupten', 'feststellen', 'bezweifeln', 'unterstellen'], answer: 1 },
    { type: 'choice', q: '«Müller will gezeigt haben, dass …» означає:',
      options: ['Мюллер хоче показати', 'Мюллер нібито показав',
        'Мюллер показав напевно', 'Мюллер збирається показати'], answer: 1 },
    { type: 'choice', q: 'Структура Bericht:',
      options: ['теза → аргументи → висновок', 'що/коли/де/хто → хронологія → результат',
        'мета → кроки → винятки', 'джерело → тези → оцінка'], answer: 1 },
    { type: 'choice', q: 'Що робить текст гіршим на C1?',
      options: ['абзаци за функцією', 'витриманий реєстр',
        'канцелярський зворот у дружньому листі', 'Konjunktiv I у резюме'], answer: 2 },
    { type: 'order', q: 'Складіть речення непрямої мови.',
      words: ['Die', 'Autorin', 'betont', 'es', 'komme', 'auf', 'die', 'Ausbildung', 'an'],
      answer: 'Die Autorin betont es komme auf die Ausbildung an' },
    { type: 'match', q: 'Доберіть переклад.',
      pairs: [['einräumen', 'визнавати'], ['betonen', 'наголошувати'], ['behaupten', 'стверджувати'],
        ['wiedergeben', 'переказувати'], ['vorliegen', 'бути наявним'], ['wahrnehmen', 'скористатися']] },
    { type: 'multi', q: 'Позначте те, що НЕ належить резюме (Zusammenfassung).',
      options: ['власна оцінка', 'приклади з тексту в подробицях',
        'назва джерела', 'головні тези', 'заклик до дії'],
      answers: [0, 1, 4] },
    { type: 'truefalse', q: 'Indikativ у переказі означає, що автор приймає твердження як факт.',
      answer: true },
    { type: 'truefalse', q: 'На C1 чим складніший стиль, тим вища оцінка.',
      answer: false,
      explain: 'Оцінюють відповідність тексту жанрові, а не складність.' },
  ],
};

export const modules = [m6, m7, m8];
