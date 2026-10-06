import base64
from playwright.sync_api import sync_playwright
SP='/tmp/claude-0/-home-claude-salvagehealth-site/e3b92c29-8baf-5613-aac3-18fb605d820b/scratchpad'
def ff(name,file,style='normal',w='100 900'):
    b=base64.b64encode(open(f'{SP}/{file}','rb').read()).decode()
    return f"@font-face{{font-family:'{name}';font-style:{style};font-weight:{w};src:url(data:font/ttf;base64,{b});}}"
css=ff('Oswald','Oswald.ttf')+ff('Vibes','fonts/GreatVibes-Regular.ttf')+ff('Playfair','fonts/PlayfairDisplay-Italic[wght].ttf','italic')
R,S='#BE5126','#141413'
SHP="M50 6 L84 18 V48 C84 72 68 88 50 96 C32 88 16 72 16 48 V18 Z"
SOFT="M50 7 C60 11 72 15 80 16 C83 16.5 84 19 84 22 V48 C84 72 68 88 50 96 C32 88 16 72 16 48 V22 C16 19 17 16.5 20 16 C28 15 40 11 50 7 Z"
PULSE="M24 54 H37 L44 40 L52 66 L59 46 L65 54 H78"
HEART="M50 66 C38 58 33 50 37 44 C40 39.5 47 40 50 46 C53 40 60 39.5 63 44 C67 50 62 58 50 66 Z"
HPULSE="M20 53 H33 L37 47 L41 58 L44 53 H46"  # leads into heart
marks={
'1':('Fine-line shield',f'<svg viewBox="10 2 80 98"><path d="{SOFT}" fill="none" stroke="{R}" stroke-width="3.6" stroke-linejoin="round"/><path d="{PULSE}" fill="none" stroke="{S}" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round"/></svg>'),
'2':('Heartbeat heart',f'<svg viewBox="4 14 92 80"><path d="M50 86 C27 71 12 56 15 39 C18 25 35 19 50 35 C65 19 82 25 85 39 C88 56 73 71 50 86 Z" fill="none" stroke="{R}" stroke-width="3.6" stroke-linejoin="round"/><path d="M8 53 H31 L38 41 L46 67 L53 46 L58 53 H92" fill="none" stroke="{S}" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round"/></svg>'),
'3':('Shield with heart',f'<svg viewBox="10 2 80 98"><path d="{SOFT}" fill="none" stroke="{R}" stroke-width="3.6" stroke-linejoin="round"/><path d="M24 53 H40" fill="none" stroke="{S}" stroke-width="3.4" stroke-linecap="round"/><path d="M50 64 C41 58 37.5 52 40 47.5 C42.2 43.6 47.2 43.8 50 48.2 C52.8 43.8 57.8 43.6 60 47.5 C62.5 52 59 58 50 64 Z" fill="{R}"/><path d="M60 53 H76" fill="none" stroke="{S}" stroke-width="3.4" stroke-linecap="round"/></svg>'),
'4':('Shield + script',f'<div style="text-align:center"><svg viewBox="10 2 80 98" style="width:52%"><path d="{SOFT}" fill="none" stroke="{R}" stroke-width="3.6" stroke-linejoin="round"/><path d="{PULSE}" fill="none" stroke="{S}" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round"/></svg><div style="font-family:Vibes;font-size:46px;color:{R};line-height:.9;margin-top:2px">Salvage</div></div>'),
}
TANK='<svg class="t" viewBox="0 0 300 400"><path d="M95 10 C105 50 195 50 205 10 L235 18 C232 70 250 105 268 120 L262 390 H38 L32 120 C50 105 68 70 65 18 Z" fill="#fff" stroke="#d9d7d0" stroke-width="2"/></svg>'
cells=""
for k,(n,m) in marks.items():
    cells+=f'''<div class="c"><div class="lab">{k}</div><div class="nm">{n}</div><div class="big">{m}</div><div class="w">{TANK}<div class="sm">{m}</div></div></div>'''
html=f'''<html><head><style>{css} body{{margin:0;background:#E9E7E1}} .g{{display:grid;grid-template-columns:repeat(4,400px);gap:20px;padding:30px}}
.c{{background:#fff;border-radius:14px;padding:18px;position:relative;text-align:center}} .lab{{font:700 28px Oswald;color:{R};position:absolute;left:18px;top:10px}}
.nm{{font:500 15px Oswald;letter-spacing:.2em;text-transform:uppercase;color:#55534d;margin:8px 0 10px}}
.big{{height:230px;display:flex;align-items:center;justify-content:center}} .big svg{{height:200px;width:auto}} .big>div svg{{height:150px}}
.w{{position:relative;width:300px;height:400px;margin:20px auto 0;background:#EFEDE6;border-radius:10px}} .t{{position:absolute;inset:0;width:100%;height:100%}}
.sm{{position:absolute;left:172px;top:125px;width:46px}} .sm svg{{width:100%;height:auto}} .sm div{{font-size:14px!important}} .sm>div>svg{{width:52%}}</style></head><body><div class="g">{cells}</div></body></html>'''
with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page(viewport={'width':1760,'height':760},device_scale_factor=1.5); pg.set_content(html); pg.wait_for_timeout(800)
    pg.screenshot(path=f'{SP}/wtank/marks.png',full_page=True); b.close()
from PIL import Image; Image.open(f'{SP}/wtank/marks.png').convert('RGB').save(f'{SP}/wtank/womens-chest-logo-options.jpg',quality=88)
