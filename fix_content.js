const fs = require('fs');
const path = require('path');

const files = [
  'src/app/search/page.tsx',
  'src/app/hotels/page.tsx',
  'src/app/activities/page.tsx',
  'src/app/itineraries/builder/page.tsx',
  'src/app/itineraries/[id]/page.tsx',
  'src/app/dashboard/page.tsx'
];

files.forEach(file => {
  const fullPath = path.join(process.cwd(), file);
  if (!fs.existsSync(fullPath)) return;
  
  let content = fs.readFileSync(fullPath, 'utf8');

  // Locations
  content = content.replace(/London \(LHR\)/g, 'Mumbai (BOM)');
  content = content.replace(/Tokyo \(HND\)/g, 'Delhi (DEL)');
  content = content.replace(/LHR/g, 'BOM');
  content = content.replace(/HND/g, 'DEL');
  content = content.replace(/London/g, 'Mumbai');
  content = content.replace(/Tokyo/g, 'Delhi');
  content = content.replace(/Kyoto, Japan/g, 'Jaipur, Rajasthan');
  content = content.replace(/Kyoto/g, 'Jaipur');
  content = content.replace(/Tuscany & Umbria/g, 'Kerala Backwaters');
  content = content.replace(/Florence/g, 'Kochi');
  content = content.replace(/Chianti Hills/g, 'Munnar Plantations');
  content = content.replace(/The Japanese Archipelago/g, 'The Golden Triangle');

  // Airlines
  content = content.replace(/Japan Airlines/g, 'Air India');
  content = content.replace(/British Airways/g, 'Vistara');
  content = content.replace(/Qatar Airways/g, 'Vistara Premium');
  content = content.replace(/Emirates Boutique/g, 'IndiGo Luxe');
  content = content.replace(/DOH/g, 'HYD');
  content = content.replace(/DXB/g, 'BLR');
  content = content.replace(/NRT/g, 'DEL');

  // Hotels
  content = content.replace(/Aman Kyoto/g, 'Taj Mahal Palace');
  content = content.replace(/The Ritz-Carlton, Kyoto/g, 'The Oberoi Amarvilas');
  content = content.replace(/Suiran, a Luxury Collection/g, 'Rambagh Palace');
  content = content.replace(/Ryokan stays/g, 'Heritage Palace stays');

  // Activities
  content = content.replace(/Private Zen Garden Tour & Tea Ceremony/g, 'Private Fort Tour & High Tea');
  content = content.replace(/Exclusive Gion Geisha Dinner/g, 'Exclusive Rajputana Royal Dinner');
  content = content.replace(/Arashiyama Bamboo Grove at Dawn/g, 'Amer Fort at Dawn');
  content = content.replace(/Masterclass: Sushi Crafting/g, 'Masterclass: Authentic Spice Blending');
  content = content.replace(/Ryokan/g, 'Palace');

  // Currencies - Replace $ and £ with ₹
  // e.g. $1,284 -> ₹12,840
  content = content.replace(/\$([0-9,]+)/g, (match, p1) => `₹${p1}0`);
  content = content.replace(/£([0-9,]+)/g, (match, p1) => `₹${p1}0`);

  fs.writeFileSync(fullPath, content);
});

console.log('Done');
