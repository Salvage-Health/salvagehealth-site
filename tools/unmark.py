"""Paint over the Gemini sparkle (bottom-right of a 1024 px square) with nearby texture.
Usage: python3 tools/unmark.py SRC OUT"""
import sys
from PIL import Image, ImageFilter, ImageDraw
im = Image.open(sys.argv[1]).convert('RGB'); W, H = im.size; k = W / 1024
box = lambda *v: tuple(round(x * k) for x in v)
src = im.crop(box(840, 935, 930, 1024)); w, h = src.size
m = Image.new('L', (w, h), 0); ImageDraw.Draw(m).ellipse((w // 9, h // 9, w - w // 9, h - h // 9), fill=255); m = m.filter(ImageFilter.GaussianBlur(5 * k))
im.paste(src, box(922, 925)[:2], m); im.save(sys.argv[2])
