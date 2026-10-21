/**
 * Magazin: Switzerland, Überstunden vs. Überzeit. Sources opened 21.10.2026: ch.ch (federal portal, definitions,
 * 45/50 hours, 25 %, 170/140 hours, 2 hours a day, 14 weeks / 12 months, first 60 hours for office staff),
 * Art. 321c OR (text via droit-bilingue.ch, not the official publication), SECO "Arbeitszeiterfassung"
 * (Art. 73 ArGV 1, Art. 73a/73b, simplified recording below 50 employees).
 * Not used: Art. 9 and 12/13 ArG directly (fedlex needs JavaScript, could not be loaded), cantonal rules, figures on
 * how much Überzeit is worked.
 */
export default {
  id: 'schweiz',
  slug: { de: 'schweiz-ueberstunden-ueberzeit', en: 'switzerland-overtime-and-excess-hours' },
  published: '2026-11-15', modified: '2026-11-15', checked: '2026-10-21',
  de: {
    kicker: 'Schweiz',
    title: 'Überstunden oder Überzeit? Der Unterschied in der Schweiz',
    desc: 'In der Schweiz gibt es zwei Arten von Mehrarbeit: Überstunden über dem Vertrag und Überzeit über dem Gesetz. Für beide gelten andere Regeln beim Zuschlag. Ein ruhiger Überblick.',
    answer: 'Überstunden sind in der Schweiz Stunden über deiner vertraglichen Arbeitszeit, solange die gesetzliche Höchstarbeitszeit von 45 oder 50 Stunden pro Woche nicht überschritten ist. Was darüber liegt, ist Überzeit. Für Überstunden sieht das Obligationenrecht 25 Prozent Zuschlag vor, wenn schriftlich nichts anderes vereinbart ist. Für Überzeit nennt das Bundesportal ch.ch einen Zuschlag von mindestens 25 Prozent oder Freizeit von gleicher Dauer.',
    read: '6 Minuten',
    sections: [
      { h: 'Zwei Grenzen, zwei Wörter', p: [
        'Sam arbeitet in Basel im Büro, vertraglich 42 Stunden pro Woche. Für Büroangestellte liegt die gesetzliche Höchstarbeitszeit bei 45 Stunden. Arbeitet Sam in einer Woche 44 Stunden, sind das zwei Überstunden: mehr als im Vertrag, aber noch unter dem Gesetz. Arbeitet Sam 47 Stunden, sind drei davon Überstunden und zwei Überzeit.',
        'Die Höchstarbeitszeit beträgt 45 Stunden für Beschäftigte in Industriebetrieben, für Büropersonal, technische und andere Angestellte und für das Verkaufspersonal in Grossbetrieben des Detailhandels. Für alle anderen sind es 50 Stunden.',
      ] },
      { h: 'Überstunden: Vertrag und Obligationenrecht', p: [
        'Überstunden sind in Art. 321c des Obligationenrechts geregelt. Du musst sie leisten, soweit du dazu in der Lage bist und es dir zugemutet werden kann. Mit deinem Einverständnis kann der Arbeitgeber sie durch Freizeit von mindestens gleicher Dauer ausgleichen. Wird nicht ausgeglichen, gibt es den normalen Lohn und einen Zuschlag von mindestens einem Viertel, also 25 Prozent.',
        'Dieser Zuschlag lässt sich aber abbedingen: schriftlich, durch Normalarbeitsvertrag oder Gesamtarbeitsvertrag. Viele Arbeitsverträge enthalten deshalb Sätze wie „Überstunden sind mit dem Lohn abgegolten“. Bei Kaderleuten ist das nach dem Bundesportal ch.ch die Regel. Lies deinen Vertrag an dieser Stelle genau.',
      ] },
      { h: 'Überzeit: das Arbeitsgesetz', p: [
        'Überzeit ist nur in Ausnahmen erlaubt, etwa bei dringender Arbeit oder ausserordentlichem Arbeitsanfall, bei Inventar, Rechnungsabschluss und Liquidation oder um Betriebsstörungen zu vermeiden oder zu beheben. Sie ist auf zwei Stunden pro Tag begrenzt und im Jahr auf 170 Stunden bei der 45-Stunden-Woche, auf 140 Stunden bei der 50-Stunden-Woche.',
        'Für Überzeit gibt es mindestens 25 Prozent Zuschlag. Statt des Zuschlags kann Freizeit von gleicher Dauer gewährt werden, innerhalb von 14 Wochen oder eines vereinbarten Zeitraums von höchstens zwölf Monaten. Eine Ausnahme nennt ch.ch: Büropersonal und einige andere Gruppen bekommen für die ersten 60 Stunden Überzeit im Jahr keinen Zuschlag.',
      ] },
      { h: 'Wer zählt mit?', p: [
        'Nach der Verordnung 1 zum Arbeitsgesetz (Art. 73) muss der Arbeitgeber Verzeichnisse führen, aus denen Dauer, Beginn und Ende der täglichen und wöchentlichen Arbeitszeit hervorgehen, auch Pausen ab einer halben Stunde. Seit 2016 gibt es zwei Lockerungen: einen Verzicht auf die Erfassung unter bestimmten Bedingungen (Art. 73a) und eine vereinfachte Erfassung (Art. 73b). In Betrieben mit weniger als 50 Beschäftigten kann die vereinfachte Erfassung laut SECO schriftlich mit jeder einzelnen Person vereinbart werden.',
        'Gerade in kleinen Betrieben schreibt deshalb oft niemand genau mit. Wer wissen will, wann aus Überstunden Überzeit wird, braucht die Wochensumme. Fieravend rechnet mit den Schweizer Grenzen, wenn dein Job in der Schweiz liegt, und zeigt sie als ruhigen Hinweis.',
      ] },
      { h: 'Kurz zum Mitnehmen', list: [
        ['Vertrag lesen', 'Steht dort, dass Überstunden mit dem Lohn abgegolten sind? Art. 321c OR erlaubt das für Überstunden. Für Überzeit nennt ch.ch diese Möglichkeit nicht.'],
        ['Wochensumme führen', 'Ob eine Stunde Überstunde oder Überzeit ist, entscheidet sich erst am Ende der Woche.'],
        ['Kompensation festhalten', 'Wenn du Freizeit statt Geld nimmst, schreib das Datum und die Stunden auf.'],
      ] },
    ],
    qa: [
      ['Was ist der Unterschied zwischen Überstunden und Überzeit?', 'Überstunden liegen über deiner vertraglichen Arbeitszeit, aber unter der gesetzlichen Höchstarbeitszeit von 45 oder 50 Stunden. Überzeit liegt über dieser Höchstarbeitszeit.'],
      ['Gibt es für Überstunden in der Schweiz einen Zuschlag?', 'Nach Art. 321c OR 25 Prozent, wenn die Stunden nicht durch Freizeit ausgeglichen werden und schriftlich nichts anderes vereinbart ist.'],
      ['Wie viel Überzeit ist erlaubt?', 'Laut ch.ch höchstens zwei Stunden pro Tag und 170 Stunden im Jahr bei 45 Stunden Höchstarbeitszeit, 140 Stunden bei 50.'],
    ],
    sources: [
      ['ch.ch (Bundesportal): Überstunden und Überzeit', 'https://ch.ch/de/uberstunden-und-uberzeit'],
      ['Art. 321c OR (Überstundenarbeit), Text bei droit-bilingue.ch', 'https://www.droit-bilingue.ch/en-de/2/22/220-321c-414.html'],
      ['SECO: Arbeitszeiterfassung (Art. 73, 73a, 73b ArGV 1)', 'https://www.seco.admin.ch/de/arbeitszeiterfassung'],
    ],
    related: ['wochenende', 'mag-oesterreich', 'mag-welt'],
  },
  en: {
    kicker: 'Switzerland',
    title: 'Overtime or excess hours? The difference in Switzerland',
    desc: 'Switzerland has two kinds of extra work: overtime above your contract and excess hours above the legal limit. Different rules apply to the surcharge. A calm overview.',
    answer: 'In Switzerland, overtime (“Überstunden”) means hours above your contractual working time, as long as the legal maximum of 45 or 50 hours a week is not exceeded. Anything above that is excess hours (“Überzeit”). For overtime, the Code of Obligations sets a 25 percent surcharge unless something else was agreed in writing. For excess hours, the federal portal ch.ch names a surcharge of at least 25 percent or time off of equal length.',
    read: '6 minutes',
    sections: [
      { h: 'Two limits, two words', p: [
        'Sam works in an office in Basel, 42 hours a week by contract. For office staff the legal maximum is 45 hours. If Sam works 44 hours one week, that is two hours of overtime: more than the contract, but still under the law. If Sam works 47 hours, three are overtime and two are excess hours.',
        'The maximum is 45 hours for people in industrial companies, for office staff, technical and other salaried employees, and for sales staff in large retail businesses. For everyone else it is 50 hours.',
      ] },
      { h: 'Overtime: your contract and the Code of Obligations', p: [
        'Overtime is governed by Art. 321c of the Code of Obligations. You have to work it as far as you are able and it is reasonable to ask. With your consent, the employer can balance it with time off of at least the same length. If it is not balanced, you get your normal pay plus a surcharge of at least one quarter, so 25 percent.',
        'That surcharge can be excluded, though: in writing, or by a standard or collective employment contract. That is why many contracts say something like “overtime is covered by the salary”. For senior staff this is the norm, according to the federal portal ch.ch. Read that part of your contract carefully.',
      ] },
      { h: 'Excess hours: the Labour Act', p: [
        'Excess hours are only allowed in exceptional cases, such as urgent work or an unusual workload, stocktaking, year-end closing and liquidation, or to prevent or fix operational disruptions. They are capped at two hours a day, and at 170 hours a year under the 45-hour week or 140 hours under the 50-hour week.',
        'Excess hours carry a surcharge of at least 25 percent. Instead of the surcharge, time off of equal length can be given, within 14 weeks or an agreed period of at most twelve months. ch.ch names one exception: office staff and some other groups get no surcharge for the first 60 excess hours in a year.',
      ] },
      { h: 'Who keeps count?', p: [
        'Under Ordinance 1 to the Labour Act (Art. 73), employers must keep records showing the length, start and end of daily and weekly working time, including breaks of half an hour or more. Since 2016 there have been two relaxations: waiving the recording under certain conditions (Art. 73a) and simplified recording (Art. 73b). According to SECO, companies with fewer than 50 employees can agree simplified recording in writing with each person.',
        'So especially in small companies, nobody may be keeping a precise record. If you want to know when overtime turns into excess hours, you need the weekly total. Fieravend uses the Swiss limits when your job is in Switzerland and shows them as a calm hint.',
      ] },
      { h: 'To take away', list: [
        ['Read your contract', 'Does it say overtime is covered by your salary? Art. 321c allows that for overtime. ch.ch does not mention this option for excess hours.'],
        ['Keep the weekly total', 'Whether an hour is overtime or excess hours only becomes clear at the end of the week.'],
        ['Record time off', 'If you take time off instead of money, write down the date and the hours.'],
      ] },
    ],
    qa: [
      ['What is the difference between overtime and excess hours?', 'Overtime is above your contractual hours but below the legal maximum of 45 or 50 hours a week. Excess hours are above that maximum.'],
      ['Is there a surcharge for overtime in Switzerland?', 'Under Art. 321c of the Code of Obligations, 25 percent if the hours are not balanced with time off and nothing else was agreed in writing.'],
      ['How many excess hours are allowed?', 'According to ch.ch, at most two hours a day and 170 hours a year with a 45-hour maximum, 140 hours with a 50-hour maximum.'],
    ],
    sources: [
      ['ch.ch (federal portal): overtime and excess hours (German)', 'https://ch.ch/de/uberstunden-und-uberzeit'],
      ['Art. 321c Code of Obligations (overtime), text at droit-bilingue.ch', 'https://www.droit-bilingue.ch/en-de/2/22/220-321c-414.html'],
      ['SECO: time recording (Art. 73, 73a, 73b ArGV 1, German)', 'https://www.seco.admin.ch/de/arbeitszeiterfassung'],
    ],
    related: ['wochenende', 'mag-oesterreich', 'mag-welt'],
  },
};
