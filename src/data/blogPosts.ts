export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar?: string;
    role?: string;
  };
  category: string;
  tags: string[];
  featuredImage?: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime: number;
  featured?: boolean;
}

export interface BlogCategory {
  name: string;
  slug: string;
  description: string;
  count: number;
}

export const blogCategories: BlogCategory[] = [
  {
    name: "E-commerce",
    slug: "e-commerce",
    description: "Dicas e estratégias para vender online",
    count: 3
  },
  {
    name: "Plataformas",
    slug: "plataformas",
    description: "Análises e comparativos de plataformas",
    count: 3
  },
  {
    name: "Marketing Digital",
    slug: "marketing-digital",
    description: "Estratégias para divulgar sua loja",
    count: 0
  },
  {
    name: "Empreendedorismo",
    slug: "empreendedorismo",
    description: "Dicas para empreendedores iniciantes",
    count: 0
  },
  {
    name: "Tutoriais",
    slug: "tutoriais",
    description: "Guias passo a passo",
    count: 1
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "inteligencia-artificial-no-ecommerce-2026",
    slug: "inteligencia-artificial-no-ecommerce-2026",
    title: "Inteligência Artificial no E-commerce: Como Vender Mais em 2026",
    excerpt: "Chatbots, recomendação, precificação dinâmica e IA generativa: veja como usar Inteligência Artificial no e-commerce em 2026 para vender mais sem aumentar a equipe.",
    content: "",
    author: { name: "Equipe Lojas Grátis", role: "Especialistas em E-commerce" },
    category: "tecnologia",
    tags: ["inteligência artificial", "ia no ecommerce", "chatbot", "automação", "ia generativa", "tendências 2026", "varejo digital"],
    featuredImage: "/images/artigos/ia-inteligencia-artificial-ecommerce.jpg",
    publishedAt: "2026-02-06",
    updatedAt: "2026-02-06",
    readingTime: 21,
    featured: true
  },
  {
    id: "seo-para-ecommerce-guia-completo-2026",
    slug: "seo-para-ecommerce-guia-completo-2026",
    title: "SEO para E-commerce em 2026: Guia Completo para Ranquear no Google",
    excerpt: "Guia definitivo de SEO para e-commerce em 2026: técnico, on-page, conteúdo, backlinks e IA. Aprenda a ranquear no Google e reduzir o CAC da sua loja virtual.",
    content: "",
    author: { name: "Equipe Lojas Grátis", role: "Especialistas em E-commerce" },
    category: "marketing-digital",
    tags: ["seo", "seo ecommerce", "google", "tráfego orgânico", "core web vitals", "schema markup", "2026"],
    featuredImage: "/images/artigos/seo-para-ecommerce-2026.jpg",
    publishedAt: "2026-02-04",
    updatedAt: "2026-02-04",
    readingTime: 22,
    featured: true
  },
  {
    id: "como-precificar-produtos-para-vender-online",
    slug: "como-precificar-produtos-para-vender-online",
    title: "Como Precificar Produtos para Vender Online: Guia Definitivo 2026",
    excerpt: "Pare de chutar preço. Aprenda fórmulas práticas, margem saudável e estratégias usadas por lojistas que faturam alto — com exemplos reais e planilha.",
    content: "",
    author: {
      name: "Equipe Lojas Grátis",
      role: "Especialistas em E-commerce"
    },
    category: "e-commerce",
    tags: ["precificação", "como precificar produtos", "margem de lucro", "markup", "preço de venda", "e-commerce", "estratégia"],
    featuredImage: "/images/artigos/como-precificar-produtos-vender-online.jpg",
    publishedAt: "2026-01-12",
    updatedAt: "2026-01-12",
    readingTime: 17,
    featured: true
  },
  {
    id: "loja-virtual-pagamento-pix-2026",
    slug: "loja-virtual-pagamento-pix-2026",
    title: "Loja Virtual com Pagamento via Pix: Plataformas que Aceitam em 2026",
    excerpt: "Veja quais plataformas de e-commerce aceitam Pix em 2026. Facilite vendas com pagamento instantâneo e aumente conversões. Saiba onde configurar!",
    content: "",
    author: {
      name: "Equipe Lojas Grátis",
      role: "Especialistas em E-commerce"
    },
    category: "e-commerce",
    tags: ["pix", "pagamento", "e-commerce", "loja virtual", "plataformas", "2026", "checkout"],
    featuredImage: "/images/artigos/loja-virtual-pagamento-pix-2026.jpg",
    publishedAt: "2026-01-09",
    updatedAt: "2026-01-09",
    readingTime: 16,
    featured: true
  },
  {
    id: "plataforma-ecommerce-dominio-proprio-gratis",
    slug: "plataforma-ecommerce-dominio-proprio-gratis",
    title: "Plataforma E-commerce com Domínio Próprio Grátis: Onde Encontrar?",
    excerpt: "Quer domínio próprio sem pagar? Descubra plataformas de e-commerce com domínio grátis em 2026. Ideal para quem busca profissionalismo sem custos!",
    content: "",
    author: {
      name: "Equipe Lojas Grátis",
      role: "Especialistas em E-commerce"
    },
    category: "plataformas",
    tags: ["domínio próprio", "e-commerce", "loja virtual grátis", "shopify", "tray", "nuvemshop", "2026"],
    featuredImage: "/images/artigos/plataforma-ecommerce-dominio-proprio-gratis.jpg",
    publishedAt: "2026-01-08",
    updatedAt: "2026-01-08",
    readingTime: 15,
    featured: true
  },
  {
    id: "shopify-vs-mercado-livre-2026",
    slug: "shopify-vs-mercado-livre-2026",
    title: "Shopify vs Mercado Livre: Qual Plataforma Escolher em 2026?",
    excerpt: "Comparação detalhada entre Shopify e Mercado Livre. Descubra qual plataforma atende melhor seu modelo de negócio em 2026. Decisão inteligente!",
    content: "",
    author: {
      name: "Equipe Lojas Grátis",
      role: "Especialistas em E-commerce"
    },
    category: "plataformas",
    tags: ["shopify", "mercado livre", "e-commerce", "comparativo", "2026", "loja virtual"],
    featuredImage: "/images/artigos/shopify-vs-mercado-livre-2026.jpg",
    publishedAt: "2026-01-06",
    updatedAt: "2026-01-06",
    readingTime: 18,
    featured: true
  },
  {
    id: "como-criar-loja-virtual-gratis-passo-a-passo",
    slug: "como-criar-loja-virtual-gratis-passo-a-passo",
    title: "Como Criar Loja Virtual Grátis: Passo a Passo Fácil para Iniciantes",
    excerpt: "Aprenda como criar sua loja virtual grátis em minutos. Guia passo a passo com dicas essenciais para iniciantes. Comece seu negócio online hoje mesmo!",
    content: "",
    author: {
      name: "Equipe Lojas Grátis",
      role: "Especialistas em E-commerce"
    },
    category: "tutoriais",
    tags: ["loja virtual grátis", "e-commerce", "empreendedorismo", "tutorial", "iniciantes", "nuvemshop"],
    featuredImage: "/images/artigos/como-criar-loja-virtual-gratis-passo-a-passo.jpg",
    publishedAt: "2026-01-06",
    updatedAt: "2026-01-06",
    readingTime: 22,
    featured: true
  },
  {
    id: "melhores-plataformas-e-commerce-gratuitas-2026",
    slug: "melhores-plataformas-e-commerce-gratuitas-2026",
    title: "Melhores Plataformas de E-commerce Gratuitas em 2026: Guia Completo",
    excerpt: "Descubra as melhores plataformas de e-commerce gratuitas para 2026. Compare custos, recursos e facilidade de uso. Ideal para quem quer começar sem investir!",
    content: "",
    author: {
      name: "Equipe Lojas Grátis",
      role: "Especialistas em E-commerce"
    },
    category: "plataformas",
    tags: ["e-commerce", "plataformas gratuitas", "loja virtual", "nuvemshop", "shopify", "tray", "loja integrada"],
    featuredImage: "/images/artigos/melhores-plataformas-e-commerce-gratuitas-2026.jpg",
    publishedAt: "2026-01-05",
    updatedAt: "2026-01-05",
    readingTime: 18,
    featured: true
  }
];
