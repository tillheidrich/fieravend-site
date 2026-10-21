#!/usr/bin/env python3
"""Turns the PNG screenshots in site/static/shots (from App/tools/screenshots.sh) into WebP for the website.

  python3 -I site/tools/shots-webp.py            # every *.png in site/static/shots → *.webp, PNGs are removed

iPhone pictures are scaled to 900 px wide, iPad pictures to 1400 px, quality 82. Only the WebP files go into git
(site/static/shots/*.png is ignored); the full PNGs for App Store Connect come from a fresh screenshots.sh run.
"""
import os
import sys

from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
SHOTS = os.path.join(os.path.dirname(HERE), "static", "shots")


def main() -> int:
    if not os.path.isdir(SHOTS):
        print("no site/static/shots", file=sys.stderr)
        return 1
    done = 0
    for name in sorted(os.listdir(SHOTS)):
        if not name.endswith(".png"):
            continue
        src = os.path.join(SHOTS, name)
        width = 1400 if name.startswith("ipad") else (420 if name.startswith("watch") else 900)
        with Image.open(src) as im:
            im = im.convert("RGB")
            if im.width > width:
                im = im.resize((width, round(im.height * width / im.width)), Image.LANCZOS)
            im.save(src[:-4] + ".webp", "WEBP", quality=82, method=6)
        os.remove(src)
        done += 1
        print("  " + name[:-4] + ".webp")
    print(f"{done} pictures")
    return 0


if __name__ == "__main__":
    sys.exit(main())
