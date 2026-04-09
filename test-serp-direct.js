// Direct SERP API test
const SERPAPI_API_KEY = '89280762e200ba1b2f2205a34b9ea8e0dda9f281287d7dd694e0928ad23b69b4';
const baseUrl = 'https://serpapi.com/search.json';

const queryParams = new URLSearchParams({
  api_key: SERPAPI_API_KEY,
  engine: 'google_hotels',
  q: 'Jaipur, Rajasthan, India',
  check_in_date: '2026-05-15',
  check_out_date: '2026-05-18',
  currency: 'INR',
  gl: 'in',
  hl: 'en',
  adults: '2',
});

console.log('Testing SERP API directly...\n');
console.log('URL:', `${baseUrl}?${queryParams.toString()}\n`);

fetch(`${baseUrl}?${queryParams.toString()}`)
  .then(async (response) => {
    console.log('Status:', response.status, response.statusText);
    const text = await response.text();
    console.log('\nResponse:');
    try {
      const json = JSON.parse(text);
      console.log(JSON.stringify(json, null, 2).slice(0, 1000));
      
      if (json.properties) {
        console.log(`\n✅ Found ${json.properties.length} hotels!`);
        console.log('\nFirst hotel:', json.properties[0]?.name);
      } else if (json.error) {
        console.log('\n❌ Error:', json.error);
      }
    } catch (e) {
      console.log(text.slice(0, 500));
    }
  })
  .catch((error) => {
    console.error('Fetch error:', error);
  });
