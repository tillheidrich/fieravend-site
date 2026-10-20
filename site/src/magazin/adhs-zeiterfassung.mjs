/**
 * Magazin: AD(H)S and time tracking without shame. Tone rules: docs/welt-und-adhs.md B.4 (describe, never diagnose;
 * systems not willpower; no shame, no "superpower"; show evidence and its limits; no treatment advice; crisis numbers;
 * fictional people). Sources opened 20.10.2026: Mette 2023 (PMC9962130: 9 studies 2012–2022, "very scarce", mixed),
 * Solanto et al. 2010 (PubMed 20231319 via search: meta-cognitive group therapy vs supportive therapy, OR 5.41),
 * Safren et al. 2010 (JAMA 304(8):875–880, via clinicaltrials.gov NCT00118911 and abstract excerpts), TelefonSeelsorge DE
 * (telefonseelsorge.de: 0800 1110111, 0800 1110222, 116 123, free, day and night), TelefonSeelsorge AT 142
 * (telefonseelsorge.at via search: free, around the clock), Die Dargebotene Hand 143 (143.ch). Dropped: prevalence
 * figures and responder percentages (only secondary), "rejection sensitive dysphoria" (no diagnosis, thin evidence).
 * App features named here exist today (CHANGELOG): reminders, place reminder that never clocks by itself, copy a day,
 * favourites, "nachgetragen" marker, sun arc and countdown, quiet streaks that end silently, widget/Control Centre/NFC.
 * Needs a review by a specialist before a series starts (docs/welt-und-adhs.md B.4.8).
 */
export default {
  id: 'adhs',
  slug: { de: 'adhs-zeiterfassung-ohne-scham', en: 'adhd-time-tracking-without-shame' },
  published: '2026-10-20', modified: '2026-10-20', checked: '2026-10-20',
  de: {
    kicker: 'AD(H)S und Arbeit',
    title: 'Zeit erfassen mit AD(H)S: Systeme, die nicht schimpfen',
    desc: 'Stempeln vergessen, Zeit nicht gespürt, dann Scham und die App gelöscht? Was die Forschung zu AD(H)S und Zeit sagt, was vielen hilft und warum Nachtragen völlig in Ordnung ist.',
    answer: 'Viele Menschen mit AD(H)S erzählen, dass sie Zeit schwer spüren, das Stempeln vergessen und sich danach schämen. Gut belegt ist, dass Struktur von außen hilft: Training in Planen und Organisieren wirkt in Studien. Darum hilft ein System, das erinnert, Nachtragen leicht macht und nie schimpft, mehr als ein guter Vorsatz. Dieser Text ist keine Diagnose und keine Behandlung.',
    read: '7 Minuten',
    note: 'Dieser Text beschreibt Erfahrungen und Studien. Er stellt keine Diagnose und ersetzt keine Behandlung. Wenn du Fragen zu AD(H)S oder Medikamenten hast, sprich mit deiner Ärztin oder deinem Arzt.',
    sections: [
      { h: '„Schon 19 Uhr?“', p: [
        'Mika arbeitet in einem Lager und hat AD(H)S. Morgens denkt Mika noch ans Einstempeln, mittags verschwindet die Pause in einer Aufgabe, die gerade spannend ist, und abends geht Mika nach Hause, ohne auszustempeln. Drei Tage später ist der Stundenzettel voller Lücken. Dann kommt das Gefühl, das viele kennen: Ich krieg nicht mal das hin. Und die App wird gelöscht.',
        'Wenn dir das bekannt vorkommt: Das liegt nicht an mangelnder Disziplin. Es liegt daran, dass die meisten Werkzeuge für Menschen gebaut sind, die Zeit nebenbei mitzählen. Viele Menschen mit AD(H)S tun das nicht, und das ist keine Schwäche des Charakters.',
      ] },
      { h: 'Was die Forschung sagt, und was nicht', p: [
        'Das Wort „Zeitblindheit“ hört man oft. Als Beschreibung aus dem Alltag trifft es für viele. Die Forschung bei Erwachsenen ist aber dünner, als man denkt: Eine Übersichtsarbeit von 2023 fand für die Jahre 2012 bis 2022 nur neun passende Studien. Einige zeigen klare Schwierigkeiten beim Schätzen und Einteilen von Zeit, andere nicht. Der Autor nennt die Studienlage „sehr spärlich“.',
        'Besser belegt ist etwas anderes: Struktur von außen hilft. In einer Studie im Fachblatt JAMA (2010) bekamen Erwachsene, die schon Medikamente nahmen, zusätzlich eine Verhaltenstherapie mit Training im Organisieren und Planen. Sie hatten danach deutlich weniger Beschwerden als die Vergleichsgruppe. Eine zweite Studie aus demselben Jahr testete ein Gruppentraining zu Zeitmanagement, Organisation und Planung und fand ebenfalls eine klare Wirkung.',
        'Das heißt nicht, dass eine App eine Therapie ist. Es heißt: Wer Planen und Erinnern aus dem Kopf in ein System auslagert, hat es oft leichter. Systeme statt Tagesform.',
      ] },
      { h: 'Typische Hürden beim Zeiterfassen', list: [
        ['Zeit schlecht spüren', 'Der Nachmittag ist plötzlich vorbei. Hilfe: Zeit sichtbar machen, nicht nur als Zahl.'],
        ['Stempeln vergessen', 'Lücken, dann Scham, dann aufgeben. Hilfe: Erinnerung zur Uhrzeit oder am Ort, und Nachtragen ohne Tadel.'],
        ['Hyperfokus', 'Pause und Essen vergessen, weil die Aufgabe gerade trägt. Hilfe: eine leise Erinnerung, kein Vorwurf.'],
        ['Papierkram aufschieben', 'Der Stundenzettel am Monatsende bleibt liegen. Hilfe: Monat in wenigen Tipps fertig.'],
        ['Rote Zahlen', 'Ein Minus fühlt sich an wie Versagen. Hilfe: die Woche ansehen statt jeden Tag einzeln.'],
      ] },
      { h: 'Nachtragen ist kein Schummeln', p: [
        'Der wichtigste Satz zuerst: Wenn du vergessen hast zu stempeln, trag die Zeit nach. Das ist völlig in Ordnung. Ein nachgetragener Tag ist viel mehr wert als ein leerer. Fieravend markiert nachgetragene Zeiten als „nachgetragen“. Das ist keine Strafe, sondern ehrlich, und es macht deinen Zettel glaubwürdig.',
        'Was es leichter macht: Einen Tag wie gestern mit einem Wisch kopieren, oft gebrauchte Zeiten als Favoriten antippen, nur die Dauer eintragen, wenn du Beginn und Ende nicht mehr weißt. Und: lieber am selben Abend kurz als am Monatsende alles auf einmal.',
      ] },
      { h: 'Was Fieravend dafür hat', list: [
        ['Erinnerungen, die fragen', 'Morgens ans Einstempeln, abends, wenn die Uhr noch läuft. Auf Wunsch auch am Arbeitsort: Fieravend fragt „Einstempeln?“, stempelt aber nie von selbst.'],
        ['Zeit, die man sieht', 'Die Sonne wandert über einen Bogen bis zum Feierabend, auf Wunsch mit Countdown im Sperrbildschirm.'],
        ['Stempeln ohne die App zu suchen', 'Widget, Kontrollzentrum, Aktionstaste, oder ein NFC-Sticker an der Tür.'],
        ['Keine Strafen', 'Serien wie „Pausen eingehalten“ zählen nur Erholung, nie Arbeit, und enden still, ohne Hinweis und ohne Neustart-Druck. Keine Punkte für mehr Arbeit, keine Rangliste.'],
      ] },
      { h: 'Ein paar Ideen, die vielen helfen', p: [
        'Das sind Erfahrungen, keine Studienergebnisse. Nimm, was passt, und lass den Rest.',
      ], list: [
        ['Feste Anker', 'Stempeln an etwas koppeln, das sowieso passiert: Jacke an den Haken, Laptop auf, Stempeln.'],
        ['Ein Satz am Abend', 'Nicht den ganzen Tag rekonstruieren, nur „Was war heute anders?“.'],
        ['Woche statt Tag', 'Am Freitag einmal draufschauen reicht oft. Ein kurzer Tag ist kein Drama, wenn die Woche passt.'],
        ['Nicht allein', 'Viele finden es leichter, mit jemandem zusammen den Monat abzuschließen, am Telefon oder am Küchentisch.'],
      ] },
      { h: 'Wenn es zu viel wird', p: [
        'Arbeit, Zeitdruck und das Gefühl, ständig hinterherzulaufen, können sehr schwer werden. Wenn du merkst, dass es dir nicht gut geht, rede mit jemandem. Rund um die Uhr und kostenlos erreichbar sind in Deutschland die TelefonSeelsorge unter 0800 111 0 111 oder 0800 111 0 222, in Österreich die TelefonSeelsorge unter 142 und in der Schweiz Die Dargebotene Hand unter 143. In akuter Gefahr wähle den Notruf 112.',
      ] },
    ],
    qa: [
      ['Ist es schlimm, wenn ich Arbeitszeiten nachtrage?', 'Nein. Ein nachgetragener Tag ist besser als ein leerer. Fieravend markiert nachgetragene Zeiten, damit dein Stundenzettel ehrlich und nachvollziehbar bleibt.'],
      ['Gibt es Belege, dass Struktur bei AD(H)S hilft?', 'Ja. Studien zu Verhaltenstherapie mit Training im Organisieren und Planen (Safren et al. 2010, Solanto et al. 2010) zeigen eine klare Wirkung. Zur Zeitwahrnehmung bei Erwachsenen ist die Studienlage dagegen gemischt (Mette 2023).'],
    ],
    sources: [
      ['Mette, C. (2023): Time Perception in Adult ADHD: Findings from a Decade. A Review. IJERPH 20(4):3098', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9962130/'],
      ['Safren, S. A. et al. (2010): Cognitive Behavioral Therapy vs Relaxation With Educational Support for Medication-Treated Adults With ADHD and Persistent Symptoms. JAMA 304(8):875–880 (Studienregister)', 'https://clinicaltrials.gov/study/NCT00118911'],
      ['Solanto, M. V. et al. (2010): Efficacy of meta-cognitive therapy for adult ADHD. Am J Psychiatry 167:958–968', 'https://pubmed.ncbi.nlm.nih.gov/20231319/'],
      ['TelefonSeelsorge Deutschland', 'https://www.telefonseelsorge.de/'],
      ['TelefonSeelsorge Österreich, Notruf 142', 'https://www.telefonseelsorge.at/'],
      ['Die Dargebotene Hand, Telefon 143 (Schweiz)', 'https://www.143.ch/'],
    ],
    related: ['mag-frueher', 'nachweis', 'fragen'],
  },
  en: {
    kicker: 'ADHD and work',
    title: 'Tracking time with ADHD: systems that don’t scold',
    desc: 'Forgot to clock in, lost track of time, then shame and the app deleted? What research says about ADHD and time, what helps many people, and why adding hours later is perfectly fine.',
    answer: 'Many people with ADHD say they find it hard to feel time passing, forget to clock in and feel ashamed afterwards. What is well supported is that structure from outside helps: training in planning and organising works in studies. So a system that reminds you, makes adding hours later easy and never scolds helps more than a good resolution. This text is not a diagnosis and not treatment.',
    read: '7 minutes',
    note: 'This text describes experiences and studies. It is not a diagnosis and does not replace treatment. If you have questions about ADHD or medication, talk to your doctor.',
    sections: [
      { h: '“It’s 7 pm already?”', p: [
        'Mika works in a warehouse and has ADHD. In the morning Mika still remembers to clock in, at midday the break disappears into a task that is exciting right now, and in the evening Mika goes home without clocking out. Three days later the time sheet is full of gaps. Then comes the feeling many people know: I can’t even manage this. And the app gets deleted.',
        'If that sounds familiar: it is not a lack of discipline. It is because most tools are built for people who count time in the background. Many people with ADHD don’t, and that is not a flaw of character.',
      ] },
      { h: 'What research says, and what it does not', p: [
        'You often hear the term “time blindness”. As an everyday description it fits for many people. But research in adults is thinner than you might think: a 2023 review found only nine suitable studies for the years 2012 to 2022. Some show clear difficulties with estimating and dividing up time, others do not. The author calls the evidence “very scarce”.',
        'Something else is better supported: structure from outside helps. In a study in the journal JAMA (2010), adults already taking medication also received behavioural therapy with training in organising and planning. Afterwards they had clearly fewer symptoms than the comparison group. A second study from the same year tested group training in time management, organisation and planning and also found a clear effect.',
        'That does not mean an app is therapy. It means: moving planning and remembering out of your head into a system often makes things easier. Systems, not willpower.',
      ] },
      { h: 'Typical hurdles when tracking time', list: [
        ['Hard to feel time', 'Suddenly the afternoon is over. What helps: making time visible, not just a number.'],
        ['Forgetting to clock in', 'Gaps, then shame, then giving up. What helps: a reminder at a time or a place, and adding hours later without blame.'],
        ['Hyperfocus', 'Forgetting breaks and food because the task is carrying you. What helps: a quiet reminder, not a reproach.'],
        ['Putting off paperwork', 'The time sheet at the end of the month just sits there. What helps: finishing the month in a few taps.'],
        ['Red numbers', 'A minus feels like failure. What helps: looking at the week instead of every single day.'],
      ] },
      { h: 'Adding hours later is not cheating', p: [
        'The most important thing first: if you forgot to clock in, add the time later. That is perfectly fine. A day added later is worth much more than an empty one. Fieravend marks times added later as “added later”. That is not a punishment, it is honest, and it makes your record credible.',
        'What makes it easier: copying a day like yesterday with one swipe, tapping often-used times as favourites, entering just the duration if you no longer know start and end. And: a short entry the same evening rather than everything at once at the end of the month.',
      ] },
      { h: 'What Fieravend has for this', list: [
        ['Reminders that ask', 'In the morning to clock in, in the evening if the clock is still running. If you like, also at your workplace: Fieravend asks “Clock in?”, but never clocks you in by itself.'],
        ['Time you can see', 'The sun moves along an arc towards the end of your day, with a countdown on the lock screen if you like.'],
        ['Clocking in without hunting for the app', 'Widget, Control Centre, Action button, or an NFC sticker on the door.'],
        ['No penalties', 'Streaks like “breaks taken” only count rest, never work, and end quietly, without a message and without pressure to restart. No points for more work, no leaderboard.'],
      ] },
      { h: 'A few ideas that help many people', p: [
        'These are experiences, not study results. Take what fits and leave the rest.',
      ], list: [
        ['Fixed anchors', 'Link clocking in to something that happens anyway: jacket on the hook, laptop open, clock in.'],
        ['One sentence in the evening', 'Don’t reconstruct the whole day, just “What was different today?”.'],
        ['Week, not day', 'One look on Friday is often enough. A short day is no drama if the week adds up.'],
        ['Not alone', 'Many find it easier to close the month together with someone, on the phone or at the kitchen table.'],
      ] },
      { h: 'If it gets too much', p: [
        'Work, time pressure and the feeling of always running behind can get very heavy. If you notice you are not doing well, talk to someone. Free and around the clock: in Germany the TelefonSeelsorge on 0800 111 0 111 or 0800 111 0 222, in Austria the TelefonSeelsorge on 142, and in Switzerland Die Dargebotene Hand on 143 (English support on 0800 143 000 in the evening). Elsewhere, call your local emergency number; in the EU that is 112.',
      ] },
    ],
    qa: [
      ['Is it bad to add working hours later?', 'No. A day added later is better than an empty one. Fieravend marks times added later so your time sheet stays honest and traceable.'],
      ['Is there evidence that structure helps with ADHD?', 'Yes. Studies of behavioural therapy with training in organising and planning (Safren et al. 2010, Solanto et al. 2010) show a clear effect. On time perception in adults, by contrast, the evidence is mixed (Mette 2023).'],
    ],
    sources: [
      ['Mette, C. (2023): Time Perception in Adult ADHD: Findings from a Decade. A Review. IJERPH 20(4):3098', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9962130/'],
      ['Safren, S. A. et al. (2010): Cognitive Behavioral Therapy vs Relaxation With Educational Support for Medication-Treated Adults With ADHD and Persistent Symptoms. JAMA 304(8):875–880 (trial registry)', 'https://clinicaltrials.gov/study/NCT00118911'],
      ['Solanto, M. V. et al. (2010): Efficacy of meta-cognitive therapy for adult ADHD. Am J Psychiatry 167:958–968', 'https://pubmed.ncbi.nlm.nih.gov/20231319/'],
      ['TelefonSeelsorge Germany (German)', 'https://www.telefonseelsorge.de/'],
      ['TelefonSeelsorge Austria, 142 (German)', 'https://www.telefonseelsorge.at/'],
      ['Die Dargebotene Hand, 143 (Switzerland)', 'https://www.143.ch/'],
    ],
    related: ['mag-frueher', 'nachweis', 'fragen'],
  },
};
