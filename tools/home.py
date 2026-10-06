# Home page, Starter Kit opt-in (/start/) and the kit itself (/start/kit/).
# Executed from build.py, so head(), topbar(), FOOT, write(), ARTICLES, html, SPOTIFY, KINDLE, IG are in scope.
import subprocess as _sp, json as _json

_R = _json.loads(_sp.check_output(["node", "-e", """
global.window={};require('./kitchen/recipes.js');const S=window.SK;
const mac=r=>{let t={k:0,p:0};r.items.forEach(it=>{const f=S.FOODS[it.food];t.k+=f.kcal*it.g/100;t.p+=f.p*it.g/100});return {kcal:Math.round(t.k/r.serves/5)*5,p:Math.round(t.p/r.serves)}};
console.log(JSON.stringify({n:S.RECIPES.length,all:S.RECIPES.map(r=>Object.assign({id:r.id,name:r.name,by:!!r.by,img:r.photos?r.photos[0]:null,serves:r.serves,items:r.items.filter(i=>!i.staple).map(i=>({t:i.txt,o:!!i.optional}))},mac(r)))}))
"""], cwd=ROOT))
NREC = _R["n"]
RBY = {r["id"]: r for r in _R["all"]}

def optin(source, button="Send me the kit", note=True):
    return f"""<form class="optin" name="starter-kit" method="POST" action="/start/kit/" data-netlify="true" netlify-honeypot="company">
        <input type="hidden" name="form-name" value="starter-kit"><input type="hidden" name="source" value="{source}">
        <p class="hp" hidden><label>Company <input name="company" tabindex="-1" autocomplete="off"></label></p>
        <label class="sr" for="em-{source}">Email address</label>
        <input id="em-{source}" type="email" name="email" required placeholder="Your email address" autocomplete="email">
        <button class="btn solid" type="submit">{button}</button>
      </form>""" + ('\n      <p class="optnote">Free. Instant access. No spam, unsubscribe anytime.</p>' if note else "")

HOMECSS = """<style>
.hm section{padding:72px 0 0}
.hm h2.disp{font-size:clamp(30px,5vw,46px);margin:0 0 14px;text-wrap:balance}
.hm h2.disp em,.hm h1 em{font-style:normal;color:var(--rust)}
.hm .lead{color:var(--dim);font-size:clamp(16.5px,2vw,18.5px);margin:0;max-width:56ch}
.optin{display:flex;gap:8px;flex-wrap:wrap;margin:22px 0 0;max-width:520px}
.optin input[type=email]{flex:1 1 200px;min-width:0;min-height:52px;padding:12px 16px;border-radius:10px;border:1px solid var(--rule);background:var(--raised);color:var(--fg);font:inherit;font-size:16px}
.optin input[type=email]:focus{outline:2px solid var(--rust-text);outline-offset:1px}
.optin .btn{flex:0 0 auto;min-height:52px;width:auto}
.optnote{font-size:12.5px;color:var(--faint);margin:10px 0 0}
.hp{display:none}
/* hero */
.hero2{display:grid;grid-template-columns:1.1fr .9fr;gap:44px;align-items:center;padding:40px 0 8px}
.hero2 .eyebrow{margin-bottom:12px}
.hero2 h1{font-size:clamp(40px,6.6vw,72px);text-wrap:balance}
.hero2 .lead{margin-top:18px}
.hero2 .alt{display:inline-block;margin-top:14px;font-weight:700;font-size:15px;text-decoration:none}
.ba{position:relative;margin:0;border-radius:16px;overflow:hidden;border:1px solid var(--rule);background:var(--raised)}
.ba img{display:block;width:100%;height:auto}
.ba figcaption{position:absolute;left:0;right:0;bottom:0;display:grid;grid-template-columns:1fr 1fr;background:linear-gradient(transparent,rgba(10,10,9,.85) 40%);padding:28px 14px 12px;font-family:Oswald,'Arial Narrow',Impact,sans-serif;text-transform:uppercase;letter-spacing:.5px}
.ba figcaption span{font-size:clamp(18px,3vw,24px);font-weight:700}
.ba figcaption small{display:block;font-family:Inter,sans-serif;text-transform:none;letter-spacing:0;font-size:12px;color:var(--dim);font-weight:500}
.ba figcaption span:last-child{text-align:right;color:var(--rust-text)}
/* proof */
.proof{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1px;margin-top:40px;background:var(--rule);border:1px solid var(--rule);border-radius:14px;overflow:hidden}
.proof div{background:var(--bg);padding:18px 18px}
.proof b{display:block;font-family:Oswald,'Arial Narrow',Impact,sans-serif;font-size:clamp(22px,3vw,30px);line-height:1.1;letter-spacing:.3px}
.proof b i{font-style:normal;color:var(--rust-text)}
.proof small{display:block;color:var(--faint);font-size:13px;margin-top:4px}
.pnote{font-size:12px;color:var(--faint);margin:8px 0 0}
/* objections */
.objs{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin-top:24px}
.obj{background:var(--raised);border:1px solid var(--rule);border-radius:14px;padding:20px}
.obj q{display:block;font-family:Oswald,'Arial Narrow',Impact,sans-serif;font-weight:700;text-transform:uppercase;font-size:21px;line-height:1.15;letter-spacing:.3px;quotes:none;color:var(--fg)}
.obj p{margin:8px 0 0;color:var(--dim);font-size:15.5px}
/* steps */
.steps3{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin-top:24px}
.st3{display:flex;flex-direction:column;gap:8px;background:var(--raised);border:1px solid var(--rule);border-radius:14px;padding:20px;text-decoration:none;color:var(--fg);transition:border-color .15s}
.st3:hover{border-color:var(--rust)}
.st3 .n{width:30px;height:30px;border-radius:99px;background:var(--rust);color:#FAF9F5;display:grid;place-items:center;font-weight:800;font-size:14px}
.st3 h3{font-family:Oswald,'Arial Narrow',Impact,sans-serif;font-weight:700;text-transform:uppercase;font-size:22px;margin:4px 0 0;letter-spacing:.3px}
.st3 p{margin:0;color:var(--dim);font-size:15px}
.st3 .go{margin-top:auto;padding-top:6px;font-weight:700;font-size:14.5px;color:var(--rust-text)}
/* recipes rail */
.hrow{display:flex;align-items:baseline;justify-content:space-between;gap:16px;flex-wrap:wrap}
.hrow a{font-weight:700;font-size:15px;text-decoration:none;white-space:nowrap}
.rail{display:flex;gap:12px;overflow-x:auto;scroll-snap-type:x mandatory;margin:18px -20px 0;padding:0 20px 6px;scrollbar-width:none}
.rail::-webkit-scrollbar{display:none}
.rail::after{content:'';flex:0 0 8px}
.rc2{flex:0 0 min(58%,230px);scroll-snap-align:start;text-decoration:none;color:var(--fg);display:flex;flex-direction:column;gap:4px}
.rc2 img{width:100%;aspect-ratio:4/3;object-fit:cover;border-radius:12px;border:1px solid var(--rule);display:block}
.rc2 b{font-size:15px;line-height:1.3;margin-top:4px}
.rc2 small{font-size:12.5px;color:var(--faint)}
/* kit */
.kit{display:grid;grid-template-columns:1fr 1fr;gap:36px;align-items:center;background:linear-gradient(135deg,rgba(190,81,38,.18),rgba(190,81,38,0) 55%),var(--raised);border:1px solid var(--rust);border-radius:18px;padding:36px}
.kit ul{list-style:none;margin:0;padding:0;display:grid;gap:12px}
.kit li{display:grid;grid-template-columns:28px 1fr;gap:10px;align-items:start;color:var(--dim);font-size:15.5px}
.kit li b{color:var(--fg);display:block}
.kit li::before{content:"\\2713";width:24px;height:24px;border-radius:99px;background:var(--rust);color:#FAF9F5;display:grid;place-items:center;font-size:13px;font-weight:800;margin-top:1px}
/* bryan */
.me{display:grid;grid-template-columns:240px 1fr;gap:32px;align-items:center}
.me img{width:100%;height:auto;border-radius:14px;display:block;border:1px solid var(--rule)}
.me .sig{margin-top:14px;font-size:14px;color:var(--faint)}
/* book */
.bk{display:grid;grid-template-columns:150px 1fr;gap:28px;align-items:center;border-top:1px solid var(--rule);border-bottom:1px solid var(--rule);padding:32px 0}
.bk img{width:100%;height:auto;border-radius:4px;box-shadow:0 14px 30px rgba(0,0,0,.45);display:block}
.bk h2.disp{font-size:clamp(26px,4vw,36px)}
.bk .btns{display:flex;gap:10px;flex-wrap:wrap;margin-top:18px}
.bk .btns .btn{width:auto}
/* more */
.two{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.tile{display:flex;gap:16px;align-items:center;background:var(--raised);border:1px solid var(--rule);border-radius:14px;padding:16px;text-decoration:none;color:var(--fg);transition:border-color .15s}
.tile:hover{border-color:var(--rust)}
.tile img{width:84px;height:84px;object-fit:cover;border-radius:10px;flex:0 0 auto;background:#E4E4E4}
.tile .tx{display:flex;flex-direction:column;gap:3px;min-width:0}
.tile .tx small{font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--rust-text)}
.tile .tx b{font-size:16px;line-height:1.3}
.tile .tx span{font-size:13.5px;color:var(--faint)}
.vela{margin-top:12px;font-size:13.5px;color:var(--faint);border:1px solid var(--rule);border-radius:12px;padding:14px 16px}
.vela b{color:var(--dim)}
.vela a{font-weight:700}
.final{text-align:center;padding:56px 0 0}
.final .lead{margin:0 auto}
.final .optin{margin:22px auto 0}
.final .optnote{text-align:center}
/* sticky mobile cta */
.mcta{position:fixed;left:12px;right:12px;bottom:calc(12px + env(safe-area-inset-bottom,0px));z-index:20;display:none;align-items:center;justify-content:space-between;gap:10px;padding:10px 10px 10px 16px;border-radius:14px;background:#1F1E1B;border:1px solid var(--rust);box-shadow:0 10px 30px rgba(0,0,0,.5);transform:translateY(140%);transition:transform .25s}
.mcta.on{transform:none}
.mcta span{font-size:14px;font-weight:700;line-height:1.25}
.mcta span small{display:block;font-weight:500;color:var(--faint);font-size:12px}
.mcta .btn{width:auto;min-height:42px;padding:8px 16px;font-size:14px}
@media (max-width:860px){
  .hero2{grid-template-columns:1fr;gap:26px;padding-top:24px}
  .ba{max-width:440px}
  .kit,.me{grid-template-columns:1fr;gap:22px}
  .kit{padding:24px}
  .me img{max-width:200px}
  .steps3{grid-template-columns:1fr}
  .two{grid-template-columns:1fr}
  .mcta{display:flex}
}
@media (max-width:620px){
  .objs{grid-template-columns:1fr}
  .proof{grid-template-columns:1fr}
  .proof div{display:flex;align-items:baseline;justify-content:space-between;gap:12px;padding:14px 16px}
  .proof small{margin:0;text-align:right}
  .bk{grid-template-columns:96px 1fr;gap:18px}
  .optin .btn{flex:1 1 100%}
  .hm section{padding-top:56px}
}
@media (prefers-reduced-motion:reduce){.mcta{transition:none}}
</style>
"""

_rail = "".join(
    f'<a class="rc2" href="/kitchen/#{r["id"]}"><img src="{r["img"]}" alt="" loading="lazy"><b>{html.escape(r["name"])}</b><small>{r["kcal"]} cal · {r["p"]}g protein</small></a>'
    for r in _R["all"] if r["by"] and r["img"])

_tee = "/merch/img/tee-built-model-side.jpg"
_art = ARTICLES[0]

home = head("Salvage Health | It's never too late to take your life back",
            "Think you're too far gone to start? Bryan Dourado went from 265 lbs and prediabetic to 178 lbs. Get the free Day One Starter Kit, 65 free high-protein recipes and the plain-English guide to building your own plan.",
            "/", HOMECSS) + topbar("home") + f"""  <main class="hm">
    <div class="hero2">
      <div>
        <p class="eyebrow">For anyone who thinks they're too far gone</p>
        <h1 class="disp">It's never too late to <em>take your life back.</em></h1>
        <p class="lead">I was 265 pounds, prediabetic and out of chances. Fourteen months later I was 178. Not because I found a magic plan, but because I finally understood how this works. I'll show you how to start from exactly where you are.</p>
        {optin("home-hero", "Get the free Starter Kit")}
        <a class="alt" href="/kitchen/">Or browse {NREC} free recipes &rarr;</a>
      </div>
      <figure class="ba">
        <img src="/brand/before-after.jpg" alt="Bryan before at 265 pounds and after at 178 pounds, fourteen months apart" width="900" height="1095" fetchpriority="high">
        <figcaption><span>265 lbs<small>April 2025</small></span><span>178 lbs<small>14 months later</small></span></figcaption>
      </figure>
    </div>

    <div class="proof" aria-label="Bryan's results">
      <div><b>87 lbs <i>down</i></b><small>265 to 178 lbs (120 to 81 kg)</small></div>
      <div><b>A1C 5.9 <i>&rarr;</i> 4.6</b><small>Prediabetic to normal</small></div>
      <div><b>Sleep apnea <i>gone</i></b><small>Blood pressure normal</small></div>
    </div>
    <p class="pnote">My results, not a promise of yours. Everyone's body is different. Talk to your doctor before making big changes.</p>

    <section id="familiar">
      <p class="eyebrow">Sound familiar?</p>
      <h2 class="disp">The reasons you think <em>you can't start.</em></h2>
      <div class="objs">
        <div class="obj"><q>I've tried everything.</q><p>You tried plans. Nobody taught you how it actually works. Once you understand it, you stop needing someone else's plan.</p></div>
        <div class="obj"><q>I'm too far gone.</q><p>Too old, too heavy, too sick, too late. I believed all of it. You don't have to fix everything. You just have to start.</p></div>
        <div class="obj"><q>I don't know where to start.</q><p>Day one is written down for you. Seven days, one small step each day, with the meals already planned.</p></div>
        <div class="obj"><q>I can't stick to anything.</q><p>You don't need more willpower. You need food you actually like and a plan simple enough to survive a bad week.</p></div>
      </div>
    </section>

    <section id="how">
      <p class="eyebrow">How it works</p>
      <h2 class="disp">Learn it. Plan it. <em>Cook it.</em></h2>
      <div class="steps3">
        <a class="st3" href="#book"><span class="n">1</span><h3>Learn how it works</h3><p>Calories, protein, training and sleep in plain English. The audiobook is included with Spotify Premium.</p><span class="go">Start the book &rarr;</span></a>
        <a class="st3" href="/companion/"><span class="n">2</span><h3>Get your numbers</h3><p>The free app turns your height, weight and goal into your daily calorie and protein targets.</p><span class="go">Build your free plan &rarr;</span></a>
        <a class="st3" href="/kitchen/"><span class="n">3</span><h3>Cook food you like</h3><p>{NREC} high-protein recipes with real step-by-steps. Tell it what's in your fridge and it finds dinner.</p><span class="go">Open the kitchen &rarr;</span></a>
      </div>
    </section>

    <section id="recipes">
      <div class="hrow"><div><p class="eyebrow">From my kitchen</p><h2 class="disp">Food you'd never guess <em>fits the plan.</em></h2></div><a href="/kitchen/">All {NREC} recipes &rarr;</a></div>
      <div class="rail">{_rail}</div>
    </section>

    <section id="kit">
      <div class="kit">
        <div>
          <p class="eyebrow">Free Day One Starter Kit</p>
          <h2 class="disp">Your first week, <em>done for you.</em></h2>
          <p class="lead">Everything I wish someone had handed me on day one. Enter your email and it opens right away.</p>
          {optin("home-kit", "Send me the kit")}
        </div>
        <ul>
          <li><span><b>Your 7-day plan</b>One small, clear step each day, straight from the book.</span></li>
          <li><span><b>A cook-twice meal plan</b>Two batch cooks feed you all week. About 150 g protein a day.</span></li>
          <li><span><b>The grocery list</b>Every item for the week, ready to check off at the store.</span></li>
          <li><span><b>Your calorie and protein numbers</b>The free app does the math in two minutes.</span></li>
        </ul>
      </div>
    </section>

    <section id="bryan">
      <div class="me">
        <img src="/brand/bryan.jpg" alt="Bryan Dourado" width="600" height="899" loading="lazy">
        <div>
          <p class="eyebrow">Who I am</p>
          <h2 class="disp">Not a doctor. <em>Not a guru.</em></h2>
          <p class="lead">I'm a former chef and musician who spent years losing the same fight. Addiction, bad health, starting over more times than I can count. What finally worked was learning how my body actually works and building a plan I could keep. Salvage Health is everything I learned, handed to you.</p>
          <p class="sig"><b>Bryan Dourado</b>, founder and author of <i>Fitness Without the Fear</i>. <a href="/about/">Read my full story</a></p>
        </div>
      </div>
    </section>

    <section id="book">
      <div class="bk">
        <img src="/book/paperback-cover.jpg" alt="Fitness Without the Fear by Bryan Dourado" width="150" loading="lazy">
        <div>
          <p class="eyebrow">The book</p>
          <h2 class="disp">Fitness Without the Fear</h2>
          <p class="lead">The plain-English guide I couldn't find when I started. Read it on Kindle, or listen on Spotify (included with Premium).</p>
          <div class="btns">
            <a class="btn solid" href="/book">Get the book</a>
            <a class="btn line" href="{SPOTIFY}" target="_blank" rel="noopener">Listen on Spotify</a>
          </div>
        </div>
      </div>
    </section>

    <section id="more">
      <div class="two">
        <a class="tile" href="/merch/"><img src="{_tee}" alt="" loading="lazy"><span class="tx"><small>Merch</small><b>Built From What's Left Tee</b><span>Wear the reminder. $34</span></span></a>
        <a class="tile" href="/articles/{_art['slug']}/"><img src="/brand/mark.svg" alt="" loading="lazy" style="background:var(--bg);padding:16px"><span class="tx"><small>Latest article</small><b>{html.escape(_art['title'])}</b><span>{_art['read']} min read</span></span></a>
      </div>
      <p class="vela"><b>Want a doctor in the loop?</b> Salvage Health is education only. For physician-reviewed programs, Bryan also founded <a href="https://velacorehealth.com" target="_blank" rel="noopener">Velacore Health</a>, a separate company. Disclosure: Bryan has an ownership interest in Velacore Health.</p>
    </section>

    <section class="final">
      <h2 class="disp">You're not too far gone. <em>Start today.</em></h2>
      <p class="lead">Get the free Day One Starter Kit and take the first step tonight.</p>
      {optin("home-final", "Get the free Starter Kit")}
    </section>
  </main>
  <div class="mcta" id="mcta" aria-hidden="true"><span>Free Day One Starter Kit<small>Your first week, done for you</small></span><a class="btn solid" href="#kit" tabindex="-1">Get it</a></div>
  <script>
  (function(){{var b=document.getElementById('mcta');if(!b||!('IntersectionObserver' in window))return;var vis={{}};
  var io=new IntersectionObserver(function(es){{es.forEach(function(e){{vis[e.target.id||'x']=e.isIntersecting}});var any=Object.keys(vis).some(function(k){{return vis[k]}});var past=window.scrollY>window.innerHeight*.9;b.classList.toggle('on',past&&!any);b.setAttribute('aria-hidden',!(past&&!any))}});
  document.querySelectorAll('.optin').forEach(function(f,i){{f.id=f.id||'opt'+i;io.observe(f)}});
  window.addEventListener('scroll',function(){{var any=Object.keys(vis).some(function(k){{return vis[k]}});var on=window.scrollY>window.innerHeight*.9&&!any;b.classList.toggle('on',on)}},{{passive:true}});}})();
  </script>
  <script src="/assets/optin.js"></script>
  <script src="/assets/rail.js"></script>
""" + FOOT
write("/", home)

# ---------- /start/ opt-in landing (for Instagram bio and ads) ----------
start = head("Free Day One Starter Kit | Salvage Health",
             "Your first week, done for you: a 7-day plan, a cook-twice high-protein meal plan, the grocery list and your calorie targets. Free from Bryan Dourado.",
             "/start/", HOMECSS) + topbar("start") + f"""  <main class="hm">
    <div class="hero2">
      <div>
        <p class="eyebrow">Free Day One Starter Kit</p>
        <h1 class="disp">Think you're too far gone? <em>Start here.</em></h1>
        <p class="lead">I went from 265 pounds and prediabetic to 178. This is the exact first week I'd give anyone starting from where I was. Enter your email and it opens right away.</p>
        {optin("start", "Send me the kit")}
      </div>
      <figure class="ba">
        <img src="/brand/before-after.jpg" alt="Bryan before at 265 pounds and after at 178 pounds" width="900" height="1095">
        <figcaption><span>265 lbs<small>April 2025</small></span><span>178 lbs<small>14 months later</small></span></figcaption>
      </figure>
    </div>
    <section style="padding-top:44px">
      <div class="kit"><div><h2 class="disp">What's <em>inside</em></h2><p class="lead">Simple, specific and built for real life.</p></div>
        <ul>
          <li><span><b>Your 7-day plan</b>One small, clear step each day, straight from the book.</span></li>
          <li><span><b>A cook-twice meal plan</b>Two batch cooks feed you all week. About 150 g protein a day.</span></li>
          <li><span><b>The grocery list</b>Every item for the week, ready to check off at the store.</span></li>
          <li><span><b>Your calorie and protein numbers</b>The free app does the math in two minutes.</span></li>
        </ul>
      </div>
    </section>
  </main>
  <script src="/assets/optin.js"></script>
""" + FOOT
write("/start/", start)

# ---------- /start/kit/ the kit itself ----------
_plan = [("turkey-sausage-mcmuffins", "Breakfast, all 7 days", "Cook Sunday"),
         ("chicken-meal-prep", "Lunch, Monday to Thursday", "Cook Sunday"),
         ("cabbage-enchiladas", "Dinner, Sunday to Wednesday, plus lunch Friday to Sunday", "Cook Sunday"),
         ("egg-roll-in-a-bowl", "Dinner, Thursday, Saturday and Sunday", "Cook Thursday, 20 minutes")]
_days = [
 ("Day 1", "Get your baseline", "Weigh yourself first thing in the morning and write it down. Eat normally today. Get your calorie and protein numbers from the free app, and go to bed at a set time tonight."),
 ("Day 2", "Hit two numbers", "Start eating toward your calorie and protein targets. Those two numbers matter most. Don't stress about the rest yet."),
 ("Day 3", "Add structure", "Pick how you'll track (an app, a notebook, or just your meal plan) and commit to it for two weeks. Drink water and check that you're well hydrated."),
 ("Day 4", "Check in with yourself", "Skip the scale today. Notice your energy, hunger, sleep and mood instead. Those are real signs of progress too."),
 ("Day 5", "Handle a real-world meal", "Eat one meal you don't control: a restaurant, a work lunch, a friend's cooking. Estimate it, enjoy it, move on. This is where plans usually break, so practice it."),
 ("Day 6", "Review the week", "Look back without judging. Are you landing near your calorie and protein targets? Where did sleep slip, and why?"),
 ("Day 7", "Weigh in and reflect", "Weigh in the same way as Day 1 and write it down. Don't change anything yet. One week is a data point, not a trend. You just finished week one."),
]
_mp = "".join(f'<a class="mp" href="/kitchen/#{rid}"><img src="{RBY[rid]["img"] or "/brand/mark.svg"}" alt="" loading="lazy"><span><small>{html.escape(when)} · {html.escape(cook)}</small><b>{html.escape(RBY[rid]["name"])}</b><em>{RBY[rid]["kcal"]} cal · {RBY[rid]["p"]}g protein per serving</em></span></a>' for rid, when, cook in _plan)
_gl = "".join(f'<div class="gl"><h3>{html.escape(RBY[rid]["name"])}</h3><ul>' + "".join(f'<li><label><input type="checkbox"> {html.escape(i["t"])}{" <em>(optional)</em>" if i["o"] else ""}</label></li>' for i in RBY[rid]["items"]) + '</ul></div>' for rid, _, _ in _plan)
_dl = "".join(f'<li><b>{d}</b><span><strong>{t}</strong>{html.escape(x)}</span></li>' for d, t, x in _days)

KITCSS = HOMECSS.replace("</style>", """
.kp{max-width:760px}
.kp h1{font-size:clamp(34px,6vw,56px)}
.kp h2.disp{font-size:clamp(26px,4vw,36px);margin-top:8px}
.kstep{display:flex;gap:14px;align-items:flex-start;margin-top:22px;padding:18px;border:1px solid var(--rust);border-radius:14px;background:rgba(190,81,38,.08)}
.kstep .n{flex:0 0 32px;height:32px;border-radius:99px;background:var(--rust);color:#FAF9F5;display:grid;place-items:center;font-weight:800}
.kstep p{margin:4px 0 12px;color:var(--dim)}
.kstep .btn{width:auto}
.days{list-style:none;margin:18px 0 0;padding:0;display:grid;gap:10px}
.days li{display:grid;grid-template-columns:64px 1fr;gap:14px;background:var(--raised);border:1px solid var(--rule);border-radius:12px;padding:14px 16px}
.days li b{font-family:Oswald,'Arial Narrow',Impact,sans-serif;text-transform:uppercase;color:var(--rust-text);font-size:17px}
.days li span{color:var(--dim);font-size:15px}
.days li strong{display:block;color:var(--fg);font-size:16px;margin-bottom:2px}
.mps{display:grid;gap:10px;margin-top:18px}
.mp{display:flex;gap:14px;align-items:center;background:var(--raised);border:1px solid var(--rule);border-radius:12px;padding:10px;text-decoration:none;color:var(--fg)}
.mp:hover{border-color:var(--rust)}
.mp img{width:88px;height:88px;object-fit:cover;border-radius:9px;flex:0 0 auto}
.mp span{display:flex;flex-direction:column;gap:2px;min-width:0}
.mp small{font-size:12px;color:var(--rust-text);font-weight:700}
.mp b{font-size:16px;line-height:1.3}
.mp em{font-style:normal;font-size:13px;color:var(--faint)}
.gls{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:18px}
.gl{background:var(--raised);border:1px solid var(--rule);border-radius:12px;padding:14px 16px}
.gl h3{font-size:14px;margin:0 0 8px;color:var(--rust-text)}
.gl ul{list-style:none;margin:0;padding:0;display:grid;gap:6px}
.gl label{display:flex;gap:10px;align-items:flex-start;font-size:14.5px;color:var(--dim);cursor:pointer}
.gl input{margin-top:3px;accent-color:#BE5126;width:17px;height:17px;flex:0 0 auto}
.gl input:checked + *{text-decoration:line-through}
.gl em{color:var(--faint)}
.pantry{font-size:13.5px;color:var(--faint);margin-top:10px}
.calc{display:grid;gap:18px;margin-top:22px;padding:20px;background:var(--raised);border:1px solid var(--rule);border-radius:16px}
.cl{display:block;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--faint);margin:0 0 8px}
.goals{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px}
.goals button{display:flex;flex-direction:column;align-items:flex-start;gap:2px;min-height:64px;padding:10px 12px;border-radius:12px;border:1px solid var(--rule);background:var(--bg);color:var(--fg);font:700 15px Inter,sans-serif;text-align:left;cursor:pointer}
.goals button small{font-weight:500;font-size:12px;color:var(--faint);line-height:1.3}
.goals button[aria-pressed=true]{border-color:var(--rust);background:rgba(190,81,38,.16);box-shadow:inset 0 0 0 1px var(--rust)}
.seg{display:flex;gap:6px;flex-wrap:wrap}
.seg button{flex:1 1 0;min-height:46px;padding:8px 10px;border-radius:10px;border:1px solid var(--rule);background:var(--bg);color:var(--dim);font:700 14px Inter,sans-serif;cursor:pointer;line-height:1.2}
.seg button small{display:block;font-weight:500;font-size:11.5px;color:var(--faint);margin-top:2px}
.seg button[aria-pressed=true]{border-color:var(--rust);background:var(--rust);color:#FAF9F5}
.seg button[aria-pressed=true] small{color:#F3D3C4}
.seg.act{display:grid;grid-template-columns:repeat(4,minmax(0,1fr))}
.nums{display:grid;grid-template-columns:.7fr 1.3fr 1fr;gap:10px}
.nums label{display:block;min-width:0}
.nums input{width:100%;min-width:0;min-height:48px;padding:10px 12px;border-radius:10px;border:1px solid var(--rule);background:var(--bg);color:var(--fg);font:600 17px Inter,sans-serif}
.nums input:focus{outline:2px solid var(--rust-text);outline-offset:1px}
.hgt{display:flex;align-items:center;gap:6px}
.hgt i{font-style:normal;color:var(--faint);font-size:13px}
.res{margin-top:14px;padding:20px;border-radius:16px;border:1px solid var(--rust);background:linear-gradient(135deg,rgba(190,81,38,.2),rgba(190,81,38,.04))}
.rtop{display:flex;justify-content:space-between;align-items:flex-end;gap:12px;flex-wrap:wrap}
.rtop small{display:block;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--rust-text)}
.rtop b{font-family:Oswald,'Arial Narrow',Impact,sans-serif;font-size:clamp(44px,10vw,60px);line-height:1;margin-right:6px}
.rtop span{color:var(--dim)}
.rtop .rt{text-align:right}.rtop .rt b{font-size:24px;color:var(--fg);margin:0}
@media (max-width:480px){.rtop .rt{text-align:left;display:flex;align-items:baseline;gap:8px}.rtop .rt small{display:inline}}
.rtop .rt small{color:var(--faint)}
.rm{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:14px}
.rm span{background:var(--bg);border-radius:10px;padding:10px;text-align:center;font-family:Oswald,'Arial Narrow',Impact,sans-serif;font-size:15px;color:var(--dim)}
.rm b{font-size:28px;color:var(--fg)}
.rm small{display:block;font-family:Inter,sans-serif;font-size:11px;letter-spacing:1px;text-transform:uppercase;color:var(--faint)}
.rnote{font-size:13px;color:var(--dim);margin:12px 0 0}
.rnote:empty{display:none}
.tips{list-style:none;margin:18px 0 0;padding:0;display:grid;gap:10px;counter-reset:t}
.tips li{counter-increment:t;position:relative;padding:14px 14px 14px 50px;background:var(--raised);border:1px solid var(--rule);border-radius:12px;color:var(--dim);font-size:15px}
.tips li::before{content:counter(t);position:absolute;left:14px;top:13px;width:24px;height:24px;border-radius:99px;background:var(--rust);color:#FAF9F5;display:grid;place-items:center;font-size:12px;font-weight:800}
.tips li b{display:block;color:var(--fg);font-size:15.5px;margin-bottom:2px}
.fyh{font-family:Oswald,'Arial Narrow',Impact,sans-serif;text-transform:uppercase;letter-spacing:.5px;font-size:20px;margin:30px 0 12px}
.fyr{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}
.fyr a{text-decoration:none;color:var(--fg);display:flex;flex-direction:column;gap:3px;min-width:0}
.fyr .im{aspect-ratio:4/3;border-radius:10px;overflow:hidden;background:var(--raised);border:1px solid var(--rule);display:grid;place-items:center}
.fyr .im img{width:100%;height:100%;object-fit:cover}
.fyr .im svg{width:30%;color:#4A4842}
.fyr b{font-size:14.5px;line-height:1.3;margin-top:3px}
.fyr small{font-size:12px;color:var(--faint)}
.fya{display:grid;gap:8px}
.fya a{display:block;padding:14px 16px;background:var(--raised);border:1px solid var(--rule);border-radius:12px;text-decoration:none;color:var(--fg);font-weight:700}
.fya a:hover,.fyr a:hover b{color:var(--rust-text)}
.fit{margin:12px 0 0;padding:12px 14px;border-left:3px solid var(--rust);background:rgba(190,81,38,.1);border-radius:0 10px 10px 0;color:var(--dim);font-size:14.5px}
.seg.sk{display:grid;grid-template-columns:repeat(3,minmax(0,1fr))}
.plan{padding-top:28px!important;scroll-margin-top:12px}
.plan.flash .res,.plan.flash .fyr{animation:flash 1s ease}
@keyframes flash{0%{box-shadow:0 0 0 0 rgba(190,81,38,.0)}25%{box-shadow:0 0 0 4px rgba(190,81,38,.55)}100%{box-shadow:0 0 0 0 rgba(190,81,38,0)}}
.phd h2{font-size:clamp(28px,5vw,40px)}
.nums input::placeholder{color:#5E5C55;font-weight:500}
.nums input.miss,.cq.miss .seg,.cq.miss .goals{outline:2px solid var(--rust-text);outline-offset:3px;border-radius:10px}
.need{display:flex;flex-direction:column;gap:4px;margin-top:14px;padding:16px;border-radius:14px;border:1px dashed var(--rust);background:rgba(190,81,38,.08)}
.need b{font-size:16px}
.need span{font-size:14px;color:var(--dim)}
.need span em{font-style:normal;font-weight:700;color:var(--rust-text)}
.mhd{margin:0 0 10px;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--rust-text)}
.mtiles{display:grid;grid-template-columns:1.3fr 1fr 1fr 1fr;gap:8px}
.mtiles span{display:flex;flex-direction:column;gap:2px;padding:12px;border-radius:12px;background:var(--bg);border-top:4px solid #8A8779;min-width:0}
.mtiles .cal{border-top-color:var(--fg)}.mtiles .pt{border-top-color:var(--rust)}.mtiles .ct{border-top-color:#E2C9A6}
.mtiles small{font-size:11px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:var(--faint)}
.mtiles b{font-family:Oswald,'Arial Narrow',Impact,sans-serif;font-size:clamp(26px,6vw,34px);line-height:1.05;color:var(--fg)}
.mtiles em{font-style:normal;font-size:12px;color:var(--dim)}
.pmeal{margin:10px 0 4px;font-size:14px;color:var(--dim)}
.pmeal b{color:var(--fg)}
.res .rtop{display:none}
.mbar .ml{display:none}
.mbar{margin-top:14px}
@media (max-width:520px){.mtiles{grid-template-columns:1fr 1fr 1fr}.mtiles .cal{grid-column:1/-1;flex-direction:row;align-items:baseline;gap:10px}}
.pchips{display:flex;flex-wrap:wrap;gap:6px;margin:12px 0 4px}
.pchips span{padding:5px 11px;border-radius:99px;background:var(--rust);color:#FAF9F5;font-size:13px;font-weight:700}
.pchips span.o{background:transparent;border:1px solid var(--rule);color:var(--dim)}
.ebar{margin-top:16px}
.et{position:relative;height:14px;border-radius:99px;background:rgba(250,249,245,.08);overflow:visible}
.ef{position:absolute;left:0;top:0;bottom:0;border-radius:99px;background:var(--rust);transition:width .5s}
.em{position:absolute;top:-5px;bottom:-5px;width:3px;border-radius:2px;background:var(--fg);transition:left .5s}
.el{display:flex;justify-content:space-between;gap:10px;margin-top:8px;font-size:12.5px;color:var(--faint)}
.el b{color:var(--fg)}
.edl{margin:8px 0 0;font-weight:700;font-size:15px;color:var(--fg)}
.edl em{font-style:normal;color:var(--rust-text)}
.mbar{margin-top:18px}
.mt{display:flex;height:14px;border-radius:99px;overflow:hidden;gap:2px}
.mt i{display:block;height:100%;transition:width .5s}
.mp1,.sw.p{background:var(--rust)}.mc1,.sw.c{background:#E2C9A6}.mf1,.sw.f{background:#8A8779}
.ml{display:flex;flex-wrap:wrap;gap:6px 16px;margin-top:10px;font-size:14px;color:var(--dim)}
.ml b{font-family:Oswald,'Arial Narrow',Impact,sans-serif;font-size:22px;color:var(--fg)}
.ml em{font-style:normal;color:var(--faint);font-size:12.5px}
.sw{display:inline-block;width:10px;height:10px;border-radius:3px;margin-right:6px}
.phd2{display:flex;align-items:baseline;justify-content:space-between;gap:10px;flex-wrap:wrap}
.phd2 span{font-size:12.5px;color:var(--faint)}
.fyr .why{font-size:12px;color:var(--rust-text);font-weight:600;line-height:1.35}
.lvd{display:inline-flex;gap:2px;vertical-align:middle;margin-left:4px}
.lvd i{width:6px;height:6px;border-radius:99px;background:rgba(250,249,245,.18)}
.lvd i.on{background:var(--rust-text)}
.toast{position:fixed;left:50%;bottom:calc(20px + env(safe-area-inset-bottom,0px));transform:translate(-50%,250%);z-index:30;padding:10px 16px;border-radius:99px;background:var(--fg);color:#141413;font-weight:700;font-size:14px;box-shadow:0 10px 30px rgba(0,0,0,.5);transition:transform .25s;white-space:nowrap}
.toast.on{transform:translate(-50%,0)}
.toast button{margin-left:10px;border:0;background:none;color:var(--rust);font:inherit;cursor:pointer;text-decoration:underline}
@media (prefers-reduced-motion:reduce){.ef,.em,.mt i,.toast{transition:none}.plan.flash .res,.plan.flash .fyr{animation:none}}
@media (max-width:640px){.seg.sk{grid-template-columns:1fr}.gls{grid-template-columns:1fr}.goals{grid-template-columns:1fr 1fr}.seg.act{grid-template-columns:1fr 1fr}.nums{grid-template-columns:1fr 1fr}.nums label:nth-child(2){grid-column:1/-1;order:-1}.fyr{grid-template-columns:1fr 1fr}.calc{padding:16px}}
</style>""")

kit = head("Your Day One Starter Kit | Salvage Health", "Your free Day One Starter Kit from Salvage Health.", "/start/kit/",
           '<meta name="robots" content="noindex">\n' + KITCSS) + topbar("start") + f"""  <main class="hm kp">
    <div style="padding-top:36px">
      <p class="eyebrow">You're in. Welcome.</p>
      <h1 class="disp">Your Day One <em>Starter Kit</em></h1>
      <p class="lead">Bookmark this page. It's yours to keep. Work through it in order and don't try to be perfect. Week one is about starting, not nailing it.</p>
    </div>

    <section style="padding-top:36px" id="numbers">
      <p class="eyebrow">Step 1</p>
      <h2 class="disp">Your numbers <em>in 30 seconds</em></h2>
      <p class="lead">Tap through these and your daily targets appear instantly. Everything below changes to match your goal.</p>
      <form class="calc" id="calc" autocomplete="off" onsubmit="return false">
        <div class="cq"><span class="cl">Goal</span><div class="goals" id="c-goal"></div></div>
        <div class="cq"><span class="cl">I am</span><div class="seg" data-k="sex"><button type="button" data-v="m">Male</button><button type="button" data-v="f">Female</button></div></div>
        <div class="cq nums">
          <label><span class="cl">Age</span><input id="c-age" type="number" inputmode="numeric" min="18" max="90" placeholder="Age"></label>
          <label><span class="cl">Height</span><span class="hgt"><input id="c-ft" type="number" inputmode="numeric" min="4" max="7" placeholder="Ft"><i>ft</i><input id="c-in" type="number" inputmode="numeric" min="0" max="11" placeholder="In"><i>in</i></span></label>
          <label><span class="cl">Weight</span><span class="hgt"><input id="c-lb" type="number" inputmode="decimal" min="80" max="700" placeholder="Pounds"><i>lb</i></span></label>
        </div>
        <div class="cq"><span class="cl">Activity</span><div class="seg act" id="c-act"></div></div>
        <div class="cq"><span class="cl">In the kitchen</span><div class="seg sk" id="c-skill"></div></div>
      </form>
      <div class="need" id="r-empty" aria-live="polite"><b id="need-h">Answer 6 quick questions</b><span id="need-l"></span></div>
      <p class="pantry">Estimates only, not medical advice. Want goal dates? Use the <a href="/companion/">full companion app</a>.</p>
    </section>

    <section id="plan" class="plan" hidden aria-live="polite">
      <div class="phd"><p class="eyebrow">Your plan is ready</p><h2 class="disp">Built for <em id="p-who">you</em></h2><div class="pchips" id="p-chips"></div></div>
      <div class="res">
        <p class="mhd">Your daily macros</p>
        <div class="mtiles">
          <span class="cal"><small>Calories</small><b id="t-cal">0</b><em>a day</em></span>
          <span class="pt"><small>Protein</small><b id="t-p">0g</b><em id="t-pm"></em></span>
          <span class="ct"><small>Carbs</small><b id="t-c">0g</b><em id="t-cm"></em></span>
          <span class="ft"><small>Fat</small><b id="t-f">0g</b><em id="t-fm"></em></span>
        </div>
        <p class="pmeal" id="t-meal"></p>
        <div class="rtop"><span><small id="r-goal">Daily target</small><b id="r-cal">0</b> calories a day</span></div>
        <div class="ebar" id="ebar"><div class="et"><i class="ef" id="e-fill"></i><i class="em" id="e-mark"></i></div><div class="el"><span id="e-l1"></span><span id="e-l2"></span></div><p class="edl" id="e-delta"></p></div>
        <div class="mbar" id="mbar"><div class="mt"><i class="mp1" id="m-p"></i><i class="mc1" id="m-c"></i><i class="mf1" id="m-f"></i></div>
          <div class="ml"><span><i class="sw p"></i><b id="r-p">0</b>g protein <em id="r-pp"></em></span><span><i class="sw c"></i><b id="r-c">0</b>g carbs <em id="r-cp"></em></span><span><i class="sw f"></i><b id="r-f">0</b>g fat <em id="r-fp"></em></span></div></div>
        <p class="rnote" id="r-note"></p>
        <p class="rnote" id="r-kg"></p>
      </div>
      <div class="phd2"><h3 class="fyh">Your first meals</h3><span id="p-skilltag"></span></div>
      <p class="pantry" id="p-why"></p>
      <div class="fyr" id="fy-rec"></div>
      <a class="btn line" style="width:auto;margin-top:14px" href="/kitchen/#foryou">See every recipe that fits your plan</a>
    </section>

    <section style="padding-top:44px" id="foryou" hidden>
      <p class="eyebrow" id="fy-eb">Made for you</p>
      <h2 class="disp" id="fy-h">Your playbook</h2>
      <p class="lead" id="fy-hello"></p>
      <ol class="tips" id="fy-tips"></ol>
      <h3 class="fyh">Read next</h3>
      <div class="fya" id="fy-art"></div>
    </section>
    <form name="starter-kit-profile" data-netlify="true" netlify-honeypot="company" hidden><input type="hidden" name="form-name" value="starter-kit-profile"><input name="company"><input name="email"><input name="goal"><input name="calories"><input name="protein"><input name="activity"><input name="skill"></form>

    <section style="padding-top:44px" id="week">
      <p class="eyebrow">Step 2</p>
      <h2 class="disp">Your 7-day plan</h2>
      <p class="lead">One small step a day. From Chapter 23 of <i>Fitness Without the Fear</i>.</p>
      <ol class="days">{_dl}</ol>
    </section>

    <section style="padding-top:44px" id="meals">
      <p class="eyebrow">Step 3</p>
      <h2 class="disp">Cook twice. <em>Eat all week.</em></h2>
      <p class="lead">Sunday you cook three things (about 2 hours). Thursday you cook one more (20 minutes). That covers breakfast, lunch and dinner for the week at roughly 1,400 to 1,500 calories and about 150 g protein a day before snacks. Tap any recipe for the full step-by-step.</p>
      <p class="fit" id="mp-fit">Adjust portions up or down to match your numbers from Step 1.</p>
      <div class="mps">{_mp}</div>
      <p class="pantry">Day 5 is your real-world meal: eat out or eat with friends that night.</p>
    </section>

    <section style="padding-top:44px" id="groceries">
      <p class="eyebrow">Step 4</p>
      <h2 class="disp">The grocery list</h2>
      <p class="lead">Check items off as you shop. Amounts are for the full recipe.</p>
      <div class="gls">{_gl}</div>
      <p class="pantry">Pantry basics assumed: avocado oil or avocado oil spray, salt and pepper, garlic, and basic spices (chili powder, cumin, paprika, oregano, sage, fennel seed, garlic powder).</p>
    </section>

    <section style="padding-top:44px">
      <div class="kit"><div><p class="eyebrow">Keep going</p><h2 class="disp">Want the <em>why</em> behind it?</h2><p class="lead">The book explains everything in this kit in plain English. Kindle, or the audiobook on Spotify (included with Premium).</p></div>
        <div style="display:grid;gap:10px"><a class="btn solid" href="/book">Get the book</a><a class="btn line" href="/kitchen/">Browse all {NREC} recipes</a><a class="btn line" href="{IG}" target="_blank" rel="noopener">Follow on Instagram</a></div></div>
    </section>
  </main>
  <script>window.SH_ARTICLES = """ + _json.dumps({a['slug']: a['title'] for a in ARTICLES}) + """;</script>
  <script src="/kitchen/recipes.js"></script>
  <script src="/assets/goals.js"></script>
  <script src="/assets/kit.js"></script>
""" + FOOT
write("/start/kit/", kit)

# ---------- 404 ----------
nf = head("Page not found | Salvage Health", "That page doesn't exist.", "/404.html", '<meta name="robots" content="noindex">\n' + HOMECSS) + topbar("404") + f"""  <main class="hm" style="text-align:center;padding:72px 0 20px">
    <p class="eyebrow">404</p>
    <h1 class="disp" style="font-size:clamp(36px,7vw,60px)">This page is <em>gone.</em></h1>
    <p class="lead" style="margin:16px auto 0">But you're not. Here's where to go next.</p>
    <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;margin-top:24px">
      <a class="btn solid" style="width:auto" href="/start/">Get the free Starter Kit</a>
      <a class="btn line" style="width:auto" href="/kitchen/">Browse {NREC} recipes</a>
      <a class="btn line" style="width:auto" href="/">Home</a>
    </div>
  </main>
""" + FOOT
open(os.path.join(ROOT, "404.html"), "w").write(bust(nf))
