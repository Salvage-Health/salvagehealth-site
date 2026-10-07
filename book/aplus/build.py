import base64
from playwright.sync_api import sync_playwright
SP='/tmp/claude-0/-home-claude-salvagehealth-site/e3b92c29-8baf-5613-aac3-18fb605d820b/scratchpad'
R='/home/claude/salvagehealth-site'
b64=lambda p:base64.b64encode(open(p,'rb').read()).decode()
F=f"""@font-face{{font-family:O;src:url(data:font/ttf;base64,{b64(SP+'/Oswald.ttf')})}}
@font-face{{font-family:P;src:url(data:font/ttf;base64,{b64(SP+'/fonts/PlayfairDisplay[wght].ttf')})}}
@font-face{{font-family:I;font-weight:400;src:url(data:font/otf;base64,{b64('/usr/share/fonts/opentype/inter/Inter-Regular.otf')})}}
@font-face{{font-family:I;font-weight:600;src:url(data:font/otf;base64,{b64('/usr/share/fonts/opentype/inter/Inter-SemiBold.otf')})}}"""
BA=b64(R+'/brand/before-after.jpg'); BR=b64(R+'/brand/bryan.jpg'); CV=b64(R+'/book/cover-600.jpg')
BASE=f"""<style>{F} *{{box-sizing:border-box}} body{{margin:0}} .c{{width:970px;height:600px;position:relative;overflow:hidden;background:radial-gradient(ellipse at 30% 0%,#2a2724,#141413 70%);color:#FAF9F5;font-family:I}}
.k{{font:600 17px O;letter-spacing:5px;color:#D06A3E;text-transform:uppercase}} h1,h2{{font-family:P;font-weight:700;margin:0;line-height:1.05}} em{{font-style:normal;color:#D06A3E}}</style>"""
S={}
S['01-hero']=f"""<div class=c>
<div style="position:absolute;left:60px;top:70px;width:470px"><div class=k>A no-BS beginner's guide</div>
<h1 style="font-size:62px;margin-top:16px">I lost 80+ lbs.<br><em>Then I wrote down everything that worked.</em></h1>
<p style="font-size:22px;line-height:1.45;color:#CFCBC0;margin:26px 0 0">Nutrition, training and recovery, explained in plain English. No diet to follow. Nothing&nbsp;to&nbsp;buy.</p></div>
<img src="data:image/jpeg;base64,{BA}" style="position:absolute;right:70px;top:60px;width:330px;height:420px;object-fit:cover;object-position:50% 18%;border:8px solid #FAF9F5;transform:rotate(3deg);box-shadow:0 30px 60px rgba(0,0,0,.6)">
<div style="position:absolute;right:92px;top:500px;width:300px;text-align:center;font:700 26px O;letter-spacing:2px;color:#D06A3E">14 MONTHS · 80+ LBS</div></div>"""
cards=[("Never set foot in a gym","Starts at zero. Assumes nothing."),("Started and quit before","Built for the long game, not a 30-day sprint."),("Drowning in conflicting advice","Myths broken down, every claim sourced."),("Tired of crash diets","Learn how it works and build your own plan.")]
S['02-who']=f"""<div class=c><div style="position:absolute;left:0;right:0;top:56px;text-align:center"><div class=k>Who it's for</div><h2 style="font-size:50px;margin-top:12px">If you've ever felt <em>lost in a gym</em>,<br>this book is for you.</h2></div>
<div style="position:absolute;left:50px;right:50px;top:282px;display:grid;grid-template-columns:repeat(4,1fr);gap:16px">"""+"".join(f"""<div style="background:#1F1E1B;border:1px solid #3A3833;border-top:4px solid #BE5126;border-radius:14px;padding:24px 20px;height:228px"><div style="font:700 25px/1.15 O;text-transform:uppercase;letter-spacing:.5px">{a}</div><div style="font-size:19px;line-height:1.4;color:#BDB9AE;margin-top:14px">{b}</div></div>""" for a,b in cards)+"</div></div>"
parts=[("1","How your body actually works"),("2","Train and eat with a target"),("3","Myths that kept you stuck"),("4","Tracking without losing your mind"),("5","Sleep, stress, alcohol and more"),("6","Your first week, day by day")]
S['03-inside']=f"""<div class=c><div style="position:absolute;left:60px;top:60px"><div class=k>What's inside</div><h2 style="font-size:50px;margin-top:12px">Six parts. <em>Zero fluff.</em></h2></div>
<img src="data:image/jpeg;base64,{CV}" style="position:absolute;right:60px;top:70px;width:250px;transform:rotate(4deg);box-shadow:0 30px 60px rgba(0,0,0,.6);border-radius:4px">
<div style="position:absolute;left:60px;top:200px;width:560px;display:grid;grid-template-columns:1fr 1fr;gap:14px 18px">"""+"".join(f"""<div style="display:flex;gap:14px;align-items:flex-start;background:#1F1E1B;border:1px solid #3A3833;border-radius:12px;padding:16px 16px;height:104px"><div style="font:700 40px/1 O;color:#D06A3E">{n}</div><div style="font:600 21px/1.25 I">{t}</div></div>""" for n,t in parts)+"</div></div>"
diff=[("No diet to follow","No meal plan to obey, nothing to buy. You learn the rules, then make your own."),("Plain English, every claim sourced","No jargon. A full source list in the back."),("From someone who's been there","Not a trainer with perfect genes. A regular guy who figured it out.")]
S['04-different']=f"""<div class=c><img src="data:image/jpeg;base64,{BR}" style="position:absolute;left:0;top:0;width:360px;height:600px;object-fit:cover;object-position:50% 20%">
<div style="position:absolute;left:360px;top:0;width:120px;height:600px;background:linear-gradient(90deg,rgba(20,20,19,0),#161514)"></div>
<div style="position:absolute;left:430px;top:58px;width:490px"><div class=k>Why it's different</div><h2 style="font-size:46px;margin-top:12px">Written for <em>real life.</em></h2>
"""+"".join(f"""<div style="border-top:3px solid #BE5126;padding:16px 0 0;margin-top:22px"><div style="font:700 24px O;text-transform:uppercase;letter-spacing:.5px">{a}</div><div style="font-size:19px;line-height:1.4;color:#BDB9AE;margin-top:6px">{b}</div></div>""" for a,b in diff)+"""
<div style="font:600 18px O;letter-spacing:3px;color:#D06A3E;margin-top:24px">BRYAN DOUROADO · AUTHOR</div></div></div>""".replace("DOUROADO","DOURADO")
with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page(viewport={'width':970,'height':600},device_scale_factor=2)
    for k,v in S.items():
        pg.set_content(BASE+v); pg.wait_for_timeout(500); pg.screenshot(path=f'{SP}/aplus/{k}@2x.png')
    b.close()
from PIL import Image
for k in S:
    im=Image.open(f'{SP}/aplus/{k}@2x.png').convert('RGB'); im.resize((970,600),Image.LANCZOS).save(f'{SP}/aplus/aplus-{k}.jpg',quality=92)
