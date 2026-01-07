const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const fetch = require('node-fetch');
const sharp = require('sharp');

async function ensureDir(dir) {
  await fs.promises.mkdir(dir, { recursive: true });
}

function hash(input) {
  return crypto.createHash('md5').update(input).digest('hex').slice(0, 8);
}

async function downloadBuffer(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

async function processImage(url, outDir) {
  const id = hash(url);
  const buf = await downloadBuffer(url);
  const sizes = [300, 600, 1200];
  const outputs = [];

  for (const w of sizes) {
    const jpgName = `bg-${id}-${w}.jpg`;
    const webpName = `bg-${id}-${w}.webp`;
    const jpgPath = path.join(outDir, jpgName);
    const webpPath = path.join(outDir, webpName);

    await sharp(buf).resize({ width: w }).jpeg({ quality: 80 }).toFile(jpgPath);
    await sharp(buf).resize({ width: w }).webp({ quality: 75 }).toFile(webpPath);

    outputs.push({ w, jpg: `/${path.relative(process.cwd(), jpgPath).replace(/\\/g, '/')}`, webp: `/${path.relative(process.cwd(), webpPath).replace(/\\/g, '/')}` });
  }

  return { id, outputs };
}

async function main() {
  const cssPath = path.join(process.cwd(), 'style.css');
  const outDir = path.join(process.cwd(), 'dist', 'assets');
  await ensureDir(outDir);

  const css = await fs.promises.readFile(cssPath, 'utf8');
  const re = /([^{}]+)\{[^}]*background-image:\s*url\((?:['"]?)([^'"\)]+)(?:['"]?)\)[^}]*\}/gm;
  let match;
  const entries = [];

  while ((match = re.exec(css)) !== null) {
    const selector = match[1].trim();
    const url = match[2].trim();
    if (!url.startsWith('http')) continue; // only remote images for now
    if (entries.find(e => e.url === url && e.selector === selector)) continue;
    entries.push({ selector, url });
  }

  const generated = [];
  for (const e of entries) {
    try {
      const res = await processImage(e.url, outDir);
      generated.push({ selector: e.selector, id: res.id, outputs: res.outputs });
      console.log('Processed', e.url);
    } catch (err) {
      console.error('Error processing', e.url, err.message);
    }
  }

  // generate CSS
  const lines = [];
  lines.push('/* Generated backgrounds - do not edit by hand */');

  for (const g of generated) {
    // default (small)
    const small = g.outputs.find(o => o.w === 300);
    const med = g.outputs.find(o => o.w === 600);
    const lg = g.outputs.find(o => o.w === 1200);

    // base rule
    lines.push(`
${g.selector} {
  background-image: url('${small.jpg}');
  background-image: -webkit-image-set(url('${small.webp}') type('image/webp') 1x, url('${small.jpg}') type('image/jpeg') 1x);
  background-image: image-set(url('${small.webp}') type('image/webp') 1x, url('${small.jpg}') type('image/jpeg') 1x);
}
`);

    // medium
    if (med) {
      lines.push(`@media (min-width: 600px) {
${g.selector} {
  background-image: url('${med.jpg}');
  background-image: -webkit-image-set(url('${med.webp}') type('image/webp') 1x, url('${med.jpg}') type('image/jpeg') 1x);
  background-image: image-set(url('${med.webp}') type('image/webp') 1x, url('${med.jpg}') type('image/jpeg') 1x);
}
}
`);
    }

    // large
    if (lg) {
      lines.push(`@media (min-width: 1200px) {
${g.selector} {
  background-image: url('${lg.jpg}');
  background-image: -webkit-image-set(url('${lg.webp}') type('image/webp') 1x, url('${lg.jpg}') type('image/jpeg') 1x);
  background-image: image-set(url('${lg.webp}') type('image/webp') 1x, url('${lg.jpg}') type('image/jpeg') 1x);
}
}
`);
    }
  }

  const outCssPath = path.join(process.cwd(), 'dist', 'backgrounds.css');
  await fs.promises.writeFile(outCssPath, lines.join('\n'), 'utf8');
  console.log('Wrote', outCssPath);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
