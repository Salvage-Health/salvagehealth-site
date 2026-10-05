# Coaching page (/coaching/) and its thank-you page (/coaching/thanks/).
# HIDDEN for now: noindex, not in the sitemap, not linked from the nav or any page.
# Executed from build.py, so head(), topbar(), FOOT, write(), html are in scope.

NOINDEX = '<meta name="robots" content="noindex,nofollow">\n'

COACHCSS = """<style>
.co section{padding:64px 0 0}
.co h2.disp{font-size:clamp(28px,4.6vw,42px);margin:0 0 12px;text-wrap:balance}
.co .lead{color:var(--dim);font-size:clamp(16.5px,2vw,18.5px);margin:0;max-width:60ch}
.co-hero{padding:48px 0 0}
.co-hero h1{font-size:clamp(36px,7vw,64px);text-wrap:balance}
.co-hero .acts{display:flex;gap:10px;flex-wrap:wrap;margin:26px 0 0}
.co-proof{display:flex;flex-wrap:wrap;gap:8px 22px;margin:22px 0 0;padding:0;list-style:none;color:var(--faint);font-size:14px}
.co-proof li::before{content:"";display:inline-block;width:6px;height:6px;border-radius:50%;background:var(--rust);margin:0 9px 2px 0}
.co-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:14px;margin:26px 0 0}
.co-card{background:var(--raised);border:1px solid var(--rule);border-radius:14px;padding:22px 20px;display:flex;flex-direction:column}
.co-card .num{font:700 12px Inter,sans-serif;letter-spacing:2.5px;color:var(--rust-text);text-transform:uppercase}
.co-card h3{font-family:Oswald,'Arial Narrow',sans-serif;font-weight:700;text-transform:uppercase;font-size:23px;line-height:1.1;margin:8px 0 8px;letter-spacing:.4px}
.co-card p{color:var(--dim);margin:0 0 12px;font-size:15.5px}
.co-card ul{margin:0;padding:0 0 0 18px;color:var(--fg);font-size:15px}
.co-card li{margin:3px 0}
.co-card li::marker{color:var(--rust)}
.co-card .for{margin-top:auto;padding-top:14px;color:var(--faint);font-size:13.5px}
.co-steps{counter-reset:s;display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:14px;margin:26px 0 0;padding:0;list-style:none}
.co-steps li{counter-increment:s;border-top:2px solid var(--rust);padding:14px 2px 0}
.co-steps li::before{content:counter(s,decimal-leading-zero);font:700 13px Inter,sans-serif;letter-spacing:2px;color:var(--rust-text)}
.co-steps b{display:block;font-family:Oswald,sans-serif;text-transform:uppercase;font-size:20px;margin:4px 0 4px;letter-spacing:.4px}
.co-steps span{color:var(--dim);font-size:15px}
.co-labs{display:grid;grid-template-columns:1.1fr 1fr;gap:28px;align-items:start;margin:26px 0 0}
@media(max-width:820px){.co-labs{grid-template-columns:1fr}}
.co-mk{display:grid;gap:10px}
.co-mk div{background:var(--raised);border:1px solid var(--rule);border-left:3px solid var(--rust);border-radius:10px;padding:14px 16px}
.co-mk b{display:block;font-size:15.5px}
.co-mk span{display:block;color:var(--faint);font-size:13px;margin:2px 0 4px}
.co-mk p{margin:0;color:var(--dim);font-size:14.5px}
.co-note{background:var(--raised);border:1px solid var(--rule);border-radius:14px;padding:20px}
.co-note h3{margin:0 0 8px;font-size:17px}
.co-note p{margin:0 0 10px;color:var(--dim);font-size:15px}
.co-note p:last-child{margin:0}
.co-note .disc{color:var(--faint);font-size:13px}
.co-faq details{border-bottom:1px solid var(--rule);padding:14px 0}
.co-faq summary{cursor:pointer;font-weight:700;font-size:16.5px;list-style:none;display:flex;justify-content:space-between;gap:16px}
.co-faq summary::after{content:"+";color:var(--rust-text);font-size:22px;line-height:1}
.co-faq details[open] summary::after{content:"\\2212"}
.co-faq details p{color:var(--dim);margin:10px 0 0;font-size:15.5px}
.co-form{background:var(--raised);border:1px solid var(--rule);border-radius:16px;padding:24px 20px;margin:24px 0 0;max-width:720px}
.co-form label{display:block;font-weight:600;font-size:14.5px;margin:16px 0 6px}
.co-form label:first-of-type{margin-top:0}
.co-form .opt{color:var(--faint);font-weight:400}
.co-form input[type=text],.co-form input[type=email],.co-form input[type=tel],.co-form select,.co-form textarea{width:100%;min-height:48px;padding:11px 14px;border-radius:10px;border:1px solid var(--rule);background:var(--bg);color:var(--fg);font:inherit;font-size:16px}
.co-form textarea{min-height:110px;resize:vertical}
.co-form .chips{display:flex;flex-wrap:wrap;gap:8px}
.co-form .chips label{display:inline-flex;align-items:center;gap:8px;margin:0;padding:10px 14px;border:1px solid var(--rule);border-radius:99px;font-weight:500;font-size:14.5px;cursor:pointer;background:var(--bg)}
.co-form .chips input{accent-color:var(--rust);width:16px;height:16px}
.co-form .chips label:has(input:checked){border-color:var(--rust);background:rgba(190,81,38,.12)}
.co-form .btn{margin-top:22px;width:100%}
.co-form .fine{color:var(--faint);font-size:13px;margin:12px 0 0}
.co-cta{background:var(--raised);border:1px solid var(--rule);border-radius:16px;padding:28px 22px}
.co-cta .btn{margin-top:20px}
.co-end{margin:56px 0 0;padding:36px 22px;border:1px solid var(--rule);border-radius:16px;text-align:center;background:linear-gradient(180deg,rgba(190,81,38,.10),transparent)}
.co-end p{color:var(--dim);margin:10px auto 0;max-width:52ch}
.co-end .btn{margin-top:20px}
</style>
"""

SERVICES = [
    ("01", "Accountability Coaching",
     "Most people don't need more information. They need someone who notices when they go quiet.",
     ["Weekly check-in on your habits, weight trend and wins",
      "Clear targets for the week: steps, protein, workouts, sleep",
      "Direct messages when life gets in the way",
      "The same approach I used coaching people through 75 Hard"],
     "For: people who know what to do but keep falling off."),
    ("02", "Fitness Coaching",
     "A training plan built around where you actually are, with someone watching your progress and your form.",
     ["Strength program for gym or home, matched to your level",
      "Video form checks so you lift safely",
      "Weekly progressions: more weight, more reps, better movement",
      "Adjusted when you're sore, busy, traveling or stuck"],
     "For: beginners, returners, and anyone intimidated by the gym."),
    ("03", "Health and Performance Coaching",
     "Fat loss and strength are only part of it. Energy, sleep, stress and recovery decide whether progress lasts.",
     ["Sleep, stress and recovery habits that support your goal",
      "Energy and performance tracking, not just the scale",
      "Plan built around your bloodwork when you have it (see below)",
      "Body recomposition and maintenance phases done right"],
     "For: people who feel stalled, run down, or want to perform better."),
    ("04", "Custom Workout Plans",
     "One-time, built-for-you training plans. No subscription required.",
     ["Built around your schedule, equipment and experience",
      "Exercise demos and plain-English instructions",
      "4 to 12 week plans with planned progression",
      "Home, gym or hybrid"],
     "For: self-starters who want a real plan, not a random app."),
    ("05", "Custom Meal Plans",
     "Built by a former restaurant chef, so it tastes like food, not punishment.",
     ["Calories and macros set for your goal",
      "Full grocery list, organized by store section",
      "Meal timing around your workouts, work and sleep",
      "Batch-prep plan so you cook twice a week, not every day",
      "Built around foods you actually like"],
     "For: anyone tired of guessing what to eat."),
]

MARKERS = [
    ("Thyroid", "TSH, free T4, free T3",
     "Your thyroid sets the pace of your metabolism. When it runs slow, fatigue, weight gain and stalled fat loss can follow even when you're doing everything right."),
    ("Blood sugar and insulin", "Fasting glucose, A1C, fasting insulin",
     "I was prediabetic when I started. Blood sugar and insulin affect hunger, cravings, energy crashes and how easily you store fat."),
    ("Hormones", "Testosterone, estradiol, SHBG and others your doctor recommends",
     "Hormones drive energy, mood, recovery, muscle building and where you carry weight. Low or out-of-balance levels can make progress feel impossible."),
    ("Vitamins and iron", "Vitamin D, B12, ferritin and iron",
     "Low levels are common and can cause fatigue, poor recovery and low motivation that looks like a willpower problem but isn't."),
    ("The basics", "CBC, metabolic panel, lipid panel",
     "A baseline on your blood, kidneys, liver, cholesterol and triglycerides, so you can see your health improve, not just your weight."),
]

FAQS = [
    ("Do I need a gym membership?", "No. Plans can be built for home with little or no equipment, a full gym, or a mix of both."),
    ("I'm really out of shape. Is this for me?", "Yes. That's exactly who this is for. I started at 265 pounds and prediabetic. Your plan starts where you are, not where a fitness influencer is."),
    ("Are you a doctor or dietitian?", "No. I'm a coach who has been through it, did the research, and wrote the book on it. I don't diagnose or treat medical conditions. If something needs a doctor, I'll tell you, and your plan works alongside your doctor's advice, never against it."),
    ("Do I have to get bloodwork?", "No. Coaching works without it. Labs are optional, but they can explain why you've been stuck, and they let us track your health improving, not just your weight."),
    ("How do check-ins work?", "Weekly, by message or a short call depending on your plan. You share your numbers and how the week went, and I adjust your plan from there."),
    ("How much does it cost?", "It depends on what you need. One-time plans cost less than ongoing coaching. You'll get exact pricing on your free intro call, with no pressure to sign up."),
    ("Why do I have to qualify?", "Because I only take on people I can actually help, and I keep my client list small so everyone gets real attention. The questionnaire also gives you your numbers for free, so you walk away with something either way."),
]


svc = "".join(f"""
        <article class="co-card">
          <span class="num">{n}</span>
          <h3>{html.escape(t)}</h3>
          <p>{html.escape(d)}</p>
          <ul>{"".join(f"<li>{html.escape(x)}</li>" for x in pts)}</ul>
          <p class="for">{html.escape(f)}</p>
        </article>""" for n, t, d, pts, f in SERVICES)
mk = "".join(f"""
          <div><b>{html.escape(t)}</b><span>{html.escape(s)}</span><p>{html.escape(d)}</p></div>""" for t, s, d in MARKERS)
faq = "".join(f"""
        <details><summary>{html.escape(q)}</summary><p>{html.escape(a)}</p></details>""" for q, a in FAQS)

cp = head("Coaching with Bryan Dourado | Salvage Health",
          "Accountability, fitness, health and performance coaching, plus custom workout and meal plans with grocery lists and meal timing. Built for people who think they're too far gone.",
          "/coaching/", NOINDEX + COACHCSS) + topbar("coaching") + f"""  <main class="co">
    <section class="co-hero">
      <p class="eyebrow">Coaching</p>
      <h1 class="disp">You're not too far gone. <em>You're just not coached yet.</em></h1>
      <p class="dek">I went from 265 pounds and prediabetic to 178. Not with a magic diet, but by learning how this actually works and having someone keep me honest. Now I do that for other people.</p>
      <div class="acts"><a class="btn solid" href="/coaching/qualify/">See if you qualify</a><a class="btn line" href="#services">See what's included</a></div>
      <ul class="co-proof"><li>Lost 87 lb (39 kg) in 14 months</li><li>Coached people through 75 Hard</li><li>Author of Fitness Without the Fear</li><li>Former restaurant chef</li></ul>
    </section>

    <section id="services">
      <p class="eyebrow">What I offer</p>
      <h2 class="disp">Pick what you need. <em>Skip what you don't.</em></h2>
      <p class="lead">Every plan is built for one person: you. Your schedule, your starting point, the food you like and the equipment you have.</p>
      <div class="co-grid">{svc}
      </div>
    </section>

    <section id="bloodwork">
      <p class="eyebrow">Under the hood</p>
      <h2 class="disp">Stuck? <em>Your bloodwork might know why.</em></h2>
      <p class="lead">You can do everything right, eat in a deficit, train hard, sleep, and still stall. Sometimes the reason isn't effort. It's something happening inside your body that you can't see in the mirror. Knowing your numbers turns guessing into a plan.</p>
      <div class="co-labs">
        <div class="co-mk">{mk}
        </div>
        <div class="co-note">
          <h3>How bloodwork fits into coaching</h3>
          <p>If you've had recent labs, share them along with what your doctor told you. I'll build your training, nutrition and recovery around what your doctor found, and we'll retest over time so you can watch your health improve, not just the scale.</p>
          <p>If you haven't had labs, I'll give you a simple list of what to ask your doctor for and why each one matters.</p>
          <p>Need a provider? Any doctor or lab works. One option is <a href="https://velacorehealth.com" target="_blank" rel="noopener">Velacore Health</a>, a telehealth company that connects you with licensed clinicians.</p>
          <p class="disc">Disclosure: I founded Velacore Health. It's a separate company from Salvage Health, and using it is never required for coaching. I'm not a doctor and coaching isn't medical care. I don't diagnose, treat or interpret labs medically. Your doctor does that, and your plan follows their advice.</p>
        </div>
      </div>
    </section>

    <section>
      <p class="eyebrow">How it works</p>
      <h2 class="disp">Four steps. <em>No pressure.</em></h2>
      <ol class="co-steps">
        <li><b>See if you qualify</b><span>A 2-minute questionnaire. You get your calories and macros on the spot.</span></li>
        <li><b>Free intro call</b><span>We talk through your goal, your history and which option fits. You get exact pricing, and you decide.</span></li>
        <li><b>Your plan</b><span>Training, meals, grocery list and timing, built around your life and your numbers.</span></li>
        <li><b>Check in and adjust</b><span>Weekly check-ins keep you accountable, and the plan changes as you do.</span></li>
      </ol>
    </section>

    <section class="co-faq">
      <p class="eyebrow">Questions</p>
      <h2 class="disp">Before you <em>start</em></h2>{faq}
    </section>

    <section id="apply">
      <div class="co-cta">
        <p class="eyebrow">2-minute questionnaire</p>
        <h2 class="disp">See if you <em>qualify.</em></h2>
        <p class="lead">Answer a few questions about your goal, your body and what keeps getting in the way. You'll get your maintenance calories, daily target and macros right away, plus the coaching option that fits you. Already made a Starter Kit plan? Your numbers fill in automatically.</p>
        <a class="btn solid" href="/coaching/qualify/">Start the questionnaire</a>
      </div>
    </section>

    <div class="co-end">
      <h2 class="disp" style="font-size:clamp(26px,4vw,36px)">Never too old. Never too heavy. <em>Never too late.</em></h2>
      <p>You don't need a perfect starting point. You build with what you've got.</p>
      <a class="btn solid" href="/coaching/qualify/">See if you qualify</a>
    </div>
  </main>
""" + FOOT
write("/coaching/", cp)


QCSS = """<style>
.qz-wrap{max-width:640px;margin:0 auto;padding:40px 0 0}
.qz-wrap>h1{font-size:clamp(30px,6vw,46px)}
.qz-wrap>.dek{margin-bottom:24px}
#qz{scroll-margin-top:16px;background:var(--raised);border:1px solid var(--rule);border-radius:18px;padding:22px 18px 20px}
.qz-bar{height:6px;border-radius:99px;background:var(--rule);overflow:hidden}
.qz-bar i{display:block;height:100%;background:var(--rust);border-radius:99px;transition:width .3s}
.qz-count{color:var(--faint);font-size:12.5px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;margin:10px 0 0}
.qz-q{font-family:Oswald,'Arial Narrow',sans-serif;font-weight:700;text-transform:uppercase;font-size:clamp(24px,5vw,30px);line-height:1.1;margin:14px 0 6px;letter-spacing:.3px}
.qz-sub{color:var(--dim);margin:0 0 18px;font-size:15.5px}
.qz-lbl{display:block;font-weight:700;font-size:14.5px;margin:20px 0 8px}
.qz-lbl span,.qz-form span{color:var(--faint);font-weight:400}
.qz-opts{display:grid;gap:8px}
.qz-opts.row{grid-template-columns:repeat(auto-fit,minmax(90px,1fr))}
.qz-opts.nums{grid-template-columns:repeat(5,1fr)}
.qz-opts.multi{grid-template-columns:repeat(auto-fit,minmax(210px,1fr))}
.qz-opts button{min-height:52px;padding:12px 16px;border-radius:12px;border:1px solid var(--rule);background:var(--bg);color:var(--fg);font:600 15.5px Inter,sans-serif;text-align:left;cursor:pointer;display:flex;flex-direction:column;justify-content:center;gap:2px;transition:border-color .15s,background .15s}
.qz-opts.row button,.qz-opts.nums button{text-align:center;align-items:center}
.qz-opts button small{color:var(--faint);font-weight:500;font-size:13px}
.qz-opts button[aria-pressed=true]{border-color:var(--rust);background:rgba(190,81,38,.14)}
.qz-opts button[aria-pressed=true] small{color:var(--dim)}
.qz-opts.multi button{flex-direction:row;align-items:center;justify-content:flex-start;gap:10px}
.qz-opts.multi button::before{content:"";flex:0 0 18px;height:18px;border-radius:5px;border:1.5px solid var(--faint)}
.qz-opts.multi button[aria-pressed=true]::before{content:"\\2713";border-color:var(--rust);background:var(--rust);color:#FAF9F5;font-size:12px;line-height:16px;text-align:center}
.qz-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:14px}
.qz-grid label,.qz-form label{display:flex;flex-direction:column;gap:6px;font-weight:600;font-size:14px}
.qz-form{display:grid;gap:14px}
#qz input,#qz textarea{width:100%;min-height:50px;padding:12px 14px;border-radius:10px;border:1px solid var(--rule);background:var(--bg);color:var(--fg);font:inherit;font-size:16px}
#qz textarea{min-height:96px;resize:vertical}
#qz input:focus,#qz textarea:focus{outline:2px solid var(--rust-text);outline-offset:1px}
.qz-err{color:#F08A63;font-size:14px;margin:12px 0 0}
.qz-nav{display:flex;justify-content:space-between;gap:10px;margin-top:22px}
.qz-nav .btn{min-width:110px}
.qz-two{display:flex;gap:10px;flex-wrap:wrap;margin-top:20px}
.qz-two .btn{flex:1 1 200px}
#qz .btn.line{background:transparent;color:var(--fg);cursor:pointer;font-family:Inter,sans-serif}
#qz .btn.solid{border:0;cursor:pointer;font-family:Inter,sans-serif}
.qz-sum{display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin:0}
.qz-sum div{background:var(--bg);border:1px solid var(--rule);border-radius:10px;padding:10px 12px}
.qz-sum dt{color:var(--faint);font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase}
.qz-sum dd{margin:2px 0 0;font-weight:700}
.qz-done .disp{font-size:clamp(30px,6vw,42px);margin:0 0 8px}
.qz-done .disp em{font-style:normal;color:var(--rust)}
.qz-tiles{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin:6px 0 0}
.qz-tiles div{background:var(--bg);border:1px solid var(--rule);border-radius:12px;padding:12px 14px}
.qz-tiles div.hl{grid-column:1/-1;border-color:var(--rust);background:rgba(190,81,38,.12)}
.qz-tiles b{display:block;font-family:Oswald,sans-serif;font-size:26px;line-height:1.1}
.qz-tiles .hl b{font-size:40px;color:var(--rust-text)}
.qz-tiles div:first-child{grid-column:1/-1}
.qz-tiles span{color:var(--faint);font-size:12.5px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase}
.qz-note{color:var(--faint);font-size:14px;margin:10px 0 0}
.qz-rec{border-left:3px solid var(--rust);background:var(--bg);border-radius:10px;padding:14px 16px;margin:16px 0 0}
.qz-rec small{color:var(--rust-text);font-size:11.5px;font-weight:700;letter-spacing:2px;text-transform:uppercase}
.qz-rec h3{font-family:Oswald,sans-serif;text-transform:uppercase;font-size:22px;margin:4px 0 4px}
.qz-rec p{color:var(--dim);margin:0;font-size:15px}
.qz-priv{color:var(--faint);font-size:13px;text-align:center;margin:14px 0 0}
</style>
"""

QFIELDS = ["name", "email", "phone", "instagram", "referral", "goal", "sex", "age", "height", "weight_lb", "activity", "tdee", "calories", "protein", "carbs", "fat",
           "experience", "days_per_week", "blockers", "signals", "bloodwork", "services", "style", "readiness", "why", "recommendation", "qualified", "used_starter_kit"]
qform = '<form name="coaching-qualify" data-netlify="true" netlify-honeypot="company" hidden><input type="hidden" name="form-name" value="coaching-qualify"><input name="company">' + "".join(f'<input name="{f}">' for f in QFIELDS) + "</form>"

qp = head("See if you qualify for coaching | Salvage Health", "A 2-minute questionnaire: get your TDEE, calories and macros, and see which coaching option fits you.",
          "/coaching/qualify/", NOINDEX + COACHCSS + QCSS) + topbar("coaching") + f"""  <main class="co">
    <div class="qz-wrap">
      <p class="eyebrow">Coaching questionnaire</p>
      <h1 class="disp">See if you <em>qualify.</em></h1>
      <p class="dek">About 2 minutes. You get your calories and macros at the end either way.</p>
      <div id="qz" aria-live="polite"><noscript>This questionnaire needs JavaScript. Email hello@salvagehealth.com and I'll send it over.</noscript></div>
      <p class="qz-priv">Your answers go only to me. I never sell or share your information.</p>
      {qform}
    </div>
  </main>
  <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
  <script src="/assets/sb-config.js"></script>
  <script src="/assets/auth.js"></script>
  <script src="/assets/goals.js"></script>
  <script src="/assets/qualify.js"></script>
""" + FOOT
write("/coaching/qualify/", qp)
