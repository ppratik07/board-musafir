import os
import re

files = [
  'src/app/search/page.tsx',
  'src/app/hotels/page.tsx',
  'src/app/activities/page.tsx',
  'src/app/itineraries/builder/page.tsx',
  'src/app/itineraries/[id]/page.tsx',
  'src/app/dashboard/page.tsx'
]

replacements = {
    'London \(LHR\)': 'Mumbai (BOM)',
    'Tokyo \(HND\)': 'Delhi (DEL)',
    'LHR': 'BOM',
    'HND': 'DEL',
    'London': 'Mumbai',
    'Tokyo': 'Delhi',
    'Kyoto, Japan': 'Jaipur, Rajasthan',
    'Kyoto': 'Jaipur',
    'Tuscany & Umbria': 'Kerala Backwaters',
    'Florence': 'Kochi',
    'Chianti Hills': 'Munnar Plantations',
    'The Japanese Archipelago': 'The Golden Triangle',
    'Japan Airlines': 'Air India',
    'British Airways': 'Vistara',
    'Qatar Airways': 'Vistara Premium',
    'Emirates Boutique': 'IndiGo Luxe',
    'DOH': 'HYD',
    'DXB': 'BLR',
    'NRT': 'DEL',
    'Aman Kyoto': 'Taj Mahal Palace',
    'The Ritz-Carlton, Kyoto': 'The Oberoi Amarvilas',
    'Suiran, a Luxury Collection': 'Rambagh Palace',
    'Ryokan stays': 'Heritage Palace stays',
    'Private Zen Garden Tour & Tea Ceremony': 'Private Fort Tour & High Tea',
    'Exclusive Gion Geisha Dinner': 'Exclusive Rajputana Royal Dinner',
    'Arashiyama Bamboo Grove at Dawn': 'Amer Fort at Dawn',
    'Masterclass: Sushi Crafting': 'Masterclass: Authentic Spice Blending',
    'Ryokan': 'Palace'
}

for file_path in files:
    full_path = os.path.join(os.getcwd(), file_path)
    if not os.path.exists(full_path):
        continue
    
    with open(full_path, 'r', encoding='utf-8') as f:
        content = f.read()

    for old, new in replacements.items():
        content = re.sub(old, new, content)

    # Multiply prices to make it look like INR
    content = re.sub(r'\$([0-9,]+)', lambda m: '₹' + m.group(1) + '0', content)
    content = re.sub(r'£([0-9,]+)', lambda m: '₹' + m.group(1) + '0', content)
    
    with open(full_path, 'w', encoding='utf-8') as f:
        f.write(content)

print('Done')
files.append('src/app/page.tsx')
for file_path in files:
    full_path = os.path.join(os.getcwd(), file_path)
    if not os.path.exists(full_path):
        continue
    
    with open(full_path, 'r', encoding='utf-8') as f:
        content = f.read()

    for old, new in replacements.items():
        content = re.sub(old, new, content)

    content = re.sub(r'\$([0-9,]+)', lambda m: '₹' + m.group(1) + '0', content)
    content = re.sub(r'£([0-9,]+)', lambda m: '₹' + m.group(1) + '0', content)
    
    with open(full_path, 'w', encoding='utf-8') as f:
        f.write(content)

print('Done page.tsx')
