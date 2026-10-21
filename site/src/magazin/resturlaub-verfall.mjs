/**
 * Magazin: leftover leave at year end, when it expires (Germany). Sources opened 21.10.2026: §§ 3, 7, 9 BUrlG,
 * BAG 19.02.2019 – 9 AZR 423/16 (Leitsätze 1 and 2; burden of proof on the employer, citing CJEU 06.11.2018 – C-684/16,
 * paras. 45 f.), BAG 20.12.2022 – 9 AZR 266/20 (limitation only starts once the employer has enabled the employee).
 * Not used: rules for long-term illness (15 months), contractual extra leave beyond the minimum (depends on the
 * contract), any figures on how much leave expires.
 */
export default {
  id: 'urlaub',
  slug: { de: 'resturlaub-verfall-jahresende', en: 'leftover-leave-year-end' },
  published: '2026-11-20', modified: '2026-11-20', checked: '2026-10-21',
  de: {
    kicker: 'Recht, ruhig erklärt',
    title: 'Resturlaub zum Jahresende: Verfällt der wirklich?',
    desc: 'Urlaub soll im Kalenderjahr genommen werden. Der gesetzliche Mindesturlaub verfällt aber nur, wenn dein Arbeitgeber dich rechtzeitig darauf hingewiesen hat. Was das Bundesarbeitsgericht sagt.',
    answer: 'Nach dem Bundesurlaubsgesetz soll Urlaub im laufenden Kalenderjahr genommen werden, eine Übertragung ist nur bis Ende März möglich. Der gesetzliche Mindesturlaub verfällt nach dem Bundesarbeitsgericht aber nur, wenn der Arbeitgeber dich vorher aufgefordert hat, ihn zu nehmen, und dir klar und rechtzeitig gesagt hat, dass er sonst verfällt. Das muss im Streitfall der Arbeitgeber beweisen.',
    read: '5 Minuten',
    sections: [
      { h: 'Was im Gesetz steht', p: [
        'Das Bundesurlaubsgesetz ist an dieser Stelle streng formuliert. Nach § 7 Abs. 3 muss der Urlaub im laufenden Kalenderjahr gewährt und genommen werden. Ins nächste Jahr übertragen werden darf er nur aus dringenden betrieblichen oder persönlichen Gründen, und dann muss er in den ersten drei Monaten genommen werden. Wer nur das liest, denkt: Am 31. Dezember ist der Rest weg.',
        'Der gesetzliche Mindesturlaub beträgt nach § 3 übrigens 24 Werktage. Das Gesetz zählt dabei sechs Werktage pro Woche, gemeint sind also vier Wochen. Bei einer Fünf-Tage-Woche sind das 20 Arbeitstage.',
      ] },
      { h: 'Was das Bundesarbeitsgericht daraus gemacht hat', p: [
        'Seit einem Urteil vom 19. Februar 2019 (9 AZR 423/16) liest das Bundesarbeitsgericht die Vorschrift im Licht des EU-Rechts. Der Anspruch auf den gesetzlichen Mindesturlaub erlischt danach nur dann am Jahresende, wenn der Arbeitgeber dich vorher in die Lage versetzt hat, deinen Urlaub zu nehmen, und du ihn trotzdem aus freien Stücken nicht genommen hast.',
        'Konkret heißt das: Der Arbeitgeber muss dich auffordern, deinen Urlaub zu nehmen, wenn nötig förmlich. Und er muss dir klar und rechtzeitig mitteilen, dass der Urlaub verfällt, wenn du ihn nicht beantragst. Ob er das getan hat, muss im Streitfall er beweisen, nicht du. Das hatte der Europäische Gerichtshof schon 2018 so gesehen (C-684/16).',
        'Im Dezember 2022 kam ein weiteres Urteil dazu (9 AZR 266/20). Auch die Verjährung von Urlaubsansprüchen beginnt danach erst, wenn der Arbeitgeber dich in die Lage versetzt hat, den Urlaub tatsächlich zu nehmen. Alte Urlaubstage verschwinden also nicht still, nur weil Jahre vergangen sind.',
      ] },
      { h: 'Was das für Familie Berg heißt', p: [
        'Herr Berg arbeitet in einem kleinen Betrieb ohne Personalabteilung. Ende November hat er noch acht Tage übrig. Einen Hinweis zum Verfall hat er nie bekommen. Nach der Rechtsprechung spricht viel dafür, dass sein gesetzlicher Mindesturlaub dann nicht einfach zum 31. Dezember verfällt. Für Urlaubstage über dem Minimum, die im Vertrag stehen, kann der Vertrag eigene Regeln haben.',
        'Trotzdem ist der bessere Weg fast immer der einfache: Urlaub beantragen, solange das Jahr noch läuft, und den Antrag aufheben. Ein Streit über Resturlaub ist anstrengend, auch wenn man am Ende recht bekommt.',
      ] },
      { h: 'Krank im Urlaub', p: [
        'Wer im Urlaub krank wird, verliert diese Tage nicht. Nach § 9 Bundesurlaubsgesetz werden die durch ärztliches Zeugnis nachgewiesenen Tage der Arbeitsunfähigkeit nicht auf den Jahresurlaub angerechnet. Wichtig ist das Wort „ärztlich“: Ohne Attest zählt der Tag als Urlaub.',
      ] },
      { h: 'So behältst du den Überblick', list: [
        ['Resturlaub im Herbst prüfen', 'Im Oktober oder November nachsehen, wie viele Tage noch offen sind, lässt genug Zeit zum Planen.'],
        ['Hinweise aufheben', 'Bekommst du eine Mail „Bitte nimm deinen Urlaub, sonst verfällt er“, heb sie auf. Bekommst du keine, ist das auch eine Information.'],
        ['Anträge schriftlich', 'Ein kurzer Antrag per Mail mit Datum ist besser als ein Zuruf im Flur.'],
        ['Beim Jobwechsel', 'Kann Urlaub wegen des Endes des Arbeitsverhältnisses nicht mehr genommen werden, ist er nach § 7 Abs. 4 abzugelten, also auszuzahlen.'],
      ] },
      { h: 'Und in Fieravend?', p: [
        'Fieravend führt dein Urlaubskonto mit Anspruch, genommenen Tagen und Rest, auch über den Jahreswechsel. Ob Tage verfallen sind, entscheidet die App nicht für dich. Sie zeigt dir, was offen ist, damit du rechtzeitig fragen oder planen kannst.',
      ] },
    ],
    qa: [
      ['Verfällt mein Resturlaub am 31. Dezember?', 'Der gesetzliche Mindesturlaub verfällt nach der Rechtsprechung des Bundesarbeitsgerichts nur, wenn dein Arbeitgeber dich vorher aufgefordert hat, ihn zu nehmen, und dich klar und rechtzeitig auf den Verfall hingewiesen hat.'],
      ['Bis wann kann übertragener Urlaub genommen werden?', 'Nach § 7 Abs. 3 BUrlG in den ersten drei Monaten des Folgejahres, also bis Ende März, wenn die Übertragung zulässig war.'],
      ['Was passiert mit Urlaubstagen, an denen ich krank war?', 'Nach § 9 BUrlG werden Krankheitstage im Urlaub nicht angerechnet, wenn sie durch ein ärztliches Zeugnis nachgewiesen sind.'],
    ],
    sources: [
      ['§ 7 Bundesurlaubsgesetz (Zeitpunkt, Übertragbarkeit, Abgeltung)', 'https://www.gesetze-im-internet.de/burlg/__7.html'],
      ['§ 3 Bundesurlaubsgesetz (Dauer des Urlaubs)', 'https://www.gesetze-im-internet.de/burlg/__3.html'],
      ['§ 9 Bundesurlaubsgesetz (Erkrankung während des Urlaubs)', 'https://www.gesetze-im-internet.de/burlg/__9.html'],
      ['BAG, Urteil vom 19.02.2019, 9 AZR 423/16 (Leitsätze, Hinweispflicht)', 'https://www.bundesarbeitsgericht.de/entscheidung/9-azr-423-16/'],
      ['BAG, Urteil vom 20.12.2022, 9 AZR 266/20 (Verjährung)', 'https://www.bundesarbeitsgericht.de/entscheidung/9-azr-266-20/'],
    ],
    related: ['nachweis', 'wochenende', 'mag-zeiterfassung'],
  },
  en: {
    kicker: 'The law, calmly explained',
    title: 'Leftover leave at the end of the year: does it really expire?',
    desc: 'Leave is meant to be taken within the calendar year. But in Germany the statutory minimum leave can only expire if your employer reminded you in time. What the Federal Labour Court says.',
    answer: 'Under the German Federal Leave Act, leave should be taken in the current calendar year, and carrying it over is only possible until the end of March. According to the Federal Labour Court, though, statutory minimum leave only expires if your employer first asked you to take it and told you clearly and in good time that it would otherwise expire. In a dispute, the employer has to prove this.',
    read: '5 minutes',
    sections: [
      { h: 'What the law says', p: [
        'The Federal Leave Act sounds strict here. Section 7(3) says leave must be granted and taken in the current calendar year. It may only be carried over for urgent business or personal reasons, and then it has to be taken in the first three months. If you read only that, you would think: on 31 December, whatever is left is gone.',
        'By the way, section 3 sets the statutory minimum at 24 working days. The law counts six working days a week, so it means four weeks. With a five-day week, that is 20 days.',
      ] },
      { h: 'What the Federal Labour Court made of it', p: [
        'Since a judgment of 19 February 2019 (9 AZR 423/16), the Federal Labour Court reads the rule in the light of EU law. The right to statutory minimum leave only lapses at the end of the year if the employer has enabled you to take your leave and you still chose not to.',
        'In practice: the employer has to ask you to take your leave, formally if necessary. And it has to tell you clearly and in good time that the leave will expire if you do not request it. In a dispute, the employer has to prove it did this, not you. The Court of Justice of the EU had already taken this view in 2018 (C-684/16).',
        'Another ruling followed in December 2022 (9 AZR 266/20). The limitation period for leave also only starts once the employer has enabled you to actually take the leave. So old leave days do not quietly disappear just because years have passed.',
      ] },
      { h: 'What it means for the Berg family', p: [
        'Mr Berg works at a small company without an HR department. At the end of November he still has eight days left. He never got a note about leave expiring. Going by the case law, there is a lot to suggest that his statutory minimum leave does not simply expire on 31 December. Leave above the minimum that comes from the contract can follow the contract’s own rules.',
        'Still, the easier way is almost always better: request your leave while the year is still running, and keep the request. A dispute over leftover leave is draining, even if you win in the end.',
      ] },
      { h: 'Sick on holiday', p: [
        'If you fall ill on holiday, you do not lose those days. Under section 9 of the Federal Leave Act, days of incapacity proven by a doctor’s certificate are not counted against your annual leave. The word that matters is “doctor’s”: without a certificate, the day counts as leave.',
      ] },
      { h: 'How to keep track', list: [
        ['Check leftover leave in autumn', 'Looking in October or November at how many days are open leaves enough time to plan.'],
        ['Keep the reminders', 'If you get an email saying “please take your leave or it will expire”, keep it. If you get none, that is worth knowing too.'],
        ['Requests in writing', 'A short email request with a date beats a word in the corridor.'],
        ['When you change jobs', 'If leave can no longer be taken because the job ends, section 7(4) says it has to be paid out.'],
      ] },
      { h: 'And in Fieravend?', p: [
        'Fieravend keeps your leave account with entitlement, days taken and what is left, across the turn of the year. The app does not decide for you whether days have expired. It shows you what is open, so you can ask or plan in time.',
      ] },
    ],
    qa: [
      ['Does my leftover leave expire on 31 December?', 'According to the Federal Labour Court, statutory minimum leave only expires if your employer first asked you to take it and clearly warned you in good time that it would expire.'],
      ['Until when can carried-over leave be taken?', 'Under section 7(3) BUrlG within the first three months of the following year, so until the end of March, if carrying it over was allowed.'],
      ['What happens to leave days when I was ill?', 'Under section 9 BUrlG, sick days during leave are not counted if a doctor’s certificate proves them.'],
    ],
    sources: [
      ['Section 7 Federal Leave Act (timing, carry-over, payment, German)', 'https://www.gesetze-im-internet.de/burlg/__7.html'],
      ['Section 3 Federal Leave Act (length of leave, German)', 'https://www.gesetze-im-internet.de/burlg/__3.html'],
      ['Section 9 Federal Leave Act (illness during leave, German)', 'https://www.gesetze-im-internet.de/burlg/__9.html'],
      ['Federal Labour Court, judgment of 19 February 2019, 9 AZR 423/16 (headnotes, duty to inform, German)', 'https://www.bundesarbeitsgericht.de/entscheidung/9-azr-423-16/'],
      ['Federal Labour Court, judgment of 20 December 2022, 9 AZR 266/20 (limitation, German)', 'https://www.bundesarbeitsgericht.de/entscheidung/9-azr-266-20/'],
    ],
    related: ['nachweis', 'wochenende', 'mag-zeiterfassung'],
  },
};
