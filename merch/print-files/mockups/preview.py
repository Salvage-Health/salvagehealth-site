import base64
from playwright.sync_api import sync_playwright
SP='/tmp/claude-0/-home-claude-salvagehealth-site/e3b92c29-8baf-5613-aac3-18fb605d820b/scratchpad'
def ff(name,file,style='normal',w='100 900'):
    b=base64.b64encode(open(f'{SP}/{file}','rb').read()).decode()
    return f"@font-face{{font-family:'{name}';font-style:{style};font-weight:{w};src:url(data:font/ttf;base64,{b});}}"
css=ff('Oswald','Oswald.ttf')+ff('Vibes','fonts/GreatVibes-Regular.ttf')+ff('Paris','fonts/Parisienne-Regular.ttf')+ff('Playfair','fonts/PlayfairDisplay-Italic[wght].ttf','italic')+ff('Corm','fonts/CormorantGaramond-Italic[wght].ttf','italic')
R,S,M='#BE5126','#141413','#8A8779'
SH=f'<svg viewBox="10 2 80 98" width="34"><path d="M50 6 L84 18 V48 C84 72 68 88 50 96 C32 88 16 72 16 48 V18 Z" fill="none" stroke="{R}" stroke-width="7" stroke-linejoin="round"/><path d="M24 54 H37 L44 40 L52 66 L59 46 L65 54 H78" fill="none" stroke="{S}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/></svg>'
TANK='<svg class="t" viewBox="0 0 300 400"><path d="M95 10 C105 50 195 50 205 10 L235 18 C232 70 250 105 268 120 L262 390 H38 L32 120 C50 105 68 70 65 18 Z" fill="#fff" stroke="#d9d7d0" stroke-width="2"/></svg>'
opts={
'A':f'''<div style="font-family:Vibes;font-size:58px;color:{R};line-height:1">Say what you'll do.</div>
<div style="width:120px;height:1.5px;background:{S};margin:14px auto 10px"></div>
<div style="font-family:Oswald;font-weight:500;font-size:13px;letter-spacing:.42em;color:{S}">DO WHAT YOU SAY.</div>''',
'B':f'''{SH}
<div style="font-family:Playfair;font-style:italic;font-weight:500;font-size:44px;color:{S};line-height:1.1;margin-top:6px">Never too late.</div>
<div style="font-family:Oswald;font-weight:500;font-size:11px;letter-spacing:.5em;color:{R};margin-top:12px">SALVAGE HEALTH</div>''',
'C':f'''<div style="font-family:Corm;font-style:italic;font-weight:600;font-size:40px;color:{S};line-height:1.05">Say what you'll do,</div>
<div style="font-family:Corm;font-style:italic;font-weight:600;font-size:40px;color:{R};line-height:1.05">do what you say.</div>
<div style="margin-top:12px">{SH.replace('width="34"','width="22"')}</div>''',
'D':f'''<div style="font-family:Paris;font-size:46px;white-space:nowrap;color:{R};line-height:1">Built from what's left</div>
<div style="font-family:Oswald;font-weight:500;font-size:11px;letter-spacing:.5em;color:{S};margin-top:14px">SALVAGE HEALTH</div>'''}
cells="".join(f'<div class="c"><div class="lab">{k}</div><div class="w">{TANK}<div class="d">{v}</div></div></div>' for k,v in opts.items())
html=f'''<html><head><style>{css} body{{margin:0;background:#E9E7E1;font-family:Oswald}} .g{{display:grid;grid-template-columns:repeat(4,420px);gap:20px;padding:30px}}
.c{{background:#E2E0D9;border-radius:14px;padding:16px;position:relative}} .lab{{font:700 28px Oswald;color:{R};position:absolute;left:18px;top:10px}}
.w{{position:relative;width:390px;height:520px;margin:auto}} .t{{position:absolute;inset:0;width:100%;height:100%}}
.d{{position:absolute;left:0;right:0;top:175px;text-align:center;transform:scale(.62);transform-origin:50% 0}}</style></head><body><div class="g">{cells}</div></body></html>'''
with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page(viewport={'width':1820,'height':620},device_scale_factor=1.5); pg.set_content(html); pg.wait_for_timeout(800)
    pg.screenshot(path=f'{SP}/wtank/options.png',full_page=True); b.close()
