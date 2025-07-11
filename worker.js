export default {
  async fetch(request, env, ctx) {
    return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://plotmultipliers.com/post/why-plots-are-better-than-flats-2025</loc>
    <lastmod>2025-07-11</lastmod>
  </url>
  <url>
    <loc>https://plotmultipliers.com/post/vrindavan-plot-safety-guide</loc>
    <lastmod>2025-07-11</lastmod>
  </url>
</urlset>`, {
      headers: {
        "Content-Type": "application/xml"
      }
    })
  },
};
