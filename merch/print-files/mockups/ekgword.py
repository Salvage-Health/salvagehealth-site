from playwright.sync_api import sync_playwright
SP='/tmp/claude-0/-home-claude-salvagehealth-site/e3b92c29-8baf-5613-aac3-18fb605d820b/scratchpad'
R,S='#BE5126','#141413'
def build(variant):
    pre=[(0,0),(40,0),(44,0),(48,5),(52,0),(56,0),(59,-8),(64,45),(69,-14),(73,0),(84,0),(90,7),(96,0),(104,0)]
    if variant==1:
        word=[(104,0),(118,30),(124,14),(110,4),(116,0),(128,0),
              (146,28),(132,22),(128,8),(134,0),(146,28),(150,0),(156,0),
              (164,72),(170,0),(176,0),
              (180,28),(188,0),(196,30),(200,0),(206,0),
              (224,28),(210,22),(206,8),(212,0),(224,28),(228,0),(234,0),
              (252,28),(238,22),(234,8),(240,0),(252,28),(255,-42),(246,-38),(258,0),(264,0),
              (280,16),(276,26),(268,22),(266,8),(274,0),(286,0)]
    else:  # sharper, spikier: every stroke a straight jab, no backtracking except where needed
        word=[(104,0),(112,0),(120,30),(124,4),(114,8),(126,0),(132,0),
              (148,30),(136,28),(132,4),(140,0),(148,30),(152,0),(158,0),
              (163,74),(168,-10),(172,0),(178,0),
              (182,30),(190,-4),(198,30),(202,0),(208,0),
              (224,30),(212,28),(208,4),(216,0),(224,30),(228,0),(234,0),
              (250,30),(238,28),(234,4),(242,0),(250,30),(253,-46),(258,0),(264,0),
              (279,16),(274,28),(266,22),(264,6),(272,0),(286,0)]
    post=[(300,0),(306,7),(312,0),(380,0)]
    pts=pre+word+post
    return 'M'+' L'.join(f'{x} {80-y}' for x,y in pts)
cells=''
for v in (1,2):
    for bg,col in (('#fff',S),('#141413',R)):
        cells+=f'<div class="c" style="background:{bg}"><svg viewBox="-10 0 400 140" width="860"><path d="{build(v)}" fill="none" stroke="{col}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="miter" stroke-miterlimit="4"/></svg></div>'
html=f'<html><body style="margin:0;background:#E9E7E1"><div style="display:grid;grid-template-columns:repeat(2,900px);gap:18px;padding:18px">{cells}</div></body></html>'
with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page(viewport={'width':1860,'height':700}); pg.set_content(html); pg.wait_for_timeout(300)
    pg.screenshot(path=f'{SP}/wtank/ekgword.png',full_page=True); b.close()
