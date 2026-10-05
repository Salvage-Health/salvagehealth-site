import os, json, html, re, sys
sys.path.insert(0, os.path.dirname(__file__))
from content import ARTICLES, FAQ, DATE_ISO, DATE_TXT, ABOUT_SHORT, ABOUT_BODY, MERCH2, SHOP, LIVE, FEATURE
FAQ = [(g, [(q, a.replace('PLACEHOLDER_SHORT', html.escape(ABOUT_SHORT))) for q, a in qs]) for g, qs in FAQ]
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE = "https://salvagehealth.com"
SPOTIFY = "https://open.spotify.com/show/1cWhytGxaBKPY5N36sD5aw"
KINDLE = "https://www.amazon.com/dp/B0HLTN491G"
IG = "https://www.instagram.com/el_dourado/"

def strip(s): return re.sub(r"<[^>]+>", "", s)

def head(title, desc, path, extra="", ogtype="website"):
    return f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>{html.escape(title)}</title>
<meta name="description" content="{html.escape(desc)}">
<link rel="canonical" href="{SITE}{path}">
<meta name="theme-color" content="#141413">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/brand/apple-touch-icon.png">
<meta property="og:type" content="{ogtype}">
<meta property="og:site_name" content="Salvage Health">
<meta property="og:title" content="{html.escape(title)}">
<meta property="og:description" content="{html.escape(desc)}">
<meta property="og:image" content="{SITE}/brand/og.png">
<meta property="og:url" content="{SITE}{path}">
<meta name="twitter:card" content="summary_large_image">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap">
<link rel="stylesheet" href="/assets/site.css">
{extra}</head>
<body>
<div class="wrap">
"""

def topbar(active):
    def a(href, label, key, cls=""):
        cur = ' aria-current="page"' if key == active else ""
        c = f' class="{cls}"' if cls else ""
        return f'<a href="{href}"{cur}{c}>{label}</a>'
    return f"""  <header class="top">
    <a class="brand" href="/"><img src="/brand/mark.svg" alt="" width="30" height="30"><span class="wm">Salvage <span>Health</span></span></a>
    <nav aria-label="Main">
      {a('/about/','About','about')}
      {a('/articles/','Articles','articles')}
      {a('/kitchen/','Kitchen','kitchen')}
      {a('/merch/','Merch','merch')}
      {a('/faq/','FAQ','faq','hide-sm')}
      {a('/book','Free plan','book','hide-sm')}
    </nav>
  </header>
"""

FOOT = f"""  <footer class="site">
    <div class="foot">
      <div>
        <a class="brand" href="/"><img src="/brand/mark.svg" alt="" width="24" height="24"><span class="wm">Salvage <span>Health</span></span></a>
        <span class="tg">Built from what's left.</span>
      </div>
      <nav aria-label="Footer">
        <a href="/about/">About</a>
        <a href="/articles/">Articles</a>
        <a href="/kitchen/">Salvage Kitchen</a>
        <a href="/merch/">Merch</a>
        <a href="/faq/">FAQ</a>
        <a href="/book">Free companion app</a>
        <a href="{SPOTIFY}" target="_blank" rel="noopener">Audiobook</a>
        <a href="{KINDLE}" target="_blank" rel="noopener">Kindle</a>
        <a href="{IG}" target="_blank" rel="noopener">Instagram</a>
        <a href="mailto:hello@salvagehealth.com">hello@salvagehealth.com</a>
      </nav>
    </div>
    <p class="fine">Salvage Health shares education, not medical advice. Talk to your doctor before you change how you eat, train or supplement, especially if you have a medical condition. &copy; 2026 Salvage Health.</p>
  </footer>

</div>
</body>
</html>
"""

def card(a):
    return f"""      <a class="acard" href="/articles/{a['slug']}/">
        <span class="cat">{a['cat']}</span>
        <h2>{html.escape(a['title'])}</h2>
        <p>{html.escape(a['dek'])}</p>
        <span class="meta">{a['read']} min read</span>
      </a>
"""

CTA = f"""    <div class="cta">
      <img src="/book/paperback-cover.jpg" alt="" width="64">
      <div><b>Build your own plan</b><span>Fitness Without the Fear is free on Spotify, and the free companion app turns it into your personal calorie and macro plan.</span></div>
      <a class="btn solid" href="/book">Get your free plan</a>
    </div>
"""

def write(path, s):
    full = os.path.join(ROOT, path.strip("/"), "index.html")
    os.makedirs(os.path.dirname(full), exist_ok=True)
    open(full, "w").write(s)

# articles
for a in ARTICLES:
    path = f"/articles/{a['slug']}/"
    ld = {"@context":"https://schema.org","@type":"Article","headline":a["title"],"description":a["desc"],
          "datePublished":DATE_ISO,"dateModified":DATE_ISO,"image":SITE+"/brand/og.png",
          "author":{"@type":"Person","name":"Bryan Dourado","url":SITE+"/"},
          "publisher":{"@type":"Organization","name":"Salvage Health","logo":{"@type":"ImageObject","url":SITE+"/brand/apple-touch-icon.png"}},
          "mainEntityOfPage":SITE+path}
    extra = f'<meta property="article:published_time" content="{DATE_ISO}">\n<script type="application/ld+json">{json.dumps(ld)}</script>\n'
    src = ""
    if a["sources"]:
        src = '    <div class="sources"><h2 class="disp">Sources</h2><ol>\n' + "".join(
            f'      <li><a href="{u}" target="_blank" rel="noopener">{t}</a></li>\n' for t, u in a["sources"]) + "    </ol></div>\n"
    others = [o for o in ARTICLES if o is not a][:2]
    more = '  <div class="more"><h2 class="disp">Keep reading</h2><div class="alist">\n' + "".join(card(o) for o in others) + "  </div></div>\n"
    page = head(f"{a['title']} | Salvage Health", a["desc"], path, extra, "article") + topbar("articles") + f"""  <main>
  <article>
    <header>
      <p class="eyebrow">{a['cat']}</p>
      <h1 class="disp">{a['h1']}</h1>
      <p class="dek">{a['dek']}</p>
      <div class="byline"><b>Bryan Dourado</b><span>&middot;</span><time datetime="{DATE_ISO}">{DATE_TXT}</time><span>&middot;</span><span>{a['read']} min read</span></div>
    </header>
    <div class="prose">
{a['body']}
    </div>
{CTA}{src}  </article>
{more}  </main>
""" + FOOT
    write(path, page)

# index
idx = head("Articles | Salvage Health", "Plain-English articles on fitness, nutrition, discipline and mindset from Bryan Dourado, author of Fitness Without the Fear.", "/articles/") + topbar("articles") + """  <main>
    <div class="phead">
      <p class="eyebrow">Articles</p>
      <h1 class="disp">Real talk on <em>taking your life back.</em></h1>
      <p>Plain-English writing on nutrition, training, discipline and mindset. What worked for me, what the research says, and what's still unknown.</p>
    </div>
    <div class="alist">
""" + "".join(card(a) for a in ARTICLES) + """    </div>
  </main>
""" + FOOT
write("/articles/", idx)

# faq
qa = [q for _, qs in FAQ for q in qs]
ld = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":strip(a)}} for q,a in qa]}
body = ""
for grp, qs in FAQ:
    body += f'    <h2 class="disp grp">{grp}</h2>\n' + "".join(f'    <details><summary>{q}</summary><div class="a">{a}</div></details>\n' for q, a in qs)
faq = head("FAQ | Salvage Health", "Answers about Salvage Health, the book Fitness Without the Fear, the free companion app, coaching, supplements and medical care.", "/faq/", f'<script type="application/ld+json">{json.dumps(ld)}</script>\n') + topbar("faq") + f"""  <main>
    <div class="phead">
      <p class="eyebrow">FAQ</p>
      <h1 class="disp">Questions, <em>answered.</em></h1>
      <p>Don't see yours? Email <a href="mailto:hello@salvagehealth.com">hello@salvagehealth.com</a> or message Bryan on <a href="{IG}" target="_blank" rel="noopener">Instagram</a>.</p>
    </div>
    <div class="faq">
{body}    </div>
  </main>
""" + FOOT
write("/faq/", faq)


# about
ld = {"@context":"https://schema.org","@type":"ProfilePage","mainEntity":{"@type":"Person","name":"Bryan Dourado","description":ABOUT_SHORT,
      "jobTitle":"Founder, Salvage Health","sameAs":[IG],"url":SITE+"/about/"}}
ab = head("About Bryan Dourado | Salvage Health", "Bryan Dourado, founder of Salvage Health and author of Fitness Without the Fear: from poverty, addiction and 265 pounds to rebuilding his life. Second chances exist.", "/about/", f'<script type="application/ld+json">{json.dumps(ld)}</script>\n') + topbar("about") + f"""  <main>
  <article>
    <header>
      <p class="eyebrow">About Bryan</p>
      <h1 class="disp">Second chances exist. <em>Twentieth chances, too.</em></h1>
      <p class="dek">Musician. Chef. Salesman. Founder of Salvage Health. Still figuring it out, and sharing all of it.</p>
    </header>
    <div class="prose" style="padding-top:28px">
{ABOUT_BODY}
    </div>
{CTA}  </article>
  </main>
""" + FOOT
write("/about/", ab)

# merch
SHSYM = '<svg width="0" height="0" style="position:absolute" aria-hidden="true"><symbol id="sh" viewBox="0 0 100 100"><path d="M50 6 L84 18 V48 C84 72 68 88 50 96 C32 88 16 72 16 48 V18 Z" fill="none" stroke="#BE5126" stroke-width="6" stroke-linejoin="round"/><path d="M24 54 H37 L44 40 L52 66 L59 46 L65 54 H78" fill="none" stroke="#FAF9F5" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></symbol></svg>'
cards = ""
MD = os.path.join(os.path.dirname(os.path.abspath(__file__)), "merch")
for slug, name, cat, d, art in MERCH2:
    svg = open(os.path.join(MD, art + ".svg")).read().replace("<svg ", f'<svg role="img" aria-label="{html.escape(name)} concept" ', 1)
    if slug in LIVE:
        price, url, ph = LIVE[slug]
        pic = f'<img src="/merch/img/{ph[0]}.jpg" alt="{html.escape(name)}, back" loading="lazy"><img class="alt" src="/merch/img/{ph[1]}.jpg" alt="" loading="lazy">' if ph else svg
        cards += f"""      <div class="mcard live" id="{slug}">
        <a class="mimg{' photo' if ph else ''}" href="{url}" target="_blank" rel="noopener" aria-label="Buy the {html.escape(name)}">{pic}<span class="mtag">Available now</span></a>
        <div class="mtx"><span class="cat">{cat}</span><h2>{html.escape(name)}</h2><p>{html.escape(d)}</p><div class="mbuy"><b>{price}</b><a class="btn solid" href="{url}" target="_blank" rel="noopener">Buy now</a></div></div>
      </div>
"""
    else:
        cards += f"""      <div class="mcard" id="{slug}">
        <div class="mimg">{svg}<span class="mtag soon">Coming soon</span></div>
        <div class="mtx"><span class="cat">{cat}</span><h2>{html.escape(name)}</h2><p>{html.escape(d)}</p></div>
      </div>
"""
fslug, fphotos = FEATURE
fname, fcat, fdesc = next((n, c, d) for sl, n, c, d, _ in MERCH2 if sl == fslug)
fprice, furl, _ = LIVE[fslug]
thumbs = "".join(f'<button type="button" class="fth{" on" if i == 0 else ""}" data-src="/merch/img/{ph}.jpg" data-alt="{html.escape(alt)}" aria-label="Show photo {i+1}: {html.escape(alt)}"><img src="/merch/img/{ph}.jpg" alt="" loading="lazy"></button>' for i, (ph, alt) in enumerate(fphotos))
feature = f"""    <section class="feat" aria-label="Featured: {html.escape(fname)}">
      <div class="fgal">
        <div class="fmain"><img id="fimg" src="/merch/img/{fphotos[0][0]}.jpg" alt="{html.escape(fphotos[0][1])}"></div>
        <div class="fthumbs">{thumbs}</div>
      </div>
      <div class="ftx">
        <p class="eyebrow">Available now</p>
        <h2 class="disp">Built From <em>What's Left.</em></h2>
        <p>The flagship tee. A small shield on the chest and the whole mission across the back in a worn-in print.</p>
        <p>For anyone who has started over, more than once if that's what it took. You don't need a perfect starting point. You build with what you've got.</p>
        <ul class="fspec"><li>Unisex fit, soft organic cotton, ribbed neck</li><li>Black, sizes S to 5XL</li><li>Printed to order, ships in 5 to 11 days</li></ul>
        <div class="fbuy"><b>{fprice}</b><a class="btn solid" href="{furl}" target="_blank" rel="noopener">Buy now</a></div>
      </div>
    </section>
    <script>document.querySelectorAll('.fth').forEach(function(b){{b.addEventListener('click',function(){{var i=document.getElementById('fimg');i.src=b.dataset.src;i.alt=b.dataset.alt;document.querySelectorAll('.fth').forEach(function(x){{x.classList.remove('on')}});b.classList.add('on');}});}});</script>
    <h2 class="disp mhead">The <em>lineup</em></h2>
"""
mp = head("Merch | Salvage Health", "Salvage Health gear: shield tees, hoodies, beanies, stickers and lifting gear. Built from what's left. First tee available now.", "/merch/") + topbar("merch") + f"""  <main>
    <div class="phead">
      <p class="eyebrow">Merch</p>
      <h1 class="disp">Wear the <em>reminder.</em></h1>
      <p>Gear for people building from what's left. Every piece is a daily reminder that you said you'd show up. The first tee is live now, with more dropping soon.</p>
      <p style="margin-top:22px;display:flex;gap:12px;flex-wrap:wrap"><a class="btn solid" href="{SHOP}" target="_blank" rel="noopener">Shop the store</a><a class="btn line" href="{IG}" target="_blank" rel="noopener">Follow for new drops</a></p>
    </div>
{feature}    <div class="mgrid">
{cards}    </div>
    <p class="fine" style="margin-top:22px">Items marked Coming soon are previews. Final products, colors and details may change. Orders are printed to order and handled by our store partner, Fourthwall.</p>
  </main>
""" + FOOT
write("/merch/", mp)


# kitchen (preview: noindex, not in nav until real recipes are in)
KCSS = """<meta name="robots" content="noindex">
<style>
.skpick{background:var(--raised);border:1px solid var(--rule);border-radius:16px;padding:22px;margin:0 0 40px}
.skq{position:relative;margin:0 0 18px}
.skq input{width:100%;min-height:52px;padding:12px 16px;border-radius:10px;border:1px solid var(--rule);background:var(--bg);color:var(--fg);font:inherit;font-size:16px}
.skq input:focus{outline:2px solid var(--rust-text);outline-offset:1px}
#sug{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px}
#sug button{min-height:40px;padding:8px 14px;border-radius:999px;border:1px solid var(--rust);background:rgba(190,81,38,.14);color:var(--fg);font:inherit;font-size:14px;font-weight:600;cursor:pointer}
#sug .none{font-size:14px;color:var(--faint)}
.skg{margin:0 0 14px}
.skgl{display:block;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--rust-text);margin:0 0 8px}
.skchips{display:flex;flex-wrap:wrap;gap:8px}
.chip{min-height:40px;padding:8px 14px;border-radius:999px;border:1px solid var(--rule);background:transparent;color:var(--dim);font:inherit;font-size:14px;font-weight:600;cursor:pointer;transition:all .12s}
.chip:hover{border-color:var(--rust)}
.chip.on{background:var(--rust);border-color:var(--rust);color:#FAF9F5}
.skbar{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-top:6px;padding-top:14px;border-top:1px solid var(--rule);font-size:14px;color:var(--faint)}
.skbar button{background:none;border:0;color:var(--rust-text);font:inherit;font-weight:700;cursor:pointer;padding:8px 0}
.skh{font-size:clamp(26px,3.4vw,34px);margin:8px 0 16px}
.skf{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 22px}
.fchip{min-height:42px;padding:8px 16px;border-radius:10px;border:1px solid var(--rule);background:var(--raised);color:var(--dim);font:inherit;font-size:14.5px;font-weight:700;cursor:pointer}
.fchip span{color:var(--faint);font-weight:500;margin-left:4px}
.fchip.on{border-color:var(--fg);color:var(--fg)}
.fchip.on span{color:var(--dim)}
.skn{color:var(--dim);margin:0 0 24px}
.rgrid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;margin:0 0 36px}
.rc{display:flex;flex-direction:column;gap:8px;text-align:left;background:var(--raised);border:1px solid var(--rule);border-radius:14px;padding:20px;color:var(--fg);font:inherit;cursor:pointer;transition:border-color .15s}
.rc:hover{border-color:var(--rust)}
.rc{position:relative}
.rc.has-pic{padding-top:0}
.rpic{display:block;margin:0 -20px 6px;aspect-ratio:4/3;overflow:hidden;border-radius:13px 13px 0 0;background:#2a2926}
.rpic img{width:100%;height:100%;object-fit:cover;display:block}
.rby{position:absolute;top:12px;left:12px;font-size:10.5px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;background:var(--rust);color:#FAF9F5;padding:5px 9px;border-radius:999px}
.rc:not(.has-pic) .rby{position:static;align-self:flex-start}
.dpics{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:0 0 18px}
.dpics img{width:100%;aspect-ratio:1;object-fit:cover;border-radius:10px;display:block}
.rtag{font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--rust-text)}
.rc b{font-family:Oswald,'Arial Narrow',Impact,sans-serif;font-weight:700;text-transform:uppercase;font-size:21px;line-height:1.1;letter-spacing:.5px}
.rb{color:var(--dim);font-size:14.5px;line-height:1.5}
.mac{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin-top:4px}
.mac span{display:flex;flex-direction:column;align-items:center;background:var(--bg);border-radius:8px;padding:8px 4px;font-size:11px;color:var(--faint);text-transform:uppercase;letter-spacing:1px}
.mac em{font-style:normal;font-family:Oswald,'Arial Narrow',Impact,sans-serif;font-size:19px;color:var(--fg);letter-spacing:0}
.mac.big em{font-size:24px}
.st{font-size:13px;font-weight:700;margin-top:auto;padding-top:6px}
.st.ok{color:#7FBF7F}.st.near{color:var(--rust-text)}
.buy{display:flex;flex-wrap:wrap;gap:6px 14px;align-items:baseline;background:rgba(190,81,38,.1);border:1px solid var(--rust);border-radius:12px;padding:14px 18px;margin:-16px 0 36px;font-size:15px;color:var(--dim)}
.buy b{color:var(--fg)}.buy em{font-style:normal;color:var(--rust-text);font-weight:600}
dialog#dlg{width:min(680px,calc(100vw - 24px));max-height:calc(100vh - 40px);padding:0;border:1px solid var(--rule);border-radius:16px;background:var(--raised);color:var(--fg)}
dialog#dlg::backdrop{background:rgba(0,0,0,.65)}
#dlg-body{padding:28px 26px 30px;overflow:auto;max-height:calc(100vh - 40px)}
#dlg-body h2{font-size:clamp(28px,4vw,38px);margin:0 0 12px}
#dlg-body h3{font-family:Oswald,'Arial Narrow',Impact,sans-serif;text-transform:uppercase;letter-spacing:1px;font-size:18px;margin:26px 0 10px}
.fine2{font-size:12.5px;color:var(--faint);margin:8px 0 0}
.ing{list-style:none;padding:0;margin:0}
.ing li{display:flex;gap:10px;align-items:baseline;padding:9px 0;border-bottom:1px solid var(--rule);font-size:15.5px;color:#E6E4DD}
.ing .lab{flex-shrink:0;min-width:68px;font-size:10.5px;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-right:10px}
.ing .have .lab{color:#7FBF7F}.ing .miss .lab{color:var(--rust-text)}.ing .opt .lab,.ing .stp .lab{color:var(--faint)}
.ing .alt{color:var(--faint);font-size:13.5px}
.stepsl{padding-left:22px;margin:0;color:#E6E4DD}
.stepsl li{margin:0 0 12px}
#dlg-close{position:sticky;top:0;float:right;margin:-10px -8px 0 0;width:44px;height:44px;border-radius:999px;border:1px solid var(--rule);background:var(--bg);color:var(--fg);font-size:22px;cursor:pointer}
.skmail{display:flex;gap:18px;align-items:center;flex-wrap:wrap;background:linear-gradient(120deg,rgba(190,81,38,.16),rgba(190,81,38,0) 60%),var(--raised);border:1px solid var(--rule);border-radius:16px;padding:26px}
.skmail div{flex:1;min-width:240px}
.skmail h2{font-size:clamp(24px,3vw,30px);margin:0 0 8px}
.skmail p{margin:0;color:var(--dim)}
.skmail form{display:flex;gap:10px;flex-wrap:wrap;flex:1;min-width:260px}
.skmail input{flex:1;min-width:180px;min-height:48px;padding:10px 14px;border-radius:10px;border:1px solid var(--rule);background:var(--bg);color:var(--fg);font:inherit}
@media (max-width:900px){.rgrid{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (max-width:600px){.rgrid{grid-template-columns:1fr}.skpick{padding:16px}}
</style>
"""
kp = head("Salvage Kitchen | Salvage Health", "Tell it what's in your fridge. Get macro-friendly recipes you can cook tonight.", "/kitchen/", KCSS) + topbar("kitchen") + """  <main>
    <div class="phead">
      <p class="eyebrow">Salvage Kitchen</p>
      <h1 class="disp">Cook from <em>what's left.</em></h1>
      <p>Tap what's in your fridge, freezer and cupboard. Get macro-friendly recipes you can make tonight, plus what to grab at the store to unlock more.</p>
    </div>
    <section class="skpick" aria-label="What do you have?">
      <div class="skq"><label for="q" class="skgl">What do you have?</label><input id="q" type="text" placeholder="Type an ingredient, like chicken or rice" autocomplete="off"><div id="sug" aria-live="polite"></div></div>
      <div id="groups"></div>
      <div class="skbar"><span><span id="count"></span>. Always assumed: <span id="staples"></span>.</span><button type="button" id="clear" hidden>Clear all</button></div>
    </section>
    <div id="results" aria-live="polite"></div>
    <section class="skmail" aria-label="Get recipes by email">
      <div><h2 class="disp">Save your <em>recipes</em></h2><p>Get a new fridge-friendly recipe every week, plus your saved favorites in your inbox.</p></div>
      <form onsubmit="event.preventDefault();this.querySelector('button').textContent='Coming soon';"><input type="email" placeholder="Your email" aria-label="Email" disabled><button class="btn solid" type="submit" disabled>Coming soon</button></form>
    </section>
    <p class="fine">Macros are estimates per serving based on USDA data and include optional ingredients. Cook chicken to 165°F (74°C) or higher. Check labels if you have allergies.</p>
  </main>
  <dialog id="dlg" aria-label="Recipe"><div id="dlg-body"></div><button id="dlg-close" type="button" aria-label="Close" style="position:absolute;top:14px;right:14px;margin:0">&times;</button></dialog>
  <script src="/kitchen/recipes.js"></script>
  <script src="/kitchen/app.js"></script>
""" + FOOT
write("/kitchen/", kp)

# sitemap + robots
urls = ["/", "/about/", "/book", "/articles/", "/merch/", "/faq/"] + [f"/articles/{a['slug']}/" for a in ARTICLES]
sm = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + "".join(
    f"  <url><loc>{SITE}{u}</loc><lastmod>{DATE_ISO}</lastmod></url>\n" for u in urls) + "</urlset>\n"
open(os.path.join(ROOT, "sitemap.xml"), "w").write(sm)
open(os.path.join(ROOT, "robots.txt"), "w").write(f"User-agent: *\nAllow: /\n\nSitemap: {SITE}/sitemap.xml\n")

# em dash check
bad = []
for dp, _, fs in os.walk(ROOT):
    if ".git" in dp: continue
    for f in fs:
        if f.endswith(".html") and ("articles" in dp or "faq" in dp):
            if "—" in open(os.path.join(dp, f)).read(): bad.append(os.path.join(dp, f))
print("built", len(ARTICLES), "articles; em dashes in:", bad)
