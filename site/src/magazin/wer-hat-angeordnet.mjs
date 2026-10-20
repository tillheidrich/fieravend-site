/**
 * Magazin: proving overtime and who ordered it (BAG 04.05.2022 – 5 AZR 359/21). Sources opened 20.10.2026:
 * bundesarbeitsgericht.de (5 AZR 359/21: Rn. 15–16 performance, 18 burden, 22 EuGH has no effect, 31 angeordnet,
 * 32 konkludent, 34–35 gebilligt, 36 geduldet, 37 notwendig), 1 ABR 22/21, §§ 195, 199 BGB, § 26 Abs. 8 AZG (RIS).
 * The "Veranlassung" field in the app is planned (AZK-32), so the text only promises notes, which exist today.
 */
export default {
  id: 'angeordnet',
  slug: { de: 'ueberstunden-wer-hat-angeordnet', en: 'who-ordered-the-overtime' },
  published: '2026-10-20', modified: '2026-10-20', checked: '2026-10-20',
  de: {
    kicker: 'Nachweis',
    title: 'Wer hat die Überstunden angeordnet? Was du neben der Zeit festhalten solltest',
    desc: 'Für bezahlte Überstunden reicht die Uhrzeit allein nicht. Das Bundesarbeitsgericht will auch wissen, wer die Mehrarbeit veranlasst hat. Die fünf Wege, verständlich erklärt.',
    answer: 'Wer Überstunden bezahlt haben will, muss im Streit zwei Sachen zeigen: dass er sie geleistet hat, und dass der Arbeitgeber sie veranlasst hat. Nach dem Bundesarbeitsgericht geht das auf fünf Wegen: ausdrücklich angeordnet, durch zu viel Arbeit stillschweigend angeordnet, nachträglich gebilligt, wissentlich geduldet oder schlicht notwendig. Ein Satz Notiz am selben Tag hilft dir dabei mehr als jede Erinnerung.',
    read: '7 Minuten',
    sections: [
      { h: 'Zeit allein reicht nicht', p: [
        'Sam fährt für einen Lieferdienst. Seit Monaten wird es abends später, weil die Touren länger werden. Sam hat alles aufgeschrieben: jeden Tag Beginn, Ende, Pause. Als er nach dem Plus fragt, heißt es: „Das hat doch keiner von dir verlangt.“',
        'Genau um diese Frage ging es 2022 vor dem Bundesarbeitsgericht. Ein Auslieferungsfahrer wollte 348 Überstunden bezahlt haben. Seine Zeiten waren belegt, sogar durch die Zeiterfassung des Arbeitgebers. Trotzdem hat er verloren. Das Gericht sagte: Wer Überstunden bezahlt haben will, muss nicht nur zeigen, dass er sie gemacht hat, sondern auch, dass der Arbeitgeber sie veranlasst hat oder sie ihm zuzurechnen sind. Und das muss der Beschäftigte darlegen und beweisen.',
      ] },
      { h: 'Die fünf Wege, wie Überstunden dem Arbeitgeber zugerechnet werden', p: [
        'Das Urteil beschreibt, woran man die Veranlassung erkennt. Vereinfacht:',
      ], list: [
        ['Ausdrücklich angeordnet', 'Jemand hat dir gesagt, dass du länger bleiben sollst. Wichtig ist, wer, wann und was. „Chefin, 16:40 Uhr: Bitte noch die Inventur fertig machen.“'],
        ['Stillschweigend angeordnet', 'Dir wurde so viel Arbeit zugeteilt, dass sie in der normalen Zeit nicht zu schaffen war. Dafür reicht es nicht, länger da gewesen zu sein. Es muss klar werden, warum die Arbeit nicht in die normale Zeit gepasst hat.'],
        ['Gebilligt', 'Der Arbeitgeber hat die Stunden hinterher akzeptiert, zum Beispiel indem jemand deinen Stundenzettel mit den Überstunden abzeichnet. Dass er die Zettel nur entgegennimmt, reicht nicht.'],
        ['Geduldet', 'Der Arbeitgeber wusste von den Überstunden und hat nichts dagegen getan. Du musst zeigen, wovon er wusste, woher und seit wann.'],
        ['Notwendig', 'Die Überstunden waren nötig, um die Arbeit zu erledigen. Ein allgemeiner Satz genügt nicht, es braucht konkrete Abläufe: welche Tour, welcher Auftrag, warum keine Pause ging.'],
      ] },
      { h: 'Und die Pflicht zur Zeiterfassung?', p: [
        'Seit dem Urteil des Europäischen Gerichtshofs von 2019 und dem Beschluss des Bundesarbeitsgerichts vom September 2022 müssen Arbeitgeber in Deutschland Beginn, Ende und Dauer der Arbeitszeit erfassen, einschließlich der Überstunden. Viele hofften, dass sich damit auch die Beweislast für Überstunden dreht.',
        'Das Bundesarbeitsgericht hat das im Fall des Fahrers ausdrücklich verneint. Die Erfassungspflicht dient dem Gesundheitsschutz, nicht der Bezahlung. An der Beweislast für die Vergütung ändert sie nichts. Hat dein Betrieb gar kein System, ist dein eigener Zettel deshalb umso wichtiger.',
      ] },
      { h: 'Was du jeden Tag festhalten kannst', p: [
        'Das klingt nach viel Bürokratie. In der Praxis ist es ein Satz am Tag, an dem etwas Besonderes war. Gut sind Notizen, die die Fragen des Gerichts schon beantworten:',
      ], list: [
        ['Wer hat gefragt?', '„Ben (Schichtleitung) bat um Spätdienst, Kollegin krank.“'],
        ['Was war der Grund?', '„Lieferung kam erst 17:30 Uhr, musste noch eingeräumt werden.“'],
        ['Wusste es jemand?', '„Chef war bis 19 Uhr im Laden und hat mich gesehen.“'],
        ['Gab es eine Spur?', 'Mail, Chatnachricht, Dienstplan, Schlüsselprotokoll. Ein Screenshot reicht, abgelegt bei dir, nicht in der App.'],
      ] },
      { h: 'Fristen nicht verpassen', p: [
        'Viele Arbeits- und Tarifverträge haben Ausschlussfristen: Ansprüche verfallen, wenn du sie nicht innerhalb einer bestimmten Zeit schriftlich geltend machst. Wie lang sie sind, steht in deinem Vertrag oder Tarifvertrag. Unabhängig davon verjähren Lohnansprüche in Deutschland nach drei Jahren, gerechnet ab dem Ende des Jahres, in dem sie entstanden sind.',
        'In Österreich kannst du einmal im Monat verlangen, dass dir der Arbeitgeber deine Arbeitszeitaufzeichnungen kostenlos übermittelt (§ 26 Abs. 8 AZG). Das ist ein guter Moment, die eigenen Zahlen danebenzulegen.',
      ] },
      { h: 'So hilft dir Fieravend', p: [
        'In Fieravend hat jeder Block eine Notiz. Was du später nachträgst, bleibt als nachgetragen markiert, und Änderungen stehen in einem Protokoll. Am Monatsende gibt es einen Stundenzettel als PDF mit Prüfsumme. Damit lässt sich zeigen, dass ein Ausdruck zu den Daten in deiner App passt.',
        'Was ein Nachweis sonst noch braucht, steht im Ratgeber <a href="@nachweis">Überstunden nachweisen</a>. Wenn die Mehrarbeit abends am Laptop passiert, lies auch <a href="@mag-laptop">Abends noch am Laptop: Ist das Arbeitszeit?</a>.',
      ] },
    ],
    qa: [
      ['Muss ich beweisen, dass mein Arbeitgeber die Überstunden wollte?', 'Für die Bezahlung ja. Nach dem Bundesarbeitsgericht (5 AZR 359/21) musst du zeigen, dass der Arbeitgeber die Überstunden angeordnet, gebilligt oder geduldet hat oder dass sie notwendig waren.'],
      ['Ändert die Pflicht zur Zeiterfassung etwas an der Beweislast?', 'Nein. Das Bundesarbeitsgericht hat 2022 entschieden, dass die Erfassungspflicht die Beweislast für die Vergütung von Überstunden nicht verschiebt.'],
    ],
    sources: [
      ['BAG, Urteil vom 04.05.2022, 5 AZR 359/21', 'https://www.bundesarbeitsgericht.de/entscheidung/5-azr-359-21/'],
      ['BAG, Beschluss vom 13.09.2022, 1 ABR 22/21', 'https://www.bundesarbeitsgericht.de/entscheidung/1-abr-22-21/'],
      ['EuGH, Urteil vom 14.05.2019, C-55/18', 'https://curia.europa.eu/juris/liste.jsf?num=C-55/18'],
      ['§§ 195, 199 BGB (Verjährung)', 'https://www.gesetze-im-internet.de/bgb/__195.html'],
      ['§ 26 Arbeitszeitgesetz Österreich (RIS)', 'https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10008238&Paragraf=26'],
    ],
    related: ['nachweis', 'rechner', 'mag-laptop'],
  },
  en: {
    kicker: 'Records',
    title: 'Who ordered the overtime? What to record besides the hours',
    desc: 'For paid overtime, the clock alone is not enough. Germany’s Federal Labour Court also wants to know who caused the extra work. The five ways, explained simply.',
    answer: 'If you want overtime paid, in a dispute you have to show two things: that you worked it, and that your employer caused it. According to Germany’s Federal Labour Court there are five ways: expressly ordered, implicitly ordered through too much work, approved afterwards, knowingly tolerated, or simply necessary. A one-line note on the same day helps you more than any memory.',
    read: '7 minutes',
    sections: [
      { h: 'Time alone is not enough', p: [
        'Sam drives for a delivery service. For months the evenings have been getting later because the routes keep growing. Sam has written everything down: start, end and break every day. When he asks about the extra hours, he hears: “Nobody asked you to do that.”',
        'That was exactly the question before the Federal Labour Court in 2022. A delivery driver wanted 348 overtime hours paid. His times were documented, even by the employer’s own time recording. He still lost. The court said: if you want overtime paid, you have to show not only that you worked it, but also that the employer caused it or is responsible for it. And it is the employee who has to set this out and prove it.',
      ] },
      { h: 'Five ways overtime is attributed to the employer', p: [
        'The judgment describes how to recognise that the employer caused the overtime. Simplified:',
      ], list: [
        ['Expressly ordered', 'Someone told you to stay longer. What matters is who, when and what. “Manager, 4:40 pm: please finish the stocktaking.”'],
        ['Implicitly ordered', 'You were given so much work that it could not be done in normal hours. Simply being there longer is not enough. It has to be clear why the work did not fit into normal hours.'],
        ['Approved', 'The employer accepted the hours afterwards, for example by someone signing off your time sheet with the overtime. Merely accepting the sheets is not enough.'],
        ['Tolerated', 'The employer knew about the overtime and did nothing to stop it. You have to show what they knew, how and since when.'],
        ['Necessary', 'The overtime was needed to get the work done. A general statement is not enough; it takes concrete details: which route, which job, why no break was possible.'],
      ] },
      { h: 'What about the duty to record working time?', p: [
        'Since the 2019 judgment of the Court of Justice of the EU and the Federal Labour Court’s decision of September 2022, employers in Germany must record the start, end and duration of working time, including overtime. Many hoped this would also reverse the burden of proof for overtime.',
        'In the driver’s case, the Federal Labour Court expressly said no. The recording duty protects health, not pay. It does not change who has to prove overtime for payment. If your workplace has no system at all, your own record matters all the more.',
      ] },
      { h: 'What you can note down each day', p: [
        'It sounds like a lot of paperwork. In practice it is one sentence on the days something was different. Good notes already answer the court’s questions:',
      ], list: [
        ['Who asked?', '“Ben (shift lead) asked me to cover the late shift, colleague ill.”'],
        ['What was the reason?', '“Delivery only arrived at 5:30 pm, had to be put away.”'],
        ['Did anyone know?', '“Manager was in the shop until 7 pm and saw me.”'],
        ['Is there a trace?', 'Email, chat message, rota, key log. A screenshot is enough, kept by you, not in the app.'],
      ] },
      { h: 'Do not miss deadlines', p: [
        'Many employment contracts and collective agreements have exclusion periods: claims lapse if you do not raise them in writing within a certain time. How long they are is in your contract or collective agreement. Separately, wage claims in Germany become time-barred after three years, counted from the end of the year in which they arose.',
        'In Austria you can ask your employer once a month to send you your working-time records free of charge (section 26(8) AZG). That is a good moment to put your own numbers next to them.',
      ] },
      { h: 'How Fieravend helps', p: [
        'In Fieravend every block has a note. Anything you add later stays marked as added later, and changes are kept in a log. At the end of the month there is a PDF time sheet with a checksum, which lets you show that a printout matches the data in your app.',
        'What else a record needs is in the guide <a href="@nachweis">Proving overtime</a>. If the extra work happens on the laptop in the evening, also read <a href="@mag-laptop">Back on the laptop in the evening: does it count?</a>.',
      ] },
    ],
    qa: [
      ['Do I have to prove that my employer wanted the overtime?', 'For payment, yes. According to the Federal Labour Court (5 AZR 359/21) you have to show that your employer ordered, approved or tolerated the overtime, or that it was necessary.'],
      ['Does the duty to record working time change the burden of proof?', 'No. In 2022 the Federal Labour Court decided that the recording duty does not shift the burden of proof for overtime pay.'],
    ],
    sources: [
      ['Federal Labour Court, judgment of 4 May 2022, 5 AZR 359/21 (German)', 'https://www.bundesarbeitsgericht.de/entscheidung/5-azr-359-21/'],
      ['Federal Labour Court, decision of 13 September 2022, 1 ABR 22/21 (German)', 'https://www.bundesarbeitsgericht.de/entscheidung/1-abr-22-21/'],
      ['CJEU, judgment of 14 May 2019, C-55/18', 'https://curia.europa.eu/juris/liste.jsf?num=C-55/18&language=en'],
      ['Sections 195, 199 German Civil Code (limitation, German)', 'https://www.gesetze-im-internet.de/bgb/__195.html'],
      ['Section 26 Austrian Working Time Act (RIS, German)', 'https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10008238&Paragraf=26'],
    ],
    related: ['nachweis', 'rechner', 'mag-laptop'],
  },
};
