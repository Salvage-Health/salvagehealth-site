// Starter Kit opt-in: send to Netlify Forms in the background, then always open the kit.
(function () {
  document.querySelectorAll('form.optin').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = f.querySelector('button');
      if (btn) { btn.disabled = true; btn.textContent = 'Opening your kit...'; }
      try { var em = (f.querySelector('input[type=email]') || {}).value || ''; sessionStorage.setItem('sh-email', em); localStorage.setItem('sh-email', em); } catch (x) {}
      var go = function () { window.location.href = '/start/kit/'; };
      var body = new URLSearchParams(new FormData(f)).toString();
      var t = setTimeout(go, 4000);
      fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: body })
        .catch(function () {}).then(function () { clearTimeout(t); go(); });
    });
  });
})();
