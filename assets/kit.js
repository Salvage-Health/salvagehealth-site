(function () {
  var H = window.SH_GOALS, SK = window.SK, $ = function (id) { return document.getElementById(id); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var n = function (v) { return Math.round(v).toLocaleString('en-US'); };
  var SHIELD = '<svg viewBox="0 0 100 100" aria-hidden="true"><path d="M50 6 L84 18 V48 C84 72 68 88 50 96 C32 88 16 72 16 48 V18 Z" fill="none" stroke="currentColor" stroke-width="5"/><path d="M24 54 H37 L44 40 L52 66 L59 46 L65 54 H78" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  SK.RECIPES.forEach(function (r) {
    var t = { k: 0, p: 0 };
    r.items.forEach(function (it) { var f = SK.FOODS[it.food]; t.k += f.kcal * it.g / 100; t.p += f.p * it.g / 100; });
    r.m = { kcal: Math.round(t.k / r.serves / 5) * 5, p: Math.round(t.p / r.serves) };
  });

  var P = H.load() || {};
  var GOALS = [['lose', 'Lose fat', 'Drop weight, keep muscle'], ['recomp', 'Recomp', 'Lose fat, build muscle'], ['gain', 'Build muscle', 'Get bigger and stronger'], ['maintain', 'Maintain', 'Hold steady, build habits']];
  $('c-goal').innerHTML = GOALS.map(function (g) { return '<button type="button" data-v="' + g[0] + '" aria-pressed="false">' + g[1] + '<small>' + g[2] + '</small></button>'; }).join('');
  $('c-act').innerHTML = H.ACT.map(function (a) { return '<button type="button" data-v="' + a[0] + '" aria-pressed="false">' + a[1] + (a[2] ? '<small>' + a[2] + '</small>' : '') + '</button>'; }).join('');
  $('c-skill').innerHTML = H.SKILL.map(function (s) { return '<button type="button" data-v="' + s[0] + '" aria-pressed="false">' + s[1] + '<small>' + s[2] + '</small></button>'; }).join('');

  function mark() {
    document.querySelectorAll('#c-goal button').forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.v === P.goal); });
    document.querySelectorAll('[data-k=sex] button').forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.v === P.sex); });
    document.querySelectorAll('#c-act button').forEach(function (b) { b.setAttribute('aria-pressed', +b.dataset.v === +P.act); });
    document.querySelectorAll('#c-skill button').forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.v === P.skill); });
  }
  ['age', 'ft', 'in', 'lb'].forEach(function (k) {
    var el = $('c-' + k), key = k === 'in' ? 'inch' : k;
    if (P[key] != null && P[key] !== '') el.value = P[key];
    el.addEventListener('input', function () { P[key] = el.value === '' ? '' : +el.value; update(); });
  });

  // toast
  var toast = document.createElement('div'); toast.className = 'toast'; toast.setAttribute('role', 'status'); document.body.appendChild(toast);
  function say(msg, jump) {
    toast.innerHTML = esc(msg) + (jump ? '<button type="button">See it</button>' : '');
    toast.classList.add('on'); clearTimeout(say.t); say.t = setTimeout(function () { toast.classList.remove('on'); }, 3200);
    var b = toast.querySelector('button'); if (b) b.onclick = function () { $('plan').scrollIntoView({ behavior: 'smooth' }); toast.classList.remove('on'); };
  }

  var wasReady = false;
  $('calc').addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return;
    var changed = '';
    if (b.closest('#c-goal')) { if (P.goal !== b.dataset.v) changed = 'Updated for ' + H.G[b.dataset.v].short.toLowerCase(); P.goal = b.dataset.v; }
    else if (b.closest('[data-k=sex]')) P.sex = b.dataset.v;
    else if (b.closest('#c-act')) P.act = +b.dataset.v;
    else if (b.closest('#c-skill')) { if (P.skill !== b.dataset.v) changed = 'Meals updated for your kitchen level'; P.skill = b.dataset.v; }
    mark(); var ready = update();
    if (ready && !wasReady) { wasReady = true; setTimeout(function () { $('plan').scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 150); }
    else if (ready && changed) { flash(); if (!inView($('plan'))) say(changed, true); else say(changed); }
  });
  function inView(el) { var r = el.getBoundingClientRect(); return r.top < innerHeight * 0.8 && r.bottom > 80; }
  function flash() { var pl = $('plan'); pl.classList.remove('flash'); void pl.offsetWidth; pl.classList.add('flash'); }

  var sent = '';
  function report(t) {
    var key = [P.goal, t.cal, P.skill].join('|'); if (key === sent) return; sent = key;
    var email = ''; try { email = sessionStorage.getItem('sh-email') || localStorage.getItem('sh-email') || ''; } catch (e) {}
    if (!email) return;
    var body = new URLSearchParams({ 'form-name': 'starter-kit-profile', email: email, goal: P.goal, calories: t.cal, protein: t.p, activity: P.act, skill: P.skill }).toString();
    clearTimeout(report.t);
    report.t = setTimeout(function () { fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: body }).catch(function () {}); }, 1500);
  }

  function update() {
    var ok = P.goal && P.sex && P.age >= 18 && P.age <= 90 && P.ft >= 4 && P.ft <= 7 && (P.inch === '' || P.inch == null || (P.inch >= 0 && P.inch < 12)) && P.lb >= 80 && P.lb <= 700 && P.act && P.skill;
    var t = ok ? H.targets({ sex: P.sex, age: +P.age, ft: +P.ft, inch: +(P.inch || 0), lb: +P.lb, act: +P.act, goal: P.goal }) : null;
    if (t) { P.cal = t.cal; P.p = t.p; P.c = t.c; P.f = t.f; P.tdee = t.tdee; } else { delete P.cal; }
    H.save(P);
    $('plan').hidden = !ok; $('r-empty').hidden = !!ok; $('foryou').hidden = !ok;
    needs(ok);
    if (!ok) return false;
    var g = H.G[P.goal], sk = H.SKILL.filter(function (s) { return s[0] === P.skill; })[0];

    $('p-who').textContent = g.short.toLowerCase();
    $('p-chips').innerHTML = '<span>' + esc(g.label) + '</span><span>' + n(t.cal) + ' cal</span><span>' + t.p + 'g protein</span><span class="o">' + esc(sk[1]) + '</span>';
    $('r-goal').textContent = g.short + ' target';
    $('r-cal').textContent = n(t.cal);

    // macro tiles
    var pcal = t.p * 4 + t.c * 4 + t.f * 9;
    $('t-cal').textContent = n(t.cal); $('t-p').textContent = t.p + 'g'; $('t-c').textContent = t.c + 'g'; $('t-f').textContent = t.f + 'g';
    $('t-pm').textContent = Math.round(t.p * 4 / pcal * 100) + '% of calories'; $('t-cm').textContent = Math.round(t.c * 4 / pcal * 100) + '% of calories'; $('t-fm').textContent = Math.round(t.f * 9 / pcal * 100) + '% of calories';
    $('t-meal').innerHTML = 'Across 4 meals, that is about <b>' + n(t.cal / 4) + ' calories</b> and <b>' + Math.round(t.p / 4) + 'g protein</b> each.';

    // energy bar
    var top = Math.max(t.tdee, t.cal) * 1.08, diff = t.cal - t.tdee;
    $('e-fill').style.width = (t.cal / top * 100) + '%';
    $('e-mark').style.left = 'calc(' + (t.tdee / top * 100) + '% - 1px)';
    $('e-l1').innerHTML = 'Your target <b>' + n(t.cal) + '</b>';
    $('e-l2').innerHTML = 'Maintenance <b>' + n(t.tdee) + '</b>';
    var wk = Math.abs(diff) * 7 / 3500;
    $('e-delta').innerHTML = Math.abs(diff) < 20 ? 'Eating <em>at maintenance</em>. Your weight holds steady while your body changes.'
      : diff < 0 ? '<em>' + n(-diff) + ' calories under</em> maintenance a day, about ' + wk.toFixed(1) + ' lb (' + (wk * 0.4536).toFixed(1) + ' kg) of fat loss a week.'
      : '<em>' + n(diff) + ' calories over</em> maintenance a day, about ' + wk.toFixed(1) + ' lb (' + (wk * 0.4536).toFixed(1) + ' kg) of gain a week.';

    // macro bar
    var pc = t.p * 4, cc = t.c * 4, fc = t.f * 9, tot = pc + cc + fc;
    $('m-p').style.width = (pc / tot * 100) + '%'; $('m-c').style.width = (cc / tot * 100) + '%'; $('m-f').style.width = (fc / tot * 100) + '%';
    $('r-p').textContent = t.p; $('r-c').textContent = t.c; $('r-f').textContent = t.f;
    $('r-pp').textContent = Math.round(pc / tot * 100) + '%'; $('r-cp').textContent = Math.round(cc / tot * 100) + '%'; $('r-fp').textContent = Math.round(fc / tot * 100) + '%';
    $('r-note').textContent = g.sub + (t.floor ? ' Your target is set at a safe minimum, so check with your doctor before going lower.' : '');
    $('r-kg').textContent = 'Based on ' + n(P.lb) + ' lb (' + (P.lb * 0.45359237).toFixed(1) + ' kg). Estimates only, not medical advice.';

    // meals
    var max = H.maxLv(P.skill);
    $('p-skilltag').innerHTML = 'Kitchen level 1 to ' + max + ' ' + H.dots(max);
    $('p-why').textContent = 'Picked for ' + g.short.toLowerCase() + ' and ' + sk[1].toLowerCase() + '. Each one shows why it fits.';
    var rec = H.rank(SK.RECIPES, P.goal, P.skill).slice(0, 6);
    $('fy-rec').innerHTML = rec.map(function (r) {
      var pct = Math.round(r.m.kcal / t.cal * 100);
      return '<a href="/kitchen/#' + r.id + '"><span class="im">' + (r.photos ? '<img src="' + r.photos[0] + '" alt="" loading="lazy">' : SHIELD) + '</span><b>' + esc(r.name) + '</b>' +
        '<small>' + r.m.kcal + ' cal · ' + r.m.p + 'g protein · ' + pct + '% of your day</small>' +
        '<small>Level ' + r.lvl + H.dots(r.lvl) + '</small><span class="why">' + esc(g.why(r)) + '</span></a>';
    }).join('');

    // playbook
    $('fy-eb').textContent = 'Your playbook · ' + g.short;
    $('fy-h').innerHTML = '5 rules for <em>' + esc(g.short.toLowerCase()) + '</em>';
    $('fy-hello').textContent = g.hello;
    $('fy-tips').innerHTML = g.tips.map(function (x) { return '<li><b>' + esc(x[0]) + '</b>' + esc(x[1]) + '</li>'; }).join('');
    $('fy-art').innerHTML = g.articles.filter(function (s) { return window.SH_ARTICLES[s]; }).map(function (s) { return '<a href="/articles/' + s + '/">' + esc(window.SH_ARTICLES[s]) + ' &rarr;</a>'; }).join('');

    // cook-twice fit
    var gap = t.cal - 1450, fit = $('mp-fit');
    fit.textContent = Math.abs(gap) < 150 ? 'Your target is ' + n(t.cal) + ' calories, so this plan fits you almost exactly. Eat it as written.'
      : gap > 500 ? 'Your target is ' + n(t.cal) + ' calories, about ' + n(Math.round(gap / 50) * 50) + ' more than this plan. Eat one and a half portions at lunch and dinner, have two McMuffins on training days, and add a high-protein snack like Greek yogurt with fruit.'
      : gap > 0 ? 'Your target is ' + n(t.cal) + ' calories, about ' + n(Math.round(gap / 50) * 50) + ' more than this plan. Add a snack like Greek yogurt with fruit, or bigger portions of rice and potatoes.'
      : 'Your target is ' + n(t.cal) + ' calories, about ' + n(Math.round(-gap / 50) * 50) + ' less than this plan. Skip the second half of the English muffin, use less cheese, and load up on vegetables.';
    report(t);
    return true;
  }

  var touched = false;
  document.getElementById('calc').addEventListener('input', function () { touched = true; });
  document.getElementById('calc').addEventListener('click', function (e) { if (e.target.closest('button')) touched = true; });
  function needs(ok) {
    var miss = [];
    var chk = [['goal', !!P.goal, '#c-goal'], ['male or female', !!P.sex, '[data-k=sex]'], ['age', P.age >= 18 && P.age <= 90, '#c-age'],
      ['height', P.ft >= 4 && P.ft <= 7, '#c-ft'], ['weight', P.lb >= 80 && P.lb <= 700, '#c-lb'], ['activity', !!P.act, '#c-act'], ['kitchen level', !!P.skill, '#c-skill']];
    chk.forEach(function (c) {
      var el = document.querySelector(c[2]); if (!el) return;
      var tgt = el.tagName === 'INPUT' ? el : el.closest('.cq');
      tgt.classList.toggle('miss', touched && !ok && !c[1]);
      if (!c[1]) miss.push(c[0]);
    });
    if (ok) return;
    $('need-h').textContent = miss.length >= 6 ? 'Answer 6 quick questions to see your plan' : 'Almost there. Your plan appears when you add:';
    $('need-l').innerHTML = miss.length >= 6 ? 'Your calories, protein, carbs and fat show up right here.' : miss.map(function (m) { return '<em>' + m + '</em>'; }).join(', ');
  }
  mark(); wasReady = update();
})();
