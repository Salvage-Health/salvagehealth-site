(function () {
  var SK = window.SK, sel = new Set(), byId = {};
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
  });

  function has(it) { return sel.has(it.need) || (it.or || []).some(function (o) { return sel.has(o); }); }
  function score(r) {
    var core = r.items.filter(function (it) { return it.need && !it.optional; });
    var miss = core.filter(function (it) { return !has(it); });
    var got = core.length - miss.length;
    return { r: r, miss: miss, got: got, total: core.length };
  }

  // chips
  function renderPicker() {
    var groups = {};
    SK.INGREDIENTS.forEach(function (i) { (groups[i.group] = groups[i.group] || []).push(i); });
    $('groups').innerHTML = Object.keys(groups).map(function (g) {
      return '<div class="skg"><span class="skgl">' + g + '</span><div class="skchips">' + groups[g].map(function (i) {
        return '<button type="button" class="chip' + (sel.has(i.id) ? ' on' : '') + '" data-id="' + i.id + '" aria-pressed="' + sel.has(i.id) + '">' + esc(i.name) + '</button>';
      }).join('') + '</div></div>';
    }).join('');
    $('count').textContent = sel.size ? sel.size + ' selected' : 'Nothing selected yet';
    $('clear').hidden = !sel.size;
  }

  function card(s, mode) {
    var r = s.r, m = r.m;
    var status = mode === 'ready' ? '<span class="st ok">You have everything</span>'
      : mode === 'close' ? '<span class="st near">Need: ' + s.miss.map(function (it) { return esc(byId[it.need].name.toLowerCase()); }).join(', ') + '</span>'
      : '';
    return '<button type="button" class="rc" data-r="' + r.id + '">' +
      '<span class="rtag">' + esc(r.tag) + ' · ' + r.mins + ' min · serves ' + r.serves + '</span>' +
      '<b>' + esc(r.name) + '</b>' +
      '<span class="rb">' + esc(r.blurb) + '</span>' +
      '<span class="mac"><span><em>' + m.kcal + '</em>cal</span><span><em>' + m.p + 'g</em>protein</span><span><em>' + m.c + 'g</em>carbs</span><span><em>' + m.f + 'g</em>fat</span></span>' +
      status + '</button>';
  }

  function renderResults() {
    var out = '';
    if (!sel.size) {
      out = '<h2 class="disp skh">All <em>recipes</em></h2><p class="skn">Tap what you have above and these sort themselves into what you can cook tonight.</p><div class="rgrid">' +
        SK.RECIPES.map(function (r) { return card(score(r), 'all'); }).join('') + '</div>';
    } else {
      var sc = SK.RECIPES.map(score);
      var ready = sc.filter(function (s) { return !s.miss.length; });
      var close = sc.filter(function (s) { return s.miss.length && s.miss.length <= 2 && s.got > 0; }).sort(function (a, b) { return a.miss.length - b.miss.length; });
      out += '<h2 class="disp skh">Cook it <em>tonight</em></h2>';
      out += ready.length ? '<div class="rgrid">' + ready.map(function (s) { return card(s, 'ready'); }).join('') + '</div>'
        : '<p class="skn">Nothing complete yet. Check the "one or two away" list below, or add a few more things you have.</p>';
      if (close.length) {
        out += '<h2 class="disp skh">One or two <em>items away</em></h2><div class="rgrid">' + close.map(function (s) { return card(s, 'close'); }).join('') + '</div>';
        // best next buy
        var buys = {};
        close.forEach(function (s) { s.miss.forEach(function (it) { buys[it.need] = (buys[it.need] || 0) + (s.miss.length === 1 ? 1 : 0.5); }); });
        var top = Object.keys(buys).sort(function (a, b) { return buys[b] - buys[a]; }).slice(0, 3);
        out += '<div class="buy"><b>Best next buy</b><span>' + top.map(function (id) {
          var n = close.filter(function (s) { return s.miss.length === 1 && s.miss[0].need === id; }).length;
          return esc(byId[id].name) + (n ? ' <em>unlocks ' + n + ' recipe' + (n > 1 ? 's' : '') + '</em>' : '');
        }).join(' · ') + '</span></div>';
      }
    }
    $('results').innerHTML = out;
  }

  function openRecipe(id) {
    var r = SK.RECIPES.filter(function (x) { return x.id === id; })[0], m = r.m;
    var li = r.items.map(function (it) {
      var cls = it.staple ? 'stp' : has(it) ? 'have' : it.optional ? 'opt' : 'miss';
      var lab = it.staple ? 'pantry' : has(it) ? 'have it' : it.optional ? 'optional' : 'need it';
      var alt = (it.or || []).length ? ' <span class="alt">or ' + it.or.map(function (o) { return esc(byId[o].name.toLowerCase()); }).join(', ') + '</span>' : '';
      return '<li class="' + cls + '"><span class="lab">' + lab + '</span>' + esc(it.txt) + alt + '</li>';
    }).join('');
    $('dlg-body').innerHTML =
      '<p class="eyebrow">' + esc(r.tag) + ' · ' + r.mins + ' min · serves ' + r.serves + '</p>' +
      '<h2 class="disp">' + esc(r.name) + '</h2><p class="rb">' + esc(r.blurb) + '</p>' +
      '<div class="mac big"><span><em>' + m.kcal + '</em>cal</span><span><em>' + m.p + 'g</em>protein</span><span><em>' + m.c + 'g</em>carbs</span><span><em>' + m.f + 'g</em>fat</span></div>' +
      '<p class="fine2">Per serving. Estimates from USDA data for raw and dry weights.</p>' +
      '<h3>Ingredients</h3><ul class="ing">' + li + '</ul>' +
      '<h3>Steps</h3><ol class="stepsl">' + r.steps.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') + '</ol>';
    var d = $('dlg'); if (d.showModal) d.showModal(); else d.setAttribute('open', '');
    $('dlg-body').scrollTop = 0;
  }

  function toggle(id) { if (sel.has(id)) sel.delete(id); else sel.add(id); persist(); renderPicker(); renderResults(); }

  $('groups').addEventListener('click', function (e) { var b = e.target.closest('.chip'); if (b) toggle(b.dataset.id); });
  $('results').addEventListener('click', function (e) { var b = e.target.closest('.rc'); if (b) openRecipe(b.dataset.r); });
  $('clear').addEventListener('click', function () { sel.clear(); persist(); renderPicker(); renderResults(); });
  $('dlg-close').addEventListener('click', function () { $('dlg').close ? $('dlg').close() : $('dlg').removeAttribute('open'); });
  $('dlg').addEventListener('click', function (e) { if (e.target === $('dlg')) $('dlg').close(); });

  // type to add
  var q = $('q'), sug = $('sug');
  function match(v) {
    v = v.trim().toLowerCase(); if (!v) return [];
    return SK.INGREDIENTS.filter(function (i) { return [i.name.toLowerCase()].concat(i.alias).some(function (a) { return a.indexOf(v) === 0 || a.indexOf(' ' + v) > -1; }); }).slice(0, 6);
  }
  q.addEventListener('input', function () {
    var m = match(q.value);
    sug.innerHTML = m.map(function (i) { return '<button type="button" data-id="' + i.id + '">' + esc(i.name) + (sel.has(i.id) ? ' ✓' : '') + '</button>'; }).join('') ||
      (q.value.trim() ? '<span class="none">Not in the recipe library yet. AI chef mode will handle this later.</span>' : '');
  });
  sug.addEventListener('click', function (e) { var b = e.target.closest('button'); if (b) { if (!sel.has(b.dataset.id)) toggle(b.dataset.id); q.value = ''; sug.innerHTML = ''; q.focus(); } });
  q.addEventListener('keydown', function (e) { if (e.key === 'Enter') { var b = sug.querySelector('button'); if (b) { e.preventDefault(); b.click(); } } });

  $('staples').textContent = SK.STAPLES.join(' · ');
  renderPicker(); renderResults();
})();
