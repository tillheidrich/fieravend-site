/*
 * Start page behaviour. Runs only in the browser: no storage, no network, no cookies.
 * - Feierabend clock in the hero: start + contract hours + legal break (DE § 4 ArbZG: more than 6 h → 30 min,
 *   more than 9 h → 45 min), reads the visitor's own clock and puts the sun on its arc.
 * - Screen rail: arrow keys move one screen.
 * - Pinned day: the step nearest the middle of the viewport sets the stage state.
 * - Entrances (.reveal) once per section, the mail link in the closing dialog carries the typed job.
 * Every part has a plain fallback: without script the page shows the example values and all content.
 */
(function () {
  'use strict';
  var root = document.documentElement;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  root.classList.add('js');

  var lang = root.lang === 'en' ? 'en' : 'de';
  var T = {
    de: { now: 'Jetzt', left: 'noch', toGo: 'bis Feierabend', past: 'Feierabend war vor', before: 'Du hast noch nicht angefangen.',
      pause: function (m, law) { return m ? 'mit ' + m + ' Minuten Pause nach ' + law : 'bei dieser Dauer ist keine Pause vorgeschrieben (' + law + ')'; },
      eu: 'mit 30 Minuten Pause angenommen. Ab 6 Stunden steht dir eine Pause zu, die Länge regelt dein Land (Art. 4 RL 2003/88/EG).' },
    en: { now: 'Now', left: '', toGo: 'to go', past: 'You could have left', before: 'You have not started yet.',
      pause: function (m, law) { return m ? 'with a ' + m + ' minute break (' + law + ')' : 'no break required for this length (' + law + ')'; },
      eu: 'assuming a 30 minute break. After 6 hours you are owed a break, its length is set by your country (Art. 4 Directive 2003/88/EC).' },
  }[lang];
  // Break rules by country, on working time without the break (same as rechner.js).
  var LAW = { de: '§ 4 ArbZG', at: '§ 11 AZG', ch: 'Art. 15 ArG' };
  function needPause(country, net) {
    if (country === 'at') return net > 360 ? 30 : 0;
    if (country === 'ch') return net > 540 ? 60 : net > 420 ? 30 : net > 330 ? 15 : 0;
    if (country === 'eu') return net > 360 ? 30 : 0;
    return net > 540 ? 45 : net > 360 ? 30 : 0;
  }

  function hm(min) {
    min = ((min % 1440) + 1440) % 1440;
    var h = Math.floor(min / 60), m = min % 60;
    return h + ':' + (m < 10 ? '0' : '') + m;
  }
  function dur(min) { var h = Math.floor(min / 60), m = min % 60; return h + ':' + (m < 10 ? '0' : '') + m; }
  function parse(v) {
    var p = /^(\d{1,2}):(\d{2})/.exec(v || '');
    if (!p) return null;
    var h = +p[1], m = +p[2];
    return h < 24 && m < 60 ? h * 60 + m : null;
  }

  // ------------------------------------------------------------ Feierabend clock
  var fa = document.getElementById('fa');
  if (fa) {
    var start = document.getElementById('fa-start');
    var target = document.getElementById('fa-target');
    var out = document.getElementById('fa-time');
    var pause = document.getElementById('fa-pause');
    var nowEl = document.getElementById('fa-now');
    var sun = document.getElementById('fa-sun');
    var land = document.getElementById('fa-land');
    var calc = function () {
      var s = parse(start.value), t = parse(target.value);
      if (s === null || t === null) return;
      var country = land ? land.value : 'de';
      var br = needPause(country, t);
      var end = s + t + br;
      out.textContent = hm(end);
      pause.textContent = country === 'eu' && br ? T.eu : T.pause(br, LAW[country] || LAW.de);
      var d = new Date();
      var now = d.getHours() * 60 + d.getMinutes();
      var line = T.now + ' ' + hm(now) + ' · ';
      var p;
      if (now < s) { line += T.before; p = 0; }
      else if (now < end) { line += (T.left ? T.left + ' ' : '') + dur(end - now) + ' ' + T.toGo; p = (now - s) / (end - s); }
      else { line += T.past + ' ' + dur(now - end) + (lang === 'de' ? ' Stunden.' : ' h.'); p = 1; }
      nowEl.textContent = line;
      var a = Math.PI * p;
      sun.setAttribute('cx', (160 - 130 * Math.cos(a)).toFixed(1));
      sun.setAttribute('cy', (150 - 130 * Math.sin(a) + (p >= 1 ? 14 : 0)).toFixed(1));
      fa.classList.toggle('is-done', p >= 1);
    };
    start.addEventListener('input', calc);
    target.addEventListener('change', calc);
    if (land) land.addEventListener('change', calc);
    calc();
    setInterval(calc, 30000);
  }

  // ------------------------------------------------------------ screen rail: arrow keys
  var rail = document.getElementById('rail');
  if (rail) {
    rail.addEventListener('keydown', function (e) {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      e.preventDefault();
      var item = rail.querySelector('.rail-item');
      var step = item ? item.getBoundingClientRect().width + 32 : 360;
      rail.scrollBy({ left: e.key === 'ArrowRight' ? step : -step, behavior: reduce ? 'auto' : 'smooth' });
    });
  }

  if (!('IntersectionObserver' in window)) return;

  // ------------------------------------------------------------ pinned day
  var stage = document.getElementById('day-stage');
  var steps = document.querySelectorAll('.day-step');
  if (stage && steps.length) {
    stage.setAttribute('data-state', 'in');
    steps[0].classList.add('is-on');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        steps.forEach(function (s) { s.classList.toggle('is-on', s === en.target); });
        stage.setAttribute('data-state', en.target.getAttribute('data-step'));
      });
    }, { rootMargin: '-45% 0px -45% 0px' });
    steps.forEach(function (s) { io.observe(s); });
  }

  // ------------------------------------------------------------ entrances, once
  if (!reduce) {
    var items = document.querySelectorAll('.reveal');
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-in'); ro.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    items.forEach(function (el) { el.classList.add('pre'); ro.observe(el); });
  }
})();

// ------------------------------------------------------------ closing dialog: the typed job goes into the mail
(function () {
  'use strict';
  var dlg = document.getElementById('dlg');
  var go = document.getElementById('dlg-go');
  if (!dlg || !go || !dlg.getAttribute('data-mail')) return;
  var de = dlg.getAttribute('data-lang') !== 'en';
  var name = document.getElementById('dlg-name');
  var hours = document.getElementById('dlg-h');
  var update = function () {
    var place = dlg.querySelector('input[name="dlg-place"]:checked');
    var job = (name.value || '').replace(/[\r\n]+/g, ' ').trim().slice(0, 60);
    var h = (hours.value || '').replace(/[^0-9.,]/g, '').slice(0, 5);
    var body = de
      ? 'Hallo,\n\nbitte sagt mir Bescheid, wenn Fieravend im App Store ist.\n\nMein erster Job: ' + (job || '–') + ', ' + (place ? place.value : '') + ', ' + (h || '–') + ' Stunden pro Woche.\n'
      : 'Hello,\n\nplease let me know when Fieravend is in the App Store.\n\nMy first job: ' + (job || '–') + ', ' + (place ? place.value : '') + ', ' + (h || '–') + ' hours a week.\n';
    go.href = 'mailto:' + dlg.getAttribute('data-mail') + '?subject=' + dlg.getAttribute('data-sub') + '&body=' + encodeURIComponent(body);
  };
  dlg.addEventListener('input', update);
  dlg.addEventListener('change', update);
  update();
})();
