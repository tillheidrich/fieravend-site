/**
 * Magazin: duty to record working time in Germany, state of the law in October 2026. Sources opened 21.10.2026:
 * BAG 13.09.2022 – 1 ABR 22/21 (Leitsatz, Rn. 65: paper may suffice, recording may be delegated to employees),
 * CJEU C-55/18 (case page, judgment 14.05.2019), § 17 MiLoG, Stein Rechtsanwälte (energieundrecht.com, 14.07.2026, draft
 * content and transition periods), digitally-done.com (status 12.10.2026: no cabinet decision yet).
 * Not used: figures on how many firms already record time (no source we could open), any date for entry into force
 * (the draft names none, reports differ).
 */
export default {
  id: 'zeiterfassung',
  slug: { de: 'zeiterfassung-pflicht-stand', en: 'time-recording-duty-germany' },
  published: '2026-10-24', modified: '2026-10-24', checked: '2026-10-21',
  de: {
    kicker: 'Recht, ruhig erklärt',
    title: 'Zeiterfassung ist Pflicht. Und was macht dein Betrieb?',
    desc: 'Seit 2022 müssen Arbeitgeber in Deutschland Arbeitszeit erfassen. Das neue Gesetz dazu ist noch ein Entwurf. Was heute gilt, was geplant ist und was du selbst tun kannst.',
    answer: 'Arbeitgeber in Deutschland müssen Beginn und Ende der täglichen Arbeitszeit erfassen. Das hat das Bundesarbeitsgericht 2022 entschieden. Ein Gesetz, das die Einzelheiten regelt, gibt es noch nicht: Seit Juni 2026 liegt ein Entwurf aus dem Arbeitsministerium vor, ein Kabinettsbeschluss war bis Mitte Oktober 2026 nicht bekannt. Wenn dein Betrieb nichts erfasst, kannst du deine Zeit trotzdem selbst aufschreiben.',
    read: '6 Minuten',
    sections: [
      { h: 'Was seit 2022 gilt', p: [
        'Am 13. September 2022 hat das Bundesarbeitsgericht einen Satz geschrieben, der viele Personalabteilungen überrascht hat: Arbeitgeber sind nach § 3 Abs. 2 Nr. 1 Arbeitsschutzgesetz verpflichtet, Beginn und Ende der täglichen Arbeitszeit ihrer Beschäftigten zu erfassen. Eigentlich ging es in dem Verfahren um die Frage, ob ein Betriebsrat ein elektronisches System durchsetzen kann. Das Gericht sagte nein, und nebenbei sagte es eben auch: Erfasst werden muss sowieso.',
        'Dahinter steht ein Urteil des Europäischen Gerichtshofs vom 14. Mai 2019 (C-55/18). Danach braucht es ein „objektives, verlässliches und zugängliches“ System, mit dem sich die tägliche Arbeitszeit messen lässt. Die Pflicht gilt also nicht erst, wenn ein neues Gesetz kommt. Sie gilt schon.',
      ] },
      { h: 'Papier reicht, und du darfst selbst schreiben', p: [
        'Viele denken bei Zeiterfassung an Stempeluhr und Chip. Das Bundesarbeitsgericht sieht das lockerer. Die Erfassung muss nach seinen Worten „nicht ausnahmslos und zwingend elektronisch“ sein, je nach Tätigkeit und Betrieb können Aufzeichnungen auf Papier genügen. Und der Arbeitgeber darf das Aufschreiben an die Beschäftigten abgeben. Verantwortlich für das System bleibt er.',
        'Für Mika, der in einem kleinen Büro ohne jedes System arbeitet, heißt das: Ein Stundenzettel, den er selbst führt, ist kein Misstrauensvotum. Es ist ziemlich genau die Form, die das Gericht für möglich hält.',
      ] },
      { h: 'Was der Entwurf von 2026 vorsieht', p: [
        'Im Juni 2026 wurde ein Referentenentwurf des Bundesarbeitsministeriums für ein neues Arbeitszeitgesetz bekannt. Nach Berichten von Fachanwälten steht darin: Beginn, Ende und Dauer der Arbeitszeit sollen am selben Tag elektronisch erfasst werden, aufbewahrt mindestens zwei Jahre. Betriebe mit bis zu zehn Beschäftigten dürften dauerhaft auch anders aufschreiben, etwa auf Papier. Für die elektronische Pflicht sind Übergangsfristen geplant: ein Jahr allgemein, zwei Jahre unter 250 Beschäftigten, fünf Jahre unter 50.',
        'Das Wort, auf das es ankommt, ist „Entwurf“. Bis Mitte Oktober 2026 war kein Kabinettsbeschluss bekannt, danach kämen noch Bundestag und Bundesrat. Ein festes Datum für das Inkrafttreten steht im Entwurf nicht. Was am Ende im Gesetz steht, kann sich noch ändern, zum Beispiel bei der Frage, ob es statt acht Stunden am Tag eine Wochengrenze geben soll.',
      ] },
      { h: 'Minijob: Da gibt es die Pflicht schon lange', p: [
        'Für Minijobs ist die Sache seit Jahren klar. Nach § 17 Mindestlohngesetz muss der Arbeitgeber bei geringfügig Beschäftigten Beginn, Ende und Dauer der täglichen Arbeitszeit aufzeichnen, spätestens bis zum Ablauf des siebten Tages danach, und die Aufzeichnungen mindestens zwei Jahre aufheben. Wer einen Minijob hat und nie einen Stundenzettel gesehen hat, darf ruhig einmal nachfragen. Mehr zu den Zahlen ab Januar steht im Artikel <a href="@mag-mindestlohn">Mindestlohn und Minijob 2027</a>.',
      ] },
      { h: 'Was du tun kannst, wenn nichts erfasst wird', list: [
        ['Selbst aufschreiben', 'Beginn, Ende, Pause, jeden Tag. Das hilft dir, wenn es um bezahlte Überstunden geht, denn die musst du im Streitfall darlegen und beweisen.'],
        ['Am selben Tag', 'Was du abends einträgst, stimmt. Was du am Monatsende rekonstruierst, wird ungenau.'],
        ['Nachfragen statt anklagen', 'Ein Satz wie „Wie erfassen wir eigentlich unsere Zeiten?“ reicht oft. Gibt es einen Betriebsrat, ist er die erste Adresse.'],
        ['Keine Firmendaten in privaten Notizen', 'Uhrzeiten und ein kurzer Anlass genügen. Kundennamen und Interna gehören nicht in deinen privaten Zettel.'],
      ] },
      { h: 'Und Fieravend?', p: [
        'Genau für diese Lücke gibt es Fieravend: ein Stundenzettel, der dir gehört, auf deinem Gerät. Er ersetzt nicht das System, das dein Arbeitgeber haben müsste. Er sorgt dafür, dass du deine eigene Zeit kennst, auch wenn sonst niemand mitzählt. Wie ein Nachweis aussieht, der trägt, steht unter <a href="@nachweis">Überstunden nachweisen</a>.',
      ] },
    ],
    qa: [
      ['Muss mein Arbeitgeber meine Arbeitszeit erfassen?', 'Nach dem Beschluss des Bundesarbeitsgerichts vom 13.09.2022 (1 ABR 22/21) ja: Beginn und Ende der täglichen Arbeitszeit. Ausnahmen gibt es nur, wo der Gesetzgeber nach EU-Recht abweichende Regeln getroffen hat.'],
      ['Muss die Zeiterfassung elektronisch sein?', 'Nach heutigem Stand nicht zwingend. Das Bundesarbeitsgericht hält je nach Betrieb auch Papier für möglich. Der Entwurf von 2026 sieht elektronische Erfassung mit Übergangsfristen vor, ist aber noch kein Gesetz.'],
      ['Ab wann gilt das neue Arbeitszeitgesetz?', 'Das steht noch nicht fest. Stand Mitte Oktober 2026 gab es einen Referentenentwurf, aber keinen Kabinettsbeschluss.'],
    ],
    sources: [
      ['BAG, Beschluss vom 13.09.2022, 1 ABR 22/21 (Leitsatz, Rn. 65)', 'https://www.bundesarbeitsgericht.de/entscheidung/1-abr-22-21/'],
      ['EuGH, Urteil vom 14.05.2019, C-55/18 (CCOO)', 'https://curia.europa.eu/jcms/jcms/p1_5066409/en'],
      ['§ 17 Mindestlohngesetz (Aufzeichnungspflicht)', 'https://www.gesetze-im-internet.de/milog/__17.html'],
      ['Stein Rechtsanwälte: Reform des Arbeitszeitgesetzes 2026, Referentenentwurf (14.07.2026)', 'https://www.energieundrecht.com/blog-arbeitsrecht-zivilrecht/arbeitszeitgesetz-reform-2026-referentenentwurf'],
      ['Digitally Done: Arbeitszeiterfassung 2026 und 2027 (Stand 12.10.2026, kein Kabinettsbeschluss)', 'https://digitally-done.com/blog/arbeitszeiterfassung-2026-2027-was-gilt'],
    ],
    related: ['nachweis', 'mag-angeordnet', 'mag-mindestlohn'],
  },
  en: {
    kicker: 'The law, calmly explained',
    title: 'Recording working time is mandatory. What does your employer do?',
    desc: 'Since 2022, employers in Germany have had to record working time. The new law on it is still a draft. What applies now, what is planned and what you can do yourself.',
    answer: 'Employers in Germany must record the start and end of daily working time. The Federal Labour Court decided this in 2022. A law with the details does not exist yet: a draft from the labour ministry has been around since June 2026, and no cabinet decision was known by mid-October 2026. If your employer records nothing, you can still write your own hours down.',
    read: '6 minutes',
    sections: [
      { h: 'What has applied since 2022', p: [
        'On 13 September 2022 the Federal Labour Court wrote a sentence that surprised a lot of HR departments: under section 3(2) no. 1 of the Occupational Safety and Health Act, employers must record the start and end of their employees’ daily working time. The case was really about whether a works council can force an electronic system on the company. The court said no, and along the way it also said: recording is required anyway.',
        'Behind this is a judgment of the Court of Justice of the EU from 14 May 2019 (C-55/18). It calls for an “objective, reliable and accessible” system to measure daily working time. So the duty does not start when a new law arrives. It is already there.',
      ] },
      { h: 'Paper is fine, and you may do the writing', p: [
        'Many people picture time clocks and key fobs. The Federal Labour Court is more relaxed. In its words, recording does not have to be electronic in every case, and depending on the job and the company, paper records can be enough. The employer may also hand the actual writing down to employees. The employer stays responsible for the system.',
        'For Mika, who works in a small office without any system, this means: a timesheet he keeps himself is not a vote of no confidence. It is pretty much the form the court considers possible.',
      ] },
      { h: 'What the 2026 draft plans', p: [
        'In June 2026 a draft for a new Working Time Act from the Federal Ministry of Labour became public. According to employment lawyers who have read it, start, end and length of working time would have to be recorded electronically on the same day and kept for at least two years. Employers with up to ten staff could keep recording another way for good, on paper for example. The electronic duty would come with transition periods: one year in general, two years below 250 employees, five years below 50.',
        'Note the word “draft”. No cabinet decision was known by mid-October 2026, and the Bundestag and Bundesrat would still follow. The draft names no fixed start date. What ends up in the law can still change, for example whether a weekly limit replaces the eight-hour day.',
      ] },
      { h: 'Mini-jobs: this duty is old news', p: [
        'For mini-jobs the rule has been clear for years. Under section 17 of the Minimum Wage Act, employers must record start, end and length of daily working time for marginal employees, by the end of the seventh day after the work at the latest, and keep the records for at least two years. If you have a mini-job and have never seen a timesheet, it is fine to ask. The numbers from January are in the article <a href="@mag-mindestlohn">Minimum wage and mini-jobs in 2027</a>.',
      ] },
      { h: 'What you can do if nothing gets recorded', list: [
        ['Write it down yourself', 'Start, end, break, every day. It helps if paid overtime is ever at stake, because in a dispute you have to set it out and prove it.'],
        ['On the same day', 'What you enter in the evening is right. What you rebuild at the end of the month gets fuzzy.'],
        ['Ask, do not accuse', 'A line like “How do we actually record our hours?” often does it. If there is a works council, go there first.'],
        ['No company data in private notes', 'Times and a short reason are enough. Client names and internal details do not belong in your private record.'],
      ] },
      { h: 'And Fieravend?', p: [
        'Fieravend exists for exactly this gap: a timesheet that belongs to you, on your device. It does not replace the system your employer ought to have. It makes sure you know your own hours, even when nobody else is counting. What a record that holds up looks like is explained in <a href="@nachweis">Proving overtime</a>.',
      ] },
    ],
    qa: [
      ['Does my employer have to record my working time?', 'According to the Federal Labour Court’s decision of 13 September 2022 (1 ABR 22/21), yes: the start and end of daily working time. Exceptions exist only where the legislator has made different rules allowed by EU law.'],
      ['Does time recording have to be electronic?', 'Not necessarily, as things stand. The Federal Labour Court accepts paper in some companies. The 2026 draft plans electronic recording with transition periods, but it is not law yet.'],
      ['When does the new Working Time Act apply?', 'That is not settled. As of mid-October 2026 there was a ministry draft but no cabinet decision.'],
    ],
    sources: [
      ['Federal Labour Court, decision of 13 September 2022, 1 ABR 22/21 (headnote, para. 65, German)', 'https://www.bundesarbeitsgericht.de/entscheidung/1-abr-22-21/'],
      ['Court of Justice of the EU, judgment of 14 May 2019, C-55/18 (CCOO)', 'https://curia.europa.eu/jcms/jcms/p1_5066409/en'],
      ['Section 17 Minimum Wage Act (records, German)', 'https://www.gesetze-im-internet.de/milog/__17.html'],
      ['Stein Rechtsanwälte: Working Time Act reform 2026, ministry draft (14 July 2026, German)', 'https://www.energieundrecht.com/blog-arbeitsrecht-zivilrecht/arbeitszeitgesetz-reform-2026-referentenentwurf'],
      ['Digitally Done: time recording in 2026 and 2027 (status 12 October 2026, no cabinet decision, German)', 'https://digitally-done.com/blog/arbeitszeiterfassung-2026-2027-was-gilt'],
    ],
    related: ['nachweis', 'mag-angeordnet', 'mag-mindestlohn'],
  },
};
