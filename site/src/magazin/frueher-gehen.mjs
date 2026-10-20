/**
 * Magazin: leaving early within your weekly hours (flexibility). Sources opened 20.10.2026: §§ 3, 18 ArbZG, § 106 GewO,
 * § 615 BGB (gesetze-im-internet.de), BAG 1 ABR 22/21. Product rule (docs/recht-flexibilitaet.md): the app may say
 * "die Woche passt", never "du darfst gehen". The week coach (AZK-29) is planned, so the text only describes the week
 * view that exists today.
 */
export default {
  id: 'frueher',
  slug: { de: 'frueher-gehen-wochenstunden', en: 'leaving-early-weekly-hours' },
  published: '2026-10-20', modified: '2026-10-20', checked: '2026-10-20',
  de: {
    kicker: 'Flexibel arbeiten',
    title: 'Heute früher gehen: Wann die Woche trotzdem passt',
    desc: 'Montag lang, Freitag kurz: Ob du heute früher gehen kannst, regelt dein Vertrag, nicht das Arbeitszeitgesetz. Was das Gesetz begrenzt, welche Modelle es gibt und wie du deine Woche im Blick behältst.',
    answer: 'Das Arbeitszeitgesetz begrenzt deinen Tag nur nach oben: 8 Stunden, höchstens 10. Wie lang ein Tag mindestens sein muss und ob du heute früher gehen kannst, regelt dein Vertrag, also feste Zeiten, Gleitzeit, Arbeitszeitkonto oder Vertrauensarbeitszeit. Wenn dein Modell Wochenstunden zählt, kann ein langer Montag einen kurzen Freitag tragen. Sprich es im Zweifel ab.',
    read: '6 Minuten',
    sections: [
      { h: 'Was das Gesetz regelt, und was nicht', p: [
        'Ben arbeitet 39 Stunden in der Woche in einem Planungsbüro. Montag und Dienstag wurden es je zehn Stunden, weil ein Projekt fertig werden musste. Am Freitag möchte er mittags gehen, seine Tochter hat Geburtstag. Darf er das?',
        'Das Arbeitszeitgesetz hilft hier nur zur Hälfte. § 3 sagt: Werktags höchstens acht Stunden, ausnahmsweise bis zu zehn, wenn im Schnitt von sechs Monaten oder 24 Wochen acht Stunden am Werktag nicht überschritten werden. Das Gesetz schützt dich also vor zu langen Tagen. Eine Mindestlänge für den Tag kennt es nicht. Die steht in deinem Vertrag, im Tarifvertrag oder in einer Betriebsvereinbarung.',
      ] },
      { h: 'Vier Modelle, vier Antworten', list: [
        ['Feste Arbeitszeit', 'Der Arbeitgeber bestimmt die Lage deiner Arbeitszeit im Rahmen von Vertrag, Tarif und Betriebsvereinbarung (§ 106 Gewerbeordnung). Früher gehen braucht hier eine Absprache, auch wenn die Woche schon voll ist.'],
        ['Gleitzeit mit Kernzeit', 'In der Kernzeit bist du da, davor und danach planst du selbst. Plus und Minus laufen auf einem Konto, bis zu den Grenzen, die vereinbart sind. Freitag mittags gehen ist oft möglich, wenn die Kernzeit dann schon vorbei ist.'],
        ['Arbeitszeitkonto', 'Mehrarbeit wird angespart und später ausgeglichen. Wie viel Plus und Minus erlaubt ist und wie du freie Zeit nimmst, steht in der Vereinbarung.'],
        ['Vertrauensarbeitszeit', 'Du entscheidest selbst, wann du arbeitest. Die vereinbarten Stunden bleiben aber geschuldet, und das Arbeitszeitgesetz gilt trotzdem, von wenigen Ausnahmen wie leitenden Angestellten abgesehen. Gerade hier hilft eine eigene Rechnung, damit „Vertrauen“ nicht heißt, dass niemand mehr zählt.'],
      ] },
      { h: 'Wenn der Arbeitgeber dich nach Hause schickt', p: [
        'Ein Sonderfall: Du willst arbeiten, aber es gibt nichts zu tun, und deine Chefin schickt dich früher heim. Dann bleibt dein Lohn in der Regel bestehen, ohne dass du die Stunden nacharbeiten musst. Das Bürgerliche Gesetzbuch nennt das Annahmeverzug (§ 615 BGB). Ob dir in so einem Fall Minusstunden aufs Konto geschrieben werden dürfen, hängt davon ab, was über das Konto vereinbart ist. Schreib dir solche Tage mit einer Notiz auf: „Um 14 Uhr nach Hause geschickt, keine Ware.“',
      ] },
      { h: 'In Wochen denken statt in Tagen', p: [
        'Viele Menschen haben im Kopf: Jeder Tag muss sein Soll erfüllen. Wer an einem Tag kürzer arbeitet, hat „Minus“. Wenn dein Modell aber Wochenstunden zählt, ist das schief. Ein kurzer Tag ist dann nur ein Teil der Woche, kein Fehler.',
        'Mika arbeitet Teilzeit, 25 Stunden die Woche, und holt nachmittags das Kind ab. Dienstag wird es mal sechs Stunden, Donnerstag nur vier. Am Ende der Woche stehen 25. Das ist kein Minus und kein Plus. Es ist eine Woche, die passt.',
        'Fieravend zeigt dir deshalb neben dem Tag auch die Woche, in einem Wochenstreifen auf einen Blick. Ob du heute früher gehen kannst, beantwortet die App nicht. Sie zeigt dir die Rechnung, damit du gut vorbereitet fragen kannst.',
      ] },
      { h: 'So redest du gut darüber', list: [
        ['Mit Zahlen statt Gefühl', '„Ich bin diese Woche schon bei 30 von 39 Stunden. Kann ich Freitag um 12 gehen?“ ist leichter zu beantworten als „Ich hab diese Woche echt viel gemacht.“'],
        ['Rechtzeitig', 'Am Mittwoch fragen, nicht am Freitag um 11:55 Uhr.'],
        ['Mit Blick aufs Team', 'Wer übernimmt, was am Freitagnachmittag anfällt?'],
      ] },
      { h: 'Grenzen nach oben bleiben', p: [
        'Flexibel heißt nicht grenzenlos. Auch wenn du lange Tage später ausgleichst, gelten Pausen (mehr als sechs Stunden: 30 Minuten, mehr als neun: 45 Minuten) und elf Stunden Ruhe zwischen zwei Arbeitstagen. Wann dein Feierabend unter diesen Regeln liegt, rechnet dir der <a href="@feierabend">Feierabend-Rechner</a> aus. Wenn ein langer Tag abends am Laptop weitergeht, lies auch <a href="@mag-laptop">Abends noch am Laptop</a>.',
      ] },
    ],
    qa: [
      ['Darf ich früher gehen, wenn ich meine Wochenstunden schon habe?', 'Das regelt dein Vertrag, Tarifvertrag oder eine Betriebsvereinbarung, nicht das Arbeitszeitgesetz. Bei Gleitzeit oder Vertrauensarbeitszeit ist es oft möglich, bei festen Zeiten braucht es eine Absprache.'],
      ['Gibt es eine Mindestarbeitszeit pro Tag im Arbeitszeitgesetz?', 'Nein. § 3 ArbZG begrenzt den Tag nur nach oben: 8 Stunden, bis zu 10, wenn im Schnitt 8 Stunden nicht überschritten werden.'],
      ['Bekomme ich Minusstunden, wenn mich mein Arbeitgeber nach Hause schickt?', 'In der Regel bleibt der Lohn bestehen, ohne dass du nacharbeiten musst (Annahmeverzug, § 615 BGB). Was für ein Arbeitszeitkonto gilt, steht in der Vereinbarung dazu.'],
    ],
    sources: [
      ['§ 3 Arbeitszeitgesetz (Arbeitszeit der Arbeitnehmer)', 'https://www.gesetze-im-internet.de/arbzg/__3.html'],
      ['§ 4 Arbeitszeitgesetz (Ruhepausen)', 'https://www.gesetze-im-internet.de/arbzg/__4.html'],
      ['§ 18 Arbeitszeitgesetz (Nichtanwendung)', 'https://www.gesetze-im-internet.de/arbzg/__18.html'],
      ['§ 106 Gewerbeordnung (Weisungsrecht)', 'https://www.gesetze-im-internet.de/gewo/__106.html'],
      ['§ 615 BGB (Annahmeverzug)', 'https://www.gesetze-im-internet.de/bgb/__615.html'],
    ],
    related: ['feierabend', 'rechner', 'mag-laptop'],
  },
  en: {
    kicker: 'Flexible work',
    title: 'Leaving early today: when your week still adds up',
    desc: 'Long Monday, short Friday: whether you can leave early today is up to your contract, not the Working Time Act. What the law limits, which models exist, and how to keep your week in view.',
    answer: 'German working-time law only limits your day from above: 8 hours, at most 10. How long a day has to be at least, and whether you can leave early today, is up to your contract: fixed hours, flexitime, a time account or trust-based hours. If your model counts weekly hours, a long Monday can carry a short Friday. When in doubt, agree it first.',
    read: '6 minutes',
    sections: [
      { h: 'What the law covers, and what it does not', p: [
        'Ben works 39 hours a week at a planning office. On Monday and Tuesday he did ten hours each because a project had to be finished. On Friday he would like to leave at noon, it is his daughter’s birthday. Can he?',
        'The German Working Time Act only helps halfway. Section 3 says: at most eight hours per working day, up to ten as an exception if eight hours per working day are not exceeded on average over six months or 24 weeks. So the law protects you from days that are too long. It has no minimum length for a day. That is in your contract, a collective agreement or a works agreement.',
      ] },
      { h: 'Four models, four answers', list: [
        ['Fixed hours', 'Your employer decides when you work, within your contract, collective agreement and works agreement (section 106 Trade Regulation Act). Leaving early needs an agreement here, even if your week is already full.'],
        ['Flexitime with core hours', 'You are there during core hours; before and after, you plan yourself. Plus and minus run on an account, up to the agreed limits. Leaving at noon on Friday is often possible if core hours are over by then.'],
        ['Time account', 'Extra hours are saved and balanced later. How much plus and minus is allowed and how you take time off is in the agreement.'],
        ['Trust-based hours', 'You decide when you work. But the agreed hours are still owed, and the Working Time Act still applies, apart from a few exceptions such as senior executives. This is where your own count helps most, so that “trust” does not mean nobody counts any more.'],
      ] },
      { h: 'When your employer sends you home', p: [
        'A special case: you want to work, but there is nothing to do, and your manager sends you home early. Then you usually keep your pay without having to make up the hours. German civil law calls this default of acceptance (section 615 BGB). Whether minus hours may be booked to your account in that case depends on what was agreed about the account. Write such days down with a note: “Sent home at 2 pm, no stock.”',
      ] },
      { h: 'Think in weeks, not days', p: [
        'Many people assume every day has to meet its target, and a shorter day means “minus”. If your model counts weekly hours, that is skewed. A short day is then just part of the week, not a mistake.',
        'Mika works part time, 25 hours a week, and picks up the child in the afternoon. Some Tuesdays it is six hours, Thursday only four. At the end of the week there are 25. That is neither minus nor plus. It is a week that adds up.',
        'That is why Fieravend shows you the week next to the day, in a week strip at a glance. Whether you may leave early today is not something the app answers. It shows you the numbers, so you can ask well prepared.',
      ] },
      { h: 'How to talk about it', list: [
        ['With numbers, not a feeling', '“I am already at 30 of 39 hours this week. Can I leave at 12 on Friday?” is easier to answer than “I have done loads this week.”'],
        ['In good time', 'Ask on Wednesday, not on Friday at 11:55 am.'],
        ['With the team in mind', 'Who takes over what comes up on Friday afternoon?'],
      ] },
      { h: 'Upper limits still apply', p: [
        'Flexible does not mean limitless. Even if you balance long days later, breaks still apply (more than six hours: 30 minutes, more than nine: 45 minutes) and so do eleven hours of rest between two working days. The <a href="@feierabend">finish-time calculator</a> works out when you can finish under these rules. If a long day continues on the laptop in the evening, also read <a href="@mag-laptop">Back on the laptop in the evening</a>.',
      ] },
    ],
    qa: [
      ['Can I leave early if I already have my weekly hours?', 'That is up to your contract, collective agreement or works agreement, not the Working Time Act. With flexitime or trust-based hours it is often possible; with fixed hours it needs an agreement.'],
      ['Does German law set a minimum working time per day?', 'No. Section 3 ArbZG only limits the day from above: 8 hours, up to 10 if 8 hours are not exceeded on average.'],
      ['Do I get minus hours if my employer sends me home?', 'Usually you keep your pay without having to make up the time (default of acceptance, section 615 BGB). What applies to a time account depends on the agreement.'],
    ],
    sources: [
      ['Section 3 Working Time Act (German)', 'https://www.gesetze-im-internet.de/arbzg/__3.html'],
      ['Section 4 Working Time Act (breaks, German)', 'https://www.gesetze-im-internet.de/arbzg/__4.html'],
      ['Section 18 Working Time Act (exceptions, German)', 'https://www.gesetze-im-internet.de/arbzg/__18.html'],
      ['Section 106 Trade Regulation Act (right to give instructions, German)', 'https://www.gesetze-im-internet.de/gewo/__106.html'],
      ['Section 615 Civil Code (default of acceptance, German)', 'https://www.gesetze-im-internet.de/bgb/__615.html'],
    ],
    related: ['feierabend', 'rechner', 'mag-laptop'],
  },
};
