from playwright.sync_api import sync_playwright
SP='/tmp/claude-0/-home-claude-salvagehealth-site/e3b92c29-8baf-5613-aac3-18fb605d820b/scratchpad'
R,S,B='#BE5126','#141413','#FAF9F5'
H=50
def rt(p): return p+p[-2::-1]   # go out and retrace back (invisible)
S_=[(0,0),(16,0),(21,6),(21,19),(16,24),(5,26),(0,32),(0,44),(5,50),(16,50),(21,44)]
L={
 'S': rt(S_)+[(16,0),(24,0)],
 'A': [(0,0),(11,H),(16.6,24),(5.4,24),(16.6,24),(22,0),(26,0)],
 'A0': [(0,0),(11,H),(22,0),(26,0)],
 'L': [(0,0),(0,H),(0,0),(18,0)],
 'Vup': [(0,0),(11,0),(0,H),(11,0),(22,H),(11,0),(26,0)],
 'Vdn': [(0,0),(10,-H*.8),(20,0),(24,0)],
 'G': [(0,0)]+rt([(0,0),(0,44),(5,50),(16,50),(21,44)])+[(0,6),(5,0),(16,0),(21,6),(21,22),(11,22),(21,22),(21,0),(26,0)],
 'E': [(0,0),(0,H),(18,H),(0,H),(0,25),(14,25),(0,25),(0,0),(20,0)],
}
def build(seq,gap=6):
    pts=[(0,0),(40,0),(45,7),(50,0),(55,0),(58,-10),(64,40),(70,-18),(74,0),(84,0),(91,9),(98,0),(112,0)]
    x=112
    for ch in seq:
        rel=L[ch]
        for px,py in rel: pts.append((x+px,py))
        x+=rel[-1][0]+gap; pts.append((x,0))
    pts+=[(x+12,0),(x+19,9),(x+26,0),(x+80,0)]
    return 'M'+' L'.join(f'{px} {80-py}' for px,py in pts), x+80
rows=''
for seq in (['S','A','L','Vup','A','G','E'],['S','A0','L','Vup','A0','G','E']):
    d,w=build(seq)
    for bg,col in (('#fff',S),('#141413',R)):
        rows+=f'<div style="background:{bg};padding:10px"><svg viewBox="-10 0 {w+20} 140" width="820"><path d="{d}" fill="none" stroke="{col}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="miter" stroke-miterlimit="6"/></svg></div>'
html=f'<html><body style="margin:0;background:#E9E7E1"><div style="display:grid;grid-template-columns:repeat(2,840px);gap:14px;padding:14px">{rows}</div></body></html>'
with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page(viewport={'width':1740,'height':600}); pg.set_content(html); pg.wait_for_timeout(300)
    pg.screenshot(path=f'{SP}/wtank/ekgcaps.png',full_page=True); b.close()
