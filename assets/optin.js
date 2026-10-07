// Email opt-in for the free membership. Every form posts to the same Netlify form ("starter-kit")
// with a "source" tag (home, start, kitchen-unlock, book-companion, merch-drops...), so later every
// signup can flow into one email list, tagged by where it came from.
//   form.optin            -> saves the email, then opens the Starter Kit (/start/kit/)
//   form.optin[data-stay] -> saves the email and stays on the page (fires "sh:joined"), used to unlock content
(function () {
  window.SH_MEMBER = {
    email: function () { try { return localStorage.getItem('sh-email') || sessionStorage.getItem('sh-email') || ''; } catch (e) { return ''; } },
    is: function () { return !!this.email(); },
    remember: function (em) { try { sessionStorage.setItem('sh-email', em); localStorage.setItem('sh-email', em); } catch (x) {} }
  };
  function send(f) {
    var body = new URLSearchParams(new FormData(f)).toString();
    return fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: body }).catch(function () {});
  }
  function wire(f) {
    if (f.dataset.wired) return; f.dataset.wired = '1';
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var em = ((f.querySelector('input[type=email]') || {}).value || '').trim();
      if (!em) return;
      var btn = f.querySelector('button');
      var stay = f.hasAttribute('data-stay');
      if (btn) { btn.disabled = true; btn.textContent = stay ? 'Unlocking...' : 'Opening your kit...'; }
      SH_MEMBER.remember(em);
      if (stay) {
        send(f);
        document.dispatchEvent(new CustomEvent('sh:joined', { detail: { email: em, source: (f.querySelector('[name=source]') || {}).value || '' } }));
        return;
      }
      var go = function () { window.location.href = f.getAttribute('data-next') || '/start/kit/'; };
      var t = setTimeout(go, 4000);
      send(f).then(function () { clearTimeout(t); go(); });
    });
  }
  window.SH_OPTIN = {
    // Markup for an opt-in form, for pages that build forms in JavaScript.
    html: function (source, button, opts) {
      opts = opts || {};
      return '<form class="optin" name="starter-kit" method="POST" action="/start/kit/"' + (opts.stay ? ' data-stay' : '') + (opts.next ? ' data-next="' + opts.next + '"' : '') + '>' +
        '<input type="hidden" name="form-name" value="starter-kit"><input type="hidden" name="source" value="' + source + '">' +
        '<p class="hp" hidden><label>Company <input name="company" tabindex="-1" autocomplete="off"></label></p>' +
        '<label class="sr" for="em-' + source + '">Email address</label>' +
        '<input id="em-' + source + '" type="email" name="email" required placeholder="Your email address" autocomplete="email">' +
        '<button class="btn solid" type="submit">' + button + '</button></form>';
    },
    wire: function (root) { (root || document).querySelectorAll('form.optin').forEach(wire); }
  };
  SH_OPTIN.wire();
})();
