import sys
from playwright.sync_api import sync_playwright
SP='/tmp/claude-0/-home-claude-salvagehealth-site/e3b92c29-8baf-5613-aac3-18fb605d820b/scratchpad'
R,S='#BE5126','#141413'
L={ # relative points, start (0,0), end on baseline at width
 's':[(0,0),(16,32),(4,20),(22,10),(10,0),(24,0)],
 'a':[(0,0),(24,30),(8,30),(2,6),(10,0),(24,30),(27,0)],
 'l':[(0,0),(8,76),(14,-12),(18,0)],
 'v':[(0,0),(4,30),(13,0),(22,30),(25,0)],
 'g':[(0,0),(24,30),(8,30),(2,6),(10,0),(24,30),(27,-48),(31,0)],
 'e':[(0,0),(20,18),(15,31),(6,27),(2,8),(12,0),(24,0)],
}
def build(word='salvage',gap=7,scale=1):
    pts=[(0,0),(30,0),(34,0),(38,6),(42,0),(46,0),(49,-9),(54,48),(59,-16),(63,0),(72,0),(78,8),(84,0),(96,0)]
    x=96
    for ch in word:
        rel=L[ch]
        for px,py in rel[1:]: pts.append((x+px,py))
        x+=rel[-1][0]+gap; pts.append((x,0))
    pts+=[(x+10,0),(x+16,8),(x+22,0),(x+70,0)]
    return 'M'+' L'.join(f'{px} {90-py}' for px,py in pts), x+70
d,w=build()
cells=''
for bg,col in (('#fff',S),('#141413',R)):
    cells+=f'<div class="c" style="background:{bg}"><svg viewBox="-10 0 {w+20} 150" width="1700"><path d="{d}" fill="none" stroke="{col}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>'
html=f'<html><body style="margin:0;background:#E9E7E1"><div style="display:grid;gap:18px;padding:18px">{cells}</div></body></html>'
with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page(viewport={'width':1760,'height':800}); pg.set_content(html); pg.wait_for_timeout(300)
    pg.screenshot(path=f'{SP}/wtank/ekgword2.png',full_page=True); b.close()
