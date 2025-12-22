import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import prerender from '@prerenderer/rollup-plugin';

// All routes that need to be prerendered for SEO
const prerenderRoutes = [
  '/',
  '/sobre',
  '/ranking',
  '/comparar',
  '/blog',
  '/contato',
  '/privacidade',
  '/cookies',
  '/termos',
  '/transparencia',
  '/sitemap',
  // Platform pages
  '/plataformas/nuvemshop',
  '/plataformas/shopify',
  '/plataformas/mercado-livre',
  '/plataformas/shopee',
  '/plataformas/woocommerce',
  '/plataformas/tray',
  '/plataformas/loja-integrada',
  '/plataformas/vtex',
  '/plataformas/bagy',
  '/plataformas/amazon-brasil',
  '/plataformas/magazord',
  '/plataformas/elo7',
  '/plataformas/hotmart',
  '/plataformas/eduzz',
  '/plataformas/americanas-marketplace',
  '/plataformas/enjoei',
  '/plataformas/olx',
  '/plataformas/magalu-marketplace',
  '/plataformas/kiwify',
  '/plataformas/yampi',
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode === "production" && prerender({
      routes: prerenderRoutes,
      renderer: '@prerenderer/renderer-puppeteer',
      rendererOptions: {
        maxConcurrentRoutes: 4,
        renderAfterDocumentEvent: 'render-ready',
        renderAfterTime: 5000,
      },
      postProcess(renderedRoute) {
        // Inject proper canonical URL for each route
        const baseUrl = 'https://lojasgratis.com.br';
        const canonicalUrl = `${baseUrl}${renderedRoute.route === '/' ? '' : renderedRoute.route}`;
        
        // Replace canonical tag if exists, or add one
        if (renderedRoute.html.includes('rel="canonical"')) {
          renderedRoute.html = renderedRoute.html.replace(
            /<link rel="canonical" href="[^"]*"\s*\/?>/,
            `<link rel="canonical" href="${canonicalUrl}" />`
          );
        } else {
          renderedRoute.html = renderedRoute.html.replace(
            '</head>',
            `<link rel="canonical" href="${canonicalUrl}" /></head>`
          );
        }
      },
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
