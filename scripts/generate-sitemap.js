/**
 * Generate Sitemap Script
 * 
 * Automatically generates sitemap.xml based on:
 * - Static pages
 * - Dynamic event routes from event-venue-data
 * 
 * Run: node scripts/generate-sitemap.js
 */

const fs = require('fs');
const path = require('path');

// Import event slugs (adjust path as needed)
const getAllEventSlugs = () => {
  // For now, manually list events. 
  // In production, you can import from your data file
  return [
    'pelatihan-sabun-rumah-tangga',
    'workshop-kerajinan-tangan',
    'gathering-komunitas-umkm'
  ];
};

const BASE_URL = 'https://villadelatina.com';
const today = new Date().toISOString().split('T')[0];

// Define all static pages
const staticPages = [
  { loc: '/', priority: '1.0', changefreq: 'weekly' },
  { loc: '/tentang-kami', priority: '0.8', changefreq: 'monthly' },
  { loc: '/event-venue', priority: '0.9', changefreq: 'weekly' },
  { loc: '/tina-wiryawati-center', priority: '0.9', changefreq: 'monthly' },
];

// Generate event detail pages
const eventSlugs = getAllEventSlugs();
const eventPages = eventSlugs.map(slug => ({
  loc: `/event-venue/${slug}`,
  priority: '0.8',
  changefreq: 'weekly'
}));

// Combine all pages
const allPages = [...staticPages, ...eventPages];

// Generate XML
const generateSitemap = () => {
  const urls = allPages.map(page => `  <url>
    <loc>${BASE_URL}${page.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Main Pages -->
${urls}
</urlset>`;
};

// Write to file
const outputPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
const sitemap = generateSitemap();

fs.writeFileSync(outputPath, sitemap, 'utf-8');

console.log('✅ Sitemap generated successfully!');
console.log(`📍 Location: ${outputPath}`);
console.log(`📄 Total pages: ${allPages.length}`);
console.log('\nPages included:');
allPages.forEach(page => {
  console.log(`  - ${BASE_URL}${page.loc}`);
});
