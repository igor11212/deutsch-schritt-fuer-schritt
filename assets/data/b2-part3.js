/* B2, модулі 6–8: дієслова з фіксованим прийменником і Funktionsverbgefüge,
   пасив у всіх часах, порядок слів у Mittelfeld та засоби зв’язності. */

const m6 = {
  id: 'm6',
  title: 'Verben mit Präposition und Nomen-Verb-Gefüge',
  titleUk: 'Стійкі сполуки: дієслова з прийменником та іменниково-дієслівні звороти',
  can: [
    'уживати дієслова з фіксованим прийменником у складніших конструкціях',
    'будувати речення з da(r)- + підрядним (davon, dass …)',
    'розпізнавати й уживати Nomen-Verb-Verbindungen',
    'замінювати просте дієслово на стійкий зворот і навпаки',
    'писати в реєстрі, доречному для офіційного тексту',
  ],

  grammar: [
    {
      title: '1. Прийменник, який анонсує підрядне речення',
      html: `
<p>На B1 ви вчили <em>darauf, darüber, davon</em> як займенники. На B2 їхня головна робота
інша: вони <strong>анонсують наступне підрядне речення</strong> або групу з <em>zu</em>.
Це обов’язкова конструкція, а не окраса.</p>
<table>
<thead><tr><th>Дієслово</th><th>Конструкція</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td><em>sich freuen auf</em></td><td><em>sich <strong>darauf</strong> freuen, … zu …</em></td>
<td><em>Ich freue mich <strong>darauf</strong>, Sie kennenzulernen.</em><span class="uk">Я радію тому, що познайомлюся з Вами.</span></td></tr>
<tr><td><em>hinweisen auf</em></td><td><em><strong>darauf</strong> hinweisen, dass …</em></td>
<td><em>Ich möchte <strong>darauf</strong> hinweisen, dass die Frist morgen endet.</em>
<span class="uk">Хочу звернути увагу на те, що термін завершується завтра.</span></td></tr>
<tr><td><em>ausgehen von</em></td><td><em><strong>davon</strong> ausgehen, dass …</em></td>
<td><em>Wir gehen <strong>davon</strong> aus, dass alle kommen.</em><span class="uk">Ми виходимо з того, що всі прийдуть.</span></td></tr>
<tr><td><em>sich beschweren über</em></td><td><em>sich <strong>darüber</strong> beschweren, dass …</em></td>
<td><em>Sie beschwerte sich <strong>darüber</strong>, dass niemand antwortete.</em>
<span class="uk">Вона скаржилася на те, що ніхто не відповідав.</span></td></tr>
<tr><td><em>bestehen auf</em></td><td><em><strong>darauf</strong> bestehen, dass …</em></td>
<td><em>Er besteht <strong>darauf</strong>, dass wir pünktlich sind.</em><span class="uk">Він настоює на тому, щоб ми були вчасно.</span></td></tr>
<tr><td><em>sich bemühen um</em></td><td><em>sich <strong>darum</strong> bemühen, … zu …</em></td>
<td><em>Wir bemühen uns <strong>darum</strong>, eine Lösung zu finden.</em><span class="uk">Ми стараємося знайти розв’язання.</span></td></tr>
</tbody></table>
<div class="callout"><strong>Чому цей <em>da(r)-</em> не можна викинути.</strong>
Дієслово вимагає прийменника — але прийменник не може стояти перед цілим реченням.
Тому мова ставить «заповнювач» <em>da(r)-</em>, який тримає місце прийменника,
а сам зміст іде далі у підрядному. Українською ми робимо те саме:
«на <u>те</u>, що…», «з <u>того</u>, що…».</div>
<p><strong>Коли <em>da(r)-</em> необов’язковий:</strong> із <em>dass</em> у розмові його часто
пропускають (<em>Ich hoffe, dass …</em>), але з <em>zu</em>-групою й у письмовому тексті
краще ставити завжди.</p>`,
    },
    {
      title: '2. Розширений список дієслів із прийменником',
      html: `
<p>Ці зв’язки потрібні саме на B2 — вони частотні в аргументативних текстах.</p>
<table>
<thead><tr><th>Зв’язка</th><th>Переклад</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td><em>hinweisen <strong>auf</strong> + Akk.</em></td><td>указувати на</td>
<td><em>Die Studie weist auf ein Problem hin.</em></td></tr>
<tr><td><em>bestehen <strong>auf</strong> + Dat.</em></td><td>настоювати на</td>
<td><em>Er besteht auf seinem Recht.</em></td></tr>
<tr><td><em>bestehen <strong>aus</strong> + Dat.</em></td><td>складатися з</td>
<td><em>Das Team besteht aus fünf Personen.</em></td></tr>
<tr><td><em>bestehen <strong>in</strong> + Dat.</em></td><td>полягати в</td>
<td><em>Das Problem besteht in den Kosten.</em></td></tr>
<tr><td><em>ausgehen <strong>von</strong> + Dat.</em></td><td>виходити з, припускати</td>
<td><em>Wir gehen von 20 Gästen aus.</em></td></tr>
<tr><td><em>abhängen <strong>von</strong> + Dat.</em></td><td>залежати від</td>
<td><em>Das hängt vom Wetter ab.</em></td></tr>
<tr><td><em>sich handeln <strong>um</strong> + Akk.</em></td><td>ідеться про</td>
<td><em>Es handelt sich um einen Irrtum.</em></td></tr>
<tr><td><em>verzichten <strong>auf</strong> + Akk.</em></td><td>відмовлятися від</td>
<td><em>Ich verzichte auf das Auto.</em></td></tr>
<tr><td><em>zweifeln <strong>an</strong> + Dat.</em></td><td>сумніватися в</td>
<td><em>Niemand zweifelt an ihrer Kompetenz.</em></td></tr>
<tr><td><em>beitragen <strong>zu</strong> + Dat.</em></td><td>сприяти, робити внесок у</td>
<td><em>Das trägt zur Lösung bei.</em></td></tr>
<tr><td><em>führen <strong>zu</strong> + Dat.</em></td><td>призводити до</td>
<td><em>Das führt zu Verzögerungen.</em></td></tr>
<tr><td><em>sich einigen <strong>auf</strong> + Akk.</em></td><td>домовлятися про</td>
<td><em>Wir haben uns auf einen Termin geeinigt.</em></td></tr>
</tbody></table>
<div class="callout callout--tip"><strong>Особлива увага: <em>bestehen</em>.</strong>
Одне дієслово з трьома прийменниками й трьома різними значеннями —
<em>auf</em> (настоювати), <em>aus</em> (складатися), <em>in</em> (полягати).
Такі випадки вивчають не як слово, а як три окремі одиниці.</div>`,
    },
    {
      title: '3. Nomen-Verb-Verbindungen: іменник замість дієслова',
      html: `
<p>Замість простого дієслова офіційна німецька часто бере <strong>іменник плюс «слабке» дієслово</strong>.
Смисл несе іменник, а дієслово лише тримає конструкцію. Це не пусте ускладнення —
такі звороти звучать формально й точно.</p>
<table>
<thead><tr><th>Просте дієслово</th><th>Стійкий зворот</th><th>Переклад</th></tr></thead>
<tbody>
<tr><td><em>entscheiden</em></td><td><em>eine Entscheidung <strong>treffen</strong></em></td><td>ухвалити рішення</td></tr>
<tr><td><em>helfen</em></td><td><em>Hilfe <strong>leisten</strong></em></td><td>надати допомогу</td></tr>
<tr><td><em>kritisieren</em></td><td><em>Kritik <strong>üben</strong> an + Dat.</em></td><td>висловити критику</td></tr>
<tr><td><em>fragen</em></td><td><em>eine Frage <strong>stellen</strong></em></td><td>поставити питання</td></tr>
<tr><td><em>antworten</em></td><td><em>eine Antwort <strong>geben</strong></em></td><td>дати відповідь</td></tr>
<tr><td><em>beachten</em></td><td><em><strong>Rücksicht nehmen</strong> auf + Akk.</em></td><td>брати до уваги, зважати</td></tr>
<tr><td><em>anbieten</em></td><td><em>zur Verfügung <strong>stellen</strong></em></td><td>надати в розпорядження</td></tr>
<tr><td><em>sich beziehen</em></td><td><em>Bezug <strong>nehmen</strong> auf + Akk.</em></td><td>покликатися на</td></tr>
<tr><td><em>erwägen</em></td><td><em>in Erwägung <strong>ziehen</strong></em></td><td>брати до розгляду</td></tr>
<tr><td><em>verantworten</em></td><td><em>Verantwortung <strong>übernehmen</strong> für + Akk.</em></td><td>брати відповідальність</td></tr>
<tr><td><em>abschließen</em></td><td><em>einen Vertrag <strong>abschließen</strong></em></td><td>укласти договір</td></tr>
<tr><td><em>berücksichtigen</em></td><td><em>in Betracht <strong>ziehen</strong></em></td><td>враховувати</td></tr>
</tbody></table>
<div class="callout"><strong>Дієслово підбирати не можна навмання.</strong>
Німецька фіксує пару жорстко: рішення <em>treffen</em> (а не «machen»),
критику <em>üben</em> (а не «machen»), питання <em>stellen</em> (а не «fragen»),
допомогу <em>leisten</em>. Помилка в цьому дієслові чути одразу, тому вивчайте
пару цілком, як одне слово.</div>
<p><strong>Де їх уживати.</strong> В офіційному листі, звіті, коментарі — так.
У розмові з друзями — ні: <em>Ich habe eine Entscheidung getroffen</em> звучить
у побутовій балачці штучно, там кажуть просто <em>Ich habe entschieden</em>.</p>`,
    },
    {
      title: '4. Реєстр: те саме трьома способами',
      html: `
<p>Уміння свідомо перемикати реєстр — головна риса рівня B2. Порівняйте:</p>
<table>
<thead><tr><th>Реєстр</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td><strong>розмовний</strong></td><td><em>Wir müssen uns bald entscheiden, sonst wird es nichts.</em>
<span class="uk">Нам треба скоро вирішити, інакше нічого не вийде.</span></td></tr>
<tr><td><strong>нейтральний</strong></td><td><em>Wir sollten die Entscheidung bald treffen, damit das Projekt startet.</em>
<span class="uk">Нам варто скоро ухвалити рішення, щоб проєкт стартував.</span></td></tr>
<tr><td><strong>офіційний</strong></td><td><em>Eine zeitnahe Entscheidung ist Voraussetzung für den Projektbeginn.</em>
<span class="uk">Своєчасне рішення є передумовою початку проєкту.</span></td></tr>
</tbody></table>
<p><strong>Ознаки офіційного реєстру</strong>, які варто вміти й додати, і зняти:</p>
<ul>
<li>стійкі звороти замість простих дієслів: <em>eine Entscheidung treffen</em></li>
<li>іменники замість підрядних: <em>Voraussetzung für den Projektbeginn</em></li>
<li>пасив або його замінники: <em>ist einzuhalten</em>, <em>lässt sich vermeiden</em></li>
<li>прикметники на <em>-frei, -pflichtig, -fähig, -bar</em>: <em>kostenfrei, anmeldepflichtig</em></li>
<li>жодних скорочень і підсилювачів: не <em>total, echt, mega</em></li>
</ul>
<div class="callout callout--tip"><strong>Про міру ще раз.</strong> Іспитові тексти оцінюють
за <u>відповідністю</u> жанру, не за складністю. Коментар у форумі, написаний
чиновницькою мовою, отримає нижчу оцінку, ніж живий і чіткий текст.
Тому вчіть обидва реєстри й дивіться на завдання.</div>`,
    },
    {
      title: '5. Слова з прикладів цієї теми',
      html: `
<table>
<thead><tr><th>Слово</th><th>Переклад</th><th>Як ужито в темі</th></tr></thead>
<tbody>
<tr><td><em>hinweisen auf + Akk.</em></td><td>указувати на</td><td><em>Ich möchte darauf hinweisen, dass …</em></td></tr>
<tr><td><em>ausgehen von + Dat.</em></td><td>виходити з, припускати</td><td><em>Wir gehen davon aus, dass …</em></td></tr>
<tr><td><em>der Irrtum, ¨-er</em></td><td>помилка, хиба</td><td><em>Es handelt sich um einen Irrtum.</em></td></tr>
<tr><td><em>verzichten auf + Akk.</em></td><td>відмовлятися від</td><td><em>Ich verzichte auf das Auto.</em></td></tr>
<tr><td><em>beitragen zu + Dat.</em></td><td>сприяти</td><td><em>Das trägt zur Lösung bei.</em></td></tr>
<tr><td><em>Kritik üben an + Dat.</em></td><td>критикувати</td><td>Стійкий зворот замість <em>kritisieren</em>.</td></tr>
<tr><td><em>zur Verfügung stellen</em></td><td>надавати в розпорядження</td><td>Стійкий зворот замість <em>anbieten</em>.</td></tr>
<tr><td><em>in Erwägung ziehen</em></td><td>брати до розгляду</td><td>Стійкий зворот замість <em>erwägen</em>.</td></tr>
<tr><td><em>Rücksicht nehmen auf + Akk.</em></td><td>зважати на</td><td>Стійкий зворот замість <em>beachten</em>.</td></tr>
<tr><td><em>zeitnah</em></td><td>своєчасно, невідкладно</td><td><em>Eine zeitnahe Entscheidung …</em></td></tr>
</tbody></table>`,
    },
  ],
  exercises: [
    { type: 'gap', q: 'Ich möchte ___ hinweisen, dass die Frist morgen endet.', answers: ['darauf'] },
    { type: 'gap', q: 'Wir gehen ___ aus, dass alle kommen.', answers: ['davon'] },
    { type: 'gap', q: 'Sie beschwerte sich ___, dass niemand antwortete.', answers: ['darüber'] },
    { type: 'gap', q: 'Wir bemühen uns ___, eine Lösung zu finden.', answers: ['darum'] },
    { type: 'gap', q: 'Das Team besteht ___ fünf Personen. (складатися)', answers: ['aus'] },
    { type: 'gap', q: 'Das Problem besteht ___ den hohen Kosten. (полягати)', answers: ['in'] },
    { type: 'gap', q: 'Er besteht ___ seinem Recht. (настоювати)', answers: ['auf'] },
    { type: 'gap', q: 'Стійкий зворот: eine Entscheidung ___ (ухвалити)', answers: ['treffen'] },
    { type: 'gap', q: 'Стійкий зворот: Kritik ___ an + Dat. (критикувати)', answers: ['üben'] },
    { type: 'choice', q: 'Яке дієслово пасує? «eine Frage ___»',
      options: ['machen', 'stellen', 'geben', 'nehmen'], answer: 1 },
    { type: 'choice', q: 'Яке дієслово пасує? «Hilfe ___»',
      options: ['leisten', 'machen', 'stellen', 'üben'], answer: 0 },
    { type: 'order', q: 'Складіть речення.',
      words: ['Wir', 'gehen', 'davon', 'aus', 'dass', 'die', 'Frist', 'eingehalten', 'wird'],
      answer: 'Wir gehen davon aus dass die Frist eingehalten wird' },
    { type: 'match', q: 'Доберіть дієслово до іменника.',
      pairs: [['eine Entscheidung', 'treffen'], ['eine Frage', 'stellen'], ['Kritik', 'üben'],
        ['Hilfe', 'leisten'], ['Verantwortung', 'übernehmen'], ['in Erwägung', 'ziehen']] },
    { type: 'multi', q: 'Позначте правильні зв’язки.',
      options: ['abhängen von', 'zweifeln über', 'beitragen zu', 'verzichten auf', 'führen an'],
      answers: [0, 2, 3] },
    { type: 'truefalse', q: 'Стійкі звороти на кшталт <span class="de-inline">eine Entscheidung treffen</span> доречні в дружній розмові.',
      answer: false,
      explain: 'Там природніше просте дієслово: «Ich habe entschieden».' },
  ],

  listening: [
    {
      exam: 'Goethe B2 · Hören Teil 3',
      title: 'Projektbesprechung: Wer übernimmt was?',
      instruction: 'Троє колег розподіляють обов’язки. Слухайте стійкі звороти офіційного реєстру.',
      lines: [
        { speaker: 'Frau Weiß', de: 'Ich möchte zu Beginn darauf hinweisen, dass sich der Zeitplan um zwei Wochen verschoben hat.', uk: 'Хочу на початку звернути увагу на те, що графік зсунувся на два тижні.' },
        { speaker: 'Herr Kraus', de: 'Woran hängt das? An der Technik oder am Budget?', uk: 'Від чого це залежить? Від техніки чи від бюджету?' },
        { speaker: 'Frau Weiß', de: 'Das Problem besteht in der Genehmigung. Wir gehen aber davon aus, dass sie nächste Woche kommt.', uk: 'Проблема полягає в дозволі. Але ми виходимо з того, що він надійде наступного тижня.' },
        { speaker: 'Iryna', de: 'Dann sollten wir die Entscheidung über den Termin erst danach treffen.', uk: 'Тоді нам варто ухвалювати рішення про дату лише після цього.' },
        { speaker: 'Herr Kraus', de: 'Einverstanden. Ich übernehme die Verantwortung für die Abstimmung mit der Behörde.', uk: 'Погоджуюсь. Я беру на себе відповідальність за узгодження з відомством.' },
        { speaker: 'Frau Weiß', de: 'Gut. Iryna, könnten Sie uns die alten Unterlagen zur Verfügung stellen?', uk: 'Добре. Ірино, чи могли б Ви надати нам старі документи?' },
        { speaker: 'Iryna', de: 'Natürlich. Ich möchte allerdings Kritik an einem Punkt üben: Wir haben zu wenig Zeit für die Prüfung eingeplant.', uk: 'Звісно. Проте хочу висловити критику щодо одного пункту: ми запланували замало часу на перевірку.' },
        { speaker: 'Frau Weiß', de: 'Berechtigt. Wir ziehen eine zusätzliche Woche in Erwägung und einigen uns morgen darauf.', uk: 'Слушно. Ми беремо до розгляду додатковий тиждень і домовимося про це завтра.' },
      ],
      tasks: [
        { type: 'choice', q: 'Warum hat sich der Zeitplan verschoben?',
          options: ['Wegen der Technik', 'Wegen der fehlenden Genehmigung',
            'Wegen des Budgets', 'Wegen Krankheit'], answer: 1 },
        { type: 'choice', q: 'Wofür übernimmt Herr Kraus die Verantwortung?',
          options: ['Für das Budget', 'Für die Abstimmung mit der Behörde',
            'Für die Unterlagen', 'Für die Prüfung'], answer: 1 },
        { type: 'choice', q: 'Was kritisiert Iryna?',
          options: ['Den Zeitplan für die Prüfung', 'Die Aufgabenverteilung',
            'Die Genehmigung', 'Das Budget'], answer: 0 },
        { type: 'gap', q: 'Sie ziehen eine ___ Woche in Erwägung.', answers: ['zusätzliche'] },
        { type: 'multi', q: 'Welche festen Wendungen kommen vor?',
          options: ['darauf hinweisen', 'davon ausgehen', 'die Entscheidung treffen',
            'zur Verfügung stellen', 'Kritik üben', 'in Erwägung ziehen'],
          answers: [0, 1, 2, 3, 4, 5] },
      ],
    },
  ],

  writing: [
    {
      exam: 'Goethe B2 · Schreiben Teil 2',
      title: 'Formelle E-Mail: Verschiebung eines Termins begründen',
      situation: 'Ви керуєте невеликим проєктом і мусите повідомити партнерську організацію, що здача переноситься на два тижні. Напишіть офіційний імейл: <strong>130–160 слів</strong>. Уживіть щонайменше три стійкі звороти й два дієслова з прийменником + <em>da(r)-</em>.',
      points: [
        'Nennen Sie die Verschiebung und den neuen Termin.',
        'Begründen Sie sie sachlich.',
        'Sagen Sie, was Sie unternehmen.',
        'Bitten Sie um eine Rückmeldung.',
      ],
      minWords: 130,
      phrases: [
        { de: 'Ich möchte Sie darauf hinweisen, dass sich der Abgabetermin verschiebt.', uk: 'Хочу звернути Вашу увагу на те, що термін здачі зсувається.' },
        { de: 'Die Ursache besteht in einer verzögerten Genehmigung.', uk: 'Причина полягає в затримці дозволу.' },
        { de: 'Wir gehen davon aus, dass die Unterlagen nächste Woche vorliegen.', uk: 'Ми виходимо з того, що документи будуть наступного тижня.' },
        { de: 'Wir haben zusätzliche Maßnahmen ergriffen.', uk: 'Ми вжили додаткових заходів.' },
        { de: 'Selbstverständlich übernehmen wir die Verantwortung für die Koordination.', uk: 'Звісно, ми беремо на себе відповідальність за координацію.' },
        { de: 'Gern stellen wir Ihnen den aktualisierten Zeitplan zur Verfügung.', uk: 'Охоче надамо Вам оновлений графік.' },
        { de: 'Über eine kurze Rückmeldung bis Freitag wären wir dankbar.', uk: 'Були б вдячні за коротку відповідь до п’ятниці.' },
      ],
      checklist: [
        'Є щонайменше три стійкі звороти (Entscheidung treffen, zur Verfügung stellen, Verantwortung übernehmen …)?',
        'Є два дієслова з прийменником у формі darauf / davon / darüber + підрядне?',
        'Причину названо по суті, без виправдань?',
        'Є конкретний новий термін і прохання про відповідь?',
        'Обсяг 130–160 слів, тон формальний і послідовний (Sie)?',
      ],
      model:
`Sehr geehrte Frau Dr. Lindner,

ich möchte Sie darauf hinweisen, dass sich die Abgabe unseres Zwischenberichts um zwei Wochen
verschiebt. Der neue Termin ist der 28. Oktober.

Die Ursache besteht in einer verzögerten Genehmigung durch das zuständige Amt. Wir gehen davon aus,
dass die fehlenden Unterlagen bis Ende nächster Woche vorliegen. Damit die Verzögerung nicht größer
wird, haben wir bereits Maßnahmen ergriffen: Zwei Kapitel sind fertig, und die Auswertung der
Messdaten läuft parallel weiter.

Selbstverständlich übernehmen wir die Verantwortung für die Koordination mit dem Amt und halten
Sie wöchentlich auf dem Stand. Gern stellen wir Ihnen den aktualisierten Zeitplan noch heute
zur Verfügung.

Sollten Sie den früheren Termin dennoch benötigen, ziehen wir eine gekürzte Fassung in Erwägung.
Über eine kurze Rückmeldung bis Freitag wären wir Ihnen dankbar.

Mit freundlichen Grüßen
Iryna Kowal`,
      modelUk: 'Переклад: Шановна пані д-р Ліндне́р, хочу звернути Вашу увагу на те, що здача нашого проміжного звіту зсувається на два тижні. Новий термін — 28 жовтня. Причина полягає в затримці дозволу з боку відповідного відомства. Ми виходимо з того, що відсутні документи будуть до кінця наступного тижня. Щоб затримка не зросла, ми вже вжили заходів: два розділи готові, а опрацювання даних вимірювань триває паралельно. Звісно, ми беремо на себе відповідальність за узгодження з відомством і щотижня тримаємо Вас у курсі. Охоче надамо Вам оновлений графік уже сьогодні. Якщо Вам усе ж потрібен попередній термін, ми візьмемо до розгляду скорочену версію. Були б Вам вдячні за коротку відповідь до п’ятниці. З повагою, Ірина Коваль.',
    },
  ],

  test: [
    { type: 'gap', q: 'Ich weise ___ hin, dass die Anmeldung verbindlich ist.', answers: ['darauf'] },
    { type: 'gap', q: 'Wir gehen ___ aus, dass es klappt.', answers: ['davon'] },
    { type: 'gap', q: 'Er bemüht sich ___, alles zu klären.', answers: ['darum'] },
    { type: 'gap', q: 'Das hängt ___ Wetter ab. (von + dem, одним словом)', answers: ['vom'] },
    { type: 'gap', q: 'Es handelt sich ___ einen Irrtum.', answers: ['um'] },
    { type: 'gap', q: 'Стійкий зворот: Verantwortung ___ (брати на себе)', answers: ['übernehmen'] },
    { type: 'gap', q: 'Стійкий зворот: Maßnahmen ___ (уживати)', answers: ['ergreifen'] },
    { type: 'choice', q: '«полягати в»:',
      options: ['bestehen auf', 'bestehen aus', 'bestehen in', 'bestehen zu'], answer: 2 },
    { type: 'choice', q: 'Яке дієслово пасує? «in Betracht ___»',
      options: ['machen', 'ziehen', 'nehmen', 'stellen'], answer: 1 },
    { type: 'order', q: 'Складіть речення.',
      words: ['Gern', 'stellen', 'wir', 'Ihnen', 'die', 'Unterlagen', 'zur', 'Verfügung'],
      answer: 'Gern stellen wir Ihnen die Unterlagen zur Verfügung' },
    { type: 'match', q: 'Доберіть переклад.',
      pairs: [['der Aufwand', 'витрати ресурсів'], ['die Absprache', 'домовленість'],
        ['sich abstimmen', 'узгоджувати'], ['die Zuständigkeit', 'сфера відповідальності'],
        ['zeitnah', 'своєчасно'], ['der Irrtum', 'помилка']] },
    { type: 'multi', q: 'Позначте правильні пари.',
      options: ['eine Entscheidung treffen', 'eine Entscheidung machen', 'Kritik üben',
        'Kritik machen', 'eine Frage stellen'],
      answers: [0, 2, 4] },
    { type: 'truefalse', q: '<span class="de-inline">da(r)-</span> тримає місце прийменника, коли далі йде ціле підрядне речення.',
      answer: true },
    { type: 'truefalse', q: '<span class="de-inline">bestehen</span> має лише один прийменник.',
      answer: false,
      explain: 'auf, aus і in — з трьома різними значеннями.' },
  ],
};

const m7 = {
  id: 'm7',
  title: 'Passiv in allen Zeiten',
  titleUk: 'Пасив у всіх часах: процес, стан і безособові конструкції',
  can: [
    'утворювати пасив у всіх шести часах',
    'відрізняти Vorgangspassiv від Zustandspassiv',
    'уживати пасив із модальними дієсловами',
    'будувати безособові конструкції з es і man',
    'обирати між пасивом і його замінниками',
  ],

  grammar: [
    {
      title: '1. Пасив у шести часах',
      html: `
<p>Ядро пасиву незмінне: <strong><em>werden</em> + Partizip II</strong>. Час задає лише форма
<em>werden</em>. Ось повна таблиця на одному дієслові.</p>
<table>
<thead><tr><th>Час</th><th>Форма</th><th>Переклад</th></tr></thead>
<tbody>
<tr><td>Präsens</td><td><em>Der Brief <strong>wird</strong> geschrieben.</em></td><td>Лист пишуть / пишеться.</td></tr>
<tr><td>Präteritum</td><td><em>Der Brief <strong>wurde</strong> geschrieben.</em></td><td>Лист писали / був написаний.</td></tr>
<tr><td>Perfekt</td><td><em>Der Brief <strong>ist</strong> geschrieben <strong>worden</strong>.</em></td><td>Лист написали.</td></tr>
<tr><td>Plusquamperfekt</td><td><em>Der Brief <strong>war</strong> geschrieben <strong>worden</strong>.</em></td><td>Лист був уже написаний (до того).</td></tr>
<tr><td>Futur I</td><td><em>Der Brief <strong>wird</strong> geschrieben <strong>werden</strong>.</em></td><td>Лист напишуть.</td></tr>
<tr><td>з модальним</td><td><em>Der Brief <strong>muss</strong> geschrieben <strong>werden</strong>.</em></td><td>Лист треба написати.</td></tr>
</tbody></table>
<div class="callout"><strong>Головна деталь: <em>worden</em>, не <em>geworden</em>.</strong>
У пасиві Perfekt дієслово <em>werden</em> дає особливу форму <em>worden</em> —
без <em>ge-</em>. Порівняйте: <em>Er ist Arzt <u>geworden</u></em> (він став лікарем) проти
<em>Er ist gefragt <u>worden</u></em> (його запитали). Це найчастіша помилка B2.</div>
<p><strong>Хто виконує дію</strong> додають прийменником:</p>
<ul>
<li><em>von</em> + Dat. — особа або чинник: <em>Der Brief wurde <strong>von der Chefin</strong> geschrieben.</em></li>
<li><em>durch</em> + Akk. — засіб або посередник: <em>Die Stadt wurde <strong>durch das Erdbeben</strong> zerstört.</em></li>
</ul>`,
    },
    {
      title: '2. Процес чи стан: werden проти sein',
      html: `
<p>Німецька розрізняє <strong>дію, що відбувається</strong>, і <strong>стан як результат</strong>.
Українською обидва часто «зачинено», тому різницю треба свідомо тримати.</p>
<table>
<thead><tr><th></th><th>Vorgangspassiv (процес)</th><th>Zustandspassiv (стан)</th></tr></thead>
<tbody>
<tr><td>формула</td><td><em><strong>werden</strong> + Partizip II</strong></em></td><td><em><strong>sein</strong> + Partizip II</em></td></tr>
<tr><td>приклад</td><td><em>Der Laden <strong>wird</strong> um 18 Uhr geschlossen.</em>
<span class="uk">Крамницю зачиняють о 18. (дія)</span></td>
<td><em>Der Laden <strong>ist</strong> geschlossen.</em><span class="uk">Крамниця зачинена. (стан)</span></td></tr>
<tr><td>питання</td><td>що <u>відбувається</u>?</td><td>як <u>є</u>?</td></tr>
<tr><td>ще приклад</td><td><em>Das Fenster wird geöffnet.</em><span class="uk">Вікно відчиняють.</span></td>
<td><em>Das Fenster ist geöffnet.</em><span class="uk">Вікно відчинене.</span></td></tr>
<tr><td>минуле</td><td><em>Der Vertrag wurde unterschrieben.</em><span class="uk">Договір підписували.</span></td>
<td><em>Der Vertrag war unterschrieben.</em><span class="uk">Договір був підписаний (уже).</span></td></tr>
</tbody></table>
<div class="callout callout--tip"><strong>Просте розрізнення.</strong>
Спробуйте додати «о 18 годині» або «щойно». Пасує — це процес (<em>werden</em>).
Пробуєте додати «уже» або «усе ще» — це стан (<em>sein</em>).
<em>Der Laden ist noch geschlossen</em> — «крамниця ще зачинена» (стан).</div>`,
    },
    {
      title: '3. Безособовий пасив і man',
      html: `
<p>Німецька може будувати пасив навіть тоді, коли <strong>немає об’єкта дії</strong> —
з формальним <em>es</em>. Це типово для правил і оголошень.</p>
<table>
<thead><tr><th>Конструкція</th><th>Приклад</th><th>Переклад</th></tr></thead>
<tbody>
<tr><td><em>Es wird + Partizip II</em></td><td><em><strong>Es wird</strong> hier nicht geraucht.</em></td>
<td>Тут не курять.</td></tr>
<tr><td><em>без es, якщо щось інше на 1-му місці</em></td><td><em>Hier <strong>wird</strong> nicht geraucht.</em></td>
<td>Тут не курять.</td></tr>
<tr><td><em>Es wird … über</em></td><td><em><strong>Es wurde</strong> lange über den Vorschlag diskutiert.</em></td>
<td>Пропозицію довго обговорювали.</td></tr>
<tr><td><em>man</em> + активне дієслово</td><td><em><strong>Man</strong> raucht hier nicht.</em></td>
<td>Тут не курять.</td></tr>
</tbody></table>
<p><strong>Коли що брати:</strong></p>
<table>
<thead><tr><th>Засіб</th><th>Відтінок</th><th>Реєстр</th></tr></thead>
<tbody>
<tr><td><em>Es wird nicht geraucht</em></td><td>правило, безособове, категоричне</td><td>офіційний, оголошення</td></tr>
<tr><td><em>Man raucht hier nicht</em></td><td>звичай, спостереження</td><td>нейтральний, розмовний</td></tr>
<tr><td><em>Rauchen verboten</em></td><td>заборона одним словом</td><td>табличка</td></tr>
</tbody></table>
<div class="callout"><strong>Обережно з <em>man</em>.</strong> Це не «людина» (<em>der Mann</em>),
а неозначений займенник «хтось, люди взагалі». Він завжди в однині:
<em>man <u>sagt</u></em>, <em>man <u>kann</u></em> — і ніколи «<s>man sagen</s>».
Відмінюється як <em>einer</em>: Akkusativ <em>einen</em>, Dativ <em>einem</em>:
<em>Das hilft <strong>einem</strong> nicht</em> — «Це людині не допомагає».</div>`,
    },
    {
      title: '4. Пасив із модальними дієсловами',
      html: `
<p>Дуже частотна на B2 конструкція, особливо в інструкціях і правилах.
Схема: <strong>модальне дієслово + Partizip II + <em>werden</em></strong>.</p>
<table>
<thead><tr><th>Час</th><th>Приклад</th><th>Переклад</th></tr></thead>
<tbody>
<tr><td>Präsens</td><td><em>Das Formular <strong>muss</strong> ausgefüllt <strong>werden</strong>.</em></td>
<td>Формуляр треба заповнити.</td></tr>
<tr><td>Präteritum</td><td><em>Das Formular <strong>musste</strong> ausgefüllt <strong>werden</strong>.</em></td>
<td>Формуляр треба було заповнити.</td></tr>
<tr><td>Konjunktiv II</td><td><em>Das <strong>müsste</strong> geprüft <strong>werden</strong>.</em></td>
<td>Це варто було б перевірити.</td></tr>
<tr><td>Perfekt (рідко)</td><td><em>Das <strong>hat</strong> geprüft <strong>werden müssen</strong>.</em></td>
<td>Це треба було перевірити.</td></tr>
</tbody></table>
<p><strong>Три замінники</strong>, які часто беруть натомість — тема наступного модуля B2,
але порівняння корисне вже тут:</p>
<table>
<thead><tr><th>Замінник</th><th>Приклад</th><th>Значення</th></tr></thead>
<tbody>
<tr><td><em>sein + zu + Infinitiv</em></td><td><em>Das Formular <strong>ist auszufüllen</strong>.</em></td><td>треба заповнити (офіційно)</td></tr>
<tr><td><em>sich lassen</em></td><td><em>Das <strong>lässt sich</strong> leicht ändern.</em></td><td>це можна легко змінити</td></tr>
<tr><td><em>-bar</em></td><td><em>Der Text ist gut <strong>lesbar</strong>.</em></td><td>текст добре читається</td></tr>
</tbody></table>
<div class="callout callout--tip"><strong>Порада для Schreiben.</strong> В офіційному тексті
природно змішувати: один раз повний пасив із модальним, один раз <em>sein + zu</em>,
один раз <em>lassen sich</em>. Три однакові конструкції поряд читаються монотонно.</div>`,
    },
    {
      title: '5. Слова з прикладів цієї теми',
      html: `
<table>
<thead><tr><th>Слово</th><th>Переклад</th><th>Як ужито в темі</th></tr></thead>
<tbody>
<tr><td><em>zerstören</em></td><td>руйнувати</td><td><em>… wurde durch das Erdbeben zerstört.</em></td></tr>
<tr><td><em>das Erdbeben, -</em></td><td>землетрус</td><td>Приклад чинника з <em>durch</em>.</td></tr>
<tr><td><em>unterschreiben</em></td><td>підписувати</td><td><em>Der Vertrag wurde unterschrieben.</em></td></tr>
<tr><td><em>ausfüllen</em></td><td>заповнювати</td><td><em>Das Formular muss ausgefüllt werden.</em></td></tr>
<tr><td><em>diskutieren über + Akk.</em></td><td>обговорювати</td><td><em>Es wurde lange darüber diskutiert.</em></td></tr>
<tr><td><em>lesbar</em></td><td>той, що читається; розбірливий</td><td><em>Der Text ist gut lesbar.</em></td></tr>
<tr><td><em>geschlossen / geöffnet</em></td><td>зачинено / відчинено</td><td>Приклади Zustandspassiv.</td></tr>
<tr><td><em>die Maßnahme, -n</em></td><td>заходи</td><td><em>Die Maßnahmen wurden beschlossen.</em></td></tr>
<tr><td><em>beschließen</em></td><td>ухвалювати</td><td><em>… wurden beschlossen.</em></td></tr>
<tr><td><em>einführen</em></td><td>запроваджувати</td><td><em>Die Regel wurde eingeführt.</em></td></tr>
</tbody></table>`,
    },
  ],
  exercises: [
    { type: 'gap', q: 'Der Brief ___ geschrieben. (Präsens Passiv)', answers: ['wird'] },
    { type: 'gap', q: 'Der Brief ___ gestern geschrieben. (Präteritum Passiv)', answers: ['wurde'] },
    { type: 'gap', q: 'Der Brief ist geschrieben ___. (Perfekt Passiv)', answers: ['worden'] },
    { type: 'gap', q: 'Das Formular muss ausgefüllt ___. (з модальним)', answers: ['werden'] },
    { type: 'gap', q: 'Der Laden ___ um 18 Uhr geschlossen. (процес)', answers: ['wird'] },
    { type: 'gap', q: 'Der Laden ___ schon geschlossen. (стан)', answers: ['ist'] },
    { type: 'gap', q: 'Hier ___ nicht geraucht. (безособовий пасив)', answers: ['wird'] },
    { type: 'gap', q: 'Виконавець: Der Vertrag wurde ___ der Chefin unterschrieben.', answers: ['von'] },
    { type: 'gap', q: 'Чинник: Die Stadt wurde ___ das Erdbeben zerstört.', answers: ['durch'] },
    { type: 'choice', q: 'Яка форма правильна в Perfekt Passiv?',
      options: ['ist gefragt geworden', 'ist gefragt worden', 'hat gefragt worden', 'ist worden gefragt'],
      answer: 1 },
    { type: 'choice', q: 'Zustandspassiv:',
      options: ['Das Fenster wird geöffnet.', 'Das Fenster ist geöffnet.',
        'Das Fenster wurde geöffnet.', 'Das Fenster muss geöffnet werden.'],
      answer: 1 },
    { type: 'order', q: 'Складіть речення.',
      words: ['Die', 'Unterlagen', 'müssen', 'bis', 'Freitag', 'eingereicht', 'werden'],
      answer: 'Die Unterlagen müssen bis Freitag eingereicht werden' },
    { type: 'match', q: 'Доберіть час до форми.',
      pairs: [['wird geschrieben', 'Präsens'], ['wurde geschrieben', 'Präteritum'],
        ['ist geschrieben worden', 'Perfekt'], ['war geschrieben worden', 'Plusquamperfekt'],
        ['muss geschrieben werden', 'з модальним']] },
    { type: 'multi', q: 'Позначте правильні речення.',
      options: ['Es wird hier nicht geraucht.', 'Man raucht hier nicht.',
        'Man rauchen hier nicht.', 'Hier wird nicht geraucht.', 'Es wird hier nicht geraucht worden.'],
      answers: [0, 1, 3] },
    { type: 'truefalse', q: 'У Perfekt Passiv уживають <span class="de-inline">geworden</span>.',
      answer: false,
      explain: 'Тільки worden — без ge-.' },
  ],

  listening: [
    {
      exam: 'Goethe B2 · Hören Teil 4',
      title: 'Bürgerversammlung: die Straße wird umgebaut',
      instruction: 'Представник міста доповідає про реконструкцію. Багато пасивних конструкцій.',
      lines: [
        { speaker: 'Stadtvertreter', de: 'Guten Abend. Die Hauptstraße wird ab März umgebaut; die Arbeiten sind auf acht Monate angesetzt.', uk: 'Доброго вечора. Головну вулицю з березня реконструюють; роботи розраховані на вісім місяців.' },
        { speaker: 'Anwohnerin', de: 'Wurden die Anwohner vorher gefragt? Ich habe nichts erhalten.', uk: 'Мешканців питали заздалегідь? Я нічого не отримувала.' },
        { speaker: 'Stadtvertreter', de: 'Es wurde im Juni eine Bürgerbeteiligung durchgeführt, allerdings mit geringer Teilnahme. Die Unterlagen sind seit August öffentlich zugänglich.', uk: 'У червні провели громадське обговорення, щоправда, з малою участю. Документи з серпня публічно доступні.' },
        { speaker: 'Anwohner', de: 'Und der Lärm? Muss das am Wochenende auch gearbeitet werden?', uk: 'А шум? Чи мусять працювати й на вихідних?' },
        { speaker: 'Stadtvertreter', de: 'Nein. Samstags darf nur bis 14 Uhr gearbeitet werden, sonntags gar nicht. Das ist in der Verordnung festgelegt.', uk: 'Ні. У суботу можна працювати лише до 14, у неділю зовсім ні. Це закріплено в постанові.' },
        { speaker: 'Anwohnerin', de: 'Werden die Bäume erhalten?', uk: 'Дерева збережуть?' },
        { speaker: 'Stadtvertreter', de: 'Vier Bäume müssen leider gefällt werden, zwölf neue werden gepflanzt. Zusätzlich wird ein Radweg angelegt.', uk: 'Чотири дерева, на жаль, доведеться зрубати, дванадцять нових посадять. Додатково прокладуть велодоріжку.' },
        { speaker: 'Anwohner', de: 'Das klingt schon besser. Wann ist alles fertig?', uk: 'Це вже звучить краще. Коли все буде готове?' },
        { speaker: 'Stadtvertreter', de: 'Wenn nichts dazwischenkommt, ist die Straße im November wieder geöffnet.', uk: 'Якщо нічого не станеться, вулиця в листопаді знову відкрита.' },
      ],
      tasks: [
        { type: 'choice', q: 'Wie lange dauern die Arbeiten?',
          options: ['Vier Monate', 'Acht Monate', 'Ein Jahr', 'Zwei Jahre'], answer: 1 },
        { type: 'choice', q: 'Wann darf samstags gearbeitet werden?',
          options: ['Gar nicht', 'Nur bis 14 Uhr', 'Bis 18 Uhr', 'Rund um die Uhr'], answer: 1 },
        { type: 'gap', q: '___ Bäume müssen gefällt werden.', answers: ['Vier|4'] },
        { type: 'gap', q: '___ neue Bäume werden gepflanzt.', answers: ['Zwölf|12'] },
        { type: 'truefalse', q: 'Es gab keine Bürgerbeteiligung.', answer: false,
          explain: 'Вона була в червні, але з малою участю.' },
        { type: 'multi', q: 'Was ist geplant?',
          options: ['Ein Radweg wird angelegt.', 'Neue Bäume werden gepflanzt.',
            'Die Straße wird im November geöffnet.', 'Sonntags wird auch gearbeitet.'],
          answers: [0, 1, 2] },
      ],
    },
  ],

  writing: [
    {
      exam: 'Goethe B2 · Schreiben Teil 2',
      title: 'Formelle Mitteilung: Sanierung im Haus',
      situation: 'Ви керуєте будинком і мусите повідомити мешканців про ремонт сходової клітки. Напишіть повідомлення: <strong>130–160 слів</strong>. Уживіть пасив у щонайменше трьох різних часах або з модальним дієсловом.',
      points: [
        'Nennen Sie Beginn und Dauer.',
        'Sagen Sie, was gemacht wird.',
        'Nennen Sie die Regeln für die Bauzeit.',
        'Sagen Sie, an wen man sich bei Fragen wendet.',
      ],
      minWords: 130,
      phrases: [
        { de: 'Ab dem 4. März wird das Treppenhaus saniert.', uk: 'З 4 березня сходову клітку реконструюють.' },
        { de: 'Die Arbeiten sind auf sechs Wochen angesetzt.', uk: 'Роботи розраховані на шість тижнів.' },
        { de: 'Die alten Fenster werden ersetzt.', uk: 'Старі вікна замінюють.' },
        { de: 'Der Aufzug musste bereits im Januar überprüft werden.', uk: 'Ліфт довелося перевірити вже в січні.' },
        { de: 'Samstags darf nur bis 14 Uhr gearbeitet werden.', uk: 'У суботу можна працювати лише до 14.' },
        { de: 'Es wird gebeten, das Treppenhaus freizuhalten.', uk: 'Просимо не захаращувати сходову клітку.' },
        { de: 'Bei Fragen wenden Sie sich an die Hausverwaltung.', uk: 'У разі питань звертайтеся до управління будинком.' },
      ],
      checklist: [
        'Є пасив щонайменше у трьох різних формах (wird, wurde, ist … worden, muss … werden)?',
        'Правильно вжито worden, а не geworden?',
        'Названо дату початку й тривалість?',
        'Є правила на час ремонту й контактна особа?',
        'Обсяг 130–160 слів, тон формальний?',
      ],
      model:
`Liebe Hausbewohnerinnen und Hausbewohner,

ab dem 4. März wird unser Treppenhaus saniert. Die Arbeiten sind auf sechs Wochen angesetzt
und sollen bis Mitte April abgeschlossen sein.

Erneuert werden der Anstrich, die Beleuchtung und die alten Fenster im Erdgeschoss.
Der Aufzug musste bereits im Januar überprüft werden; dabei wurden zwei Mängel festgestellt,
die nun gemeinsam mit der Sanierung behoben werden. Die Kosten sind im vergangenen Jahr
beschlossen worden und werden aus der Instandhaltungsrücklage getragen.

Während der Bauzeit darf montags bis freitags von 8 bis 17 Uhr gearbeitet werden,
samstags nur bis 14 Uhr; sonntags wird nicht gearbeitet. Es wird gebeten, das Treppenhaus
freizuhalten und Kinderwagen vorübergehend im Keller abzustellen. Die Post wird weiterhin
normal zugestellt, da die Briefkästen zugänglich bleiben. In der zweiten und dritten Woche
muss das Erdgeschoss zeitweise über den Hinterausgang betreten werden; ein Hinweis wird
jeweils am Vortag ausgehängt.

Bei Fragen wenden Sie sich bitte an die Hausverwaltung; die Sprechzeiten sind dienstags
und donnerstags von 9 bis 12 Uhr.

Mit freundlichen Grüßen
Die Hausverwaltung`,
      modelUk: 'Переклад: Шановні мешканки й мешканці, з 4 березня наша сходова клітка реконструюється. Роботи розраховані на шість тижнів і мають завершитися до середини квітня. Оновлюють пофарбування, освітлення й старі вікна на першому поверсі. Ліфт довелося перевірити вже в січні; при цьому виявили два дефекти, які тепер усувають разом із реконструкцією. Витрати були ухвалені минулого року й покриваються з резерву на утримання. Під час ремонту можна працювати з понеділка до п’ятниці з 8 до 17, у суботу лише до 14. Просимо не захаращувати сходову клітку й тимчасово ставити дитячі візки в підвалі. У разі питань звертайтеся, будь ласка, до управління будинком; години прийому — вівторок і четвер з 9 до 12. З повагою, управління будинком.',
    },
  ],

  test: [
    { type: 'gap', q: 'Das Haus ___ 1920 gebaut. (Präteritum Passiv)', answers: ['wurde'] },
    { type: 'gap', q: 'Das Haus ist 1920 gebaut ___. (Perfekt Passiv)', answers: ['worden'] },
    { type: 'gap', q: 'Die Regel ___ nächstes Jahr eingeführt. (Präsens Passiv)', answers: ['wird'] },
    { type: 'gap', q: 'Die Unterlagen müssen eingereicht ___.', answers: ['werden'] },
    { type: 'gap', q: 'Стан: Die Tür ___ schon abgeschlossen.', answers: ['ist'] },
    { type: 'gap', q: 'Безособово: Sonntags ___ nicht gearbeitet.', answers: ['wird'] },
    { type: 'choice', q: 'Чинник (не особа) вводять прийменником:',
      options: ['von', 'durch', 'mit', 'für'], answer: 1 },
    { type: 'choice', q: 'Правильний Plusquamperfekt Passiv:',
      options: ['war gebaut worden', 'ist gebaut worden', 'wurde gebaut geworden', 'hatte gebaut worden'],
      answer: 0 },
    { type: 'choice', q: '<span class="de-inline">man</span> — це:',
      options: ['чоловік', 'неозначений займенник «люди взагалі»', 'множина', 'наказова форма'],
      answer: 1 },
    { type: 'order', q: 'Складіть речення.',
      words: ['Die', 'Kosten', 'sind', 'im', 'Vorjahr', 'beschlossen', 'worden'],
      answer: 'Die Kosten sind im Vorjahr beschlossen worden' },
    { type: 'match', q: 'Доберіть переклад.',
      pairs: [['die Vorschrift', 'припис'], ['zulässig', 'допустимий'], ['die Ausnahme', 'виняток'],
        ['errichten', 'зводити'], ['die Sanierung', 'реконструкція'], ['gelten', 'бути чинним']] },
    { type: 'multi', q: 'Позначте пасивні конструкції.',
      options: ['Das Formular ist auszufüllen.', 'Das lässt sich ändern.',
        'Er ist Arzt geworden.', 'Die Regel wurde eingeführt.', 'Der Text ist lesbar.'],
      answers: [0, 1, 3, 4],
      explain: '«Er ist Arzt geworden» — це не пасив, а «ставати».' },
    { type: 'truefalse', q: '<span class="de-inline">man</span> завжди стоїть в однині.', answer: true },
    { type: 'truefalse', q: 'Zustandspassiv утворюють через <span class="de-inline">sein</span> + Partizip II.',
      answer: true },
  ],
};

const m8 = {
  id: 'm8',
  title: 'Wortstellung im Mittelfeld und Textkohäsion',
  titleUk: 'Порядок слів у середині речення та зв’язність тексту',
  can: [
    'розставляти обставини за схемою TeKaMoLo',
    'ставити заперечення nicht на правильне місце',
    'відрізняти означене від неозначеного в порядку слів',
    'уживати конектори-прислівники в потрібній позиції',
    'зв’язувати абзаци займенниками та вказівними словами',
  ],

  grammar: [
    {
      title: '1. Рамка речення: те, що тримає все разом',
      html: `
<p>Німецьке речення побудоване як <strong>рамка</strong>: змінене дієслово стоїть на другому місці,
а всі інші його частини — у самому кінці. Між ними — <em>Mittelfeld</em>, «середнє поле»,
де й вирішується порядок слів.</p>
<table>
<thead><tr><th>1-ше місце</th><th>дієслово</th><th>Mittelfeld</th><th>кінець рамки</th></tr></thead>
<tbody>
<tr><td><em>Ich</em></td><td><em>habe</em></td><td><em>gestern meiner Schwester ein Buch</em></td><td><em>geschenkt.</em></td></tr>
<tr><td><em>Gestern</em></td><td><em>habe</em></td><td><em>ich meiner Schwester ein Buch</em></td><td><em>geschenkt.</em></td></tr>
<tr><td><em>Meiner Schwester</em></td><td><em>habe</em></td><td><em>ich gestern ein Buch</em></td><td><em>geschenkt.</em></td></tr>
</tbody></table>
<p><strong>Що йде в кінець рамки:</strong> Partizip II, інфінітив, відокремлювана приставка,
а в підрядному — усе змінене дієслово.</p>
<table>
<thead><tr><th>Тип</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td>Perfekt</td><td><em>Ich <u>habe</u> das Buch <strong>gelesen</strong>.</em></td></tr>
<tr><td>модальне</td><td><em>Ich <u>will</u> das Buch <strong>lesen</strong>.</em></td></tr>
<tr><td>відокремлювана приставка</td><td><em>Ich <u>rufe</u> dich morgen <strong>an</strong>.</em></td></tr>
<tr><td>пасив</td><td><em>Das Buch <u>wird</u> gerade <strong>gedruckt</strong>.</em></td></tr>
</tbody></table>
<div class="callout callout--tip"><strong>Чому рамка вигідна.</strong> Найважливіше слово німець
свідомо ставить у кінець — тому речення тримає увагу до останнього складу.
У письмі це інструмент: покладіть у кінець те, на чому хочете наголосити.</div>`,
    },
    {
      title: '2. TeKaMoLo: порядок обставин',
      html: `
<p>Коли в Mittelfeld кілька обставин, вони стоять у передбачуваному порядку.
Мнемоніка — <strong>TeKaMoLo</strong>.</p>
<table>
<thead><tr><th>Скорочення</th><th>Що це</th><th>Питання</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td><strong>Te</strong>mporal</td><td>час</td><td>wann?</td><td><em>morgen, um acht, seit Jahren</em></td></tr>
<tr><td><strong>Ka</strong>usal</td><td>причина</td><td>warum?</td><td><em>wegen des Regens, deshalb</em></td></tr>
<tr><td><strong>Mo</strong>dal</td><td>спосіб</td><td>wie?</td><td><em>schnell, mit dem Auto, gern</em></td></tr>
<tr><td><strong>Lo</strong>kal</td><td>місце</td><td>wo? wohin?</td><td><em>in Wien, nach Hause</em></td></tr>
</tbody></table>
<p><strong>Повний приклад</strong> з усіма чотирма:</p>
<p class="ex-de">Ich fahre <u>morgen</u> (Te) <u>wegen der Prüfung</u> (Ka) <u>mit dem Zug</u> (Mo) <u>nach Graz</u> (Lo).</p>
<p><span class="uk">Я їду завтра через іспит потягом до Ґраца.</span></p>
<div class="callout"><strong>Це не жорсткий закон, а типовий порядок.</strong>
Будь-яку обставину можна витягти на перше місце, щоб її підкреслити:
<em><u>Wegen der Prüfung</u> fahre ich morgen mit dem Zug nach Graz.</em>
Але <u>всередині</u> Mittelfeld порядок TeKaMoLo — те, що звучить природно.</div>
<p><strong>Додатки</strong> мають свій порядок, незалежний від TeKaMoLo:</p>
<ul>
<li>Dativ перед Akkusativ, якщо обидва — іменники: <em>Ich gebe <u>dem Kind</u> <u>das Buch</u>.</em></li>
<li>займенник перед іменником: <em>Ich gebe <u>es</u> dem Kind.</em></li>
<li>два займенники: Akkusativ перед Dativ: <em>Ich gebe <u>es</u> <u>ihm</u>.</em></li>
</ul>`,
    },
    {
      title: '3. Де стоїть nicht',
      html: `
<p>Позиція заперечення змінює зміст, тому це не дрібниця. Базове правило:
<strong><em>nicht</em> стоїть якнайближче до того, що заперечує</strong>,
і <u>перед</u> кінцем рамки.</p>
<table>
<thead><tr><th>Що заперечуємо</th><th>Позиція</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td>усе речення</td><td>у кінці Mittelfeld, перед рамкою</td>
<td><em>Ich habe das Buch <strong>nicht</strong> gelesen.</em><span class="uk">Я не читав цієї книжки.</span></td></tr>
<tr><td>обставина місця</td><td>перед нею</td>
<td><em>Ich wohne <strong>nicht</strong> in Wien.</em><span class="uk">Я живу не у Відні.</span></td></tr>
<tr><td>прикметник</td><td>перед ним</td>
<td><em>Das Zimmer ist <strong>nicht</strong> groß.</em><span class="uk">Кімната не велика.</span></td></tr>
<tr><td>одне конкретне слово</td><td>прямо перед ним</td>
<td><em>Ich habe <strong>nicht</strong> ihn gefragt, sondern sie.</em><span class="uk">Я запитав не його, а її.</span></td></tr>
<tr><td>іменник із неозначеним артиклем</td><td>беремо <em>kein</em>, не <em>nicht</em></td>
<td><em>Ich habe <strong>keine</strong> Zeit.</em><span class="uk">У мене немає часу.</span></td></tr>
</tbody></table>
<div class="callout"><strong>nicht чи kein?</strong> <em>kein</em> — коли заперечуємо
іменник із <u>неозначеним</u> артиклем або без артикля: <em>ein Auto → kein Auto</em>,
<em>Zeit → keine Zeit</em>. <em>nicht</em> — усе інше, зокрема іменник із
<u>означеним</u> артиклем або присвійним: <em>Das ist <u>nicht</u> mein Auto.</em></div>
<p><strong>Порівняйте, як позиція змінює зміст:</strong></p>
<ul>
<li><em>Ich fahre <strong>nicht</strong> mit dem Auto nach Wien.</em><span class="uk">Я їду до Відня не машиною (а якось інакше).</span></li>
<li><em>Ich fahre mit dem Auto <strong>nicht</strong> nach Wien.</em><span class="uk">Машиною я їду не до Відня (а кудись інде).</span></li>
</ul>`,
    },
    {
      title: '4. Зв’язність: як абзаци тримаються разом',
      html: `
<p>На B2 оцінюють не лише правильність, а й <strong>зв’язність</strong>. Ось чотири засоби,
які роблять текст цілісним.</p>
<table>
<thead><tr><th>Засіб</th><th>Приклад</th><th>Що дає</th></tr></thead>
<tbody>
<tr><td><strong>займенники</strong></td><td><em>Der Antrag kam spät. <strong>Er</strong> wurde dennoch bearbeitet.</em></td>
<td>не повторювати іменник</td></tr>
<tr><td><strong>вказівні слова</strong></td><td><em>… zwei Vorschläge. <strong>Dieser</strong> ist teurer, <strong>jener</strong> schneller.</em></td>
<td>розрізняти два об’єкти</td></tr>
<tr><td><strong>конектори-прислівники</strong></td><td><em><strong>Allerdings</strong> fehlt das Geld. <strong>Dennoch</strong> beginnt der Bau.</em></td>
<td>показати логіку</td></tr>
<tr><td><strong>підсумкові іменники</strong></td><td><em>… nichts gemeldet. <strong>Dieses Versäumnis</strong> hatte Folgen.</em></td>
<td>стиснути попередню думку в одне слово</td></tr>
</tbody></table>
<p><strong>Позиція конектора</strong> визначає порядок слів — це головна технічна річ:</p>
<table>
<thead><tr><th>Тип</th><th>Слова</th><th>Порядок слів</th></tr></thead>
<tbody>
<tr><td>сполучники нульової позиції</td><td><em>und, aber, oder, denn, sondern</em></td>
<td>не займають місця: <em>…, <u>aber</u> <strong>ich</strong> komme trotzdem.</em></td></tr>
<tr><td>прислівники-конектори</td><td><em>deshalb, trotzdem, außerdem, allerdings, dennoch, folglich, zudem</em></td>
<td>займають 1-ше місце: <em><u>Trotzdem</u> <strong>komme</strong> ich.</em></td></tr>
<tr><td>підрядні сполучники</td><td><em>weil, obwohl, da, sodass, während</em></td>
<td>дієслово в кінець: <em>…, <u>obwohl</u> ich müde <strong>bin</strong>.</em></td></tr>
<tr><td>рухливі</td><td><em>jedoch, allerdings</em></td>
<td>можуть стояти й у Mittelfeld: <em>Ich komme <u>jedoch</u> später.</em></td></tr>
</tbody></table>
<div class="callout callout--tip"><strong>Практична порада для іспиту.</strong>
Не ставте два конектори в одне речення (<em>«<s>Obwohl es regnet, trotzdem gehe ich</s>»</em> —
помилка). Один зв’язок — один конектор. І чергуйте типи: якщо в попередньому реченні
було <em>obwohl</em>, візьміть далі <em>allerdings</em>, а не знову підрядне.</div>`,
    },
    {
      title: '5. Слова з прикладів цієї теми',
      html: `
<table>
<thead><tr><th>Слово</th><th>Переклад</th><th>Як ужито в темі</th></tr></thead>
<tbody>
<tr><td><em>schenken</em></td><td>дарувати</td><td><em>Ich habe meiner Schwester ein Buch geschenkt.</em></td></tr>
<tr><td><em>drucken</em></td><td>друкувати</td><td><em>Das Buch wird gerade gedruckt.</em></td></tr>
<tr><td><em>bearbeiten</em></td><td>опрацьовувати</td><td><em>Er wurde dennoch bearbeitet.</em></td></tr>
<tr><td><em>dennoch</em></td><td>та все ж, проте</td><td><em>Dennoch beginnt der Bau.</em></td></tr>
<tr><td><em>folglich</em></td><td>отже, відповідно</td><td>Конектор наслідку.</td></tr>
<tr><td><em>zudem</em></td><td>до того ж</td><td>Конектор додавання.</td></tr>
<tr><td><em>jedoch</em></td><td>однак</td><td><em>Ich komme jedoch später.</em></td></tr>
<tr><td><em>das Versäumnis, -se</em></td><td>недогляд, прогаяне</td><td><em>Dieses Versäumnis hatte Folgen.</em></td></tr>
<tr><td><em>der Antrag, ¨-e</em></td><td>заява, клопотання</td><td><em>Der Antrag kam spät.</em></td></tr>
<tr><td><em>der Bau</em></td><td>будівництво</td><td><em>Dennoch beginnt der Bau.</em></td></tr>
</tbody></table>`,
    },
  ],
  exercises: [
    { type: 'order', q: 'Складіть речення за TeKaMoLo.',
      words: ['Ich', 'fahre', 'morgen', 'mit', 'dem', 'Zug', 'nach', 'Graz'],
      answer: 'Ich fahre morgen mit dem Zug nach Graz' },
    { type: 'order', q: 'Складіть речення.',
      words: ['Wir', 'haben', 'gestern', 'wegen', 'des', 'Regens', 'zu', 'Hause', 'gearbeitet'],
      answer: 'Wir haben gestern wegen des Regens zu Hause gearbeitet' },
    { type: 'order', q: 'Складіть речення із займенниками.',
      words: ['Ich', 'gebe', 'es', 'ihm', 'morgen'],
      answer: 'Ich gebe es ihm morgen' },
    { type: 'gap', q: 'Заперечте все речення: Ich habe das Buch ___ gelesen.', answers: ['nicht'] },
    { type: 'gap', q: 'Заперечте іменник без артикля: Ich habe ___ Zeit.', answers: ['keine'] },
    { type: 'gap', q: 'Заперечте присвійне: Das ist ___ mein Auto.', answers: ['nicht'] },
    { type: 'gap', q: 'Конектор наслідку на 1-му місці: Es regnete. ___ blieben wir zu Hause.',
      answers: ['Deshalb|Folglich|Darum'] },
    { type: 'choice', q: 'Правильний порядок обставин:',
      options: ['Ich fahre nach Graz morgen mit dem Zug.',
        'Ich fahre morgen mit dem Zug nach Graz.',
        'Ich fahre mit dem Zug morgen nach Graz.',
        'Ich morgen fahre nach Graz mit dem Zug.'],
      answer: 1 },
    { type: 'choice', q: 'Два займенники — який порядок?',
      options: ['Ich gebe ihm es.', 'Ich gebe es ihm.', 'Ich es ihm gebe.', 'Ich gebe ihm das es.'],
      answer: 1 },
    { type: 'choice', q: 'Яке речення правильне?',
      options: ['Obwohl es regnet, trotzdem gehe ich.', 'Obwohl es regnet, gehe ich.',
        'Trotzdem es regnet, gehe ich.', 'Obwohl regnet es, gehe ich.'],
      answer: 1 },
    { type: 'choice', q: '«Ich fahre mit dem Auto nicht nach Wien» означає:',
      options: ['Їду не машиною', 'Машиною їду не до Відня',
        'Не їду взагалі', 'Їду до Відня не сам'], answer: 1 },
    { type: 'match', q: 'Доберіть тип конектора.',
      pairs: [['aber', 'нульова позиція'], ['trotzdem', 'займає 1-ше місце'],
        ['obwohl', 'дієслово в кінець'], ['und', 'нульова позиція, додавання'],
        ['weil', 'підрядне причини']] },
    { type: 'multi', q: 'Позначте слова, що займають перше місце й тягнуть дієслово на друге.',
      options: ['deshalb', 'aber', 'trotzdem', 'und', 'folglich'],
      answers: [0, 2, 4] },
    { type: 'truefalse', q: 'TeKaMoLo означає: час — причина — спосіб — місце.', answer: true },
    { type: 'truefalse', q: 'Перед іменником з означеним артиклем заперечення — <span class="de-inline">kein</span>.',
      answer: false,
      explain: 'Там nicht: «Das ist nicht das Buch, das ich meine».' },
  ],

  listening: [
    {
      exam: 'Goethe B2 · Hören Teil 3',
      title: 'Schreibberatung: Warum klingt mein Text zerstückelt?',
      instruction: 'Консультантка розбирає студентський текст. Слухайте поради щодо зв’язності.',
      lines: [
        { speaker: 'Beraterin', de: 'Ihr Text ist inhaltlich gut, aber er klingt zerstückelt. Wissen Sie, warum?', uk: 'Ваш текст змістовно добрий, але звучить розірваним. Знаєте чому?' },
        { speaker: 'Student', de: 'Ich vermute, meine Sätze sind zu kurz?', uk: 'Припускаю, мої речення надто короткі?' },
        { speaker: 'Beraterin', de: 'Nicht nur. Sie wiederholen dasselbe Substantiv sechsmal. Nehmen Sie ab dem zweiten Mal ein Pronomen oder ein zusammenfassendes Wort.', uk: 'Не тільки. Ви повторюєте той самий іменник шість разів. Із другого разу беріть займенник або підсумкове слово.' },
        { speaker: 'Student', de: 'Also statt «die Regelung» dann «sie» oder «diese Vorschrift»?', uk: 'Тобто замість «правило» тоді «воно» або «цей припис»?' },
        { speaker: 'Beraterin', de: 'Genau. Zweiter Punkt: Sie beginnen fünf Sätze mit dem Subjekt. Stellen Sie ab und zu eine Zeitangabe voran.', uk: 'Саме так. Другий пункт: Ви починаєте п’ять речень із підмета. Час від часу виносьте вперед обставину часу.' },
        { speaker: 'Student', de: 'Und meine Konnektoren? Ich habe viel «und» benutzt.', uk: 'А мої конектори? Я багато вживав «und».' },
        { speaker: 'Beraterin', de: 'Das ist der dritte Punkt. «Und» zeigt keine Logik. Fragen Sie sich bei jedem Übergang: Ist das ein Grund, ein Gegensatz oder eine Ergänzung? Dann nehmen Sie deshalb, allerdings oder zudem.', uk: 'Це третій пункт. «І» не показує логіки. Питайте себе на кожному переході: це причина, протиставлення чи додавання? Тоді беріть deshalb, allerdings або zudem.' },
        { speaker: 'Student', de: 'Das klingt machbar. Reicht ein Konnektor pro Satz?', uk: 'Це звучить здійсненно. Одного конектора на речення досить?' },
        { speaker: 'Beraterin', de: 'Einer genügt, zwei sind zu viel. Und achten Sie darauf, dass nach trotzdem das Verb an zweiter Stelle steht.', uk: 'Одного достатньо, два — це вже занадто. І зважайте, щоб після trotzdem дієслово стояло на другому місці.' },
      ],
      tasks: [
        { type: 'choice', q: 'Was ist das Hauptproblem des Textes?',
          options: ['Falsche Grammatik', 'Fehlende Zusammenhänge', 'Zu wenig Inhalt', 'Falscher Ton'], answer: 1 },
        { type: 'choice', q: 'Was empfiehlt die Beraterin gegen Wiederholungen?',
          options: ['Sätze löschen', 'Pronomen oder zusammenfassende Wörter',
            'Mehr Adjektive', 'Passiv verwenden'], answer: 1 },
        { type: 'gap', q: 'Der Student hat dasselbe Substantiv ___ verwendet. (скільки разів)',
          answers: ['sechsmal'] },
        { type: 'truefalse', q: 'Zwei Konnektoren pro Satz sind laut Beraterin besser.', answer: false,
          explain: '«Einer genügt, zwei sind zu viel».' },
        { type: 'multi', q: 'Welche drei Punkte nennt die Beraterin?',
          options: ['Wiederholung des Substantivs', 'Alle Sätze beginnen mit dem Subjekt',
            'Zu viele «und»', 'Falsche Zeitformen'],
          answers: [0, 1, 2] },
      ],
    },
  ],

  writing: [
    {
      exam: 'Goethe B2 · Schreiben Teil 1',
      title: 'Stellungnahme: Sollten Städte autofrei werden?',
      situation: 'Газета запитує: «Чи мають центри міст стати вільними від машин?» Напишіть текст-позицію: <strong>150–180 слів</strong>. Головна вимога — зв’язність: щонайменше чотири різні конектори й одне підсумкове слово (<em>dieser Umstand</em>, <em>diese Entwicklung</em>).',
      points: [
        'Nehmen Sie klar Stellung.',
        'Nennen Sie ein Argument und ein Gegenargument.',
        'Verbinden Sie die Abschnitte mit Konnektoren.',
        'Formulieren Sie ein Fazit.',
      ],
      minWords: 150,
      phrases: [
        { de: 'Autofreie Innenstädte halte ich für sinnvoll.', uk: 'Вільні від машин центри вважаю доцільними.' },
        { de: 'Zunächst gewinnen die Menschen Platz zurück.', uk: 'Спершу люди повертають собі простір.' },
        { de: 'Allerdings betrifft das nicht alle gleich.', uk: 'Щоправда, це стосується не всіх однаково.' },
        { de: 'Dieser Umstand wird selten mitbedacht.', uk: 'Цю обставину рідко беруть до уваги.' },
        { de: 'Folglich braucht es zuerst einen guten Takt der Öffis.', uk: 'Отже, спершу потрібен добрий інтервал громадського транспорту.' },
        { de: 'Zusammenfassend halte ich einen schrittweisen Umbau für richtig.', uk: 'Підсумовуючи, вважаю правильною поетапну перебудову.' },
      ],
      checklist: [
        'Є щонайменше чотири різні конектори, і жодне речення не має двох?',
        'Після trotzdem / deshalb / folglich дієслово стоїть на другому місці?',
        'Є підсумкове слово, що стискає попередню думку?',
        'Речення починаються не тільки з підмета?',
        'Обсяг 150–180 слів, є висновок?',
      ],
      model:
`Autofreie Innenstädte halte ich grundsätzlich für sinnvoll, allerdings nicht als schnelle Lösung.

Zunächst gewinnen die Bewohner Platz zurück. Wo heute Parkstreifen liegen, entstehen Terrassen,
Radwege und Bäume; zudem sinkt der Lärm messbar. In Wien hat sich nach dem Umbau einer einzigen
Straße die Zahl der Fußgänger fast verdoppelt.

Allerdings betrifft eine solche Sperre nicht alle Menschen gleich. Wer im Umland wohnt und
in Schichten arbeitet, kommt mit einem Bus im Stundentakt kaum zur Arbeit. Dieser Umstand wird
in der Debatte selten mitbedacht, obwohl er über die Akzeptanz entscheidet. Folglich braucht es
zuerst einen dichteren Takt und günstige Tickets, erst danach die Sperre.

Hinzu kommt die Frage der Lieferungen. Geschäfte in der Innenstadt brauchen Zufahrten,
und ohne klare Zeitfenster verlagert sich das Problem nur auf die Nebenstraßen. Diese Entwicklung
lässt sich in mehreren Städten beobachten.

Zusammenfassend halte ich einen schrittweisen Umbau für richtig: eine Straße, ein Bezirk,
jeweils mit Messung und öffentlicher Auswertung. So lässt sich zeigen, was tatsächlich wirkt,
und Kritiker werden mit Zahlen statt mit Absichten überzeugt.`,
      modelUk: 'Переклад: Вільні від машин центри я вважаю принципово доцільними, проте не як швидке розв’язання. Спершу мешканці повертають собі простір. Там, де сьогодні лежать парковочні смуги, виникають тераси, велодоріжки й дерева; до того ж шум помітно знижується. У Відні після перебудови однієї єдиної вулиці кількість пішоходів майже подвоїлася. Щоправда, таке перекриття стосується не всіх людей однаково. Хто живе в передмісті й працює змінами, з автобусом раз на годину майже не дістанеться до роботи. Цю обставину в дискусії рідко беруть до уваги, хоча саме вона вирішує щодо сприйняття. Отже, спершу потрібен щільніший інтервал і недорогі квитки, і лише потім перекриття. Підсумовуючи, я вважаю правильною поетапну перебудову: одна вулиця, один район, кожного разу з вимірюванням і публічним аналізом. Так можна показати, що справді працює, і критиків переконують цифрами, а не намірами.',
    },
  ],

  test: [
    { type: 'order', q: 'Складіть речення за TeKaMoLo.',
      words: ['Sie', 'ist', 'gestern', 'wegen', 'der', 'Kälte', 'schnell', 'nach', 'Hause', 'gegangen'],
      answer: 'Sie ist gestern wegen der Kälte schnell nach Hause gegangen' },
    { type: 'order', q: 'Складіть речення.',
      words: ['Ich', 'schicke', 'es', 'dir', 'heute', 'Abend'],
      answer: 'Ich schicke es dir heute Abend' },
    { type: 'gap', q: 'Ich kenne diesen Mann ___. (заперечити все речення)', answers: ['nicht'] },
    { type: 'gap', q: 'Er hat ___ Geschwister. (заперечити іменник без артикля)', answers: ['keine'] },
    { type: 'gap', q: 'Es war spät. ___ sind wir noch gegangen. (та все ж)',
      answers: ['Trotzdem|Dennoch'] },
    { type: 'gap', q: 'Die Kosten stiegen. ___ wurde das Projekt gestoppt. (отже)',
      answers: ['Folglich|Deshalb|Darum'] },
    { type: 'choice', q: 'Правильний порядок додатків (два іменники):',
      options: ['Ich gebe das Buch dem Kind.', 'Ich gebe dem Kind das Buch.',
        'Ich gebe dem Buch das Kind.', 'Ich dem Kind gebe das Buch.'],
      answer: 1 },
    { type: 'choice', q: 'Яке слово НЕ займає першого місця?',
      options: ['deshalb', 'aber', 'trotzdem', 'folglich'], answer: 1 },
    { type: 'choice', q: 'Що йде в кінець рамки?',
      options: ['підмет', 'Partizip II або інфінітив', 'обставина часу', 'заперечення'], answer: 1 },
    { type: 'match', q: 'Доберіть переклад.',
      pairs: [['zunächst', 'спершу'], ['anschließend', 'потім'], ['allmählich', 'поступово'],
        ['versehentlich', 'помилково'], ['weitgehend', 'значною мірою'], ['demnach', 'відповідно']] },
    { type: 'multi', q: 'Позначте правильні речення.',
      options: ['Trotzdem gehe ich.', 'Trotzdem ich gehe.', 'Aber ich gehe.',
        'Obwohl ich müde bin, gehe ich.', 'Obwohl bin ich müde, gehe ich.'],
      answers: [0, 2, 3] },
    { type: 'multi', q: 'Позначте підсумкові слова, якими можна стиснути попередню думку.',
      options: ['dieser Umstand', 'diese Entwicklung', 'und', 'dieses Versäumnis', 'sehr'],
      answers: [0, 1, 3] },
    { type: 'truefalse', q: 'В одному реченні краще не ставити двох конекторів логіки.', answer: true },
    { type: 'truefalse', q: '<span class="de-inline">jedoch</span> може стояти і на першому місці, і в середині речення.',
      answer: true },
  ],
};

export const modules = [m6, m7, m8];
