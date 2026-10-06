import base64, os
from playwright.sync_api import sync_playwright
H=os.path.dirname(os.path.abspath(__file__)); SP=os.path.dirname(H)
OSW=base64.b64encode(open(os.path.join(SP,"Oswald.ttf"),"rb").read()).decode()
S,R,B,M,L="#141413","#BE5126","#FAF9F5","#8A8779","#C9C7C0"
def shield(st,pu,w=8): return f'<svg viewBox="10 2 80 98" xmlns="http://www.w3.org/2000/svg"><path d="M50 6 L84 18 V48 C84 72 68 88 50 96 C32 88 16 72 16 48 V18 Z" fill="none" stroke="{st}" stroke-width="{w}" stroke-linejoin="round"/><path d="M24 54 H37 L44 40 L52 66 L59 46 L65 54 H78" fill="none" stroke="{pu}" stroke-width="{w}" stroke-linecap="round" stroke-linejoin="round"/></svg>'
foods=[("Chicken breast, cooked","4 oz (113 g)","35 g"),("Top sirloin, cooked","4 oz (113 g)","32 g"),("Shrimp, cooked","4 oz (113 g)","27 g"),("Tuna, canned in water","1 can, drained","25 g"),
("Salmon, cooked","4 oz (113 g)","25 g"),("93% lean ground turkey, raw","4 oz (113 g)","22 g"),("Egg whites, liquid","1 cup (240 ml)","26 g"),("Whole eggs","2 large","12 g"),
("Nonfat Greek yogurt","1 cup (227 g)","23 g"),("Low-fat cottage cheese","1 cup (226 g)","26 g"),("Whey protein","1 scoop","24 g"),("Lentils, cooked","1 cup (198 g)","18 g")]
rows="".join(f'<tr><td>{a}</td><td class="s">{b}</td><td class="g">{c}</td></tr>' for a,b,c in foods)
fld=lambda l: f'<div class="f"><span>{l}</span><i></i></div>'
html=f"""<!doctype html><html><head><meta charset=utf-8><style>
@font-face{{font-family:'Oswald';src:url(data:font/ttf;base64,{OSW});font-weight:200 700}}
*{{margin:0;padding:0;box-sizing:border-box}} html,body{{width:1200px;height:800px;overflow:hidden;background:#fff;color:{S};font-family:Inter,Arial,sans-serif;-webkit-font-smoothing:antialiased}}
.p{{position:absolute;top:58px;bottom:56px}} .left{{left:84px;width:440px}} .right{{left:676px;width:440px}}
.ey{{font:700 12px Inter;letter-spacing:3px;text-transform:uppercase;color:{R}}}
h1{{font-family:Oswald;font-weight:700;text-transform:uppercase;font-size:48px;line-height:1;margin:8px 0 0;letter-spacing:.5px}}
.f{{display:flex;align-items:flex-end;gap:10px;margin-top:22px;font-size:16px;font-weight:600}} .f i{{flex:1;border-bottom:1.6px solid {L};height:20px}}
.rule{{height:3px;background:{R};margin:30px 0 22px}}
.q{{font-family:Oswald;font-weight:700;text-transform:uppercase;font-size:30px;line-height:1.12}} .q em{{font-style:normal;color:{R}}}
.sub{{font-size:14px;color:#55534d;line-height:1.5;margin-top:12px}}
table{{border-collapse:collapse;width:100%;margin-top:16px}} td{{padding:6.5px 0;border-bottom:1px solid #E6E3DA;font-size:14px}}
td.s{{color:{M};font-size:12.5px;padding-left:8px;white-space:nowrap}} td.g{{font-family:Oswald;font-weight:700;font-size:18px;color:{R};text-align:right;width:56px}}
.note{{font-size:11.5px;color:{M};margin-top:12px;line-height:1.5}}
</style></head><body>
<div class="p left">
 <div style="width:54px">{shield(R,S)}</div>
 <div class="ey" style="margin-top:20px">Salvage Health Training Log</div>
 <h1>This log belongs to</h1>
 {fld("Name")}{fld("Started on")}{fld("My goal")}{fld("By")}
 <div class="rule"></div>
 <div class="q">Say what you'll do.<br><em>Do what you say.</em></div>
 <p class="sub">Every page in here is a promise you made to yourself, and proof you kept it. You don't need a perfect starting point. You build with what you've got.</p>
 <div style="position:absolute;left:0;right:0;bottom:0;font-size:13px;color:{M};border-top:1px solid #E6E3DA;padding-top:12px">If found, please return to: <span style="display:inline-block;width:240px;border-bottom:1px solid {L}"></span></div>
</div>
<div class="p right">
 <div class="ey">Quick reference</div>
 <h1>Protein cheat sheet</h1>
 <p class="sub" style="margin-top:8px">Build every meal around one of these and your protein target takes care of itself.</p>
 <table>{rows}</table>
 <p class="note">Approximate grams of protein per serving. Check your labels; brands vary.</p>
</div>
</body></html>"""
with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page(viewport={"width":1200,"height":800},device_scale_factor=3)
    pg.set_content(html); pg.wait_for_timeout(500); pg.screenshot(path=os.path.join(H,"out","salvage-health-log-02-inside-cover-SPREAD.png")); b.close()
