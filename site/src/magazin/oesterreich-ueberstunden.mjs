/**
 * Magazin: overtime in Austria, surcharge and time off in lieu. Sources opened 21.10.2026 (RIS, consolidated AZG):
 * § 3 (8/40), § 6 (definition), § 7 Abs. 1 and 6 (48-hour average over 17 weeks, 20 overtime hours a week, refusing
 * beyond 10/50 hours), § 9 (12/60), § 10 (50 %, time off includes the surcharge, choice beyond 10/50), § 19d (part time,
 * 25 %), § 19f (time off within six months), § 26 Abs. 8 and 9 (monthly copy of records, limitation periods suspended).
 * Not used: collective-agreement specifics (they vary), Arbeiterkammer figures on unpaid overtime.
 */
export default {
  id: 'oesterreich',
  slug: { de: 'oesterreich-ueberstunden-zeitausgleich', en: 'austria-overtime-time-off-in-lieu' },
  published: '2026-11-11', modified: '2026-11-11', checked: '2026-10-21',
  de: {
    kicker: 'Österreich',
    title: 'Überstunden in Österreich: 50 Prozent oder Zeitausgleich?',
    desc: 'Für Überstunden sieht das österreichische Arbeitszeitgesetz 50 Prozent Zuschlag vor, auch beim Zeitausgleich. Was 1 : 1,5 bedeutet, wann du wählen darfst und warum Aufzeichnungen zählen.',
    answer: 'In Österreich gebührt für Überstunden nach § 10 Arbeitszeitgesetz ein Zuschlag von 50 Prozent oder Zeitausgleich. Beim Zeitausgleich ist der Zuschlag mit einzurechnen, eine Überstunde wird also zu eineinhalb Stunden Freizeit, oder der Zuschlag wird extra ausgezahlt. Für Stunden über 10 am Tag oder 50 in der Woche darfst du wählen, ob du Geld oder Zeit willst.',
    read: '6 Minuten',
    sections: [
      { h: 'Ab wann es eine Überstunde ist', p: [
        'Die Normalarbeitszeit in Österreich liegt nach § 3 Arbeitszeitgesetz bei acht Stunden am Tag und 40 in der Woche. Viele Kollektivverträge sehen weniger vor. Eine Überstunde ist nach § 6, was über die zulässige Normalarbeitszeit der Woche oder über die tägliche Normalarbeitszeit hinausgeht, die sich aus der Verteilung ergibt. Wer Teilzeit arbeitet, macht über dem vereinbarten Ausmaß zunächst Mehrarbeit. Dafür gibt es nach § 19d einen Zuschlag von 25 Prozent.',
        'Nach oben gibt es Grenzen. Höchstens zwölf Stunden am Tag und 60 in der Woche, dazu im Schnitt von 17 Wochen nicht mehr als 48 Stunden pro Woche und höchstens 20 Überstunden in einer einzelnen Woche.',
      ] },
      { h: 'Zuschlag oder Zeitausgleich', p: [
        'Für Überstunden gebührt nach § 10 ein Zuschlag von 50 Prozent oder Zeitausgleich. Der wichtigste Satz steht direkt dahinter: Der Zuschlag ist beim Zeitausgleich zu berücksichtigen oder gesondert auszuzahlen. Mika macht im März zehn Überstunden. Nimmt er sie als Zeitausgleich, wären das 15 Stunden frei. Oder zehn Stunden frei, und die 50 Prozent Zuschlag kommen mit dem Lohn.',
        'Was gilt, wenn nichts vereinbart ist? Zuerst kann der Kollektivvertrag festlegen, ob Geld oder Zeit die Regel ist, dann die Betriebsvereinbarung. Gibt es keine Regel, gebührt mangels anderer Vereinbarung Geld. Für Überstunden, mit denen du über zehn Stunden am Tag oder 50 in der Woche kommst, darfst du selbst wählen. Die Wahl solltest du früh treffen, spätestens am Ende des Abrechnungszeitraums.',
      ] },
      { h: 'Über 10 und 50 darfst du Nein sagen', p: [
        'Das Gesetz erlaubt bis zu zwölf Stunden am Tag. Dazu gehört eine Schutzregel in § 7 Abs. 6: Überstunden, mit denen die Tagesarbeitszeit über zehn oder die Wochenarbeitszeit über 50 Stunden steigt, darfst du ohne Angabe von Gründen ablehnen. Benachteiligt werden darfst du deswegen nicht, auch nicht beim Entgelt, beim Aufstieg oder bei einer Versetzung.',
      ] },
      { h: 'Wann der Zeitausgleich kommen muss', p: [
        'Zeitausgleich, der nie stattfindet, nützt niemandem. Ist der Zeitpunkt nicht vorher vereinbart, soll er nach § 19f innerhalb von sechs Monaten nach dem Ende des Kalendermonats gewährt werden, bei Durchrechnung oder Gleitzeit innerhalb von sechs Monaten nach dem Ende des Zeitraums. Passiert das nicht, kannst du den Zeitpunkt mit vier Wochen Vorlauf selbst bestimmen, sofern keine zwingenden betrieblichen Gründe dagegen stehen, oder Geld verlangen. Kollektivverträge können anderes regeln.',
      ] },
      { h: 'Aufzeichnungen: deine und die des Betriebs', list: [
        ['Der Arbeitgeber zeichnet auf', 'Nach § 26 muss er Aufzeichnungen über die geleisteten Arbeitsstunden führen. Bei Gleitzeit kann vereinbart sein, dass du selbst aufschreibst.'],
        ['Einmal im Monat eine Kopie', 'Wenn du sie nachweislich verlangst, steht dir einmal monatlich eine kostenfreie Übermittlung deiner Aufzeichnungen zu (§ 26 Abs. 8).'],
        ['Fristen laufen nicht einfach ab', 'Verfallsfristen sind gehemmt, solange dir die Kopie verwehrt wird oder wenn die tatsächliche Arbeitszeit wegen fehlender Aufzeichnungen kaum festzustellen ist (§ 26 Abs. 9).'],
        ['Eigene Notizen trotzdem', 'Ein eigener Stundenzettel hilft, die Aufzeichnung des Betriebs zu prüfen. Fieravend rechnet mit den österreichischen Regeln, wenn dein Job in Österreich liegt.'],
      ] },
    ],
    qa: [
      ['Wie hoch ist der Überstundenzuschlag in Österreich?', 'Nach § 10 Arbeitszeitgesetz 50 Prozent. Viele Kollektivverträge enthalten eigene Regeln.'],
      ['Wie viel Zeitausgleich bekomme ich für eine Überstunde?', 'Der Zuschlag ist beim Zeitausgleich zu berücksichtigen oder gesondert auszuzahlen. Ohne gesonderte Auszahlung sind das eineinhalb Stunden pro Überstunde.'],
      ['Darf ich Überstunden ablehnen?', 'Überstunden, durch die du über zehn Stunden am Tag oder 50 in der Woche kommst, darfst du nach § 7 Abs. 6 ohne Angabe von Gründen ablehnen.'],
    ],
    sources: [
      ['Arbeitszeitgesetz § 10 (Überstundenvergütung), RIS', 'https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10008238&Paragraf=10'],
      ['Arbeitszeitgesetz § 7 (Verlängerung, Ablehnungsrecht), RIS', 'https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10008238&Paragraf=7'],
      ['Arbeitszeitgesetz § 19f (Abbau von Zeitguthaben), RIS', 'https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10008238&Paragraf=19f'],
      ['Arbeitszeitgesetz § 26 (Aufzeichnungen), RIS', 'https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10008238&Paragraf=26'],
      ['Arbeitszeitgesetz § 3 (Normalarbeitszeit), RIS', 'https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10008238&Paragraf=3'],
      ['Arbeitszeitgesetz § 6 (Überstundenarbeit), RIS', 'https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10008238&Paragraf=6'],
      ['Arbeitszeitgesetz § 9 (Höchstgrenzen), RIS', 'https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10008238&Paragraf=9'],
      ['Arbeitszeitgesetz § 19d (Teilzeit, Mehrarbeit), RIS', 'https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10008238&Paragraf=19d'],
    ],
    related: ['wochenende', 'mag-teilzeit', 'mag-schweiz'],
  },
  en: {
    kicker: 'Austria',
    title: 'Overtime in Austria: 50 percent or time off in lieu?',
    desc: 'Austrian law sets a 50 percent surcharge for overtime, and it applies to time off in lieu as well. What 1 : 1.5 means, when you get to choose and why records matter.',
    answer: 'In Austria, section 10 of the Working Time Act grants either a 50 percent surcharge or time off in lieu for overtime. With time off, the surcharge has to be included, so one hour of overtime becomes one and a half hours off, or the surcharge is paid out separately. For hours beyond 10 a day or 50 a week, you may choose between money and time.',
    read: '6 minutes',
    sections: [
      { h: 'When an hour counts as overtime', p: [
        'Under section 3 of the Austrian Working Time Act, normal working time is eight hours a day and 40 a week. Many collective agreements set less. Under section 6, overtime is anything beyond the permitted normal weekly hours, or beyond the daily normal hours that follow from how the week is split. If you work part time, hours above your agreed amount are first “Mehrarbeit” (extra hours). Section 19d sets a 25 percent surcharge for those.',
        'There are upper limits. At most twelve hours a day and 60 a week, no more than 48 hours a week on average over 17 weeks, and at most 20 overtime hours in any single week.',
      ] },
      { h: 'Surcharge or time off', p: [
        'Section 10 grants a 50 percent surcharge or time off in lieu for overtime. The sentence that matters comes right after: with time off, the surcharge must be taken into account or paid out separately. Mika works ten hours of overtime in March. If he takes them as time off, that is 15 hours off. Or ten hours off, with the 50 percent surcharge paid with his wages.',
        'What if nothing was agreed? First the collective agreement can decide whether money or time is the default, then a works agreement. If there is no rule, money is due unless agreed otherwise. For overtime that takes you beyond ten hours a day or 50 a week, you choose yourself. Make that choice early, at the latest by the end of the pay period.',
      ] },
      { h: 'Beyond 10 and 50 you may say no', p: [
        'The law allows up to twelve hours a day. It comes with a safeguard in section 7(6): you may refuse overtime that takes your day beyond ten hours or your week beyond 50 hours, without giving a reason. You must not be put at a disadvantage for it, including in pay, promotion or transfers.',
      ] },
      { h: 'When the time off has to happen', p: [
        'Time off that never happens helps nobody. If no date was agreed in advance, section 19f says it should be granted within six months after the end of the calendar month, or with averaging schemes and flexitime within six months after the end of the period. If that does not happen, you may set the date yourself with four weeks’ notice, unless pressing business reasons stand against it, or ask for money instead. Collective agreements can set other rules.',
      ] },
      { h: 'Records: yours and your employer’s', list: [
        ['Your employer keeps records', 'Under section 26, the employer has to record the hours worked. With flexitime it can be agreed that you keep the records yourself.'],
        ['A copy once a month', 'If you can show you asked, you are entitled to a free copy of your records once a month (section 26(8)).'],
        ['Deadlines do not simply run out', 'Limitation periods are suspended while you are refused the copy, or when missing records make it unreasonable to establish the hours actually worked (section 26(9)).'],
        ['Keep your own notes anyway', 'Your own timesheet helps you check your employer’s records. Fieravend uses the Austrian rules when your job is in Austria.'],
      ] },
    ],
    qa: [
      ['How high is the overtime surcharge in Austria?', '50 percent under section 10 of the Working Time Act. Many collective agreements have their own rules.'],
      ['How much time off do I get for one hour of overtime?', 'The surcharge has to be included in the time off or paid out separately. Without a separate payment, that is one and a half hours per hour of overtime.'],
      ['Can I refuse overtime?', 'Under section 7(6) you may refuse overtime that takes you beyond ten hours a day or 50 a week, without giving a reason.'],
    ],
    sources: [
      ['Austrian Working Time Act, section 10 (overtime pay), RIS, German', 'https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10008238&Paragraf=10'],
      ['Austrian Working Time Act, section 7 (extension, right to refuse), RIS, German', 'https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10008238&Paragraf=7'],
      ['Austrian Working Time Act, section 19f (time credit), RIS, German', 'https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10008238&Paragraf=19f'],
      ['Austrian Working Time Act, section 26 (records), RIS, German', 'https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10008238&Paragraf=26'],
      ['Austrian Working Time Act, section 3 (normal hours), RIS, German', 'https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10008238&Paragraf=3'],
      ['Austrian Working Time Act, section 6 (overtime), RIS, German', 'https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10008238&Paragraf=6'],
      ['Austrian Working Time Act, section 9 (maximum hours), RIS, German', 'https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10008238&Paragraf=9'],
      ['Austrian Working Time Act, section 19d (part time, extra hours), RIS, German', 'https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10008238&Paragraf=19d'],
    ],
    related: ['wochenende', 'mag-teilzeit', 'mag-schweiz'],
  },
};
