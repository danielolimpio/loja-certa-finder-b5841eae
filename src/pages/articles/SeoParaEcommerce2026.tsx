import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  User,
  Tag,
  Lightbulb,
  AlertTriangle,
  CheckCircle,
  Search,
  TrendingUp,
  Target,
  Zap,
  Store,
  BarChart3,
  Globe,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ArticleAuthorBio from "@/components/ArticleAuthorBio";
import RelatedArticles from "@/components/RelatedArticles";

const SeoParaEcommerce2026 = () => {
  const articleData = {
    title: "SEO para E-commerce em 2026: Guia Completo para Ranquear no Google",
    description:
      "Guia prático de SEO para e-commerce em 2026. Aprenda a ranquear páginas de produto no Google, dobrar tráfego orgânico e vender mais sem depender de anúncios.",
    publishedAt: "2026-02-04",
    updatedAt: "2026-02-04",
    author: { name: "Equipe Lojas Grátis", role: "Especialistas em E-commerce" },
    readingTime: 22,
    category: "SEO & Marketing Digital",
    featuredImage: "/images/artigos/seo-para-ecommerce-2026.jpg",
    canonicalUrl:
      "https://lojasgratis.com.br/artigo/seo-para-ecommerce-guia-completo-2026/",
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: articleData.title,
    description: articleData.description,
    image: `https://lojasgratis.com.br${articleData.featuredImage}`,
    author: { "@type": "Organization", name: articleData.author.name },
    publisher: {
      "@type": "Organization",
      name: "Lojas Grátis",
      logo: {
        "@type": "ImageObject",
        url: "https://lojasgratis.com.br/favicon.png",
      },
    },
    datePublished: articleData.publishedAt,
    dateModified: articleData.updatedAt,
    mainEntityOfPage: { "@type": "WebPage", "@id": articleData.canonicalUrl },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "O que é SEO para e-commerce e por que é tão importante em 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SEO para e-commerce é o conjunto de práticas que ajusta a estrutura, o conteúdo e a autoridade de uma loja virtual para aparecer nas primeiras posições do Google. Em 2026, com o encarecimento dos anúncios pagos e a chegada da busca com IA, ranquear organicamente é o que diferencia lojas rentáveis de lojas que dependem 100% de mídia paga.",
        },
      },
      {
        "@type": "Question",
        name: "Quanto tempo leva para uma loja virtual aparecer no Google?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Uma loja nova costuma levar de 30 a 90 dias para começar a aparecer em buscas de baixa concorrência, e de 6 a 12 meses para conquistar posições relevantes em palavras-chave comerciais. O prazo depende da autoridade do domínio, da qualidade do conteúdo, da estrutura técnica e da consistência das publicações.",
        },
      },
      {
        "@type": "Question",
        name: "Como escolher palavras-chave para páginas de produto?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Combine a palavra-chave principal (o nome do produto) com termos de intenção comercial: 'comprar', 'preço', 'melhor', 'onde encontrar'. Priorize palavras-chave de cauda longa como 'tênis de corrida masculino leve barato', que têm menor concorrência e maior taxa de conversão.",
        },
      },
      {
        "@type": "Question",
        name: "O que é Core Web Vitals e como isso afeta minha loja?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Core Web Vitals são três métricas do Google que medem a experiência do usuário: LCP (velocidade de carregamento), INP (resposta à interação) e CLS (estabilidade visual). Lojas que não atendem esses critérios perdem posições e conversões — cada segundo a mais de carregamento reduz a conversão em cerca de 7%.",
        },
      },
      {
        "@type": "Question",
        name: "Preciso de blog para fazer SEO na minha loja virtual?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. O blog é o principal canal para capturar tráfego de intenção informacional — pessoas que ainda não sabem o que comprar. Um blog bem estruturado, com pautas alinhadas às dores do seu público, pode gerar até 60% do tráfego orgânico total de uma loja.",
        },
      },
      {
        "@type": "Question",
        name: "Qual a diferença entre SEO on-page, off-page e técnico?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SEO on-page envolve tudo dentro da página (título, texto, imagens, links internos). SEO off-page é o que acontece fora do seu site, principalmente backlinks e menções. SEO técnico cuida da estrutura: velocidade, indexação, schema markup, sitemap, canonical, mobile-first.",
        },
      },
      {
        "@type": "Question",
        name: "Como aparecer no Google Shopping gratuitamente?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cadastre sua loja no Google Merchant Center, envie um feed de produtos otimizado (com títulos ricos em palavras-chave, imagens de alta qualidade e schema Product) e habilite as listagens gratuitas. Produtos com Rich Snippets de avaliação e disponibilidade têm CTR até 3x maior.",
        },
      },
      {
        "@type": "Question",
        name: "Vale a pena investir em SEO ou é melhor gastar em anúncios?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A resposta é: os dois, mas em proporções diferentes ao longo do tempo. No início, anúncios trazem venda imediata. SEO exige de 3 a 6 meses para maturar, mas depois entrega tráfego recorrente sem custo por clique — a longo prazo, o CAC de SEO tende a ser 5 a 10 vezes menor que o de mídia paga.",
        },
      },
      {
        "@type": "Question",
        name: "Como a Search Generative Experience (SGE) da Google afeta o SEO em 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A SGE apresenta respostas geradas por IA no topo da página. Isso reduz cliques em algumas buscas informacionais, mas favorece marcas com autoridade, conteúdo estruturado e schema markup. Lojas que otimizam para EEAT e usam dados estruturados são citadas com maior frequência nas respostas geradas.",
        },
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>SEO para E-commerce 2026: Guia Completo (Ranqueie no Google)</title>
        <meta name="description" content={articleData.description} />
        <meta
          name="keywords"
          content="seo para ecommerce, seo loja virtual, como aparecer no google, seo 2026, ranquear no google, palavras-chave para ecommerce, seo técnico ecommerce, core web vitals loja virtual, schema markup produto, google shopping grátis, google search console ecommerce, tráfego orgânico loja virtual, seo on-page, seo off-page, backlinks ecommerce, cauda longa produto, ia no seo, sge google, otimização de imagens ecommerce, url amigável, sitemap ecommerce, robots txt loja virtual, seo shopify, seo nuvemshop, seo tray, seo woocommerce, seo mercado livre, cro ecommerce, ctr google, taxa de conversão loja virtual, marketing digital ecommerce, tendências seo 2026"
        />
        <link rel="canonical" href={articleData.canonicalUrl} />
        <meta property="og:title" content={articleData.title} />
        <meta property="og:description" content={articleData.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={articleData.canonicalUrl} />
        <meta
          property="og:image"
          content={`https://lojasgratis.com.br${articleData.featuredImage}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      <Header />

      <main className="min-h-screen bg-gradient-to-b from-background via-muted/10 to-background">
        <article className="container max-w-4xl py-10 md:py-16">
          <BreadcrumbNav
            items={[
              { label: "Blog", href: "/blog/" },
              { label: "SEO para E-commerce 2026" },
            ]}
          />

          <header className="mt-8 mb-10">
            <Badge variant="secondary" className="mb-4">
              <Tag className="w-3 h-3 mr-1" />
              {articleData.category}
            </Badge>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              SEO para E-commerce em 2026: o Guia Definitivo para Ranquear no Google Sem Depender de Anúncios
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              Anúncio pago é aluguel. SEO é patrimônio. Neste guia, você vai entender como
              transformar sua loja virtual em uma máquina de tráfego orgânico que vende todos os
              dias — mesmo quando o cartão de crédito da mídia paga estoura no meio do mês.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                {articleData.author.name}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {new Date(articleData.publishedAt).toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {articleData.readingTime} min de leitura
              </span>
            </div>
          </header>

          <figure className="mb-10 rounded-2xl overflow-hidden border border-border/60">
            <img
              src={articleData.featuredImage}
              alt="Empreendedor analisando dashboards de SEO e rankings do Google para sua loja virtual"
              width={1600}
              height={896}
              fetchPriority="high"
              className="w-full h-auto"
            />
            <figcaption className="text-xs text-center text-muted-foreground py-2 px-3 bg-muted/30">
              Quem controla o Google, controla o custo de aquisição da loja.
            </figcaption>
          </figure>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {/* Intro */}
              <section className="mb-12">
                <p className="text-lg leading-relaxed !mb-6">
                  Existe uma cena que se repete em quase toda loja virtual brasileira que passa
                  dos primeiros meses de vida: o dono olha a planilha de mídia paga, vê que
                  gastou R$ 8 mil em anúncios para vender R$ 12 mil, tira frete, imposto, custo
                  do produto e percebe que <strong>trabalhou o mês inteiro para pagar a
                  Meta e o Google Ads</strong>. Se você já viveu isso, este guia é para você.
                </p>

                <p className="text-lg leading-relaxed !mb-6">
                  SEO para e-commerce não é mágica, não é sorte e não depende de "estar na moda".
                  É um método com pilares muito claros — e a boa notícia é que, em 2026, com a
                  chegada da busca generativa (SGE), das <em>AI Overviews</em> e da nova
                  concorrência entre marketplaces, ranquear organicamente ficou até mais
                  importante do que era há três anos.
                </p>

                <Card className="border-l-4 border-l-primary bg-primary/5 not-prose my-6">
                  <CardContent className="p-5">
                    <p className="text-base flex gap-3">
                      <Lightbulb className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Resumo executivo:</strong> SEO de e-commerce em 2026 é a soma
                        de três disciplinas — <em>técnico</em> (site rápido e indexável),{" "}
                        <em>conteúdo</em> (páginas úteis, com intenção certa) e{" "}
                        <em>autoridade</em> (links, marca, reputação). Faltar qualquer uma
                        derruba o ranking.
                      </span>
                    </p>
                  </CardContent>
                </Card>
              </section>

              <Separator className="my-10" />

              {/* Sumário */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold !mb-4">Sumário rápido</h2>
                <ol className="!mb-2 space-y-1">
                  <li><a href="#por-que" className="text-primary hover:underline">1. Por que SEO ainda vale a pena em 2026</a></li>
                  <li><a href="#palavras" className="text-primary hover:underline">2. Pesquisa de palavras-chave para lojas virtuais</a></li>
                  <li><a href="#tecnico" className="text-primary hover:underline">3. SEO técnico: a base que ninguém vê</a></li>
                  <li><a href="#onpage" className="text-primary hover:underline">4. SEO on-page: páginas de produto e categoria</a></li>
                  <li><a href="#conteudo" className="text-primary hover:underline">5. Blog e conteúdo: o motor de tráfego</a></li>
                  <li><a href="#offpage" className="text-primary hover:underline">6. Autoridade e backlinks</a></li>
                  <li><a href="#ia" className="text-primary hover:underline">7. IA, SGE e o novo Google</a></li>
                  <li><a href="#erros" className="text-primary hover:underline">8. 10 erros que matam o SEO</a></li>
                </ol>
              </section>

              <Separator className="my-10" />

              {/* Por que */}
              <section id="por-que" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold !mb-6 flex items-center gap-3">
                  <TrendingUp className="w-8 h-8 text-primary" />
                  1. Por que SEO ainda vale a pena (e está mais caro NÃO fazer)
                </h2>

                <p className="text-lg leading-relaxed !mb-6">
                  De acordo com a{" "}
                  <a
                    href="https://www.abcomm.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    ABComm
                  </a>
                  , o e-commerce brasileiro deve fechar 2026 com mais de R$ 235 bilhões em
                  faturamento — e mais de 40% desse volume começa em uma busca no Google. Cada
                  posição perdida na primeira página significa, na prática, ver o cliente clicar
                  no concorrente antes de te encontrar. O CPC médio no varejo em nichos como
                  moda, cosméticos, eletrônicos e casa passou dos R$ 3,50, com picos superiores
                  a R$ 12 em datas comerciais.
                </p>

                <p className="text-lg leading-relaxed !mb-6">
                  Enquanto isso, o clique orgânico continua sendo gratuito. Uma loja que ocupa
                  a posição 1 para uma palavra-chave de 8.000 buscas/mês pode receber entre
                  1.800 e 2.400 visitas orgânicas mensais sem pagar um centavo por elas. É
                  exatamente esse ativo que separa lojas escaláveis de lojas reféns do orçamento
                  de mídia.
                </p>

                <Card className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800 not-prose my-6">
                  <CardContent className="p-5 flex gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <p className="text-base">
                      <strong>Verdade incômoda:</strong> lojas que investem em SEO por 12 meses
                      seguidos conseguem, em média, reduzir o CAC (custo de aquisição de
                      cliente) em 30% a 55% no ano seguinte. É o único canal que fica melhor
                      quanto mais tempo passa.
                    </p>
                  </CardContent>
                </Card>
              </section>

              <Separator className="my-10" />

              {/* Palavras-chave */}
              <section id="palavras" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold !mb-6 flex items-center gap-3">
                  <Search className="w-8 h-8 text-primary" />
                  2. Pesquisa de palavras-chave: o mapa da sua loja
                </h2>

                <p className="text-lg leading-relaxed !mb-6">
                  Toda estratégia de SEO começa aqui. Palavra-chave não é um "termo bonito" — é
                  a tradução exata do que o seu cliente digita no Google quando está com dinheiro
                  no bolso e problema para resolver. Você não escolhe palavras-chave; você
                  descobre as que já existem.
                </p>

                <h3 className="text-xl md:text-2xl font-semibold !mt-8 !mb-4">
                  Os 4 tipos de intenção de busca
                </h3>

                <ul className="!mb-6 space-y-3">
                  <li>
                    <strong>Informacional</strong> — "como escolher tênis de corrida". A pessoa
                    quer aprender. Conteúdo de blog resolve.
                  </li>
                  <li>
                    <strong>Navegacional</strong> — "netshoes tênis nike". A pessoa já sabe
                    aonde vai. Difícil competir se você não é a marca buscada.
                  </li>
                  <li>
                    <strong>Comercial</strong> — "melhor tênis de corrida barato". Está
                    comparando. Ideal para reviews e listas.
                  </li>
                  <li>
                    <strong>Transacional</strong> — "comprar tênis nike air zoom". Quer
                    pagar. Página de produto ou categoria.
                  </li>
                </ul>

                <p className="text-lg leading-relaxed !mb-6">
                  A grande sacada de 2026 é atacar as quatro camadas ao mesmo tempo, criando o
                  que chamamos de <em>cluster de conteúdo</em>: uma página comercial no topo
                  (categoria), páginas de produto, e vários posts de blog informacionais que
                  linkam para essas páginas comerciais.
                </p>

                <h3 className="text-xl md:text-2xl font-semibold !mt-8 !mb-4">
                  Ferramentas gratuitas para começar
                </h3>

                <ul className="!mb-6 space-y-2">
                  <li><strong>Google Search Console</strong>: mostra o que sua loja já ranqueia (mesmo em posições ruins).</li>
                  <li><strong>Google Trends</strong>: sazonalidade real de cada termo.</li>
                  <li><strong>Sugestões do Google</strong> (autocomplete e "As pessoas também perguntam"): mina de ouro para cauda longa.</li>
                  <li><strong>AnswerThePublic</strong>: perguntas frequentes por termo.</li>
                  <li><strong>Ubersuggest / Keyword Planner</strong>: volume estimado e CPC.</li>
                </ul>

                <p className="text-lg leading-relaxed !mb-6">
                  Vai bem além do óbvio: em vez de disputar "tênis feminino" (volume alto, KDI
                  brutal), atacar "tênis feminino confortável para trabalhar em pé" pode trazer
                  menos visitas — mas com conversão 5 a 8 vezes maior.
                </p>
              </section>

              <Separator className="my-10" />

              {/* Imagem meio */}
              <figure className="my-10 rounded-2xl overflow-hidden border border-border/60">
                <img
                  src="/images/artigos/seo-ecommerce-palavras-chave.jpg"
                  alt="Mesa de trabalho com laptop mostrando resultados do Google e caderno com lista de palavras-chave estratégicas para loja virtual"
                  width={1600}
                  height={896}
                  loading="lazy"
                  className="w-full h-auto"
                />
                <figcaption className="text-xs text-center text-muted-foreground py-2 px-3 bg-muted/30">
                  Pesquisa de palavras-chave é o alicerce do SEO — nada acima disso se sustenta sem ela.
                </figcaption>
              </figure>

              {/* SEO técnico */}
              <section id="tecnico" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold !mb-6 flex items-center gap-3">
                  <Zap className="w-8 h-8 text-primary" />
                  3. SEO técnico: a base invisível que decide tudo
                </h2>

                <p className="text-lg leading-relaxed !mb-6">
                  De nada adianta conteúdo genial se o robô do Google não consegue rastrear,
                  entender e indexar suas páginas. SEO técnico é o alicerce — e é aqui que a
                  maioria dos lojistas erra, seja por escolher uma plataforma mal configurada,
                  seja por deixar o site travado em ajustes básicos.
                </p>

                <h3 className="text-xl md:text-2xl font-semibold !mt-8 !mb-4">
                  Checklist técnico essencial
                </h3>

                <ul className="!mb-6 space-y-2">
                  <li><strong>URLs amigáveis</strong>: <code>/tenis-corrida-nike-air-zoom</code>, não <code>/produto?id=8371</code>.</li>
                  <li><strong>HTTPS ativo</strong> em toda a loja.</li>
                  <li><strong>Sitemap.xml</strong> enviado no Google Search Console.</li>
                  <li><strong>robots.txt</strong> corretamente configurado (sem bloquear páginas comerciais).</li>
                  <li><strong>Canonical tags</strong> para evitar conteúdo duplicado (variações de produto, filtros).</li>
                  <li><strong>Schema.org</strong>: Product, Offer, AggregateRating, BreadcrumbList, FAQPage.</li>
                  <li><strong>Mobile-first</strong>: layout responsivo, botões grandes, checkout ágil.</li>
                  <li><strong>Core Web Vitals</strong> dentro do verde no PageSpeed Insights.</li>
                </ul>

                <p className="text-lg leading-relaxed !mb-6">
                  A Google formaliza esses critérios no seu portal oficial{" "}
                  <a
                    href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=pt-br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Google Search Central
                  </a>
                  . Se você usa Shopify, Nuvemshop, Tray ou WooCommerce, a maior parte já vem
                  configurada — mas nunca no nível ideal para o varejo brasileiro. Sempre revise.
                </p>

                <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 not-prose my-6">
                  <CardContent className="p-5 flex gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <p className="text-base">
                      <strong>Armadilha silenciosa:</strong> filtros de categoria (cor, tamanho,
                      preço) criam dezenas de URLs duplicadas. Sem <em>canonical</em> ou{" "}
                      <em>noindex</em>, o Google penaliza o site inteiro.
                    </p>
                  </CardContent>
                </Card>
              </section>

              <Separator className="my-10" />

              {/* On-page */}
              <section id="onpage" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold !mb-6 flex items-center gap-3">
                  <Target className="w-8 h-8 text-primary" />
                  4. SEO on-page: transformando produtos em máquinas de venda orgânica
                </h2>

                <p className="text-lg leading-relaxed !mb-6">
                  Toda página comercial da sua loja precisa responder três perguntas em menos de
                  três segundos: <strong>é isto que eu quero?</strong>, <strong>é confiável?</strong>{" "}
                  e <strong>é fácil comprar aqui?</strong> Se qualquer resposta for "não", o
                  cliente volta ao Google e clica no concorrente — e o algoritmo enxerga isso.
                </p>

                <h3 className="text-xl md:text-2xl font-semibold !mt-8 !mb-4">
                  Anatomia de uma página de produto que ranqueia
                </h3>

                <ul className="!mb-6 space-y-2">
                  <li><strong>Title tag</strong> (até 60 caracteres) com palavra-chave principal + benefício.</li>
                  <li><strong>Meta description</strong> (até 155 caracteres) persuasiva, com CTA.</li>
                  <li><strong>H1 único</strong> com o nome do produto.</li>
                  <li><strong>Descrição rica</strong> (300 a 800 palavras), com H2/H3 respondendo dúvidas reais.</li>
                  <li><strong>Fotos otimizadas</strong> em WebP/AVIF, com ALT descritivo.</li>
                  <li><strong>Avaliações</strong> reais (com schema Review).</li>
                  <li><strong>Perguntas e respostas</strong> visíveis.</li>
                  <li><strong>Selos de confiança</strong>: frete, prazo, garantia, devolução.</li>
                </ul>

                <h3 className="text-xl md:text-2xl font-semibold !mt-8 !mb-4">
                  Páginas de categoria: o ativo mais subestimado
                </h3>

                <p className="text-lg leading-relaxed !mb-6">
                  A maioria das lojas coloca só um grid de produtos e um H1 seco na categoria.
                  É um erro caríssimo. Uma categoria bem trabalhada — com introdução textual,
                  guia de compra, comparativos e FAQ — pode ranquear para dezenas de termos
                  transacionais ao mesmo tempo.
                </p>
              </section>

              <Separator className="my-10" />

              {/* Conteúdo */}
              <section id="conteudo" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold !mb-6 flex items-center gap-3">
                  <BarChart3 className="w-8 h-8 text-primary" />
                  5. Blog e conteúdo: o motor invisível do e-commerce
                </h2>

                <p className="text-lg leading-relaxed !mb-6">
                  O blog não vende no primeiro clique. Ele vende no terceiro, no quinto, no
                  décimo. Cada post é uma isca capturando pessoas em estágios diferentes da
                  jornada — antes mesmo de saberem que a sua marca existe. É a diferença entre
                  perseguir clientes com anúncio e ser encontrado por eles em uma quinta-feira
                  à noite.
                </p>

                <h3 className="text-xl md:text-2xl font-semibold !mt-8 !mb-4">
                  Estrutura de um cluster de conteúdo vencedor
                </h3>

                <ul className="!mb-6 space-y-2">
                  <li><strong>Pilar</strong>: um guia completo sobre o tema principal (3.000+ palavras).</li>
                  <li><strong>Satélites</strong>: 6 a 12 artigos aprofundando cada subtema.</li>
                  <li><strong>Comparativos</strong>: "X vs Y" para intenção comercial.</li>
                  <li><strong>Reviews</strong> aprofundados, com foto, prós e contras.</li>
                  <li><strong>Interlinks</strong> em todas as direções, com âncoras naturais.</li>
                </ul>

                <p className="text-lg leading-relaxed !mb-6">
                  Se você quer se inspirar, veja como estruturamos nosso próprio conteúdo em{" "}
                  <Link
                    to="/artigo/melhores-plataformas-e-commerce-gratuitas-2026/"
                    className="text-primary hover:underline"
                  >
                    Melhores Plataformas de E-commerce Gratuitas em 2026
                  </Link>{" "}
                  — o artigo virou a porta de entrada de milhares de leitores para o site
                  inteiro, ranqueando em dezenas de termos com um único texto.
                </p>
              </section>

              <Separator className="my-10" />

              {/* Off-page */}
              <section id="offpage" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold !mb-6 flex items-center gap-3">
                  <Globe className="w-8 h-8 text-primary" />
                  6. Autoridade e backlinks: por que o Google confia (ou não) na sua loja
                </h2>

                <p className="text-lg leading-relaxed !mb-6">
                  Backlink é voto de confiança. Cada vez que um site sério cita o seu, o Google
                  entende que aquela URL é referência sobre o tema. Não é sobre quantidade,
                  é sobre qualidade: um link do portal G1 ou do Sebrae vale mais que 500 links
                  de sites obscuros.
                </p>

                <h3 className="text-xl md:text-2xl font-semibold !mt-8 !mb-4">
                  Estratégias que funcionam em 2026
                </h3>

                <ul className="!mb-6 space-y-2">
                  <li><strong>Guest posts</strong> em portais do seu nicho.</li>
                  <li><strong>Assessoria de imprensa</strong> com pautas quentes e dados exclusivos.</li>
                  <li><strong>Parcerias</strong> com criadores de conteúdo (não influenciadores caros).</li>
                  <li><strong>Ferramentas gratuitas</strong> no seu site (calculadoras, planilhas).</li>
                  <li><strong>Estudos e dados originais</strong>: nada gera mais link do que estatística nova.</li>
                  <li><strong>Perfis oficiais</strong>: Google Meu Negócio, LinkedIn, Reclame Aqui.</li>
                </ul>

                <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 not-prose my-6">
                  <CardContent className="p-5 flex gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <p className="text-base">
                      <strong>Nunca compre pacotes de backlink baratos.</strong> São redes
                      identificáveis pelo Google e derrubam sites do dia para a noite. O
                      "atalho" é a única forma garantida de perder domínio.
                    </p>
                  </CardContent>
                </Card>
              </section>

              <Separator className="my-10" />

              {/* IA */}
              <section id="ia" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold !mb-6 flex items-center gap-3">
                  <Zap className="w-8 h-8 text-primary" />
                  7. IA, SGE e o novo Google: como se posicionar em 2026
                </h2>

                <p className="text-lg leading-relaxed !mb-6">
                  A Search Generative Experience mudou o topo da SERP. Antes da lista de
                  resultados, o Google agora entrega um resumo em IA que cita marcas, dados e
                  produtos. Não aparecer nesse bloco é ficar invisível — e a boa notícia é que
                  o critério de seleção continua sendo <strong>autoridade + estrutura + EEAT</strong>.
                </p>

                <h3 className="text-xl md:text-2xl font-semibold !mt-8 !mb-4">
                  Como ser citado por IA
                </h3>

                <ul className="!mb-6 space-y-2">
                  <li>Estruture respostas objetivas nos 2 primeiros parágrafos de cada seção.</li>
                  <li>Use listas, tabelas comparativas e dados numéricos.</li>
                  <li>Reforce autor, credenciais e data de atualização (EEAT).</li>
                  <li>Marque tudo com Schema (Article, FAQPage, HowTo, Product).</li>
                  <li>Publique conteúdo original — a IA não cita quem copia.</li>
                  <li>Tenha uma página <code>/llms.txt</code> resumindo seu site para modelos.</li>
                </ul>

                <p className="text-lg leading-relaxed !mb-6">
                  Se o assunto te interessa, vale acompanhar as atualizações no{" "}
                  <a
                    href="https://developers.google.com/search/blog?hl=pt-br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    blog oficial do Google Search Central
                  </a>
                  , que documenta cada mudança dos <em>core updates</em>.
                </p>
              </section>

              <Separator className="my-10" />

              {/* Erros */}
              <section id="erros" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold !mb-6 flex items-center gap-3">
                  <AlertTriangle className="w-8 h-8 text-primary" />
                  8. Os 10 erros que mais matam o SEO de e-commerce
                </h2>

                <ol className="!mb-6 space-y-3">
                  <li><strong>Descrição de produto copiada do fornecedor.</strong> Duplicidade externa é penalizada.</li>
                  <li><strong>Fotos pesadas sem compressão.</strong> Mata Core Web Vitals.</li>
                  <li><strong>Categorias sem texto introdutório.</strong> Perde palavras-chave comerciais.</li>
                  <li><strong>URLs cheias de parâmetros</strong> em vez de slugs amigáveis.</li>
                  <li><strong>Não usar Schema.org</strong>: perde rich snippets, avaliações e preços na SERP.</li>
                  <li><strong>Blog abandonado.</strong> Sem publicações novas, o Google esfria a loja.</li>
                  <li><strong>Não trabalhar links internos</strong> entre blog e categorias.</li>
                  <li><strong>Ignorar mobile.</strong> Mais de 75% do e-commerce brasileiro é mobile.</li>
                  <li><strong>Deixar o Google Search Console fechado.</strong> Erros de indexação passam batido.</li>
                  <li><strong>Trocar de plataforma sem redirecionar URLs antigas.</strong> Perde autoridade acumulada.</li>
                </ol>
              </section>

              <Separator className="my-10" />

              {/* Conclusão */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold !mb-6 flex items-center gap-3">
                  <CheckCircle className="w-8 h-8 text-primary" />
                  Conclusão: SEO é o único canal que trabalha por você enquanto dorme
                </h2>

                <p className="text-lg leading-relaxed !mb-6">
                  A lógica do e-commerce brasileiro em 2026 é clara: quem depende só de mídia
                  paga vive num loop de aumentar orçamento para manter o mesmo faturamento. Quem
                  investe em SEO constrói um ativo — um patrimônio digital que continua
                  gerando vendas depois de meses ou anos da última publicação.
                </p>

                <p className="text-lg leading-relaxed !mb-6">
                  Comece pequeno, mas comece agora. Escolha três palavras-chave, faça três
                  páginas ou artigos por mês, e mantenha essa cadência por um ano. Em 12
                  meses, você não vai mais reconhecer a sua planilha de tráfego.
                </p>

                <Card className="border-l-4 border-l-primary bg-gradient-to-r from-primary/10 to-transparent not-prose my-6">
                  <CardContent className="p-6">
                    <p className="font-semibold text-lg text-center">
                      Anúncio traz cliente hoje. SEO traz cliente todo dia — de graça — pelos próximos 5 anos.
                    </p>
                  </CardContent>
                </Card>
              </section>

              <Separator className="my-10" />

              {/* FAQ */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold !mb-6 flex items-center gap-3">
                  <Lightbulb className="w-8 h-8 text-primary" />
                  Perguntas Frequentes (FAQ)
                </h2>

                <Accordion type="single" collapsible className="w-full not-prose">
                  {faqJsonLd.mainEntity.map((q, i) => (
                    <AccordionItem key={i} value={`faq-${i}`} className="border rounded-lg mb-3 px-4">
                      <AccordionTrigger className="text-left font-semibold hover:no-underline">
                        {q.name}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {q.acceptedAnswer.text}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>

              {/* CTA */}
              <Card className="bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground border-0 not-prose my-10">
                <CardContent className="p-8 md:p-10 text-center">
                  <Store className="w-12 h-12 mx-auto mb-4 opacity-90" />
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">
                    Sua loja está pronta para ranquear no Google?
                  </h3>
                  <p className="text-base md:text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                    Escolha uma plataforma já otimizada para SEO, com URLs amigáveis, mobile,
                    Schema, Pix e domínio próprio. Compare grátis no ranking do Lojas Grátis.
                  </p>
                  <Button asChild size="lg" variant="secondary" className="gap-2 font-semibold">
                    <Link to="/ranking">
                      Ver ranking das melhores plataformas
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <ArticleAuthorBio />
              <RelatedArticles currentSlug="seo-para-ecommerce-guia-completo-2026" />

              <div className="flex justify-center mt-12">
                <Link to="/blog/">
                  <Button variant="outline" className="gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    Voltar ao Blog
                  </Button>
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              <Card className="bg-card">
                <CardContent className="p-5">
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-primary" />
                    Neste artigo
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>1. Por que SEO vale a pena</li>
                    <li>2. Pesquisa de palavras-chave</li>
                    <li>3. SEO técnico</li>
                    <li>4. SEO on-page</li>
                    <li>5. Blog e conteúdo</li>
                    <li>6. Autoridade e backlinks</li>
                    <li>7. IA, SGE e novo Google</li>
                    <li>8. 10 erros que matam SEO</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <CardContent className="p-5">
                  <h4 className="font-bold mb-2">Compare plataformas</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Veja quais plataformas já vêm com estrutura pronta para SEO.
                  </p>
                  <Button asChild className="w-full">
                    <Link to="/ranking">Ver ranking</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-muted/40">
                <CardContent className="p-5">
                  <h4 className="font-bold mb-2">Leitura recomendada</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link
                        to="/artigo/como-precificar-produtos-para-vender-online/"
                        className="text-primary hover:underline"
                      >
                        Como precificar produtos online
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/artigo/shopify-vs-mercado-livre-2026/"
                        className="text-primary hover:underline"
                      >
                        Shopify vs Mercado Livre
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/artigo/plataforma-ecommerce-dominio-proprio-gratis/"
                        className="text-primary hover:underline"
                      >
                        Plataforma com domínio próprio
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </aside>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
};

export default SeoParaEcommerce2026;
