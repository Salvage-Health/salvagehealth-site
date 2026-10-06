import base64, os
from playwright.sync_api import sync_playwright
H=os.path.dirname(os.path.abspath(__file__)); SP=os.path.dirname(H)
OSW=base64.b64encode(open(os.path.join(SP,"Oswald.ttf"),"rb").read()).decode()
S,R,B,M="#141413","#BE5126","#FAF9F5","#8A8779"
def shield(st,pu,w=7): return f'<svg viewBox="10 2 80 98" xmlns="http://www.w3.org/2000/svg"><path d="M50 6 L84 18 V48 C84 72 68 88 50 96 C32 88 16 72 16 48 V18 Z" fill="none" stroke="{st}" stroke-width="{w}" stroke-linejoin="round"/><path d="M24 54 H37 L44 40 L52 66 L59 46 L65 54 H78" fill="none" stroke="{pu}" stroke-width="{w}" stroke-linecap="round" stroke-linejoin="round"/></svg>'
# canvas 1200 x 800 css px -> 3600 x 2400 (12 x 8 in at 300 DPI)
# front panel safe box ~ x 642-1151, back panel ~ x 48-558; spine at 600; barcode zone x 474-534, y 694-760 (back, bottom right)
html=f"""<!doctype html><html><head><meta charset=utf-8><style>
@font-face{{font-family:'Oswald';src:url(data:font/ttf;base64,{OSW});font-weight:200 700}}
*{{margin:0;padding:0;box-sizing:border-box}} html,body{{width:1200px;height:800px;overflow:hidden;background:{S};color:{B};font-family:Inter,Arial,sans-serif}}
.p{{position:absolute;top:0;bottom:0;display:flex;flex-direction:column;align-items:center;text-align:center}}
.front{{left:660px;width:476px;padding:62px 0 50px}}
.back{{left:70px;width:450px;padding:150px 0 0}}
.wm{{font-family:Oswald;font-weight:600;letter-spacing:5px;font-size:15px;text-transform:uppercase}} .wm b{{color:{R};font-weight:600}}
.t{{font-family:Oswald;font-weight:700;text-transform:uppercase;font-size:84px;line-height:.95;margin-top:30px;letter-spacing:1.5px}}
.r{{width:250px;height:4px;background:{R};margin:26px 0 20px}}
.tag{{font-family:Oswald;font-weight:600;text-transform:uppercase;letter-spacing:3px;font-size:18px;line-height:1.6}} .tag em{{font-style:normal;color:{R}}}
.url{{margin-top:auto;font:600 11px Inter;letter-spacing:3.5px;text-transform:uppercase;color:{M}}}
.q{{font-family:Oswald;font-weight:700;text-transform:uppercase;font-size:34px;line-height:1.1;letter-spacing:.8px}} .q em{{font-style:normal;color:{R}}}
.bl{{font-size:15px;line-height:1.6;color:#C9C7C0;max-width:360px;margin-top:22px}}
.li{{margin-top:26px;font:600 12px Inter;letter-spacing:2.5px;text-transform:uppercase;color:{B};line-height:2.1}}
</style></head><body>
<div class="p back">
 <div style="width:54px">{shield(R,B,8)}</div>
 <div class="q" style="margin-top:22px">Say what you'll do.<br><em>Do what you say.</em></div>
 <p class="bl">Your numbers, your promises and your proof, in one place. 12 weeks of check-ins, a 30-day habit tracker and 94 pages for your daily log.</p>
 <div class="li">Built from what's left.<br><span style="color:{M}">Salvage Health</span></div>
</div>
<div class="p front">
 <div class="wm">Salvage <b>Health</b></div>
 <div style="width:170px;margin-top:70px">{shield(R,B)}</div>
 <div class="t">Training<br>Log</div>
 <div class="r"></div>
 <div class="tag">Say what you'll do.<br><em>Do what you say.</em></div>
 <div class="url">salvagehealth.com</div>
</div>
</body></html>"""
with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page(viewport={"width":1200,"height":800},device_scale_factor=3)
    pg.set_content(html); pg.wait_for_timeout(500); pg.screenshot(path=os.path.join(H,"out","salvage-health-log-01-outside-cover-WRAP.png")); b.close()
