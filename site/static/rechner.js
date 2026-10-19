/*
 * Fieravend overtime calculator. Runs only in the browser: no storage, no network.
 * Rule per day: end − start − break (across midnight if the end is before the start).
 * Week: sum of days − contract hours. Break hints: DE § 4 ArbZG, AT § 11 AZG, CH Art. 15 ArG, EU Art. 4 RL 2003/88/EG.
 */
(function () {
  'use strict';
  var form = document.getElementById('calc');
  var out = document.getElementById('out-body');
  if (!form || !out) return;
  var lang = form.getAttribute('data-lang') === 'en' ? 'en' : 'de';
  var MINUS = '−';

  var S = {
    de: {
      days: ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'],
      short: ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'],
      plus: 'Plus diese Woche', minus: 'Minus diese Woche', even: 'Genau dein Soll',
      ist: 'Ist', soll: 'Soll', way: 'Rechenweg', night: 'über Mitternacht',
      empty: 'Trag mindestens einen Tag mit Beginn und Ende ein, dann rechnet der Rechner.',
      sollErr: 'Trag dein Soll pro Woche ein, zum Beispiel 40.',
      noEnd: function (d) { return 'Bei ' + d + ' fehlt das Ende.'; },
      noStart: function (d) { return 'Bei ' + d + ' fehlt der Beginn.'; },
      same: function (d) { return 'Bei ' + d + ' sind Beginn und Ende gleich.'; },
      badPause: function (d) { return 'Bei ' + d + ' passt die Pause nicht. Trag sie in Minuten ein, zum Beispiel 30.'; },
      longPause: function (d) { return 'Bei ' + d + ' ist die Pause länger als die Arbeitszeit.'; },
      hints: 'Hinweise', hintLabel: 'Hinweis',
      pauseShort: function (d, need, has) { return d + ': Bei dieser Arbeitszeit stehen dir ' + need + ' Minuten Pause zu, eingetragen sind ' + has + '.'; },
      pauseEu: function (d) { return d + ': Nach mehr als 6 Stunden steht dir eine Pause zu. Wie lang, regelt dein Land.'; },
      tooLong: function (d) { return d + ': Mehr als 10 Stunden am Tag erlaubt das Arbeitszeitgesetz nicht.'; },
      fixFirst: 'Sobald die Angaben vollständig sind, steht hier dein Ergebnis.',
      h: 'Std.'
    },
    en: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      short: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      plus: 'plus this week', minus: 'minus this week', even: 'Exactly your contract hours',
      ist: 'Worked', soll: 'Contract', way: 'Working', night: 'across midnight',
      empty: 'Enter at least one day with start and end, and the calculator does the rest.',
      sollErr: 'Enter your contract hours per week, for example 40.',
      noEnd: function (d) { return d + ': the end is missing.'; },
      noStart: function (d) { return d + ': the start is missing.'; },
      same: function (d) { return d + ': start and end are the same.'; },
      badPause: function (d) { return d + ': the break does not look right. Enter it in minutes, for example 30.'; },
      longPause: function (d) { return d + ': the break is longer than the working time.'; },
      hints: 'Hints', hintLabel: 'Note',
      pauseShort: function (d, need, has) { return d + ': for this many hours you are owed a ' + need + ' minute break, you entered ' + has + '.'; },
      pauseEu: function (d) { return d + ': after more than 6 hours you are owed a break. Your country sets how long.'; },
      tooLong: function (d) { return d + ': the German Working Hours Act does not allow more than 10 hours a day.'; },
      fixFirst: 'Your result appears here as soon as the entries are complete.',
      h: 'h'
    }
  }[lang];

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function hm(min, signed) {
    var s = min < 0 ? MINUS : (signed ? '+' : '');
    var a = Math.abs(Math.round(min));
    var m = a % 60;
    return s + Math.floor(a / 60) + ':' + (m < 10 ? '0' : '') + m;
  }
  function toMin(v) {
    if (!v) return null;
    var p = v.split(':');
    var h = parseInt(p[0], 10), m = parseInt(p[1], 10);
    if (isNaN(h) || isNaN(m)) return null;
    return h * 60 + m;
  }
  function parseSoll(v) {
    v = (v || '').trim();
    if (!v) return null;
    var m = /^(\d{1,3}):(\d{2})$/.exec(v);
    if (m) return parseInt(m[1], 10) * 60 + parseInt(m[2], 10);
    v = v.replace(',', '.');
    if (!/^\d{1,3}(\.\d{1,2})?$/.test(v)) return null;
    var n = parseFloat(v);
    if (!(n >= 0) || n > 168) return null;
    return Math.round(n * 60);
  }
  /** Required break in minutes for net working minutes, per country. */
  function needPause(country, net) {
    if (country === 'de') return net > 540 ? 45 : net > 360 ? 30 : 0;
    if (country === 'at') return net > 360 ? 30 : 0;
    if (country === 'ch') return net > 540 ? 60 : net > 420 ? 30 : net > 330 ? 15 : 0;
    return 0;
  }

  function setInvalid(input, bad) {
    if (bad) input.setAttribute('aria-invalid', 'true'); else input.removeAttribute('aria-invalid');
  }

  function compute(focusError) {
    var errors = [];
    var firstBad = null;
    var sollIn = form.elements.soll;
    var sollErr = document.getElementById('soll-err');
    var weekErr = document.getElementById('week-err');
    var soll = parseSoll(sollIn.value);
    setInvalid(sollIn, soll === null);
    if (soll === null) { sollErr.textContent = S.sollErr; sollErr.hidden = false; firstBad = sollIn; }
    else { sollErr.hidden = true; }

    var country = form.elements.land.value;
    var days = [];
    for (var i = 0; i < 7; i++) {
      var bi = form.elements['b' + i], ei = form.elements['e' + i], pi = form.elements['p' + i];
      var b = toMin(bi.value), e = toMin(ei.value);
      var pRaw = (pi.value || '').trim();
      var p = pRaw === '' ? 0 : Number(pRaw.replace(',', '.'));
      [bi, ei, pi].forEach(function (x) { setInvalid(x, false); });
      if (b === null && e === null) continue;
      var name = S.days[i];
      if (b === null) { errors.push(S.noStart(name)); setInvalid(bi, true); firstBad = firstBad || bi; continue; }
      if (e === null) { errors.push(S.noEnd(name)); setInvalid(ei, true); firstBad = firstBad || ei; continue; }
      if (!(p >= 0) || p > 1440 || Math.round(p) !== p) { errors.push(S.badPause(name)); setInvalid(pi, true); firstBad = firstBad || pi; continue; }
      if (b === e) { errors.push(S.same(name)); setInvalid(ei, true); firstBad = firstBad || ei; continue; }
      var night = e < b;
      var dur = (night ? e + 1440 : e) - b;
      var net = dur - p;
      if (net < 0) { errors.push(S.longPause(name)); setInvalid(pi, true); firstBad = firstBad || pi; continue; }
      days.push({ i: i, b: b, e: e, p: p, net: net, night: night });
    }

    if (errors.length) { weekErr.textContent = errors.join(' '); weekErr.hidden = false; }
    else { weekErr.hidden = true; }

    out.textContent = '';
    if (soll === null || errors.length) {
      out.appendChild(el('p', 'muted', S.fixFirst));
    } else if (!days.length) {
      out.appendChild(el('p', 'muted', S.empty));
    } else {
      render(days, soll, country);
    }
    if (focusError && firstBad) firstBad.focus();
  }

  function render(days, soll, country) {
    var ist = days.reduce(function (a, d) { return a + d.net; }, 0);
    var diff = ist - soll;
    var big = el('p', 'calc-big num ' + (diff > 0 ? 'plus' : diff < 0 ? 'minus' : ''), diff === 0 ? '0:00' : hm(diff, true));
    out.appendChild(big);
    out.appendChild(el('p', 'calc-word', diff > 0 ? S.plus : diff < 0 ? S.minus : S.even));

    var dl = el('dl', 'calc-sum');
    [[S.ist, hm(ist)], [S.soll, hm(soll)]].forEach(function (r) {
      var w = el('div');
      w.appendChild(el('dt', null, r[0]));
      w.appendChild(el('dd', 'num', r[1] + ' ' + S.h));
      dl.appendChild(w);
    });
    out.appendChild(dl);

    out.appendChild(el('h3', 'calc-h', S.way));
    var ol = el('ol', 'calc-way num');
    days.forEach(function (d) {
      var line = S.short[d.i] + '  ' + hm(d.b) + '–' + hm(d.e) + (d.night ? ' (' + S.night + ')' : '') + ' ' + MINUS + ' ' + hm(d.p) + ' = ' + hm(d.net);
      ol.appendChild(el('li', null, line));
    });
    var sum = el('li', 'calc-way-sum', hm(ist) + ' ' + MINUS + ' ' + hm(soll) + ' = ' + (diff === 0 ? '0:00' : hm(diff, true)));
    ol.appendChild(sum);
    out.appendChild(ol);

    var hints = [];
    days.forEach(function (d) {
      var name = S.days[d.i];
      if (country === 'eu') { if (d.net > 360 && d.p === 0) hints.push(S.pauseEu(name)); }
      else {
        var need = needPause(country, d.net);
        if (need && d.p < need) hints.push(S.pauseShort(name, need, d.p));
      }
      if (country === 'de' && d.net > 600) hints.push(S.tooLong(name));
    });
    if (hints.length) {
      out.appendChild(el('h3', 'calc-h', S.hints));
      var ul = el('ul', 'calc-hints');
      hints.forEach(function (h) {
        var li = el('li', 'hint hint-sm');
        var lab = el('span', 'visually-hidden', S.hintLabel + ': ');
        li.appendChild(lab);
        li.appendChild(el('span', null, h));
        ul.appendChild(li);
      });
      out.appendChild(ul);
    }
  }

  form.addEventListener('submit', function (ev) { ev.preventDefault(); compute(true); });
  form.addEventListener('input', function () { compute(false); });
  form.addEventListener('change', function () { compute(false); });
  var clear = form.querySelector('[data-clear]');
  if (clear) {
    clear.hidden = false;
    clear.addEventListener('click', function () {
      for (var i = 0; i < 7; i++) { form.elements['b' + i].value = ''; form.elements['e' + i].value = ''; form.elements['p' + i].value = ''; }
      compute(false);
      form.elements.b0.focus();
    });
  }
  compute(false);
})();
