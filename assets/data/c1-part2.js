/* C1, модулі 3–5: модальні частки й відтінки, конектори поступки та обмеження,
   замінники пасиву й вираження модальності. */

const m3 = {
  id: 'm3',
  title: 'Modalpartikeln: die Feinabstimmung',
  titleUk: 'Модальні частки: як німці передають відтінок',
  can: [
    'розуміти doch, mal, ja, eben, halt, wohl, schon, denn у мовленні',
    'ставити частки на правильне місце в реченні',
    'відрізняти частку від омонімічного прислівника чи сполучника',
    'уживати частки, щоб звучати менш різко',
    'розпізнавати відтінок роздратування, здивування або згоди',
  ],

  grammar: [
    {
      title: '1. Що таке модальна частка й чому її не перекладають',
      html: `
<p>Модальна частка (<em>Modalpartikel</em>, або <em>Abtönungspartikel</em>) не змінює зміст речення —
вона змінює <strong>ставлення того, хто говорить</strong>. Тому словникового перекладу в неї
здебільшого немає: українською той самий відтінок передають інтонацією або словами
«ж», «бо», «та», «-но», «власне».</p>
<table>
<thead><tr><th>Без частки</th><th>З часткою</th><th>Що змінилося</th></tr></thead>
<tbody>
<tr><td><em>Komm her.</em><span class="uk">Іди сюди.</span></td>
<td><em>Komm <strong>mal</strong> her.</em><span class="uk">Іди-но сюди.</span></td>
<td>наказ став ненав’язливим проханням</td></tr>
<tr><td><em>Das ist teuer.</em><span class="uk">Це дорого.</span></td>
<td><em>Das ist <strong>ja</strong> teuer!</em><span class="uk">Ото ж дорого!</span></td>
<td>додалося здивування</td></tr>
<tr><td><em>Du weißt es.</em><span class="uk">Ти це знаєш.</span></td>
<td><em>Du weißt es <strong>doch</strong>.</em><span class="uk">Ти ж це знаєш.</span></td>
<td>«ми обидва це знаємо» — апеляція до спільного знання</td></tr>
<tr><td><em>Wie heißt du?</em></td>
<td><em>Wie heißt du <strong>denn</strong>?</em><span class="uk">А як же тебе звати?</span></td>
<td>питання стало теплішим, менш допитовим</td></tr>
</tbody></table>
<div class="callout"><strong>Чому це саме рівень C1.</strong> Без часток ваша німецька
залишається правильною, але звучить як текст із підручника. Носій відразу відчуває
дистанцію. Частки — найпомітніша різниця між «говорить правильно» і «говорить як свій».</div>
<p><strong>Найважливіше технічне правило:</strong> модальна частка стоїть у Mittelfeld,
<u>після</u> дієслова й займенників, але <u>перед</u> новою інформацією.
Вона <strong>ніколи не буває на першому місці</strong> й ніколи не має наголосу.</p>`,
    },
    {
      title: '2. Вісім головних часток',
      html: `
<table>
<thead><tr><th>Частка</th><th>Відтінок</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td><strong>doch</strong></td><td>апеляція до відомого; лагідний докір; наполягання</td>
<td><em>Das habe ich dir <strong>doch</strong> gesagt.</em><span class="uk">Я ж тобі це казав.</span></td></tr>
<tr><td><strong>mal</strong></td><td>несерйозність, «швиденько», м’якшить прохання</td>
<td><em>Kannst du <strong>mal</strong> helfen?</em><span class="uk">Можеш-но допомогти?</span></td></tr>
<tr><td><strong>ja</strong></td><td>здивування (з наголосом на реченні) або «як відомо»</td>
<td><em>Du bist <strong>ja</strong> schon da!</em><span class="uk">Ти ж уже тут!</span></td></tr>
<tr><td><strong>eben / halt</strong></td><td>«так уже є», констатація без варіантів</td>
<td><em>Das ist <strong>eben</strong> so.</em><span class="uk">Так уже воно є.</span></td></tr>
<tr><td><strong>wohl</strong></td><td>припущення</td>
<td><em>Er hat es <strong>wohl</strong> vergessen.</em><span class="uk">Він, мабуть, забув.</span></td></tr>
<tr><td><strong>schon</strong></td><td>часткова згода з обмеженням</td>
<td><em>Das stimmt <strong>schon</strong>, aber …</em><span class="uk">Воно-то так, але …</span></td></tr>
<tr><td><strong>denn</strong></td><td>тільки в питаннях: цікавість, участь</td>
<td><em>Was machst du <strong>denn</strong> hier?</em><span class="uk">А що ж ти тут робиш?</span></td></tr>
<tr><td><strong>etwa</strong></td><td>у питанні: недовіра, «невже»</td>
<td><em>Hast du das <strong>etwa</strong> vergessen?</em><span class="uk">Невже ти це забув?</span></td></tr>
</tbody></table>
<div class="callout callout--tip"><strong>Комбінації теж бувають</strong> — і в них є порядок:
<em>doch mal</em>, <em>ja doch</em>, <em>doch wohl</em>.
<em>Komm <strong>doch mal</strong> vorbei!</em> — «Зайшов би ти якось!»
Порядок фіксований: <em>doch</em> раніше за <em>mal</em>, а не навпаки.</div>`,
    },
    {
      title: '3. Омоніми: та сама форма, інша роль',
      html: `
<p>Кожна з цих часток має «двійника» — повноцінне слово з наголосом і власним значенням.
Розрізняє їх позиція й наголос.</p>
<table>
<thead><tr><th>Слово</th><th>Як частка (без наголосу, у Mittelfeld)</th><th>Як самостійне слово (з наголосом)</th></tr></thead>
<tbody>
<tr><td><strong>doch</strong></td><td><em>Du kennst ihn <strong>doch</strong>.</em><span class="uk">Ти ж його знаєш.</span></td>
<td>заперечення заперечення: <em>— Du kommst nicht? — <strong>Doch!</strong></em><span class="uk">— Ти не прийдеш? — Та прийду ж!</span></td></tr>
<tr><td><strong>mal</strong></td><td><em>Ruf mich <strong>mal</strong> an.</em><span class="uk">Подзвони-но.</span></td>
<td>«разів»: <em>drei<strong>mal</strong></em><span class="uk">тричі</span></td></tr>
<tr><td><strong>ja</strong></td><td><em>Das ist <strong>ja</strong> nett.</em><span class="uk">Це ж мило.</span></td>
<td>«так»: <em><strong>Ja</strong>, gern.</em></td></tr>
<tr><td><strong>schon</strong></td><td><em>Das geht <strong>schon</strong>.</em><span class="uk">Та нічого, зійде.</span></td>
<td>«уже»: <em>Er ist <strong>schon</strong> da.</em><span class="uk">Він уже тут.</span></td></tr>
<tr><td><strong>denn</strong></td><td><em>Wo bist du <strong>denn</strong>?</em><span class="uk">Де ж ти?</span></td>
<td>сполучник «бо»: <em>Ich bleibe, <strong>denn</strong> es regnet.</em><span class="uk">Я залишаюсь, бо дощ.</span></td></tr>
<tr><td><strong>eben</strong></td><td><em>Das ist <strong>eben</strong> so.</em><span class="uk">Так уже є.</span></td>
<td>«щойно»: <em>Er ist <strong>eben</strong> gegangen.</em><span class="uk">Він щойно пішов.</span></td></tr>
<tr><td><strong>wohl</strong></td><td><em>Sie schläft <strong>wohl</strong>.</em><span class="uk">Вона, мабуть, спить.</span></td>
<td>«добре, комфортно»: <em>Ich fühle mich <strong>wohl</strong>.</em><span class="uk">Мені добре.</span></td></tr>
</tbody></table>
<div class="callout"><strong>Практичний тест на розрізнення.</strong> Спробуйте поставити слово
на перше місце. Вийшло — це самостійне слово (<em>Schon gestern war er da</em>).
Не вийшло, речення розсипається — це частка. Другий тест: чи можна слово наголосити?
Частку наголосити не можна.</div>`,
    },
    {
      title: '4. Частки як інструмент дипломатії',
      html: `
<p>У професійній комунікації частки виконують дуже конкретну роботу: вони
<strong>знижують різкість</strong>. Порівняйте той самий зміст.</p>
<table>
<thead><tr><th>Різко</th><th>З часткою</th><th>Ефект</th></tr></thead>
<tbody>
<tr><td><em>Das haben wir besprochen.</em><span class="uk">Ми це обговорювали.</span></td>
<td><em>Das haben wir <strong>doch</strong> besprochen.</em><span class="uk">Ми ж це обговорювали.</span></td>
<td>нагадування замість закиду</td></tr>
<tr><td><em>Schauen Sie ins Protokoll.</em><span class="uk">Подивіться в протокол.</span></td>
<td><em>Schauen Sie <strong>mal</strong> ins Protokoll.</em><span class="uk">Погляньте-но в протокол.</span></td>
<td>прохання замість вказівки</td></tr>
<tr><td><em>Da haben Sie recht, aber …</em></td>
<td><em>Da haben Sie <strong>schon</strong> recht, aber …</em><span class="uk">Тут Ви таки маєте рацію, але …</span></td>
<td>визнання перед запереченням</td></tr>
<tr><td><em>Das ist nicht möglich.</em></td>
<td><em>Das ist <strong>eben</strong> nicht möglich.</em><span class="uk">Це просто неможливо, так уже є.</span></td>
<td>констатація без особистої вини</td></tr>
</tbody></table>
<div class="callout callout--tip"><strong>Де часток НЕ вживають.</strong> У писемному офіційному
тексті — діловому листі, звіті, заяві — модальні частки недоречні: вони належать
усному реєстру. Виняток — <em>wohl</em> у значенні припущення й <em>durchaus</em>,
<em>allerdings</em>, які вже перейшли в письмову мову.
Тому в частині Schreiben беріть частки лише в неформальних жанрах, а в Sprechen — вільно.</div>
<p><strong>Обережно з надміром.</strong> Дві-три частки в репліці — природно.
П’ять — звучить як карикатура. Частка має бути реакцією на ситуацію, а не заповнювачем.</p>`,
    },
    {
      title: '5. Слова з прикладів цієї теми',
      html: `
<table>
<thead><tr><th>Слово</th><th>Переклад</th><th>Як ужито в темі</th></tr></thead>
<tbody>
<tr><td><em>vorbeikommen</em></td><td>зайти, навідатися</td><td><em>Komm doch mal vorbei!</em></td></tr>
<tr><td><em>das Protokoll, -e</em></td><td>протокол</td><td><em>Schauen Sie mal ins Protokoll.</em></td></tr>
<tr><td><em>recht haben</em></td><td>мати рацію</td><td><em>Da haben Sie schon recht, aber …</em></td></tr>
<tr><td><em>durchaus</em></td><td>цілком, безумовно</td><td>Прислівник, доречний і в писемній мові.</td></tr>
<tr><td><em>die Abtönung</em></td><td>відтінювання, нюансування</td><td>Друга назва цих часток.</td></tr>
<tr><td><em>der Vorwurf, ¨-e</em></td><td>закид, докір</td><td><em>… нагадування замість закиду.</em></td></tr>
<tr><td><em>schroff</em></td><td>різкий, грубуватий</td><td>Те, що частки й знижують.</td></tr>
<tr><td><em>einlenken</em></td><td>іти на поступки</td><td>Функція <em>schon</em> у «Da haben Sie schon recht».</td></tr>
<tr><td><em>die Zustimmung</em></td><td>згода</td><td>Часткова згода через <em>schon</em>.</td></tr>
<tr><td><em>der Unmut</em></td><td>невдоволення</td><td>Відтінок, який часто несе <em>etwa</em>.</td></tr>
</tbody></table>`,
    },
  ],
  exercises: [
    { type: 'gap', q: 'М’якше прохання: Kannst du ___ helfen? (частка)', answers: ['mal'] },
    { type: 'gap', q: 'Апеляція до відомого: Das habe ich dir ___ gesagt.', answers: ['doch'] },
    { type: 'gap', q: 'Здивування: Du bist ___ schon da!', answers: ['ja'] },
    { type: 'gap', q: 'Констатація «так уже є»: Das ist ___ so.', answers: ['eben|halt'] },
    { type: 'gap', q: 'Тепліше питання: Wie heißt du ___?', answers: ['denn'] },
    { type: 'gap', q: 'Часткова згода: Das stimmt ___, aber …', answers: ['schon'] },
    { type: 'gap', q: 'Недовіра в питанні: Hast du das ___ vergessen?', answers: ['etwa'] },
    { type: 'choice', q: 'Де стоїть модальна частка?',
      options: ['на першому місці', 'у Mittelfeld, після дієслова й займенників',
        'у самому кінці речення', 'перед підметом'], answer: 1 },
    { type: 'choice', q: 'У якому реченні <span class="de-inline">schon</span> — НЕ частка, а «уже»?',
      options: ['Das geht schon.', 'Er ist schon da.', 'Das stimmt schon, aber …', 'Das wird schon klappen.'],
      answer: 1 },
    { type: 'choice', q: 'У якому реченні <span class="de-inline">eben</span> означає «щойно»?',
      options: ['Das ist eben so.', 'Er ist eben gegangen.', 'So ist es eben.', 'Das war eben Pech.'],
      answer: 1 },
    { type: 'choice', q: 'Правильний порядок у комбінації:',
      options: ['Komm mal doch vorbei!', 'Komm doch mal vorbei!',
        'Doch komm mal vorbei!', 'Mal komm doch vorbei!'], answer: 1 },
    { type: 'order', q: 'Складіть речення.',
      words: ['Schauen', 'Sie', 'mal', 'ins', 'Protokoll'],
      answer: 'Schauen Sie mal ins Protokoll' },
    { type: 'match', q: 'Доберіть відтінок.',
      pairs: [['doch', 'ти ж це знаєш'], ['mal', 'м’якше прохання'], ['ja', 'здивування'],
        ['eben', 'так уже є'], ['wohl', 'припущення'], ['etwa', 'невже']] },
    { type: 'multi', q: 'Позначте твердження, правильні щодо модальних часток.',
      options: ['Вони не стоять на першому місці.', 'Вони не мають наголосу.',
        'Вони змінюють зміст речення.', 'Вони доречні в діловому листі.',
        'Вони передають ставлення того, хто говорить.'],
      answers: [0, 1, 4] },
    { type: 'truefalse', q: 'Модальні частки доречні в офіційному письмовому звіті.',
      answer: false,
      explain: 'Вони належать усному реєстру; у звіті звучали б недоладно.' },
  ],

  listening: [
    {
      exam: 'Goethe C1 · Hören Teil 1',
      title: 'Kurzes Gespräch mit vielen Partikeln',
      instruction: 'Двоє колег стикаються в коридорі. Слухайте, які частки передають роздратування, а які — примирення.',
      lines: [
        { speaker: 'Bernd', de: 'Sag mal, hast du die Zahlen etwa noch nicht geschickt?', uk: 'Слухай-но, невже ти ще не надіслав цифри?' },
        { speaker: 'Lesia', de: 'Ich habe dir doch gestern geschrieben, dass die Datei kaputt war.', uk: 'Я ж тобі вчора написала, що файл був пошкоджений.' },
        { speaker: 'Bernd', de: 'Ach so! Das habe ich wohl überlesen. Tut mir leid.', uk: 'А, ось як! Я це, мабуть, пропустив. Вибач.' },
        { speaker: 'Lesia', de: 'Das geht schon. Passiert eben, wenn alle gleichzeitig schreiben.', uk: 'Та нічого. Так уже буває, коли всі пишуть одночасно.' },
        { speaker: 'Bernd', de: 'Kannst du sie mir mal neu schicken? Ich brauche sie bis zwölf.', uk: 'Можеш-но надіслати їх мені ще раз? Мені треба до дванадцятої.' },
        { speaker: 'Lesia', de: 'Mach ich. Aber schau bitte diesmal ruhig zweimal hin — ich hänge sie auch ins Laufwerk.', uk: 'Зроблю. Але поглянь цього разу спокійно двічі — я покладу їх ще й на диск.' },
        { speaker: 'Bernd', de: 'Verdient. Und danke, dass du nicht sauer bist.', uk: 'Заслужено. І дякую, що не гніваєшся.' },
        { speaker: 'Lesia', de: 'Na ja, dafür ist die Woche zu kurz.', uk: 'Ну, як би, тиждень для цього надто короткий.' },
      ],
      tasks: [
        { type: 'choice', q: 'Welche Partikel zeigt Bernds Unmut am Anfang?',
          options: ['doch', 'etwa', 'schon', 'eben'], answer: 1 },
        { type: 'choice', q: 'Warum hat Lesia die Zahlen nicht geschickt?',
          options: ['Sie hat es vergessen', 'Die Datei war beschädigt',
            'Sie hatte keine Zeit', 'Sie wartet auf Freigabe'], answer: 1 },
        { type: 'choice', q: 'Womit signalisiert Lesia, dass sie nicht verärgert ist?',
          options: ['Das geht schon.', 'Sag mal', 'Hast du etwa …', 'Verdient.'], answer: 0 },
        { type: 'gap', q: 'Bernd braucht die Zahlen bis ___ Uhr.', answers: ['zwölf|12'] },
        { type: 'multi', q: 'Welche Partikeln kommen vor?',
          options: ['mal', 'etwa', 'doch', 'wohl', 'eben', 'ruhig'],
          answers: [0, 1, 2, 3, 4, 5] },
      ],
    },
  ],

  writing: [
    {
      exam: 'ÖSD C1 · Schreiben',
      title: 'Persönliche Nachricht: ein Missverständnis klären',
      situation: 'Колега публічно натякнув, що ви завалили дедлайн, хоча причина була не у вас. Напишіть йому неформальне повідомлення: <strong>120–150 слів</strong>. Тон — примирливий, без загострення. Уживіть щонайменше чотири модальні частки.',
      points: [
        'Beziehen Sie sich auf die Situation.',
        'Erklären Sie sachlich, was wirklich passiert ist.',
        'Vermeiden Sie Vorwürfe — mildern Sie mit Partikeln.',
        'Schlagen Sie vor, wie es künftig läuft.',
      ],
      minWords: 120,
      phrases: [
        { de: 'Sag mal, hast du kurz Zeit für zwei Zeilen?', uk: 'Слухай-но, маєш хвилинку на два рядки?' },
        { de: 'Ich wollte das doch nur einmal richtigstellen.', uk: 'Я ж хотів це лише один раз прояснити.' },
        { de: 'Die Freigabe kam eben erst am Donnerstag.', uk: 'Погодження ж надійшло лише в четвер.' },
        { de: 'Du hast schon recht, dass die Info früher hätte kommen können.', uk: 'Ти таки маєш рацію, що інформація могла надійти раніше.' },
        { de: 'Das war wohl ein Missverständnis.', uk: 'Це, мабуть, було непорозуміння.' },
        { de: 'Lass uns das nächste Mal einfach kurz telefonieren.', uk: 'Давай наступного разу просто коротко зателефонуємо.' },
      ],
      checklist: [
        'Є щонайменше чотири модальні частки (doch, mal, eben, wohl, schon …)?',
        'Кожна стоїть у Mittelfeld, а не на першому місці?',
        'Тон примирливий: чи визнано щось за собою?',
        'Є конкретна пропозиція на майбутнє?',
        'Обсяг 120–150 слів, звертання на du?',
      ],
      model:
`Hallo Jonas,

sag mal, hast du kurz Zeit für ein paar Zeilen? Ich wollte die Sache von gestern nur einmal
richtigstellen, ganz ohne Vorwurf.

Der Bericht lag bei mir schon am Montag fertig. Die Freigabe aus der Rechtsabteilung kam eben erst
am Donnerstagnachmittag, und ohne die durfte ich nichts verschicken. Das habe ich dir am Dienstag
auch geschrieben — du hast es in der Mailflut wohl einfach überlesen. Kann passieren, mir geht es
mit deinen Nachrichten manchmal genauso.

Du hast schon recht, dass ich früher hätte nachhaken können. Da hätte ich mich nicht auf eine
einzige Mail verlassen sollen.

Lass uns das beim nächsten Projekt einfach anders machen: Wenn eine Freigabe hängt, rufe ich dich
kurz an, statt zu schreiben. Dann weißt du sofort, woran es liegt.

Bis später
Iryna`,
      modelUk: 'Переклад: Привіт, Йонасе! Слухай-но, маєш хвилинку на кілька рядків? Я хотіла лише один раз прояснити вчорашню справу, зовсім без закидів. Звіт був у мене готовий уже в понеділок. Погодження з юридичного відділу надійшло ж лише в четвер по обіді, а без нього я не мала права нічого надсилати. Я тобі про це у вівторок теж написала — ти це в потоці пошти, мабуть, просто пропустив. Може статися, мені з твоїми повідомленнями інколи так само. Ти таки маєш рацію, що я могла нагадати раніше. Тут мені не варто було покладатися на один єдиний лист. Давай наступного проєкту робитимемо інакше: якщо погодження зависає, я тобі коротко телефоную замість писати. Тоді ти відразу знаєш, у чому річ. До зустрічі, Ірина.',
    },
  ],

  test: [
    { type: 'gap', q: 'Nimm ___ ein Stück Kuchen! (дозвіл, «спокійно можеш»)', answers: ['ruhig'] },
    { type: 'gap', q: 'Wo warst du ___ so lange? (тепле питання)', answers: ['denn'] },
    { type: 'gap', q: 'Ich habe es dir ___ erklärt! (ти ж знаєш)', answers: ['doch'] },
    { type: 'gap', q: 'Das ist ___ nicht zu ändern. (так уже є)', answers: ['eben|halt'] },
    { type: 'gap', q: 'Sie ist ___ krank. (припущення)', answers: ['wohl'] },
    { type: 'choice', q: 'У якому реченні <span class="de-inline">doch</span> — не частка, а заперечення заперечення?',
      options: ['Du kennst ihn doch.', '— Kommst du nicht? — Doch!',
        'Das habe ich doch gesagt.', 'Komm doch mal vorbei.'], answer: 1 },
    { type: 'choice', q: 'Що частка НЕ робить?',
      options: ['передає ставлення', 'знижує різкість', 'змінює зміст речення', 'сигналізує спільне знання'],
      answer: 2 },
    { type: 'choice', q: 'Яке слово в питанні передає недовіру?',
      options: ['mal', 'etwa', 'eben', 'schon'], answer: 1 },
    { type: 'choice', q: 'У якому реченні <span class="de-inline">wohl</span> означає «добре, комфортно»?',
      options: ['Er hat es wohl vergessen.', 'Ich fühle mich hier wohl.',
        'Sie schläft wohl noch.', 'Das wird wohl teuer.'], answer: 1 },
    { type: 'order', q: 'Складіть речення.',
      words: ['Das', 'habe', 'ich', 'dir', 'doch', 'gestern', 'gesagt'],
      answer: 'Das habe ich dir doch gestern gesagt' },
    { type: 'match', q: 'Доберіть переклад.',
      pairs: [['einlenken', 'іти на поступки'], ['einräumen', 'визнавати'], ['abschwächen', 'м’якшити'],
        ['schroff', 'різкий'], ['der Unmut', 'невдоволення'], ['taktvoll', 'тактовний']] },
    { type: 'multi', q: 'Позначте частки, доречні саме в питанні.',
      options: ['denn', 'etwa', 'eben', 'bloß', 'halt'],
      answers: [0, 1, 3] },
    { type: 'truefalse', q: 'Модальну частку можна виділити наголосом.', answer: false },
    { type: 'truefalse', q: 'У комбінації порядок фіксований: <span class="de-inline">doch mal</span>, а не «mal doch».',
      answer: true },
  ],
};

const m4 = {
  id: 'm4',
  title: 'Konzessive und restriktive Konnektoren',
  titleUk: 'Конектори поступки й обмеження: zwar … allerdings, es sei denn, sofern',
  can: [
    'уживати книжні конектори поступки: gleichwohl, indes, ungeachtet',
    'вводити обмеження через sofern, insofern, es sei denn',
    'будувати подвійну поступку: so … auch, wie auch immer',
    'уживати geschweige denn у наростанні',
    'вибудовувати абзац із визнанням і запереченням',
  ],

  grammar: [
    {
      title: '1. Поступка на рівні C1',
      html: `
<p>На B2 поступку виражають через <em>obwohl</em> і <em>trotzdem</em>. На C1 очікують
ширший набір — і, головне, уміння тримати правильний порядок слів у кожному випадку.</p>
<table>
<thead><tr><th>Конектор</th><th>Переклад</th><th>Позиція</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td><strong>zwar … allerdings</strong></td><td>хоч і … щоправда</td><td><em>allerdings</em> — 1-ше місце або Mittelfeld</td>
<td><em>Der Plan ist <strong>zwar</strong> teuer, <strong>allerdings</strong> ist er realistisch.</em>
<span class="uk">План хоч і дорогий, щоправда, він реалістичний.</span></td></tr>
<tr><td><strong>gleichwohl</strong></td><td>і все ж (книжно)</td><td>1-ше місце → дієслово 2-ге</td>
<td><em>Die Kritik war hart. <strong>Gleichwohl hielt</strong> die Autorin an ihrer Position fest.</em>
<span class="uk">Критика була жорсткою. І все ж авторка трималася своєї позиції.</span></td></tr>
<tr><td><strong>indes / indessen</strong></td><td>тим часом; проте</td><td>1-ше місце або Mittelfeld</td>
<td><em>Die Zahlen stiegen; die Stimmung <strong>indes</strong> blieb schlecht.</em>
<span class="uk">Цифри зростали; настрій проте залишався поганим.</span></td></tr>
<tr><td><strong>ungeachtet</strong> + Gen.</td><td>незважаючи на</td><td>прийменник</td>
<td><em><strong>Ungeachtet</strong> der Kosten wurde das Projekt fortgesetzt.</em>
<span class="uk">Незважаючи на витрати, проєкт продовжили.</span></td></tr>
<tr><td><strong>wenngleich / obgleich</strong></td><td>хоча (книжно)</td><td>підрядне → дієслово в кінець</td>
<td><em>Der Befund ist eindeutig, <strong>wenngleich</strong> die Stichprobe klein <strong>ist</strong>.</em>
<span class="uk">Результат однозначний, хоча вибірка мала.</span></td></tr>
<tr><td><strong>bei allem / trotz aller</strong></td><td>при всьому</td><td>прийменникова група</td>
<td><em><strong>Bei allem</strong> Respekt halte ich das für falsch.</em>
<span class="uk">При всій повазі вважаю це хибним.</span></td></tr>
</tbody></table>
<div class="callout callout--tip"><strong>Порада щодо реєстру.</strong> <em>gleichwohl</em>, <em>indes</em>,
<em>wenngleich</em> — це письмовий, доволі високий стиль. У розмові вони звучать пафосно.
Тримайте їх для Schreiben і для читання, а в Sprechen залишайте <em>allerdings</em>,
<em>trotzdem</em>, <em>dennoch</em>.</div>`,
    },
    {
      title: '2. Обмеження: sofern, insofern, es sei denn',
      html: `
<p>Обмежувальні конектори звужують твердження: воно чинне, але <strong>лише за певної умови</strong>.
Це головний інструмент обережної академічної мови.</p>
<table>
<thead><tr><th>Конектор</th><th>Переклад</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td><strong>sofern</strong></td><td>якщо тільки, за умови що</td>
<td><em>Der Antrag wird bewilligt, <strong>sofern</strong> alle Nachweise vorliegen.</em>
<span class="uk">Заяву буде схвалено, за умови що всі підтвердження наявні.</span></td></tr>
<tr><td><strong>insofern (als)</strong></td><td>тією мірою, у тому сенсі що</td>
<td><em>Die Kritik trifft zu, <strong>insofern</strong> sie sich auf die Kosten bezieht.</em>
<span class="uk">Критика слушна тією мірою, якою вона стосується витрат.</span></td></tr>
<tr><td><strong>es sei denn (dass)</strong></td><td>хіба що, якщо тільки не</td>
<td><em>Wir beginnen um acht, <strong>es sei denn</strong>, der Zug hat Verspätung.</em>
<span class="uk">Ми починаємо о восьмій, хіба що потяг запізниться.</span></td></tr>
<tr><td><strong>vorausgesetzt (dass)</strong></td><td>за умови що</td>
<td><em><strong>Vorausgesetzt</strong>, dass das Wetter hält, findet das Fest draußen statt.</em>
<span class="uk">За умови що погода витримає, свято буде надворі.</span></td></tr>
<tr><td><strong>abgesehen von</strong> + Dat.</td><td>окрім, якщо не брати до уваги</td>
<td><em><strong>Abgesehen von</strong> zwei Tippfehlern ist der Text fertig.</em>
<span class="uk">Окрім двох друкарських помилок, текст готовий.</span></td></tr>
<tr><td><strong>lediglich / einzig</strong></td><td>лише, єдино</td>
<td><em>Es fehlt <strong>lediglich</strong> die Unterschrift.</em><span class="uk">Бракує лише підпису.</span></td></tr>
</tbody></table>
<div class="callout"><strong>Особливість <em>es sei denn</em>.</strong> Це застигла форма
Konjunktiv I, тому <em>sei</em> не змінюється ніколи. Після коми йде або звичайне речення
з дієсловом на другому місці (<em>es sei denn, der Zug <u>hat</u> Verspätung</em>),
або <em>dass</em> + дієслово в кінці (<em>es sei denn, dass der Zug Verspätung <u>hat</u></em>).
Обидва варіанти правильні.</div>
<p><strong>Не сплутайте <em>insofern</em> у двох ролях:</strong> як сполучник — «тією мірою, якою»;
як прислівник на початку речення — «у цьому сенсі»:
<em><strong>Insofern</strong> ist die Kritik berechtigt</em> — «У цьому сенсі критика виправдана».</p>`,
    },
    {
      title: '3. Подвійна поступка: so … auch, wie auch immer',
      html: `
<p>Ці конструкції означають «як би не…», «що б не…» — тобто поступку, яка охоплює
<strong>усі можливі варіанти</strong>.</p>
<table>
<thead><tr><th>Конструкція</th><th>Переклад</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td><strong>so + прикметник + auch</strong></td><td>яким би … не був</td>
<td><em><strong>So</strong> überzeugend das Argument <strong>auch</strong> klingt, es bleibt eine Vermutung.</em>
<span class="uk">Яким би переконливим не звучав аргумент, він залишається припущенням.</span></td></tr>
<tr><td><strong>wie auch immer</strong></td><td>як би там не було</td>
<td><em><strong>Wie auch immer</strong> die Entscheidung ausfällt, wir tragen sie mit.</em>
<span class="uk">Як би там не вирішилося, ми це підтримаємо.</span></td></tr>
<tr><td><strong>was auch immer</strong></td><td>що б не</td>
<td><em><strong>Was auch immer</strong> passiert, ruf mich an.</em><span class="uk">Що б не сталося, дзвони.</span></td></tr>
<tr><td><strong>wer auch immer</strong></td><td>хто б не</td>
<td><em><strong>Wer auch immer</strong> gewinnt, die Aufgabe bleibt schwer.</em>
<span class="uk">Хто б не переміг, завдання залишається важким.</span></td></tr>
<tr><td><strong>mag … noch so</strong></td><td>хай і як</td>
<td><em>Der Weg <strong>mag noch so</strong> lang sein — wir gehen ihn.</em>
<span class="uk">Хай яким довгим буде шлях — ми ним пройдемо.</span></td></tr>
</tbody></table>
<div class="callout callout--tip"><strong>Порядок слів у <em>so … auch</em>.</strong>
Схема така: <em>So</em> + прикметник + підмет + <em>auch</em> + <strong>дієслово в кінці</strong>,
бо це підрядне речення. <em>So schwer die Prüfung auch <u>war</u>, alle haben sie bestanden.</em>
Помилка — поставити дієслово на друге місце.</div>`,
    },
    {
      title: '4. Наростання: geschweige denn і споріднені',
      html: `
<p>Ці засоби вибудовують <strong>шкалу</strong>: якщо навіть менше неможливе,
то більше й поговорити нема про що.</p>
<table>
<thead><tr><th>Засіб</th><th>Переклад</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td><strong>geschweige denn</strong></td><td>не кажучи вже про</td>
<td><em>Er kann kaum lesen, <strong>geschweige denn</strong> einen Bericht schreiben.</em>
<span class="uk">Він майже не вміє читати, не кажучи вже про написання звіту.</span></td></tr>
<tr><td><strong>umso mehr / umso weniger</strong></td><td>тим більше / тим менше</td>
<td><em>Das gilt <strong>umso mehr</strong>, wenn Kinder betroffen sind.</em>
<span class="uk">Це діє тим більше, коли йдеться про дітей.</span></td></tr>
<tr><td><strong>nicht einmal</strong></td><td>навіть не</td>
<td><em>Sie hat <strong>nicht einmal</strong> geantwortet.</em><span class="uk">Вона навіть не відповіла.</span></td></tr>
<tr><td><strong>zumal</strong></td><td>тим паче що</td>
<td><em>Der Termin passt schlecht, <strong>zumal</strong> viele im Urlaub <strong>sind</strong>.</em>
<span class="uk">Дата незручна, тим паче що багато хто у відпустці.</span></td></tr>
<tr><td><strong>vor allem / insbesondere</strong></td><td>насамперед / зокрема</td>
<td><em>Betroffen sind <strong>insbesondere</strong> kleine Betriebe.</em><span class="uk">Постраждали зокрема малі підприємства.</span></td></tr>
</tbody></table>
<div class="callout"><strong>Будова <em>geschweige denn</em>.</strong> Перша частина мусить бути
<u>заперечною або майже заперечною</u> (<em>kaum, nicht, kein</em>), інакше зворот не працює.
Правильно: <em>Er hat <u>kein</u> Auto, geschweige denn eine Garage.</em>
Неправильно: «<s>Er hat ein Auto, geschweige denn eine Garage.</s>»</div>
<p><strong>Типова структура абзацу C1</strong> з цими засобами:</p>
<ol>
<li>теза;</li>
<li>визнання чужої правоти — <em>zwar …</em> / <em>Insofern ist die Kritik berechtigt …</em>;</li>
<li>заперечення — <em>… allerdings / gleichwohl …</em>;</li>
<li>обмеження власної тези — <em>… sofern / es sei denn …</em>;</li>
<li>висновок.</li>
</ol>`,
    },
    {
      title: '5. Слова з прикладів цієї теми',
      html: `
<table>
<thead><tr><th>Слово</th><th>Переклад</th><th>Як ужито в темі</th></tr></thead>
<tbody>
<tr><td><em>festhalten an + Dat.</em></td><td>триматися чогось, не відступати</td><td><em>… hielt die Autorin an ihrer Position fest.</em></td></tr>
<tr><td><em>der Befund, -e</em></td><td>результат, висновок дослідження</td><td><em>Der Befund ist eindeutig, wenngleich …</em></td></tr>
<tr><td><em>die Stichprobe, -n</em></td><td>вибірка</td><td><em>… die Stichprobe klein ist.</em></td></tr>
<tr><td><em>bewilligen</em></td><td>схвалювати, надавати</td><td><em>Der Antrag wird bewilligt, sofern …</em></td></tr>
<tr><td><em>vorliegen</em></td><td>бути наявним, лежати (про документи)</td><td><em>… sofern alle Nachweise vorliegen.</em></td></tr>
<tr><td><em>zutreffen</em></td><td>бути слушним, справджуватися</td><td><em>Die Kritik trifft zu, insofern …</em></td></tr>
<tr><td><em>ausfallen</em></td><td>виходити, складатися (про результат)</td><td><em>Wie auch immer die Entscheidung ausfällt …</em></td></tr>
<tr><td><em>betroffen sein</em></td><td>бути зачепленим, постраждати</td><td><em>… wenn Kinder betroffen sind.</em></td></tr>
<tr><td><em>der Betrieb, -e</em></td><td>підприємство</td><td><em>… insbesondere kleine Betriebe.</em></td></tr>
<tr><td><em>berechtigt</em></td><td>виправданий, обґрунтований</td><td><em>Insofern ist die Kritik berechtigt.</em></td></tr>
</tbody></table>`,
    },
  ],
  exercises: [
    { type: 'gap', q: 'Der Plan ist ___ teuer, ___ ist er realistisch. (хоч і … щоправда)',
      answers: ['zwar', 'allerdings'] },
    { type: 'gap', q: 'Der Antrag wird bewilligt, ___ alle Nachweise vorliegen. (за умови що)',
      answers: ['sofern'] },
    { type: 'gap', q: 'Wir beginnen um acht, ___ ___ ___, der Zug hat Verspätung. (хіба що)',
      answers: ['es', 'sei', 'denn'] },
    { type: 'gap', q: 'Er kann kaum lesen, ___ ___ einen Bericht schreiben. (не кажучи вже про)',
      answers: ['geschweige', 'denn'] },
    { type: 'gap', q: '___ der Kosten wurde das Projekt fortgesetzt. (незважаючи на + Genitiv)',
      answers: ['Ungeachtet'] },
    { type: 'gap', q: 'Der Termin passt schlecht, ___ viele im Urlaub sind. (тим паче що)',
      answers: ['zumal'] },
    { type: 'choice', q: 'Який порядок слів після <span class="de-inline">gleichwohl</span> на початку речення?',
      options: ['підмет, потім дієслово', 'дієслово одразу після нього',
        'дієслово в кінці', 'порядок не змінюється'], answer: 1 },
    { type: 'choice', q: 'Яке речення правильне?',
      options: ['So überzeugend das Argument auch klingt, es bleibt eine Vermutung.',
        'So überzeugend klingt das Argument auch, es bleibt eine Vermutung.',
        'So das Argument überzeugend auch klingt, es bleibt eine Vermutung.',
        'So überzeugend auch das Argument klingt es bleibt eine Vermutung.'],
      answer: 0 },
    { type: 'choice', q: '<span class="de-inline">geschweige denn</span> вимагає, щоб перша частина була:',
      options: ['стверджувальною', 'заперечною або майже заперечною',
        'питальною', 'у Konjunktiv'], answer: 1 },
    { type: 'choice', q: 'У <span class="de-inline">es sei denn</span> форма <span class="de-inline">sei</span>:',
      options: ['змінюється за особами', 'ніколи не змінюється',
        'стоїть у Präteritum', 'замінюється на wäre'], answer: 1 },
    { type: 'order', q: 'Складіть речення.',
      words: ['Ungeachtet', 'der', 'Kritik', 'hielt', 'sie', 'an', 'ihrem', 'Plan', 'fest'],
      answer: 'Ungeachtet der Kritik hielt sie an ihrem Plan fest' },
    { type: 'order', q: 'Складіть речення.',
      words: ['Wie', 'auch', 'immer', 'die', 'Abstimmung', 'ausfällt', 'wir', 'akzeptieren', 'sie'],
      answer: 'Wie auch immer die Abstimmung ausfällt wir akzeptieren sie' },
    { type: 'match', q: 'Доберіть переклад.',
      pairs: [['gleichwohl', 'і все ж'], ['sofern', 'за умови що'], ['es sei denn', 'хіба що'],
        ['geschweige denn', 'не кажучи вже про'], ['zumal', 'тим паче що'], ['lediglich', 'лише']] },
    { type: 'multi', q: 'Позначте конектори обмеження.',
      options: ['sofern', 'gleichwohl', 'vorausgesetzt, dass', 'es sei denn', 'ungeachtet'],
      answers: [0, 2, 3] },
    { type: 'truefalse', q: '<span class="de-inline">wenngleich</span> вимагає дієслова в кінці підрядного.',
      answer: true },
  ],

  listening: [
    {
      exam: 'Goethe C1 · Hören Teil 2',
      title: 'Podiumsdiskussion: Studiengebühren',
      instruction: 'Двоє експертів сперечаються. Слухайте, як вони визнають правоту опонента, перш ніж заперечити.',
      lines: [
        { speaker: 'Moderatorin', de: 'Frau Roth, Sie fordern Gebühren. Warum?', uk: 'Пані Рот, Ви вимагаєте плати за навчання. Чому?' },
        { speaker: 'Frau Roth', de: 'Weil die Hochschulen chronisch unterfinanziert sind. Zugegeben, Gebühren allein lösen das nicht — gleichwohl wären sie ein Beitrag.', uk: 'Бо вищі школи хронічно недофінансовані. Визнаю, плата сама цього не розв’яже — і все ж вона була б внеском.' },
        { speaker: 'Herr Baumann', de: 'Insofern haben Sie recht, als das Geld fehlt. Der Weg ist aber falsch: Gebühren treffen insbesondere Familien ohne Rücklagen.', uk: 'Тією мірою Ви маєте рацію, що грошей бракує. Але шлях хибний: плата вражає зокрема сім’ї без резервів.' },
        { speaker: 'Frau Roth', de: 'Sofern es Stipendien gibt, ist das abgefedert.', uk: 'За умови що є стипендії, це амортизовано.' },
        { speaker: 'Herr Baumann', de: 'So gut das klingt, die Erfahrung zeigt etwas anderes. Viele beantragen Stipendien gar nicht, geschweige denn, dass sie sie erhalten.', uk: 'Як би добре це не звучало, досвід показує інше. Багато хто взагалі не подає на стипендії, не кажучи вже про те, щоб їх отримати.' },
        { speaker: 'Frau Roth', de: 'Das ist ein Verwaltungsproblem, kein Argument gegen Gebühren.', uk: 'Це проблема адміністрування, а не аргумент проти плати.' },
        { speaker: 'Herr Baumann', de: 'Es ist beides. Ungeachtet der Absicht entscheidet die Wirkung, und die ist sozial ungleich.', uk: 'Це і те, і те. Незважаючи на намір, вирішує наслідок, а він соціально нерівний.' },
        { speaker: 'Moderatorin', de: 'Können Sie sich auf etwas einigen?', uk: 'Чи можете ви на чомусь погодитися?' },
        { speaker: 'Frau Roth', de: 'Auf eines schon: Ohne verlässliche Grundfinanzierung ist jede Debatte über Gebühren verfrüht.', uk: 'На одному таки: без надійного базового фінансування будь-яка дискусія про плату передчасна.' },
      ],
      tasks: [
        { type: 'choice', q: 'Was ist Frau Roths Hauptargument?',
          options: ['Studierende zahlen zu wenig', 'Die Hochschulen sind unterfinanziert',
            'Es gibt zu viele Studierende', 'Stipendien sind zu teuer'], answer: 1 },
        { type: 'choice', q: 'Womit räumt Herr Baumann ihr teilweise recht ein?',
          options: ['Mit «Insofern haben Sie recht, als das Geld fehlt»',
            'Mit «Der Weg ist falsch»', 'Mit «Es ist beides»', 'Er räumt nichts ein'], answer: 0 },
        { type: 'choice', q: 'Worauf können sich beide einigen?',
          options: ['Gebühren sollen eingeführt werden', 'Stipendien reichen aus',
            'Ohne Grundfinanzierung ist die Debatte verfrüht', 'Die Verwaltung ist schuld'], answer: 2 },
        { type: 'gap', q: 'Herr Baumann sagt: Gebühren treffen ___ Familien ohne Rücklagen. (зокрема)',
          answers: ['insbesondere'] },
        { type: 'multi', q: 'Welche konzessiven oder restriktiven Mittel kommen vor?',
          options: ['zugegeben', 'gleichwohl', 'insofern … als', 'sofern', 'so gut … auch',
            'geschweige denn', 'ungeachtet'],
          answers: [0, 1, 2, 3, 4, 5, 6] },
      ],
    },
  ],

  writing: [
    {
      exam: 'Goethe C1 · Schreiben Teil 1',
      title: 'Erörterung: Sollten Hochschulen Studiengebühren erheben?',
      situation: 'Напишіть аргументативний текст для університетської газети: <strong>180–220 слів</strong>. Обов’язково: спершу визнайте сильну сторону протилежної позиції, тоді заперечте їй, а наприкінці обмежте власну тезу. Уживіть щонайменше по одному конектору поступки й обмеження з цього модуля.',
      points: [
        'Formulieren Sie eine klare These.',
        'Räumen Sie ein starkes Gegenargument ein.',
        'Widerlegen Sie es.',
        'Schränken Sie Ihre eigene Position ein.',
      ],
      minWords: 180,
      phrases: [
        { de: 'Zugegeben, das Argument der Unterfinanzierung ist stark.', uk: 'Визнаю, аргумент недофінансування сильний.' },
        { de: 'Gleichwohl greift der Vorschlag zu kurz.', uk: 'І все ж пропозиція недостатня.' },
        { de: 'Die Kritik trifft zu, insofern sie sich auf die Verwaltung bezieht.', uk: 'Критика слушна тією мірою, якою вона стосується адміністрування.' },
        { de: 'Sofern es ein verlässliches Stipendiensystem gibt, ändert sich die Rechnung.', uk: 'За умови що є надійна система стипендій, розрахунок змінюється.' },
        { de: 'So plausibel das klingt, die Erfahrung zeigt etwas anderes.', uk: 'Як би правдоподібно це не звучало, досвід показує інше.' },
        { de: 'Viele stellen den Antrag nicht, geschweige denn, dass sie ihn bewilligt bekommen.', uk: 'Багато хто не подає заяви, не кажучи вже про її схвалення.' },
        { de: 'Ungeachtet der guten Absicht entscheidet die Wirkung.', uk: 'Незважаючи на добрий намір, вирішує наслідок.' },
      ],
      checklist: [
        'Є теза, визнання протилежного аргументу, заперечення й обмеження?',
        'Є щонайменше один конектор поступки (gleichwohl, wenngleich, ungeachtet)?',
        'Є щонайменше один конектор обмеження (sofern, insofern, es sei denn)?',
        'У so … auch дієслово стоїть у кінці підрядного?',
        'Обсяг 180–220 слів, абзаци розділені за функцією?',
      ],
      model:
`Studiengebühren halte ich für den falschen Weg — allerdings nicht, weil das Geld an den
Hochschulen ausreichen würde.

Zugegeben, das Argument der Gegenseite ist stark: Bibliotheken schließen früher, Seminare sind
überfüllt, und Sanierungen werden seit Jahren verschoben. Insofern trifft die Kritik zu, als
die Grundfinanzierung tatsächlich nicht genügt. Wer das bestreitet, kennt die Hörsäle nicht.

Gleichwohl greift der Vorschlag zu kurz. Gebühren wirken nicht auf alle gleich: Für ein Kind
aus einem Akademikerhaushalt sind dreihundert Euro im Semester eine Rechnungsposition, für ein
Kind ohne familiäre Rücklagen eine Entscheidung gegen das Studium. Der übliche Einwand lautet,
Stipendien federten das ab. So plausibel das klingt, die Erfahrung zeigt etwas anderes: Ein
erheblicher Teil der Berechtigten stellt den Antrag gar nicht, geschweige denn, dass er ihn
bewilligt bekommt. Ungeachtet der guten Absicht entscheidet also die Wirkung — und die ist
sozial ungleich.

Hinzu kommt ein Effekt, der in der Debatte fast nie auftaucht: Wer Gebühren zahlt, wählt
das Studium eher nach dem erwarteten Gehalt als nach Interesse. Ungeachtet aller Rechenmodelle
verändert das die Zusammensetzung ganzer Fächer.

Meine Position gilt freilich mit einer Einschränkung: Sofern ein automatisches, nicht zu
beantragendes Stipendiensystem existierte, wäre die Rechnung eine andere. Solange darüber
niemand ernsthaft spricht, bleibt jede Gebührendebatte verfrüht.`,
      modelUk: 'Переклад: Плату за навчання я вважаю хибним шляхом — щоправда, не тому, що грошей у вищих школах було б досить. Визнаю, аргумент протилежної сторони сильний: бібліотеки зачиняються раніше, семінари переповнені, а ремонти відкладають роками. Тією мірою критика слушна, що базового фінансування справді не досить. Хто це заперечує, той не бачив аудиторій. І все ж пропозиція недостатня. Плата діє не на всіх однаково: для дитини з родини науковців триста євро за семестр — рядок у розрахунку, для дитини без родинних резервів — рішення проти навчання. Звичне заперечення полягає в тому, що стипендії це амортизують. Як би правдоподібно це не звучало, досвід показує інше: значна частина тих, хто має право, взагалі не подає заяви, не кажучи вже про її схвалення. Отже, незважаючи на добрий намір, вирішує наслідок — а він соціально нерівний. Моя позиція, щоправда, чинна з одним застереженням: за умови що існувала б автоматична система стипендій, якої не треба вимагати, розрахунок був би іншим. Поки про це ніхто серйозно не говорить, будь-яка дискусія про плату залишається передчасною.',
    },
  ],

  test: [
    { type: 'gap', q: 'Die Kritik war hart. ___ hielt er an seinem Plan fest. (і все ж, книжно)',
      answers: ['Gleichwohl'] },
    { type: 'gap', q: 'Das gilt, ___ die Bedingungen erfüllt sind. (за умови що)', answers: ['sofern'] },
    { type: 'gap', q: 'Wir fahren morgen, ___ ___ ___, es schneit. (хіба що)',
      answers: ['es', 'sei', 'denn'] },
    { type: 'gap', q: 'Sie hat kein Auto, ___ ___ eine Garage.', answers: ['geschweige', 'denn'] },
    { type: 'gap', q: '___ zwei Tippfehlern ist der Text fertig. (окрім + Dativ)',
      answers: ['Abgesehen von'] },
    { type: 'gap', q: 'Der Befund ist eindeutig, ___ die Stichprobe klein ist. (хоча, книжно)',
      answers: ['wenngleich|obgleich'] },
    { type: 'choice', q: 'Правильний порядок у so … auch:',
      options: ['So schwer die Prüfung auch war, alle haben bestanden.',
        'So schwer war die Prüfung auch, alle haben bestanden.',
        'So die Prüfung schwer auch war, alle haben bestanden.',
        'So schwer auch war die Prüfung, alle haben bestanden.'],
      answer: 0 },
    { type: 'choice', q: '<span class="de-inline">ungeachtet</span> вимагає:',
      options: ['Dativ', 'Akkusativ', 'Genitiv', 'нічого — це сполучник'], answer: 2 },
    { type: 'choice', q: '<span class="de-inline">insofern als</span> означає:',
      options: ['незважаючи на', 'тією мірою, якою', 'хіба що', 'тим паче що'], answer: 1 },
    { type: 'order', q: 'Складіть речення.',
      words: ['So', 'plausibel', 'das', 'Argument', 'auch', 'klingt', 'es', 'bleibt', 'unbewiesen'],
      answer: 'So plausibel das Argument auch klingt es bleibt unbewiesen' },
    { type: 'match', q: 'Доберіть переклад.',
      pairs: [['aussagekräftig', 'показовий'], ['nachvollziehbar', 'обґрунтований'],
        ['einseitig', 'однобічний'], ['differenziert', 'нюансований'],
        ['die Einschränkung', 'застереження'], ['freilich', 'щоправда']] },
    { type: 'multi', q: 'Позначте конектори поступки.',
      options: ['gleichwohl', 'sofern', 'wenngleich', 'ungeachtet', 'lediglich'],
      answers: [0, 2, 3] },
    { type: 'truefalse', q: 'У <span class="de-inline">geschweige denn</span> перша частина мусить бути заперечною.',
      answer: true },
    { type: 'truefalse', q: '<span class="de-inline">gleichwohl</span> природно звучить у побутовій розмові.',
      answer: false,
      explain: 'Це високий письмовий реєстр; у розмові беруть trotzdem або allerdings.' },
  ],
};

const m5 = {
  id: 'm5',
  title: 'Passiversatz und Modalitätsausdruck',
  titleUk: 'Замінники пасиву та вираження модальності',
  can: [
    'уживати sich lassen замість пасиву з können',
    'утворювати прикметники на -bar, -lich, -fähig',
    'будувати sein + zu + Infinitiv',
    'уживати bekommen-Passiv і gehören + Partizip II',
    'обирати замінник відповідно до відтінку',
  ],

  grammar: [
    {
      title: '1. Шість способів сказати «це можна зробити»',
      html: `
<p>Німецька має цілу систему конструкцій, які передають пасивне значення
<strong>разом із модальністю</strong> — можливістю або необхідністю. Володіння ними
відрізняє C1 від B2.</p>
<table>
<thead><tr><th>Конструкція</th><th>Значення</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td><em>kann + Partizip II + werden</em></td><td>нейтральний пасив із <em>können</em></td>
<td><em>Das Problem <strong>kann gelöst werden</strong>.</em><span class="uk">Проблему можна розв’язати.</span></td></tr>
<tr><td><em><strong>sich lassen</strong> + Infinitiv</em></td><td>можливість, найчастотніший замінник</td>
<td><em>Das Problem <strong>lässt sich</strong> lösen.</em><span class="uk">Проблема розв’язується.</span></td></tr>
<tr><td><em>прикметник на <strong>-bar</strong></em></td><td>можливість як властивість</td>
<td><em>Das Problem ist <strong>lösbar</strong>.</em><span class="uk">Проблема розв’язна.</span></td></tr>
<tr><td><em><strong>sein + zu</strong> + Infinitiv</em></td><td>необхідність або можливість, офіційно</td>
<td><em>Das Formular <strong>ist auszufüllen</strong>.</em><span class="uk">Формуляр треба заповнити.</span></td></tr>
<tr><td><em><strong>man</strong> + активне дієслово</em></td><td>розмовний, нейтральний</td>
<td><em><strong>Man kann</strong> das Problem lösen.</em><span class="uk">Проблему можна розв’язати.</span></td></tr>
<tr><td><em><strong>es gibt</strong> … zu + Infinitiv</em></td><td>наявність завдання</td>
<td><em>Da <strong>gibt es</strong> viel <strong>zu tun</strong>.</em><span class="uk">Там багато роботи.</span></td></tr>
</tbody></table>
<div class="callout callout--tip"><strong>Як вибирати.</strong> <em>lässt sich</em> —
універсальний і природний вибір у більшості текстів. <em>-bar</em> — коли йдеться
про <u>властивість</u> предмета. <em>sein + zu</em> — коли текст офіційний і йдеться про
<u>вимогу</u>. <em>man</em> — у розмові. Повний пасив із модальним — коли треба
підкреслити саму дію.</div>`,
    },
    {
      title: '2. sich lassen докладніше',
      html: `
<p><em>sich lassen</em> + інфінітив = «щось можна зробити». Виконавця не називають.
Це найгнучкіша конструкція: вона працює в усіх часах і навіть у Konjunktiv II.</p>
<table>
<thead><tr><th>Час / форма</th><th>Приклад</th><th>Переклад</th></tr></thead>
<tbody>
<tr><td>Präsens</td><td><em>Der Fehler <strong>lässt sich</strong> leicht beheben.</em></td><td>Помилку легко виправити.</td></tr>
<tr><td>Präteritum</td><td><em>Der Fehler <strong>ließ sich</strong> nicht beheben.</em></td><td>Помилку виправити не вдавалося.</td></tr>
<tr><td>Perfekt</td><td><em>Das <strong>hat sich</strong> nicht <strong>machen lassen</strong>.</em></td><td>Це не вдалося зробити.</td></tr>
<tr><td>Konjunktiv II</td><td><em>Das <strong>ließe sich</strong> ändern.</em></td><td>Це можна було б змінити.</td></tr>
<tr><td>із запереченням</td><td><em>Das <strong>lässt sich</strong> nicht <strong>bestreiten</strong>.</em></td><td>Цього не заперечиш.</td></tr>
</tbody></table>
<p><strong>Готові звороти</strong>, які варто знати як цілі одиниці:</p>
<ul>
<li><em>Es lässt sich nicht leugnen, dass …</em><span class="uk">Не можна заперечити, що …</span></li>
<li><em>Daraus lässt sich schließen, dass …</em><span class="uk">Із цього можна зробити висновок, що …</span></li>
<li><em>Das lässt sich so nicht sagen.</em><span class="uk">Так сказати не можна.</span></li>
<li><em>Darüber lässt sich streiten.</em><span class="uk">Про це можна посперечатися.</span></li>
</ul>
<div class="callout"><strong>Не сплутайте з <em>lassen</em> у значенні «доручати».</strong>
Без <em>sich</em> конструкція означає, що дію виконує хтось інший на замовлення:
<em>Ich <u>lasse</u> das Auto reparieren</em> — «я віддаю машину в ремонт».
З <em>sich</em> — це можливість: <em>Das Auto <u>lässt sich</u> reparieren</em> — «машину можна відремонтувати».</div>`,
    },
    {
      title: '3. Суфікси модальності: -bar, -lich, -fähig, -pflichtig',
      html: `
<p>Німецька вміє запакувати цілу пасивну конструкцію в один прикметник.
Це стрижень номінального стилю, тому суфікси варто знати активно.</p>
<table>
<thead><tr><th>Суфікс</th><th>Значення</th><th>Приклади</th></tr></thead>
<tbody>
<tr><td><strong>-bar</strong></td><td>можна зробити (пасивно)</td>
<td><em>lösbar</em> (розв’язний), <em>machbar</em> (здійсненний), <em>lesbar</em> (розбірливий),
<em>vorstellbar</em> (уявний), <em>vermeidbar</em> (той, якого можна уникнути)</td></tr>
<tr><td><strong>-lich</strong></td><td>те саме, але в старших словах</td>
<td><em>verständlich</em> (зрозумілий), <em>erklärlich</em> (з’ясовний),
<em>unglaublich</em> (неймовірний), <em>käuflich</em> (той, що продається)</td></tr>
<tr><td><strong>-fähig</strong></td><td>здатний до чогось (активно)</td>
<td><em>arbeitsfähig</em> (працездатний), <em>wettbewerbsfähig</em> (конкурентоспроможний),
<em>lernfähig</em> (здатний учитися)</td></tr>
<tr><td><strong>-pflichtig</strong></td><td>той, що зобов’язує</td>
<td><em>anmeldepflichtig</em> (потребує реєстрації), <em>gebührenpflichtig</em> (платний),
<em>genehmigungspflichtig</em> (потребує дозволу)</td></tr>
<tr><td><strong>-frei</strong></td><td>без чогось, звільнений</td>
<td><em>kostenfrei</em> (безкоштовний), <em>zollfrei</em> (безмитний),
<em>rezeptfrei</em> (без рецепта)</td></tr>
<tr><td><strong>-los</strong></td><td>без чогось (брак)</td>
<td><em>arbeitslos</em> (безробітний), <em>sinnlos</em> (безглуздий), <em>problemlos</em> (без проблем)</td></tr>
</tbody></table>
<div class="callout"><strong>Різниця між <em>-frei</em> і <em>-los</em>.</strong>
<em>-frei</em> має позитивний відтінок: це добре, що чогось немає (<em>kostenfrei</em>).
<em>-los</em> — нейтральний або негативний: чогось бракує (<em>arbeitslos</em>).
Тому <em>problemfrei</em> і <em>problemlos</em> можливі обидва, а <em>arbeitsfrei</em>
означає «вільний від роботи» (вихідний), не «безробітний».</div>
<p><strong>Заперечення</strong> утворюють префіксом <em>un-</em>:
<em>lösbar → un<strong>lösbar</strong></em>, <em>verständlich → un<strong>verständlich</strong></em>,
<em>vermeidbar → un<strong>vermeidbar</strong></em>.</p>`,
    },
    {
      title: '4. sein + zu, bekommen-Passiv, gehören + Partizip II',
      html: `
<p>Три конструкції, які добудовують систему. Перша офіційна, друга розмовна, третя емоційна.</p>
<table>
<thead><tr><th>Конструкція</th><th>Значення</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td><em><strong>sein + zu</strong> + Infinitiv</em></td><td>необхідність (частіше) або можливість</td>
<td><em>Die Frist <strong>ist einzuhalten</strong>.</em><span class="uk">Термін треба дотримати.</span><br>
<em>Der Fehler <strong>ist</strong> leicht <strong>zu beheben</strong>.</em><span class="uk">Помилку легко виправити.</span></td></tr>
<tr><td><em><strong>bekommen / kriegen</strong> + Partizip II</em></td><td>хтось отримує дію на свою користь</td>
<td><em>Sie <strong>bekommt</strong> das Gehalt überwiesen.</em><span class="uk">Їй перераховують зарплату.</span></td></tr>
<tr><td><em><strong>gehören</strong> + Partizip II</em></td><td>обурене «це слід було б», емоційна оцінка</td>
<td><em>Das <strong>gehört</strong> verboten!</em><span class="uk">Це слід би заборонити!</span></td></tr>
</tbody></table>
<p><strong>Як розрізнити необхідність і можливість у <em>sein + zu</em>:</strong>
дивіться на прислівник. Є <em>leicht, schwer, kaum, gut</em> — це <u>можливість</u>.
Немає нічого — це <u>вимога</u>.</p>
<ul>
<li><em>Der Text ist <u>kaum</u> zu verstehen.</em><span class="uk">Текст майже неможливо зрозуміти. (можливість)</span></li>
<li><em>Der Antrag ist bis Freitag einzureichen.</em><span class="uk">Заяву треба подати до п’ятниці. (вимога)</span></li>
</ul>
<div class="callout callout--tip"><strong>Що взяти в письмову частину C1.</strong>
Найсильніше поєднання в одному тексті: одне <em>lässt sich</em>, один прикметник на
<em>-bar</em> і одне <em>ist zu</em>. Це показує весь спектр, не перетворюючи текст
на демонстрацію конструкцій. <em>bekommen</em>-пасив і <em>gehören</em> тримайте
для розмови — у формальному тексті вони недоречні.</div>`,
    },
    {
      title: '5. Слова з прикладів цієї теми',
      html: `
<table>
<thead><tr><th>Слово</th><th>Переклад</th><th>Як ужито в темі</th></tr></thead>
<tbody>
<tr><td><em>beheben</em></td><td>усувати (недолік)</td><td><em>Der Fehler lässt sich leicht beheben.</em></td></tr>
<tr><td><em>bestreiten</em></td><td>заперечувати, оспорювати</td><td><em>Das lässt sich nicht bestreiten.</em></td></tr>
<tr><td><em>leugnen</em></td><td>заперечувати (факт)</td><td><em>Es lässt sich nicht leugnen, dass …</em></td></tr>
<tr><td><em>schließen aus + Dat.</em></td><td>робити висновок із</td><td><em>Daraus lässt sich schließen, dass …</em></td></tr>
<tr><td><em>überweisen</em></td><td>перераховувати (гроші)</td><td><em>Sie bekommt das Gehalt überwiesen.</em></td></tr>
<tr><td><em>einreichen</em></td><td>подавати (документ)</td><td><em>Der Antrag ist bis Freitag einzureichen.</em></td></tr>
<tr><td><em>vermeidbar</em></td><td>той, якого можна уникнути</td><td>Приклад суфікса <em>-bar</em>.</td></tr>
<tr><td><em>gebührenpflichtig</em></td><td>платний</td><td>Приклад суфікса <em>-pflichtig</em>.</td></tr>
<tr><td><em>rezeptfrei</em></td><td>без рецепта</td><td>Приклад суфікса <em>-frei</em>.</td></tr>
<tr><td><em>machbar</em></td><td>здійсненний</td><td>Найчастотніший приклад <em>-bar</em>.</td></tr>
</tbody></table>`,
    },
  ],
  exercises: [
    { type: 'gap', q: 'Das Problem ___ ___ lösen. (sich lassen)', answers: ['lässt', 'sich'] },
    { type: 'gap', q: 'Der Fehler ___ ___ nicht beheben. (Präteritum: sich lassen)',
      answers: ['ließ', 'sich'] },
    { type: 'gap', q: 'Прикметник на -bar: Das Problem ist ___.', answers: ['lösbar'] },
    { type: 'gap', q: 'sein + zu: Das Formular ist ___. (ausfüllen — одним словом)',
      answers: ['auszufüllen'] },
    { type: 'gap', q: 'sein + zu: Die Frist ist ___. (einhalten — одним словом)',
      answers: ['einzuhalten'] },
    { type: 'gap', q: 'bekommen-Passiv: Sie ___ das Gehalt überwiesen.', answers: ['bekommt|kriegt'] },
    { type: 'gap', q: 'Заперечний прикметник: lösbar → ___', answers: ['unlösbar'] },
    { type: 'choice', q: 'Що означає «Das lässt sich nicht bestreiten»?',
      options: ['Це не варто оспорювати', 'Цього не заперечиш',
        'Це вже оспорено', 'Це слід оспорити'], answer: 1 },
    { type: 'choice', q: '«Ich lasse das Auto reparieren» означає:',
      options: ['Машину можна відремонтувати', 'Я віддаю машину в ремонт',
        'Я ремонтую машину сам', 'Машину відремонтували'], answer: 1 },
    { type: 'choice', q: 'У якому реченні <span class="de-inline">sein + zu</span> означає можливість, а не вимогу?',
      options: ['Der Antrag ist einzureichen.', 'Die Frist ist einzuhalten.',
        'Der Text ist kaum zu verstehen.', 'Die Gebühr ist zu entrichten.'],
      answer: 2,
      explain: 'Прислівник kaum вказує на можливість.' },
    { type: 'choice', q: 'Що означає <span class="de-inline">arbeitsfrei</span>?',
      options: ['безробітний', 'вільний від роботи, вихідний',
        'працездатний', 'той, що працює безкоштовно'], answer: 1 },
    { type: 'order', q: 'Складіть речення.',
      words: ['Daraus', 'lässt', 'sich', 'schließen', 'dass', 'die', 'Methode', 'funktioniert'],
      answer: 'Daraus lässt sich schließen dass die Methode funktioniert' },
    { type: 'match', q: 'Доберіть замінник пасиву.',
      pairs: [['kann gelöst werden', 'lässt sich lösen'],
        ['muss ausgefüllt werden', 'ist auszufüllen'],
        ['kann verstanden werden', 'ist verständlich'],
        ['kann vermieden werden', 'ist vermeidbar'],
        ['muss angemeldet werden', 'ist anmeldepflichtig']] },
    { type: 'multi', q: 'Позначте конструкції з пасивним значенням.',
      options: ['Das lässt sich machen.', 'Das ist machbar.', 'Ich lasse es machen.',
        'Das ist zu machen.', 'Das gehört verboten.'],
      answers: [0, 1, 3, 4],
      explain: '«Ich lasse es machen» — доручення, активна дія замовника.' },
    { type: 'truefalse', q: '<span class="de-inline">-frei</span> має позитивний відтінок, <span class="de-inline">-los</span> — нейтральний або негативний.',
      answer: true },
  ],

  listening: [
    {
      exam: 'Goethe C1 · Hören Teil 2',
      title: 'Expertengespräch: Lässt sich Bürokratie abbauen?',
      instruction: 'Інтерв’ю з дослідницею адміністрування. Багато замінників пасиву.',
      lines: [
        { speaker: 'Journalist', de: 'Frau Doktor, lässt sich Bürokratie überhaupt abbauen?', uk: 'Пані докторко, чи бюрократію взагалі можна скоротити?' },
        { speaker: 'Dr. Falk', de: 'Teilweise. Etwa ein Drittel der Nachweise ist verzichtbar, das lässt sich in unseren Daten klar zeigen.', uk: 'Частково. Приблизно третини підтверджень можна не вимагати, це чітко видно в наших даних.' },
        { speaker: 'Journalist', de: 'Warum passiert es dann nicht?', uk: 'Чому ж тоді цього не відбувається?' },
        { speaker: 'Dr. Falk', de: 'Weil jede einzelne Vorgabe irgendwann sinnvoll war. Sie ist heute nicht mehr nötig, aber sie ist nach wie vor rechtlich einzuhalten.', uk: 'Бо кожна окрема вимога колись була доцільна. Сьогодні вона вже не потрібна, але юридично її й далі треба дотримувати.' },
        { speaker: 'Journalist', de: 'Also ist das Problem unlösbar?', uk: 'То проблема нерозв’язна?' },
        { speaker: 'Dr. Falk', de: 'Nein, aber es ist nicht mit einem Gesetz zu lösen. Nötig wäre eine Regel, nach der jede Vorgabe nach fünf Jahren automatisch abläuft, es sei denn, sie wird ausdrücklich verlängert.', uk: 'Ні, але його не розв’язати одним законом. Потрібне було б правило, за яким кожна вимога через п’ять років автоматично втрачає чинність, хіба що її прямо продовжать.' },
        { speaker: 'Journalist', de: 'Wäre das machbar?', uk: 'Чи було б це здійсненно?' },
        { speaker: 'Dr. Falk', de: 'Technisch problemlos. Politisch ist es schwer, denn niemand bekommt Lob dafür, dass etwas verschwindet.', uk: 'Технічно без проблем. Політично важко, бо ніхто не отримує похвали за те, що щось зникає.' },
        { speaker: 'Journalist', de: 'Ein ernüchterndes Fazit.', uk: 'Витверезливий висновок.' },
        { speaker: 'Dr. Falk', de: 'Ein realistisches. Daraus lässt sich immerhin schließen, wo man anfangen sollte.', uk: 'Реалістичний. Із цього принаймні можна зробити висновок, з чого варто починати.' },
      ],
      tasks: [
        { type: 'choice', q: 'Wie viele Nachweise hält Dr. Falk für verzichtbar?',
          options: ['Die Hälfte', 'Etwa ein Drittel', 'Ein Zehntel', 'Fast alle'], answer: 1 },
        { type: 'choice', q: 'Warum bleiben unnötige Vorgaben bestehen?',
          options: ['Sie sind rechtlich weiter einzuhalten', 'Niemand kennt sie',
            'Sie kosten nichts', 'Die Daten fehlen'], answer: 0 },
        { type: 'choice', q: 'Was wäre ihre Lösung?',
          options: ['Ein neues Gesetz', 'Automatisches Ablaufen jeder Vorgabe nach fünf Jahren',
            'Mehr Personal', 'Digitalisierung'], answer: 1 },
        { type: 'gap', q: 'Technisch wäre es ___, politisch schwer. (без проблем)',
          answers: ['problemlos'] },
        { type: 'truefalse', q: 'Dr. Falk hält das Problem für unlösbar.', answer: false,
          explain: 'Вона каже «Nein» — але його не розв’язати одним законом.' },
        { type: 'multi', q: 'Welche Passiversatzformen kommen vor?',
          options: ['lässt sich abbauen', 'ist verzichtbar', 'ist einzuhalten',
            'ist nicht zu lösen', 'problemlos', 'unlösbar'],
          answers: [0, 1, 2, 3, 4, 5] },
      ],
    },
  ],

  writing: [
    {
      exam: 'Goethe C1 · Schreiben Teil 2',
      title: 'Sachtext: Anleitung für ein neues Verfahren',
      situation: 'Ви пишете розділ внутрішньої інструкції: як від тепер подають заявку на службову поїздку. Текст має бути безособовим і точним: <strong>150–180 слів</strong>. Уживіть щонайменше три різні замінники пасиву (<em>lässt sich</em>, <em>ist zu</em>, прикметник на <em>-bar</em> або <em>-pflichtig</em>).',
      points: [
        'Nennen Sie, was einzureichen ist.',
        'Nennen Sie die Fristen.',
        'Sagen Sie, was sich digital erledigen lässt.',
        'Nennen Sie eine Ausnahmeregelung.',
      ],
      minWords: 150,
      phrases: [
        { de: 'Der Antrag ist spätestens zwei Wochen vor Reisebeginn einzureichen.', uk: 'Заяву треба подати щонайпізніше за два тижні до початку поїздки.' },
        { de: 'Die Belege sind vollständig vorzulegen.', uk: 'Квитанції треба надати в повному обсязі.' },
        { de: 'Der gesamte Vorgang lässt sich im Portal abwickeln.', uk: 'Увесь процес можна провести в порталі.' },
        { de: 'Kurzreisen unter 24 Stunden sind nicht genehmigungspflichtig.', uk: 'Короткі поїздки менше 24 годин не потребують дозволу.' },
        { de: 'Nachträgliche Änderungen sind nur in Ausnahmefällen machbar.', uk: 'Пізніші зміни можливі лише у виняткових випадках.' },
        { de: 'Verspätete Anträge lassen sich nicht mehr berücksichtigen.', uk: 'Запізнілі заяви вже не можна врахувати.' },
      ],
      checklist: [
        'Є щонайменше три різні замінники пасиву?',
        'Правильно утворено sein + zu (einzureichen, vorzulegen)?',
        'Названо конкретні терміни?',
        'Є винятковий випадок?',
        'Обсяг 150–180 слів, тон безособовий, без «ich» і без часток?',
      ],
      model:
`Antrag auf eine Dienstreise — neues Verfahren ab 1. November

Der Antrag ist spätestens zwei Wochen vor Reisebeginn über das Personalportal einzureichen.
Beizufügen sind der voraussichtliche Kostenrahmen, die dienstliche Begründung und, bei Reisen
ins Ausland, die Zustimmung der Abteilungsleitung. Unvollständige Anträge lassen sich technisch
nicht weiterleiten; sie erscheinen in der Übersicht als offen.

Der gesamte Vorgang lässt sich digital abwickeln. Belege sind innerhalb von zehn Tagen nach
Rückkehr hochzuladen, Papieroriginale müssen nicht mehr nachgereicht werden. Die Abrechnung
ist damit in der Regel innerhalb eines Monats abgeschlossen.

Kurzreisen unter 24 Stunden im Inland sind nicht genehmigungspflichtig; hier genügt eine
Mitteilung im Portal. Nachträgliche Änderungen der Reisedaten sind nur in begründeten
Ausnahmefällen machbar und bedürfen der Zustimmung der Leitung.

Bei Reisen mit mehreren Beteiligten ist ein Sammelantrag zu stellen; einzelne Anträge derselben
Gruppe lassen sich im System nicht zusammenführen und führen zu doppelter Buchung. Die Wahl des
Verkehrsmittels ist zu begründen, sofern sie nicht dem günstigsten Angebot entspricht.

Verspätet eingereichte Anträge lassen sich nach der neuen Regelung nicht mehr berücksichtigen.
In Notfällen ist das Sekretariat unmittelbar zu verständigen.`,
      modelUk: 'Переклад: Заявка на службову поїздку — нова процедура з 1 листопада. Заяву треба подати щонайпізніше за два тижні до початку поїздки через кадровий портал. Додати слід орієнтовний кошторис, службове обґрунтування і, для поїздок за кордон, згоду керівництва відділу. Неповні заяви технічно неможливо переслати далі; вони показуються в переліку як відкриті. Увесь процес можна провести в цифровому вигляді. Квитанції треба завантажити протягом десяти днів після повернення, паперові оригінали доносити більше не потрібно. Розрахунок таким чином зазвичай завершується протягом місяця. Короткі поїздки менше 24 годин у межах країни не потребують дозволу; тут достатньо повідомлення в порталі. Пізніші зміни дат поїздки можливі лише в обґрунтованих виняткових випадках і потребують згоди керівництва. Подані із запізненням заяви за новим правилом уже не можна врахувати. У невідкладних випадках треба негайно повідомити секретаріат.',
    },
  ],

  test: [
    { type: 'gap', q: 'Das ___ ___ leicht ändern. (sich lassen)', answers: ['lässt', 'sich'] },
    { type: 'gap', q: 'Konjunktiv II: Das ___ ___ ändern. (sich lassen)', answers: ['ließe', 'sich'] },
    { type: 'gap', q: 'sein + zu: Der Antrag ist bis Freitag ___. (einreichen)',
      answers: ['einzureichen'] },
    { type: 'gap', q: 'sein + zu: Die Belege sind ___. (vorlegen)', answers: ['vorzulegen'] },
    { type: 'gap', q: 'Прикметник: Das kann man vermeiden → Das ist ___.', answers: ['vermeidbar'] },
    { type: 'gap', q: 'Прикметник: Dafür braucht man eine Genehmigung → Das ist ___.',
      answers: ['genehmigungspflichtig'] },
    { type: 'choice', q: 'Який замінник найприродніший у нейтральному тексті?',
      options: ['gehören + Partizip II', 'lässt sich + Infinitiv',
        'bekommen + Partizip II', 'es gibt … zu'], answer: 1 },
    { type: 'choice', q: '«Das gehört verboten!» — це:',
      options: ['офіційна вимога', 'емоційна оцінка «слід би заборонити»',
        'нейтральний пасив', 'припущення'], answer: 1 },
    { type: 'choice', q: 'Що означає <span class="de-inline">wettbewerbsfähig</span>?',
      options: ['той, кого можна перемогти', 'конкурентоспроможний',
        'той, що потребує змагання', 'безконкурентний'], answer: 1 },
    { type: 'order', q: 'Складіть речення.',
      words: ['Der', 'gesamte', 'Vorgang', 'lässt', 'sich', 'digital', 'abwickeln'],
      answer: 'Der gesamte Vorgang lässt sich digital abwickeln' },
    { type: 'match', q: 'Доберіть переклад.',
      pairs: [['einreichen', 'подавати документ'], ['entrichten', 'сплачувати'],
        ['die Auflage', 'умова'], ['fristgerecht', 'у термін'],
        ['nachweisen', 'підтверджувати документально'], ['vorlegen', 'пред’являти']] },
    { type: 'multi', q: 'Позначте прикметники з пасивним значенням «можна зробити».',
      options: ['lösbar', 'lernfähig', 'vermeidbar', 'verständlich', 'arbeitslos'],
      answers: [0, 2, 3] },
    { type: 'truefalse', q: 'У <span class="de-inline">sein + zu</span> прислівник <span class="de-inline">kaum</span> вказує на можливість, а не на вимогу.',
      answer: true },
    { type: 'truefalse', q: '<span class="de-inline">bekommen</span>-пасив доречний у офіційній інструкції.',
      answer: false,
      explain: 'Він розмовний; в інструкції беруть sein + zu або lässt sich.' },
  ],
};

export const modules = [m3, m4, m5];
