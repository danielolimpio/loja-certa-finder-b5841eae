import { writeFileSync, readFileSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://lojasgratis.com.br";

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

// Static routes extracted from App.tsx (indexable pages only)
const staticRoutes: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/ranking", changefreq: "weekly", priority: "0.9" },
  { path: "/comparar", changefreq: "monthly", priority: "0.8" },
  { path: "/blog", changefreq: "weekly", priority: "0.8" },
  { path: "/sobre", changefreq: "monthly", priority: "0.7" },
  { path: "/contato", changefreq: "monthly", priority: "0.6" },
  { path: "/privacidade", changefreq: "yearly", priority: "0.4" },
  { path: "/cookies", changefreq: "yearly", priority: "0.4" },
  { path: "/termos", changefreq: "yearly", priority: "0.4" },
  { path: "/transparencia", changefreq: "yearly", priority: "0.4" },
  { path: "/sitemap", changefreq: "monthly", priority: "0.5" },
];

// Extract platform slugs from src/data/platforms.ts using regex
function extractPlatformSlugs(): string[] {
  const filePath = resolve("src/data/platforms.ts");
  const content = readFileSync(filePath, "utf-8");
  const slugs: string[] = [];
  const regex = /slug:\s*"([^"]+)"/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    if (!slugs.includes(match[1])) {
      slugs.push(match[1]);
    }
  }
  return slugs;
}

// Blog categories (mirrors blogPosts.ts)
const blogCategories = [
  { slug: "e-commerce" },
  { slug: "plataformas" },
  { slug: "marketing-digital" },
  { slug: "empreendedorismo" },
  { slug: "tutoriais" },
];

// Blog posts (mirrors blogPosts.ts)
const blogPosts = [
  { slug: "loja-virtual-pagamento-pix-2026", lastmod: "2026-01-09" },
  { slug: "plataforma-ecommerce-dominio-proprio-gratis", lastmod: "2026-01-08" },
  { slug: "shopify-vs-mercado-livre-2026", lastmod: "2026-01-06" },
  { slug: "como-criar-loja-virtual-gratis-passo-a-passo", lastmod: "2026-01-06" },
  { slug: "melhores-plataformas-e-commerce-gratuitas-2026", lastmod: "2026-01-05" },
];

// Dedicated article pages (mirrors routes in App.tsx)
const dedicatedArticles = [
  { slug: "melhores-plataformas-e-commerce-gratuitas-2026", lastmod: "2026-01-05" },
  { slug: "como-criar-loja-virtual-gratis-passo-a-passo", lastmod: "2026-01-06" },
  { slug: "shopify-vs-mercado-livre-2026", lastmod: "2026-01-06" },
  { slug: "plataforma-ecommerce-dominio-proprio-gratis", lastmod: "2026-01-08" },
  { slug: "loja-virtual-pagamento-pix-2026", lastmod: "2026-01-09" },
];

const today = new Date().toISOString().split("T")[0];

function generateSitemap(entries: SitemapEntry[]): string {
  const urls = entries.map((e) => {
    const lines = [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : `    <lastmod>${today}</lastmod>`,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ];
    return lines.filter(Boolean).join("\n");
  });

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
  ].join("\n");
}

function buildEntries(): SitemapEntry[] {
  const entries: SitemapEntry[] = [...staticRoutes];

  // Platform detail pages
  const platformSlugs = extractPlatformSlugs();
  for (const slug of platformSlugs) {
    entries.push({
      path: `/plataformas/${slug}`,
      changefreq: "monthly",
      priority: "0.7",
    });
  }

  // Blog categories
  for (const cat of blogCategories) {
    entries.push({
      path: `/blog/categoria/${cat.slug}`,
      changefreq: "weekly",
      priority: "0.6",
    });
  }

  // Blog posts (via /blog/:slug)
  for (const post of blogPosts) {
    entries.push({
      path: `/blog/${post.slug}`,
      lastmod: post.lastmod,
      changefreq: "monthly",
      priority: "0.8",
    });
  }

  // Dedicated article pages (via /artigo/:slug)
  for (const article of dedicatedArticles) {
    entries.push({
      path: `/artigo/${article.slug}`,
      lastmod: article.lastmod,
      changefreq: "monthly",
      priority: "0.8",
    });
  }

  return entries;
}

const entries = buildEntries();
const sitemapXml = generateSitemap(entries);
writeFileSync(resolve("public/sitemap.xml"), sitemapXml);
console.log(`sitemap.xml gerado com ${entries.length} URLs`);
