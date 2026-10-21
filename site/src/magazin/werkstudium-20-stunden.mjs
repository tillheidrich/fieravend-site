/**
 * Magazin: working students and the 20-hour rule. Sources opened 21.10.2026: DRV Lexikon "Werkstudentenprivileg"
 * (20 hours, weekends/evenings/nights, 26 weeks, semester breaks, pension insurance not covered by the privilege),
 * § 3 ArbZG, § 2 Abs. 1 ArbZG (several employers are added up).
 * Not used: the exact conditions for a temporary overrun in an open-ended job (DRV only says "unter bestimmten
 * Voraussetzungen"), BAföG income rules, health-insurer figures.
 */
export default {
  id: 'werkstudium',
  slug: { de: 'werkstudium-20-stunden-regel', en: 'working-student-20-hour-rule' },
  published: '2026-11-02', modified: '2026-11-02', checked: '2026-10-21',
  de: {
    kicker: 'Für Studierende',
    title: 'Werkstudi und die 20-Stunden-Regel: Warum du mitzählen solltest',
    desc: 'Wer neben dem Studium arbeitet, bleibt bis 20 Stunden pro Woche in Kranken-, Pflege- und Arbeitslosenversicherung beitragsfrei. Was die Grenze bedeutet und wie ein Stundenzettel hilft.',
    answer: 'Arbeitest du als Studentin oder Student nicht mehr als 20 Stunden pro Woche, bist du laut Deutscher Rentenversicherung in der Kranken-, Pflege- und Arbeitslosenversicherung versicherungsfrei. Mehr als 20 Stunden gehen nur in Ausnahmen, etwa am Wochenende, abends oder nachts bei höchstens 26 Wochen Befristung, oder in den Semesterferien. In der Rentenversicherung zahlst du trotzdem ein. Wer seine Stunden mitschreibt, sieht früh, wenn es knapp wird.',
    read: '5 Minuten',
    sections: [
      { h: 'Die Regel in einem Satz', p: [
        'Das sogenannte Werkstudentenprivileg beruht auf einer Annahme: Wer studiert, steckt Zeit und Kraft vor allem ins Studium. Die Deutsche Rentenversicherung geht davon aus, wenn die Beschäftigung nicht mehr als 20 Stunden pro Woche umfasst. Dann bist du in der Kranken-, Pflege- und Arbeitslosenversicherung versicherungsfrei, egal wie viel du verdienst. In die Rentenversicherung zahlst du ein, denn für die gilt das Privileg nicht.',
      ] },
      { h: 'Wann mehr als 20 Stunden gehen', p: [
        'Ganz starr ist die Grenze nicht. Laut Deutscher Rentenversicherung bleibt es bei der Versicherungsfreiheit, wenn du über 20 Stunden kommst, weil du am Wochenende, abends oder nachts arbeitest, und die Beschäftigung auf höchstens 26 Wochen befristet ist. Jobs nur in den Semesterferien sind unabhängig von der Lage der Arbeitszeit versicherungsfrei. Hast du mehrere solcher befristeten Jobs mit mehr als 20 Wochenstunden, dürfen sie zusammen im Jahr nicht über 26 Wochen kommen.',
        'Schwieriger wird es bei einem unbefristeten Job mit bis zu 20 Stunden, in dem du zeitweise mehr machst. Hier bleibt die Versicherungsfreiheit nach Angaben der Rentenversicherung nur „unter bestimmten Voraussetzungen“ bestehen. Welche das in deinem Fall sind, klären die Personalabteilung oder deine Krankenkasse. Wir haben die Einzelheiten bewusst weggelassen, weil wir sie nicht sauber belegen konnten.',
      ] },
      { h: 'Warum ein eigener Stundenzettel hilft', p: [
        'Ben arbeitet 18 Stunden pro Woche in einem Start-up. Im November ist viel los, er bleibt öfter länger. Niemand zählt mit, im Betrieb gibt es keine Zeiterfassung. Nach vier Wochen merkt er, dass er eher bei 24 Stunden lag. Das ist nicht seine Schuld, und es ist auch nicht sein Job, die Sozialversicherung zu prüfen. Aber er weiß es jetzt, und er kann es ansprechen, bevor aus ein paar Wochen ein halbes Jahr wird.',
        'Ein Stundenzettel zeigt dir die Woche, nicht nur den einzelnen Tag. Er zeigt auch, ob die Stunden über 20 abends oder am Wochenende lagen. Genau das ist für die Ausnahme oben wichtig.',
      ] },
      { h: 'Das Arbeitszeitgesetz gilt trotzdem', p: [
        'Werkstudierende sind ganz normale Beschäftigte. Für sie gelten dieselben Pausen und Ruhezeiten wie für alle anderen, und werktags sind nach § 3 Arbeitszeitgesetz acht Stunden vorgesehen, mit Ausgleich bis zu zehn. Arbeitest du neben dem Werkstudi-Job noch woanders, zählen die Zeiten für das Arbeitszeitgesetz zusammen. Wie das bei zwei Jobs aussieht, steht unter <a href="@zweijobs">Zwei Jobs</a>.',
      ] },
      { h: 'Kurz zum Mitnehmen', list: [
        ['Wochensumme im Blick', 'Nicht der einzelne lange Tag zählt, sondern die Woche.'],
        ['Lage notieren', 'Abends, nachts, Wochenende oder Semesterferien: Schreib dazu, wann du gearbeitet hast.'],
        ['Früh fragen', 'Wenn du merkst, dass es regelmäßig mehr als 20 Stunden werden, sprich mit der Personalabteilung. Die Meldung zur Sozialversicherung macht der Arbeitgeber.'],
        ['Kein Rat zur Versicherung', 'Dieser Text erklärt die Regel allgemein. Ob du in deinem Fall versicherungsfrei bist, beantwortet deine Krankenkasse.'],
      ] },
    ],
    qa: [
      ['Wie viele Stunden darf ich als Werkstudent arbeiten?', 'Für die Versicherungsfreiheit in Kranken-, Pflege- und Arbeitslosenversicherung gilt laut Deutscher Rentenversicherung in der Regel: nicht mehr als 20 Stunden pro Woche. Ausnahmen gibt es für Arbeit am Wochenende, abends, nachts und in den Semesterferien.'],
      ['Zahle ich als Werkstudentin in die Rentenversicherung ein?', 'Ja. Das Werkstudentenprivileg betrifft nur Kranken-, Pflege- und Arbeitslosenversicherung.'],
      ['Spielt die Höhe des Lohns eine Rolle?', 'Für das Werkstudentenprivileg nicht. Laut Rentenversicherung ist die Höhe des Arbeitsentgelts dafür ohne Belang.'],
    ],
    sources: [
      ['Deutsche Rentenversicherung, Lexikon: Werkstudentenprivileg', 'https://www.deutsche-rentenversicherung.de/DRV/DE/Experten/Arbeitgeber-und-Steuerberater/summa-summarum/Lexikon/W/werkstudentenprivileg.html'],
      ['§ 3 Arbeitszeitgesetz (Arbeitszeit)', 'https://www.gesetze-im-internet.de/arbzg/__3.html'],
      ['§ 2 Arbeitszeitgesetz (mehrere Arbeitgeber)', 'https://www.gesetze-im-internet.de/arbzg/__2.html'],
    ],
    related: ['zweijobs', 'mag-pausen', 'mag-teilzeit'],
  },
  en: {
    kicker: 'For students',
    title: 'Working student and the 20-hour rule: why you should keep count',
    desc: 'If you work alongside your degree in Germany, up to 20 hours a week keep you free of health, care and unemployment insurance contributions. What the limit means and how a timesheet helps.',
    answer: 'If you work no more than 20 hours a week as a student, the German pension insurance says you are exempt from health, long-term care and unemployment insurance. More than 20 hours only work in exceptions, such as weekends, evenings or nights with a fixed term of at most 26 weeks, or during semester breaks. You still pay into pension insurance. If you keep track of your hours, you see early when it gets tight.',
    read: '5 minutes',
    sections: [
      { h: 'The rule in one sentence', p: [
        'The so-called working student privilege rests on one assumption: when you study, most of your time and energy goes into your studies. The German pension insurance (DRV) assumes this when the job is no more than 20 hours a week. Then you are exempt from health, long-term care and unemployment insurance, however much you earn. You do pay into pension insurance, because the privilege does not cover it.',
      ] },
      { h: 'When more than 20 hours are possible', p: [
        'The limit is not completely rigid. According to the DRV, the exemption stays if you go over 20 hours because you work at weekends, in the evening or at night, and the job has a fixed term of no more than 26 weeks. Jobs only during semester breaks are exempt whenever the hours fall. If you have several such fixed-term jobs with more than 20 hours a week, together they may not exceed 26 weeks in a year.',
        'It gets trickier with an open-ended job of up to 20 hours in which you sometimes do more. The DRV says the exemption then only continues “under certain conditions”. Your HR team or your health insurer can tell you which ones apply to you. We left the details out on purpose, because we could not source them properly.',
      ] },
      { h: 'Why your own timesheet helps', p: [
        'Ben works 18 hours a week at a start-up. November is busy, and he often stays later. Nobody keeps count, and the company has no time recording. After four weeks he realises he was closer to 24 hours. That is not his fault, and checking social insurance is not his job. But now he knows, and he can raise it before a few weeks turn into half a year.',
        'A timesheet shows you the week, not just the single day. It also shows whether the hours above 20 were in the evening or at the weekend. That is exactly what matters for the exception above.',
      ] },
      { h: 'Working time law still applies', p: [
        'Working students are ordinary employees. The same breaks and rest periods apply to them as to everyone else, and section 3 of the Working Time Act sets eight hours per working day, with up to ten if it evens out. If you also work somewhere else, the hours count together for the Working Time Act. What that looks like with two jobs is explained in <a href="@zweijobs">Two jobs</a>.',
      ] },
      { h: 'To take away', list: [
        ['Watch the weekly total', 'What counts is the week, not the one long day.'],
        ['Note when you worked', 'Evening, night, weekend or semester break: write down when the hours happened.'],
        ['Ask early', 'If you notice it regularly goes above 20 hours, talk to HR. Your employer files the social insurance reports.'],
        ['No insurance advice', 'This text explains the rule in general. Whether you are exempt in your case is a question for your health insurer.'],
      ] },
    ],
    qa: [
      ['How many hours can I work as a working student?', 'For the exemption from health, care and unemployment insurance, the DRV says the usual rule is no more than 20 hours a week. There are exceptions for weekends, evenings, nights and semester breaks.'],
      ['Do I pay into pension insurance as a working student?', 'Yes. The working student privilege only covers health, long-term care and unemployment insurance.'],
      ['Does my pay matter?', 'Not for the working student privilege. According to the DRV, the amount you earn does not matter for it.'],
    ],
    sources: [
      ['Deutsche Rentenversicherung, glossary: working student privilege (German)', 'https://www.deutsche-rentenversicherung.de/DRV/DE/Experten/Arbeitgeber-und-Steuerberater/summa-summarum/Lexikon/W/werkstudentenprivileg.html'],
      ['Section 3 Working Time Act (working hours, German)', 'https://www.gesetze-im-internet.de/arbzg/__3.html'],
      ['Section 2 Working Time Act (several employers, German)', 'https://www.gesetze-im-internet.de/arbzg/__2.html'],
    ],
    related: ['zweijobs', 'mag-pausen', 'mag-teilzeit'],
  },
};
