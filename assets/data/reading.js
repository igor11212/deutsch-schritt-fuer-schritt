/* Читання (Lesen) — окремий навик, по два тексти на рівень.
   Формати взяті зі структури Goethe-Zertifikat та ÖSD: оголошення й короткі
   листи на A1–A2, форуми й статті на B1–B2, аналітичний текст на C1. */

export const READING = {

/* ═══════════════════════════════════ A1 ═══════════════════════════════════ */
a1: [
  {
    exam: 'Goethe A1 · Lesen Teil 2',
    title: 'Kleinanzeigen',
    instruction: 'Прочитайте три оголошення й дайте відповіді. Слова під текстом допоможуть.',
    text: `
<p><strong>1. Zimmer frei</strong><br>
Helles Zimmer, 18 m², in ruhiger Wohnung. 320 Euro warm. Ab 1. April frei.
Nur für Studenten. Tel. 0176 / 22 45 90.</p>

<p><strong>2. Deutschkurs am Abend</strong><br>
Sprachschule Lingua sucht Teilnehmer für den Abendkurs A1.
Montag und Mittwoch, 18 bis 20 Uhr. Kursbeginn: 5. März.
Der Kurs kostet 180 Euro. Anmeldung im Büro, Zimmer 3.</p>

<p><strong>3. Fahrrad zu verkaufen</strong><br>
Damenfahrrad, blau, 3 Jahre alt, sehr guter Zustand. 95 Euro.
Nur Barzahlung, keine Lieferung. E-Mail: rad.mueller@web.de</p>`,
    glossary: [
      ['warm', 'з комунальними'], ['ab', 'з (певної дати)'], ['der Teilnehmer', 'учасник'],
      ['der Kursbeginn', 'початок курсу'], ['die Anmeldung', 'реєстрація'],
      ['der Zustand', 'стан'], ['die Barzahlung', 'оплата готівкою'], ['die Lieferung', 'доставка'],
    ],
    tasks: [
      { type: 'truefalse', q: 'Das Zimmer kostet 320 Euro ohne Nebenkosten.', answer: false,
        explain: '«320 Euro warm» означає, що комунальні вже включені.' },
      { type: 'choice', q: 'Wer darf das Zimmer mieten?',
        options: ['Nur Familien', 'Nur Studenten', 'Alle', 'Nur Rentner'], answer: 1 },
      { type: 'choice', q: 'Wann findet der Deutschkurs statt?',
        options: ['Montag und Mittwoch abends', 'Jeden Tag', 'Am Wochenende', 'Dienstag und Donnerstag'], answer: 0 },
      { type: 'gap', q: 'Der Kurs kostet ___ Euro.', answers: ['180|hundertachtzig'] },
      { type: 'truefalse', q: 'Das Fahrrad wird nach Hause geliefert.', answer: false,
        explain: '«keine Lieferung» — доставки немає.' },
      { type: 'choice', q: 'Sie haben nur eine Bankkarte. Können Sie das Fahrrad kaufen?',
        options: ['Ja, ohne Problem', 'Nein, nur Barzahlung', 'Ja, aber teurer', 'Nur am Wochenende'], answer: 1 },
    ],
  },
  {
    exam: 'ÖSD A1 · Lesen',
    title: 'E-Mail an eine Freundin',
    instruction: 'Оксана пише подрузі. Прочитайте лист і дайте відповіді.',
    text: `
<p>Liebe Marta,</p>
<p>wie geht es dir? Ich bin jetzt seit drei Wochen in Wien und wohne bei meiner Tante.
Die Stadt ist sehr schön, aber auch groß — am Anfang habe ich mich oft verlaufen.</p>
<p>Am Montag beginne ich meinen Deutschkurs. Er dauert vier Monate.
Danach möchte ich hier eine Arbeit als Köchin suchen.</p>
<p>Am Wochenende habe ich frei. Kommst du mich besuchen?
Der Zug von Graz nach Wien fährt jede Stunde und kostet nur 25 Euro.
Ruf mich bitte an oder schreib mir eine Nachricht!</p>
<p>Liebe Grüße<br>Oksana</p>`,
    glossary: [
      ['seit', 'уже (про час)'], ['die Tante', 'тітка'], ['sich verlaufen', 'заблукати'],
      ['dauern', 'тривати'], ['danach', 'після цього'], ['frei haben', 'бути вільним'],
      ['jede Stunde', 'щогодини'],
    ],
    tasks: [
      { type: 'gap', q: 'Oksana ist seit ___ Wochen in Wien.', answers: ['drei|3'] },
      { type: 'choice', q: 'Bei wem wohnt sie?',
        options: ['Bei einer Freundin', 'Bei ihrer Tante', 'Im Studentenheim', 'Allein'], answer: 1 },
      { type: 'truefalse', q: 'Der Deutschkurs dauert ein Jahr.', answer: false,
        explain: '«Er dauert vier Monate» — чотири місяці.' },
      { type: 'choice', q: 'Was möchte Oksana nach dem Kurs machen?',
        options: ['Nach Graz ziehen', 'Als Köchin arbeiten', 'Studieren', 'Zurückfahren'], answer: 1 },
      { type: 'gap', q: 'Die Zugfahrt von Graz kostet ___ Euro.', answers: ['25|fünfundzwanzig|fuenfundzwanzig'] },
      { type: 'choice', q: 'Was soll Marta machen?',
        options: ['Nach Graz fahren', 'Oksana anrufen oder schreiben', 'Einen Kurs suchen', 'Nichts'], answer: 1 },
      { type: 'multi', q: 'Was steht im Brief?',
        options: ['Oksana wohnt bei ihrer Tante.', 'Sie hat schon Arbeit.', 'Der Kurs beginnt am Montag.', 'Am Wochenende hat sie frei.', 'Sie fährt nach Graz.'],
        answers: [0, 2, 3],
        explain: 'Роботу вона ще тільки хоче шукати, і в Ґрац не їде — це Марта могла б приїхати.' },
    ],
  },
  {
    exam: 'Goethe A1 · Lesen Teil 3',
    title: 'Schilder und Hinweise',
    instruction: 'Табличок буде п’ять. Для кожної ситуації вирішіть, чи твердження правильне.',
    text: `
<p><strong>A — an der Ladentür</strong><br>
Öffnungszeiten: Mo–Fr 8–19 Uhr, Sa 8–14 Uhr. Sonntag geschlossen.</p>

<p><strong>B — im Bus</strong><br>
Bitte hinten einsteigen. Fahrkarten beim Fahrer nur mit Kleingeld.</p>

<p><strong>C — im Park</strong><br>
Hunde bitte an der Leine führen. Radfahren verboten.</p>

<p><strong>D — im Hausflur</strong><br>
Aufzug außer Betrieb. Bitte benutzen Sie die Treppe.</p>

<p><strong>E — in der Bibliothek</strong><br>
Bitte leise sprechen. Essen und Trinken nicht erlaubt.</p>`,
    glossary: [
      ['die Öffnungszeiten', 'години роботи'], ['geschlossen', 'зачинено'],
      ['einsteigen', 'заходити (в транспорт)'], ['das Kleingeld', 'дрібні гроші'],
      ['die Leine', 'повідець'], ['verboten', 'заборонено'],
      ['außer Betrieb', 'не працює'], ['die Treppe', 'сходи'],
      ['leise', 'тихо'], ['erlaubt', 'дозволено'],
    ],
    tasks: [
      { type: 'truefalse', q: 'Schild A: Am Sonntag kann man einkaufen.', answer: false,
        explain: '«Sonntag geschlossen» — у неділю зачинено.' },
      { type: 'choice', q: 'Schild A: Wann schließt der Laden am Samstag?',
        options: ['Um 8 Uhr', 'Um 14 Uhr', 'Um 19 Uhr', 'Er ist zu'], answer: 1 },
      { type: 'choice', q: 'Schild B: Sie haben nur eine Bankkarte. Können Sie beim Fahrer zahlen?',
        options: ['Ja', 'Nein, nur mit Kleingeld', 'Nur morgens', 'Nur mit Ausweis'], answer: 1 },
      { type: 'truefalse', q: 'Schild C: Im Park darf man Rad fahren.', answer: false },
      { type: 'gap', q: 'Schild C: Hunde muss man an der ___ führen.', answers: ['Leine'] },
      { type: 'choice', q: 'Schild D: Was sollen Sie tun?',
        options: ['Den Aufzug rufen', 'Die Treppe nehmen', 'Warten', 'Den Hausmeister anrufen'], answer: 1 },
      { type: 'multi', q: 'Schild E: Was ist in der Bibliothek nicht erlaubt?',
        options: ['laut sprechen', 'lesen', 'essen', 'trinken', 'schreiben'], answers: [0, 2, 3] },
    ],
  },
  {
    exam: 'ÖSD A1 · Lesen',
    title: 'Vier kurze Nachrichten',
    instruction: 'Прочитайте повідомлення й доберіть, хто про що пише.',
    text: `
<p><strong>1. Papa:</strong> Ich hole dich um 17 Uhr von der Schule ab. Warte bitte am Tor.</p>
<p><strong>2. Lisa:</strong> Kommst du morgen mit ins Schwimmbad? Es kostet nur 4 Euro.</p>
<p><strong>3. Dr. Klein:</strong> Ihr Termin am Mittwoch um 9 Uhr fällt leider aus. Bitte rufen Sie uns an.</p>
<p><strong>4. Oma:</strong> Der Kuchen steht im Kühlschrank. Guten Appetit, mein Schatz!</p>`,
    glossary: [
      ['abholen', 'забирати (когось)'], ['das Tor', 'ворота'],
      ['das Schwimmbad', 'басейн'], ['ausfallen', 'скасовуватися'],
      ['der Kühlschrank', 'холодильник'], ['der Schatz', 'скарб; лагідне звертання'],
    ],
    tasks: [
      { type: 'match', q: 'Хто про що пише?',
        pairs: [
          ['Papa', 'holt um 17 Uhr ab'],
          ['Lisa', 'lädt ins Schwimmbad ein'],
          ['Dr. Klein', 'sagt den Termin ab'],
          ['Oma', 'hat Kuchen gemacht'],
        ], speak: false },
      { type: 'gap', q: 'Papa kommt um ___ Uhr.', answers: ['17|siebzehn'] },
      { type: 'gap', q: 'Das Schwimmbad kostet ___ Euro.', answers: ['4|vier'] },
      { type: 'choice', q: 'Was müssen Sie bei Nachricht 3 tun?',
        options: ['Am Mittwoch kommen', 'Die Praxis anrufen', 'Nichts', 'Eine E-Mail schreiben'], answer: 1 },
      { type: 'truefalse', q: 'Der Kuchen steht auf dem Tisch.', answer: false,
        explain: '«im Kühlschrank» — у холодильнику.' },
      { type: 'choice', q: 'Wo sollen Sie auf Papa warten?',
        options: ['Vor der Schule am Tor', 'Zu Hause', 'Am Schwimmbad', 'Bei Oma'], answer: 0 },
    ],
  },
],

/* ═══════════════════════════════════ A2 ═══════════════════════════════════ */
a2: [
  {
    exam: 'Goethe A2 · Lesen Teil 1',
    title: 'Blogeintrag: Mein Umzug nach Hamburg',
    instruction: 'Прочитайте запис у блозі й дайте відповіді.',
    text: `
<p>Vor zwei Monaten bin ich von München nach Hamburg gezogen, weil ich hier eine neue Stelle
bekommen habe. Der Umzug war anstrengend: Ich hatte viel zu viele Bücher und musste am Ende
die Hälfte verschenken.</p>
<p>Am Anfang habe ich Hamburg nicht gemocht. Es hat fast jeden Tag geregnet und ich kannte
niemanden. Aber nach drei Wochen habe ich in einem Sportverein neue Leute kennengelernt,
und seitdem gefällt mir die Stadt immer besser.</p>
<p>Was mir am meisten fehlt, sind die Berge. Dafür habe ich jetzt das Meer fast vor der Tür.
Wenn ich Zeit habe, fahre ich mit dem Rad an die Elbe und schaue den Schiffen zu.
Trotzdem besuche ich meine Familie in Bayern mindestens einmal im Monat.</p>`,
    glossary: [
      ['der Umzug', 'переїзд'], ['die Stelle', 'посада, робоче місце'], ['anstrengend', 'виснажливий'],
      ['verschenken', 'роздати'], ['der Sportverein', 'спортивний клуб'],
      ['kennenlernen', 'познайомитися'], ['seitdem', 'відтоді'], ['fehlen', 'бракувати'],
      ['zuschauen', 'спостерігати'], ['mindestens', 'щонайменше'],
    ],
    tasks: [
      { type: 'choice', q: 'Warum ist der Autor nach Hamburg gezogen?',
        options: ['Wegen der Familie', 'Wegen einer neuen Stelle', 'Wegen des Wetters', 'Wegen des Studiums'], answer: 1 },
      { type: 'truefalse', q: 'Der Umzug war einfach.', answer: false,
        explain: '«Der Umzug war anstrengend» — виснажливий.' },
      { type: 'choice', q: 'Wo hat er neue Leute kennengelernt?',
        options: ['Bei der Arbeit', 'Im Sportverein', 'In der Nachbarschaft', 'Im Deutschkurs'], answer: 1 },
      { type: 'gap', q: 'Am meisten fehlen ihm die ___.', answers: ['Berge'] },
      { type: 'choice', q: 'Wie oft besucht er seine Familie?',
        options: ['Jede Woche', 'Einmal im Monat', 'Einmal im Jahr', 'Nie'], answer: 1 },
      { type: 'truefalse', q: 'Heute gefällt ihm Hamburg besser als am Anfang.', answer: true },
    ],
  },
  {
    exam: 'ÖSD A2 · Lesen',
    title: 'Hinweise im Wohnhaus',
    instruction: 'Оголошення в під’їзді. Що дозволено, а що ні?',
    text: `
<p><strong>An alle Bewohner!</strong></p>
<p>Ab Montag, dem 3. Juni, wird das Treppenhaus renoviert. Die Arbeiten dauern etwa
zwei Wochen. In dieser Zeit bitten wir Sie, keine Fahrräder und Kinderwagen im
Treppenhaus abzustellen. Nutzen Sie bitte den Fahrradkeller.</p>
<p>Der Aufzug funktioniert während der Renovierung nur bis 16 Uhr. Danach benutzen
Sie bitte die Treppe.</p>
<p>Die Mülltonnen stehen ab sofort im Hinterhof, nicht mehr vor dem Haus.
Bitte trennen Sie den Müll: Papier, Plastik, Glas und Restmüll.</p>
<p>Bei Fragen wenden Sie sich an die Hausverwaltung, Frau Berger, Tel. 030 / 55 12 08.</p>`,
    glossary: [
      ['der Bewohner', 'мешканець'], ['das Treppenhaus', 'сходова клітка'], ['abstellen', 'ставити, лишати'],
      ['der Kinderwagen', 'дитячий візок'], ['der Aufzug', 'ліфт'], ['die Mülltonne', 'сміттєвий бак'],
      ['der Hinterhof', 'задній двір'], ['trennen', 'сортувати'], ['die Hausverwaltung', 'управління будинку'],
    ],
    tasks: [
      { type: 'gap', q: 'Die Renovierung beginnt am ___. Juni.', answers: ['3|dritten'] },
      { type: 'choice', q: 'Wo sollen Fahrräder stehen?',
        options: ['Im Treppenhaus', 'Im Fahrradkeller', 'Vor dem Haus', 'Im Hinterhof'], answer: 1 },
      { type: 'choice', q: 'Bis wann funktioniert der Aufzug?',
        options: ['Bis 14 Uhr', 'Bis 16 Uhr', 'Bis 18 Uhr', 'Gar nicht'], answer: 1 },
      { type: 'truefalse', q: 'Die Mülltonnen stehen weiterhin vor dem Haus.', answer: false },
      { type: 'multi', q: 'Wie soll der Müll getrennt werden?',
        options: ['Papier', 'Plastik', 'Glas', 'Restmüll', 'Metall'], answers: [0, 1, 2, 3] },
    ],
  },
],

/* ═══════════════════════════════════ B1 ═══════════════════════════════════ */
b1: [
  {
    exam: 'Goethe B1 · Lesen Teil 2',
    title: 'Forum: Ehrenamt — lohnt sich das?',
    instruction: 'Три коментарі у форумі. Хто що вважає?',
    text: `
<p><strong>Nadine, 29:</strong> Ich arbeite seit vier Jahren ehrenamtlich in einer Bücherei für
Kinder. Klar bekomme ich kein Geld dafür, aber ich habe dadurch gelernt, vor Gruppen zu sprechen —
das hat mir später im Bewerbungsgespräch enorm geholfen. Wer sagt, Ehrenamt bringe nichts,
hat es nie ausprobiert.</p>

<p><strong>Tobias, 41:</strong> Ich sehe das kritischer. Ehrenamt ist wichtig, keine Frage.
Aber immer öfter übernehmen Freiwillige Aufgaben, für die eigentlich der Staat bezahlen müsste.
Solange das so bleibt, spart die Politik auf Kosten von Leuten, die helfen wollen.</p>

<p><strong>Elif, 35:</strong> Bei mir war es eine Frage der Zeit. Mit zwei kleinen Kindern und
Vollzeitstelle war regelmäßiges Engagement unmöglich. Jetzt helfe ich zweimal im Jahr bei einem
Festival — das ist wenig, aber besser als nichts. Man muss sich nicht schlecht fühlen,
wenn man nicht jede Woche Zeit hat.</p>`,
    glossary: [
      ['das Ehrenamt', 'волонтерство'], ['ehrenamtlich', 'на громадських засадах'],
      ['die Bücherei', 'бібліотека'], ['das Bewerbungsgespräch', 'співбесіда'],
      ['der Freiwillige', 'волонтер'], ['übernehmen', 'брати на себе'],
      ['auf Kosten von', 'коштом'], ['das Engagement', 'залученість, участь'],
      ['die Vollzeitstelle', 'робота на повну ставку'],
    ],
    tasks: [
      { type: 'choice', q: 'Welchen Vorteil nennt Nadine?',
        options: ['Sie verdient gut.', 'Sie hat gelernt, vor Gruppen zu sprechen.', 'Sie hat viel Freizeit.', 'Sie bekam eine Stelle in der Bücherei.'],
        answer: 1 },
      { type: 'choice', q: 'Was kritisiert Tobias?',
        options: ['Dass Ehrenamt unwichtig ist', 'Dass der Staat Aufgaben auf Freiwillige abwälzt', 'Dass zu wenige Menschen helfen', 'Dass Freiwillige schlecht arbeiten'],
        answer: 1 },
      { type: 'truefalse', q: 'Elif engagiert sich jede Woche.', answer: false,
        explain: '«zweimal im Jahr bei einem Festival».' },
      { type: 'match', q: 'Хто це сказав?',
        pairs: [
          ['Ehrenamt half mir beruflich.', 'Nadine'],
          ['Der Staat spart auf Kosten der Helfer.', 'Tobias'],
          ['Wenig Zeit ist kein Grund für schlechtes Gewissen.', 'Elif'],
        ], speak: false },
      { type: 'gap', q: 'Nadine arbeitet seit ___ Jahren in der Bücherei.', answers: ['vier|4'] },
      { type: 'choice', q: 'Was bedeutet «Wer sagt, Ehrenamt bringe nichts, hat es nie ausprobiert»?',
        options: ['Nadine stimmt der Kritik zu.', 'Nadine hält solche Kritik für unerfahren.', 'Nadine will aufhören.', 'Nadine sucht neue Helfer.'],
        answer: 1 },
    ],
  },
  {
    exam: 'ÖSD B1 · Lesen',
    title: 'Zeitungsartikel: Weniger Autos in der Innenstadt',
    instruction: 'Стаття про зміни в центрі міста.',
    text: `
<p>Seit Januar dürfen Autos die Innenstadt von Freiburg nur noch zwischen 6 und 11 Uhr befahren.
Danach ist der Bereich für den Lieferverkehr gesperrt. Die Stadt reagiert damit auf jahrelange
Beschwerden von Anwohnern über Lärm und schlechte Luft.</p>
<p>Die ersten Zahlen sind deutlich: Der Autoverkehr ist um 38 Prozent zurückgegangen, während
die Zahl der Radfahrer um fast ein Viertel gestiegen ist. Messungen zeigen außerdem eine
spürbare Verbesserung der Luftqualität.</p>
<p>Nicht alle sind zufrieden. Der Einzelhandel klagt über Umsatzverluste, vor allem Geschäfte,
die schwere Waren verkaufen. «Wer eine Waschmaschine kauft, kommt nicht mit dem Fahrrad»,
sagt ein Händler. Die Stadt hat deshalb angekündigt, die Regelung im Herbst zu überprüfen
und gegebenenfalls anzupassen.</p>`,
    glossary: [
      ['befahren', 'їздити по'], ['der Lieferverkehr', 'вантажний транспорт'], ['gesperrt', 'перекритий'],
      ['die Beschwerde', 'скарга'], ['der Anwohner', 'мешканець району'], ['zurückgehen', 'скорочуватися'],
      ['spürbar', 'відчутний'], ['der Einzelhandel', 'роздрібна торгівля'],
      ['der Umsatzverlust', 'втрата обороту'], ['überprüfen', 'переглянути'], ['anpassen', 'скоригувати'],
    ],
    tasks: [
      { type: 'choice', q: 'Wann dürfen Autos in die Innenstadt?',
        options: ['Gar nicht', 'Zwischen 6 und 11 Uhr', 'Nur abends', 'Nur am Wochenende'], answer: 1 },
      { type: 'gap', q: 'Der Autoverkehr ist um ___ Prozent zurückgegangen.', answers: ['38|achtunddreißig|achtunddreissig'] },
      { type: 'truefalse', q: 'Die Zahl der Radfahrer ist gesunken.', answer: false,
        explain: 'Вона зросла майже на чверть.' },
      { type: 'choice', q: 'Warum klagt der Einzelhandel?',
        options: ['Wegen höherer Mieten', 'Wegen Umsatzverlusten', 'Wegen des Lärms', 'Wegen der Luftqualität'], answer: 1 },
      { type: 'choice', q: 'Was plant die Stadt für den Herbst?',
        options: ['Die Regelung abschaffen', 'Die Regelung überprüfen', 'Die Zeiten verlängern', 'Nichts'], answer: 1 },
    ],
  },
],

/* ═══════════════════════════════════ B2 ═══════════════════════════════════ */
b2: [
  {
    exam: 'Goethe B2 · Lesen Teil 3',
    title: 'Kommentar: Homeoffice und die Frage der Gerechtigkeit',
    instruction: 'Аналітичний коментар. Стежте за позицією автора, а не лише за фактами.',
    text: `
<p>Die Debatte über das Homeoffice wird meist als Streit zwischen Arbeitgebern und
Beschäftigten geführt. Dabei verläuft die eigentliche Bruchlinie woanders: zwischen jenen,
die überhaupt von zu Hause arbeiten können, und jenen, die es nicht können.</p>

<p>Wer im Büro sitzt, spart Wegzeit, gewinnt Flexibilität und kann Beruf und Familie leichter
verbinden. Wer dagegen im Krankenhaus, im Supermarkt oder auf dem Bau arbeitet, hat diese
Wahl nie gehabt — und zwar unabhängig davon, wie die Firmenpolitik aussieht. Wenn Homeoffice
also als Errungenschaft gefeiert wird, betrifft diese Errungenschaft nur eine Minderheit.</p>

<p>Das heißt nicht, dass man das Modell abschaffen sollte. Es heißt lediglich, dass die
Diskussion ehrlicher geführt werden müsste. Statt über die Zahl der Bürotage zu streiten,
wäre die Frage sinnvoller, wie sich Flexibilität auch dort schaffen lässt, wo Anwesenheit
unverzichtbar ist: durch planbare Schichten, verlässliche Vertretungen und echte Mitsprache
bei der Dienstplanung.</p>

<p>Solange darüber geschwiegen wird, bleibt die Homeoffice-Debatte das, was sie derzeit ist:
ein Privileg, das sich für einen Fortschritt hält.</p>`,
    glossary: [
      ['die Bruchlinie', 'лінія розлому'], ['die Errungenschaft', 'здобуток'],
      ['die Minderheit', 'меншість'], ['abschaffen', 'скасувати'], ['lediglich', 'лише'],
      ['die Anwesenheit', 'присутність'], ['unverzichtbar', 'незамінний'],
      ['die Schicht', 'зміна (робоча)'], ['die Vertretung', 'заміна, підміна'],
      ['die Mitsprache', 'право голосу'], ['der Fortschritt', 'поступ'],
    ],
    tasks: [
      { type: 'choice', q: 'Wo verläuft laut Autor die eigentliche Trennlinie?',
        options: ['Zwischen Arbeitgebern und Beschäftigten', 'Zwischen denen, die im Homeoffice arbeiten können, und denen, die es nicht können', 'Zwischen Jung und Alt', 'Zwischen Stadt und Land'],
        answer: 1 },
      { type: 'truefalse', q: 'Der Autor fordert, das Homeoffice abzuschaffen.', answer: false,
        explain: '«Das heißt nicht, dass man das Modell abschaffen sollte.»' },
      { type: 'multi', q: 'Welche Lösungen schlägt der Autor für Präsenzberufe vor?',
        options: ['planbare Schichten', 'höhere Löhne', 'verlässliche Vertretungen', 'Mitsprache bei der Dienstplanung', 'mehr Bürotage'],
        answers: [0, 2, 3] },
      { type: 'choice', q: 'Wie ist der letzte Satz zu verstehen?',
        options: ['Als Lob des Homeoffice', 'Als ironische Kritik an der Debatte', 'Als neutrale Feststellung', 'Als Aufruf zum Streik'],
        answer: 1,
        explain: '«ein Privileg, das sich für einen Fortschritt hält» — привілей, який вважає себе поступом. Це іронія.' },
      { type: 'gap', q: 'Der Autor meint, die Diskussion müsse ___ geführt werden.', answers: ['ehrlicher'] },
    ],
  },
  {
    exam: 'ÖSD B2 · Lesen',
    title: 'Stellenanzeige und Anforderungen',
    instruction: 'Оголошення про роботу. Хто підходить, а хто ні?',
    text: `
<p><strong>Projektkoordinator/in (m/w/d) — Bereich Nachhaltigkeit</strong></p>
<p>Wir sind ein mittelständisches Unternehmen mit 240 Mitarbeitenden und suchen zum
nächstmöglichen Zeitpunkt eine Verstärkung für unser Nachhaltigkeitsteam.</p>
<p><strong>Ihre Aufgaben:</strong> Koordination interner Projekte, Erstellung von Berichten,
Zusammenarbeit mit externen Prüfstellen sowie Schulung von Kolleginnen und Kollegen.</p>
<p><strong>Ihr Profil:</strong> abgeschlossenes Studium, mindestens drei Jahre Berufserfahrung
im Projektmanagement, sehr gute Deutschkenntnisse (mindestens C1) und verhandlungssicheres
Englisch. Erfahrung im Bereich Umwelt ist von Vorteil, aber keine Voraussetzung.</p>
<p><strong>Wir bieten:</strong> 30 Urlaubstage, zwei Tage Homeoffice pro Woche, Jobticket
und eine jährliche Weiterbildungspauschale von 1.500 Euro.</p>
<p>Bewerbungen bitte ausschließlich über unser Онлайн-Portal bis zum 15. Mai.
Unterlagen per Post oder E-Mail können nicht berücksichtigt werden.</p>`,
    glossary: [
      ['die Nachhaltigkeit', 'сталий розвиток'], ['mittelständisch', 'середнього розміру'],
      ['die Verstärkung', 'підсилення команди'], ['die Erstellung', 'укладання, підготовка'],
      ['die Prüfstelle', 'перевірна установа'], ['die Schulung', 'навчання персоналу'],
      ['verhandlungssicher', 'на рівні ведення переговорів'], ['von Vorteil', 'перевагою'],
      ['die Voraussetzung', 'обов’язкова умова'], ['die Weiterbildungspauschale', 'бюджет на навчання'],
      ['berücksichtigen', 'брати до розгляду'],
    ],
    tasks: [
      { type: 'choice', q: 'Wie viel Berufserfahrung wird verlangt?',
        options: ['Keine', 'Mindestens ein Jahr', 'Mindestens drei Jahre', 'Mindestens fünf Jahre'], answer: 2 },
      { type: 'truefalse', q: 'Erfahrung im Umweltbereich ist Pflicht.', answer: false,
        explain: '«von Vorteil, aber keine Voraussetzung» — перевага, але не обов’язкова умова.' },
      { type: 'choice', q: 'Welches Sprachniveau im Deutschen wird gefordert?',
        options: ['B1', 'B2', 'C1', 'C2'], answer: 2 },
      { type: 'multi', q: 'Was bietet die Firma?',
        options: ['30 Urlaubstage', 'Firmenwagen', 'zwei Tage Homeoffice', 'Jobticket', 'Weiterbildungsbudget'],
        answers: [0, 2, 3, 4] },
      { type: 'choice', q: 'Sie schicken Ihre Unterlagen per E-Mail. Was passiert?',
        options: ['Sie werden geprüft.', 'Sie werden nicht berücksichtigt.', 'Sie werden weitergeleitet.', 'Sie kommen in die zweite Runde.'],
        answer: 1 },
      { type: 'gap', q: 'Bewerbungsschluss ist der ___. Mai.', answers: ['15|fünfzehnte|fuenfzehnte'] },
    ],
  },
],

/* ═══════════════════════════════════ C1 ═══════════════════════════════════ */
c1: [
  {
    exam: 'Goethe C1 · Lesen Teil 1',
    title: 'Sprachwandel: Verfall oder Anpassung?',
    instruction: 'Науково-популярний текст. Завдання перевіряють не факти, а розуміння аргументації.',
    text: `
<p>Kaum ein Thema erhitzt die Gemüter so verlässlich wie der angebliche Verfall der deutschen
Sprache. Regelmäßig erscheinen Bücher, die den Untergang des Konjunktivs beklagen oder
das Vordringen englischer Begriffe als kulturellen Substanzverlust deuten. Die Sprachwissenschaft
betrachtet solche Diagnosen mit Zurückhaltung — nicht, weil die beschriebenen Veränderungen
nicht stattfänden, sondern weil ihre Bewertung auf einer fragwürdigen Prämisse beruht.</p>

<p>Diese Prämisse lautet, es habe einmal einen sprachlichen Idealzustand gegeben, von dem aus
sich alles Weitere nur verschlechtern könne. Historisch lässt sich das nicht halten. Das
Deutsche des 18. Jahrhunderts, das heute als Muster gepflegter Sprache gilt, wurde von
Zeitgenossen ebenso heftig kritisiert wie heutige Jugendsprache. Was einer Generation als
Verrohung erscheint, ist der nächsten schlicht Standard.</p>

<p>Damit ist freilich nicht gesagt, jede Veränderung sei folgenlos. Wenn grammatische
Unterscheidungen verschwinden, geht Ausdruckspotenzial verloren — der Rückgang des Genitivs
etwa erschwert bestimmte Präzisierungen. Entscheidend ist jedoch, dass Sprachen solche Verluste
regelmäßig kompensieren, indem sie an anderer Stelle neue Mittel ausbilden. Der Befund lautet
also nicht Verfall, sondern Umbau bei gleichbleibender Leistungsfähigkeit.</p>

<p>Wer dennoch für sprachliche Sorgfalt plädiert, hat gute Gründe — nur sind es ästhetische
und soziale, keine sprachwissenschaftlichen.</p>`,
    glossary: [
      ['die Gemüter erhitzen', 'розпалювати пристрасті'], ['der Verfall', 'занепад'],
      ['beklagen', 'нарікати на'], ['das Vordringen', 'проникнення'], ['der Substanzverlust', 'втрата сутності'],
      ['die Zurückhaltung', 'стриманість'], ['fragwürdig', 'сумнівний'], ['die Prämisse', 'засновок'],
      ['der Idealzustand', 'ідеальний стан'], ['der Zeitgenosse', 'сучасник'], ['die Verrohung', 'здичавіння'],
      ['folgenlos', 'без наслідків'], ['kompensieren', 'компенсувати'], ['der Befund', 'висновок дослідження'],
      ['die Sorgfalt', 'ретельність'], ['plädieren für', 'виступати за'],
    ],
    tasks: [
      { type: 'choice', q: 'Warum betrachtet die Sprachwissenschaft Verfallsdiagnosen zurückhaltend?',
        options: [
          'Weil die Veränderungen gar nicht stattfinden',
          'Weil die Bewertung auf einer fragwürdigen Annahme beruht',
          'Weil Sprachwissenschaftler Englisch bevorzugen',
          'Weil solche Bücher unwissenschaftlich geschrieben sind',
        ], answer: 1 },
      { type: 'choice', q: 'Welche Funktion hat der Hinweis auf das 18. Jahrhundert?',
        options: [
          'Er zeigt, dass frühere Sprachstufen besser waren.',
          'Er widerlegt die Annahme eines verlorenen Idealzustands.',
          'Er belegt den Rückgang des Genitivs.',
          'Er kritisiert die heutige Jugendsprache.',
        ], answer: 1,
        explain: 'Автор наводить його як контрприклад: те, що сьогодні вважають взірцем, сучасники теж лаяли.' },
      { type: 'truefalse', q: 'Der Autor behauptet, sprachliche Veränderungen hätten nie Folgen.', answer: false,
        explain: '«Damit ist freilich nicht gesagt, jede Veränderung sei folgenlos.»' },
      { type: 'choice', q: 'Was meint der Autor mit «Umbau bei gleichbleibender Leistungsfähigkeit»?',
        options: [
          'Die Sprache wird einfacher.',
          'Verluste an einer Stelle werden an anderer ausgeglichen.',
          'Die Sprache verliert an Ausdruckskraft.',
          'Grammatik spielt keine Rolle mehr.',
        ], answer: 1 },
      { type: 'choice', q: 'Wie bewertet der Autor das Plädoyer für sprachliche Sorgfalt?',
        options: [
          'Als wissenschaftlich begründet',
          'Als legitim, aber nicht sprachwissenschaftlich begründbar',
          'Als überflüssig',
          'Als gefährlich',
        ], answer: 1 },
      { type: 'gap', q: 'Als Beispiel für verlorenes Ausdruckspotenzial nennt der Text den Rückgang des ___.',
        answers: ['Genitivs|Genitiv'] },
    ],
  },
  {
    exam: 'ÖSD C1 · Lesen',
    title: 'Zwei Stellungnahmen zur Vier-Tage-Woche',
    instruction: 'Дві позиції на одну тему. Порівняйте аргументацію.',
    text: `
<p><strong>Position A — Wirtschaftsforscherin Dr. Halm</strong><br>
Die Vier-Tage-Woche wird häufig als Allheilmittel präsentiert, doch die vorliegenden Studien
sind methodisch schwach. Fast alle beruhen auf Selbstauskünften teilnehmender Unternehmen,
die naturgemäß ein Interesse an positiven Ergebnissen haben. Hinzu kommt, dass ausschließlich
Betriebe teilnahmen, die sich das Modell leisten konnten. Aus solchen Daten lassen sich keine
allgemeinen Schlüsse ziehen — schon gar nicht für Branchen mit knapper Personaldecke.</p>

<p><strong>Position B — Gewerkschaftssekretär Ruiz</strong><br>
Frau Halm hat recht, dass die Datenlage dünn ist. Nur folgt daraus nicht, was sie nahelegt.
Dass belastbare Studien fehlen, spricht nicht gegen das Modell, sondern für mehr Erprobung.
Bemerkenswert ist ohnehin, dass dieselbe methodische Strenge selten eingefordert wird, wenn
es um Arbeitszeitverlängerungen geht. Wer Beweise verlangt, sollte sie von beiden Seiten
verlangen.</p>`,
    glossary: [
      ['das Allheilmittel', 'панацея'], ['vorliegend', 'наявний'], ['die Selbstauskunft', 'самозвіт'],
      ['naturgemäß', 'природно'], ['der Betrieb', 'підприємство'], ['sich leisten', 'дозволити собі'],
      ['die Personaldecke', 'кадровий резерв'], ['die Datenlage', 'стан даних'],
      ['nahelegen', 'наштовхувати на думку'], ['belastbar', 'надійний'], ['die Erprobung', 'випробування'],
      ['einfordern', 'вимагати'],
    ],
    tasks: [
      { type: 'choice', q: 'Was kritisiert Dr. Halm an den Studien?',
        options: ['Sie sind zu alt.', 'Sie beruhen auf Selbstauskünften interessierter Unternehmen.', 'Sie wurden im Ausland durchgeführt.', 'Sie sind zu klein.'],
        answer: 1 },
      { type: 'truefalse', q: 'Ruiz bestreitet, dass die Datenlage dünn ist.', answer: false,
        explain: '«Frau Halm hat recht, dass die Datenlage dünn ist.» Він визнає це й будує заперечення на іншому.' },
      { type: 'choice', q: 'Worin besteht Ruiz’ Hauptargument?',
        options: [
          'Fehlende Beweise sprechen für mehr Erprobung, nicht gegen das Modell.',
          'Die Studien sind eigentlich gut.',
          'Unternehmen lügen grundsätzlich.',
          'Arbeitszeit ist unwichtig.',
        ], answer: 0 },
      { type: 'choice', q: 'Welchen rhetorischen Vorwurf erhebt Ruiz zusätzlich?',
        options: [
          'Dass Halm die Zahlen fälscht',
          'Dass methodische Strenge einseitig eingefordert wird',
          'Dass Halm für Unternehmen arbeitet',
          'Dass die Gewerkschaften ignoriert werden',
        ], answer: 1 },
      { type: 'multi', q: 'Was trifft auf Position A zu?',
        options: [
          'Sie bezweifelt die Übertragbarkeit der Ergebnisse.',
          'Sie nennt eine Selektionsverzerrung bei den Teilnehmern.',
          'Sie lehnt jede Arbeitszeitverkürzung grundsätzlich ab.',
          'Sie verweist auf Branchen mit wenig Personal.',
        ], answers: [0, 1, 3],
        explain: 'Halm не відкидає скорочення робочого часу як таке — вона критикує якість доказів.' },
    ],
  },
],

};
