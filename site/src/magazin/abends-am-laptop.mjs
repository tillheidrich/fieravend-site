/**
 * Magazin: evening laptop work is working time, and what it means for the rest period. Sources opened 20.10.2026:
 * §§ 2, 5, 22 ArbZG (gesetze-im-internet.de), BAG 23.08.2023 – 5 AZR 349/22 (Rn. 48–50), BAG 04.05.2022 – 5 AZR 359/21,
 * Directive 2003/88/EC Art. 3 (EUR-Lex), Fair Work Ombudsman (right to disconnect, via search on fairwork.gov.au).
 * Not used (not verifiable): a fixed "15 minutes" threshold from legal literature; DGB-Index reachability figures.
 */
export default {
  id: 'laptop',
  slug: { de: 'abends-am-laptop-arbeitszeit', en: 'evening-laptop-work-is-working-time' },
  published: '2026-10-20', modified: '2026-10-20', checked: '2026-10-20',
  de: {
    kicker: 'Recht, ruhig erklärt',
    title: 'Abends noch am Laptop: Ist das Arbeitszeit?',
    desc: 'Mails um 21 Uhr, die Präsentation noch schnell fertig: Das ist Arbeitszeit, egal wo. Was das für deine Ruhezeit heißt, was nicht zählt und wie du es festhältst.',
    answer: 'Ja. Wenn du abends zu Hause Mails beantwortest oder an einer Präsentation sitzt, ist das Arbeitszeit, denn das Arbeitszeitgesetz kennt keinen Ort. Nur ganz kurze Sachen, etwa eine SMS mit dem Dienstplan lesen, zählen nach dem Bundesarbeitsgericht nicht. Schreib die Zeit auf. Für die Ruhezeit ist dein Arbeitgeber verantwortlich, nicht du.',
    read: '6 Minuten',
    sections: [
      { h: 'Arbeit ist Arbeit, auch auf dem Sofa', p: [
        'Mira arbeitet in einer Agentur. Um 18 Uhr fährt sie nach Hause, um 21:30 Uhr klappt sie den Laptop noch einmal auf, weil ein Kunde morgen früh die Präsentation will. Eine Stunde später ist sie fertig. Viele würden sagen: Das war doch nur kurz, und freiwillig. Für das Gesetz ist es Arbeitszeit.',
        '§ 2 des Arbeitszeitgesetzes beschreibt Arbeitszeit als die Zeit vom Beginn bis zum Ende der Arbeit, ohne die Pausen. Ein Ort steht da nicht. Es zählt, dass du arbeitest, nicht wo. Das gilt im Büro, im Homeoffice, im Zug und auf dem Sofa. Arbeitest du für zwei Arbeitgeber, werden die Zeiten sogar zusammengerechnet.',
      ] },
      { h: 'Was nicht zählt', p: [
        'Nicht jeder Blick aufs Handy ist Arbeit. Das Bundesarbeitsgericht hatte 2023 den Fall eines Notfallsanitäters, der in seiner Freizeit eine SMS mit seinem Dienst für den nächsten Tag lesen sollte. Das Gericht sagte: Das Lesen ist keine Arbeitszeit. Der Moment sei „zeitlich derart geringfügig“, und er konnte selbst wählen, wann er die Nachricht liest. Die Ruhezeit wird dadurch nicht unterbrochen.',
        'Auch wer nur erreichbar ist und nichts tut, arbeitet in der Regel nicht. Anders sieht es aus, sobald du wirklich etwas erledigst: Mails beantworten, ein Dokument fertig machen, einen Anruf führen. Wo genau die Grenze liegt, ist nicht für jeden Fall entschieden. Als Faustregel hilft: Würdest du es im Büro als Arbeit aufschreiben, schreib es auch abends auf.',
      ] },
      { h: 'Und die Ruhezeit?', p: [
        'Nach dem Ende der täglichen Arbeitszeit sind in Deutschland mindestens elf Stunden ununterbrochene Ruhe vorgesehen (§ 5 ArbZG). Die EU-Arbeitszeitrichtlinie nennt dieselben elf Stunden je 24 Stunden. Hat Mira bis 22:30 Uhr gearbeitet, wären es bis zum nächsten Arbeitsbeginn elf Stunden bis 9:30 Uhr.',
        'Das heißt nicht, dass Mira etwas falsch gemacht hat. Das Arbeitszeitgesetz richtet sich an den Arbeitgeber: Ordnungswidrig handelt nach § 22, wer als Arbeitgeber die Ruhezeit nicht gewährt. Du riskierst durch dein Aufschreiben nichts. Im Gegenteil, ohne Aufzeichnung sieht niemand, dass der Abend überhaupt stattgefunden hat.',
        'Fieravend zeigt so etwas als ruhigen Hinweis, nie als Alarm: wann du aufgehört hast, wann du wieder angefangen hast, wie viel Abstand dazwischen lag. Kein Rot, kein „Verstoß“. Was du daraus machst, entscheidest du.',
      ] },
      { h: 'Aufschreiben, auch wenn der Chef es „nicht will“', p: [
        'Manche Arbeitgeber sagen: Abends wird nicht gearbeitet, also gibt es dafür auch keine Zeit. Deine eigenen Notizen über deine eigene Arbeit sind trotzdem deine Sache. Kein Gesetz, das wir kennen, verbietet dir, für dich aufzuschreiben, wann du gearbeitet hast. Achte nur darauf, keine Kundendaten oder Geschäftsgeheimnisse in Notizen zu schreiben.',
        'Ob du für die Abendstunde Geld bekommst, ist eine andere Frage. Dafür kommt es nach dem Bundesarbeitsgericht auch darauf an, ob der Arbeitgeber die Arbeit angeordnet, gebilligt oder geduldet hat, oder ob sie nötig war. Darum lohnt sich eine kurze Notiz: „Kunde will Präsentation bis 8 Uhr, Chefin hat um 17:50 Uhr gefragt.“ Mehr dazu im Artikel <a href="@mag-angeordnet">Wer hat die Überstunden angeordnet?</a>.',
      ] },
      { h: 'So hältst du den Abend fest', list: [
        ['Gleich danach eintragen', 'Beginn und Ende, oder wenigstens die Dauer. Am nächsten Morgen weißt du es oft schon nicht mehr genau.'],
        ['Als eigenen Block', 'Nicht zum Arbeitstag dazuschlagen. Ein eigener Block zeigt, dass die Arbeit am Abend war, und macht den Abstand zum nächsten Morgen sichtbar.'],
        ['Mit einem Satz zum Anlass', 'Wer hat gefragt, was war fällig. Das reicht.'],
        ['Nachgetragen ist okay', 'In Fieravend bleibt ein nachgetragener Block als „nachgetragen“ markiert. Das ist ehrlich und macht deinen Zettel glaubwürdiger, nicht schwächer.'],
      ] },
      { h: 'Ein Blick über den Tellerrand', p: [
        'Australien hat 2024 ein „Recht auf Nichterreichbarkeit“ eingeführt, seit August 2025 gilt es auch in kleinen Betrieben. Beschäftigte dürfen dort Kontakt außerhalb der Arbeitszeit ignorieren, solange das nicht unangemessen ist. In Deutschland gibt es so ein Gesetz nicht. Umso mehr hilft es, wenn du selbst siehst, wie oft der Feierabend eigentlich keiner war.',
      ] },
    ],
    qa: [
      ['Ist es Arbeitszeit, wenn ich abends zu Hause Mails beantworte?', 'Ja. Das Arbeitszeitgesetz kennt keinen Ort. Wer arbeitet, arbeitet, auch zu Hause und auch abends.'],
      ['Ist das kurze Lesen einer Nachricht vom Arbeitgeber Arbeitszeit?', 'Nach einem Urteil des Bundesarbeitsgerichts von 2023 nicht, wenn es nur um einen ganz kurzen Moment geht, etwa eine SMS mit dem Dienstplan für morgen (5 AZR 349/22).'],
      ['Mache ich etwas falsch, wenn meine Ruhezeit dadurch kürzer als elf Stunden ist?', 'Die Pflicht, Ruhezeit zu gewähren, trifft nach dem Arbeitszeitgesetz den Arbeitgeber. Schreib die Zeit trotzdem ehrlich auf.'],
    ],
    sources: [
      ['§ 2 Arbeitszeitgesetz (Begriff Arbeitszeit)', 'https://www.gesetze-im-internet.de/arbzg/__2.html'],
      ['§ 5 Arbeitszeitgesetz (Ruhezeit)', 'https://www.gesetze-im-internet.de/arbzg/__5.html'],
      ['§ 22 Arbeitszeitgesetz (Bußgeldvorschriften, Arbeitgeber)', 'https://www.gesetze-im-internet.de/arbzg/__22.html'],
      ['BAG, Urteil vom 23.08.2023, 5 AZR 349/22 (Rn. 48–50)', 'https://www.bundesarbeitsgericht.de/entscheidung/5-azr-349-22/'],
      ['BAG, Urteil vom 04.05.2022, 5 AZR 359/21', 'https://www.bundesarbeitsgericht.de/entscheidung/5-azr-359-21/'],
      ['Richtlinie 2003/88/EG, Art. 3 (tägliche Ruhezeit)', 'https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32003L0088'],
      ['Fair Work Ombudsman (Australien): Right to disconnect', 'https://www.fairwork.gov.au/employment-conditions/right-to-disconnect'],
    ],
    related: ['nachweis', 'wochenende', 'mag-angeordnet'],
  },
  en: {
    kicker: 'The law, calmly explained',
    title: 'Back on the laptop in the evening: does it count as working time?',
    desc: 'Emails at 9 pm, finishing the slides: that is working time, wherever you are. What it means for your rest period, what does not count, and how to record it.',
    answer: 'Yes. If you answer emails or work on slides at home in the evening, that is working time, because German working-time law does not care where you work. Only very short things, such as reading a text with tomorrow’s rota, do not count according to the Federal Labour Court. Write the time down. Rest periods are your employer’s responsibility, not yours.',
    read: '6 minutes',
    sections: [
      { h: 'Work is work, even on the sofa', p: [
        'Mira works at an agency. She goes home at 6 pm, and at 9:30 pm she opens her laptop again because a client wants the slides first thing tomorrow. An hour later she is done. Many people would say: it was only short, and voluntary. For the law, it is working time.',
        'Section 2 of the German Working Time Act describes working time as the time from the start to the end of work, without breaks. It does not mention a place. What counts is that you work, not where. That applies in the office, at home, on the train and on the sofa. If you work for two employers, the times are even added together.',
      ] },
      { h: 'What does not count', p: [
        'Not every glance at your phone is work. In 2023 the Federal Labour Court had the case of a paramedic who was expected to read a text with his shift for the next day in his free time. The court said: reading it is not working time. The moment was so short, and he could choose when to read the message. It does not interrupt the rest period.',
        'Being reachable while doing nothing is usually not work either. It is different once you actually get something done: answering emails, finishing a document, taking a call. Exactly where the line is has not been decided for every case. A rule of thumb: if you would write it down as work in the office, write it down in the evening too.',
      ] },
      { h: 'And the rest period?', p: [
        'In Germany, at least eleven hours of uninterrupted rest are required after the end of the daily working time (section 5 ArbZG). The EU Working Time Directive sets the same eleven hours per 24 hours. If Mira worked until 10:30 pm, eleven hours would take her to 9:30 am before the next start.',
        'That does not mean Mira did anything wrong. The Working Time Act is addressed to employers: under section 22, it is an administrative offence for an employer not to grant the rest period. You risk nothing by writing it down. Quite the opposite: without a record, nobody sees that the evening happened at all.',
        'Fieravend shows this as a calm hint, never as an alarm: when you stopped, when you started again, how much time lay in between. No red, no “violation”. What you do with it is up to you.',
      ] },
      { h: 'Writing it down, even if your boss “does not want it”', p: [
        'Some employers say: we do not work in the evening, so there is no time for it. Your own notes about your own work are still your business. No law we know of forbids you from writing down for yourself when you worked. Just keep customer data and business secrets out of your notes.',
        'Whether you get paid for the evening hour is a different question. According to the Federal Labour Court, it also depends on whether your employer ordered, approved or tolerated the work, or whether it was necessary. So a short note is worth it: “Client wants slides by 8 am, manager asked at 5:50 pm.” More in the article <a href="@mag-angeordnet">Who ordered the overtime?</a>.',
      ] },
      { h: 'How to record the evening', list: [
        ['Enter it right away', 'Start and end, or at least the duration. By the next morning you often do not remember exactly.'],
        ['As a separate block', 'Do not add it to the working day. A separate block shows that the work happened in the evening and makes the gap to the next morning visible.'],
        ['With one sentence on why', 'Who asked, what was due. That is enough.'],
        ['Adding it later is fine', 'In Fieravend a block added later stays marked as “added later”. That is honest and makes your record more credible, not weaker.'],
      ] },
      { h: 'A look further afield', p: [
        'Australia introduced a “right to disconnect” in 2024, and since August 2025 it also applies in small businesses. Employees there may ignore contact outside working hours unless that is unreasonable. Germany has no such law. All the more reason to see for yourself how often your evening off was not really off.',
      ] },
    ],
    qa: [
      ['Is answering emails at home in the evening working time?', 'Yes. German working-time law does not depend on the place. If you work, you work, at home and in the evening too.'],
      ['Is briefly reading a message from my employer working time?', 'According to a 2023 Federal Labour Court ruling, not if it is a very short moment, such as reading a text with tomorrow’s rota (5 AZR 349/22).'],
      ['Am I doing something wrong if my rest period is shorter than eleven hours?', 'Under the Working Time Act, the duty to grant rest periods lies with the employer. Write the time down honestly anyway.'],
    ],
    sources: [
      ['Section 2 Working Time Act (definition, German)', 'https://www.gesetze-im-internet.de/arbzg/__2.html'],
      ['Section 5 Working Time Act (rest period, German)', 'https://www.gesetze-im-internet.de/arbzg/__5.html'],
      ['Section 22 Working Time Act (fines, employer, German)', 'https://www.gesetze-im-internet.de/arbzg/__22.html'],
      ['Federal Labour Court, judgment of 23 August 2023, 5 AZR 349/22 (paras. 48–50, German)', 'https://www.bundesarbeitsgericht.de/entscheidung/5-azr-349-22/'],
      ['Federal Labour Court, judgment of 4 May 2022, 5 AZR 359/21 (German)', 'https://www.bundesarbeitsgericht.de/entscheidung/5-azr-359-21/'],
      ['Directive 2003/88/EC, Art. 3 (daily rest)', 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32003L0088'],
      ['Fair Work Ombudsman (Australia): Right to disconnect', 'https://www.fairwork.gov.au/employment-conditions/right-to-disconnect'],
    ],
    related: ['nachweis', 'wochenende', 'mag-angeordnet'],
  },
};
