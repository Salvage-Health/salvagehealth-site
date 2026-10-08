// Meal prep book waitlist. Members (email already saved) join with one tap; everyone gets a
// "you're on the list" state that sticks on this device. Needs /assets/optin.js loaded first.
(function () {
  var KEY = 'sh-waitlist';
  function joined() { try { return localStorage.getItem(KEY) === '1'; } catch (e) { return false; } }
  function done(box) {
    var body = box.querySelector('.wl-body');
    body.innerHTML = '<p class="eyebrow">You\'re on the waitlist</p><h2 class="disp">Cook twice. <em>Eat all week.</em></h2>' +
      '<p>You\'ll get the early-bird price the day it launches. Watch your inbox.</p>' +
      '<p class="wl-perk">Want to start now? Every recipe in the <a href="/kitchen/">Kitchen</a> is open to you.</p>';
  }
  document.querySelectorAll('[data-wlist]').forEach(function (box) {
    if (joined()) { done(box); return; }
    var form = box.querySelector('form[data-wl]'), input = form.querySelector('input[type=email]');
    var em = window.SH_MEMBER ? SH_MEMBER.email() : '';
    if (em) {
      input.value = em; input.hidden = true; // stays type=email so optin.js still reads it
      form.querySelector('label.sr').hidden = true;
      form.querySelector('button').textContent = 'Add me to the waitlist';
      var note = box.querySelector('.optnote'); if (note) note.textContent = 'One tap. We\'ll use ' + em + '.';
    }
    form.addEventListener('submit', function () {
      try { localStorage.setItem(KEY, '1'); } catch (e) {}
      setTimeout(function () { done(box); }, 300);
    });
  });
})();
