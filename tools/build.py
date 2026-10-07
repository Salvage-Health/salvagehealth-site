import os, json, html, re, sys
sys.path.insert(0, os.path.dirname(__file__))
from content import ARTICLES, FAQ, DATE_ISO, DATE_TXT, ABOUT_SHORT, ABOUT_BODY, MERCH2, SHOP, LIVE, FEATURE, SB_URL, SB_KEY, SHOP_GROUPS, SHOP_ORDER
FAQ = [(g, [(q, a.replace('PLACEHOLDER_SHORT', html.escape(ABOUT_SHORT))) for q, a in qs]) for g, qs in FAQ]
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE = "https://salvagehealth.com"
SPOTIFY = "https://open.spotify.com/show/1cWhytGxaBKPY5N36sD5aw"
KINDLE = "https://www.amazon.com/dp/B0HLTN491G"
KINDLE_PRICE = "9.99"
PAPERBACK = ""          # paste the Amazon paperback link here when it goes live
PAPERBACK_PRICE = "19.99"
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
    cta = '<a class="navcta" href="/start/"' + (' aria-current="page"' if active == "start" else "") + '><span>Start&nbsp;here</span></a>'
    # Pinned bar. Left: the book promo (or, on the book page, buy buttons). Right, after scrolling: quick links
    # to the other main pages (never the page you're on) plus the Starter Kit button (not on the Starter Kit pages).
    # Main menu is deliberately short: Start Here (pill), Kitchen, Book, Merch. Articles, About, FAQ live in the footer.
    links = [("/kitchen/", "Kitchen", "kitchen"), ("/book", "The Book", "thebook"), ("/merch/", "Merch", "merch")]
    kit = active != "start"
    ql = "".join(f'<a href="{h}">{l}</a>' for h, l, k in links if k not in (active, "thebook")) + ('<a class="lnc" href="/start/">Start here</a>' if kit else "")
    ml = (('<a class="lmk" href="/start/">Start here: free Starter Kit</a>' if kit else "")
          + "".join(f'<a href="{h}"' + (' aria-current="page"' if k == active else "") + f'>{l}</a>' for h, l, k in links)
          + '<div class="lmsub"><a href="/about/">About</a><a href="/articles/">Articles</a><a href="/faq/">FAQ</a></div>')
    burger = '<svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M3 5.5h14M3 10h14M3 14.5h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>'
    if active == "thebook":
        promo = (f'<span class="lp lpb"><b>Fitness Without the Fear</b><a class="lbuy" href="{KINDLE}" target="_blank" rel="noopener">Kindle ${KINDLE_PRICE}</a>'
                 f'<a class="lbuy2" href="{SPOTIFY}" target="_blank" rel="noopener">Listen on Spotify</a></span>')
        cls = "launch lghost"
    else:
        promo = '<a class="lp" href="/book"><span class="nw">New</span> <b>Fitness Without the Fear</b> <span class="lo">is out now.</span> <u>Get the book</u></a>'
        cls = "launch"
    bar = "" if active == "members" else (
        f'<div class="{cls}" id="lb">{promo}'
        f'<nav class="ln" aria-label="Quick links">{ql}</nav>'
        f'<button class="lm" type="button" aria-label="Menu" aria-expanded="false" aria-controls="lmenu">{burger}</button>'
        f'<div class="lmenu" id="lmenu" hidden>{ml}</div></div>\n'
        "<script>(function(){var b=document.getElementById('lb');if(!b)return;var m=b.querySelector('.lm'),d=document.getElementById('lmenu');"
        "function close(){d.hidden=true;m.setAttribute('aria-expanded','false');}"
        "m.addEventListener('click',function(e){e.stopPropagation();var o=d.hidden;d.hidden=!o;m.setAttribute('aria-expanded',o);});"
        "document.addEventListener('click',function(e){if(!b.contains(e.target))close();});document.addEventListener('keydown',function(e){if(e.key==='Escape')close();});"
        "window.addEventListener('DOMContentLoaded',function(){var t=document.querySelector('header.top');if(!t||!('IntersectionObserver' in window))return;"
        "new IntersectionObserver(function(es){var s=!es[0].isIntersecting;b.classList.toggle('sc',s);if(!s)close();},{rootMargin:'-60px 0px 0px 0px'}).observe(t);});})();</script>\n")
    return bar + f"""  <header class="top">
    <a class="brand" href="/"><img src="/brand/mark.svg" alt="" width="30" height="30"><span class="wm">Salvage <span>Health</span></span></a>
    <nav aria-label="Main">
      {a('/kitchen/','Kitchen','kitchen')}
      {a('/book','The Book','thebook')}
      {a('/merch/','Merch','merch')}
    </nav>
    {cta}
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
        <a href="/book">The book</a>
        <a href="/companion/">Book companion app</a>
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

CTA = f"""    <div class="cta cta-kit">
      <div><b>Start here: your first week, done for you</b><span>The free Day One Starter Kit: your calorie and protein numbers, a 7-day plan, a cook-twice meal plan and the grocery list. Plus every recipe in the Kitchen.</span>
      <form class="optin" name="starter-kit" method="POST" action="/start/kit/"><input type="hidden" name="form-name" value="starter-kit"><input type="hidden" name="source" value="article"><p class="hp" hidden><label>Company <input name="company" tabindex="-1" autocomplete="off"></label></p><label class="sr" for="em-article">Email address</label><input id="em-article" type="email" name="email" required placeholder="Your email address" autocomplete="email"><button class="btn solid" type="submit">Send me the kit</button></form>
      <p class="optnote">Free. Instant access. No spam, unsubscribe anytime.</p></div>
    </div>
    <script src="/assets/optin.js"></script>
"""

import hashlib as _hl
def _ver(m):
    f = os.path.join(ROOT, m.group(2).lstrip("/"))
    try: v = _hl.md5(open(f, "rb").read()).hexdigest()[:8]
    except OSError: return m.group(0)
    return m.group(1) + m.group(2) + "?v=" + v + m.group(3)
def bust(s):
    return re.sub(r'((?:src|href)=")(/(?:assets|kitchen)/[^"?]+\.(?:js|css))(")', _ver, s)
def write(path, s):
    s = bust(s)
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
ab = head("About Bryan Dourado | Salvage Health", "Bryan Dourado, founder of Salvage Health and author of Fitness Without the Fear: from poverty, addiction and over 80 pounds lost to rebuilding his life. Second chances exist.", "/about/", f'<script type="application/ld+json">{json.dumps(ld)}</script>\n') + topbar("about") + f"""  <main>
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
FILTERS = [("all", "All"), ("new", "New"), ("men", "Men"), ("women", "Women"), ("accessories", "Accessories")]
items = sorted([m for m in MERCH2 if m[0] in LIVE], key=lambda m: SHOP_ORDER.index(m[0]) if m[0] in SHOP_ORDER else 99)
counts = {k: 0 for k, _ in FILTERS}
cards = ""
for slug, name, cat, d, art in items:
    price, url, ph = LIVE[slug]
    groups, is_new = SHOP_GROUPS.get(slug, ("accessories", False))
    tags = groups + (" new" if is_new else "")
    counts["all"] += 1
    for t in tags.split(): counts[t] = counts.get(t, 0) + 1
    n = html.escape(name)
    badge = '<span class="stag">New</span>' if is_new else ""
    alt = f'<img class="alt" src="/merch/img/{ph[1]}.jpg" alt="" loading="lazy" width="900" height="900">' if len(ph) > 1 else ""
    cards += f"""      <article class="scard" data-tags="{tags}">
        <a class="simg" href="{url}" target="_blank" rel="noopener" aria-label="{n}, {price}, on the Salvage Health store"><img src="/merch/img/{ph[0]}.jpg" alt="{n}" loading="lazy" width="900" height="900">{alt}{badge}</a>
        <div class="stx">
          <span class="scat">{html.escape(cat)}</span>
          <h2><a href="{url}" target="_blank" rel="noopener">{n}</a></h2>
          <p class="sdesc">{html.escape(d)}</p>
          <div class="sbuy"><b>{price}</b><a class="sbtn" href="{url}" target="_blank" rel="noopener">Buy now</a></div>
        </div>
      </article>
"""
chips = "".join(f'<button type="button" class="schip" data-f="{k}" aria-pressed="{"true" if k == "all" else "false"}">{lbl}<span>{counts.get(k, 0)}</span></button>' for k, lbl in FILTERS)
mp = head("Merch | Salvage Health", "Salvage Health gear for men and women: tees, tanks, hoodies, hats, bags and gym accessories. Built from what's left.", "/merch/") + topbar("merch") + f"""  <main class="shop" style="--sbtop:var(--lb)">
    <div class="shead">
      <p class="eyebrow">Merch</p>
      <h1 class="disp">Wear the <em>reminder.</em></h1>
      <p>Gear for people building from what's left. Printed to order and shipped in 5 to 11 days.</p>
    </div>
    <div class="sbar" role="toolbar" aria-label="Filter products">{chips}</div>
    <p class="scount" aria-live="polite"><span id="sn">{counts["all"]}</span> products</p>
    <div class="sgrid" id="sgrid">
{cards}    </div>
    <div class="drops">
      <div><p class="eyebrow">First dibs</p><h2 class="disp">New drops go to <em>the list first.</em></h2><p>Join free and you'll hear about new gear before anyone else. You also get the Day One Starter Kit and every recipe in the Kitchen.</p></div>
      <div><form class="optin" name="starter-kit" method="POST" action="/start/kit/" data-stay><input type="hidden" name="form-name" value="starter-kit"><input type="hidden" name="source" value="merch-drops"><p class="hp" hidden><label>Company <input name="company" tabindex="-1" autocomplete="off"></label></p><label class="sr" for="em-drops">Email address</label><input id="em-drops" type="email" name="email" required placeholder="Your email address" autocomplete="email"><button class="btn solid" type="submit">Join the list</button></form><p class="optnote" id="drops-note">Free. No spam, unsubscribe anytime.</p></div>
    </div>
    <script src="/assets/optin.js"></script>
    <script>(function(){{function done(){{var d=document.querySelector('.drops');if(d)d.innerHTML='<div><p class="eyebrow">You\\'re on the list</p><h2 class="disp">Thanks. <em>You\\'re in.</em></h2><p>Your free Starter Kit is ready whenever you are.</p></div><div><a class="btn solid" href="/start/kit/">Open my Starter Kit</a></div>';}}document.addEventListener('sh:joined',done);if(window.SH_MEMBER&&SH_MEMBER.is())done();}})();</script>
    <div class="snote">
      <p>Every piece is printed to order and shipped by our store partner, Fourthwall. Questions about an order? Email <a href="mailto:hello@salvagehealth.com">hello@salvagehealth.com</a>.</p>
      <p><a href="{SHOP}" target="_blank" rel="noopener">Browse the full store</a> · <a href="{IG}" target="_blank" rel="noopener">Follow for new drops</a></p>
    </div>
  </main>
  <script>
  (function(){{
    var chips=[].slice.call(document.querySelectorAll('.schip')),cards=[].slice.call(document.querySelectorAll('.scard')),n=document.getElementById('sn');
    var ok=['all','new','men','women','accessories'];
    function apply(f,push){{
      if(ok.indexOf(f)<0)f='all';
      var c=0;cards.forEach(function(el){{var show=f==='all'||(' '+el.dataset.tags+' ').indexOf(' '+f+' ')>-1;el.hidden=!show;if(show)c++;}});
      chips.forEach(function(b){{var on=b.dataset.f===f;b.setAttribute('aria-pressed',on);if(on&&b.scrollIntoView&&push)b.scrollIntoView({{block:'nearest',inline:'center'}});}});
      n.textContent=c;
      if(push)history.replaceState(null,'',f==='all'?location.pathname:'#'+f);
    }}
    chips.forEach(function(b){{b.addEventListener('click',function(){{apply(b.dataset.f,true);var g=document.querySelector('.sbar');if(g.getBoundingClientRect().top<0)window.scrollTo({{top:g.offsetTop-4}});}});}});
    apply(location.hash.slice(1),false);
    window.addEventListener('hashchange',function(){{apply(location.hash.slice(1),false);}});
  }})();
  </script>
""" + FOOT
write("/merch/", mp)


# kitchen (preview: noindex, not in nav until real recipes are in)
KCSS = """<style>
.kwrap{padding-top:28px}
.khead h1{font-size:clamp(30px,6vw,52px)}
.khead p{color:var(--dim);margin:10px 0 0;max-width:52ch;font-size:16px}
.ktabs{display:grid;grid-template-columns:1fr 1fr;gap:4px;padding:4px;margin:20px 0 0;background:var(--raised);border:1px solid var(--rule);border-radius:12px;max-width:460px}
.ktab{min-height:44px;white-space:nowrap;padding:0 8px;border:0;border-radius:9px;background:transparent;color:var(--dim);font:700 14.5px Inter,sans-serif;cursor:pointer}
.ktab.on{background:var(--fg);color:#141413}
.ktab span:not(:empty){display:inline-block;min-width:20px;margin-left:6px;padding:1px 6px;border-radius:99px;background:var(--rust);color:#FAF9F5;font-size:12px}
.kbar{position:sticky;top:var(--lb);z-index:5;background:var(--bg);margin:14px -20px 0;padding:12px 20px 10px;border-bottom:1px solid var(--rule)}
.kin{width:100%;min-height:46px;padding:10px 14px 10px 40px;border-radius:10px;border:1px solid var(--rule);background:var(--raised) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='none' stroke='%239C9A93' stroke-width='2'%3E%3Ccircle cx='8' cy='8' r='6'/%3E%3Cpath d='M12.5 12.5L17 17'/%3E%3C/svg%3E") no-repeat 13px center;color:var(--fg);font:inherit;font-size:16px}
.kin:focus{outline:2px solid var(--rust-text);outline-offset:1px}
.kfil{display:flex;gap:8px;overflow-x:auto;margin:10px -20px 0;padding:0 20px 2px;scroll-padding-inline:20px;scrollbar-width:none}
.kfil::after{content:'';flex:0 0 12px}
.kfil::-webkit-scrollbar{display:none}
.kf{flex:0 0 auto;min-height:36px;padding:6px 13px;border-radius:99px;border:1px solid var(--rule);background:transparent;color:var(--dim);font:600 13.5px Inter,sans-serif;cursor:pointer;white-space:nowrap}
.kf span{color:var(--faint);font-weight:500;margin-left:2px}
.kf.on{background:var(--rust);border-color:var(--rust);color:#FAF9F5}
.kf.on span{color:#F3D3C4}
#sug{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px}
#sug:empty{display:none}
#sug button{min-height:38px;padding:6px 13px;border-radius:99px;border:1px solid var(--rust);background:rgba(190,81,38,.14);color:var(--fg);font:600 14px Inter,sans-serif;cursor:pointer}
#sug .none{font-size:14px;color:var(--faint)}
.kpicked{display:flex;gap:6px;margin:8px -20px 0;padding:0 20px 2px;overflow-x:auto;scrollbar-width:none}
.kpicked::-webkit-scrollbar{display:none}
.kpicked::after{content:'';flex:0 0 12px}
.kpicked:empty{display:none}
.pk{flex:0 0 auto;white-space:nowrap;min-height:32px;padding:3px 10px 3px 12px;border-radius:99px;border:0;background:var(--rust);color:#FAF9F5;font:600 13.5px Inter,sans-serif;cursor:pointer}
.pk span{opacity:.8;margin-left:2px}
.pkclear{flex:0 0 auto;white-space:nowrap;min-height:32px;padding:3px 12px;border:1px solid var(--rust);border-radius:99px;background:none;color:var(--rust-text);font:700 13.5px Inter,sans-serif;cursor:pointer}
.kdrawer{margin-top:10px}
.kdrawer > summary{list-style:none;cursor:pointer;display:inline-flex;align-items:center;gap:6px;min-height:36px;font-size:14px;font-weight:700;color:var(--rust-text)}
.kdrawer > summary::-webkit-details-marker{display:none}
.kdrawer > summary::after{content:"+";font-size:18px;font-weight:400}
.kdrawer[open] > summary::after{content:"\\2212"}
.kdrawer[open]{padding-bottom:10px;border-bottom:1px solid var(--rule)}
.klbl{display:block;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--faint);margin:12px 0 8px}
.skchips{display:flex;flex-wrap:wrap;gap:6px}
.chip{min-height:36px;padding:6px 12px;border-radius:99px;border:1px solid var(--rule);background:transparent;color:var(--dim);font:600 13.5px Inter,sans-serif;cursor:pointer}
.chip.on{background:var(--rust);border-color:var(--rust);color:#FAF9F5}
#kall details{border-top:1px solid var(--rule)}
#kall details:last-child{border-bottom:1px solid var(--rule)}
#kall summary{list-style:none;cursor:pointer;padding:11px 28px 11px 0;position:relative;font-weight:600;font-size:14.5px}
#kall summary::-webkit-details-marker{display:none}
#kall summary::after{content:"+";position:absolute;right:4px;top:7px;font-size:20px;color:var(--faint);font-weight:400}
#kall details[open] summary::after{content:"\\2212"}
#kall summary span{display:inline-block;margin-left:6px;padding:0 7px;border-radius:99px;background:var(--rust);color:#FAF9F5;font-size:12px}
#kall .skchips{padding:0 0 12px}
.kstaple{font-size:12.5px;color:var(--faint);margin:10px 0 0}
#results{padding-top:18px}
.kh{display:flex;align-items:baseline;justify-content:space-between;gap:12px;margin:8px 0 12px}
.kh h2{font-size:clamp(22px,3.2vw,30px);margin:0}
.kh span{font-size:13px;color:var(--faint);white-space:nowrap}
.kfeat{margin:0 0 26px}
.kfeat .kh{align-items:flex-end}
.ksub{margin:4px 0 0;font-size:14px;color:var(--dim)}
.kswipe{color:var(--rust-text);font-weight:700;white-space:nowrap}
@media (pointer:fine) and (min-width:761px){.kswipe{display:none}}
.kall:not(.kc){flex:0 0 auto;min-height:38px;padding:7px 15px;border-radius:99px;border:1.5px solid var(--rust);background:transparent;color:var(--fg);font:700 13.5px Inter,sans-serif;cursor:pointer;white-space:nowrap}
.kall:not(.kc):hover{background:var(--rust)}
.kend .kimg{background:linear-gradient(150deg,#C25428,#8E3A18);border-color:transparent}
.kendin{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;color:#FAF9F5;text-align:center}
.kendin b{font-family:Oswald,'Arial Narrow',Impact,sans-serif;font-size:52px;line-height:1}
.kendin span{font-family:Oswald,'Arial Narrow',Impact,sans-serif;text-transform:uppercase;letter-spacing:1px;font-size:16px}
.kendin i{font-style:normal;font-weight:700;font-size:13.5px;margin-top:8px;border-bottom:1.5px solid rgba(250,249,245,.7)}
.kend:hover .kimg{filter:brightness(1.08)}
@media (max-width:520px){.kall:not(.kc){display:none}}
.krail{display:flex;gap:12px;overflow-x:auto;scroll-snap-type:x mandatory;scroll-padding-inline:20px;margin:0 -20px;padding:0 20px 6px;scrollbar-width:none}
.krail::after{content:'';flex:0 0 8px}
.krail .kc{flex:0 0 min(62%,250px)}
.krail{-webkit-mask-image:linear-gradient(90deg,#000 calc(100% - 56px),transparent);mask-image:linear-gradient(90deg,#000 calc(100% - 56px),transparent)}
.krail.atend{-webkit-mask-image:none;mask-image:none}
.krail::-webkit-scrollbar{display:none}
.krail .kc{scroll-snap-align:start}
.kgrid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px 14px}
.kc{display:flex;flex-direction:column;gap:4px;min-width:0;padding:0;border:0;background:none;color:var(--fg);text-align:left;font:inherit;cursor:pointer}
.kimg{position:relative;display:block;aspect-ratio:4/3;border-radius:12px;overflow:hidden;background:var(--raised);border:1px solid var(--rule)}
.kimg img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .3s}
.kc:hover .kimg img{transform:scale(1.04)}
.kph{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;padding:10px 12px 12px;text-align:center;background:radial-gradient(ellipse at 50% 38%,#2A2622,#1B1A17 72%)}
.kph .kpl{width:56%;max-width:190px;height:auto;margin:4px 0 6px}
.kph b{font-family:Oswald,'Arial Narrow',Impact,sans-serif;font-weight:700;text-transform:uppercase;letter-spacing:.6px;font-size:clamp(12px,1.35vw,15px);line-height:1.15;color:#D9D6CC}
.kph i{font-style:normal;font-size:9.5px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#BE5126}
@media (max-width:480px){.kph{padding-top:30px}.kph .kpl{width:40%;margin:0 0 4px}.kph b{font-size:12px}.kph i{font-size:8.5px;letter-spacing:1.5px}}
.kb{position:absolute;top:8px;left:8px;padding:3px 8px;border-radius:99px;background:rgba(20,20,19,.82);color:#FAF9F5;font-size:10.5px;font-weight:700;letter-spacing:.8px;text-transform:uppercase}
.kb.by{background:var(--rust)}
.klk,.kfree{position:absolute;top:8px;right:8px;display:inline-flex;align-items:center;justify-content:center;border-radius:99px;font-size:10.5px;font-weight:700;letter-spacing:.8px;text-transform:uppercase}
.klk{width:26px;height:26px;background:rgba(20,20,19,.82);color:#FAF9F5}
.kfree{padding:3px 8px;background:#FAF9F5;color:#141413}
.klock{position:relative;margin-top:20px}
.kl-prev{filter:blur(4px);opacity:.55;pointer-events:none;user-select:none;margin:0}
.kl-box{position:relative;margin-top:-90px;background:linear-gradient(180deg,rgba(29,28,26,.6),#1d1c1a 70px);border:1px solid var(--rust);border-radius:16px;padding:22px 20px 20px}
.kl-ico{display:inline-flex;width:34px;height:34px;align-items:center;justify-content:center;border-radius:99px;background:var(--rust);color:#FAF9F5;margin-bottom:10px}
.kl-box b{display:block;font-family:Oswald,'Arial Narrow',Impact,sans-serif;text-transform:uppercase;font-size:22px;letter-spacing:.3px;line-height:1.15}
.kl-box p{color:var(--dim);font-size:15px;margin:8px 0 0}
.kl-box .optin{max-width:none}
.kt{font-weight:700;font-size:15px;line-height:1.3;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;margin-top:4px}
.km{font-size:12.5px;color:var(--faint);display:flex;flex-wrap:wrap;gap:0 8px}
.km > span{white-space:nowrap}
.km b{color:var(--dim);font-weight:700}
.kst{font-size:12.5px;font-weight:700;color:var(--rust-text);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.kst.ok{color:#7FBF7F}
.lvd{display:inline-flex;gap:2px;vertical-align:middle;margin-left:6px}
.lvd i{width:6px;height:6px;border-radius:99px;background:rgba(250,249,245,.18)}
.lvd i.on{background:var(--rust-text)}
.kplan{display:flex;align-items:center;justify-content:space-between;gap:12px;margin:0 0 12px;padding:12px 14px;border-radius:12px;border:1px solid var(--rust);background:rgba(190,81,38,.1);text-decoration:none;color:var(--fg)}
.kplan small{display:block;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--rust-text)}
.kplan b{font-size:16px}
.kplan em{font-style:normal;font-weight:700;color:var(--rust-text);white-space:nowrap}
.kplan.none span{font-size:14.5px;color:var(--dim)}.kplan.none b{font-size:14.5px;color:var(--fg)}
.klv{display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin:0 0 16px}
.klv span{font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--faint);margin-right:4px}
.klv button{min-height:32px;padding:4px 11px;border-radius:99px;border:1px solid var(--rule);background:transparent;color:var(--dim);font:600 13px Inter,sans-serif;cursor:pointer}
.klv button[aria-pressed=true]{border-color:var(--fg);color:var(--fg)}
.dday{display:grid;gap:7px;margin-top:14px;padding:14px;border-radius:12px;background:rgba(190,81,38,.1);border:1px solid rgba(190,81,38,.5)}
.dday b{font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:var(--rust-text)}
.dday span{display:grid;grid-template-columns:70px 1fr 42px;align-items:center;gap:10px;font-size:13px;color:var(--dim)}
.dday i{font-style:normal}
.dday s{display:block;height:8px;border-radius:99px;background:rgba(250,249,245,.1);overflow:hidden;text-decoration:none}
.dday u{display:block;height:100%;background:var(--rust);text-decoration:none}
.dday em{font-style:normal;text-align:right;font-weight:700;color:var(--fg)}
.dlv{margin-top:12px;padding:12px 14px;border-radius:12px;border:1px solid var(--rule)}
.dlv span{font-size:12.5px;color:var(--faint)}
.dlv b{display:block;font-size:15px;margin-top:2px}
.dlv p{margin:2px 0 0;font-size:13.5px;color:var(--dim)}
.kmore{display:block;width:100%;max-width:360px;margin:22px auto 8px;min-height:48px;border-radius:10px;border:1px solid var(--rule);background:var(--raised);color:var(--fg);font:700 15px Inter,sans-serif;cursor:pointer}
.kmore span{color:var(--faint);font-weight:500;margin-left:6px}
.kmore:hover{border-color:var(--rust)}
.kempty{color:var(--dim);padding:18px 0}
.kbuy{margin:6px 0 22px;padding:12px 14px;border:1px solid var(--rust);border-radius:10px;background:rgba(190,81,38,.1);font-size:14.5px;color:var(--dim)}
.kbuy b{color:var(--fg)}.kbuy em{font-style:normal;color:var(--rust-text);font-weight:700}
.skmail{display:flex;gap:16px;align-items:center;flex-wrap:wrap;margin-top:40px;background:var(--raised);border:1px solid var(--rule);border-radius:14px;padding:20px}
.skmail div{flex:1;min-width:220px}
.skmail h2{font-size:22px;margin:0 0 4px}
.skmail p{margin:0;color:var(--dim);font-size:15px}
.skmail form{display:flex;gap:8px;flex-wrap:wrap;flex:1;min-width:240px}
.skmail input{flex:1;min-width:160px;min-height:46px;padding:10px 14px;border-radius:10px;border:1px solid var(--rule);background:var(--bg);color:var(--fg);font:inherit}
html.noscroll{overflow:hidden}
dialog#dlg{width:min(720px,100vw);max-width:100vw;max-height:calc(100dvh - 40px);margin:auto;padding:0;border:1px solid var(--rule);border-radius:16px;background:var(--raised);color:var(--fg);overflow:hidden}
dialog#dlg::backdrop{background:rgba(0,0,0,.7)}
#dlg-body{padding:0 0 28px;overflow:auto;max-height:calc(100dvh - 40px)}
#dlg-body > *:not(.dgal){margin-left:22px;margin-right:22px}
.dgal{position:relative;margin:0 0 4px}
.dpics{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none}
.dpics::-webkit-scrollbar{display:none}
.dpic{position:relative;flex:0 0 100%;height:min(64vh,620px);overflow:hidden;scroll-snap-align:start;background:#1A1917}
.dpic::before{content:'';position:absolute;inset:-30px;background:var(--bg) center/cover;filter:blur(28px) brightness(.55)}
.dpic img{position:relative;width:100%;height:100%;object-fit:contain;display:block}
@media (max-width:760px){.dpic{height:auto;aspect-ratio:1/1}}
.dnav{position:absolute;top:50%;transform:translateY(-50%);width:40px;height:40px;border-radius:999px;border:0;background:rgba(20,20,19,.7);color:#FAF9F5;font-size:26px;line-height:1;cursor:pointer}
.dnav.prev{left:10px}.dnav.next{right:10px}
.dcount{position:absolute;bottom:10px;right:10px;background:rgba(20,20,19,.75);color:#FAF9F5;font-size:12px;font-weight:700;padding:3px 9px;border-radius:999px}
.dhead{padding-top:22px}
.dhead .eyebrow{margin-bottom:8px;padding-right:44px}
#dlg-body h2{font-size:clamp(26px,5vw,36px);margin:0}
.dmeta{display:flex;flex-wrap:wrap;gap:6px;margin:12px 0 0}
.dmeta span{padding:3px 10px;border-radius:99px;border:1px solid var(--rule);font-size:12.5px;font-weight:600;color:var(--dim)}
.rb{color:var(--dim);font-size:15px;line-height:1.55;margin:12px 0 0}
.mac{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin-top:16px}
.mac span{display:flex;flex-direction:column;align-items:center;background:var(--bg);border-radius:10px;padding:10px 4px;font-size:10.5px;color:var(--faint);text-transform:uppercase;letter-spacing:1px}
.mac em{font-style:normal;font-family:Oswald,'Arial Narrow',Impact,sans-serif;font-size:24px;color:var(--fg);letter-spacing:0}
.fine2{font-size:12px;color:var(--faint);margin:8px 0 0}
.dtabs{position:sticky;top:0;z-index:2;display:grid;grid-template-columns:1fr 1fr;gap:4px;padding:4px;margin-top:20px!important;background:var(--bg);border:1px solid var(--rule);border-radius:12px}
.dtab{min-height:42px;border:0;border-radius:9px;background:transparent;color:var(--dim);font:700 14.5px Inter,sans-serif;cursor:pointer}
.dtab span{color:var(--faint);font-weight:500;margin-left:4px}
.dtab.on{background:var(--fg);color:#141413}
.dtab.on span{color:#6B6960}
.dpane{padding-top:12px}
.ing{list-style:none;padding:0;margin:0}
.ing li{display:flex;gap:10px;align-items:baseline;padding:10px 0;border-bottom:1px solid var(--rule);font-size:15.5px;color:#E6E4DD}
.ing .lab{flex-shrink:0;width:62px;font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase}
.ing .lab:empty{display:none}
.ing .have .lab{color:#7FBF7F}.ing .miss .lab{color:var(--rust-text)}.ing .opt .lab,.ing .stp .lab{color:var(--faint)}
.ing .alt{color:var(--faint);font-size:13.5px}
.dgo{display:block;width:100%;margin:18px 0 0;min-height:50px;border:0;border-radius:10px;background:var(--rust);color:#FAF9F5;font:700 16px Inter,sans-serif;cursor:pointer}
.stepsl{padding-left:22px;margin:0;color:#E6E4DD}
.stepsl li{margin:0 0 12px}
.stepsl.det{padding-left:0;list-style:none;counter-reset:st;display:grid;gap:10px;margin-top:10px}
.stepsl.det li{counter-increment:st;position:relative;margin:0;padding:14px 14px 14px 52px;background:var(--bg);border:1px solid var(--rule);border-radius:10px;cursor:pointer;line-height:1.55}
.stepsl.det li::before{content:counter(st);position:absolute;left:14px;top:13px;width:26px;height:26px;border-radius:99px;background:var(--rust);color:#FAF9F5;font:700 13px/26px Inter,sans-serif;text-align:center}
.stepsl.det li b{display:block;font-family:Oswald,'Arial Narrow',Impact,sans-serif;text-transform:uppercase;letter-spacing:.5px;font-size:16px;margin-bottom:3px;color:var(--fg)}
.stepsl.det li span{color:#E6E4DD;font-size:15px}
.stepsl.det li.done{opacity:.45}
.stepsl.det li.done::before{content:"✓";background:#5d8f5d}
.stepsl.det li.done span{text-decoration:line-through}
.ptip{margin-top:16px!important;padding:14px 16px;border-left:3px solid var(--rust);background:rgba(190,81,38,.1);border-radius:0 10px 10px 0;display:grid;gap:4px}
.ptip b{font-size:11px;letter-spacing:2px;text-transform:uppercase;color:var(--rust-text)}
.ptip span{color:#E6E4DD;font-size:15px}
#dlg-close{position:absolute;top:12px;right:12px;z-index:3;width:40px;height:40px;border-radius:999px;border:0;background:rgba(20,20,19,.8);color:#FAF9F5;font-size:24px;line-height:1;cursor:pointer}
@media (max-width:980px){.kgrid{grid-template-columns:repeat(3,minmax(0,1fr))}}
@media (max-width:700px){.kgrid{grid-template-columns:repeat(2,minmax(0,1fr));gap:18px 12px}.kwrap{padding-top:18px}}
@media (max-width:600px){
  dialog#dlg{width:100vw;height:100dvh;max-height:100dvh;border-radius:0;border:0;margin:0}
  #dlg-body{max-height:100dvh;height:100dvh}
  #dlg-body > *:not(.dgal){margin-left:18px;margin-right:18px}
  .kt{font-size:14.5px}
}
@media (prefers-reduced-motion:reduce){.kimg img{transition:none}}
</style>
"""
kp = head("Salvage Kitchen | Salvage Health", "Macro-friendly, high-protein recipes. Browse by goal, or tell it what's in your fridge and get recipes you can cook tonight.", "/kitchen/", KCSS) + topbar("kitchen") + """  <main class="kwrap">
    <div class="khead">
      <p class="eyebrow">Salvage Kitchen</p>
      <h1 class="disp">Cook from <em>what's left.</em></h1>
      <p><span id="ktotal">65</span> macro-friendly recipes with real step-by-steps. Browse, or tell it what's in your fridge.</p>
      <div class="ktabs" role="tablist" aria-label="Kitchen mode">
        <button type="button" class="ktab on" data-mode="browse" role="tab" aria-selected="true">Browse recipes</button>
        <button type="button" class="ktab" data-mode="fridge" role="tab" aria-selected="false">My fridge<span id="kfc"></span></button>
      </div>
    </div>
    <div class="kbar">
      <div id="kbrowse"><label class="sr" for="ks">Search recipes</label><input id="ks" class="kin" type="search" placeholder="Search recipes or ingredients" autocomplete="off"></div>
      <div id="kfridge" hidden>
        <label class="sr" for="q">Add an ingredient</label><input id="q" class="kin" type="text" placeholder="Add what you have, like chicken or rice" autocomplete="off">
        <div id="sug" aria-live="polite"></div>
        <div class="kpicked" id="kpicked"></div>
      </div>
      <div class="kfil" id="kfil" role="group" aria-label="Filter recipes"></div>
    </div>
    <div id="kfridge2" hidden>
        <details class="kdrawer"><summary>Pick from a list</summary>
          <span class="klbl">Quick add</span><div class="skchips" id="kcommon"></div>
          <span class="klbl">All ingredients</span><div id="kall"></div>
          <p class="kstaple">Always assumed: <span id="staples"></span>.</p>
        </details>
    </div>
    <div id="results" aria-live="polite"></div>
    <section class="skmail" aria-label="Get recipes by email">
      <div><h2 class="disp">New recipes <em>weekly</em></h2><p>One fridge-friendly, high-protein recipe in your inbox every week.</p></div>
      <form onsubmit="event.preventDefault();"><input type="email" placeholder="Your email" aria-label="Email" disabled><button class="btn solid" type="submit" disabled>Coming soon</button></form>
    </section>
    <p class="fine">Macros are estimates per serving based on USDA and package label data and include optional ingredients. Cook chicken and ground poultry to 165°F (74°C). We cook with avocado oil; swap in any oil if you have an allergy.</p>
  </main>
  <dialog id="dlg" aria-label="Recipe"><button id="dlg-close" type="button" aria-label="Close">&times;</button><div id="dlg-body"></div></dialog>
  <script src="/kitchen/recipes.js"></script>
  <script src="/kitchen/steps.js"></script>
  <script src="/assets/goals.js"></script>
  <script src="/assets/optin.js"></script>
  <script src="/kitchen/app.js"></script>
  <script src="/assets/rail.js"></script>
""" + FOOT
write("/kitchen/", kp)

exec(open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "home.py")).read())
exec(open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "bookpage.py")).read())
exec(open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "coaching.py")).read())  # hidden page, not in sitemap
exec(open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "members.py")).read())  # gated by netlify/edge-functions/members

# sitemap + robots
urls = ["/", "/book", "/start/", "/kitchen/", "/about/", "/companion/", "/articles/", "/merch/", "/faq/"] + [f"/articles/{a['slug']}/" for a in ARTICLES]
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
