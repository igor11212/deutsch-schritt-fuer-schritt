/* A2: два базові модулі, які мали б стояти на початку рівня —
   прийменники з відмінками та дієслівні префікси. У a2.js вони вставлені
   одразу після Adjektivdeklination, до всіх тем, що на них спираються. */

const mPrep = {
  id: 'm9',
  title: 'Präpositionen: Akkusativ, Dativ und feste Wendungen',
  titleUk: 'Прийменники: який відмінок вимагає кожен і чому це не можна вгадати',
  can: [
    'знати напам’ять групу прийменників з Akkusativ і групу з Dativ',
    'правильно вживати bis — самостійно й у парі (bis zum, bis in)',
    'обирати правильну форму артикля після прийменника',
    'уживати злиті форми (im, am, zum, zur, vom, ins)',
    'відрізняти прийменники часу, місця й способу',
    'не перекладати прийменник з української дослівно',
  ],

  grammar: [
    {
      title: '1. Головне: прийменник керує відмінком',
      html: `
<p>Українською ми теж змінюємо слово після прийменника: «до <u>столу</u>», «за <u>столом</u>».
Німецька робить те саме, але змінює не іменник, а <strong>артикль перед ним</strong>.
І найважливіше: <u>який саме</u> відмінок буде — вирішує сам прийменник, а не зміст фрази.</p>
<table>
<thead><tr><th>Речення</th><th>Що змінилося</th></tr></thead>
<tbody>
<tr><td><em>Das ist <strong>der</strong> Tisch.</em><span class="uk">Це стіл. (Nominativ, звичайна форма)</span></td>
<td>вихідна форма</td></tr>
<tr><td><em>Ich gehe <strong>ohne den</strong> Tisch.</em><span class="uk">Я йду без столу.</span></td>
<td><em>ohne</em> вимагає Akkusativ → <em>der</em> стає <strong>den</strong></td></tr>
<tr><td><em>Ich sitze <strong>an dem</strong> Tisch.</em><span class="uk">Я сиджу за столом.</span></td>
<td>тут Dativ → <em>der</em> стає <strong>dem</strong></td></tr>
</tbody></table>
<div class="callout"><strong>Чому це не можна вгадати.</strong> Відмінок після прийменника —
не логіка, а властивість самого слова, як рід іменника. <em>für</em> завжди тягне Akkusativ,
<em>mit</em> завжди Dativ — і крапка. Тому прийменники вчать <u>групами</u>,
а не поодинці: групу запам’ятати легше, ніж двадцять окремих правил.</div>
<p><strong>Як виглядають артиклі в кожному відмінку</strong> — це та сама таблиця,
яку ви вже бачили, але тепер вона працює саме після прийменників:</p>
<table>
<thead><tr><th>Відмінок</th><th>чоловічий</th><th>жіночий</th><th>середній</th><th>множина</th></tr></thead>
<tbody>
<tr><td>Nominativ</td><td>der / ein</td><td>die / eine</td><td>das / ein</td><td>die / —</td></tr>
<tr><td><strong>Akkusativ</strong></td><td><strong>den / einen</strong></td><td>die / eine</td><td>das / ein</td><td>die / —</td></tr>
<tr><td><strong>Dativ</strong></td><td><strong>dem / einem</strong></td><td><strong>der / einer</strong></td><td><strong>dem / einem</strong></td><td><strong>den + -n</strong></td></tr>
</tbody></table>
<div class="callout callout--tip"><strong>Найкоротший висновок із таблиці.</strong>
В Akkusativ змінюється <u>лише чоловічий рід</u> — усе інше таке саме, як у Nominativ.
У Dativ змінюється <u>все</u>. Тому Akkusativ дається легко, а Dativ треба вчити свідомо.</div>`,
    },
    {
      title: '2. Прийменники з Akkusativ — шість слів',
      html: `
<p>Їх шість, і вони завжди з Akkusativ, без винятків. Німці запам’ятовують їх
одним рядком: <strong>bis, durch, für, gegen, ohne, um</strong>.</p>
<table>
<thead><tr><th>Прийменник</th><th>Переклад</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td><strong>bis</strong></td><td>до (межі в часі чи просторі)</td>
<td><em><strong>bis</strong> nächsten Montag</em><span class="uk">до наступного понеділка</span><br>
<em>Der Bus fährt <strong>bis</strong> Köln.</em><span class="uk">Автобус їде до Кельна.</span></td></tr>
<tr><td><strong>durch</strong></td><td>крізь, через (простір)</td>
<td><em>Wir gehen <strong>durch den</strong> Park.</em><span class="uk">Ми йдемо через парк.</span></td></tr>
<tr><td><strong>für</strong></td><td>для, за</td>
<td><em>Das ist <strong>für meinen</strong> Bruder.</em><span class="uk">Це для мого брата.</span></td></tr>
<tr><td><strong>gegen</strong></td><td>проти; близько (про час)</td>
<td><em>Ich bin <strong>gegen diesen</strong> Plan.</em><span class="uk">Я проти цього плану.</span><br>
<em><strong>gegen</strong> acht Uhr</em><span class="uk">близько восьмої</span></td></tr>
<tr><td><strong>ohne</strong></td><td>без</td>
<td><em>Ich trinke Kaffee <strong>ohne</strong> Zucker.</em><span class="uk">Я п’ю каву без цукру.</span></td></tr>
<tr><td><strong>um</strong></td><td>навколо; о (годині)</td>
<td><em><strong>um den</strong> Tisch</em><span class="uk">навколо столу</span><br>
<em><strong>um</strong> acht Uhr</em><span class="uk">о восьмій</span></td></tr>
</tbody></table>
<div class="callout callout--warn"><strong>bis майже завжди без артикля.</strong>
Саме тому його Akkusativ рідко видно: <em>bis Montag</em>, <em>bis morgen</em>,
<em>bis Berlin</em>, <em>bis acht Uhr</em> — артикля просто немає.
А коли артикль потрібен, німецька ставить <u>другий прийменник</u>, і відмінок диктує вже він:
<em>bis <strong>zum</strong> Bahnhof</em> (Dativ від <em>zu</em>), <em>bis <strong>zur</strong> Brücke</em>,
<em>bis <strong>in die</strong> Nacht</em> (Akkusativ від <em>in</em>).
Akkusativ від самого <em>bis</em> видно лише з означенням:
<em>bis <strong>nächsten</strong> Freitag</em>, <em>bis <strong>kommenden</strong> Sonntag</em>.</div>
<p><strong>Ще один прийменник із Akkusativ — <em>entlang</em></strong> («уздовж»),
але він незвичний тим, що стоїть <u>після</u> іменника:
<em>Ich gehe <strong>den Fluss entlang</strong>.</em><span class="uk">Я йду вздовж річки.</span></p>
<div class="callout"><strong>Пастка для українця.</strong> Ми кажемо «через парк» і «через дощ»
одним словом. Німецька розрізняє: <em>durch den Park</em> — це рух <u>крізь</u> простір,
а причина («через дощ») — це зовсім інше слово: <em>wegen des Regens</em>.
Ніколи не перекладайте «через» як <em>durch</em>, якщо йдеться про причину.</div>`,
    },
    {
      title: '3. Прийменники з Dativ — десять слів',
      html: `
<p>Ця група більша й трапляється частіше. Вивчіть її як список — вона окупається одразу.
Перші вісім німецькі школярі заучують як лічилку: <em>aus, außer, bei, mit, nach, seit, von, zu</em>.</p>
<table>
<thead><tr><th>Прийменник</th><th>Переклад</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td><strong>aus</strong></td><td>з (зсередини); походження</td>
<td><em>Ich komme <strong>aus der</strong> Ukraine.</em><span class="uk">Я з України.</span></td></tr>
<tr><td><strong>außer</strong></td><td>крім, окрім</td>
<td><em><strong>Außer mir</strong> war niemand da.</em><span class="uk">Крім мене, нікого не було.</span></td></tr>
<tr><td><strong>bei</strong></td><td>у, при, біля (у когось)</td>
<td><em>Ich wohne <strong>bei meiner</strong> Tante.</em><span class="uk">Я живу в тітки.</span></td></tr>
<tr><td><strong>mit</strong></td><td>з (разом); чим (засіб)</td>
<td><em>Ich fahre <strong>mit dem</strong> Bus.</em><span class="uk">Я їду автобусом.</span></td></tr>
<tr><td><strong>nach</strong></td><td>після; до (міста, країни без артикля)</td>
<td><em><strong>nach der</strong> Arbeit</em><span class="uk">після роботи</span><br>
<em><strong>nach</strong> Berlin</em><span class="uk">до Берліна</span></td></tr>
<tr><td><strong>seit</strong></td><td>відколи (і досі триває)</td>
<td><em>Ich lerne Deutsch <strong>seit einem</strong> Jahr.</em><span class="uk">Я вчу німецьку вже рік.</span></td></tr>
<tr><td><strong>von</strong></td><td>від, з; кого (належність)</td>
<td><em>Das ist ein Brief <strong>von meinem</strong> Chef.</em><span class="uk">Це лист від мого шефа.</span></td></tr>
<tr><td><strong>zu</strong></td><td>до (людини, установи)</td>
<td><em>Ich gehe <strong>zum</strong> Arzt.</em><span class="uk">Я йду до лікаря.</span></td></tr>
<tr><td><strong>gegenüber</strong></td><td>навпроти</td>
<td><em><strong>gegenüber dem</strong> Bahnhof</em><span class="uk">навпроти вокзалу</span></td></tr>
<tr><td><strong>ab</strong></td><td>починаючи з (часу)</td>
<td><em><strong>ab dem</strong> ersten Mai</em><span class="uk">з першого травня</span></td></tr>
</tbody></table>
<div class="callout callout--tip"><strong>Три пари, які плутають найчастіше.</strong>
<ul>
<li><em>aus</em> проти <em>von</em>: <em>aus</em> — зсередини (<em>aus dem Haus</em>, <em>aus der Ukraine</em>),
<em>von</em> — від поверхні або від людини (<em>vom Tisch</em>, <em>von meinem Freund</em>).</li>
<li><em>nach</em> проти <em>zu</em>: до <u>міста чи країни без артикля</u> — <em>nach</em> (<em>nach Wien</em>),
до <u>людини чи установи</u> — <em>zu</em> (<em>zum Arzt</em>, <em>zur Post</em>).</li>
<li><em>seit</em> проти <em>vor</em>: <em>seit zwei Jahren</em> — «уже два роки й далі триває»,
<em>vor zwei Jahren</em> — «два роки тому, і це закінчилося».</li>
</ul></div>`,
    },
    {
      title: '4. Злиті форми: im, am, zum, zur — звідки вони',
      html: `
<p>У живій мові прийменник часто зростається з артиклем. Це не окремі слова —
це та сама пара, просто вимовлена одним подихом.</p>
<table>
<thead><tr><th>Прийменник + артикль</th><th>Злита форма</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td><em>in + dem</em></td><td><strong>im</strong></td><td><em>im Park, im Mai</em><span class="uk">у парку, у травні</span></td></tr>
<tr><td><em>in + das</em></td><td><strong>ins</strong></td><td><em>ins Kino</em><span class="uk">у кіно (рух)</span></td></tr>
<tr><td><em>an + dem</em></td><td><strong>am</strong></td><td><em>am Montag, am Fenster</em><span class="uk">у понеділок, біля вікна</span></td></tr>
<tr><td><em>an + das</em></td><td><strong>ans</strong></td><td><em>ans Meer</em><span class="uk">на море (рух)</span></td></tr>
<tr><td><em>zu + dem</em></td><td><strong>zum</strong></td><td><em>zum Arzt, zum Bahnhof</em><span class="uk">до лікаря, до вокзалу</span></td></tr>
<tr><td><em>zu + der</em></td><td><strong>zur</strong></td><td><em>zur Schule, zur Arbeit</em><span class="uk">до школи, на роботу</span></td></tr>
<tr><td><em>von + dem</em></td><td><strong>vom</strong></td><td><em>vom Bahnhof</em><span class="uk">від вокзалу</span></td></tr>
<tr><td><em>bei + dem</em></td><td><strong>beim</strong></td><td><em>beim Arzt</em><span class="uk">у лікаря</span></td></tr>
</tbody></table>
<div class="callout"><strong>Коли злиття обов’язкове, а коли ні.</strong>
У сталих зворотах — обов’язкове: кажуть <em>zum Arzt</em>, а не «<s>zu dem Arzt</s>».
Розділяють лише тоді, коли артикль треба <u>наголосити</u>:
<em>Ich gehe zu <u>dem</u> Arzt, den du empfohlen hast</em> — «саме до <u>того</u> лікаря».
У 95 % випадків беріть злиту форму.</div>`,
    },
    {
      title: '5. Прийменники часу: an, in, um, von … bis',
      html: `
<p>Час — найчастіша тема, де прийменник обирають неправильно.
Правило просте, якщо думати про <strong>розмір відрізка</strong>.</p>
<table>
<thead><tr><th>Що називаємо</th><th>Прийменник</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td>година</td><td><strong>um</strong></td><td><em>um 8 Uhr</em><span class="uk">о восьмій</span></td></tr>
<tr><td>день, частина дня</td><td><strong>am</strong></td><td><em>am Montag, am Abend</em><span class="uk">у понеділок, увечері</span></td></tr>
<tr><td>місяць, пора року, рік у слові</td><td><strong>im</strong></td><td><em>im Mai, im Sommer</em><span class="uk">у травні, влітку</span></td></tr>
<tr><td>тривалість «за скільки»</td><td><strong>in</strong> + Dativ</td><td><em>in zwei Wochen</em><span class="uk">через два тижні</span></td></tr>
<tr><td>від і до</td><td><strong>von … bis</strong></td><td><em>von 9 bis 17 Uhr</em><span class="uk">з 9 до 17</span></td></tr>
<tr><td>відколи й досі</td><td><strong>seit</strong></td><td><em>seit drei Monaten</em><span class="uk">уже три місяці</span></td></tr>
<tr><td>скільки часу тому</td><td><strong>vor</strong></td><td><em>vor einer Stunde</em><span class="uk">годину тому</span></td></tr>
</tbody></table>
<div class="callout callout--tip"><strong>Два винятки, які треба знати напам’ять.</strong>
<em>in der Nacht</em> — «уночі» (а не «am»), і <em>am Wochenende</em> — «на вихідних».
А ще: <em>«у 2020 році»</em> німецькою або просто <em>2020</em>, або <em>im Jahr 2020</em> —
але ніколи «<s>in 2020</s>», хоч так і кажуть в англійській.</div>`,
    },
    {
      title: '6. Слова з прикладів цієї теми',
      html: `
<table>
<thead><tr><th>Слово</th><th>Переклад</th><th>Як ужито в темі</th></tr></thead>
<tbody>
<tr><td><em>durch den Park gehen</em></td><td>іти через парк</td><td>Приклад <em>durch</em> + Akkusativ.</td></tr>
<tr><td><em>der Zucker</em></td><td>цукор</td><td><em>Kaffee ohne Zucker</em></td></tr>
<tr><td><em>die Tante, -n</em></td><td>тітка</td><td><em>Ich wohne bei meiner Tante.</em></td></tr>
<tr><td><em>der Chef, -s</em></td><td>шеф, керівник</td><td><em>ein Brief von meinem Chef</em></td></tr>
<tr><td><em>gegenüber + Dat.</em></td><td>навпроти</td><td><em>gegenüber dem Bahnhof</em></td></tr>
<tr><td><em>empfehlen</em></td><td>рекомендувати</td><td><em>… den du empfohlen hast</em></td></tr>
<tr><td><em>das Meer, -e</em></td><td>море</td><td><em>ans Meer fahren</em></td></tr>
<tr><td><em>die Arbeit</em></td><td>робота</td><td><em>nach der Arbeit</em>, <em>zur Arbeit</em></td></tr>
<tr><td><em>der Monat, -e</em></td><td>місяць</td><td><em>seit drei Monaten</em></td></tr>
<tr><td><em>die Stunde, -n</em></td><td>година (тривалість)</td><td><em>vor einer Stunde</em></td></tr>
</tbody></table>`,
    },
  ],

  exercises: [
    { type: 'gap', q: 'Ich gehe ___ den Park. (крізь)', answers: ['durch'] },
    { type: 'gap', q: 'Ich bleibe hier ___ Montag. (до понеділка, без артикля)', answers: ['bis'] },
    { type: 'gap', q: 'Wir fahren ___ zum Bahnhof. (аж до вокзалу)', answers: ['bis'],
      explain: 'Перед артиклем bis бере другий прийменник: bis zum Bahnhof.' },
    { type: 'gap', q: '___ mir war niemand im Büro. (крім)', answers: ['Außer'] },
    { type: 'gap', q: 'Das Geschenk ist ___ meine Mutter. (для)', answers: ['für'] },
    { type: 'gap', q: 'Ich trinke Tee ___ Zucker. (без)', answers: ['ohne'] },
    { type: 'gap', q: 'Ich fahre ___ dem Zug. (яким чином)', answers: ['mit'] },
    { type: 'gap', q: 'Ich komme ___ der Ukraine. (походження)', answers: ['aus'] },
    { type: 'gap', q: 'Ich wohne ___ meinem Bruder. (у когось)', answers: ['bei'] },
    { type: 'gap', q: 'Wir fahren ___ Wien. (до міста)', answers: ['nach'] },
    { type: 'gap', q: 'Ich gehe ___ Arzt. (до лікаря, злита форма)', answers: ['zum'] },
    { type: 'gap', q: 'Der Kurs beginnt ___ 18 Uhr. (о годині)', answers: ['um'] },
    { type: 'gap', q: 'Wir treffen uns ___ Montag. (у день, злита форма)', answers: ['am'] },
    { type: 'gap', q: 'Sie hat ___ Mai Geburtstag. (у місяці, злита форма)', answers: ['im'] },
    { type: 'gap', q: 'Артикль після прийменника: Ich gehe ohne ___ Hund. (der Hund → Akkusativ)',
      answers: ['den'] },
    { type: 'gap', q: 'Артикль після прийменника: Ich spiele mit ___ Kind. (das Kind → Dativ)',
      answers: ['dem'] },
    { type: 'choice', q: 'Який відмінок після <span class="de-inline">für</span>?',
      options: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'], answer: 1 },
    { type: 'choice', q: 'Який відмінок після <span class="de-inline">seit</span>?',
      options: ['Akkusativ', 'Dativ', 'Nominativ', 'залежить від змісту'], answer: 1 },
    { type: 'choice', q: '«Я з України» — який прийменник?',
      options: ['von der Ukraine', 'aus der Ukraine', 'zu der Ukraine', 'bei der Ukraine'], answer: 1 },
    { type: 'choice', q: '«Два роки тому»:',
      options: ['seit zwei Jahren', 'vor zwei Jahren', 'in zwei Jahren', 'ab zwei Jahren'], answer: 1 },
    { type: 'choice', q: '«Уночі» німецькою:',
      options: ['am Nacht', 'in der Nacht', 'im Nacht', 'um der Nacht'], answer: 1 },
    { type: 'order', q: 'Складіть речення.',
      words: ['Ich', 'fahre', 'mit', 'dem', 'Bus', 'zur', 'Arbeit'],
      answer: 'Ich fahre mit dem Bus zur Arbeit' },
    { type: 'match', q: 'Доберіть злиту форму.',
      pairs: [['in + dem', 'im'], ['in + das', 'ins'], ['an + dem', 'am'],
        ['zu + dem', 'zum'], ['zu + der', 'zur'], ['von + dem', 'vom']] },
    { type: 'multi', q: 'Позначте прийменники, які завжди вимагають Akkusativ.',
      options: ['durch', 'mit', 'für', 'aus', 'ohne', 'bis'],
      answers: [0, 2, 4, 5] },
    { type: 'choice', q: 'Як сказати «до вокзалу» (аж до самого вокзалу)?',
      options: ['bis dem Bahnhof', 'bis zum Bahnhof', 'bis den Bahnhof', 'bis der Bahnhof'],
      answer: 1,
      explain: 'Коли після bis потрібен артикль, додається другий прийменник — найчастіше zu: bis zum Bahnhof.' },
    { type: 'choice', q: 'Який відмінок вимагає <span class="de-inline">außer</span>?',
      options: ['Akkusativ', 'Dativ', 'Genitiv', 'Nominativ'], answer: 1 },
    { type: 'truefalse', q: 'Відмінок після прийменника залежить від змісту речення.',
      answer: false,
      explain: 'Він закріплений за самим прийменником: für завжди Akkusativ, mit завжди Dativ.' },
  ],

  listening: [
    {
      exam: 'Goethe A2 · Hören Teil 1',
      title: 'Wegbeschreibung am Telefon',
      instruction: 'Оля пояснює, як дійти. Слухайте саме прийменники.',
      lines: [
        { speaker: 'Olja', de: 'Du gehst vom Bahnhof geradeaus, durch den kleinen Park.', uk: 'Ти йдеш від вокзалу прямо, через невеликий парк.' },
        { speaker: 'Max', de: 'Und dann?', uk: 'А потім?' },
        { speaker: 'Olja', de: 'Nach dem Park kommt eine Ampel. Dort gehst du nach rechts.', uk: 'Після парку буде світлофор. Там повертаєш праворуч.' },
        { speaker: 'Max', de: 'Ist das weit?', uk: 'Це далеко?' },
        { speaker: 'Olja', de: 'Nein, in fünf Minuten bist du da. Mein Haus ist gegenüber der Apotheke.', uk: 'Ні, за п’ять хвилин будеш там. Мій дім навпроти аптеки.' },
        { speaker: 'Max', de: 'Und wann soll ich kommen?', uk: 'А коли мені прийти?' },
        { speaker: 'Olja', de: 'Um sieben. Aber komm bitte ohne Blumen, ich habe schon zu viele!', uk: 'О сьомій. Але приходь, будь ласка, без квітів, у мене їх уже забагато!' },
      ],
      tasks: [
        { type: 'choice', q: 'Wo beginnt der Weg?',
          options: ['Am Park', 'Am Bahnhof', 'Bei der Apotheke', 'An der Ampel'], answer: 1 },
        { type: 'gap', q: 'Max soll ___ sieben kommen. (прийменник)', answers: ['um'] },
        { type: 'gap', q: 'Das Haus ist ___ der Apotheke. (навпроти)', answers: ['gegenüber'] },
        { type: 'truefalse', q: 'Max soll Blumen mitbringen.', answer: false },
        { type: 'multi', q: 'Welche Präpositionen kommen vor?',
          options: ['vom', 'durch', 'nach', 'gegenüber', 'ohne', 'zwischen'],
          answers: [0, 1, 2, 3, 4] },
      ],
    },
  ],

  writing: [
    {
      exam: 'Goethe A2 · Schreiben Teil 1',
      title: 'E-Mail: Wie kommst du zu mir?',
      situation: 'Ваш друг Stefan уперше їде до вас у гості. Напишіть імейл із поясненням дороги: <strong>50–70 слів</strong>. Уживіть щонайменше шість різних прийменників.',
      points: [
        'Sagen Sie, wann er kommen soll.',
        'Erklären Sie den Weg vom Bahnhof.',
        'Sagen Sie, womit er fahren kann.',
        'Schreiben Sie, was er nicht mitbringen muss.',
      ],
      minWords: 50,
      phrases: [
        { de: 'Komm bitte um sieben Uhr.', uk: 'Приходь, будь ласка, о сьомій.' },
        { de: 'Vom Bahnhof fährst du mit dem Bus Nummer 12.', uk: 'Від вокзалу їдеш автобусом номер 12.' },
        { de: 'Nach drei Stationen steigst du aus.', uk: 'Через три зупинки виходиш.' },
        { de: 'Mein Haus ist gegenüber der Apotheke.', uk: 'Мій дім навпроти аптеки.' },
        { de: 'In zehn Minuten bist du da.', uk: 'За десять хвилин будеш на місці.' },
        { de: 'Komm ohne Geschenk, das ist nicht nötig.', uk: 'Приходь без подарунка, це не потрібно.' },
      ],
      checklist: [
        'Є щонайменше шість різних прийменників?',
        'Після mit, von, nach, bei стоїть Dativ (dem / der)?',
        'Після für, ohne, durch, um стоїть Akkusativ (den)?',
        'Ужито злиті форми (zum, zur, im, am)?',
        'Обсяг 50–70 слів, звертання й прощання на місці?',
      ],
      model:
`Hallo Stefan,

ich freue mich sehr auf Samstag! Komm bitte um sieben Uhr zu mir.

Vom Bahnhof fährst du mit dem Bus Nummer 12 bis zur Haltestelle «Marktplatz».
Nach drei Stationen steigst du aus und gehst durch den kleinen Park.
Mein Haus ist gegenüber der Apotheke, im dritten Stock.

Ohne Geschenk ist mir am liebsten — bring einfach gute Laune mit!

Bis Samstag
Iryna`,
      modelUk: 'Переклад: Привіт, Штефане! Я дуже тішуся суботі! Приходь, будь ласка, о сьомій до мене. Від вокзалу їдеш автобусом номер 12 до зупинки «Ринкова площа». Через три зупинки виходиш і йдеш через невеликий парк. Мій дім навпроти аптеки, на третьому поверсі. Найкраще без подарунка — просто бери з собою добрий настрій! До суботи, Ірина.',
    },
  ],

  test: [
    { type: 'gap', q: 'Das ist ein Geschenk ___ dich. (для)', answers: ['für'] },
    { type: 'gap', q: 'Wir laufen ___ die Stadt. (крізь)', answers: ['durch'] },
    { type: 'gap', q: 'Ich arbeite ___ einer großen Firma. (у, при)', answers: ['bei'] },
    { type: 'gap', q: 'Sie kommt ___ dem Büro. (зсередини)', answers: ['aus'] },
    { type: 'gap', q: 'Wir fliegen ___ Spanien. (до країни без артикля)', answers: ['nach'] },
    { type: 'gap', q: 'Ich warte ___ acht Uhr auf dich. (о годині)', answers: ['um'] },
    { type: 'gap', q: 'Der Unterricht ist ___ Vormittag. (злита форма)', answers: ['am'] },
    { type: 'gap', q: 'Ich lerne Deutsch ___ zwei Jahren. (відколи й досі)', answers: ['seit'] },
    { type: 'gap', q: 'Артикль: Ich gehe durch ___ Wald. (der Wald)', answers: ['den'] },
    { type: 'gap', q: 'Артикль: Wir sprechen mit ___ Lehrerin. (die Lehrerin)', answers: ['der'] },
    { type: 'choice', q: 'Що правильно?',
      options: ['zu dem Arzt', 'zum Arzt', 'zur Arzt', 'zu der Arzt'], answer: 1 },
    { type: 'choice', q: '«Через два тижні» (у майбутньому):',
      options: ['vor zwei Wochen', 'seit zwei Wochen', 'in zwei Wochen', 'ab zwei Wochen'], answer: 2 },
    { type: 'order', q: 'Складіть речення.',
      words: ['Nach', 'der', 'Arbeit', 'gehe', 'ich', 'zum', 'Sport'],
      answer: 'Nach der Arbeit gehe ich zum Sport' },
    { type: 'match', q: 'Доберіть переклад.',
      pairs: [['aus', 'з (зсередини)'], ['bei', 'у когось'], ['gegen', 'проти'],
        ['ohne', 'без'], ['seit', 'відколи'], ['gegenüber', 'навпроти']] },
    { type: 'multi', q: 'Позначте прийменники з Dativ.',
      options: ['mit', 'für', 'aus', 'durch', 'seit'],
      answers: [0, 2, 4] },
    { type: 'truefalse', q: 'В Akkusativ змінюється лише артикль чоловічого роду.', answer: true },
  ],
};

const mPraefix = {
  id: 'm10',
  title: 'Trennbare und untrennbare Verben',
  titleUk: 'Дієслівні префікси: які відриваються, які ні і як це чути',
  can: [
    'відрізняти відокремлюваний префікс від невідокремлюваного',
    'ставити відірваний префікс у правильне місце речення',
    'будувати Perfekt і конструкції з zu для обох типів',
    'розпізнавати тип префікса на слух — за наголосом',
    'розуміти, як префікс змінює значення дієслова',
  ],

  grammar: [
    {
      title: '1. Що взагалі відбувається: дієслово розривається навпіл',
      html: `
<p>Німецьке дієслово може мати префікс — так само, як українське: «писати» → «<u>за</u>писати»,
«<u>під</u>писати», «<u>пере</u>писати». Різниця в тому, що німецький префікс буває
<strong>рухомим</strong>: у простому реченні він відривається й летить у кінець.</p>
<table>
<thead><tr><th>Форма</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td>інфінітив (як у словнику)</td><td><em><strong>an</strong>rufen</em><span class="uk">телефонувати</span></td></tr>
<tr><td>у реченні — префікс у кінці</td><td><em>Ich <strong>rufe</strong> dich morgen <strong>an</strong>.</em>
<span class="uk">Я подзвоню тобі завтра.</span></td></tr>
<tr><td>довше речення — префікс усе одно в кінці</td><td><em>Ich <strong>rufe</strong> dich morgen nach der Arbeit <strong>an</strong>.</em>
<span class="uk">Я подзвоню тобі завтра після роботи.</span></td></tr>
</tbody></table>
<div class="callout"><strong>Чому це так важливо.</strong> Поки ви не почуєте останнє слово,
ви не знаєте, що саме сказали. <em>Ich rufe dich morgen …</em> може стати <em>… an</em> (подзвоню)
або <em>… zurück</em> (передзвоню). Саме тому німці слухають речення до кінця —
і саме тому втрачений префікс змінює зміст, а не просто «звучить неправильно».</div>
<p><strong>Це не хаос, а система.</strong> Усі префікси діляться на три групи, і група
визначає поведінку раз і назавжди. Далі — саме ці три групи.</p>`,
    },
    {
      title: '2. Група 1: відокремлювані (trennbar) — наголос на префіксі',
      html: `
<p>Ці префікси <strong>завжди</strong> відриваються. Вони мають власне значення
й тому перетягують на себе наголос: <em><u>AN</u>rufen</em>, <em><u>AUF</u>stehen</em>.</p>
<table>
<thead><tr><th>Префікс</th><th>Що додає</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td><strong>an-</strong></td><td>початок контакту, «при-»</td>
<td><em>anrufen</em> — телефонувати, <em>ankommen</em> — прибувати</td></tr>
<tr><td><strong>auf-</strong></td><td>угору, відкрити</td>
<td><em>aufstehen</em> — вставати, <em>aufmachen</em> — відчиняти</td></tr>
<tr><td><strong>aus-</strong></td><td>назовні, вимкнути</td>
<td><em>ausgehen</em> — виходити в люди, <em>ausmachen</em> — вимикати</td></tr>
<tr><td><strong>ein-</strong></td><td>усередину</td>
<td><em>einkaufen</em> — робити покупки, <em>einsteigen</em> — заходити в транспорт</td></tr>
<tr><td><strong>mit-</strong></td><td>разом</td>
<td><em>mitkommen</em> — іти разом, <em>mitbringen</em> — приносити з собою</td></tr>
<tr><td><strong>ab-</strong></td><td>геть, від</td>
<td><em>abfahren</em> — відʼїжджати, <em>abholen</em> — забирати когось</td></tr>
<tr><td><strong>zu-</strong></td><td>закрити; до</td>
<td><em>zumachen</em> — зачиняти, <em>zuhören</em> — слухати уважно</td></tr>
<tr><td><strong>vor-</strong></td><td>наперед</td>
<td><em>vorstellen</em> — представляти, <em>vorbereiten</em> — готувати заздалегідь</td></tr>
<tr><td><strong>zurück-</strong></td><td>назад</td>
<td><em>zurückkommen</em> — повертатися, <em>zurückrufen</em> — передзвонювати</td></tr>
<tr><td><strong>weg-</strong></td><td>геть</td>
<td><em>weggehen</em> — іти геть, <em>wegwerfen</em> — викидати</td></tr>
</tbody></table>
<div class="callout callout--tip"><strong>Найпростіша перевірка — вимова.</strong>
Скажіть слово вголос. Якщо наголос падає на <u>перший склад</u> (<em><u>EIN</u>kaufen</em>) —
префікс відокремлюваний. Це працює майже без винятків, і саме так їх розрізняють німці:
не за списком, а на слух.</div>`,
    },
    {
      title: '3. Група 2: невідокремлювані (untrennbar) — наголос на корені',
      html: `
<p>Ці сім префіксів <strong>ніколи</strong> не відриваються. Вони не мають самостійного
значення й не несуть наголосу: <em>be<u>SU</u>chen</em>, <em>ver<u>STE</u>hen</em>.</p>
<table>
<thead><tr><th>Префікс</th><th>Приклади</th></tr></thead>
<tbody>
<tr><td><strong>be-</strong></td><td><em>besuchen</em> — відвідувати, <em>bezahlen</em> — платити, <em>bekommen</em> — отримувати</td></tr>
<tr><td><strong>ge-</strong></td><td><em>gehören</em> — належати, <em>gefallen</em> — подобатися</td></tr>
<tr><td><strong>er-</strong></td><td><em>erklären</em> — пояснювати, <em>erzählen</em> — розповідати</td></tr>
<tr><td><strong>ver-</strong></td><td><em>verstehen</em> — розуміти, <em>vergessen</em> — забувати, <em>verkaufen</em> — продавати</td></tr>
<tr><td><strong>zer-</strong></td><td><em>zerstören</em> — руйнувати, <em>zerbrechen</em> — розбивати</td></tr>
<tr><td><strong>ent-</strong></td><td><em>entschuldigen</em> — вибачати, <em>entscheiden</em> — вирішувати</td></tr>
<tr><td><strong>emp-</strong></td><td><em>empfehlen</em> — рекомендувати, <em>empfangen</em> — приймати</td></tr>
</tbody></table>
<p>Порівняйте одну пару — і побачите обидві системи одразу:</p>
<table>
<thead><tr><th></th><th>trennbar: <em><u>ein</u>kaufen</em></th><th>untrennbar: <em>ver<u>kau</u>fen</em></th></tr></thead>
<tbody>
<tr><td>Präsens</td><td><em>Ich <strong>kaufe</strong> im Supermarkt <strong>ein</strong>.</em>
<span class="uk">Я роблю покупки в супермаркеті.</span></td>
<td><em>Ich <strong>verkaufe</strong> mein Auto.</em><span class="uk">Я продаю свою машину.</span></td></tr>
<tr><td>Perfekt</td><td><em>Ich habe <strong>ein<u>ge</u>kauft</strong>.</em>
<span class="uk">-ge- усередині!</span></td>
<td><em>Ich habe <strong>verkauft</strong>.</em><span class="uk">жодного -ge-</span></td></tr>
<tr><td>з <em>zu</em></td><td><em>… um <strong>ein<u>zu</u>kaufen</strong>.</em>
<span class="uk">-zu- усередині</span></td>
<td><em>… um zu <strong>verkaufen</strong>.</em><span class="uk">zu перед словом</span></td></tr>
</tbody></table>
<div class="callout"><strong>Ось де ховається головне правило Perfekt.</strong>
Ви вже помітили, що деякі дієприкметники не мають <em>ge-</em>? Це не виняток —
це просто невідокремлюваний префікс. <em>bezahlt</em>, <em>verstanden</em>, <em>erklärt</em>
без <em>ge-</em> саме тому, що <em>be-</em>, <em>ver-</em>, <em>er-</em> вже займають цю позицію.</div>`,
    },
    {
      title: '4. Група 3: двоїсті — той самий префікс, дві поведінки',
      html: `
<p>Шість префіксів поводяться по-різному <u>залежно від значення</u>:
<em>durch-, über-, um-, unter-, wider-, wieder-</em>. Правило зрозуміле, якщо тримати
в голові одну думку.</p>
<div class="callout callout--tip"><strong>Ключ до всієї групи.</strong>
Значення <u>пряме, фізичне</u> — префікс <strong>відривається</strong> й має наголос.
Значення <u>переносне, абстрактне</u> — префікс <strong>зростається</strong> з дієсловом.</div>
<table>
<thead><tr><th>Дієслово</th><th>Відокремлюване (пряме)</th><th>Невідокремлюване (переносне)</th></tr></thead>
<tbody>
<tr><td><em>umfahren</em></td>
<td><em><u>UM</u>fahren</em>: <em>Er fährt den Baum <strong>um</strong>.</em>
<span class="uk">Він збиває дерево (наїжджає).</span></td>
<td><em>um<u>FAH</u>ren</em>: <em>Er umfährt den Baum.</em>
<span class="uk">Він об’їжджає дерево.</span></td></tr>
<tr><td><em>übersetzen</em></td>
<td><em><u>Ü</u>bersetzen</em>: <em>Der Fährmann setzt uns <strong>über</strong>.</em>
<span class="uk">Поромник перевозить нас на той бік.</span></td>
<td><em>über<u>SET</u>zen</em>: <em>Sie übersetzt den Text.</em>
<span class="uk">Вона перекладає текст.</span></td></tr>
<tr><td><em>durchschauen</em></td>
<td><em><u>DURCH</u>schauen</em>: <em>Ich schaue die Papiere <strong>durch</strong>.</em>
<span class="uk">Я переглядаю папери.</span></td>
<td><em>durch<u>SCHAU</u>en</em>: <em>Ich durchschaue ihn.</em>
<span class="uk">Я бачу його наскрізь.</span></td></tr>
<tr><td><em>wiederholen</em></td>
<td><em><u>WIE</u>derholen</em>: <em>Ich hole das Buch <strong>wieder</strong>.</em>
<span class="uk">Я знову приношу книжку.</span></td>
<td><em>wieder<u>HO</u>len</em>: <em>Ich wiederhole die Vokabeln.</em>
<span class="uk">Я повторюю слова.</span></td></tr>
</tbody></table>
<div class="callout"><strong>Не лякайтеся цієї групи.</strong> На A2 вам потрібні лише
<em>wiederholen</em> (повторювати — невідокремлюване) і <em>übersetzen</em> (перекладати —
невідокремлюване). Решту пар ви впізнаватимете на слух, коли доростете до B2.
Головне зараз — знати, що така група існує, і не дивуватися.</div>`,
    },
    {
      title: '5. Куди йде префікс у різних реченнях',
      html: `
<p>Це та частина, де роблять помилки навіть ті, хто знає правило.
Запам’ятайте чотири випадки — вони покривають усе.</p>
<table>
<thead><tr><th>Тип речення</th><th>Що з префіксом</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td><strong>1. Просте речення</strong></td><td>відривається, іде в кінець</td>
<td><em>Ich <strong>stehe</strong> um sechs <strong>auf</strong>.</em><span class="uk">Я встаю о шостій.</span></td></tr>
<tr><td><strong>2. З модальним дієсловом</strong></td><td>НЕ відривається — дієслово стоїть цілим у кінці</td>
<td><em>Ich muss um sechs <strong>aufstehen</strong>.</em><span class="uk">Я мушу вставати о шостій.</span></td></tr>
<tr><td><strong>3. Підрядне речення</strong></td><td>НЕ відривається — усе разом у кінці</td>
<td><em>…, weil ich um sechs <strong>aufstehe</strong>.</em><span class="uk">…, бо я встаю о шостій.</span></td></tr>
<tr><td><strong>4. Наказ</strong></td><td>відривається, іде в кінець</td>
<td><em><strong>Steh</strong> bitte <strong>auf</strong>!</em><span class="uk">Вставай, будь ласка!</span></td></tr>
</tbody></table>
<div class="callout callout--tip"><strong>Одне правило замість чотирьох.</strong>
Префікс відривається лише тоді, коли <u>змінене дієслово стоїть на другому місці</u>.
Щойно дієслово саме йде в кінець — з модальним чи в підрядному — воно забирає префікс
із собою, бо там вони вже поруч.</div>
<p><strong>А тепер Perfekt і zu</strong> — два місця, де префікс не відривається,
а <u>розсувається</u>, впускаючи всередину частку:</p>
<ul>
<li>Perfekt: <em>auf<strong>ge</strong>standen</em>, <em>an<strong>ge</strong>rufen</em>, <em>ein<strong>ge</strong>kauft</em></li>
<li>з zu: <em>auf<strong>zu</strong>stehen</em>, <em>an<strong>zu</strong>rufen</em>, <em>ein<strong>zu</strong>kaufen</em></li>
</ul>
<p>Пишуть це <u>одним словом</u>: не «<s>auf zu stehen</s>», а <em>aufzustehen</em>.</p>`,
    },
    {
      title: '6. Слова з прикладів цієї теми',
      html: `
<table>
<thead><tr><th>Слово</th><th>Переклад</th><th>Як ужито в темі</th></tr></thead>
<tbody>
<tr><td><em>anrufen (rief an, angerufen)</em></td><td>телефонувати</td><td><em>Ich rufe dich morgen an.</em></td></tr>
<tr><td><em>abholen</em></td><td>забирати когось</td><td>Приклад префікса <em>ab-</em>.</td></tr>
<tr><td><em>einsteigen</em></td><td>заходити в транспорт</td><td>Приклад префікса <em>ein-</em>.</td></tr>
<tr><td><em>zuhören + Dat.</em></td><td>слухати уважно</td><td>Приклад префікса <em>zu-</em>.</td></tr>
<tr><td><em>vorbereiten</em></td><td>готувати заздалегідь</td><td>Приклад префікса <em>vor-</em>.</td></tr>
<tr><td><em>wegwerfen</em></td><td>викидати</td><td>Приклад префікса <em>weg-</em>.</td></tr>
<tr><td><em>gehören + Dat.</em></td><td>належати</td><td>Невідокремлюване <em>ge-</em>.</td></tr>
<tr><td><em>entscheiden</em></td><td>вирішувати</td><td>Невідокремлюване <em>ent-</em>.</td></tr>
<tr><td><em>der Fährmann</em></td><td>поромник</td><td><em>Der Fährmann setzt uns über.</em></td></tr>
<tr><td><em>die Vokabeln (Pl.)</em></td><td>слова, лексика</td><td><em>Ich wiederhole die Vokabeln.</em></td></tr>
</tbody></table>`,
    },
  ],

  exercises: [
    { type: 'gap', q: 'Ich ___ dich heute Abend ___. (anrufen — просте речення)',
      answers: ['rufe', 'an'] },
    { type: 'gap', q: 'Wir ___ um sieben ___. (aufstehen — просте речення)',
      answers: ['stehen', 'auf'] },
    { type: 'gap', q: 'Ich muss früh ___. (aufstehen — після модального)', answers: ['aufstehen'] },
    { type: 'gap', q: '…, weil ich früh ___. (aufstehen — підрядне)', answers: ['aufstehe'] },
    { type: 'gap', q: 'Perfekt: Ich habe dich ___. (anrufen)', answers: ['angerufen'] },
    { type: 'gap', q: 'Perfekt: Ich habe das Auto ___. (verkaufen)', answers: ['verkauft'] },
    { type: 'gap', q: 'З zu: Ich habe vergessen, dich ___. (anrufen)', answers: ['anzurufen'] },
    { type: 'gap', q: 'З zu: Es ist wichtig, den Text ___ ___. (verstehen)', answers: ['zu', 'verstehen'] },
    { type: 'choice', q: 'Де падає наголос у відокремлюваному дієслові?',
      options: ['на корені', 'на префіксі', 'на закінченні', 'наголосу немає'], answer: 1 },
    { type: 'choice', q: 'Чому <span class="de-inline">bezahlt</span> не має <span class="de-inline">ge-</span>?',
      options: ['це виняток', 'бо префікс be- невідокремлюваний і вже займає цю позицію',
        'бо дієслово неправильне', 'бо це не Partizip II'], answer: 1 },
    { type: 'choice', q: 'Яке речення правильне?',
      options: ['Ich muss dich anrufen.', 'Ich muss dich an rufen.',
        'Ich muss dich rufe an.', 'Ich muss an dich rufen.'], answer: 0 },
    { type: 'choice', q: '<span class="de-inline">wiederholen</span> у значенні «повторювати»:',
      options: ['відокремлюване', 'невідокремлюване', 'обидва варіанти', 'залежить від часу'],
      answer: 1 },
    { type: 'order', q: 'Складіть речення.',
      words: ['Ich', 'kaufe', 'am', 'Samstag', 'im', 'Supermarkt', 'ein'],
      answer: 'Ich kaufe am Samstag im Supermarkt ein' },
    { type: 'order', q: 'Складіть речення з модальним дієсловом.',
      words: ['Du', 'musst', 'den', 'Text', 'noch', 'einmal', 'durchlesen'],
      answer: 'Du musst den Text noch einmal durchlesen' },
    { type: 'match', q: 'Доберіть переклад.',
      pairs: [['anrufen', 'телефонувати'], ['abholen', 'забирати когось'],
        ['einsteigen', 'заходити в транспорт'], ['mitbringen', 'приносити з собою'],
        ['zumachen', 'зачиняти'], ['zurückkommen', 'повертатися']] },
    { type: 'multi', q: 'Позначте невідокремлювані префікси.',
      options: ['be-', 'an-', 'ver-', 'auf-', 'ent-'],
      answers: [0, 2, 4] },
    { type: 'truefalse', q: 'У підрядному реченні відокремлюваний префікс теж відривається.',
      answer: false,
      explain: 'Там дієслово стоїть у кінці цілим: …, weil ich früh aufstehe.' },
  ],

  listening: [
    {
      exam: 'Goethe A2 · Hören Teil 2',
      title: 'Morgens bei Familie Weber',
      instruction: 'Ранок у родині. Слухайте, як префікси відриваються й летять у кінець.',
      lines: [
        { speaker: 'Mutter', de: 'Steh bitte auf, es ist schon halb sieben!', uk: 'Вставай, будь ласка, уже пів на сьому!' },
        { speaker: 'Jonas', de: 'Ich stehe ja schon auf. Wann fährt der Bus ab?', uk: 'Та я вже встаю. Коли відʼїжджає автобус?' },
        { speaker: 'Mutter', de: 'Um zehn nach sieben. Vergiss nicht, dein Heft mitzunehmen.', uk: 'О сьомій десять. Не забудь узяти зошит.' },
        { speaker: 'Jonas', de: 'Und holst du mich nach der Schule ab?', uk: 'А ти забереш мене після школи?' },
        { speaker: 'Mutter', de: 'Nein, heute nicht. Ich muss länger arbeiten und komme erst um sechs zurück.', uk: 'Ні, сьогодні ні. Я мушу працювати довше й повернуся аж о шостій.' },
        { speaker: 'Jonas', de: 'Dann rufe ich Papa an.', uk: 'Тоді я подзвоню татові.' },
        { speaker: 'Mutter', de: 'Gute Idee. Und mach bitte das Fenster zu, bevor du gehst.', uk: 'Гарна ідея. І зачини, будь ласка, вікно, перш ніж підеш.' },
      ],
      tasks: [
        { type: 'choice', q: 'Wann fährt der Bus ab?',
          options: ['Um halb sieben', 'Um zehn nach sieben', 'Um sechs', 'Um sieben'], answer: 1 },
        { type: 'choice', q: 'Warum holt die Mutter ihn nicht ab?',
          options: ['Sie ist krank', 'Sie muss länger arbeiten', 'Sie hat kein Auto', 'Er will das nicht'], answer: 1 },
        { type: 'gap', q: 'Jonas soll das Fenster ___. (zumachen — наказ, друга частина)',
          answers: ['zu'] },
        { type: 'truefalse', q: 'Jonas ruft seinen Vater an.', answer: true },
        { type: 'multi', q: 'Welche trennbaren Verben kommen vor?',
          options: ['aufstehen', 'abfahren', 'mitnehmen', 'abholen', 'zurückkommen', 'anrufen', 'zumachen'],
          answers: [0, 1, 2, 3, 4, 5, 6] },
      ],
    },
  ],

  writing: [
    {
      exam: 'Goethe A2 · Schreiben Teil 1',
      title: 'E-Mail: Wie sieht dein Morgen aus?',
      situation: 'Ваша подруга Lena питає, як минає ваш звичайний ранок. Напишіть їй: <strong>50–70 слів</strong>. Уживіть щонайменше п’ять дієслів із відокремлюваним префіксом.',
      points: [
        'Sagen Sie, wann Sie aufstehen.',
        'Beschreiben Sie zwei bis drei Handlungen am Morgen.',
        'Sagen Sie, womit Sie zur Arbeit fahren.',
        'Fragen Sie Lena nach ihrem Morgen.',
      ],
      minWords: 50,
      phrases: [
        { de: 'Ich stehe um Viertel nach sechs auf.', uk: 'Я встаю о чверть на сьому.' },
        { de: 'Zuerst mache ich das Fenster auf.', uk: 'Спершу я відчиняю вікно.' },
        { de: 'Dann bereite ich das Frühstück vor.', uk: 'Потім я готую сніданок.' },
        { de: 'Um sieben fahre ich mit dem Rad los.', uk: 'О сьомій я вирушаю велосипедом.' },
        { de: 'Abends rufe ich meine Mutter an.', uk: 'Увечері я телефоную мамі.' },
        { de: 'Und wie sieht dein Morgen aus?', uk: 'А як виглядає твій ранок?' },
      ],
      checklist: [
        'Є щонайменше п’ять дієслів із відокремлюваним префіксом?',
        'У простих реченнях префікс стоїть у самому кінці?',
        'Після модального дієслова префікс НЕ відірваний?',
        'Ви поставили питання Лені?',
        'Обсяг 50–70 слів, звертання й прощання на місці?',
      ],
      model:
`Hallo Lena,

du hast gefragt, wie mein Morgen aussieht. Ganz einfach!

Ich stehe um Viertel nach sechs auf und mache zuerst das Fenster auf.
Dann bereite ich das Frühstück vor und höre dabei Radio.
Um sieben fahre ich mit dem Rad los; im Winter muss ich früher losfahren.
Meine Tochter hole ich am Nachmittag vom Kindergarten ab.

Und wie sieht dein Morgen aus? Schreib mir!

Liebe Grüße
Iryna`,
      modelUk: 'Переклад: Привіт, Лено! Ти питала, як виглядає мій ранок. Дуже просто! Я встаю о чверть на сьому і спершу відчиняю вікно. Потім готую сніданок і слухаю при цьому радіо. О сьомій вирушаю велосипедом; узимку мушу виїжджати раніше. Доньку забираю по обіді з дитсадка. А як виглядає твій ранок? Напиши мені! З теплом, Ірина.',
    },
  ],

  test: [
    { type: 'gap', q: 'Ich ___ das Fenster ___. (aufmachen)', answers: ['mache', 'auf'] },
    { type: 'gap', q: 'Der Zug ___ um acht ___. (abfahren)', answers: ['fährt', 'ab'] },
    { type: 'gap', q: 'Kannst du mich ___? (abholen — після модального)', answers: ['abholen'] },
    { type: 'gap', q: '…, dass er immer spät ___. (aufstehen — підрядне)', answers: ['aufsteht'] },
    { type: 'gap', q: 'Perfekt: Wir haben früh ___. (aufstehen)', answers: ['aufgestanden'] },
    { type: 'gap', q: 'Perfekt: Er hat mir alles ___. (erklären)', answers: ['erklärt'] },
    { type: 'gap', q: 'З zu: Vergiss nicht, das Licht ___. (ausmachen)', answers: ['auszumachen'] },
    { type: 'choice', q: 'Яке дієслово має наголос на корені?',
      options: ['einkaufen', 'verkaufen', 'aufstehen', 'mitkommen'], answer: 1 },
    { type: 'choice', q: 'Правильний Partizip II від <span class="de-inline">einkaufen</span>:',
      options: ['geeinkauft', 'eingekauft', 'einkauft', 'gekauft ein'], answer: 1 },
    { type: 'choice', q: 'Правильна форма з zu від <span class="de-inline">mitkommen</span>:',
      options: ['zu mitkommen', 'mit zu kommen', 'mitzukommen', 'mitkommen zu'], answer: 2 },
    { type: 'order', q: 'Складіть речення.',
      words: ['Wir', 'holen', 'dich', 'um', 'acht', 'Uhr', 'ab'],
      answer: 'Wir holen dich um acht Uhr ab' },
    { type: 'match', q: 'Доберіть Partizip II.',
      pairs: [['anrufen', 'angerufen'], ['einkaufen', 'eingekauft'], ['verstehen', 'verstanden'],
        ['bezahlen', 'bezahlt'], ['aufstehen', 'aufgestanden'], ['erzählen', 'erzählt']] },
    { type: 'multi', q: 'Позначке речення, де префікс відривається.',
      options: ['Ich rufe dich an.', 'Ich will dich anrufen.', 'Steh auf!',
        '…, weil ich aufstehe.', 'Der Bus fährt ab.'],
      answers: [0, 2, 4] },
    { type: 'truefalse', q: 'Наголос на першому складі — ознака відокремлюваного префікса.',
      answer: true },
    { type: 'truefalse', q: 'Форму з zu пишуть трьома словами: <span class="de-inline">auf zu stehen</span>.',
      answer: false,
      explain: 'Одним словом: aufzustehen.' },
  ],
};

export const modules = [mPrep, mPraefix];
