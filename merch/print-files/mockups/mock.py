import base64
from playwright.sync_api import sync_playwright
SP='/tmp/claude-0/-home-claude-salvagehealth-site/e3b92c29-8baf-5613-aac3-18fb605d820b/scratchpad'
osw=base64.b64encode(open(SP+'/Oswald.ttf','rb').read()).decode()
R,B,S,K='#BE5126','#FAF9F5','#1B1B19','#0B0B0A'
BG='#EFEDE6'
def shield(stroke,pulse,sw=8):
    return (f'<path d="M50 6 L84 18 V48 C84 72 68 88 50 96 C32 88 16 72 16 48 V18 Z" fill="none" stroke="{stroke}" stroke-width="{sw}" stroke-linejoin="round"/>'
            f'<path d="M24 54 H37 L44 40 L52 66 L59 46 L65 54 H78" fill="none" stroke="{pulse}" stroke-width="{sw}" stroke-linecap="round" stroke-linejoin="round"/>')
# side view sock, toe pointing left. local box ~ 300 x 470
SOCK='M100,0 H250 V330 C250,410 222,452 160,452 H62 C22,452 0,428 0,392 C0,352 26,326 66,326 H100 Z'
def side(i,text,fill):
    cid=f'c{i}'
    return f'''<clipPath id="{cid}"><path d="{SOCK}"/></clipPath>
<g filter="url(#sh)"><path d="{SOCK}" fill="{S}"/></g>
<g clip-path="url(#{cid})">
 <g opacity=".22">{''.join(f'<rect x="100" y="{y}" width="150" height="2" fill="#000"/>' for y in range(4,30,5))}</g>
 <rect x="0" y="40" width="300" height="11" fill="{R}"/><rect x="0" y="56" width="300" height="4" fill="{B}"/>
 <ellipse cx="262" cy="398" rx="78" ry="70" fill="{K}"/>
 <ellipse cx="18" cy="392" rx="58" ry="80" fill="{K}"/>
 <text font-family="Oswald" font-weight="700" font-size="25" fill="{fill}" transform="translate(166 82) rotate(90)" textLength="205" lengthAdjust="spacing">{text}</text>
 <path d="M100,0 V330" stroke="#000" stroke-opacity=".25" stroke-width="3"/>
 <rect x="0" y="0" width="300" height="470" fill="url(#shade)"/>
</g>'''
def front(i):
    # leg tube seen from front, foot foreshortened at bottom
    P='M0,0 H170 V470 C170,540 140,575 85,575 C30,575 0,540 0,470 Z'
    return f'''<clipPath id="f{i}"><path d="{P}"/></clipPath>
<g filter="url(#sh)"><path d="{P}" fill="{S}"/></g>
<g clip-path="url(#f{i})">
 <g opacity=".22">{''.join(f'<rect x="0" y="{y}" width="170" height="2" fill="#000"/>' for y in range(4,32,5))}</g>
 <rect x="0" y="44" width="170" height="12" fill="{R}"/><rect x="0" y="61" width="170" height="5" fill="{B}"/>
 <g transform="translate(43 100) scale(.84)">{shield(R,B,8)}</g>
 <text font-family="Oswald" font-weight="700" font-size="27" fill="{B}" x="85" y="222" text-anchor="middle" textLength="108" lengthAdjust="spacing">SALVAGE</text>
 <rect x="60" y="236" width="50" height="4" fill="{R}"/>
 <ellipse cx="85" cy="585" rx="110" ry="85" fill="{K}"/>
 <rect x="0" y="0" width="170" height="600" fill="url(#shadeF)"/>
</g>'''
defs=f'''<style>@font-face{{font-family:'Oswald';font-weight:200 700;src:url(data:font/ttf;base64,{osw});}}</style>
<filter id="sh" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="10" stdDeviation="12" flood-color="#000" flood-opacity=".18"/></filter>
<linearGradient id="shade" x1="0" x2="1"><stop offset="0" stop-color="#fff" stop-opacity=".06"/><stop offset=".55" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".25"/></linearGradient>
<linearGradient id="shadeF" x1="0" x2="1"><stop offset="0" stop-color="#000" stop-opacity=".3"/><stop offset=".35" stop-color="#fff" stop-opacity=".05"/><stop offset=".65" stop-color="#fff" stop-opacity=".05"/><stop offset="1" stop-color="#000" stop-opacity=".3"/></linearGradient>'''
pair=f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1600" height="1600"><defs>{defs}</defs>
<rect width="1000" height="1000" fill="{BG}"/>
<g transform="translate(150 255)">{side(1,"SAY WHAT YOU'LL DO.",B)}</g>
<g transform="translate(850 255) scale(-1 1)">{side(2,"",R)}</g>
<text font-family="Oswald" font-weight="700" font-size="25" fill="{R}" transform="translate(584 82) translate(250 255) rotate(90)" textLength="205" lengthAdjust="spacing"></text>
</svg>'''
# mirrored sock: text must not be mirrored, so draw text separately for right sock
pair=pair.replace('</svg>', f'<g transform="translate(850 255)"><text font-family="Oswald" font-weight="700" font-size="25" fill="{R}" transform="translate(-145 82) rotate(90)" textLength="205" lengthAdjust="spacing">DO WHAT YOU SAY.</text></g></svg>')
fr=f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1600" height="1600"><defs>{defs}</defs>
<rect width="1000" height="1000" fill="{BG}"/>
<g transform="translate(280 190)">{front(1)}</g>
<g transform="translate(550 190)">{front(2)}</g>
</svg>'''
with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page(viewport={'width':1600,'height':1600})
    for name,s in [('socks-pair',pair),('socks-front',fr)]:
        pg.set_content(f'<html><body style="margin:0">{s}</body></html>'); pg.wait_for_timeout(500)
        pg.screenshot(path=f'{SP}/sockmock/{name}.png',clip={'x':0,'y':0,'width':1600,'height':1600})
    b.close()
