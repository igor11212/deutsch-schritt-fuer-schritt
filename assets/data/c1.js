import { modules as part2 } from './c1-part2.js?v=20260819a';
import { modules as part3 } from './c1-part3.js?v=20260819a';

export default {
  intro:
    'Повний курс рівня C1: вісім модулів. На цьому рівні мова стає інструментом точності — ' +
    'непряма мова й Konjunktiv I, партиципні означення, модальні частки для відтінку, ' +
    'книжні конектори поступки, замінники пасиву, стійкі звороти високого реєстру, ' +
    'словотвір для самостійного розширення лексики й свідома робота зі стилістичними рівнями.',

  examNote: `
<p>Іспит C1 модульний, загальна тривалість — близько <strong>3 годин 40 хвилин</strong>.
Прохідний бал у кожному модулі — <strong>60 %</strong>.</p>
<table>
<thead><tr><th>Модуль</th><th>Завдання</th><th>Час</th></tr></thead>
<tbody>
<tr><td><strong>Lesen</strong></td><td>4 частини: довгий публіцистичний текст, зіставлення думок кількох авторів, науково-популярна стаття, завдання на лексичну сполучуваність і словотвір.</td><td>70 хв</td></tr>
<tr><td><strong>Hören</strong></td><td>2 частини: спонтанна багатоголоса розмова (один раз) і фахове інтерв’ю або лекція (двічі), із записом деталей.</td><td>40 хв</td></tr>
<tr><td><strong>Schreiben</strong></td><td>1) Текст на основі графіка або статистики з власною позицією (~230 слів). 2) Стилістичне редагування — перетворити неформальний уривок на офіційний.</td><td>80 хв</td></tr>
<tr><td><strong>Sprechen</strong></td><td>1) Доповідь на основі матеріалів (~4 хв) із відповідями на питання. 2) Дискусія: обстояти позицію, знайти компроміс.</td><td>15 хв</td></tr>
</tbody></table>
<p><strong>Що очікують саме на C1:</strong> номінальний стиль, партиципні означення, точні конектори,
Konjunktiv I у переказі чужих слів, свідомий вибір регістру. Помилка в артиклі коштує менше,
ніж стилістично недоречне слово.</p>`,


  modules: [

  /* ─────────────────────────────── МОДУЛЬ 1 ─────────────────────────────── */
  {
    id: 'm1',
    title: 'Konjunktiv I und indirekte Rede',
    titleUk: 'Непряма мова: як переказати чужі слова, не беручи на себе відповідальність',
    can: [
      'утворювати Konjunktiv I усіх часів',
      'переказувати чужі висловлювання в журналістському й науковому стилі',
      'сигналізувати дистанцію від чужого твердження',
      'розпізнавати непряму мову в пресі й academic writing',
      'заміняти Konjunktiv I на Konjunktiv II там, де форми збігаються',
    ],

    grammar: [
      {
        title: '1. Навіщо потрібна окрема форма',
        html: `
<p>У німецькій преси й науки переказ чужих слів має власну граматичну позначку. Порівняйте:</p>
<ul>
<li><em>Der Minister sagt, die Reform <strong>ist</strong> notwendig.</em> — мовець сам поділяє це твердження.</li>
<li><em>Der Minister sagt, die Reform <strong>sei</strong> notwendig.</em> — мовець лише переказує, дистанціюючись.</li>
</ul>
<p>Друге речення — стандарт для газетного тексту. Вживаючи Konjunktiv I, автор явно каже:
«це слова міністра, не мої». Українська такої граматичної форми не має —
ми досягаємо цього словами «мовляв», «за його словами», «нібито».</p>
<div class="callout"><strong>Де це справді потрібно.</strong> В усному мовленні Konjunktiv I рідкісний
(там кажуть <em>er sagt, dass …</em> в Indikativ). Але в частинах Lesen і Schreiben іспиту C1
він трапляється постійно, а в Sprechen допомагає коректно переказати позицію автора матеріалу.</div>`,
      },
      {
        title: '2. Утворення Konjunktiv I',
        html: `
<p>Основа інфінітива + закінчення <em>-e, -est, -e, -en, -et, -en</em>. Практично важливою є лише
<strong>третя особа однини</strong> — саме вона трапляється в текстах.</p>
<table>
<thead><tr><th></th><th>sein</th><th>haben</th><th>werden</th><th>können</th><th>gehen</th></tr></thead>
<tbody>
<tr><td>ich</td><td><strong>sei</strong></td><td>habe</td><td>werde</td><td>könne</td><td>gehe</td></tr>
<tr><td>du</td><td>sei(e)st</td><td>habest</td><td>werdest</td><td>könnest</td><td>gehest</td></tr>
<tr><td><strong>er/sie/es</strong></td><td><strong>sei</strong></td><td><strong>habe</strong></td><td><strong>werde</strong></td><td><strong>könne</strong></td><td><strong>gehe</strong></td></tr>
<tr><td>wir</td><td>seien</td><td>haben</td><td>werden</td><td>können</td><td>gehen</td></tr>
<tr><td>ihr</td><td>seiet</td><td>habet</td><td>werdet</td><td>könnet</td><td>gehet</td></tr>
<tr><td>sie/Sie</td><td>seien</td><td>haben</td><td>werden</td><td>können</td><td>gehen</td></tr>
</tbody></table>
<p><em>sein</em> — єдине дієслово без <em>-e</em> в 1-й і 3-й особі однини: <strong>ich sei, er sei</strong>.</p>
<p><strong>Що означає сама форма.</strong> Konjunktiv I не має українського відповідника-слова:
він лише позначає, що це <em>чужі слова</em>. Тому в перекладі його передають вставним
«мовляв», «за його словами», «нібито».</p>
<table>
<thead><tr><th>Форма</th><th>Дослівно</th><th>Як звучить у перекладі</th></tr></thead>
<tbody>
<tr><td><strong>er sei</strong></td><td>він є</td><td>він, <strong>мовляв</strong>, є / за його словами, він …</td></tr>
<tr><td><strong>er habe</strong></td><td>він має</td><td>він, <strong>нібито</strong>, має</td></tr>
<tr><td><strong>er werde</strong></td><td>він стане / буде</td><td><strong>за його словами</strong>, він буде</td></tr>
<tr><td><strong>er könne</strong></td><td>він може</td><td>він, <strong>мовляв</strong>, може</td></tr>
<tr><td><strong>er gehe</strong></td><td>він іде</td><td>він, <strong>як стверджують</strong>, іде</td></tr>
<tr><td><strong>er sei gewesen</strong></td><td>він був</td><td>він, <strong>мовляв</strong>, був</td></tr>
<tr><td><strong>er habe gesagt</strong></td><td>він сказав</td><td><strong>нібито</strong> він сказав</td></tr>
</tbody></table>
<div class="callout callout--tip"><strong>Порівняйте з Konjunktiv II.</strong> <em>er wäre</em> — «він <u>був би</u>»
(нереально, умовно). <em>er sei</em> — «він <u>мовляв</u> є» (реально, але з чужих слів).
Одна буква різниці, а функція протилежна.</div>
<div class="callout callout--tip"><strong>Головне правило заміни.</strong> Якщо форма Konjunktiv I
збігається з Indikativ (а це майже вся множина: <em>sie haben</em> = <em>sie haben</em>),
беруть <strong>Konjunktiv II</strong>: <em>Sie sagen, sie <strong>hätten</strong> keine Zeit.</em>
Саме тому в газетах поруч стоять <em>sei</em> і <em>hätten</em> — це не помилка, а система.</div>`,
      },
      {
        title: '3. Три часи непрямої мови',
        html: `
<p>Непряма мова має лише <strong>три</strong> часові форми — минуле в ній одне, незалежно від того,
який час був у прямій мові.</p>
<table>
<thead><tr><th>Пряма мова</th><th>Непряма мова</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td>Präsens</td><td><strong>Konj. I Präsens</strong></td>
<td><em>«Ich bin müde.»</em> → <em>Er sagte, er <strong>sei</strong> müde.</em></td></tr>
<tr><td>Perfekt / Präteritum / Plusquamperfekt</td><td><strong>Konj. I Perfekt</strong><br>(sei/habe + Part. II)</td>
<td><em>«Ich war krank.» / «Ich bin krank gewesen.»</em> → <em>Er sagte, er <strong>sei</strong> krank <strong>gewesen</strong>.</em></td></tr>
<tr><td>Futur I</td><td><strong>Konj. I Futur</strong><br>(werde + Infinitiv)</td>
<td><em>«Ich werde kommen.»</em> → <em>Er sagte, er <strong>werde</strong> kommen.</em></td></tr>
</tbody></table>
<p><strong>Що ще змінюється при переказі:</strong></p>
<ul>
<li>особові займенники: <em>«Ich helfe dir»</em> → <em>Er sagte, <strong>er</strong> helfe <strong>mir</strong>.</em></li>
<li>обставини часу й місця: <em>heute → an jenem Tag</em>, <em>gestern → am Tag zuvor</em>,
<em>hier → dort</em>, <em>morgen → am folgenden Tag</em>;</li>
<li>питання зберігають питальне слово або отримують <em>ob</em>:
<em>«Kommst du?»</em> → <em>Sie fragte, <strong>ob</strong> ich <strong>käme</strong>.</em>;</li>
<li>наказ передається через <em>sollen</em>: <em>«Geh nach Hause!»</em> →
<em>Er sagte, ich <strong>solle</strong> nach Hause gehen.</em></li>
</ul>
<p><strong>Сполучник dass не обов’язковий.</strong> Без нього порядок слів звичайний
(дієслово на 2-му місці), з ним — дієслово в кінець:</p>
<ul>
<li><em>Er sagt, er <strong>sei</strong> krank.</em></li>
<li><em>Er sagt, dass er krank <strong>sei</strong>.</em></li>
</ul>`,
      },
      {
        title: '4. Сигнальні слова й стилістика',
        html: `
<p>У довгому переказі Konjunktiv I «тримає» дистанцію без повторення «er sagte».
Досить одного вступного речення — далі вся низка форм працює як маркер чужої мови:</p>
<blockquote style="border-left:3px solid var(--accent);padding-left:1rem;margin:0 0 1rem;color:var(--text-soft)">
<em>Der Sprecher betonte, die Lage <strong>sei</strong> ernst. Man <strong>habe</strong> bereits reagiert.
Weitere Maßnahmen <strong>würden</strong> geprüft. Eine schnelle Lösung <strong>werde</strong> es
allerdings nicht geben.</em>
</blockquote>
<p><strong>Дієслова введення чужої мови</strong> — на C1 варто варіювати:</p>
<table>
<thead><tr><th>Нейтральні</th><th>З оцінкою</th></tr></thead>
<tbody>
<tr><td><em>sagen, erklären, mitteilen, berichten, angeben</em></td>
<td><em>betonen</em> (наголошувати), <em>behaupten</em> (стверджувати, з сумнівом),
<em>einräumen</em> (визнавати), <em>bestreiten</em> (заперечувати), <em>versichern</em> (запевняти),
<em>zugeben</em> (зізнаватися), <em>andeuten</em> (натякати)</td></tr>
</tbody></table>
<p><strong>Альтернативи Konjunktiv I</strong> для різноманітності стилю: <em>laut + Dat.</em>
(<em>laut dem Bericht</em>), <em>nach Angaben + Gen.</em>, <em>zufolge</em> (стоїть після іменника:
<em>dem Bericht zufolge</em>), <em>angeblich</em>, а також модальні <em>sollen</em> і <em>wollen</em>
з рівня B2.</p>`,
      },
      {
        title: '5. Слова з прикладів цієї теми',
        html: `
<p>Непряма мова живе в мові преси й науки, тому приклади вище побудовані саме на цій лексиці.</p>
<table>
<thead><tr><th>Слово</th><th>Переклад</th><th>Як ужито в темі</th></tr></thead>
<tbody>
<tr><td><em>zurücktreten</em></td><td>іти у відставку</td><td><em>Der Minister soll zurückgetreten sein.</em><span class="uk">Кажуть, міністр пішов у відставку.</span></td></tr>
<tr><td><em>die Reform, -en</em></td><td>реформа</td><td><em>Die Reform sei notwendig.</em><span class="uk">Реформа, мовляв, необхідна.</span></td></tr>
<tr><td><em>notwendig</em></td><td>необхідний</td><td>там само</td></tr>
<tr><td><em>zuständig sein</em></td><td>відповідати за щось, бути компетентним</td><td><em>Er erklärte, er sei nicht zuständig.</em><span class="uk">Він заявив, що не належить до його компетенції.</span></td></tr>
<tr><td><em>der Zeuge, -n</em></td><td>свідок</td><td><em>Der Zeuge gab an, er habe nichts gesehen.</em><span class="uk">Свідок заявив, що нічого не бачив.</span></td></tr>
<tr><td><em>angeben</em></td><td>заявляти, зазначати</td><td>там само</td></tr>
<tr><td><em>die Sitzung, -en</em></td><td>засідання</td><td><em>…, dass die Sitzung verschoben werde.</em><span class="uk">…, що засідання буде перенесено.</span></td></tr>
<tr><td><em>die Umsetzung</em></td><td>впровадження, реалізація</td><td><em>Die Umsetzung sei verzögert worden.</em><span class="uk">Впровадження, за її словами, затрималося.</span></td></tr>
<tr><td><em>verzögern</em></td><td>затримувати</td><td>там само</td></tr>
<tr><td><em>der Vertrag, ¨-e</em></td><td>договір</td><td><em>Er sagte, er habe den Vertrag unterschrieben.</em><span class="uk">Він сказав, що підписав договір.</span></td></tr>
<tr><td><em>die Lage</em></td><td>ситуація, становище</td><td><em>Die Lage sei ernst.</em><span class="uk">Ситуація, мовляв, серйозна.</span></td></tr>
<tr><td><em>die Maßnahme, -n</em></td><td>захід (дія)</td><td><em>Weitere Maßnahmen würden geprüft.</em><span class="uk">Подальші заходи, мовляв, розглядають.</span></td></tr>
<tr><td><em>prüfen</em></td><td>перевіряти, розглядати</td><td>там само</td></tr>
</tbody></table>
<div class="callout callout--tip"><strong>Як це звучить українською.</strong> Konjunktiv I не має прямого
відповідника, тож у перекладі його передають вставними словами: <em>мовляв</em>, <em>за словами</em>,
<em>нібито</em>, <em>як стверджує</em>. Саме тому переклади вище звучать саме так.</div>`,
      },
    ],
    exercises: [
      { type: 'gap', q: 'Er sagte, er ___ müde. (sein → Konj. I)', answers: ['sei'] },
      { type: 'gap', q: 'Sie erklärte, sie ___ keine Zeit. (haben → Konj. I, 3. Pers. Sg.)', answers: ['habe'] },
      { type: 'gap', q: 'Der Sprecher betonte, die Regierung ___ schnell reagieren. (werden → Konj. I)',
        answers: ['werde'] },
      { type: 'gap', q: 'Sie sagten, sie ___ keine Zeit. (мн., форма збігається з Indikativ → Konj. II)',
        answers: ['hätten|haetten'],
        explain: 'sie haben (Konj. I) = sie haben (Indikativ), тому переходимо на Konjunktiv II: hätten.' },
      { type: 'gap', q: '«Ich war krank.» → Er sagte, er ___ krank ___.', answers: ['sei', 'gewesen'] },
      { type: 'gap', q: '«Ich habe den Bericht gelesen.» → Sie sagte, sie ___ den Bericht ___.',
        answers: ['habe', 'gelesen'] },
      { type: 'gap', q: '«Kommst du morgen?» → Er fragte, ___ ich am folgenden Tag ___. (kommen → Konj. II)',
        answers: ['ob', 'käme|kaeme'] },
      { type: 'gap', q: '«Geh sofort nach Hause!» → Sie sagte, ich ___ sofort nach Hause gehen.',
        answers: ['solle'] },
      { type: 'choice', q: 'Яке речення журналістськи коректне?',
        options: ['Der Minister sagte, die Reform ist notwendig.', 'Der Minister sagte, die Reform sei notwendig.', 'Der Minister sagte, die Reform wäre notwendig gewesen.', 'Der Minister sagte, die Reform sein notwendig.'],
        answer: 1 },
      { type: 'choice', q: 'Konjunktiv I від <span class="de-inline">können</span>, 3. Person Singular:',
        options: ['kann', 'könne', 'könnte', 'konnte'], answer: 1 },
      { type: 'choice', q: 'Чому в реченні «Sie sagten, sie hätten nichts gewusst» стоїть Konjunktiv II?',
        options: ['Бо йдеться про минуле.', 'Бо форма Konjunktiv I збігалася б з Indikativ.', 'Бо мовець сумнівається.', 'Бо це питання.'],
        answer: 1 },
      { type: 'order', q: 'Складіть речення непрямої мови.',
        words: ['Der', 'Zeuge', 'gab', 'an', 'er', 'habe', 'nichts', 'gesehen'],
        answer: 'Der Zeuge gab an er habe nichts gesehen' },
      { type: 'order', q: 'Складіть речення з dass.',
        words: ['Sie', 'teilte', 'mit', 'dass', 'die', 'Sitzung', 'verschoben', 'werde'],
        answer: 'Sie teilte mit dass die Sitzung verschoben werde' },
      { type: 'match', q: 'Доберіть переклад.',
        pairs: [['einräumen', 'визнавати'], ['bestreiten', 'спростовувати'], ['andeuten', 'натякати'], ['versichern', 'запевняти'], ['entgegnen', 'заперечити у відповідь']] },
      { type: 'multi', q: 'Позначте форми Konjunktiv I.',
        options: ['sei', 'wäre', 'habe', 'hätte', 'werde', 'würde'], answers: [0, 2, 4] },
    ],

    listening: [
      {
        exam: 'Goethe C1 · Hören Teil 2',
        title: 'Pressekonferenz: Bericht und Nachfragen',
        instruction: 'Речниця дослідницького інституту представляє результати, журналісти ставлять питання. Слухайте, як переказують чужі слова.',
        lines: [
          { speaker: 'Sprecherin', de: 'Guten Tag. Unsere Erhebung kommt zu dem Schluss, dass die Zahl der Pendler in den letzten fünf Jahren um vierzehn Prozent zurückgegangen ist.', uk: 'Добрий день. Наше дослідження доходить висновку, що кількість маятникових мігрантів за останні п’ять років скоротилася на чотирнадцять відсотків.' },
          { speaker: 'Journalist 1', de: 'Das Wirtschaftsministerium hatte im Frühjahr erklärt, die Zahlen seien stabil geblieben. Wie erklären Sie den Widerspruch?', uk: 'Міністерство економіки навесні заявляло, що показники залишилися стабільними. Як Ви пояснюєте цю суперечність?' },
          { speaker: 'Sprecherin', de: 'Das Ministerium bezieht sich auf eine ältere Datenbasis. Wir räumen ein, dass die Methodik unterschiedlich ist.', uk: 'Міністерство спирається на старішу базу даних. Ми визнаємо, що методики різні.' },
          { speaker: 'Journalist 2', de: 'Kritiker behaupten, Ihre Studie sei von einem Verkehrsunternehmen finanziert worden.', uk: 'Критики стверджують, що Ваше дослідження профінансувала транспортна компанія.' },
          { speaker: 'Sprecherin', de: 'Das bestreite ich entschieden. Die Finanzierung erfolgte ausschließlich aus öffentlichen Mitteln; die Quellen seien im Anhang vollständig dokumentiert, wie ich betonen möchte.', uk: 'Це я рішуче спростовую. Фінансування здійснювалося виключно з публічних коштів; джерела, як я хотіла б наголосити, повністю задокументовані в додатку.' },
          { speaker: 'Journalist 1', de: 'Und wie werde sich der Trend Ihrer Einschätzung nach entwickeln?', uk: 'І як, на Вашу оцінку, розвиватиметься ця тенденція?' },
          { speaker: 'Sprecherin', de: 'Wir gehen davon aus, dass sich der Rückgang verlangsamen werde. Eine Trendumkehr sei jedoch nicht in Sicht.', uk: 'Ми виходимо з того, що спад сповільниться. Однак розвороту тенденції не передбачається.' },
        ],
        tasks: [
          { type: 'gap', q: 'Die Zahl der Pendler ist um ___ Prozent zurückgegangen.', answers: ['14|vierzehn'] },
          { type: 'choice', q: 'Wie erklärt die Sprecherin den Widerspruch zum Ministerium?',
            options: ['Das Ministerium hat sich geirrt.', 'Es liegt an einer anderen Datenbasis und Methodik.', 'Die Zahlen wurden manipuliert.', 'Sie kann es nicht erklären.'], answer: 1 },
          { type: 'choice', q: 'Wie reagiert die Sprecherin auf den Finanzierungsvorwurf?',
            options: ['Sie räumt ihn ein.', 'Sie bestreitet ihn entschieden.', 'Sie äußert sich nicht dazu.', 'Sie bestätigt ihn teilweise.'], answer: 1 },
          { type: 'gap', q: 'Sie sagt, die Quellen ___ im Anhang dokumentiert. (Konj. I)', answers: ['seien'] },
          { type: 'truefalse', q: 'Die Sprecherin erwartet eine Trendumkehr.', answer: false,
            explain: '«Eine Trendumkehr sei jedoch nicht in Sicht.»' },
          { type: 'choice', q: 'Welches Verb signalisiert am stärksten Zweifel des Sprechenden?',
            options: ['mitteilen', 'erklären', 'behaupten', 'berichten'], answer: 2 },
        ],
      },
    ],

    writing: [
      {
        exam: 'Goethe C1 · Schreiben Teil 2',
        title: 'Zusammenfassung eines Interviews',
        situation: 'Ви готуєте для внутрішнього бюлетеня стислий переказ інтерв’ю з дослідницею. Її слова наведені нижче в прямій мові. Перекажіть їх у <strong>непрямій мові з Konjunktiv I</strong>, обсяг <strong>120–150 слів</strong>, без прямих цитат.',
        points: [
          '«Wir haben drei Jahre lang 2000 Haushalte begleitet.»',
          '«Die Ergebnisse sind eindeutig: Wer flexibel arbeitet, ist zufriedener.»',
          '«Allerdings gibt es einen Preis — die Grenzen verschwimmen.»',
          '«Wir werden die Studie im Herbst fortsetzen.»',
          '«Ich rate den Unternehmen, klare Regeln zu vereinbaren.»',
        ],
        minWords: 120,
        phrases: [
          { de: 'In einem Interview erklärte die Forscherin, …', uk: 'В інтерв’ю дослідниця пояснила, що …' },
          { de: 'Man habe drei Jahre lang 2000 Haushalte begleitet.', uk: 'Мовляв, три роки супроводжували 2000 домогосподарств.' },
          { de: 'Die Ergebnisse seien eindeutig.', uk: 'Результати, за її словами, однозначні.' },
          { de: 'Sie räumte allerdings ein, dass …', uk: 'Утім, вона визнала, що …' },
          { de: 'Die Studie werde im Herbst fortgesetzt.', uk: 'Дослідження буде продовжено восени.' },
          { de: 'Abschließend riet sie den Unternehmen, …', uk: 'Наостанок вона порадила компаніям …' },
        ],
        checklist: [
          'Немає жодної прямої цитати й лапок?',
          'Усі присудки чужої мови стоять у Konjunktiv I (або в Konjunktiv II там, де форми збігаються)?',
          'Займенники й обставини часу перебудовані (ich → sie, wir → man/sie)?',
          'Варіюються дієслова введення (erklären, betonen, einräumen, raten)?',
          'Обсяг 120–150 слів, текст зв’язний, а не список?',
        ],
        model:
`In einem Interview erläuterte die Forscherin die Ergebnisse ihrer Langzeitstudie zur flexiblen Arbeit.

Ihr Team habe drei Jahre lang rund zweitausend Haushalte begleitet. Die Befunde seien eindeutig:
Wer seine Arbeitszeit selbst einteilen könne, sei insgesamt zufriedener und berichte seltener über
Erschöpfung. Zugleich räumte sie ein, dass diese Freiheit einen Preis habe. Die Grenzen zwischen Beruf
und Privatleben verschwämmen zunehmend, und viele Beschäftigte hätten Schwierigkeiten, abzuschalten.

Besonders betroffen seien nach ihren Angaben Eltern kleiner Kinder, die abends häufig noch einmal zum
Rechner zurückkehrten. Bei ihnen habe das Team die höchsten Werte für gefühlten Zeitdruck gemessen,
obwohl sie ihre Arbeitszeit formal frei einteilen könnten.

Die Untersuchung werde im Herbst fortgesetzt; dann solle vor allem geprüft werden, wie sich die
Belastung über längere Zeiträume entwickle und welche Rolle die Unternehmenskultur dabei spiele.

Abschließend riet sie den Unternehmen, verbindliche Regeln zu vereinbaren, etwa feste Zeiten ohne
Erreichbarkeit. Nur so lasse sich verhindern, dass Flexibilität in ständige Verfügbarkeit umschlage
und aus einem Gewinn an Freiheit am Ende eine zusätzliche Last werde.`,
        modelUk: 'Коротко: увесь переказ витриманий у Konjunktiv I (habe, seien, könne, sei, berichte, werde, solle, entwickle, lasse), а там, де форма збіглася б з Indikativ, ужито Konjunktiv II (verschwämmen, hätten). Прямих цитат немає, займенники перебудовані, дієслова введення варіюються: erläutern → einräumen → raten.',
      },
    ],

    test: [
      { type: 'gap', q: 'Er erklärte, er ___ nicht zuständig. (sein)', answers: ['sei'] },
      { type: 'gap', q: 'Sie betonte, das Projekt ___ Priorität. (haben)', answers: ['habe'] },
      { type: 'gap', q: 'Der Bericht besagt, die Kosten ___ steigen. (werden)', answers: ['würden|wuerden'],
        explain: 'die Kosten werden (Konj. I) = Indikativ, тому Konjunktiv II: würden.' },
      { type: 'gap', q: '«Ich habe den Vertrag unterschrieben.» → Er sagte, er ___ den Vertrag ___.',
        answers: ['habe', 'unterschrieben'] },
      { type: 'gap', q: '«Wir waren nicht informiert.» → Sie gaben an, sie ___ nicht informiert ___.',
        answers: ['seien', 'gewesen'] },
      { type: 'gap', q: '«Hilf mir!» → Er bat mich, ich ___ ihm helfen.', answers: ['solle'] },
      { type: 'gap', q: '«Wo wohnst du?» → Sie fragte, wo ich ___. (wohnen → Konj. II)', answers: ['wohnte'] },
      { type: 'choice', q: 'Konjunktiv I від <span class="de-inline">sein</span>, 3. Person Plural:',
        options: ['sind', 'seien', 'wären', 'seiet'], answer: 1 },
      { type: 'choice', q: 'У якому реченні автор дистанціюється від змісту?',
        options: ['Die Firma zahlt gute Löhne.', 'Die Firma zahle gute Löhne.', 'Die Firma zahlte gute Löhne.', 'Die Firma hat gute Löhne gezahlt.'],
        answer: 1 },
      { type: 'choice', q: 'Яке дієслово вводить чужу мову з найбільшим сумнівом?',
        options: ['mitteilen', 'berichten', 'behaupten', 'erklären'], answer: 2 },
      { type: 'order', q: 'Складіть речення.',
        words: ['Die', 'Ministerin', 'räumte', 'ein', 'die', 'Umsetzung', 'sei', 'verzögert', 'worden'],
        answer: 'Die Ministerin räumte ein die Umsetzung sei verzögert worden' },
      { type: 'match', q: 'Доберіть переклад.',
        pairs: [['die Stellungnahme', 'заява'], ['widerlegen', 'спростовувати'], ['umstritten', 'спірний'], ['sich beziehen auf', 'посилатися на'], ['die Erhebung', 'збір даних']] },
      { type: 'multi', q: 'Позначте правильні перетворення прямої мови в непряму.',
        options: [
          '«Ich komme.» → Er sagt, er komme.',
          '«Ich komme.» → Er sagt, er kommt.',
          '«Wir haben Zeit.» → Sie sagen, sie hätten Zeit.',
          '«Wir haben Zeit.» → Sie sagen, sie haben Zeit.',
          '«Ich werde anrufen.» → Er sagt, er werde anrufen.',
        ],
        answers: [0, 2, 4] },
      { type: 'truefalse', q: 'Якщо форма Konjunktiv I збігається з Indikativ, її замінюють на Konjunktiv II.', answer: true },
    ],
  },

  /* ─────────────────────────────── МОДУЛЬ 2 ─────────────────────────────── */
  {
    id: 'm2',
    title: 'Partizipialkonstruktionen und Nominalstil',
    titleUk: 'Партиципні означення та номінальний стиль',
    can: [
      'утворювати й розуміти поширені партиципні означення (erweiterte Attribute)',
      'відрізняти Partizip I від Partizip II за значенням і часом',
      'вживати конструкцію zu + Partizip I',
      'перетворювати підрядні речення на номінальні групи й навпаки',
      'свідомо обирати регістр: вербальний чи номінальний',
    ],

    grammar: [
      {
        title: '1. Partizip I і Partizip II як означення',
        html: `
<table>
<thead><tr><th></th><th>Утворення</th><th>Значення</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td><strong>Partizip I</strong></td><td>Infinitiv + <em>-d</em><br>(+ закінчення прикметника)</td>
<td>активне, одночасне: «той, що робить»</td>
<td><em>die <strong>schlafende</strong> Katze</em> — кішка, що спить<br><em>ein <strong>wachsendes</strong> Problem</em></td></tr>
<tr><td><strong>Partizip II</strong></td><td>як у Perfekt<br>(+ закінчення прикметника)</td>
<td>пасивне або завершене: «той, якого зробили»</td>
<td><em>das <strong>gelöste</strong> Problem</em> — розв’язана проблема<br><em>die <strong>angekommenen</strong> Gäste</em> — гості, що прибули</td></tr>
</tbody></table>
<p><strong>Важливий нюанс.</strong> Partizip II від <u>перехідних</u> дієслів має пасивне значення
(<em>der geschriebene Brief</em> — лист, який написали), а від <u>неперехідних із sein</u> —
активне завершене (<em>der angekommene Zug</em> — потяг, який прибув).</p>
<div class="callout"><strong>Типова помилка.</strong> Українською обидва часто перекладаються
дієприкметником на -ючий / -ний, тому легко переплутати:
<em>das <u>überzeugende</u> Argument</em> — переконливий аргумент (він переконує) проти
<em>der <u>überzeugte</u> Anhänger</em> — переконаний прибічник (його переконали).</div>`,
      },
      {
        title: '2. Erweiterte Attribute — поширене означення',
        html: `
<p>Це візитівка німецького письмового стилю: між артиклем та іменником вставляється ціла група слів.
Українською такої конструкції немає — ми розгортаємо її в підрядне речення.</p>
<table>
<thead><tr><th>Підрядне речення</th><th>Поширене означення</th></tr></thead>
<tbody>
<tr><td><em>der Bericht, <u>der gestern veröffentlicht wurde</u></em></td>
<td><em>der <u>gestern veröffentlichte</u> Bericht</em></td></tr>
<tr><td><em>die Zahl, <u>die seit Jahren steigt</u></em></td>
<td><em>die <u>seit Jahren steigende</u> Zahl</em></td></tr>
<tr><td><em>ein Problem, <u>das in vielen Städten diskutiert wird</u></em></td>
<td><em>ein <u>in vielen Städten diskutiertes</u> Problem</em></td></tr>
</tbody></table>
<p><strong>Як читати таку конструкцію.</strong> Алгоритм із трьох кроків:</p>
<ol>
<li>знайдіть артикль і <strong>перескочіть</strong> до іменника в кінці групи — це головне слово;</li>
<li>поверніться до партиципа безпосередньо перед іменником — він задає дію;</li>
<li>усе, що між артиклем і партиципом, — це обставини цієї дії.</li>
</ol>
<p><em>die <span style="color:var(--accent-deep)">im vergangenen Jahr von der Kommission
beschlossenen</span> <strong>Maßnahmen</strong></em> → «заходи, які торік ухвалила комісія».</p>
<div class="callout callout--tip"><strong>Скільки це коштує читачеві.</strong> Поширене означення
економить слова, але навантажує пам’ять. У Schreiben C1 доречні одне-два на абзац — не більше.
Суцільний ланцюг таких конструкцій оцінюють як важкий, а не як вправний стиль.</div>`,
      },
      {
        title: '3. zu + Partizip I — необхідність або можливість',
        html: `
<p>Конструкція <em>zu</em> + Partizip I як означення означає те саме, що пасив із модальним дієсловом.
Це щільна офіційна форма.</p>
<table>
<thead><tr><th>Конструкція</th><th>Розгортання</th></tr></thead>
<tbody>
<tr><td><em>die <strong>zu lösende</strong> Aufgabe</em></td><td>die Aufgabe, die gelöst werden muss</td></tr>
<tr><td><em>die <strong>zu erwartenden</strong> Kosten</em></td><td>die Kosten, die erwartet werden können</td></tr>
<tr><td><em>ein <strong>nicht zu übersehendes</strong> Problem</em></td><td>ein Problem, das man nicht übersehen kann</td></tr>
</tbody></table>
<p>З дієсловами з відокремлюваним префіксом <em>zu</em> стоїть усередині:
<em>die <strong>auszufüllenden</strong> Formulare</em>.</p>`,
      },
      {
        title: '4. Номінальний і вербальний стиль',
        html: `
<p>Одна думка — два регістри. Вербальний стиль (дієслова, підрядні речення) типовий для розмови
й публіцистики; номінальний (іменники, прийменникові групи) — для права, науки й адміністрації.</p>
<table>
<thead><tr><th>Вербальний</th><th>Номінальний</th></tr></thead>
<tbody>
<tr><td><em>Weil die Preise gestiegen sind, sinkt der Konsum.</em></td>
<td><em>Wegen des Preisanstiegs sinkt der Konsum.</em></td></tr>
<tr><td><em>Nachdem der Vertrag unterschrieben worden war, …</em></td>
<td><em>Nach Unterzeichnung des Vertrags …</em></td></tr>
<tr><td><em>Obwohl es stark regnete, …</em></td><td><em>Trotz des starken Regens …</em></td></tr>
<tr><td><em>Wenn Sie Fragen haben, …</em></td><td><em>Bei Fragen …</em></td></tr>
<tr><td><em>Damit die Qualität verbessert wird, …</em></td><td><em>Zur Verbesserung der Qualität …</em></td></tr>
</tbody></table>
<p><strong>Ключові відповідники сполучник → прийменник:</strong></p>
<table>
<thead><tr><th>Сполучник</th><th>Прийменник</th><th>Відмінок</th></tr></thead>
<tbody>
<tr><td>weil</td><td>wegen, aufgrund</td><td>Genitiv</td></tr>
<tr><td>obwohl</td><td>trotz</td><td>Genitiv</td></tr>
<tr><td>wenn / falls</td><td>bei, im Falle</td><td>Dativ / Genitiv</td></tr>
<tr><td>damit / um … zu</td><td>zu, zwecks</td><td>Dativ / Genitiv</td></tr>
<tr><td>nachdem</td><td>nach</td><td>Dativ</td></tr>
<tr><td>bevor</td><td>vor</td><td>Dativ</td></tr>
<tr><td>während</td><td>während</td><td>Genitiv</td></tr>
<tr><td>ohne dass</td><td>ohne</td><td>Akkusativ</td></tr>
</tbody></table>
<div class="callout"><strong>Не перестарайтеся.</strong> Суцільний номінальний стиль німці самі
критикують як <em>Behördendeutsch</em>. На C1 цінують уміння <u>перемикатися</u>: складну думку
подати номінально, а висновок — коротким дієслівним реченням.</div>`,
      },
      {
        title: '5. Слова з прикладів цієї теми',
        html: `
<p>Партиципні означення й номінальний стиль тримаються на віддієслівних іменниках. Ось лексика,
на якій побудовані приклади вище.</p>
<table>
<thead><tr><th>Слово</th><th>Переклад</th><th>Як ужито в темі</th></tr></thead>
<tbody>
<tr><td><em>beschließen</em></td><td>ухвалювати (рішення)</td><td><em>die beschlossenen Maßnahmen</em><span class="uk">ухвалені заходи</span></td></tr>
<tr><td><em>die Maßnahme, -n</em></td><td>захід (дія)</td><td>там само</td></tr>
<tr><td><em>veröffentlichen</em></td><td>публікувати</td><td><em>der gestern veröffentlichte Bericht</em><span class="uk">оприлюднений учора звіт</span></td></tr>
<tr><td><em>der Bericht, -e</em></td><td>звіт, повідомлення</td><td>там само</td></tr>
<tr><td><em>überzeugen</em></td><td>переконувати</td><td><em>das überzeugende Argument</em> — переконливий аргумент<span class="uk">але <em>der überzeugte Anhänger</em> — переконаний прибічник</span></td></tr>
<tr><td><em>der Anhänger, -</em></td><td>прибічник</td><td>там само</td></tr>
<tr><td><em>der Preisanstieg</em></td><td>зростання цін</td><td><em>Wegen des Preisanstiegs sinkt der Konsum.</em><span class="uk">Через зростання цін споживання падає.</span></td></tr>
<tr><td><em>der Konsum</em></td><td>споживання</td><td>там само</td></tr>
<tr><td><em>die Unterzeichnung</em></td><td>підписання</td><td><em>Nach Unterzeichnung des Vertrags …</em><span class="uk">Після підписання договору …</span></td></tr>
<tr><td><em>der Wohnungswechsel</em></td><td>зміна місця проживання</td><td><em>im Falle eines Wohnungswechsels</em><span class="uk">у разі зміни місця проживання</span></td></tr>
<tr><td><em>erheblich</em></td><td>значний, істотний</td><td><em>erhebliche Gedächtnisleistung</em><span class="uk">значне зусилля пам’яті</span></td></tr>
<tr><td><em>der Aufwand</em> / <em>die Leistung</em></td><td>затрати / зусилля, результат</td><td>типова пара в таких текстах</td></tr>
</tbody></table>
<div class="callout callout--tip"><strong>Порада для перекладу.</strong> Поширене означення українською
майже завжди розгортається у підрядне речення: <em>die im Bericht genannten Zahlen</em> →
«цифри, <u>які наведено у звіті</u>». Не намагайтеся зберегти німецький порядок — вийде нечитабельно.</div>`,
      },
    ],
    exercises: [
      { type: 'gap', q: 'die Katze, die schläft → die ___ Katze (Partizip I)', answers: ['schlafende'] },
      { type: 'gap', q: 'das Problem, das gelöst wurde → das ___ Problem (Partizip II)', answers: ['gelöste|geloeste'] },
      { type: 'gap', q: 'die Zahl, die seit Jahren steigt → die seit Jahren ___ Zahl', answers: ['steigende'] },
      { type: 'gap', q: 'der Bericht, der gestern veröffentlicht wurde → der gestern ___ Bericht',
        answers: ['veröffentlichte|veroeffentlichte'] },
      { type: 'gap', q: 'die Aufgabe, die gelöst werden muss → die ___ ___ Aufgabe (zu + Partizip I)',
        answers: ['zu', 'lösende|loesende'] },
      { type: 'choice', q: 'Що означає <span class="de-inline">der überzeugte Anhänger</span>?',
        options: ['прибічник, який переконує', 'переконаний прибічник', 'прибічник, якого треба переконати', 'переконливий прибічник'],
        answer: 1 },
      { type: 'choice', q: 'Що означає <span class="de-inline">die zu erwartenden Kosten</span>?',
        options: ['витрати, які очікували', 'витрати, яких можна очікувати', 'витрати, що очікують', 'очікувані витратами'],
        answer: 1 },
      { type: 'choice', q: 'Розгорніть: «die im vergangenen Jahr beschlossenen Maßnahmen»',
        options: [
          'die Maßnahmen, die im vergangenen Jahr beschlossen wurden',
          'die Maßnahmen, die im vergangenen Jahr beschließen',
          'die Maßnahmen, die man im vergangenen Jahr beschließen muss',
          'die Maßnahmen, die im vergangenen Jahr beschließend waren',
        ], answer: 0 },
      { type: 'gap', q: 'Weil die Preise gestiegen sind, sinkt der Konsum. → ___ des Preisanstiegs sinkt der Konsum.',
        answers: ['Wegen|Aufgrund'] },
      { type: 'gap', q: 'Obwohl es stark regnete, … → ___ des starken Regens …', answers: ['Trotz'] },
      { type: 'gap', q: 'Nachdem der Vertrag unterschrieben worden war, … → ___ Unterzeichnung des Vertrags …',
        answers: ['Nach'] },
      { type: 'gap', q: 'Damit die Qualität verbessert wird, … → ___ Verbesserung der Qualität …',
        answers: ['Zur'] },
      { type: 'order', q: 'Складіть номінальну групу.',
        words: ['die', 'in', 'vielen', 'Städten', 'diskutierte', 'Maßnahme'],
        answer: 'die in vielen Städten diskutierte Maßnahme' },
      { type: 'match', q: 'Доберіть іменник до дієслова.',
        pairs: [['einführen', 'die Einführung'], ['steigen', 'der Anstieg'], ['verzichten', 'der Verzicht'], ['entscheiden', 'die Entscheidung'], ['durchführen', 'die Durchführung']] },
      { type: 'multi', q: 'Позначте конструкції з пасивним значенням.',
        options: ['das gelöste Problem', 'das wachsende Problem', 'die zu lösende Aufgabe', 'die schlafende Katze', 'der geschriebene Brief'],
        answers: [0, 2, 4] },
    ],

    listening: [
      {
        exam: 'Goethe C1 · Hören Teil 2',
        title: 'Fachvortrag: Sprache der Verwaltung',
        instruction: 'Мовознавець читає лекцію про адміністративну німецьку. Слухайте приклади конструкцій.',
        lines: [
          { de: 'Guten Abend. Mein heutiger Vortrag befasst sich mit einem oft kritisierten Phänomen: dem sogenannten Behördendeutsch.', uk: 'Доброго вечора. Моя сьогоднішня доповідь присвячена часто критикованому явищу — так званій канцелярській німецькій.' },
          { de: 'Charakteristisch sind erweiterte Attribute wie «die im vergangenen Jahr von der Kommission beschlossenen Maßnahmen».', uk: 'Характерними є поширені означення на кшталт «ухвалені торік комісією заходи».' },
          { de: 'Solche Konstruktionen sparen zwar Wörter, verlangen dem Lesenden aber erhebliche Gedächtnisleistung ab.', uk: 'Такі конструкції хоч і економлять слова, але вимагають від читача значного зусилля пам’яті.' },
          { de: 'Eine 2019 durchgeführte Untersuchung zeigte, dass Formulare mit mehr als zwei erweiterten Attributen pro Satz von der Hälfte der Befragten missverstanden wurden.', uk: 'Проведене 2019 року дослідження показало, що формуляри з більш ніж двома поширеними означеннями на речення половина опитаних зрозуміла неправильно.' },
          { de: 'Hinzu kommt der Nominalstil: statt «wenn Sie umziehen» heißt es «im Falle eines Wohnungswechsels».', uk: 'Додається номінальний стиль: замість «якщо Ви переїжджаєте» пишуть «у разі зміни місця проживання».' },
          { de: 'Ich plädiere nicht für die Abschaffung dieser Mittel — sie sind präzise und in Fachtexten unverzichtbar.', uk: 'Я не виступаю за скасування цих засобів — вони точні й незамінні у фахових текстах.' },
          { de: 'Entscheidend ist die Adressatenorientierung: Wer schreibt, sollte wissen, für wen er schreibt.', uk: 'Вирішальною є орієнтація на адресата: хто пише, має знати, для кого він пише.' },
        ],
        tasks: [
          { type: 'choice', q: 'Worum geht es im Vortrag?',
            options: ['Um Dialekte', 'Um die Sprache der Verwaltung', 'Um Fremdwörter', 'Um Jugendsprache'], answer: 1 },
          { type: 'gap', q: 'Die Untersuchung wurde im Jahr ___ durchgeführt.', answers: ['2019'] },
          { type: 'choice', q: 'Was zeigte die Untersuchung?',
            options: [
              'Alle Befragten verstanden die Formulare.',
              'Die Hälfte der Befragten missverstand Formulare mit mehr als zwei erweiterten Attributen.',
              'Erweiterte Attribute erleichtern das Verständnis.',
              'Nominalstil ist immer falsch.',
            ], answer: 1 },
          { type: 'gap', q: 'Statt «wenn Sie umziehen» schreibt die Verwaltung: «___ ___ eines Wohnungswechsels».',
            answers: ['im', 'Falle'] },
          { type: 'truefalse', q: 'Der Referent fordert, den Nominalstil vollständig abzuschaffen.', answer: false,
            explain: '«Ich plädiere nicht für die Abschaffung dieser Mittel.»' },
          { type: 'choice', q: 'Was ist für den Referenten entscheidend?',
            options: ['Kürze um jeden Preis', 'Die Orientierung am Adressaten', 'Der Verzicht auf Fachbegriffe', 'Die Verwendung von Dialekt'], answer: 1 },
        ],
      },
    ],

    writing: [
      {
        exam: 'Goethe C1 · Schreiben Teil 2',
        title: 'Stilistische Umformung: privat → offiziell',
        situation: 'Нижче наведено уривок із приватного листа. Перепишіть його як офіційне повідомлення установи: номінальний стиль, пасив або його замінники, партиципні означення, прийменники з Genitiv. Обсяг <strong>120–150 слів</strong>.',
        points: [
          '«Weil viele Leute sich beschwert haben, machen wir das Anmeldesystem neu.»',
          '«Ab dem 1. Oktober könnt ihr euch nur noch online anmelden.»',
          '«Wenn ihr Fragen habt, ruft einfach an.»',
          '«Wir haben das letztes Jahr schon getestet und es hat gut geklappt.»',
          '«Bevor ihr euch anmeldet, lest bitte die Hinweise.»',
        ],
        minWords: 120,
        phrases: [
          { de: 'Aufgrund zahlreicher Beschwerden wird das Anmeldesystem überarbeitet.', uk: 'Через численні скарги систему реєстрації буде переглянуто.' },
          { de: 'Ab dem 1. Oktober ist eine Anmeldung ausschließlich online möglich.', uk: 'Із 1 жовтня реєстрація можлива виключно онлайн.' },
          { de: 'Bei Rückfragen steht Ihnen unsere Hotline zur Verfügung.', uk: 'У разі запитань до Ваших послуг наша гаряча лінія.' },
          { de: 'Das im vergangenen Jahr erprobte Verfahren hat sich bewährt.', uk: 'Випробувана торік процедура себе виправдала.' },
          { de: 'Vor der Anmeldung sind die beigefügten Hinweise zu beachten.', uk: 'Перед реєстрацією слід звернути увагу на додані вказівки.' },
        ],
        checklist: [
          'Немає звертання на du/ihr і розмовних зворотів?',
          'Є щонайменше два поширених означення з партиципом?',
          'Є щонайменше три прийменникові групи замість підрядних (aufgrund, vor, bei, im Falle)?',
          'Ужито пасив або sein + zu замість «ihr müsst»?',
          'Текст лишився зрозумілим — не суцільна номіналізація?',
        ],
        model:
`Sehr geehrte Damen und Herren,

aufgrund zahlreicher in den vergangenen Monaten eingegangener Beschwerden wird das bisherige
Anmeldeverfahren grundlegend überarbeitet.

Ab dem 1. Oktober ist eine Anmeldung ausschließlich über das Onlineportal möglich; in Papierform
eingereichte Anträge können ab diesem Zeitpunkt nicht mehr berücksichtigt werden. Das bereits im
vergangenen Jahr in zwei Bezirken erprobte Verfahren hat sich dabei als deutlich weniger fehleranfällig
erwiesen.

Vor der Anmeldung sind die dem Schreiben beigefügten Hinweise sorgfältig zu beachten. Die zur Bearbeitung
erforderlichen Nachweise sind vollständig hochzuladen; unvollständige Anträge verlängern die Bearbeitungszeit
erheblich und müssen unter Umständen zurückgewiesen werden.

Für Personen ohne Internetzugang wird in allen Bezirksämtern ein betreuter Terminalzugang eingerichtet.
Die dort geleistete Unterstützung beschränkt sich auf technische Fragen; eine inhaltliche Beratung zu den
einzureichenden Unterlagen ist ausschließlich telefonisch vorgesehen.

Bei Rückfragen steht Ihnen unsere Servicestelle montags bis donnerstags von acht bis sechzehn Uhr zur
Verfügung. Wir bitten um Verständnis für die mit der Umstellung verbundenen Verzögerungen.

Mit freundlichen Grüßen
Bürgerservice der Stadt`,
        modelUk: 'Коротко: розмовні звороти замінено на офіційні. Поширені означення — «in den vergangenen Monaten eingegangener Beschwerden», «das bereits im vergangenen Jahr in zwei Bezirken erprobte Verfahren», «die dem Schreiben beigefügten Hinweise», «die zur Bearbeitung erforderlichen Nachweise». Замість підрядних — прийменникові групи (aufgrund, vor der Anmeldung, bei Rückfragen), замість «ihr müsst» — sein + zu (sind zu beachten, sind hochzuladen).',
      },
    ],

    test: [
      { type: 'gap', q: 'das Kind, das weint → das ___ Kind', answers: ['weinende'] },
      { type: 'gap', q: 'der Brief, der geschrieben wurde → der ___ Brief', answers: ['geschriebene'] },
      { type: 'gap', q: 'die Formulare, die ausgefüllt werden müssen → die ___ Formulare (zu + Part. I)',
        answers: ['auszufüllenden|auszufuellenden'] },
      { type: 'gap', q: 'die Kosten, die erwartet werden können → die ___ ___ Kosten',
        answers: ['zu', 'erwartenden'] },
      { type: 'choice', q: '<span class="de-inline">ein wachsendes Interesse</span> означає:',
        options: ['інтерес, який виріс', 'зростаючий інтерес', 'інтерес, який треба виростити', 'вирощений інтерес'],
        answer: 1 },
      { type: 'choice', q: 'Розгорніть: «die von der Regierung geplanten Reformen»',
        options: [
          'die Reformen, die die Regierung plant',
          'die Reformen, die die Regierung geplant hat werden',
          'die Reformen, die die Regierung planen muss',
          'die Reformen, die für die Regierung planen',
        ], answer: 0 },
      { type: 'gap', q: 'Weil das Wetter schlecht war, … → ___ des schlechten Wetters …', answers: ['Wegen|Aufgrund'] },
      { type: 'gap', q: 'Wenn Sie Fragen haben, … → ___ Fragen …', answers: ['Bei'] },
      { type: 'gap', q: 'Während die Verhandlungen liefen, … → ___ der Verhandlungen …', answers: ['Während'] },
      { type: 'gap', q: 'Um die Sicherheit zu erhöhen, … → ___ Erhöhung der Sicherheit …', answers: ['Zur'] },
      { type: 'order', q: 'Складіть номінальну групу.',
        words: ['die', 'im', 'Bericht', 'genannten', 'Zahlen'],
        answer: 'die im Bericht genannten Zahlen' },
      { type: 'match', q: 'Доберіть іменник.',
        pairs: [['anwenden', 'die Anwendung'], ['sinken', 'der Rückgang'], ['zusammenarbeiten', 'die Zusammenarbeit'], ['berücksichtigen', 'die Berücksichtigung']] },
      { type: 'match', q: 'Доберіть переклад.',
        pairs: [['angesichts', 'з огляду на'], ['infolge', 'унаслідок'], ['mittels', 'за допомогою'], ['seitens', 'з боку'], ['rückläufig', 'спадний']] },
      { type: 'multi', q: 'Позначте ознаки номінального стилю.',
        options: ['прийменники з Genitiv', 'багато підрядних із weil', 'віддієслівні іменники на -ung', 'звертання на du', 'поширені партиципні означення'],
        answers: [0, 2, 4] },
      { type: 'truefalse', q: 'Partizip II від перехідних дієслів як означення має пасивне значення.', answer: true },
    ],
  },


  ...part2,
  ...part3,
  ],
};
