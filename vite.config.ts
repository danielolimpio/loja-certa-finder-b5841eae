import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import prerender from '@prerenderer/rollup-plugin';

// SEO metadata for each route - will be injected during prerendering
const seoMetadata: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Lojas Grátis | Ranking das Melhores Plataformas de E-commerce 2025',
    description: 'Compare as melhores plataformas de e-commerce do Brasil. Ranking atualizado 2025 com Nuvemshop, Shopify, Mercado Livre, Shopee e mais. Análise completa e gratuita.'
  },
  '/sobre/': {
    title: 'Sobre Nós - LojasGrátis | Ranking de Plataformas de E-commerce',
    description: 'Conheça a LojasGrátis, o guia definitivo para comparar e escolher a melhor plataforma de e-commerce no Brasil. Análises imparciais e detalhadas.'
  },
  '/ranking/': {
    title: 'Ranking das Melhores Plataformas de E-commerce 2025',
    description: 'Ranking atualizado das 20 melhores plataformas de e-commerce do Brasil. Compare custos, recursos e escolha a melhor opção para sua loja virtual.'
  },
  '/comparar/': {
    title: 'Compare Plataformas de E-commerce | LojasGrátis',
    description: 'Compare lado a lado as melhores plataformas de e-commerce do Brasil. Analise recursos, preços e escolha a ideal para seu negócio.'
  },
  '/blog/': {
    title: 'Blog | Lojas Grátis - Dicas e Estratégias para E-commerce',
    description: 'Aprenda tudo sobre e-commerce, marketing digital e empreendedorismo. Dicas práticas para montar e crescer sua loja virtual no Brasil.'
  },
  '/blog/categoria/plataformas/': {
    title: 'Artigos sobre Plataformas de E-commerce – Lojas Grátis',
    description: 'Leia análises, comparações e tutoriais sobre as principais plataformas de e-commerce: Nuvemshop, Shopify, VTEX, WooCommerce e mais.'
  },
  '/blog/categoria/marketing-digital/': {
    title: 'Marketing Digital para Lojas Online – Lojas Grátis',
    description: 'Estratégias de marketing digital para e-commerce: tráfego pago, SEO, redes sociais e conversão. Dicas práticas e atualizadas.'
  },
  '/blog/categoria/e-commerce/': {
    title: 'Guias e Tendências de E-commerce – Lojas Grátis',
    description: 'Tudo sobre e-commerce no Brasil: tendências, tecnologia, logística, pagamentos e crescimento de vendas online.'
  },
  '/blog/categoria/empreendedorismo/': {
    title: 'Empreendedorismo Digital e Lojas Virtuais – Lojas Grátis',
    description: 'Dicas e estratégias para empreendedores que querem iniciar ou escalar sua loja virtual. Histórias de sucesso e insights práticos.'
  },
  '/blog/categoria/tutoriais/': {
    title: 'Tutoriais e Guias Passo a Passo – Lojas Grátis',
    description: 'Tutoriais completos para configurar, otimizar e gerenciar sua loja virtual. Aprenda do básico ao avançado.'
  },
  '/contato/': {
    title: 'Contato - LojasGrátis | Entre em Contato Conosco',
    description: 'Entre em contato com a equipe LojasGrátis. Envie suas dúvidas, sugestões ou feedback sobre plataformas de e-commerce.'
  },
  '/privacidade/': {
    title: 'Política de Privacidade - Lojas Grátis',
    description: 'Política de Privacidade da Lojas Grátis. Saiba como coletamos, usamos e protegemos seus dados pessoais conforme a LGPD.'
  },
  '/cookies/': {
    title: 'Política de Cookies - Lojas Grátis',
    description: 'Política de Cookies da Lojas Grátis. Saiba como utilizamos cookies e como controlá-los no seu navegador.'
  },
  '/termos/': {
    title: 'Termos de Uso - Lojas Grátis',
    description: 'Termos de Uso da Lojas Grátis. Conheça as regras e condições para utilizar nosso site de comparação de plataformas.'
  },
  '/transparencia/': {
    title: 'Política de Transparência - Lojas Grátis',
    description: 'Conheça nossa metodologia de análise, critérios de ranking e como mantemos a transparência em nossas avaliações.'
  },
  '/sitemap/': {
    title: 'Mapa do Site - Lojas Grátis',
    description: 'Navegue por todas as seções do Lojas Grátis. Encontre análises, comparações e guias sobre plataformas de e-commerce.'
  },
  // Platform pages
  '/plataformas/nuvemshop/': {
    title: 'Nuvemshop - Análise Completa 2025 | Lojas Grátis',
    description: 'Plataforma líder na América Latina para criar lojas virtuais profissionais. Confira preços, recursos, prós e contras da Nuvemshop.'
  },
  '/plataformas/shopify/': {
    title: 'Shopify no Brasil - Análise Completa 2025 | Lojas Grátis',
    description: 'Avaliação detalhada da Shopify no Brasil: planos, recursos, taxas, prós, contras e alternativas para sua loja virtual.'
  },
  '/plataformas/mercado-livre/': {
    title: 'Mercado Livre para Lojas - Análise Completa 2025 | Lojas Grátis',
    description: 'Maior marketplace da América Latina. Confira como vender no Mercado Livre: taxas, recursos, prós e contras.'
  },
  '/plataformas/shopee/': {
    title: 'Shopee Brasil - Análise Completa 2025 | Lojas Grátis',
    description: 'Marketplace asiático em crescimento no Brasil. Confira taxas, recursos, prós e contras de vender na Shopee.'
  },
  '/plataformas/woocommerce/': {
    title: 'WooCommerce - Análise Completa 2025 | Lojas Grátis',
    description: 'Plugin de e-commerce para WordPress com flexibilidade máxima e controle total. Confira preços, recursos, prós e contras.'
  },
  '/plataformas/tray/': {
    title: 'Tray - Análise Completa 2025 | Lojas Grátis',
    description: 'Plataforma brasileira com soluções completas para e-commerce. Confira preços, recursos, prós e contras da Tray.'
  },
  '/plataformas/loja-integrada/': {
    title: 'Loja Integrada - Análise Completa 2025 | Lojas Grátis',
    description: 'Plataforma gratuita para criar sua loja virtual. Confira recursos, limitações, prós e contras da Loja Integrada.'
  },
  '/plataformas/vtex/': {
    title: 'VTEX - Análise Completa 2025 | Lojas Grátis',
    description: 'Plataforma enterprise para grandes operações de e-commerce. Confira recursos, preços e funcionalidades da VTEX.'
  },
  '/plataformas/bagy/': {
    title: 'Bagy - Análise Completa 2025 | Lojas Grátis',
    description: 'Plataforma 100% gratuita, ideal para quem quer começar sem investimento. Confira recursos, prós e contras da Bagy.'
  },
  '/plataformas/amazon-brasil/': {
    title: 'Amazon Brasil - Análise Completa 2025 | Lojas Grátis',
    description: 'Maior marketplace do mundo agora no Brasil. Confira como vender na Amazon: taxas, recursos, prós e contras.'
  },
  '/plataformas/magazord/': {
    title: 'Magazord - Análise Completa 2025 | Lojas Grátis',
    description: 'Plataforma para médias e grandes empresas. Confira recursos, preços, prós e contras do Magazord.'
  },
  '/plataformas/elo7/': {
    title: 'Elo7 - Análise Completa 2025 | Lojas Grátis',
    description: 'Marketplace especializado em produtos artesanais e criativos. Confira taxas, recursos, prós e contras do Elo7.'
  },
  '/plataformas/hotmart/': {
    title: 'Hotmart - Análise Completa 2025 | Lojas Grátis',
    description: 'Plataforma líder para venda de cursos online, e-books e infoprodutos. Confira taxas, recursos, prós e contras.'
  },
  '/plataformas/eduzz/': {
    title: 'Eduzz - Análise Completa 2025 | Lojas Grátis',
    description: 'Plataforma completa para infoprodutos com recursos de afiliação robustos. Confira taxas, recursos, prós e contras.'
  },
  '/plataformas/americanas-marketplace/': {
    title: 'Americanas Marketplace - Análise Completa 2025 | Lojas Grátis',
    description: 'Venda nos sites Americanas, Submarino e Shoptime. Confira taxas, recursos, prós e contras do marketplace.'
  },
  '/plataformas/enjoei/': {
    title: 'Enjoei - Análise Completa 2025 | Lojas Grátis',
    description: 'Marketplace de moda e produtos usados. Confira taxas, recursos, prós e contras de vender no Enjoei.'
  },
  '/plataformas/olx/': {
    title: 'OLX - Análise Completa 2025 | Lojas Grátis',
    description: 'Maior plataforma de classificados do Brasil. Confira taxas, recursos, prós e contras de anunciar na OLX.'
  },
  '/plataformas/magalu-marketplace/': {
    title: 'Magalu Marketplace - Análise Completa 2025 | Lojas Grátis',
    description: 'Marketplace do Magazine Luiza, uma das maiores redes de varejo do Brasil. Confira taxas, recursos e como vender.'
  },
  '/plataformas/kiwify/': {
    title: 'Kiwify - Análise Completa 2025 | Lojas Grátis',
    description: 'Plataforma de infoprodutos com taxas competitivas. Confira recursos, preços, prós e contras da Kiwify.'
  },
  '/plataformas/yampi/': {
    title: 'Yampi - Análise Completa 2025 | Lojas Grátis',
    description: 'Plataforma focada em conversão e otimização de vendas com recursos avançados. Confira preços e recursos.'
  },
  // Articles
  '/artigo/melhores-plataformas-e-commerce-gratuitas-2026/': {
    title: 'Melhores Plataformas de E-commerce Gratuitas em 2026: Guia Completo | Lojas Grátis',
    description: 'Descubra as melhores plataformas de e-commerce gratuitas para 2026. Compare custos, recursos e facilidade de uso. Ideal para quem quer começar sem investir!'
  },
};

// All routes that need to be prerendered for SEO (with trailing slashes)
const prerenderRoutes = Object.keys(seoMetadata);

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
        maxConcurrentRoutes: 2,
        renderAfterDocumentEvent: 'render-ready',
        renderAfterTime: 8000,
        timeout: 30000,
      },
      postProcess(renderedRoute) {
        const baseUrl = 'https://lojasgratis.com.br';
        const routePath = renderedRoute.route === '/' ? '/' : renderedRoute.route.endsWith('/') ? renderedRoute.route : `${renderedRoute.route}/`;
        const canonicalUrl = `${baseUrl}${routePath}`;
        
        // Get SEO metadata for this route
        const metadata = seoMetadata[routePath] || seoMetadata['/'];
        
        // Replace or inject title
        if (renderedRoute.html.includes('<title>')) {
          renderedRoute.html = renderedRoute.html.replace(
            /<title>[^<]*<\/title>/,
            `<title>${metadata.title}</title>`
          );
        } else {
          renderedRoute.html = renderedRoute.html.replace(
            '</head>',
            `<title>${metadata.title}</title></head>`
          );
        }
        
        // Replace or inject meta description
        if (renderedRoute.html.includes('name="description"')) {
          renderedRoute.html = renderedRoute.html.replace(
            /<meta name="description" content="[^"]*"\s*\/?>/,
            `<meta name="description" content="${metadata.description}" />`
          );
        } else {
          renderedRoute.html = renderedRoute.html.replace(
            '</head>',
            `<meta name="description" content="${metadata.description}" /></head>`
          );
        }
        
        // Replace or inject canonical URL
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
        
        // Add/Update Open Graph tags
        const ogTags = `
    <meta property="og:title" content="${metadata.title}" />
    <meta property="og:description" content="${metadata.description}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Lojas Grátis" />`;
        
        // Remove existing OG tags and add new ones
        renderedRoute.html = renderedRoute.html.replace(/<meta property="og:title"[^>]*>/g, '');
        renderedRoute.html = renderedRoute.html.replace(/<meta property="og:description"[^>]*>/g, '');
        renderedRoute.html = renderedRoute.html.replace(/<meta property="og:url"[^>]*>/g, '');
        renderedRoute.html = renderedRoute.html.replace(/<meta property="og:type"[^>]*>/g, '');
        renderedRoute.html = renderedRoute.html.replace(/<meta property="og:site_name"[^>]*>/g, '');
        
        renderedRoute.html = renderedRoute.html.replace(
          '</head>',
          `${ogTags}\n  </head>`
        );
      },
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
