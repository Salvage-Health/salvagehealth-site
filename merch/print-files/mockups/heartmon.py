import importlib.util
from playwright.sync_api import sync_playwright
SP='/tmp/claude-0/-home-claude-salvagehealth-site/e3b92c29-8baf-5613-aac3-18fb605d820b/scratchpad'
spec=importlib.util.spec_from_file_location('ek',SP+'/wtank/ekgfinal.py'); ek=importlib.util.module_from_spec(spec); spec.loader.exec_module(ek)
R,S,B='#BE5126','#141413','#FAF9F5'
HEART="M50 86 C27 71 12 56 15 39 C18 25 35 19 50 35 C65 19 82 25 85 39 C88 56 73 71 50 86 Z"  # box 15..85 x 21..86
def trace(start_x, base, spike_at=None, gap=10, s=1.0):
    pts=[]; x=start_x
    word='SALVAGE'
    for i,ch in enumerate(word):
        for px,py in ek.L[ch]: pts.append((x+px*s,base-py*s))
        x+=ek.L[ch][-1][0]*s
        if i<len(word)-1: x+=gap*s
        pts.append((x,base))
    return pts,x
def lockA(lw=7):
    # heart on left containing the spike; trace exits right into SALVAGE
    hs=1.6; hx,hy=-5,-12   # heart transform
    base=hy+52*hs+4
    pre=[(-30,base),(44,base),(50,base-7),(56,base+12),(70,base-64),(82,base+30),(90,base),(150,base)]
    word,xe=trace(152,base)
    pts=pre+[(152,base)]+word+[(xe+16,base),(xe+40,base)]
    d='M'+' L'.join(f'{a:.1f} {b:.1f}' for a,b in pts)
    return f'<g transform="translate({hx} {hy}) scale({hs})"><path d="{HEART}" fill="none" stroke="{R}" stroke-width="{lw/hs}" stroke-linejoin="round"/></g><path d="{d}" fill="none" stroke="{B}" stroke-width="{lw}" stroke-linecap="round" stroke-linejoin="miter" stroke-miterlimit="3"/>', f'-40 -20 {xe+90} 170'
def lockB(lw=9):
    # big heart, word through the middle, line extends past the heart
    hs=3.6; hx,hy=-40,-60
    base=hy+52*hs
    word,xe=trace(40,base,s=1.25)
    # center the word in heart: heart spans x hx+15*hs .. hx+85*hs
    hcx=hx+50*hs; wl=xe-40; off=hcx-(40+wl/2)
    word=[(a+off,b) for a,b in word]
    pre=[(hx-10,base),(word[0][0]-30,base),(word[0][0]-24,base+10),(word[0][0]-18,base-22),(word[0][0]-12,base),(word[0][0],base)]
    pts=pre+word+[(hx+100*hs+10,base)]
    d='M'+' L'.join(f'{a:.1f} {b:.1f}' for a,b in pts)
    return f'<g transform="translate({hx} {hy}) scale({hs})"><path d="{HEART}" fill="none" stroke="{R}" stroke-width="{lw/hs}" stroke-linejoin="round"/></g><path d="{d}" fill="none" stroke="{B}" stroke-width="{lw}" stroke-linecap="round" stroke-linejoin="miter" stroke-miterlimit="3"/>', f'{hx-20} {hy+15*hs} {100*hs+40} {76*hs}'
cells=''
for f in (lockA,lockB):
    g,vb=f()
    cells+=f'<div style="background:#1f1f1d;padding:30px;display:flex;align-items:center;justify-content:center;height:360px"><svg viewBox="{vb}" style="max-width:820px;max-height:330px">{g}</svg></div>'
html=f'<html><body style="margin:0;background:#E9E7E1"><div style="display:grid;grid-template-columns:repeat(2,880px);gap:14px;padding:14px">{cells}</div></body></html>'
with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page(viewport={'width':1800,'height':450}); pg.set_content(html); pg.wait_for_timeout(300)
    pg.screenshot(path=f'{SP}/wtank/heartmon.png',full_page=True); b.close()
