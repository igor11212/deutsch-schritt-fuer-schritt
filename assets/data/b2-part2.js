/* B2, модулі 3–5: минулий Konjunktiv II, номіналізація vs вербалізація,
   партиципні означення й розширені означальні речення. */

const m3 = {
  id: 'm3',
  title: 'Konjunktiv II der Vergangenheit',
  titleUk: 'Минулий умовний спосіб: що могло б бути інакше',
  can: [
    'утворювати минулий Konjunktiv II (hätte / wäre + Partizip II)',
    'будувати нереальні умови в минулому',
    'уживати модальні дієслова в минулому Konjunktiv II',
    'висловлювати докір, жаль і майже-подію (beinahe, fast)',
    'відрізняти реальний Perfekt від нереального минулого',
  ],

  grammar: [
    {
      title: '1. Форма: лише один спосіб',
      html: `
<p>Хороша новина: у минулому Konjunktiv II <strong>одна форма на всі дієслова</strong> —
<em>hätte</em> або <em>wäre</em> + Partizip II. Ніяких <em>würde</em> тут не буває.</p>
<table>
<thead><tr><th>Час</th><th>Реальність (Indikativ)</th><th>Нереальність (Konjunktiv II)</th></tr></thead>
<tbody>
<tr><td>теперішнє</td><td><em>Ich habe Zeit.</em><span class="uk">Я маю час.</span></td>
<td><em>Ich <strong>hätte</strong> Zeit.</em><span class="uk">Я мав би час.</span></td></tr>
<tr><td>минуле</td><td><em>Ich habe Zeit gehabt.</em><span class="uk">Я мав час.</span></td>
<td><em>Ich <strong>hätte</strong> Zeit <strong>gehabt</strong>.</em><span class="uk">Я мав би час (тоді).</span></td></tr>
<tr><td>минуле, дієслово руху</td><td><em>Ich bin gekommen.</em><span class="uk">Я прийшов.</span></td>
<td><em>Ich <strong>wäre gekommen</strong>.</em><span class="uk">Я прийшов би (тоді).</span></td></tr>
</tbody></table>
<p><strong>Яке допоміжне дієслово брати</strong> — те саме, що в Perfekt:</p>
<table>
<thead><tr><th>Perfekt</th><th>Минулий Konjunktiv II</th></tr></thead>
<tbody>
<tr><td><em>ich habe gearbeitet</em></td><td><em>ich <strong>hätte</strong> gearbeitet</em><span class="uk">я працював би</span></td></tr>
<tr><td><em>ich bin gefahren</em></td><td><em>ich <strong>wäre</strong> gefahren</em><span class="uk">я поїхав би</span></td></tr>
<tr><td><em>ich habe es gesehen</em></td><td><em>ich <strong>hätte</strong> es gesehen</em><span class="uk">я побачив би це</span></td></tr>
<tr><td><em>ich bin geblieben</em></td><td><em>ich <strong>wäre</strong> geblieben</em><span class="uk">я залишився б</span></td></tr>
</tbody></table>
<div class="callout"><strong>Найчастіша помилка B2.</strong> «<s>Ich würde gekommen sein</s>» —
такої форми в живій німецькій немає. Тільки <em>Ich wäre gekommen</em>.
<em>würde</em> працює лише в <u>теперішньому</u> Konjunktiv II.</div>`,
    },
    {
      title: '2. Нереальна умова в минулому',
      html: `
<p>Це головне застосування форми: сказати, що <strong>могло б бути інакше, але вже не буде</strong>.
Обидві частини стоять у минулому Konjunktiv II.</p>
<table>
<thead><tr><th>Тип умови</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td>реальна (може статися)</td>
<td><em>Wenn ich Zeit <strong>habe</strong>, <strong>komme</strong> ich.</em><span class="uk">Якщо маю час, приходжу.</span></td></tr>
<tr><td>нереальна в теперішньому</td>
<td><em>Wenn ich Zeit <strong>hätte</strong>, <strong>würde</strong> ich <strong>kommen</strong>.</em><span class="uk">Якби я мав час, я б прийшов.</span></td></tr>
<tr><td><strong>нереальна в минулому</strong></td>
<td><em>Wenn ich Zeit <strong>gehabt hätte</strong>, <strong>wäre</strong> ich <strong>gekommen</strong>.</em>
<span class="uk">Якби я тоді мав час, я б прийшов. (але не мав — і не прийшов)</span></td></tr>
</tbody></table>
<p><strong>Варіант без wenn</strong> — типовий для письмових текстів B2–C1. Речення починається
просто з дієслова:</p>
<ul>
<li><em><strong>Hätte</strong> ich das gewusst, <strong>wäre</strong> ich früher gegangen.</em>
<span class="uk">Знав би я це, я пішов би раніше.</span></li>
<li><em><strong>Wäre</strong> der Zug pünktlich gekommen, <strong>hätten</strong> wir den Anschluss erreicht.</em>
<span class="uk">Прийшов би потяг вчасно, ми б устигли на пересадку.</span></li>
</ul>
<div class="callout callout--tip"><strong>Український відповідник точний.</strong>
Ми теж кажемо «якби… то б…» і теж можемо викинути «якби»: «Знав би я це — пішов би раніше».
Тобто структура вам знайома; треба лише вправити руку на <em>hätte / wäre</em>.</div>`,
    },
    {
      title: '3. Модальні дієслова: складніша будова',
      html: `
<p>Коли в нереальному минулому є модальне дієслово, порядок особливий:
<strong><em>hätte</em> + інфінітив + модальне в інфінітиві</strong>. Тобто модальне
йде <u>останнім</u>, і воно не стає Partizip II.</p>
<table>
<thead><tr><th>Схема</th><th>Приклад</th><th>Переклад</th></tr></thead>
<tbody>
<tr><td><em>hätte … machen können</em></td><td><em>Ich <strong>hätte</strong> dir <strong>helfen können</strong>.</em></td>
<td>Я міг би тобі допомогти. (але не допоміг)</td></tr>
<tr><td><em>hätte … machen müssen</em></td><td><em>Du <strong>hättest</strong> früher <strong>anrufen müssen</strong>.</em></td>
<td>Ти мусив був подзвонити раніше.</td></tr>
<tr><td><em>hätte … machen sollen</em></td><td><em>Wir <strong>hätten</strong> das <strong>prüfen sollen</strong>.</em></td>
<td>Нам варто було це перевірити.</td></tr>
<tr><td><em>hätte … machen dürfen</em></td><td><em>Er <strong>hätte</strong> nicht <strong>fahren dürfen</strong>.</em></td>
<td>Йому не можна було їхати.</td></tr>
</tbody></table>
<div class="callout"><strong>Порівняйте з нормальним Perfekt.</strong>
У реальному минулому модальне дієслово теж лишається інфінітивом:
<em>Ich <u>habe</u> arbeiten müssen</em> — «мені довелося працювати».
Різниця лише в <em>habe</em> проти <em>hätte</em>. Одна літера змінює реальність на нереальність.</div>
<p><strong>Ця конструкція — головний інструмент докору й самокритики</strong>, а тому дуже частотна
в розмові:</p>
<ul>
<li><em>Das <strong>hättest</strong> du mir <strong>sagen können</strong>!</em><span class="uk">Ти ж міг мені сказати!</span></li>
<li><em>Ich <strong>hätte</strong> besser <strong>aufpassen sollen</strong>.</em><span class="uk">Мені варто було краще пильнувати.</span></li>
</ul>`,
    },
    {
      title: '4. Жаль, докір і «майже»',
      html: `
<p>Минулий Konjunktiv II майже завжди несе емоцію. Ось чотири готові моделі
з різними відтінками.</p>
<table>
<thead><tr><th>Відтінок</th><th>Модель</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td><strong>жаль про себе</strong></td><td><em>Ich hätte … sollen</em></td>
<td><em>Ich hätte mich früher bewerben sollen.</em><span class="uk">Мені варто було подати заявку раніше.</span></td></tr>
<tr><td><strong>докір іншому</strong></td><td><em>Du hättest … können / müssen</em></td>
<td><em>Du hättest wenigstens fragen können.</em><span class="uk">Ти міг би хоч запитати.</span></td></tr>
<tr><td><strong>«майже сталося»</strong></td><td><em>beinahe / fast + hätte / wäre</em></td>
<td><em>Beinahe hätte ich den Zug verpasst.</em><span class="uk">Я ледь не проґавив потяг. (але встиг)</span></td></tr>
<tr><td><strong>нездійснене бажання</strong></td><td><em>Ich wünschte, … hätte / wäre</em></td>
<td><em>Ich wünschte, ich hätte mehr Zeit gehabt.</em><span class="uk">Хотів би я, щоб у мене було більше часу.</span></td></tr>
</tbody></table>
<div class="callout callout--tip"><strong>Логіка «beinahe».</strong> Із <em>beinahe</em> і <em>fast</em>
нереальна форма означає, що подія <u>не</u> сталася — і це добре:
<em>Fast wäre ich gestürzt</em> = «я майже впав», тобто <u>не</u> впав.
Не плутайте з <em>Ich bin fast gestürzt</em>, що звучить так, ніби падіння вже почалося.</div>
<p><strong>Ще один зворот:</strong> <em>an deiner Stelle hätte ich …</em> — «на твоєму місці я б …»
про минуле: <em>An deiner Stelle hätte ich abgelehnt</em> — «На твоєму місці я б відмовився».</p>`,
    },
    {
      title: '5. Слова з прикладів цієї теми',
      html: `
<table>
<thead><tr><th>Слово</th><th>Переклад</th><th>Як ужито в темі</th></tr></thead>
<tbody>
<tr><td><em>den Anschluss erreichen</em></td><td>устигнути на пересадку</td><td><em>… hätten wir den Anschluss erreicht.</em></td></tr>
<tr><td><em>aufpassen</em></td><td>пильнувати, бути уважним</td><td><em>Ich hätte besser aufpassen sollen.</em></td></tr>
<tr><td><em>sich bewerben</em></td><td>подавати заявку</td><td><em>Ich hätte mich früher bewerben sollen.</em></td></tr>
<tr><td><em>wenigstens</em></td><td>хоч би, принаймні</td><td><em>Du hättest wenigstens fragen können.</em></td></tr>
<tr><td><em>beinahe / fast</em></td><td>майже, ледь не</td><td><em>Beinahe hätte ich den Zug verpasst.</em></td></tr>
<tr><td><em>stürzen</em></td><td>падати, гепатися</td><td><em>Fast wäre ich gestürzt.</em></td></tr>
<tr><td><em>ablehnen</em></td><td>відмовляти, відхиляти</td><td><em>An deiner Stelle hätte ich abgelehnt.</em></td></tr>
<tr><td><em>prüfen</em></td><td>перевіряти</td><td><em>Wir hätten das prüfen sollen.</em></td></tr>
<tr><td><em>der Vorwurf, ¨-e</em></td><td>докір</td><td>Назва однієї з функцій цієї форми.</td></tr>
<tr><td><em>das Versäumnis, -se</em></td><td>прогаяне, недогляд</td><td>Слово з письмового завдання цього модуля.</td></tr>
</tbody></table>`,
    },
  ],

  vocab: [
    {
      group: 'Жаль і докір',
      items: [
        { de: 'Ich hätte … sollen', uk: 'мені варто було …' },
        { de: 'Du hättest … können', uk: 'ти міг би …' },
        { de: 'Ich wünschte, …', uk: 'хотів би я, щоб …' },
        { de: 'der Vorwurf, ¨-e', uk: 'докір' },
        { de: 'jemandem etwas vorwerfen', uk: 'докоряти комусь чимось' },
        { de: 'bedauern', uk: 'жалкувати' },
        { de: 'das Bedauern', uk: 'жаль' },
        { de: 'sich ärgern über + Akk.', uk: 'злитися на' },
        { de: 'im Nachhinein', uk: 'у ретроспективі, потім виявилося' },
        { de: 'rückblickend', uk: 'озираючись назад' },
      ],
    },
    {
      group: 'Рішення й наслідки',
      items: [
        { de: 'die Entscheidung treffen', uk: 'ухвалити рішення' },
        { de: 'ablehnen / annehmen', uk: 'відхилити / прийняти' },
        { de: 'zusagen / absagen', uk: 'погодитися / скасувати' },
        { de: 'die Folge, -n', uk: 'наслідок' },
        { de: 'sich auswirken auf + Akk.', uk: 'впливати на' },
        { de: 'das Risiko eingehen', uk: 'іти на ризик' },
        { de: 'zögern', uk: 'зволікати, вагатися' },
        { de: 'die Chance verpassen', uk: 'проґавити шанс' },
        { de: 'das Versäumnis, -se', uk: 'прогаяне, недогляд' },
        { de: 'sich anders entscheiden', uk: 'вирішити інакше' },
      ],
    },
    {
      group: 'Робота й кар’єра',
      items: [
        { de: 'die Bewerbung, -en', uk: 'заявка, аплікація' },
        { de: 'das Vorstellungsgespräch, -e', uk: 'співбесіда' },
        { de: 'die Probezeit', uk: 'випробний термін' },
        { de: 'die Beförderung, -en', uk: 'підвищення' },
        { de: 'der Vorgesetzte, -n', uk: 'керівник' },
        { de: 'die Kündigung, -en', uk: 'звільнення, розірвання договору' },
        { de: 'die Weiterbildung, -en', uk: 'підвищення кваліфікації' },
        { de: 'sich qualifizieren für + Akk.', uk: 'здобувати кваліфікацію для' },
        { de: 'überqualifiziert', uk: 'надкваліфікований' },
        { de: 'die Fachkraft, ¨-e', uk: 'фахівець' },
      ],
    },
  ],

  exercises: [
    { type: 'gap', q: 'Wenn ich das gewusst ___, ___ ich anders entschieden. (haben / haben)',
      answers: ['hätte', 'hätte'] },
    { type: 'gap', q: 'Wenn der Zug pünktlich gekommen ___, ___ wir den Anschluss erreicht. (sein / haben)',
      answers: ['wäre', 'hätten'] },
    { type: 'gap', q: 'Du ___ mir das früher sagen können. (haben, Konj. II)', answers: ['hättest'] },
    { type: 'gap', q: 'Ich ___ besser aufpassen sollen. (haben, Konj. II)', answers: ['hätte'] },
    { type: 'gap', q: 'Beinahe ___ ich den Termin vergessen. (haben, Konj. II)', answers: ['hätte'] },
    { type: 'gap', q: 'Fast ___ ich gestürzt. (sein, Konj. II)', answers: ['wäre'] },
    { type: 'gap', q: 'Без wenn: ___ ich mehr Zeit gehabt, ___ ich geblieben. (haben / sein)',
      answers: ['Hätte', 'wäre'] },
    { type: 'choice', q: 'Яка форма існує в живій німецькій?',
      options: ['Ich würde gekommen sein.', 'Ich wäre gekommen.',
        'Ich hätte gekommen.', 'Ich würde kommen sein.'],
      answer: 1 },
    { type: 'choice', q: 'Порядок із модальним дієсловом:',
      options: ['Ich hätte helfen gekonnt.', 'Ich hätte helfen können.',
        'Ich hätte gekonnt helfen.', 'Ich wäre helfen können.'],
      answer: 1 },
    { type: 'choice', q: '«Fast wäre ich gestürzt» означає:',
      options: ['Я впав.', 'Я не впав.', 'Я падаю зараз.', 'Я впаду.'], answer: 1 },
    { type: 'order', q: 'Складіть речення.',
      words: ['Du', 'hättest', 'wenigstens', 'anrufen', 'können'],
      answer: 'Du hättest wenigstens anrufen können' },
    { type: 'order', q: 'Складіть речення без wenn.',
      words: ['Hätte', 'ich', 'das', 'gewusst', 'wäre', 'ich', 'nicht', 'gekommen'],
      answer: 'Hätte ich das gewusst wäre ich nicht gekommen' },
    { type: 'match', q: 'Доберіть переклад.',
      pairs: [['Ich hätte … sollen', 'мені варто було'], ['Du hättest … können', 'ти міг би'],
        ['beinahe', 'ледь не'], ['im Nachhinein', 'потім виявилося'],
        ['bedauern', 'жалкувати'], ['der Vorwurf', 'докір']] },
    { type: 'multi', q: 'Позначте правильні форми минулого Konjunktiv II.',
      options: ['ich hätte gearbeitet', 'ich würde gearbeitet haben', 'ich wäre gefahren',
        'ich hätte gefahren', 'ich hätte es machen können'],
      answers: [0, 2, 4],
      explain: '«würde … haben» не вживають, а gefahren вимагає wäre.' },
    { type: 'truefalse', q: 'У минулому Konjunktiv II модальне дієслово стає Partizip II.',
      answer: false,
      explain: 'Воно лишається інфінітивом і стоїть останнім: hätte helfen können.' },
  ],

  listening: [
    {
      exam: 'Goethe B2 · Hören Teil 1',
      title: 'Nach dem Vorstellungsgespräch',
      instruction: 'Двоє друзів обговорюють невдалу співбесіду. Слідкуйте за докорами й жалем.',
      lines: [
        { speaker: 'Nadia', de: 'Und? Wie war das Gespräch?', uk: 'Ну і? Як пройшла співбесіда?' },
        { speaker: 'Roman', de: 'Ehrlich gesagt schlecht. Ich hätte mich besser vorbereiten sollen.', uk: 'Правду кажучи, погано. Мені варто було краще підготуватися.' },
        { speaker: 'Nadia', de: 'Was ist passiert?', uk: 'Що сталося?' },
        { speaker: 'Roman', de: 'Sie haben nach konkreten Zahlen aus meinem letzten Projekt gefragt. Die hätte ich mitbringen können, aber ich habe nicht daran gedacht.', uk: 'Вони запитали конкретні цифри з мого останнього проєкту. Я міг би їх принести, але не подумав про це.' },
        { speaker: 'Nadia', de: 'Das hättest du wirklich vorher recherchieren müssen. Und sonst?', uk: 'Це тобі справді треба було заздалегідь підготувати. А в іншому?' },
        { speaker: 'Roman', de: 'Beinahe hätte ich auch den Termin verpasst — die Straßenbahn hatte Verspätung.', uk: 'Я ледь не проґавив ще й час зустрічі — трамвай запізнювався.' },
        { speaker: 'Nadia', de: 'Wärst du zehn Minuten früher losgefahren, hättest du dir den Stress erspart.', uk: 'Виїхав би ти на десять хвилин раніше, зекономив би собі стрес.' },
        { speaker: 'Roman', de: 'Ich weiß. Im Nachhinein ist man immer klüger. Aber sie haben mich für nächste Woche noch einmal eingeladen.', uk: 'Знаю. Потім усі розумні. Але вони запросили мене ще раз на наступний тиждень.' },
        { speaker: 'Nadia', de: 'Siehst du? Dann war es doch nicht so schlimm, wie du denkst.', uk: 'Бачиш? Тоді все не так погано, як ти думаєш.' },
      ],
      tasks: [
        { type: 'choice', q: 'Warum ist Roman unzufrieden?',
          options: ['Er kam zu spät', 'Er war schlecht vorbereitet', 'Die Stelle war schlecht bezahlt', 'Er mochte die Firma nicht'], answer: 1 },
        { type: 'choice', q: 'Was hätte er mitbringen sollen?',
          options: ['Einen Lebenslauf', 'Konkrete Zahlen aus einem Projekt', 'Zeugnisse', 'Ein Portfolio'], answer: 1 },
        { type: 'truefalse', q: 'Roman hat den Termin verpasst.', answer: false,
          explain: '«Beinahe hätte ich verpasst» — ледь не, тобто таки не проґавив.' },
        { type: 'gap', q: 'Nadia sagt: Wärst du ___ Minuten früher losgefahren …', answers: ['zehn|10'] },
        { type: 'multi', q: 'Was stimmt?',
          options: ['Die Straßenbahn hatte Verspätung.', 'Roman wird noch einmal eingeladen.',
            'Nadia macht ihm einen Vorwurf.', 'Roman hat die Stelle sofort bekommen.'],
          answers: [0, 1, 2] },
      ],
    },
  ],

  writing: [
    {
      exam: 'Goethe B2 · Schreiben Teil 1',
      title: 'Forumsbeitrag: Eine Entscheidung, die ich bedaure',
      situation: 'У форумі про кар’єру запитали: «Яке рішення ви ухвалили б інакше?» Напишіть відповідь: <strong>150–180 слів</strong>. Уживіть минулий Konjunktiv II щонайменше чотири рази, у тому числі з модальним дієсловом.',
      points: [
        'Beschreiben Sie die damalige Situation.',
        'Sagen Sie, was Sie anders gemacht hätten.',
        'Erklären Sie, was daraus geworden wäre.',
        'Ziehen Sie ein Fazit für andere.',
      ],
      minWords: 150,
      phrases: [
        { de: 'Rückblickend war das die falsche Entscheidung.', uk: 'Озираючись назад, це було хибне рішення.' },
        { de: 'Ich hätte mich damals gründlicher informieren sollen.', uk: 'Мені тоді варто було ґрунтовніше поінформуватися.' },
        { de: 'Hätte ich das gewusst, wäre ich geblieben.', uk: 'Знав би я це, я б залишився.' },
        { de: 'Ich hätte durchaus nachfragen können.', uk: 'Я цілком міг би перепитати.' },
        { de: 'Beinahe hätte ich die zweite Chance auch verpasst.', uk: 'Я ледь не проґавив і другий шанс.' },
        { de: 'Im Nachhinein ist man immer klüger.', uk: 'Потім усі розумні.' },
        { de: 'Wer vor einer ähnlichen Wahl steht, sollte sich Zeit nehmen.', uk: 'Хто стоїть перед схожим вибором, має дати собі час.' },
      ],
      checklist: [
        'Є щонайменше чотири форми минулого Konjunktiv II?',
        'Є конструкція з модальним дієсловом (hätte … können / sollen / müssen)?',
        'Є хоча б одне речення без wenn (Hätte ich … , wäre ich …)?',
        'Текст має вступ, розповідь і висновок?',
        'Обсяг 150–180 слів?',
      ],
      model:
`Rückblickend war meine erste Stellenwahl nach dem Studium eindeutig die falsche Entscheidung.

Damals hatte ich zwei Angebote: eine sichere Stelle in einer großen Verwaltung und ein kleines
Start-up mit unklarer Zukunft. Ich habe die Verwaltung genommen, weil ich Angst vor dem Risiko hatte.
Heute weiß ich, dass ich mich gründlicher informieren hätte sollen. Ich hätte durchaus mit den
Leuten aus dem Start-up sprechen können, doch das habe ich aus Bequemlichkeit unterlassen.

Hätte ich damals das Risiko akzeptiert, wäre ich fachlich viel schneller gewachsen. Beinahe hätte
ich zwei Jahre später sogar die zweite Chance verpasst: Eine Kollegin musste mich fast überreden,
mich noch einmal zu bewerben. Ohne dieses Gespräch wäre ich wahrscheinlich bis heute im selben Büro.

Mein Fazit: Sicherheit ist kein Argument, wenn sie nur aus Angst gewählt wird. Wer vor einer
ähnlichen Wahl steht, sollte sich zwei Wochen Zeit nehmen und mit Menschen sprechen, die den Weg
schon gegangen sind. Im Nachhinein ist man immer klüger — vorher fragen kostet weniger.`,
      modelUk: 'Переклад: Озираючись назад, мій перший вибір роботи після навчання був однозначно хибним рішенням. Тоді я мав дві пропозиції: надійну посаду у великій адміністрації та маленький стартап із неясним майбутнім. Я взяв адміністрацію, бо боявся ризику. Сьогодні знаю, що мені варто було ґрунтовніше поінформуватися. Я цілком міг би поговорити з людьми зі стартапу, але з лінощів цього не зробив. Прийняв би я тоді ризик, я фахово зростав би значно швидше. Я ледь не проґавив за два роки навіть другий шанс: колега мусила мене майже переконувати подати заявку ще раз. Без тієї розмови я, імовірно, до сьогодні сидів би в тому самому кабінеті. Мій висновок: надійність не є аргументом, якщо її обирають лише зі страху. Хто стоїть перед схожим вибором, має дати собі два тижні й поговорити з людьми, які цей шлях уже пройшли. Потім усі розумні — запитати заздалегідь коштує менше.',
    },
  ],

  test: [
    { type: 'gap', q: 'Wenn ich früher aufgestanden ___, ___ ich den Bus erreicht. (sein / haben)',
      answers: ['wäre', 'hätte'] },
    { type: 'gap', q: 'Du ___ mich anrufen müssen. (haben, Konj. II)', answers: ['hättest'] },
    { type: 'gap', q: 'Wir ___ das anders lösen können. (haben, Konj. II)', answers: ['hätten'] },
    { type: 'gap', q: 'Beinahe ___ er zu spät gekommen. (sein, Konj. II)', answers: ['wäre'] },
    { type: 'gap', q: 'Ich wünschte, ich ___ mehr Zeit gehabt. (haben, Konj. II)', answers: ['hätte'] },
    { type: 'choice', q: 'Яке речення правильне?',
      options: ['Ich würde geblieben sein.', 'Ich wäre geblieben.',
        'Ich hätte geblieben.', 'Ich wäre bleiben.'],
      answer: 1 },
    { type: 'choice', q: 'Докір іншому:',
      options: ['Ich hätte das machen sollen.', 'Das hättest du sehen müssen.',
        'Ich wäre gekommen.', 'Beinahe wäre ich gestürzt.'],
      answer: 1 },
    { type: 'choice', q: 'Правильний порядок:',
      options: ['Er hätte nicht fahren dürfen.', 'Er hätte nicht gedurft fahren.',
        'Er wäre nicht fahren dürfen.', 'Er hätte nicht fahren gedurft.'],
      answer: 0 },
    { type: 'order', q: 'Складіть речення.',
      words: ['Ich', 'hätte', 'mich', 'früher', 'bewerben', 'sollen'],
      answer: 'Ich hätte mich früher bewerben sollen' },
    { type: 'order', q: 'Складіть речення без wenn.',
      words: ['Wäre', 'ich', 'früher', 'losgefahren', 'hätte', 'ich', 'den', 'Zug', 'erreicht'],
      answer: 'Wäre ich früher losgefahren hätte ich den Zug erreicht' },
    { type: 'match', q: 'Доберіть переклад.',
      pairs: [['die Folge', 'наслідок'], ['zögern', 'вагатися'], ['die Beförderung', 'підвищення'],
        ['die Probezeit', 'випробний термін'], ['ablehnen', 'відхиляти'], ['rückblickend', 'озираючись назад']] },
    { type: 'multi', q: 'Позначте речення про нездійснене минуле.',
      options: ['Ich hätte gerne geholfen.', 'Ich habe gerne geholfen.',
        'Wir wären gekommen.', 'Wir sind gekommen.', 'Du hättest fragen können.'],
      answers: [0, 2, 4] },
    { type: 'truefalse', q: 'У минулому Konjunktiv II <span class="de-inline">würde</span> не вживають.',
      answer: true },
    { type: 'truefalse', q: '«Beinahe hätte ich verschlafen» означає, що я таки проспав.',
      answer: false,
      explain: 'Навпаки — ледь не проспав, але встав.' },
  ],
};

const m4 = {
  id: 'm4',
  title: 'Nominalstil und Verbalstil',
  titleUk: 'Номінальний і вербальний стиль: як перекладати речення в іменники й назад',
  can: [
    'перетворювати підрядне речення на прийменникову групу',
    'уживати aufgrund, wegen, trotz, infolge, während, nach',
    'розпізнавати номінальний стиль в офіційних текстах',
    'розгортати іменникову групу назад у речення',
    'обирати стиль відповідно до жанру тексту',
  ],

  grammar: [
    {
      title: '1. Два способи сказати те саме',
      html: `
<p>Німецька дозволяє висловити ту саму думку або <strong>реченням із дієсловом</strong>
(вербальний стиль), або <strong>іменниковою групою з прийменником</strong> (номінальний стиль).
Перше — для розмови й листів, друге — для офіційних текстів, звітів і статей.</p>
<table>
<thead><tr><th>Вербальний стиль (речення)</th><th>Номінальний стиль (іменник)</th></tr></thead>
<tbody>
<tr><td><em><strong>Weil</strong> es stark <strong>regnete</strong>, fiel das Spiel aus.</em>
<span class="uk">Оскільки сильно дощило, гру скасували.</span></td>
<td><em><strong>Wegen</strong> des starken Regens fiel das Spiel aus.</em>
<span class="uk">Через сильний дощ гру скасували.</span></td></tr>
<tr><td><em><strong>Obwohl</strong> das Wetter schlecht <strong>war</strong>, kamen viele.</em></td>
<td><em><strong>Trotz</strong> des schlechten Wetters kamen viele.</em>
<span class="uk">Попри погану погоду прийшло багато людей.</span></td></tr>
<tr><td><em><strong>Nachdem</strong> der Vertrag <strong>unterschrieben worden war</strong>, begann die Arbeit.</em></td>
<td><em><strong>Nach</strong> der Unterzeichnung des Vertrags begann die Arbeit.</em>
<span class="uk">Після підписання договору робота почалася.</span></td></tr>
<tr><td><em><strong>Wenn</strong> Sie <strong>Fragen haben</strong>, rufen Sie an.</em></td>
<td><em><strong>Bei</strong> Fragen rufen Sie an.</em><span class="uk">У разі питань дзвоніть.</span></td></tr>
</tbody></table>
<div class="callout callout--tip"><strong>Навіщо це вміння.</strong> На B2 у Lesen половина текстів
написана номінальним стилем — без цього навику вони здаються неможливо складними.
А у Schreiben уміння <u>вставити</u> одну-дві номінальні групи одразу піднімає реєстр тексту.</div>`,
    },
    {
      title: '2. Таблиця відповідників',
      html: `
<p>Це основний робочий інструмент теми. Запам’ятайте пари «сполучник → прийменник»
разом із відмінком.</p>
<table>
<thead><tr><th>Значення</th><th>Сполучник</th><th>Прийменник + відмінок</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td><strong>причина</strong></td><td><em>weil, da</em></td>
<td><em>wegen</em> + Gen.<br><em>aufgrund</em> + Gen.<br><em>vor</em> + Dat. (емоція)</td>
<td><em>wegen des Streiks</em><span class="uk">через страйк</span></td></tr>
<tr><td><strong>наслідок</strong></td><td><em>sodass, deshalb</em></td>
<td><em>infolge</em> + Gen.</td>
<td><em>infolge der Krise</em><span class="uk">унаслідок кризи</span></td></tr>
<tr><td><strong>поступка</strong></td><td><em>obwohl</em></td>
<td><em>trotz</em> + Gen.</td>
<td><em>trotz der Kosten</em><span class="uk">попри витрати</span></td></tr>
<tr><td><strong>час: одночасність</strong></td><td><em>während</em></td>
<td><em>während</em> + Gen.<br><em>bei</em> + Dat.</td>
<td><em>während der Sitzung</em><span class="uk">під час засідання</span></td></tr>
<tr><td><strong>час: перед / після</strong></td><td><em>bevor / nachdem</em></td>
<td><em>vor</em> / <em>nach</em> + Dat.</td>
<td><em>nach der Prüfung</em><span class="uk">після іспиту</span></td></tr>
<tr><td><strong>умова</strong></td><td><em>wenn, falls</em></td>
<td><em>bei</em> + Dat.<br><em>im Falle</em> + Gen.</td>
<td><em>bei Regen</em><span class="uk">у разі дощу</span></td></tr>
<tr><td><strong>мета</strong></td><td><em>um … zu, damit</em></td>
<td><em>zu</em> + Dat.<br><em>zum Zweck</em> + Gen.</td>
<td><em>zur Verbesserung der Qualität</em><span class="uk">для покращення якості</span></td></tr>
<tr><td><strong>заміна</strong></td><td><em>statt … zu</em></td>
<td><em>anstelle / statt</em> + Gen.</td>
<td><em>anstelle einer Antwort</em><span class="uk">замість відповіді</span></td></tr>
</tbody></table>
<div class="callout"><strong>Пастка з <em>wegen</em>.</strong> Формально <em>wegen</em> вимагає Genitiv:
<em>wegen des Wetters</em>. У розмові часто чути <em>wegen dem Wetter</em> (Dativ) — це поширено,
але на іспиті пишіть Genitiv.</div>`,
    },
    {
      title: '3. Як утворити іменник від дієслова',
      html: `
<p>Щоб перейти у номінальний стиль, потрібен іменник від дієслова. Чотири головні шляхи:</p>
<table>
<thead><tr><th>Спосіб</th><th>Приклад</th><th>Рід</th></tr></thead>
<tbody>
<tr><td><strong>-ung</strong> (найчастіший)</td>
<td><em>prüfen → die Prüf<strong>ung</strong></em>, <em>lösen → die Lös<strong>ung</strong></em>,
<em>entscheiden → die Entscheid<strong>ung</strong></em></td><td>завжди <strong>die</strong></td></tr>
<tr><td><strong>інфінітив як іменник</strong></td>
<td><em>rauchen → <strong>das</strong> Rauchen</em>, <em>lesen → <strong>das</strong> Lesen</em></td>
<td>завжди <strong>das</strong></td></tr>
<tr><td><strong>без суфікса</strong> (від основи)</td>
<td><em>beginnen → <strong>der</strong> Beginn</em>, <em>anrufen → <strong>der</strong> Anruf</em>,
<em>verkaufen → <strong>der</strong> Verkauf</em></td><td>переважно <strong>der</strong></td></tr>
<tr><td><strong>-e, -t, -nis</strong></td>
<td><em>fragen → die Frag<strong>e</strong></em>, <em>fahren → die Fahr<strong>t</strong></em>,
<em>ergeben → das Ergeb<strong>nis</strong></em></td><td>різний</td></tr>
</tbody></table>
<p><strong>Повний приклад перетворення</strong> покроково:</p>
<table>
<thead><tr><th>Крок</th><th>Результат</th></tr></thead>
<tbody>
<tr><td>0. вихідне речення</td><td><em>Weil die Preise gestiegen sind, sinkt die Nachfrage.</em></td></tr>
<tr><td>1. дієслово → іменник</td><td><em>steigen → der Anstieg</em></td></tr>
<tr><td>2. підмет → Genitiv</td><td><em>die Preise → der Preise</em></td></tr>
<tr><td>3. сполучник → прийменник</td><td><em>weil → aufgrund</em></td></tr>
<tr><td>4. збираємо</td><td><em><strong>Aufgrund des Anstiegs der Preise</strong> sinkt die Nachfrage.</em>
<span class="uk">Через зростання цін попит падає.</span></td></tr>
</tbody></table>
<div class="callout callout--tip"><strong>Порада щодо міри.</strong> Німці самі критикують надмірний
номінальний стиль — його називають <em>Beamtendeutsch</em>, «чиновницька німецька».
Найкращий текст на B2 змішує обидва стилі: складні думки — номінально, головні тези — дієсловом.</div>`,
    },
    {
      title: '4. Зворотний хід: розгортаємо іменник у речення',
      html: `
<p>У Lesen корисніше вміти протилежне: побачити довгу іменникову групу
й швидко перекласти її в звичайне речення. Дивіться на прийменник — він підкаже сполучник.</p>
<table>
<thead><tr><th>Офіційно</th><th>Розгорнуто</th></tr></thead>
<tbody>
<tr><td><em>Nach Prüfung der Unterlagen erhalten Sie einen Bescheid.</em></td>
<td><em>Nachdem wir die Unterlagen geprüft haben, erhalten Sie einen Bescheid.</em>
<span class="uk">Після того як ми перевіримо документи, Ви отримаєте рішення.</span></td></tr>
<tr><td><em>Bei Nichtbezahlung der Rechnung wird der Vertrag gekündigt.</em></td>
<td><em>Wenn die Rechnung nicht bezahlt wird, wird der Vertrag gekündigt.</em>
<span class="uk">Якщо рахунок не оплачено, договір буде розірвано.</span></td></tr>
<tr><td><em>Trotz mehrfacher Mahnungen erfolgte keine Reaktion.</em></td>
<td><em>Obwohl wir mehrmals gemahnt haben, hat niemand reagiert.</em>
<span class="uk">Хоча ми кілька разів нагадували, ніхто не відреагував.</span></td></tr>
<tr><td><em>Zur Vermeidung von Missverständnissen bitten wir um Rückmeldung.</em></td>
<td><em>Damit keine Missverständnisse entstehen, bitten wir um Rückmeldung.</em>
<span class="uk">Щоб не виникло непорозумінь, просимо про відповідь.</span></td></tr>
</tbody></table>
<div class="callout"><strong>Слова-сигнали офіційного стилю.</strong> <em>erfolgen</em> замість
«відбуватися», <em>Nichtbezahlung</em> замість «не оплатити», <em>Bescheid</em> замість «відповідь»,
<em>Rückmeldung</em> замість «відповідь від Вас». Побачивши їх, ви вже знаєте: далі буде
номінальна конструкція, і її потрібно розгорнути.</div>`,
    },
    {
      title: '5. Слова з прикладів цієї теми',
      html: `
<table>
<thead><tr><th>Слово</th><th>Переклад</th><th>Як ужито в темі</th></tr></thead>
<tbody>
<tr><td><em>ausfallen</em></td><td>скасовуватися, не відбуватися</td><td><em>… fiel das Spiel aus.</em></td></tr>
<tr><td><em>die Unterzeichnung</em></td><td>підписання</td><td><em>Nach der Unterzeichnung des Vertrags …</em></td></tr>
<tr><td><em>der Anstieg</em></td><td>зростання</td><td><em>Aufgrund des Anstiegs der Preise …</em></td></tr>
<tr><td><em>die Nachfrage</em></td><td>попит</td><td><em>… sinkt die Nachfrage.</em></td></tr>
<tr><td><em>erfolgen</em></td><td>відбуватися (офіційно)</td><td><em>… erfolgte keine Reaktion.</em></td></tr>
<tr><td><em>der Bescheid, -e</em></td><td>офіційне рішення, повідомлення</td><td><em>… erhalten Sie einen Bescheid.</em></td></tr>
<tr><td><em>die Mahnung, -en</em></td><td>нагадування, попередження про борг</td><td><em>Trotz mehrfacher Mahnungen …</em></td></tr>
<tr><td><em>die Rückmeldung, -en</em></td><td>відповідь, зворотний зв’язок</td><td><em>… bitten wir um Rückmeldung.</em></td></tr>
<tr><td><em>das Missverständnis, -se</em></td><td>непорозуміння</td><td><em>Zur Vermeidung von Missverständnissen …</em></td></tr>
<tr><td><em>die Vermeidung</em></td><td>уникнення</td><td>Іменник від <em>vermeiden</em> — уникати.</td></tr>
</tbody></table>`,
    },
  ],

  vocab: [
    {
      group: 'Прийменники номінального стилю',
      items: [
        { de: 'wegen + Gen.', uk: 'через (причина)' },
        { de: 'aufgrund + Gen.', uk: 'на підставі, через' },
        { de: 'infolge + Gen.', uk: 'унаслідок' },
        { de: 'trotz + Gen.', uk: 'попри' },
        { de: 'während + Gen.', uk: 'під час' },
        { de: 'anstelle / statt + Gen.', uk: 'замість' },
        { de: 'im Falle + Gen.', uk: 'у разі' },
        { de: 'hinsichtlich + Gen.', uk: 'щодо' },
        { de: 'mangels + Gen.', uk: 'за браком' },
        { de: 'zwecks + Gen.', uk: 'з метою' },
        { de: 'bei + Dat.', uk: 'у разі, при' },
        { de: 'zu + Dat. (zur Verbesserung)', uk: 'для (покращення)' },
      ],
    },
    {
      group: 'Часті віддієслівні іменники',
      items: [
        { de: 'die Entscheidung (entscheiden)', uk: 'рішення' },
        { de: 'die Prüfung (prüfen)', uk: 'перевірка; іспит' },
        { de: 'die Lösung (lösen)', uk: 'розв’язання' },
        { de: 'die Umsetzung (umsetzen)', uk: 'втілення' },
        { de: 'die Zunahme (zunehmen)', uk: 'збільшення' },
        { de: 'der Anstieg (steigen)', uk: 'зростання' },
        { de: 'der Rückgang (zurückgehen)', uk: 'спад' },
        { de: 'die Einführung (einführen)', uk: 'запровадження' },
        { de: 'die Vermeidung (vermeiden)', uk: 'уникнення' },
        { de: 'die Verzögerung (verzögern)', uk: 'затримка' },
      ],
    },
    {
      group: 'Офіційне листування',
      items: [
        { de: 'der Bescheid, -e', uk: 'офіційне рішення' },
        { de: 'die Mahnung, -en', uk: 'нагадування про борг' },
        { de: 'die Rückmeldung, -en', uk: 'відповідь, зворотний зв’язок' },
        { de: 'der Nachweis, -e', uk: 'підтвердження' },
        { de: 'die Frist einhalten', uk: 'дотримати терміну' },
        { de: 'erfolgen', uk: 'відбуватися (офіційно)' },
        { de: 'beantragen', uk: 'подавати заяву на' },
        { de: 'genehmigen', uk: 'затверджувати, схвалювати' },
        { de: 'zuständig sein für + Akk.', uk: 'бути відповідальним за' },
        { de: 'in Kraft treten', uk: 'набирати чинності' },
      ],
    },
  ],

  exercises: [
    { type: 'gap', q: 'Weil es regnete → ___ des Regens (причина, + Genitiv)', answers: ['wegen|aufgrund'] },
    { type: 'gap', q: 'Obwohl es teuer war → ___ der hohen Kosten', answers: ['trotz'] },
    { type: 'gap', q: 'Nachdem der Vertrag unterschrieben wurde → ___ der Unterzeichnung', answers: ['nach'] },
    { type: 'gap', q: 'Wenn Sie Fragen haben → ___ Fragen', answers: ['bei'] },
    { type: 'gap', q: 'Іменник від дієслова: entscheiden → die ___', answers: ['Entscheidung'] },
    { type: 'gap', q: 'Іменник від дієслова: steigen → der ___', answers: ['Anstieg'] },
    { type: 'gap', q: 'Іменник від дієслова: einführen → die ___', answers: ['Einführung'] },
    { type: 'choice', q: '<span class="de-inline">wegen</span> вимагає:',
      options: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'], answer: 3 },
    { type: 'choice', q: 'Розгорніть: «Bei Nichtbezahlung wird gekündigt.»',
      options: ['Weil nicht bezahlt wird, wird gekündigt.',
        'Wenn nicht bezahlt wird, wird gekündigt.',
        'Obwohl nicht bezahlt wird, wird gekündigt.',
        'Damit nicht bezahlt wird, wird gekündigt.'],
      answer: 1 },
    { type: 'choice', q: 'Який прийменник передає наслідок?',
      options: ['trotz', 'infolge', 'während', 'anstelle'], answer: 1 },
    { type: 'order', q: 'Складіть номінальне речення.',
      words: ['Aufgrund', 'des', 'schlechten', 'Wetters', 'wurde', 'das', 'Konzert', 'abgesagt'],
      answer: 'Aufgrund des schlechten Wetters wurde das Konzert abgesagt' },
    { type: 'order', q: 'Складіть речення.',
      words: ['Trotz', 'mehrfacher', 'Mahnungen', 'erfolgte', 'keine', 'Reaktion'],
      answer: 'Trotz mehrfacher Mahnungen erfolgte keine Reaktion' },
    { type: 'match', q: 'Доберіть прийменник до сполучника.',
      pairs: [['weil', 'wegen + Gen.'], ['obwohl', 'trotz + Gen.'], ['nachdem', 'nach + Dat.'],
        ['wenn', 'bei + Dat.'], ['sodass', 'infolge + Gen.'], ['statt … zu', 'anstelle + Gen.']] },
    { type: 'multi', q: 'Позначте іменники, утворені від дієслова через -ung.',
      options: ['die Lösung', 'der Anruf', 'die Umsetzung', 'das Rauchen', 'die Verzögerung'],
      answers: [0, 2, 4] },
    { type: 'truefalse', q: 'Надмірний номінальний стиль німці називають <span class="de-inline">Beamtendeutsch</span>.',
      answer: true },
  ],

  listening: [
    {
      exam: 'Goethe B2 · Hören Teil 2',
      title: 'Behördentermin: ein Antrag wird erklärt',
      instruction: 'Співробітник відомства говорить офіційною мовою. Слухайте, як заявниця перепитує простішими словами.',
      lines: [
        { speaker: 'Beamter', de: 'Nach Prüfung Ihrer Unterlagen erhalten Sie innerhalb von vier Wochen einen schriftlichen Bescheid.', uk: 'Після перевірки Ваших документів Ви отримаєте протягом чотирьох тижнів письмове рішення.' },
        { speaker: 'Halyna', de: 'Das heißt, Sie schreiben mir, nachdem Sie alles geprüft haben?', uk: 'Тобто Ви напишете мені після того, як усе перевірите?' },
        { speaker: 'Beamter', de: 'Korrekt. Bei Unvollständigkeit der Angaben verlängert sich die Bearbeitungszeit.', uk: 'Правильно. У разі неповноти даних час опрацювання продовжується.' },
        { speaker: 'Halyna', de: 'Also: Wenn etwas fehlt, dauert es länger. Was fehlt denn typischerweise?', uk: 'Отже: якщо чогось бракує, це триває довше. А чого зазвичай бракує?' },
        { speaker: 'Beamter', de: 'Meist der Nachweis über das Einkommen. Zur Vermeidung von Verzögerungen laden Sie ihn am besten sofort hoch.', uk: 'Найчастіше підтвердження про дохід. Щоб уникнути затримок, найкраще завантажте його відразу.' },
        { speaker: 'Halyna', de: 'Und trotz vollständiger Unterlagen kann es vier Wochen dauern?', uk: 'І попри повні документи це може тривати чотири тижні?' },
        { speaker: 'Beamter', de: 'Aufgrund der hohen Zahl der Anträge leider ja. Im Falle einer Ablehnung haben Sie einen Monat Zeit für einen Widerspruch.', uk: 'Через велику кількість заяв, на жаль, так. У разі відмови Ви маєте місяць на заперечення.' },
        { speaker: 'Halyna', de: 'Gut, das habe ich verstanden. Vielen Dank für die klare Auskunft.', uk: 'Добре, це я зрозуміла. Дуже дякую за чітку довідку.' },
      ],
      tasks: [
        { type: 'choice', q: 'Wie lange dauert die Bearbeitung normalerweise?',
          options: ['Eine Woche', 'Vier Wochen', 'Zwei Monate', 'Einen Tag'], answer: 1 },
        { type: 'choice', q: 'Was fehlt bei Anträgen meist?',
          options: ['Der Pass', 'Der Nachweis über das Einkommen', 'Die Unterschrift', 'Die Adresse'], answer: 1 },
        { type: 'choice', q: 'Wie viel Zeit hat man für einen Widerspruch?',
          options: ['Eine Woche', 'Zwei Wochen', 'Einen Monat', 'Drei Monate'], answer: 2 },
        { type: 'gap', q: 'Розгорніть офіційне: «Bei Unvollständigkeit der Angaben» → ___ etwas fehlt',
          answers: ['wenn'] },
        { type: 'multi', q: 'Welche Nominalkonstruktionen kommen im Gespräch vor?',
          options: ['Nach Prüfung Ihrer Unterlagen', 'Bei Unvollständigkeit der Angaben',
            'Zur Vermeidung von Verzögerungen', 'Im Falle einer Ablehnung', 'Obwohl die Zahl hoch ist'],
          answers: [0, 1, 2, 3] },
      ],
    },
  ],

  writing: [
    {
      exam: 'Goethe B2 · Schreiben Teil 2',
      title: 'Formelle Mitteilung: Änderung eines Verfahrens',
      situation: 'Ви працюєте в мовній школі й мусите повідомити слухачів, що з 1 жовтня запис відбувається лише онлайн. Напишіть офіційне повідомлення: <strong>120–150 слів</strong>. Уживіть щонайменше чотири номінальні конструкції.',
      points: [
        'Nennen Sie die Änderung und das Datum.',
        'Begründen Sie sie.',
        'Sagen Sie, was die Teilnehmenden tun müssen.',
        'Nennen Sie eine Lösung für Menschen ohne Internetzugang.',
      ],
      minWords: 120,
      phrases: [
        { de: 'Aufgrund der hohen Zahl der Anmeldungen …', uk: 'Через велику кількість реєстрацій …' },
        { de: 'Ab dem 1. Oktober erfolgt die Anmeldung ausschließlich online.', uk: 'З 1 жовтня реєстрація відбувається виключно онлайн.' },
        { de: 'Zur Vermeidung von Verzögerungen bitten wir um vollständige Angaben.', uk: 'Щоб уникнути затримок, просимо про повні дані.' },
        { de: 'Bei Fragen steht Ihnen unser Sekretariat zur Verfügung.', uk: 'У разі питань наш секретаріат у Вашому розпорядженні.' },
        { de: 'Trotz der Umstellung bleiben die Kursgebühren unverändert.', uk: 'Попри перехід плата за курси залишається незмінною.' },
        { de: 'Im Falle fehlender Nachweise verlängert sich die Bearbeitungszeit.', uk: 'У разі відсутніх підтверджень час опрацювання продовжується.' },
      ],
      checklist: [
        'Є щонайменше чотири номінальні конструкції з прийменником + Genitiv або Dativ?',
        'Правильні відмінки після wegen / aufgrund / trotz (Genitiv)?',
        'Названо дату набрання чинності?',
        'Є розв’язання для людей без інтернету?',
        'Обсяг 120–150 слів, тон формальний і послідовний?',
      ],
      model:
`Sehr geehrte Teilnehmerinnen und Teilnehmer,

aufgrund der stark gestiegenen Zahl der Anmeldungen stellen wir unser Verfahren um.

Ab dem 1. Oktober erfolgt die Anmeldung zu allen Kursen ausschließlich über unser Onlineportal.
In Papierform eingereichte Formulare können ab diesem Zeitpunkt nicht mehr berücksichtigt werden.
Zur Vermeidung von Verzögerungen bitten wir Sie, die erforderlichen Nachweise gleich bei der
Registrierung hochzuladen. Im Falle fehlender Unterlagen verlängert sich die Bearbeitungszeit
um bis zu zwei Wochen.

Für Interessierte ohne eigenen Internetzugang richten wir in der Bibliothek einen betreuten
Terminalplatz ein. Die Unterstützung dort beschränkt sich auf technische Fragen; inhaltliche
Beratung erhalten Sie weiterhin telefonisch.

Trotz der Umstellung bleiben sowohl die Kurszeiten als auch die Gebühren unverändert.
Bei Rückfragen steht Ihnen unser Sekretariat montags bis freitags zur Verfügung.

Mit freundlichen Grüßen
Die Kursleitung`,
      modelUk: 'Переклад: Шановні слухачки та слухачі, через сильно зрослу кількість реєстрацій ми змінюємо нашу процедуру. З 1 жовтня реєстрація на всі курси відбувається виключно через наш онлайн-портал. Подані в паперовій формі формуляри з цього моменту вже не можуть бути враховані. Щоб уникнути затримок, просимо Вас завантажувати потрібні підтвердження одразу під час реєстрації. У разі відсутніх документів час опрацювання продовжується щонайбільше на два тижні. Для зацікавлених без власного доступу до інтернету ми обладнуємо в бібліотеці супроводжуване робоче місце з терміналом. Підтримка там обмежується технічними питаннями; змістовну консультацію Ви й далі отримуєте телефоном. Попри перехід і час занять, і плата залишаються незмінними. У разі додаткових питань наш секретаріат у Вашому розпорядженні з понеділка до п’ятниці. З повагою, керівництво курсів.',
    },
  ],

  test: [
    { type: 'gap', q: 'Weil es schneite → ___ des Schnees', answers: ['wegen|aufgrund'] },
    { type: 'gap', q: 'Obwohl der Preis hoch ist → ___ des hohen Preises', answers: ['trotz'] },
    { type: 'gap', q: 'Wenn es regnet → ___ Regen', answers: ['bei'] },
    { type: 'gap', q: 'lösen → die ___', answers: ['Lösung'] },
    { type: 'gap', q: 'zurückgehen → der ___', answers: ['Rückgang'] },
    { type: 'gap', q: 'vermeiden → die ___', answers: ['Vermeidung'] },
    { type: 'choice', q: '<span class="de-inline">infolge</span> передає:',
      options: ['поступку', 'наслідок', 'мету', 'умову'], answer: 1 },
    { type: 'choice', q: 'Розгорніть: «Trotz mehrfacher Mahnungen …»',
      options: ['Weil wir mehrmals gemahnt haben …', 'Obwohl wir mehrmals gemahnt haben …',
        'Wenn wir mehrmals mahnen …', 'Damit wir mehrmals mahnen …'],
      answer: 1 },
    { type: 'choice', q: 'Правильний відмінок:',
      options: ['wegen dem Wetter', 'wegen das Wetter', 'wegen des Wetters', 'wegen den Wetter'],
      answer: 2 },
    { type: 'order', q: 'Складіть речення.',
      words: ['Infolge', 'der', 'Verzögerung', 'beginnt', 'der', 'Kurs', 'später'],
      answer: 'Infolge der Verzögerung beginnt der Kurs später' },
    { type: 'match', q: 'Доберіть переклад.',
      pairs: [['der Bescheid', 'офіційне рішення'], ['genehmigen', 'схвалювати'], ['in Kraft treten', 'набирати чинності'],
        ['die Frist einhalten', 'дотримати терміну'], ['zuständig', 'відповідальний'], ['erfolgen', 'відбуватися']] },
    { type: 'multi', q: 'Позначте прийменники з Genitiv.',
      options: ['aufgrund', 'bei', 'trotz', 'nach', 'hinsichtlich'],
      answers: [0, 2, 4] },
    { type: 'truefalse', q: 'Іменники на <span class="de-inline">-ung</span> завжди жіночого роду.',
      answer: true },
    { type: 'truefalse', q: 'Номінальний стиль доречніший у листі другові, ніж в офіційному повідомленні.',
      answer: false,
      explain: 'Навпаки: у приватному листі він звучить холодно й штучно.' },
  ],
};

const m5 = {
  id: 'm5',
  title: 'Partizipialattribute und erweiterte Relativsätze',
  titleUk: 'Партиципні означення та розширені означальні речення',
  can: [
    'розуміти довгі означення перед іменником',
    'уживати конструкцію zu + Partizip I (das zu lösende Problem)',
    'будувати означальні речення з dessen і deren',
    'уживати was, wo(r)- і wer в означальних реченнях',
    'перетворювати партиципне означення на речення й навпаки',
  ],

  grammar: [
    {
      title: '1. Розширене означення: як його читати',
      html: `
<p>У письмових текстах між артиклем і іменником може стояти цілий блок слів.
Це і є <strong>розширене партиципне означення</strong> — улюблена конструкція
німецької публіцистики.</p>
<table>
<thead><tr><th>Конструкція</th><th>Те саме реченням</th></tr></thead>
<tbody>
<tr><td><em>die <u>im letzten Jahr eingeführte</u> Regelung</em></td>
<td><em>die Regelung, die im letzten Jahr eingeführt wurde</em>
<span class="uk">правило, яке запровадили минулого року</span></td></tr>
<tr><td><em>ein <u>sich schnell verändernder</u> Markt</em></td>
<td><em>ein Markt, der sich schnell verändert</em><span class="uk">ринок, що швидко змінюється</span></td></tr>
<tr><td><em>die <u>von allen Beteiligten unterschriebene</u> Vereinbarung</em></td>
<td><em>die Vereinbarung, die von allen Beteiligten unterschrieben wurde</em>
<span class="uk">угода, підписана всіма учасниками</span></td></tr>
</tbody></table>
<div class="callout callout--tip"><strong>Техніка читання в три кроки.</strong>
1) Знайдіть артикль і <u>іменник</u> у кінці — це кістяк.
2) Подивіться на слово безпосередньо перед іменником: це дієприкметник, він і є «дією».
3) Усе між артиклем і дієприкметником — обставини цієї дії.
Тобто <em>die … eingeführte Regelung</em> читаємо як «правило, яке запровадили — коли? минулого року».</div>
<p><strong>Чому так пишуть.</strong> Німецька рамка дозволяє «підвісити» багато інформації
перед іменником, не починаючи нового речення. Для читача це щільно, зате точно —
тому так люблять писати юристи й журналісти.</p>`,
    },
    {
      title: '2. zu + Partizip I: те, що має бути зроблено',
      html: `
<p>Особлива конструкція: <strong><em>zu</em> + Partizip I</strong> перед іменником.
Вона має <u>пасивне</u> значення й відтінок <u>необхідності або можливості</u> —
приблизно як <em>müssen</em> або <em>können</em> у пасиві.</p>
<table>
<thead><tr><th>Конструкція</th><th>Значення</th><th>Розгорнуто</th></tr></thead>
<tbody>
<tr><td><em>das <strong>zu lösende</strong> Problem</em></td><td>проблема, яку <u>треба</u> розв’язати</td>
<td><em>das Problem, das gelöst werden muss</em></td></tr>
<tr><td><em>die <strong>zu erledigenden</strong> Aufgaben</em></td><td>завдання, які <u>треба</u> виконати</td>
<td><em>die Aufgaben, die erledigt werden müssen</em></td></tr>
<tr><td><em>der <strong>zu zahlende</strong> Betrag</em></td><td>сума до сплати</td>
<td><em>der Betrag, der gezahlt werden muss</em></td></tr>
<tr><td><em>die <strong>nicht zu übersehende</strong> Gefahr</em></td><td>небезпека, яку <u>не можна</u> не помітити</td>
<td><em>die Gefahr, die nicht übersehen werden kann</em></td></tr>
</tbody></table>
<div class="callout"><strong>Не сплутайте три схожі форми.</strong>
<ul>
<li><em>das lösende Problem</em> — активно: проблема, <u>яка розв’язує</u> (майже безглуздо, тому так не пишуть).</li>
<li><em>das gelöste Problem</em> — пасивно, завершено: <u>розв’язана</u> проблема.</li>
<li><em>das zu lösende Problem</em> — пасивно, ще <u>треба</u> зробити: проблема, яку <u>слід</u> розв’язати.</li>
</ul>
Різниця саме в цьому маленькому <em>zu</em>.</div>
<p>Ця конструкція типова для інструкцій, договорів і звітів:
<em>die einzuhaltenden Fristen</em> — терміни, яких треба дотримати;
<em>die beizulegenden Unterlagen</em> — документи, які слід додати.
У відокремлюваних дієслів <em>zu</em> знову йде всередину: <em>einhalten → einzuhaltend</em>.</p>`,
    },
    {
      title: '3. Означальні речення з dessen і deren',
      html: `
<p>Коли означальне речення виражає <strong>належність</strong> («чий?»),
відносний займенник стоїть у Genitiv: <em>dessen</em> або <em>deren</em>.</p>
<table>
<thead><tr><th>Рід / число іменника</th><th>Форма</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td>чоловічий, середній однина</td><td><strong>dessen</strong></td>
<td><em>der Autor, <strong>dessen</strong> Buch ich lese</em><span class="uk">автор, книжку якого я читаю</span></td></tr>
<tr><td>жіночий однина</td><td><strong>deren</strong></td>
<td><em>die Firma, <strong>deren</strong> Chef ich kenne</em><span class="uk">фірма, керівника якої я знаю</span></td></tr>
<tr><td>множина</td><td><strong>deren</strong></td>
<td><em>die Kinder, <strong>deren</strong> Eltern arbeiten</em><span class="uk">діти, батьки яких працюють</span></td></tr>
</tbody></table>
<div class="callout"><strong>Головна відмінність від української.</strong>
Форма <em>dessen / deren</em> залежить <u>не</u> від наступного іменника, а від того,
до якого слова означальне речення прив’язане. У <em>die Firma, deren <u>Chef</u></em>
слово <em>Chef</em> чоловічого роду, але ми беремо <em>deren</em>, бо <em>Firma</em> — жіночого.
Артикля після <em>dessen / deren</em> не буває: не «<s>deren der Chef</s>».</div>
<p><strong>З прийменником</strong> усе так само, прийменник ставиться перед займенником:</p>
<ul>
<li><em>der Kollege, <strong>mit dessen</strong> Hilfe ich das geschafft habe</em>
<span class="uk">колега, з чиєю допомогою я це зробив</span></li>
<li><em>die Studie, <strong>auf deren</strong> Ergebnisse sich alle berufen</em>
<span class="uk">дослідження, на результати якого всі посилаються</span></li>
</ul>`,
    },
    {
      title: '4. was, wo(r)- і wer як відносні слова',
      html: `
<p>Коли означальне речення стосується не конкретного іменника, а <strong>цілої думки</strong>
або невизначеного поняття, замість <em>der/die/das</em> беруть <em>was</em> або <em>wo(r)-</em>.</p>
<table>
<thead><tr><th>Коли</th><th>Слово</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td>стосується <strong>усього попереднього речення</strong></td><td><strong>was</strong></td>
<td><em>Er kam zu spät, <strong>was</strong> alle geärgert hat.</em><span class="uk">Він прийшов запізно, що всіх розлютило.</span></td></tr>
<tr><td>після <em>alles, nichts, etwas, viel, das</em></td><td><strong>was</strong></td>
<td><em>Alles, <strong>was</strong> er sagt, klingt logisch.</em><span class="uk">Усе, що він каже, звучить логічно.</span></td></tr>
<tr><td>після прикметника в найвищому ступені (як іменника)</td><td><strong>was</strong></td>
<td><em>Das Beste, <strong>was</strong> mir passiert ist.</em><span class="uk">Найкраще, що зі мною сталося.</span></td></tr>
<tr><td>дієслово має <strong>фіксований прийменник</strong></td><td><strong>wo(r)- + прийменник</strong></td>
<td><em>Er hat etwas gesagt, <strong>worüber</strong> ich lange nachgedacht habe.</em>
<span class="uk">Він сказав щось, про що я довго думав.</span></td></tr>
<tr><td>узагальнення «той, хто»</td><td><strong>wer</strong></td>
<td><em><strong>Wer</strong> zu spät kommt, muss warten.</em><span class="uk">Хто приходить запізно, мусить чекати.</span></td></tr>
<tr><td>місце</td><td><strong>wo</strong></td>
<td><em>Die Stadt, <strong>wo</strong> ich geboren bin.</em><span class="uk">Місто, де я народився.</span></td></tr>
</tbody></table>
<div class="callout callout--tip"><strong>Практичне розмежування.</strong> Питайте себе:
«до чого прив’язане означення?» До конкретного іменника — <em>der / die / das</em>.
До абстракції або до цілої попередньої думки — <em>was</em>.
І пам’ятайте: перед <em>was</em>, що стосується всього речення, кома обов’язкова.</div>`,
    },
    {
      title: '5. Слова з прикладів цієї теми',
      html: `
<table>
<thead><tr><th>Слово</th><th>Переклад</th><th>Як ужито в темі</th></tr></thead>
<tbody>
<tr><td><em>die Regelung, -en</em></td><td>правило, врегулювання</td><td><em>die im letzten Jahr eingeführte Regelung</em></td></tr>
<tr><td><em>der Beteiligte, -n</em></td><td>учасник, причетна особа</td><td><em>von allen Beteiligten unterschrieben</em></td></tr>
<tr><td><em>die Vereinbarung, -en</em></td><td>угода, домовленість</td><td><em>die unterschriebene Vereinbarung</em></td></tr>
<tr><td><em>der Betrag, ¨-e</em></td><td>сума</td><td><em>der zu zahlende Betrag</em></td></tr>
<tr><td><em>übersehen</em></td><td>не помітити, проґавити</td><td><em>die nicht zu übersehende Gefahr</em></td></tr>
<tr><td><em>einhalten</em></td><td>дотримувати</td><td><em>die einzuhaltenden Fristen</em></td></tr>
<tr><td><em>beilegen</em></td><td>додавати (до листа)</td><td><em>die beizulegenden Unterlagen</em></td></tr>
<tr><td><em>sich berufen auf + Akk.</em></td><td>посилатися на</td><td><em>… auf deren Ergebnisse sich alle berufen</em></td></tr>
<tr><td><em>sich verändern</em></td><td>змінюватися</td><td><em>ein sich schnell verändernder Markt</em></td></tr>
<tr><td><em>die Gefahr, -en</em></td><td>небезпека</td><td><em>die nicht zu übersehende Gefahr</em></td></tr>
</tbody></table>`,
    },
  ],

  vocab: [
    {
      group: 'Слова офіційних текстів',
      items: [
        { de: 'die Regelung, -en', uk: 'правило, врегулювання' },
        { de: 'die Vereinbarung, -en', uk: 'угода' },
        { de: 'die Bestimmung, -en', uk: 'положення, норма' },
        { de: 'der Betrag, ¨-e', uk: 'сума' },
        { de: 'die Voraussetzung, -en', uk: 'передумова' },
        { de: 'einhalten', uk: 'дотримувати' },
        { de: 'beilegen', uk: 'додавати' },
        { de: 'übersehen', uk: 'не помітити' },
        { de: 'der Beteiligte, -n', uk: 'учасник' },
        { de: 'die Zuständigkeit, -en', uk: 'компетенція, відповідальність' },
      ],
    },
    {
      group: 'Означення й посилання',
      items: [
        { de: 'dessen / deren', uk: 'чий, якого / якої, яких' },
        { de: 'sich berufen auf + Akk.', uk: 'посилатися на' },
        { de: 'sich beziehen auf + Akk.', uk: 'стосуватися, покликатися на' },
        { de: 'gemäß + Dat.', uk: 'згідно з' },
        { de: 'laut + Dat.', uk: 'за словами, згідно з' },
        { de: 'entsprechend', uk: 'відповідно' },
        { de: 'genannt', uk: 'названий, згаданий' },
        { de: 'oben erwähnt', uk: 'вищезгаданий' },
        { de: 'betreffend', uk: 'що стосується' },
        { de: 'zugrunde liegen', uk: 'лежати в основі' },
      ],
    },
    {
      group: 'Ринок і зміни',
      items: [
        { de: 'der Markt, ¨-e', uk: 'ринок' },
        { de: 'die Entwicklung, -en', uk: 'розвиток' },
        { de: 'sich verändern', uk: 'змінюватися' },
        { de: 'die Herausforderung, -en', uk: 'виклик' },
        { de: 'die Gefahr, -en', uk: 'небезпека' },
        { de: 'die Chance, -n', uk: 'шанс' },
        { de: 'wettbewerbsfähig', uk: 'конкурентоспроможний' },
        { de: 'die Nachfrage', uk: 'попит' },
        { de: 'das Angebot, -e', uk: 'пропозиція' },
        { de: 'nachhaltig', uk: 'сталий' },
      ],
    },
  ],

  exercises: [
    { type: 'gap', q: 'die Regelung, die eingeführt wurde → die ___ Regelung', answers: ['eingeführte'] },
    { type: 'gap', q: 'das Problem, das gelöst werden muss → das ___ ___ Problem (zu + Partizip I)',
      answers: ['zu', 'lösende'] },
    { type: 'gap', q: 'der Betrag, der gezahlt werden muss → der ___ ___ Betrag',
      answers: ['zu', 'zahlende'] },
    { type: 'gap', q: 'der Autor, ___ Buch ich lese (Genitiv, чоловічий)', answers: ['dessen'] },
    { type: 'gap', q: 'die Firma, ___ Chef ich kenne (Genitiv, жіночий)', answers: ['deren'] },
    { type: 'gap', q: 'die Kinder, ___ Eltern arbeiten (Genitiv, множина)', answers: ['deren'] },
    { type: 'gap', q: 'Er kam zu spät, ___ alle geärgert hat. (стосується всього речення)',
      answers: ['was'] },
    { type: 'gap', q: 'Alles, ___ er sagt, klingt logisch.', answers: ['was'] },
    { type: 'choice', q: '«das zu lösende Problem» означає:',
      options: ['проблема, яка розв’язує', 'розв’язана проблема',
        'проблема, яку треба розв’язати', 'проблема, яку розв’язали вчора'],
      answer: 2 },
    { type: 'choice', q: 'Er hat etwas gesagt, ___ ich lange nachgedacht habe.',
      options: ['was', 'worüber', 'das', 'dessen'], answer: 1,
      explain: 'nachdenken über — тому worüber.' },
    { type: 'order', q: 'Складіть речення.',
      words: ['Die', 'im', 'letzten', 'Jahr', 'eingeführte', 'Regelung', 'gilt', 'weiter'],
      answer: 'Die im letzten Jahr eingeführte Regelung gilt weiter' },
    { type: 'order', q: 'Складіть речення.',
      words: ['Der', 'Kollege', 'mit', 'dessen', 'Hilfe', 'ich', 'das', 'geschafft', 'habe', 'ist', 'weg'],
      answer: 'Der Kollege mit dessen Hilfe ich das geschafft habe ist weg' },
    { type: 'match', q: 'Доберіть розгорнуту форму.',
      pairs: [['das zu lösende Problem', 'das gelöst werden muss'],
        ['das gelöste Problem', 'das gelöst wurde'],
        ['die einzuhaltenden Fristen', 'die eingehalten werden müssen'],
        ['ein sich verändernder Markt', 'der sich verändert'],
        ['die unterschriebene Vereinbarung', 'die unterschrieben wurde']] },
    { type: 'multi', q: 'Позначте випадки, де потрібне <span class="de-inline">was</span>, а не <span class="de-inline">das</span>.',
      options: ['Alles, ___ er sagt', 'Das Buch, ___ ich lese', 'Nichts, ___ mich stört',
        'Das Beste, ___ passiert ist', 'Das Auto, ___ dort steht'],
      answers: [0, 2, 3] },
    { type: 'truefalse', q: 'Після <span class="de-inline">dessen</span> ставлять артикль.',
      answer: false,
      explain: 'dessen / deren уже заміняють артикль: dessen Buch, а не «dessen das Buch».' },
  ],

  listening: [
    {
      exam: 'Goethe B2 · Hören Teil 3',
      title: 'Redaktionssitzung: Wie schreiben wir verständlich?',
      instruction: 'Редакція обговорює, як спростити текст. Слухайте приклади довгих означень.',
      lines: [
        { speaker: 'Lena', de: 'Unser Entwurf enthält Sätze wie «die im vergangenen Jahr beschlossene und inzwischen mehrfach geänderte Regelung». Das versteht niemand.', uk: 'Наш чернетковий текст містить речення на кшталт «ухвалене минулого року й уже кілька разів змінене правило». Цього ніхто не розуміє.' },
        { speaker: 'Pavlo', de: 'Wir könnten daraus zwei Sätze machen. Erst die Regelung, dann die Änderungen.', uk: 'Ми могли б зробити з цього два речення. Спершу правило, потім зміни.' },
        { speaker: 'Lena', de: 'Genau. Und statt «der zu zahlende Betrag» schreiben wir einfach «der Betrag, den Sie zahlen müssen».', uk: 'Саме так. І замість «сума до сплати» пишемо просто «сума, яку Ви мусите заплатити».' },
        { speaker: 'Pavlo', de: 'Aber ganz ohne Partizipien wird der Text auch länger, was manche Leser stört.', uk: 'Але зовсім без дієприкметників текст стає й довшим, що частину читачів дратує.' },
        { speaker: 'Lena', de: 'Deshalb mein Vorschlag: kurze Partizipien behalten, lange auflösen. «Die geänderte Regelung» ist verständlich, «die mehrfach geänderte und noch nicht veröffentlichte Regelung» nicht.', uk: 'Тому моя пропозиція: короткі дієприкметники залишити, довгі розгорнути. «Змінене правило» зрозуміле, «кілька разів змінене й досі не опубліковане правило» — ні.' },
        { speaker: 'Pavlo', de: 'Einverstanden. Wer den Text am Ende prüft, sollte auf die Länge achten.', uk: 'Погоджуюсь. Хто перевіряє текст наостанок, має зважати на довжину.' },
        { speaker: 'Lena', de: 'Ich mache eine Liste der zu ändernden Stellen und schicke sie heute herum.', uk: 'Я зроблю список місць, які треба змінити, і розішлю його сьогодні.' },
      ],
      tasks: [
        { type: 'choice', q: 'Was ist Lenas Hauptkritik am Entwurf?',
          options: ['Er ist zu kurz', 'Die Sätze sind unverständlich lang',
            'Es fehlen Beispiele', 'Der Ton ist zu locker'], answer: 1 },
        { type: 'choice', q: 'Welchen Kompromiss schlägt Lena vor?',
          options: ['Alle Partizipien löschen', 'Kurze Partizipien behalten, lange auflösen',
            'Nur Passiv verwenden', 'Den Text halbieren'], answer: 1 },
        { type: 'gap', q: 'Statt «der zu zahlende Betrag» schreiben sie «der Betrag, den Sie zahlen ___».',
          answers: ['müssen'] },
        { type: 'truefalse', q: 'Pavlo findet, dass ein Text ohne Partizipien immer besser ist.', answer: false,
          explain: 'Він зауважує, що текст стає довшим, і це частину читачів дратує.' },
        { type: 'multi', q: 'Was stimmt?',
          options: ['Lena macht eine Liste der zu ändernden Stellen.',
            'Sie schickt die Liste heute herum.',
            'Pavlo will zwei Sätze aus einem machen.',
            'Sie beschließen, den Entwurf zu löschen.'],
          answers: [0, 1, 2] },
      ],
    },
  ],

  writing: [
    {
      exam: 'Goethe B2 · Schreiben Teil 1',
      title: 'Stellungnahme: Muss Amtssprache verständlich sein?',
      situation: 'Газета запитує читачів: «Чи мають органи влади писати простою мовою?» Напишіть коментар: <strong>150–180 слів</strong>. Уживіть щонайменше два партиципні означення й одне речення з <em>was</em> або <em>dessen / deren</em>.',
      points: [
        'Nehmen Sie klar Stellung.',
        'Nennen Sie ein Beispiel für einen schwer verständlichen Satz.',
        'Wägen Sie Genauigkeit gegen Verständlichkeit ab.',
        'Formulieren Sie einen konkreten Vorschlag.',
      ],
      minWords: 150,
      phrases: [
        { de: 'Behörden schreiben oft in einem kaum zu verstehenden Stil.', uk: 'Органи влади часто пишуть майже незрозумілим стилем.' },
        { de: 'Die im Bescheid genannten Fristen bleiben für viele unklar.', uk: 'Названі в рішенні терміни залишаються для багатьох незрозумілими.' },
        { de: 'Wer einen Antrag stellt, sollte ihn ohne Hilfe verstehen können.', uk: 'Хто подає заяву, має розуміти її без сторонньої допомоги.' },
        { de: 'Das führt zu unnötigen Rückfragen, was beiden Seiten Zeit kostet.', uk: 'Це призводить до зайвих перепитувань, що коштує часу обом сторонам.' },
        { de: 'Genauigkeit und Verständlichkeit sind kein Widerspruch.', uk: 'Точність і зрозумілість не суперечать одне одному.' },
        { de: 'Mein Vorschlag wäre eine Zusammenfassung in einfacher Sprache.', uk: 'Моєю пропозицією було б резюме простою мовою.' },
      ],
      checklist: [
        'Є щонайменше два партиципні означення перед іменником?',
        'Є речення з was (про всю думку) або з dessen / deren?',
        'Наведено конкретний приклад незрозумілого формулювання?',
        'Аргументи зважено з обох боків?',
        'Обсяг 150–180 слів?',
      ],
      model:
`Behörden müssen verständlich schreiben — und zwar nicht aus Höflichkeit, sondern weil sonst
das ganze Verfahren nicht funktioniert.

Ich habe im Frühling einen Bescheid erhalten, in dem von den «bei fristgerechter Antragstellung
zu berücksichtigenden Nachweisen» die Rede war. Ich habe den Satz dreimal gelesen und trotzdem
angerufen, was der Behörde selbst Zeit gekostet hat. Die im Schreiben genannten Fristen waren
korrekt, aber praktisch unbrauchbar, weil niemand sie beim ersten Lesen erfasst.

Natürlich brauchen Ämter präzise Formulierungen; ein Bescheid ist ein rechtliches Dokument,
dessen Wortlaut später zählt. Genauigkeit und Verständlichkeit sind aber kein Widerspruch.
Wer juristisch exakt schreiben kann, kann auch einen kurzen Satz bilden.

Hinzu kommt ein praktisches Argument: Jede unnötige Nachfrage bindet Personal, das an anderer
Stelle fehlt. Verständliche Bescheide sind also keine Freundlichkeit, sondern eine Frage der
Effizienz.

Mein Vorschlag: Jeder Bescheid beginnt mit drei Zeilen in einfacher Sprache — was zu tun ist,
bis wann, und was passiert, wenn man nichts tut. Der juristische Teil folgt darunter unverändert.
Das kostet die Verwaltung wenig und erspart beiden Seiten viele Rückfragen.`,
      modelUk: 'Переклад: Органи влади мусять писати зрозуміло — і не з ввічливості, а тому що інакше вся процедура не працює. Навесні я отримав рішення, у якому йшлося про «підтвердження, які слід урахувати при своєчасному поданні заяви». Я прочитав це речення тричі й усе одно зателефонував, що самому відомству коштувало часу. Названі в листі терміни були правильні, але практично непридатні, бо ніхто не схоплює їх із першого прочитання. Звісно, установам потрібні точні формулювання; рішення — це юридичний документ, дослівне звучання якого має значення потім. Але точність і зрозумілість не суперечать одне одному. Хто вміє писати юридично точно, той умі́є й побудувати коротке речення. Моя пропозиція: кожне рішення починається з трьох рядків простою мовою — що робити, до якого часу і що станеться, якщо не робити нічого. Юридична частина йде нижче без змін. Це коштує адміністрації мало й заощаджує обом сторонам багато перепитувань.',
    },
  ],

  test: [
    { type: 'gap', q: 'die Aufgaben, die erledigt werden müssen → die ___ ___ Aufgaben',
      answers: ['zu', 'erledigenden'] },
    { type: 'gap', q: 'die Fristen, die eingehalten werden müssen → die ___ Fristen (одне слово)',
      answers: ['einzuhaltenden'] },
    { type: 'gap', q: 'die Vereinbarung, die unterschrieben wurde → die ___ Vereinbarung',
      answers: ['unterschriebene'] },
    { type: 'gap', q: 'die Studie, auf ___ Ergebnisse sich alle berufen (Genitiv, жіночий)',
      answers: ['deren'] },
    { type: 'gap', q: 'der Nachbar, ___ Hund immer bellt (Genitiv, чоловічий)', answers: ['dessen'] },
    { type: 'gap', q: 'Sie hat abgesagt, ___ mich überrascht hat.', answers: ['was'] },
    { type: 'choice', q: 'Яке значення має zu + Partizip I?',
      options: ['активне, завершене', 'пасивне, з відтінком необхідності',
        'активне, триває', 'минуле в підрядному'],
      answer: 1 },
    { type: 'choice', q: 'die Firma, ___ Mitarbeiter streiken:',
      options: ['dessen', 'deren', 'derer', 'welche'], answer: 1 },
    { type: 'choice', q: 'Nichts, ___ er sagt, hilft mir.',
      options: ['das', 'was', 'dessen', 'wo'], answer: 1 },
    { type: 'order', q: 'Складіть речення.',
      words: ['Der', 'zu', 'zahlende', 'Betrag', 'steht', 'auf', 'der', 'Rechnung'],
      answer: 'Der zu zahlende Betrag steht auf der Rechnung' },
    { type: 'match', q: 'Доберіть переклад.',
      pairs: [['die Bestimmung', 'положення'], ['sich beziehen auf', 'покликатися на'],
        ['gemäß', 'згідно з'], ['zugrunde liegen', 'лежати в основі'],
        ['wettbewerbsfähig', 'конкурентоспроможний'], ['die Herausforderung', 'виклик']] },
    { type: 'multi', q: 'Позначте правильні конструкції.',
      options: ['die zu lösenden Aufgaben', 'die zu gelösten Aufgaben',
        'ein sich verändernder Markt', 'der Autor, dessen Buch', 'die Firma, dessen Chef'],
      answers: [0, 2, 3] },
    { type: 'truefalse', q: 'У відокремлюваних дієслів <span class="de-inline">zu</span> входить усередину: <span class="de-inline">einzuhaltend</span>.',
      answer: true },
    { type: 'truefalse', q: '<span class="de-inline">was</span> уживають, коли означення стосується цілої попередньої думки.',
      answer: true },
  ],
};

export const modules = [m3, m4, m5];
