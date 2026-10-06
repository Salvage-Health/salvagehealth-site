from playwright.sync_api import sync_playwright
SP='/tmp/claude-0/-home-claude-salvagehealth-site/e3b92c29-8baf-5613-aac3-18fb605d820b/scratchpad'
R,S,B='#BE5126','#141413','#FAF9F5'
H,C,W=50,6,24
def rt(p): return p+p[-2::-1]
a=12*20/56
L={
 'S': rt([(0,0),(W,0),(W,19),(W-C,25),(C,25),(0,31),(0,H-C),(C,H),(W-C,H),(W,H-C)])+[(W,0)],
 'A': [(0,0),(12,56),(W-a,20),(a,20),(W-a,20),(W,0)],
 'L': [(0,0),(0,H),(0,0),(18,0)],
 'V': [(0,0),(12,0),(0,H),(12,0),(W,H),(12,0),(W,0)],
 'G': rt([(0,0),(0,H-C),(C,H),(W-C,H),(W,H-C),(W,H-C-4)])+[(W,0),(W,22),(12,22),(W,22),(W,0)],
 'E': [(0,0)]+rt([(0,0),(0,H-C),(C,H),(21,H)])+[(0,25),(17,25),(0,25),(0,0),(21,0)],
}
def build(word='SALVAGE',gap=9,post=True):
    pts=[(0,0),(30,0),(36,7),(42,0),(50,0),(53,-8),(58,72),(63,-20),(67,0),(78,0),(86,11),(94,0),(108,0)]
    x=108
    for ch in word:
        rel=L[ch]
        for px,py in rel: pts.append((x+px,py))
        x+=rel[-1][0]
        if ch!=word[-1]: x+=gap
        pts.append((x,0))
    end=x+70
    if post: pts+=[(x+14,0),(x+20,6),(x+26,0),(end,0)]
    else: pts.append((end,0))
    return 'M'+' L'.join(f'{px:.2f} {90-py:.2f}' for px,py in pts), end
import itertools
_c=itertools.count()
def svg(col,fade=False,w=900,bg=None):
    gid=next(_c)
    d,e=build()
    grad=f'<defs><linearGradient id="f{gid}" gradientUnits="userSpaceOnUse" x1="0" x2="{e}"><stop offset="0" stop-color="{col}" stop-opacity="0"/><stop offset=".22" stop-color="{col}" stop-opacity="1"/></linearGradient></defs>' if fade else ''
    stroke=f'url(#f{gid})' if fade else col
    return f'<svg viewBox="-6 6 {e+12} 120" width="{w}">{grad}<path d="{d}" fill="none" stroke="{stroke}" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="miter" stroke-miterlimit="8"/></svg>'
if __name__=='__main__':
    cells=''
    for fade in (False,True):
        cells+=f'<div style="background:#fff;padding:18px">{svg(S,fade)}</div><div style="background:#141413;padding:18px">{svg(R,fade)}</div>'
    html=f'<html><body style="margin:0;background:#E9E7E1"><div style="display:grid;grid-template-columns:repeat(2,936px);gap:14px;padding:14px">{cells}</div></body></html>'
    with sync_playwright() as p:
        b=p.chromium.launch(); pg=b.new_page(viewport={'width':1920,'height':500}); pg.set_content(html); pg.wait_for_timeout(300)
        pg.screenshot(path=f'{SP}/wtank/ekgfinal.png',full_page=True); b.close()
