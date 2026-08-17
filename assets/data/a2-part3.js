/* A2 — модулі 6–8 */

export const modules = [

/* ══════════════════════════════════ МОДУЛЬ 6 ══════════════════════════════ */
{
  id: 'm6',
  title: 'Höfliche Bitten und Wünsche',
  titleUk: 'Ввічливі прохання й побажання: перші форми умовного способу',
  can: [
    'ввічливо просити через könnten, würden, hätte gern',
    'відрізняти пряме прохання від ввічливого',
    'висловлювати побажання й давати поради з sollte',
    'домовлятися в кафе, магазині та на прийомі',
  ],

  grammar: [
    {
      title: '1. Чому пряме прохання звучить грубо',
      html: `
<p>Німецька дуже чутлива до ввічливості. Наказова форма без пом’якшення читається як команда,
навіть якщо ви цього не мали на думці.</p>
<table>
<thead><tr><th>Форма</th><th>Як звучить</th><th>Переклад</th></tr></thead>
<tbody>
<tr><td><em>Helfen Sie mir!</em></td><td>наказ, майже вимога</td><td>Допоможіть мені!</td></tr>
<tr><td><em>Können Sie mir helfen?</em></td><td>нейтрально</td><td>Можете мені допомогти?</td></tr>
<tr><td><em>Könnten Sie mir helfen?</em></td><td><strong>ввічливо</strong></td><td>Чи могли б Ви мені допомогти?</td></tr>
<tr><td><em>Könnten Sie mir bitte kurz helfen?</em></td><td>дуже ввічливо</td><td>Чи могли б Ви мені трохи допомогти?</td></tr>
</tbody></table>
<div class="callout"><strong>Правило для A2.</strong> Додайте <u>дві крапки над голосною</u> —
і прохання стає ввічливим: <em>kann → k<strong>ö</strong>nnte</em>, <em>wird → w<strong>ü</strong>rde</em>,
<em>hat → h<strong>ä</strong>tte</em>. Плюс слово <em>bitte</em> — і цього на цьому рівні досить.</div>`,
    },
    {
      title: '2. Три форми, які треба знати',
      html: `
<table>
<thead><tr><th>Форма</th><th>Що означає</th><th>Приклад і переклад</th></tr></thead>
<tbody>
<tr><td><strong>könnte</strong><br><small>від können — могти</small></td><td>міг би</td>
<td><em>Könnten Sie das wiederholen?</em><span class="uk">Чи могли б Ви це повторити?</span></td></tr>
<tr><td><strong>würde</strong><br><small>від werden — ставати</small></td><td>частка «б» при іншому дієслові</td>
<td><em>Würden Sie mir helfen?</em><span class="uk">Ви б мені допомогли?</span></td></tr>
<tr><td><strong>hätte</strong><br><small>від haben — мати</small></td><td>мав би</td>
<td><em>Ich hätte gern einen Kaffee.</em><span class="uk">Я хотів би каву.</span></td></tr>
<tr><td><strong>wäre</strong><br><small>від sein — бути</small></td><td>був би</td>
<td><em>Das wäre super!</em><span class="uk">Це було б чудово!</span></td></tr>
<tr><td><strong>sollte</strong><br><small>від sollen — слід</small></td><td>варто б</td>
<td><em>Du solltest mehr schlafen.</em><span class="uk">Тобі варто більше спати.</span></td></tr>
</tbody></table>
<p><strong>Закінчення</strong> ті самі, що й у модальних: <em>ich könnte, du könntest, er könnte,
wir könnten, ihr könntet, sie könnten</em>. Форми <em>ich</em> та <em>er</em> однакові.</p>`,
    },
    {
      title: '3. «Ich hätte gern» — головна фраза покупця',
      html: `
<p>У кафе, магазині, на касі це найчастіша конструкція. Дослівно «я мав би охоче», українською —
«я хотів би».</p>
<table>
<thead><tr><th>Ситуація</th><th>Фраза</th><th>Переклад</th></tr></thead>
<tbody>
<tr><td>у кафе</td><td><em>Ich hätte gern einen Tee, bitte.</em></td><td>Я хотів би чай, будь ласка.</td></tr>
<tr><td>у крамниці</td><td><em>Ich hätte gern ein Kilo Äpfel.</em></td><td>Я хотів би кілограм яблук.</td></tr>
<tr><td>рахунок</td><td><em>Ich würde gern zahlen.</em></td><td>Я хотів би розрахуватися.</td></tr>
<tr><td>запис</td><td><em>Ich hätte gern einen Termin am Montag.</em></td><td>Я хотів би прийом у понеділок.</td></tr>
</tbody></table>
<div class="callout callout--tip"><strong>Не кажіть «Ich will».</strong> <em>Ich will einen Kaffee</em>
означає «я хочу каву» з відтінком вимоги — так говорять діти. Дорослі кажуть
<em>Ich hätte gern</em> або <em>Ich möchte</em>.</div>`,
    },
    {
      title: '4. Побажання й поради',
      html: `
<ul>
<li><em>Es wäre schön, wenn du mitkommen könntest.</em><span class="uk">Було б гарно, якби ти зміг піти з нами.</span></li>
<li><em>Ich hätte gern mehr Zeit.</em><span class="uk">Я хотів би мати більше часу.</span></li>
<li><em>Du solltest zum Arzt gehen.</em><span class="uk">Тобі варто піти до лікаря.</span></li>
<li><em>An deiner Stelle würde ich warten.</em><span class="uk">На твоєму місці я б почекав.</span></li>
<li><em>Wäre es möglich, den Termin zu verschieben?</em><span class="uk">Чи можливо перенести зустріч?</span></li>
</ul>
<p class="muted">Повний розбір умовного способу — з нереальними умовами й минулим часом — на рівні B1.
Тут достатньо готових зворотів.</p>`,
    },
    {
      title: '5. Слова з прикладів цієї теми',
      html: `
<table>
<thead><tr><th>Слово</th><th>Переклад</th><th>Як ужито</th></tr></thead>
<tbody>
<tr><td><em>wiederholen</em></td><td>повторювати</td><td><em>Könnten Sie das wiederholen?</em></td></tr>
<tr><td><em>zahlen</em></td><td>платити</td><td><em>Ich würde gern zahlen.</em></td></tr>
<tr><td><em>der Termin, -e</em></td><td>призначена зустріч, прийом</td><td><em>einen Termin haben</em></td></tr>
<tr><td><em>verschieben</em></td><td>переносити на інший час</td><td><em>den Termin verschieben</em></td></tr>
<tr><td><em>mitkommen</em></td><td>іти разом</td><td><em>wenn du mitkommen könntest</em></td></tr>
<tr><td><em>möglich</em></td><td>можливий</td><td><em>Wäre es möglich …?</em></td></tr>
<tr><td><em>die Rechnung, -en</em></td><td>рахунок</td><td>у кафе</td></tr>
<tr><td><em>langsamer</em></td><td>повільніше</td><td><em>Könnten Sie langsamer sprechen?</em></td></tr>
<tr><td><em>an deiner Stelle</em></td><td>на твоєму місці</td><td>початок поради</td></tr>
</tbody></table>`,
    },
  ],
  exercises: [
    { type: 'gap', q: '___ Sie mir bitte helfen? (können, ввічливо)', answers: ['Könnten|Koennten'] },
    { type: 'gap', q: 'Ich ___ gern einen Kaffee, bitte. (haben)', answers: ['hätte|haette'] },
    { type: 'gap', q: 'Das ___ super! (sein)', answers: ['wäre|waere'] },
    { type: 'gap', q: 'Du ___ mehr schlafen. (sollen)', answers: ['solltest'] },
    { type: 'gap', q: '___ Sie das bitte wiederholen? (werden)', answers: ['Würden|Wuerden'] },
    { type: 'choice', q: 'Який варіант найввічливіший?',
      options: ['Sprechen Sie langsamer!', 'Können Sie langsamer sprechen?', 'Könnten Sie bitte langsamer sprechen?', 'Sie müssen langsamer sprechen.'],
      answer: 2 },
    { type: 'choice', q: 'Що сказати в кафе?',
      options: ['Ich will einen Tee.', 'Ich hätte gern einen Tee, bitte.', 'Geben Sie mir Tee.', 'Ich muss Tee.'],
      answer: 1 },
    { type: 'choice', q: 'Форма «könnte» відрізняється від «konnte» тим, що…',
      options: ['вона про минуле', 'вона ввічлива й умовна', 'вона наказова', 'різниці немає'],
      answer: 1,
      explain: 'konnte — «міг» (минуле). könnte — «міг би».' },
    { type: 'gap', q: 'Ich ___ gern zahlen. (würde)', answers: ['würde|wuerde'] },
    { type: 'gap', q: '___ es möglich, den Termin zu verschieben? (sein)', answers: ['Wäre|Waere'] },
    { type: 'order', q: 'Складіть ввічливе прохання.',
      words: ['Könnten', 'Sie', 'mir', 'bitte', 'helfen', '?'],
      answer: 'Könnten Sie mir bitte helfen ?|Könnten Sie mir bitte helfen?' },
    { type: 'order', q: 'Складіть речення.',
      words: ['An', 'deiner', 'Stelle', 'würde', 'ich', 'warten'],
      answer: 'An deiner Stelle würde ich warten' },
    { type: 'match', q: 'Доберіть форму.',
      pairs: [['können', 'könnte'], ['werden', 'würde'], ['haben', 'hätte'], ['sein', 'wäre'], ['sollen', 'sollte']] },
    { type: 'multi', q: 'Позначте ввічливі формулювання.',
      options: ['Ich hätte gern die Rechnung.', 'Bring mir die Rechnung!', 'Könnten Sie bitte warten?', 'Sie müssen warten.', 'Wäre das möglich?'],
      answers: [0, 2, 4] },
  ],

  listening: [
    {
      exam: 'Goethe A2 · Hören Teil 1',
      title: 'Beim Arzt anrufen',
      instruction: 'Жінка записується на прийом. Зверніть увагу на ввічливі формули.',
      lines: [
        { speaker: 'Anmeldung', de: 'Praxis Dr. Neumann, guten Tag.', uk: 'Практика д-ра Ноймана, добрий день.' },
        { speaker: 'Frau', de: 'Guten Tag. Ich hätte gern einen Termin, möglichst diese Woche.', uk: 'Добрий день. Я хотіла б прийом, бажано цього тижня.' },
        { speaker: 'Anmeldung', de: 'Donnerstag um zehn Uhr fünfzehn wäre frei. Würde Ihnen das passen?', uk: 'Четвер о десятій п’ятнадцять вільний. Це Вам підійшло б?' },
        { speaker: 'Frau', de: 'Donnerstag ist schlecht, ich arbeite bis vier. Wäre auch Freitag möglich?', uk: 'Четвер погано, я працюю до четвертої. А п’ятниця можлива?' },
        { speaker: 'Anmeldung', de: 'Freitag um halb fünf hätte ich noch etwas.', uk: 'У п’ятницю о пів на п’яту в мене ще є місце.' },
        { speaker: 'Frau', de: 'Das wäre perfekt. Könnten Sie mir eine Erinnerung per SMS schicken?', uk: 'Це було б чудово. Чи могли б Ви надіслати мені нагадування смс?' },
        { speaker: 'Anmeldung', de: 'Natürlich. Bis Freitag!', uk: 'Звісно. До п’ятниці!' },
      ],
      tasks: [
        { type: 'choice', q: 'Wann bekommt die Frau den Termin?',
          options: ['Donnerstag 10:15', 'Freitag 16:30', 'Freitag 10:15', 'Donnerstag 16:30'], answer: 1 },
        { type: 'choice', q: 'Warum passt Donnerstag nicht?',
          options: ['Sie ist krank.', 'Sie arbeitet bis vier.', 'Sie ist verreist.', 'Die Praxis ist zu.'], answer: 1 },
        { type: 'gap', q: 'Sie bittet: «___ Sie mir eine Erinnerung schicken?»', answers: ['Könnten|Koennten'] },
        { type: 'truefalse', q: 'Die Frau sagt «Ich will einen Termin».', answer: false,
          explain: 'Вона каже ввічливо: «Ich hätte gern einen Termin».' },
      ],
    },
  ],

  writing: [
    {
      exam: 'Goethe A2 · Schreiben Teil 2',
      title: 'E-Mail: um einen Gefallen bitten',
      situation: 'Ви на тиждень їдете й хочете попросити сусідку Frau Berger полити квіти. Напишіть ввічливий імейл. <strong>50–60 слів</strong>.',
      points: ['Warum schreiben Sie?', 'Um was bitten Sie genau?', 'Wann und wie lange?', 'Bedanken Sie sich.'],
      minWords: 50,
      phrases: [
        { de: 'Liebe Frau Berger,', uk: 'Шановна пані Берґер,' },
        { de: 'ich fahre nächste Woche für sieben Tage weg.', uk: 'наступного тижня я на сім днів їду.' },
        { de: 'Könnten Sie bitte meine Blumen gießen?', uk: 'Чи могли б Ви полити мої квіти?' },
        { de: 'Zweimal in der Woche wäre völlig genug.', uk: 'Двічі на тиждень було б цілком достатньо.' },
        { de: 'Den Schlüssel würde ich Ihnen vorher bringen.', uk: 'Ключ я приніс би Вам заздалегідь.' },
        { de: 'Das wäre sehr nett von Ihnen. Vielen Dank im Voraus!', uk: 'Це було б дуже мило з Вашого боку. Заздалегідь дякую!' },
      ],
      checklist: [
        'Прохання сформульоване через könnten або würden, а не наказом?',
        'Є щонайменше три ввічливі форми (könnten, würde, hätte, wäre)?',
        'Ви послідовно вживаєте Sie, а не du?',
        'Є подяка в кінці?',
        'Обсяг 50–60 слів?',
      ],
      model:
`Liebe Frau Berger,

ich fahre nächste Woche für sieben Tage zu meiner Familie.
Könnten Sie bitte in dieser Zeit meine Blumen gießen? Zweimal in der Woche wäre völlig genug.
Den Schlüssel würde ich Ihnen am Sonntag vorbeibringen, wenn es Ihnen passt.
Wenn etwas ist, könnten Sie mich jederzeit anrufen.

Das wäre sehr nett von Ihnen. Vielen Dank im Voraus!

Mit freundlichen Grüßen
Iryna Kowal`,
      modelUk: 'Переклад: Шановна пані Берґер, наступного тижня я на сім днів їду до родини. Чи могли б Ви в цей час поливати мої квіти? Двічі на тиждень було б цілком достатньо. Ключ я принесла б Вам у неділю, якщо Вам зручно. Якщо щось трапиться, Ви могли б мені зателефонувати в будь-який час. Це було б дуже мило з Вашого боку. Заздалегідь дякую! З повагою, Ірина Коваль.',
    },
  ],

  test: [
    { type: 'gap', q: '___ Sie mir bitte die Tür öffnen? (können)', answers: ['Könnten|Koennten'] },
    { type: 'gap', q: 'Ich ___ gern ein Wasser, bitte. (haben)', answers: ['hätte|haette'] },
    { type: 'gap', q: 'Das ___ wirklich nett von Ihnen. (sein)', answers: ['wäre|waere'] },
    { type: 'gap', q: 'Du ___ weniger Kaffee trinken. (sollen)', answers: ['solltest'] },
    { type: 'gap', q: 'Ich ___ gern einen Termin vereinbaren. (werden)', answers: ['würde|wuerde'] },
    { type: 'choice', q: 'Що НЕ є ввічливим проханням?',
      options: ['Könnten Sie warten?', 'Würden Sie warten?', 'Warten Sie!', 'Wäre es möglich zu warten?'],
      answer: 2 },
    { type: 'choice', q: '«Ich hätte gern» перекладається як…',
      options: ['я маю', 'я хотів би', 'я мусив би', 'я мав'], answer: 1 },
    { type: 'choice', q: 'Форма для ти: du ___ (können)',
      options: ['könnte', 'könntest', 'könnten', 'könntet'], answer: 1 },
    { type: 'order', q: 'Складіть прохання.',
      words: ['Würden', 'Sie', 'bitte', 'langsamer', 'sprechen', '?'],
      answer: 'Würden Sie bitte langsamer sprechen ?|Würden Sie bitte langsamer sprechen?' },
    { type: 'order', q: 'Складіть речення.',
      words: ['Es', 'wäre', 'schön', 'wenn', 'du', 'kommen', 'könntest'],
      answer: 'Es wäre schön wenn du kommen könntest' },
    { type: 'match', q: 'Доберіть переклад.',
      pairs: [['verschieben', 'переносити'], ['zahlen', 'платити'], ['wiederholen', 'повторювати'], ['der Termin', 'прийом'], ['möglich', 'можливий']] },
    { type: 'truefalse', q: '«Ich will einen Kaffee» — ввічлива фраза для кафе.', answer: false,
      explain: 'Звучить як вимога. Кажіть «Ich hätte gern» або «Ich möchte».' },
  ],
},

/* ══════════════════════════════════ МОДУЛЬ 7 ══════════════════════════════ */
{
  id: 'm7',
  title: 'Relativsätze',
  titleUk: 'Підрядні означальні: «той, який…»',
  can: [
    'з’єднувати два речення словом der, die, das',
    'обирати форму займенника за родом і відмінком',
    'докладно описувати людей і речі',
    'уникати коротких рубаних речень',
  ],

  grammar: [
    {
      title: '1. Навіщо вони',
      html: `
<p>Замість двох коротких речень німецька дає одне довше — і текст одразу звучить дорослішим.</p>
<table>
<thead><tr><th>Два речення</th><th>Одне з Relativsatz</th></tr></thead>
<tbody>
<tr><td><em>Das ist mein Bruder. Er wohnt in Wien.</em><span class="uk">Це мій брат. Він живе у Відні.</span></td>
<td><em>Das ist mein Bruder, <strong>der</strong> in Wien wohnt.</em><span class="uk">Це мій брат, який живе у Відні.</span></td></tr>
<tr><td><em>Ich habe ein Buch. Es ist sehr spannend.</em></td>
<td><em>Ich habe ein Buch, <strong>das</strong> sehr spannend ist.</em><span class="uk">У мене є книжка, яка дуже цікава.</span></td></tr>
</tbody></table>
<p><strong>Два незмінні правила:</strong> перед відносним займенником завжди <u>кома</u>,
а змінене дієслово йде <u>в кінець</u> підрядного — як після weil чи dass.</p>`,
    },
    {
      title: '2. Форма займенника: рід від іменника, відмінок від ролі',
      html: `
<p>Це головна складність — і вона розкладається на два питання.
<strong>Рід і число</strong> беремо з іменника, до якого відносимося.
<strong>Відмінок</strong> — з того, яку роль займенник виконує <u>всередині</u> підрядного.</p>
<table>
<thead><tr><th></th><th>чоловічий</th><th>жіночий</th><th>середній</th><th>множина</th></tr></thead>
<tbody>
<tr><td><strong>Nominativ</strong> — хто?</td><td><strong>der</strong></td><td><strong>die</strong></td><td><strong>das</strong></td><td><strong>die</strong></td></tr>
<tr><td><strong>Akkusativ</strong> — кого?</td><td><strong>den</strong></td><td><strong>die</strong></td><td><strong>das</strong></td><td><strong>die</strong></td></tr>
<tr><td><strong>Dativ</strong> — кому?</td><td><strong>dem</strong></td><td><strong>der</strong></td><td><strong>dem</strong></td><td><strong>denen</strong></td></tr>
</tbody></table>
<p>Це майже ті самі артиклі, які ви вже знаєте. Відрізняється лише один — <em>denen</em> у Dativ множини.</p>
<p><strong>Приклади з тим самим іменником:</strong></p>
<ul>
<li><em>der Mann, <strong>der</strong> dort steht</em><span class="uk">чоловік, який там стоїть (він стоїть → Nominativ)</span></li>
<li><em>der Mann, <strong>den</strong> ich kenne</em><span class="uk">чоловік, якого я знаю (я знаю його → Akkusativ)</span></li>
<li><em>der Mann, <strong>dem</strong> ich helfe</em><span class="uk">чоловік, якому я допомагаю (helfen + Dativ)</span></li>
</ul>
<div class="callout"><strong>Як не помилитися.</strong> Складіть підрядне як окреме речення:
«я знаю <u>його</u>» → <em>ihn</em> → Akkusativ → <em>den</em>. Займенник у простому реченні
показує потрібний відмінок.</div>`,
    },
    {
      title: '3. Прийменник перед займенником',
      html: `
<p>Якщо дієслово в підрядному вимагає прийменника, той прийменник стає <u>перед</u> займенником —
на початок підрядного.</p>
<table>
<thead><tr><th>Приклад</th><th>Переклад</th></tr></thead>
<tbody>
<tr><td><em>Das ist der Kollege, <strong>mit dem</strong> ich arbeite.</em></td><td>Це колега, з яким я працюю.</td></tr>
<tr><td><em>Die Stadt, <strong>in der</strong> ich wohne, ist klein.</em></td><td>Місто, у якому я живу, маленьке.</td></tr>
<tr><td><em>Der Film, <strong>über den</strong> alle sprechen, ist neu.</em></td><td>Фільм, про який усі говорять, новий.</td></tr>
</tbody></table>
<p>Замість <em>in der</em> у значенні місця часто кажуть простіше — <strong>wo</strong>:
<em>Die Stadt, <strong>wo</strong> ich wohne, ist klein.</em> На A2 обидва варіанти приймаються.</p>`,
    },
    {
      title: '4. Де стоїть підрядне',
      html: `
<p>Relativsatz ставлять <strong>одразу після</strong> іменника, до якого він відноситься. Якщо цей
іменник у середині головного речення, підрядне «розриває» його — і це нормально.</p>
<ul>
<li><em>Das Buch, <u>das ich gestern gekauft habe</u>, ist schon zu Ende.</em>
<span class="uk">Книжка, яку я вчора купив, уже закінчилася.</span></li>
<li><em>Meine Freundin, <u>die in Berlin studiert</u>, kommt morgen.</em>
<span class="uk">Моя подруга, яка навчається в Берліні, приїжджає завтра.</span></li>
</ul>
<p>Зверніть увагу: після закритого підрядного знову ставиться кома, а тоді продовжується головне речення.</p>`,
    },
    {
      title: '5. Слова з прикладів цієї теми',
      html: `
<table>
<thead><tr><th>Слово</th><th>Переклад</th><th>Як ужито</th></tr></thead>
<tbody>
<tr><td><em>spannend</em></td><td>захопливий, цікавий</td><td><em>ein Buch, das spannend ist</em></td></tr>
<tr><td><em>der Kollege, -n</em></td><td>колега</td><td><em>der Kollege, mit dem ich arbeite</em></td></tr>
<tr><td><em>zu Ende sein</em></td><td>закінчитися</td><td><em>Das Buch ist zu Ende.</em></td></tr>
<tr><td><em>empfehlen</em></td><td>радити</td><td><em>der Film, den du empfohlen hast</em></td></tr>
<tr><td><em>der Nachbar, -n</em></td><td>сусід</td><td><em>der Nachbar, der laut Musik hört</em></td></tr>
<tr><td><em>gehören</em></td><td>належати</td><td><em>das Auto, das meinem Bruder gehört</em></td></tr>
<tr><td><em>vertrauen</em></td><td>довіряти (+ Dativ)</td><td><em>Menschen, denen ich vertraue</em></td></tr>
<tr><td><em>die Gegend, -en</em></td><td>місцевість, район</td><td><em>die Gegend, wo ich wohne</em></td></tr>
</tbody></table>`,
    },
  ],
  exercises: [
    { type: 'gap', q: 'Das ist mein Bruder, ___ in Wien wohnt.', answers: ['der'] },
    { type: 'gap', q: 'Ich habe ein Buch, ___ sehr spannend ist.', answers: ['das'] },
    { type: 'gap', q: 'Die Frau, ___ dort steht, ist meine Lehrerin.', answers: ['die'] },
    { type: 'gap', q: 'Der Film, ___ du empfohlen hast, war super. (я бачив його → Akkusativ)',
      answers: ['den'] },
    { type: 'gap', q: 'Das Auto, ___ meinem Bruder gehört, ist neu. (gehören + Dativ)', answers: ['das'],
      explain: 'Тут займенник — підмет підрядного («авто належить»), тому Nominativ: das.' },
    { type: 'gap', q: 'Der Kollege, ___ ich helfe, ist neu. (helfen + Dativ)', answers: ['dem'] },
    { type: 'gap', q: 'Die Leute, ___ ich vertraue, sind wenige. (vertrauen + Dativ, множина)',
      answers: ['denen'] },
    { type: 'gap', q: 'Das ist der Kollege, mit ___ ich arbeite.', answers: ['dem'] },
    { type: 'gap', q: 'Die Stadt, in ___ ich wohne, ist klein.', answers: ['der'] },
    { type: 'choice', q: 'Der Mann, ___ ich gestern getroffen habe, ist Arzt.',
      options: ['der', 'den', 'dem', 'das'], answer: 1,
      explain: 'treffen + Akkusativ: «я зустрів його» → den.' },
    { type: 'choice', q: 'Скільком комам потрібне речення «Das Buch, das ich lese, ist gut»?',
      options: ['жодній', 'одній', 'двом', 'трьом'], answer: 2,
      explain: 'Підрядне відділяється комами з двох боків.' },
    { type: 'choice', q: 'Що визначає РІД відносного займенника?',
      options: ['роль у підрядному', 'іменник у головному реченні', 'дієслово', 'порядок слів'],
      answer: 1 },
    { type: 'order', q: 'Складіть речення.',
      words: ['Das', 'ist', 'die', 'Frau', 'die', 'Deutsch', 'unterrichtet'],
      answer: 'Das ist die Frau die Deutsch unterrichtet' },
    { type: 'order', q: 'Складіть речення.',
      words: ['Der', 'Nachbar', 'den', 'ich', 'kenne', 'ist', 'sehr', 'freundlich'],
      answer: 'Der Nachbar den ich kenne ist sehr freundlich' },
    { type: 'gap', q: 'Заповніть таблицю форм: чоловічий Nominativ ___, чоловічий Akkusativ ___, чоловічий Dativ ___, жіночий Dativ ___, Dativ множини ___.',
      answers: ['der', 'den', 'dem', 'der', 'denen'],
      explain: 'Жіночий Dativ і чоловічий Nominativ збігаються — обидва <em>der</em>. Розрізняє їх лише роль у реченні.' },
  ],

  listening: [
    {
      exam: 'Goethe A2 · Hören Teil 2',
      title: 'Wer ist wer auf dem Foto?',
      instruction: 'Друзі розглядають фото з вечірки. Слухайте описи людей.',
      lines: [
        { speaker: 'Sara', de: 'Wer ist der Mann, der neben Anna steht?', uk: 'Хто цей чоловік, що стоїть біля Анни?' },
        { speaker: 'Tim', de: 'Das ist Jonas, der Kollege, mit dem ich das Projekt mache.', uk: 'Це Йонас, колега, з яким я роблю проєкт.' },
        { speaker: 'Sara', de: 'Und die Frau, die den roten Pullover trägt?', uk: 'А жінка, що в червоному светрі?' },
        { speaker: 'Tim', de: 'Die kenne ich nicht. Aber der Mann, den sie fotografiert, ist Annas Bruder.', uk: 'Її я не знаю. Але чоловік, якого вона фотографує, — брат Анни.' },
        { speaker: 'Sara', de: 'Und das Kind, dem Anna hilft?', uk: 'А дитина, якій Анна допомагає?' },
        { speaker: 'Tim', de: 'Das ist ihre Tochter. Sie ist das Kind, das immer am lautesten lacht.', uk: 'Це її донька. Вона та дитина, яка завжди смішить найгучніше.' },
      ],
      tasks: [
        { type: 'choice', q: 'Wer steht neben Anna?',
          options: ['Annas Bruder', 'Jonas', 'Tim', 'Annas Tochter'], answer: 1 },
        { type: 'gap', q: 'Jonas ist der Kollege, mit ___ Tim das Projekt macht.', answers: ['dem'] },
        { type: 'truefalse', q: 'Tim kennt die Frau im roten Pullover.', answer: false },
        { type: 'choice', q: 'Wer ist das Kind?',
          options: ['Jonas’ Sohn', 'Annas Tochter', 'Saras Kind', 'Tims Nichte'], answer: 1 },
      ],
    },
  ],

  writing: [
    {
      exam: 'ÖSD A2 · Schreiben',
      title: 'Beschreiben Sie einen Menschen, der Ihnen wichtig ist',
      situation: 'Напишіть другові про людину, яка для вас важлива. Використайте щонайменше три підрядні означальні. <strong>55–65 слів</strong>.',
      points: ['Wer ist die Person?', 'Wie haben Sie sich kennengelernt?', 'Wie ist sie? (Charakter)', 'Warum ist sie Ihnen wichtig?'],
      minWords: 55,
      phrases: [
        { de: 'Ich möchte dir von meiner Freundin erzählen, die ich seit zehn Jahren kenne.', uk: 'Хочу розповісти тобі про подругу, яку знаю вже десять років.' },
        { de: 'Sie ist die Person, der ich am meisten vertraue.', uk: 'Вона людина, якій я довіряю найбільше.' },
        { de: 'Wir haben uns in einem Kurs kennengelernt, den wir beide besuchten.', uk: 'Ми познайомилися на курсі, який обоє відвідували.' },
        { de: 'Sie ist immer hilfsbereit und sehr geduldig.', uk: 'Вона завжди готова допомогти й дуже терпляча.' },
        { de: 'Das ist der Grund, warum sie mir so wichtig ist.', uk: 'Це причина, чому вона для мене така важлива.' },
      ],
      checklist: [
        'Є щонайменше три підрядні означальні з der / die / das?',
        'Перед кожним займенником стоїть кома?',
        'Дієслово в підрядному стоїть у кінці?',
        'Форма займенника відповідає роду іменника й відмінку в підрядному?',
        'Обсяг 55–65 слів?',
      ],
      model:
`Hallo Lukas,

ich möchte dir von Olena erzählen, die meine beste Freundin ist.
Wir haben uns in einem Deutschkurs kennengelernt, den wir beide vor drei Jahren besuchten.
Sie ist ein Mensch, dem ich alles erzählen kann, und sie hört immer geduldig zu.
Besonders mag ich, dass sie Probleme, über die andere nur reden, einfach löst.
Das ist der Grund, warum sie mir so wichtig ist.

Liebe Grüße
Andrij`,
      modelUk: 'Переклад: Привіт, Лукасе! Хочу розповісти тобі про Олену, яка є моєю найкращою подругою. Ми познайомилися на курсі німецької, який обоє відвідували три роки тому. Вона людина, якій я можу розповісти все, і вона завжди терпляче слухає. Особливо мені подобається, що проблеми, про які інші лише говорять, вона просто вирішує. Це причина, чому вона для мене така важлива.',
    },
  ],

  test: [
    { type: 'gap', q: 'Das ist die Lehrerin, ___ uns Deutsch unterrichtet.', answers: ['die'] },
    { type: 'gap', q: 'Ich habe einen Freund, ___ in Berlin arbeitet.', answers: ['der'] },
    { type: 'gap', q: 'Das Handy, ___ ich gekauft habe, war günstig.', answers: ['das'] },
    { type: 'gap', q: 'Der Kollege, ___ ich das Buch gegeben habe, heißt Max. (geben + Dativ)',
      answers: ['dem'] },
    { type: 'gap', q: 'Die Kinder, ___ wir helfen, sind aus der Ukraine. (helfen + Dativ)',
      answers: ['denen'] },
    { type: 'gap', q: 'Das ist die Firma, bei ___ ich arbeite.', answers: ['der'] },
    { type: 'choice', q: 'Der Film, ___ wir gestern gesehen haben, war lang.',
      options: ['der', 'den', 'dem', 'die'], answer: 1 },
    { type: 'choice', q: 'Die Stadt, in ___ ich geboren bin, liegt am Meer.',
      options: ['der', 'die', 'dem', 'das'], answer: 0 },
    { type: 'choice', q: 'Що визначає ВІДМІНОК відносного займенника?',
      options: ['рід іменника', 'його роль у підрядному реченні', 'кома', 'довжина речення'],
      answer: 1 },
    { type: 'order', q: 'Складіть речення.',
      words: ['Das', 'ist', 'das', 'Café', 'in', 'dem', 'wir', 'uns', 'getroffen', 'haben'],
      answer: 'Das ist das Café in dem wir uns getroffen haben' },
    { type: 'order', q: 'Складіть речення.',
      words: ['Menschen', 'denen', 'ich', 'vertraue', 'sind', 'selten'],
      answer: 'Menschen denen ich vertraue sind selten' },
    { type: 'match', q: 'Доберіть переклад.',
      pairs: [['zuverlässig', 'надійний'], ['hilfsbereit', 'готовий допомогти'], ['geduldig', 'терплячий'], ['empfehlen', 'радити'], ['die Gegend', 'район']] },
    { type: 'multi', q: 'Позначте правильні речення.',
      options: [
        'Das ist der Mann der hier wohnt.',
        'Das ist der Mann, der hier wohnt.',
        'Das ist der Mann, den ich kenne.',
        'Das ist der Mann, dem ich kenne.',
        'Die Leute, denen ich helfe, sind nett.',
      ],
      answers: [1, 2, 4],
      explain: 'У першому немає коми; у четвертому kennen вимагає Akkusativ — den, а не dem.' },
    { type: 'truefalse', q: 'У Dativ множини відносний займенник — «denen».', answer: true },
  ],
},

/* ══════════════════════════════════ МОДУЛЬ 8 ══════════════════════════════ */
{
  id: 'm8',
  title: 'Steigerung und Vergleich',
  titleUk: 'Ступені порівняння: більший, найбільший',
  can: [
    'утворювати вищий і найвищий ступінь',
    'порівнювати через als і so … wie',
    'вживати найвищий ступінь перед іменником',
    'обґрунтовувати вибір: що краще й чому',
  ],

  grammar: [
    {
      title: '1. Три ступені',
      html: `
<table>
<thead><tr><th>Позитив</th><th>Компаратив (вищий)</th><th>Суперлатив (найвищий)</th><th>Переклад</th></tr></thead>
<tbody>
<tr><td><em>klein</em></td><td><em>klein<strong>er</strong></em></td><td><em>am klein<strong>sten</strong></em></td><td>малий — менший — найменший</td></tr>
<tr><td><em>schnell</em></td><td><em>schneller</em></td><td><em>am schnellsten</em></td><td>швидкий — швидший — найшвидший</td></tr>
<tr><td><em>interessant</em></td><td><em>interessanter</em></td><td><em>am interessantesten</em></td><td>цікавий — цікавіший — найцікавіший</td></tr>
</tbody></table>
<p><strong>Схема:</strong> вищий ступінь — додаємо <strong>-er</strong>; найвищий — <strong>am …-sten</strong>.
Після <em>-t, -d, -s, -ß, -z</em> вставляється <em>-e-</em>: <em>am kält<u>e</u>sten</em>.</p>
<p><strong>Короткі прикметники з умлаутом.</strong> Односкладові часто беруть дві крапки:</p>
<table>
<thead><tr><th>Позитив</th><th>Компаратив</th><th>Суперлатив</th><th>Переклад</th></tr></thead>
<tbody>
<tr><td>alt</td><td>ält<strong>er</strong></td><td>am ältesten</td><td>старий</td></tr>
<tr><td>jung</td><td>jünger</td><td>am jüngsten</td><td>молодий</td></tr>
<tr><td>groß</td><td>größer</td><td>am größten</td><td>великий</td></tr>
<tr><td>kalt</td><td>kälter</td><td>am kältesten</td><td>холодний</td></tr>
<tr><td>warm</td><td>wärmer</td><td>am wärmsten</td><td>теплий</td></tr>
<tr><td>lang</td><td>länger</td><td>am längsten</td><td>довгий</td></tr>
<tr><td>stark</td><td>stärker</td><td>am stärksten</td><td>сильний</td></tr>
</tbody></table>`,
    },
    {
      title: '2. Неправильні — вивчити напам’ять',
      html: `
<table>
<thead><tr><th>Позитив</th><th>Компаратив</th><th>Суперлатив</th><th>Переклад</th></tr></thead>
<tbody>
<tr><td><em>gut</em></td><td><strong>besser</strong></td><td><strong>am besten</strong></td><td>добрий — краще — найкраще</td></tr>
<tr><td><em>viel</em></td><td><strong>mehr</strong></td><td><strong>am meisten</strong></td><td>багато — більше — найбільше</td></tr>
<tr><td><em>gern</em></td><td><strong>lieber</strong></td><td><strong>am liebsten</strong></td><td>охоче — охочіше — найохочіше</td></tr>
<tr><td><em>hoch</em></td><td><strong>höher</strong></td><td><strong>am höchsten</strong></td><td>високий</td></tr>
<tr><td><em>nah</em></td><td><strong>näher</strong></td><td><strong>am nächsten</strong></td><td>близький</td></tr>
</tbody></table>
<div class="callout"><strong>gern — lieber — am liebsten</strong> потрібні щодня:
<em>Ich trinke <u>gern</u> Tee, aber <u>lieber</u> Kaffee. <u>Am liebsten</u> trinke ich Wasser.</em>
<span class="uk">Я люблю чай, але більше люблю каву. Найбільше люблю воду.</span></div>`,
    },
    {
      title: '3. als чи wie?',
      html: `
<table>
<thead><tr><th>Значення</th><th>Слово</th><th>Приклад і переклад</th></tr></thead>
<tbody>
<tr><td>нерівність (більше / менше)</td><td><strong>als</strong></td>
<td><em>Wien ist größer als Salzburg.</em><span class="uk">Відень більший за Зальцбург.</span></td></tr>
<tr><td>рівність</td><td><strong>so … wie</strong></td>
<td><em>Heute ist es so kalt wie gestern.</em><span class="uk">Сьогодні так само холодно, як учора.</span></td></tr>
<tr><td>заперечена рівність</td><td><strong>nicht so … wie</strong></td>
<td><em>Der Film war nicht so gut wie das Buch.</em><span class="uk">Фільм був не такий добрий, як книжка.</span></td></tr>
</tbody></table>
<div class="callout"><strong>Найчастіша помилка.</strong> «Більший <u>як</u>» українською можливе,
німецькою — ні. Після компаратива завжди <em>als</em>: <em>besser <u>als</u></em>, ніколи
«besser wie».</div>`,
    },
    {
      title: '4. Найвищий ступінь перед іменником',
      html: `
<p>Коли суперлатив стоїть перед іменником, форма <em>am …-sten</em> не годиться — потрібен
означений артикль і закінчення прикметника.</p>
<table>
<thead><tr><th>Після дієслова</th><th>Перед іменником</th></tr></thead>
<tbody>
<tr><td><em>Dieses Hotel ist <strong>am billigsten</strong>.</em><span class="uk">Цей готель найдешевший.</span></td>
<td><em>Das ist <strong>das billigste</strong> Hotel.</em><span class="uk">Це найдешевший готель.</span></td></tr>
<tr><td><em>Er ist <strong>am jüngsten</strong>.</em></td>
<td><em>Er ist <strong>der jüngste</strong> Schüler.</em></td></tr>
<tr><td><em>Diese Frage ist <strong>am wichtigsten</strong>.</em></td>
<td><em>Das ist <strong>die wichtigste</strong> Frage.</em></td></tr>
</tbody></table>
<p>Компаратив перед іменником теж отримує закінчення:
<em>ein <strong>billigeres</strong> Hotel</em><span class="uk">дешевший готель</span>,
<em>eine <strong>größere</strong> Wohnung</em><span class="uk">більша квартира</span>.</p>`,
    },
    {
      title: '5. Слова з прикладів цієї теми',
      html: `
<table>
<thead><tr><th>Слово</th><th>Переклад</th><th>Як ужито</th></tr></thead>
<tbody>
<tr><td><em>billig / teuer</em></td><td>дешевий / дорогий</td><td><em>das billigste Hotel</em></td></tr>
<tr><td><em>wichtig</em></td><td>важливий</td><td><em>die wichtigste Frage</em></td></tr>
<tr><td><em>bequem</em></td><td>зручний</td><td><em>bequemer als der Bus</em></td></tr>
<tr><td><em>der Unterschied, -e</em></td><td>різниця</td><td><em>der größte Unterschied</em></td></tr>
<tr><td><em>der Vorteil / der Nachteil</em></td><td>перевага / недолік</td><td>порівняння варіантів</td></tr>
<tr><td><em>sich entscheiden für</em></td><td>обирати на користь</td><td><em>Ich entscheide mich für den Zug.</em></td></tr>
<tr><td><em>sparen</em></td><td>заощаджувати</td><td><em>So spart man mehr.</em></td></tr>
<tr><td><em>dauern</em></td><td>тривати</td><td><em>Der Flug dauert kürzer.</em></td></tr>
<tr><td><em>vergleichen</em></td><td>порівнювати</td><td>назва самої дії</td></tr>
</tbody></table>`,
    },
  ],
  exercises: [
    { type: 'gap', q: 'Wien ist ___ als Salzburg. (groß)', answers: ['größer|groesser'] },
    { type: 'gap', q: 'Mein Bruder ist ___ als ich. (alt)', answers: ['älter|aelter'] },
    { type: 'gap', q: 'Der Zug ist ___ als das Auto. (bequem)', answers: ['bequemer'] },
    { type: 'gap', q: 'Sie spricht ___ Deutsch als ich. (gut)', answers: ['besser'] },
    { type: 'gap', q: 'Ich trinke gern Tee, aber ___ Kaffee. (gern)', answers: ['lieber'] },
    { type: 'gap', q: 'Von allen Hotels ist dieses ___. (billig, суперлатив)',
      answers: ['am billigsten'] },
    { type: 'gap', q: 'Das ist ___ Hotel in der Stadt. (billig, перед іменником)',
      answers: ['das billigste'] },
    { type: 'choice', q: 'Heute ist es so kalt ___ gestern.',
      options: ['als', 'wie', 'wie als', 'denn'], answer: 1 },
    { type: 'choice', q: 'Der Film war nicht so gut ___ das Buch.',
      options: ['als', 'wie', 'so', 'denn'], answer: 1 },
    { type: 'choice', q: 'Яке речення правильне?',
      options: ['Er ist größer wie ich.', 'Er ist größer als ich.', 'Er ist größer so wie ich.', 'Er ist mehr groß als ich.'],
      answer: 1 },
    { type: 'choice', q: 'Суперлатив від «viel»:',
      options: ['am vielsten', 'am mehrsten', 'am meisten', 'am viel'], answer: 2 },
    { type: 'order', q: 'Складіть речення.',
      words: ['Der', 'Flug', 'dauert', 'kürzer', 'als', 'die', 'Fahrt'],
      answer: 'Der Flug dauert kürzer als die Fahrt' },
    { type: 'order', q: 'Складіть речення.',
      words: ['Am', 'liebsten', 'fahre', 'ich', 'mit', 'dem', 'Zug'],
      answer: 'Am liebsten fahre ich mit dem Zug' },
    { type: 'match', q: 'Доберіть компаратив.',
      pairs: [['gut', 'besser'], ['viel', 'mehr'], ['gern', 'lieber'], ['hoch', 'höher'], ['nah', 'näher']] },
    { type: 'multi', q: 'Позначте прикметники, що беруть умлаут у вищому ступені.',
      options: ['alt', 'schnell', 'jung', 'interessant', 'warm', 'lang'],
      answers: [0, 2, 4, 5] },
  ],

  listening: [
    {
      exam: 'Goethe A2 · Hören Teil 3',
      title: 'Zug oder Flugzeug?',
      instruction: 'Двоє друзів обирають, як їхати. Порівняйте варіанти.',
      lines: [
        { speaker: 'Ben', de: 'Sollen wir fliegen oder den Zug nehmen? Der Flug ist natürlich schneller.', uk: 'Летимо чи поїдемо потягом? Літак, звісно, швидший.' },
        { speaker: 'Nina', de: 'Schneller schon, aber nicht so bequem. Am Flughafen musst du zwei Stunden früher da sein.', uk: 'Швидший — так, але не такий зручний. В аеропорту треба бути на дві години раніше.' },
        { speaker: 'Ben', de: 'Und der Zug? Der dauert doch fast sieben Stunden.', uk: 'А потяг? Він же триває майже сім годин.' },
        { speaker: 'Nina', de: 'Sechs. Dafür ist er billiger — vierzig Euro statt hundertzehn.', uk: 'Шість. Зате він дешевший — сорок євро замість ста десяти.' },
        { speaker: 'Ben', de: 'Das ist ein großer Unterschied. Und im Zug kann man besser arbeiten.', uk: 'Це велика різниця. І в потязі можна краще працювати.' },
        { speaker: 'Nina', de: 'Genau. Am liebsten würde ich den Nachtzug nehmen — dann sparen wir auch das Hotel.', uk: 'Саме так. Найбільше хотіла б нічний потяг — тоді ще й на готелі зекономимо.' },
      ],
      tasks: [
        { type: 'gap', q: 'Die Zugfahrt dauert ___ Stunden.', answers: ['6|sechs'] },
        { type: 'gap', q: 'Der Zug kostet ___ Euro, der Flug ___.',
          answers: ['40|vierzig', '110|hundertzehn'] },
        { type: 'choice', q: 'Welchen Vorteil des Zugs nennt Ben?',
          options: ['Er ist schneller.', 'Man kann besser arbeiten.', 'Er ist pünktlicher.', 'Er fährt öfter.'], answer: 1 },
        { type: 'choice', q: 'Was möchte Nina am liebsten?',
          options: ['Fliegen', 'Den Nachtzug nehmen', 'Mit dem Auto fahren', 'Zu Hause bleiben'], answer: 1 },
        { type: 'truefalse', q: 'Nina findet das Flugzeug bequemer als den Zug.', answer: false },
      ],
    },
  ],

  writing: [
    {
      exam: 'Goethe A2 · Schreiben Teil 2',
      title: 'Zwei Wohnungen vergleichen',
      situation: 'Ви обираєте між двома квартирами й пишете подрузі, яку берете й чому. Порівняйте їх. <strong>55–65 слів</strong>.',
      points: ['Beschreiben Sie kurz beide Wohnungen.', 'Was ist billiger, größer, näher?', 'Welche nehmen Sie?', 'Warum?'],
      minWords: 55,
      phrases: [
        { de: 'Die erste Wohnung ist größer als die zweite.', uk: 'Перша квартира більша за другу.' },
        { de: 'Aber sie ist auch viel teurer.', uk: 'Але вона й значно дорожча.' },
        { de: 'Die zweite liegt näher am Zentrum.', uk: 'Друга розташована ближче до центру.' },
        { de: 'Sie ist nicht so hell wie die erste.', uk: 'Вона не така світла, як перша.' },
        { de: 'Am wichtigsten ist für mich der Preis.', uk: 'Найважливіша для мене ціна.' },
        { de: 'Deshalb entscheide ich mich für die zweite.', uk: 'Тому я обираю другу.' },
      ],
      checklist: [
        'Є щонайменше три порівняння з компаративом (-er … als)?',
        'Після вищого ступеня стоїть als, а не wie?',
        'Є хоча б один суперлатив (am wichtigsten / die beste)?',
        'Ви пояснили свій вибір?',
        'Обсяг 55–65 слів?',
      ],
      model:
`Hallo Marta,

ich habe endlich zwei Wohnungen gesehen und muss mich entscheiden.
Die erste ist größer und heller, aber sie ist auch viel teurer — 780 Euro statt 620.
Die zweite ist kleiner und nicht so hell, liegt dafür näher am Zentrum und an meiner Arbeit.
Am wichtigsten ist für mich der Preis, denn ich möchte mehr sparen.
Deshalb nehme ich die zweite. Der Weg zur Arbeit ist auch viel kürzer!

Liebe Grüße
Oksana`,
      modelUk: 'Переклад: Привіт, Марто! Я нарешті подивилася дві квартири й мушу вирішувати. Перша більша й світліша, але й значно дорожча — 780 євро замість 620. Друга менша й не така світла, зате розташована ближче до центру й до моєї роботи. Найважливіша для мене ціна, бо хочу більше заощаджувати. Тому беру другу. Дорога на роботу теж значно коротша!',
    },
  ],

  test: [
    { type: 'gap', q: 'Berlin ist ___ als Bonn. (groß)', answers: ['größer|groesser'] },
    { type: 'gap', q: 'Der Winter ist ___ als der Herbst. (kalt)', answers: ['kälter|kaelter'] },
    { type: 'gap', q: 'Sie kocht ___ als ich. (gut)', answers: ['besser'] },
    { type: 'gap', q: 'Ich lese ___ als ich fernsehe. (gern)', answers: ['lieber'] },
    { type: 'gap', q: 'Dieser Weg ist ___. (kurz, суперлатив після дієслова)', answers: ['am kürzesten|am kuerzesten'] },
    { type: 'gap', q: 'Das ist ___ Weg. (kurz, перед іменником)', answers: ['der kürzeste|der kuerzeste'] },
    { type: 'choice', q: 'Mein Zimmer ist so groß ___ deines.',
      options: ['als', 'wie', 'denn', 'dass'], answer: 1 },
    { type: 'choice', q: 'Компаратив від «teuer»:',
      options: ['teuerer', 'teurer', 'teuriger', 'mehr teuer'], answer: 1,
      explain: 'Випадає -e-: teuer → teurer.' },
    { type: 'choice', q: 'Суперлатив від «gern»:',
      options: ['am gernsten', 'am liebsten', 'am besten', 'am meisten'], answer: 1 },
    { type: 'order', q: 'Складіть речення.',
      words: ['Diese', 'Wohnung', 'ist', 'billiger', 'als', 'die', 'andere'],
      answer: 'Diese Wohnung ist billiger als die andere' },
    { type: 'order', q: 'Складіть речення.',
      words: ['Das', 'ist', 'die', 'wichtigste', 'Frage'],
      answer: 'Das ist die wichtigste Frage' },
    { type: 'match', q: 'Доберіть переклад.',
      pairs: [['der Unterschied', 'різниця'], ['der Vorteil', 'перевага'], ['vergleichen', 'порівнювати'], ['sparen', 'заощаджувати'], ['bequem', 'зручний']] },
    { type: 'multi', q: 'Позначте правильні порівняння.',
      options: ['besser als', 'besser wie', 'so groß wie', 'so groß als', 'nicht so teuer wie'],
      answers: [0, 2, 4] },
    { type: 'truefalse', q: 'Перед іменником суперлатив має форму «am …-sten».', answer: false,
      explain: 'Перед іменником потрібен артикль і закінчення: das billigste Hotel.' },
  ],
},

];
