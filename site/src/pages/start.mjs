/**
 * Start page. Direction "The product performs" (design pass 19.10.2026): the hero is a working piece of the app that
 * answers the question in the name, "Wann ist Feierabend?" (start time + contract hours + the legal break, § 4 ArbZG).
 * Then the app screens, one day in three states, what it counts, the laws, privacy, prices, questions and a first step.
 * Prices: Till's decision of 18.10.2026 (30-day trial, Plus 49,99 € once, Jahrespass 14,99 €, no subscription), planned.
 * Devices and countries (21.10.2026): iPhone, iPad (sidebar), Apple Watch (status, clock, complications); DE/AT/CH, UK (WTR 1998),
 * EU baseline, "Welt" pack with own values and no law hints.
 * Example people and places are fictional (Mira Berg, Praxis am Markt, Café Mika, Hotel am See).
 * No <form> elements: the CSP has form-action 'none', the mail links are plain mailto links that start.js fills in.
 */
import { horizon } from '../art.mjs';
import { href, ORG } from '../layout.mjs';
import { MAIL, SITE, ROUTES, APP_STORE_URL } from '../config.mjs';
import { feierabendClock } from '../feierabend.mjs';
import { magazinTeaser } from './magazin.mjs';
import { todayScreen, monthScreen, calendarScreen, overviewScreen, proofSheet, hintFragment, devicesFragment, clockStages, holidaysFragment, leaveFragment, jobsFragment, countriesFragment } from '../screens.mjs';

const C = {
  de: {
    title: 'Fieravend: Arbeitszeit erfassen per App, ohne Abo',
    desc: 'Dein Betrieb hat keine Zeiterfassung? Fieravend ist dein eigener Stundenzettel fürs iPhone: Überstunden, Urlaub, Feiertage, Pausen nach ArbZG und ein PDF-Nachweis. Kein Konto, kein Abo.',
    h1: ['Dein Stundenzettel', 'fürs iPhone.'],
    lede: 'Für alle, deren Betrieb keine Zeiterfassung hat. Du stempelst morgens ein und abends aus. Fieravend rechnet Plus, Minus, Urlaub und Feiertage, und am Monatsende liegt dein Nachweis da.',
    cta: 'Bescheid sagen, wenn es da ist',
    ctaNote: 'Kommt bald in den App Store. Der Knopf öffnet dein Mailprogramm.',
    calc: {
      title: 'Wann ist heute Feierabend?', start: 'Angefangen um', target: 'Soll heute',
      targets: [['6:00', '6:00 Std.'], ['7:48', '7:48 Std.'], ['8:00', '8:00 Std.'], ['8:24', '8:24 Std.']],
      outLabel: 'Feierabend um', pause: 'mit 30 Minuten Pause nach § 4 ArbZG',
    },
    rightsH: 'Für dich, nicht für deinen Chef.',
    rightsP: 'Deine Stunden gehören dir. Kein Konto, kein Server, niemand schaut mit. Fieravend zählt für dich, ruhig und ohne Rot, und sagt dir, was das Gesetz dazu vorsieht.',
    rights: [
      ['Jede Stunde zählt. Auch die nach Feierabend.', 'Mails um 21 Uhr sind Arbeitszeit, egal wo du sitzt. Trag sie nach, Fieravend markiert sie ehrlich als nachgetragen.', 'mag-laptop', 'Abends am Laptop: Ist das Arbeitszeit?'],
      ['Früher gehen, wenn die Woche passt.', 'Fieravend zeigt dir die Woche, nicht nur den Tag. Ob du heute früher gehen kannst, regelt dein Vertrag. Die Rechnung dafür hast du hier.', 'mag-frueher', 'Wann die Woche trotzdem passt'],
      ['Festhalten, wer es wollte.', 'Für bezahlte Überstunden zählt auch, wer sie veranlasst hat. Eine kurze Notiz am Block reicht, am selben Tag.', 'mag-angeordnet', 'Wer hat die Überstunden angeordnet?'],
      ['Einmal zahlen, nichts verlieren.', 'Kein Abo. Nach dem Test bleibt die Basis ohne Kauf, und ein Backup deiner Daten geht immer.', 'preise', 'Preise und Basis'],
    ],
    rightsNote: 'Fieravend gibt Hinweise und ist keine Rechtsberatung. Die Preise sind geplant, bis zum Start kann sich etwas ändern.',
    magH: 'Aus dem Magazin.',
    magMore: 'Alle Artikel',
    whyH: 'Ohne Zettel verschenkst du Stunden.',
    whyP: 'Früher hing die Stempeluhr im Flur, und die Karte zeigte schwarz auf weiß, wann du gekommen und gegangen bist. In vielen Betrieben gibt es heute gar nichts mehr. Zehn Minuten früher da, zwanzig länger geblieben, die Pause wieder kurz. Das fällt niemandem auf, auch dir nicht. Fieravend ist deine Stempelkarte in der Tasche.',
    whyLink: 'Wenn dein Betrieb kein System hat',
    photo1: 'Stempeluhr der Firma Jundes im Eingang der IG Metall in Hannover.',
    photo2: 'Stempeluhr mit Kartenfächern für Kommen und Gehen, in einem Museum.',
    showH: 'So sieht Fieravend aus.',
    show: [
      ['Stempeln', 'Der Himmel folgt deinem Tag. Oben läuft deine Zeit auf die Sekunde, darunter dein Feierabend und ein Balken bis zum Soll. Dann dein Tag als Band und die Woche auf einen Blick.'],
      ['Monat', 'Jeder Tag mit seinen Zeiten als Band und der Differenz. Feiertage und Urlaub stehen schon drin.'],
      ['Kalender', 'Der Monat als Farbfeld: grün für Plus, Abendrot für Minus, Sonne für Urlaub, Fahne für Feiertag.'],
      ['Übersicht', 'Dein Überstundenkonto wie ein Kontostand über zwölf Monate, dein Urlaub als Punkte.'],
      ['Nachweis', 'Der Stundenzettel als PDF. Nachgetragenes ist markiert, die Prüfsumme steht unten.'],
    ],
    showHint: 'Zum Blättern wischen oder mit den Pfeiltasten.',
    dayH: 'Ein Tag mit Fieravend.',
    day: [
      ['Morgens ein Tipp.', 'Einstempeln auf dem iPhone, vom Sperrbildschirm oder an der Apple Watch. Ab dann läuft deine Zeit auf die Sekunde mit, auch wenn die App zu ist.'],
      ['Mittags die Pause.', 'Pause drücken, weiter drücken. Der Balken zeigt, wie weit du beim Soll bist. Fehlt eine Pause, sagt Fieravend es dir ruhig, ohne Paragrafen.'],
      ['Abends Feierabend.', 'Ausstempeln, und die Sonne geht unter. Du siehst sofort, wie lange du heute gearbeitet hast.'],
    ],
    featH: 'Was Fieravend für dich rechnet.',
    feat: [
      ['Feiertage für dein Bundesland', 'Fieravend kennt die Feiertage aller 16 Bundesländer, der 9 österreichischen Bundesländer, der 26 Kantone und die Bank Holidays im Vereinigten Königreich.', 'An einem Feiertag gibt es kein Minus.', 'holidays'],
      ['Urlaub, wie er wirklich zählt', 'Wochenenden und Feiertage kosten keinen Urlaubstag. Resturlaub und Übertrag rechnet Fieravend mit.', 'Droht Resturlaub zu verfallen, sagt Fieravend es dir rechtzeitig.', 'leave'],
      ['Ruhige Hinweise zum Gesetz', 'Pause zu kurz, Tag zu lang, Ruhezeit zu knapp? Fieravend sagt es dir, ohne Alarm und ohne Rot.', 'Hinweise ersetzen keine Rechtsberatung.', 'hint'],
      ['Zwei Jobs, ein Tag', 'Jeder Job hat sein eigenes Konto. Für Pausen und Ruhezeit zählt Fieravend alles zusammen, so wie das Gesetz.', 'Auf dem Stundenzettel für einen Job steht nur dieser Job.', 'jobs'],
      ['Ein Nachweis, dem man glaubt', 'Jeder Tag mit Beginn, Ende, Pause und Arbeitszeit. Was du später nachgetragen hast, ist gekennzeichnet.', 'Mit der Prüfsumme lässt sich zeigen, dass ein Ausdruck zu den Daten in deiner App passt.', 'proof'],
      ['Das Wort, das bei dir gilt', 'Überstunden in Deutschland, Zeitausgleich in Österreich, Überzeit in der Schweiz. Das Land hängt am Arbeitsort.', 'Im Vereinigten Königreich gelten die Working Time Regulations 1998, in anderen EU-Ländern die Grundregeln der EU. Überall sonst trägst du Soll, Feiertage und Pause selbst ein.', 'countries'],
      ['Am Handgelenk und auf dem iPad', 'Auf der Apple Watch siehst du den Stand von heute und stempelst ein, machst Pause oder stempelst aus. Dazu gibt es Komplikationen fürs Zifferblatt.', 'Auf dem iPad hat Fieravend eine eigene Ansicht mit Seitenleiste, quer und hochkant, auch mit Stage Manager. Deine Daten bleiben auf dem iPhone, die Uhr schickt nur deinen Tipp.', 'devices'],
    ],
    lawsIntro: 'Gerechnet nach',
    laws: ['ArbZG', 'BUrlG', 'JArbSchG', 'AZG (AT)', 'ArG (CH)', 'WTR 1998 (UK)', 'RL 2003/88/EG'],
    privH: 'Deine Zeit gehört dir.',
    privP: 'Kein Konto, kein Server, kein Tracking, keine Werbung. Deine Einträge liegen auf deinem iPhone und in deiner eigenen iCloud. Auf Wunsch sperrst du die App mit Face ID. Ein Backup deiner Daten geht immer, auch ohne Kauf.',
    privLink: 'Wie wir mit Daten umgehen',
    photo3: 'Sonnenuntergang über dem Wattenmeer bei Utersum auf Föhr.',
    priceH: 'Kein Abo. Einmal kaufen.',
    priceNote: 'So ist es geplant. Fieravend ist noch nicht im App Store, bis zum Start können sich Preise ändern.',
    priceLink: 'Alle Preise und was enthalten ist',
    plans: [['30 Tage', '0 €', 'zum Testen'], ['Basis', '0 €', 'nach dem Test'], ['Jahrespass', '14,99 €', 'ein Kalenderjahr'], ['Plus', '49,99 €', 'einmalig, für immer']],
    priceRows: [
      ['Stempeln und Backup', 'ja', 'ja', 'ja', 'ja'],
      ['Einträge ansehen', 'alle', 'letzte 7 Tage', 'alle', 'alle'],
      ['Jobs', 'beliebig viele', 'einer', 'beliebig viele', 'beliebig viele'],
      ['Stundenzettel als PDF und CSV', 'ja', 'nein', 'ja', 'ja'],
      ['Gesetzes-Updates', 'ja', 'nein', 'für das Jahr', 'für immer'],
      ['Verlängert sich von selbst', 'nein', 'nein', 'nein', 'nein'],
    ],
    plusLaunch: 'Der Jahrespass gilt ein Kalenderjahr, ab Oktober für das nächste',
    faqH: 'Kurz gefragt.',
    faq: [
      ['Darf ich das, wenn mein Chef es nicht verlangt?', 'Ja. Du schreibst deine eigene Arbeitszeit auf, für dich. Niemand muss zustimmen.'],
      ['Sieht mein Arbeitgeber, was ich eintrage?', 'Nein. Nur du siehst deine Einträge. Teilen tust du nur, was du selbst als PDF oder CSV verschickst.'],
      ['Brauche ich ein Konto?', 'Nein. Du lädst die App und fängst an. Mit iCloud sind deine Daten auch auf dem iPad.'],
      ['Und wenn ich vergesse zu stempeln?', 'Dann trägst du die Zeit nach. Auf Wunsch erinnert Fieravend dich morgens ans Einstempeln und abends, wenn du noch eingestempelt bist.'],
      ['Ich komme von myTime oder Excel. Muss ich neu anfangen?', 'Nein. Du nimmst deine Einträge als CSV mit und trägst deinen Überstunden- und Urlaubsstand als Startwert ein.'],
      ['Ich arbeite auch am Wochenende oder an Feiertagen. Rechnet Fieravend das richtig?', 'Ja. Ist der Tag für dich sonst frei, ist jede Stunde Plus. Für Schichtarbeit gibt es das Modell „Wechselnde Tage (Dienstplan)“, und fehlt dir ein Ersatzruhetag, sagt Fieravend es dir.'],
      ['Gilt das auch in Österreich und der Schweiz?', 'Ja. Feiertage, Pausen und Ruhezeiten rechnet Fieravend nach dem Gesetz des Landes, in dem dein Job ist. Das gilt auch fürs Vereinigte Königreich. In anderen EU-Ländern gelten die Grundregeln der EU, überall sonst deine eigenen Werte.'],
      ['Gibt es Fieravend für die Apple Watch und das iPad?', 'Ja. An der Uhr siehst du den Stand von heute und stempelst ein, machst Pause oder stempelst aus. Dazu gibt es Komplikationen fürs Zifferblatt. Die Daten bleiben auf dem iPhone. Auf dem iPad hat Fieravend eine eigene Ansicht mit Seitenleiste.'],
      ['Gibt es Fieravend für Android?', 'Noch nicht. Fieravend gibt es für iPhone, iPad und Apple Watch. Schreib uns eine Mail mit dem Betreff „Android“, dann sagen wir Bescheid.'],
    ],
    faqMore: 'Alle Fragen und Antworten',
    endH: ['Leg deinen', 'ersten Job an.'],
    endP: 'So fängt Fieravend an. Trag deinen Job ein, und wir schreiben dir, sobald du die App laden kannst. Deine Adresse nutzen wir nur dafür und löschen sie danach.',
    dlg: { title: 'Neuer Job', name: 'Name des Jobs', nameVal: 'Praxis am Markt', where: 'Arbeitsort', places: ['Deutschland', 'Österreich', 'Schweiz'], hours: 'Soll pro Woche', hoursVal: '39', unit: 'Stunden', btn: 'Bescheid sagen', note: 'Öffnet dein Mailprogramm mit diesen Angaben.' },
    mailSub: 'Fieravend: Bitte Bescheid sagen (Startseite)',
    mailBody: 'Hallo,\n\nbitte sagt mir Bescheid, wenn Fieravend im App Store ist.\n',
  },
  en: {
    title: 'Fieravend: track your working hours on iPhone, no subscription',
    desc: 'Your workplace does not track time? Fieravend is your own time sheet for the iPhone: overtime, leave, public holidays, legal breaks and a PDF record. No account, no subscription.',
    h1: ['Your time sheet', 'for the iPhone.'],
    lede: 'For everyone whose workplace does not track time. Clock in in the morning, clock out in the evening. Fieravend works out plus, minus, leave and public holidays, and at the end of the month your record is ready.',
    cta: 'Tell me when it is out',
    ctaNote: 'Coming to the App Store soon. The button opens your mail app.',
    calc: {
      title: 'When do I finish today?', start: 'Started at', target: 'Hours today',
      targets: [['6:00', '6:00 h'], ['7:48', '7:48 h'], ['8:00', '8:00 h'], ['8:24', '8:24 h']],
      outLabel: 'You finish at', pause: 'with a 30 minute break (§ 4 ArbZG, Germany)',
    },
    rightsH: 'For you, not for your boss.',
    rightsP: 'Your hours belong to you. No account, no server, nobody looking over your shoulder. Fieravend counts for you, calmly and without red, and tells you what the law says about it.',
    rights: [
      ['Every hour counts. Even after work.', 'Emails at 9 pm are working time, wherever you sit. Add them later, and Fieravend honestly marks them as added later.', 'mag-laptop', 'Laptop in the evening: does it count?'],
      ['Leave early when your week adds up.', 'Fieravend shows you the week, not just the day. Whether you can leave early today is up to your contract. The numbers for it are right here.', 'mag-frueher', 'When your week still adds up'],
      ['Note who wanted it.', 'For paid overtime, it also matters who caused it. A short note on the block is enough, on the same day.', 'mag-angeordnet', 'Who ordered the overtime?'],
      ['Pay once, lose nothing.', 'No subscription. After the trial the basic version stays without buying anything, and backing up your data always works.', 'preise', 'Pricing and Basic'],
    ],
    rightsNote: 'Fieravend gives hints and is not legal advice. Prices are planned and may change before launch.',
    magH: 'From the magazine.',
    magMore: 'All articles',
    whyH: 'Without a record you give hours away.',
    whyP: 'There used to be a time clock in the hallway, and the card showed in black and white when you came and went. Many workplaces have nothing at all now. Ten minutes early, twenty minutes late, a short break again. Nobody notices, not even you. Fieravend is the time card in your pocket.',
    whyLink: 'When your workplace has no system',
    photo1: 'Jundes time clock in the entrance of IG Metall in Hanover.',
    photo2: 'Time clock with card racks for clocking in and out, in a museum.',
    showH: 'What Fieravend looks like.',
    show: [
      ['Clock', 'The sky follows your day. At the top your time runs to the second, below it when you are done and a bar towards your target. Then your day as a band and the week at a glance.'],
      ['Month', 'Every day with its times as a band and the difference. Public holidays and leave are already in.'],
      ['Calendar', 'The month as a colour field: green for plus, evening red for minus, a sun for leave, a flag for holidays.'],
      ['Overview', 'Your overtime balance like a bank balance over twelve months, your leave as dots.'],
      ['Record', 'The time sheet as a PDF. Anything added later is marked, the checksum is at the bottom.'],
    ],
    showHint: 'Swipe or use the arrow keys to browse.',
    dayH: 'A day with Fieravend.',
    day: [
      ['One tap in the morning.', 'Clock in on the iPhone, from the lock screen or on your Apple Watch. From then on your time runs to the second, even when the app is closed.'],
      ['A break at midday.', 'Tap break, tap resume. The bar shows how far you are towards your target. If a break is missing, Fieravend tells you calmly, without legal jargon.'],
      ['Done in the evening.', 'Clock out and the sun goes down. You see right away how long you worked today.'],
    ],
    featH: 'What Fieravend works out for you.',
    feat: [
      ['Public holidays for your state', 'Fieravend knows the holidays of all 16 German states, the 9 Austrian states, the 26 Swiss cantons and the UK bank holidays.', 'A public holiday never puts you in the minus.', 'holidays'],
      ['Leave as it really counts', 'Weekends and public holidays do not cost a day of leave. Days left and carry-over are counted too.', 'If leave is about to expire, Fieravend tells you in time.', 'leave'],
      ['Calm hints about the law', 'Break too short, day too long, rest too short? Fieravend tells you, without alarms and without red.', 'Hints are not legal advice.', 'hint'],
      ['Two jobs, one day', 'Each job has its own balance. For breaks and rest time Fieravend adds everything up, like the law does.', 'The time sheet for one job shows only that job.', 'jobs'],
      ['A record people believe', 'Every day with start, end, break and hours. Anything you added later is marked.', 'The checksum lets you show that a printout matches the data in your app.', 'proof'],
      ['The word that applies to you', 'Überstunden in Germany, Zeitausgleich in Austria, Überzeit in Switzerland. The country comes from where you work.', 'In the UK the Working Time Regulations 1998 apply, in other EU countries the basic EU rules. Anywhere else you enter your target, holidays and break yourself.', 'countries'],
      ['On your wrist and on the iPad', 'On the Apple Watch you see today’s status and clock in, take a break or clock out. There are complications for the watch face too.', 'On the iPad Fieravend has its own layout with a sidebar, in landscape and portrait, with Stage Manager too. Your data stays on the iPhone, the watch only sends your tap.', 'devices'],
    ],
    lawsIntro: 'Worked out under',
    laws: ['ArbZG', 'BUrlG', 'JArbSchG', 'AZG (AT)', 'ArG (CH)', 'WTR 1998 (UK)', 'Directive 2003/88/EC'],
    privH: 'Your time belongs to you.',
    privP: 'No account, no server, no tracking, no ads. Your entries live on your iPhone and in your own iCloud. If you like, you lock the app with Face ID. Backing up your data always works, even without buying anything.',
    privLink: 'How we handle data',
    photo3: 'Sunset over the Wadden Sea near Utersum on Föhr.',
    priceH: 'No subscription. Buy once.',
    priceNote: 'This is the plan. Fieravend is not in the App Store yet, and prices may change before launch.',
    priceLink: 'All prices and what is included',
    plans: [['30 days', '€0', 'to try'], ['Basic', '€0', 'after the trial'], ['Year Pass', '€14.99', 'one calendar year'], ['Plus', '€49.99', 'once, for good']],
    priceRows: [
      ['Clock in and backup', 'yes', 'yes', 'yes', 'yes'],
      ['See your entries', 'all', 'last 7 days', 'all', 'all'],
      ['Jobs', 'any number', 'one', 'any number', 'any number'],
      ['Time sheet as PDF and CSV', 'yes', 'no', 'yes', 'yes'],
      ['Law updates', 'yes', 'no', 'for the year', 'for good'],
      ['Renews by itself', 'no', 'no', 'no', 'no'],
    ],
    plusLaunch: 'The Year Pass covers one calendar year, from October the next one',
    faqH: 'Quick questions.',
    faq: [
      ['Am I allowed to do this if my boss does not ask?', 'Yes. You write down your own working time, for yourself. Nobody has to agree.'],
      ['Does my employer see what I enter?', 'No. Only you see your entries. You share only what you send yourself as PDF or CSV.'],
      ['Do I need an account?', 'No. You download the app and start. With iCloud your data is on your iPad too.'],
      ['What if I forget to clock in?', 'Then you add the time later. If you like, Fieravend reminds you to clock in in the morning and in the evening if you are still clocked in.'],
      ['I am coming from myTime or Excel. Do I start over?', 'No. You bring your entries along as CSV and enter your overtime and leave balance as a starting point.'],
      ['I also work weekends or public holidays. Does Fieravend count that correctly?', 'Yes. If the day would otherwise be off, every hour is plus. For shift work there is the “Changing days (rota)” model, and if you are owed a replacement rest day, Fieravend tells you.'],
      ['Does it work in Austria and Switzerland?', 'Yes. Public holidays, breaks and rest times follow the law of the country your job is in. That includes the UK. Other EU countries get the basic EU rules, anywhere else your own values.'],
      ['Is there an Apple Watch and iPad version?', 'Yes. On the watch you see today’s status and clock in, take a break or clock out. There are complications for the watch face too. The data stays on the iPhone. On the iPad Fieravend has its own layout with a sidebar.'],
      ['Is there an Android version?', 'Not yet. Fieravend is for iPhone, iPad and Apple Watch. Send us an email with the subject “Android” and we will let you know.'],
    ],
    faqMore: 'All questions and answers',
    endH: ['Add your', 'first job.'],
    endP: 'This is how Fieravend starts. Enter your job, and we will write to you as soon as you can download the app. We use your address only for that and delete it afterwards.',
    dlg: { title: 'New job', name: 'Job name', nameVal: 'Praxis am Markt', where: 'Place of work', places: ['Germany', 'Austria', 'Switzerland'], hours: 'Hours per week', hoursVal: '39', unit: 'hours', btn: 'Tell me when it is out', note: 'Opens your mail app with these details.' },
    mailSub: 'Fieravend: Please let me know (start page)',
    mailBody: 'Hello,\n\nplease let me know when Fieravend is in the App Store.\n',
  },
};

const arrow = '<svg class="arrow" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><line x1="4" y1="12" x2="19" y2="12"/><polyline points="13,6 19,12 13,18"/></svg>';
const mailto = (c) => APP_STORE_URL || __mail(c);
const __mail = (c) => `mailto:${MAIL}?subject=${encodeURIComponent(c.mailSub)}&amp;body=${encodeURIComponent(c.mailBody)}`;

export default function start(lang) {
  const c = C[lang];
  const screens = [todayScreen(lang), monthScreen(lang), calendarScreen(lang), overviewScreen(lang), proofSheet(lang)];
  const panels = screens.map((s, i) => `<li class="rail-item"><figure class="rail-fig">${s}<figcaption><b>${c.show[i][0]}</b><span>${c.show[i][1]}</span></figcaption></figure></li>`).join('');
  const steps = c.day.map(([h, p], i) => `<li class="day-step" data-step="${['in', 'pause', 'out'][i]}"><h3>${h}</h3><p>${p}</p></li>`).join('');
  const frag = { holidays: holidaysFragment, leave: leaveFragment, hint: hintFragment, jobs: jobsFragment, proof: (l) => proofSheet(l, { crop: true }), countries: countriesFragment, devices: devicesFragment };
  const feats = c.feat.map(([h, p, q, k]) => `<li class="feat reveal"><div class="feat-panel">${frag[k](lang)}</div><div class="feat-text"><h3>${h}</h3><p>${p}</p><p class="feat-more">${q}</p></div></li>`).join('');
  const laws = c.laws.map((l) => `<li>${l}</li>`).join('');
  const head = c.plans.map(([n, p, s], i) => `<th scope="col" class="${i === 3 ? 'is-rec' : ''}"><span class="pt-name">${n}</span> <span class="pt-price num">${p}</span> <span class="pt-per">${s}</span></th>`).join('');
  const rows = c.priceRows.map(([k, ...v]) => `<tr><th scope="row">${k}</th>${v.map((x, i) => `<td class="${i === 3 ? 'is-rec' : ''}">${x}</td>`).join('')}</tr>`).join('');
  const blocks = c.plans.map(([n, p, s], i) => `<li class="pp${i === 3 ? ' is-rec' : ''}"><h3 class="pp-h"><span>${n}</span> <span class="num">${p}</span></h3><p class="pt-per">${s}</p><dl>${c.priceRows.map(([k, ...v]) => `<div><dt>${k}</dt><dd>${v[i]}</dd></div>`).join('')}</dl></li>`).join('');
  const faq = c.faq.map(([q, a], i) => `<details class="tile" name="faq"${i === 0 ? ' open' : ''}><summary><span>${q}</span><span class="tile-x" aria-hidden="true"></span></summary><p>${a}</p></details>`).join('');
  const rights = c.rights.map(([h, p, k, l], i) => `<li class="rights-item${i === 0 || i === 3 ? ' is-key' : ''}"><h3>${h}</h3><p>${p}</p><p><a class="more" href="${href(k, lang)}">${l}${arrow}</a></p></li>`).join('');
  const d = c.dlg;
  const places = d.places.map((p, i) => `<label class="seg-o"><input type="radio" name="dlg-place" value="${p}"${i === 0 ? ' checked' : ''}><span>${p}</span></label>`).join('');
  const photo = (file, w, h, alt, cls = '') => `<picture class="${cls}"><source srcset="/assets/photos/${file}.webp" type="image/webp"><img src="/assets/photos/${file}.jpg" alt="${alt}" width="${w}" height="${h}" loading="lazy" decoding="async"></picture>`;

  const body = `
<section class="hero" aria-labelledby="h1">
  <div class="hero-dark">
    <div class="hero-copy">
      <h1 id="h1" class="mask"><span class="mask-l"><span>${c.h1[0]}</span></span> <span class="mask-l"><span>${c.h1[1]}</span></span></h1>
      <p class="hero-lede">${c.lede}</p>
      <p class="hero-act"><a class="btn btn-primary" href="${mailto(c)}">${APP_STORE_URL ? (lang === 'de' ? 'Im App Store laden' : 'Download on the App Store') : c.cta}</a></p>
      <p class="hero-note">${c.ctaNote}</p>
    </div>
    <div class="hero-art">${horizon()}</div>
  </div>
  <div class="hero-light"><div class="hero-tool">${feierabendClock(lang)}<p class="hero-tool-more"><a href="${href('feierabend', lang)}">${lang === 'de' ? 'Für Österreich, die Schweiz und mehr Stunden: Feierabend-Rechner' : 'For Austria, Switzerland and other hours: finish-time calculator'}</a></p></div></div>
</section>

<section class="why" aria-labelledby="why">
  <div class="wrap why-grid">
    <div class="why-text reveal">
      <h2 id="why">${c.whyH}</h2>
      <p>${c.whyP}</p>
      <p><a class="more" href="${href('kleinbetrieb', lang)}">${c.whyLink}${arrow}</a></p>
    </div>
    <figure class="why-a reveal">${photo('stempeluhr-hannover', 1200, 1172, c.photo1)}<figcaption>${c.photo1}</figcaption></figure>
    <figure class="why-b reveal">${photo('stempelkarten', 1000, 1330, c.photo2)}<figcaption>${c.photo2}</figcaption></figure>
  </div>
</section>

<section class="rights" aria-labelledby="rights">
  <div class="wrap">
    <div class="rights-head reveal"><h2 id="rights">${c.rightsH}</h2><p>${c.rightsP}</p></div>
    <ul class="rights-list">${rights}</ul>
    <p class="rights-small">${c.rightsNote}</p>
  </div>
</section>

<section class="show" aria-labelledby="show">
  <div class="wrap show-head"><h2 id="show">${c.showH}</h2><p class="show-hint">${c.showHint}</p></div>
  <ol class="rail" id="rail" tabindex="0" aria-labelledby="show">${panels}</ol>
</section>

<section class="day" aria-labelledby="day">
  <div class="wrap day-grid">
    <div class="day-text">
      <h2 id="day">${c.dayH}</h2>
      <ol class="day-steps">${steps}</ol>
    </div>
    <div class="day-stage" id="day-stage" data-state="out">${clockStages(lang)}</div>
  </div>
</section>

<section class="feats" aria-labelledby="feats">
  <div class="wrap">
    <h2 id="feats" class="reveal">${c.featH}</h2>
    <ul class="feat-list">${feats}</ul>
  </div>
</section>

<section class="laws" aria-labelledby="laws">
  <div class="wrap laws-row"><h2 id="laws">${c.lawsIntro}</h2><ul>${laws}</ul></div>
</section>

<section class="priv" aria-labelledby="priv">
  ${photo('watt-foehr', 1920, 1440, c.photo3, 'priv-photo')}
  <div class="wrap priv-in">
    <div class="priv-text reveal">
      <h2 id="priv">${c.privH}</h2>
      <p>${c.privP}</p>
      <p><a class="more" href="${href('datenschutz', lang)}">${c.privLink}${arrow}</a></p>
    </div>
  </div>
</section>

<section class="price" aria-labelledby="price">
  <div class="wrap">
    <h2 id="price" class="price-h">${c.priceH}</h2>
    <div class="pt-wrap">
      <table class="pt">
        <caption class="visually-hidden">${c.priceH}</caption>
        <thead><tr><td class="pt-corner"></td>${head}</tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
    <ul class="pp-list">${blocks}</ul>
    <div class="price-foot"><p><b>${c.plusLaunch}.</b> ${c.priceNote}</p><p><a class="more" href="${href('preise', lang)}">${c.priceLink}${arrow}</a></p></div>
  </div>
</section>

<section class="faqs" aria-labelledby="faqs">
  <div class="wrap faqs-grid">
    <div class="faqs-head"><h2 id="faqs">${c.faqH}</h2><p><a class="more" href="${href('fragen', lang)}">${c.faqMore}${arrow}</a></p></div>
    <div class="tiles">${faq}</div>
  </div>
</section>

<section class="mag-teaser" aria-labelledby="mag-t">
  <div class="wrap">
    <div class="mag-teaser-head"><h2 id="mag-t">${c.magH}</h2><p><a class="more" href="${href('magazin', lang)}">${c.magMore}${arrow}</a></p></div>
    ${magazinTeaser(lang, 3)}
  </div>
</section>

<section class="end" aria-labelledby="end">
  <div class="wrap end-grid">
    <div class="end-text">
      <h2 id="end">${c.endH[0]} <span class="nowrap">${c.endH[1]}</span></h2>
      <p>${c.endP}</p>
    </div>
    <div class="dlg" id="dlg" data-ui role="group" aria-labelledby="dlg-t" data-lang="${lang}" ${APP_STORE_URL ? '' : `data-mail="${MAIL}"`} data-sub="${encodeURIComponent(c.mailSub)}">
      <h3 class="dlg-title" id="dlg-t">${d.title}</h3>
      <p class="dlg-field"><label for="dlg-name">${d.name}</label><input id="dlg-name" type="text" value="${d.nameVal}" maxlength="60" autocomplete="off"></p>
      <fieldset class="dlg-field"><legend>${d.where}</legend><span class="seg">${places}</span></fieldset>
      <p class="dlg-field"><label for="dlg-h">${d.hours}</label><span class="dlg-unit"><input id="dlg-h" type="number" inputmode="decimal" min="1" max="60" step="0.5" value="${d.hoursVal}"><span>${d.unit}</span></span></p>
      <p class="dlg-act"><a class="btn btn-primary btn-block" id="dlg-go" href="${mailto(c)}">${d.btn}</a></p>
      <p class="dlg-note">${d.note}</p>
    </div>
  </div>
</section>`;
  const url = SITE + ROUTES.start[lang];
  const jsonld = [
    ORG,
    { '@type': 'WebSite', '@id': `${SITE}/#site`, name: 'Fieravend', url, inLanguage: lang, publisher: { '@id': ORG['@id'] } },
    { '@type': 'MobileApplication', '@id': `${SITE}/#app`, name: 'Fieravend', url, operatingSystem: lang === 'de' ? 'iOS 18, iPadOS 18 und watchOS 11 oder neuer' : 'iOS 18, iPadOS 18 and watchOS 11 or later', applicationCategory: 'BusinessApplication',
      inLanguage: ['de', 'en'], description: c.desc, publisher: { '@id': ORG['@id'] }, countriesSupported: ['DE', 'AT', 'CH', 'GB', 'EU'],
      featureList: c.feat.map(([h]) => h).concat(lang === 'de' ? ['Stempeluhr mit Sperrbildschirm und Live-Aktivität', 'Apple Watch mit Komplikationen', 'iPad mit Seitenleiste', 'Stundenzettel als PDF und CSV', 'Import aus myTime und CSV', 'Kein Konto, kein Server, kein Tracking'] : ['Clock with lock screen and Live Activity', 'Apple Watch with complications', 'iPad with sidebar', 'Time sheet as PDF and CSV', 'Import from myTime and CSV', 'No account, no server, no tracking']),
      ...(APP_STORE_URL ? { downloadUrl: APP_STORE_URL, offers: [{ '@type': 'Offer', price: '0', priceCurrency: 'EUR', description: lang === 'de' ? '30 Tage testen' : '30-day trial' }] } : {}) },
    { '@type': 'FAQPage', inLanguage: lang, mainEntity: c.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
  ];
  return { title: c.title, desc: c.desc, body, scripts: ['/assets/start.js'], jsonld };
}
