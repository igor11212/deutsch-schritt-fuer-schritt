import { modules as part2 } from './a2-part2.js?v=20260817d';
import { modules as part3 } from './a2-part3.js?v=20260817d';

export default {
  intro:
    'Повний курс рівня A2: вісім модулів. Ви навчитеся пояснювати причини й умови, описувати ' +
    'предмети прикметниками, розповідати про минуле двома часами, ввічливо просити, будувати ' +
    'підрядні означальні та порівнювати. Цього досить, щоб скласти Goethe-Zertifikat A2 ' +
    'або ÖSD Zertifikat A2.',

  examNote: `
<p>Іспит A2 триває близько <strong>90 хвилин</strong> (письмова частина 70 хв + усна 15 хв).
Прохідний бал — <strong>60 %</strong>.</p>
<table>
<thead><tr><th>Частина</th><th>Завдання</th><th>Час</th></tr></thead>
<tbody>
<tr><td><strong>Hören</strong></td><td>4 частини: короткі повідомлення, розмови в побуті, радіоінтерв’ю, оголошення.</td><td>~30 хв</td></tr>
<tr><td><strong>Lesen</strong></td><td>4 частини: коротка проза, оголошення, реклама, імейл; завдання richtig/falsch та вибір.</td><td>30 хв</td></tr>
<tr><td><strong>Schreiben</strong></td><td>Частина 1 — SMS/повідомлення (~20–30 слів). Частина 2 — імейл на 3 пункти (~30–40 слів).</td><td>30 хв</td></tr>
<tr><td><strong>Sprechen</strong></td><td>Розповісти про себе за ключовими словами, поставити питання партнерові, разом щось спланувати.</td><td>15 хв</td></tr>
</tbody></table>`,


  modules: [

  /* ─────────────────────────────── МОДУЛЬ 1 ─────────────────────────────── */
  {
    id: 'm1',
    title: 'Nebensätze: weil, dass, wenn',
    titleUk: 'Підрядні речення: причина, зміст, умова',
    can: [
      'пояснювати причину через weil і deshalb',
      'передавати чужу думку через dass',
      'формулювати умову й час через wenn',
      'ставити дієслово в кінець підрядного речення',
      'будувати складне речення з підрядним на початку',
    ],

    grammar: [
      {
        title: '1. Головне правило: дієслово в кінець',
        html: `
<p>Ця тема — про три слова, які з’єднують два речення в одне. Ось що вони означають:</p>
<table>
<thead><tr><th>Слово</th><th>Переклад</th><th>Коли вживають</th></tr></thead>
<tbody>
<tr><td><strong>weil</strong></td><td>бо, тому що</td><td>називаєте причину: <em>Ich bleibe zu Hause, weil ich krank bin.</em><span class="uk">Я лишаюся вдома, бо я хворий.</span></td></tr>
<tr><td><strong>dass</strong></td><td>що</td><td>передаєте зміст думки чи слів: <em>Ich weiß, dass er kommt.</em><span class="uk">Я знаю, що він прийде.</span></td></tr>
<tr><td><strong>wenn</strong></td><td>якщо; коли</td><td>умова або повторювана дія: <em>Wenn es regnet, bleibe ich zu Hause.</em><span class="uk">Якщо йде дощ, я лишаюся вдома.</span></td></tr>
</tbody></table>
<p>Німецьке речення має два типи: <strong>головне</strong> (Hauptsatz), де дієслово на другому місці,
і <strong>підрядне</strong> (Nebensatz), де змінене дієслово стоїть <strong>в самому кінці</strong>.</p>
<table>
<thead><tr><th>Головне речення</th><th>Підрядне речення</th></tr></thead>
<tbody>
<tr><td><em>Ich bleibe zu Hause.</em></td><td><em>…, <strong>weil</strong> ich krank <strong>bin</strong>.</em></td></tr>
<tr><td><em>Er lernt Deutsch.</em></td><td><em>…, <strong>weil</strong> er in Wien <strong>arbeitet</strong>.</em></td></tr>
<tr><td><em>Sie kommt nicht.</em></td><td><em>Ich weiß, <strong>dass</strong> sie nicht <strong>kommt</strong>.</em></td></tr>
</tbody></table>
<p><strong>Перед підрядним завжди стоїть кома.</strong> Це не стилістична деталь, а правило —
на іспиті її відсутність зараховують як помилку.</p>
<div class="callout"><strong>Що робити з двома дієсловами?</strong> У кінець іде <em>змінене</em> дієслово,
а інфінітив або Partizip II стоїть <em>перед</em> ним:<br>
<em>…, weil ich arbeiten <strong>muss</strong>.</em> (не «muss arbeiten»)<br>
<em>…, weil ich gestern gearbeitet <strong>habe</strong>.</em><br>
<em>…, weil ich früh <strong>aufstehe</strong>.</em> — префікс приєднується назад!</div>`,
      },
      {
        title: '2. weil, denn, deshalb — три способи назвати причину',
        html: `
<p>Усі три перекладаються схоже, але керують порядком слів по-різному. Це улюблена тема іспиту A2.</p>
<table>
<thead><tr><th>Слово</th><th>Перекладається як</th><th>Що робить із порядком слів</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td><strong>weil</strong></td><td><strong>бо, тому що</strong><br><small>вводить причину</small></td>
<td>дієслово йде <strong>в кінець</strong></td>
<td><em>Ich komme nicht, <strong>weil</strong> ich krank <strong>bin</strong>.</em>
<span class="uk">Я не прийду, бо я хворий.</span></td></tr>
<tr><td><strong>denn</strong></td><td><strong>бо</strong><br><small>те саме значення, що й weil</small></td>
<td>нічого не змінює</td>
<td><em>Ich komme nicht, <strong>denn</strong> ich <strong>bin</strong> krank.</em>
<span class="uk">Я не прийду, бо я хворий.</span></td></tr>
<tr><td><strong>deshalb</strong><br><small>= deswegen, darum</small></td><td><strong>тому, через це</strong><br><small>вводить наслідок, а не причину</small></td>
<td>займає перше місце → дієслово другим</td>
<td><em>Ich bin krank, <strong>deshalb komme</strong> ich nicht.</em>
<span class="uk">Я хворий, тому не прийду.</span></td></tr>
</tbody></table>
<div class="callout callout--tip"><strong>Як обрати між ними.</strong> <em>weil</em> і <em>denn</em>
означають те саме — «бо»; різниця лише в порядку слів, тож беріть <em>denn</em>, коли не хочете
переставляти дієслово. А <em>deshalb</em> — це вже «тому»: після нього йде <u>наслідок</u>,
а не причина, тому речення перевертається.</div>
<p><strong>Підрядне може стояти першим.</strong> Тоді воно займає перше місце головного речення,
і одразу за комою йде дієслово головного — два дієслова опиняються поруч:</p>
<p><em><strong>Weil</strong> ich krank <strong>bin</strong>, <strong>komme</strong> ich nicht.</em></p>`,
      },
      {
        title: '3. dass — «що»',
        html: `
<p><em>dass</em> вводить те, що хтось знає, каже, думає або сподівається:</p>
<ul>
<li><em>Ich glaube, <strong>dass</strong> er recht <strong>hat</strong>.</em></li>
<li><em>Es ist gut, <strong>dass</strong> du gekommen <strong>bist</strong>.</em></li>
<li><em>Ich hoffe, <strong>dass</strong> das Wetter morgen besser <strong>wird</strong>.</em></li>
</ul>
<p><strong>Дієслова, після яких зазвичай іде dass:</strong> <em>glauben, denken, meinen, wissen, sagen,
hoffen, finden, sich freuen</em>, а також вирази <em>Es ist schön / wichtig / schade, dass …</em></p>
<div class="callout"><strong>dass чи das?</strong> <em>das</em> (одне s) — це артикль або займенник
(<em>das Buch</em>, <em>das ist gut</em>). <em>dass</em> (два s) — сполучник. Перевірка: якщо слово можна
замінити на <em>dieses</em> — пишіть <em>das</em>.</div>`,
      },
      {
        title: '4. wenn — умова й повторювана дія',
        html: `
<table>
<thead><tr><th>Значення</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td><strong>умова</strong> («якщо»)</td>
<td><em><strong>Wenn</strong> es morgen regnet, bleiben wir zu Hause.</em><span class="uk">Якщо завтра буде дощ, ми залишимося вдома.</span></td></tr>
<tr><td><strong>повторювана дія</strong> («коли, щоразу як»)</td>
<td><em><strong>Wenn</strong> ich müde bin, trinke ich Kaffee.</em><span class="uk">Коли я втомлений, я п’ю каву.</span></td></tr>
<tr><td><strong>майбутня одноразова подія</strong></td>
<td><em><strong>Wenn</strong> ich in Wien ankomme, rufe ich dich an.</em><span class="uk">Коли я приїду до Відня, я тобі зателефоную.</span></td></tr>
</tbody></table>
<div class="callout"><strong>wenn чи als?</strong> Для <u>одноразової</u> події в <u>минулому</u> вживається
<em>als</em>, а не <em>wenn</em>: <em><strong>Als</strong> ich zehn Jahre alt war, bin ich nach Wien gezogen.</em>
<span class="uk">Коли мені було десять, я переїхав до Відня.</span>
Для повторюваних дій у минулому — <em>wenn</em>: <em><strong>Wenn</strong> wir Ferien hatten, fuhren wir ans Meer.</em>
<span class="uk">Коли в нас були канікули, ми їздили на море.</span></div>`,
      },
      {
        title: '5. Слова з прикладів цієї теми',
        html: `
<p>Підрядні речення найчастіше потрібні, щоб пояснити причину відмови або переказати чужу думку —
звідси й лексика прикладів вище.</p>
<table>
<thead><tr><th>Слово</th><th>Переклад</th><th>Як ужито в темі</th></tr></thead>
<tbody>
<tr><td><em>krank sein</em></td><td>хворіти</td><td><em>…, weil ich krank bin.</em><span class="uk">…, бо я хворий.</span></td></tr>
<tr><td><em>die Prüfung, -en</em></td><td>іспит</td><td><em>…, weil ich morgen eine Prüfung habe.</em><span class="uk">…, бо завтра в мене іспит.</span></td></tr>
<tr><td><em>recht haben</em></td><td>мати рацію</td><td><em>Ich glaube, dass er recht hat.</em><span class="uk">Я вважаю, що він має рацію.</span></td></tr>
<tr><td><em>hoffen</em></td><td>сподіватися</td><td><em>Ich hoffe, dass das Wetter besser wird.</em><span class="uk">Сподіваюся, що погода покращиться.</span></td></tr>
<tr><td><em>schade</em></td><td>шкода, прикро</td><td><em>Es ist schade, dass du nicht kommst.</em><span class="uk">Шкода, що ти не прийдеш.</span></td></tr>
<tr><td><em>umziehen</em></td><td>переїжджати</td><td><em>Als ich zehn war, bin ich nach Wien gezogen.</em><span class="uk">Коли мені було десять, я переїхав до Відня.</span></td></tr>
<tr><td><em>die Ferien</em> (мн.)</td><td>канікули</td><td><em>Wenn wir Ferien hatten, fuhren wir ans Meer.</em></td></tr>
<tr><td><em>nachholen</em></td><td>надолужувати</td><td><em>…, dass wir das nachholen können.</em><span class="uk">…, що ми зможемо це надолужити.</span></td></tr>
<tr><td><em>der Schirm, -e</em></td><td>парасолька</td><td><em>Es regnet, deshalb nehme ich einen Schirm mit.</em><span class="uk">Іде дощ, тому я беру парасольку.</span></td></tr>
<tr><td><em>der Stau, -s</em></td><td>затор</td><td>часта причина запізнення в цій темі</td></tr>
</tbody></table>`,
      },
    ],
    exercises: [
      { type: 'gap', q: 'Ich komme heute nicht, weil ich krank ___.', answers: ['bin'],
        explain: 'У підрядному змінене дієслово стоїть у кінці.' },
      { type: 'gap', q: 'Er lernt Deutsch, weil er in Österreich ___. (arbeiten)', answers: ['arbeitet'] },
      { type: 'gap', q: 'Sie bleibt zu Hause, weil sie morgen früh ___ ___. (aufstehen / müssen)',
        answers: ['aufstehen', 'muss'],
        explain: 'Інфінітив перед зміненим дієсловом: …, weil sie aufstehen muss.' },
      { type: 'gap', q: 'Ich bin müde, weil ich gestern lange ___ ___. (arbeiten, Perfekt)',
        answers: ['gearbeitet', 'habe'] },
      { type: 'choice', q: 'Ich bin krank, ___ komme ich nicht.',
        options: ['weil', 'denn', 'deshalb', 'dass'], answer: 2,
        explain: 'Наслідок + дієслово на другому місці — це deshalb.' },
      { type: 'choice', q: 'Ich komme nicht, ___ ich bin krank.',
        options: ['weil', 'denn', 'deshalb', 'dass'], answer: 1,
        explain: 'Порядок слів не змінився (ich bin) → denn.' },
      { type: 'gap', q: 'Ich glaube, ___ er heute kommt.', answers: ['dass'] },
      { type: 'gap', q: 'Es ist schade, dass du nicht mitkommen ___. (können)', answers: ['kannst'] },
      { type: 'gap', q: '___ es morgen regnet, bleiben wir zu Hause.', answers: ['Wenn'] },
      { type: 'gap', q: '___ ich zehn Jahre alt war, bin ich nach Wien gezogen.', answers: ['Als'],
        explain: 'Одноразова подія в минулому → als.' },
      { type: 'order', q: 'Складіть підрядне речення.',
        words: ['Ich', 'bleibe', 'zu', 'Hause', 'weil', 'ich', 'keine', 'Zeit', 'habe'],
        answer: 'Ich bleibe zu Hause weil ich keine Zeit habe' },
      { type: 'order', q: 'Почніть із підрядного речення.',
        words: ['Weil', 'ich', 'krank', 'bin', 'komme', 'ich', 'nicht'],
        answer: 'Weil ich krank bin komme ich nicht',
        explain: 'Підрядне на першому місці → дієслово головного одразу після коми.' },
      { type: 'order', q: 'Складіть речення з dass.',
        words: ['Ich', 'hoffe', 'dass', 'das', 'Wetter', 'morgen', 'besser', 'wird'],
        answer: 'Ich hoffe dass das Wetter morgen besser wird' },
      { type: 'multi', q: 'Позначте правильні речення.',
        options: [
          'Ich komme nicht, weil ich habe keine Zeit.',
          'Ich komme nicht, weil ich keine Zeit habe.',
          'Ich habe keine Zeit, deshalb komme ich nicht.',
          'Ich habe keine Zeit, deshalb ich komme nicht.',
          'Ich komme nicht, denn ich habe keine Zeit.',
        ],
        answers: [1, 2, 4] },
      { type: 'match', q: 'Доберіть переклад.',
        pairs: [['obwohl', 'хоча'], ['trotzdem', 'попри це'], ['damit', 'щоб'], ['bevor', 'перш ніж'], ['der Grund', 'причина']] },
    ],

    listening: [
      {
        exam: 'Goethe A2 · Hören Teil 2',
        title: 'Warum kommst du nicht?',
        instruction: 'Двоє друзів скасовують зустріч. Зверніть увагу на причини.',
        lines: [
          { speaker: 'Nadia', de: 'Hallo Felix, es tut mir wirklich leid, aber ich kann heute Abend nicht kommen.', uk: 'Привіт, Феліксе, мені дуже прикро, але сьогодні ввечері я не зможу прийти.' },
          { speaker: 'Felix', de: 'Oh nein, warum denn?', uk: 'О ні, а чому?' },
          { speaker: 'Nadia', de: 'Weil ich morgen eine wichtige Prüfung habe. Ich muss noch viel lernen.', uk: 'Бо завтра в мене важливий іспит. Мені ще багато вчити.' },
          { speaker: 'Felix', de: 'Schade. Aber ich verstehe das natürlich.', uk: 'Шкода. Але я, звісно, розумію.' },
          { speaker: 'Nadia', de: 'Ich hoffe, dass wir das am Wochenende nachholen können.', uk: 'Сподіваюся, що зможемо надолужити це на вихідних.' },
          { speaker: 'Felix', de: 'Klar. Wenn du am Samstag Zeit hast, gehen wir ins Konzert.', uk: 'Звісно. Якщо матимеш час у суботу, підемо на концерт.' },
          { speaker: 'Nadia', de: 'Super! Und viel Glück wünsche ich mir selbst — die Prüfung ist schwer.', uk: 'Чудово! А удачі бажаю сама собі — іспит важкий.' },
        ],
        tasks: [
          { type: 'choice', q: 'Warum kommt Nadia nicht?',
            options: ['Sie ist krank.', 'Sie hat morgen eine Prüfung.', 'Sie muss arbeiten.', 'Sie hat keine Lust.'], answer: 1 },
          { type: 'gap', q: 'Nadia hofft, ___ sie das am Wochenende nachholen können.', answers: ['dass'] },
          { type: 'choice', q: 'Was machen sie am Samstag, wenn Nadia Zeit hat?',
            options: ['Ins Kino gehen', 'Ins Konzert gehen', 'Lernen', 'Essen gehen'], answer: 1 },
          { type: 'truefalse', q: 'Felix ärgert sich über die Absage.', answer: false,
            explain: '«Aber ich verstehe das natürlich.»' },
        ],
      },
    ],

    writing: [
      {
        exam: 'Goethe A2 · Schreiben Teil 2',
        title: 'E-Mail: einen Termin absagen',
        situation: 'Ви мали зустрітися з подругою Julia в суботу, але не можете прийти. Напишіть імейл. <strong>40–50 слів</strong>. Використайте щонайменше два підрядних речення.',
        points: ['Sagen Sie den Termin ab.', 'Erklären Sie den Grund (weil).', 'Schlagen Sie einen neuen Termin vor.', 'Entschuldigen Sie sich.'],
        minWords: 40,
        phrases: [
          { de: 'Es tut mir sehr leid, aber ich kann am Samstag nicht kommen.', uk: 'Мені дуже прикро, але в суботу я не зможу прийти.' },
          { de: 'Ich kann nicht kommen, weil ich arbeiten muss.', uk: 'Я не можу прийти, бо мушу працювати.' },
          { de: 'Ich hoffe, dass du nicht böse bist.', uk: 'Сподіваюся, ти не сердишся.' },
          { de: 'Wenn du am Sonntag Zeit hast, können wir uns dann treffen.', uk: 'Якщо в тебе є час у неділю, можемо зустрітися тоді.' },
          { de: 'Bitte entschuldige!', uk: 'Будь ласка, вибач!' },
        ],
        checklist: [
          'У кожному підрядному після weil / dass / wenn дієслово стоїть у кінці?',
          'Перед підрядним стоїть кома?',
          'Якщо речення починається з Weil…, то одразу після коми йде дієслово головного?',
          'Ви розкрили всі чотири пункти?',
          'Текст має 40–50 слів?',
        ],
        model:
`Liebe Julia,

es tut mir wirklich leid, aber ich kann am Samstag nicht kommen, weil meine Schwester zu Besuch kommt.
Ich habe es leider erst gestern erfahren. Ich hoffe, dass du nicht böse bist.
Wenn du am Sonntagnachmittag Zeit hast, können wir uns im Café am Markt treffen.
Bitte entschuldige und schreib mir kurz zurück!

Liebe Grüße
Oksana`,
        modelUk: 'Переклад: Люба Юліє, мені справді прикро, але в суботу я не зможу прийти, бо до мене приїжджає сестра. На жаль, я дізналася про це лише вчора. Сподіваюся, ти не сердишся. Якщо матимеш час у неділю по обіді, можемо зустрітися в кафе на ринку. Вибач, будь ласка, і напиши мені коротко у відповідь! Сердечні вітання, Оксана.',
      },
    ],

    test: [
      { type: 'gap', q: 'Ich gehe zum Arzt, weil ich Kopfschmerzen ___.', answers: ['habe'] },
      { type: 'gap', q: 'Er kann nicht kommen, weil er arbeiten ___.', answers: ['muss'] },
      { type: 'gap', q: 'Wir sind müde, weil wir gestern spät ___ ___. (nach Hause kommen, Perfekt)',
        answers: ['gekommen', 'sind'] },
      { type: 'choice', q: 'Es regnet, ___ nehme ich einen Schirm mit.',
        options: ['weil', 'dass', 'deshalb', 'wenn'], answer: 2 },
      { type: 'choice', q: 'Ich weiß, ___ sie in Berlin wohnt.',
        options: ['das', 'dass', 'weil', 'denn'], answer: 1 },
      { type: 'choice', q: '___ ich Zeit habe, gehe ich schwimmen.',
        options: ['Als', 'Wenn', 'Dass', 'Weil'], answer: 1 },
      { type: 'choice', q: '___ ich klein war, habe ich in Odessa gewohnt.',
        options: ['Wenn', 'Als', 'Wann', 'Dass'], answer: 1 },
      { type: 'order', q: 'Складіть речення.',
        words: ['Ich', 'freue', 'mich', 'dass', 'du', 'gekommen', 'bist'],
        answer: 'Ich freue mich dass du gekommen bist' },
      { type: 'order', q: 'Складіть речення (підрядне спереду).',
        words: ['Wenn', 'es', 'schneit', 'fahre', 'ich', 'mit', 'dem', 'Bus'],
        answer: 'Wenn es schneit fahre ich mit dem Bus' },
      { type: 'multi', q: 'Позначте правильні речення.',
        options: [
          'Ich lerne Deutsch, weil ich in Wien leben will.',
          'Ich lerne Deutsch, weil ich will in Wien leben.',
          'Ich will in Wien leben, deshalb lerne ich Deutsch.',
          'Ich lerne Deutsch, denn ich will in Wien leben.',
        ],
        answers: [0, 2, 3] },
      { type: 'match', q: 'Доберіть переклад.',
        pairs: [['weil', 'тому що'], ['deshalb', 'тому (наслідок)'], ['obwohl', 'хоча'], ['damit', 'щоб'], ['nachdem', 'після того як']] },
      { type: 'truefalse', q: 'Після «denn» дієслово йде в кінець речення.', answer: false },
    ],
  },

  /* ─────────────────────────────── МОДУЛЬ 2 ─────────────────────────────── */
  {
    id: 'm2',
    title: 'Adjektivdeklination',
    titleUk: 'Відмінювання прикметників перед іменником',
    can: [
      'відмінювати прикметник після der / die / das',
      'відмінювати прикметник після ein / kein / mein',
      'вживати прикметник без артикля',
      'докладно описувати предмети, людей і житло',
    ],

    grammar: [
      {
        title: '1. Логіка системи: сигнал роду має бути один',
        html: `
<p>Німецькій мові потрібен <strong>один</strong> чіткий сигнал роду й відмінка в групі іменника.
Якщо цей сигнал уже дає артикль, прикметник «розслабляється» й бере слабке закінчення
(<em>-e</em> або <em>-en</em>). Якщо артикля немає або він неінформативний (<em>ein</em>),
сигнал мусить нести сам прикметник.</p>
<p>Тому все відмінювання зводиться до трьох таблиць.</p>`,
      },
      {
        title: '2. Після означеного артикля (der, die, das, dieser, jeder, alle)',
        html: `
<p>Тут усе просто: у п’яти клітинках <em>-e</em>, в усіх решта <em>-en</em>.</p>
<table>
<thead><tr><th></th><th>чоловічий</th><th>жіночий</th><th>середній</th><th>множина</th></tr></thead>
<tbody>
<tr><td><strong>Nom.</strong></td><td>der neu<strong>e</strong> Tisch</td><td>die neu<strong>e</strong> Lampe</td><td>das neu<strong>e</strong> Bett</td><td>die neu<strong>en</strong> Möbel</td></tr>
<tr><td><strong>Akk.</strong></td><td>den neu<strong>en</strong> Tisch</td><td>die neu<strong>e</strong> Lampe</td><td>das neu<strong>e</strong> Bett</td><td>die neu<strong>en</strong> Möbel</td></tr>
<tr><td><strong>Dat.</strong></td><td>dem neu<strong>en</strong> Tisch</td><td>der neu<strong>en</strong> Lampe</td><td>dem neu<strong>en</strong> Bett</td><td>den neu<strong>en</strong> Möbel<strong>n</strong></td></tr>
</tbody></table>
<div class="callout callout--tip"><strong>Мнемоніка «п’ять -e».</strong> Намалюйте таблицю подумки:
<em>-e</em> стоїть у верхньому лівому куті блоком (Nom. усі три роди + Akk. жіночий і середній).
Усе інше — <em>-en</em>. Тобто в 11 із 16 клітинок буде <em>-en</em>.</div>`,
      },
      {
        title: '3. Після неозначеного артикля (ein, kein, mein, dein …)',
        html: `
<p>Проблема в тому, що <em>ein</em> не показує рід у трьох клітинках. Там прикметник переймає закінчення
означеного артикля: <em>-er</em> (чол.), <em>-es</em> (серед.).</p>
<table>
<thead><tr><th></th><th>чоловічий</th><th>жіночий</th><th>середній</th><th>множина (kein/mein)</th></tr></thead>
<tbody>
<tr><td><strong>Nom.</strong></td><td>ein neu<strong>er</strong> Tisch</td><td>eine neu<strong>e</strong> Lampe</td><td>ein neu<strong>es</strong> Bett</td><td>keine neu<strong>en</strong> Möbel</td></tr>
<tr><td><strong>Akk.</strong></td><td>einen neu<strong>en</strong> Tisch</td><td>eine neu<strong>e</strong> Lampe</td><td>ein neu<strong>es</strong> Bett</td><td>keine neu<strong>en</strong> Möbel</td></tr>
<tr><td><strong>Dat.</strong></td><td>einem neu<strong>en</strong> Tisch</td><td>einer neu<strong>en</strong> Lampe</td><td>einem neu<strong>en</strong> Bett</td><td>keinen neu<strong>en</strong> Möbel<strong>n</strong></td></tr>
</tbody></table>
<p>Різниця з попередньою таблицею — лише <strong>три клітинки</strong>:
<em>ein neu<u>er</u></em>, <em>ein neu<u>es</u></em> (Nom.) і <em>ein neu<u>es</u></em> (Akk. серед.).</p>`,
      },
      {
        title: '4. Без артикля',
        html: `
<p>Коли артикля немає взагалі (часто в множині, з речовинними іменниками, у рекламі й меню),
прикметник бере на себе всі закінчення означеного артикля:</p>
<table>
<thead><tr><th></th><th>чоловічий</th><th>жіночий</th><th>середній</th><th>множина</th></tr></thead>
<tbody>
<tr><td><strong>Nom.</strong></td><td>gut<strong>er</strong> Wein</td><td>frisch<strong>e</strong> Milch</td><td>kalt<strong>es</strong> Wasser</td><td>nett<strong>e</strong> Leute</td></tr>
<tr><td><strong>Akk.</strong></td><td>gut<strong>en</strong> Wein</td><td>frisch<strong>e</strong> Milch</td><td>kalt<strong>es</strong> Wasser</td><td>nett<strong>e</strong> Leute</td></tr>
<tr><td><strong>Dat.</strong></td><td>gut<strong>em</strong> Wein</td><td>frisch<strong>er</strong> Milch</td><td>kalt<strong>em</strong> Wasser</td><td>nett<strong>en</strong> Leute<strong>n</strong></td></tr>
</tbody></table>
<p><strong>Дрібні орфографічні особливості:</strong></p>
<ul>
<li><em>teuer → ein te<u>ur</u>es Auto</em> (випадає -e-) <span class="uk">дороге авто</span></li>
<li><em>dunkel → ein dun<u>kl</u>es Zimmer</em> <span class="uk">темна кімната</span></li>
<li><em>hoch → ein ho<u>h</u>es Haus</em> <span class="uk">високий будинок</span></li>
</ul>`,
      },
      {
        title: '5. Слова з прикладів цієї теми',
        html: `
<p>Прикметники в цій темі відпрацьовуються переважно на описі житла й речей — ось уся лексика,
що трапляється в прикладах і таблицях вище.</p>
<table>
<thead><tr><th>Слово</th><th>Переклад</th><th>Приклад із теми</th></tr></thead>
<tbody>
<tr><td><em>der Tisch, -e</em></td><td>стіл</td><td><em>der neue Tisch</em><span class="uk">новий стіл</span></td></tr>
<tr><td><em>die Lampe, -n</em></td><td>лампа</td><td><em>eine neue Lampe</em><span class="uk">нова лампа</span></td></tr>
<tr><td><em>das Bett, -en</em></td><td>ліжко</td><td><em>ein neues Bett</em><span class="uk">нове ліжко</span></td></tr>
<tr><td><em>die Möbel</em> (мн.)</td><td>меблі</td><td><em>die neuen Möbel</em><span class="uk">нові меблі</span></td></tr>
<tr><td><em>der Wein</em></td><td>вино</td><td><em>guter Wein</em><span class="uk">хороше вино</span></td></tr>
<tr><td><em>frisch</em></td><td>свіжий</td><td><em>frische Milch</em><span class="uk">свіже молоко</span></td></tr>
<tr><td><em>die Leute</em> (мн.)</td><td>люди</td><td><em>nette Leute</em><span class="uk">приємні люди</span></td></tr>
<tr><td><em>hell / dunkel</em></td><td>світлий / темний</td><td><em>eine helle Wohnung</em><span class="uk">світла квартира</span></td></tr>
<tr><td><em>gemütlich</em></td><td>затишний</td><td><em>eine kleine gemütliche Wohnung</em><span class="uk">маленька затишна квартира</span></td></tr>
<tr><td><em>günstig</em></td><td>вигідний за ціною</td><td><em>ein günstiges Hotel</em><span class="uk">недорогий готель</span></td></tr>
<tr><td><em>der Schlüssel, -</em></td><td>ключ</td><td><em>der kleine Schlüssel</em><span class="uk">маленький ключ</span></td></tr>
<tr><td><em>möbliert</em></td><td>мебльований</td><td>з оголошень про житло</td></tr>
<tr><td><em>die Kaution</em></td><td>застава</td><td>з оголошень про житло</td></tr>
</tbody></table>
<div class="callout callout--tip"><strong>Як тренувати.</strong> Беріть будь-який предмет навколо
й проговорюйте його у трьох формах: <em>der neue Tisch</em> (Nom.) → <em>Ich kaufe den neuen Tisch</em> (Akk.)
→ <em>auf dem neuen Tisch</em> (Dat.). Три повтори закріплюють таблицю краще, ніж її переписування.</div>`,
      },
    ],
    exercises: [
      { type: 'gap', q: 'Das ist der neu___ Tisch.', answers: ['e'] },
      { type: 'gap', q: 'Ich kaufe den neu___ Tisch.', answers: ['en'] },
      { type: 'gap', q: 'Ich kaufe einen neu___ Tisch.', answers: ['en'] },
      { type: 'gap', q: 'Das ist ein neu___ Tisch.', answers: ['er'],
        explain: 'ein не показує чоловічий рід, тому сигнал бере прикметник: -er.' },
      { type: 'gap', q: 'Wir haben ein groß___ Haus.', answers: ['es'] },
      { type: 'gap', q: 'Sie wohnt in einer klein___ Wohnung.', answers: ['en'] },
      { type: 'gap', q: 'Ich trinke gern kalt___ Wasser. (без артикля)', answers: ['es'] },
      { type: 'gap', q: 'Hier gibt es gut___ Wein. (без артикля, Akkusativ)', answers: ['en'] },
      { type: 'gap', q: 'Ich spreche mit den neu___ Kollegen.', answers: ['en'] },
      { type: 'choice', q: 'Ich suche ___ Wohnung.',
        options: ['eine helle', 'eine helles', 'einen hellen', 'ein helle'], answer: 0 },
      { type: 'choice', q: 'Er fährt ___ Auto.',
        options: ['ein teuer', 'ein teures', 'einen teuren', 'ein teueres'], answer: 1,
        explain: 'das Auto, Akkusativ середнього роду = Nominativ; teuer втрачає -e-: teures.' },
      { type: 'choice', q: 'Das ist ___ Zimmer.',
        options: ['ein dunkeles', 'ein dunkles', 'ein dunkler', 'eine dunkle'], answer: 1 },
      { type: 'order', q: 'Складіть речення.',
        words: ['Ich', 'habe', 'eine', 'kleine', 'gemütliche', 'Wohnung'],
        answer: 'Ich habe eine kleine gemütliche Wohnung' },
      { type: 'match', q: 'Доберіть переклад.',
        pairs: [['gemütlich', 'затишний'], ['möbliert', 'мебльований'], ['die Kaution', 'застава'], ['günstig', 'вигідний за ціною'], ['renoviert', 'відремонтований']] },
      { type: 'multi', q: 'Позначте правильні форми.',
        options: ['der alte Mann', 'ein alter Mann', 'ein altes Mann', 'die alten Männer', 'einen alten Mann', 'eine alte Frau'],
        answers: [0, 1, 3, 4, 5] },
    ],

    listening: [
      {
        exam: 'Goethe A2 · Hören Teil 3',
        title: 'Eine Wohnungsanzeige am Telefon',
        instruction: 'Жінка телефонує щодо оголошення про квартиру. Занотуйте деталі.',
        lines: [
          { speaker: 'Anruferin', de: 'Guten Tag, ich rufe wegen der Anzeige an. Ist die Wohnung noch frei?', uk: 'Добрий день, телефоную щодо оголошення. Квартира ще вільна?' },
          { speaker: 'Vermieter', de: 'Ja, sie ist ab dem ersten März frei. Es ist eine helle Zweizimmerwohnung.', uk: 'Так, вона вільна з першого березня. Це світла двокімнатна квартира.' },
          { speaker: 'Anruferin', de: 'Wie groß ist sie denn?', uk: 'А яка її площа?' },
          { speaker: 'Vermieter', de: 'Sechzig Quadratmeter, mit einem großen Balkon und einer neuen Küche.', uk: 'Шістдесят квадратних метрів, з великим балконом і новою кухнею.' },
          { speaker: 'Anruferin', de: 'Und was kostet sie?', uk: 'А скільки коштує?' },
          { speaker: 'Vermieter', de: 'Siebenhundertzwanzig Euro warm, also mit Nebenkosten.', uk: 'Сімсот двадцять євро з комунальними.' },
          { speaker: 'Anruferin', de: 'Gibt es auch einen Aufzug?', uk: 'А ліфт є?' },
          { speaker: 'Vermieter', de: 'Leider nicht, die Wohnung ist im dritten Stock. Aber das Haus ist renoviert und sehr ruhig.', uk: 'На жаль, ні, квартира на третьому поверсі. Але будинок відремонтований і дуже тихий.' },
        ],
        tasks: [
          { type: 'gap', q: 'Die Wohnung hat ___ Quadratmeter.', answers: ['60|sechzig'] },
          { type: 'gap', q: 'Sie kostet ___ Euro warm.', answers: ['720|siebenhundertzwanzig'] },
          { type: 'truefalse', q: 'Es gibt einen Aufzug im Haus.', answer: false },
          { type: 'multi', q: 'Was hat die Wohnung?',
            options: ['einen großen Balkon', 'eine neue Küche', 'einen Garten', 'einen Aufzug'], answers: [0, 1] },
          { type: 'choice', q: 'Ab wann ist die Wohnung frei?',
            options: ['Ab dem 1. Januar', 'Ab dem 1. März', 'Ab dem 3. März', 'Sofort'], answer: 1 },
        ],
      },
    ],

    writing: [
      {
        exam: 'ÖSD A2 · Schreiben',
        title: 'Anzeige beantworten: Zimmer zu vermieten',
        situation: 'Ви побачили оголошення: «Helles Zimmer in ruhiger WG, 25 m², ab April frei, 380 € warm». Напишіть орендодавцеві. <strong>50–60 слів</strong>.',
        points: ['Warum schreiben Sie?', 'Stellen Sie sich kurz vor.', 'Stellen Sie zwei Fragen zum Zimmer.', 'Schlagen Sie einen Besichtigungstermin vor.'],
        minWords: 50,
        phrases: [
          { de: 'ich habe Ihre Anzeige im Internet gelesen.', uk: 'я прочитав/ла Ваше оголошення в інтернеті.' },
          { de: 'Ich interessiere mich sehr für das helle Zimmer.', uk: 'Мене дуже цікавить світла кімната.' },
          { de: 'Ich bin 24 Jahre alt und studiere Informatik.', uk: 'Мені 24 роки, я вивчаю інформатику.' },
          { de: 'Ist das Zimmer möbliert?', uk: 'Кімната мебльована?' },
          { de: 'Wie hoch ist die Kaution?', uk: 'Яка застава?' },
          { de: 'Könnte ich das Zimmer am Samstag besichtigen?', uk: 'Чи міг би я оглянути кімнату в суботу?' },
          { de: 'Mit freundlichen Grüßen', uk: 'З повагою' },
        ],
        checklist: [
          'Прикметники перед іменниками мають правильні закінчення?',
          'Після ein / kein / mein у чоловічому й середньому Nominativ ви вжили -er / -es?',
          'Формальне звертання «Sehr geehrte Damen und Herren» або «Sehr geehrter Herr …»?',
          'Ви поставили щонайменше два запитання?',
          'Текст має 50–60 слів?',
        ],
        model:
`Sehr geehrte Damen und Herren,

ich habe Ihre Anzeige im Internet gelesen und interessiere mich sehr für das helle Zimmer in der ruhigen WG.
Ich heiße Andrij Bondar, bin vierundzwanzig Jahre alt und studiere Informatik an der Universität Wien.
Ich habe zwei Fragen: Ist das Zimmer möbliert, und wie hoch ist die Kaution?
Könnte ich das Zimmer am nächsten Samstag besichtigen?

Mit freundlichen Grüßen
Andrij Bondar`,
        modelUk: 'Переклад: Шановні пані та панове, я прочитав Ваше оголошення в інтернеті й дуже зацікавлений світлою кімнатою в тихій спільній квартирі. Мене звати Андрій Бондар, мені двадцять чотири роки, я вивчаю інформатику у Віденському університеті. У мене два запитання: чи мебльована кімната і яка застава? Чи міг би я оглянути кімнату наступної суботи? З повагою, Андрій Бондар.',
      },
    ],

    test: [
      { type: 'gap', q: 'Ich möchte den rot___ Pullover.', answers: ['en'] },
      { type: 'gap', q: 'Das ist eine sehr schön___ Wohnung.', answers: ['e'] },
      { type: 'gap', q: 'Wir suchen ein günstig___ Hotel.', answers: ['es'] },
      { type: 'gap', q: 'Er hat einen alt___ Computer.', answers: ['en'] },
      { type: 'gap', q: 'Das ist ein interessant___ Buch.', answers: ['es'] },
      { type: 'gap', q: 'Sie arbeitet in einem groß___ Büro.', answers: ['en'] },
      { type: 'gap', q: 'Ich trinke gern frisch___ Milch. (без артикля, Akkusativ)', answers: ['e'] },
      { type: 'choice', q: 'Wo ist ___ Schlüssel?',
        options: ['der klein', 'der kleine', 'der kleiner', 'ein kleine'], answer: 1 },
      { type: 'choice', q: 'Sie hat ___ Kinder.',
        options: ['zwei kleine', 'zwei kleinen', 'zwei kleines', 'zwei klein'], answer: 0 },
      { type: 'choice', q: 'Ich wohne in ___ Haus.',
        options: ['einem alten', 'einem alte', 'ein altes', 'einen alten'], answer: 0 },
      { type: 'order', q: 'Складіть речення.',
        words: ['Wir', 'haben', 'eine', 'große', 'helle', 'Küche'],
        answer: 'Wir haben eine große helle Küche' },
      { type: 'match', q: 'Доберіть переклад.',
        pairs: [['hell', 'світлий'], ['bequem', 'зручний'], ['schmutzig', 'брудний'], ['lecker', 'смачний'], ['die Lage', 'розташування']] },
      { type: 'multi', q: 'Позначте правильні словосполучення.',
        options: ['ein neues Auto', 'ein neuer Auto', 'die alte Frau', 'einen guten Wein', 'ein gutes Wein', 'kalte Milch'],
        answers: [0, 2, 3, 5] },
      { type: 'truefalse', q: 'Після означеного артикля прикметник у Dativ завжди має закінчення -en.', answer: true },
    ],
  },

  ...part2,
  ...part3,
  ],
};
