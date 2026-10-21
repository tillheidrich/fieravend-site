/**
 * Magazin: minimum wage and mini-job limit from 1 January 2027. Sources opened 21.10.2026: MiLoV5 (13,90 € from
 * 01.01.2026, 14,60 € from 01.01.2027, BGBl. 2025 I Nr. 268), § 8 Abs. 1a and 1b SGB IV (formula, unforeseeable
 * overrun), Minijob-Zentrale Magazin (633 € a month, 7.596 € a year, about 43 hours, up to 1.266 € in at most two
 * months), lohn-info.de (BMAS notice in the Bundesanzeiger on 20.11.2025), § 17 MiLoG, § 2 Abs. 2 MiLoG (via lexmea.de).
 * Same values as Core rules/de.json (minimumWage 1460 from 2027-01-01, minijobLimit 63300 from 2027-01-01).
 * Not used: midijob range (not needed here), exceptions to the minimum wage (§ 22 MiLoG, not opened today).
 */
export default {
  id: 'mindestlohn',
  slug: { de: 'mindestlohn-minijob-2027', en: 'minimum-wage-mini-job-2027' },
  published: '2026-11-24', modified: '2026-11-24', checked: '2026-10-21',
  de: {
    kicker: 'Geld, ruhig erklärt',
    title: 'Mindestlohn und Minijob 2027: 14,60 Euro und 633 Euro',
    desc: 'Ab 1. Januar 2027 steigt der Mindestlohn auf 14,60 Euro pro Stunde, die Minijob-Grenze auf 633 Euro im Monat. Was das für deine Stunden heißt und warum ein Stundenzettel hier Pflicht ist.',
    answer: 'Ab 1. Januar 2027 beträgt der gesetzliche Mindestlohn in Deutschland 14,60 Euro brutto pro Stunde, bisher 13,90 Euro. Die Minijob-Grenze hängt daran und steigt von 603 auf 633 Euro im Monat. Zum Mindestlohn sind das etwa 43 Stunden im Monat. Für Minijobs muss der Arbeitgeber Beginn, Ende und Dauer jeder Arbeitszeit aufzeichnen.',
    read: '5 Minuten',
    sections: [
      { h: 'Die Zahlen', p: [
        'Die Fünfte Mindestlohnanpassungsverordnung vom 5. November 2025 hat zwei Stufen festgelegt: 13,90 Euro brutto je Zeitstunde ab 1. Januar 2026 und 14,60 Euro ab 1. Januar 2027. Die zweite Stufe kommt jetzt.',
        'Die Minijob-Grenze ist an den Mindestlohn gekoppelt. Nach § 8 Abs. 1a SGB IV ist sie das, was man bei zehn Wochenstunden zum Mindestlohn verdient: Mindestlohn mal 130, geteilt durch drei, aufgerundet auf volle Euro. Für 2027 sind das 14,60 × 130 / 3 = 632,67, also 633 Euro im Monat. Laut Minijob-Zentrale sind es im Jahr 7.596 Euro. Das Arbeitsministerium macht die Grenze im Bundesanzeiger bekannt, für 2027 nach Angaben von lohn-info.de am 20. November 2025.',
      ] },
      { h: 'Was das für deine Stunden heißt', p: [
        'Mika hat einen Minijob im Café und bekommt den Mindestlohn. 2026 passen in die 603 Euro gut 43 Stunden im Monat, 2027 in die 633 Euro ebenfalls etwa 43 Stunden. Die Minijob-Zentrale sagt es so: Die maximale Arbeitszeit bleibt ungefähr gleich. Wer mehr als den Mindestlohn verdient, kann entsprechend weniger Stunden arbeiten.',
        'Wo es knapp wird: Mika hat einen festen Monatsbetrag von 603 Euro vereinbart, für 43 Stunden. Ab Januar wären 43 Stunden zum Mindestlohn 627,80 Euro. Ein fester Betrag aus dem alten Jahr kann also unter den Mindestlohn rutschen, wenn die Stunden gleich bleiben. Das lohnt einen Blick auf die erste Abrechnung im Januar.',
      ] },
      { h: 'Mal mehr, mal weniger', p: [
        'Der Verdienst darf schwanken, solange es im Jahr nicht mehr als 7.596 Euro werden. Dazu gibt es eine Ausnahme für Unvorhersehbares, etwa eine Krankheitsvertretung: In höchstens zwei Kalendermonaten innerhalb von zwölf Monaten darf die Grenze überschritten werden, laut Minijob-Zentrale bis zum Doppelten, also bis 1.266 Euro im Monat.',
        'Gibt es ein schriftliches Arbeitszeitkonto, gelten nach § 2 Abs. 2 Mindestlohngesetz zwei Grenzen: Die Stunden auf dem Konto dürfen im Monat höchstens 50 Prozent der vereinbarten Arbeitszeit ausmachen, und sie müssen spätestens nach zwölf Monaten ausgeglichen werden, mit Freizeit oder Geld.',
      ] },
      { h: 'Stundenzettel: im Minijob Pflicht', p: [
        'Für Minijobs muss der Arbeitgeber nach § 17 Mindestlohngesetz Beginn, Ende und Dauer der täglichen Arbeitszeit aufzeichnen, spätestens sieben Tage danach, und die Aufzeichnungen mindestens zwei Jahre aufheben. Hat dein Arbeitgeber das bisher nicht gemacht, darfst du fragen, wie er es machen möchte. Dein eigener Stundenzettel ist dabei eine gute Grundlage zum Vergleichen. Mehr dazu im Artikel <a href="@mag-zeiterfassung">Zeiterfassung ist Pflicht</a>.',
      ] },
      { h: 'Fieravend und der neue Mindestlohn', p: [
        'In Fieravend kann dein Stundenlohn dem gesetzlichen Mindestlohn folgen. Dann rechnet die App ab dem 1. Januar mit 14,60 Euro, ohne dass du etwas ändern musst. Liegt dein eingetragener Lohn an dem Tag darunter, zeigt dir die Heute-Ansicht vorher einmal einen ruhigen Hinweis. Die Werte stehen mit Quelle in den Rechenregeln der App, nicht fest im Code.',
      ] },
    ],
    qa: [
      ['Wie hoch ist der Mindestlohn 2027?', '14,60 Euro brutto pro Stunde ab 1. Januar 2027, nach der Fünften Mindestlohnanpassungsverordnung.'],
      ['Wie hoch ist die Minijob-Grenze 2027?', '633 Euro im Monat, berechnet nach § 8 Abs. 1a SGB IV aus 14,60 Euro × 130 / 3 und aufgerundet. Im Jahr sind es 7.596 Euro.'],
      ['Wie viele Stunden darf ich 2027 im Minijob arbeiten?', 'Zum Mindestlohn etwa 43 Stunden im Monat. Bei höherem Stundenlohn entsprechend weniger.'],
    ],
    sources: [
      ['Fünfte Mindestlohnanpassungsverordnung (MiLoV5)', 'https://www.gesetze-im-internet.de/milov5/BJNR10C0A0025.html'],
      ['§ 8 SGB IV (Geringfügigkeitsgrenze, Abs. 1a und 1b)', 'https://www.gesetze-im-internet.de/sgb_4/__8.html'],
      ['Minijob-Zentrale Magazin: Minijob-Grenze 2027', 'https://magazin.minijob-zentrale.de/minijob-grenze-2027'],
      ['lohn-info.de: 633-Euro-Job ab 1. Januar 2027 (Bekanntmachung im Bundesanzeiger)', 'https://lohn-info.de/633-euro-job.html'],
      ['§ 17 Mindestlohngesetz (Aufzeichnungspflicht)', 'https://www.gesetze-im-internet.de/milog/__17.html'],
      ['§ 2 Mindestlohngesetz (Arbeitszeitkonto), Wortlaut bei lexmea.de', 'https://lexmea.de/de/gesetz/milog/2'],
    ],
    related: ['rechner', 'zweijobs', 'mag-teilzeit'],
  },
  en: {
    kicker: 'Money, calmly explained',
    title: 'Minimum wage and mini-jobs in 2027: 14.60 euros and 633 euros',
    desc: 'From 1 January 2027 the German minimum wage rises to 14.60 euros an hour and the mini-job limit to 633 euros a month. What it means for your hours and why a timesheet is required here.',
    answer: 'From 1 January 2027 the statutory minimum wage in Germany is 14.60 euros gross per hour, up from 13.90 euros. The mini-job limit is tied to it and rises from 603 to 633 euros a month. At minimum wage that is about 43 hours a month. For mini-jobs, the employer has to record the start, end and length of all working time.',
    read: '5 minutes',
    sections: [
      { h: 'The numbers', p: [
        'The Fifth Minimum Wage Adjustment Ordinance of 5 November 2025 set two steps: 13.90 euros gross per hour from 1 January 2026 and 14.60 euros from 1 January 2027. The second step is coming now.',
        'The mini-job limit is tied to the minimum wage. Under section 8(1a) of Social Code IV, it is what you earn with ten hours a week at minimum wage: minimum wage times 130, divided by three, rounded up to full euros. For 2027 that gives 14.60 × 130 / 3 = 632.67, so 633 euros a month. The Minijob-Zentrale gives 7,596 euros a year. The labour ministry publishes the limit in the Federal Gazette, for 2027 on 20 November 2025 according to lohn-info.de.',
      ] },
      { h: 'What it means for your hours', p: [
        'Mika has a mini-job in a café and earns the minimum wage. In 2026 a little over 43 hours a month fit into 603 euros, and in 2027 about 43 hours fit into 633 euros as well. The Minijob-Zentrale puts it this way: the maximum working time stays roughly the same. If you earn more than the minimum wage, you can work correspondingly fewer hours.',
        'Where it gets tight: Mika agreed on a fixed monthly 603 euros for 43 hours. From January, 43 hours at minimum wage would be 627.80 euros. So a fixed amount from the old year can slip below the minimum wage if the hours stay the same. The first payslip in January is worth a look.',
      ] },
      { h: 'Sometimes more, sometimes less', p: [
        'Your earnings may vary as long as the year stays at no more than 7,596 euros. There is an exception for the unforeseeable, such as covering for a sick colleague: in at most two calendar months within twelve months the limit may be exceeded, according to the Minijob-Zentrale up to double, so up to 1,266 euros in that month.',
        'If there is a written working-time account, section 2(2) of the Minimum Wage Act sets two limits: hours on the account may not exceed 50 percent of the agreed working time in a month, and they must be balanced within twelve months at the latest, with time off or money.',
      ] },
      { h: 'Timesheets: required in mini-jobs', p: [
        'For mini-jobs, section 17 of the Minimum Wage Act requires the employer to record the start, end and length of daily working time within seven days, and to keep the records for at least two years. If your employer has not done this so far, it is fine to ask how they plan to. Your own timesheet is a good basis for comparing. More in the article <a href="@mag-zeiterfassung">Recording working time is mandatory</a>.',
      ] },
      { h: 'Fieravend and the new minimum wage', p: [
        'In Fieravend your hourly rate can follow the statutory minimum wage. The app then uses 14.60 euros from 1 January without you changing anything. If the rate you entered is below it on that day, the Today view shows a calm note once beforehand. The values live with their sources in the app’s calculation rules, not hard-coded.',
      ] },
    ],
    qa: [
      ['What is the German minimum wage in 2027?', '14.60 euros gross per hour from 1 January 2027, under the Fifth Minimum Wage Adjustment Ordinance.'],
      ['What is the mini-job limit in 2027?', '633 euros a month, calculated under section 8(1a) SGB IV as 14.60 × 130 / 3, rounded up. Over a year that is 7,596 euros.'],
      ['How many hours can I work in a mini-job in 2027?', 'About 43 hours a month at minimum wage. Fewer if your hourly rate is higher.'],
    ],
    sources: [
      ['Fifth Minimum Wage Adjustment Ordinance (MiLoV5, German)', 'https://www.gesetze-im-internet.de/milov5/BJNR10C0A0025.html'],
      ['Section 8 Social Code IV (mini-job limit, paras. 1a and 1b, German)', 'https://www.gesetze-im-internet.de/sgb_4/__8.html'],
      ['Minijob-Zentrale magazine: mini-job limit 2027 (German)', 'https://magazin.minijob-zentrale.de/minijob-grenze-2027'],
      ['lohn-info.de: 633-euro job from 1 January 2027 (Federal Gazette notice, German)', 'https://lohn-info.de/633-euro-job.html'],
      ['Section 17 Minimum Wage Act (records, German)', 'https://www.gesetze-im-internet.de/milog/__17.html'],
      ['Section 2 Minimum Wage Act (working-time account), text at lexmea.de (German)', 'https://lexmea.de/de/gesetz/milog/2'],
    ],
    related: ['rechner', 'zweijobs', 'mag-teilzeit'],
  },
};
