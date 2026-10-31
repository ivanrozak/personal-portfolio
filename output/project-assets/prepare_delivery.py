from pathlib import Path
import json
import zipfile
from PIL import Image, ImageOps, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[2]
FOLDER = Path(__file__).resolve().parent
catalog = json.loads((FOLDER / 'catalog.json').read_text())
projects = catalog['projects']
assert len(projects) == 12
assert not any('lumina' in p['title'].lower() for p in projects)
font = ImageFont.truetype('/System/Library/Fonts/Supplemental/Arial.ttf', 23)
small = ImageFont.truetype('/System/Library/Fonts/Supplemental/Arial.ttf', 15)
cell_w, cell_h, gutter, pad = 512, 376, 28, 36
sheet = Image.new('RGB', (pad * 2 + cell_w * 3 + gutter * 2, pad * 2 + cell_h * 4 + gutter * 3), '#f1f1f1')
draw = ImageDraw.Draw(sheet)
for index, project in enumerate(projects):
    asset = ROOT / 'public' / project['thumbnail'].lstrip('/')
    with Image.open(asset) as source:
        assert source.width >= 1500 and source.height >= 900, (project['slug'], source.size)
        preview = ImageOps.contain(source.convert('RGB'), (cell_w, 320), Image.Resampling.LANCZOS)
    x = pad + (index % 3) * (cell_w + gutter)
    y = pad + (index // 3) * (cell_h + gutter)
    sheet.paste(preview, (x + (cell_w-preview.width)//2, y))
    draw.text((x, y+332), project['title'], font=font, fill='#141414')
    draw.text((x, y+361), project['subtitle'], font=small, fill='#606060')
sheet.save(FOLDER / 'project-thumbnails-preview.jpg', quality=94)
with zipfile.ZipFile(FOLDER / 'portfolio-project-assets.zip', 'w', zipfile.ZIP_DEFLATED) as package:
    for project in projects:
        asset = ROOT / 'public' / project['thumbnail'].lstrip('/')
        package.write(asset, 'thumbnails/' + asset.name)
    package.write(FOLDER / 'README.md', 'README.md')
    package.write(FOLDER / 'catalog.json', 'catalog.json')
print('Validated 12 WebP assets; preview and download package created.')
