"""Grade an AI food photo to match the kitchen set: soften, tame orange, deepen shadows, vignette, grain.
Usage: python3 tools/grade_photo.py SRC OUT [width]"""
import sys
from PIL import Image, ImageFilter
import numpy as np
src, out = sys.argv[1], sys.argv[2]; W = int(sys.argv[3]) if len(sys.argv) > 3 else 1000
im = Image.open(src).convert('RGB'); H = round(im.height * W / im.width)
im = im.resize((W, H), Image.LANCZOS)
im = Image.blend(im, im.filter(ImageFilter.GaussianBlur(1.1)), 0.35)
a = np.asarray(im).astype(np.float32) / 255
lum = (a @ np.array([.299, .587, .114]))[..., None]
a = lum + (a - lum) * 0.93
a = a * np.array([1.0, 0.985, 0.985])
a = np.clip(a, 0, 1); a = a - 0.07 * np.sin(2 * np.pi * a) * (1 - a)
yy, xx = np.mgrid[0:H, 0:W]; r = np.sqrt(((xx - W / 2) / (W / 2)) ** 2 + ((yy - H / 2) / (H / 2)) ** 2)
a = a * (1 - 0.22 * np.clip(r - 0.55, 0, 1)[..., None] ** 1.4)
g = np.random.default_rng(7).normal(0, 0.018, (H, W, 1)).astype(np.float32)
a = np.clip(a + g * (0.6 + 0.4 * (1 - lum)), 0, 1)
Image.fromarray((a * 255).astype(np.uint8)).save(out, quality=88, optimize=True)
print(out, W, H)
