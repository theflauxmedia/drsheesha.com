/**
 * Compress WebP assets for deployment (run before deploy if CLI upload fails).
 * Usage: node scripts/optimize-images.mjs
 */
import { readdir, readFile, writeFile, stat } from 'node:fs/promises';
import { join, relative } from 'node:path';
import sharp from 'sharp';

const ROOT = new URL('../public', import.meta.url).pathname;
const MAX_WIDTH = 1920;
const WEBP_QUALITY = 78;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(full)));
    } else if (/\.webp$/i.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

async function optimize(file) {
  const before = (await stat(file)).size;
  const input = await readFile(file);
  const output = await sharp(input)
    .rotate()
    .resize({
      width: MAX_WIDTH,
      height: MAX_WIDTH,
      fit: 'inside',
      withoutEnlargement: true,
    })
    .webp({ quality: WEBP_QUALITY, effort: 4 })
    .toBuffer();

  if (output.length < before) {
    await writeFile(file, output);
  }

  const after = (await stat(file)).size;
  return { before, after };
}

const files = await walk(ROOT);
console.log(`Optimizing ${files.length} images in public/…`);

let saved = 0;
for (const file of files) {
  const rel = relative(ROOT, file);
  const { before, after } = await optimize(file);
  const delta = before - after;
  if (delta > 0) saved += delta;
  process.stdout.write(`\r  ${rel.padEnd(50)} ${(after / 1024).toFixed(0)} KB`);
}

console.log(`\nDone. Saved ~${(saved / 1024 / 1024).toFixed(1)} MB total.`);
