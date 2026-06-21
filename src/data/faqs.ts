import type { Platform } from "@/data/platforms";

export interface PlatformFaq {
  question: string;
  answer: string;
}

interface KeywordProfile {
  primary: string[];
  secondary: string[];
  longTail: string[];
  audience: string;
}

export const platformKeywordProfiles: Record<string, KeywordProfile> = {
  "nuvemshop": {
    primary: ["Nuvemshop", "loja virtual Nuvemshop", "plataforma de ecommerce"],
    secondary: ["Nuvemshop grátis", "criar loja virtual grátis", "plataforma para loja virtual"],
    longTail: ["como criar loja virtual grátis na Nuvemshop", "Nuvemshop vale a pena para pequeno negócio", "melhor plataforma de ecommerce gratuita no Brasil"],
    audience: "empreendedores que querem montar uma loja virtual profissional com baixo investimento inicial",
  },
  "shopify": {
    primary: ["Shopify", "loja virtual Shopify", "plataforma Shopify"],
    secondary: ["Shopify Brasil", "Shopify preço", "criar loja virtual Shopify"],
    longTail: ["Shopify vale a pena para vender online", "quanto custa criar loja virtual na Shopify", "Shopify é boa para ecommerce com domínio próprio"],
    audience: "marcas que buscam uma estrutura escalável para vender online no Brasil e fora do país",
  },
  "mercado-livre": {
    primary: ["Mercado Livre", "vender no Mercado Livre", "marketplace Mercado Livre"],
    secondary: ["loja Mercado Livre", "Mercado Livre vendedor", "vender online marketplace"],
    longTail: ["como começar a vender no Mercado Livre", "Mercado Livre vale a pena para loja online", "melhor marketplace para vender produtos no Brasil"],
    audience: "vendedores que querem aproveitar tráfego pronto e alta intenção de compra",
  },
  "shopee": {
    primary: ["Shopee", "vender na Shopee", "marketplace Shopee"],
    secondary: ["Shopee vendedor", "loja Shopee", "Shopee Brasil"],
    longTail: ["como vender na Shopee começando do zero", "Shopee vale a pena para pequenos vendedores", "marketplace grátis para vender online"],
    audience: "lojistas que querem volume, campanhas promocionais e entrada rápida em marketplace",
  },
  "woocommerce": {
    primary: ["WooCommerce", "loja virtual WordPress", "plugin ecommerce WordPress"],
    secondary: ["WooCommerce grátis", "criar loja WordPress", "ecommerce com domínio próprio"],
    longTail: ["como criar loja virtual grátis com WooCommerce", "WooCommerce vale a pena para loja virtual", "melhor plugin de ecommerce para WordPress"],
    audience: "empreendedores que desejam controle técnico, SEO forte e loja própria no WordPress",
  },
  "tray": {
    primary: ["Tray", "loja virtual Tray", "plataforma Tray"],
    secondary: ["Tray ecommerce", "Tray preço", "criar loja virtual Tray"],
    longTail: ["Tray vale a pena para ecommerce brasileiro", "quanto custa loja virtual na Tray", "plataforma de ecommerce com integração marketplace"],
    audience: "empresas que precisam de uma loja virtual completa com integrações comerciais",
  },
  "loja-integrada": {
    primary: ["Loja Integrada", "loja virtual grátis", "plataforma Loja Integrada"],
    secondary: ["Loja Integrada grátis", "criar loja online grátis", "plataforma de ecommerce gratuita"],
    longTail: ["como criar loja virtual grátis na Loja Integrada", "Loja Integrada vale a pena para iniciantes", "melhores plataformas de ecommerce gratuitas"],
    audience: "iniciantes que querem validar uma loja online sem começar pagando mensalidade",
  },
  "vtex": {
    primary: ["VTEX", "plataforma VTEX", "ecommerce enterprise"],
    secondary: ["VTEX IO", "VTEX preço", "plataforma de ecommerce robusta"],
    longTail: ["VTEX vale a pena para grandes empresas", "melhor plataforma enterprise de ecommerce", "plataforma ecommerce para alto volume de vendas"],
    audience: "operações médias e grandes que precisam de escalabilidade, omnichannel e arquitetura robusta",
  },
  "bagy": {
    primary: ["Bagy", "loja virtual Bagy", "plataforma Bagy"],
    secondary: ["Bagy grátis", "Bagy ecommerce", "vender pelo Instagram"],
    longTail: ["Bagy vale a pena para vender pelo Instagram", "como criar loja virtual grátis na Bagy", "plataforma para loja online e redes sociais"],
    audience: "empreendedores que vendem por redes sociais e querem transformar seguidores em compradores",
  },
  "amazon-brasil": {
    primary: ["Amazon Brasil", "vender na Amazon", "marketplace Amazon"],
    secondary: ["Amazon Seller", "loja Amazon Brasil", "vender online na Amazon"],
    longTail: ["como vender na Amazon Brasil como pessoa jurídica", "Amazon vale a pena para vendedores brasileiros", "marketplace com alta confiança para vender online"],
    audience: "marcas e revendedores que buscam credibilidade, alcance nacional e logística marketplace",
  },
  "magazord": {
    primary: ["Magazord", "loja virtual Magazord", "plataforma Magazord"],
    secondary: ["Magazord ecommerce", "Magazord preço", "plataforma para varejo online"],
    longTail: ["Magazord vale a pena para ecommerce", "plataforma de loja virtual para varejo brasileiro", "ecommerce com ERP e integrações"],
    audience: "varejistas que precisam integrar operação, catálogo, pagamentos e canais de venda",
  },
  "elo7": {
    primary: ["Elo7", "vender no Elo7", "marketplace de artesanato"],
    secondary: ["loja Elo7", "Elo7 vendedor", "vender produtos artesanais"],
    longTail: ["como vender artesanato no Elo7", "Elo7 vale a pena para produtos personalizados", "marketplace para artesanato e produtos criativos"],
    audience: "artesãos, criadores e pequenos produtores de itens personalizados",
  },
  "hotmart": {
    primary: ["Hotmart", "vender na Hotmart", "plataforma de infoprodutos"],
    secondary: ["Hotmart produtor", "Hotmart afiliado", "vender curso online"],
    longTail: ["como vender curso online pela Hotmart", "Hotmart vale a pena para produtos digitais", "melhor plataforma para vender infoprodutos"],
    audience: "produtores digitais, especialistas, afiliados e criadores de cursos online",
  },
  "eduzz": {
    primary: ["Eduzz", "vender na Eduzz", "plataforma de produtos digitais"],
    secondary: ["Eduzz afiliado", "Eduzz produtor", "vender curso online Eduzz"],
    longTail: ["Eduzz vale a pena para infoprodutos", "como vender produtos digitais na Eduzz", "plataforma para afiliados e produtores digitais"],
    audience: "produtores, afiliados e negócios digitais que vendem cursos, mentorias e conteúdos online",
  },
  "americanas-marketplace": {
    primary: ["Americanas Marketplace", "vender na Americanas", "marketplace Americanas"],
    secondary: ["seller Americanas", "loja Americanas Marketplace", "marketplace para ecommerce"],
    longTail: ["como vender na Americanas Marketplace", "Americanas Marketplace vale a pena", "marketplace brasileiro para vender produtos online"],
    audience: "lojistas que querem ampliar exposição em um marketplace conhecido no varejo brasileiro",
  },
  "enjoei": {
    primary: ["Enjoei", "vender no Enjoei", "marketplace de usados"],
    secondary: ["loja Enjoei", "vender roupas usadas", "brechó online"],
    longTail: ["como vender roupas usadas no Enjoei", "Enjoei vale a pena para brechó online", "marketplace para desapegar produtos usados"],
    audience: "pessoas e brechós que vendem moda, acessórios e itens seminovos pela internet",
  },
  "olx": {
    primary: ["OLX", "vender na OLX", "classificados online"],
    secondary: ["anunciar na OLX", "OLX vendedor", "vender produtos usados"],
    longTail: ["como anunciar na OLX grátis", "OLX vale a pena para vender usado", "site para vender produtos usados online"],
    audience: "vendedores locais que querem anunciar produtos novos ou usados com negociação direta",
  },
  "magalu-marketplace": {
    primary: ["Magalu Marketplace", "vender no Magalu", "marketplace Magazine Luiza"],
    secondary: ["Parceiro Magalu", "seller Magalu", "loja Magalu Marketplace"],
    longTail: ["como vender no Magalu Marketplace", "Magalu Marketplace vale a pena para lojistas", "marketplace brasileiro com grande tráfego"],
    audience: "lojistas que querem acessar a audiência do Magazine Luiza e canais de venda nacionais",
  },
  "kiwify": {
    primary: ["Kiwify", "vender na Kiwify", "plataforma de infoprodutos"],
    secondary: ["Kiwify afiliado", "Kiwify produtor", "checkout para infoprodutos"],
    longTail: ["Kiwify vale a pena para vender curso online", "como vender produtos digitais na Kiwify", "plataforma simples para infoprodutores"],
    audience: "criadores digitais que querem checkout simples, área de membros e venda de cursos online",
  },
  "yampi": {
    primary: ["Yampi", "checkout Yampi", "loja virtual Yampi"],
    secondary: ["Yampi ecommerce", "Yampi dropshipping", "checkout transparente"],
    longTail: ["Yampi vale a pena para loja virtual", "checkout transparente para ecommerce e dropshipping", "plataforma para loja virtual com alta conversão"],
    audience: "lojistas que priorizam checkout, conversão, integrações e operação de ecommerce enxuta",
  },
};

const fallbackProfile: KeywordProfile = {
  primary: ["plataforma de ecommerce", "loja virtual", "vender online"],
  secondary: ["criar loja virtual", "site para ecommerce", "plataforma para loja virtual"],
  longTail: ["melhor plataforma para criar loja virtual", "como vender online com loja virtual", "plataforma de ecommerce para pequenos negócios"],
  audience: "empreendedores que querem escolher uma plataforma confiável para vender online",
};

const joinKeywords = (keywords: string[]) => keywords.join(", ");

export const getPlatformFaqs = (platform: Platform): PlatformFaq[] => {
  const profile = platformKeywordProfiles[platform.slug] ?? fallbackProfile;
  const primary = joinKeywords(profile.primary);
  const secondary = joinKeywords(profile.secondary);
  const longTail = joinKeywords(profile.longTail);
  const freeOrPaid = platform.isFree ? "tem opção grátis" : "é uma plataforma paga";
  const domainAnswer = platform.customDomain ? "permite usar domínio próprio" : "não é a opção mais indicada para quem quer domínio próprio completo";
  const checkoutAnswer = platform.checkoutTransparent ? "oferece checkout transparente ou fluxo de pagamento integrado" : "pode depender de checkout externo ou fluxo de pagamento do próprio canal";
  const sslAnswer = platform.sslIncluded ? "inclui SSL para transmitir mais confiança ao comprador" : "pode exigir configuração adicional de segurança";
  const appAnswer = platform.mobileApp ? "também conta com recursos mobile para gestão ou venda" : "não se destaca pelo aplicativo mobile como principal diferencial";
  const integrations = platform.integrations.slice(0, 5).join(", ");
  const payments = platform.paymentMethods.slice(0, 5).join(", ");
  const plans = platform.plans.map((plan) => `${plan.name}: ${plan.price}`).join("; ");

  return [
    {
      question: `O que é ${platform.name}?`,
      answer: `${platform.name} é uma solução ligada a ${primary}, indicada para ${profile.audience}. Na análise da Lojas Grátis, a plataforma aparece como alternativa para quem pesquisa ${secondary} e quer comparar recursos antes de escolher onde vender online.`,
    },
    {
      question: `${platform.name} é grátis?`,
      answer: `${platform.name} ${freeOrPaid}. O preço inicial informado é ${platform.priceFrom}, e os planos analisados são: ${plans}. Por isso, quem busca ${profile.secondary[0]} deve comparar mensalidade, comissões, recursos inclusos e limites de venda.`,
    },
    {
      question: `${platform.name} vale a pena para vender online?`,
      answer: `${platform.name} vale a pena quando combina com o tipo de negócio descrito como ${platform.idealFor}. Ela recebeu avaliação ${platform.rating.toFixed(1)}/5 e pode atender buscas como ${longTail}, desde que o lojista avalie custos, integrações, suporte e potencial de escala.`,
    },
    {
      question: `Como criar loja virtual com ${platform.name}?`,
      answer: `Para criar loja virtual com ${platform.name}, o primeiro passo é definir produto, preço, meios de pagamento e canais de divulgação. Depois, configure catálogo, identidade visual, frete, checkout e domínio quando disponível. Essa jornada atende pesquisas como ${profile.longTail[0]}.`,
    },
    {
      question: `Quanto custa usar ${platform.name}?`,
      answer: `O custo da ${platform.name} começa em ${platform.priceFrom}. Além da mensalidade, considere taxas de transação, gateways, anúncios, temas, aplicativos, frete e possíveis integrações. Essa comparação é essencial para quem busca ${platform.name} preço, plataforma ecommerce e loja virtual profissional.`,
    },
    {
      question: `${platform.name} é boa para iniciantes?`,
      answer: `${platform.name} pode ser boa para iniciantes quando o objetivo é ${platform.idealFor}. A complexidade de configuração foi classificada como ${platform.setupComplexity}/5, e o tempo estimado é ${platform.setupTime || "variável conforme o projeto"}.`,
    },
    {
      question: `${platform.name} serve para ecommerce com domínio próprio?`,
      answer: `${platform.name} ${domainAnswer}. Para SEO, marca e confiança, domínio próprio costuma ser importante em buscas por loja virtual, plataforma de ecommerce e site para vender online.`,
    },
    {
      question: `${platform.name} tem checkout transparente?`,
      answer: `${platform.name} ${checkoutAnswer}. Esse ponto influencia conversão, abandono de carrinho e experiência de compra, principalmente para quem pesquisa checkout transparente, ecommerce de alta conversão e melhor plataforma para loja virtual.`,
    },
    {
      question: `Quais meios de pagamento a ${platform.name} aceita?`,
      answer: `A ${platform.name} trabalha com meios de pagamento como ${payments}. Antes de escolher, confira taxas, prazo de recebimento, Pix, cartão, boleto e compatibilidade com o modelo de loja online.`,
    },
    {
      question: `${platform.name} tem integração com marketplaces e ferramentas externas?`,
      answer: `As integrações destacadas da ${platform.name} incluem ${integrations}. Integrações são importantes para anúncios, ERP, logística, automação, controle de estoque e expansão em marketplaces.`,
    },
    {
      question: `${platform.name} é segura para criar loja online?`,
      answer: `${platform.name} ${sslAnswer}. Recursos como SSL, métodos de pagamento confiáveis, políticas claras, suporte e reputação ajudam a aumentar confiança em pesquisas por melhor site para ecommerce e plataforma para criar loja virtual.`,
    },
    {
      question: `Quais produtos vendem melhor na ${platform.name}?`,
      answer: `Na ${platform.name}, os tipos de produto com maior aderência incluem ${(platform.bestProductTypes || [platform.idealFor]).join(", ")}. A escolha ideal depende de margem, recorrência, concorrência, logística e demanda de busca.`,
    },
    {
      question: `${platform.name} é melhor que outras plataformas de ecommerce?`,
      answer: `${platform.name} pode ser melhor que outras plataformas quando seus pontos fortes combinam com o negócio. Compare com alternativas do ranking considerando preço, facilidade, tráfego, domínio próprio, checkout, suporte, integrações e escala.`,
    },
    {
      question: `${platform.name} ajuda a aparecer no Google?`,
      answer: `${platform.name} pode ajudar no SEO se permitir páginas indexáveis, conteúdo otimizado, boas URLs, velocidade, SSL e domínio próprio. Para buscas como ${secondary}, o resultado depende também de descrições de produto, blog, links internos e autoridade do site.`,
    },
    {
      question: `Quais são as vantagens da ${platform.name}?`,
      answer: `Entre as vantagens da ${platform.name}, destacam-se: ${platform.pros.slice(0, 4).join("; ")}. Esses pontos pesam para quem pesquisa ${profile.primary[1] || profile.primary[0]} e quer vender online com mais segurança.`,
    },
    {
      question: `Quais são as desvantagens da ${platform.name}?`,
      answer: `As principais desvantagens da ${platform.name} incluem: ${platform.cons.slice(0, 4).join("; ")}. Avaliar essas limitações evita escolher uma plataforma que não combine com orçamento, operação ou expectativa de crescimento.`,
    },
    {
      question: `${platform.name} funciona bem no celular?`,
      answer: `${platform.name} ${appAnswer}. Mesmo assim, é importante testar navegação mobile, checkout, velocidade, layout responsivo e gestão de pedidos, porque grande parte das compras online no Brasil acontece pelo celular.`,
    },
    {
      question: `Qual estratégia de marketing combina com ${platform.name}?`,
      answer: `Para ${platform.name}, as estratégias recomendadas incluem ${(platform.recommendedMarketing || ["SEO", "Google Ads", "redes sociais", "marketplaces"]).join(", ")}. A melhor combinação depende de margem, ticket médio, concorrência e intenção de busca.`,
    },
    {
      question: `${platform.name} é indicada para pequenos negócios?`,
      answer: `${platform.name} pode atender pequenos negócios quando o empreendedor precisa de ${platform.type.toLowerCase()} e busca termos como ${profile.secondary[1] || "criar loja virtual"}. O ideal é começar validando produtos, custos, canais de aquisição e suporte disponível.`,
    },
    {
      question: `Para quem a ${platform.name} é mais indicada?`,
      answer: `${platform.name} é mais indicada para ${platform.idealFor}. Ela deve entrar na lista de comparação de quem pesquisa ${primary}, ${secondary} e ${longTail}, especialmente antes de decidir entre loja própria, marketplace ou plataforma de infoprodutos.`,
    },
  ];
};