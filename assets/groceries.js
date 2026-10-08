// Starter Kit grocery list: checks save on this device, a running count, text/email/copy the list,
// and a clear "you're set" moment when everything is in the cart.
(function () {
  var KEY = 'sh-groc', boxes = [].slice.call(document.querySelectorAll('#groceries .gl input[type=checkbox]'));
  if (!boxes.length) return;
  var $ = function (id) { return document.getElementById(id); };
  var saved = []; try { saved = JSON.parse(localStorage.getItem(KEY) || '[]'); } catch (e) {}
  boxes.forEach(function (b, i) { b.checked = saved.indexOf(i) >= 0; });

  function label(b) { return b.closest('label').textContent.replace(/\s+/g, ' ').trim(); }
  function listText(onlyLeft) {
    var out = ['Salvage Health grocery list, week one'];
    document.querySelectorAll('#groceries .gl').forEach(function (g) {
      var items = [].slice.call(g.querySelectorAll('input')).filter(function (b) { return !onlyLeft || !b.checked; }).map(function (b) { return '- ' + label(b); });
      if (items.length) out.push('', g.querySelector('h3').textContent, items.join('\n'));
    });
    out.push('', 'Pantry: avocado oil, salt, pepper, garlic, basic spices', 'salvagehealth.com/start/kit/');
    return out.join('\n');
  }
  function refresh() {
    var done = boxes.filter(function (b) { return b.checked; }).length, all = done === boxes.length;
    $('g-count').textContent = all ? 'Everything is in the cart' : done + ' of ' + boxes.length + ' in the cart';
    var left = listText(done > 0 && !all);
    $('g-sms').href = 'sms:?&body=' + encodeURIComponent(left);
    $('g-mail').href = 'mailto:?subject=' + encodeURIComponent('My grocery list, week one') + '&body=' + encodeURIComponent(left);
    $('g-clear').hidden = done === 0;
    var box = $('g-done');
    box.classList.toggle('all', all);
    $('g-done-h').textContent = all ? 'Step 4 done' : 'Step 4';
    $('g-done-p').textContent = all ? 'Shopping is done and you are set for week one. Here is how it goes from here:' : 'When your cart is full, you are set for week one. Here is how the week goes:';
    try { localStorage.setItem(KEY, JSON.stringify(boxes.map(function (b, i) { return b.checked ? i : -1; }).filter(function (i) { return i >= 0; }))); } catch (e) {}
    return all;
  }
  boxes.forEach(function (b) {
    b.addEventListener('change', function () {
      if (refresh() && b.checked) setTimeout(function () { $('g-done').scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 250);
    });
  });
  $('g-copy').addEventListener('click', function () {
    var btn = this, t = listText(false);
    var ok = function () { btn.textContent = 'Copied'; setTimeout(function () { btn.textContent = 'Copy'; }, 1800); };
    if (navigator.clipboard) navigator.clipboard.writeText(t).then(ok, function () {}); else ok();
  });
  $('g-clear').addEventListener('click', function () { boxes.forEach(function (b) { b.checked = false; }); refresh(); });
  refresh();
})();
