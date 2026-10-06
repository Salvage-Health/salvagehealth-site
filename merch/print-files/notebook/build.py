# Salvage Health Training Log: 8 print files at 5.75 x 8 in, 300 DPI (1725 x 2400 px).
import base64, os
from playwright.sync_api import sync_playwright

HERE = os.path.dirname(os.path.abspath(__file__))
SP = os.path.dirname(HERE)
OSW = base64.b64encode(open(os.path.join(SP, "Oswald.ttf"), "rb").read()).decode()
QR = base64.b64encode(open(os.path.join(HERE, "qr.png"), "rb").read()).decode()
S, R, B, M, L = "#141413", "#BE5126", "#FAF9F5", "#8A8779", "#C9C7C0"

def shield(stroke, pulse, w=7):
    return (f'<svg viewBox="10 2 80 98" xmlns="http://www.w3.org/2000/svg"><path d="M50 6 L84 18 V48 C84 72 68 88 50 96 C32 88 16 72 16 48 V18 Z" fill="none" stroke="{stroke}" stroke-width="{w}" stroke-linejoin="round"/>'
            f'<path d="M24 54 H37 L44 40 L52 66 L59 46 L65 54 H78" fill="none" stroke="{pulse}" stroke-width="{w}" stroke-linecap="round" stroke-linejoin="round"/></svg>')

BASE = f"""<style>
@font-face{{font-family:'Oswald';src:url(data:font/ttf;base64,{OSW});font-weight:200 700}}
*{{box-sizing:border-box;margin:0;padding:0}}
html,body{{width:470px;height:654px;overflow:hidden}}
body{{font-family:Inter,Arial,sans-serif;color:{S};background:#fff;-webkit-font-smoothing:antialiased}}
.pg{{position:absolute;inset:0;padding:38px 36px 36px 36px}}
.pg.recto{{padding-left:46px}} .pg.verso{{padding-right:46px}}
.osw{{font-family:Oswald,Arial Narrow,sans-serif;font-weight:700;text-transform:uppercase;letter-spacing:.5px}}
.eyebrow{{font:700 9px Inter;letter-spacing:2.6px;text-transform:uppercase;color:{R}}}
h1{{font-family:Oswald;font-weight:700;text-transform:uppercase;font-size:34px;line-height:1;margin:6px 0 4px;letter-spacing:.4px}}
.sub{{font-size:11px;color:#55534d;line-height:1.45}}
.foot{{position:absolute;bottom:18px;left:0;right:0;text-align:center;font:600 7.5px Inter;letter-spacing:2px;color:{M};text-transform:uppercase}}
.field{{display:flex;align-items:flex-end;gap:8px;margin-top:15px;font-size:11.5px;font-weight:600}}
.field span.l{{white-space:nowrap}}
.field span.line{{flex:1;border-bottom:1.3px solid {L};height:16px}}
.field small{{font-weight:500;color:{M};font-size:9.5px;white-space:nowrap}}
.rule{{height:2px;background:{R};margin:14px 0}}
table{{border-collapse:collapse;width:100%}}
</style>"""

def page(inner, cls=""):
    return f"<!doctype html><html><head><meta charset=utf-8>{BASE}</head><body><div class='pg {cls}'>{inner}</div></body></html>"

PAGES = {}

# 1. Outside cover (front only, full bleed slate)
PAGES["01-outside-cover"] = f"""<!doctype html><html><head><meta charset=utf-8>{BASE}<style>
body{{background:{S};color:{B}}}
.c{{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;text-align:center;padding:50px 40px 44px}}
.wm{{font-family:Oswald;font-weight:600;letter-spacing:4px;font-size:12px;text-transform:uppercase}}
.wm b{{color:{R};font-weight:600}}
.sh{{width:130px;margin-top:96px}}
.t{{font-family:Oswald;font-weight:700;text-transform:uppercase;font-size:58px;line-height:.95;margin-top:24px;letter-spacing:1px}}
.r{{width:200px;height:3px;background:{R};margin:22px 0 16px}}
.tag{{font-family:Oswald;font-weight:600;text-transform:uppercase;letter-spacing:2.2px;font-size:13.5px;line-height:1.6}}
.tag em{{font-style:normal;color:{R}}}
.bot{{margin-top:auto;font:600 8.5px Inter;letter-spacing:2.6px;text-transform:uppercase;color:{M}}}
</style></head><body><div class="c">
<div class="wm">Salvage <b>Health</b></div>
<div class="sh">{shield(R, B)}</div>
<div class="t">Training<br>Log</div>
<div class="r"></div>
<div class="tag">Say what you'll do.<br><em>Do what you say.</em></div>
<div class="bot">salvagehealth.com</div>
</div></body></html>"""

# 2. Inside cover (verso of cover)
PAGES["02-inside-cover"] = page(f"""
<div style="width:46px;margin-top:6px">{shield(R, S, 8)}</div>
<div class="eyebrow" style="margin-top:18px">Salvage Health Training Log</div>
<h1>This log<br>belongs to</h1>
<div class="field" style="margin-top:22px"><span class="l">Name</span><span class="line"></span></div>
<div class="field"><span class="l">Started on</span><span class="line"></span></div>
<div class="field"><span class="l">My goal</span><span class="line"></span></div>
<div class="field"><span class="l">By</span><span class="line"></span></div>
<div class="rule" style="margin-top:34px"></div>
<p class="osw" style="font-size:22px;line-height:1.15">Say what you'll do.<br><span style="color:{R}">Do what you say.</span></p>
<p class="sub" style="margin-top:12px">Every page in here is a promise you made to yourself, and proof you kept it. You don't need a perfect starting point. You build with what you've got.</p>
<div style="position:absolute;left:36px;right:46px;bottom:36px;font-size:10px;color:{M};border-top:1px solid #E6E3DA;padding-top:10px">If found, please return to: <span style="display:inline-block;width:190px;border-bottom:1px solid {L}"></span></div>
""", "verso")

# 3. Page 1 front: your numbers
goals = "".join(f'<span style="display:inline-flex;align-items:center;gap:5px;margin-right:12px;font-weight:500"><i style="width:10px;height:10px;border:1.3px solid {S};border-radius:2px;display:inline-block"></i>{g}</span>' for g in ["Lose fat", "Recomp", "Build muscle", "Maintain"])
def two(a, ua, b, ub):
    return f'<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px"><div class="field"><span class="l">{a}</span><span class="line"></span><small>{ua}</small></div><div class="field"><span class="l">{b}</span><span class="line"></span><small>{ub}</small></div></div>'
PAGES["03-page1-front"] = page(f"""
<div class="eyebrow">Day one</div>
<h1>Your numbers</h1>
<p class="sub">Write these down before your first workout. They are your starting line, and the targets every page after this one aims at.</p>
<div style="margin-top:14px;font-size:11px;font-weight:700">Goal</div>
<div style="margin-top:8px;font-size:11px">{goals}</div>
<div class="field" style="margin-top:16px"><span class="l">Start date</span><span class="line"></span></div>
{two("Start weight", "lb", "Waist", "in")}
{two("Goal weight", "lb", "Training days", "/ week")}
<div style="margin-top:22px;border:1.5px solid {S};border-radius:10px;padding:12px 16px 16px">
<div class="eyebrow" style="color:{S}">Daily targets</div>
{two("Maintenance", "cal", "Daily target", "cal")}
<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px">
<div class="field"><span class="l">Protein</span><span class="line"></span><small>g</small></div>
<div class="field"><span class="l">Carbs</span><span class="line"></span><small>g</small></div>
<div class="field"><span class="l">Fat</span><span class="line"></span><small>g</small></div></div>
<div class="field"><span class="l">Steps</span><span class="line"></span><small>/ day</small></div>
</div>
<p style="margin-top:12px;font-size:10px;color:#55534d">Don't know these yet? Get them free in 60 seconds at <b style="color:{R}">salvagehealth.com/start</b></p>
<div style="margin-top:16px;font-size:11px;font-weight:700">Why I'm doing this</div>
<div class="field" style="margin-top:6px"><span class="line"></span></div>
<div class="field"><span class="line"></span></div>
<div class="field"><span class="line"></span></div>
<div class="foot">Education, not medical advice.</div>
""", "recto")

# 4. Page 1 back: how to log a day
ex = [("Date", "Tue, Mar 3"), ("Today I said I'd", "Hit protein and walk 30 min after dinner"), ("Training", "Squat 3x8 @ 135 lb, RDL 3x10 @ 95, plank 3x45s"),
      ("Food", "1,980 cal  ·  172 g protein"), ("Sleep / Water / Steps", "7.5 h  ·  12 cups  ·  9,400"), ("Kept my word?", "Yes"), ("One win", "Said no to the break-room donuts")]
rows = "".join(f'<tr><td style="padding:6px 10px 6px 0;font-weight:700;font-size:10.5px;white-space:nowrap;vertical-align:top;width:118px">{a}</td><td style="padding:6px 0;font-size:10.5px;border-bottom:1px solid #E6E3DA;font-style:italic;color:#4a4842">{b}</td></tr>' for a, b in ex)
PAGES["04-page1-back"] = page(f"""
<div class="eyebrow">Every day</div>
<h1>How to log a day</h1>
<p class="sub">Use one lined page per day. Copy these headings down the left side, fill them in before bed, and keep it short. Here is a real example:</p>
<div style="margin-top:14px;border:1.5px solid {S};border-radius:10px;padding:10px 16px 12px"><table>{rows}</table></div>
<div class="eyebrow" style="margin-top:22px;color:{S}">Three rules</div>
<ol style="margin:8px 0 0 16px;font-size:11px;line-height:1.5">
<li style="margin-bottom:6px"><b>Write the promise first.</b> "Today I said I'd" goes down in the morning, before the day can talk you out of it.</li>
<li style="margin-bottom:6px"><b>Honest beats perfect.</b> A real 2,400 is worth more than a fake 1,800. The numbers only help if they're true.</li>
<li><b>Missed a day? Write "missed" and keep going.</b> One blank day is nothing. Two in a row is a pattern. Never skip twice.</li>
</ol>
<div class="foot">Salvage Health · Training Log</div>
""", "verso")

# 5/6. 12-week check-ins
def checkins(weeks, extra=""):
    head = "".join(f'<th style="text-align:left;font:700 8.5px Inter;letter-spacing:1px;text-transform:uppercase;color:{M};padding:0 6px 6px 0;border-bottom:1.5px solid {S}">{h}</th>' for h in ["Wk", "Date", "Avg weight", "Waist", "Kept /7", "Notes"])
    body = "".join(f'<tr style="height:{56 if not extra else 44}px">' + f'<td style="font-family:Oswald;font-weight:700;font-size:15px;color:{R};border-bottom:1px solid {L};width:28px">{w}</td>' + "".join(f'<td style="border-bottom:1px solid {L};border-left:1px solid #EDEAE1;width:{wd}"></td>' for wd in ["60px", "70px", "52px", "48px", "auto"]) + "</tr>" for w in weeks)
    return f'<table style="margin-top:16px;table-layout:fixed"><thead><tr>{head}</tr></thead><tbody>{body}</tbody></table>{extra}'
PAGES["05-page2-front"] = page(f"""
<div class="eyebrow">Every 7 days</div>
<h1>Weekly check-ins</h1>
<p class="sub">Same day each week. Use your average weight for the week, not one morning: water and salt swing a single weigh-in by 2 to 5 lb (1 to 2 kg). "Kept /7" is how many days you kept your word.</p>
{checkins(range(1, 7))}
<div class="foot">Weeks 1 to 6</div>
""", "recto")
PAGES["06-page2-back"] = page(f"""
<div class="eyebrow">Every 7 days</div>
<h1>Weekly check-ins</h1>
{checkins(range(7, 13), f'''<div style="margin-top:18px;border:1.5px solid {S};border-radius:10px;padding:10px 16px 14px">
<div class="eyebrow" style="color:{S}">12 weeks in</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px">
<div class="field"><span class="l">Weight change</span><span class="line"></span><small>lb</small></div>
<div class="field"><span class="l">Waist change</span><span class="line"></span><small>in</small></div></div>
<div class="field"><span class="l">Proudest moment</span><span class="line"></span></div>
</div>''')}
<div class="foot">Weeks 7 to 12</div>
""", "verso")

# 7. Page 3 front: 30-day habit tracker
cols = 6
hdr = "".join(f'<th style="border:1px solid #CFCBC0;border-bottom:1.5px solid {S};height:62px;vertical-align:bottom;padding-bottom:3px;font:600 7px Inter;color:#B5B1A6;letter-spacing:1px">HABIT</th>' for _ in range(cols))
rws = "".join(f'<tr><td style="font:700 9.5px Inter;color:{R if d % 7 == 0 else M};text-align:right;padding-right:7px;width:22px">{d}</td>' + "".join(f'<td style="border:1px solid #E1DED4;height:13.6px"></td>' for _ in range(cols)) + "</tr>" for d in range(1, 31))
PAGES["07-page3-front"] = page(f"""
<div class="eyebrow">30 days</div>
<h1>Habit tracker</h1>
<p class="sub">Write up to 6 habits across the top: protein target, steps, water, workout, sleep by 11, no alcohol. Fill a box each day you do it. Don't break the chain.</p>
<table style="margin-top:10px;table-layout:fixed"><thead><tr><th style="width:22px"></th>{hdr}</tr></thead><tbody>{rws}</tbody></table>
""", "recto")

# 8. Page 3 back: next step
PAGES["08-page3-back"] = page(f"""
<div style="width:46px">{shield(R, S, 8)}</div>
<div class="eyebrow" style="margin-top:16px">Want the why behind all of this?</div>
<h1 style="font-size:38px">Fitness<br>Without the Fear</h1>
<p class="sub" style="margin-top:8px">The plain-English guide to nutrition, training and recovery. Calories, protein, sleep and the myths that kept you stuck, from someone who lost over 80 pounds figuring it out.</p>
<div style="display:flex;gap:18px;align-items:center;margin-top:20px">
<img src="data:image/png;base64,{QR}" style="width:118px;height:118px;border:1px solid #E6E3DA;padding:6px;border-radius:8px">
<div style="font-size:11px;line-height:1.55"><b>Scan to get the book</b><br>Kindle, or the audiobook on Spotify<br><span style="color:{R};font-weight:700">salvagehealth.com/book</span></div>
</div>
<div class="rule" style="margin-top:26px"></div>
<div class="eyebrow" style="color:{S}">Free at salvagehealth.com</div>
<ul style="list-style:none;margin-top:10px;font-size:11px;line-height:1.5">
<li style="margin-bottom:8px"><b>Starter Kit.</b> Your calories, protein and a 7-day plan in 60 seconds.</li>
<li style="margin-bottom:8px"><b>Salvage Kitchen.</b> Macro-friendly recipes from what's already in your fridge.</li>
<li><b>Articles.</b> Plain-English answers to the questions everyone asks.</li>
</ul>
<p class="osw" style="position:absolute;left:36px;right:46px;bottom:34px;font-size:17px;line-height:1.2">Never too late. <span style="color:{R}">Start today.</span></p>
""", "verso")

out = os.path.join(HERE, "out"); os.makedirs(out, exist_ok=True)
with sync_playwright() as p:
    b = p.chromium.launch()
    for name, h in PAGES.items():
        pg = b.new_page(viewport={"width": 470, "height": 654}, device_scale_factor=1725 / 470)
        pg.set_content(h); pg.wait_for_timeout(400)
        pg.screenshot(path=os.path.join(out, f"salvage-health-log-{name}.png"))
        pg.close()
    b.close()
print("done")
