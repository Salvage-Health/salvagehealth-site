import base64,sys
from playwright.sync_api import sync_playwright
SP='/tmp/claude-0/-home-claude-salvagehealth-site/e3b92c29-8baf-5613-aac3-18fb605d820b/scratchpad'
def ff(name,file):
    b=base64.b64encode(open(f'{SP}/{file}','rb').read()).decode()
    return f"@font-face{{font-family:'{name}';src:url(data:font/ttf;base64,{b});}}"
css=ff('Vibes','fonts/GreatVibes-Regular.ttf')+ff('Paris','fonts/Parisienne-Regular.ttf')
R,S,B='#BE5126','#141413','#FAF9F5'
def mark(font,line,word,F=80,L=80,wx=113,end=450,dy=16):
    Bl=L+dy
    return f'''<svg viewBox="0 0 460 140" width="920"><path d="M10 {L} H62 L70 {L-24} L80 {L+26} L91 {L-42} L100 {L} H{wx+2}" fill="none" stroke="{line}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<text x="{wx}" y="{Bl}" font-family="{font}" font-size="{F}" fill="{word}" id="w">Salvage</text>
<path id="tail" d="M{end-110} {L} H{end}" fill="none" stroke="{line}" stroke-width="4" stroke-linecap="round"/></svg>'''
html=f'''<html><head><style>{css} body{{margin:0;background:#E9E7E1;font-family:sans-serif}} .r{{display:flex;gap:20px;padding:20px}} .c{{padding:20px;border-radius:12px}}</style></head><body>
<div class="r"><div class="c" style="background:#fff">{mark('Vibes',S,R)}</div><div class="c" style="background:#141413">{mark('Vibes',B,R)}</div></div>
<div class="r"><div class="c" style="background:#fff">{mark('Paris',S,R,F=72,dy=12)}</div><div class="c" style="background:#141413">{mark('Paris',R,B,F=72,dy=12)}</div></div>
</body></html>'''
with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page(viewport={'width':2000,'height':700}); pg.set_content(html); pg.wait_for_timeout(600)
    # measure word bbox to place tail
    boxes=pg.evaluate("Array.from(document.querySelectorAll('#w')).map(t=>{const b=t.getBBox();return [b.x,b.y,b.width,b.height]})")
    print(boxes)
    pg.screenshot(path=f'{SP}/wtank/ekg.png',full_page=True); b.close()
