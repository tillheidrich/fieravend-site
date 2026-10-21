/**
 * Magazin: overtime in a part-time job. Sources opened 21.10.2026: BAG 05.12.2024 – 8 AZR 370/20 (Leitsatz, Tenor:
 * 38:49 hours credited, 250 € compensation; facts: nurse at 40 %), CJEU 29.07.2024 C-184/22 and C-185/22 (cited in that
 * judgment), BAG 04.05.2022 – 5 AZR 359/21 (conditions for overtime pay), § 4 Abs. 1 TzBfG, § 19d AZG Austria (Mehrarbeit, 25 % surcharge, 1:1 within three months).
 * Not used: share of women in part-time work (no figure opened today), claims that every overtime hour must carry a
 * surcharge in Germany (no general statutory surcharge rule found).
 */
export default {
  id: 'teilzeit',
  slug: { de: 'ueberstunden-in-teilzeit', en: 'overtime-in-part-time-jobs' },
  published: '2026-11-06', modified: '2026-11-06', checked: '2026-10-21',
  de: {
    kicker: 'Recht, ruhig erklärt',
    title: 'Überstunden in Teilzeit: Ab wann ist es mehr?',
    desc: 'Wer 20 Stunden vereinbart hat und 26 arbeitet, macht Überstunden, auch wenn Vollzeit 39 wären. Was das Bundesarbeitsgericht 2024 zu Zuschlägen gesagt hat und wie du die Stunden festhältst.',
    answer: 'In Teilzeit ist alles über deiner vereinbarten Arbeitszeit mehr Arbeit, nicht erst das, was über einer Vollzeitstelle liegt. Das Bundesarbeitsgericht hat im Dezember 2024 entschieden: Eine Tarifregel, die Überstundenzuschläge erst ab der Vollzeitgrenze zahlt, behandelt Teilzeitkräfte schlechter und ist ohne sachlichen Grund unwirksam. Ob es bei dir einen Zuschlag gibt, steht in deinem Vertrag oder Tarifvertrag.',
    read: '5 Minuten',
    sections: [
      { h: 'Teilzeit, aber nicht weniger Arbeit', p: [
        'Mira hat einen Vertrag über 20 Stunden pro Woche. Seit dem Sommer fehlt im Team eine Kollegin, und Mira arbeitet fast jede Woche 25 oder 26 Stunden. Im Betrieb heißt das „Aushelfen“. Für Mira sind es sechs Stunden mehr als vereinbart, jede Woche.',
        'Viele Teilzeitkräfte erleben, dass Mehrarbeit kaum auffällt. Sie liegt ja noch weit unter einer Vollzeitstelle. Genau dieses Denken hat das Bundesarbeitsgericht 2024 in einem wichtigen Punkt zurückgewiesen.',
      ] },
      { h: 'Was das Bundesarbeitsgericht entschieden hat', p: [
        'Geklagt hatte eine Pflegekraft, die mit 40 Prozent einer Vollzeitstelle bei einem Dialyseanbieter arbeitete. Der Tarifvertrag zahlte Überstundenzuschläge erst für Stunden über der Arbeitszeit einer Vollzeitkraft. Ihre Stunden über die 40 Prozent hinaus blieben also ohne Zuschlag.',
        'Das Bundesarbeitsgericht entschied am 5. Dezember 2024 (8 AZR 370/20): Eine solche Regel behandelt Teilzeitbeschäftigte wegen der Teilzeit schlechter als Vollzeitkräfte. Gibt es dafür keinen sachlichen Grund, verstößt sie gegen § 4 Teilzeit- und Befristungsgesetz. Weil in der Gruppe der Teilzeitkräfte deutlich mehr Frauen waren, sah das Gericht zusätzlich eine mittelbare Benachteiligung wegen des Geschlechts. Die Pflegekraft bekam 38 Stunden und 49 Minuten auf ihrem Arbeitszeitkonto gutgeschrieben und 250 Euro Entschädigung. Vorher hatte der Europäische Gerichtshof am 29. Juli 2024 in derselben Sache (C-184/22 und C-185/22) die Linie vorgegeben.',
      ] },
      { h: 'Was das für dich heißt, und was nicht', p: [
        'Das Urteil sagt nicht, dass jede Teilzeitkraft einen Zuschlag bekommt. Es sagt: Wenn es in deinem Betrieb Überstundenzuschläge gibt, darf die Schwelle für Teilzeitkräfte nicht ohne sachlichen Grund bei der Vollzeitgrenze liegen. Ob und wie viel Zuschlag es überhaupt gibt, regeln meistens Tarifvertrag, Betriebsvereinbarung oder Arbeitsvertrag.',
        'Unabhängig vom Zuschlag gilt: Bezahlt werden Überstunden in der Regel nur, wenn der Arbeitgeber sie angeordnet, gebilligt oder geduldet hat oder wenn sie nötig waren. Wie du das festhältst, steht im Artikel <a href="@mag-angeordnet">Wer hat die Überstunden angeordnet?</a>.',
      ] },
      { h: 'Ein Blick nach Österreich', p: [
        'In Österreich ist das gesetzlich geregelt. Teilzeitkräfte bekommen nach § 19d Arbeitszeitgesetz für Stunden über dem vereinbarten Ausmaß, dort „Mehrarbeit“ genannt, einen Zuschlag von 25 Prozent. Er entfällt, wenn die Stunden innerhalb von drei Monaten 1:1 in Freizeit ausgeglichen werden oder bei Gleitzeit im Schnitt nicht überschritten wird. Mehr zu Österreich im Artikel <a href="@mag-oesterreich">Überstunden in Österreich</a>.',
      ] },
      { h: 'So hältst du Mehrarbeit fest', list: [
        ['Vertrag als Maßstab', 'Trag deine vereinbarten Wochenstunden als Soll ein. Alles darüber wird sichtbar, auch wenn es weit unter Vollzeit liegt.'],
        ['Jede Woche', 'Sechs Stunden mehr pro Woche sind nach einem Quartal über 70 Stunden. Das sieht man nur, wenn man mitschreibt.'],
        ['Anlass notieren', '„Krankheitsvertretung, Chef hat gefragt“ reicht als Notiz.'],
        ['Nicht still abfeiern', 'Wenn du Stunden abbaust, schreib es als Ausgleich auf. So bleibt dein Konto nachvollziehbar.'],
      ] },
    ],
    qa: [
      ['Sind Stunden über meiner Teilzeit Überstunden?', 'Für dich sind es Stunden über deiner vereinbarten Arbeitszeit. Ob und wie sie bezahlt oder mit Zuschlag vergütet werden, regeln Vertrag und Tarifvertrag.'],
      ['Darf es Überstundenzuschläge erst ab Vollzeit geben?', 'Nach dem Urteil des Bundesarbeitsgerichts vom 05.12.2024 (8 AZR 370/20) behandelt eine solche Tarifregel Teilzeitkräfte schlechter und ist ohne sachlichen Grund unwirksam.'],
      ['Gibt es in Deutschland einen Zuschlag per Gesetz?', 'Einen allgemeinen gesetzlichen Überstundenzuschlag haben wir im Arbeitszeitgesetz nicht gefunden. Zuschläge stehen meist in Tarif- oder Arbeitsverträgen.'],
    ],
    sources: [
      ['BAG, Urteil vom 05.12.2024, 8 AZR 370/20 (Leitsatz, Tenor)', 'https://www.bundesarbeitsgericht.de/entscheidung/8-azr-370-20/'],
      ['BAG, Urteil vom 04.05.2022, 5 AZR 359/21 (angeordnet, gebilligt, geduldet, notwendig)', 'https://www.bundesarbeitsgericht.de/entscheidung/5-azr-359-21/'],
      ['§ 4 Teilzeit- und Befristungsgesetz (Verbot der Diskriminierung)', 'https://www.gesetze-im-internet.de/tzbfg/__4.html'],
      ['§ 19d Arbeitszeitgesetz Österreich (Teilzeitarbeit, Mehrarbeit), RIS', 'https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10008238&Paragraf=19d'],
    ],
    related: ['rechner', 'mag-angeordnet', 'mag-oesterreich'],
  },
  en: {
    kicker: 'The law, calmly explained',
    title: 'Overtime in a part-time job: when is it more?',
    desc: 'If you agreed on 20 hours and work 26, you work extra hours, even if full time would be 39. What the Federal Labour Court said about surcharges in 2024 and how to keep track.',
    answer: 'In a part-time job, everything above your agreed hours is extra work, not just what goes beyond a full-time job. In December 2024 the Federal Labour Court ruled that a collective agreement paying overtime surcharges only above the full-time threshold treats part-timers worse and is invalid without an objective reason. Whether you get a surcharge at all depends on your contract or collective agreement.',
    read: '5 minutes',
    sections: [
      { h: 'Part time, but not less work', p: [
        'Mira has a contract for 20 hours a week. Since the summer the team has been one colleague short, and Mira works 25 or 26 hours almost every week. At work they call it “helping out”. For Mira it is six hours more than agreed, every week.',
        'Many part-timers find that extra hours hardly get noticed. After all, they are still far below a full-time job. In 2024 the Federal Labour Court rejected exactly this way of thinking on one important point.',
      ] },
      { h: 'What the Federal Labour Court decided', p: [
        'The claimant was a nurse working 40 percent of full time for a dialysis provider. The collective agreement only paid overtime surcharges for hours above a full-time employee’s working time. Her hours beyond the 40 percent got no surcharge.',
        'On 5 December 2024 the Federal Labour Court ruled (8 AZR 370/20): such a rule treats part-time staff worse than full-time staff because they work part time. Without an objective reason, it breaches section 4 of the Part-Time and Fixed-Term Employment Act. Because clearly more women than men worked part time there, the court also found indirect discrimination on grounds of sex. The nurse had 38 hours and 49 minutes credited to her working-time account and received 250 euros in compensation. The Court of Justice of the EU had set the direction in the same matter on 29 July 2024 (C-184/22 and C-185/22).',
      ] },
      { h: 'What it means for you, and what it does not', p: [
        'The ruling does not say every part-timer gets a surcharge. It says: if your workplace pays overtime surcharges, the threshold for part-timers may not sit at the full-time limit without an objective reason. Whether there is a surcharge at all, and how much, is usually set by a collective agreement, a works agreement or your contract.',
        'Surcharge or not, overtime is usually only paid if the employer ordered, approved or tolerated it, or if it was necessary. How to record that is explained in <a href="@mag-angeordnet">Who ordered the overtime?</a>.',
      ] },
      { h: 'A look at Austria', p: [
        'Austria puts this in the law. Under section 19d of the Austrian Working Time Act, part-timers get a 25 percent surcharge for hours above the agreed amount, called “Mehrarbeit” there. It does not apply if the hours are balanced 1:1 with time off within three months, or with flexitime if the average is not exceeded. More on Austria in <a href="@mag-oesterreich">Overtime in Austria</a>.',
      ] },
      { h: 'How to record extra hours', list: [
        ['Your contract is the yardstick', 'Enter your agreed weekly hours as your target. Everything above becomes visible, even if it is far below full time.'],
        ['Every week', 'Six extra hours a week add up to more than 70 after a quarter. You only see that if you keep a record.'],
        ['Note the reason', '“Covering for a sick colleague, manager asked” is enough as a note.'],
        ['Do not take time off quietly', 'If you take hours off, record it as time off in lieu. That keeps your account easy to follow.'],
      ] },
    ],
    qa: [
      ['Are hours above my part-time contract overtime?', 'For you they are hours above your agreed working time. Whether and how they are paid, with or without a surcharge, depends on your contract and any collective agreement.'],
      ['Can overtime surcharges start only at full time?', 'According to the Federal Labour Court ruling of 5 December 2024 (8 AZR 370/20), such a rule in a collective agreement treats part-timers worse and is invalid without an objective reason.'],
      ['Is there a statutory overtime surcharge in Germany?', 'We did not find a general statutory overtime surcharge in the Working Time Act. Surcharges usually come from collective agreements or employment contracts.'],
    ],
    sources: [
      ['Federal Labour Court, judgment of 5 December 2024, 8 AZR 370/20 (headnote, operative part, German)', 'https://www.bundesarbeitsgericht.de/entscheidung/8-azr-370-20/'],
      ['Federal Labour Court, judgment of 4 May 2022, 5 AZR 359/21 (ordered, approved, tolerated, necessary; German)', 'https://www.bundesarbeitsgericht.de/entscheidung/5-azr-359-21/'],
      ['Section 4 Part-Time and Fixed-Term Employment Act (non-discrimination, German)', 'https://www.gesetze-im-internet.de/tzbfg/__4.html'],
      ['Section 19d Austrian Working Time Act (part time, extra hours), RIS, German', 'https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10008238&Paragraf=19d'],
    ],
    related: ['rechner', 'mag-angeordnet', 'mag-oesterreich'],
  },
};
