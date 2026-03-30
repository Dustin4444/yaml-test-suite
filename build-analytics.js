/**
 * Build script to bundle Vercel Analytics for static site deployment
 * This creates a self-contained analytics snippet that can be included in HTML
 */

const fs = require('fs');
const path = require('path');

// Create public directory if it doesn't exist
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Generate analytics HTML snippet
const analyticsSnippet = `<!-- Vercel Web Analytics -->
<script>
  window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
</script>
<script defer src="/_vercel/insights/script.js"></script>
<!-- End Vercel Web Analytics -->`;

// Write the snippet to a file
fs.writeFileSync(
  path.join(publicDir, 'analytics-snippet.html'),
  analyticsSnippet,
  'utf8'
);

console.log('✓ Analytics snippet generated at public/analytics-snippet.html');
console.log('Include this snippet in your HTML <head> or before closing </body> tag');
