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
    count: 0
  },
  {
    name: "Plataformas",
    slug: "plataformas",
    description: "Análises e comparativos de plataformas",
    count: 0
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

// Array vazio - aguardando artigos reais
export const blogPosts: BlogPost[] = [];
