# One page per Kitchen recipe at /kitchen/<id>/ so Google can find each recipe on its own.
# Executed from build.py, so head(), topbar(), FOOT, write(), waitlist(), html, json, re, os, SITE, ROOT are in scope.
# Free recipes show everything. Locked recipes show photo, macros and ingredients; the steps unlock with the
# same free email as the Kitchen (assets/gate.js), and their schema leaves out the instructions to match.
import subprocess as _sp2, json as _json2, re as _re2

_RP = _json2.loads(_sp2.check_output(["node", "-e", """
global.window={};require('./kitchen/recipes.js');require('./kitchen/steps.js');const S=window.SK,D=window.SK_STEPS||{};
const mac=r=>{let t={k:0,p:0,c:0,f:0};r.items.forEach(it=>{const f=S.FOODS[it.food];t.k+=f.kcal*it.g/100;t.p+=f.p*it.g/100;t.c+=f.c*it.g/100;t.f+=f.f*it.g/100});const s=r.serves;return {kcal:Math.round(t.k/s/5)*5,p:Math.round(t.p/s),c:Math.round(t.c/s),f:Math.round(t.f/s)}};
console.log(JSON.stringify(S.RECIPES.map(r=>({id:r.id,name:r.name,blurb:r.blurb||'',cat:r.cat,tag:r.tag||'',lvl:r.lvl||1,serves:r.serves,mins:r.mins,by:!!r.by,batch:!!r.batch,keto:!!r.keto,veg:!!r.veg,
  img:r.photos?r.photos[0]:null,items:r.items.map(i=>({t:i.txt,o:!!i.optional,s:!!i.staple})),
  steps:D[r.id]?D[r.id].steps.map(s=>({t:s.t,d:s.d})):(r.steps||[]).map(s=>({t:'',d:s})),tip:D[r.id]&&D[r.id].tip||'',m:mac(r)}))))
"""], cwd=ROOT))
_FREE = _re2.findall(r"'([a-z0-9-]+)'", _re2.search(r"var FREE = \[(.*?)\];", open(os.path.join(ROOT, "kitchen/app.js")).read(), _re2.S).group(1))

def _dots(l):
    return '<span class="lvd" title="Level %d of 5">' % l + "".join('<i class="on"></i>' if i <= l else "<i></i>" for i in range(1, 6)) + "</span>"

RECIPE_URLS = []
for r in _RP:
    path = f"/kitchen/{r['id']}/"
    RECIPE_URLS.append(path)
    free = r["id"] in _FREE
    m = r["m"]
    e = html.escape
    desc = (r["blurb"] + " " if r["blurb"] else "") + f"{m['kcal']} calories and {m['p']} g protein per serving."
    title = f"{r['name']}: High-Protein Recipe ({m['p']} g Protein) | Salvage Kitchen"
    ld = {"@context": "https://schema.org", "@type": "Recipe", "name": r["name"], "description": r["blurb"] or desc,
          "author": {"@type": "Person", "name": "Bryan Dourado", "url": SITE + "/about/"},
          "recipeYield": f"{r['serves']} servings", "totalTime": f"PT{r['mins']}M", "recipeCategory": r["cat"],
          "keywords": ", ".join(k for k in ["high protein", "macro friendly", "meal prep" if r["batch"] else "", "keto" if r["keto"] else "", "vegetarian" if r["veg"] else ""] if k),
          "recipeIngredient": [i["t"] for i in r["items"]],
          "nutrition": {"@type": "NutritionInformation", "servingSize": "1 serving", "calories": f"{m['kcal']} calories",
                        "proteinContent": f"{m['p']} g", "carbohydrateContent": f"{m['c']} g", "fatContent": f"{m['f']} g"}}
    if r["img"]: ld["image"] = [SITE + r["img"]]
    if free: ld["recipeInstructions"] = [{"@type": "HowToStep", "name": s["t"] or None, "text": s["d"]} if s["t"] else {"@type": "HowToStep", "text": s["d"]} for s in r["steps"]]
    extra = f'<meta property="og:image:alt" content="{e(r["name"])}">\n<script type="application/ld+json">{json.dumps(ld)}</script>\n'

    pic = f'<img src="{r["img"]}" alt="{e(r["name"])}" width="1000" height="1000" fetchpriority="high">' if r["img"] else ""
    chips = "".join(f"<span>{c}</span>" for c in [f"Serves {r['serves']}", f"{r['mins']} min", f"Level {r['lvl']} {_dots(r['lvl'])}"] + (["Bryan's recipe"] if r["by"] else []) + (["Meal prep"] if r["batch"] else []))
    ing = "".join(f'<li>{e(i["t"])}{" <em>(optional)</em>" if i["o"] else ""}</li>' for i in r["items"])
    stp = "".join(f'<li>{"<b>" + e(s["t"]) + "</b>" if s["t"] else ""}<span>{e(s["d"])}</span></li>' for s in r["steps"])
    tip = f'<div class="rp-tip"><b>Chef\'s tip</b><span>{e(r["tip"])}</span></div>' if r["tip"] else ""
    steps_html = f'<h2 class="disp">How to make it</h2><ol class="rp-steps">{stp}</ol>{tip}'
    if not free:
        steps_html = f'''<div class="gate rp-gate" data-gate data-source="recipe-page" data-button="Unlock the steps" hidden>
        <p class="eyebrow">Free with your email</p>
        <h2 class="disp">Get the <em>step-by-step.</em></h2>
        <p class="lead">One email unlocks every recipe in the Salvage Kitchen, plus your free Day One Starter Kit.</p>
        <div class="gate-form"></div>
      </div>
      <div data-gated>{steps_html}</div>'''
    rel = [x for x in _RP if x["cat"] == r["cat"] and x["id"] != r["id"] and x["img"]][:3]
    relh = "".join(f'<a href="/kitchen/{x["id"]}/"><img src="{x["img"]}" alt="" width="300" height="300" loading="lazy"><b>{e(x["name"])}</b><small>{x["m"]["kcal"]} cal · {x["m"]["p"]} g protein</small></a>' for x in rel)

    page = head(title, desc, path, extra, "article", r["img"]) + topbar("kitchen") + f"""  <main class="rp">
    <nav class="rp-crumb" aria-label="Breadcrumb"><a href="/kitchen/">Salvage Kitchen</a> <span>/</span> {e(r['cat'])}</nav>
    <article>
      <div class="rp-hero">
        <div class="rp-pic">{pic}</div>
        <div class="rp-top">
          <p class="eyebrow">{e(r['cat'])}{' · ' + e(r['tag']) if r['tag'] else ''}</p>
          <h1 class="disp">{e(r['name'])}</h1>
          <p class="lead">{e(r['blurb'])}</p>
          <div class="rp-macros"><span><b>{m['kcal']}</b>calories</span><span><b>{m['p']}g</b>protein</span><span><b>{m['c']}g</b>carbs</span><span><b>{m['f']}g</b>fat</span></div>
          <p class="rp-per">Per serving. Estimates from USDA and label data, optional ingredients included.</p>
          <div class="rp-chips">{chips}</div>
          <a class="btn line" href="/kitchen/#{r['id']}">Open in the Kitchen</a>
        </div>
      </div>
      <div class="rp-body">
        <section><h2 class="disp">Ingredients</h2><ul class="rp-ing">{ing}</ul></section>
        <section>{steps_html}</section>
      </div>
    </article>
    {waitlist("recipe")}
    {'<section class="rp-rel"><h2 class="disp">More ' + e(r["cat"].lower()) + ' recipes</h2><div>' + relh + '</div></section>' if relh else ''}
    <p class="fine">Cook chicken and ground poultry to 165°F (74°C). We cook with avocado oil; swap in any oil if you have an allergy.</p>
  </main>
  <script src="/assets/optin.js"></script>
  <script src="/assets/gate.js"></script>
  <script src="/assets/waitlist.js"></script>
""" + FOOT
    write(path, page)

# A plain list of every recipe page on the Kitchen page, so search engines can follow the links.
KINDEX = '<details class="kindex"><summary>All ' + str(len(_RP)) + ' recipes A to Z</summary><ul>' + "".join(
    f'<li><a href="/kitchen/{r["id"]}/">{html.escape(r["name"])}</a></li>' for r in sorted(_RP, key=lambda x: x["name"])) + "</ul></details>"
