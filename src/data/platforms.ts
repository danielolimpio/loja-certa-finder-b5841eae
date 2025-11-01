export interface Platform {
  rank: number;
  name: string;
  slug: string;
  logo: string;
  isFree: boolean;
  isRecommended?: boolean;
  rating: number;
  priceFrom: string;
  features: Array<{ text: string }>;
  visits?: string;
  products?: string;
  setupTime?: string;
  description: string;
  type: string;
  idealFor: string;
  plans: Array<{
    name: string;
    price: string;
    features: string[];
  }>;
  pros: string[];
  cons: string[];
  paymentMethods: string[];
  integrations: string[];
  setupComplexity: number; // 1-5
  checkoutTransparent: boolean;
  customDomain: boolean;
  sslIncluded: boolean;
  supportChannels: string[];
}

export const platforms: Platform[] = [
  {
    rank: 1,
    name: "Nuvemshop",
    slug: "nuvemshop",
    logo: "🛍️",
    isFree: true,
    isRecommended: true,
    rating: 4.8,
    priceFrom: "R$ 0",
    features: [
      { text: "Checkout transparente" },
      { text: "Domínio próprio no plano grátis" },
      { text: "Integração com Pix e WhatsApp" },
      { text: "Produtos ilimitados" },
    ],
    visits: "5M+",
    products: "Ilimitado",
    setupTime: "30min",
    description: "Plataforma líder na América Latina para criar lojas virtuais profissionais.",
    type: "Loja Própria",
    idealFor: "Iniciantes e pequenas empresas que buscam crescimento",
    plans: [
      {
        name: "Grátis",
        price: "R$ 0/mês",
        features: [
          "Produtos ilimitados",
          "Checkout transparente",
          "App mobile gratuito",
          "Domínio grátis .nuvemshop.com.br",
        ],
      },
      {
        name: "Básico",
        price: "R$ 59,90/mês",
        features: [
          "Domínio próprio",
          "Suporte prioritário",
          "Relatórios avançados",
          "Sem taxa por venda",
        ],
      },
      {
        name: "Plus",
        price: "R$ 99,90/mês",
        features: [
          "Tudo do Básico",
          "Checkout personalizado",
          "Automações de marketing",
          "Integração com ERPs",
        ],
      },
    ],
    pros: [
      "Plano gratuito muito completo",
      "Interface intuitiva em português",
      "Integração nativa com principais gateways de pagamento",
      "App mobile para gerenciar a loja",
      "Suporte em português",
    ],
    cons: [
      "Personalização de design limitada no plano grátis",
      "Alguns recursos avançados só em planos pagos",
      "Taxas de transação no plano gratuito",
    ],
    paymentMethods: ["Pix", "Boleto", "Cartão de Crédito", "Mercado Pago"],
    integrations: ["Correios", "Melhor Envio", "WhatsApp", "Facebook", "Instagram", "Google Analytics"],
    setupComplexity: 2,
    checkoutTransparent: true,
    customDomain: true,
    sslIncluded: true,
    supportChannels: ["Chat", "E-mail", "Central de Ajuda", "Tutoriais em vídeo"],
  },
  {
    rank: 2,
    name: "Shopify",
    slug: "shopify",
    logo: "🛒",
    isFree: false,
    isRecommended: true,
    rating: 4.7,
    priceFrom: "US$ 29",
    features: [
      { text: "Plataforma internacional líder" },
      { text: "Milhares de apps e temas" },
      { text: "Checkout otimizado" },
      { text: "Escalabilidade garantida" },
    ],
    visits: "100M+",
    products: "Ilimitado",
    setupTime: "1h",
    description: "Plataforma global número 1 em e-commerce, ideal para quem busca crescimento internacional.",
    type: "Loja Própria",
    idealFor: "Empresas que buscam expansão e recursos avançados",
    plans: [
      {
        name: "Basic",
        price: "US$ 29/mês",
        features: [
          "Loja online completa",
          "Produtos ilimitados",
          "2 contas de usuário",
          "Relatórios básicos",
        ],
      },
      {
        name: "Shopify",
        price: "US$ 79/mês",
        features: [
          "Tudo do Basic",
          "5 contas de usuário",
          "Relatórios profissionais",
          "Cartões presente",
        ],
      },
      {
        name: "Advanced",
        price: "US$ 299/mês",
        features: [
          "Tudo do Shopify",
          "15 contas de usuário",
          "Relatórios avançados",
          "Taxas de transação reduzidas",
        ],
      },
    ],
    pros: [
      "Maior ecossistema de apps e integrações do mundo",
      "Infraestrutura robusta e escalável",
      "Temas profissionais e customizáveis",
      "Suporte 24/7 em várias línguas",
      "PDV (Point of Sale) integrado",
    ],
    cons: [
      "Sem plano gratuito",
      "Preços em dólar podem variar com câmbio",
      "Apps pagos podem aumentar custo mensal",
      "Interface em inglês (com tradução)",
    ],
    paymentMethods: ["Shopify Payments", "PayPal", "Cartões de crédito", "Pix (via apps)"],
    integrations: ["Correios", "Oberlo", "Facebook", "Instagram", "Amazon", "Google Shopping"],
    setupComplexity: 3,
    checkoutTransparent: true,
    customDomain: true,
    sslIncluded: true,
    supportChannels: ["Chat 24/7", "E-mail", "Telefone", "Fórum da comunidade"],
  },
  {
    rank: 3,
    name: "Mercado Livre",
    slug: "mercado-livre",
    logo: "🏪",
    isFree: true,
    rating: 4.5,
    priceFrom: "R$ 0",
    features: [
      { text: "Maior marketplace da América Latina" },
      { text: "Milhões de visitantes mensais" },
      { text: "Mercado Envios incluso" },
      { text: "Reputação construída" },
    ],
    visits: "100M+",
    products: "Ilimitado",
    setupTime: "15min",
    description: "Marketplace líder que permite vender com a estrutura e audiência já estabelecida.",
    type: "Marketplace",
    idealFor: "Quem busca visibilidade imediata e grandes volumes",
    plans: [
      {
        name: "Clássico",
        price: "R$ 0/mês + comissão",
        features: [
          "Anúncios ilimitados",
          "Mercado Envios",
          "Atendimento ao comprador",
          "Comissão de 11-18% por venda",
        ],
      },
      {
        name: "Premium",
        price: "R$ 0/mês + comissão reduzida",
        features: [
          "Comissões reduzidas",
          "Anúncios destacados",
          "Suporte prioritário",
          "Ferramentas de gestão",
        ],
      },
    ],
    pros: [
      "Tráfego massivo já estabelecido",
      "Sem custos fixos mensais",
      "Logística Mercado Envios muito eficiente",
      "Reputação de vendedor valorizada",
      "Mercado Pago integrado",
    ],
    cons: [
      "Comissões altas por venda",
      "Pouco controle sobre branding",
      "Competição intensa com outros vendedores",
      "Regras rígidas da plataforma",
    ],
    paymentMethods: ["Mercado Pago", "Pix", "Boleto", "Cartão de crédito"],
    integrations: ["Mercado Envios", "Mercado Pago", "ERPs", "Sistemas de gestão"],
    setupComplexity: 1,
    checkoutTransparent: false,
    customDomain: false,
    sslIncluded: true,
    supportChannels: ["Chat", "Central de Ajuda", "Telefone"],
  },
  {
    rank: 4,
    name: "Shopee",
    slug: "shopee",
    logo: "🧡",
    isFree: true,
    rating: 4.4,
    priceFrom: "R$ 0",
    features: [
      { text: "Frete grátis em muitos produtos" },
      { text: "Gamificação e cupons" },
      { text: "Sem mensalidade" },
      { text: "App mobile intuitivo" },
    ],
    visits: "50M+",
    products: "Ilimitado",
    setupTime: "20min",
    description: "Marketplace asiático em rápido crescimento no Brasil, focado em mobile e promoções.",
    type: "Marketplace",
    idealFor: "Vendedores que querem aproveitar tráfego mobile e promoções constantes",
    plans: [
      {
        name: "Vendedor Shopee",
        price: "R$ 0/mês + comissão",
        features: [
          "Comissão de 10-15% por venda",
          "Frete subsidiado em campanhas",
          "Ferramentas de marketing gratuitas",
          "App de gestão mobile",
        ],
      },
    ],
    pros: [
      "Sem custo fixo mensal",
      "Grande foco em mobile",
      "Campanhas promocionais frequentes",
      "Crescimento acelerado de audiência",
      "Interface simples e intuitiva",
    ],
    cons: [
      "Menor audiência que Mercado Livre",
      "Comissões por venda",
      "Menos controle sobre branding",
      "Muita concorrência por preço",
    ],
    paymentMethods: ["ShopeePay", "Pix", "Boleto", "Cartão de crédito"],
    integrations: ["Shopee Logistics", "Chat integrado", "Live streaming"],
    setupComplexity: 1,
    checkoutTransparent: false,
    customDomain: false,
    sslIncluded: true,
    supportChannels: ["Chat no app", "Central de Ajuda"],
  },
  {
    rank: 5,
    name: "WooCommerce",
    slug: "woocommerce",
    logo: "🔌",
    isFree: true,
    rating: 4.3,
    priceFrom: "R$ 0",
    features: [
      { text: "Plugin gratuito para WordPress" },
      { text: "Controle total sobre a loja" },
      { text: "Milhares de extensões" },
      { text: "Open source" },
    ],
    setupTime: "2h",
    description: "Plugin de e-commerce para WordPress com flexibilidade máxima e controle total.",
    type: "Plataforma Open Source",
    idealFor: "Quem tem conhecimento técnico e quer controle total",
    plans: [
      {
        name: "Gratuito",
        price: "R$ 0 (plugin)",
        features: [
          "Plugin gratuito",
          "Requer hospedagem própria (R$ 20-200/mês)",
          "Customização ilimitada",
          "Milhares de extensões",
        ],
      },
    ],
    pros: [
      "Gratuito e open source",
      "Customização ilimitada",
      "Grande comunidade e suporte",
      "Integração perfeita com WordPress",
      "Extensões para tudo",
    ],
    cons: [
      "Requer hospedagem própria",
      "Curva de aprendizado técnica",
      "Manutenção e atualizações manuais",
      "Responsabilidade pela segurança",
    ],
    paymentMethods: ["Configurável via plugins", "Pix", "PayPal", "PagSeguro", "Mercado Pago"],
    integrations: ["Plugins ilimitados", "Correios", "Melhor Envio", "ERPs", "CRMs"],
    setupComplexity: 4,
    checkoutTransparent: true,
    customDomain: true,
    sslIncluded: false,
    supportChannels: ["Comunidade", "Documentação", "Fóruns"],
  },
  {
    rank: 6,
    name: "Tray",
    slug: "tray",
    logo: "📦",
    isFree: false,
    rating: 4.2,
    priceFrom: "R$ 59,90",
    features: [
      { text: "Plataforma brasileira completa" },
      { text: "Checkout transparente" },
      { text: "Suporte em português" },
      { text: "Integrações nacionais" },
    ],
    visits: "3M+",
    products: "Ilimitado",
    setupTime: "1h",
    description: "Plataforma brasileira consolidada com foco no mercado nacional e integrações locais.",
    type: "Loja Própria",
    idealFor: "Empresas que buscam solução nacional com suporte local",
    plans: [
      {
        name: "Bronze",
        price: "R$ 59,90/mês",
        features: [
          "Loja completa",
          "Produtos ilimitados",
          "Checkout transparente",
          "Suporte básico",
        ],
      },
      {
        name: "Prata",
        price: "R$ 99,90/mês",
        features: [
          "Tudo do Bronze",
          "Relatórios avançados",
          "Multi-lojas",
          "Integração com marketplaces",
        ],
      },
      {
        name: "Ouro",
        price: "R$ 199,90/mês",
        features: [
          "Tudo do Prata",
          "Suporte prioritário",
          "API completa",
          "Personalização avançada",
        ],
      },
    ],
    pros: [
      "Empresa brasileira com suporte local",
      "Integrações focadas no mercado nacional",
      "Checkout otimizado",
      "Recursos completos em todos os planos",
    ],
    cons: [
      "Sem plano gratuito",
      "Interface pode parecer menos moderna",
      "Menos apps do que concorrentes internacionais",
    ],
    paymentMethods: ["Pix", "Boleto", "Cartão de crédito", "Principais gateways BR"],
    integrations: ["Correios", "Melhor Envio", "Bling", "Tiny", "Omie", "Marketplaces"],
    setupComplexity: 3,
    checkoutTransparent: true,
    customDomain: true,
    sslIncluded: true,
    supportChannels: ["Telefone", "Chat", "E-mail", "Central de Ajuda"],
  },
];
