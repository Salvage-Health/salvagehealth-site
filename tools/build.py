import os, json, html, re, sys
sys.path.insert(0, os.path.dirname(__file__))
from content import ARTICLES, FAQ, DATE_ISO, DATE_TXT
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
      {a('/articles/','Articles','articles')}
      {a('/faq/','FAQ','faq')}
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
        <a href="/articles/">Articles</a>
        <a href="/faq/">FAQ</a>
        <a href="/book">Free companion app</a>
        <a href="{SPOTIFY}" target="_blank" rel="noopener">Audiobook</a>
        <a href="{KINDLE}" target="_blank" rel="noopener">Kindle</a>
        <a href="{IG}" target="_blank" rel="noopener">Instagram</a>
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
      <p>Don't see yours? Send Bryan a message on <a href="{IG}" target="_blank" rel="noopener">Instagram</a>.</p>
    </div>
    <div class="faq">
{body}    </div>
  </main>
""" + FOOT
write("/faq/", faq)

# sitemap + robots
urls = ["/", "/book", "/articles/", "/faq/"] + [f"/articles/{a['slug']}/" for a in ARTICLES]
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
