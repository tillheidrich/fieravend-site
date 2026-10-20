/**
 * Two jobs (secondary audience). Mini-job limit and minimum wage 2026 with source.
 * Values for 2027 are decided: minimum wage 14,60 € (MiLoV5 § 1), mini-job limit 633 € (Minijob-Zentrale) – update on 1 Jan.
 */
import { jobsFragment } from '../screens.mjs';
import { waitlist, stand, href } from '../layout.mjs';

const C = {
  de: {
    title: 'Zwei Jobs und Minijob: Arbeitszeit und Ruhezeit im Blick',
    desc: 'Hauptjob plus Minijob? Fieravend führt jeden Job mit eigenem Soll und Konto, zählt für Pausen und Ruhezeit alles zusammen und zeigt, wie nah du der Minijob-Grenze kommst.',
    label: 'Für zwei Jobs',
    h1: 'Zwei Jobs, ein Blick.',
    lede: 'Hauptjob plus Minijob, Teilzeit plus Aushilfe. Jeder Arbeitgeber sieht nur seine Stunden. Das Arbeitszeitgesetz zählt aber alles zusammen, und Fieravend auch.',
    points: [
      ['Jeder Job für sich', 'Eigenes Soll, eigenes Überstundenkonto, eigener Urlaub. Auf dem Stundenzettel für einen Job steht nur dieser Job.'],
      ['Zusammen geprüft', 'Fieravend sagt dir, wenn über beide Jobs die Pause fehlt, der Tag zu lang wird oder zwischen Spätschicht und Frühdienst keine 11 Stunden liegen.'],
      ['Minijob im Blick', 'Du siehst, wie viel du im Minijob schon verdient hast und wie viel bis zur Grenze fehlt.'],
    ],
    mjH: 'Wie viele Stunden passen in einen Minijob?',
    mjP: 'Die Grenze liegt 2026 bei 603 € im Monat. Beim Mindestlohn von 13,90 € sind das höchstens 43,4 Stunden im Monat (603 € ÷ 13,90 €). Verdienst du mehr pro Stunde, sind es entsprechend weniger.',
    mjSrc: [['Minijob-Zentrale, Verdienstgrenze 2026', 'https://www.minijob-zentrale.de/DE/die-minijobs/minijob-mit-verdienstgrenze'], ['§ 1 Fünfte Mindestlohnanpassungsverordnung', 'https://www.gesetze-im-internet.de/milov5/__1.html']],
    mjNote: 'Die Werte gelten für Deutschland. Fieravend aktualisiert sie jedes Jahr.',
    lawH: 'Warum das Gesetz alles zusammenzählt',
    lawP: 'Arbeitszeiten bei mehreren Arbeitgebern werden zusammengerechnet. Das steht in § 2 Abs. 1 des Arbeitszeitgesetzes. Für die Pause, die Höchstarbeitszeit und die Ruhezeit zählt also der ganze Tag, nicht der einzelne Job.',
    lawSrc: ['§ 2 ArbZG', 'https://www.gesetze-im-internet.de/arbzg/__2.html'],
    plus: 'Mehrere Jobs gibt es mit Fieravend Plus oder dem Jahrespass. In den 30 Testtagen kannst du sie ausprobieren.',
    plusLink: 'Preise ansehen',
    src: 'Quelle',
  },
  en: {
    title: 'Two jobs and a mini-job: working and rest time in one view',
    desc: 'A main job plus a mini-job? Fieravend keeps each job with its own contract hours and balance, adds everything up for breaks and rest time, and shows how close you are to the mini-job limit.',
    label: 'For two jobs',
    h1: 'Two jobs, one view.',
    lede: 'A main job plus a mini-job, part-time plus a side job. Each employer only sees their own hours. The working time law adds everything up, and so does Fieravend.',
    points: [
      ['Each job on its own', 'Its own contract hours, its own overtime balance, its own leave. The time sheet for one job shows only that job.'],
      ['Checked together', 'Fieravend tells you when a break is missing across both jobs, the day gets too long, or there are fewer than 11 hours between a late and an early shift.'],
      ['Mini-job in view', 'You see how much you have earned in your mini-job and how much is left until the limit.'],
    ],
    mjH: 'How many hours fit into a mini-job?',
    mjP: 'In Germany the limit for 2026 is €603 a month. At the minimum wage of €13.90 that is at most 43.4 hours a month (€603 ÷ €13.90). If you earn more per hour, it is fewer.',
    mjSrc: [['Minijob-Zentrale, earnings limit 2026', 'https://www.minijob-zentrale.de/DE/die-minijobs/minijob-mit-verdienstgrenze'], ['§ 1 Fifth Minimum Wage Adjustment Ordinance (MiLoV5)', 'https://www.gesetze-im-internet.de/milov5/__1.html']],
    mjNote: 'These values apply to Germany. Fieravend updates them every year.',
    lawH: 'Why the law adds it all up',
    lawP: 'Working hours with several employers are added together. That is in § 2 (1) of the German Working Hours Act. For breaks, maximum hours and rest time the whole day counts, not the single job.',
    lawSrc: ['§ 2 ArbZG', 'https://www.gesetze-im-internet.de/arbzg/__2.html'],
    plus: 'Several jobs come with Fieravend Plus or the Year Pass. You can try them during the 30-day trial.',
    plusLink: 'See pricing',
    src: 'Source',
  },
};

export default function zweijobs(lang) {
  const c = C[lang];
  const points = c.points.map(([h, p]) => `<li><b>${h}</b><span>${p}</span></li>`).join('');
  const src = c.mjSrc.map(([t, u]) => `<a class="src" href="${u}">${c.src}: ${t}</a>`).join('');
  const body = `
<section class="page-head">
  <div class="wrap head-grid">
    <div>
      
      <h1>${c.h1}</h1>
      <p class="lede">${c.lede}</p>
    </div>
    <div class="head-art">${jobsFragment(lang)}</div>
  </div>
</section>

<section class="band">
  <div class="wrap split">
    <h2 class="visually-hidden">${lang === 'de' ? 'Was Fieravend bei zwei Jobs macht' : 'What Fieravend does with two jobs'}</h2>
    <p class="aside-note">${c.plus} <a href="${href('preise', lang)}">${c.plusLink}</a></p>
    <ul class="steps">${points}</ul>
  </div>
</section>

<section class="band law" aria-labelledby="mj">
  <div class="wrap split">
    <div><h2 id="mj">${c.mjH}</h2><p class="small muted">${stand(lang)}</p></div>
    <div><p class="big-num num">603 € ÷ 13,90 € = 43,4 h</p><p>${c.mjP}</p><p class="srcs">${src}</p><p class="small muted">${c.mjNote}</p></div>
  </div>
</section>

<section class="band" aria-labelledby="sum">
  <div class="wrap split">
    <h2 id="sum">${c.lawH}</h2>
    <div><p>${c.lawP}</p><p><a class="src" href="${c.lawSrc[1]}">${c.src}: ${c.lawSrc[0]}</a></p></div>
  </div>
</section>

<section class="band">
  <div class="wrap narrow">${waitlist(lang, { source: 'zweijobs' })}</div>
</section>`;
  return { title: c.title, desc: c.desc, body: lang === 'en' ? body.replace('603 € ÷ 13,90 € = 43,4 h', '€603 ÷ €13.90 = 43.4 h') : body };
}
