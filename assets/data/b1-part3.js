/* B1, модулі 6–8: парні сполучники, Futur I і припущення,
   дієприкметники як прикметники разом із n-Deklination. */

const m6 = {
  id: 'm6',
  title: 'Zweiteilige Konnektoren',
  titleUk: 'Парні сполучники: entweder … oder, sowohl … als auch, je … desto',
  can: [
    'уживати парні сполучники для протиставлення й переліку',
    'правильно ставити слова в конструкції je … desto',
    'відрізняти сполучники нульової позиції від тих, що змінюють порядок слів',
    'заперечувати подвійно через weder … noch',
    'будувати аргумент через zwar … aber і nicht nur … sondern auch',
  ],

  grammar: [
    {
      title: '1. Шість пар, які потрібні на B1',
      html: `
<p>Парний сполучник складається з двох частин, розкиданих по реченню.
Вони роблять текст помітно дорослішим — і саме тому їх цінують в оцінюванні.</p>
<table>
<thead><tr><th>Пара</th><th>Переклад</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td><strong>entweder … oder</strong></td><td><strong>або … або</strong> (вибір із двох)</td>
<td><em>Entweder fahren wir mit dem Zug oder wir nehmen das Auto.</em>
<span class="uk">Або ми їдемо потягом, або беремо машину.</span></td></tr>
<tr><td><strong>sowohl … als auch</strong></td><td><strong>як … так і</strong> (обидва)</td>
<td><em>Sie spricht sowohl Deutsch als auch Französisch.</em>
<span class="uk">Вона говорить як німецькою, так і французькою.</span></td></tr>
<tr><td><strong>nicht nur … sondern auch</strong></td><td><strong>не тільки … а й</strong></td>
<td><em>Das Zimmer ist nicht nur hell, sondern auch günstig.</em>
<span class="uk">Кімната не тільки світла, а й недорога.</span></td></tr>
<tr><td><strong>weder … noch</strong></td><td><strong>ні … ні</strong></td>
<td><em>Ich habe weder Zeit noch Geld.</em>
<span class="uk">У мене немає ні часу, ні грошей.</span></td></tr>
<tr><td><strong>zwar … aber</strong></td><td><strong>хоч і … але</strong></td>
<td><em>Die Wohnung ist zwar klein, aber sehr zentral.</em>
<span class="uk">Квартира хоч і мала, зате в центрі.</span></td></tr>
<tr><td><strong>je … desto / umso</strong></td><td><strong>чим … тим</strong></td>
<td><em>Je mehr ich lese, desto besser verstehe ich.</em>
<span class="uk">Чим більше я читаю, тим краще розумію.</span></td></tr>
</tbody></table>
<div class="callout callout--tip"><strong>Найважливіше про weder … noch.</strong>
Ця пара <u>вже</u> містить заперечення, тому <em>nicht</em> і <em>kein</em> додавати не можна:
<em>Ich habe weder Zeit noch Geld</em>, а не «<s>Ich habe kein weder Zeit noch Geld</s>».
Українською ж заперечення подвійне: «немає <u>ні</u> … <u>ні</u> …».</div>`,
    },
    {
      title: '2. Порядок слів: три різні поведінки',
      html: `
<p>Парні сполучники поводяться по-різному, і саме тут роблять помилки.
Дивіться на <strong>другу</strong> частину пари — вона визначає все.</p>
<table>
<thead><tr><th>Тип</th><th>Що робить</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td><em>oder</em>, <em>aber</em>, <em>sondern</em>, <em>noch</em>, <em>als auch</em></td>
<td>стоять <strong>перед</strong> реченням і <u>не</u> займають місця — далі звичайний порядок
(підмет, потім дієслово)</td>
<td><em>… , <strong>aber</strong> <u>sie</u> <u>ist</u> zentral.</em></td></tr>
<tr><td><em>entweder</em> на початку речення</td>
<td>займає перше місце, тому дієслово стає другим — <strong>перед підметом</strong></td>
<td><em><strong>Entweder</strong> <u>fahren</u> <u>wir</u> mit dem Zug …</em></td></tr>
<tr><td><em>desto / umso</em></td>
<td>відразу після себе бере <strong>прикметник у порівняльній формі</strong>, потім дієслово, потім підмет</td>
<td><em>… , <strong>desto</strong> <u>besser</u> <u>verstehe</u> <u>ich</u>.</em></td></tr>
</tbody></table>
<p><em>entweder</em> можна поставити й не на початку — тоді порядок звичайний:
<em>Wir fahren <strong>entweder</strong> mit dem Zug <strong>oder</strong> mit dem Auto.</em>
Це простіший і безпечніший варіант.</p>
<div class="callout"><strong>Пам’ятайте про пари слів.</strong> Друга частина мусить стояти
перед тим самим типом слова, що й перша. Правильно:
<em>sowohl <u>Deutsch</u> als auch <u>Französisch</u></em> (два іменники).
Неправильно: «<s>sowohl <u>Deutsch</u> als auch <u>sie spricht</u> Französisch</s>».</div>`,
    },
    {
      title: '3. je … desto докладніше',
      html: `
<p>Ця конструкція має найнезвичніший порядок слів у всій німецькій, тому розберемо покроково.
Вона складається з <strong>підрядного</strong> (частина з <em>je</em>) і <strong>головного</strong>
(частина з <em>desto</em>).</p>
<table>
<thead><tr><th>Частина</th><th>Схема</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td>1. <em>je</em> + порівняльна форма</td><td><em>je</em> + Komparativ + підмет + … + <strong>дієслово в кінці</strong></td>
<td><em><strong>Je</strong> länger ich hier <strong>wohne</strong>, …</em><span class="uk">Чим довше я тут живу, …</span></td></tr>
<tr><td>2. <em>desto</em> + порівняльна форма</td><td><em>desto</em> + Komparativ + <strong>дієслово</strong> + підмет</td>
<td><em>… <strong>desto</strong> mehr <strong>gefällt</strong> <strong>es</strong> mir.</em><span class="uk">… тим більше мені тут подобається.</span></td></tr>
</tbody></table>
<p>Ще приклади з перекладом:</p>
<ul>
<li><em><strong>Je</strong> früher du anfängst, <strong>desto</strong> leichter wird es.</em>
<span class="uk">Чим раніше почнеш, тим легше буде.</span></li>
<li><em><strong>Je</strong> mehr Menschen kommen, <strong>umso</strong> lauter wird es.</em>
<span class="uk">Чим більше людей приходить, тим стає гучніше.</span></li>
<li><em><strong>Je</strong> weniger ich schlafe, <strong>desto</strong> nervöser bin ich.</em>
<span class="uk">Чим менше я сплю, тим я знервованіший.</span></li>
</ul>
<div class="callout callout--tip"><strong>Дві помилки, яких варто уникати.</strong>
Перша: забути порівняльну форму — потрібне <em>gut → besser</em>, <em>viel → mehr</em>,
<em>lang → länger</em>, а не «<s>je viel … desto gut</s>».
Друга: <em>desto</em> і <em>umso</em> — те саме, але їх не змішують в одному реченні.</div>`,
    },
    {
      title: '4. Ще п’ять корисних зв’язок',
      html: `
<p>Крім парних сполучників, у B1-текстах постійно трапляються ці одиночні зв’язки.
Вони теж по-різному впливають на порядок слів.</p>
<table>
<thead><tr><th>Слово</th><th>Переклад</th><th>Порядок слів</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td><strong>trotzdem</strong></td><td>та все ж, попри це</td><td>займає 1-ше місце → дієслово 2-ге</td>
<td><em>Es regnete. <strong>Trotzdem gingen</strong> wir spazieren.</em><span class="uk">Ішов дощ. Та все ж ми пішли гуляти.</span></td></tr>
<tr><td><strong>deshalb / deswegen</strong></td><td>тому, через це</td><td>займає 1-ше місце → дієслово 2-ге</td>
<td><em>Ich war müde, <strong>deshalb blieb</strong> ich zu Hause.</em><span class="uk">Я був утомлений, тому залишився вдома.</span></td></tr>
<tr><td><strong>außerdem</strong></td><td>крім того</td><td>займає 1-ше місце → дієслово 2-ге</td>
<td><em><strong>Außerdem ist</strong> es billiger.</em><span class="uk">Крім того, це дешевше.</span></td></tr>
<tr><td><strong>allerdings</strong></td><td>щоправда, однак</td><td>займає 1-ше місце → дієслово 2-ге</td>
<td><em><strong>Allerdings hat</strong> das einen Nachteil.</em><span class="uk">Щоправда, у цього є недолік.</span></td></tr>
<tr><td><strong>obwohl</strong></td><td>хоча</td><td>підрядне → <strong>дієслово в кінці</strong></td>
<td><em>Wir gingen spazieren, <strong>obwohl</strong> es <strong>regnete</strong>.</em><span class="uk">Ми пішли гуляти, хоча йшов дощ.</span></td></tr>
</tbody></table>
<div class="callout"><strong>Пара, яку варто засвоїти разом.</strong> <em>obwohl</em> і <em>trotzdem</em>
передають ту саму думку, але вимагають різного порядку слів:
<em>Obwohl es kalt <u>war</u>, gingen wir raus</em> = <em>Es war kalt. <u>Trotzdem gingen</u> wir raus.</em>
Обидва варіанти правильні — вибирайте той, у якому впевненіші.</div>`,
    },
    {
      title: '5. Слова з прикладів цієї теми',
      html: `
<table>
<thead><tr><th>Слово</th><th>Переклад</th><th>Як ужито в темі</th></tr></thead>
<tbody>
<tr><td><em>günstig</em></td><td>недорогий, вигідний</td><td><em>… nicht nur hell, sondern auch günstig.</em></td></tr>
<tr><td><em>zentral</em></td><td>у центрі, з добрим розташуванням</td><td><em>Die Wohnung ist zwar klein, aber sehr zentral.</em></td></tr>
<tr><td><em>der Nachteil, -e</em></td><td>недолік</td><td><em>Allerdings hat das einen Nachteil.</em></td></tr>
<tr><td><em>der Vorteil, -e</em></td><td>перевага</td><td>Пара до <em>Nachteil</em> в аргументації.</td></tr>
<tr><td><em>nervös</em></td><td>знервований</td><td><em>Je weniger ich schlafe, desto nervöser bin ich.</em></td></tr>
<tr><td><em>laut</em></td><td>гучний, шумний</td><td><em>… umso lauter wird es.</em></td></tr>
<tr><td><em>spazieren gehen</em></td><td>іти на прогулянку</td><td><em>Trotzdem gingen wir spazieren.</em></td></tr>
<tr><td><em>gefallen + Dat.</em></td><td>подобатися комусь</td><td><em>… desto mehr gefällt es mir.</em></td></tr>
<tr><td><em>anfangen</em></td><td>починати</td><td><em>Je früher du anfängst, …</em></td></tr>
<tr><td><em>die Möglichkeit, -en</em></td><td>можливість</td><td>Слово з письмового завдання цього модуля.</td></tr>
</tbody></table>`,
    },
  ],

  vocab: [
    {
      group: 'Зв’язки в тексті',
      items: [
        { de: 'entweder … oder', uk: 'або … або' },
        { de: 'sowohl … als auch', uk: 'як … так і' },
        { de: 'nicht nur … sondern auch', uk: 'не тільки … а й' },
        { de: 'weder … noch', uk: 'ні … ні' },
        { de: 'zwar … aber', uk: 'хоч і … але' },
        { de: 'je … desto / umso', uk: 'чим … тим' },
        { de: 'trotzdem', uk: 'та все ж' },
        { de: 'deshalb / deswegen', uk: 'тому' },
        { de: 'außerdem', uk: 'крім того' },
        { de: 'allerdings', uk: 'щоправда' },
        { de: 'einerseits … andererseits', uk: 'з одного боку … з іншого' },
        { de: 'im Gegensatz dazu', uk: 'на противагу цьому' },
      ],
    },
    {
      group: 'Переваги й недоліки',
      items: [
        { de: 'der Vorteil, -e', uk: 'перевага' },
        { de: 'der Nachteil, -e', uk: 'недолік' },
        { de: 'sich lohnen', uk: 'бути вартим того' },
        { de: 'praktisch / unpraktisch', uk: 'практичний / незручний' },
        { de: 'günstig / teuer', uk: 'недорогий / дорогий' },
        { de: 'zeitaufwendig', uk: 'той, що вимагає багато часу' },
        { de: 'umweltfreundlich', uk: 'екологічний' },
        { de: 'zuverlässig', uk: 'надійний' },
        { de: 'flexibel', uk: 'гнучкий' },
        { de: 'die Möglichkeit, -en', uk: 'можливість' },
      ],
    },
    {
      group: 'Транспорт і дорога',
      items: [
        { de: 'die öffentlichen Verkehrsmittel (Pl.)', uk: 'громадський транспорт' },
        { de: 'die Fahrkarte, -n', uk: 'квиток' },
        { de: 'die Monatskarte, -n', uk: 'місячний абонемент' },
        { de: 'umsteigen', uk: 'робити пересадку' },
        { de: 'der Stau, -s', uk: 'затор' },
        { de: 'die Strecke, -n', uk: 'відрізок шляху, маршрут' },
        { de: 'pünktlich', uk: 'вчасно, пунктуальний' },
        { de: 'die Verspätung, -en', uk: 'запізнення' },
        { de: 'der Parkplatz, ¨-e', uk: 'парковка' },
        { de: 'zu Fuß gehen', uk: 'іти пішки' },
      ],
    },
  ],

  exercises: [
    { type: 'gap', q: 'Sie spricht ___ Deutsch ___ ___ Englisch. (як … так і)',
      answers: ['sowohl', 'als', 'auch'] },
    { type: 'gap', q: 'Ich habe ___ Zeit ___ Lust. (ні … ні)', answers: ['weder', 'noch'] },
    { type: 'gap', q: 'Das Zimmer ist nicht nur hell, ___ auch ruhig.', answers: ['sondern'] },
    { type: 'gap', q: '___ mehr ich übe, ___ sicherer werde ich. (чим … тим)',
      answers: ['Je', 'desto|umso'] },
    { type: 'gap', q: 'Die Wohnung ist ___ klein, ___ sehr zentral. (хоч і … але)',
      answers: ['zwar', 'aber'] },
    { type: 'choice', q: 'Яке продовження правильне? «Entweder ___»',
      options: ['wir nehmen den Bus oder das Rad.', 'nehmen wir den Bus oder wir fahren Rad.',
        'wir nehmen oder den Bus.', 'nehmen den Bus wir.'],
      answer: 1,
      explain: 'entweder на початку займає перше місце, тому далі йде дієслово.' },
    { type: 'choice', q: 'Es war kalt. ___ gingen wir schwimmen.',
      options: ['Obwohl', 'Trotzdem', 'Weil', 'Damit'], answer: 1 },
    { type: 'choice', q: 'Wir gingen schwimmen, ___ es kalt war.',
      options: ['trotzdem', 'obwohl', 'deshalb', 'außerdem'], answer: 1 },
    { type: 'choice', q: 'Яке речення правильне?',
      options: ['Je mehr ich lese, desto ich verstehe besser.',
        'Je mehr ich lese, desto besser verstehe ich.',
        'Je mehr lese ich, desto besser ich verstehe.',
        'Je viel ich lese, desto gut verstehe ich.'],
      answer: 1 },
    { type: 'order', q: 'Складіть речення.',
      words: ['Je', 'früher', 'wir', 'losfahren', 'desto', 'weniger', 'Stau', 'haben', 'wir'],
      answer: 'Je früher wir losfahren desto weniger Stau haben wir' },
    { type: 'order', q: 'Складіть речення.',
      words: ['Das', 'Rad', 'ist', 'nicht', 'nur', 'billiger', 'sondern', 'auch', 'schneller'],
      answer: 'Das Rad ist nicht nur billiger sondern auch schneller' },
    { type: 'match', q: 'Доберіть другу частину пари.',
      pairs: [['entweder', 'oder'], ['sowohl', 'als auch'], ['weder', 'noch'],
        ['nicht nur', 'sondern auch'], ['zwar', 'aber'], ['je', 'desto']] },
    { type: 'multi', q: 'Позначте слова, після яких дієслово стоїть на другому місці.',
      options: ['trotzdem', 'obwohl', 'deshalb', 'weil', 'außerdem'],
      answers: [0, 2, 4] },
    { type: 'truefalse', q: 'Разом із <span class="de-inline">weder … noch</span> потрібно ще додати <span class="de-inline">nicht</span>.',
      answer: false,
      explain: 'Заперечення вже вбудоване в саму пару.' },
    { type: 'truefalse', q: 'Після <span class="de-inline">desto</span> стоїть прикметник у порівняльній формі.',
      answer: true },
  ],

  listening: [
    {
      exam: 'Goethe B1 · Hören Teil 3',
      title: 'Auto oder Öffis? Ein Gespräch am Küchentisch',
      instruction: 'Подружжя вирішує, чи продавати машину. Слухайте аргументи обох.',
      lines: [
        { speaker: 'Andrij', de: 'Ich überlege ernsthaft, das Auto zu verkaufen. Es steht sowieso nur herum.', uk: 'Я серйозно думаю продати машину. Вона все одно просто стоїть.' },
        { speaker: 'Sofia', de: 'Entweder wir behalten es oder wir brauchen einen guten Plan für die Einkäufe.', uk: 'Або ми її залишаємо, або нам потрібен добрий план на закупи.' },
        { speaker: 'Andrij', de: 'Die Öffis sind nicht nur billiger, sondern auch umweltfreundlicher.', uk: 'Громадський транспорт не тільки дешевший, а й екологічніший.' },
        { speaker: 'Sofia', de: 'Das stimmt zwar, aber mit zwei Kindern ist der Bus manchmal ein Albtraum.', uk: 'Це, щоправда, так, але з двома дітьми автобус іноді жах.' },
        { speaker: 'Andrij', de: 'Je seltener wir fahren, desto teurer wird jeder einzelne Kilometer. Versicherung und Parkplatz laufen weiter.', uk: 'Чим рідше ми їздимо, тим дорожчим стає кожен окремий кілометр. Страхування й парковка йдуть далі.' },
        { speaker: 'Sofia', de: 'Ich habe weder Lust auf lange Diskussionen noch auf schnelle Entscheidungen. Lass uns einen Monat testen.', uk: 'У мене немає ні охоти до довгих дискусій, ні до швидких рішень. Давай протестуємо місяць.' },
        { speaker: 'Andrij', de: 'Gute Idee. Wir nehmen sowohl die Monatskarte als auch ab und zu ein Carsharing-Auto.', uk: 'Гарна ідея. Ми візьмемо як місячний абонемент, так і час від часу авто з каршерингу.' },
        { speaker: 'Sofia', de: 'Und wenn es nicht funktioniert, behalten wir das Auto trotzdem.', uk: 'А якщо не вийде, ми машину все одно залишимо.' },
      ],
      tasks: [
        { type: 'choice', q: 'Was schlägt Andrij vor?',
          options: ['Ein neues Auto kaufen', 'Das Auto zu verkaufen', 'Umzuziehen', 'Ein Rad zu kaufen'], answer: 1 },
        { type: 'choice', q: 'Was ist Sofias Hauptargument gegen die Öffis?',
          options: ['Sie sind zu teuer', 'Mit zwei Kindern ist es schwierig', 'Sie sind unpünktlich', 'Es gibt keine Haltestelle'], answer: 1 },
        { type: 'choice', q: 'Worauf einigen sie sich?',
          options: ['Sie verkaufen das Auto sofort', 'Sie testen einen Monat',
            'Sie behalten das Auto ohne Test', 'Sie kaufen ein Carsharing-Abo für ein Jahr'], answer: 1 },
        { type: 'gap', q: 'Sie wollen ___ Monat testen.', answers: ['einen'] },
        { type: 'multi', q: 'Welche Argumente nennt Andrij?',
          options: ['Öffis sind billiger', 'Öffis sind umweltfreundlicher',
            'Versicherung und Parkplatz kosten weiter', 'Der Bus ist bequemer für Kinder'],
          answers: [0, 1, 2] },
      ],
    },
  ],

  writing: [
    {
      exam: 'Goethe B1 · Schreiben Teil 2',
      title: 'Forumsbeitrag: Auto in der Stadt — ja oder nein?',
      situation: 'У міському форумі обговорюють, чи потрібна машина в місті. Напишіть свій коментар: <strong>80–100 слів</strong>. Уживіть щонайменше три парні сполучники.',
      points: [
        'Sagen Sie klar, was Sie denken.',
        'Nennen Sie einen Vorteil und einen Nachteil.',
        'Verwenden Sie zwei- oder mehrteilige Konnektoren.',
        'Schließen Sie mit einem Vorschlag.',
      ],
      minWords: 80,
      phrases: [
        { de: 'Meiner Meinung nach braucht man in der Stadt kein Auto.', uk: 'На мою думку, у місті машина не потрібна.' },
        { de: 'Die Öffis sind nicht nur billiger, sondern auch entspannter.', uk: 'Громадський транспорт не тільки дешевший, а й спокійніший.' },
        { de: 'Ich habe weder einen Parkplatz noch Lust auf Staus.', uk: 'У мене немає ні паркомісця, ні охоти до заторів.' },
        { de: 'Zwar dauert die Fahrt länger, aber ich kann dabei lesen.', uk: 'Хоч дорога й триває довше, зате я можу читати.' },
        { de: 'Je besser der Takt ist, desto weniger Menschen fahren Auto.', uk: 'Чим кращий інтервал руху, тим менше людей їздять машиною.' },
        { de: 'Mein Vorschlag wäre, es einen Monat auszuprobieren.', uk: 'Моя пропозиція — спробувати це один місяць.' },
      ],
      checklist: [
        'Є щонайменше три парні сполучники?',
        'У je … desto стоять порівняльні форми й правильний порядок слів?',
        'Названо і перевагу, і недолік?',
        'Є конкретна пропозиція в кінці?',
        'Обсяг 80–100 слів, є абзаци?',
      ],
      model:
`Meiner Meinung nach braucht man in einer größeren Stadt kein eigenes Auto.

Die öffentlichen Verkehrsmittel sind nicht nur günstiger, sondern auch entspannter: Ich kann
unterwegs lesen, statt im Stau zu stehen. Bei mir kommt noch dazu, dass ich weder einen Parkplatz
im Hof habe noch Lust auf die Suche am Abend.

Zwar dauert meine Fahrt zur Arbeit zehn Minuten länger, aber dafür spare ich im Monat fast
zweihundert Euro. Und je besser der Takt am Wochenende wird, desto seltener fehlt mir das Auto.

Mein Vorschlag wäre, einen Monat ohne Auto zu testen. Danach entscheidet man ehrlicher.`,
      modelUk: 'Переклад: На мою думку, у більшому місті власна машина не потрібна. Громадський транспорт не тільки дешевший, а й спокійніший: у дорозі я можу читати замість стояти в заторі. У моєму випадку додається ще й те, що я не маю ні паркомісця у дворі, ні охоти шукати його ввечері. Хоч моя дорога на роботу триває на десять хвилин довше, зате я заощаджую майже двісті євро на місяць. І чим кращим стає інтервал руху на вихідних, тим рідше мені бракує машини. Моя пропозиція — протестувати місяць без машини. Після цього вирішувати чесніше.',
    },
  ],

  test: [
    { type: 'gap', q: 'Er kann ___ kochen ___ ___ backen. (як … так і)',
      answers: ['sowohl', 'als', 'auch'] },
    { type: 'gap', q: 'Sie hat ___ angerufen ___ geschrieben. (ні … ні)', answers: ['weder', 'noch'] },
    { type: 'gap', q: '___ länger ich warte, ___ ungeduldiger werde ich.', answers: ['Je', 'desto|umso'] },
    { type: 'gap', q: 'Der Kurs ist ___ teuer, ___ sehr gut. (хоч і … але)', answers: ['zwar', 'aber'] },
    { type: 'gap', q: 'Wir fahren ___ heute ___ morgen. (або … або)', answers: ['entweder', 'oder'] },
    { type: 'choice', q: 'Es hat geregnet. ___ sind wir gelaufen.',
      options: ['Obwohl', 'Trotzdem', 'Weil', 'Sondern'], answer: 1 },
    { type: 'choice', q: 'Яке речення правильне?',
      options: ['Je mehr Übung, desto es wird leichter.',
        'Je mehr Übung man hat, desto leichter wird es.',
        'Je mehr man Übung hat, desto wird es leichter.',
        'Je viel Übung, desto leicht wird es.'],
      answer: 1 },
    { type: 'choice', q: 'Що ставлять після <span class="de-inline">desto</span>?',
      options: ['підмет', 'прикметник у порівняльній формі', 'інфінітив', 'дієприкметник'], answer: 1 },
    { type: 'order', q: 'Складіть речення.',
      words: ['Die', 'Wohnung', 'ist', 'zwar', 'teuer', 'aber', 'sehr', 'ruhig'],
      answer: 'Die Wohnung ist zwar teuer aber sehr ruhig' },
    { type: 'order', q: 'Складіть речення.',
      words: ['Entweder', 'nehmen', 'wir', 'den', 'Bus', 'oder', 'wir', 'gehen', 'zu', 'Fuß'],
      answer: 'Entweder nehmen wir den Bus oder wir gehen zu Fuß' },
    { type: 'match', q: 'Доберіть переклад.',
      pairs: [['der Vorteil', 'перевага'], ['umsteigen', 'робити пересадку'], ['der Stau', 'затор'],
        ['zuverlässig', 'надійний'], ['sich lohnen', 'бути вартим того'], ['die Strecke', 'маршрут']] },
    { type: 'multi', q: 'Позначте правильні пари.',
      options: ['entweder … oder', 'sowohl … oder', 'weder … noch', 'nicht nur … sondern auch', 'zwar … noch'],
      answers: [0, 2, 3] },
    { type: 'truefalse', q: 'Після <span class="de-inline">obwohl</span> дієслово стоїть у кінці.', answer: true },
    { type: 'truefalse', q: '<span class="de-inline">desto</span> і <span class="de-inline">umso</span> означають те саме.',
      answer: true },
  ],
};

const m7 = {
  id: 'm7',
  title: 'Futur I und Vermutungen',
  titleUk: 'Майбутній час і припущення: werden, wohl, wahrscheinlich',
  can: [
    'утворювати Futur I (werden + Infinitiv)',
    'розуміти, чому німці частіше кажуть про майбутнє в Präsens',
    'висловлювати припущення різного ступеня впевненості',
    'відрізняти werden як майбутнє, як пасив і як «ставати»',
    'давати обіцянки й прогнози',
  ],

  grammar: [
    {
      title: '1. Форма Futur I',
      html: `
<p>Futur I утворюють просто: <strong><em>werden</em> у Präsens + інфінітив у кінці</strong>.
Змінюється тільки <em>werden</em>.</p>
<table>
<thead><tr><th>Особа</th><th>Форма</th><th>Приклад і переклад</th></tr></thead>
<tbody>
<tr><td>ich</td><td><strong>werde</strong></td><td><em>Ich werde dich anrufen.</em><span class="uk">Я тобі подзвоню.</span></td></tr>
<tr><td>du</td><td><strong>wirst</strong></td><td><em>Du wirst das schaffen.</em><span class="uk">Ти це подолаєш.</span></td></tr>
<tr><td>er / sie / es</td><td><strong>wird</strong></td><td><em>Es wird bald regnen.</em><span class="uk">Скоро піде дощ.</span></td></tr>
<tr><td>wir</td><td><strong>werden</strong></td><td><em>Wir werden umziehen.</em><span class="uk">Ми переїдемо.</span></td></tr>
<tr><td>ihr</td><td><strong>werdet</strong></td><td><em>Ihr werdet staunen.</em><span class="uk">Ви здивуєтеся.</span></td></tr>
<tr><td>sie / Sie</td><td><strong>werden</strong></td><td><em>Sie werden informiert.</em><span class="uk">Вас повідомлять. (тут це вже пасив!)</span></td></tr>
</tbody></table>
<div class="callout"><strong>Три різні роботи слова werden.</strong> Не сплутайте:
<ul>
<li><em>werden</em> + <strong>інфінітив</strong> = <strong>майбутнє</strong>: <em>Ich werde arbeiten</em> — я працюватиму.</li>
<li><em>werden</em> + <strong>Partizip II</strong> = <strong>пасив</strong>: <em>Ich werde informiert</em> — мене інформують.</li>
<li><em>werden</em> + <strong>прикметник / іменник</strong> = <strong>«ставати»</strong>: <em>Ich werde müde</em> — я втомлююся; <em>Er wird Arzt</em> — він стає лікарем.</li>
</ul>
Дивіться на те, що стоїть у кінці — це і є ключ.</div>`,
    },
    {
      title: '2. Чому Futur I уживають рідко',
      html: `
<p>Це головна неочевидність теми. У німецькій про майбутнє зазвичай говорять
<strong>у теперішньому часі</strong>, якщо є слово-показник часу. Futur I тоді звучить надміру.</p>
<table>
<thead><tr><th>Ситуація</th><th>Як кажуть німці</th><th>Futur I тут</th></tr></thead>
<tbody>
<tr><td>план із часовим словом</td><td><em><strong>Morgen fahre</strong> ich nach Wien.</em><span class="uk">Завтра я їду до Відня.</span></td>
<td>можливий, але звучить урочисто</td></tr>
<tr><td>розклад</td><td><em>Der Zug <strong>kommt</strong> um 8 Uhr <strong>an</strong>.</em><span class="uk">Потяг прибуває о 8.</span></td>
<td>не вживають</td></tr>
<tr><td><strong>обіцянка</strong></td><td><em>Ich <strong>werde</strong> es nicht <strong>vergessen</strong>!</em><span class="uk">Я цього не забуду!</span></td>
<td><strong>саме тут потрібен</strong></td></tr>
<tr><td><strong>прогноз</strong></td><td><em>Die Preise <strong>werden steigen</strong>.</em><span class="uk">Ціни зростатимуть.</span></td>
<td><strong>саме тут потрібен</strong></td></tr>
<tr><td><strong>припущення</strong></td><td><em>Er <strong>wird</strong> im Stau <strong>stehen</strong>.</em><span class="uk">Він, мабуть, стоїть у заторі.</span></td>
<td><strong>саме тут потрібен</strong></td></tr>
</tbody></table>
<div class="callout callout--tip"><strong>Практичне правило.</strong> Є <em>morgen, nächste Woche,
in zwei Jahren</em> — беріть Präsens. Хочете підкреслити <u>намір, обіцянку або прогноз</u> —
беріть Futur I. Це не питання правильності, а питання відтінку.</div>`,
    },
    {
      title: '3. Припущення: шкала впевненості',
      html: `
<p>Найважливіше застосування Futur I — це не майбутнє, а <strong>припущення про теперішнє</strong>.
<em>Er wird zu Hause sein</em> означає не «він буде вдома», а «він, мабуть, <u>зараз</u> удома».
Ступінь упевненості задають прислівники.</p>
<table>
<thead><tr><th>Упевненість</th><th>Слово</th><th>Переклад</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td>≈ 95 %</td><td><em>sicher / bestimmt / auf jeden Fall</em></td><td>напевно, точно</td>
<td><em>Sie ist sicher schon da.</em><span class="uk">Вона напевно вже там.</span></td></tr>
<tr><td>≈ 80 %</td><td><em>wahrscheinlich</em></td><td>імовірно</td>
<td><em>Er kommt wahrscheinlich später.</em><span class="uk">Він, імовірно, прийде пізніше.</span></td></tr>
<tr><td>≈ 70 %</td><td><em>wohl</em></td><td>мабуть</td>
<td><em>Sie wird wohl im Stau stehen.</em><span class="uk">Вона, мабуть, стоїть у заторі.</span></td></tr>
<tr><td>≈ 50 %</td><td><em>vielleicht / möglicherweise</em></td><td>можливо</td>
<td><em>Vielleicht hat er es vergessen.</em><span class="uk">Можливо, він забув.</span></td></tr>
<tr><td>≈ 20 %</td><td><em>kaum / wohl kaum</em></td><td>навряд чи</td>
<td><em>Das schafft er kaum.</em><span class="uk">Він це навряд чи подолає.</span></td></tr>
</tbody></table>
<p><strong>Модальні дієслова теж виражають припущення</strong> — це знадобиться на B2, але базу
варто знати вже зараз:</p>
<ul>
<li><em>Er <strong>muss</strong> krank sein.</em><span class="uk">Він, певно, хворий. (я майже впевнений)</span></li>
<li><em>Er <strong>kann</strong> krank sein.</em><span class="uk">Він може бути хворий. (одна з можливостей)</span></li>
<li><em>Er <strong>dürfte</strong> krank sein.</em><span class="uk">Він, імовірно, хворий. (обережне припущення)</span></li>
</ul>
<div class="callout"><strong>Місце слова wohl.</strong> <em>wohl</em> у значенні «мабуть» стоїть
у середині речення, після дієслова: <em>Er wird <strong>wohl</strong> schlafen.</em>
Не плутайте з <em>wohl</em> у значенні «добре»: <em>Ich fühle mich wohl</em> — «мені добре».</div>`,
    },
    {
      title: '4. Обіцянки, плани й прогнози',
      html: `
<p>Готові конструкції, які варто вміти вживати в письмовій частині.</p>
<table>
<thead><tr><th>Функція</th><th>Конструкція</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td><strong>обіцянка</strong></td><td><em>Ich werde … (bestimmt)</em></td>
<td><em>Ich werde mich bestimmt melden.</em><span class="uk">Я обов’язково дам про себе знати.</span></td></tr>
<tr><td><strong>твердий намір</strong></td><td><em>Ich habe vor, … zu …</em></td>
<td><em>Ich habe vor, im Sommer einen Kurs zu machen.</em><span class="uk">Я планую влітку пройти курс.</span></td></tr>
<tr><td><strong>прогноз</strong></td><td><em>Es ist damit zu rechnen, dass …</em></td>
<td><em>Es ist damit zu rechnen, dass die Mieten steigen.</em><span class="uk">Слід очікувати, що орендна плата зросте.</span></td></tr>
<tr><td><strong>обережний прогноз</strong></td><td><em>Es könnte sein, dass …</em></td>
<td><em>Es könnte sein, dass wir umziehen.</em><span class="uk">Може бути, що ми переїдемо.</span></td></tr>
<tr><td><strong>сподівання</strong></td><td><em>Ich hoffe, dass … / Hoffentlich …</em></td>
<td><em>Hoffentlich klappt alles.</em><span class="uk">Сподіваюся, усе вийде.</span></td></tr>
</tbody></table>
<div class="callout callout--tip"><strong>Для іспиту.</strong> У Schreiben Teil 1 часто просять
розповісти про плани. Найсильніше поєднання — Präsens із часовим словом для конкретних планів
<em>плюс</em> одне речення в Futur I для обіцянки чи прогнозу. Так текст звучить природно,
але показує обидві форми.</div>`,
    },
    {
      title: '5. Слова з прикладів цієї теми',
      html: `
<table>
<thead><tr><th>Слово</th><th>Переклад</th><th>Як ужито в темі</th></tr></thead>
<tbody>
<tr><td><em>schaffen</em></td><td>подолати, справитися</td><td><em>Du wirst das schaffen.</em></td></tr>
<tr><td><em>staunen</em></td><td>дивуватися</td><td><em>Ihr werdet staunen.</em></td></tr>
<tr><td><em>steigen</em></td><td>зростати, підніматися</td><td><em>Die Preise werden steigen.</em></td></tr>
<tr><td><em>sich melden</em></td><td>дати про себе знати</td><td><em>Ich werde mich bestimmt melden.</em></td></tr>
<tr><td><em>rechnen mit + Dat.</em></td><td>розраховувати на, очікувати</td><td><em>Es ist damit zu rechnen, dass …</em></td></tr>
<tr><td><em>klappen</em></td><td>вийти, скластися (розм.)</td><td><em>Hoffentlich klappt alles.</em></td></tr>
<tr><td><em>die Miete, -n</em></td><td>орендна плата</td><td><em>… dass die Mieten steigen.</em></td></tr>
<tr><td><em>möglicherweise</em></td><td>можливо</td><td>Слово зі шкали впевненості.</td></tr>
<tr><td><em>kaum</em></td><td>навряд чи; майже не</td><td><em>Das schafft er kaum.</em></td></tr>
<tr><td><em>die Vermutung, -en</em></td><td>припущення</td><td>Назва самої теми.</td></tr>
</tbody></table>`,
    },
  ],

  vocab: [
    {
      group: 'Ступені впевненості',
      items: [
        { de: 'sicher / bestimmt', uk: 'напевно, точно' },
        { de: 'auf jeden Fall', uk: 'у будь-якому разі' },
        { de: 'wahrscheinlich', uk: 'імовірно' },
        { de: 'wohl', uk: 'мабуть' },
        { de: 'vielleicht', uk: 'можливо' },
        { de: 'möglicherweise', uk: 'можливо (книжніше)' },
        { de: 'kaum', uk: 'навряд чи' },
        { de: 'auf keinen Fall', uk: 'у жодному разі' },
        { de: 'die Vermutung, -en', uk: 'припущення' },
        { de: 'vermuten', uk: 'припускати' },
      ],
    },
    {
      group: 'Плани й прогнози',
      items: [
        { de: 'vorhaben', uk: 'планувати' },
        { de: 'die Absicht haben', uk: 'мати намір' },
        { de: 'rechnen mit + Dat.', uk: 'очікувати чогось' },
        { de: 'die Entwicklung, -en', uk: 'розвиток, динаміка' },
        { de: 'steigen / sinken', uk: 'зростати / падати' },
        { de: 'sich verbessern / verschlechtern', uk: 'покращуватися / погіршуватися' },
        { de: 'die Prognose, -n', uk: 'прогноз' },
        { de: 'langfristig / kurzfristig', uk: 'довгостроковий / короткостроковий' },
        { de: 'voraussichtlich', uk: 'за прогнозом, орієнтовно' },
        { de: 'klappen', uk: 'скластися, вийти' },
      ],
    },
    {
      group: 'Погода й довкілля',
      items: [
        { de: 'die Wettervorhersage, -n', uk: 'прогноз погоди' },
        { de: 'bewölkt', uk: 'хмарно' },
        { de: 'der Niederschlag, ¨-e', uk: 'опади' },
        { de: 'die Temperatur, -en', uk: 'температура' },
        { de: 'der Klimawandel', uk: 'зміна клімату' },
        { de: 'die Umwelt', uk: 'довкілля' },
        { de: 'der Müll', uk: 'сміття' },
        { de: 'trennen (Müll trennen)', uk: 'сортувати (сміття)' },
        { de: 'sparen (Energie sparen)', uk: 'заощаджувати (енергію)' },
        { de: 'nachhaltig', uk: 'сталий, екологічно відповідальний' },
      ],
    },
  ],

  exercises: [
    { type: 'gap', q: 'Ich ___ dich morgen anrufen. (werden)', answers: ['werde'] },
    { type: 'gap', q: 'Du ___ die Prüfung bestehen. (werden)', answers: ['wirst'] },
    { type: 'gap', q: 'Es ___ bald regnen. (werden)', answers: ['wird'] },
    { type: 'gap', q: 'Wir ___ nächstes Jahr umziehen. (werden)', answers: ['werden'] },
    { type: 'gap', q: 'Er ist nicht da — er ___ ___ im Stau stehen. (werden + мабуть)',
      answers: ['wird', 'wohl'] },
    { type: 'choice', q: 'Яке речення означає припущення про <u>зараз</u>?',
      options: ['Ich werde morgen arbeiten.', 'Sie wird jetzt wohl schlafen.',
        'Wir werden umziehen.', 'Du wirst das schaffen.'],
      answer: 1 },
    { type: 'choice', q: 'У якому реченні <span class="de-inline">werden</span> утворює пасив?',
      options: ['Ich werde müde.', 'Ich werde anrufen.', 'Ich werde informiert.', 'Ich werde Lehrer.'],
      answer: 2 },
    { type: 'choice', q: 'У якому реченні <span class="de-inline">werden</span> означає «ставати»?',
      options: ['Er wird Arzt.', 'Er wird kommen.', 'Er wird gefragt.', 'Er wird wohl schlafen.'],
      answer: 0 },
    { type: 'choice', q: 'Найвища впевненість:',
      options: ['vielleicht', 'kaum', 'bestimmt', 'möglicherweise'], answer: 2 },
    { type: 'order', q: 'Складіть речення.',
      words: ['Die', 'Mieten', 'werden', 'in', 'den', 'nächsten', 'Jahren', 'steigen'],
      answer: 'Die Mieten werden in den nächsten Jahren steigen' },
    { type: 'order', q: 'Складіть речення.',
      words: ['Ich', 'werde', 'mich', 'bestimmt', 'bei', 'dir', 'melden'],
      answer: 'Ich werde mich bestimmt bei dir melden' },
    { type: 'match', q: 'Доберіть переклад.',
      pairs: [['wahrscheinlich', 'імовірно'], ['wohl', 'мабуть'], ['kaum', 'навряд чи'],
        ['bestimmt', 'напевно'], ['möglicherweise', 'можливо'], ['vermuten', 'припускати']] },
    { type: 'multi', q: 'Позначте речення, у яких Futur I справді доречний.',
      options: ['Ich werde es nicht vergessen — versprochen!',
        'Der Zug wird um acht Uhr ankommen. (розклад)',
        'Die Preise werden weiter steigen.',
        'Morgen werde ich zum Arzt gehen. (звичайний план)',
        'Sie wird jetzt wohl im Büro sein.'],
      answers: [0, 2, 4],
      explain: 'Для розкладу й звичайних планів природніший Präsens.' },
    { type: 'truefalse', q: 'Німці зазвичай говорять про майбутнє в Präsens, якщо є слово часу.',
      answer: true },
    { type: 'truefalse', q: '<span class="de-inline">Er wird schlafen</span> може означати «він, мабуть, спить <u>зараз</u>».',
      answer: true },
  ],

  listening: [
    {
      exam: 'Goethe B1 · Hören Teil 4',
      title: 'Radiobeitrag: Wie wohnen wir in zehn Jahren?',
      instruction: 'Коротка радіопередача з прогнозами. Слухайте, наскільки впевнено говорить експерт.',
      lines: [
        { speaker: 'Moderator', de: 'Frau Dr. Ebner, wie werden wir in zehn Jahren wohnen?', uk: 'Пані д-р Ебнер, як ми житимемо через десять років?' },
        { speaker: 'Dr. Ebner', de: 'Zwei Dinge sind sicher: Die Wohnungen werden kleiner, und die Nebenkosten werden steigen.', uk: 'Дві речі точні: помешкання ставатимуть меншими, а комунальні витрати зростатимуть.' },
        { speaker: 'Moderator', de: 'Klingt nicht besonders erfreulich.', uk: 'Звучить не надто радісно.' },
        { speaker: 'Dr. Ebner', de: 'Es hat auch Vorteile. Wahrscheinlich werden wir mehr Räume gemeinsam nutzen — Waschküche, Werkstatt, Garten.', uk: 'Це має й переваги. Імовірно, ми більше приміщень використовуватимемо спільно — пральню, майстерню, сад.' },
        { speaker: 'Moderator', de: 'Und was ist mit den Preisen im Zentrum?', uk: 'А що з цінами в центрі?' },
        { speaker: 'Dr. Ebner', de: 'Die werden wohl kaum sinken. Möglicherweise ziehen aber mehr Familien in die Vororte.', uk: 'Вони навряд чи впадуть. Можливо, проте більше сімей переїде в передмістя.' },
        { speaker: 'Moderator', de: 'Rechnen Sie mit mehr Homeoffice?', uk: 'Ви очікуєте більше роботи з дому?' },
        { speaker: 'Dr. Ebner', de: 'Auf jeden Fall. Und je mehr Menschen zu Hause arbeiten, desto wichtiger wird ein eigener Arbeitsplatz in der Wohnung.', uk: 'У будь-якому разі. І чим більше людей працює вдома, тим важливішим стає власне робоче місце в помешканні.' },
      ],
      tasks: [
        { type: 'multi', q: 'Was ist laut Dr. Ebner sicher?',
          options: ['Die Wohnungen werden kleiner.', 'Die Nebenkosten steigen.',
            'Die Preise im Zentrum sinken.', 'Alle ziehen in die Vororte.'],
          answers: [0, 1] },
        { type: 'choice', q: 'Was sagt sie über die Preise im Zentrum?',
          options: ['Sie werden stark sinken.', 'Sie werden wohl kaum sinken.',
            'Sie bleiben genau gleich.', 'Dazu sagt sie nichts.'], answer: 1 },
        { type: 'choice', q: 'Welche Räume werden gemeinsam genutzt?',
          options: ['Küche und Bad', 'Waschküche, Werkstatt, Garten', 'Nur der Garten', 'Balkon und Keller'], answer: 1 },
        { type: 'gap', q: 'Sie rechnet ___ jeden Fall mit mehr Homeoffice.', answers: ['auf'] },
        { type: 'truefalse', q: 'Sie ist sicher, dass alle Familien in die Vororte ziehen.', answer: false,
          explain: '«Möglicherweise» — це лише припущення, не впевненість.' },
      ],
    },
  ],

  writing: [
    {
      exam: 'Goethe B1 · Schreiben Teil 1',
      title: 'E-Mail: Ihre Pläne für das nächste Jahr',
      situation: 'Ваша знайома Sabine написала, що хоче знати ваші плани на наступний рік. Напишіть відповідь: <strong>80–100 слів</strong>, стиль du. Розкажіть про плани й додайте один прогноз чи припущення.',
      points: [
        'Nennen Sie zwei konkrete Pläne.',
        'Sagen Sie, was Sie fest versprechen (Futur I).',
        'Formulieren Sie eine Vermutung über etwas Unsicheres.',
        'Fragen Sie Sabine nach ihren Plänen.',
      ],
      minWords: 80,
      phrases: [
        { de: 'Im Frühling fange ich einen Deutschkurs an.', uk: 'Навесні я починаю курс німецької.' },
        { de: 'Ich werde dieses Mal wirklich bis zum Ende dabeibleiben.', uk: 'Цього разу я справді дотримаю до кінця.' },
        { de: 'Wahrscheinlich ziehe ich im Herbst um.', uk: 'Імовірно, я переїду восени.' },
        { de: 'Ob das klappt, weiß ich noch nicht genau.', uk: 'Чи вийде це, я ще точно не знаю.' },
        { de: 'Die Mieten werden wohl weiter steigen.', uk: 'Орендна плата, мабуть, зростатиме далі.' },
        { de: 'Und was hast du vor?', uk: 'А що ти плануєш?' },
      ],
      checklist: [
        'Є щонайменше одне речення в Futur I (werde / wirst + інфінітив)?',
        'Є припущення зі словом wohl, wahrscheinlich або vielleicht?',
        'Конкретні плани стоять у Präsens зі словом часу?',
        'Ви поставили питання Сабіні?',
        'Обсяг 80–100 слів, звертання й прощання на місці?',
      ],
      model:
`Hallo Sabine,

danke für deine Nachricht! Nächstes Jahr habe ich tatsächlich einiges vor.

Im Februar fange ich einen Deutschkurs auf B2-Niveau an, immer dienstags und donnerstags abends.
Diesmal werde ich wirklich bis zum Ende dabeibleiben — das verspreche ich dir. Im Sommer möchte
ich außerdem zwei Wochen durch Österreich reisen, am liebsten mit dem Zug.

Ob ich im Herbst umziehe, weiß ich noch nicht. Die Mieten werden wohl weiter steigen,
und günstige Wohnungen findet man hier kaum. Vielleicht bleibe ich einfach, wo ich bin.

Und was hast du vor? Schreib mir bald!

Liebe Grüße
Taras`,
      modelUk: 'Переклад: Привіт, Сабіно! Дякую за твоє повідомлення! Наступного року я справді дещо планую. У лютому починаю курс німецької рівня B2, завжди по вівторках і четвергах увечері. Цього разу я справді дотримаю до кінця — обіцяю тобі. Улітку хочу до того ж два тижні помандрувати Австрією, найкраще потягом. Чи переїду я восени, ще не знаю. Орендна плата, мабуть, зростатиме далі, а недорогих помешкань тут майже не знайти. Можливо, я просто залишуся там, де є. А що плануєш ти? Напиши мені скоро! З теплом, Тарас.',
    },
  ],

  test: [
    { type: 'gap', q: 'Ich ___ dir helfen. (werden)', answers: ['werde'] },
    { type: 'gap', q: 'Ihr ___ euch wundern. (werden)', answers: ['werdet'] },
    { type: 'gap', q: 'Sie ___ ___ noch schlafen. (werden + мабуть)', answers: ['wird', 'wohl'] },
    { type: 'gap', q: 'Es ist ___ zu rechnen, dass die Preise steigen. (damit)', answers: ['damit'] },
    { type: 'choice', q: 'У якому реченні <span class="de-inline">werden</span> — пасив?',
      options: ['Das Haus wird verkauft.', 'Das Haus wird alt.', 'Wir werden bauen.', 'Er wird Lehrer.'],
      answer: 0 },
    { type: 'choice', q: 'Найменша впевненість:',
      options: ['bestimmt', 'wahrscheinlich', 'kaum', 'sicher'], answer: 2 },
    { type: 'choice', q: 'Для розкладу потяга природніше:',
      options: ['Der Zug wird um acht ankommen.', 'Der Zug kommt um acht an.',
        'Der Zug wird um acht angekommen.', 'Der Zug würde um acht ankommen.'],
      answer: 1 },
    { type: 'choice', q: 'Обіцянка:',
      options: ['Ich gehe morgen einkaufen.', 'Ich werde es bestimmt nicht vergessen.',
        'Ich bin müde.', 'Vielleicht komme ich.'],
      answer: 1 },
    { type: 'order', q: 'Складіть речення.',
      words: ['Nächstes', 'Jahr', 'werden', 'wir', 'nach', 'Graz', 'umziehen'],
      answer: 'Nächstes Jahr werden wir nach Graz umziehen' },
    { type: 'order', q: 'Складіть речення.',
      words: ['Er', 'wird', 'wohl', 'im', 'Stau', 'stehen'],
      answer: 'Er wird wohl im Stau stehen' },
    { type: 'match', q: 'Доберіть переклад.',
      pairs: [['die Prognose', 'прогноз'], ['sinken', 'падати'], ['nachhaltig', 'сталий'],
        ['der Niederschlag', 'опади'], ['voraussichtlich', 'орієнтовно'], ['die Entwicklung', 'розвиток']] },
    { type: 'multi', q: 'Позначте вирази припущення.',
      options: ['wahrscheinlich', 'auf jeden Fall', 'möglicherweise', 'wohl', 'sofort'],
      answers: [0, 2, 3] },
    { type: 'truefalse', q: 'Futur I утворюється через <span class="de-inline">werden</span> + Partizip II.',
      answer: false,
      explain: 'werden + інфінітив. З Partizip II виходить пасив.' },
    { type: 'truefalse', q: '<span class="de-inline">wohl</span> у значенні «мабуть» стоїть у середині речення.',
      answer: true },
  ],
};

const m8 = {
  id: 'm8',
  title: 'Partizipien als Adjektive und n-Deklination',
  titleUk: 'Дієприкметники як означення та n-відмінювання іменників',
  can: [
    'уживати Partizip I і Partizip II у ролі прикметника',
    'розуміти різницю між активним і пасивним значенням дієприкметника',
    'відмінювати іменники групи n-Deklination',
    'перетворювати підрядне означальне на дієприкметник',
    'читати складніші письмові тексти без спотикання',
  ],

  grammar: [
    {
      title: '1. Partizip II як прикметник (пасивне значення)',
      html: `
<p>Partizip II — та сама форма, що в Perfekt (<em>gekocht, geschrieben, geöffnet</em>).
Але вона може стояти <strong>перед іменником</strong> і працювати як звичайний прикметник —
із тими самими закінченнями.</p>
<table>
<thead><tr><th>Підрядне речення</th><th>Те саме з дієприкметником</th><th>Переклад</th></tr></thead>
<tbody>
<tr><td><em>die Suppe, die gekocht wurde</em></td><td><em>die <strong>gekochte</strong> Suppe</em></td>
<td>зварений суп</td></tr>
<tr><td><em>der Brief, der geschrieben wurde</em></td><td><em>der <strong>geschriebene</strong> Brief</em></td>
<td>написаний лист</td></tr>
<tr><td><em>das Fenster, das geöffnet wurde</em></td><td><em>das <strong>geöffnete</strong> Fenster</em></td>
<td>відчинене вікно</td></tr>
<tr><td><em>die Kinder, die gut erzogen wurden</em></td><td><em>die gut <strong>erzogenen</strong> Kinder</em></td>
<td>добре виховані діти</td></tr>
</tbody></table>
<div class="callout callout--tip"><strong>Значення завжди пасивне й завершене.</strong>
<em>gekochte Suppe</em> — суп, <u>який зварили</u>. Дія вже відбулася, а іменник її <u>отримав</u>,
а не виконав. Українською це дієприкметник на «-ний / -тий»: варений, написаний, відчинений.</div>
<p><strong>Закінчення</strong> ті самі, що в прикметників — залежать від артикля й відмінка:
<em>ein geöffnet<strong>es</strong> Fenster</em>, <em>mit dem geöffnet<strong>en</strong> Fenster</em>,
<em>geöffnet<strong>e</strong> Fenster</em> (без артикля, множина).</p>`,
    },
    {
      title: '2. Partizip I як прикметник (активне значення)',
      html: `
<p>Partizip I утворюють дуже просто: <strong>інфінітив + d</strong>, а далі — звичайне
прикметникове закінчення.</p>
<table>
<thead><tr><th>Інфінітив</th><th>Partizip I</th><th>З іменником</th><th>Переклад</th></tr></thead>
<tbody>
<tr><td><em>schlafen</em></td><td><em>schlafend</em></td><td><em>das <strong>schlafende</strong> Kind</em></td><td>спляча дитина</td></tr>
<tr><td><em>weinen</em></td><td><em>weinend</em></td><td><em>ein <strong>weinendes</strong> Mädchen</em></td><td>дівчинка, що плаче</td></tr>
<tr><td><em>steigen</em></td><td><em>steigend</em></td><td><em>die <strong>steigenden</strong> Preise</em></td><td>ціни, що зростають</td></tr>
<tr><td><em>bellen</em></td><td><em>bellend</em></td><td><em>der <strong>bellende</strong> Hund</em></td><td>пес, що гавкає</td></tr>
</tbody></table>
<p><strong>Різниця між двома дієприкметниками</strong> — це різниця «хто робить»:</p>
<table>
<thead><tr><th>Форма</th><th>Значення</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td><strong>Partizip I</strong> (-end)</td><td><strong>активне</strong>, дія триває</td>
<td><em>das <strong>lesende</strong> Kind</em> — дитина, <u>яка читає</u></td></tr>
<tr><td><strong>Partizip II</strong> (ge-…-t/-en)</td><td><strong>пасивне</strong>, дія завершена</td>
<td><em>das <strong>gelesene</strong> Buch</em> — книжка, <u>яку прочитали</u></td></tr>
</tbody></table>
<div class="callout"><strong>Перевірка на два питання.</strong> Іменник сам виконує дію?
Беріть Partizip I: <em>der arbeitende Mann</em> — чоловік, який працює.
Дію виконали <u>над</u> ним? Беріть Partizip II: <em>der reparierte Wagen</em> — відремонтована машина.</div>
<p><strong>Українською Partizip I</strong> часто зручніше передати підрядним «який …»,
бо активних дієприкметників теперішнього часу в нас майже немає:
<em>die steigenden Preise</em> → «ціни, що зростають» (а не «зростаючі»).</p>`,
    },
    {
      title: '3. n-Deklination: іменники з додатковим -n',
      html: `
<p>Невелика група іменників чоловічого роду отримує <strong>-n / -en у всіх відмінках,
крім Nominativ однини</strong>. Це не виняток-дрібниця: ці слова дуже частотні,
і брак -n одразу помітний.</p>
<table>
<thead><tr><th>Відмінок</th><th>der Student</th><th>der Mensch</th><th>der Name</th></tr></thead>
<tbody>
<tr><td>Nominativ</td><td>der Student</td><td>der Mensch</td><td>der Name</td></tr>
<tr><td>Akkusativ</td><td>den Student<strong>en</strong></td><td>den Mensch<strong>en</strong></td><td>den Name<strong>n</strong></td></tr>
<tr><td>Dativ</td><td>dem Student<strong>en</strong></td><td>dem Mensch<strong>en</strong></td><td>dem Name<strong>n</strong></td></tr>
<tr><td>Genitiv</td><td>des Student<strong>en</strong></td><td>des Mensch<strong>en</strong></td><td>des Name<strong>ns</strong></td></tr>
</tbody></table>
<p><strong>Хто до цієї групи належить</strong> (усі — чоловічого роду):</p>
<table>
<thead><tr><th>Група</th><th>Приклади</th></tr></thead>
<tbody>
<tr><td>особи на <em>-e</em></td><td><em>der Kollege, der Junge, der Kunde, der Zeuge, der Neffe</em>
<span class="uk">колега, хлопець, клієнт, свідок, племінник</span></td></tr>
<tr><td>особи на <em>-ent, -ant, -ist, -ent, -oge, -at</em></td><td><em>der Student, der Praktikant,
der Journalist, der Psychologe, der Kandidat</em></td></tr>
<tr><td>національності на <em>-e</em></td><td><em>der Franzose, der Grieche, der Türke</em>
<span class="uk">француз, грек, турок — а от <em>der Ukrainer</em> закінчується на -er і відмінюється звичайно</span></td></tr>
<tr><td>окремі слова</td><td><em>der Herr, der Nachbar, der Bauer, der Mensch</em>
<span class="uk">пан, сусід, селянин, людина</span></td></tr>
<tr><td>на <em>-ns</em> у Genitiv</td><td><em>der Name, der Gedanke, der Glaube</em>
<span class="uk">ім’я, думка, віра</span></td></tr>
</tbody></table>
<div class="callout"><strong>Типова помилка.</strong> «<s>Ich helfe dem Student</s>» —
має бути <em>dem Student<strong>en</strong></em>. І навпаки: «<s>Der Studenten kommt</s>» —
у Nominativ однини -en немає: <em>Der Student kommt</em>.</div>`,
    },
    {
      title: '4. Як стиснути підрядне означальне',
      html: `
<p>Уміння перетворювати довге означальне речення на короткий дієприкметник —
це вже підготовка до B2. Схема така:</p>
<table>
<thead><tr><th>Крок</th><th>Що робимо</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td>0. вихідне речення</td><td>—</td><td><em>Die Preise, <strong>die</strong> ständig <strong>steigen</strong>, sind ein Problem.</em></td></tr>
<tr><td>1. викидаємо відносний займенник</td><td><em>die</em> геть</td><td><em>… ständig steigen …</em></td></tr>
<tr><td>2. дієслово → Partizip I або II</td><td><em>steigen → steigend</em></td><td><em>… ständig steigend …</em></td></tr>
<tr><td>3. ставимо перед іменником + закінчення</td><td>як прикметник</td><td><em>Die ständig <strong>steigenden</strong> Preise sind ein Problem.</em></td></tr>
</tbody></table>
<p>Ще два приклади:</p>
<ul>
<li><em>Das Buch, das gestern erschienen ist</em> → <em>das gestern <strong>erschienene</strong> Buch</em>
<span class="uk">книжка, що вийшла вчора</span></li>
<li><em>Der Mann, der neben mir sitzt</em> → <em>der neben mir <strong>sitzende</strong> Mann</em>
<span class="uk">чоловік, який сидить біля мене</span></li>
</ul>
<div class="callout callout--tip"><strong>Коли цим користуватися.</strong> У розмові — майже ніколи:
там природніші підрядні речення. А в читанні газет, інструкцій і офіційних текстів
ця конструкція трапляється постійно, тому головне — <u>розуміти</u> її швидко.
У власному письмі на B1 достатньо одного-двох коротких дієприкметників.</div>`,
    },
    {
      title: '5. Слова з прикладів цієї теми',
      html: `
<table>
<thead><tr><th>Слово</th><th>Переклад</th><th>Як ужито в темі</th></tr></thead>
<tbody>
<tr><td><em>erziehen (erzog, erzogen)</em></td><td>виховувати</td><td><em>die gut erzogenen Kinder</em></td></tr>
<tr><td><em>bellen</em></td><td>гавкати</td><td><em>der bellende Hund</em></td></tr>
<tr><td><em>erscheinen</em></td><td>виходити (про книжку); з’являтися</td><td><em>das gestern erschienene Buch</em></td></tr>
<tr><td><em>der Zeuge, -n</em></td><td>свідок</td><td>Слово групи n-Deklination.</td></tr>
<tr><td><em>der Kunde, -n</em></td><td>клієнт</td><td><em>Ich helfe dem Kunden.</em></td></tr>
<tr><td><em>der Praktikant, -en</em></td><td>практикант</td><td>Слово групи n-Deklination.</td></tr>
<tr><td><em>der Gedanke, -n</em></td><td>думка</td><td>Genitiv: <em>des Gedankens</em>.</td></tr>
<tr><td><em>ständig</em></td><td>постійно</td><td><em>die ständig steigenden Preise</em></td></tr>
<tr><td><em>die Anzeige, -n</em></td><td>оголошення</td><td>Слово з письмового завдання цього модуля.</td></tr>
<tr><td><em>gebraucht</em></td><td>уживаний (Partizip II як прикметник)</td><td><em>ein gebrauchtes Fahrrad</em></td></tr>
</tbody></table>`,
    },
  ],

  vocab: [
    {
      group: 'Іменники n-Deklination',
      items: [
        { de: 'der Kollege, -n', uk: 'колега' },
        { de: 'der Kunde, -n', uk: 'клієнт' },
        { de: 'der Junge, -n', uk: 'хлопець' },
        { de: 'der Nachbar, -n', uk: 'сусід' },
        { de: 'der Herr, -en', uk: 'пан' },
        { de: 'der Mensch, -en', uk: 'людина' },
        { de: 'der Student, -en', uk: 'студент' },
        { de: 'der Praktikant, -en', uk: 'практикант' },
        { de: 'der Journalist, -en', uk: 'журналіст' },
        { de: 'der Name, -n (des Namens)', uk: 'ім’я' },
        { de: 'der Gedanke, -n (des Gedankens)', uk: 'думка' },
        { de: 'der Zeuge, -n', uk: 'свідок' },
      ],
    },
    {
      group: 'Часті дієприкметники-прикметники',
      items: [
        { de: 'gebraucht', uk: 'уживаний' },
        { de: 'geöffnet / geschlossen', uk: 'відчинений / зачинений' },
        { de: 'reserviert', uk: 'зарезервований' },
        { de: 'beschädigt', uk: 'пошкоджений' },
        { de: 'gestrichen', uk: 'пофарбований; скасований' },
        { de: 'steigend / sinkend', uk: 'той, що зростає / падає' },
        { de: 'wachsend', uk: 'той, що росте' },
        { de: 'passend', uk: 'підхожий' },
        { de: 'spannend', uk: 'захопливий' },
        { de: 'anstrengend', uk: 'виснажливий' },
      ],
    },
    {
      group: 'Купівля й продаж речей',
      items: [
        { de: 'die Anzeige, -n', uk: 'оголошення' },
        { de: 'der Zustand, ¨-e', uk: 'стан (речі)' },
        { de: 'einwandfrei', uk: 'бездоганний' },
        { de: 'der Kratzer, -', uk: 'подряпина' },
        { de: 'handeln (um den Preis)', uk: 'торгуватися' },
        { de: 'die Abholung', uk: 'самовивіз' },
        { de: 'der Versand', uk: 'пересилання' },
        { de: 'die Garantie', uk: 'гарантія' },
        { de: 'verhandelbar', uk: 'той, про який можна домовитися' },
        { de: 'Festpreis', uk: 'фіксована ціна' },
      ],
    },
  ],

  exercises: [
    { type: 'gap', q: 'die Suppe, die gekocht wurde → die ___ Suppe', answers: ['gekochte'] },
    { type: 'gap', q: 'das Kind, das schläft → das ___ Kind', answers: ['schlafende'] },
    { type: 'gap', q: 'die Preise, die steigen → die ___ Preise', answers: ['steigenden'] },
    { type: 'gap', q: 'Ich helfe dem ___. (der Student)', answers: ['Studenten'] },
    { type: 'gap', q: 'Ich kenne den ___ nicht. (der Nachbar)', answers: ['Nachbarn'] },
    { type: 'gap', q: 'Wie ist der Titel des ___? (der Name — Genitiv)', answers: ['Namens'] },
    { type: 'gap', q: 'Ich habe mit dem ___ gesprochen. (der Kollege)', answers: ['Kollegen'] },
    { type: 'choice', q: 'Активне значення (іменник сам діє):',
      options: ['das gelesene Buch', 'das lesende Kind', 'der reparierte Wagen', 'die geöffnete Tür'],
      answer: 1 },
    { type: 'choice', q: 'Як утворюють Partizip I?',
      options: ['ge- + основа + -t', 'інфінітив + d', 'основа + -en', 'zu + інфінітив'], answer: 1 },
    { type: 'choice', q: 'Яке речення правильне?',
      options: ['Der Studenten kommt später.', 'Ich helfe dem Student.',
        'Ich sehe den Studenten.', 'Das ist das Buch des Student.'],
      answer: 2 },
    { type: 'order', q: 'Складіть речення.',
      words: ['Die', 'ständig', 'steigenden', 'Mieten', 'sind', 'ein', 'Problem'],
      answer: 'Die ständig steigenden Mieten sind ein Problem' },
    { type: 'match', q: 'Доберіть дієприкметник.',
      pairs: [['schlafen', 'schlafend'], ['kochen (Partizip II)', 'gekocht'], ['steigen', 'steigend'],
        ['öffnen (Partizip II)', 'geöffnet'], ['weinen', 'weinend'], ['reparieren (Partizip II)', 'repariert']] },
    { type: 'multi', q: 'Позначте іменники n-Deklination.',
      options: ['der Kollege', 'der Tisch', 'der Mensch', 'das Kind', 'der Journalist'],
      answers: [0, 2, 4] },
    { type: 'truefalse', q: 'Partizip II у ролі прикметника має пасивне значення.', answer: true },
    { type: 'truefalse', q: 'У Nominativ однини іменники n-Deklination теж мають <span class="de-inline">-en</span>.',
      answer: false,
      explain: 'Саме Nominativ однини — єдина форма без -en: der Student.' },
  ],

  listening: [
    {
      exam: 'Goethe B1 · Hören Teil 2',
      title: 'Ein gebrauchtes Fahrrad kaufen',
      instruction: 'Покупець розглядає велосипед з оголошення. Слухайте опис стану.',
      lines: [
        { speaker: 'Oleh', de: 'Guten Tag, ich habe wegen der Anzeige angerufen. Ist das Rad noch da?', uk: 'Добрий день, я телефонував щодо оголошення. Велосипед ще є?' },
        { speaker: 'Verkäufer', de: 'Ja, es steht hier. Ein gebrauchtes Trekkingrad, drei Jahre alt, aber in einwandfreiem Zustand.', uk: 'Так, він тут. Уживаний трекінговий велосипед, трирічний, але в бездоганному стані.' },
        { speaker: 'Oleh', de: 'Und die Bremsen? In der Anzeige stand etwas von neu eingebauten Bremsen.', uk: 'А гальма? В оголошенні було щось про нововстановлені гальма.' },
        { speaker: 'Verkäufer', de: 'Genau, die habe ich im Frühling erneuern lassen. Nur am Rahmen sind zwei kleine Kratzer.', uk: 'Саме так, я дав їх поновити навесні. Лише на рамі дві невеликі подряпини.' },
        { speaker: 'Oleh', de: 'Das ist kein Problem. Ist der Preis verhandelbar?', uk: 'Це не проблема. Ціна обговорювана?' },
        { speaker: 'Verkäufer', de: 'Zweihundertachtzig statt dreihundert, wenn Sie es heute mitnehmen.', uk: 'Двісті вісімдесят замість трьохсот, якщо Ви забираєте сьогодні.' },
        { speaker: 'Oleh', de: 'Einverstanden. Kann ich mit Karte zahlen?', uk: 'Погоджуюсь. Чи можу я заплатити карткою?' },
        { speaker: 'Verkäufer', de: 'Leider nur bar. Der Kunde davor hat auch bar bezahlt.', uk: 'На жаль, тільки готівкою. Клієнт перед Вами теж заплатив готівкою.' },
      ],
      tasks: [
        { type: 'choice', q: 'Wie alt ist das Rad?',
          options: ['Ein Jahr', 'Drei Jahre', 'Fünf Jahre', 'Es ist neu'], answer: 1 },
        { type: 'choice', q: 'Was wurde erneuert?',
          options: ['Der Rahmen', 'Die Bremsen', 'Die Reifen', 'Der Sattel'], answer: 1 },
        { type: 'gap', q: 'Oleh zahlt ___ Euro.', answers: ['280|zweihundertachtzig'] },
        { type: 'truefalse', q: 'Oleh kann mit Karte zahlen.', answer: false,
          explain: '«Leider nur bar» — тільки готівкою.' },
        { type: 'multi', q: 'Was stimmt über das Rad?',
          options: ['Es ist gebraucht.', 'Es hat zwei kleine Kratzer am Rahmen.',
            'Es ist in einwandfreiem Zustand.', 'Die Bremsen sind alt.'],
          answers: [0, 1, 2] },
      ],
    },
  ],

  writing: [
    {
      exam: 'Goethe B1 · Schreiben Teil 1',
      title: 'E-Mail: eine Anzeige beantworten',
      situation: 'Ви знайшли оголошення про уживаний велосипед і хочете його купити. Напишіть продавцеві: <strong>70–90 слів</strong>. Уживіть щонайменше два дієприкметники-означення (наприклад <em>gebraucht</em>, <em>neu eingebaut</em>).',
      points: [
        'Sagen Sie, woher Sie die Anzeige haben.',
        'Fragen Sie nach dem Zustand.',
        'Fragen Sie nach dem Preis und der Abholung.',
        'Schlagen Sie einen Termin vor.',
      ],
      minWords: 70,
      phrases: [
        { de: 'ich habe Ihre Anzeige auf der Plattform gesehen.', uk: 'я побачив Ваше оголошення на платформі.' },
        { de: 'Ich interessiere mich für das angebotene Fahrrad.', uk: 'Мене цікавить запропонований велосипед.' },
        { de: 'Sind die eingebauten Bremsen wirklich neu?', uk: 'Чи справді встановлені гальма нові?' },
        { de: 'Gibt es beschädigte Stellen am Rahmen?', uk: 'Чи є пошкоджені місця на рамі?' },
        { de: 'Ist der genannte Preis verhandelbar?', uk: 'Чи обговорювана вказана ціна?' },
        { de: 'Passt Ihnen Samstagvormittag?', uk: 'Чи підходить Вам субота до обіду?' },
      ],
      checklist: [
        'Є щонайменше два дієприкметники як означення?',
        'Закінчення в них узгоджені з іменником і артиклем?',
        'Задано питання про стан і про ціну?',
        'Є конкретна пропозиція часу?',
        'Обсяг 70–90 слів, звертання й прощання на місці?',
      ],
      model:
`Sehr geehrter Herr Brandner,

ich habe Ihre Anzeige über das gebrauchte Trekkingrad im Internet gesehen und interessiere mich
sehr für das angebotene Modell.

Könnten Sie mir sagen, ob die eingebauten Bremsen wirklich neu sind? Auf den Fotos sehe ich
außerdem zwei kleine Kratzer — gibt es weitere beschädigte Stellen am Rahmen?

Mich würde auch interessieren, ob der genannte Preis verhandelbar ist und ob eine Abholung
am Wochenende möglich wäre. Samstagvormittag würde mir gut passen.

Über eine kurze Antwort würde ich mich freuen.

Mit freundlichen Grüßen
Oleh Bondar`,
      modelUk: 'Переклад: Шановний пане Брандне́ре, я побачив Ваше оголошення про уживаний трекінговий велосипед в інтернеті й дуже цікавлюся запропонованою моделлю. Чи могли б Ви сказати, чи справді встановлені гальма нові? На фото я до того ж бачу дві невеликі подряпини — чи є інші пошкоджені місця на рамі? Мене цікавило б також, чи обговорювана вказана ціна і чи можливий самовивіз на вихідних. Субота до обіду мені добре підійшла б. Був би радий короткій відповіді. З повагою, Олег Бондар.',
    },
  ],

  test: [
    { type: 'gap', q: 'das Buch, das gelesen wurde → das ___ Buch', answers: ['gelesene'] },
    { type: 'gap', q: 'der Hund, der bellt → der ___ Hund', answers: ['bellende'] },
    { type: 'gap', q: 'die Kosten, die sinken → die ___ Kosten', answers: ['sinkenden'] },
    { type: 'gap', q: 'Ich danke dem ___. (der Kollege)', answers: ['Kollegen'] },
    { type: 'gap', q: 'Wir warten auf den ___. (der Kunde)', answers: ['Kunden'] },
    { type: 'gap', q: 'Das war die Idee des ___. (der Mensch — Genitiv)', answers: ['Menschen'] },
    { type: 'choice', q: 'Пасивне значення:',
      options: ['die arbeitende Frau', 'das weinende Kind', 'der reparierte Wagen', 'die steigenden Preise'],
      answer: 2 },
    { type: 'choice', q: 'Яка форма правильна?',
      options: ['Ich sehe den Herr.', 'Ich sehe den Herrn.', 'Ich sehe der Herrn.', 'Ich sehe dem Herr.'],
      answer: 1 },
    { type: 'choice', q: '<span class="de-inline">der Name</span> у Genitiv:',
      options: ['des Name', 'des Namen', 'des Namens', 'der Name'], answer: 2 },
    { type: 'order', q: 'Складіть речення.',
      words: ['Ich', 'suche', 'ein', 'gebrauchtes', 'Fahrrad', 'in', 'gutem', 'Zustand'],
      answer: 'Ich suche ein gebrauchtes Fahrrad in gutem Zustand' },
    { type: 'match', q: 'Доберіть переклад.',
      pairs: [['der Zustand', 'стан речі'], ['einwandfrei', 'бездоганний'], ['verhandelbar', 'обговорювана ціна'],
        ['beschädigt', 'пошкоджений'], ['anstrengend', 'виснажливий'], ['die Abholung', 'самовивіз']] },
    { type: 'multi', q: 'Позначте Partizip I.',
      options: ['schlafend', 'geschlafen', 'steigend', 'gestiegen', 'weinend'],
      answers: [0, 2, 4] },
    { type: 'truefalse', q: 'Дієприкметник перед іменником отримує звичайні прикметникові закінчення.',
      answer: true },
    { type: 'truefalse', q: '<span class="de-inline">der Journalist</span> у Dativ — <span class="de-inline">dem Journalist</span>.',
      answer: false,
      explain: 'dem Journalisten — це n-Deklination.' },
  ],
};

export const modules = [m6, m7, m8];
