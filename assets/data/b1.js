import { modules as part2 } from './b1-part2.js?v=20260819k';
import { modules as part3 } from './b1-part3.js?v=20260819k';

export default {
  intro:
    'Повний курс рівня B1: вісім модулів. На цьому рівні мова перестає бути «шкільною» — ви вчитеся ' +
    'формулювати ввічливо й дипломатично, описувати процеси незалежно від виконавця, розповідати ' +
    'послідовність подій у минулому, аргументувати парними сполучниками й висловлювати припущення.',

  examNote: `
<p>Іспит B1 модульний: <strong>кожну з чотирьох частин можна складати окремо</strong> й перескладати
незалежно від інших. Загальна тривалість — близько <strong>3 годин</strong>. Прохідний бал у кожному модулі — <strong>60 %</strong>.</p>
<table>
<thead><tr><th>Модуль</th><th>Завдання</th><th>Час</th></tr></thead>
<tbody>
<tr><td><strong>Lesen</strong></td><td>5 частин: блог, оголошення, коментарі в форумі, інструкція, статті думок.</td><td>65 хв</td></tr>
<tr><td><strong>Hören</strong></td><td>4 частини: повідомлення, радіопередача, дискусія, доповідь.</td><td>40 хв</td></tr>
<tr><td><strong>Schreiben</strong></td><td>1) Імейл другові (~80 слів). 2) Коментар у форумі (~80 слів). 3) Формальний лист-вибачення (~40 слів).</td><td>60 хв</td></tr>
<tr><td><strong>Sprechen</strong></td><td>1) Спільне планування з партнером. 2) Презентація на 4 слайди про власний досвід. 3) Відгук і питання до партнера.</td><td>15 хв</td></tr>
</tbody></table>
<p><strong>Що додає балів у Schreiben на B1:</strong> різноманітні конектори (<em>deshalb, trotzdem, außerdem,
allerdings</em>), ввічливий Konjunktiv II у проханнях і чіткий поділ на абзаци.</p>`,


  modules: [

  /* ─────────────────────────────── МОДУЛЬ 1 ─────────────────────────────── */
  {
    id: 'm1',
    title: 'Konjunktiv II: Höflichkeit, Wünsche, Ratschläge',
    titleUk: 'Умовний спосіб: ввічливість, бажання, поради',
    can: [
      'ввічливо просити й пропонувати (könnten Sie, würden Sie)',
      'висловлювати нереальні бажання (Ich hätte gern, wenn ich … wäre)',
      'давати поради (an deiner Stelle würde ich …)',
      'будувати умовні речення нереальної умови',
      'відрізняти Konjunktiv II від Indikativ у тексті',
    ],

    grammar: [
      {
        title: '1. Дві форми: würde + Infinitiv і власна форма',
        html: `
<p>У сучасній німецькій Konjunktiv II утворюють двома способами. Практичне правило:
<strong>для більшості дієслів вживайте <em>würde</em> + інфінітив</strong>, а для десятка найчастотніших —
власну форму, бо «würde sein» звучить незграбно.</p>
<table>
<thead><tr><th>Інфінітив</th><th>Konjunktiv II</th><th><strong>Що означає сама форма</strong></th><th>Приклад і переклад</th></tr></thead>
<tbody>
<tr><td>sein — бути</td><td><strong>wäre</strong></td>
<td><strong>був би, була б, було б</strong></td>
<td><em>Das wäre super!</em><span class="uk">Це було б чудово!</span></td></tr>
<tr><td>haben — мати</td><td><strong>hätte</strong></td>
<td><strong>мав би, мала б</strong></td>
<td><em>Ich hätte gern einen Kaffee.</em><span class="uk">Я хотів би каву. (дослівно «мав би охоче»)</span></td></tr>
<tr><td>werden — ставати</td><td><strong>würde</strong></td>
<td><strong>частка «б»</strong> при іншому дієслові:<br><em>würde gehen</em> — пішов би</td>
<td><em>Ich würde gern mitkommen.</em><span class="uk">Я б залюбки пішов з вами.</span></td></tr>
<tr><td>können — могти</td><td><strong>könnte</strong></td>
<td><strong>міг би, могла б</strong></td>
<td><em>Könnten Sie mir helfen?</em><span class="uk">Чи могли б Ви мені допомогти?</span></td></tr>
<tr><td>müssen — мусити</td><td><strong>müsste</strong></td>
<td><strong>мав би, треба було б</strong></td>
<td><em>Du müsstest mehr schlafen.</em><span class="uk">Тобі треба було б більше спати.</span></td></tr>
<tr><td>dürfen — мати дозвіл</td><td><strong>dürfte</strong></td>
<td><strong>міг би</strong> (з дозволу);<br>також <strong>«мабуть, імовірно»</strong></td>
<td><em>Dürfte ich Sie kurz stören?</em><span class="uk">Чи можу я Вас ненадовго потурбувати?</span></td></tr>
<tr><td>sollen — слід</td><td><strong>sollte</strong></td>
<td><strong>варто б, слід було б</strong></td>
<td><em>Du solltest zum Arzt gehen.</em><span class="uk">Тобі варто піти до лікаря.</span></td></tr>
<tr><td>wissen — знати</td><td><strong>wüsste</strong></td>
<td><strong>знав би, знала б</strong></td>
<td><em>Ich wüsste gern mehr darüber.</em><span class="uk">Я хотів би знати про це більше.</span></td></tr>
<tr><td>gehen / kommen — іти / приходити</td><td><em>ginge / käme</em></td>
<td><strong>пішов би / прийшов би</strong></td>
<td>Уживають рідше, звучить книжно.<span class="uk">У розмові краще: würde gehen / würde kommen.</span></td></tr>
</tbody></table>
<div class="callout callout--tip"><strong>Найкоротше правило перекладу.</strong> Українською Konjunktiv II —
це майже завжди <strong>минулий час + частка «б»</strong>: <em>wäre</em> = «був <u>б</u>»,
<em>hätte</em> = «мав <u>б</u>», <em>könnte</em> = «міг <u>б</u>», <em>sollte</em> = «варто <u>б</u>».
Тому не шукайте окремого слова для <em>würde</em> — воно й <u>є</u> цим «б».</div>
<p><strong>Закінчення</strong> у всіх однакові: <em>-e, -est, -e, -en, -et, -en</em>.
<em>ich wäre, du wär<strong>est</strong>, er wäre, wir wären, ihr wär<strong>et</strong>, sie wären</em>
<span class="uk">я був би, ти був би, він був би, ми були б, ви були б, вони були б</span></p>
<div class="callout callout--tip"><strong>Як утворити самому.</strong> Візьміть форму Präteritum,
додайте умлаут (якщо голосна a/o/u) і закінчення: <em>war → wäre</em>, <em>hatte → hätte</em>,
<em>konnte → könnte</em>, <em>musste → müsste</em>. Виняток: <em>sollen</em> і <em>wollen</em>
умлаута <u>не</u> отримують — <em>sollte, wollte</em>.</div>`,
      },
      {
        title: '2. Чотири функції',
        html: `
<table>
<thead><tr><th>Функція</th><th>Приклад</th><th>Українською</th></tr></thead>
<tbody>
<tr><td><strong>Ввічливе прохання</strong></td>
<td><em>Könnten Sie mir bitte helfen?</em><br><em>Würden Sie das Fenster schließen?</em></td>
<td>Чи могли б Ви мені допомогти?<br>Чи зачинили б Ви вікно?</td></tr>
<tr><td><strong>Ввічливе бажання</strong></td>
<td><em>Ich hätte gern die Rechnung.</em><br><em>Ich würde gern einen Termin vereinbaren.</em></td>
<td>Я хотів би рахунок.<br>Я хотів би домовитися про зустріч.</td></tr>
<tr><td><strong>Порада</strong></td>
<td><em>Du solltest weniger arbeiten.</em><br><em>An deiner Stelle würde ich mit ihr sprechen.</em></td>
<td>Тобі варто менше працювати.<br>На твоєму місці я б із нею поговорив.</td></tr>
<tr><td><strong>Нереальна умова</strong></td>
<td><em>Wenn ich Zeit hätte, würde ich mitkommen.</em></td>
<td>Якби я мав час, я б пішов із вами.</td></tr>
</tbody></table>
<div class="callout"><strong>Чому це важливо для іспиту.</strong> На B1 у частині Sprechen і Schreiben
прохання в Indikativ (<em>Helfen Sie mir!</em>) звучить як наказ. Konjunktiv II — головний інструмент
ввічливості в німецькій, і його наявність помітно підвищує оцінку.</div>`,
      },
      {
        title: '3. Умовні речення (irreale Bedingung)',
        html: `
<p>Обидві частини стоять у Konjunktiv II. Головне речення найчастіше з <em>würde</em>,
підрядне — з власною формою.</p>
<table>
<thead><tr><th>Реальність</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td>реальна умова (Indikativ)</td><td><em>Wenn ich Zeit <strong>habe</strong>, <strong>komme</strong> ich mit.</em> — Якщо матиму час, прийду.</td></tr>
<tr><td>нереальна умова (Konjunktiv II)</td><td><em>Wenn ich Zeit <strong>hätte</strong>, <strong>würde</strong> ich mit<strong>kommen</strong>.</em> — Якби я мав час…</td></tr>
<tr><td>нереальна умова в минулому</td><td><em>Wenn ich Zeit <strong>gehabt hätte</strong>, <strong>wäre</strong> ich mit<strong>gekommen</strong>.</em> — Якби я тоді мав час…</td></tr>
</tbody></table>
<p><strong>Минулий Konjunktiv II</strong> утворюють просто: <em>hätte / wäre</em> + Partizip II.
Іншої форми немає — це полегшує справу.</p>
<p><strong>Порядок слів:</strong> у підрядному з <em>wenn</em> дієслово в кінці; якщо підрядне
стоїть першим, головне починається з дієслова:</p>
<ul>
<li><em>Ich würde dir helfen, <strong>wenn</strong> ich mehr Zeit <strong>hätte</strong>.</em></li>
<li><em><strong>Wenn</strong> ich mehr Zeit <strong>hätte</strong>, <strong>würde</strong> ich dir helfen.</em></li>
</ul>
<p><strong>Без wenn</strong> (книжно, але трапляється в текстах): <em><strong>Hätte</strong> ich mehr Zeit,
würde ich dir helfen.</em></p>`,
      },
      {
        title: '4. Корисні готові конструкції',
        html: `
<ul>
<li><em>An deiner / Ihrer Stelle würde ich …</em> — На твоєму / Вашому місці я б …</li>
<li><em>Es wäre schön / besser / hilfreich, wenn …</em> — Було б добре / краще, якби …</li>
<li><em>Ich würde vorschlagen, dass …</em> — Я б запропонував, щоб …</li>
<li><em>Wäre es möglich, … zu …?</em> — Чи було б можливо …?</li>
<li><em>Ich hätte da eine Bitte.</em> — У мене було б прохання.</li>
<li><em>Beinahe / Fast hätte ich den Zug verpasst.</em> — Я ледь не запізнився на потяг.</li>
<li><em>Ich wünschte, ich könnte …</em> — Я б хотів, аби міг …</li>
</ul>`,
      },
      {
        title: '5. Слова з прикладів цієї теми',
        html: `
<p>Щоб приклади вище читалися без словника — усі німецькі слова, які в них трапляються
й виходять за межі базового запасу A1–A2.</p>
<table>
<thead><tr><th>Слово</th><th>Переклад</th><th>Як ужито в темі</th></tr></thead>
<tbody>
<tr><td><em>stören</em></td><td>турбувати, заважати</td><td><em>Dürfte ich Sie kurz stören?</em></td></tr>
<tr><td><em>vereinbaren</em></td><td>домовлятися про щось</td><td><em>einen Termin vereinbaren</em> — домовитися про зустріч</td></tr>
<tr><td><em>die Rechnung, -en</em></td><td>рахунок</td><td><em>Ich hätte gern die Rechnung.</em></td></tr>
<tr><td><em>mitkommen</em></td><td>іти разом з кимось</td><td><em>Ich würde gern mitkommen.</em></td></tr>
<tr><td><em>verpassen</em></td><td>проґавити, запізнитися на</td><td><em>den Zug verpassen</em> — запізнитися на потяг</td></tr>
<tr><td><em>vorschlagen</em></td><td>пропонувати</td><td><em>Ich würde vorschlagen, dass …</em></td></tr>
<tr><td><em>hilfreich</em></td><td>корисний, доречний</td><td><em>Es wäre hilfreich, wenn …</em></td></tr>
<tr><td><em>beinahe / fast</em></td><td>майже, ледь не</td><td><em>Beinahe hätte ich den Zug verpasst.</em></td></tr>
<tr><td><em>die Bitte, -n</em></td><td>прохання</td><td><em>Ich hätte da eine Bitte.</em></td></tr>
<tr><td><em>an deiner Stelle</em></td><td>на твоєму місці</td><td><em>An deiner Stelle würde ich …</em></td></tr>
<tr><td><em>wünschen</em></td><td>бажати</td><td><em>Ich wünschte, ich könnte …</em></td></tr>
<tr><td><em>möglich</em></td><td>можливий</td><td><em>Wäre es möglich, … zu …?</em></td></tr>
</tbody></table>
<div class="callout callout--tip"><strong>Як учити.</strong> Ці слова майже завжди йдуть у зв’язці
з Konjunktiv II, тому запам’ятовуйте їх не поодинці, а цілими зворотами:
<em>einen Termin vereinbaren</em>, <em>kurz stören</em>, <em>eine Bitte haben</em>.</div>`,
      },
    ],
    exercises: [
      { type: 'gap', q: '___ Sie mir bitte helfen? (können, Konj. II)', answers: ['Könnten|Koennten'] },
      { type: 'gap', q: 'Ich ___ gern einen Termin vereinbaren. (würde)', answers: ['würde|wuerde'] },
      { type: 'gap', q: 'Das ___ wirklich super! (sein, Konj. II)', answers: ['wäre|waere'] },
      { type: 'gap', q: 'Ich ___ gern die Rechnung, bitte. (haben, Konj. II)', answers: ['hätte|haette'] },
      { type: 'gap', q: 'Du ___ weniger arbeiten. (sollen, Konj. II)', answers: ['solltest'] },
      { type: 'gap', q: 'Wenn ich mehr Zeit ___, ___ ich dir helfen. (haben / werden)',
        answers: ['hätte|haette', 'würde|wuerde'] },
      { type: 'gap', q: 'Wenn ich reich ___, ___ ich um die Welt reisen. (sein / werden)',
        answers: ['wäre|waere', 'würde|wuerde'] },
      { type: 'choice', q: 'Найввічливіший варіант:',
        options: ['Geben Sie mir das Salz!', 'Ich will das Salz.', 'Könnten Sie mir bitte das Salz geben?', 'Sie müssen mir das Salz geben.'],
        answer: 2 },
      { type: 'choice', q: 'Нереальна умова в минулому:',
        options: ['Wenn ich Zeit hätte, käme ich.', 'Wenn ich Zeit gehabt hätte, wäre ich gekommen.', 'Wenn ich Zeit habe, komme ich.', 'Wenn ich Zeit haben würde, komme ich.'],
        answer: 1 },
      { type: 'choice', q: 'Яка форма Konjunktiv II від <span class="de-inline">müssen</span>?',
        options: ['musste', 'müsste', 'mussen', 'möchte'], answer: 1 },
      { type: 'order', q: 'Складіть речення.',
        words: ['An', 'deiner', 'Stelle', 'würde', 'ich', 'mit', 'dem', 'Chef', 'sprechen'],
        answer: 'An deiner Stelle würde ich mit dem Chef sprechen' },
      { type: 'order', q: 'Складіть умовне речення.',
        words: ['Wenn', 'ich', 'Zeit', 'hätte', 'würde', 'ich', 'öfter', 'ins', 'Kino', 'gehen'],
        answer: 'Wenn ich Zeit hätte würde ich öfter ins Kino gehen' },
      { type: 'match', q: 'Доберіть Konjunktiv II.',
        pairs: [['sein', 'wäre'], ['haben', 'hätte'], ['können', 'könnte'], ['dürfen', 'dürfte'], ['wissen', 'wüsste'], ['sollen', 'sollte']] },
      { type: 'multi', q: 'Позначте ввічливі формулювання.',
        options: ['Ich hätte gern einen Kaffee.', 'Ich will einen Kaffee.', 'Dürfte ich Sie kurz stören?', 'Machen Sie das sofort!', 'Wäre es möglich, den Termin zu verschieben?'],
        answers: [0, 2, 4] },
      { type: 'truefalse', q: 'Форма Konjunktiv II від <span class="de-inline">wollen</span> — «wöllte».', answer: false,
        explain: 'sollen і wollen умлаута не отримують: sollte, wollte.' },
    ],

    listening: [
      {
        exam: 'Goethe B1 · Hören Teil 2',
        title: 'Eine Beschwerde im Elektrogeschäft',
        instruction: 'Клієнтка повертає зламаний товар. Зверніть увагу на ввічливі формули.',
        lines: [
          { speaker: 'Kundin', de: 'Guten Tag. Ich hätte ein Problem mit diesem Kopfhörer. Könnten Sie mir vielleicht helfen?', uk: 'Добрий день. У мене проблема з цими навушниками. Чи могли б Ви мені допомогти?' },
          { speaker: 'Verkäufer', de: 'Natürlich. Was ist denn genau passiert?', uk: 'Звісно. Що саме сталося?' },
          { speaker: 'Kundin', de: 'Ich habe ihn vor zwei Wochen gekauft, und seit gestern funktioniert die rechte Seite nicht mehr.', uk: 'Я купила їх два тижні тому, і від учора права сторона не працює.' },
          { speaker: 'Verkäufer', de: 'Haben Sie die Rechnung dabei?', uk: 'Чек із собою?' },
          { speaker: 'Kundin', de: 'Ja, hier bitte. Wäre es möglich, das Gerät umzutauschen?', uk: 'Так, ось. Чи можливо обміняти пристрій?' },
          { speaker: 'Verkäufer', de: 'Sie haben zwei Möglichkeiten: Wir tauschen um, oder Sie bekommen das Geld zurück.', uk: 'У Вас дві можливості: ми обміняємо, або Ви отримаєте гроші назад.' },
          { speaker: 'Kundin', de: 'Ich würde lieber ein neues Gerät nehmen. Das wäre einfacher.', uk: 'Я б радше взяла новий пристрій. Так було б простіше.' },
          { speaker: 'Verkäufer', de: 'Kein Problem. An Ihrer Stelle würde ich diesmal das Modell mit Kabel nehmen — es ist robuster.', uk: 'Без проблем. На Вашому місці я б цього разу взяв модель із кабелем — вона міцніша.' },
        ],
        tasks: [
          { type: 'choice', q: 'Was ist das Problem?',
            options: ['Der Kopfhörer ist zu teuer.', 'Die rechte Seite funktioniert nicht.', 'Die Farbe gefällt ihr nicht.', 'Er ist zu klein.'], answer: 1 },
          { type: 'choice', q: 'Wofür entscheidet sich die Kundin?',
            options: ['Geld zurück', 'Umtausch', 'Reparatur', 'Sie geht ohne Lösung'], answer: 1 },
          { type: 'gap', q: 'Sie fragt: «___ es möglich, das Gerät umzutauschen?»', answers: ['Wäre|Waere'] },
          { type: 'truefalse', q: 'Der Verkäufer empfiehlt das Modell mit Kabel.', answer: true },
          { type: 'gap', q: 'Sie hat den Kopfhörer vor ___ Wochen gekauft.', answers: ['2|zwei'] },
        ],
      },
    ],

    writing: [
      {
        exam: 'Goethe B1 · Schreiben Teil 3',
        title: 'Formelle E-Mail: Kurs verschieben',
        situation: 'Ви записалися на курс, який починається наступного тижня, але через відрядження не зможете відвідувати перші два заняття. Напишіть керівникові курсу пані Dr. Hoffmann. <strong>60–80 слів</strong>, формальний стиль, обов’язково Konjunktiv II.',
        points: ['Nennen Sie den Grund.', 'Fragen Sie, ob Sie später einsteigen können.', 'Bitten Sie um die Materialien der ersten Stunden.', 'Bedanken Sie sich.'],
        minWords: 60,
        phrases: [
          { de: 'Sehr geehrte Frau Dr. Hoffmann,', uk: 'Шановна пані д-р Гоффманн,' },
          { de: 'leider kann ich an den ersten beiden Terminen nicht teilnehmen.', uk: 'на жаль, я не зможу взяти участь у перших двох заняттях.' },
          { de: 'Der Grund dafür ist eine Dienstreise nach Hamburg.', uk: 'Причина — відрядження до Гамбурга.' },
          { de: 'Wäre es möglich, dass ich erst am 20. März einsteige?', uk: 'Чи можливо, щоб я долучився лише 20 березня?' },
          { de: 'Könnten Sie mir die Materialien der ersten Stunden schicken?', uk: 'Чи могли б Ви надіслати мені матеріали перших занять?' },
          { de: 'Ich würde mich sehr über eine kurze Rückmeldung freuen.', uk: 'Я був би дуже радий короткій відповіді.' },
          { de: 'Mit freundlichen Grüßen', uk: 'З повагою' },
        ],
        checklist: [
          'Є щонайменше три конструкції в Konjunktiv II (könnten, wäre, würde, hätte)?',
          'Формальне звертання з комою й малою літерою в наступному рядку?',
          'Ви послідовно вживаєте Sie / Ihnen / Ihr?',
          'Текст поділено на абзаци: причина → прохання → подяка?',
          'Розкрито всі чотири пункти, обсяг 60–80 слів?',
        ],
        model:
`Sehr geehrte Frau Dr. Hoffmann,

ich habe mich für Ihren Abendkurs «Deutsch B1» angemeldet und freue mich sehr darauf.
Leider kann ich an den ersten beiden Terminen nicht teilnehmen, da ich beruflich in Hamburg sein muss.
Wäre es möglich, dass ich erst am 20. März in den Kurs einsteige? Außerdem hätte ich eine Bitte:
Könnten Sie mir die Materialien der ersten zwei Stunden per E-Mail schicken? Dann könnte ich den Stoff selbst nachholen.

Vielen Dank im Voraus. Über eine kurze Rückmeldung würde ich mich sehr freuen.

Mit freundlichen Grüßen
Iryna Kowal`,
        modelUk: 'Переклад: Шановна пані д-р Гоффманн, я записалася на Ваш вечірній курс «Німецька B1» і дуже цьому тішуся. На жаль, я не зможу взяти участь у перших двох заняттях, бо мушу бути у Гамбурзі у робочих справах. Чи можливо, щоб я долучилася до курсу лише 20 березня? Крім того, у мене було б прохання: чи могли б Ви надіслати мені матеріали перших двох занять електронною поштою? Тоді я могла б надолужити матеріал самостійно. Заздалегідь дякую. Була б дуже рада короткій відповіді. З повагою, Ірина Коваль.',
      },
    ],

    test: [
      { type: 'gap', q: '___ Sie bitte das Fenster schließen? (würden)', answers: ['Würden|Wuerden'] },
      { type: 'gap', q: 'Ich ___ gern einen Tisch für zwei Personen reservieren. (würde)', answers: ['würde|wuerde'] },
      { type: 'gap', q: 'Das ___ sehr nett von Ihnen. (sein)', answers: ['wäre|waere'] },
      { type: 'gap', q: 'Du ___ wirklich zum Arzt gehen. (sollen)', answers: ['solltest'] },
      { type: 'gap', q: 'Wenn ich du ___, ___ ich das nicht machen. (sein / werden)',
        answers: ['wäre|waere', 'würde|wuerde'] },
      { type: 'gap', q: 'Wenn wir früher ___ ___, ___ wir den Zug nicht verpasst. (losfahren / sein, минуле)',
        answers: ['losgefahren', 'wären|waeren', 'hätten|haetten'],
        hint: 'Порядок: …, wenn wir früher losgefahren wären, hätten wir den Zug nicht verpasst.' },
      { type: 'choice', q: 'Konjunktiv II від <span class="de-inline">dürfen</span>:',
        options: ['durfte', 'dürfte', 'darfte', 'düfte'], answer: 1 },
      { type: 'choice', q: 'Яке речення ввічливе?',
        options: ['Ich brauche einen Termin.', 'Geben Sie mir einen Termin.', 'Ich hätte gern einen Termin.', 'Sie müssen mir einen Termin geben.'],
        answer: 2 },
      { type: 'choice', q: 'Порада «На Вашому місці я б зачекав»:',
        options: ['An Ihrer Stelle würde ich warten.', 'In Ihrer Stelle würde ich warten.', 'An Ihrer Stelle werde ich warten.', 'Auf Ihrer Stelle ich würde warten.'],
        answer: 0 },
      { type: 'order', q: 'Складіть речення.',
        words: ['Es', 'wäre', 'besser', 'wenn', 'du', 'früher', 'kommen', 'würdest'],
        answer: 'Es wäre besser wenn du früher kommen würdest' },
      { type: 'match', q: 'Доберіть переклад.',
        pairs: [['sich beschweren', 'скаржитися'], ['umtauschen', 'обміняти'], ['der Vorschlag', 'пропозиція'], ['die Verspätung', 'запізнення'], ['empfehlen', 'рекомендувати']] },
      { type: 'multi', q: 'Позначте форми Konjunktiv II.',
        options: ['hätte', 'hatte', 'wäre', 'war', 'könnte', 'konnte'], answers: [0, 2, 4] },
      { type: 'truefalse', q: 'Минулий Konjunktiv II утворюється тільки через hätte / wäre + Partizip II.', answer: true },
    ],
  },

  /* ─────────────────────────────── МОДУЛЬ 2 ─────────────────────────────── */
  {
    id: 'm2',
    title: 'Das Passiv',
    titleUk: 'Пасивний стан: коли важлива дія, а не виконавець',
    can: [
      'утворювати Passiv Präsens, Präteritum і Perfekt',
      'вживати Passiv із модальними дієсловами',
      'називати виконавця через von і засіб через durch',
      'описувати процеси, правила й інструкції',
      'перетворювати активне речення на пасивне і навпаки',
    ],

    grammar: [
      {
        title: '1. Навіщо потрібен Passiv',
        html: `
<p>Пасив ставить у центр <strong>дію</strong>, а не того, хто її виконує. Він панує в інструкціях,
новинах, наукових текстах, описах процесів і офіційних правилах — саме там, де його перевіряють
на іспиті B1.</p>
<table>
<thead><tr><th>Aktiv</th><th>Passiv</th></tr></thead>
<tbody>
<tr><td><em>Der Mechaniker repariert <strong>das Auto</strong>.</em><span class="uk">Механік ремонтує авто.</span></td>
<td><em><strong>Das Auto</strong> wird repariert.</em><span class="uk">Авто ремонтують.</span></td></tr>
<tr><td><em>Man baut <strong>die Brücke</strong>.</em><span class="uk">Міст будують.</span></td>
<td><em><strong>Die Brücke</strong> wird gebaut.</em><span class="uk">Міст будується / будують.</span></td></tr>
</tbody></table>
<p class="muted" style="font-size:.92rem"><em>der Mechaniker</em> — механік, <em>reparieren</em> — ремонтувати,
<em>bauen</em> — будувати, <em>die Brücke</em> — міст.</p>
<p><strong>Механізм перетворення:</strong> прямий додаток (Akkusativ) активного речення стає підметом
(Nominativ) пасивного. Підмет активного або зникає, або приєднується через <em>von</em>.</p>`,
      },
      {
        title: '2. Формула: werden + Partizip II',
        html: `
<table>
<thead><tr><th>Час</th><th>Формула</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td><strong>Präsens</strong></td><td><em>wird / werden</em> + Part. II</td>
<td><em>Das Haus <strong>wird</strong> renoviert.</em><span class="uk">Будинок ремонтують (зараз).</span></td></tr>
<tr><td><strong>Präteritum</strong></td><td><em>wurde / wurden</em> + Part. II</td>
<td><em>Das Haus <strong>wurde</strong> renoviert.</em><span class="uk">Будинок відремонтували.</span></td></tr>
<tr><td><strong>Perfekt</strong></td><td><em>ist / sind</em> + Part. II + <em>worden</em></td>
<td><em>Das Haus <strong>ist</strong> renoviert <strong>worden</strong>.</em><span class="uk">Будинок було відремонтовано.</span></td></tr>
<tr><td><strong>з модальним</strong></td><td>модальне + Part. II + <em>werden</em></td>
<td><em>Das Haus <strong>muss</strong> renoviert <strong>werden</strong>.</em><span class="uk">Будинок треба відремонтувати.</span></td></tr>
</tbody></table>
<div class="callout"><strong>worden, а не geworden.</strong> У Perfekt Passiv допоміжне <em>werden</em>
втрачає <em>ge-</em>: <em>ist gemacht <u>worden</u></em>. Форма <em>geworden</em> існує лише в активному
значенні «став»: <em>Er ist Arzt geworden.</em></div>
<p><strong>Präteritum werden:</strong> <em>ich wurde, du wurdest, er wurde, wir wurden, ihr wurdet, sie wurden.</em></p>`,
      },
      {
        title: '3. von, durch і безособовий пасив',
        html: `
<table>
<thead><tr><th>Прийменник</th><th>Що вводить</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td><strong>von</strong> + Dativ</td><td>особа, дійова сила</td>
<td><em>Der Brief wurde <strong>von meiner Chefin</strong> geschrieben.</em><span class="uk">Листа написала моя керівниця.</span></td></tr>
<tr><td><strong>durch</strong> + Akkusativ</td><td>засіб, причина, посередник</td>
<td><em>Die Stadt wurde <strong>durch das Erdbeben</strong> zerstört.</em><span class="uk">Місто зруйнував землетрус.</span></td></tr>
</tbody></table>
<p><strong>Часто виконавця не називають узагалі</strong> — і це головна причина вживати пасив:
<em>Hier wird nicht geraucht.</em> — Тут не палять.</p>
<p><strong>Безособовий пасив</strong> (від неперехідних дієслів) починається з <em>es</em> або
з обставини:</p>
<ul>
<li><em><strong>Es</strong> wird hier viel gearbeitet.</em> — Тут багато працюють.</li>
<li><em>Am Samstag <strong>wird</strong> nicht gearbeitet.</em> — У суботу не працюють.</li>
<li><em>In der Bibliothek <strong>wird</strong> nicht gesprochen.</em></li>
</ul>`,
      },
      {
        title: '4. Zustandspassiv і альтернативи',
        html: `
<p><strong>Vorgangspassiv</strong> (процес) — <em>werden</em>: <em>Die Tür <strong>wird</strong> geschlossen.</em>
(двері зачиняють просто зараз).<br>
<strong>Zustandspassiv</strong> (результат) — <em>sein</em>: <em>Die Tür <strong>ist</strong> geschlossen.</em>
(двері зачинені).</p>
<p>На іспиті часто перевіряють, чи ви відчуваєте цю різницю:
<em>Das Fenster wird geöffnet</em> (хтось відчиняє) — <em>Das Fenster ist geöffnet</em> (воно відчинене).</p>
<p><strong>Замінники пасиву,</strong> корисні для різноманітності стилю:</p>
<table>
<thead><tr><th>Конструкція</th><th>Приклад</th><th>Значення</th></tr></thead>
<tbody>
<tr><td><em>man</em> + Aktiv</td><td><em>Man repariert das Auto.</em></td><td>розмовна заміна</td></tr>
<tr><td><em>sein + zu + Infinitiv</em></td><td><em>Das Formular ist auszufüllen.</em></td><td>треба / можна зробити</td></tr>
<tr><td><em>sich lassen + Infinitiv</em></td><td><em>Das lässt sich reparieren.</em></td><td>це можна полагодити</td></tr>
<tr><td><em>-bar</em></td><td><em>Das Problem ist lösbar.</em></td><td>розв’язний</td></tr>
</tbody></table>`,
      },
      {
        title: '5. Слова з прикладів цієї теми',
        html: `
<p>Пасив найчастіше трапляється в інструкціях, новинах і описах виробництва — звідси й лексика
прикладів вище.</p>
<table>
<thead><tr><th>Слово</th><th>Переклад</th><th>Як ужито в темі</th></tr></thead>
<tbody>
<tr><td><em>renovieren</em></td><td>робити ремонт</td><td><em>Das Haus wird renoviert.</em></td></tr>
<tr><td><em>reparieren</em></td><td>ремонтувати, лагодити</td><td><em>Das Auto wird repariert.</em></td></tr>
<tr><td><em>zerstören</em></td><td>руйнувати</td><td><em>Die Stadt wurde zerstört.</em></td></tr>
<tr><td><em>das Erdbeben, -</em></td><td>землетрус</td><td><em>durch das Erdbeben</em> — через землетрус</td></tr>
<tr><td><em>die Chefin, -nen</em></td><td>керівниця, начальниця</td><td><em>von meiner Chefin geschrieben</em></td></tr>
<tr><td><em>das Formular ausfüllen</em></td><td>заповнити формуляр</td><td><em>Das Formular ist auszufüllen.</em></td></tr>
<tr><td><em>lösen</em></td><td>розв’язувати</td><td><em>Das lässt sich lösen.</em> — Це можна розв’язати.</td></tr>
<tr><td><em>lösbar</em></td><td>розв’язний, який можна вирішити</td><td><em>Das Problem ist lösbar.</em></td></tr>
<tr><td><em>die Vorschrift, -en</em></td><td>припис, правило</td><td>типове слово інструкцій</td></tr>
<tr><td><em>geraucht</em> (rauchen)</td><td>палити</td><td><em>Hier wird nicht geraucht.</em> — Тут не палять.</td></tr>
</tbody></table>
<div class="callout"><strong>Не плутайте два <em>werden</em>.</strong>
<em>Er wird Arzt</em> — «він стає лікарем» (активне значення «ставати»).
<em>Das Auto wird repariert</em> — «авто ремонтують» (пасив). Розрізняйте за тим,
чи стоїть після <em>werden</em> Partizip II.</div>`,
      },
    ],
    exercises: [
      { type: 'gap', q: 'Das Auto ___ gerade ___. (reparieren, Passiv Präsens)', answers: ['wird', 'repariert'] },
      { type: 'gap', q: 'Die Brücke ___ 1990 ___. (bauen, Passiv Präteritum)', answers: ['wurde', 'gebaut'] },
      { type: 'gap', q: 'Das Haus ___ letztes Jahr renoviert ___. (Passiv Perfekt)', answers: ['ist', 'worden'] },
      { type: 'gap', q: 'Das Formular ___ heute noch ausgefüllt ___. (müssen, Passiv)', answers: ['muss', 'werden'] },
      { type: 'gap', q: 'Der Brief wurde ___ meiner Chefin geschrieben.', answers: ['von'] },
      { type: 'gap', q: 'Die Stadt wurde ___ das Erdbeben zerstört.', answers: ['durch'] },
      { type: 'gap', q: 'Hier ___ nicht geraucht. (безособовий пасив)', answers: ['wird'] },
      { type: 'choice', q: 'Aktiv → Passiv: «Der Lehrer erklärt die Regel.»',
        options: ['Die Regel wird vom Lehrer erklärt.', 'Die Regel wird von dem Lehrer erklärt worden.', 'Der Lehrer wird die Regel erklärt.', 'Die Regel ist vom Lehrer erklären.'],
        answer: 0 },
      { type: 'choice', q: 'Passiv Perfekt правильно:',
        options: ['Das Buch ist geschrieben geworden.', 'Das Buch ist geschrieben worden.', 'Das Buch hat geschrieben worden.', 'Das Buch wurde geschrieben worden.'],
        answer: 1 },
      { type: 'choice', q: 'Яке речення описує <em>результат</em>, а не процес?',
        options: ['Die Tür wird geschlossen.', 'Die Tür ist geschlossen.', 'Die Tür wurde geschlossen.', 'Die Tür muss geschlossen werden.'],
        answer: 1 },
      { type: 'order', q: 'Складіть речення в Passiv.',
        words: ['Die', 'Rechnung', 'muss', 'bis', 'Freitag', 'bezahlt', 'werden'],
        answer: 'Die Rechnung muss bis Freitag bezahlt werden' },
      { type: 'order', q: 'Складіть речення в Passiv Perfekt.',
        words: ['Das', 'Problem', 'ist', 'schnell', 'gelöst', 'worden'],
        answer: 'Das Problem ist schnell gelöst worden' },
      { type: 'match', q: 'Доберіть переклад.',
        pairs: [['herstellen', 'виготовляти'], ['unterschreiben', 'підписувати'], ['die Frist', 'термін'], ['genehmigen', 'затверджувати'], ['veröffentlichen', 'публікувати']] },
      { type: 'multi', q: 'Позначте правильні пасивні речення.',
        options: ['Das Auto wird repariert.', 'Das Auto wird reparieren.', 'Das Auto wurde repariert.', 'Das Auto ist repariert worden.', 'Das Auto ist repariert geworden.'],
        answers: [0, 2, 3] },
      { type: 'truefalse', q: 'У Perfekt Passiv вживається форма «geworden».', answer: false,
        explain: 'Правильно: worden. «geworden» — лише активне «став».' },
    ],

    listening: [
      {
        exam: 'Goethe B1 · Hören Teil 3',
        title: 'Führung durch eine Schokoladenfabrik',
        instruction: 'Екскурсоводка описує виробництво. Зверніть увагу на пасивні конструкції.',
        lines: [
          { de: 'Herzlich willkommen in unserer Schokoladenfabrik! Ich zeige Ihnen kurz, wie hier gearbeitet wird.', uk: 'Ласкаво просимо на нашу шоколадну фабрику! Я коротко покажу, як тут працюють.' },
          { de: 'Die Kakaobohnen werden aus Ghana und Ecuador geliefert.', uk: 'Какао-боби постачають із Гани та Еквадору.' },
          { de: 'Zuerst werden sie gereinigt und dann bei hundertvierzig Grad geröstet.', uk: 'Спочатку їх очищають, а потім обсмажують за ста сорока градусів.' },
          { de: 'Danach wird die Masse zwölf Stunden lang gerührt. Das nennt man Conchieren.', uk: 'Після цього масу перемішують дванадцять годин. Це називається коншування.' },
          { de: 'Die Fabrik wurde 1898 von der Familie Berger gegründet.', uk: 'Фабрику заснувала родина Берґер у 1898 році.' },
          { de: 'Sie ist im Krieg fast vollständig zerstört worden, aber danach wieder aufgebaut worden.', uk: 'Під час війни її майже повністю зруйнували, але потім відбудували.' },
          { de: 'Heute werden hier täglich etwa achttausend Tafeln produziert.', uk: 'Сьогодні тут щодня виготовляють близько восьми тисяч плиток.' },
          { de: 'Bitte beachten Sie: In den Produktionsräumen darf nicht fotografiert werden.', uk: 'Будь ласка, зверніть увагу: у виробничих приміщеннях фотографувати не можна.' },
        ],
        tasks: [
          { type: 'choice', q: 'Woher kommen die Kakaobohnen?',
            options: ['Aus Brasilien und Peru', 'Aus Ghana und Ecuador', 'Aus Afrika und Asien', 'Aus Deutschland'], answer: 1 },
          { type: 'gap', q: 'Die Bohnen werden bei ___ Grad geröstet.', answers: ['140|hundertvierzig'] },
          { type: 'gap', q: 'Die Fabrik wurde ___ gegründet. (рік)', answers: ['1898'] },
          { type: 'gap', q: 'Täglich werden etwa ___ Tafeln produziert.', answers: ['8000|achttausend'] },
          { type: 'truefalse', q: 'In den Produktionsräumen darf fotografiert werden.', answer: false },
          { type: 'choice', q: 'Wie lange wird die Masse gerührt?',
            options: ['2 Stunden', '8 Stunden', '12 Stunden', '24 Stunden'], answer: 2 },
        ],
      },
    ],

    writing: [
      {
        exam: 'Goethe B1 · Schreiben Teil 2',
        title: 'Forumsbeitrag: Sollte Recycling Pflicht sein?',
        situation: 'У мовному форумі обговорюють тему «Müsste Mülltrennung überall zur Pflicht werden?». Напишіть свій коментар. <strong>80 слів</strong>. Уживіть щонайменше три пасивні конструкції.',
        points: ['Ihre Meinung zum Thema', 'Wie wird Müll in Ihrem Land / Ihrer Stadt getrennt?', 'Ein Beispiel oder eine Erfahrung', 'Ein Vorschlag zum Schluss'],
        minWords: 80,
        phrases: [
          { de: 'Meiner Meinung nach sollte …', uk: 'На мою думку, слід би …' },
          { de: 'In meiner Stadt wird der Müll in vier Container getrennt.', uk: 'У моєму місті сміття сортують у чотири контейнери.' },
          { de: 'Papier, Glas und Plastik werden getrennt gesammelt.', uk: 'Папір, скло і пластик збирають окремо.' },
          { de: 'Bei uns wurde vor zwei Jahren ein neues System eingeführt.', uk: 'У нас два роки тому запровадили нову систему.' },
          { de: 'Außerdem finde ich, dass …', uk: 'Крім того, я вважаю, що …' },
          { de: 'Zusammenfassend würde ich vorschlagen, …', uk: 'Підсумовуючи, я запропонував би …' },
        ],
        checklist: [
          'Є щонайменше три пасивні конструкції (wird … / wurde … / muss … werden)?',
          'У Perfekt Passiv ви написали worden, а не geworden?',
          'Текст структурований: думка → приклад → пропозиція?',
          'Ужито конектори (außerdem, deshalb, allerdings, zusammenfassend)?',
          'Обсяг близько 80 слів?',
        ],
        model:
`Meiner Meinung nach sollte Mülltrennung überall zur Pflicht werden.

In meiner Stadt wird der Müll schon seit Jahren getrennt: Papier, Glas, Plastik und Biomüll werden in
verschiedenen Containern gesammelt. Vor zwei Jahren wurde außerdem ein Pfandsystem für Flaschen eingeführt,
und seitdem sieht man deutlich weniger Müll auf der Straße.

Allerdings wird bei uns noch zu wenig darüber informiert. Viele wissen einfach nicht, was wohin gehört.

Zusammenfassend würde ich vorschlagen, dass in jeder Schule erklärt wird, wie Müll richtig getrennt wird.`,
        modelUk: 'Переклад: На мою думку, сортування сміття слід зробити обов’язковим усюди. У моєму місті сміття сортують уже роками: папір, скло, пластик і органіку збирають у різні контейнери. Два роки тому запровадили ще й систему застави за пляшки, і відтоді на вулицях помітно менше сміття. Утім, у нас про це ще замало інформують. Багато людей просто не знають, що куди йде. Підсумовуючи, я запропонував би, щоб у кожній школі пояснювали, як правильно сортувати сміття.',
      },
    ],

    test: [
      { type: 'gap', q: 'Die Zeitung ___ jeden Morgen ___. (liefern, Passiv Präsens)', answers: ['wird', 'geliefert'] },
      { type: 'gap', q: 'Das Museum ___ 1965 ___. (eröffnen, Passiv Präteritum)', answers: ['wurde', 'eröffnet|eroeffnet'] },
      { type: 'gap', q: 'Der Antrag ___ schon ___ ___. (genehmigen, Passiv Perfekt)',
        answers: ['ist', 'genehmigt', 'worden'] },
      { type: 'gap', q: 'Die Fenster ___ jede Woche geputzt ___. (müssen, Passiv)', answers: ['müssen|muessen', 'werden'] },
      { type: 'gap', q: 'Der Roman wurde ___ Thomas Mann geschrieben.', answers: ['von'] },
      { type: 'gap', q: 'Das Dorf wurde ___ das Hochwasser zerstört.', answers: ['durch'] },
      { type: 'choice', q: 'Перетворіть на Passiv: «Man verkauft hier Tickets.»',
        options: ['Hier werden Tickets verkauft.', 'Hier wird Tickets verkauft.', 'Hier ist Tickets verkauft.', 'Hier werden Tickets verkaufen.'],
        answer: 0, explain: 'Tickets — множина, тому werden.' },
      { type: 'choice', q: 'Правильна форма Perfekt Passiv:',
        options: ['ist gebaut geworden', 'ist gebaut worden', 'hat gebaut worden', 'wurde gebaut worden'], answer: 1 },
      { type: 'choice', q: 'Zustandspassiv (результат):',
        options: ['Das Geschäft wird geschlossen.', 'Das Geschäft ist geschlossen.', 'Das Geschäft wurde geschlossen.', 'Das Geschäft muss geschlossen werden.'],
        answer: 1 },
      { type: 'order', q: 'Складіть речення.',
        words: ['In', 'der', 'Bibliothek', 'wird', 'nicht', 'gesprochen'],
        answer: 'In der Bibliothek wird nicht gesprochen' },
      { type: 'order', q: 'Складіть речення.',
        words: ['Diese', 'Formulare', 'müssen', 'bis', 'Montag', 'eingereicht', 'werden'],
        answer: 'Diese Formulare müssen bis Montag eingereicht werden' },
      { type: 'match', q: 'Доберіть переклад.',
        pairs: [['erfinden', 'винаходити'], ['die Vorschrift', 'припис'], ['einreichen', 'подавати'], ['zerstören', 'руйнувати'], ['die Untersuchung', 'дослідження']] },
      { type: 'multi', q: 'Позначте речення в Passiv.',
        options: ['Das Zimmer wird geputzt.', 'Er wird Arzt.', 'Die Tür wurde geöffnet.', 'Sie ist müde geworden.', 'Das Auto muss verkauft werden.'],
        answers: [0, 2, 4],
        explain: '«Er wird Arzt» і «Sie ist müde geworden» — це активне werden у значенні «ставати».' },
      { type: 'truefalse', q: 'Виконавця дії в пасиві вводять прийменником von + Dativ.', answer: true },
    ],
  },


  ...part2,
  ...part3,
  ],
};
