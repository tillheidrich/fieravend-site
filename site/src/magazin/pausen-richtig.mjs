/**
 * Magazin: breaks under § 4 ArbZG, what counts as a break. Sources opened 21.10.2026: § 4 ArbZG, § 11 JArbSchG,
 * BAG 21.08.2024 – 5 AZR 266/23 (Leitsatz, Rn. 20, 23), § 11 AZG (Austria), Directive 2003/88/EC Art. 4 (text via hensche.de; EUR-Lex blocked automated access today).
 * Not used: Swiss break rules (Art. 15 ArG, fedlex page could not be loaded today), surveys on skipped breaks.
 */
export default {
  id: 'pausen',
  slug: { de: 'pausen-arbeitszeitgesetz', en: 'breaks-at-work-germany' },
  published: '2026-10-28', modified: '2026-10-28', checked: '2026-10-21',
  de: {
    kicker: 'Recht, ruhig erklärt',
    title: 'Pause am Schreibtisch: Zählt das eigentlich?',
    desc: 'Wie lang die Pause nach dem Arbeitszeitgesetz sein soll, warum fünf Minuten am Kaffeeautomaten nicht zählen und was eine echte Pause ausmacht.',
    answer: 'Nach § 4 Arbeitszeitgesetz sind bei mehr als sechs Stunden Arbeit mindestens 30 Minuten Pause vorgesehen, bei mehr als neun Stunden 45 Minuten. Als Pause zählen nur Abschnitte von mindestens 15 Minuten. Eine Pause ist es nach dem Bundesarbeitsgericht nur, wenn du vorher weißt, dass und wie lange du frei hast, und frei über die Zeit verfügen kannst.',
    read: '5 Minuten',
    sections: [
      { h: 'Die Zahlen aus dem Gesetz', p: [
        'Das Arbeitszeitgesetz ist bei der Pause erstaunlich knapp. Wer mehr als sechs bis zu neun Stunden arbeitet, soll mindestens 30 Minuten Pause haben. Ab mehr als neun Stunden sind es 45 Minuten. Die Pause darf geteilt werden, aber jedes Stück muss mindestens 15 Minuten lang sein. Und länger als sechs Stunden am Stück soll niemand ohne Pause arbeiten.',
        'Rechnen wir es einmal durch. Sam arbeitet von 8 bis 14:30 Uhr und macht zwischendurch zehn Minuten Brotzeit. Das sind mehr als sechs Stunden Arbeit, also wären 30 Minuten Pause vorgesehen. Die zehn Minuten zählen nach dem Gesetz gar nicht, weil sie kürzer als 15 Minuten sind.',
      ] },
      { h: 'Was eine echte Pause ist', p: [
        'Dass du gerade nicht tippst, macht noch keine Pause. Das Bundesarbeitsgericht hat 2024 beschrieben, worauf es ankommt: Du weißt spätestens zu Beginn der Pause, dass und wie lange du jetzt Pause hast, und du kannst frei über diese Zeit verfügen. Das Gesetz spricht von „im Voraus feststehenden“ Pausen. Ein fester Rahmen im Dienstplan erfüllt das, ein spontanes „Mach mal kurz Pause, aber bleib am Telefon“ eher nicht.',
        'In dem Fall ging es um einen Schichtarbeiter, der seine Pausen meist in der Kantine verbrachte. Dort hing ein Monitor, der Störungen an den Maschinen anzeigte. Er sah das als versteckte Bereitschaft. Das Gericht nicht: Er musste weder in der Kantine sein noch bei einer Störung von sich aus losgehen. Daraus lässt sich auch der Umkehrschluss ziehen. Wer in der Pause wirklich erreichbar sein und eingreifen muss, ist in seiner Zeit so eingeschränkt, dass es nach EU-Recht eher Arbeitszeit ist.',
      ] },
      { h: 'Mittag am Schreibtisch', p: [
        'Mira isst oft am Schreibtisch und liest nebenbei Mails. Das fühlt sich an wie Pause, ist aber keine, solange sie dabei arbeitet. Für die Rechnung heißt das: Entweder sie macht wirklich 30 Minuten frei, auch wenn sie am Platz sitzt, oder die Zeit zählt als Arbeitszeit. Beides kann man ehrlich aufschreiben. Nur so tun, als wäre eine halbe Stunde Pause gewesen, obwohl sie gearbeitet hat, verschiebt ihr Konto zu ihren Ungunsten.',
        'Für die Pausen verantwortlich ist nach dem Gesetz der Arbeitgeber. Er muss sie gewähren. Was du tun kannst: aufschreiben, wie es wirklich war, und darüber reden, wenn die Pause regelmäßig ausfällt.',
      ] },
      { h: 'Unter 18 und über der Grenze', list: [
        ['Jugendliche', 'Für unter 18-Jährige gilt das Jugendarbeitsschutzgesetz: 30 Minuten bei mehr als viereinhalb bis sechs Stunden, 60 Minuten bei mehr als sechs Stunden, frühestens eine Stunde nach Arbeitsbeginn.'],
        ['Österreich', 'Nach § 11 Arbeitszeitgesetz ist bei mehr als sechs Stunden eine halbe Stunde Pause vorgesehen. Unter Umständen darf sie in zwei Viertelstunden oder drei mal zehn Minuten geteilt werden.'],
        ['EU', 'Die Arbeitszeitrichtlinie verlangt eine Pause, wenn der Arbeitstag länger als sechs Stunden ist. Einzelheiten wie die Länge regeln Tarifverträge oder das Recht des jeweiligen Landes.'],
      ] },
      { h: 'So hältst du Pausen fest', p: [
        'Am einfachsten ist ein eigener Block für die Pause, mit Anfang und Ende. Wer das zu umständlich findet, trägt nur die Dauer ein. Fieravend zeigt dir als ruhigen Hinweis, wenn an einem Tag mit über sechs Stunden weniger als 30 Minuten Pause stehen. Ein Alarm ist das nicht, und gerechnet wird mit dem, was du einträgst. Wenn du die Pause automatisch abziehen lässt, zieht Fieravend nie mehr ab, als das Gesetz vorsieht.',
      ] },
    ],
    qa: [
      ['Wie lange muss die Pause bei acht Stunden Arbeit sein?', 'Nach § 4 ArbZG mindestens 30 Minuten, weil die Arbeitszeit mehr als sechs und bis zu neun Stunden beträgt. Ab mehr als neun Stunden sind es 45 Minuten.'],
      ['Zählen fünf Minuten Kaffeepause als Pause?', 'Nicht im Sinne des Arbeitszeitgesetzes. Ein Pausenabschnitt muss mindestens 15 Minuten lang sein.'],
      ['Ist die Pause Arbeitszeit?', 'Eine echte Ruhepause ist keine Arbeitszeit. Musst du in der Pause bereitstehen und eingreifen, kann es nach der Rechtsprechung anders aussehen.'],
    ],
    sources: [
      ['§ 4 Arbeitszeitgesetz (Ruhepausen)', 'https://www.gesetze-im-internet.de/arbzg/__4.html'],
      ['BAG, Urteil vom 21.08.2024, 5 AZR 266/23 (Leitsatz, Rn. 20, 23)', 'https://www.bundesarbeitsgericht.de/entscheidung/5-azr-266-23/'],
      ['§ 11 Jugendarbeitsschutzgesetz (Ruhepausen)', 'https://www.gesetze-im-internet.de/jarbschg/__11.html'],
      ['§ 11 Arbeitszeitgesetz Österreich (Ruhepausen), RIS', 'https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10008238&Paragraf=11'],
      ['Richtlinie 2003/88/EG, Art. 4 (Ruhepause), Wortlaut bei hensche.de', 'https://www.hensche.de/Rechtsanwalt_Arbeitsrecht_Gesetze_RL_2003_88EG_031104_a4.html'],
    ],
    related: ['feierabend', 'mag-laptop', 'mag-zeiterfassung'],
  },
  en: {
    kicker: 'The law, calmly explained',
    title: 'Lunch at your desk: does it count as a break?',
    desc: 'How long a break German law expects, why five minutes at the coffee machine do not count, and what makes a real break.',
    answer: 'Under section 4 of the German Working Time Act, more than six hours of work call for at least 30 minutes of break, more than nine hours for 45 minutes. Only stretches of at least 15 minutes count. According to the Federal Labour Court, it is a break only if you know in advance that you are off and for how long, and you are free to use the time as you like.',
    read: '5 minutes',
    sections: [
      { h: 'The numbers in the law', p: [
        'The Working Time Act says surprisingly little about breaks. If you work more than six and up to nine hours, you should get at least 30 minutes. Above nine hours it is 45 minutes. The break may be split, but each part has to be at least 15 minutes long. And nobody should work more than six hours in a row without a break.',
        'Let us do the maths. Sam works from 8 am to 2:30 pm and takes ten minutes for a snack. That is more than six hours of work, so 30 minutes of break would be due. Under the law the ten minutes do not count at all, because they are shorter than 15 minutes.',
      ] },
      { h: 'What a real break is', p: [
        'Not typing for a moment is not a break. In 2024 the Federal Labour Court described what matters: at the latest when the break starts, you know that you now have a break and how long it lasts, and you can use that time freely. The law speaks of breaks “fixed in advance”. A set window in the rota does that. A spontaneous “take five, but stay by the phone” probably does not.',
        'The case was about a shift worker who usually spent his breaks in the canteen. A monitor there showed faults on the machines. He saw this as hidden standby. The court did not: he did not have to be in the canteen, nor go to a machine on his own when a fault appeared. The reverse also follows. If you really have to stay reachable and step in during your break, your time is so restricted that under EU law it is more likely working time.',
      ] },
      { h: 'Lunch at the desk', p: [
        'Mira often eats at her desk and reads emails on the side. It feels like a break, but it is not one as long as she is working. For the numbers this means: either she really takes 30 minutes off, even at her desk, or the time counts as working time. Both can be written down honestly. Pretending there was half an hour of break while she worked tilts her account against her.',
        'Under the law, breaks are the employer’s responsibility. The employer has to grant them. What you can do: write down how it really was, and talk about it if the break keeps falling through.',
      ] },
      { h: 'Under 18 and across the border', list: [
        ['Young people', 'Under 18, the Youth Employment Protection Act applies: 30 minutes for more than four and a half up to six hours, 60 minutes for more than six hours, no earlier than one hour after starting.'],
        ['Austria', 'Section 11 of the Austrian Working Time Act calls for half an hour after more than six hours. In some cases it may be split into two quarter hours or three times ten minutes.'],
        ['EU', 'The Working Time Directive requires a break when the working day is longer than six hours. Details such as the length are left to collective agreements or national law.'],
      ] },
      { h: 'How to record breaks', p: [
        'The simplest way is a separate block for the break, with a start and an end. If that feels like too much, enter just the length. Fieravend shows a calm hint when a day with more than six hours has less than 30 minutes of break. It is not an alarm, and it counts what you entered. If you let it deduct breaks automatically, Fieravend never deducts more than the law requires.',
      ] },
    ],
    qa: [
      ['How long should the break be for eight hours of work?', 'At least 30 minutes under section 4 ArbZG, because the working time is more than six and up to nine hours. Above nine hours it is 45 minutes.'],
      ['Does a five-minute coffee break count?', 'Not under the Working Time Act. Each part of a break has to be at least 15 minutes long.'],
      ['Is a break working time?', 'A real rest break is not working time. If you have to stand by and step in during the break, the courts may see it differently.'],
    ],
    sources: [
      ['Section 4 Working Time Act (breaks, German)', 'https://www.gesetze-im-internet.de/arbzg/__4.html'],
      ['Federal Labour Court, judgment of 21 August 2024, 5 AZR 266/23 (headnote, paras. 20, 23, German)', 'https://www.bundesarbeitsgericht.de/entscheidung/5-azr-266-23/'],
      ['Section 11 Youth Employment Protection Act (breaks, German)', 'https://www.gesetze-im-internet.de/jarbschg/__11.html'],
      ['Section 11 Austrian Working Time Act (breaks), RIS, German', 'https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10008238&Paragraf=11'],
      ['Directive 2003/88/EC, Art. 4 (breaks), text at hensche.de (German)', 'https://www.hensche.de/Rechtsanwalt_Arbeitsrecht_Gesetze_RL_2003_88EG_031104_a4.html'],
    ],
    related: ['feierabend', 'mag-laptop', 'mag-zeiterfassung'],
  },
};
