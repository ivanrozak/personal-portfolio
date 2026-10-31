from pathlib import Path
from PIL import Image

root = Path(__file__).resolve().parents[2]
master = Image.open(root / 'output/imagegen/favicon-master.png').convert('RGB')
resize = Image.Resampling.LANCZOS

for size in (16, 32):
    master.resize((size, size), resize).save(root / f'public/favicon-{size}x{size}.png', optimize=True)

master.resize((180, 180), resize).save(root / 'public/apple-touch-icon.png', optimize=True)

master.save(root / 'public/favicon.ico', format='ICO', sizes=[(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)])

for size in (192, 512):
    canvas = Image.new('RGB', (size, size), 'white')
    inner = round(size * 0.8)
    canvas.paste(master.resize((inner, inner), resize), ((size - inner) // 2, (size - inner) // 2))
    canvas.save(root / f'public/web-app-manifest-{size}x{size}.png', optimize=True)
