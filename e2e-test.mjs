import { chromium } from '@playwright/test';

const BASE = 'https://heritage-r6p0.onrender.com';
const PAGES = ['/', '/about', '/gallery', '/contact', '/privacy', '/terms'];

async function run() {
  const browser = await chromium.launch({ headless: true });
  const results = [];

  for (const path of PAGES) {
    const page = await browser.newPage();
    const url = BASE + path;
    try {
      const resp = await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 });
      const status = resp?.status() ?? 0;
      const title = await page.title();
      const errors = [];
      page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });

      // Check for broken images
      const images = await page.$$eval('img', imgs =>
        imgs.map(img => ({ src: img.src, alt: img.alt, natural: img.naturalWidth }))
      );
      const brokenImages = images.filter(i => i.natural === 0);

      // Check for broken links
      const links = await page.$$eval('a[href]', anchors =>
        anchors.map(a => ({ href: a.href, text: a.textContent?.trim().slice(0, 40) }))
      );

      results.push({
        url,
        status,
        title,
        brokenImages,
        linkCount: links.length,
        errorCount: errors.length,
      });

      console.log(`\n${status === 200 ? '✅' : '❌'} ${url}`);
      console.log(`   Title: ${title}`);
      console.log(`   Status: ${status}`);
      console.log(`   Images: ${images.length} total, ${brokenImages.length} broken`);
      console.log(`   Links: ${links.length}`);
      console.log(`   Console errors: ${errors.length}`);
      if (brokenImages.length) {
        brokenImages.forEach(im => console.log(`   ⚠️  Broken image: ${im.src}`));
      }
      if (errors.length) {
        errors.slice(0, 5).forEach(e => console.log(`   ⚠️  Console error: ${e.slice(0, 100)}`));
      }
    } catch (err) {
      results.push({ url, status: 0, error: err.message });
      console.log(`\n❌ ${url}`);
      console.log(`   Failed: ${err.message}`);
    } finally {
      await page.close();
    }
  }

  console.log('\n═══════════════════════════════════════');
  console.log('SUMMARY');
  console.log('═══════════════════════════════════════');
  for (const r of results) {
    const ok = r.status === 200 || r.status === 304;
    const icon = ok && !r.brokenImages?.length ? '✅' : '⚠️';
    console.log(`${icon} ${r.url} — ${r.status}${r.brokenImages?.length ? ` (${r.brokenImages.length} broken images)` : ''}`);
  }

  await browser.close();
}

run().catch(console.error);
