import fs from 'fs';

const html = fs.readFileSync('دليل_الطالب_الجديد___معان.html', 'utf8');

// Find the grid section
const gridStart = html.indexOf('class="grid"');
const gridEnd = html.indexOf('</footer>');
const gridSection = html.substring(gridStart, gridEnd);

// Find all card-body sections
const cards = [];
let searchFrom = 0;
let id = 1;

while (true) {
  const tagIdx = gridSection.indexOf('class="tag"', searchFrom);
  if (tagIdx === -1) break;
  
  // Find surrounding card-body
  const bodyStart = gridSection.lastIndexOf('class="card-body"', tagIdx);
  
  // Extract tag text
  const tagTextStart = gridSection.indexOf('>', tagIdx) + 1;
  const tagTextEnd = gridSection.indexOf('</span>', tagTextStart);
  const tag = gridSection.substring(tagTextStart, tagTextEnd).trim();
  
  // Extract h2
  const h2Start = gridSection.indexOf('<h2>', tagIdx);
  const h2End = gridSection.indexOf('</h2>', h2Start);
  const name = gridSection.substring(h2Start + 4, h2End).trim();
  
  // Extract first p after h2
  const pStart = gridSection.indexOf('<p>', h2End);
  const pEnd = gridSection.indexOf('</p>', pStart);
  const desc = gridSection.substring(pStart + 3, pEnd).trim().replace(/<[^>]*>/g, '').replace(/\s+/g, ' ');
  
  // Extract map link
  const nextCardBody = gridSection.indexOf('class="card-body"', tagIdx + 10);
  const searchEnd = nextCardBody !== -1 ? nextCardBody : gridSection.length;
  const actionSection = gridSection.substring(tagIdx, searchEnd);
  
  const mapMatch = actionSection.match(/class="map-btn"[^>]*href="([^"]*)"/);
  const sourceMatch = actionSection.match(/class="source-btn"[^>]*href="([^"]*)"/);
  const smallMatch = actionSection.match(/<small>([\s\S]*?)<\/small>/);
  
  cards.push({
    id: id++,
    tag,
    name,
    description: desc,
    mapUrl: mapMatch ? mapMatch[1] : null,
    sourceUrl: sourceMatch ? sourceMatch[1] : null,
    note: smallMatch ? smallMatch[1].trim().replace(/<[^>]*>/g, '').replace(/\s+/g, ' ') : null,
  });
  
  searchFrom = tagIdx + 10;
}

console.log(JSON.stringify(cards, null, 2));
console.log('\n--- TOTAL CARDS:', cards.length, '---');

const uniqueTags = [...new Set(cards.map(c => c.tag))];
console.log('\n--- UNIQUE CATEGORIES ---');
uniqueTags.forEach(t => console.log(t));
