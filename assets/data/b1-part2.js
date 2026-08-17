/* B1, модулі 3–5: часові підрядні з Plusquamperfekt, інфінітив з zu та цільові
   речення, непрямі питання й прийменникові об’єкти. */

const m3 = {
  id: 'm3',
  title: 'Temporalsätze und Plusquamperfekt',
  titleUk: 'Часові підрядні речення: als, wenn, nachdem, bevor, seit',
  can: [
    'відрізняти als від wenn і не плутати їх із wann',
    'будувати передминулий час (Plusquamperfekt)',
    'розповідати послідовність подій через nachdem і bevor',
    'уживати während, seit(dem), bis, sobald як сполучники',
    'не плутати ті самі слова в ролі прийменника й сполучника',
  ],

  grammar: [
    {
      title: '1. Сім сполучників часу — огляд',
      html: `
<p>Часове підрядне відповідає на питання <em>wann?</em> — коли. У ньому, як у будь-якому підрядному,
<strong>змінене дієслово стоїть у самому кінці</strong>. Ось повний набір, який потрібен на B1:</p>
<table>
<thead><tr><th>Сполучник</th><th>Переклад</th><th>Коли вживають</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td><strong>als</strong></td><td><strong>коли</strong> (одноразово, у минулому)</td>
<td>одна подія, що сталася раз</td>
<td><em>Als ich zwölf war, zogen wir nach Kyjiw.</em><span class="uk">Коли мені було дванадцять, ми переїхали до Києва.</span></td></tr>
<tr><td><strong>wenn</strong></td><td><strong>коли; щоразу коли; якщо</strong></td>
<td>повторювана дія або майбутнє</td>
<td><em>Wenn ich Zeit habe, lese ich.</em><span class="uk">Коли (щоразу як) маю час, читаю.</span></td></tr>
<tr><td><strong>während</strong></td><td><strong>поки, у той час як</strong></td>
<td>дві дії одночасно</td>
<td><em>Während sie kochte, deckte er den Tisch.</em><span class="uk">Поки вона готувала, він накривав стіл.</span></td></tr>
<tr><td><strong>bevor</strong></td><td><strong>перед тим як</strong></td>
<td>дія підрядного — <u>пізніша</u></td>
<td><em>Bevor ich gehe, rufe ich dich an.</em><span class="uk">Перед тим як піти, я тобі подзвоню.</span></td></tr>
<tr><td><strong>nachdem</strong></td><td><strong>після того як</strong></td>
<td>дія підрядного — <u>раніша</u></td>
<td><em>Nachdem er gegessen hatte, ging er schlafen.</em><span class="uk">Після того як він поїв, він пішов спати.</span></td></tr>
<tr><td><strong>seit / seitdem</strong></td><td><strong>відколи, з того часу як</strong></td>
<td>початок у минулому, триває досі</td>
<td><em>Seit ich hier wohne, fahre ich Rad.</em><span class="uk">Відколи я тут живу, я їжджу на велосипеді.</span></td></tr>
<tr><td><strong>bis</strong></td><td><strong>доки, поки не</strong></td>
<td>межа, до якої триває дія</td>
<td><em>Warte, bis der Regen aufhört.</em><span class="uk">Почекай, доки дощ не скінчиться.</span></td></tr>
<tr><td><strong>sobald</strong></td><td><strong>щойно, як тільки</strong></td>
<td>відразу після події</td>
<td><em>Sobald ich ankomme, schreibe ich.</em><span class="uk">Щойно приїду, напишу.</span></td></tr>
</tbody></table>
<div class="callout callout--tip"><strong>Увага до «bis».</strong> Німецьке <em>bis</em> не потребує заперечення,
українське «поки <u>не</u>» — потребує. <em>Warte, bis er kommt</em> = «Почекай, поки він <u>не</u> прийде».
Не додавайте <em>nicht</em> — це типова помилка українців.</div>`,
    },
    {
      title: '2. als чи wenn? (і до чого тут wann)',
      html: `
<p>Це найчастіша плутанина рівня B1. Розрізняє їх <strong>кількість разів</strong>, а не час.</p>
<table>
<thead><tr><th>Ситуація</th><th>Слово</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td>минуле, <strong>один</strong> раз</td><td><strong>als</strong></td>
<td><em>Als ich nach Wien kam, sprach ich kein Deutsch.</em><span class="uk">Коли я приїхав до Відня, я не говорив німецькою. (приїхав один раз)</span></td></tr>
<tr><td>минуле, <strong>багато</strong> разів</td><td><strong>wenn</strong> (часто з <em>immer</em>)</td>
<td><em>Immer wenn wir Oma besuchten, backte sie Kuchen.</em><span class="uk">Щоразу коли ми відвідували бабусю, вона пекла пиріг.</span></td></tr>
<tr><td>теперішнє або майбутнє</td><td><strong>wenn</strong></td>
<td><em>Wenn ich nach Hause komme, dusche ich zuerst.</em><span class="uk">Коли приходжу додому, спершу йду в душ.</span></td></tr>
<tr><td><strong>питання</strong> «коли?»</td><td><strong>wann</strong></td>
<td><em>Wann kommst du?</em><span class="uk">Коли ти прийдеш?</span></td></tr>
<tr><td>непряме питання</td><td><strong>wann</strong></td>
<td><em>Ich weiß nicht, wann er kommt.</em><span class="uk">Я не знаю, коли він прийде.</span></td></tr>
</tbody></table>
<div class="callout"><strong>Перевірка одним рухом.</strong> Спробуйте вставити «щоразу». Пасує —
беріть <em>wenn</em>. Не пасує, а подія в минулому й одноразова — <em>als</em>.
Стоїть знак питання (прямий чи схований) — <em>wann</em>.</div>
<p>Ще одна пастка: <em>wenn</em> означає і «коли», і «якщо». Німець розрізняє їх за змістом,
тому не бійтеся, що вас не зрозуміють: <em>Wenn es regnet, bleiben wir zu Hause</em> — «Якщо
(або: коли) буде дощ, залишимося вдома».</p>`,
    },
    {
      title: '3. Plusquamperfekt: передминулий час',
      html: `
<p>Plusquamperfekt показує дію, яка сталася <strong>раніше за іншу минулу дію</strong>.
Форма проста — це Perfekt, у якому допоміжне дієслово стоїть у Präteritum:</p>
<table>
<thead><tr><th>Час</th><th>Формула</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td>Perfekt</td><td><em>habe / bin</em> + Partizip II</td>
<td><em>Ich habe gegessen.</em><span class="uk">Я поїв.</span></td></tr>
<tr><td><strong>Plusquamperfekt</strong></td><td><strong><em>hatte / war</em> + Partizip II</strong></td>
<td><em>Ich hatte gegessen.</em><span class="uk">Я (вже) був поїв — до того моменту.</span></td></tr>
</tbody></table>
<p><strong>Повне відмінювання</strong> (допоміжне дієслово те саме, що й у Perfekt):</p>
<table>
<thead><tr><th>З <em>haben</em></th><th>З <em>sein</em></th></tr></thead>
<tbody>
<tr><td><em>ich <strong>hatte</strong> gearbeitet</em><span class="uk">я (вже) був працював</span></td>
<td><em>ich <strong>war</strong> gefahren</em><span class="uk">я (вже) був поїхав</span></td></tr>
<tr><td><em>du <strong>hattest</strong> gearbeitet</em></td><td><em>du <strong>warst</strong> gefahren</em></td></tr>
<tr><td><em>er <strong>hatte</strong> gearbeitet</em></td><td><em>er <strong>war</strong> gefahren</em></td></tr>
<tr><td><em>wir <strong>hatten</strong> gearbeitet</em></td><td><em>wir <strong>waren</strong> gefahren</em></td></tr>
<tr><td><em>ihr <strong>hattet</strong> gearbeitet</em></td><td><em>ihr <strong>wart</strong> gefahren</em></td></tr>
<tr><td><em>sie <strong>hatten</strong> gearbeitet</em></td><td><em>sie <strong>waren</strong> gefahren</em></td></tr>
</tbody></table>
<div class="callout callout--tip"><strong>Українською окремої форми немає.</strong> Ми кажемо просто
«поїв», а порядок подій добудовуємо словами «вже», «до того», «перед тим».
Тому перекладайте Plusquamperfekt звичайним минулим і за потреби додавайте «вже».</div>
<p><strong>Де його справді треба:</strong> майже завжди — у парі з <em>nachdem</em>. Поза цією
конструкцією носії частіше обходяться Perfekt.</p>`,
    },
    {
      title: '4. nachdem і bevor: обов’язкова зміна часів',
      html: `
<p>Це єдине правило теми, яке потрібно вивчити напам’ять. У реченні з <em>nachdem</em> дві частини
стоять у <strong>різних</strong> часах, бо одна подія раніша за іншу.</p>
<table>
<thead><tr><th>Головне речення</th><th>Підрядне з nachdem</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td>Präteritum / Perfekt (минуле)</td><td><strong>Plusquamperfekt</strong></td>
<td><em><strong>Nachdem</strong> ich die Prüfung <strong>bestanden hatte</strong>, feierte ich mit Freunden.</em>
<span class="uk">Після того як я склав іспит, я святкував із друзями.</span></td></tr>
<tr><td>Präsens (теперішнє / майбутнє)</td><td><strong>Perfekt</strong></td>
<td><em><strong>Nachdem</strong> ich <strong>gefrühstückt habe</strong>, gehe ich zur Arbeit.</em>
<span class="uk">Після того як поснідаю, іду на роботу.</span></td></tr>
</tbody></table>
<div class="callout"><strong>Логіка правила.</strong> <em>nachdem</em> уже саме означає «після того як»,
тобто підрядне мусить бути <u>на крок глибше в минуле</u>, ніж головне. Німецька позначає цей крок
формою дієслова, а не лише словом.</div>
<p>Із <em>bevor</em> усе навпаки — і значно простіше: <strong>обидві частини в тому самому часі</strong>,
бо «перед тим як» вже саме вказує порядок.</p>
<ul>
<li><em><strong>Bevor</strong> ich ins Bett <strong>ging</strong>, <strong>putzte</strong> ich mir die Zähne.</em>
<span class="uk">Перед тим як лягти спати, я почистив зуби.</span></li>
<li><em><strong>Bevor</strong> du <strong>gehst</strong>, <strong>schließ</strong> bitte das Fenster.</em>
<span class="uk">Перед тим як піти, зачини, будь ласка, вікно.</span></li>
</ul>
<div class="callout callout--tip"><strong>Практична порада для іспиту.</strong> Одне речення з
<em>nachdem</em> + Plusquamperfekt у письмовій частині — надійний спосіб показати, що ви володієте
складними часами. Але не більше двох на текст: у розмовній німецькій ця конструкція звучить книжно.</div>`,
    },
    {
      title: '5. Ті самі слова як прийменники',
      html: `
<p>Чотири слова з цієї теми працюють і як сполучник (далі — ціле речення з дієсловом),
і як прийменник (далі — лише іменник). Відмінок при цьому різний.</p>
<table>
<thead><tr><th>Слово</th><th>Сполучник + речення</th><th>Прийменник + іменник</th></tr></thead>
<tbody>
<tr><td><strong>während</strong></td>
<td><em>Während ich <strong>studierte</strong>, arbeitete ich nebenbei.</em><span class="uk">Поки я навчався, я підробляв.</span></td>
<td>+ <strong>Genitiv</strong>: <em>während <strong>des</strong> Studium<strong>s</strong></em><span class="uk">під час навчання</span></td></tr>
<tr><td><strong>seit</strong></td>
<td><em>Seit ich hier <strong>wohne</strong>, …</em><span class="uk">відколи я тут живу</span></td>
<td>+ <strong>Dativ</strong>: <em>seit <strong>drei Jahren</strong></em><span class="uk">три роки тому й досі</span></td></tr>
<tr><td><strong>bis</strong></td>
<td><em>Bis er <strong>kommt</strong>, …</em><span class="uk">доки він не прийде</span></td>
<td>+ час без артикля: <em>bis Montag</em><span class="uk">до понеділка</span></td></tr>
<tr><td><strong>nach</strong> / nachdem</td>
<td>сполучник — <em>nach<strong>dem</strong></em>: <em>Nachdem er <strong>ankam</strong>, …</em></td>
<td>прийменник — <em>nach</em> + <strong>Dativ</strong>: <em>nach <strong>dem</strong> Essen</em><span class="uk">після їжі</span></td></tr>
</tbody></table>
<div class="callout"><strong>Найпоширеніша помилка.</strong> <em>nach</em> і <em>nachdem</em> — різні слова.
Не кажіть «<s>nach ich gegessen hatte</s>» і не кажіть «<s>nachdem dem Essen</s>».
Правило: є дієслово — потрібне <em>nachdem</em>; є тільки іменник — <em>nach</em>.</div>
<p><strong>Ще один спосіб стиснути думку</strong> без підрядного — прийменник <em>vor</em> + Dativ
замість <em>bevor</em>: <em>vor dem Essen</em> = «перед їжею» = <em>bevor wir essen</em>.</p>`,
    },
    {
      title: '6. Слова з прикладів цієї теми',
      html: `
<table>
<thead><tr><th>Слово</th><th>Переклад</th><th>Як ужито в темі</th></tr></thead>
<tbody>
<tr><td><em>umziehen (zog um, ist umgezogen)</em></td><td>переїжджати (у інше житло)</td><td><em>Als ich zwölf war, zogen wir nach Kyjiw.</em></td></tr>
<tr><td><em>den Tisch decken</em></td><td>накривати стіл</td><td><em>Während sie kochte, deckte er den Tisch.</em></td></tr>
<tr><td><em>aufhören</em></td><td>припинятися, закінчуватися</td><td><em>Warte, bis der Regen aufhört.</em></td></tr>
<tr><td><em>eine Prüfung bestehen</em></td><td>скласти іспит (успішно)</td><td><em>Nachdem ich die Prüfung bestanden hatte, …</em></td></tr>
<tr><td><em>feiern</em></td><td>святкувати</td><td><em>… feierte ich mit Freunden.</em></td></tr>
<tr><td><em>frühstücken</em></td><td>снідати</td><td><em>Nachdem ich gefrühstückt habe, …</em></td></tr>
<tr><td><em>sich die Zähne putzen</em></td><td>чистити зуби</td><td><em>Bevor ich ins Bett ging, putzte ich mir die Zähne.</em></td></tr>
<tr><td><em>nebenbei</em></td><td>додатково, паралельно</td><td><em>Während ich studierte, arbeitete ich nebenbei.</em></td></tr>
<tr><td><em>ankommen</em></td><td>прибувати, доїжджати</td><td><em>Sobald ich ankomme, schreibe ich.</em></td></tr>
<tr><td><em>der Wendepunkt, -e</em></td><td>переломний момент</td><td>Тема письмового завдання цього модуля.</td></tr>
</tbody></table>`,
    },
  ],
  exercises: [
    { type: 'choice', q: '___ ich ein Kind war, wohnten wir in Lwiw.',
      options: ['Wenn', 'Als', 'Wann', 'Während'], answer: 1,
      explain: 'Минуле й одноразово (дитинство було раз) — als.' },
    { type: 'choice', q: 'Immer ___ es regnet, nehme ich den Bus.',
      options: ['als', 'wenn', 'wann', 'nachdem'], answer: 1,
      explain: '«Щоразу» — повторювана дія, тому wenn.' },
    { type: 'choice', q: 'Weißt du, ___ der Zug abfährt?',
      options: ['als', 'wenn', 'wann', 'während'], answer: 2,
      explain: 'Це схоплене питання — непряме питання з wann.' },
    { type: 'gap', q: 'Nachdem ich gegessen ___, ging ich spazieren. (haben, Plusquamperfekt)',
      answers: ['hatte'] },
    { type: 'gap', q: 'Nachdem wir angekommen ___, riefen wir sofort an. (sein, Plusquamperfekt)',
      answers: ['waren'] },
    { type: 'gap', q: 'Nachdem ich gefrühstückt ___, gehe ich zur Arbeit. (Perfekt — головне в Präsens)',
      answers: ['habe'] },
    { type: 'gap', q: '___ ich hier wohne, fahre ich jeden Tag Rad. (відколи)',
      answers: ['Seit|Seitdem'] },
    { type: 'gap', q: 'Warte bitte, ___ ich fertig bin. (доки)',
      answers: ['bis'] },
    { type: 'gap', q: '___ ich das Haus verlasse, schließe ich alle Fenster. (перед тим як)',
      answers: ['Bevor'] },
    { type: 'gap', q: 'Заповніть пропуски: під час навчання — ___ des Studiums; поки я навчався — ___ ich studierte.',
      answers: ['während', 'während'],
      explain: 'Одне слово, дві ролі: з іменником у Genitiv — прийменник; з дієсловом у кінці — сполучник.' },
    { type: 'order', q: 'Складіть речення.',
      words: ['Nachdem', 'er', 'die', 'Prüfung', 'bestanden', 'hatte', 'feierte', 'er'],
      answer: 'Nachdem er die Prüfung bestanden hatte feierte er' },
    { type: 'order', q: 'Складіть речення.',
      words: ['Während', 'ich', 'kochte', 'deckte', 'mein', 'Bruder', 'den', 'Tisch'],
      answer: 'Während ich kochte deckte mein Bruder den Tisch' },
    { type: 'match', q: 'Доберіть переклад сполучника.',
      pairs: [['als', 'коли (одноразово в минулому)'], ['während', 'поки, у той час як'], ['bevor', 'перед тим як'],
        ['nachdem', 'після того як'], ['sobald', 'щойно'], ['bis', 'доки']] },
    { type: 'multi', q: 'Позначте речення, у яких потрібен Plusquamperfekt.',
      options: ['Nachdem er gegangen war, wurde es still.', 'Bevor er ging, sagte er tschüss.',
        'Nachdem sie studiert hatte, fand sie eine Stelle.', 'Während sie las, schlief er.',
        'Nachdem ich gepackt hatte, rief ich ein Taxi.'],
      answers: [0, 2, 4],
      explain: 'Plusquamperfekt потрібен саме після nachdem, коли головне речення в минулому.' },
    { type: 'truefalse', q: 'Німецьке <span class="de-inline">bis</span> вимагає заперечення, як українське «поки не».',
      answer: false,
      explain: '«Warte, bis er kommt» — без nicht. Заперечення додається лише в українському перекладі.' },
  ],

  listening: [
    {
      exam: 'Goethe B1 · Hören Teil 3',
      title: 'Zwei Kollegen über den Berufswechsel',
      instruction: 'Оля розповідає, як вона змінила фах. Слідкуйте за порядком подій.',
      lines: [
        { speaker: 'Martin', de: 'Olja, du bist doch früher Buchhalterin gewesen, oder?', uk: 'Олю, ти ж раніше була бухгалтеркою, чи не так?' },
        { speaker: 'Olja', de: 'Ja, fast acht Jahre. Als ich nach Österreich kam, habe ich sofort in einer kleinen Firma angefangen.', uk: 'Так, майже вісім років. Коли я приїхала до Австрії, я відразу почала в невеликій фірмі.' },
        { speaker: 'Martin', de: 'Und wann hast du gemerkt, dass du etwas anderes machen willst?', uk: 'А коли ти зрозуміла, що хочеш робити щось інше?' },
        { speaker: 'Olja', de: 'Nachdem ich zwei Jahre im Homeoffice gearbeitet hatte, wurde mir klar: Zahlen allein machen mich nicht glücklich.', uk: 'Після того як я два роки пропрацювала вдома, мені стало ясно: самі цифри не роблять мене щасливою.' },
        { speaker: 'Martin', de: 'Und dann hast du einfach gekündigt?', uk: 'І тоді ти просто звільнилася?' },
        { speaker: 'Olja', de: 'Nicht ganz. Bevor ich gekündigt habe, habe ich mich abends zwei Semester weitergebildet.', uk: 'Не зовсім. Перед тим як звільнитися, я два семестри вечорами підвищувала кваліфікацію.' },
        { speaker: 'Martin', de: 'Klug. Und seitdem arbeitest du im Personalbereich?', uk: 'Розумно. І відтоді ти працюєш у кадровій сфері?' },
        { speaker: 'Olja', de: 'Genau. Seit ich dort bin, gehe ich morgens gern ins Büro. Sobald eine Stelle frei wird, sag ich dir Bescheid.', uk: 'Саме так. Відколи я там, я зранку охоче йду в офіс. Щойно звільниться посада, я тобі скажу.' },
      ],
      tasks: [
        { type: 'choice', q: 'Wie lange war Olja Buchhalterin?',
          options: ['Zwei Jahre', 'Fast acht Jahre', 'Zwei Semester', 'Seit sie in Österreich ist'], answer: 1 },
        { type: 'choice', q: 'Wann wurde ihr klar, dass sie wechseln will?',
          options: ['Bevor sie nach Österreich kam', 'Nachdem sie zwei Jahre im Homeoffice gearbeitet hatte',
            'Nachdem sie gekündigt hatte', 'Als sie die Weiterbildung beendet hatte'], answer: 1 },
        { type: 'truefalse', q: 'Olja hat zuerst gekündigt und dann eine Weiterbildung gemacht.', answer: false,
          explain: '«Bevor ich gekündigt habe, habe ich mich weitergebildet» — навчання було першим.' },
        { type: 'gap', q: 'Sie hat sich ___ Semester weitergebildet.', answers: ['zwei'] },
        { type: 'multi', q: 'Was stimmt?',
          options: ['Olja arbeitet jetzt im Personalbereich.', 'Sie geht morgens gern ins Büro.',
            'Sie ist noch Buchhalterin.', 'Sie will Martin über freie Stellen informieren.'],
          answers: [0, 1, 3] },
      ],
    },
  ],

  writing: [
    {
      exam: 'Goethe B1 · Schreiben Teil 1',
      title: 'E-Mail: ein Wendepunkt in Ihrem Leben',
      situation: 'Ваш друг Andreas запитав, яке рішення найбільше змінило ваше життя. Напишіть йому імейл: <strong>80–100 слів</strong>, неформальний стиль (du). Розкажіть історію по порядку й уживіть <em>als</em>, <em>nachdem</em> + Plusquamperfekt і <em>seit</em>.',
      points: [
        'Beschreiben Sie die Situation vorher.',
        'Erzählen Sie, wann und wie Sie die Entscheidung getroffen haben.',
        'Sagen Sie, was sich danach verändert hat.',
        'Fragen Sie Andreas nach seiner Erfahrung.',
      ],
      minWords: 80,
      phrases: [
        { de: 'Als ich zwanzig war, …', uk: 'Коли мені було двадцять, …' },
        { de: 'Damals hatte ich noch keine Ahnung, was ich wollte.', uk: 'Тоді я ще не мав уявлення, чого хочу.' },
        { de: 'Nachdem ich lange überlegt hatte, habe ich mich entschieden.', uk: 'Після того як я довго розмірковував, я вирішив.' },
        { de: 'Seitdem ist mein Alltag völlig anders.', uk: 'З того часу мій побут абсолютно інший.' },
        { de: 'Bevor ich das gemacht habe, hatte ich Angst.', uk: 'Перед тим як це зробити, я боявся.' },
        { de: 'Und wie war das bei dir?', uk: 'А як це було в тебе?' },
      ],
      checklist: [
        'Є речення з als про одноразову подію в минулому?',
        'Є nachdem + Plusquamperfekt (hatte / war + Partizip II)?',
        'Є seit або seitdem про те, що триває досі?',
        'Події викладено в чіткому порядку (zuerst, dann, danach)?',
        'Ви послідовно звертаєтеся на du й поставили питання Андреасові?',
      ],
      model:
`Hallo Andreas,

du hast gefragt, welche Entscheidung mein Leben verändert hat. Das war der Umzug nach Wien.

Als ich in Lwiw studierte, arbeitete ich nebenbei in einem Büro und war eigentlich zufrieden.
Trotzdem hatte ich das Gefühl, dass ich mehr sehen wollte. Nachdem ich ein halbes Jahr überlegt hatte,
bewarb ich mich um ein Stipendium — und bekam es tatsächlich.

Die ersten Monate waren hart, weil ich kaum Deutsch sprach. Seitdem hat sich fast alles geändert:
Ich habe hier gute Freunde gefunden und arbeite in einem Beruf, der mir wirklich gefällt.

Und wie war das bei dir? Gab es bei dir auch so einen Moment?

Liebe Grüße
Iryna`,
      modelUk: 'Переклад: Привіт, Андреасе! Ти питав, яке рішення змінило моє життя. Це був переїзд до Відня. Коли я навчалася у Львові, я паралельно працювала в офісі й була, власне, задоволена. І все ж я відчувала, що хочу побачити більше. Після того як я півроку розмірковувала, я подала документи на стипендію — і справді її отримала. Перші місяці були важкі, бо я майже не говорила німецькою. З того часу змінилося майже все: я знайшла тут добрих друзів і працюю в професії, яка мені справді до душі. А як це було в тебе? У тебе теж був такий момент? З теплом, Ірина.',
    },
  ],

  test: [
    { type: 'choice', q: '___ ich klein war, hatten wir einen Hund.',
      options: ['Wenn', 'Als', 'Wann', 'Seit'], answer: 1 },
    { type: 'choice', q: 'Immer ___ ich ihn sehe, lacht er.',
      options: ['als', 'wenn', 'wann', 'bevor'], answer: 1 },
    { type: 'choice', q: 'Ich weiß noch nicht, ___ ich Urlaub nehme.',
      options: ['als', 'wenn', 'wann', 'während'], answer: 2 },
    { type: 'gap', q: 'Nachdem sie umgezogen ___, fühlte sie sich viel besser. (sein)',
      answers: ['war'] },
    { type: 'gap', q: 'Nachdem ich den Vertrag gelesen ___, unterschrieb ich. (haben)',
      answers: ['hatte'] },
    { type: 'gap', q: '___ ich in Wien lebe, spreche ich täglich Deutsch. (відколи)',
      answers: ['Seit|Seitdem'] },
    { type: 'gap', q: 'Bleib hier, ___ der Arzt kommt. (доки)', answers: ['bis'] },
    { type: 'gap', q: 'Прийменник чи сполучник: ___ dem Essen ruhen wir uns aus; ___ wir gegessen haben, ruhen wir uns aus.',
      answers: ['Nach', 'Nachdem'] },
    { type: 'order', q: 'Складіть речення.',
      words: ['Bevor', 'ich', 'einkaufen', 'gehe', 'schreibe', 'ich', 'eine', 'Liste'],
      answer: 'Bevor ich einkaufen gehe schreibe ich eine Liste' },
    { type: 'order', q: 'Складіть речення.',
      words: ['Sobald', 'der', 'Film', 'zu', 'Ende', 'ist', 'rufe', 'ich', 'dich', 'an'],
      answer: 'Sobald der Film zu Ende ist rufe ich dich an' },
    { type: 'match', q: 'Доберіть переклад.',
      pairs: [['der Abschluss', 'диплом'], ['kündigen', 'звільнятися'], ['der Umzug', 'переїзд'],
        ['die Entscheidung', 'рішення'], ['die Erfahrung', 'досвід'], ['sich bewerben', 'подавати заявку']] },
    { type: 'multi', q: 'Позначте правильні речення.',
      options: ['Nachdem ich gegessen hatte, ging ich schlafen.',
        'Nachdem ich gegessen habe, ging ich schlafen.',
        'Bevor ich ging, schloss ich die Tür.',
        'Während des Studiums arbeitete ich nebenbei.',
        'Nach ich gegessen hatte, ging ich schlafen.'],
      answers: [0, 2, 3],
      explain: 'Друге хибне через час, останнє — через «nach» замість «nachdem».' },
    { type: 'truefalse', q: 'У реченні з <span class="de-inline">bevor</span> обидві частини стоять у тому самому часі.',
      answer: true },
    { type: 'truefalse', q: '<span class="de-inline">während</span> як прийменник вимагає Dativ.',
      answer: false,
      explain: 'Genitiv: während des Studiums, während der Woche.' },
  ],
};

const m4 = {
  id: 'm4',
  title: 'Infinitiv mit zu und Finalsätze',
  titleUk: 'Інфінітив із zu та цільові речення: um … zu, damit, ohne … zu, statt … zu',
  can: [
    'будувати конструкцію «дієслово + zu + інфінітив»',
    'висловлювати мету через um … zu і damit',
    'обирати між um … zu і damit за підметом',
    'уживати ohne … zu і statt … zu',
    'знати дієслова, після яких zu не ставиться',
  ],

  grammar: [
    {
      title: '1. Основна схема: … zu + Infinitiv',
      html: `
<p>Багато німецьких дієслів і виразів вимагають після себе другого дієслова
з часткою <em>zu</em>. Українською це найчастіше просто інфінітив: «почав <u>читати</u>»,
«забув <u>подзвонити</u>».</p>
<table>
<thead><tr><th>Вираз</th><th>Переклад</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td><em>anfangen / beginnen zu</em></td><td>починати</td>
<td><em>Er fing an <strong>zu lachen</strong>.</em><span class="uk">Він почав сміятися.</span></td></tr>
<tr><td><em>vergessen zu</em></td><td>забути</td>
<td><em>Ich habe vergessen, dich <strong>anzurufen</strong>.</em><span class="uk">Я забув тобі подзвонити.</span></td></tr>
<tr><td><em>versuchen zu</em></td><td>намагатися</td>
<td><em>Sie versucht, früher <strong>aufzustehen</strong>.</em><span class="uk">Вона намагається вставати раніше.</span></td></tr>
<tr><td><em>vorhaben zu</em></td><td>мати намір, планувати</td>
<td><em>Wir haben vor, im Juni <strong>umzuziehen</strong>.</em><span class="uk">Ми плануємо переїхати в червні.</span></td></tr>
<tr><td><em>Lust haben zu</em></td><td>мати охоту</td>
<td><em>Hast du Lust, ins Kino <strong>zu gehen</strong>?</em><span class="uk">Маєш охоту піти в кіно?</span></td></tr>
<tr><td><em>Es ist wichtig / schwer / möglich zu</em></td><td>важливо / важко / можливо</td>
<td><em>Es ist wichtig, jeden Tag <strong>zu üben</strong>.</em><span class="uk">Важливо вправлятися щодня.</span></td></tr>
<tr><td><em>sich freuen zu</em></td><td>радіти</td>
<td><em>Ich freue mich, Sie <strong>kennenzulernen</strong>.</em><span class="uk">Радий познайомитися з Вами.</span></td></tr>
<tr><td><em>aufhören zu</em></td><td>припиняти</td>
<td><em>Hör auf, so viel <strong>zu reden</strong>!</em><span class="uk">Припини так багато балакати!</span></td></tr>
</tbody></table>
<div class="callout callout--tip"><strong>Місце zu у дієсловах із приставкою.</strong>
У відокремлюваних дієслів <em>zu</em> стає <u>всередину</u>, і все пишеться одним словом:
<em>anrufen → an<strong>zu</strong>rufen</em>, <em>aufstehen → auf<strong>zu</strong>stehen</em>,
<em>umziehen → um<strong>zu</strong>ziehen</em>. У невідокремлюваних — окремо перед дієсловом:
<em>verstehen → <strong>zu</strong> verstehen</em>, <em>bekommen → <strong>zu</strong> bekommen</em>.</div>
<p><strong>Порядок слів:</strong> група з <em>zu</em> стоїть у кінці, а перед нею — кома,
якщо в групі є ще якісь слова: <em>Ich hoffe, dich bald zu sehen.</em>
Коротке «дієслово + zu + інфінітив» без додатків коми не потребує: <em>Er begann zu weinen.</em></p>`,
    },
    {
      title: '2. Де zu НЕ ставлять',
      html: `
<p>Три групи дієслів беруть чистий інфінітив без <em>zu</em>. Їх варто знати як список.</p>
<table>
<thead><tr><th>Група</th><th>Дієслова</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td><strong>Модальні</strong></td><td><em>können, müssen, wollen, sollen, dürfen, möchten</em></td>
<td><em>Ich muss <strong>arbeiten</strong>.</em><span class="uk">Я мушу працювати.</span></td></tr>
<tr><td><strong>Руху й відчуття</strong></td><td><em>gehen, fahren, kommen; sehen, hören, fühlen</em></td>
<td><em>Ich gehe <strong>schwimmen</strong>. / Ich höre ihn <strong>singen</strong>.</em>
<span class="uk">Я йду плавати. / Я чую, як він співає.</span></td></tr>
<tr><td><strong>lassen, bleiben, lernen, helfen</strong></td><td>—</td>
<td><em>Ich lasse das Auto <strong>reparieren</strong>.</em><span class="uk">Я віддаю машину в ремонт (дослівно: даю відремонтувати).</span></td></tr>
</tbody></table>
<div class="callout"><strong>Типова помилка.</strong> «<s>Ich muss zu arbeiten</s>» — після модального
дієслова <em>zu</em> ніколи не буває. І навпаки: «<s>Ich habe vor umzuziehen ohne zu</s>» — після
<em>vorhaben</em> <em>zu</em> обов’язкове.</div>
<p><em>helfen</em> і <em>lernen</em> допускають обидва варіанти: <em>Er hilft mir kochen</em> і
<em>Er hilft mir, das Formular auszufüllen</em>. З довшою групою слів <em>zu</em> природніше.</p>`,
    },
    {
      title: '3. Мета: um … zu проти damit',
      html: `
<p>Обидві конструкції відповідають на питання <em>wozu?</em> / <em>warum?</em> — «для чого?».
Українською обидві — «щоб». Вибір залежить від <strong>одного</strong>: чи однаковий підмет
у двох частинах.</p>
<table>
<thead><tr><th>Умова</th><th>Конструкція</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td>підмет <strong>той самий</strong></td><td><strong>um … zu</strong> + Infinitiv<br>(підмет у групі не повторюють)</td>
<td><em><strong>Ich</strong> lerne Deutsch, <strong>um</strong> in Wien <strong>zu</strong> studieren.</em>
<span class="uk">Я вчу німецьку, щоб (я) навчатися у Відні.</span></td></tr>
<tr><td>підмети <strong>різні</strong></td><td><strong>damit</strong> + ціле речення<br>(дієслово в кінці)</td>
<td><em><strong>Ich</strong> spreche langsam, <strong>damit</strong> <strong>alle</strong> mich <strong>verstehen</strong>.</em>
<span class="uk">Я говорю повільно, щоб усі мене розуміли.</span></td></tr>
</tbody></table>
<p>Коли підмет той самий, <em>damit</em> формально теж можливий, але звучить важко.
Носії беруть <em>um … zu</em>. А коли підмети різні, <em>um … zu</em> <strong>неможливий</strong> —
це вже помилка, а не стилістика:</p>
<ul>
<li>✔ <em>Ich schreibe es auf, <strong>damit du</strong> es nicht vergisst.</em></li>
<li>✘ <s>Ich schreibe es auf, um du es nicht zu vergessen.</s></li>
</ul>
<div class="callout callout--tip"><strong>Швидка перевірка.</strong> Перекладіть речення українською
й подивіться, хто виконує другу дію. «Я вчу, щоб <u>я</u> навчався» → <em>um … zu</em>.
«Я говорю, щоб <u>вони</u> розуміли» → <em>damit</em>.</div>
<p><strong>Ще один спосіб сказати мету</strong> — прийменник <em>zu</em> + Dativ або <em>für</em> + Akkusativ
з іменником: <em>Ich lerne Deutsch <strong>für</strong> mein Studium</em> — «для навчання».</p>`,
    },
    {
      title: '4. ohne … zu і statt … zu',
      html: `
<p>Ці дві конструкції працюють точно як <em>um … zu</em>: підмет мусить бути той самий,
у групі стоїть <em>zu</em> + інфінітив.</p>
<table>
<thead><tr><th>Конструкція</th><th>Переклад</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td><strong>ohne … zu</strong></td><td><strong>не роблячи чогось; без того щоб</strong></td>
<td><em>Er ging weg, <strong>ohne</strong> etwas <strong>zu</strong> sagen.</em>
<span class="uk">Він пішов, нічого не сказавши.</span></td></tr>
<tr><td><strong>statt / anstatt … zu</strong></td><td><strong>замість того щоб</strong></td>
<td><em><strong>Statt zu</strong> lernen, spielte er den ganzen Abend.</em>
<span class="uk">Замість того щоб учитися, він грав цілий вечір.</span></td></tr>
</tbody></table>
<p>Якщо підмети різні, ті самі значення передають підрядними реченнями:</p>
<ul>
<li><em>Er ging weg, <strong>ohne dass</strong> ich es merkte.</em><span class="uk">Він пішов так, що я цього не помітив.</span></li>
<li><em><strong>Anstatt dass</strong> du hilfst, sitzt du am Handy.</em><span class="uk">Замість того щоб ти допомагав, ти сидиш у телефоні.</span></li>
</ul>
<div class="callout"><strong>Увага на заперечення.</strong> В <em>ohne … zu</em> заперечення вже вбудоване
в саме <em>ohne</em>. Тому <em>nicht</em> усередині не ставлять:
<em>ohne zu fragen</em> = «не питаючи», а не «<s>ohne nicht zu fragen</s>».</div>`,
    },
    {
      title: '5. Слова з прикладів цієї теми',
      html: `
<table>
<thead><tr><th>Слово</th><th>Переклад</th><th>Як ужито в темі</th></tr></thead>
<tbody>
<tr><td><em>vorhaben</em></td><td>мати намір, планувати</td><td><em>Wir haben vor, im Juni umzuziehen.</em></td></tr>
<tr><td><em>Lust haben</em></td><td>мати охоту</td><td><em>Hast du Lust, ins Kino zu gehen?</em></td></tr>
<tr><td><em>üben</em></td><td>вправлятися, тренувати</td><td><em>Es ist wichtig, jeden Tag zu üben.</em></td></tr>
<tr><td><em>kennenlernen</em></td><td>знайомитися</td><td><em>Ich freue mich, Sie kennenzulernen.</em></td></tr>
<tr><td><em>reparieren lassen</em></td><td>віддати в ремонт</td><td><em>Ich lasse das Auto reparieren.</em></td></tr>
<tr><td><em>das Formular ausfüllen</em></td><td>заповнювати формуляр</td><td><em>Er hilft mir, das Formular auszufüllen.</em></td></tr>
<tr><td><em>merken</em></td><td>помічати, зауважувати</td><td><em>… ohne dass ich es merkte.</em></td></tr>
<tr><td><em>weggehen</em></td><td>іти геть</td><td><em>Er ging weg, ohne etwas zu sagen.</em></td></tr>
<tr><td><em>sich etwas leisten</em></td><td>дозволити собі (фінансово)</td><td><em>Ich spare, um mir eine Reise leisten zu können.</em></td></tr>
<tr><td><em>der Zweck, -e</em></td><td>мета, призначення</td><td><em>Wozu? — Zu welchem Zweck?</em></td></tr>
</tbody></table>`,
    },
  ],
  exercises: [
    { type: 'gap', q: 'Ich habe vergessen, dich ___ (anrufen — з zu).', answers: ['anzurufen'] },
    { type: 'gap', q: 'Sie versucht, früher ___ (aufstehen — з zu).', answers: ['aufzustehen'] },
    { type: 'gap', q: 'Es ist wichtig, jeden Tag ___ ___ (üben — з zu).', answers: ['zu', 'üben'] },
    { type: 'gap', q: 'Ich muss heute länger ___. (arbeiten — модальне дієслово!)', answers: ['arbeiten'],
      explain: 'Після модального дієслова zu не ставиться.' },
    { type: 'choice', q: 'Ich lerne Deutsch, ___ in Österreich zu studieren.',
      options: ['damit', 'um', 'ohne', 'statt'], answer: 1 },
    { type: 'choice', q: 'Ich spreche langsam, ___ alle mich verstehen.',
      options: ['um', 'damit', 'ohne', 'zu'], answer: 1,
      explain: 'Підмети різні (ich / alle), тому damit.' },
    { type: 'choice', q: 'Er ging weg, ___ etwas zu sagen.',
      options: ['um', 'damit', 'ohne', 'statt'], answer: 2 },
    { type: 'choice', q: '___ zu lernen, hat er den ganzen Tag gespielt.',
      options: ['Um', 'Damit', 'Ohne', 'Statt'], answer: 3 },
    { type: 'choice', q: 'Яке речення правильне?',
      options: ['Ich schreibe es auf, um du es nicht zu vergessen.',
        'Ich schreibe es auf, damit du es nicht vergisst.',
        'Ich schreibe es auf, damit du es nicht zu vergessen.',
        'Ich schreibe es auf, um dass du es nicht vergisst.'],
      answer: 1 },
    { type: 'order', q: 'Складіть речення.',
      words: ['Ich', 'spare', 'um', 'mir', 'ein', 'Auto', 'zu', 'kaufen'],
      answer: 'Ich spare um mir ein Auto zu kaufen' },
    { type: 'order', q: 'Складіть речення.',
      words: ['Hast', 'du', 'Lust', 'heute', 'ins', 'Kino', 'zu', 'gehen'],
      answer: 'Hast du Lust heute ins Kino zu gehen' },
    { type: 'match', q: 'Доберіть форму з zu.',
      pairs: [['anrufen', 'anzurufen'], ['aufstehen', 'aufzustehen'], ['verstehen', 'zu verstehen'],
        ['umziehen', 'umzuziehen'], ['bekommen', 'zu bekommen'], ['kennenlernen', 'kennenzulernen']] },
    { type: 'multi', q: 'Позначте дієслова, після яких zu НЕ ставиться.',
      options: ['müssen', 'versuchen', 'gehen', 'hoffen', 'lassen', 'vorhaben'],
      answers: [0, 2, 4] },
    { type: 'truefalse', q: 'У конструкції <span class="de-inline">ohne … zu</span> додатково ставлять <span class="de-inline">nicht</span>.',
      answer: false,
      explain: 'Заперечення вже в самому ohne: ohne zu fragen — «не питаючи».' },
    { type: 'truefalse', q: 'Якщо підмети в двох частинах різні, <span class="de-inline">um … zu</span> вживати не можна.',
      answer: true },
  ],

  listening: [
    {
      exam: 'Goethe B1 · Hören Teil 2',
      title: 'Im Bürgerbüro: Anmeldung des Wohnsitzes',
      instruction: 'Чоловік реєструє місце проживання. Слухайте, що і для чого потрібно.',
      lines: [
        { speaker: 'Beamtin', de: 'Guten Tag. Was können wir für Sie tun?', uk: 'Добрий день. Чим можемо допомогти?' },
        { speaker: 'Taras', de: 'Ich möchte meinen Wohnsitz anmelden. Ich habe vor, hier länger zu bleiben.', uk: 'Я хотів би зареєструвати місце проживання. Я планую залишитися тут надовше.' },
        { speaker: 'Beamtin', de: 'Dann brauche ich Ihren Pass und die Bestätigung des Vermieters.', uk: 'Тоді мені потрібен Ваш паспорт і підтвердження від орендодавця.' },
        { speaker: 'Taras', de: 'Den Pass habe ich, aber die Bestätigung habe ich vergessen mitzubringen.', uk: 'Паспорт у мене є, але підтвердження я забув принести.' },
        { speaker: 'Beamtin', de: 'Kein Problem, Sie können sie nachreichen. Füllen Sie bitte zuerst dieses Formular aus.', uk: 'Не проблема, Ви можете донести його пізніше. Заповніть спершу цей формуляр.' },
        { speaker: 'Taras', de: 'Muss ich noch einmal kommen, um das abzugeben?', uk: 'Чи мушу я прийти ще раз, щоб це здати?' },
        { speaker: 'Beamtin', de: 'Nein. Schicken Sie es per E-Mail, damit Sie sich den Weg sparen.', uk: 'Ні. Надішліть це імейлом, щоб не витрачати час на дорогу.' },
        { speaker: 'Taras', de: 'Sehr gut. Und bis wann muss das erledigt sein?', uk: 'Дуже добре. А до якого часу це має бути зроблено?' },
        { speaker: 'Beamtin', de: 'Innerhalb von zwei Wochen. Statt zu warten, würde ich das gleich heute Abend machen.', uk: 'Протягом двох тижнів. Замість того щоб чекати, я б зробила це вже сьогодні ввечері.' },
      ],
      tasks: [
        { type: 'choice', q: 'Was will Taras erledigen?',
          options: ['Einen Pass beantragen', 'Den Wohnsitz anmelden', 'Eine Wohnung suchen', 'Ein Konto eröffnen'], answer: 1 },
        { type: 'choice', q: 'Was hat er vergessen?',
          options: ['Den Pass', 'Die Bestätigung des Vermieters', 'Das Formular', 'Den Termin'], answer: 1 },
        { type: 'choice', q: 'Wie soll er die Bestätigung abgeben?',
          options: ['Persönlich vorbeibringen', 'Per E-Mail schicken', 'Per Post senden', 'Beim Vermieter lassen'], answer: 1 },
        { type: 'gap', q: 'Er muss das innerhalb von ___ Wochen erledigen.', answers: ['zwei'] },
        { type: 'truefalse', q: 'Die Beamtin rät ihm zu warten.', answer: false,
          explain: '«Statt zu warten, würde ich das gleich heute Abend machen» — вона радить не зволікати.' },
      ],
    },
  ],

  writing: [
    {
      exam: 'Goethe B1 · Schreiben Teil 2',
      title: 'Forumsbeitrag: Warum eine Fremdsprache lernen?',
      situation: 'У мовному форумі хтось запитав: «Чи варто вчити другу іноземну мову, якщо англійської досить?» Напишіть свій коментар: <strong>80–100 слів</strong>. Аргументуйте мету через <em>um … zu</em> й <em>damit</em>.',
      points: [
        'Nehmen Sie klar Stellung.',
        'Nennen Sie zwei Gründe mit um … zu oder damit.',
        'Geben Sie ein Beispiel aus Ihrer Erfahrung.',
        'Formulieren Sie am Ende einen Rat.',
      ],
      minWords: 80,
      phrases: [
        { de: 'Meiner Meinung nach lohnt sich das auf jeden Fall.', uk: 'На мою думку, це однозначно варто того.' },
        { de: 'Ich lerne Sprachen, um Menschen wirklich zu verstehen.', uk: 'Я вчу мови, щоб справді розуміти людей.' },
        { de: 'Man sollte früh anfangen, damit das Hören leichter wird.', uk: 'Варто починати рано, щоб слухання давалося легше.' },
        { de: 'Statt aufzugeben, sollte man kleine Ziele setzen.', uk: 'Замість того щоб здаватися, варто ставити маленькі цілі.' },
        { de: 'Ohne täglich zu üben, vergisst man schnell alles.', uk: 'Не вправляючись щодня, швидко все забуваєш.' },
        { de: 'Mein Rat wäre, mit fünfzehn Minuten am Tag zu beginnen.', uk: 'Моя порада — почати з п’ятнадцяти хвилин на день.' },
      ],
      checklist: [
        'Є щонайменше одне um … zu і одне damit?',
        'Ви перевірили підмети: um … zu тільки при однакових?',
        'Є власний приклад, а не лише загальні твердження?',
        'Є конкретна порада в кінці?',
        'Обсяг 80–100 слів, текст поділено на абзаци?',
      ],
      model:
`Meiner Meinung nach lohnt sich eine zweite Fremdsprache auf jeden Fall.

Englisch reicht, um im Urlaub ein Hotel zu finden. Es reicht aber nicht, um wirklich zu verstehen,
wie Menschen in einem Land denken. Ich habe Deutsch gelernt, um hier zu arbeiten, und merke jetzt,
dass sich damit auch mein Blick auf die eigene Sprache verändert hat.

Ein zweiter Grund ist praktisch: Viele Firmen suchen Personal mit zwei Sprachen. Ich schreibe
in Bewerbungen immer beide Sprachen, damit die Chefs sofort sehen, was ich mitbringe.

Mein Rat wäre, mit fünfzehn Minuten am Tag zu beginnen. Statt lange zu planen, sollte man einfach anfangen.`,
      modelUk: 'Переклад: На мою думку, друга іноземна мова однозначно варта того. Англійської досить, щоб знайти готель у відпустці. Але її не досить, щоб справді зрозуміти, як люди в країні думають. Я вчив німецьку, щоб тут працювати, і тепер помічаю, що з нею змінився і мій погляд на власну мову. Друга причина практична: багато фірм шукають працівників із двома мовами. У заявах я завжди пишу обидві мови, щоб керівники відразу бачили, що я приношу. Моя порада — почати з п’ятнадцяти хвилин на день. Замість довго планувати, варто просто почати.',
    },
  ],

  test: [
    { type: 'gap', q: 'Ich hoffe, dich bald ___ ___. (sehen — з zu)', answers: ['zu', 'sehen'] },
    { type: 'gap', q: 'Er hat vergessen, das Fenster ___. (zumachen — з zu)', answers: ['zuzumachen'] },
    { type: 'gap', q: 'Wir haben vor, nächstes Jahr ___. (umziehen — з zu)', answers: ['umzuziehen'] },
    { type: 'gap', q: 'Du sollst mir jetzt ___. (helfen — після модального)', answers: ['helfen'] },
    { type: 'choice', q: 'Ich mache das Fenster auf, ___ frische Luft hereinkommt.',
      options: ['um', 'damit', 'ohne', 'statt'], answer: 1 },
    { type: 'choice', q: 'Sie fährt nach Berlin, ___ ihre Schwester zu besuchen.',
      options: ['damit', 'um', 'ohne', 'anstatt'], answer: 1 },
    { type: 'choice', q: 'Er hat unterschrieben, ___ den Vertrag zu lesen.',
      options: ['um', 'damit', 'ohne', 'statt'], answer: 2 },
    { type: 'choice', q: 'Після якого дієслова <span class="de-inline">zu</span> НЕ ставлять?',
      options: ['versuchen', 'lassen', 'beschließen', 'sich bemühen'], answer: 1 },
    { type: 'order', q: 'Складіть речення.',
      words: ['Ich', 'rufe', 'dich', 'an', 'um', 'einen', 'Termin', 'zu', 'vereinbaren'],
      answer: 'Ich rufe dich an um einen Termin zu vereinbaren' },
    { type: 'order', q: 'Складіть речення.',
      words: ['Statt', 'zu', 'streiten', 'sollten', 'wir', 'ruhig', 'reden'],
      answer: 'Statt zu streiten sollten wir ruhig reden' },
    { type: 'match', q: 'Доберіть переклад.',
      pairs: [['die Absicht', 'намір'], ['der Zweck', 'мета'], ['die Frist', 'термін'],
        ['sich weigern', 'відмовлятися'], ['erreichen', 'досягати'], ['rechtzeitig', 'вчасно']] },
    { type: 'multi', q: 'Позначте правильні речення.',
      options: ['Ich lerne, um die Prüfung zu bestehen.',
        'Ich lerne, damit ich die Prüfung bestehe.',
        'Ich lerne, um dass ich die Prüfung bestehe.',
        'Ich erkläre es langsam, damit du es verstehst.',
        'Ich erkläre es langsam, um du es zu verstehen.'],
      answers: [0, 1, 3] },
    { type: 'truefalse', q: 'У відокремлюваних дієслів <span class="de-inline">zu</span> стоїть між приставкою й основою: <span class="de-inline">anzurufen</span>.',
      answer: true },
    { type: 'truefalse', q: '<span class="de-inline">damit</span> вимагає інфінітива з zu.', answer: false,
      explain: 'damit вводить повне підрядне речення зі зміненим дієсловом у кінці.' },
  ],
};

const m5 = {
  id: 'm5',
  title: 'Indirekte Fragen und Präpositionalobjekte',
  titleUk: 'Непрямі питання та прийменникові додатки: ob, wofür, dafür',
  can: [
    'перетворювати пряме питання на непряме з ob і питальним словом',
    'ставити ввічливі запитання через «Könnten Sie mir sagen, …»',
    'уживати дієслова з фіксованим прийменником',
    'будувати питання з wo(r)- і відповіді з da(r)-',
    'відрізняти питання про особу (mit wem) від питання про річ (womit)',
  ],

  grammar: [
    {
      title: '1. Непряме питання: ob і питальні слова',
      html: `
<p>Непряме питання — це питання, вбудоване в інше речення. У німецькій воно
завжди стає <strong>підрядним</strong>: змінене дієслово йде в кінець, а знак питання
залежить від головного речення, не від підрядного.</p>
<table>
<thead><tr><th>Пряме питання</th><th>Непряме питання</th></tr></thead>
<tbody>
<tr><td><em>Wann kommt der Zug?</em><span class="uk">Коли приходить потяг?</span></td>
<td><em>Weißt du, <strong>wann</strong> der Zug <strong>kommt</strong>?</em><span class="uk">Ти знаєш, коли приходить потяг?</span></td></tr>
<tr><td><em>Wo ist die Post?</em></td>
<td><em>Können Sie mir sagen, <strong>wo</strong> die Post <strong>ist</strong>?</em><span class="uk">Чи можете сказати, де пошта?</span></td></tr>
<tr><td><em><strong>Hat</strong> er Zeit?</em> (без питального слова)</td>
<td><em>Ich weiß nicht, <strong>ob</strong> er Zeit <strong>hat</strong>.</em><span class="uk">Я не знаю, чи має він час.</span></td></tr>
<tr><td><em><strong>Kommst</strong> du mit?</em></td>
<td><em>Sag mir bitte, <strong>ob</strong> du <strong>mitkommst</strong>.</em><span class="uk">Скажи мені, чи ти йдеш із нами.</span></td></tr>
</tbody></table>
<div class="callout callout--tip"><strong>Одне правило на всю тему.</strong> Є питальне слово
(<em>wann, wo, wie, warum, was, wer, wie lange</em>) — воно й стає сполучником.
Питального слова немає (питання на «так/ні») — беремо <strong><em>ob</em></strong> = «чи».</div>
<p><strong>Не плутайте <em>ob</em> і <em>wenn</em>:</strong> обидва інколи перекладають як «чи / якщо»,
але це різні речі.</p>
<ul>
<li><em>Ich weiß nicht, <strong>ob</strong> er kommt.</em><span class="uk">Не знаю, <u>чи</u> він прийде. (невідомість)</span></li>
<li><em><strong>Wenn</strong> er kommt, freue ich mich.</em><span class="uk"><u>Якщо</u> він прийде, я зраджу. (умова)</span></li>
</ul>
<div class="callout"><strong>Помилка, яку легко зробити.</strong> У непрямому питанні порядок слів
уже не питальний: «<s>Weißt du, wann kommt der Zug?</s>» — неправильно.
Дієслово мусить піти в кінець: <em>… wann der Zug kommt</em>.</div>`,
    },
    {
      title: '2. Ввічливі запитання-обгортки',
      html: `
<p>На іспиті й у житті непряме питання — головний спосіб запитати щось чемно.
Ось готові обгортки, у які підставляють будь-яке питання:</p>
<table>
<thead><tr><th>Обгортка</th><th>Переклад</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td><em>Könnten Sie mir sagen, …?</em></td><td>Чи могли б Ви сказати мені …?</td>
<td><em>Könnten Sie mir sagen, wo der Bahnhof ist?</em></td></tr>
<tr><td><em>Wissen Sie, …?</em></td><td>Чи знаєте Ви …?</td>
<td><em>Wissen Sie, ob der Laden heute offen ist?</em></td></tr>
<tr><td><em>Ich würde gern wissen, …</em></td><td>Я хотів би знати …</td>
<td><em>Ich würde gern wissen, wie lange das dauert.</em></td></tr>
<tr><td><em>Darf ich fragen, …?</em></td><td>Чи можу я запитати …?</td>
<td><em>Darf ich fragen, warum Sie sich beworben haben?</em></td></tr>
<tr><td><em>Haben Sie eine Ahnung, …?</em></td><td>Чи не знаєте випадково …?</td>
<td><em>Haben Sie eine Ahnung, wann er zurückkommt?</em></td></tr>
<tr><td><em>Mich würde interessieren, …</em></td><td>Мене цікавило б …</td>
<td><em>Mich würde interessieren, ob es einen Rabatt gibt.</em></td></tr>
</tbody></table>
<div class="callout callout--tip"><strong>Чому це піднімає оцінку.</strong> Пряме
<em>Wo ist der Bahnhof?</em> — не помилка, але звучить сухо. Обгортка перетворює його
на ввічливе прохання й показує володіння підрядним реченням. Два-три таких питання
в частині Sprechen помітно змінюють враження.</div>`,
    },
    {
      title: '3. Дієслова з фіксованим прийменником',
      html: `
<p>Багато німецьких дієслів «зрослися» з певним прийменником, і цей прийменник
не перекладається окремо — його треба вивчити разом із дієсловом.
Прийменник також визначає відмінок.</p>
<table>
<thead><tr><th>Дієслово + прийменник</th><th>Переклад</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td><em>warten <strong>auf</strong> + Akk.</em></td><td>чекати на</td>
<td><em>Ich warte auf <strong>den</strong> Bus.</em><span class="uk">Я чекаю на автобус.</span></td></tr>
<tr><td><em>sich freuen <strong>über</strong> + Akk.</em></td><td>радіти чомусь (що вже сталося)</td>
<td><em>Ich freue mich über <strong>das</strong> Geschenk.</em><span class="uk">Я радий подарунку.</span></td></tr>
<tr><td><em>sich freuen <strong>auf</strong> + Akk.</em></td><td>радісно чекати чогось (майбутнього)</td>
<td><em>Ich freue mich auf <strong>den</strong> Urlaub.</em><span class="uk">Я з нетерпінням чекаю відпустки.</span></td></tr>
<tr><td><em>denken <strong>an</strong> + Akk.</em></td><td>думати про</td>
<td><em>Ich denke oft an <strong>meine</strong> Familie.</em><span class="uk">Я часто думаю про свою родину.</span></td></tr>
<tr><td><em>sich interessieren <strong>für</strong> + Akk.</em></td><td>цікавитися</td>
<td><em>Er interessiert sich für Politik.</em><span class="uk">Він цікавиться політикою.</span></td></tr>
<tr><td><em>sich ärgern <strong>über</strong> + Akk.</em></td><td>злитися на</td>
<td><em>Sie ärgert sich über <strong>den</strong> Lärm.</em><span class="uk">Її дратує шум.</span></td></tr>
<tr><td><em>sich kümmern <strong>um</strong> + Akk.</em></td><td>піклуватися про</td>
<td><em>Er kümmert sich um <strong>die</strong> Kinder.</em><span class="uk">Він піклується про дітей.</span></td></tr>
<tr><td><em>Angst haben <strong>vor</strong> + Dat.</em></td><td>боятися</td>
<td><em>Ich habe Angst vor <strong>dem</strong> Fliegen.</em><span class="uk">Я боюся літати.</span></td></tr>
<tr><td><em>sprechen <strong>mit</strong> + Dat. / <strong>über</strong> + Akk.</em></td><td>говорити з / про</td>
<td><em>Ich spreche mit <strong>dem</strong> Chef über <strong>das</strong> Projekt.</em></td></tr>
<tr><td><em>teilnehmen <strong>an</strong> + Dat.</em></td><td>брати участь у</td>
<td><em>Sie nimmt an <strong>dem</strong> Kurs teil.</em><span class="uk">Вона бере участь у курсі.</span></td></tr>
</tbody></table>
<div class="callout"><strong>Українська логіка тут не працює.</strong> Ми «чекаємо на автобус» —
і німець теж <em>auf</em>. Але ми «думаємо про» — а німець <em>an</em>, не <em>über</em>.
Ми «боїмося чогось» без прийменника — а німець <em>vor</em> + Dativ. Тому вивчайте
цілу зв’язку: <em>warten auf</em>, <em>denken an</em>, <em>Angst haben vor</em>.</div>`,
    },
    {
      title: '4. Питання wo(r)- і відповідь da(r)-',
      html: `
<p>Якщо дієслово має фіксований прийменник, питання й займенник до нього
утворюють особливим способом — і тут усе залежить від того,
<strong>про особу чи про річ</strong> ідеться.</p>
<table>
<thead><tr><th></th><th>Про <strong>річ</strong> або справу</th><th>Про <strong>особу</strong></th></tr></thead>
<tbody>
<tr><td><strong>Питання</strong></td>
<td><em><strong>wo</strong> + прийменник</em>:<br><em>Wo<strong>rauf</strong> wartest du?</em><span class="uk">На що ти чекаєш?</span></td>
<td><em>прийменник + wen / wem</em>:<br><em><strong>Auf wen</strong> wartest du?</em><span class="uk">На кого ти чекаєш?</span></td></tr>
<tr><td><strong>Займенник</strong></td>
<td><em><strong>da</strong> + прийменник</em>:<br><em>Ich warte <strong>darauf</strong>.</em><span class="uk">Я чекаю на це.</span></td>
<td><em>прийменник + ihn / sie / ihm</em>:<br><em>Ich warte <strong>auf ihn</strong>.</em><span class="uk">Я чекаю на нього.</span></td></tr>
</tbody></table>
<p><strong>Коли додається -r-:</strong> якщо прийменник починається з голосної,
між <em>wo</em>/<em>da</em> і прийменником вставляють <em>r</em> — для милозвучності:</p>
<table>
<thead><tr><th>Прийменник</th><th>Питання</th><th>Займенник</th></tr></thead>
<tbody>
<tr><td><em>auf</em> (голосна)</td><td><em>wo<strong>r</strong>auf</em></td><td><em>da<strong>r</strong>auf</em></td></tr>
<tr><td><em>über</em> (голосна)</td><td><em>wo<strong>r</strong>über</em></td><td><em>da<strong>r</strong>über</em></td></tr>
<tr><td><em>an</em> (голосна)</td><td><em>wo<strong>r</strong>an</em></td><td><em>da<strong>r</strong>an</em></td></tr>
<tr><td><em>um</em> (голосна)</td><td><em>wo<strong>r</strong>um</em></td><td><em>da<strong>r</strong>um</em></td></tr>
<tr><td><em>für</em> (приголосна)</td><td><em>wofür</em></td><td><em>dafür</em></td></tr>
<tr><td><em>mit</em> (приголосна)</td><td><em>womit</em></td><td><em>damit</em></td></tr>
<tr><td><em>von</em> (приголосна)</td><td><em>wovon</em></td><td><em>davon</em></td></tr>
<tr><td><em>vor</em> (приголосна)</td><td><em>wovor</em></td><td><em>davor</em></td></tr>
</tbody></table>
<div class="callout callout--tip"><strong>Ще одна робота для da(r)-.</strong> Ці слова часто
«анонсують» наступне підрядне речення: <em>Ich freue mich <strong>darauf</strong>, dich zu sehen</em> —
«Я радію тому, що побачу тебе». <em>Wir sprechen <strong>darüber</strong>, wie es weitergeht</em> —
«Ми говоримо про те, як буде далі». Українською це «тому, що…», «про те, як…».</div>
<div class="callout"><strong>Обережно з damit.</strong> <em>damit</em> — це і «щоб» (сполучник мети
з минулого модуля), і «цим / із цим» (займенник до <em>mit</em>).
Розрізняйте за реченням: є друге дієслово в кінці — сполучник; стоїть замість іменника — займенник.</div>`,
    },
    {
      title: '5. Слова з прикладів цієї теми',
      html: `
<table>
<thead><tr><th>Слово</th><th>Переклад</th><th>Як ужито в темі</th></tr></thead>
<tbody>
<tr><td><em>eine Ahnung haben</em></td><td>мати уявлення, знати</td><td><em>Haben Sie eine Ahnung, wann er zurückkommt?</em></td></tr>
<tr><td><em>der Rabatt, -e</em></td><td>знижка</td><td><em>… ob es einen Rabatt gibt.</em></td></tr>
<tr><td><em>der Lärm</em></td><td>шум</td><td><em>Sie ärgert sich über den Lärm.</em></td></tr>
<tr><td><em>teilnehmen an + Dat.</em></td><td>брати участь у</td><td><em>Sie nimmt an dem Kurs teil.</em></td></tr>
<tr><td><em>sich kümmern um + Akk.</em></td><td>піклуватися про</td><td><em>Er kümmert sich um die Kinder.</em></td></tr>
<tr><td><em>zurückkommen</em></td><td>повертатися</td><td><em>… wann er zurückkommt.</em></td></tr>
<tr><td><em>dauern</em></td><td>тривати</td><td><em>… wie lange das dauert.</em></td></tr>
<tr><td><em>sich bewerben</em></td><td>подавати заявку на роботу</td><td><em>… warum Sie sich beworben haben.</em></td></tr>
<tr><td><em>offen / geöffnet</em></td><td>відчинений</td><td><em>… ob der Laden heute offen ist.</em></td></tr>
<tr><td><em>der Ansprechpartner, -</em></td><td>контактна особа</td><td>Слово з письмового завдання цього модуля.</td></tr>
</tbody></table>`,
    },
  ],
  exercises: [
    { type: 'gap', q: 'Weißt du, ___ der Zug kommt? (коли)', answers: ['wann'] },
    { type: 'gap', q: 'Ich weiß nicht, ___ er heute Zeit hat. (чи)', answers: ['ob'] },
    { type: 'gap', q: 'Können Sie mir sagen, wo die Post ___? (sein — у кінці!)', answers: ['ist'] },
    { type: 'gap', q: 'Ich warte ___ den Bus. (прийменник)', answers: ['auf'] },
    { type: 'gap', q: 'Ich habe Angst ___ der Prüfung. (прийменник)', answers: ['vor'] },
    { type: 'gap', q: 'Ich denke oft ___ meine Familie. (прийменник)', answers: ['an'] },
    { type: 'gap', q: 'Про річ і про особу: ___ wartest du? — На що? / ___ ___ wartest du? — На кого?',
      answers: ['Worauf', 'Auf', 'wen'] },
    { type: 'choice', q: 'Sie interessiert sich ___ Musik.',
      options: ['für', 'auf', 'über', 'an'], answer: 0 },
    { type: 'choice', q: 'Яке речення правильне?',
      options: ['Weißt du, wann kommt der Bus?', 'Weißt du, wann der Bus kommt?',
        'Weißt du, wann kommt der Bus ist?', 'Weißt du, ob wann der Bus kommt?'],
      answer: 1 },
    { type: 'choice', q: 'Ich freue mich ___ den Urlaub. (він ще буде)',
      options: ['über', 'auf', 'für', 'an'], answer: 1 },
    { type: 'order', q: 'Складіть непряме питання.',
      words: ['Könnten', 'Sie', 'mir', 'sagen', 'ob', 'der', 'Kurs', 'heute', 'stattfindet'],
      answer: 'Könnten Sie mir sagen ob der Kurs heute stattfindet' },
    { type: 'order', q: 'Складіть речення.',
      words: ['Ich', 'freue', 'mich', 'darauf', 'dich', 'wiederzusehen'],
      answer: 'Ich freue mich darauf dich wiederzusehen' },
    { type: 'match', q: 'Доберіть прийменник до дієслова.',
      pairs: [['warten', 'auf + Akk.'], ['denken', 'an + Akk.'], ['sich interessieren', 'für + Akk.'],
        ['Angst haben', 'vor + Dat.'], ['teilnehmen', 'an + Dat.'], ['sich kümmern', 'um + Akk.']] },
    { type: 'multi', q: 'Позначте форми, у яких потрібне <span class="de-inline">-r-</span>.',
      options: ['wo___auf', 'wo___für', 'da___über', 'da___mit', 'wo___an'],
      answers: [0, 2, 4],
      explain: 'r вставляють перед прийменником на голосну: worauf, darüber, woran.' },
    { type: 'truefalse', q: 'У непрямому питанні порядок слів такий самий, як у прямому.',
      answer: false,
      explain: 'Змінене дієслово переходить у кінець підрядного речення.' },
  ],

  listening: [
    {
      exam: 'Goethe B1 · Hören Teil 2',
      title: 'Anruf bei der Volkshochschule',
      instruction: 'Жінка дізнається про курс. Слухайте, які саме питання вона ставить.',
      lines: [
        { speaker: 'Sekretärin', de: 'Volkshochschule Graz, Berger am Telefon. Was kann ich für Sie tun?', uk: 'Народний університет Ґрац, Берґер на телефоні. Чим можу допомогти?' },
        { speaker: 'Kateryna', de: 'Guten Tag. Ich würde gern wissen, ob der Fotokurs im Herbst noch stattfindet.', uk: 'Добрий день. Я хотіла б знати, чи фотокурс восени ще відбудеться.' },
        { speaker: 'Sekretärin', de: 'Ja, er beginnt am 14. Oktober. Es sind noch drei Plätze frei.', uk: 'Так, він починається 14 жовтня. Ще три місця вільні.' },
        { speaker: 'Kateryna', de: 'Könnten Sie mir sagen, wie lange ein Termin dauert?', uk: 'Чи могли б Ви сказати, скільки триває одне заняття?' },
        { speaker: 'Sekretärin', de: 'Zwei Stunden, immer mittwochs von 18 bis 20 Uhr.', uk: 'Дві години, завжди по середах з 18 до 20.' },
        { speaker: 'Kateryna', de: 'Und worauf muss ich bei der Anmeldung achten?', uk: 'А на що мені зважати під час реєстрації?' },
        { speaker: 'Sekretärin', de: 'Die Anmeldung ist verbindlich. Danach kümmern wir uns um alles Weitere.', uk: 'Реєстрація остаточна. Далі ми дбаємо про все інше.' },
        { speaker: 'Kateryna', de: 'Mich würde noch interessieren, ob es einen Rabatt für Studierende gibt.', uk: 'Мене цікавило б ще, чи є знижка для студентів.' },
        { speaker: 'Sekretärin', de: 'Ja, zwanzig Prozent. Dafür brauchen wir nur einen Nachweis von der Uni.', uk: 'Так, двадцять відсотків. Для цього нам потрібна лише довідка з університету.' },
      ],
      tasks: [
        { type: 'choice', q: 'Wann beginnt der Kurs?',
          options: ['Am 4. Oktober', 'Am 14. Oktober', 'Im September', 'Am 14. November'], answer: 1 },
        { type: 'choice', q: 'Wie lange dauert ein Termin?',
          options: ['Eine Stunde', 'Zwei Stunden', 'Drei Stunden', 'Einen ganzen Abend'], answer: 1 },
        { type: 'gap', q: 'Der Kurs findet immer ___ statt. (день тижня)', answers: ['mittwochs'] },
        { type: 'gap', q: 'Studierende bekommen ___ Prozent Rabatt.', answers: ['20|zwanzig'] },
        { type: 'truefalse', q: 'Man kann die Anmeldung jederzeit zurückziehen.', answer: false,
          explain: '«Die Anmeldung ist verbindlich» — реєстрація остаточна.' },
        { type: 'multi', q: 'Wonach fragt Kateryna?',
          options: ['ob der Kurs stattfindet', 'wie lange ein Termin dauert', 'wer den Kurs leitet',
            'worauf man bei der Anmeldung achten muss', 'ob es einen Rabatt gibt'],
          answers: [0, 1, 3, 4] },
      ],
    },
  ],

  writing: [
    {
      exam: 'Goethe B1 · Schreiben Teil 3',
      title: 'Formelle E-Mail: Fragen zu einem Kurs',
      situation: 'Ви побачили оголошення про мовний курс, але в ньому багато чого не сказано. Напишіть імейл до організаторів: <strong>70–90 слів</strong>, формальний стиль. Задайте щонайменше три питання <u>непрямим</u> способом.',
      points: [
        'Sagen Sie, woher Sie von dem Kurs wissen.',
        'Fragen Sie nach Termin und Dauer.',
        'Fragen Sie, ob es eine Ermäßigung gibt.',
        'Bitten Sie um eine Antwort.',
      ],
      minWords: 70,
      phrases: [
        { de: 'ich habe Ihre Anzeige im Internet gelesen.', uk: 'я прочитала Ваше оголошення в інтернеті.' },
        { de: 'Könnten Sie mir sagen, wann der Kurs beginnt?', uk: 'Чи могли б Ви сказати, коли курс починається?' },
        { de: 'Ich würde gern wissen, wie lange ein Termin dauert.', uk: 'Я хотіла б знати, скільки триває заняття.' },
        { de: 'Mich würde interessieren, ob es eine Ermäßigung gibt.', uk: 'Мене цікавило б, чи є пільга.' },
        { de: 'Außerdem wäre für mich wichtig, worauf ich bei der Anmeldung achten muss.', uk: 'Крім того, мені важливо, на що зважати під час реєстрації.' },
        { de: 'Über eine kurze Antwort würde ich mich freuen.', uk: 'Була б рада короткій відповіді.' },
      ],
      checklist: [
        'Є щонайменше три непрямих питання (ob / wann / wie lange / worauf)?',
        'У кожному з них дієслово стоїть у кінці підрядного речення?',
        'Формальне звертання й прощання на місці?',
        'Ви послідовно вживаєте Sie / Ihnen / Ihre?',
        'Обсяг 70–90 слів?',
      ],
      model:
`Sehr geehrte Damen und Herren,

ich habe Ihre Anzeige über den Deutschkurs im Internet gelesen und interessiere mich sehr dafür.

Könnten Sie mir bitte sagen, wann der nächste Kurs beginnt und wie lange ein Termin dauert?
Außerdem würde ich gern wissen, ob am Abend noch Plätze frei sind.
Mich würde auch interessieren, ob es für Studierende eine Ermäßigung gibt und welche Nachweise
Sie dafür brauchen.

Über eine kurze Antwort würde ich mich sehr freuen.

Mit freundlichen Grüßen
Kateryna Melnyk`,
      modelUk: 'Переклад: Шановні пані та панове, я прочитала Ваше оголошення про курс німецької в інтернеті й дуже ним цікавлюся. Чи могли б Ви сказати, коли починається наступний курс і скільки триває одне заняття? Крім того, я хотіла б знати, чи є ще вільні місця на вечірній час. Мене цікавило б також, чи є пільга для студентів і які підтвердження Вам для цього потрібні. Була б дуже рада короткій відповіді. З повагою, Катерина Мельник.',
    },
  ],

  test: [
    { type: 'gap', q: 'Ich weiß nicht, ___ sie schon angekommen ist. (чи)', answers: ['ob'] },
    { type: 'gap', q: 'Sagen Sie mir bitte, ___ das Museum geöffnet ist. (коли)', answers: ['wann'] },
    { type: 'gap', q: 'Können Sie mir sagen, wie viel das ___? (kosten — у кінці)', answers: ['kostet'] },
    { type: 'gap', q: 'Er ärgert sich ___ den Lärm. (прийменник)', answers: ['über'] },
    { type: 'gap', q: 'Wir nehmen ___ dem Seminar teil. (прийменник)', answers: ['an'] },
    { type: 'gap', q: 'Заповніть пару: ___ denkst du? — Про що? / Ich denke ___. — Про це.',
      answers: ['Woran', 'daran'] },
    { type: 'choice', q: 'Sie entschuldigt sich ___ die Verspätung.',
      options: ['für', 'auf', 'an', 'vor'], answer: 0 },
    { type: 'choice', q: 'Питання про особу:',
      options: ['Worauf wartest du?', 'Auf wen wartest du?', 'Darauf wartest du?', 'Wofür wartest du?'],
      answer: 1 },
    { type: 'choice', q: 'Яке речення правильне?',
      options: ['Ich frage, ob kommt er mit.', 'Ich frage, ob er mitkommt.',
        'Ich frage, wenn er mitkommt.', 'Ich frage, ob er kommt mit.'],
      answer: 1 },
    { type: 'order', q: 'Складіть речення.',
      words: ['Ich', 'würde', 'gern', 'wissen', 'wie', 'lange', 'der', 'Kurs', 'dauert'],
      answer: 'Ich würde gern wissen wie lange der Kurs dauert' },
    { type: 'order', q: 'Складіть речення.',
      words: ['Wir', 'sprechen', 'darüber', 'wie', 'es', 'weitergeht'],
      answer: 'Wir sprechen darüber wie es weitergeht' },
    { type: 'match', q: 'Доберіть переклад.',
      pairs: [['die Gebühr', 'плата'], ['der Nachweis', 'підтвердження'], ['die Voraussetzung', 'передумова'],
        ['ausfallen', 'скасовуватися'], ['verbindlich', 'обов’язковий'], ['die Auskunft', 'довідка']] },
    { type: 'multi', q: 'Позначте правильні пари «дієслово — прийменник».',
      options: ['warten auf', 'denken über', 'Angst haben vor', 'sich freuen an', 'sich kümmern um'],
      answers: [0, 2, 4] },
    { type: 'truefalse', q: '<span class="de-inline">damit</span> може бути і сполучником мети, і займенником до <span class="de-inline">mit</span>.',
      answer: true },
  ],
};

export const modules = [m3, m4, m5];
