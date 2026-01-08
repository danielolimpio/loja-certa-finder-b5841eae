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
    count: 1
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
