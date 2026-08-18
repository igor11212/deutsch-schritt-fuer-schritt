import { modules as part2 } from './b2-part2.js?v=20260819d';
import { modules as part3 } from './b2-part3.js?v=20260819d';

export default {
  intro:
    'Повний курс рівня B2: вісім модулів. Тут мова стає інструментом аргументації — ви вчитеся '  +
    'будувати позицію на конекторах, висловлювати оцінку модальними дієсловами, працювати з '  +
    'номінальним стилем офіційних текстів, читати довгі партиципні означення й свідомо '  +
    'перемикати реєстр між розмовним і формальним.',

  examNote: `
<p>Іспит B2 модульний: чотири частини складають і перескладають окремо. Загальна тривалість —
близько <strong>3 годин 10 хвилин</strong>. Прохідний бал у кожному модулі — <strong>60 %</strong>.</p>
<table>
<thead><tr><th>Модуль</th><th>Завдання</th><th>Час</th></tr></thead>
<tbody>
<tr><td><strong>Lesen</strong></td><td>5 частин: блог, статті думок, оголошення про роботу, науково-популярний текст, коментарі та рецензії; є завдання на пошук помилок у тексті.</td><td>65 хв</td></tr>
<tr><td><strong>Hören</strong></td><td>2 частини: розмова кількох осіб у побуті (один раз) і фахова доповідь або інтерв’ю (двічі).</td><td>40 хв</td></tr>
<tr><td><strong>Schreiben</strong></td><td>1) Аргументативний текст — форумний коментар чи лист до редакції (~150 слів). 2) Формальне повідомлення в робочому контексті (~100 слів).</td><td>75 хв</td></tr>
<tr><td><strong>Sprechen</strong></td><td>1) Монолог-презентація з власною позицією (~4 хв). 2) Дискусія з партнером: аргументувати, погоджуватись, заперечувати, дійти спільного рішення.</td><td>15 хв</td></tr>
</tbody></table>
<p><strong>Що відрізняє B2 від B1 в оцінюванні:</strong> екзаменатори шукають <em>структуру</em> —
чіткий вступ і висновок, абзаци, різноманітні конектори, і <em>дистанцію</em> — уміння викласти
чужу позицію, перш ніж заперечити їй.</p>`,


  modules: [

  /* ─────────────────────────────── МОДУЛЬ 1 ─────────────────────────────── */
  {
    id: 'm1',
    title: 'Konnektoren und Argumentation',
    titleUk: 'Конектори та побудова аргументу',
    can: [
      'протиставляти через obwohl, trotzdem, dennoch, allerdings',
      'виражати мету через damit і um … zu',
      'виражати наслідок через sodass, folglich, infolgedessen',
      'керувати порядком слів залежно від типу конектора',
      'вибудовувати аргументативний текст із тезою, аргументами й висновком',
    ],

    grammar: [
      {
        title: '1. Чотири класи конекторів — і чому це головне',
        html: `
<p>Німецький конектор визначає не лише зміст, а й <strong>порядок слів</strong>. Саме тут на B2
трапляється найбільше помилок, бо однакові за значенням слова поводяться по-різному.
Запам’ятайте чотири поведінки:</p>
<table>
<thead><tr><th>Клас</th><th>Позиція</th><th>Що з дієсловом</th><th>Приклади</th></tr></thead>
<tbody>
<tr><td><strong>1. Сурядні</strong><br>(Position 0)</td><td>перед 1-м місцем</td><td>нічого не змінює</td>
<td><em>und, aber, oder, denn, sondern</em></td></tr>
<tr><td><strong>2. Прислівникові</strong><br>(Position 1)</td><td>займають 1-ше місце</td><td>дієслово одразу після них</td>
<td><em>deshalb, trotzdem, dennoch, außerdem, allerdings, folglich, sonst</em></td></tr>
<tr><td><strong>3. Підрядні</strong></td><td>вводять підрядне</td><td>дієслово в кінець</td>
<td><em>weil, obwohl, damit, sodass, während, indem, falls</em></td></tr>
<tr><td><strong>4. Прийменникові</strong></td><td>+ іменник</td><td>потребують відмінка</td>
<td><em>wegen, trotz, aufgrund, dank, infolge</em> (+ Genitiv)</td></tr>
</tbody></table>
<p><strong>Одна думка — чотири способи:</strong></p>
<ul>
<li><em>Es regnete, <strong>aber</strong> wir sind spazieren gegangen.</em> (клас 1)</li>
<li><em>Es regnete. <strong>Trotzdem sind</strong> wir spazieren gegangen.</em> (клас 2)</li>
<li><em><strong>Obwohl</strong> es regnete, sind wir spazieren gegangen.</em> (клас 3)</li>
<li><em><strong>Trotz</strong> des Regens sind wir spazieren gegangen.</em> (клас 4)</li>
</ul>
<div class="callout"><strong>Улюблена помилка іспиту.</strong> <em>trotzdem</em> — прислівник
(«попри це»), а <em>obwohl</em> — сполучник («хоча»). Речення
«<s>Trotzdem es regnete, sind wir gegangen</s>» неправильне.</div>`,
      },
      {
        title: '2. Поступка: obwohl, trotzdem, zwar … aber',
        html: `
<table>
<thead><tr><th>Конструкція</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td><em>obwohl</em> + Nebensatz</td><td><em><strong>Obwohl</strong> er wenig verdient, ist er zufrieden.</em></td></tr>
<tr><td><em>trotzdem / dennoch</em> + дієслово</td><td><em>Er verdient wenig. <strong>Trotzdem ist</strong> er zufrieden.</em></td></tr>
<tr><td><em>zwar …, aber …</em></td><td><em>Er verdient <strong>zwar</strong> wenig, <strong>aber</strong> er ist zufrieden.</em></td></tr>
<tr><td><em>trotz</em> + Genitiv</td><td><em><strong>Trotz</strong> des niedrigen Gehalts ist er zufrieden.</em></td></tr>
<tr><td><em>allerdings / jedoch</em></td><td><em>Das Angebot ist gut. <strong>Allerdings ist</strong> es zu teuer.</em></td></tr>
</tbody></table>
<p><strong>zwar … aber</strong> — найкорисніша конструкція для іспитового есе: вона показує, що ви
бачите обидві сторони. <em>Zwar kostet das Auto mehr, aber es verbraucht weniger Benzin.</em></p>`,
      },
      {
        title: '3. Мета: damit чи um … zu',
        html: `
<p>Обидві конструкції означають «щоб». Різниця суто граматична:</p>
<table>
<thead><tr><th></th><th>Умова</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td><strong>um … zu</strong> + Infinitiv</td><td>підмет в обох частинах <u>однаковий</u></td>
<td><em><strong>Ich</strong> lerne Deutsch, <strong>um</strong> in Wien <strong>zu</strong> studieren.</em></td></tr>
<tr><td><strong>damit</strong> + Nebensatz</td><td>підмети <u>різні</u> (або однакові — теж можна)</td>
<td><em><strong>Ich</strong> spreche langsam, <strong>damit</strong> <strong>du</strong> mich verstehst.</em></td></tr>
</tbody></table>
<p><strong>Споріднені конструкції з zu:</strong></p>
<ul>
<li><em>ohne … zu</em> — не роблячи чогось: <em>Er ging, <strong>ohne</strong> etwas <strong>zu</strong> sagen.</em></li>
<li><em>(an)statt … zu</em> — замість того щоб: <em><strong>Statt</strong> zu arbeiten, spielt er.</em></li>
</ul>
<div class="callout callout--tip"><strong>Куди ставити zu у складеному дієслові?</strong>
Усередину, між префіксом і основою: <em>ein<strong>zu</strong>kaufen</em>, <em>an<strong>zu</strong>rufen</em>,
<em>auf<strong>zu</strong>stehen</em>.</div>`,
      },
      {
        title: '4. Наслідок і умова',
        html: `
<table>
<thead><tr><th>Значення</th><th>Засоби</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td><strong>наслідок</strong></td><td><em>sodass, folglich, infolgedessen, daher, somit</em></td>
<td><em>Es hat stark geschneit, <strong>sodass</strong> die Schulen geschlossen blieben.</em></td></tr>
<tr><td><strong>наслідок із оцінкою</strong></td><td><em>so … dass, zu … um … zu</em></td>
<td><em>Der Text war <strong>so</strong> schwer, <strong>dass</strong> niemand ihn verstand.</em><br>
<em>Er ist <strong>zu</strong> jung, <strong>um</strong> allein <strong>zu</strong> reisen.</em></td></tr>
<tr><td><strong>умова</strong></td><td><em>wenn, falls, sofern, andernfalls, sonst</em></td>
<td><em><strong>Falls</strong> es regnet, bleiben wir zu Hause.</em><br>
<em>Beeil dich, <strong>sonst</strong> verpassen wir den Zug.</em></td></tr>
<tr><td><strong>спосіб</strong></td><td><em>indem, dadurch dass</em></td>
<td><em>Man spart Energie, <strong>indem</strong> man weniger heizt.</em></td></tr>
<tr><td><strong>пропорція</strong></td><td><em>je … desto / umso</em></td>
<td><em><strong>Je</strong> mehr man liest, <strong>desto</strong> größer wird der Wortschatz.</em></td></tr>
</tbody></table>
<div class="callout"><strong>je … desto</strong> має особливий порядок слів: у першій частині
дієслово в кінці (це підрядне), у другій — одразу після <em>desto</em> + прикметник.
<em>Je länger ich hier <u>lebe</u>, desto besser <u>verstehe</u> ich die Kultur.</em></div>`,
      },
      {
        title: '5. Каркас аргументативного тексту',
        html: `
<p>На B2 у Schreiben Teil 1 оцінюють не оригінальність думки, а <strong>структуру</strong>.
Використайте цю схему — вона працює для будь-якої теми.</p>
<table>
<thead><tr><th>Частина</th><th>Що робити</th><th>Мовні засоби</th></tr></thead>
<tbody>
<tr><td><strong>Вступ</strong></td><td>назвати тему й чому вона актуальна</td>
<td><em>In letzter Zeit wird viel darüber diskutiert, ob …</em><br><em>Die Frage, ob …, beschäftigt viele Menschen.</em></td></tr>
<tr><td><strong>Позиція «за»</strong></td><td>1–2 аргументи + приклад</td>
<td><em>Einerseits …</em>, <em>Ein wichtiges Argument dafür ist, dass …</em>, <em>Zum Beispiel …</em></td></tr>
<tr><td><strong>Позиція «проти»</strong></td><td>контраргумент</td>
<td><em>Andererseits …</em>, <em>Dagegen spricht, dass …</em>, <em>Allerdings darf man nicht vergessen, dass …</em></td></tr>
<tr><td><strong>Власна думка</strong></td><td>чітко стати на бік</td>
<td><em>Meiner Ansicht nach …</em>, <em>Ich bin der Meinung, dass …</em>, <em>Aus meiner Sicht überwiegen die Vorteile.</em>
<span class="uk">На мою думку … · Я вважаю, що … · На мій погляд, переваги переважають.</span></td></tr>
<tr><td><strong>Висновок</strong></td><td>підсумок або пропозиція</td>
<td><em>Zusammenfassend lässt sich sagen, dass …</em>, <em>Abschließend würde ich vorschlagen, …</em>
<span class="uk">Підсумовуючи, можна сказати, що … · Наостанок я запропонував би …</span></td></tr>
</tbody></table>`,
      },
      {
        title: '6. Слова з прикладів цієї теми',
        html: `
<p>Конектори самі по собі — службові слова, але речення навколо них у прикладах вище
побудовані на цій лексиці.</p>
<table>
<thead><tr><th>Слово</th><th>Переклад</th><th>Як ужито в темі</th></tr></thead>
<tbody>
<tr><td><em>verdienen</em></td><td>заробляти</td><td><em>Obwohl er wenig verdient, ist er zufrieden.</em><span class="uk">Хоча він мало заробляє, він задоволений.</span></td></tr>
<tr><td><em>zufrieden</em></td><td>задоволений</td><td>там само</td></tr>
<tr><td><em>das Gehalt, ¨-er</em></td><td>зарплата</td><td><em>trotz des niedrigen Gehalts</em> — попри низьку зарплату</td></tr>
<tr><td><em>das Angebot, -e</em></td><td>пропозиція (товару, послуги)</td><td><em>Das Angebot ist gut. Allerdings ist es zu teuer.</em><span class="uk">Пропозиція хороша. Утім, вона надто дорога.</span></td></tr>
<tr><td><em>verbrauchen</em></td><td>споживати, витрачати</td><td><em>Es verbraucht weniger Benzin.</em><span class="uk">Воно споживає менше пального.</span></td></tr>
<tr><td><em>ausfallen</em></td><td>скасовуватися, не відбутися</td><td><em>…, sodass die Züge ausfielen.</em><span class="uk">…, так що потяги скасували.</span></td></tr>
<tr><td><em>heizen</em></td><td>опалювати</td><td><em>Man spart Energie, indem man weniger heizt.</em><span class="uk">Енергію заощаджують тим, що менше опалюють.</span></td></tr>
<tr><td><em>sparen</em></td><td>заощаджувати</td><td>там само</td></tr>
<tr><td><em>der Wortschatz</em></td><td>словниковий запас</td><td><em>Je mehr man liest, desto größer wird der Wortschatz.</em><span class="uk">Що більше читаєш, то більший словниковий запас.</span></td></tr>
<tr><td><em>verpassen</em></td><td>проґавити, запізнитися на</td><td><em>Beeil dich, sonst verpassen wir den Zug.</em><span class="uk">Поспіши, інакше ми запізнимося на потяг.</span></td></tr>
<tr><td><em>verschieben</em></td><td>переносити на інший час</td><td><em>Falls es regnet, verschieben wir den Ausflug.</em><span class="uk">Якщо буде дощ, ми перенесемо прогулянку.</span></td></tr>
<tr><td><em>der Ausflug, ¨-e</em></td><td>прогулянка, виїзд за місто</td><td>там само</td></tr>
</tbody></table>`,
      },
    ],
    exercises: [
      { type: 'choice', q: '___ es stark regnete, sind wir spazieren gegangen.',
        options: ['Trotzdem', 'Obwohl', 'Deshalb', 'Dennoch'], answer: 1 },
      { type: 'choice', q: 'Es regnete stark. ___ sind wir spazieren gegangen.',
        options: ['Obwohl', 'Weil', 'Trotzdem', 'Damit'], answer: 2 },
      { type: 'gap', q: '___ des schlechten Wetters blieb die Veranstaltung nicht aus. (trotz + Genitiv)',
        answers: ['Trotz'] },
      { type: 'gap', q: 'Ich lerne Deutsch, ___ in Wien ___ studieren. (um … zu)', answers: ['um', 'zu'] },
      { type: 'gap', q: 'Ich spreche langsam, ___ mich alle verstehen.', answers: ['damit'] },
      { type: 'choice', q: 'Який варіант правильний?',
        options: ['Ich spare Geld, um ich ein Auto kaufe.', 'Ich spare Geld, um ein Auto zu kaufen.', 'Ich spare Geld, damit ein Auto zu kaufen.', 'Ich spare Geld, um zu ein Auto kaufen.'],
        answer: 1 },
      { type: 'gap', q: 'Er ging weg, ___ etwas ___ sagen. (ohne … zu)', answers: ['ohne', 'zu'] },
      { type: 'gap', q: 'Es hat so stark geschneit, ___ die Züge ausfielen.', answers: ['dass'] },
      { type: 'gap', q: '___ mehr man liest, ___ größer wird der Wortschatz.', answers: ['Je', 'desto|umso'] },
      { type: 'gap', q: 'Man spart Energie, ___ man weniger heizt.', answers: ['indem'] },
      { type: 'gap', q: 'Beeil dich, ___ verpassen wir den Zug.', answers: ['sonst'] },
      { type: 'order', q: 'Складіть речення.',
        words: ['Obwohl', 'er', 'wenig', 'verdient', 'ist', 'er', 'sehr', 'zufrieden'],
        answer: 'Obwohl er wenig verdient ist er sehr zufrieden' },
      { type: 'order', q: 'Складіть речення з um … zu.',
        words: ['Sie', 'zieht', 'nach', 'Berlin', 'um', 'dort', 'zu', 'arbeiten'],
        answer: 'Sie zieht nach Berlin um dort zu arbeiten' },
      { type: 'multi', q: 'Позначте конектори, після яких дієслово стоїть у кінці підрядного.',
        options: ['obwohl', 'trotzdem', 'damit', 'deshalb', 'indem', 'sodass'],
        answers: [0, 2, 4, 5] },
      { type: 'match', q: 'Доберіть переклад.',
        pairs: [['einräumen', 'визнавати'], ['überwiegen', 'переважати'], ['bezweifeln', 'сумніватися'], ['die Auswirkung', 'наслідок'], ['berücksichtigen', 'враховувати']] },
    ],

    listening: [
      {
        exam: 'Goethe B2 · Hören Teil 2',
        title: 'Diskussion: Homeoffice — Fluch oder Segen?',
        instruction: 'Радіодискусія двох експертів. Простежте аргументи «за» і «проти».',
        lines: [
          { speaker: 'Moderatorin', de: 'Herr Lang, Sie behaupten, das Homeoffice habe die Arbeitswelt verbessert. Woran machen Sie das fest?', uk: 'Пане Ланґ, Ви стверджуєте, що робота з дому покращила світ праці. На чому це ґрунтується?' },
          { speaker: 'Herr Lang', de: 'Vor allem an der Zeitersparnis. Wer nicht pendelt, gewinnt täglich ein bis zwei Stunden, sodass mehr Zeit für Familie und Erholung bleibt.', uk: 'Насамперед на економії часу. Хто не їздить на роботу, щодня виграє одну-дві години, тож залишається більше часу на родину і відпочинок.' },
          { speaker: 'Frau Dr. Öztürk', de: 'Das stimmt zwar, aber unsere Studien zeigen etwas anderes: Viele arbeiten zu Hause länger, nicht kürzer.', uk: 'Це справді так, але наші дослідження показують інше: багато людей удома працюють довше, а не коротше.' },
          { speaker: 'Frau Dr. Öztürk', de: 'Obwohl die Wege wegfallen, verschwimmt die Grenze zwischen Beruf und Privatleben. Folglich steigt der Druck.', uk: 'Хоча дорога зникає, межа між роботою та приватним життям розмивається. Отже, тиск зростає.' },
          { speaker: 'Herr Lang', de: 'Einverstanden. Allerdings liegt das weniger am Homeoffice selbst als an fehlenden Regeln.', uk: 'Погоджуюся. Утім, річ не так у самій роботі з дому, як у відсутності правил.' },
          { speaker: 'Herr Lang', de: 'Firmen müssten klare Zeiten festlegen, damit die Beschäftigten abschalten können.', uk: 'Фірми мали б встановити чіткі години, щоб працівники могли відключатися.' },
          { speaker: 'Frau Dr. Öztürk', de: 'Da widerspreche ich nicht. Je klarer die Vereinbarungen sind, desto zufriedener sind die Teams.', uk: 'Тут я не заперечую. Що чіткіші домовленості, то задоволеніші команди.' },
          { speaker: 'Moderatorin', de: 'Zusammenfassend also: Homeoffice ja, aber nur mit verbindlichen Regeln.', uk: 'Отже, підсумовуючи: робота з дому — так, але лише з обов’язковими правилами.' },
        ],
        tasks: [
          { type: 'choice', q: 'Welches Hauptargument nennt Herr Lang für das Homeoffice?',
            options: ['Höheres Gehalt', 'Zeitersparnis durch weniger Pendeln', 'Bessere Technik', 'Mehr Kontakt zu Kollegen'], answer: 1 },
          { type: 'choice', q: 'Was zeigen die Studien von Frau Dr. Öztürk?',
            options: ['Menschen arbeiten zu Hause kürzer.', 'Menschen arbeiten zu Hause länger.', 'Menschen sind zu Hause fauler.', 'Es gibt keinen Unterschied.'], answer: 1 },
          { type: 'gap', q: 'Frau Dr. Öztürk sagt: «___ die Wege wegfallen, verschwimmt die Grenze.»', answers: ['Obwohl'] },
          { type: 'gap', q: 'Herr Lang fordert klare Zeiten, ___ die Beschäftigten abschalten können.', answers: ['damit'] },
          { type: 'truefalse', q: 'Am Ende lehnt Frau Dr. Öztürk das Homeoffice vollständig ab.', answer: false,
            explain: 'Вона погоджується: «Je klarer die Vereinbarungen sind, desto zufriedener sind die Teams.»' },
          { type: 'choice', q: 'Wie lautet das Fazit der Moderatorin?',
            options: ['Homeoffice sollte verboten werden.', 'Homeoffice ja, aber mit verbindlichen Regeln.', 'Homeoffice ist nur für Führungskräfte geeignet.', 'Es braucht mehr Studien.'], answer: 1 },
        ],
      },
    ],

    writing: [
      {
        exam: 'Goethe B2 · Schreiben Teil 1',
        title: 'Leserbrief: Sollten Smartphones an Schulen verboten werden?',
        situation: 'У газеті вийшла стаття про заборону смартфонів у школах. Напишіть лист до редакції, у якому викладете свою позицію. <strong>150 слів</strong>. Обов’язково: щонайменше чотири різні конектори з різних класів.',
        points: [
          'Nehmen Sie Bezug auf den Artikel.',
          'Nennen Sie ein Argument dafür und ein Argument dagegen.',
          'Bringen Sie ein Beispiel aus Ihrer Erfahrung.',
          'Formulieren Sie ein klares Fazit mit einem Vorschlag.',
        ],
        minWords: 150,
        phrases: [
          { de: 'Mit großem Interesse habe ich Ihren Artikel vom 3. Mai gelesen.', uk: 'З великим інтересом я прочитав Вашу статтю від 3 травня.' },
          { de: 'Einerseits spricht dafür, dass …', uk: 'З одного боку, на користь цього свідчить те, що …' },
          { de: 'Andererseits darf man nicht vergessen, dass …', uk: 'З іншого боку, не варто забувати, що …' },
          { de: 'Zwar verstehe ich die Sorge der Lehrkräfte, aber …', uk: 'Хоч я і розумію занепокоєння вчителів, але …' },
          { de: 'Aus eigener Erfahrung kann ich sagen, dass …', uk: 'З власного досвіду можу сказати, що …' },
          { de: 'Je früher Kinder lernen, verantwortungsvoll mit Medien umzugehen, desto besser.', uk: 'Що раніше діти вчаться відповідально поводитися з медіа, то краще.' },
          { de: 'Zusammenfassend lässt sich sagen, dass …', uk: 'Підсумовуючи, можна сказати, що …' },
        ],
        checklist: [
          'Є конектори щонайменше трьох різних класів (сурядний, прислівниковий, підрядний)?',
          'Після trotzdem / deshalb / allerdings дієслово стоїть одразу після конектора?',
          'Після obwohl / damit / sodass дієслово стоїть у кінці?',
          'Текст поділено на абзаци: вступ → «за» → «проти» → висновок?',
          'Обсяг близько 150 слів, формальне звертання і підпис?',
        ],
        model:
`Sehr geehrte Damen und Herren,

mit großem Interesse habe ich Ihren Artikel «Handyverbot an Schulen» vom 3. Mai gelesen. Da ich selbst
zwei schulpflichtige Kinder habe, beschäftigt mich das Thema sehr.

Einerseits spricht für ein Verbot, dass Smartphones im Unterricht stark ablenken. Mehrere Studien zeigen,
dass die Konzentration deutlich sinkt, sobald das Gerät auf dem Tisch liegt. Folglich leiden die Leistungen.

Andererseits darf man nicht vergessen, dass Jugendliche den Umgang mit digitalen Medien lernen müssen.
Zwar verstehe ich die Sorge der Lehrkräfte, aber ein generelles Verbot verschiebt das Problem nur nach Hause.
Aus eigener Erfahrung kann ich sagen, dass mein Sohn im Unterricht sinnvoll mit dem Handy recherchiert hat.

Hinzu kommt, dass ein Verbot kaum kontrollierbar wäre. Die Lehrkräfte müssten ständig aufpassen, statt zu
unterrichten, und genau diese Zeit fehlt am Ende den Schülerinnen und Schülern.

Zusammenfassend lässt sich sagen, dass ein vollständiges Verbot zu weit geht. Sinnvoller wären klare Regeln,
die gemeinsam mit den Klassen erarbeitet werden: Handys in den Pausen aus, im Unterricht nur nach
Aufforderung der Lehrkraft. Je früher Kinder verantwortungsvoll mit Medien umgehen lernen, desto besser
sind sie später auf ein Studium und den Beruf vorbereitet.

Mit freundlichen Grüßen
Iryna Kowal`,
        modelUk: 'Коротко: у листі є вступ із покликанням на статтю, аргумент «за» (смартфони відволікають, страждає успішність), аргумент «проти» (молодь має вчитися користуватися медіа), приклад із власного досвіду і висновок із конкретною пропозицією — не забороняти повністю, а встановити чіткі правила.',
      },
    ],

    test: [
      { type: 'choice', q: '___ er sehr müde war, arbeitete er weiter.',
        options: ['Trotzdem', 'Obwohl', 'Dennoch', 'Allerdings'], answer: 1 },
      { type: 'choice', q: 'Er war sehr müde. ___ arbeitete er weiter.',
        options: ['Obwohl', 'Dennoch', 'Damit', 'Sodass'], answer: 1 },
      { type: 'gap', q: 'Sie hat viel geübt, ___ die Prüfung ___ bestehen.', answers: ['um', 'zu'] },
      { type: 'gap', q: 'Ich erkläre es noch einmal, ___ es alle verstehen.', answers: ['damit'] },
      { type: 'gap', q: 'Der Zug hatte Verspätung, ___ wir den Anschluss verpassten.', answers: ['sodass'] },
      { type: 'gap', q: '___ länger man wartet, ___ teurer wird das Ticket.', answers: ['Je', 'desto|umso'] },
      { type: 'gap', q: 'Man verbessert seine Aussprache, ___ man laut liest.', answers: ['indem'] },
      { type: 'gap', q: '___ des Regens fand das Konzert im Freien statt. (trotz)', answers: ['Trotz'] },
      { type: 'choice', q: 'Яке речення правильне?',
        options: ['Er ging, ohne dass er zu grüßen.', 'Er ging, ohne zu grüßen.', 'Er ging, ohne grüßen zu.', 'Er ging, ohne er grüßte.'],
        answer: 1 },
      { type: 'choice', q: 'Правильне вживання zu у складеному дієслові:',
        options: ['Ich habe vor, zu einkaufen.', 'Ich habe vor, einkaufen zu.', 'Ich habe vor, einzukaufen.', 'Ich habe vor, ein zu kaufen.'],
        answer: 2 },
      { type: 'order', q: 'Складіть речення.',
        words: ['Zwar', 'ist', 'die', 'Wohnung', 'teuer', 'aber', 'die', 'Lage', 'ist', 'perfekt'],
        answer: 'Zwar ist die Wohnung teuer aber die Lage ist perfekt' },
      { type: 'order', q: 'Складіть речення.',
        words: ['Falls', 'es', 'morgen', 'regnet', 'verschieben', 'wir', 'den', 'Ausflug'],
        answer: 'Falls es morgen regnet verschieben wir den Ausflug' },
      { type: 'multi', q: 'Позначте прислівникові конектори (займають 1-ше місце, дієслово одразу після них).',
        options: ['deshalb', 'weil', 'trotzdem', 'obwohl', 'außerdem', 'damit'],
        answers: [0, 2, 4] },
      { type: 'match', q: 'Доберіть переклад.',
        pairs: [['zustimmen', 'погоджуватися'], ['widersprechen', 'заперечувати'], ['der Nachteil', 'недолік'], ['die Voraussetzung', 'передумова'], ['der Fachkräftemangel', 'брак кадрів']] },
      { type: 'truefalse', q: 'Конструкцію um … zu можна вживати, коли підмети головного і підрядного різні.', answer: false,
        explain: 'Тоді потрібно damit.' },
    ],
  },

  /* ─────────────────────────────── МОДУЛЬ 2 ─────────────────────────────── */
  {
    id: 'm2',
    title: 'Subjektive Modalverben und Passiversatz',
    titleUk: 'Модальні дієслова оцінки та замінники пасиву',
    can: [
      'виражати ступінь упевненості через müssen, dürfte, könnte, kann nicht',
      'передавати чужу інформацію через sollen і wollen',
      'заміняти пасив конструкціями sein + zu, sich lassen, -bar',
      'розпізнавати ці засоби в текстах преси й науки',
      'писати нейтрально-офіційним стилем',
    ],

    grammar: [
      {
        title: '1. Об’єктивне і суб’єктивне значення',
        html: `
<p>Кожне модальне дієслово має <strong>два життя</strong>. Об’єктивне значення ви знаєте з A1:
<em>Er muss arbeiten</em> — він змушений працювати. Суб’єктивне значення описує не дію,
а <strong>вашу оцінку ймовірності</strong>: <em>Er muss krank sein</em> — «він, певно, хворий».</p>
<table>
<thead><tr><th>Дієслово</th><th>Ступінь упевненості</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td><strong>müssen</strong></td><td>≈ 95 % — майже певно</td><td><em>Er <strong>muss</strong> zu Hause sein, das Licht brennt.</em></td></tr>
<tr><td><strong>dürfte</strong></td><td>≈ 75 % — імовірно</td><td><em>Das <strong>dürfte</strong> stimmen.</em></td></tr>
<tr><td><strong>können / könnte</strong></td><td>≈ 50 % — можливо</td><td><em>Sie <strong>könnte</strong> im Büro sein.</em></td></tr>
<tr><td><strong>mögen</strong></td><td>припущення, книжно</td><td><em>Das <strong>mag</strong> stimmen, aber …</em></td></tr>
<tr><td><strong>kann nicht</strong></td><td>≈ 0 % — виключено</td><td><em>Das <strong>kann nicht</strong> wahr sein.</em></td></tr>
</tbody></table>
<div class="callout callout--tip"><strong>Як розрізнити?</strong> Дивіться на інфінітив.
Якщо це дія, яку виконує підмет (<em>arbeiten, gehen</em>) — значення об’єктивне.
Якщо це стан або <em>sein</em> / Perfekt-інфінітив (<em>krank sein, gegangen sein</em>) — значення
суб’єктивне.</div>
<p><strong>Про минуле:</strong> модальне + Partizip II + <em>haben / sein</em>:</p>
<ul>
<li><em>Er <strong>muss</strong> den Zug verpasst <strong>haben</strong>.</em> — Він, певно, спізнився на потяг.</li>
<li><em>Sie <strong>dürfte</strong> schon gegangen <strong>sein</strong>.</em> — Вона, ймовірно, вже пішла.</li>
</ul>`,
      },
      {
        title: '2. sollen і wollen: чужі слова',
        html: `
<p>Ці два дієслова в суб’єктивному значенні передають <strong>джерело</strong> інформації —
дуже частий засіб у пресі.</p>
<table>
<thead><tr><th>Дієслово</th><th>Значення</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td><strong>sollen</strong></td><td>«кажуть, що…» — чутка, чуже твердження</td>
<td><em>Der Minister <strong>soll</strong> zurückgetreten sein.</em> — Кажуть, міністр пішов у відставку.</td></tr>
<tr><td><strong>wollen</strong></td><td>«стверджує, що сам…» — заява самого суб’єкта, часто з сумнівом</td>
<td><em>Er <strong>will</strong> nichts gewusst haben.</em> — Він стверджує, що нічого не знав.</td></tr>
</tbody></table>
<p>Порівняйте нейтральні відповідники: <em>Man sagt, dass der Minister zurückgetreten ist.</em> /
<em>Er behauptet, nichts gewusst zu haben.</em> Модальна форма коротша й характерна для газетного стилю.</p>`,
      },
      {
        title: '3. Замінники пасиву',
        html: `
<p>Пасив — не єдиний спосіб прибрати виконавця. На B2 очікують, що ви володієте кількома
рівноцінними конструкціями й не повторюєте <em>werden</em> у кожному реченні.</p>
<table>
<thead><tr><th>Конструкція</th><th>Приклад</th><th>Дорівнює</th></tr></thead>
<tbody>
<tr><td><strong>sein + zu + Infinitiv</strong></td><td><em>Das Formular <strong>ist</strong> vollständig <strong>auszufüllen</strong>.</em></td>
<td>muss ausgefüllt werden (необхідність)</td></tr>
<tr><td><strong>sein + zu + Infinitiv</strong></td><td><em>Der Text <strong>ist</strong> leicht <strong>zu verstehen</strong>.</em></td>
<td>kann verstanden werden (можливість)</td></tr>
<tr><td><strong>sich lassen + Infinitiv</strong></td><td><em>Das Problem <strong>lässt sich</strong> lösen.</em></td>
<td>kann gelöst werden</td></tr>
<tr><td><strong>-bar</strong></td><td><em>Das Wasser ist <strong>trinkbar</strong>.</em></td><td>kann getrunken werden</td></tr>
<tr><td><strong>-lich</strong></td><td><em>Der Termin ist <strong>verschieblich</strong>.</em></td><td>kann verschoben werden</td></tr>
<tr><td><strong>man + Aktiv</strong></td><td><em><strong>Man</strong> muss das Formular ausfüllen.</em></td><td>розмовний варіант</td></tr>
<tr><td><strong>es gibt … zu + Inf.</strong></td><td><em>Hier <strong>gibt es</strong> viel <strong>zu tun</strong>.</em></td><td>muss viel getan werden</td></tr>
</tbody></table>
<div class="callout"><strong>Необхідність чи можливість?</strong> У конструкції <em>sein + zu</em>
значення підказує контекст і прислівник: <em>leicht / schwer / kaum</em> вказують на можливість,
а строгий офіційний контекст — на необхідність.</div>`,
      },
      {
        title: '4. Стиль офіційного тексту',
        html: `
<p>Німецька офіційна мова уникає особистих форм. Порівняйте одну й ту саму думку в трьох регістрах:</p>
<table>
<thead><tr><th>Регістр</th><th>Формулювання</th></tr></thead>
<tbody>
<tr><td>розмовний</td><td><em>Du musst das Formular bis Freitag abgeben.</em></td></tr>
<tr><td>нейтральний</td><td><em>Das Formular muss bis Freitag abgegeben werden.</em></td></tr>
<tr><td>офіційний</td><td><em>Das Formular <strong>ist</strong> bis Freitag <strong>abzugeben</strong>.</em></td></tr>
</tbody></table>
<p><strong>Типові маркери офіційного стилю:</strong> номіналізація (<em>die Abgabe, die Einreichung</em>),
пасив, <em>sein + zu</em>, прийменники з Genitiv (<em>gemäß, aufgrund, hinsichtlich, im Rahmen</em>),
відсутність особових займенників.</p>`,
      },
      {
        title: '5. Слова з прикладів цієї теми',
        html: `
<p>Ці конструкції живуть у мові преси й офіційних документів — звідси лексика прикладів вище.</p>
<table>
<thead><tr><th>Слово</th><th>Переклад</th><th>Як ужито в темі</th></tr></thead>
<tbody>
<tr><td><em>brennen</em></td><td>горіти; світитися</td><td><em>Er muss zu Hause sein, das Licht brennt.</em><span class="uk">Він, певно, вдома — світло горить.</span></td></tr>
<tr><td><em>stimmen</em></td><td>бути правдою, відповідати дійсності</td><td><em>Das dürfte stimmen.</em><span class="uk">Це, ймовірно, так.</span></td></tr>
<tr><td><em>zurücktreten</em></td><td>іти у відставку</td><td><em>Der Minister soll zurückgetreten sein.</em><span class="uk">Кажуть, міністр пішов у відставку.</span></td></tr>
<tr><td><em>der Unfall, ¨-e</em></td><td>аварія, нещасний випадок</td><td><em>Er will den Unfall nicht gesehen haben.</em><span class="uk">Він стверджує, що не бачив аварії.</span></td></tr>
<tr><td><em>einreichen</em></td><td>подавати (документи)</td><td><em>Die Unterlagen sind bis Montag einzureichen.</em><span class="uk">Документи слід подати до понеділка.</span></td></tr>
<tr><td><em>die Unterlagen</em> (мн.)</td><td>документи, матеріали</td><td>там само</td></tr>
<tr><td><em>ausfüllen</em></td><td>заповнювати</td><td><em>Das Formular ist auszufüllen.</em><span class="uk">Формуляр слід заповнити.</span></td></tr>
<tr><td><em>vermeiden</em></td><td>уникати</td><td><em>Dieser Fehler lässt sich leicht vermeiden.</em><span class="uk">Цієї помилки легко уникнути.</span></td></tr>
<tr><td><em>abgeben</em></td><td>здавати, віддавати</td><td><em>Das Formular ist bis Freitag abzugeben.</em><span class="uk">Формуляр слід здати до п’ятниці.</span></td></tr>
<tr><td><em>die Verzögerung, -en</em></td><td>затримка</td><td><em>von Verzögerungen nichts gewusst haben</em><span class="uk">нібито нічого не знати про затримки</span></td></tr>
<tr><td><em>unglaubwürdig</em></td><td>непереконливий, сумнівний</td><td>оцінка чужої заяви</td></tr>
<tr><td><em>trinkbar</em></td><td>придатний для пиття</td><td><em>Das Wasser ist trinkbar.</em><span class="uk">Воду можна пити.</span></td></tr>
</tbody></table>`,
      },
    ],
    exercises: [
      { type: 'choice', q: 'Das Licht brennt — er ___ zu Hause sein. (майже певно)',
        options: ['kann', 'darf', 'muss', 'will'], answer: 2 },
      { type: 'choice', q: 'Das ___ stimmen, aber sicher bin ich nicht. (≈ 75 %)',
        options: ['muss', 'dürfte', 'kann nicht', 'soll'], answer: 1 },
      { type: 'choice', q: 'Das ___ nicht wahr sein! (виключено)',
        options: ['muss', 'darf', 'kann', 'soll'], answer: 2 },
      { type: 'choice', q: '«Кажуть, міністр пішов у відставку» —',
        options: ['Der Minister will zurückgetreten sein.', 'Der Minister soll zurückgetreten sein.', 'Der Minister muss zurücktreten.', 'Der Minister darf zurücktreten.'],
        answer: 1 },
      { type: 'choice', q: '«Він стверджує, що нічого не знав» —',
        options: ['Er soll nichts gewusst haben.', 'Er will nichts gewusst haben.', 'Er muss nichts gewusst haben.', 'Er kann nichts wissen.'],
        answer: 1 },
      { type: 'gap', q: 'Sie ___ den Zug verpasst haben — sie ist noch nicht da. (припущення, ≈95 %)',
        answers: ['muss'] },
      { type: 'gap', q: 'Das Formular ist bis Freitag ___. (einreichen → sein + zu)',
        answers: ['einzureichen'] },
      { type: 'gap', q: 'Das Problem lässt ___ leicht lösen.', answers: ['sich'] },
      { type: 'gap', q: 'Der Text ist gut ___ ___. (verstehen → sein + zu)', answers: ['zu', 'verstehen'] },
      { type: 'choice', q: 'Перетворіть: «Das kann repariert werden.»',
        options: ['Das ist reparierbar.', 'Das ist zu reparieren gewesen.', 'Das wird repariert.', 'Das soll repariert sein.'],
        answer: 0 },
      { type: 'choice', q: 'Найофіційніший варіант:',
        options: ['Du musst den Antrag abgeben.', 'Man muss den Antrag abgeben.', 'Der Antrag muss abgegeben werden.', 'Der Antrag ist abzugeben.'],
        answer: 3 },
      { type: 'order', q: 'Складіть речення.',
        words: ['Die', 'Unterlagen', 'sind', 'bis', 'Montag', 'einzureichen'],
        answer: 'Die Unterlagen sind bis Montag einzureichen' },
      { type: 'order', q: 'Складіть речення.',
        words: ['Er', 'muss', 'den', 'Termin', 'vergessen', 'haben'],
        answer: 'Er muss den Termin vergessen haben' },
      { type: 'match', q: 'Доберіть значення.',
        pairs: [['muss … sein', 'майже певно'], ['dürfte … sein', 'імовірно'], ['könnte … sein', 'можливо'], ['kann nicht … sein', 'виключено'], ['soll … sein', 'кажуть, що']],
        speak: false },
      { type: 'multi', q: 'Позначте замінники пасиву.',
        options: ['sein + zu + Infinitiv', 'werden + Partizip II', 'sich lassen + Infinitiv', 'Adjektiv auf -bar', 'haben + Partizip II'],
        answers: [0, 2, 3] },
    ],

    listening: [
      {
        exam: 'Goethe B2 · Hören Teil 2',
        title: 'Nachrichtenmeldung und Kommentar',
        instruction: 'Новинний блок і коментар редактора. Зверніть увагу на модальні дієслова оцінки.',
        lines: [
          { de: 'Guten Abend. Nach Angaben der Stadtverwaltung soll die neue Straßenbahnlinie bereits im Herbst eröffnet werden.', uk: 'Доброго вечора. За даними міської адміністрації, нова трамвайна лінія має відкритися вже восени.' },
          { de: 'Die Bauarbeiten sollen zu neunzig Prozent abgeschlossen sein.', uk: 'Будівельні роботи, як повідомляють, завершені на дев’яносто відсотків.' },
          { de: 'Der zuständige Stadtrat will von Verzögerungen nichts gewusst haben.', uk: 'Відповідальний член міської ради стверджує, що нічого не знав про затримки.' },
          { de: 'Kritiker halten das für unglaubwürdig: Die Probleme müssen seit Monaten bekannt gewesen sein.', uk: 'Критики вважають це непереконливим: проблеми, певно, були відомі вже місяцями.' },
          { de: 'Die Gesamtkosten dürften nun bei etwa vierhundert Millionen Euro liegen.', uk: 'Загальні витрати, ймовірно, становитимуть близько чотирьохсот мільйонів євро.' },
          { de: 'Ob der Termin zu halten ist, lässt sich derzeit nicht seriös beantworten.', uk: 'Чи вдасться дотриматися терміну, наразі серйозно відповісти неможливо.' },
          { de: 'Fest steht: Die Anwohner sind über den Baulärm zu informieren, das schreibt die Verordnung vor.', uk: 'Точно відомо: мешканців потрібно інформувати про будівельний шум — цього вимагає постанова.' },
        ],
        tasks: [
          { type: 'choice', q: 'Wann soll die Linie eröffnet werden?',
            options: ['Im Sommer', 'Im Herbst', 'Im Winter', 'Nächstes Jahr'], answer: 1 },
          { type: 'choice', q: 'Was bedeutet «Der Stadtrat will nichts gewusst haben»?',
            options: ['Er wollte es nicht wissen.', 'Er behauptet, nichts gewusst zu haben.', 'Man sagt, er wusste nichts.', 'Er muss es gewusst haben.'],
            answer: 1 },
          { type: 'choice', q: 'Was sagen die Kritiker?',
            options: ['Die Probleme waren sicher schon lange bekannt.', 'Die Kosten sind zu niedrig.', 'Die Linie wird nie gebaut.', 'Der Stadtrat hat recht.'],
            answer: 0, explain: '«Die Probleme müssen seit Monaten bekannt gewesen sein» — müssen тут = майже впевнене припущення.' },
          { type: 'gap', q: 'Die Gesamtkosten ___ bei etwa 400 Millionen Euro liegen. (імовірність ≈75 %)',
            answers: ['dürften|duerften'] },
          { type: 'gap', q: 'Die Anwohner sind über den Baulärm ___ ___. (informieren → sein + zu)',
            answers: ['zu', 'informieren'] },
          { type: 'truefalse', q: 'Der Sprecher ist sicher, dass der Termin gehalten wird.', answer: false },
        ],
      },
    ],

    writing: [
      {
        exam: 'Goethe B2 · Schreiben Teil 2',
        title: 'Formelle Mitteilung im Beruf',
        situation: 'Ви відповідаєте за внутрішню комунікацію у фірмі. З 1 вересня змінюються правила замовлення відпустки. Напишіть повідомлення для всіх працівників. <strong>100 слів</strong>, офіційний стиль.',
        points: [
          'Was ändert sich und ab wann?',
          'Was müssen die Mitarbeitenden konkret tun?',
          'Bis wann und wo einreichen?',
          'An wen kann man sich bei Fragen wenden?',
        ],
        minWords: 100,
        phrases: [
          { de: 'Hiermit möchten wir Sie darüber informieren, dass …', uk: 'Цим повідомляємо Вас про те, що …' },
          { de: 'Ab dem 1. September tritt eine neue Regelung in Kraft.', uk: 'З 1 вересня набуває чинності нове правило.' },
          { de: 'Urlaubsanträge sind künftig ausschließlich online einzureichen.', uk: 'Заяви на відпустку надалі слід подавати виключно онлайн.' },
          { de: 'Der Antrag ist spätestens vier Wochen vorher zu stellen.', uk: 'Заяву слід подати щонайпізніше за чотири тижні.' },
          { de: 'Anträge in Papierform können nicht mehr bearbeitet werden.', uk: 'Паперові заяви більше не опрацьовуються.' },
          { de: 'Bei Rückfragen wenden Sie sich bitte an die Personalabteilung.', uk: 'У разі запитань звертайтеся до відділу кадрів.' },
          { de: 'Wir danken Ihnen für Ihr Verständnis.', uk: 'Дякуємо за розуміння.' },
        ],
        checklist: [
          'Є щонайменше дві конструкції sein + zu + Infinitiv?',
          'Ужито пасив або його замінник замість «Sie müssen …»?',
          'Немає розмовних зворотів і особистих оцінок?',
          'Усі чотири пункти розкрито, структура — абзацами?',
          'Обсяг близько 100 слів?',
        ],
        model:
`Sehr geehrte Kolleginnen und Kollegen,

hiermit möchten wir Sie darüber informieren, dass ab dem 1. September eine neue Regelung für die
Urlaubsbeantragung in Kraft tritt.

Urlaubsanträge sind künftig ausschließlich über das Personalportal einzureichen. Anträge in Papierform
können ab diesem Zeitpunkt nicht mehr bearbeitet werden. Der Antrag ist spätestens vier Wochen vor dem
gewünschten Termin zu stellen; kürzere Fristen lassen sich nur in begründeten Ausnahmefällen berücksichtigen.

Die Genehmigung erfolgt in der Regel innerhalb von fünf Arbeitstagen. Eine gesonderte Bestätigung per
E-Mail wird automatisch versendet.

Bei Rückfragen wenden Sie sich bitte an die Personalabteilung, Frau Schneider, Durchwahl 214.

Wir danken Ihnen für Ihr Verständnis.

Mit freundlichen Grüßen
Interne Kommunikation`,
        modelUk: 'Коротко: повідомлення в офіційному стилі — без особистих займенників у ролі виконавця, з двома конструкціями sein + zu (einzureichen, zu stellen), із замінником пасиву lassen sich berücksichtigen і з чіткою структурою: що змінюється → що робити → терміни → контакт.',
      },
    ],

    test: [
      { type: 'choice', q: 'Sie antwortet nicht — sie ___ noch im Meeting sein. (можливо)',
        options: ['muss', 'könnte', 'kann nicht', 'will'], answer: 1 },
      { type: 'choice', q: 'Er hat drei Wochen gelernt — er ___ die Prüfung bestanden haben. (майже певно)',
        options: ['muss', 'darf', 'soll', 'will'], answer: 0 },
      { type: 'choice', q: 'Das ___ nicht stimmen, ich war selbst dabei.',
        options: ['muss', 'darf', 'kann', 'soll'], answer: 2 },
      { type: 'choice', q: 'Angeblich ist der Vertrag schon unterschrieben. Модальний відповідник:',
        options: ['Der Vertrag muss unterschrieben sein.', 'Der Vertrag soll unterschrieben sein.', 'Der Vertrag will unterschrieben sein.', 'Der Vertrag kann unterschrieben sein.'],
        answer: 1 },
      { type: 'gap', q: 'Die Rechnung ist innerhalb von 14 Tagen ___. (bezahlen → sein + zu)',
        answers: ['zu bezahlen'] },
      { type: 'gap', q: 'Dieser Fehler lässt ___ leicht vermeiden.', answers: ['sich'] },
      { type: 'gap', q: 'Das Wasser ist ___. (trinken → -bar)', answers: ['trinkbar'] },
      { type: 'choice', q: '«Das muss noch erledigt werden» офіційно:',
        options: ['Das ist noch zu erledigen.', 'Das lässt sich erledigen.', 'Das ist erledigbar.', 'Das soll erledigt sein.'],
        answer: 0 },
      { type: 'choice', q: 'Що означає «Er will den Unfall nicht gesehen haben»?',
        options: ['Він не хотів бачити аварію.', 'Він стверджує, що не бачив аварії.', 'Кажуть, він не бачив аварії.', 'Він, певно, не бачив аварії.'],
        answer: 1 },
      { type: 'order', q: 'Складіть речення.',
        words: ['Die', 'Unterlagen', 'sind', 'vollständig', 'auszufüllen'],
        answer: 'Die Unterlagen sind vollständig auszufüllen' },
      { type: 'order', q: 'Складіть речення.',
        words: ['Sie', 'dürfte', 'inzwischen', 'angekommen', 'sein'],
        answer: 'Sie dürfte inzwischen angekommen sein' },
      { type: 'match', q: 'Доберіть переклад.',
        pairs: [['gewährleisten', 'забезпечувати'], ['erfordern', 'вимагати'], ['der Nachweis', 'підтвердження'], ['in Kraft treten', 'набувати чинності'], ['angeblich', 'нібито']] },
      { type: 'multi', q: 'Позначте речення із суб’єктивним значенням модального дієслова.',
        options: ['Er muss jeden Tag arbeiten.', 'Er muss krank sein.', 'Sie soll sehr begabt sein.', 'Du sollst pünktlich kommen.', 'Das kann nicht wahr sein.'],
        answers: [1, 2, 4] },
      { type: 'truefalse', q: '«sein + zu + Infinitiv» може означати і необхідність, і можливість.', answer: true },
    ],
  },


  ...part2,
  ...part3,
  ],
};
