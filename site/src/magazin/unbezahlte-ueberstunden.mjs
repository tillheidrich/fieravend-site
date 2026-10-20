/**
 * Magazin: unpaid overtime in numbers (DE, AT, UK). Sources opened on 20.10.2026: BT-Drs. 21/755 (PDF, Tab. 1, 2, 8),
 * IAB press release 03.03.2026, Destatis hourly wage April 2024, DGB-Ausbildungsreport 2025, AK Wien 12.03.2026,
 * TUC (2026 release; tuc.org.uk answered 403, figures from TUC's own news listing via search).
 * Own calculation: 637.5 million h × 25.94 € = 16.5 billion €; 15.6 h ÷ 8 h ≈ 2 working days.
 */
export default {
  id: 'unbezahlt',
  slug: { de: 'unbezahlte-ueberstunden-in-zahlen', en: 'unpaid-overtime-in-numbers' },
  published: '2026-10-20', modified: '2026-10-20', checked: '2026-10-20',
  de: {
    kicker: 'Zahlen',
    title: 'Unbezahlte Überstunden in Zahlen: 637 Millionen Stunden geschenkt',
    desc: 'Mehr als jede zweite Überstunde in Deutschland bleibt unbezahlt. Die Zahlen für 2024 und 2025, nach Branchen, für Azubis, Österreich und Großbritannien, mit Quellen.',
    answer: 'In Deutschland blieben 2024 rund 637,5 Millionen Überstunden unbezahlt, das sind 53,6 Prozent aller Überstunden. 2025 kamen im Schnitt 15,6 unbezahlte Überstunden auf jede beschäftigte Person, mehr als die bezahlten. Wer seine Zeit selbst aufschreibt, sieht, wie viel davon bei ihm landet.',
    read: '6 Minuten',
    sections: [
      { h: 'Mehr als die Hälfte bleibt unbezahlt', p: [
        'Das Institut für Arbeitsmarkt- und Berufsforschung (IAB) rechnet jedes Jahr nach, wie viel in Deutschland gearbeitet wird. Für 2024 kommt es auf knapp 1,19 Milliarden Überstunden. Davon wurden 552 Millionen bezahlt. 637,5 Millionen nicht. Das steht in einer Antwort der Bundesregierung an den Bundestag vom Juli 2025.',
        'Unbezahlt heißt hier: weder mit Geld noch mit einem Zuschlag abgegolten. Ein Teil davon wird später vielleicht mit Freizeit ausgeglichen, ein großer Teil verschwindet einfach. Zehn Minuten früher da, zwanzig länger geblieben, die Pause durchgearbeitet. Das fällt in keinem Monat auf, aber über ein Jahr wird daraus eine Menge.',
      ] },
      { h: 'Pro Kopf: rund zwei Arbeitstage im Jahr', p: [
        'Für 2025 meldet das IAB im Schnitt 15,6 unbezahlte und 11,6 bezahlte Überstunden je beschäftigter Person. Die unbezahlten liegen also vorn, wie schon 2024 (15,1 zu 13,1 Stunden). 15,6 Stunden sind bei einem Achtstundentag knapp zwei volle Arbeitstage, die du im Jahr verschenkst, wenn du genau im Schnitt liegst.',
        'Der Schnitt verdeckt viel: Viele Teilzeitkräfte machen gar keine Überstunden, andere sehr viele. Deshalb hilft dir die Zahl für Deutschland nur als Einordnung. Deine eigene Zahl kennst du erst, wenn du deine Zeiten aufschreibst. Mit dem <a href="@rechner">Überstundenrechner</a> kannst du eine Woche nachrechnen.',
      ] },
      { h: 'Wo es besonders viel ist', p: [
        'Der Mikrozensus 2024 zeigt, wie sich die Überstunden von Vollzeitkräften auf Branchen verteilen. Über alle Branchen sind 61,1 Prozent unbezahlt. In einigen Bereichen ist es fast alles:',
      ], list: [
        ['Erziehung und Unterricht: 96,5 %', 'Hier fallen Schulen und Kitas hinein. Korrekturen am Abend, Elternabende, Konferenzen.'],
        ['Finanz- und Versicherungsdienstleistungen: 80,0 %', 'Banken, Versicherungen, Finanzdienste.'],
        ['Freiberufliche und wissenschaftliche Dienstleistungen: 77,4 %', 'Kanzleien, Büros, Agenturen, Forschung.'],
        ['Information und Kommunikation: 76,7 %', 'IT, Medien, Telekommunikation.'],
      ] },
      { h: 'In der Ausbildung', p: [
        'Auch wer gerade erst anfängt, kennt das. Im DGB-Ausbildungsreport 2025 geben 32,3 Prozent der befragten Auszubildenden an, regelmäßig Überstunden zu machen. Bei angehenden Köchinnen und Köchen sind es 50,6 Prozent. Überstunden sind kein Ausbildungsinhalt. Wenn du in der Ausbildung bist, lohnt sich ein eigener Zettel doppelt: für dich und für das Gespräch mit dem Betrieb.',
      ] },
      { h: 'Was das wert ist', p: [
        'Rechnet man die 637,5 Millionen Stunden mit dem durchschnittlichen Bruttostundenverdienst vom April 2024 (25,94 Euro laut Statistischem Bundesamt), kommt man auf rund 16,5 Milliarden Euro. Das ist eine eigene, grobe Rechnung: Wer unbezahlte Überstunden macht, verdient nicht unbedingt den Durchschnitt, und Zuschläge sind nicht drin. Die Größenordnung zeigt trotzdem, worum es geht.',
      ] },
      { h: 'Nicht nur in Deutschland', p: [
        'In Österreich wurden 2025 laut Arbeiterkammer Wien rund 170 Millionen Mehr- und Überstunden geleistet. 45,9 Millionen davon wurden weder bezahlt noch mit Zeitausgleich abgegolten. In Großbritannien rechnet der Gewerkschaftsbund TUC für 2025 mit unbezahlten Überstunden im Wert von 28,5 Milliarden Pfund. Rund 3,5 Millionen Menschen arbeiten dort regelmäßig länger, ohne Geld dafür.',
        'Die Zahlen sind unterschiedlich erhoben und nicht direkt vergleichbar. Das Bild ist aber überall ähnlich: Ein großer Teil der zusätzlichen Arbeit wird nirgends verbucht.',
      ] },
      { h: 'Was du damit anfangen kannst', p: [
        'Du musst niemandem etwas beweisen, um deine Zeit aufzuschreiben. Ein eigener Stundenzettel ist erst einmal für dich: Du siehst, ob deine Woche passt, ob die Pausen stattfinden und wie viel Plus sich über Monate sammelt. Wenn du irgendwann darüber reden willst, mit deiner Chefin, dem Betriebsrat oder bei einem Jobwechsel, hast du Zahlen statt eines Gefühls.',
        'Was in einen guten Nachweis gehört und wer was zeigen muss, steht im Ratgeber <a href="@nachweis">Überstunden nachweisen</a> und im Artikel <a href="@mag-angeordnet">Wer hat die Überstunden angeordnet?</a>.',
      ] },
    ],
    qa: [
      ['Wie viele Überstunden bleiben in Deutschland unbezahlt?', '2024 waren es laut IAB-Arbeitszeitrechnung 637,5 Millionen Stunden, 53,6 Prozent aller Überstunden. 2025 kamen im Schnitt 15,6 unbezahlte Überstunden auf jede beschäftigte Person.'],
      ['In welcher Branche sind die meisten Überstunden unbezahlt?', 'Nach dem Mikrozensus 2024 in Erziehung und Unterricht: 96,5 Prozent der Überstunden von Vollzeitkräften waren dort unbezahlt.'],
    ],
    sources: [
      ['Deutscher Bundestag, Drucksache 21/755 vom 04.07.2025 (Tabellen 1, 2 und 8, nach IAB-Arbeitszeitrechnung und Mikrozensus 2024)', 'https://dserver.bundestag.de/btd/21/007/2100755.pdf'],
      ['IAB, Presseinformation vom 03.03.2026: Arbeitszeitrechnung 2025', 'https://iab.de/presseinfo/ergebnisse-der-iab-arbeitszeitrechnung-fuer-das-jahr-2025-teilzeitbeschaeftigte-arbeiteten-132-millionen-stunden/'],
      ['Statistisches Bundesamt: Durchschnittliche Bruttostundenverdienste (April 2024: 25,94 €)', 'https://www.destatis.de/DE/Themen/Arbeit/Arbeitsmarkt/Qualitaet-Arbeit/Dimension-2/stundenlohnl.html'],
      ['DGB, Pressemitteilung vom 21.08.2025: Ausbildungsreport 2025', 'https://www.dgb.de/presse/pressemitteilungen/pressemitteilung/dgb-ausbildungsreport-2025/'],
      ['Arbeiterkammer Wien, Presse vom 12.03.2026: Überstunden-Lohnraub endlich stoppen', 'https://wien.arbeiterkammer.at/service/presse/Ueberstunden-Lohnraub-endlich-stoppen-.html'],
      ['TUC: UK workers put in £28 billion in unpaid overtime in the last year (2026)', 'https://www.tuc.org.uk/news/tuc-uk-workers-put-ps28-billion-unpaid-overtime-last-year'],
    ],
    related: ['nachweis', 'rechner', 'mag-angeordnet'],
  },
  en: {
    kicker: 'Numbers',
    title: 'Unpaid overtime in numbers: 637 million hours given away',
    desc: 'More than half of all overtime in Germany goes unpaid. The figures for 2024 and 2025, by sector, for apprentices, Austria and the UK, with sources.',
    answer: 'In Germany, about 637.5 million overtime hours went unpaid in 2024, 53.6 percent of all overtime. In 2025, each employee did 15.6 unpaid overtime hours on average, more than the paid ones. If you write your hours down yourself, you see how much of it lands with you.',
    read: '6 minutes',
    sections: [
      { h: 'More than half goes unpaid', p: [
        'Every year the German Institute for Employment Research (IAB) works out how much people in Germany work. For 2024 it counts just under 1.19 billion overtime hours. 552 million of them were paid. 637.5 million were not. That is in a reply by the German government to parliament from July 2025.',
        'Unpaid here means: not paid in money or with a surcharge. Some of it may be balanced with time off later, much of it simply disappears. Ten minutes early, twenty minutes late, a break worked through. You never notice it in a single month, but over a year it adds up.',
      ] },
      { h: 'Per person: about two working days a year', p: [
        'For 2025 the IAB reports an average of 15.6 unpaid and 11.6 paid overtime hours per employee. So the unpaid ones are ahead, as they were in 2024 (15.1 to 13.1 hours). With an eight-hour day, 15.6 hours are almost two full working days you give away each year if you are exactly average.',
        'The average hides a lot: many part-timers do no overtime at all, others do a great deal. So the national figure only helps you to put things in context. You only know your own number once you write your hours down. The <a href="@rechner">overtime calculator</a> works out one week for you.',
      ] },
      { h: 'Where it is highest', p: [
        'Germany’s 2024 microcensus shows how overtime by full-time employees is spread across sectors. Across all sectors, 61.1 percent is unpaid. In some it is almost all of it:',
      ], list: [
        ['Education: 96.5%', 'This covers schools and nurseries. Marking in the evening, parents’ evenings, staff meetings.'],
        ['Finance and insurance: 80.0%', 'Banks, insurers, financial services.'],
        ['Professional, scientific and technical services: 77.4%', 'Law firms, offices, agencies, research.'],
        ['Information and communication: 76.7%', 'IT, media, telecoms.'],
      ] },
      { h: 'During an apprenticeship', p: [
        'People just starting out know this too. In the German trade union confederation’s 2025 apprenticeship report, 32.3 percent of apprentices surveyed say they regularly work overtime. Among trainee cooks it is 50.6 percent. Overtime is not part of the training. If you are an apprentice, your own record pays off twice: for you, and for the conversation with your employer.',
      ] },
      { h: 'What it is worth', p: [
        'Multiply the 637.5 million hours by the average gross hourly wage of April 2024 (25.94 euros according to the Federal Statistical Office) and you get about 16.5 billion euros. That is our own rough calculation: people who do unpaid overtime do not necessarily earn the average, and surcharges are not included. Still, it shows the scale.',
      ] },
      { h: 'Not just in Germany', p: [
        'In Austria, according to the Vienna Chamber of Labour, about 170 million extra and overtime hours were worked in 2025. 45.9 million of them were neither paid nor given back as time off. In the UK, the Trades Union Congress puts unpaid overtime in 2025 at 28.5 billion pounds. About 3.5 million people there regularly work longer without being paid for it.',
        'The figures are collected differently and cannot be compared directly. But the picture is similar everywhere: a large part of the extra work is never booked anywhere.',
      ] },
      { h: 'What you can do with this', p: [
        'You do not have to prove anything to anyone to write down your time. Your own time sheet is for you first: you see whether your week adds up, whether breaks happen, and how much plus builds up over months. If you ever want to talk about it, with your manager, the works council or when you change jobs, you have numbers instead of a feeling.',
        'What belongs in a good record and who has to show what is in the guide <a href="@nachweis">Proving overtime</a> and the article <a href="@mag-angeordnet">Who ordered the overtime?</a>.',
      ] },
    ],
    qa: [
      ['How much overtime goes unpaid in Germany?', 'In 2024, according to the IAB working-time accounts, 637.5 million hours, 53.6 percent of all overtime. In 2025, each employee did 15.6 unpaid overtime hours on average.'],
      ['Which sector has the most unpaid overtime?', 'According to the 2024 microcensus, education: 96.5 percent of full-time employees’ overtime there was unpaid.'],
    ],
    sources: [
      ['German Bundestag, printed paper 21/755 of 4 July 2025 (tables 1, 2 and 8, based on IAB working-time accounts and the 2024 microcensus)', 'https://dserver.bundestag.de/btd/21/007/2100755.pdf'],
      ['IAB press release of 3 March 2026: working-time accounts 2025 (German)', 'https://iab.de/presseinfo/ergebnisse-der-iab-arbeitszeitrechnung-fuer-das-jahr-2025-teilzeitbeschaeftigte-arbeiteten-132-millionen-stunden/'],
      ['Federal Statistical Office: average gross hourly earnings (April 2024: €25.94, German)', 'https://www.destatis.de/DE/Themen/Arbeit/Arbeitsmarkt/Qualitaet-Arbeit/Dimension-2/stundenlohnl.html'],
      ['DGB press release of 21 August 2025: apprenticeship report 2025 (German)', 'https://www.dgb.de/presse/pressemitteilungen/pressemitteilung/dgb-ausbildungsreport-2025/'],
      ['Vienna Chamber of Labour, press release of 12 March 2026 (German)', 'https://wien.arbeiterkammer.at/service/presse/Ueberstunden-Lohnraub-endlich-stoppen-.html'],
      ['TUC: UK workers put in £28 billion in unpaid overtime in the last year (2026)', 'https://www.tuc.org.uk/news/tuc-uk-workers-put-ps28-billion-unpaid-overtime-last-year'],
    ],
    related: ['nachweis', 'rechner', 'mag-angeordnet'],
  },
};
