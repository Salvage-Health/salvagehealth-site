# Book sales page: /book (Instagram bio link). /the-book and /fitness-without-the-fear redirect here.
# The reader companion page lives at /companion/ (/fitness-companion redirects there).
# Executed from build.py, so head(), topbar(), FOOT, write(), html, json, SITE, KINDLE, SPOTIFY, PAPERBACK are in scope.

REVIEW = "https://www.amazon.com/review/create-review?asin=B0HLTN491G"

BCSS = """<style>
.bp section{padding:72px 0 0}
.bp-have{display:block;margin:16px 0 0;padding:11px 14px;border:1px solid var(--rule);border-radius:10px;background:var(--raised);color:var(--dim);font-size:14px;text-decoration:none}
.bp-have b{color:var(--rust-text);font-weight:700}
.bp-have:hover{border-color:var(--rust)}
.bp h2.disp{font-size:clamp(30px,5vw,46px);margin:0 0 14px;text-wrap:balance}
.bp h2.disp em,.bp h1 em{font-style:normal;color:var(--rust)}
.bp .lead{color:var(--dim);font-size:clamp(16.5px,2vw,18.5px);margin:0;max-width:60ch}
.bp-hero{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(0,.85fr);gap:44px;align-items:center;padding:44px 0 0 !important}
.bp-hero h1{font-size:clamp(40px,7vw,72px);margin:0}
.bp-hero .sub{font-family:Oswald,sans-serif;text-transform:uppercase;letter-spacing:2px;color:var(--rust-text);font-weight:600;font-size:15px;margin:0 0 12px}
.bp-hero .dek{max-width:48ch}
.bp-cover{position:relative;justify-self:center;max-width:340px;width:100%}
.bp-cover img{width:100%;height:auto;display:block;border-radius:6px;box-shadow:0 30px 60px rgba(0,0,0,.55),0 0 0 1px rgba(255,255,255,.06)}
.bp-cover .badge{position:absolute;left:-12px;top:18px;background:var(--rust);color:#FAF9F5;font:700 12px Inter,sans-serif;letter-spacing:1.5px;text-transform:uppercase;padding:8px 12px;border-radius:8px;box-shadow:0 8px 20px rgba(0,0,0,.4)}
.bp-buy{display:flex;flex-wrap:wrap;gap:10px;margin:26px 0 0}
.bp-buy .btn{min-height:52px}
.bp-buy .btn small{font-weight:500;opacity:.85;margin-left:4px}
.bp-facts{display:flex;flex-wrap:wrap;gap:8px 20px;margin:18px 0 0;padding:0;list-style:none;color:var(--faint);font-size:14px}
.bp-facts li::before{content:"";display:inline-block;width:6px;height:6px;border-radius:50%;background:var(--rust);margin:0 8px 2px 0}
@media(max-width:820px){.bp-hero{grid-template-columns:1fr;gap:30px}.bp-cover{order:-1;max-width:230px}.bp-cover .badge{left:-10px;top:12px}}
.bp-pain{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px;margin:24px 0 0}
.bp-pain div{background:var(--raised);border:1px solid var(--rule);border-radius:14px;padding:18px}
.bp-pain b{display:block;font-size:16.5px;margin:0 0 4px}
.bp-pain span{color:var(--dim);font-size:15px}
.bp-story{display:grid;grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr);gap:40px;align-items:center}
.bp-story img{width:100%;height:auto;border-radius:14px;border:1px solid var(--rule)}
.bp-story blockquote{margin:22px 0 0;padding:0 0 0 16px;border-left:3px solid var(--rust);font-size:18px;color:var(--fg)}
@media(max-width:820px){.bp-story{grid-template-columns:1fr;gap:24px}.bp-story img{max-width:420px}}
.bp-parts{display:grid;grid-template-columns:repeat(auto-fit,minmax(290px,1fr));gap:12px;margin:24px 0 0}
.bp-parts div{background:var(--raised);border:1px solid var(--rule);border-radius:14px;padding:20px}
.bp-parts small{color:var(--rust-text);font:700 11.5px Inter,sans-serif;letter-spacing:2px;text-transform:uppercase}
.bp-parts h3{font-family:Oswald,sans-serif;text-transform:uppercase;font-size:22px;margin:6px 0 8px;letter-spacing:.3px}
.bp-parts ul{margin:0;padding-left:18px;color:var(--dim);font-size:15px}
.bp-parts li{margin:4px 0}
.bp-parts li::marker{color:var(--rust)}
.bp-diff{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:22px;margin:24px 0 0}
.bp-diff div{border-top:2px solid var(--rust);padding:14px 0 0}
.bp-diff b{display:block;font-family:Oswald,sans-serif;text-transform:uppercase;font-size:20px;letter-spacing:.3px;margin:0 0 4px}
.bp-diff span{color:var(--dim);font-size:15px}
.bp-fmt{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px;margin:24px 0 0}
.bp-fmt a,.bp-fmt div{display:flex;flex-direction:column;background:var(--raised);border:1px solid var(--rule);border-radius:16px;padding:22px 20px;text-decoration:none;color:var(--fg);transition:border-color .15s}
.bp-fmt a:hover{border-color:var(--rust)}
.bp-fmt .best{border-color:var(--rust);background:linear-gradient(180deg,rgba(190,81,38,.12),var(--raised))}
.bp-fmt small{color:var(--rust-text);font:700 11.5px Inter,sans-serif;letter-spacing:2px;text-transform:uppercase}
.bp-fmt h3{font-family:Oswald,sans-serif;text-transform:uppercase;font-size:24px;margin:6px 0 2px}
.bp-fmt .price{font-family:Oswald,sans-serif;font-size:34px;color:var(--fg);margin:6px 0 6px}
.bp-fmt p{color:var(--dim);font-size:14.5px;margin:0 0 16px}
.bp-fmt .go{margin-top:auto;font-weight:700;color:var(--rust-text)}
.bp-fmt .soon{opacity:.75}
.bp-free{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:12px;margin:24px 0 0}
.bp-free a{display:block;background:var(--raised);border:1px solid var(--rule);border-radius:14px;padding:18px;text-decoration:none;color:var(--fg)}
.bp-free a:hover{border-color:var(--rust)}
.bp-free b{display:block;font-size:16.5px;margin:0 0 4px}
.bp-free span{color:var(--dim);font-size:14.5px}
.bp-faq details{border-bottom:1px solid var(--rule);padding:14px 0}
.bp-faq summary{cursor:pointer;font-weight:700;font-size:16.5px;list-style:none;display:flex;justify-content:space-between;gap:16px}
.bp-faq summary::after{content:"+";color:var(--rust-text);font-size:22px;line-height:1}
.bp-faq details[open] summary::after{content:"\\2212"}
.bp-faq details p{color:var(--dim);margin:10px 0 0;font-size:15.5px}
.bp-end{margin:72px 0 0;padding:40px 22px;border:1px solid var(--rule);border-radius:18px;text-align:center;background:linear-gradient(180deg,rgba(190,81,38,.12),transparent)}
.bp-end .lead{margin:12px auto 0}
.bp-end .bp-buy{justify-content:center}
.bp-rev{color:var(--faint);font-size:14px;text-align:center;margin:22px 0 0}
.bp-sticky{display:none}
@media(max-width:760px){.bp-sticky{display:flex;position:fixed;left:0;right:0;bottom:0;z-index:20;gap:8px;padding:10px 14px calc(10px + env(safe-area-inset-bottom));background:rgba(20,20,19,.96);border-top:1px solid var(--rule);backdrop-filter:blur(8px)}.bp-sticky .btn{flex:1;min-height:46px;font-size:14px}body{padding-bottom:76px}}
</style>
"""

PB = PAPERBACK
def buy_buttons(extra_cls=""):
    return stores("bp-buy " + extra_cls)

PARTS = [
    ("Part 1", "How your body actually works", ["Body basics without the biology class", "Calories and why they still matter", "Protein, carbs and fat, made simple", "Vitamins and minerals that move the needle", "TDEE: how many calories you really burn"]),
    ("Part 2", "Train and eat with a target", ["Training with intention, not just sweating", "Deficits and surpluses, and how big to go", "Clean vs. dirty bulking", "Why weight loss is not the same as fat loss"]),
    ("Part 3", "Myths that kept you stuck", ["Carbs are not the enemy", "The truth about sugar", "Fat will not make you fat", "Every major fad diet, broken down, including intermittent fasting"]),
    ("Part 4", "Tracking without losing your mind", ["Should you even track? A quick decision guide", "Tracking without obsessing", "How to read a nutrition label in 10 seconds"]),
    ("Part 5", "The stuff nobody talks about", ["Sleep", "Stress and recovery", "Alcohol", "Hydration (it is not 8 glasses)", "Peptides, explained honestly"]),
    ("Part 6", "Put it all together", ["A simple 6-step framework for your own plan", "When a coach is worth it", "Your first week, day by day"]),
]

FAQ = [
    ("I'm really out of shape. Is this book for me?", "Yes. It was written for exactly that person. I wrote it after losing over 80 pounds and reversing my prediabetes. It starts at zero and assumes nothing."),
    ("Is this a diet book?", "No. There is no diet to follow and nothing to buy. It teaches you how calories, protein, training and recovery actually work, so you can build a plan that fits your life and keep it."),
    ("Do I need a gym?", "No. The training chapters work for a gym, home or a mix. The point is training with intention, not owning equipment."),
    ("What's the difference between the formats?", "Same book. The Kindle eBook and paperback include the worksheet, sources and glossary. The audiobook is the full book narrated, and the worksheet, sources and glossary live on the free companion page instead."),
    ("Is the audiobook free?", "If you have Spotify Premium, it's included in your plan at no extra cost. Without Premium, you can buy it on Spotify, and the price is set by Spotify and can vary by account and country."),
    ("Are you a doctor?", "No, and the book says so up front. I'm someone who did the research, tested it on myself and documented what worked. Every factual claim has a source listed in the back, and the book tells you when to talk to your doctor."),
]

parts = "".join(f'<div><small>{p}</small><h3>{html.escape(t)}</h3><ul>{"".join(f"<li>{html.escape(x)}</li>" for x in xs)}</ul></div>' for p, t, xs in PARTS)
faq = "".join(f'<details><summary>{html.escape(q)}</summary><p>{html.escape(a)}</p></details>' for q, a in FAQ)
pb_card = (f'<a href="{PB}" target="_blank" rel="noopener"><small>Hold it in your hands</small><h3>Paperback</h3><div class="price">${PAPERBACK_PRICE}</div><p>Full color print edition with every diagram, the worksheet and the glossary.</p><span class="go">Order on Amazon &rarr;</span></a>'
           if PB else '<div class="soon"><small>Coming soon</small><h3>Paperback</h3><div class="price">Soon</div><p>Full color print edition with every diagram, the worksheet and the glossary. Get the free Starter Kit below and I will email you the day it drops.</p><span class="go">In final proofing</span></div>')

ld = {"@context": "https://schema.org", "@type": "Book", "name": "Fitness Without the Fear", "author": {"@type": "Person", "name": "Bryan Dourado", "url": SITE + "/about/"},
      "description": "A no-BS beginner's guide to nutrition, training and recovery, explained in plain English.", "image": SITE + "/book/cover-600.jpg", "url": SITE + "/book",
      "workExample": [{"@type": "Book", "bookFormat": "https://schema.org/EBook", "potentialAction": {"@type": "ReadAction", "target": KINDLE}},
                      {"@type": "Book", "bookFormat": "https://schema.org/AudiobookFormat", "potentialAction": {"@type": "ListenAction", "target": SPOTIFY}}]}
og = '<meta property="og:image:alt" content="Fitness Without the Fear by Bryan Dourado">\n'

bp = head("Fitness Without the Fear by Bryan Dourado | The No-BS Beginner's Guide",
          "I lost over 80 pounds and reversed my prediabetes. The plain-English guide to nutrition, training and recovery I wish I had when I started. Kindle, audiobook on Spotify, and paperback.",
          "/book", og + f'<script type="application/ld+json">{json.dumps(ld)}</script>\n' + BCSS, "book") + topbar("thebook") + f"""  <main class="bp">
    <a class="bp-have" href="/companion/">Already have the book? <b>Open the companion app, worksheet and sources &rarr;</b></a>
    <section class="bp-hero">
      <div>
        <p class="sub">A no-BS beginner's guide</p>
        <h1 class="disp">Fitness Without <em>the Fear</em></h1>
        <p class="dek">I lost over 80 pounds and reversed my prediabetes by finally learning how this stuff actually works. This is that knowledge in plain English: nutrition, training and recovery, without the jargon, the guilt or the gurus.</p>
        {buy_buttons()}
        <ul class="bp-facts"><li>23 chapters</li><li>11 diagrams</li><li>Worksheet and glossary</li><li>Free companion app</li></ul>
      </div>
      <div class="bp-cover"><img src="/book/cover-600.jpg" alt="Fitness Without the Fear by Bryan Dourado, cover" width="600" height="960"><span class="badge">Out now</span></div>
    </section>

    <section>
      <p class="eyebrow">Sound familiar?</p>
      <h2 class="disp">You're not lazy. <em>You were never taught.</em></h2>
      <div class="bp-pain">
        <div><b>"I've tried every diet."</b><span>Keto, fasting, cleanses. They all worked until they didn't. This book explains why, and what actually lasts.</span></div>
        <div><b>"I don't even know where to start."</b><span>Chapter by chapter, from how your body burns energy to your first week. No background needed.</span></div>
        <div><b>"Everyone says something different."</b><span>Every myth gets broken down with a real source behind it, so you can stop guessing.</span></div>
        <div><b>"I'm too far gone."</b><span>I thought that too. Never too old, too heavy or too late. This book is the proof.</span></div>
      </div>
    </section>

    <section>
      <div class="bp-story">
        <img src="/brand/before-after.jpg" alt="Bryan Dourado before and after losing over 80 pounds in 14 months" width="900" height="1095" loading="lazy">
        <div>
          <p class="eyebrow">Why I wrote it</p>
          <h2 class="disp">Over 80 pounds. <em>14 months.</em></h2>
          <p class="lead">I'm not a doctor or a fitness influencer. I'm a former chef and musician who spent years losing the same fight. What finally worked wasn't a magic diet. It was understanding calories, protein, training and sleep well enough to build a plan I could actually keep.</p>
          <p class="lead" style="margin-top:14px">I wrote down everything I learned, checked it against real research, and cut out everything that didn't matter. This is the book I wish someone had handed me on day one.</p>
          <blockquote>"It's never too late to take your life back. You just need to know how it works."</blockquote>
        </div>
      </div>
    </section>

    <section>
      <p class="eyebrow">What's inside</p>
      <h2 class="disp">Everything you need. <em>Nothing you don't.</em></h2>
      <p class="lead">23 chapters that build on each other, and every one also works on its own as a quick reference.</p>
      <div class="bp-parts">{parts}</div>
    </section>

    <section>
      <p class="eyebrow">Why it's different</p>
      <h2 class="disp">Written for <em>real people</em></h2>
      <div class="bp-diff">
        <div><b>Plain English</b><span>Every technical term is explained the first time it shows up, with a glossary in the back.</span></div>
        <div><b>Backed by sources</b><span>Every number and claim has a traceable source, listed by chapter.</span></div>
        <div><b>Built to use</b><span>11 diagrams, a fill-in worksheet and a free companion app that does the math for you.</span></div>
        <div><b>No guilt</b><span>No food is evil and no one is too far gone. You get the why, so you can make your own plan.</span></div>
      </div>
    </section>

    <section id="get">
      <p class="eyebrow">Pick your format</p>
      <h2 class="disp">Read it, hear it, <em>or hold it</em></h2>
      <div class="bp-fmt">
        <a class="best" href="{KINDLE}" target="_blank" rel="noopener"><small>Most popular</small><h3>Kindle eBook</h3><div class="price">${KINDLE_PRICE}</div><p>Read on any phone, tablet or Kindle. Includes the worksheet, sources and glossary.</p><span class="go">Get it on Amazon &rarr;</span></a>
        <a href="{SPOTIFY}" target="_blank" rel="noopener"><small>Listen anywhere</small><h3>Audiobook</h3><div class="price">Spotify</div><p>The full book, narrated. Included with Spotify Premium, or buy it on Spotify. Perfect for the gym, the commute or a walk.</p><span class="go">Listen on Spotify &rarr;</span></a>
        {pb_card}
      </div>
    </section>

    <section>
      <p class="eyebrow">Free with the book</p>
      <h2 class="disp">The tools that <em>go with it</em></h2>
      <div class="bp-free">
        <a href="/companion/"><b>Companion app and worksheet</b><span>Your calories, protein and goal date, calculated as you read. Plus every source and the glossary.</span></a>
        <a href="/start/"><b>Free Starter Kit</b><span>Your daily targets, a 7-day plan and a grocery list in about 60 seconds.</span></a>
        <a href="/kitchen/"><b>Salvage Kitchen</b><span>Macro-friendly recipes matched to what's already in your fridge.</span></a>
      </div>
    </section>

    <section class="bp-faq">
      <p class="eyebrow">Questions</p>
      <h2 class="disp">Before you <em>buy</em></h2>
      {faq}
    </section>

    <div class="bp-end">
      <h2 class="disp" style="font-size:clamp(28px,4.5vw,42px)">Start today. <em>Not Monday.</em></h2>
      <p class="lead">The first chapter takes about 10 minutes. By the end of the week you'll know more about how your body works than most people ever learn.</p>
      {buy_buttons()}
    </div>
    <p class="bp-rev">Already read it? <a href="{REVIEW}" target="_blank" rel="noopener">Leave a quick review on Amazon</a>. It is the single biggest thing that helps an independent book get found.</p>
  </main>
  <div class="bp-sticky"><a class="btn solid" href="{KINDLE}" target="_blank" rel="noopener">Kindle ${KINDLE_PRICE}</a><a class="btn line" href="{SPOTIFY}" target="_blank" rel="noopener"><img src="/book/spotify-sm.png" alt="" width="18" height="18" style="margin-right:6px;vertical-align:-3px">Spotify</a></div>
""" + FOOT
write("/book/", bp)
