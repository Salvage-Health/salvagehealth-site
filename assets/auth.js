// Salvage Health members auth (Supabase magic links).
// Needs window.SB = { url, key } from /assets/sb-config.js and the supabase-js v2 browser build.
// Keeps a short-lived "sh-at" cookie with the access token so the Netlify edge function can gate /members/.
(function () {
  var cfg = window.SB || {}, ready = !!(cfg.url && cfg.key && window.supabase);
  var sb = ready ? window.supabase.createClient(cfg.url, cfg.key, { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true } }) : null;

  function setCookie(s) {
    if (s && s.access_token) {
      var age = Math.max(60, (s.expires_at ? s.expires_at - Math.floor(Date.now() / 1000) : 3600) - 30);
      document.cookie = 'sh-at=' + s.access_token + '; Path=/; Max-Age=' + age + '; SameSite=Lax' + (location.protocol === 'https:' ? '; Secure' : '');
    } else {
      document.cookie = 'sh-at=; Path=/; Max-Age=0; SameSite=Lax';
    }
  }
  if (sb) sb.auth.onAuthStateChange(function (_e, s) { setCookie(s); });

  window.SH_AUTH = {
    ready: ready,
    client: sb,
    // Fresh session (refreshes if needed) and re-syncs the cookie. Resolves to session or null.
    session: function () {
      if (!sb) return Promise.resolve(null);
      return sb.auth.getSession().then(function (r) { var s = r.data && r.data.session; setCookie(s); return s; }).catch(function () { return null; });
    },
    user: function () {
      if (!sb) return Promise.resolve(null);
      return sb.auth.getUser().then(function (r) { return (r.data && r.data.user) || null; }).catch(function () { return null; });
    },
    // Send a magic link. create=true when coming from the questionnaire (makes the account).
    sendLink: function (email, opts) {
      if (!sb) return Promise.reject(new Error('not-configured'));
      opts = opts || {};
      return sb.auth.signInWithOtp({
        email: email,
        options: { shouldCreateUser: !!opts.create, data: opts.data || undefined, emailRedirectTo: location.origin + '/members/login/?next=' + encodeURIComponent(opts.next || '/members/') }
      }).then(function (r) { if (r.error) throw r.error; return true; });
    },
    // Save questionnaire results to the member's profile (user metadata).
    saveProfile: function (data) {
      if (!sb) return Promise.resolve(false);
      return sb.auth.updateUser({ data: data }).then(function (r) { return !r.error; }).catch(function () { return false; });
    },
    signOut: function () {
      setCookie(null);
      if (!sb) { location.href = '/'; return; }
      sb.auth.signOut().finally(function () { location.href = '/members/login/?out=1'; });
    }
  };
})();
