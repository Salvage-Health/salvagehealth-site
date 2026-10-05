(function () {
  var H = window.SH_GOALS, SK = window.SK, $ = function (id) { return document.getElementById(id); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var n = function (v) { return Math.round(v).toLocaleString('en-US'); };
  var SHIELD = '<svg viewBox="0 0 100 100" aria-hidden="true"><path d="M50 6 L84 18 V48 C84 72 68 88 50 96 C32 88 16 72 16 48 V18 Z" fill="none" stroke="currentColor" stroke-width="5"/><path d="M24 54 H37 L44 40 L52 66 L59 46 L65 54 H78" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  // macros per serving for recipe matching
  SK.RECIPES.forEach(function (r) {
    var t = { k: 0, p: 0 };
    r.items.forEach(function (it) { var f = SK.FOODS[it.food]; t.k += f.kcal * it.g / 100; t.p += f.p * it.g / 100; });
    r.m = { kcal: Math.round(t.k / r.serves / 5) * 5, p: Math.round(t.p / r.serves) };
  });

  var P = H.load() || {};
  var GOALS = [['lose', 'Lose fat', 'Drop weight, keep muscle'], ['recomp', 'Recomp', 'Lose fat, build muscle'], ['gain', 'Build muscle', 'Get bigger and stronger'], ['maintain', 'Maintain', 'Hold steady, build habits']];
  $('c-goal').innerHTML = GOALS.map(function (g) { return '<button type="button" data-v="' + g[0] + '" aria-pressed="false">' + g[1] + '<small>' + g[2] + '</small></button>'; }).join('');
  $('c-act').innerHTML = H.ACT.map(function (a) { return '<button type="button" data-v="' + a[0] + '" aria-pressed="false">' + a[1] + (a[2] ? '<small>' + a[2] + '</small>' : '') + '</button>'; }).join('');

  function mark() {
    document.querySelectorAll('#c-goal button').forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.v === P.goal); });
    document.querySelectorAll('[data-k=sex] button').forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.v === P.sex); });
    document.querySelectorAll('#c-act button').forEach(function (b) { b.setAttribute('aria-pressed', +b.dataset.v === +P.act); });
  }
  ['age', 'ft', 'in', 'lb'].forEach(function (k) {
    var el = $('c-' + k), key = k === 'in' ? 'inch' : k;
    if (P[key] != null && P[key] !== '') el.value = P[key];
    el.addEventListener('input', function () { P[key] = el.value === '' ? '' : +el.value; update(); });
  });
  $('calc').addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return;
    if (b.closest('#c-goal')) P.goal = b.dataset.v;
    else if (b.closest('[data-k=sex]')) P.sex = b.dataset.v;
    else if (b.closest('#c-act')) P.act = +b.dataset.v;
    mark(); update();
  });

  var sent = '';
  function report(t) {
    var key = P.goal + '|' + t.cal; if (key === sent) return; sent = key;
    var email = ''; try { email = sessionStorage.getItem('sh-email') || localStorage.getItem('sh-email') || ''; } catch (e) {}
    if (!email) return;
    var body = new URLSearchParams({ 'form-name': 'starter-kit-profile', email: email, goal: P.goal, calories: t.cal, protein: t.p, activity: P.act }).toString();
    clearTimeout(report.t);
    report.t = setTimeout(function () { fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: body }).catch(function () {}); }, 1500);
  }

  function update() {
    H.save(P);
    var ok = P.goal && P.sex && P.age >= 18 && P.age <= 90 && P.ft >= 4 && P.ft <= 7 && (P.inch === '' || P.inch == null || (P.inch >= 0 && P.inch < 12)) && P.lb >= 80 && P.lb <= 700 && P.act;
    $('res').hidden = !ok; $('r-empty').hidden = !!ok;
    if (P.goal) personalize(); else $('foryou').hidden = true;
    if (!ok) return;
    var t = H.targets({ sex: P.sex, age: +P.age, ft: +P.ft, inch: +(P.inch || 0), lb: +P.lb, act: +P.act, goal: P.goal });
    var g = H.G[P.goal];
    $('r-goal').textContent = g.short + ' target';
    $('r-cal').textContent = n(t.cal); $('r-tdee').textContent = n(t.tdee);
    $('r-p').textContent = t.p; $('r-c').textContent = t.c; $('r-f').textContent = t.f;
    $('r-note').textContent = g.sub + (t.floor ? ' Your target is set at a safe minimum, so check with your doctor before going lower.' : '');
    $('r-kg').textContent = 'Weight used: ' + n(P.lb) + ' lb (' + (P.lb * 0.45359237).toFixed(1) + ' kg). Estimates only, not medical advice.';
    var gap = t.cal - 1450, fit = $('mp-fit');
    fit.textContent = Math.abs(gap) < 150 ? 'Your target is ' + n(t.cal) + ' calories, so this plan fits you almost exactly. Eat it as written.'
      : gap > 500 ? 'Your target is ' + n(t.cal) + ' calories, about ' + n(Math.round(gap / 50) * 50) + ' more than this plan. Eat one and a half portions at lunch and dinner, have two McMuffins on training days, and add a high-protein snack like Greek yogurt with fruit.'
      : gap > 0 ? 'Your target is ' + n(t.cal) + ' calories, about ' + n(Math.round(gap / 50) * 50) + ' more than this plan. Add a snack like Greek yogurt with fruit, or bigger portions of rice and potatoes, to close the gap.'
      : 'Your target is ' + n(t.cal) + ' calories, about ' + n(Math.round(-gap / 50) * 50) + ' less than this plan. Skip the second half of the English muffin, use less cheese, and load up on vegetables to close the gap.';
    report(t);
  }

  function personalize() {
    var g = H.G[P.goal]; $('foryou').hidden = false;
    $('fy-eb').textContent = 'Made for you · ' + g.short;
    $('fy-h').innerHTML = 'Your <em>' + esc(g.short.toLowerCase()) + '</em> playbook';
    $('fy-hello').textContent = g.hello;
    $('fy-tips').innerHTML = g.tips.map(function (t) { return '<li><b>' + esc(t[0]) + '</b>' + esc(t[1]) + '</li>'; }).join('');
    var rec = SK.RECIPES.filter(g.fits).sort(function (a, b) { return (b.by ? 2 : 0) + (b.photos ? 1 : 0) - (a.by ? 2 : 0) - (a.photos ? 1 : 0); }).slice(0, 6);
    $('fy-rec').innerHTML = rec.map(function (r) {
      return '<a href="/kitchen/#' + r.id + '"><span class="im">' + (r.photos ? '<img src="' + r.photos[0] + '" alt="" loading="lazy">' : SHIELD) + '</span><b>' + esc(r.name) + '</b><small>' + r.m.kcal + ' cal · ' + r.m.p + 'g protein</small></a>';
    }).join('');
    $('fy-art').innerHTML = g.articles.filter(function (s) { return window.SH_ARTICLES[s]; }).map(function (s) { return '<a href="/articles/' + s + '/">' + esc(window.SH_ARTICLES[s]) + ' &rarr;</a>'; }).join('');
  }

  mark(); update();
})();
