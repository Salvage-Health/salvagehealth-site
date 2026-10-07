// Free-membership gate. Content inside [data-gated] stays hidden until the visitor has given their email once
// (anywhere on the site). Until then, [data-gate] shows an email box. Needs /assets/optin.js loaded first.
(function () {
  var box = document.querySelector('[data-gate]'), body = document.querySelectorAll('[data-gated]');
  if (!box || !window.SH_MEMBER) return;
  function open() { box.hidden = true; body.forEach(function (el) { el.hidden = false; }); document.documentElement.classList.add('is-member'); }
  if (SH_MEMBER.is()) { open(); return; }
  body.forEach(function (el) { el.hidden = true; });
  box.hidden = false;
  box.querySelector('.gate-form').innerHTML = SH_OPTIN.html(box.getAttribute('data-source') || 'gate', box.getAttribute('data-button') || 'Unlock it free', { stay: true }) +
    '<p class="optnote">Free. No spam, unsubscribe anytime. Already signed up? Use the same email.</p>';
  SH_OPTIN.wire(box);
  document.addEventListener('sh:joined', function () { open(); window.scrollTo({ top: 0 }); });
})();
