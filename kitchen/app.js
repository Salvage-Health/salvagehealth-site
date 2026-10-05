(function () {
  var SK = window.SK, sel = new Set(), byId = {}, cat = 'All', mode = 'browse', query = '', limit = 12;
  var PAGE = 12;
  SK.INGREDIENTS.forEach(function (i) { byId[i.id] = i; });
  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };

  try { JSON.parse(localStorage.getItem('sk-have') || '[]').forEach(function (x) { if (byId[x]) sel.add(x); }); } catch (e) {}
  function persist() { try { localStorage.setItem('sk-have', JSON.stringify(Array.from(sel))); } catch (e) {} }

  // macros per serving
  SK.RECIPES.forEach(function (r) {
    var t = { kcal: 0, p: 0, f: 0, c: 0 };
    r.items.forEach(function (it) { var f = SK.FOODS[it.food]; ['kcal', 'p', 'f', 'c'].forEach(function (k) { t[k] += f[k] * it.g / 100; }); });
    r.m = { kcal: Math.round(t.kcal / r.serves / 5) * 5, p: Math.round(t.p / r.serves), c: Math.round(t.c / r.serves), f: Math.round(t.f / r.serves) };
    r.hay = (r.name + ' ' + r.tag + ' ' + r.cat + ' ' + r.items.map(function (i) { return i.txt; }).join(' ')).toLowerCase();
  });

  function has(it) { return sel.has(it.need) || (it.or || []).some(function (o) { return sel.has(o); }); }
  function score(r) {
    var core = r.items.filter(function (it) { return it.need && !it.optional; });
    var miss = core.filter(function (it) { return !has(it); });
    return { r: r, miss: miss, got: core.length - miss.length };
  }

  var PLAN = window.SH_GOALS ? window.SH_GOALS.load() : null, GOAL = PLAN && PLAN.goal && window.SH_GOALS.G[PLAN.goal];
  var CATS = (GOAL ? ['For you'] : []).concat(['All', "Bryan's", 'Batch prep', 'Vegetarian', 'Keto', 'Breakfast', 'Lunch', 'Dinner']);
  function inCat(r, c) { c = c || cat; if (c === 'For you') return !!GOAL && GOAL.fits(r); return c === 'All' || (c === "Bryan's" ? !!r.by : c === 'Batch prep' ? !!r.batch : c === 'Vegetarian' ? !!r.veg : c === 'Keto' ? !!r.keto : r.cat === c); }
  function matches(r) { if (!query) return true; return query.split(/\s+/).every(function (w) { return r.hay.indexOf(w) > -1; }); }

  var SHIELD = '<svg viewBox="0 0 100 100" aria-hidden="true"><path d="M50 6 L84 18 V48 C84 72 68 88 50 96 C32 88 16 72 16 48 V18 Z" fill="none" stroke="currentColor" stroke-width="5" stroke-linejoin="round"/><path d="M24 54 H37 L44 40 L52 66 L59 46 L65 54 H78" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  function badge(r) {
    if (r.by) return '<span class="kb by">Bryan\'s</span>';
    if (r.keto) return '<span class="kb">Keto</span>';
    if (r.veg) return '<span class="kb">Vegetarian</span>';
    if (r.batch) return '<span class="kb">Batch prep</span>';
    return '';
  }
  function card(s, status) {
    var r = s.r || s, m = r.m;
    var pic = r.photos ? '<img src="' + r.photos[0] + '" alt="" loading="lazy">' : '<span class="kph">' + SHIELD + '<i>' + esc(r.cat) + '</i></span>';
    var st = '';
    if (status === 'ready') st = '<span class="kst ok">You have everything</span>';
    else if (status === 'close') st = '<span class="kst">Need ' + s.miss.map(function (it) { return esc(byId[it.need].name.toLowerCase()); }).join(', ') + '</span>';
    return '<button type="button" class="kc" data-r="' + r.id + '"><span class="kimg">' + pic + badge(r) + '</span>' +
      '<span class="kt">' + esc(r.name) + '</span>' +
      '<span class="km"><span><b>' + m.kcal + '</b> cal · <b>' + m.p + 'g</b> protein</span><span>' + r.mins + ' min</span></span>' + st + '</button>';
  }

  function grid(list, status, key) {
    var shown = list.slice(0, limit);
    var more = list.length > shown.length ? '<button type="button" class="kmore" data-more="1">Show more <span>' + (list.length - shown.length) + ' left</span></button>' : '';
    return '<div class="kgrid">' + shown.map(function (s) { return card(s, typeof status === 'function' ? status(s) : status); }).join('') + '</div>' + more;
  }

  function renderFilters() {
    $('kfil').innerHTML = CATS.map(function (c) {
      var n = SK.RECIPES.filter(function (r) { return inCat(r, c); }).length;
      return '<button type="button" class="kf' + (c === cat ? ' on' : '') + '" data-cat="' + c + '" aria-pressed="' + (c === cat) + '">' + c + ' <span>' + n + '</span></button>';
    }).join('');
  }

  function renderBrowse() {
    var list = SK.RECIPES.filter(function (r) { return inCat(r) && matches(r); });
    var out = '';
    if (cat === 'All' && !query) {
      var mine = SK.RECIPES.filter(function (r) { return r.by; });
      out += '<section class="kfeat"><div class="kh"><h2 class="disp">Bryan\'s <em>kitchen</em></h2><span>' + mine.length + ' recipes · swipe</span></div><div class="krail">' + mine.map(function (r) { return card(r); }).join('') + '</div></section>';
      list = list.filter(function (r) { return !r.by; }).sort(function (x, y) { return (y.photos ? 1 : 0) - (x.photos ? 1 : 0); });
      out += '<div class="kh"><h2 class="disp">More <em>recipes</em></h2><span>' + list.length + '</span></div>';
    } else {
      out += '<div class="kh"><h2 class="disp">' + (query ? 'Results' : cat === 'For you' ? 'Fits your <em>' + esc(GOAL.short.toLowerCase()) + '</em> plan' : esc(cat)) + '</h2><span>' + list.length + ' recipe' + (list.length === 1 ? '' : 's') + '</span></div>';
    }
    out += list.length ? grid(list) : '<p class="kempty">No recipes match that yet. Try another word or clear the filter.</p>';
    $('results').innerHTML = out;
  }

  function renderFridge() {
    var out = '';
    if (!sel.size) {
      out = '<p class="kempty">Add a few things you have and your matches show up here, best first.</p>';
      $('results').innerHTML = out; return;
    }
    var sc = SK.RECIPES.filter(function (r) { return inCat(r); }).map(score);
    var mine = function (s) { return s.r.by ? 0 : 1; };
    var ready = sc.filter(function (s) { return !s.miss.length; }).sort(function (a, b) { return mine(a) - mine(b); });
    var close = sc.filter(function (s) { return s.miss.length && s.miss.length <= 2 && s.got > 0; }).sort(function (a, b) { return a.miss.length - b.miss.length || mine(a) - mine(b); });
    out += '<div class="kh"><h2 class="disp">Cook it <em>tonight</em></h2><span>' + ready.length + '</span></div>';
    out += ready.length ? '<div class="kgrid">' + ready.map(function (s) { return card(s, 'ready'); }).join('') + '</div>' : '<p class="kempty">Nothing complete with just what you picked. Here is what is close.</p>';
    if (close.length) {
      var buys = {};
      close.forEach(function (s) { s.miss.forEach(function (it) { buys[it.need] = (buys[it.need] || 0) + (s.miss.length === 1 ? 1 : 0.5); }); });
      var top = Object.keys(buys).sort(function (a, b) { return buys[b] - buys[a]; }).slice(0, 3);
      out += '<div class="kbuy"><b>Best next buy</b> ' + top.map(function (id) {
        var n = close.filter(function (s) { return s.miss.length === 1 && s.miss[0].need === id; }).length;
        return esc(byId[id].name) + (n ? ' <em>+' + n + '</em>' : '');
      }).join(' · ') + '</div>';
      out += '<div class="kh"><h2 class="disp">One or two <em>away</em></h2><span>' + close.length + '</span></div>' + grid(close, 'close');
    }
    $('results').innerHTML = out;
  }

  function render() {
    renderFilters();
    $('kbrowse').hidden = mode !== 'browse';
    $('kfridge').hidden = mode !== 'fridge';
    $('kfridge2').hidden = mode !== 'fridge';
    document.querySelectorAll('.ktab').forEach(function (t) { var on = t.dataset.mode === mode; t.classList.toggle('on', on); t.setAttribute('aria-selected', on); });
    $('kfc').textContent = sel.size ? sel.size : '';
    if (mode === 'browse') renderBrowse(); else { renderPicked(); renderFridge(); }
  }

  // fridge picker
  var COMMON = ['chicken-breast', 'chicken-thighs', 'ground-turkey', 'ground-beef', 'steak', 'shrimp', 'salmon', 'eggs', 'greek-yogurt', 'cheese', 'rice', 'potatoes', 'sweet-potatoes', 'pasta', 'tortillas', 'broccoli', 'bell-pepper', 'onion', 'spinach', 'lime', 'salsa', 'soy-sauce'];
  function chip(i) { return '<button type="button" class="chip' + (sel.has(i.id) ? ' on' : '') + '" data-id="' + i.id + '" aria-pressed="' + sel.has(i.id) + '">' + esc(i.name) + '</button>'; }
  function renderPicked() {
    $('kpicked').innerHTML = sel.size ? Array.from(sel).map(function (id) { return '<button type="button" class="pk" data-id="' + id + '" aria-label="Remove ' + esc(byId[id].name) + '">' + esc(byId[id].name) + ' <span aria-hidden="true">&times;</span></button>'; }).join('') + '' : '';
    $('kpicked').insertAdjacentHTML('afterbegin', sel.size ? '<button type="button" class="pkclear" id="kclear">Clear ' + sel.size + '</button>' : '');
    $('kcommon').innerHTML = COMMON.filter(function (id) { return byId[id]; }).map(function (id) { return chip(byId[id]); }).join('');
    var groups = {};
    SK.INGREDIENTS.forEach(function (i) { (groups[i.group] = groups[i.group] || []).push(i); });
    var open = {}; document.querySelectorAll('#kall details[open]').forEach(function (d) { open[d.dataset.g] = 1; });
    $('kall').innerHTML = Object.keys(groups).map(function (g) {
      var n = groups[g].filter(function (i) { return sel.has(i.id); }).length;
      return '<details data-g="' + esc(g) + '"' + (open[g] ? ' open' : '') + '><summary>' + esc(g) + (n ? ' <span>' + n + '</span>' : '') + '</summary><div class="skchips">' + groups[g].map(chip).join('') + '</div></details>';
    }).join('');
  }
  function toggle(id) { if (sel.has(id)) sel.delete(id); else sel.add(id); persist(); render(); }

  // events
  document.querySelector('.ktabs').addEventListener('click', function (e) { var t = e.target.closest('.ktab'); if (t) { mode = t.dataset.mode; limit = PAGE; render(); } });
  $('kfil').addEventListener('click', function (e) { var f = e.target.closest('.kf'); if (f) { cat = f.dataset.cat; limit = PAGE; render(); } });
  function fridgeClick(e) {
    var c = e.target.closest('.chip, .pk'); if (c) { toggle(c.dataset.id); return; }
    if (e.target.closest('#kclear')) { sel.clear(); persist(); render(); }
  }
  $('kfridge').addEventListener('click', fridgeClick);
  $('kfridge2').addEventListener('click', fridgeClick);
  $('results').addEventListener('click', function (e) {
    if (e.target.closest('.kmore')) { limit += PAGE * 2; render(); return; }
    var b = e.target.closest('.kc'); if (b) openRecipe(b.dataset.r);
  });
  var timer;
  $('ks').addEventListener('input', function () { clearTimeout(timer); var v = this.value; timer = setTimeout(function () { query = v.trim().toLowerCase(); limit = PAGE; renderBrowse(); }, 120); });

  // type to add (fridge)
  var q = $('q'), sug = $('sug');
  function match(v) {
    v = v.trim().toLowerCase(); if (!v) return [];
    return SK.INGREDIENTS.filter(function (i) { return [i.name.toLowerCase()].concat(i.alias).some(function (a) { return a.indexOf(v) === 0 || a.indexOf(' ' + v) > -1; }); }).slice(0, 6);
  }
  q.addEventListener('input', function () {
    var m = match(q.value);
    sug.innerHTML = m.map(function (i) { return '<button type="button" data-id="' + i.id + '">' + esc(i.name) + (sel.has(i.id) ? ' ✓' : '') + '</button>'; }).join('') ||
      (q.value.trim() ? '<span class="none">Not in the recipe library yet.</span>' : '');
  });
  sug.addEventListener('click', function (e) { var b = e.target.closest('button'); if (b) { if (!sel.has(b.dataset.id)) toggle(b.dataset.id); q.value = ''; sug.innerHTML = ''; q.focus(); } });
  q.addEventListener('keydown', function (e) { if (e.key === 'Enter') { var b = sug.querySelector('button'); if (b) { e.preventDefault(); b.click(); } } });

  // recipe sheet
  function openRecipe(id) {
    var r = SK.RECIPES.filter(function (x) { return x.id === id; })[0], m = r.m;
    var li = r.items.map(function (it) {
      var cls = it.staple ? 'stp' : has(it) ? 'have' : it.optional ? 'opt' : 'miss';
      var lab = it.staple ? 'pantry' : has(it) ? 'have it' : it.optional ? 'optional' : (sel.size ? 'need it' : '');
      var alt = (it.or || []).length ? ' <span class="alt">or ' + it.or.map(function (o) { return esc(byId[o].name.toLowerCase()); }).join(', ') + '</span>' : '';
      return '<li class="' + cls + '">' + (lab ? '<span class="lab">' + lab + '</span>' : '<span class="lab"></span>') + '<span>' + esc(it.txt) + alt + '</span></li>';
    }).join('');
    var n = r.photos ? r.photos.length : 0;
    var gal = n ? '<div class="dgal"><div class="dpics" id="dpics">' + r.photos.map(function (u, i) { return '<img src="' + u + '" alt="' + esc(r.name) + ', photo ' + (i + 1) + ' of ' + n + '">'; }).join('') + '</div>' +
      (n > 1 ? '<button type="button" class="dnav prev" data-d="-1" aria-label="Previous photo">&#8249;</button><button type="button" class="dnav next" data-d="1" aria-label="Next photo">&#8250;</button><span class="dcount" id="dcount">1 / ' + n + '</span>' : '') + '</div>' : '';
    var det = (window.SK_STEPS || {})[r.id];
    var steps = det ? '<p class="fine2">Tap a step to check it off as you cook.</p><ol class="stepsl det">' + det.steps.map(function (s) { return '<li tabindex="0" role="checkbox" aria-checked="false"><b>' + esc(s.t) + '</b><span>' + esc(s.d) + '</span></li>'; }).join('') + '</ol>' +
      (det.tip ? '<div class="ptip"><b>Chef\'s tip</b><span>' + esc(det.tip) + '</span></div>' : '')
      : '<ol class="stepsl">' + r.steps.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') + '</ol>';
    $('dlg-body').innerHTML = gal +
      '<div class="dhead"><p class="eyebrow">' + (r.by ? 'Bryan\'s recipe · ' : '') + esc(r.tag) + '</p>' +
      '<h2 class="disp">' + esc(r.name) + '</h2>' +
      '<p class="dmeta"><span>' + r.mins + ' min</span><span>Serves ' + r.serves + '</span>' + (r.batch ? '<span>Batch prep</span>' : '') + (r.keto ? '<span>Keto</span>' : '') + (r.veg ? '<span>Vegetarian</span>' : '') + '</p>' +
      '<p class="rb">' + esc(r.blurb) + '</p></div>' +
      '<div class="mac big"><span><em>' + m.kcal + '</em>cal</span><span><em>' + m.p + 'g</em>protein</span><span><em>' + m.c + 'g</em>carbs</span><span><em>' + m.f + 'g</em>fat</span></div>' +
      '<p class="fine2">Per serving, including optional items. Estimates from USDA and package label data.</p>' +
      '<div class="dtabs" role="tablist"><button type="button" class="dtab on" data-p="ing" role="tab" aria-selected="true">Ingredients <span>' + r.items.length + '</span></button><button type="button" class="dtab" data-p="steps" role="tab" aria-selected="false">Steps <span>' + (det ? det.steps.length : r.steps.length) + '</span></button></div>' +
      '<div class="dpane" data-p="ing"><ul class="ing">' + li + '</ul><button type="button" class="dgo" data-p="steps">Start cooking</button></div>' +
      '<div class="dpane" data-p="steps" hidden>' + steps + '</div>';
    var d = $('dlg'); if (d.showModal) d.showModal(); else d.setAttribute('open', '');
    document.documentElement.classList.add('noscroll');
    var dp = $('dpics');
    if (dp && n > 1) {
      var cur = function () { return Math.round(dp.scrollLeft / dp.clientWidth); };
      dp.addEventListener('scroll', function () { $('dcount').textContent = (cur() + 1) + ' / ' + n; });
      Array.prototype.forEach.call(document.querySelectorAll('.dnav'), function (b) {
        b.addEventListener('click', function () { var i = Math.max(0, Math.min(n - 1, cur() + Number(b.dataset.d))); dp.scrollTo({ left: i * dp.clientWidth, behavior: 'smooth' }); });
      });
    }
    $('dlg-body').scrollTop = 0;
  }
  function showPane(p) {
    document.querySelectorAll('.dtab').forEach(function (t) { var on = t.dataset.p === p; t.classList.toggle('on', on); t.setAttribute('aria-selected', on); });
    document.querySelectorAll('.dpane').forEach(function (x) { x.hidden = x.dataset.p !== p; });
    var tabs = document.querySelector('.dtabs'); if (tabs) $('dlg-body').scrollTop = Math.min($('dlg-body').scrollTop, tabs.offsetTop - 12);
  }
  $('dlg-body').addEventListener('click', function (e) {
    var t = e.target.closest('.dtab, .dgo'); if (t) { showPane(t.dataset.p); return; }
    var li = e.target.closest('.stepsl.det li'); if (!li) return;
    var on = li.classList.toggle('done'); li.setAttribute('aria-checked', on);
  });
  $('dlg-body').addEventListener('keydown', function (e) {
    var li = e.target.closest('.stepsl.det li'); if (li && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); li.click(); }
  });
  function closeDlg() { var d = $('dlg'); d.close ? d.close() : d.removeAttribute('open'); }
  $('dlg-close').addEventListener('click', closeDlg);
  $('dlg').addEventListener('click', function (e) { if (e.target === $('dlg')) closeDlg(); });
  $('dlg').addEventListener('close', function () { document.documentElement.classList.remove('noscroll'); });

  $('staples').textContent = SK.STAPLES.join(', ');
  $('ktotal').textContent = SK.RECIPES.length;
  render();
  var h = decodeURIComponent((location.hash || '').slice(1));
  if (h === 'foryou' && GOAL) { cat = 'For you'; render(); }
  else if (h && SK.RECIPES.some(function (r) { return r.id === h; })) openRecipe(h);
})();
