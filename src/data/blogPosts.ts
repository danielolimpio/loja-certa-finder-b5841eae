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
    count: 1
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
    count: 0
  }
];

export const blogPosts: BlogPost[] = [
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
