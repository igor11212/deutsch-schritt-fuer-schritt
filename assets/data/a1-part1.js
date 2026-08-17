/* A1 — модулі 1–5 */

export const modules = [

/* ══════════════════════════════════ МОДУЛЬ 1 ══════════════════════════════ */
{
  id: 'm1',
  title: 'Begrüßung und Vorstellung',
  titleUk: 'Привітання, знайомство, звідки ви',
  can: [
    'привітатися і попрощатися формально й неформально',
    'назвати своє ім’я, країну, місто й мову',
    'поставити запитання Wie? Woher? Wo? і відповісти на них',
    'відмінювати дієслово sein і правильні дієслова в теперішньому часі',
    'читати німецькі слова вголос без помилок',
  ],

  grammar: [
    {
      title: '1. Вимова: що читається не так, як пишеться',
      html: `
<p>Німецьке письмо дуже послідовне: якщо ви вивчите два десятки правил, ви зможете прочитати вголос
будь-яке слово, навіть незнайоме. Наголос майже завжди падає на <strong>перший склад</strong>:
<em>Ápfel, Léhrerin, Déutschland</em>.</p>
<table>
<thead><tr><th>Написання</th><th>Читається</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td>ei</td><td>ай</td><td><em>mein, heißen, eins</em> — «майн, хайсен, айнс»</td></tr>
<tr><td>ie</td><td>довге «і»</td><td><em>Sie, wie, vier</em> — «зі, ві, фір»</td></tr>
<tr><td>eu, äu</td><td>ой</td><td><em>Deutsch, neun, Häuser</em></td></tr>
<tr><td>ch після a, o, u, au</td><td>тверде «х»</td><td><em>Buch, auch, machen</em></td></tr>
<tr><td>ch в інших випадках</td><td>м’яке «хь»</td><td><em>ich, nicht, München</em></td></tr>
<tr><td>sch</td><td>ш</td><td><em>Schule, schön</em></td></tr>
<tr><td>sp-, st- на початку слова</td><td>шп-, шт-</td><td><em>sprechen, Stadt, Straße</em></td></tr>
<tr><td>z, tz</td><td>ц</td><td><em>zehn, Zeit, jetzt</em></td></tr>
<tr><td>v</td><td>ф</td><td><em>Vater, vier, von</em></td></tr>
<tr><td>w</td><td>в</td><td><em>wo, wir, Wasser</em></td></tr>
<tr><td>s перед голосною</td><td>з</td><td><em>sie, Sonne, sagen</em></td></tr>
<tr><td>ß</td><td>завжди глухе «с»</td><td><em>heißen, Straße, groß</em></td></tr>
<tr><td>j</td><td>й</td><td><em>ja, Jahr, jetzt</em></td></tr>
<tr><td>h після голосної</td><td>не читається, подовжує голосну</td><td><em>gehen, Ihr, Uhr</em></td></tr>
<tr><td>-er у кінці</td><td>коротке «а»</td><td><em>Vater, Lehrer</em> — «фата, лера»</td></tr>
</tbody></table>
<p><strong>Умлаути.</strong> <em>ä</em> — це просто «е» (<em>Mädchen</em>). Для <em>ö</em> скажіть «е» й витягніть
губи трубочкою (<em>schön</em>). Для <em>ü</em> скажіть «і» й витягніть губи (<em>für, Tür</em>).</p>
<div class="callout"><strong>Увага:</strong> усі іменники в німецькій пишуться з великої літери — і в середині
речення теж: <em>Ich lerne Deutsch in der Schule.</em></div>`,
    },
    {
      title: '2. Особові займенники та дієслово sein (бути)',
      html: `
<p>Дієслово <em>sein</em> — найважливіше в мові й водночас найнеправильніше. Його треба знати напам’ять.</p>
<table>
<thead><tr><th>Займенник</th><th>Українською</th><th>sein</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td>ich</td><td>я</td><td><strong>bin</strong></td><td><em>Ich bin Anna.</em><span class="uk">Я Анна.</span></td></tr>
<tr><td>du</td><td>ти</td><td><strong>bist</strong></td><td><em>Du bist nett.</em><span class="uk">Ти милий.</span></td></tr>
<tr><td>er / sie / es</td><td>він / вона / воно</td><td><strong>ist</strong></td><td><em>Er ist Student.</em><span class="uk">Він студент.</span></td></tr>
<tr><td>wir</td><td>ми</td><td><strong>sind</strong></td><td><em>Wir sind aus der Ukraine.</em><span class="uk">Ми з України.</span></td></tr>
<tr><td>ihr</td><td>ви (кілька «ти»)</td><td><strong>seid</strong></td><td><em>Ihr seid müde.</em><span class="uk">Ви втомлені.</span></td></tr>
<tr><td>sie</td><td>вони</td><td><strong>sind</strong></td><td><em>Sie sind hier.</em><span class="uk">Вони тут.</span></td></tr>
<tr><td>Sie</td><td>Ви (ввічливо)</td><td><strong>sind</strong></td><td><em>Sind Sie Herr Weber?</em><span class="uk">Ви пан Вебер?</span></td></tr>
</tbody></table>
<div class="callout callout--tip"><strong>Три «sie».</strong> <em>sie</em> = вона (<em>sie ist</em>),
<em>sie</em> = вони (<em>sie sind</em>), <em>Sie</em> = ввічливе «Ви» — <strong>завжди з великої літери</strong>
й у будь-якому місці речення. Розрізняйте їх за формою дієслова.</div>
<p>На відміну від української, дієслово-зв’язку не можна пропускати. Українською ми кажемо «Я — студент»,
німецькою обов’язково: <em>Ich <strong>bin</strong> Student.</em></p>`,
    },
    {
      title: '3. Правильні дієслова в Präsens',
      html: `
<p>Німецьке дієслово в словнику закінчується на <em>-en</em>: <em>komm<strong>en</strong></em> (приходити,
походити), <em>wohn<strong>en</strong></em> (мешкати), <em>lern<strong>en</strong></em> (вчити).
Відкидаємо <em>-en</em> — залишається основа, до якої додаємо закінчення.</p>
<table>
<thead><tr><th></th><th>Закінчення</th><th>komm-en</th><th>wohn-en</th><th>heiß-en</th></tr></thead>
<tbody>
<tr><td>ich</td><td>-e</td><td>komme</td><td>wohne</td><td>heiße</td></tr>
<tr><td>du</td><td>-st</td><td>kommst</td><td>wohnst</td><td>heiß<strong>t</strong></td></tr>
<tr><td>er/sie/es</td><td>-t</td><td>kommt</td><td>wohnt</td><td>heißt</td></tr>
<tr><td>wir</td><td>-en</td><td>kommen</td><td>wohnen</td><td>heißen</td></tr>
<tr><td>ihr</td><td>-t</td><td>kommt</td><td>wohnt</td><td>heißt</td></tr>
<tr><td>sie/Sie</td><td>-en</td><td>kommen</td><td>wohnen</td><td>heißen</td></tr>
</tbody></table>
<p><strong>Дві дрібні особливості.</strong></p>
<ul>
<li>Якщо основа закінчується на <em>-s, -ß, -z, -tz</em>, то у формі <em>du</em> залишається саме <em>-t</em>:
<em>du heißt</em>, <em>du tanzt</em> (а не «heißst»).</li>
<li>Якщо основа закінчується на <em>-t, -d, -n</em> після приголосної, вставляємо <em>-e-</em> для зручності вимови:
<em>du arbeit<strong>e</strong>st</em>, <em>er find<strong>e</strong>t</em>.</li>
</ul>
<div class="callout"><strong>Одна форма — два переклади.</strong> Німецька не розрізняє «я мешкаю» і «я мешкаю зараз»:
<em>Ich wohne in Kyjiw</em> означає і те, і те. Тому Präsens вживають також для майбутнього:
<em>Morgen komme ich.</em> — «Завтра я прийду».</div>`,
    },
    {
      title: '4. Порядок слів і питальні слова',
      html: `
<p>Головне правило німецького речення: <strong>дієслово стоїть на другому місці</strong>. «Місце» — це не слово,
а член речення: на першому місці може бути група з кількох слів.</p>
<table>
<thead><tr><th>1 місце</th><th>2 місце — дієслово</th><th>решта</th></tr></thead>
<tbody>
<tr><td><em>Ich</em></td><td><em>komme</em></td><td><em>aus der Ukraine.</em></td></tr>
<tr><td><em>Aus der Ukraine</em></td><td><em>komme</em></td><td><em>ich.</em></td></tr>
<tr><td><em>Jetzt</em></td><td><em>wohne</em></td><td><em>ich in Wien.</em></td></tr>
</tbody></table>
<p><strong>Питання зі словом W-Frage:</strong> питальне слово → дієслово → підмет.</p>
<table>
<thead><tr><th>Слово</th><th>Значення</th><th>Приклад</th><th>Відповідь</th></tr></thead>
<tbody>
<tr><td>Wie</td><td>як</td><td><em>Wie heißen Sie?</em></td><td><em>Ich heiße Olha.</em></td></tr>
<tr><td>Wer</td><td>хто</td><td><em>Wer ist das?</em></td><td><em>Das ist Frau Weber.</em></td></tr>
<tr><td>Wo</td><td>де</td><td><em>Wo wohnst du?</em></td><td><em>In Berlin.</em></td></tr>
<tr><td>Woher</td><td>звідки</td><td><em>Woher kommen Sie?</em></td><td><em>Aus Österreich.</em></td></tr>
<tr><td>Wohin</td><td>куди</td><td><em>Wohin gehst du?</em></td><td><em>Nach Hause.</em></td></tr>
<tr><td>Was</td><td>що</td><td><em>Was ist das?</em></td><td><em>Das ist ein Buch.</em></td></tr>
<tr><td>Wie alt</td><td>скільки років</td><td><em>Wie alt bist du?</em></td><td><em>Ich bin 25.</em></td></tr>
</tbody></table>
<p><strong>Питання без питального слова (Ja/Nein-Frage):</strong> дієслово виходить на перше місце —
<em>Kommst du aus Kyjiw?</em> — <em>Ja.</em> / <em>Nein.</em></p>
<div class="callout callout--tip"><strong>Ти чи Ви?</strong> <em>du</em> — з друзями, родиною, дітьми, серед студентів
і колег-однолітків. <em>Sie</em> — з незнайомими, старшими, в установах, з клієнтами. Помилитися й сказати
<em>du</em> незнайомій людині — неввічливо, тож у сумніві обирайте <em>Sie</em>.</div>`,
    },
  ],
  exercises: [
    { type: 'choice', q: 'Wie ___ du?', options: ['heiße', 'heißt', 'heißen', 'heißst'], answer: 1,
      explain: 'Основа heiß- закінчується на -ß, тому у формі du додаємо тільки -t: du heißt.' },
    { type: 'choice', q: 'Woher ___ Sie?', options: ['kommt', 'kommst', 'kommen', 'komme'], answer: 2,
      explain: 'Ввічливе Sie завжди вимагає форму на -en, як у sie (вони).' },
    { type: 'gap', q: 'Ich ___ Olha und ich ___ aus der Ukraine.', answers: ['heiße', 'komme'],
      explain: 'Для ich усі правильні дієслова мають закінчення -e.' },
    { type: 'gap', q: 'Das ___ Herr Weber. Er ___ in Berlin.', answers: ['ist', 'wohnt'],
      explain: 'er/sie/es → ist (sein) і -t у правильних дієслів.' },
    { type: 'gap', q: 'Wir ___ Studenten. Wir ___ Deutsch.', answers: ['sind', 'lernen'],
      explain: 'wir → sind, wir → -en.' },
    { type: 'gap', q: '___ ihr aus Polen? — Nein, wir ___ aus der Türkei.', answers: ['Seid', 'kommen'],
      explain: 'ihr seid — форму легко забути, вивчіть її окремо.' },
    { type: 'match', q: 'Доберіть переклад до кожного привітання.',
      pairs: [
        ['Guten Morgen!', 'Доброго ранку!'],
        ['Gute Nacht!', 'На добраніч!'],
        ['Auf Wiedersehen!', 'До побачення!'],
        ['Bis bald!', 'До скорого!'],
        ['Freut mich!', 'Дуже приємно!'],
      ] },
    { type: 'order', q: 'Складіть речення.', words: ['Ich', 'wohne', 'jetzt', 'in', 'Wien'],
      answer: 'Ich wohne jetzt in Wien|Jetzt wohne ich in Wien',
      explain: 'Дієслово — на другому місці. Можна почати і з Jetzt: Jetzt wohne ich in Wien.' },
    { type: 'order', q: 'Складіть запитання.', words: ['Woher', 'kommen', 'Sie', '?'],
      answer: 'Woher kommen Sie ?|Woher kommen Sie?',
      explain: 'У W-питанні: питальне слово → дієслово → підмет.' },
    { type: 'choice', q: 'Яке речення записано правильно?',
      options: ['Ich lerne deutsch in berlin.', 'Ich lerne Deutsch in Berlin.', 'ich Lerne Deutsch in Berlin.', 'Ich Lerne deutsch in Berlin.'],
      answer: 1, explain: 'Іменники та назви — з великої літери, дієслово — з малої.' },
    { type: 'multi', q: 'Позначте всі формальні (ввічливі) звертання.',
      options: ['Hallo!', 'Guten Tag!', 'Tschüss!', 'Auf Wiedersehen!', 'Servus!', 'Wie geht es Ihnen?'],
      answers: [1, 3, 5],
      explain: 'Hallo, Tschüss, Servus — неформальні. Формальні: Guten Tag, Auf Wiedersehen, Wie geht es Ihnen?' },
    { type: 'truefalse', q: 'У реченні «Sind Sie Frau Meier?» слово Sie означає «вони».', answer: false,
      explain: 'Sie з великої літери в середині речення — це ввічливе «Ви».' },
    { type: 'choice', q: 'Як прочитати слово <span class="de-inline">Deutschland</span>?',
      options: ['«Дойчланд»', '«Деутшланд»', '«Дьойчланд»', '«Дейчланд»'], answer: 0,
      audio: 'Deutschland',
      explain: 'eu = «ой», sch = «ш», ch тут частина sch. Натисніть 🔊, щоб порівняти.' },
    { type: 'choice', q: 'У якому слові <span class="de-inline">ch</span> звучить твердо, як «х»?',
      options: ['ich', 'nicht', 'Buch', 'München'], answer: 2,
      audio: 'ich, nicht, Buch, München',
      explain: 'Тверде «х» — тільки після a, o, u, au: Buch, auch, machen.' },
  ],

  listening: [
    {
      exam: 'Goethe A1 · Hören Teil 1',
      title: 'Im Deutschkurs',
      instruction: 'Прослухайте діалог двічі, потім виконайте завдання. Транскрипт відкривайте лише після відповідей.',
      lines: [
        { speaker: 'Anna', de: 'Hallo! Ich bin Anna. Und wie heißt du?', uk: 'Привіт! Я Анна. А як тебе звати?' },
        { speaker: 'Petro', de: 'Ich heiße Petro. Freut mich!', uk: 'Мене звати Петро. Дуже приємно!' },
        { speaker: 'Anna', de: 'Woher kommst du, Petro?', uk: 'Звідки ти, Петре?' },
        { speaker: 'Petro', de: 'Ich komme aus der Ukraine, aus Lwiw. Und du?', uk: 'Я з України, зі Львова. А ти?' },
        { speaker: 'Anna', de: 'Ich komme aus Polen, aber ich wohne jetzt in Wien.', uk: 'Я з Польщі, але зараз мешкаю у Відні.' },
        { speaker: 'Petro', de: 'Wie alt bist du?', uk: 'Скільки тобі років?' },
        { speaker: 'Anna', de: 'Ich bin neunzehn. Und ich lerne hier Deutsch und Englisch.', uk: 'Мені дев’ятнадцять. І я вивчаю тут німецьку та англійську.' },
      ],
      tasks: [
        { type: 'choice', q: 'Woher kommt Petro?', options: ['Aus Polen', 'Aus der Ukraine', 'Aus Österreich', 'Aus Deutschland'], answer: 1 },
        { type: 'choice', q: 'Wo wohnt Anna jetzt?', options: ['In Lwiw', 'In Warschau', 'In Wien', 'In Berlin'], answer: 2,
          explain: 'Anna: «Ich komme aus Polen, aber ich wohne jetzt in Wien.»' },
        { type: 'truefalse', q: 'Anna ist 19 Jahre alt.', answer: true },
        { type: 'gap', q: 'Anna lernt Deutsch und ___.', answers: ['Englisch'] },
      ],
    },
    {
      exam: 'ÖSD A1 · Hören',
      title: 'Anmeldung in der Sprachschule',
      instruction: 'Жінка записується на мовний курс. Занотуйте дані, як у формулярі.',
      lines: [
        { speaker: 'Sekretärin', de: 'Guten Tag! Wie ist Ihr Name, bitte?', uk: 'Добрий день! Як Вас звати?' },
        { speaker: 'Frau', de: 'Guten Tag. Mein Name ist Maria Kowal.', uk: 'Добрий день. Мене звати Марія Коваль.' },
        { speaker: 'Sekretärin', de: 'Und woher kommen Sie?', uk: 'А звідки Ви?' },
        { speaker: 'Frau', de: 'Ich komme aus der Ukraine, aber ich wohne in Salzburg.', uk: 'Я з України, але мешкаю в Зальцбурзі.' },
        { speaker: 'Sekretärin', de: 'Wie ist Ihre Telefonnummer?', uk: 'Який Ваш номер телефону?' },
        { speaker: 'Frau', de: 'Null sechs sechs zwei — drei vier acht.', uk: 'Нуль шість шість два — три чотири вісім.' },
        { speaker: 'Sekretärin', de: 'Danke schön. Der Kurs ist am Montag.', uk: 'Дуже дякую. Курс у понеділок.' },
      ],
      tasks: [
        { type: 'gap', q: 'Familienname: ___', answers: ['Kowal'] },
        { type: 'gap', q: 'Sie wohnt in ___.', answers: ['Salzburg'] },
        { type: 'choice', q: 'Wie ist die Telefonnummer?', options: ['0662 — 348', '0626 — 384', '0662 — 843', '0266 — 348'], answer: 0,
          explain: 'null sechs sechs zwei — drei vier acht.' },
      ],
    },
  ],

  writing: [
    {
      exam: 'Goethe A1 · Schreiben Teil 2',
      title: 'Коротке представлення для мовного курсу',
      situation: 'Ви щойно прийшли на курс німецької. Викладачка попросила кожного написати кілька речень про себе для дошки оголошень. Напишіть <strong>30–40 слів</strong>.',
      points: ['Name und Alter', 'Land und Stadt', 'Sprachen', 'Warum lernen Sie Deutsch?'],
      minWords: 30,
      phrases: [
        { de: 'Hallo! Ich heiße …', uk: 'Привіт! Мене звати …' },
        { de: 'Ich bin … Jahre alt.', uk: 'Мені … років.' },
        { de: 'Ich komme aus … und wohne in …', uk: 'Я з … і мешкаю в …' },
        { de: 'Ich spreche Ukrainisch, Englisch und ein bisschen Deutsch.', uk: 'Я говорю українською, англійською і трохи німецькою.' },
        { de: 'Ich lerne Deutsch, denn ich möchte hier arbeiten.', uk: 'Я вивчаю німецьку, бо хочу тут працювати.' },
        { de: 'Freut mich! Bis bald!', uk: 'Дуже приємно! До скорого!' },
      ],
      checklist: [
        'Усі іменники написані з великої літери?',
        'Дієслово стоїть на другому місці в кожному твердженні?',
        'Для ich усі дієслова закінчуються на -e (окрім bin)?',
        'Ви розкрили всі чотири пункти?',
        'У тексті щонайменше 30 слів?',
      ],
      model:
`Hallo! Ich heiße Olha Melnyk und ich bin 27 Jahre alt.
Ich komme aus der Ukraine, aus Charkiw, aber jetzt wohne ich in Wien.
Ich spreche Ukrainisch, Russisch und Englisch. Deutsch lerne ich erst seit zwei Wochen.
Ich lerne Deutsch, denn ich möchte hier als Krankenschwester arbeiten.
Freut mich! Bis bald!`,
      modelUk: 'Переклад: Привіт! Мене звати Ольга Мельник, мені 27 років. Я з України, з Харкова, але зараз мешкаю у Відні. Я говорю українською, російською та англійською. Німецьку вивчаю лише два тижні. Я вивчаю німецьку, бо хочу працювати тут медсестрою. Дуже приємно! До скорого!',
    },
  ],

  test: [
    { type: 'choice', q: 'Ich ___ Anna Schmidt.', options: ['bin', 'bist', 'ist', 'sind'], answer: 0 },
    { type: 'choice', q: '___ ihr aus Deutschland?', options: ['Sind', 'Seid', 'Bist', 'Ist'], answer: 1 },
    { type: 'choice', q: 'Wo ___ du?', options: ['wohne', 'wohnt', 'wohnst', 'wohnen'], answer: 2 },
    { type: 'choice', q: '___ heißt du? — Ich heiße Max.', options: ['Wo', 'Wer', 'Wie', 'Woher'], answer: 2 },
    { type: 'choice', q: '___ kommst du? — Aus Kyjiw.', options: ['Wo', 'Woher', 'Wohin', 'Was'], answer: 1 },
    { type: 'gap', q: 'Herr Weber ___ Lehrer. Er ___ in Hamburg.', answers: ['ist', 'wohnt'] },
    { type: 'gap', q: 'Wir ___ aus der Ukraine und ___ Deutsch.', answers: ['kommen', 'lernen'] },
    { type: 'order', q: 'Складіть речення.', words: ['Morgen', 'lerne', 'ich', 'Deutsch'],
      answer: 'Morgen lerne ich Deutsch' },
    { type: 'order', q: 'Складіть запитання.', words: ['Wie', 'alt', 'bist', 'du', '?'],
      answer: 'Wie alt bist du ?|Wie alt bist du?' },
    { type: 'match', q: 'Доберіть відповідь до запитання.',
      pairs: [
        ['Wie heißen Sie?', 'Ich heiße Kowal.'],
        ['Woher kommen Sie?', 'Aus der Ukraine.'],
        ['Wo wohnen Sie?', 'In Wien.'],
        ['Wie alt sind Sie?', 'Ich bin 30.'],
      ] },
    { type: 'choice', q: 'У якому слові <span class="de-inline">ei</span> читається «ай»?',
      options: ['vier', 'sieben', 'heißen', 'Liebe'], answer: 2, audio: 'vier, sieben, heißen, Liebe' },
    { type: 'choice', q: 'Скільки це: <span class="de-inline">sechzehn</span>?',
      options: ['6', '13', '16', '60'], answer: 2, audio: 'sechzehn' },
    { type: 'truefalse', q: 'У німецькій мові дієслово-зв’язку можна пропустити: «Ich Student.»', answer: false,
      explain: 'Правильно тільки: Ich bin Student.' },
    { type: 'choice', q: 'Яке привітання доречне о 20:00 у розмові з директором?',
      options: ['Hallo!', 'Guten Morgen!', 'Guten Abend!', 'Gute Nacht!'], answer: 2,
      explain: 'Gute Nacht кажуть лише перед сном, не при зустрічі.' },
  ],
},

/* ══════════════════════════════════ МОДУЛЬ 2 ══════════════════════════════ */
{
  id: 'm2',
  title: 'Beruf und Alltag',
  titleUk: 'Професія, робота, щоденні дії',
  can: [
    'розповісти про свою професію та місце роботи',
    'вживати дієслово haben і правильно ставити Ja/Nein-питання',
    'відмінювати дієслова зі зміною кореневої голосної (fahren, sprechen, lesen)',
    'називати числа до 100 і вік',
    'коротко описувати свій день',
  ],

  grammar: [
    {
      title: '1. Дієслово haben (мати)',
      html: `
<p>Друге найважливіше дієслово. Воно теж неправильне, але лише у формах <em>du</em> і <em>er/sie/es</em>.</p>
<table>
<thead><tr><th>Особа</th><th>haben</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td>ich</td><td><strong>habe</strong></td><td><em>Ich habe Zeit.</em> — Я маю час.</td></tr>
<tr><td>du</td><td><strong>hast</strong></td><td><em>Hast du Hunger?</em> — Ти голодний?</td></tr>
<tr><td>er/sie/es</td><td><strong>hat</strong></td><td><em>Sie hat einen Bruder.</em></td></tr>
<tr><td>wir</td><td><strong>haben</strong></td><td><em>Wir haben Deutschkurs.</em></td></tr>
<tr><td>ihr</td><td><strong>habt</strong></td><td><em>Habt ihr Fragen?</em></td></tr>
<tr><td>sie/Sie</td><td><strong>haben</strong></td><td><em>Haben Sie einen Termin?</em></td></tr>
</tbody></table>
<div class="callout callout--tip"><strong>Ідіоми з haben.</strong> Багато станів німці «мають», а не «є»:
<em>Ich habe Hunger / Durst / Angst / Glück / Recht / Zeit</em> — я голодний / хочу пити / боюся / щасливий /
маю рацію / маю час.</div>`,
    },
    {
      title: '2. Дієслова зі зміною кореневої голосної',
      html: `
<p>Приблизно у 50 частотних дієслів у формах <strong>du</strong> та <strong>er/sie/es</strong> змінюється голосна
кореня. Закінчення при цьому звичайні. Це треба просто запам’ятати разом зі словом.</p>
<table>
<thead><tr><th>Тип</th><th>Інфінітив</th><th>du</th><th>er/sie/es</th></tr></thead>
<tbody>
<tr><td rowspan="3">a → ä</td><td><em>fahren</em> (їхати)</td><td>f<strong>ä</strong>hrst</td><td>f<strong>ä</strong>hrt</td></tr>
<tr><td><em>schlafen</em> (спати)</td><td>schl<strong>ä</strong>fst</td><td>schl<strong>ä</strong>ft</td></tr>
<tr><td><em>tragen</em> (нести, носити)</td><td>tr<strong>ä</strong>gst</td><td>tr<strong>ä</strong>gt</td></tr>
<tr><td rowspan="3">e → i</td><td><em>sprechen</em> (говорити)</td><td>spr<strong>i</strong>chst</td><td>spr<strong>i</strong>cht</td></tr>
<tr><td><em>essen</em> (їсти)</td><td><strong>i</strong>sst</td><td><strong>i</strong>sst</td></tr>
<tr><td><em>helfen</em> (допомагати)</td><td>h<strong>i</strong>lfst</td><td>h<strong>i</strong>lft</td></tr>
<tr><td rowspan="2">e → ie</td><td><em>lesen</em> (читати)</td><td>l<strong>ie</strong>st</td><td>l<strong>ie</strong>st</td></tr>
<tr><td><em>sehen</em> (бачити)</td><td>s<strong>ie</strong>hst</td><td>s<strong>ie</strong>ht</td></tr>
<tr><td>окремо</td><td><em>nehmen</em> (брати)</td><td>n<strong>imm</strong>st</td><td>n<strong>imm</strong>t</td></tr>
<tr><td>окремо</td><td><em>werden</em> (ставати)</td><td>w<strong>ir</strong>st</td><td>w<strong>ir</strong>d</td></tr>
</tbody></table>
<div class="callout"><strong>Тільки du і er/sie/es!</strong> <em>ich spreche, wir sprechen, ihr sprecht,
sie sprechen</em> — тут голосна не змінюється.</div>`,
    },
    {
      title: '3. Ja/Nein-питання та відповідь doch',
      html: `
<p>Щоб поставити питання без питального слова, просто винесіть дієслово на перше місце:</p>
<table>
<thead><tr><th>Твердження</th><th>Питання</th></tr></thead>
<tbody>
<tr><td><em>Du arbeitest in Wien.</em></td><td><em><strong>Arbeitest</strong> du in Wien?</em></td></tr>
<tr><td><em>Sie hat Kinder.</em></td><td><em><strong>Hat</strong> sie Kinder?</em></td></tr>
<tr><td><em>Ihr seid Studenten.</em></td><td><em><strong>Seid</strong> ihr Studenten?</em></td></tr>
</tbody></table>
<p><strong>Три відповіді, а не дві.</strong> Якщо питання <em>заперечне</em>, а ви з ним не погоджуєтесь,
німецькою кажуть не <em>ja</em>, а <em>doch</em>:</p>
<ul>
<li><em>Arbeitest du nicht?</em> — <em><strong>Doch</strong>, ich arbeite.</em> (Навпаки, працюю!)</li>
<li><em>Arbeitest du nicht?</em> — <em><strong>Nein</strong>, ich arbeite nicht.</em> (Так, не працюю.)</li>
</ul>
<div class="callout"><strong>Типова помилка українців.</strong> На питання «Ти не працюєш?» ми відповідаємо «Так»
у значенні «так, не працюю». Німецькою це <em>Nein</em>. А <em>doch</em> — це заперечення заперечення.</div>`,
    },
    {
      title: '4. Числа до 100 і вік',
      html: `
<p>Двозначні числа німці читають <strong>з кінця</strong>: спочатку одиниці, потім <em>und</em>, потім десятки.
<em>21 = einundzwanzig</em> — буквально «один-і-двадцять». Пишеться одним словом.</p>
<table>
<thead><tr><th>Десятки</th><th></th><th>Приклади</th></tr></thead>
<tbody>
<tr><td>20 zwanzig</td><td>60 sechzig</td><td>21 — <em>einundzwanzig</em></td></tr>
<tr><td>30 dreißig</td><td>70 siebzig</td><td>34 — <em>vierunddreißig</em></td></tr>
<tr><td>40 vierzig</td><td>80 achtzig</td><td>68 — <em>achtundsechzig</em></td></tr>
<tr><td>50 fünfzig</td><td>90 neunzig</td><td>99 — <em>neunundneunzig</em></td></tr>
</tbody></table>
<p>Запам’ятайте неправильні форми: <em>drei<strong>ßig</strong></em> (а не -zig),
<em>sech<strong>zig</strong></em> (без -s), <em>sieb<strong>zig</strong></em> (без -en).</p>
<p><strong>Вік:</strong> <em>Ich bin 32 (Jahre alt).</em> — Мені 32 роки. Питання: <em>Wie alt bist du?</em></p>`,
    },
    {
      title: '5. Професія без артикля',
      html: `
<p>Коли ви називаєте професію, національність або віросповідання, артикль <strong>не вживається</strong>:</p>
<ul>
<li><em>Ich bin Lehrerin.</em> — Я вчителька. (не «eine Lehrerin»)</li>
<li><em>Er ist Ukrainer.</em> — Він українець.</li>
</ul>
<p>Жіночий рід професії утворюють суфіксом <strong>-in</strong>: <em>der Lehrer → die Lehrer<strong>in</strong></em>,
<em>der Arzt → die Ärzt<strong>in</strong></em> (з умлаутом), <em>der Koch → die Köch<strong>in</strong></em>.</p>
<p><strong>Місце роботи:</strong> <em>Ich arbeite <strong>bei</strong> Siemens</em> (фірма),
<em>Ich arbeite <strong>in</strong> einem Büro / <strong>im</strong> Krankenhaus</em> (приміщення),
<em>Ich arbeite <strong>als</strong> Programmierer</em> (посада).</p>`,
    },
  ],
  exercises: [
    { type: 'gap', q: 'Ich ___ Hunger. Und du? ___ du auch Hunger?', answers: ['habe', 'Hast'],
      explain: 'Голод німецькою «мають»: Hunger haben.' },
    { type: 'gap', q: 'Er ___ nach München und ___ dort Zeitung.', answers: ['fährt', 'liest'],
      explain: 'fahren: a → ä, lesen: e → ie, обидва у формі er.' },
    { type: 'choice', q: 'Du ___ sehr gut Deutsch!', options: ['sprechst', 'sprichst', 'sprechen', 'spricht'], answer: 1,
      explain: 'sprechen: e → i у формах du і er/sie/es.' },
    { type: 'choice', q: 'Was ___ ihr am Abend?', options: ['macht', 'machst', 'machen', 'mache'], answer: 0,
      explain: 'ihr → закінчення -t.' },
    { type: 'gap', q: 'Anna ___ Medizin und ___ im Krankenhaus.', answers: ['studiert', 'arbeitet'],
      explain: 'arbeiten: основа на -t, тому вставляємо -e-: er arbeitet.' },
    { type: 'choice', q: 'Arbeitest du nicht? — ___, ich arbeite jeden Tag!',
      options: ['Ja', 'Nein', 'Doch', 'Gut'], answer: 2,
      explain: 'Заперечне питання + ваша незгода = doch.' },
    { type: 'order', q: 'Побудуйте Ja/Nein-питання.', words: ['Haben', 'Sie', 'Kinder', '?'],
      answer: 'Haben Sie Kinder ?|Haben Sie Kinder?' },
    { type: 'order', q: 'Складіть речення.', words: ['Ich', 'arbeite', 'als', 'Programmierer', 'bei', 'Siemens'],
      answer: 'Ich arbeite als Programmierer bei Siemens' },
    { type: 'match', q: 'Доберіть жіночий рід професії.',
      pairs: [['der Arzt', 'die Ärztin'], ['der Koch', 'die Köchin'], ['der Lehrer', 'die Lehrerin'], ['der Verkäufer', 'die Verkäuferin']] },
    { type: 'gap', q: 'Напишіть словами: 47 = ___', answers: ['siebenundvierzig'],
      hint: 'Спочатку одиниці, потім und, потім десятки — одним словом.' },
    { type: 'gap', q: 'Напишіть словами: 33 = ___', answers: ['dreiunddreißig|dreiunddreissig'],
      explain: '30 — це dreißig, а не «dreizig».' },
    { type: 'choice', q: 'Яке речення правильне?',
      options: ['Ich bin eine Lehrerin.', 'Ich bin Lehrerin.', 'Ich habe Lehrerin.', 'Ich bin die Lehrerin von Beruf.'],
      answer: 1, explain: 'Професія після sein вживається без артикля.' },
    { type: 'multi', q: 'У яких дієсловах змінюється коренева голосна у формі er?',
      options: ['machen', 'schlafen', 'wohnen', 'nehmen', 'lernen', 'sehen'],
      answers: [1, 3, 5],
      explain: 'schläft, nimmt, sieht. А machen, wohnen, lernen — правильні.' },
    { type: 'truefalse', q: 'Речення «Wir sprichen Deutsch» записано правильно.', answer: false,
      explain: 'Правильно: Wir sprechen Deutsch. Зміна e → i буває лише в du і er/sie/es.' },
  ],

  listening: [
    {
      exam: 'Goethe A1 · Hören Teil 2',
      title: 'Zwei Kollegen im Büro',
      instruction: 'Двоє колег розмовляють про роботу. Дайте відповіді на запитання.',
      lines: [
        { speaker: 'Tom', de: 'Sag mal, Lena, was machst du eigentlich beruflich?', uk: 'Скажи, Лено, а ким ти працюєш?' },
        { speaker: 'Lena', de: 'Ich bin Ingenieurin. Ich arbeite bei einer Firma in Stuttgart.', uk: 'Я інженерка. Працюю на фірмі у Штутгарті.' },
        { speaker: 'Tom', de: 'Und wie fährst du zur Arbeit?', uk: 'А як ти добираєшся на роботу?' },
        { speaker: 'Lena', de: 'Ich nehme immer den Bus. Das dauert vierzig Minuten.', uk: 'Я завжди їду автобусом. Це триває сорок хвилин.' },
        { speaker: 'Tom', de: 'Das ist lang! Arbeitest du auch am Samstag?', uk: 'Це довго! Ти працюєш і в суботу?' },
        { speaker: 'Lena', de: 'Nein, nie. Am Wochenende lese ich und schlafe lange.', uk: 'Ні, ніколи. На вихідних я читаю і довго сплю.' },
      ],
      tasks: [
        { type: 'choice', q: 'Was ist Lena von Beruf?', options: ['Ärztin', 'Lehrerin', 'Ingenieurin', 'Verkäuferin'], answer: 2 },
        { type: 'choice', q: 'Wie fährt sie zur Arbeit?', options: ['Mit dem Auto', 'Mit dem Bus', 'Mit dem Zug', 'Zu Fuß'], answer: 1 },
        { type: 'gap', q: 'Die Fahrt dauert ___ Minuten.', answers: ['40|vierzig'] },
        { type: 'truefalse', q: 'Lena arbeitet auch am Samstag.', answer: false, explain: '«Nein, nie.»' },
      ],
    },
    {
      exam: 'ÖSD A1 · Hören',
      title: 'Ein kurzes Interview',
      instruction: 'Послухайте, як чоловік розповідає про себе.',
      lines: [
        { de: 'Guten Tag! Mein Name ist Andrij Bondar. Ich bin achtunddreißig Jahre alt.', uk: 'Добрий день! Мене звати Андрій Бондар. Мені тридцять вісім років.' },
        { de: 'Ich komme aus Odessa, aber ich wohne seit zwei Jahren in Linz.', uk: 'Я з Одеси, але вже два роки мешкаю в Лінці.' },
        { de: 'Von Beruf bin ich Koch. Ich arbeite in einem Restaurant im Zentrum.', uk: 'За професією я кухар. Працюю в ресторані в центрі.' },
        { de: 'Ich spreche Ukrainisch, Englisch und ein bisschen Deutsch.', uk: 'Я говорю українською, англійською й трохи німецькою.' },
        { de: 'Meine Telefonnummer ist null sieben drei zwei — fünf neun.', uk: 'Мій номер телефону — нуль сім три два — п’ять дев’ять.' },
      ],
      tasks: [
        { type: 'gap', q: 'Andrij ist ___ Jahre alt.', answers: ['38|achtunddreißig|achtunddreissig'] },
        { type: 'choice', q: 'Was ist er von Beruf?', options: ['Kellner', 'Koch', 'Fahrer', 'Verkäufer'], answer: 1 },
        { type: 'gap', q: 'Er wohnt in ___.', answers: ['Linz'] },
        { type: 'choice', q: 'Wie ist die Telefonnummer?', options: ['0723 — 95', '0732 — 59', '0372 — 59', '0732 — 95'], answer: 1 },
      ],
    },
  ],

  writing: [
    {
      exam: 'Goethe A1 · Schreiben Teil 2',
      title: 'E-Mail an einen neuen Kollegen',
      situation: 'Ви починаєте нову роботу. Напишіть імейл колезі, з яким ще не знайомі, і розкажіть про себе. Напишіть <strong>30–40 слів</strong>.',
      points: ['Ihr Beruf', 'Wo Sie arbeiten', 'Was Sie gern machen', 'Eine Frage an den Kollegen'],
      minWords: 30,
      phrases: [
        { de: 'Lieber Herr … / Liebe Frau …', uk: 'Шановний пане … / Шановна пані … (напівформально)' },
        { de: 'ich bin neu in der Firma.', uk: 'я нова людина у фірмі.' },
        { de: 'Von Beruf bin ich …', uk: 'За професією я …' },
        { de: 'Ich arbeite seit … in …', uk: 'Я працюю з … у …' },
        { de: 'In meiner Freizeit lese ich gern.', uk: 'У вільний час я люблю читати.' },
        { de: 'Haben Sie am Montag Zeit für einen Kaffee?', uk: 'Чи маєте Ви час на каву в понеділок?' },
        { de: 'Viele Grüße / Mit freundlichen Grüßen', uk: 'З вітаннями / З повагою' },
      ],
      checklist: [
        'Є звертання на початку (Lieber/Liebe …) і прощання в кінці?',
        'Ви послідовно вживаєте Sie, а не du?',
        'У кожному твердженні дієслово на другому місці?',
        'Питання побудоване правильно (дієслово на першому місці)?',
        'Професія без артикля?',
      ],
      model:
`Lieber Herr Bauer,

ich bin neu in der Firma und möchte mich kurz vorstellen.
Ich heiße Iryna Kowal und bin Programmiererin. Ich arbeite seit Montag im Büro im zweiten Stock.
In meiner Freizeit lese ich gern und fahre viel Rad.
Haben Sie am Donnerstag Zeit für einen Kaffee?

Viele Grüße
Iryna`,
      modelUk: 'Переклад: Шановний пане Бауер, я нова у фірмі й хочу коротко представитися. Мене звати Ірина Коваль, я програмістка. Працюю з понеділка в офісі на другому поверсі. У вільний час люблю читати й багато їжджу велосипедом. Чи маєте Ви час на каву в четвер? З вітаннями, Ірина.',
    },
  ],

  test: [
    { type: 'choice', q: '___ du Zeit am Abend?', options: ['Habe', 'Hast', 'Hat', 'Habt'], answer: 1 },
    { type: 'choice', q: 'Mein Bruder ___ jeden Tag Zeitung.', options: ['lese', 'lest', 'liest', 'lesst'], answer: 2 },
    { type: 'choice', q: 'Wohin ___ ihr im Sommer?', options: ['fahrt', 'fährt', 'fahrst', 'fahren'], answer: 0,
      explain: 'ihr fahrt — без умлаута, бо зміна голосної буває лише в du і er/sie/es.' },
    { type: 'choice', q: 'Sie ___ nicht gut. Sie ist müde.', options: ['schläft', 'schlaft', 'schlafst', 'schlafen'], answer: 0 },
    { type: 'gap', q: 'Wir ___ Kollegen und ___ zusammen im Büro.', answers: ['sind', 'arbeiten'] },
    { type: 'gap', q: 'Was ___ du zum Frühstück? — Ich ___ Brot mit Käse.', answers: ['isst', 'esse'] },
    { type: 'choice', q: 'Kommst du nicht mit? — ___, natürlich komme ich mit!',
      options: ['Ja', 'Nein', 'Doch', 'Nicht'], answer: 2 },
    { type: 'gap', q: 'Напишіть словами: 82 = ___', answers: ['zweiundachtzig'] },
    { type: 'gap', q: 'Напишіть словами: 16 = ___', answers: ['sechzehn'] },
    { type: 'order', q: 'Складіть речення.', words: ['Meine', 'Schwester', 'arbeitet', 'als', 'Ärztin'],
      answer: 'Meine Schwester arbeitet als Ärztin' },
    { type: 'order', q: 'Складіть питання.', words: ['Was', 'sind', 'Sie', 'von', 'Beruf', '?'],
      answer: 'Was sind Sie von Beruf ?|Was sind Sie von Beruf?' },
    { type: 'match', q: 'Доберіть переклад.',
      pairs: [['der Beruf', 'професія'], ['die Firma', 'фірма'], ['verdienen', 'заробляти'], ['die Kollegin', 'колега (ж.)'], ['arbeitslos', 'безробітний']] },
    { type: 'multi', q: 'Позначте правильні речення.',
      options: ['Er nimmt den Bus.', 'Du sprechst Deutsch.', 'Ich bin Lehrerin.', 'Sie hat ein Auto.', 'Wir sehen fern.', 'Ihr habt keine Zeit.'],
      answers: [0, 2, 3, 4, 5],
      explain: 'Помилка лише в другому: правильно du sprichst.' },
    { type: 'truefalse', q: 'Німецькою кажуть «Ich bin Hunger».', answer: false,
      explain: 'Правильно: Ich habe Hunger.' },
  ],
},

/* ══════════════════════════════════ МОДУЛЬ 3 ══════════════════════════════ */
{
  id: 'm3',
  title: 'Nomen, Artikel, Akkusativ',
  titleUk: 'Іменники, роди, множина та знахідний відмінок',
  can: [
    'вживати артиклі der / die / das і розпізнавати рід за суфіксом',
    'утворювати множину іменників',
    'відрізняти Nominativ від Akkusativ і правильно вживати den, einen',
    'заперечувати іменник за допомогою kein',
    'говорити про житло, меблі та покупки',
  ],

  grammar: [
    {
      title: '1. Три роди і означений артикль',
      html: `
<p>Кожен німецький іменник має рід, і він часто <strong>не збігається</strong> з українським:
<em>das Mädchen</em> (дівчина) — середній рід, <em>die Butter</em> (масло) — жіночий,
<em>der Tisch</em> (стіл) — чоловічий. Тому слово завжди вчать разом з артиклем:
не «Tisch», а «<strong>der</strong> Tisch».</p>
<table>
<thead><tr><th></th><th>Чоловічий</th><th>Жіночий</th><th>Середній</th><th>Множина</th></tr></thead>
<tbody>
<tr><td>Означений</td><td><strong>der</strong> Tisch</td><td><strong>die</strong> Lampe</td><td><strong>das</strong> Bett</td><td><strong>die</strong> Tische</td></tr>
<tr><td>Неозначений</td><td><strong>ein</strong> Tisch</td><td><strong>eine</strong> Lampe</td><td><strong>ein</strong> Bett</td><td>— (без артикля)</td></tr>
<tr><td>Заперечення</td><td><strong>kein</strong> Tisch</td><td><strong>keine</strong> Lampe</td><td><strong>kein</strong> Bett</td><td><strong>keine</strong> Tische</td></tr>
</tbody></table>
<p><strong>Означений чи неозначений?</strong> <em>ein</em> — коли предмет згадують уперше або він неважливий:
<em>Ich habe ein Auto.</em> <em>der/die/das</em> — коли предмет уже відомий:
<em>Das Auto ist alt.</em> У множині неозначеного артикля просто немає: <em>Ich kaufe Äpfel.</em></p>`,
    },
    {
      title: '2. Як вгадати рід за закінченням',
      html: `
<p>Правил, що працюють на 100 %, немає, але ці підказки покривають більшість слів.</p>
<table>
<thead><tr><th>Рід</th><th>Ознака</th><th>Приклади</th></tr></thead>
<tbody>
<tr><td rowspan="3"><strong>der</strong></td><td>-er, -ling, -ismus, -or</td><td><em>der Lehrer, der Frühling, der Motor</em></td></tr>
<tr><td>дні, місяці, пори року, погода</td><td><em>der Montag, der Mai, der Sommer, der Regen</em></td></tr>
<tr><td>чоловічі істоти, алкоголь</td><td><em>der Vater, der Wein</em></td></tr>
<tr><td rowspan="3"><strong>die</strong></td><td>-ung, -heit, -keit, -schaft, -ion, -tät, -ei</td><td><em>die Wohnung, die Freiheit, die Nation, die Universität</em></td></tr>
<tr><td>-e (≈ 90 % слів)</td><td><em>die Lampe, die Blume, die Sprache</em></td></tr>
<tr><td>числа, більшість дерев і квітів</td><td><em>die Eins, die Rose</em></td></tr>
<tr><td rowspan="3"><strong>das</strong></td><td>-chen, -lein (зменшувальні)</td><td><em>das Mädchen, das Brötchen</em></td></tr>
<tr><td>-ment, -um, -ma</td><td><em>das Dokument, das Museum, das Thema</em></td></tr>
<tr><td>інфінітив як іменник, мови, метали</td><td><em>das Essen, das Deutsch, das Gold</em></td></tr>
</tbody></table>
<div class="callout"><strong>Складні слова.</strong> Рід визначає <em>останнє</em> слово:
<em>die Hand + der Schuh = der Handschuh</em> (рукавичка);
<em>der Haus + die Tür = die Haustür</em>. І ще: <em>das Haus + die Aufgabe = die Hausaufgabe</em>.</div>`,
    },
    {
      title: '3. Множина: п’ять типів',
      html: `
<p>Німецька множина не має одного закінчення. Її теж вчать разом зі словом — у словнику вона позначена
після коми: <em>der Tisch, -e</em> означає «die Tische».</p>
<table>
<thead><tr><th>Тип</th><th>Однина → Множина</th><th>Хто так робить</th></tr></thead>
<tbody>
<tr><td><strong>-e</strong> (часто + умлаут)</td><td><em>der Tisch → die Tisch<strong>e</strong></em><br><em>die Stadt → die St<strong>ä</strong>dt<strong>e</strong></em></td><td>більшість чоловічих</td></tr>
<tr><td><strong>-(e)n</strong></td><td><em>die Lampe → die Lampe<strong>n</strong></em><br><em>die Frau → die Frau<strong>en</strong></em></td><td>майже всі жіночі</td></tr>
<tr><td><strong>-er</strong> (+ умлаут)</td><td><em>das Kind → die Kind<strong>er</strong></em><br><em>das Buch → die B<strong>ü</strong>ch<strong>er</strong></em></td><td>багато середніх</td></tr>
<tr><td><strong>-s</strong></td><td><em>das Auto → die Auto<strong>s</strong></em></td><td>запозичення, скорочення</td></tr>
<tr><td><strong>без закінчення</strong> (іноді умлаут)</td><td><em>der Lehrer → die Lehrer</em><br><em>der Apfel → die <strong>Ä</strong>pfel</em></td><td>слова на -er, -el, -en</td></tr>
</tbody></table>
<p><strong>-in → -innen:</strong> <em>die Lehrerin → die Lehrer<strong>innen</strong></em> — подвійне n обов’язкове.</p>
<div class="callout callout--tip">У множині артикль завжди <strong>die</strong>, незалежно від роду в однині.</div>`,
    },
    {
      title: '4. Akkusativ — знахідний відмінок',
      html: `
<p>Akkusativ відповідає на питання <strong>Wen? Was?</strong> (кого? що?) і позначає прямий додаток.
Гарна новина: <strong>змінюється лише чоловічий рід</strong>. Жіночий, середній і множина мають ту саму форму,
що й у Nominativ.</p>
<table>
<thead><tr><th>Рід</th><th>Nominativ (хто? що?)</th><th>Akkusativ (кого? що?)</th></tr></thead>
<tbody>
<tr><td>чоловічий</td><td><strong>der</strong> / <strong>ein</strong> / <strong>kein</strong> Tisch</td><td><strong>den</strong> / <strong>einen</strong> / <strong>keinen</strong> Tisch</td></tr>
<tr><td>жіночий</td><td>die / eine / keine Lampe</td><td>die / eine / keine Lampe</td></tr>
<tr><td>середній</td><td>das / ein / kein Bett</td><td>das / ein / kein Bett</td></tr>
<tr><td>множина</td><td>die / — / keine Stühle</td><td>die / — / keine Stühle</td></tr>
</tbody></table>
<p><strong>Порівняйте:</strong></p>
<ul>
<li><em><strong>Der</strong> Tisch ist neu.</em> (підмет → Nominativ)</li>
<li><em>Ich kaufe <strong>den</strong> Tisch.</em> (додаток → Akkusativ)</li>
<li><em>Ich habe <strong>einen</strong> Bruder und <strong>eine</strong> Schwester.</em></li>
</ul>
<p><strong>Найчастіші дієслова з Akkusativ:</strong> <em>haben, kaufen, brauchen, suchen, nehmen, sehen,
lesen, essen, trinken, machen, verstehen, möchten</em>.</p>
<div class="callout"><strong>es gibt + Akkusativ.</strong> «Є, існує» — це завжди <em>es gibt</em>
плюс знахідний відмінок: <em>Hier gibt es <strong>einen</strong> Supermarkt.</em>
Ніколи не кажіть «hier ist ein Supermarkt», якщо йдеться про наявність у місті.</div>`,
    },
    {
      title: '5. Заперечення: nicht чи kein?',
      html: `
<p>Це одна з двох найчастіших помилок початківців. Правило просте:</p>
<table>
<thead><tr><th>Вживаємо</th><th>Коли</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td><strong>kein</strong></td><td>перед іменником з <em>ein</em> або зовсім без артикля</td><td><em>Ich habe <strong>kein</strong> Auto.</em><br><em>Das ist <strong>keine</strong> Lampe.</em></td></tr>
<tr><td><strong>nicht</strong></td><td>усе інше: дієслова, прикметники, прислівники, іменник з <em>der/die/das</em> або з присвійним</td><td><em>Ich arbeite <strong>nicht</strong>.</em><br><em>Das Buch ist <strong>nicht</strong> teuer.</em><br><em>Ich kenne <strong>den</strong> Mann <strong>nicht</strong>.</em></td></tr>
</tbody></table>
<p><strong>Місце nicht:</strong> зазвичай у кінці речення, але <em>перед</em> тим словом, яке заперечується:
<em>Ich fahre heute <strong>nicht</strong> nach Wien.</em> / <em>Das ist <strong>nicht</strong> mein Buch.</em></p>`,
    },
  ],
  exercises: [
    { type: 'choice', q: 'Ich brauche ___ Stuhl.', options: ['ein', 'eine', 'einen', 'einem'], answer: 2,
      explain: 'der Stuhl — чоловічий рід, brauchen вимагає Akkusativ: einen Stuhl.' },
    { type: 'choice', q: '___ Lampe ist sehr schön.', options: ['Der', 'Die', 'Das', 'Den'], answer: 1,
      explain: 'Слова на -e майже завжди жіночого роду: die Lampe.' },
    { type: 'gap', q: 'Das ist ___ Bett. ___ Bett ist neu.', answers: ['ein', 'Das'],
      explain: 'Спершу неозначений артикль (уперше згадуємо), потім означений (уже відомий предмет).' },
    { type: 'gap', q: 'Ich habe ___ Bruder und ___ Schwester.', answers: ['einen', 'eine'],
      explain: 'haben + Akkusativ: чоловічий einen, жіночий eine.' },
    { type: 'gap', q: 'Wir haben ___ Auto. Wir fahren mit dem Bus.', answers: ['kein'],
      explain: 'das Auto — середній рід, заперечення іменника з ein → kein.' },
    { type: 'choice', q: 'Ich kenne ___ Mann nicht.', options: ['der', 'den', 'dem', 'das'], answer: 1,
      explain: 'kennen + Akkusativ, чоловічий рід: den Mann.' },
    { type: 'choice', q: 'Hier ___ einen Supermarkt.', options: ['ist', 'sind', 'gibt es', 'es gibt'], answer: 2,
      explain: 'У реченні «Hier ___ …» дієслово стоїть на другому місці, тому: Hier gibt es …' },
    { type: 'match', q: 'Доберіть множину.',
      pairs: [['das Kind', 'die Kinder'], ['die Frau', 'die Frauen'], ['der Apfel', 'die Äpfel'], ['das Auto', 'die Autos'], ['der Tisch', 'die Tische'], ['die Lehrerin', 'die Lehrerinnen']] },
    { type: 'gap', q: 'Впишіть артикль: ___ Wohnung · ___ Mädchen · ___ Frühling · ___ Universität · ___ Dokument',
      answers: ['die', 'das', 'der', 'die', 'das'],
      hint: '-ung і -tät → жіночий; -chen і -ment → середній; пори року → чоловічий.',
      explain: 'die Wohnung (-ung), das Mädchen (-chen), der Frühling (пора року), die Universität (-tät), das Dokument (-ment).' },
    { type: 'choice', q: 'Заперечте: «Ich habe Zeit.»',
      options: ['Ich habe nicht Zeit.', 'Ich habe keine Zeit.', 'Ich nicht habe Zeit.', 'Ich habe kein Zeit.'], answer: 1,
      explain: 'die Zeit — жіночий рід, іменник без артикля → keine Zeit.' },
    { type: 'choice', q: 'Заперечте: «Das Buch ist teuer.»',
      options: ['Das Buch ist kein teuer.', 'Das Buch nicht ist teuer.', 'Das Buch ist nicht teuer.', 'Das kein Buch ist teuer.'], answer: 2,
      explain: 'Заперечуємо прикметник → nicht.' },
    { type: 'order', q: 'Складіть речення.', words: ['Ich', 'suche', 'eine', 'Wohnung', 'in', 'Wien'],
      answer: 'Ich suche eine Wohnung in Wien' },
    { type: 'order', q: 'Складіть речення.', words: ['In', 'der', 'Küche', 'gibt', 'es', 'einen', 'Kühlschrank'],
      answer: 'In der Küche gibt es einen Kühlschrank' },
    { type: 'gap', q: 'Was kostet ___ Sofa? — ___ Sofa kostet 400 Euro.', answers: ['das', 'Das'] },
    { type: 'multi', q: 'Позначте всі іменники жіночого роду.',
      options: ['Zeitung', 'Mädchen', 'Freiheit', 'Motor', 'Blume', 'Museum'],
      answers: [0, 2, 4],
      explain: '-ung, -heit і -e → жіночий рід. Mädchen (-chen) і Museum (-um) — середній, Motor (-or) — чоловічий.' },
  ],

  listening: [
    {
      exam: 'Goethe A1 · Hören Teil 2',
      title: 'Eine neue Wohnung',
      instruction: 'Оксана розповідає подрузі про нову квартиру. Дайте відповіді на запитання.',
      lines: [
        { speaker: 'Sara', de: 'Und, wie ist die neue Wohnung?', uk: 'Ну, як нова квартира?' },
        { speaker: 'Oksana', de: 'Sehr schön! Sie hat drei Zimmer, eine Küche und ein Bad.', uk: 'Дуже гарна! У ній три кімнати, кухня і ванна.' },
        { speaker: 'Sara', de: 'Gibt es auch einen Balkon?', uk: 'А балкон є?' },
        { speaker: 'Oksana', de: 'Ja, es gibt einen Balkon, aber keinen Garten.', uk: 'Так, балкон є, а от саду немає.' },
        { speaker: 'Sara', de: 'Und was kostet die Miete?', uk: 'А скільки коштує оренда?' },
        { speaker: 'Oksana', de: 'Sechshundertfünfzig Euro. Das ist nicht billig, aber okay.', uk: 'Шістсот п’ятдесят євро. Це недешево, але нормально.' },
        { speaker: 'Sara', de: 'Hast du schon Möbel?', uk: 'Меблі вже маєш?' },
        { speaker: 'Oksana', de: 'Ich habe ein Bett und einen Tisch. Ich brauche noch Stühle und einen Schrank.', uk: 'Маю ліжко і стіл. Ще потрібні стільці й шафа.' },
      ],
      tasks: [
        { type: 'choice', q: 'Wie viele Zimmer hat die Wohnung?', options: ['Zwei', 'Drei', 'Vier', 'Fünf'], answer: 1 },
        { type: 'truefalse', q: 'Die Wohnung hat einen Garten.', answer: false, explain: '«…aber keinen Garten».' },
        { type: 'gap', q: 'Die Miete kostet ___ Euro.', answers: ['650|sechshundertfünfzig|sechshundertfuenfzig'] },
        { type: 'multi', q: 'Was braucht Oksana noch?',
          options: ['ein Bett', 'Stühle', 'einen Tisch', 'einen Schrank'], answers: [1, 3] },
      ],
    },
    {
      exam: 'ÖSD A1 · Hören',
      title: 'Im Supermarkt',
      instruction: 'Пара складає список покупок.',
      lines: [
        { speaker: 'Mann', de: 'Was brauchen wir? Wir haben kein Brot mehr.', uk: 'Що нам потрібно? Хліба більше немає.' },
        { speaker: 'Frau', de: 'Gut, also ein Brot. Und Milch — wir haben keine Milch.', uk: 'Добре, отже, хліб. І молоко — молока немає.' },
        { speaker: 'Mann', de: 'Käse haben wir noch. Aber wir brauchen Eier.', uk: 'Сир ще є. Але потрібні яйця.' },
        { speaker: 'Frau', de: 'Zehn Eier, okay. Und kaufst du auch Äpfel?', uk: 'Десять яєць, добре. Купиш іще яблука?' },
        { speaker: 'Mann', de: 'Ja, ein Kilo Äpfel. Was kostet das alles zusammen?', uk: 'Так, кілограм яблук. Скільки все це коштує разом?' },
        { speaker: 'Frau', de: 'Vielleicht zwölf Euro.', uk: 'Може, дванадцять євро.' },
      ],
      tasks: [
        { type: 'multi', q: 'Was kaufen sie?', options: ['Brot', 'Käse', 'Milch', 'Eier', 'Äpfel'], answers: [0, 2, 3, 4],
          explain: 'Сир у них ще є: «Käse haben wir noch».' },
        { type: 'gap', q: 'Sie kaufen ___ Eier.', answers: ['10|zehn'] },
        { type: 'gap', q: 'Alles zusammen kostet ungefähr ___ Euro.', answers: ['12|zwölf|zwoelf'] },
      ],
    },
  ],

  writing: [
    {
      exam: 'Goethe A1 · Schreiben Teil 2',
      title: 'Nachricht an einen Freund: Ihre neue Wohnung',
      situation: 'Ви щойно переїхали. Напишіть повідомлення другові про свою нову квартиру. <strong>30–40 слів</strong>.',
      points: ['Wo ist die Wohnung?', 'Wie viele Zimmer?', 'Was brauchen Sie noch?', 'Laden Sie den Freund ein.'],
      minWords: 30,
      phrases: [
        { de: 'Hallo …, wie geht es dir?', uk: 'Привіт …, як справи?' },
        { de: 'Ich habe jetzt eine neue Wohnung in …', uk: 'У мене тепер нова квартира в …' },
        { de: 'Die Wohnung hat … Zimmer und einen Balkon.', uk: 'Квартира має … кімнат і балкон.' },
        { de: 'Ich brauche noch einen Schrank und Stühle.', uk: 'Мені ще потрібні шафа і стільці.' },
        { de: 'Hast du am Samstag Zeit? Komm doch vorbei!', uk: 'Маєш час у суботу? Заходь!' },
        { de: 'Liebe Grüße', uk: 'Сердечні вітання' },
      ],
      checklist: [
        'Після haben і brauchen ви вжили Akkusativ (einen для чоловічого роду)?',
        'Заперечення: kein перед іменником, nicht — в інших випадках?',
        'Усі іменники з великої літери й з правильним артиклем?',
        'Ви написали du, а не Sie (це друг)?',
        'Є привітання і прощання?',
      ],
      model:
`Hallo Max,

wie geht es dir? Ich habe endlich eine neue Wohnung in Graz!
Sie hat zwei Zimmer, eine kleine Küche und einen Balkon. Einen Garten gibt es leider nicht.
Ich habe schon ein Bett und einen Tisch, aber ich brauche noch einen Schrank und vier Stühle.
Hast du am Samstag Zeit? Komm doch vorbei!

Liebe Grüße
Iryna`,
      modelUk: 'Переклад: Привіт, Максе! Як справи? У мене нарешті нова квартира у Ґраці! У ній дві кімнати, маленька кухня і балкон. Саду, на жаль, немає. Ліжко і стіл уже маю, але ще потрібні шафа й чотири стільці. Маєш час у суботу? Заходь! Сердечні вітання, Ірина.',
    },
  ],

  test: [
    { type: 'choice', q: 'Ich kaufe ___ Kühlschrank.', options: ['ein', 'einen', 'eine', 'einem'], answer: 1 },
    { type: 'choice', q: '___ Mädchen heißt Lena.', options: ['Der', 'Die', 'Das', 'Den'], answer: 2 },
    { type: 'choice', q: 'Wir brauchen ___ Stühle.', options: ['kein', 'keine', 'keinen', 'nicht'], answer: 1 },
    { type: 'choice', q: 'Ich verstehe ___ Lehrer nicht.', options: ['der', 'den', 'das', 'die'], answer: 1 },
    { type: 'choice', q: 'Hier ___ ein Restaurant und einen Park.', options: ['ist', 'sind', 'gibt es', 'hat'], answer: 2 },
    { type: 'gap', q: 'Das ist ___ Tisch. ___ Tisch ist neu.', answers: ['ein', 'Der'] },
    { type: 'gap', q: 'Sie hat ___ Bruder, aber ___ Schwester.', answers: ['einen', 'keine'] },
    { type: 'gap', q: 'Ich arbeite heute ___. Ich habe frei.', answers: ['nicht'] },
    { type: 'match', q: 'Доберіть множину.',
      pairs: [['das Buch', 'die Bücher'], ['die Wohnung', 'die Wohnungen'], ['der Stuhl', 'die Stühle'], ['das Fenster', 'die Fenster'], ['das Foto', 'die Fotos']] },
    { type: 'gap', q: 'Впишіть артикль: ___ Zeitung · ___ Brötchen · ___ Sommer · ___ Nation',
      answers: ['die', 'das', 'der', 'die'],
      explain: '-ung → die, -chen → das, пори року → der, -ion → die.' },
    { type: 'order', q: 'Складіть речення.', words: ['Ich', 'brauche', 'keinen', 'Computer'],
      answer: 'Ich brauche keinen Computer' },
    { type: 'order', q: 'Складіть речення.', words: ['In', 'der', 'Stadt', 'gibt', 'es', 'ein', 'Museum'],
      answer: 'In der Stadt gibt es ein Museum' },
    { type: 'truefalse', q: 'У множині всі іменники мають артикль die.', answer: true },
    { type: 'choice', q: 'Яке речення правильне?',
      options: ['Ich habe nicht Auto.', 'Ich habe kein Auto.', 'Ich habe keinen Auto.', 'Ich nicht habe Auto.'], answer: 1 },
    { type: 'choice', q: 'Рід складного слова <span class="de-inline">die Hausaufgabe</span> визначає…',
      options: ['перше слово (Haus)', 'останнє слово (Aufgabe)', 'найдовше слово', 'наголос'], answer: 1 },
  ],
},

/* ══════════════════════════════════ МОДУЛЬ 4 ══════════════════════════════ */
{
  id: 'm4',
  title: 'Familie und Possessivartikel',
  titleUk: 'Родина, присвійні займенники, опис людей',
  can: [
    'розповісти про свою родину',
    'вживати mein, dein, sein, ihr, unser, euer, Ihr у Nominativ і Akkusativ',
    'описувати зовнішність і характер простими прикметниками',
    'вживати сполучники und, aber, oder, denn без зміни порядку слів',
  ],

  grammar: [
    {
      title: '1. Присвійні артиклі',
      html: `
<p>Присвійний артикль замінює <em>ein</em> і має ті самі закінчення. Тому набір закінчень ви вже знаєте:
<em>ein → mein</em>, <em>eine → meine</em>, <em>einen → meinen</em>.</p>
<table>
<thead><tr><th>Хто володіє</th><th>Присвійний</th><th>Перекладається як</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td>ich — я</td><td><strong>mein</strong></td><td>мій, моя, моє</td>
<td><em>mein Vater, meine Mutter</em><span class="uk">мій батько, моя мати</span></td></tr>
<tr><td>du — ти</td><td><strong>dein</strong></td><td>твій, твоя</td>
<td><em>dein Bruder, deine Schwester</em><span class="uk">твій брат, твоя сестра</span></td></tr>
<tr><td>er / es — він / воно</td><td><strong>sein</strong></td><td>його</td>
<td><em>sein Auto</em><span class="uk">його авто</span></td></tr>
<tr><td>sie — вона</td><td><strong>ihr</strong></td><td>її</td>
<td><em>ihr Auto</em><span class="uk">її авто</span></td></tr>
<tr><td>wir — ми</td><td><strong>unser</strong></td><td>наш, наша</td>
<td><em>unsere Wohnung</em><span class="uk">наша квартира</span></td></tr>
<tr><td>ihr — ви (кілька «ти»)</td><td><strong>euer</strong></td><td>ваш, ваша</td>
<td><em>eure Kinder</em><span class="uk">ваші діти (увага: euer → eure)</span></td></tr>
<tr><td>sie — вони</td><td><strong>ihr</strong></td><td>їхній, їхня</td>
<td><em>ihre Eltern</em><span class="uk">їхні батьки</span></td></tr>
<tr><td>Sie — Ви (ввічливо)</td><td><strong>Ihr</strong></td><td>Ваш, Ваша</td>
<td><em>Ihr Name, bitte?</em><span class="uk">Ваше ім’я, будь ласка?</span></td></tr>
</tbody></table>
<div class="callout"><strong>Одне слово — три значення.</strong> <em>ihr</em> може бути «її», «їхній»
і навіть «ви» (як займенник). Що саме — видно з місця в реченні: перед іменником це присвійне
(<em>ihr Auto</em>), а перед дієсловом — підмет (<em>ihr seid</em> — ви є).</div>
<p><strong>Закінчення — за родом іменника, а не за власником:</strong></p>
<table>
<thead><tr><th></th><th>der Vater</th><th>die Mutter</th><th>das Kind</th><th>die Eltern (мн.)</th></tr></thead>
<tbody>
<tr><td>Nominativ</td><td>mein Vater</td><td>mein<strong>e</strong> Mutter</td><td>mein Kind</td><td>mein<strong>e</strong> Eltern</td></tr>
<tr><td>Akkusativ</td><td>mein<strong>en</strong> Vater</td><td>mein<strong>e</strong> Mutter</td><td>mein Kind</td><td>mein<strong>e</strong> Eltern</td></tr>
</tbody></table>
<div class="callout"><strong>sein чи ihr?</strong> Українською «його/її» ми теж розрізняємо, але помилки часті.
Дивіться на <em>власника</em>: <em>Anna und <strong>ihr</strong> Bruder</em> (Анна — вона → ihr),
<em>Max und <strong>sein</strong> Bruder</em> (Макс — він → sein).</div>`,
    },
    {
      title: '2. Сполучники, що не змінюють порядок слів',
      html: `
<p>Чотири сполучники з’єднують два повних речення й <strong>не займають місця</strong> — після них порядок слів
звичайний (підмет → дієслово):</p>
<table>
<thead><tr><th>Сполучник</th><th>Значення</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td><strong>und</strong></td><td>і</td><td><em>Ich lerne Deutsch <strong>und</strong> ich arbeite.</em></td></tr>
<tr><td><strong>aber</strong></td><td>але</td><td><em>Sie ist müde, <strong>aber</strong> sie kommt.</em></td></tr>
<tr><td><strong>oder</strong></td><td>або</td><td><em>Trinkst du Tee <strong>oder</strong> trinkst du Kaffee?</em></td></tr>
<tr><td><strong>denn</strong></td><td>бо, тому що</td><td><em>Ich bleibe zu Hause, <strong>denn</strong> ich bin krank.</em></td></tr>
</tbody></table>
<div class="callout callout--tip"><strong>Запам’ятайте абревіатуру ADUSO</strong> (aber, denn, und, sondern, oder) —
це «нульова позиція»: сполучник стоїть <em>перед</em> першим місцем, тому дієслово залишається другим.
Порівняйте з <em>weil</em> (рівень A2), яке відкидає дієслово в кінець.</div>
<p><strong>sondern</strong> — «а, натомість» — вживається лише після заперечення:
<em>Das ist nicht mein Bruder, <strong>sondern</strong> mein Freund.</em></p>`,
    },
    {
      title: '3. Прикметники без закінчень',
      html: `
<p>На рівні A1 прикметники вживають переважно <strong>після дієслова</strong> — там вони не мають закінчень
узагалі. Це найлегша конструкція в німецькій:</p>
<ul>
<li><em>Meine Schwester ist <strong>klein</strong>.</em></li>
<li><em>Die Wohnung ist <strong>groß</strong> und <strong>hell</strong>.</em></li>
<li><em>Mein Bruder findet den Film <strong>langweilig</strong>.</em></li>
</ul>
<p>Відмінювання прикметника перед іменником (<em>ein klein<strong>es</strong> Kind</em>) — тема рівня A2,
на A1 його можна оминати, будуючи речення через <em>sein</em>.</p>
<table>
<thead><tr><th>Прикметник</th><th>Протилежний</th></tr></thead>
<tbody>
<tr><td><em>groß</em> — великий</td><td><em>klein</em> — малий</td></tr>
<tr><td><em>alt</em> — старий</td><td><em>jung / neu</em> — молодий / новий</td></tr>
<tr><td><em>teuer</em> — дорогий</td><td><em>billig</em> — дешевий</td></tr>
<tr><td><em>lang</em> — довгий</td><td><em>kurz</em> — короткий</td></tr>
<tr><td><em>gut</em> — добрий</td><td><em>schlecht</em> — поганий</td></tr>
<tr><td><em>freundlich</em> — привітний</td><td><em>unfreundlich</em> — непривітний</td></tr>
<tr><td><em>ledig</em> — неодружений</td><td><em>verheiratet</em> — одружений</td></tr>
</tbody></table>`,
    },
  ],
  exercises: [
    { type: 'gap', q: 'Das ist Anna und das ist ___ Bruder.', answers: ['ihr'],
      explain: 'Анна — «вона», тому ihr. Bruder — чоловічий рід у Nominativ → без закінчення.' },
    { type: 'gap', q: 'Das ist Max und das ist ___ Schwester.', answers: ['seine'],
      explain: 'Макс — «він» → sein; Schwester — жіночий рід → seine.' },
    { type: 'choice', q: 'Ich liebe ___ Vater sehr.', options: ['mein', 'meine', 'meinen', 'meinem'], answer: 2,
      explain: 'lieben + Akkusativ, der Vater → meinen Vater.' },
    { type: 'choice', q: 'Wie heißt ___ Mutter?', options: ['dein', 'deine', 'deinen', 'deiner'], answer: 1 },
    { type: 'gap', q: 'Wir haben ___ Wohnung in Wien. ___ Wohnung ist klein.', answers: ['eine', 'Unsere'],
      explain: 'die Wohnung → unsere.' },
    { type: 'choice', q: '___ Name, bitte? (ввічливо)', options: ['Dein', 'Ihre', 'Ihr', 'Euer'], answer: 2,
      explain: 'Ввічливе Ihr з великої літери; der Name — чоловічий рід → Ihr Name.' },
    { type: 'choice', q: 'Ich bleibe zu Hause, ___ ich bin krank.',
      options: ['weil', 'denn', 'dass', 'aber'], answer: 1,
      explain: 'denn = бо, і після нього звичайний порядок слів. weil — це вже A2.' },
    { type: 'choice', q: 'Das ist nicht mein Bruder, ___ mein Freund.',
      options: ['aber', 'oder', 'sondern', 'und'], answer: 2,
      explain: 'Після заперечення протиставлення — це sondern.' },
    { type: 'order', q: 'Складіть речення.', words: ['Meine', 'Eltern', 'wohnen', 'in', 'Lwiw'],
      answer: 'Meine Eltern wohnen in Lwiw' },
    { type: 'order', q: 'З’єднайте два речення.', words: ['Ich', 'habe', 'einen', 'Bruder', 'aber', 'ich', 'habe', 'keine', 'Schwester'],
      answer: 'Ich habe einen Bruder aber ich habe keine Schwester' },
    { type: 'match', q: 'Доберіть переклад.',
      pairs: [['die Geschwister', 'брати й сестри'], ['die Großeltern', 'дідусь і бабуся'], ['verheiratet', 'одружений'], ['ledig', 'неодружений'], ['die Tochter', 'донька']] },
    { type: 'multi', q: 'Позначте речення без помилок.',
      options: ['Das ist meine Vater.', 'Ich habe einen Sohn.', 'Anna und ihr Mann sind nett.', 'Wie alt ist deinen Bruder?', 'Unsere Kinder sind klein.'],
      answers: [1, 2, 4],
      explain: 'Правильно: mein Vater (чол. рід) і Wie alt ist dein Bruder? (Nominativ після ist).' },
    { type: 'gap', q: 'Meine Schwester ist 22 Jahre ___ und ___ ledig.', answers: ['alt', 'ist'] },
    { type: 'truefalse', q: 'Після сполучника <span class="de-inline">aber</span> дієслово йде в кінець речення.', answer: false,
      explain: 'aber, denn, und, sondern, oder не змінюють порядок слів.' },
  ],

  listening: [
    {
      exam: 'Goethe A1 · Hören Teil 2',
      title: 'Ein Foto von der Familie',
      instruction: 'Дмитро показує подрузі сімейне фото.',
      lines: [
        { speaker: 'Lisa', de: 'Oh, ist das deine Familie? Wer ist das hier?', uk: 'О, це твоя родина? А хто це тут?' },
        { speaker: 'Dmytro', de: 'Das sind meine Eltern. Mein Vater heißt Wolodymyr, meine Mutter Halyna.', uk: 'Це мої батьки. Мого батька звати Володимир, маму — Галина.' },
        { speaker: 'Lisa', de: 'Und die junge Frau links?', uk: 'А молода жінка ліворуч?' },
        { speaker: 'Dmytro', de: 'Das ist meine Schwester Sofia. Sie ist neunzehn und studiert in Kyjiw.', uk: 'Це моя сестра Софія. Їй дев’ятнадцять, вона навчається в Києві.' },
        { speaker: 'Lisa', de: 'Hast du auch einen Bruder?', uk: 'А брат у тебе є?' },
        { speaker: 'Dmytro', de: 'Nein, ich habe keinen Bruder. Nur eine Schwester.', uk: 'Ні, брата немає. Лише сестра.' },
        { speaker: 'Lisa', de: 'Und der Mann mit dem Hund?', uk: 'А чоловік із собакою?' },
        { speaker: 'Dmytro', de: 'Das ist mein Opa. Er ist schon achtzig, aber sehr lustig!', uk: 'Це мій дідусь. Йому вже вісімдесят, але він дуже веселий!' },
      ],
      tasks: [
        { type: 'gap', q: 'Dmytros Schwester heißt ___.', answers: ['Sofia'] },
        { type: 'choice', q: 'Wie alt ist die Schwester?', options: ['17', '18', '19', '20'], answer: 2 },
        { type: 'truefalse', q: 'Dmytro hat einen Bruder.', answer: false },
        { type: 'choice', q: 'Wie ist der Opa?', options: ['streng', 'ruhig', 'lustig', 'unfreundlich'], answer: 2 },
      ],
    },
    {
      exam: 'ÖSD A1 · Hören',
      title: 'Kurze Vorstellung: Familie Berger',
      instruction: 'Жінка розповідає про свою родину.',
      lines: [
        { de: 'Ich heiße Julia Berger und ich bin fünfundvierzig Jahre alt.', uk: 'Мене звати Юлія Берґер, мені сорок п’ять років.' },
        { de: 'Ich bin verheiratet. Mein Mann heißt Stefan und ist Lehrer.', uk: 'Я заміжня. Мого чоловіка звати Штефан, він учитель.' },
        { de: 'Wir haben zwei Kinder: einen Sohn und eine Tochter.', uk: 'Ми маємо двох дітей: сина й доньку.' },
        { de: 'Unser Sohn Felix ist zwölf, unsere Tochter Mia ist acht.', uk: 'Наш син Фелікс — дванадцять, наша донька Мія — вісім.' },
        { de: 'Meine Eltern wohnen auch in Salzburg. Wir sehen sie oft.', uk: 'Мої батьки теж живуть у Зальцбурзі. Ми часто їх бачимо.' },
      ],
      tasks: [
        { type: 'gap', q: 'Julia ist ___ Jahre alt.', answers: ['45|fünfundvierzig|fuenfundvierzig'] },
        { type: 'choice', q: 'Was ist ihr Mann von Beruf?', options: ['Arzt', 'Lehrer', 'Ingenieur', 'Koch'], answer: 1 },
        { type: 'gap', q: 'Der Sohn heißt ___ und ist ___ Jahre alt.', answers: ['Felix', '12|zwölf|zwoelf'] },
        { type: 'truefalse', q: 'Julias Eltern wohnen in Wien.', answer: false, explain: 'Вони живуть у Зальцбурзі.' },
      ],
    },
  ],

  writing: [
    {
      exam: 'Goethe A1 · Schreiben Teil 2',
      title: 'Brief an eine Brieffreundin: Ihre Familie',
      situation: 'Ваша подруга з листування запитала про вашу родину. Напишіть їй відповідь. <strong>35–45 слів</strong>.',
      points: ['Wie viele Personen sind in Ihrer Familie?', 'Wer ist wer (Beruf, Alter)?', 'Wie sind sie? (Charakter)', 'Eine Frage über ihre Familie'],
      minWords: 35,
      phrases: [
        { de: 'Meine Familie ist (nicht) groß.', uk: 'Моя родина (не)велика.' },
        { de: 'Wir sind zu viert.', uk: 'Нас четверо.' },
        { de: 'Mein Vater ist … von Beruf.', uk: 'Мій батько за професією …' },
        { de: 'Meine Mutter ist sehr freundlich.', uk: 'Моя мама дуже привітна.' },
        { de: 'Ich habe einen Bruder, aber keine Schwester.', uk: 'Я маю брата, але не маю сестри.' },
        { de: 'Und wie ist deine Familie?', uk: 'А яка твоя родина?' },
      ],
      checklist: [
        'Присвійні артиклі узгоджені з родом іменника (mein Vater, meine Mutter)?',
        'Ви правильно обрали sein / ihr залежно від власника?',
        'Після und, aber, denn, oder порядок слів не змінився?',
        'Прикметники після ist — без закінчень?',
        'Є запитання до адресатки?',
      ],
      model:
`Liebe Sara,

danke für deinen Brief! Jetzt erzähle ich dir von meiner Familie.
Wir sind zu viert: meine Eltern, mein Bruder und ich.
Mein Vater ist Ingenieur und meine Mutter arbeitet als Krankenschwester. Sie ist sehr freundlich und ruhig.
Mein Bruder Taras ist erst zehn Jahre alt und sehr lustig.
Und wie ist deine Familie? Hast du Geschwister?

Liebe Grüße
Olha`,
      modelUk: 'Переклад: Люба Саро, дякую за твій лист! Тепер розповім тобі про свою родину. Нас четверо: батьки, брат і я. Мій тато — інженер, а мама працює медсестрою. Вона дуже привітна й спокійна. Моєму братові Тарасу лише десять років, він дуже веселий. А яка твоя родина? У тебе є брати чи сестри? Сердечні вітання, Ольга.',
    },
  ],

  test: [
    { type: 'gap', q: 'Das ist Frau Meier und das ist ___ Sohn.', answers: ['ihr'] },
    { type: 'gap', q: 'Das ist Herr Meier und das ist ___ Tochter.', answers: ['seine'] },
    { type: 'choice', q: 'Ich besuche ___ Opa am Sonntag.', options: ['mein', 'meine', 'meinen', 'meiner'], answer: 2 },
    { type: 'choice', q: 'Wo wohnen ___ Eltern? (ти)', options: ['dein', 'deine', 'deinen', 'euer'], answer: 1 },
    { type: 'choice', q: '___ Kinder sind noch klein. (ми)', options: ['Unser', 'Unsere', 'Unseren', 'Euer'], answer: 1 },
    { type: 'choice', q: 'Ich komme nicht, ___ ich habe keine Zeit.',
      options: ['aber', 'denn', 'oder', 'sondern'], answer: 1 },
    { type: 'choice', q: 'Er ist nicht mein Bruder, ___ mein Cousin.',
      options: ['aber', 'und', 'sondern', 'denn'], answer: 2 },
    { type: 'gap', q: 'Meine Schwester ist verheiratet, ___ ich bin noch ledig.', answers: ['aber'] },
    { type: 'order', q: 'Складіть речення.', words: ['Mein', 'Bruder', 'hat', 'zwei', 'Kinder'],
      answer: 'Mein Bruder hat zwei Kinder' },
    { type: 'order', q: 'Складіть речення.', words: ['Ihre', 'Großeltern', 'wohnen', 'allein', 'in', 'Odessa'],
      answer: 'Ihre Großeltern wohnen allein in Odessa' },
    { type: 'match', q: 'Доберіть протилежне за значенням.',
      pairs: [['groß', 'klein'], ['alt', 'jung'], ['teuer', 'billig'], ['freundlich', 'unfreundlich'], ['ledig', 'verheiratet']] },
    { type: 'match', q: 'Доберіть переклад.',
      pairs: [['der Enkel', 'онук'], ['die Geschwister', 'брати й сестри'], ['geschieden', 'розлучений'], ['zusammen', 'разом']] },
    { type: 'multi', q: 'Позначте правильні форми.',
      options: ['meine Mutter', 'meinen Mutter', 'mein Kind', 'seine Vater', 'unsere Familie', 'euer Kinder'],
      answers: [0, 2, 4],
      explain: 'Правильно: meine Mutter, mein Kind, unsere Familie. Помилки: meinen Mutter, sein Vater, eure Kinder.' },
    { type: 'truefalse', q: 'Прикметник після дієслова sein не має закінчення: «Die Wohnung ist groß».', answer: true },
  ],
},

/* ══════════════════════════════════ МОДУЛЬ 5 ══════════════════════════════ */
{
  id: 'm5',
  title: 'Uhrzeit und trennbare Verben',
  titleUk: 'Час, розпорядок дня та дієслова з відокремлюваним префіксом',
  can: [
    'називати час офіційно й розмовно',
    'вживати прийменники часу um, am, im, von … bis',
    'будувати речення з дієсловами на кшталт aufstehen, einkaufen, anrufen',
    'описати свій звичайний день',
    'домовлятися про зустріч',
  ],

  grammar: [
    {
      title: '1. Котра година: два способи',
      html: `
<p>Німці мають <strong>офіційний</strong> (розклади, радіо, робота) і <strong>розмовний</strong> час.
Питання: <em>Wie spät ist es?</em> або <em>Wie viel Uhr ist es?</em></p>
<table>
<thead><tr><th>Цифри</th><th>Офіційно</th><th>У розмові</th></tr></thead>
<tbody>
<tr><td>8:00</td><td><em>acht Uhr</em></td><td><em>acht</em></td></tr>
<tr><td>8:15</td><td><em>acht Uhr fünfzehn</em></td><td><em>Viertel nach acht</em></td></tr>
<tr><td>8:30</td><td><em>acht Uhr dreißig</em></td><td><em><strong>halb neun</strong></em></td></tr>
<tr><td>8:45</td><td><em>acht Uhr fünfundvierzig</em></td><td><em>Viertel vor neun</em></td></tr>
<tr><td>8:10</td><td><em>acht Uhr zehn</em></td><td><em>zehn nach acht</em></td></tr>
<tr><td>8:50</td><td><em>acht Uhr fünfzig</em></td><td><em>zehn vor neun</em></td></tr>
<tr><td>20:30</td><td><em>zwanzig Uhr dreißig</em></td><td><em>halb neun (abends)</em></td></tr>
</tbody></table>
<div class="callout"><strong>Головна пастка для українців — halb.</strong> <em>halb neun</em> — це
<strong>8:30</strong>, а не 9:30! Німці рахують <em>половину до</em> наступної години, як і ми кажемо
«пів на дев’яту». Тобто <em>halb</em> + <strong>наступна</strong> година.</div>
<p><strong>Питання й відповідь про час події:</strong> <em>Um wie viel Uhr …?</em> — <em>Um halb acht.</em></p>`,
    },
    {
      title: '2. Прийменники часу',
      html: `
<table>
<thead><tr><th>Прийменник</th><th>Вживається з</th><th>Приклад</th></tr></thead>
<tbody>
<tr><td><strong>um</strong></td><td>точний час</td><td><em>um 8 Uhr, um halb neun</em></td></tr>
<tr><td><strong>am</strong></td><td>дні тижня, частини доби, дати</td><td><em>am Montag, am Abend, am 3. Mai</em></td></tr>
<tr><td><strong>im</strong></td><td>місяці, пори року</td><td><em>im Januar, im Sommer</em></td></tr>
<tr><td><strong>von … bis</strong></td><td>проміжок</td><td><em>von 9 bis 17 Uhr, von Montag bis Freitag</em></td></tr>
<tr><td><strong>ab</strong></td><td>починаючи з</td><td><em>ab 18 Uhr</em></td></tr>
<tr><td><strong>gegen</strong></td><td>приблизно</td><td><em>gegen 7 Uhr</em> — близько сьомої</td></tr>
</tbody></table>
<div class="callout callout--tip"><strong>Три винятки без прийменника:</strong>
<em>in der Nacht</em> (уночі), <em>heute / morgen / gestern</em> (сьогодні / завтра / вчора) і
<em>jeden Tag</em> (щодня) — тут прийменник не потрібен.</div>
<p><strong>Дні тижня (усі чоловічого роду):</strong> <em>der Montag, der Dienstag, der Mittwoch,
der Donnerstag, der Freitag, der Samstag</em> (в Австрії також <em>der Samstag</em>), <em>der Sonntag</em>.
«Щопонеділка» — <em>montags</em> (з малої літери і з -s).</p>`,
    },
    {
      title: '3. Дієслова з відокремлюваним префіксом',
      html: `
<p>Багато німецьких дієслів складаються з префікса й основи: <em><strong>auf</strong>stehen</em> (вставати),
<em><strong>ein</strong>kaufen</em> (робити покупки), <em><strong>an</strong>rufen</em> (телефонувати).
У реченні префікс <strong>відривається й іде в самий кінець</strong>.</p>
<table>
<thead><tr><th>Інфінітив</th><th>Речення</th></tr></thead>
<tbody>
<tr><td><em>aufstehen</em></td><td><em>Ich <strong>stehe</strong> um sechs Uhr <strong>auf</strong>.</em></td></tr>
<tr><td><em>einkaufen</em></td><td><em>Am Samstag <strong>kaufe</strong> ich <strong>ein</strong>.</em></td></tr>
<tr><td><em>anrufen</em></td><td><em><strong>Rufst</strong> du mich heute <strong>an</strong>?</em></td></tr>
<tr><td><em>fernsehen</em></td><td><em>Abends <strong>sieht</strong> er <strong>fern</strong>.</em></td></tr>
</tbody></table>
<p><strong>Найчастіші відокремлювані префікси:</strong> <em>an-, auf-, aus-, ein-, mit-, nach-, vor-, zu-,
zurück-, weg-, fern-, statt-, teil-</em>.</p>
<div class="callout"><strong>Як відрізнити?</strong> Відокремлювані префікси <strong>наголошені</strong>:
<em>ÁUFstehen</em>. Невідокремлювані (<em>be-, ge-, er-, ver-, zer-, ent-, emp-, miss-</em>) —
ненаголошені й залишаються на місці: <em>Ich <strong>verstehe</strong> das nicht.</em>,
<em>Ich <strong>bekomme</strong> einen Brief.</em></div>
<p><strong>Рамкова конструкція (Satzklammer).</strong> Змінена частина дієслова — на другому місці,
префікс — у кінці. Усе, що між ними, — «начинка»:</p>
<table>
<thead><tr><th>1</th><th>2 (дієслово)</th><th>середина</th><th>кінець (префікс)</th></tr></thead>
<tbody>
<tr><td><em>Ich</em></td><td><em>stehe</em></td><td><em>jeden Tag um halb sieben</em></td><td><em>auf.</em></td></tr>
<tr><td><em>Wann</em></td><td><em>rufst</em></td><td><em>du deine Mutter</em></td><td><em>an?</em></td></tr>
</tbody></table>`,
    },
    {
      title: '4. Порядок слів: час, спосіб, місце',
      html: `
<p>Коли в реченні кілька обставин, німці ставлять їх у порядку <strong>TE-KA-MO-LO</strong>:
<em>Te</em>mporal (коли) → <em>Ka</em>usal (чому) → <em>Mo</em>dal (як) → <em>Lo</em>kal (де/куди).</p>
<ul>
<li><em>Ich fahre <strong>am Montag</strong> (коли) <strong>mit dem Bus</strong> (як) <strong>nach Wien</strong> (куди).</em></li>
<li><em>Sie geht <strong>heute</strong> <strong>schnell</strong> <strong>nach Hause</strong>.</em></li>
</ul>
<p>Найпростіше правило для A1: <strong>час — раніше, місце — пізніше</strong>. Обставину часу можна також
винести на перше місце, тоді підмет стає після дієслова:
<em><strong>Am Montag</strong> fahre <strong>ich</strong> nach Wien.</em></p>`,
    },
  ],
  exercises: [
    { type: 'choice', q: 'Es ist <span class="de-inline">halb neun</span>. Котра це година?',
      options: ['9:30', '8:30', '9:00', '8:00'], answer: 1, audio: 'Es ist halb neun.',
      explain: 'halb + наступна година. halb neun = 8:30.' },
    { type: 'choice', q: 'Es ist <span class="de-inline">Viertel vor sieben</span>. Котра це година?',
      options: ['6:45', '7:15', '6:15', '7:45'], answer: 0, audio: 'Es ist Viertel vor sieben.' },
    { type: 'gap', q: '7:15 розмовно: Viertel ___ sieben.', answers: ['nach'] },
    { type: 'gap', q: '10:30 розмовно: ___ elf.', answers: ['halb'] },
    { type: 'gap', q: 'Der Kurs beginnt ___ 9 Uhr ___ Montag.', answers: ['um', 'am'],
      explain: 'um — точний час, am — день тижня.' },
    { type: 'gap', q: 'Ich habe ___ Sommer Urlaub, ___ August.', answers: ['im', 'im'] },
    { type: 'gap', q: 'Ich arbeite ___ Montag ___ Freitag.', answers: ['von', 'bis'] },
    { type: 'order', q: 'Складіть речення (aufstehen).', words: ['Ich', 'stehe', 'um', 'sechs', 'Uhr', 'auf'],
      answer: 'Ich stehe um sechs Uhr auf' },
    { type: 'order', q: 'Складіть речення (einkaufen).', words: ['Am', 'Samstag', 'kaufe', 'ich', 'im', 'Supermarkt', 'ein'],
      answer: 'Am Samstag kaufe ich im Supermarkt ein' },
    { type: 'order', q: 'Складіть запитання (anrufen).', words: ['Wann', 'rufst', 'du', 'mich', 'an', '?'],
      answer: 'Wann rufst du mich an ?|Wann rufst du mich an?' },
    { type: 'choice', q: 'Яке речення правильне?',
      options: ['Ich aufstehe um 7 Uhr.', 'Ich stehe auf um 7 Uhr.', 'Ich stehe um 7 Uhr auf.', 'Ich um 7 Uhr aufstehe.'],
      answer: 2, explain: 'Змінена частина — на другому місці, префікс — у самому кінці.' },
    { type: 'multi', q: 'У яких дієсловах префікс відокремлюється?',
      options: ['verstehen', 'aufstehen', 'bekommen', 'mitkommen', 'erzählen', 'fernsehen'],
      answers: [1, 3, 5],
      explain: 'be-, ge-, er-, ver-, zer-, ent-, emp-, miss- ніколи не відокремлюються.' },
    { type: 'gap', q: 'Der Film ___ um 20 Uhr ___. (anfangen)', answers: ['fängt', 'an'],
      explain: 'anfangen: a → ä в 3-й особі, префікс у кінець: Der Film fängt … an.' },
    { type: 'order', q: 'Розставте обставини правильно (час → як → куди).',
      words: ['Wir', 'fahren', 'morgen', 'mit', 'dem', 'Zug', 'nach', 'Salzburg'],
      answer: 'Wir fahren morgen mit dem Zug nach Salzburg' },
  ],

  listening: [
    {
      exam: 'Goethe A1 · Hören Teil 1',
      title: 'Eine Verabredung am Telefon',
      instruction: 'Двоє друзів домовляються про зустріч. Занотуйте день і час.',
      lines: [
        { speaker: 'Nina', de: 'Hallo Jonas! Hast du am Freitag Zeit?', uk: 'Привіт, Йонасе! Маєш час у п’ятницю?' },
        { speaker: 'Jonas', de: 'Am Freitag arbeite ich bis sieben. Und am Samstag?', uk: 'У п’ятницю я працюю до сьомої. А в суботу?' },
        { speaker: 'Nina', de: 'Samstag ist super. Wann treffen wir uns?', uk: 'Субота чудово. Коли зустрічаємось?' },
        { speaker: 'Jonas', de: 'Um halb vier vor dem Kino?', uk: 'О пів на четверту перед кінотеатром?' },
        { speaker: 'Nina', de: 'Halb vier ist zu früh. Geht auch Viertel nach fünf?', uk: 'Пів на четверту зарано. Може, о чверть по п’ятій?' },
        { speaker: 'Jonas', de: 'Gut, dann um Viertel nach fünf. Ich hole dich ab.', uk: 'Добре, тоді о чверть по п’ятій. Я заїду по тебе.' },
        { speaker: 'Nina', de: 'Perfekt. Bis Samstag!', uk: 'Чудово. До суботи!' },
      ],
      tasks: [
        { type: 'choice', q: 'An welchem Tag treffen sie sich?', options: ['Am Freitag', 'Am Samstag', 'Am Sonntag', 'Am Montag'], answer: 1 },
        { type: 'choice', q: 'Um wie viel Uhr treffen sie sich?', options: ['15:30', '16:15', '17:15', '19:00'], answer: 2,
          explain: 'Viertel nach fünf = 17:15.' },
        { type: 'truefalse', q: 'Jonas arbeitet am Freitag bis 19 Uhr.', answer: true },
        { type: 'gap', q: 'Jonas ___ Nina ab. (abholen)', answers: ['holt'] },
      ],
    },
    {
      exam: 'ÖSD A1 · Hören',
      title: 'Mein Tag',
      instruction: 'Чоловік розповідає про свій звичайний день.',
      lines: [
        { de: 'Ich stehe jeden Tag um Viertel vor sechs auf.', uk: 'Я щодня встаю за чверть до шостої.' },
        { de: 'Ich dusche, frühstücke und fahre um halb sieben zur Arbeit.', uk: 'Я приймаю душ, снідаю і о пів на сьому їду на роботу.' },
        { de: 'Meine Arbeit fängt um sieben an und hört um sechzehn Uhr auf.', uk: 'Робота починається о сьомій і закінчується о шістнадцятій.' },
        { de: 'Am Nachmittag kaufe ich ein oder gehe ins Fitnessstudio.', uk: 'По обіді я роблю покупки або йду в спортзал.' },
        { de: 'Am Abend sehe ich fern und rufe meine Mutter an.', uk: 'Увечері дивлюся телевізор і телефоную мамі.' },
        { de: 'Um halb elf gehe ich ins Bett.', uk: 'О пів на одинадцяту лягаю спати.' },
      ],
      tasks: [
        { type: 'choice', q: 'Wann steht er auf?', options: ['5:15', '5:45', '6:15', '6:30'], answer: 1 },
        { type: 'choice', q: 'Wann fängt die Arbeit an?', options: ['6:30', '7:00', '8:00', '16:00'], answer: 1 },
        { type: 'multi', q: 'Was macht er am Abend?', options: ['einkaufen', 'fernsehen', 'seine Mutter anrufen', 'ins Fitnessstudio gehen'], answers: [1, 2] },
        { type: 'gap', q: 'Er geht um ___ Uhr ins Bett. (цифрами)', answers: ['22.30|22:30|10.30|halb elf'] },
      ],
    },
  ],

  writing: [
    {
      exam: 'Goethe A1 · Schreiben Teil 2',
      title: 'SMS: eine Verabredung',
      situation: 'Ваш друг Markus запросив вас у кіно в суботу о 15:00, але ви тоді працюєте. Напишіть відповідь. <strong>30–40 слів</strong>.',
      points: ['Bedanken Sie sich für die Einladung.', 'Warum können Sie um 15 Uhr nicht?', 'Schlagen Sie eine andere Zeit vor.', 'Wo treffen Sie sich?'],
      minWords: 30,
      phrases: [
        { de: 'Vielen Dank für die Einladung!', uk: 'Дуже дякую за запрошення!' },
        { de: 'Leider kann ich um 15 Uhr nicht.', uk: 'На жаль, о 15:00 я не можу.' },
        { de: 'Ich arbeite bis 17 Uhr.', uk: 'Я працюю до 17:00.' },
        { de: 'Geht es auch um halb sieben?', uk: 'А о пів на сьому підійде?' },
        { de: 'Wir treffen uns vor dem Kino.', uk: 'Зустрінемось перед кінотеатром.' },
        { de: 'Bis Samstag!', uk: 'До суботи!' },
      ],
      checklist: [
        'Прийменники часу правильні (um для години, am для дня)?',
        'Дієслова з префіксом розірвані правильно (Ich hole dich ab)?',
        'Дієслово стоїть на другому місці, навіть коли речення починається з обставини?',
        'Ви відповіли на всі чотири пункти?',
      ],
      model:
`Hallo Markus,

vielen Dank für die Einladung ins Kino!
Leider kann ich am Samstag um 15 Uhr nicht, denn ich arbeite bis 17 Uhr.
Geht es auch um halb sieben? Dann habe ich Zeit.
Wir treffen uns vor dem Kino, und ich hole dich vorher ab, wenn du willst.

Bis Samstag!
Andrij`,
      modelUk: 'Переклад: Привіт, Маркусе! Дуже дякую за запрошення в кіно! На жаль, у суботу о 15:00 я не можу, бо працюю до 17:00. А о пів на сьому підійде? Тоді я маю час. Зустрінемось перед кінотеатром, і я заїду по тебе, якщо хочеш. До суботи! Андрій.',
    },
  ],

  test: [
    { type: 'choice', q: '<span class="de-inline">Halb sechs</span> — це…', options: ['5:30', '6:30', '6:00', '5:00'], answer: 0 },
    { type: 'choice', q: '<span class="de-inline">Viertel vor acht</span> — це…', options: ['7:45', '8:15', '7:15', '8:45'], answer: 0 },
    { type: 'gap', q: 'Der Zug kommt ___ 14:20 an.', answers: ['um'] },
    { type: 'gap', q: 'Wir haben ___ Winter viel Schnee.', answers: ['im'] },
    { type: 'gap', q: 'Ich habe ___ Dienstag einen Termin.', answers: ['am'] },
    { type: 'gap', q: 'Das Geschäft ist ___ 9 ___ 18 Uhr geöffnet.', answers: ['von', 'bis'] },
    { type: 'choice', q: 'Der Unterricht ___ um acht ___.',
      options: ['fangt … an', 'fängt … an', 'anfängt … —', 'fängt an … —'], answer: 1 },
    { type: 'order', q: 'Складіть речення.', words: ['Ich', 'rufe', 'dich', 'am', 'Abend', 'an'],
      answer: 'Ich rufe dich am Abend an' },
    { type: 'order', q: 'Складіть речення.', words: ['Am', 'Sonntag', 'stehe', 'ich', 'spät', 'auf'],
      answer: 'Am Sonntag stehe ich spät auf' },
    { type: 'order', q: 'Складіть речення (час → як → куди).',
      words: ['Sie', 'fährt', 'jeden', 'Tag', 'mit', 'dem', 'Bus', 'zur', 'Arbeit'],
      answer: 'Sie fährt jeden Tag mit dem Bus zur Arbeit' },
    { type: 'multi', q: 'Позначте дієслова з відокремлюваним префіксом.',
      options: ['abholen', 'verstehen', 'ausgehen', 'bezahlen', 'zurückkommen', 'erklären'],
      answers: [0, 2, 4] },
    { type: 'match', q: 'Доберіть переклад.',
      pairs: [['aufstehen', 'вставати'], ['einkaufen', 'робити покупки'], ['fernsehen', 'дивитися телевізор'], ['abholen', 'забирати когось'], ['pünktlich', 'вчасно']] },
    { type: 'truefalse', q: '«Halb zehn» німецькою означає 10:30.', answer: false,
      explain: 'halb zehn = 9:30.' },
    { type: 'choice', q: 'Яке речення правильне?',
      options: ['Ich fahre nach Wien am Montag.', 'Am Montag ich fahre nach Wien.', 'Ich fahre am Montag nach Wien.', 'Ich am Montag fahre nach Wien.'],
      answer: 2, explain: 'Час — перед місцем, дієслово — на другому місці.' },
  ],
},

];
