import re,html as H
from playwright.sync_api import sync_playwright
SP='/tmp/claude-0/-home-claude-salvagehealth-site/e3b92c29-8baf-5613-aac3-18fb605d820b/scratchpad'
def load(name):
    s=open(f'{SP}/htj/svg_fonts/{name}.svg').read(); g={}
    for m in re.finditer(r'<glyph ([^>]*)/>',s):
        a=m.group(1); u=re.search(r'unicode="([^"]*)"',a); adv=re.search(r'horiz-adv-x="([^"]*)"',a); d=re.search(r' d="([^"]*)"',a)
        if u: g[H.unescape(u.group(1))]=(float(adv.group(1)) if adv else 378, d.group(1) if d else '')
    return g
def strokes(d):
    out=[]; cur=None
    for tok in re.findall(r'[ML]|-?[\d.]+',d):
        if tok in 'ML': mode=tok; continue
    toks=re.findall(r'[ML]|-?[\d.]+',d); i=0
    while i<len(toks):
        t=toks[i]
        if t=='M': cur=[]; out.append(cur); i+=1; continue
        if t=='L': i+=1; continue
        cur.append((float(toks[i]),float(toks[i+1]))); i+=2
    return out
def word(font,text,scale,x0,base,track=0):
    g=load(font); x=x0; polys=[]
    for ch in text:
        adv,d=g[ch]
        for st in strokes(d): polys.append([(x+px*scale, base-py*scale) for px,py in st])
        x+=(adv+track)*scale
    return polys
R,S,B='#BE5126','#141413','#FAF9F5'
def mark(font,text,col,lw=4,scale=.11,L=80,track=0):
    polys=word(font,text,scale,120,L+0,track)
    first=polys[0][0]; last=polys[-1][-1]
    ekg=f'M10 {L} H62 L70 {L-24} L80 {L+26} L91 {L-42} L100 {L} H{min(first[0],110):.1f} L{first[0]:.1f} {first[1]:.1f}'
    body=''.join('M'+' L'.join(f'{x:.1f} {y:.1f}' for x,y in p) for p in polys)
    tail=f'M{last[0]:.1f} {last[1]:.1f} L{last[0]+8:.1f} {L} H{last[0]+120:.1f}'
    return f'<svg viewBox="0 0 {last[0]+130:.0f} 140" height="230"><path d="{ekg}{body}{tail}" fill="none" stroke="{col}" stroke-width="{lw}" stroke-linecap="round" stroke-linejoin="round"/></svg>'
rows=''
for lab,font in [('A','HersheyScript1'),('B','EMSAllure')]:
    rows+=f'<div class="r"><div class="lab">{lab}</div><div class="c" style="background:#fff">{mark(font,"salvage",S)}</div><div class="c" style="background:#141413">{mark(font,"salvage",R)}</div></div>'
html=f'<html><body style="margin:0;background:#E9E7E1;font-family:Arial"><style>.r{{display:flex;align-items:center;gap:20px;padding:14px 20px}} .lab{{width:40px;font:700 34px Arial;color:#BE5126}} .c{{padding:24px 30px;border-radius:12px}}</style>{rows}</body></html>'
with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page(viewport={'width':1900,'height':600}); pg.set_content(html); pg.wait_for_timeout(300)
    pg.screenshot(path=f'{SP}/wtank/mono.png',full_page=True); b.close()
