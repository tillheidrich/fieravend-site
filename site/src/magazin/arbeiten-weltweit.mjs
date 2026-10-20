/**
 * Magazin: working outside Germany, the basics worldwide. Sources opened 20.10.2026: Directive 2003/88/EC Art. 3, 4, 6, 7
 * (EUR-Lex), gov.uk (maximum weekly working hours, opting out, rest breaks), U.S. DOL (overtime page; fact sheet #22
 * hours worked), Fair Work Ombudsman (right to disconnect, via search on fairwork.gov.au), ILO article on Convention
 * No. 1 (adopted 1919, 46 of 187 member States ratified), C132 Art. 3(3) text (three working weeks, via search), § 26
 * Abs. 8 AZG (RIS). Dropped: Japan, India, Brazil, Ontario details (only secondary sources or not checked).
 * What Fieravend does today: DE, AT, CH packs; other EU countries get the EU baseline; no law hints elsewhere.
 */
export default {
  id: 'welt',
  slug: { de: 'arbeiten-im-ausland-arbeitszeit', en: 'working-hours-around-the-world' },
  published: '2026-10-20', modified: '2026-10-20', checked: '2026-10-20',
  de: {
    kicker: 'Welt',
    title: 'Arbeiten außerhalb Deutschlands: Was bei der Arbeitszeit überall ähnlich ist',
    desc: 'Elf Stunden Ruhe in der EU, 48 Stunden mit Opt-out in Großbritannien, keine Obergrenze in den USA: Die Grundregeln zur Arbeitszeit in Europa und weltweit, kurz und mit Quellen.',
    answer: 'Welche Regeln für deine Arbeitszeit gelten, hängt vom Land ab, in dem du arbeitest, nicht von deiner Handysprache. In der EU gelten Mindestregeln für alle: 11 Stunden Ruhe am Tag, eine Pause ab mehr als 6 Stunden, im Schnitt höchstens 48 Stunden die Woche und 4 Wochen bezahlter Urlaub. Außerhalb der EU unterscheiden sich die Regeln stark. Aufschreiben hilft überall.',
    read: '7 Minuten',
    sections: [
      { h: 'Das Land deiner Arbeit zählt', p: [
        'Sam kommt aus Polen und arbeitet in einem Hotel in Österreich. Familie Berg lebt in Deutschland, Herr Berg pendelt in die Schweiz. Welche Regeln gelten? Im Grundsatz die des Landes, in dem gearbeitet wird. Darum fragt Fieravend bei jedem Job nach dem Arbeitsort und rechnet danach, nicht nach der Sprache deines iPhones.',
        'Für Deutschland, Österreich und die Schweiz kennt Fieravend die Gesetze im Detail: Pausen, Ruhezeit, Höchstarbeitszeit, Feiertage. Für andere EU-Länder rechnet die App nach den Mindestregeln der EU. Für Länder außerhalb der EU gibt es noch keine Gesetzes-Hinweise. Lieber keine Hinweise als falsche.',
      ] },
      { h: 'EU: Mindestregeln für alle', p: [
        'Die Arbeitszeitrichtlinie 2003/88/EG legt fest, was in jedem EU-Land mindestens gilt. Die Länder dürfen mehr Schutz geben, aber nicht weniger:',
      ], list: [
        ['11 Stunden Ruhe', 'am Stück je 24 Stunden (Art. 3).'],
        ['Pause', 'wenn der Arbeitstag länger als sechs Stunden ist. Wie lang, regeln die Länder oder Tarifverträge (Art. 4).'],
        ['48 Stunden', 'im Schnitt je Woche, Überstunden eingerechnet (Art. 6).'],
        ['4 Wochen Urlaub', 'bezahlt, mindestens (Art. 7).'],
      ] },
      { h: 'Deutschland, Österreich, Schweiz', p: [
        'Deutschland geht etwas weiter: Pause von 30 Minuten bei mehr als sechs Stunden, 45 bei mehr als neun, werktags in der Regel höchstens acht, bis zu zehn Stunden. Mehr dazu in <a href="@mag-frueher">Heute früher gehen</a>. In Österreich hast du einmal im Monat das Recht, dir deine Arbeitszeitaufzeichnungen vom Arbeitgeber kostenlos übermitteln zu lassen (§ 26 Abs. 8 AZG). Die Schweiz ist nicht in der EU und hat ein eigenes Arbeitsgesetz. Fieravend rechnet für alle drei Länder nach ihren eigenen Regeln.',
      ] },
      { h: 'Großbritannien: 48 Stunden, aber mit Opt-out', p: [
        'Im Vereinigten Königreich darfst du im Schnitt nicht mehr als 48 Stunden pro Woche arbeiten, normalerweise gemittelt über 17 Wochen. Wer 18 oder älter ist, kann freiwillig und schriftlich darauf verzichten. Niemand darf dich dafür entlassen oder schlechter behandeln, dass du das nicht willst. Den Verzicht kannst du jederzeit kündigen, mit mindestens sieben Tagen Frist. Die Vereinbarung kann eine längere Frist vorsehen, höchstens drei Monate.',
        'Dazu kommen 11 Stunden Ruhe zwischen zwei Arbeitstagen, 24 Stunden am Stück je Woche (oder 48 je zwei Wochen) und eine Pause von 20 Minuten, wenn der Tag länger als sechs Stunden ist.',
      ] },
      { h: 'USA: keine Obergrenze, dafür Geld', p: [
        'Das Bundesgesetz der USA (Fair Labor Standards Act) setzt für Beschäftigte ab 16 Jahren keine Höchstgrenze an Stunden pro Woche. Es regelt stattdessen das Geld: Wer nicht ausgenommen ist, bekommt für jede Stunde über 40 in der Arbeitswoche mindestens das Anderthalbfache des normalen Lohns. Einzelne Bundesstaaten haben eigene, teils strengere Regeln.',
        'Ein Satz aus den Regeln des US-Arbeitsministeriums passt gut zu diesem Magazin: Arbeit, die nicht verlangt, aber zugelassen wurde, ist Arbeitszeit und muss bezahlt werden. Bleibt jemand freiwillig länger, um eine Aufgabe fertig zu machen, zählt das. Der Grund ist egal.',
      ] },
      { h: 'Australien: Recht auf Nichterreichbarkeit', p: [
        'Seit dem 26. August 2024 dürfen Beschäftigte in Australien Kontakt außerhalb ihrer Arbeitszeit ablehnen, also Mails, Anrufe und Nachrichten nicht lesen oder beantworten, solange das nicht unangemessen ist. Zuerst galt das für Betriebe ab 15 Beschäftigten, seit dem 26. August 2025 auch für kleinere. Kontakt nach Feierabend ist damit nicht verboten. Aber nicht zu antworten, ist dort ausdrücklich erlaubt.',
      ] },
      { h: 'Was weltweit als Untergrenze gilt', p: [
        'Die Internationale Arbeitsorganisation (ILO) hat schon 1919 ihr erstes Übereinkommen beschlossen: acht Stunden am Tag, 48 in der Woche, für die Industrie. Ein späteres Übereinkommen (Nr. 132 von 1970) nennt mindestens drei Arbeitswochen bezahlten Urlaub im Jahr. Solche Übereinkommen gelten aber nur in Staaten, die sie ratifiziert haben, und sie binden die Staaten, nicht direkt die Arbeitgeber. Das erste haben laut ILO 46 von 187 Mitgliedstaaten ratifiziert.',
      ] },
      { h: 'Was überall hilft', p: [
        'Egal, wo du arbeitest: Wer seine Zeiten aufschreibt, sieht, was passiert. Beginn, Ende, Pausen, und bei Mehrarbeit ein Satz, wer sie wollte. Mit diesen Zahlen kannst du in jedem Land besser fragen, ob alles stimmt. Ob du einen Anspruch hast, klären vor Ort Gewerkschaft, Arbeiterkammer, Behörde oder eine Anwältin.',
        'Wie groß die unsichtbare Mehrarbeit in Deutschland, Österreich und Großbritannien ist, zeigt der Artikel <a href="@mag-unbezahlt">Unbezahlte Überstunden in Zahlen</a>.',
      ] },
    ],
    qa: [
      ['Welche Arbeitszeitregeln gelten, wenn ich im Ausland arbeite?', 'Im Grundsatz die des Landes, in dem du arbeitest. In der EU gelten dazu Mindestregeln aus der Richtlinie 2003/88/EG: 11 Stunden Ruhe, Pause ab mehr als 6 Stunden, im Schnitt höchstens 48 Stunden pro Woche, 4 Wochen Urlaub.'],
      ['Gibt es in den USA eine Höchstarbeitszeit?', 'Auf Bundesebene nicht für Beschäftigte ab 16 Jahren. Für nicht ausgenommene Beschäftigte gibt es ab der 41. Stunde in der Arbeitswoche mindestens den anderthalbfachen Lohn.'],
    ],
    sources: [
      ['Richtlinie 2003/88/EG über bestimmte Aspekte der Arbeitszeitgestaltung (EUR-Lex)', 'https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32003L0088'],
      ['GOV.UK: Maximum weekly working hours', 'https://www.gov.uk/maximum-weekly-working-hours'],
      ['GOV.UK: Rest breaks at work', 'https://www.gov.uk/rest-breaks-work'],
      ['U.S. Department of Labor: Overtime Pay', 'https://www.dol.gov/agencies/whd/overtime'],
      ['U.S. Department of Labor: Fact Sheet #22, Hours Worked', 'https://www.dol.gov/agencies/whd/fact-sheets/22-flsa-hours-worked'],
      ['Fair Work Ombudsman: Right to disconnect', 'https://www.fairwork.gov.au/employment-conditions/right-to-disconnect'],
      ['ILO: Convention No. 1, a landmark for workers’ rights', 'https://www.ilo.org/resource/article/convention-no-1-landmark-workers%E2%80%99-rights'],
      ['ILO-Übereinkommen 132 über den bezahlten Jahresurlaub (Übersicht)', 'https://en.wikipedia.org/wiki/Holidays_with_Pay_Convention_(Revised),_1970'],
      ['§ 26 Arbeitszeitgesetz Österreich (RIS)', 'https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10008238&Paragraf=26'],
    ],
    related: ['zweijobs', 'feierabend', 'mag-unbezahlt'],
  },
  en: {
    kicker: 'World',
    title: 'Working outside Germany: what working-time rules have in common',
    desc: 'Eleven hours of rest in the EU, 48 hours with an opt-out in the UK, no cap in the US: the basic working-time rules in Europe and around the world, short and with sources.',
    answer: 'Which rules apply to your working hours depends on the country you work in, not the language of your phone. In the EU, minimum rules apply to everyone: 11 hours of daily rest, a break once the day is longer than 6 hours, at most 48 hours a week on average and 4 weeks of paid leave. Outside the EU the rules differ a lot. Writing your hours down helps everywhere.',
    read: '7 minutes',
    sections: [
      { h: 'The country you work in counts', p: [
        'Sam is from Poland and works at a hotel in Austria. The Berg family lives in Germany, and Mr Berg commutes to Switzerland. Which rules apply? In principle, those of the country where the work is done. That is why Fieravend asks for the place of work for each job and calculates by that, not by your iPhone’s language.',
        'For Germany, Austria and Switzerland, Fieravend knows the law in detail: breaks, rest periods, maximum hours, public holidays. For other EU countries the app uses the EU minimum rules. For countries outside the EU there are no law hints yet. Better no hints than wrong ones.',
      ] },
      { h: 'EU: minimum rules for everyone', p: [
        'The Working Time Directive 2003/88/EC sets what applies at least in every EU country. Countries may give more protection, not less:',
      ], list: [
        ['11 hours of rest', 'in a row per 24 hours (Art. 3).'],
        ['A break', 'when the working day is longer than six hours. How long is set by each country or by collective agreements (Art. 4).'],
        ['48 hours', 'per week on average, overtime included (Art. 6).'],
        ['4 weeks of leave', 'paid, at least (Art. 7).'],
      ] },
      { h: 'Germany, Austria, Switzerland', p: [
        'Germany goes a little further: a 30-minute break for more than six hours, 45 for more than nine, usually at most eight hours per working day, up to ten. More in <a href="@mag-frueher">Leaving early today</a>. In Austria you have the right, once a month, to have your employer send you your working-time records free of charge (section 26(8) AZG). Switzerland is not in the EU and has its own Labour Act. Fieravend calculates for all three countries by their own rules.',
      ] },
      { h: 'United Kingdom: 48 hours, with an opt-out', p: [
        'In the UK you cannot work more than 48 hours a week on average, normally averaged over 17 weeks. If you are 18 or over, you can opt out voluntarily and in writing. You cannot be dismissed or treated unfairly for refusing. You can cancel the opt-out at any time with at least seven days’ notice, or up to three months if your agreement says so.',
        'On top of that: 11 hours of rest between working days, 24 hours in a row each week (or 48 each fortnight) and a 20-minute break if the day is longer than six hours.',
      ] },
      { h: 'United States: no cap, but money', p: [
        'The US federal law (Fair Labor Standards Act) sets no limit on weekly hours for employees aged 16 and over. Instead it regulates pay: non-exempt employees get at least one and a half times their regular rate for every hour over 40 in a workweek. Individual states have their own rules, some of them stricter.',
        'One sentence from the US Department of Labor fits this magazine well: work not requested but suffered or permitted is work time that must be paid. If someone voluntarily stays on to finish a task, it counts. The reason does not matter.',
      ] },
      { h: 'Australia: a right to disconnect', p: [
        'Since 26 August 2024, employees in Australia may refuse contact outside their working hours, meaning not reading or replying to emails, calls and messages, unless that is unreasonable. At first it applied to employers with 15 or more employees, and since 26 August 2025 to smaller ones too. After-hours contact is not banned. But not replying is expressly allowed.',
      ] },
      { h: 'What counts as a floor worldwide', p: [
        'The International Labour Organization (ILO) adopted its very first convention in 1919: eight hours a day, 48 a week, in industry. A later convention (No. 132 of 1970) sets at least three working weeks of paid leave a year. But such conventions only apply in states that have ratified them, and they bind states, not employers directly. According to the ILO, 46 of its 187 member States have ratified the first one.',
      ] },
      { h: 'What helps everywhere', p: [
        'Wherever you work: writing your hours down shows you what is happening. Start, end, breaks, and for extra work one sentence on who wanted it. With these numbers you can ask better in any country whether everything is right. Whether you have a claim is something a union, labour office, authority or lawyer can clarify locally.',
        'How big the invisible extra work is in Germany, Austria and the UK is shown in <a href="@mag-unbezahlt">Unpaid overtime in numbers</a>.',
      ] },
    ],
    qa: [
      ['Which working-time rules apply if I work abroad?', 'In principle those of the country you work in. In the EU, minimum rules from Directive 2003/88/EC apply as well: 11 hours of rest, a break for more than 6 hours, at most 48 hours a week on average, 4 weeks of leave.'],
      ['Is there a maximum number of working hours in the US?', 'Not at federal level for employees aged 16 and over. Non-exempt employees get at least one and a half times their regular rate from the 41st hour in a workweek.'],
    ],
    sources: [
      ['Directive 2003/88/EC concerning certain aspects of the organisation of working time (EUR-Lex)', 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32003L0088'],
      ['GOV.UK: Maximum weekly working hours', 'https://www.gov.uk/maximum-weekly-working-hours'],
      ['GOV.UK: Rest breaks at work', 'https://www.gov.uk/rest-breaks-work'],
      ['U.S. Department of Labor: Overtime Pay', 'https://www.dol.gov/agencies/whd/overtime'],
      ['U.S. Department of Labor: Fact Sheet #22, Hours Worked', 'https://www.dol.gov/agencies/whd/fact-sheets/22-flsa-hours-worked'],
      ['Fair Work Ombudsman: Right to disconnect', 'https://www.fairwork.gov.au/employment-conditions/right-to-disconnect'],
      ['ILO: Convention No. 1, a landmark for workers’ rights', 'https://www.ilo.org/resource/article/convention-no-1-landmark-workers%E2%80%99-rights'],
      ['ILO Convention 132, Holidays with Pay (overview)', 'https://en.wikipedia.org/wiki/Holidays_with_Pay_Convention_(Revised),_1970'],
      ['Section 26 Austrian Working Time Act (RIS, German)', 'https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10008238&Paragraf=26'],
    ],
    related: ['zweijobs', 'feierabend', 'mag-unbezahlt'],
  },
};
