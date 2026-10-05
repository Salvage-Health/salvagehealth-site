// Coaching qualification questionnaire (/coaching/qualify/).
// One question per screen, pre-fills from the Starter Kit plan (sh-plan, sh-email),
// computes TDEE and macros with SH_GOALS, then posts everything to Netlify form "coaching-qualify".
(function () {
  var H = window.SH_GOALS, root = document.getElementById('qz');
  if (!H || !root) return;
  var P = H.load() || {}, A = { blockers: [], signals: [], services: [] };
  try { A.email = sessionStorage.getItem('sh-email') || localStorage.getItem('sh-email') || ''; } catch (e) { A.email = ''; }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  var GOALS = [['lose', 'Lose fat', 'Drop weight, keep muscle'], ['recomp', 'Recomp', 'Lose fat and build muscle'], ['gain', 'Build muscle', 'Get bigger and stronger'], ['maintain', 'Maintain', 'Hold steady and feel better']];
  var EXP = [['new', 'Never really trained', 'Or it has been years'], ['onoff', 'On and off', 'I start strong, then fall off'], ['steady', 'Consistent', 'Training regularly for 1+ year']];
  var DAYS = [['2', '2 days'], ['3', '3 days'], ['4', '4 days'], ['5', '5+ days']];
  var BLOCK = ['Not enough time', 'Staying consistent', 'Not sure what to eat', 'Stalled or plateaued', 'Injuries or pain', 'Cravings or emotional eating', 'Travel or work schedule', 'Gym feels intimidating'];
  var SIG = ['Low energy most days', 'Poor sleep', 'Stalled even when doing everything right', 'Constant cravings', 'Brain fog', 'Low drive or motivation', 'Slow recovery from workouts', 'None of these'];
  var LABS = [['yes', 'Yes'], ['no', 'No'], ['unsure', 'Not sure']];
  var SERV = ['Accountability', 'Fitness coaching', 'Health and performance', 'Custom workout plan', 'Custom meal plan', 'Not sure yet'];
  var TALK = [['call', 'Yes, call or text me', 'Fastest way to get started'], ['email', 'Yes, email me first', 'I want the details before a call'], ['no', 'Not right now', 'Just send me my numbers']];
  var START = [['now', 'This week'], ['month', 'Within a month'], ['later', 'Just exploring']];
  var TIMES = [['Morning', 'Morning'], ['Afternoon', 'Afternoon'], ['Evening', 'Evening']];
  var STYLE = [['once', 'A one-time custom plan', 'I just need the blueprint'], ['ongoing', 'Ongoing coaching', 'Plan plus weekly check-ins'], ['unsure', 'Not sure yet', 'Help me decide']];

  function havePlan() { return P.goal && P.sex && P.age >= 18 && P.ft >= 4 && P.lb >= 80 && P.act; }
  var usePlan = !!havePlan();

  // ---- step definitions -------------------------------------------------
  var STEPS = [
    { id: 'confirm', when: function () { return usePlan; }, render: function () {
      var g = GOALS.filter(function (x) { return x[0] === P.goal; })[0], a = H.ACT.filter(function (x) { return +x[0] === +P.act; })[0];
      return h('Your Starter Kit numbers', 'We pulled these from the plan you already made, so you can skip ahead.') +
        '<dl class="qz-sum"><div><dt>Goal</dt><dd>' + esc(g ? g[1] : P.goal) + '</dd></div><div><dt>Sex</dt><dd>' + (P.sex === 'm' ? 'Male' : 'Female') + '</dd></div>' +
        '<div><dt>Age</dt><dd>' + esc(P.age) + '</dd></div><div><dt>Height</dt><dd>' + esc(P.ft) + '\' ' + esc(P.inch || 0) + '"</dd></div>' +
        '<div><dt>Weight</dt><dd>' + esc(P.lb) + ' lb</dd></div><div><dt>Activity</dt><dd>' + esc(a ? a[1] : '') + '</dd></div></dl>' +
        '<div class="qz-two"><button type="button" class="btn solid" data-act="keep">Use these</button><button type="button" class="btn line" data-act="edit">Edit my numbers</button></div>';
    }, ok: function () { return true; }, nonav: true },
    { id: 'goal', when: function () { return !usePlan; }, render: function () { return h('What is your main goal?', 'Pick the one that matters most right now.') + opts('goal', GOALS, P.goal); }, ok: function () { return !!P.goal; }, auto: true },
    { id: 'body', when: function () { return !usePlan; }, render: function () {
      return h('About you', 'This sets your calories and macros. It stays between us.') +
        '<div class="qz-lbl">Sex</div>' + opts('sex', [['m', 'Male'], ['f', 'Female']], P.sex, 'row') +
        '<div class="qz-grid"><label>Age<input inputmode="numeric" data-n="age" value="' + esc(P.age) + '" placeholder="Age"></label>' +
        '<label>Height (ft)<input inputmode="numeric" data-n="ft" value="' + esc(P.ft) + '" placeholder="Ft"></label>' +
        '<label>(in)<input inputmode="numeric" data-n="inch" value="' + esc(P.inch) + '" placeholder="In"></label>' +
        '<label>Weight (lb)<input inputmode="numeric" data-n="lb" value="' + esc(P.lb) + '" placeholder="Pounds"></label></div>' +
        '<p class="qz-err" id="qz-err" hidden></p>';
    }, ok: function () {
      var e = document.getElementById('qz-err');
      if (P.age && +P.age < 18) { e.hidden = false; e.textContent = 'Coaching is for adults 18 and older. The free Starter Kit and Kitchen are open to everyone.'; return false; }
      var good = P.sex && P.age >= 18 && P.age <= 90 && P.ft >= 4 && P.ft <= 7 && (P.inch === '' || P.inch == null || (P.inch >= 0 && P.inch < 12)) && P.lb >= 80 && P.lb <= 700;
      e.hidden = !!good; if (!good) e.textContent = 'Fill in each box so I can work out your numbers.'; return !!good;
    } },
    { id: 'act', when: function () { return !usePlan; }, render: function () { return h('How active are you right now?', 'Count workouts and how much you move at work.') + opts('act', H.ACT, P.act); }, ok: function () { return !!P.act; }, auto: true },
    { id: 'exp', render: function () { return h('How much training experience do you have?', 'No wrong answer. Plans start where you are.') + opts('exp', EXP, A.exp); }, ok: function () { return !!A.exp; }, auto: true },
    { id: 'days', render: function () { return h('How many days a week can you train?', 'Be realistic. A plan you keep beats a perfect one you quit.') + opts('days', DAYS, A.days, 'row'); }, ok: function () { return !!A.days; }, auto: true },
    { id: 'block', render: function () { return h('What keeps getting in the way?', 'Pick all that apply.') + multi('blockers', BLOCK); }, ok: function () { return A.blockers.length > 0; } },
    { id: 'hood', render: function () {
      return h('What is happening under the hood?', 'Any of these can point to something bloodwork would show. Pick all that apply.') + multi('signals', SIG) +
        '<div class="qz-lbl">Have you had bloodwork in the last 6 months?</div>' + opts('labs', LABS, A.labs, 'row');
    }, ok: function () { return A.signals.length > 0 && !!A.labs; } },
    { id: 'help', render: function () {
      return h('What kind of help do you want?', 'Pick all that interest you.') + multi('services', SERV) + '<div class="qz-lbl">Which sounds more like you?</div>' + opts('style', STYLE, A.style);
    }, ok: function () { return A.services.length > 0 && !!A.style; } },
    { id: 'ready', render: function () {
      var n = []; for (var i = 1; i <= 10; i++) n.push([String(i), String(i)]);
      return h('How ready are you to start?', '1 is just looking. 10 is "I start Monday no matter what."') + opts('readiness', n, A.readiness, 'nums') +
        '<label class="qz-lbl" for="qz-why">What changes in your life when you hit your goal? <span>(optional)</span></label><textarea id="qz-why" data-t="why" placeholder="Play with my kids without getting winded, get off a medication, feel good in photos...">' + esc(A.why) + '</textarea>';
    }, ok: function () { return !!A.readiness; } },
    { id: 'talk', render: function () {
      var x = h('Want to talk about coaching?', 'A free, no-pressure intro call. 15 minutes, and you leave with a plan either way.') + opts('contact', TALK, A.contact) +
        '<div class="qz-lbl">If it is the right fit, when would you want to start?</div>' + opts('start', START, A.start, 'row');
      if (A.contact === 'call') x += '<div class="qz-lbl">Best time to reach you?</div>' + opts('besttime', TIMES, A.besttime, 'row');
      return x;
    }, ok: function () { return !!A.contact && !!A.start && (A.contact !== 'call' || !!A.besttime); }, rerender: true },
    { id: 'contact', render: function () {
      return h('Where should I send your results?', 'I review every one myself.') +
        '<div class="qz-form"><label>Name<input data-t="name" autocomplete="name" value="' + esc(A.name) + '"></label>' +
        '<label>Email<input type="email" data-t="email" autocomplete="email" value="' + esc(A.email) + '"></label>' +
        '<label>Phone ' + (A.contact === 'call' ? '<span>(for your intro call)</span>' : '<span>(optional)</span>') + '<input type="tel" data-t="phone" autocomplete="tel" value="' + esc(A.phone) + '"></label>' +
        '<label>Instagram <span>(optional)</span><input data-t="instagram" placeholder="@" value="' + esc(A.instagram) + '"></label>' +
        '<label>How did you find me? <span>(optional)</span><input data-t="referral" placeholder="Instagram, the book, a friend..." value="' + esc(A.referral) + '"></label></div>' +
        '<p class="qz-err" id="qz-err" hidden></p>';
    }, ok: function () {
      var e = document.getElementById('qz-err'), digits = (A.phone || '').replace(/\D/g, '');
      var msg = !(A.name && /.+@.+\..+/.test(A.email || '')) ? 'Add your name and a valid email so I can reach you.' : (A.contact === 'call' && digits.length < 10 ? 'Add your phone number so I can call or text you.' : '');
      e.hidden = !msg; e.textContent = msg; return !msg;
    }, last: true }
  ];

  function h(t, s) { return '<h2 class="qz-q">' + esc(t) + '</h2>' + (s ? '<p class="qz-sub">' + esc(s) + '</p>' : ''); }
  function opts(k, list, cur, cls) {
    return '<div class="qz-opts ' + (cls || '') + '" data-k="' + k + '">' + list.map(function (o) {
      return '<button type="button" data-v="' + esc(o[0]) + '" aria-pressed="' + (String(cur) === String(o[0])) + '">' + esc(o[1]) + (o[2] ? '<small>' + esc(o[2]) + '</small>' : '') + '</button>';
    }).join('') + '</div>';
  }
  function multi(k, list) {
    return '<div class="qz-opts multi" data-m="' + k + '">' + list.map(function (o) {
      return '<button type="button" data-v="' + esc(o) + '" aria-pressed="' + (A[k].indexOf(o) > -1) + '">' + esc(o) + '</button>';
    }).join('') + '</div>';
  }

  // ---- flow ------------------------------------------------------------
  var live = function () { return STEPS.filter(function (s) { return !s.when || s.when(); }); };
  var at = 0;
  function show() {
    var L = live(), s = L[at];
    var pct = Math.round(at / L.length * 100);
    root.innerHTML = '<div class="qz-bar"><i style="width:' + pct + '%"></i></div><p class="qz-count">Question ' + (at + 1) + ' of ' + L.length + '</p>' +
      '<div class="qz-step">' + s.render() + '</div>' +
      (s.nonav ? '' : '<div class="qz-nav">' + (at > 0 ? '<button type="button" class="btn line" data-act="back">Back</button>' : '<span></span>') +
        '<button type="button" class="btn solid" data-act="next">' + (s.last ? 'See my results' : 'Next') + '</button></div>');
    root.querySelectorAll('input[data-n]').forEach(function (el) { el.addEventListener('input', function () { P[el.dataset.n] = el.value === '' ? '' : +el.value; }); });
    root.querySelectorAll('[data-t]').forEach(function (el) { el.addEventListener('input', function () { A[el.dataset.t] = el.value.trim(); }); });
    var f = root.querySelector('input,textarea'); if (f && at > 0 && matchMedia('(pointer:fine)').matches) f.focus();
    root.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  function next() { var L = live(); if (!L[at].ok()) return; if (L[at].last) return finish(); at++; show(); }

  root.addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return;
    var act = b.dataset.act;
    if (act === 'keep') { at++; return show(); }
    if (act === 'edit') { usePlan = false; at = 0; return show(); }
    if (act === 'back') { at = Math.max(0, at - 1); return show(); }
    if (act === 'next') return next();
    if (act === 'optin') {
      A.contact = 'email'; var L2 = leadScore();
      var up = { 'form-name': 'coaching-qualify', lead: L2.tier, lead_summary: 'CHANGED MIND on results page: ' + L2.summary, contact_pref: 'email', start_when: A.start, name: A.name, email: A.email, phone: A.phone || '', readiness: A.readiness };
      fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams(up).toString() }).catch(function () {});
      document.getElementById('qz-later').innerHTML = '<small>Done</small><h3>I will be in touch</h3><p>Watch your inbox. I will email you within 1 business day with your coaching options and pricing.</p>';
      return;
    }
    var g = b.closest('[data-k]'), m = b.closest('[data-m]');
    if (g) {
      var k = g.dataset.k, v = b.dataset.v;
      if (k === 'goal' || k === 'sex') P[k] = v; else if (k === 'act') P.act = +v; else A[k] = v;
      g.querySelectorAll('button').forEach(function (x) { x.setAttribute('aria-pressed', x === b); });
      var s = live()[at]; if (s.auto) setTimeout(next, 220); else if (s.rerender && k === 'contact') { var y = scrollY; show(); scrollTo(0, y); }
    } else if (m) {
      var arr = A[m.dataset.m], val = b.dataset.v, none = val === 'None of these' || val === 'Not sure yet';
      if (none) arr.length = 0; else { var ix = arr.indexOf('None of these'); if (ix > -1) arr.splice(ix, 1); ix = arr.indexOf('Not sure yet'); if (ix > -1) arr.splice(ix, 1); }
      var at2 = arr.indexOf(val); if (at2 > -1) arr.splice(at2, 1); else arr.push(val);
      m.querySelectorAll('button').forEach(function (x) { x.setAttribute('aria-pressed', arr.indexOf(x.dataset.v) > -1); });
    }
  });

  // ---- results -----------------------------------------------------------
  function recommend() {
    var sig = A.signals.filter(function (x) { return x !== 'None of these'; }).length, stalled = A.blockers.indexOf('Stalled or plateaued') > -1 || A.signals.indexOf('Stalled even when doing everything right') > -1;
    var wantsOnly = A.services.every(function (x) { return x === 'Custom workout plan' || x === 'Custom meal plan'; });
    if (stalled || sig >= 2 || A.services.indexOf('Health and performance') > -1) return ['Health and Performance Coaching', 'You described signs that something under the hood may be holding you back. We would start by understanding your body, including bloodwork through your doctor, then build training and nutrition around it.'];
    if (A.style === 'once' && wantsOnly) return ['Custom Plan', 'You know how to work hard. You need the right blueprint: training and meals built for your body, schedule and goal, with a full grocery list and meal timing.'];
    if (A.blockers.indexOf('Staying consistent') > -1 || A.exp === 'onoff') return ['Accountability and Fitness Coaching', 'Your pattern is starting strong and falling off. Weekly check-ins and a plan that adjusts with your life are what break that cycle.'];
    return ['Fitness Coaching', 'A structured plan with progressions and form checks, built around ' + A.days + ' training days a week, so every session moves you forward.'];
  }

  // Sales readiness: how hot is this lead? Shown first in the notification email.
  function leadScore() {
    var r = +A.readiness, pts = (r >= 8 ? 4 : r >= 6 ? 3 : r >= 4 ? 1 : 0) + ({ now: 3, month: 2, later: 0 })[A.start] + ({ call: 3, email: 2, no: 0 })[A.contact] + (A.style === 'ongoing' ? 1 : 0);
    var tier = A.contact === 'no' ? 'NURTURE' : (pts >= 9 ? 'HOT' : pts >= 6 ? 'WARM' : 'COOL');
    var action = { HOT: 'Contact within 24 hours', WARM: 'Follow up within 2 days', COOL: 'Light follow-up email', NURTURE: 'Did not ask for contact. Email nurture only' }[tier];
    var how = A.contact === 'call' ? 'wants a CALL or TEXT (' + A.besttime + ')' : A.contact === 'email' ? 'wants an EMAIL first' : 'does NOT want contact yet';
    var when = { now: 'start this week', month: 'start within a month', later: 'just exploring' }[A.start];
    return { tier: tier, score: pts, summary: tier + ' (' + pts + '/11): ' + how + ', ready ' + r + '/10, ' + when + '. ' + action + '.' };
  }

  function finish() {
    var t = H.targets({ sex: P.sex, age: +P.age, ft: +P.ft, inch: +(P.inch || 0), lb: +P.lb, act: +P.act, goal: P.goal });
    P.cal = t.cal; P.p = t.p; P.c = t.c; P.f = t.f; P.tdee = t.tdee; H.save(P);
    try { sessionStorage.setItem('sh-email', A.email); localStorage.setItem('sh-email', A.email); } catch (e) {}
    var rec = recommend(), ready = +A.readiness >= 5, g = H.G[P.goal];
    var L = leadScore();
    var data = {
      'form-name': 'coaching-qualify', lead: L.tier, lead_summary: L.summary, contact_pref: A.contact, best_time: A.besttime || '', start_when: A.start, name: A.name, email: A.email, phone: A.phone || '', instagram: A.instagram || '', referral: A.referral || '',
      goal: P.goal, sex: P.sex, age: P.age, height: P.ft + "' " + (P.inch || 0) + '"', weight_lb: P.lb, activity: P.act,
      tdee: t.tdee, calories: t.cal, protein: t.p, carbs: t.c, fat: t.f,
      experience: A.exp, days_per_week: A.days, blockers: A.blockers.join(', '), signals: A.signals.join(', '), bloodwork: A.labs,
      services: A.services.join(', '), style: A.style, readiness: A.readiness, why: A.why || '', recommendation: rec[0], qualified: ready ? 'yes' : 'not yet',
      used_starter_kit: usePlan ? 'yes' : 'no'
    };
    fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams(data).toString() }).catch(function () {});
    // Free membership: create the account and email a magic login link.
    var member = { name: A.name, goal: P.goal, tdee: t.tdee, calories: t.cal, protein: t.p, carbs: t.c, fat: t.f, recommendation: rec[0], qualified_at: new Date().toISOString() };
    try { localStorage.setItem('sh-qz', JSON.stringify(member)); } catch (e) {}
    var A2 = window.SH_AUTH, memberMsg = '';
    if (A2 && A2.ready) {
      memberMsg = '<div class="qz-rec"><small>Your free member access</small><p>I just emailed you a login link to the Salvage Health members area: your numbers, the bloodwork guide and Peptides 101. Tap the link in your email to get in.</p></div>';
      A2.sendLink(A.email, { create: true, data: member }).catch(function () {});
    }

    var tiles = '<div class="qz-tiles"><div><b>' + t.tdee.toLocaleString() + '</b><span>Maintenance (TDEE)</span></div><div class="hl"><b>' + t.cal.toLocaleString() + '</b><span>Daily target</span></div>' +
      '<div><b>' + t.p + 'g</b><span>Protein</span></div><div><b>' + t.c + 'g</b><span>Carbs</span></div><div><b>' + t.f + 'g</b><span>Fat</span></div></div>' +
      '<p class="qz-note">' + esc(g.sub) + (t.floor ? ' Your target is set at a safe minimum, so we would lean more on activity than eating less.' : '') + '</p>';
    var first = A.name.split(' ')[0];
    var talk = A.contact === 'call'
      ? '<div class="qz-rec qz-hot"><small>Your next step</small><h3>Free intro call</h3><p>I will call or text you at ' + esc(A.phone) + ' in the ' + esc((A.besttime || '').toLowerCase()) + ' within 1 business day. We will talk through your goal, your numbers and which option fits, and you get exact pricing with no pressure.</p></div>'
      : A.contact === 'email'
      ? '<div class="qz-rec qz-hot"><small>Your next step</small><h3>Watch your inbox</h3><p>I will email you within 1 business day with your coaching options and pricing. Reply when you are ready and we will set up a free intro call. Check spam just in case.</p></div>'
      : '<div class="qz-rec qz-hot" id="qz-later"><small>Whenever you are ready</small><h3>Want me to reach out?</h3><p>No pressure. Your numbers are yours either way. If you want to talk about coaching, tap below and I will email you.</p><button type="button" class="btn solid" data-act="optin">Yes, reach out to me</button></div>';
    root.innerHTML = ready ?
      '<div class="qz-done"><p class="eyebrow">You qualify</p><h2 class="disp">' + esc(first) + ', <em>you are a fit.</em></h2>' +
      '<p class="qz-sub">Here are your starting numbers. Your coached plan fine-tunes them from your check-ins.</p>' + tiles +
      '<div class="qz-rec"><small>Recommended for you</small><h3>' + esc(rec[0]) + '</h3><p>' + esc(rec[1]) + '</p></div>' +
      talk + memberMsg +
      '<div class="qz-two"><a class="btn line" href="/kitchen/#foryou">See meals that fit your numbers</a><a class="btn line" href="/start/kit/">Open your free Starter Kit</a></div></div>'
      :
      '<div class="qz-done"><p class="eyebrow">Not quite yet</p><h2 class="disp">Start here, <em>' + esc(first) + '.</em></h2>' +
      '<p class="qz-sub">Coaching works best when you are ready to go all in. Build some momentum with the free tools first, and when you hit an 8 out of 10, come back. Your answers are saved.</p>' + tiles + talk + memberMsg +
      '<div class="qz-two"><a class="btn solid" href="/start/kit/">Open your free Starter Kit</a><a class="btn line" href="/kitchen/#foryou">See meals that fit your numbers</a></div></div>';
    root.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  show();
})();
