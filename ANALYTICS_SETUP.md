# Vercel Web Analytics Setup

This project has been configured with Vercel Web Analytics to track page views and user interactions.

## What Was Installed

### 1. Package Dependencies
- `@vercel/analytics` - The official Vercel Analytics package (v1.3.1+)

### 2. Configuration Files

#### package.json
Contains the `@vercel/analytics` dependency and build scripts.

#### _config.yml
Jekyll configuration file for the static site.

#### vercel.json
Vercel deployment configuration specifying Jekyll as the build system.

#### Gemfile
Ruby dependencies for Jekyll (site generator).

### 3. Analytics Integration Files

#### _includes/analytics.html
A Jekyll include file containing the Vercel Analytics snippet. This file is automatically included in all pages using the default layout.

```html
<!-- Vercel Web Analytics -->
<script>
  window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
</script>
<script defer src="/_vercel/insights/script.js"></script>
```

#### _layouts/default.html
The default Jekyll layout that includes the analytics snippet in all pages.

#### index.html
Homepage for the YAML Test Suite with the default layout applied.

#### analytics.js
Alternative JavaScript module for injecting analytics (for non-Jekyll usage).

#### build-analytics.js
Build script that generates a standalone analytics snippet at `public/analytics-snippet.html`.

## How It Works

When deployed to Vercel:

1. Vercel automatically detects the Jekyll framework
2. Jekyll builds the static site from the source files
3. The `_includes/analytics.html` snippet is included in every page via the default layout
4. Vercel's analytics script loads asynchronously and tracks pageviews
5. Analytics data appears in your Vercel dashboard under the Analytics tab

## Local Development

To run the site locally:

```bash
# Install Ruby dependencies
bundle install

# Install Node dependencies
npm install

# Serve the site locally
jekyll serve
```

Then visit `http://localhost:4000` in your browser.

## Deployment

Deploy to Vercel:

```bash
# Install Vercel CLI (if not already installed)
npm i -g vercel

# Deploy
vercel deploy
```

Or connect your GitHub repository to Vercel for automatic deployments on push.

## Enabling Analytics in Vercel Dashboard

After deploying, you need to enable Web Analytics in your Vercel project:

1. Go to your project in the Vercel dashboard
2. Navigate to the "Analytics" tab
3. Click "Enable Web Analytics"
4. Wait for data to start flowing (may take a few minutes after deployment)

## Alternative Usage (Non-Jekyll)

If you're not using Jekyll, you can use the generated snippet:

1. Run `npm run build` to generate the snippet
2. Copy the content from `public/analytics-snippet.html`
3. Paste it into your HTML files before the closing `</body>` tag

Or use the JavaScript module approach:

```javascript
import { inject } from '@vercel/analytics';
inject();
```

## Verifying Installation

After deployment, you can verify analytics is working by:

1. Opening your deployed site in a browser
2. Opening the browser's Developer Tools (Network tab)
3. Looking for requests to `/_vercel/insights/` endpoints
4. Checking the Vercel dashboard Analytics tab after a few minutes

## Privacy & Compliance

Vercel Web Analytics is GDPR-compliant and doesn't use cookies. It collects:
- Page views
- Referrer information
- Browser/device type
- Geographic location (country level)

No personally identifiable information is collected.

## Documentation

For more information, see the official Vercel documentation:
- [Vercel Web Analytics Quickstart](https://vercel.com/docs/analytics/quickstart)
- [Vercel Analytics Package](https://vercel.com/docs/analytics/package)
