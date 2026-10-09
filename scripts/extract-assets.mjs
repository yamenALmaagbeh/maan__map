import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const outputDir = fileURLToPath(new URL('../public/images/', import.meta.url));
mkdirSync(outputDir, { recursive: true });

const names = [
  'athar-step-logo',
  'al-sateh',
  'downtown-maan',
  'bedouin-market',
  'shoman-library',
  'alqantara-center',
  'princess-basma-center',
];

const sources = [...html.matchAll(/<img\s+src=(?:"([^"]+)"|'([^']+)')/g)]
  .map((match) => match[1] ?? match[2])
  .filter((source) => source.startsWith('data:image/'));

if (sources.length !== names.length) {
  throw new Error(`Expected ${names.length} embedded images, found ${sources.length}`);
}

for (let index = 0; index < sources.length; index += 1) {
  const match = sources[index].match(/^data:image\/(jpeg|png|webp);base64,(.+)$/s);
  if (!match) throw new Error(`Unsupported image data at index ${index}`);
  const extension = match[1] === 'jpeg' ? 'jpg' : match[1];
  writeFileSync(join(outputDir, `${names[index]}.${extension}`), Buffer.from(match[2], 'base64'));
}

console.log(`Extracted ${sources.length} images to public/images`);
