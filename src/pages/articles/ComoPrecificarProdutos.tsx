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
  TrendingUp,
  Target,
  DollarSign,
  Calculator,
  BarChart3,
  ShoppingCart,
  Percent,
  ExternalLink,
  Store,
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

const ComoPrecificarProdutos = () => {
  const articleData = {
    title: "Como Precificar Produtos para Vender Online: Guia Definitivo de Precificação",
    description:
      "Aprenda como precificar produtos para vender online com fórmulas práticas, exemplos reais e estratégias de margem. Pare de chutar preço — venda mais e lucre.",
    publishedAt: "2026-01-12",
    updatedAt: "2026-01-12",
    author: { name: "Equipe Lojas Grátis", role: "Especialistas em E-commerce" },
    readingTime: 17,
    category: "E-commerce",
    featuredImage: "/images/artigos/como-precificar-produtos-vender-online.jpg",
    canonicalUrl:
      "https://lojasgratis.com.br/artigo/como-precificar-produtos-para-vender-online/",
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
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleData.canonicalUrl,
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Qual a fórmula correta para precificar um produto para venda online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A fórmula básica é: Preço de Venda = (Custo do Produto + Custos Variáveis) ÷ (1 − Margem de Lucro Desejada − % de Taxas e Impostos). Essa equação garante que o preço final cubra todos os custos e ainda entregue o lucro esperado.",
        },
      },
      {
        "@type": "Question",
        name: "Qual margem de lucro é considerada saudável no e-commerce?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Para produtos físicos, a margem líquida saudável fica entre 15% e 30%. Em moda e cosméticos, marcas trabalham com markup de 2,5x a 3,5x sobre o custo. Em eletrônicos, margens são mais apertadas, entre 8% e 18%.",
        },
      },
      {
        "@type": "Question",
        name: "Como calcular o preço considerando frete grátis?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Diluindo o custo médio de envio na precificação. Calcule o frete médio das últimas 30 vendas, divida pelo ticket médio e adicione esse percentual ao seu preço. Outra opção é oferecer frete grátis apenas acima de um valor mínimo.",
        },
      },
      {
        "@type": "Question",
        name: "É melhor usar markup ou margem para definir preço?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Markup é mais simples (multiplica o custo por um fator), mas pode esconder despesas. Margem trabalha de trás para frente, garantindo um lucro percentual líquido. O ideal é começar pela margem desejada e ajustar com markup.",
        },
      },
      {
        "@type": "Question",
        name: "Como precificar produtos digitais ou serviços online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Em vez do custo unitário, considere o valor percebido, o tempo de produção, a concorrência e o resultado entregue. Use ancoragem, pacotes (bronze/prata/ouro) e preços terminados em 7 ou 9 para aumentar conversão.",
        },
      },
      {
        "@type": "Question",
        name: "Posso usar a precificação dinâmica em uma loja pequena?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. Hoje plataformas como Nuvemshop e Shopify integram ferramentas que ajustam preços por demanda, estoque e concorrência. Comece testando ofertas-relâmpago em horários de pico, depois evolua para automações.",
        },
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Como Precificar Produtos para Vender Online: Guia Completo 2026</title>
        <meta name="description" content={articleData.description} />
        <meta
          name="keywords"
          content="como precificar produtos, precificação de produtos, como calcular preço de venda, formula de precificação, margem de lucro ecommerce, markup loja virtual, como precificar produtos para vender online, precificar produtos artesanais, precificar roupas para revenda, como colocar preço em produtos, calcular preço de venda, precificação inteligente, estratégia de preço, preço psicológico, precificação dinâmica, planilha precificação, ticket médio, margem de contribuição, custo do produto vendido, precificação de serviços, precificação para iniciantes, precificar produtos importados, preço competitivo ecommerce"
        />
        <link rel="canonical" href={articleData.canonicalUrl} />
        <meta property="og:title" content={articleData.title} />
        <meta property="og:description" content={articleData.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={articleData.canonicalUrl} />
        <meta property="og:image" content={`https://lojasgratis.com.br${articleData.featuredImage}`} />
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
              { label: "Como precificar produtos para vender online" },
            ]}
          />

          {/* Header */}
          <header className="mt-8 mb-10">
            <Badge variant="secondary" className="mb-4">
              <Tag className="w-3 h-3 mr-1" />
              {articleData.category}
            </Badge>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Como Precificar Produtos para Vender Online: o Guia que Sua Loja Precisa em 2026
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              Esqueça o "chutômetro". Aprenda o passo a passo usado por lojistas que faturam de R$ 30
              mil a R$ 500 mil por mês para colocar preço de forma estratégica, lucrativa e
              competitiva — sem espantar o cliente.
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

          {/* Cover */}
          <figure className="mb-10 rounded-2xl overflow-hidden border border-border/60">
            <img
              src={articleData.featuredImage}
              alt="Empreendedora calculando preços de produtos para vender em sua loja virtual"
              width={1280}
              height={720}
              fetchPriority="high"
              className="w-full h-auto"
            />
            <figcaption className="text-xs text-center text-muted-foreground py-2 px-3 bg-muted/30">
              A precificação correta começa muito antes do produto ir para o site.
            </figcaption>
          </figure>

          {/* Layout 2 colunas */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10">
            {/* Conteúdo */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {/* Intro */}
              <section className="mb-12">
                <p className="text-lg leading-relaxed !mb-6">
                  Se você já passou madrugadas olhando para uma planilha sem saber se cobra R$ 79
                  ou R$ 89 por um produto, respira: você não está sozinho. <strong>Errar o preço é
                  o erro mais caro do e-commerce brasileiro</strong> — mais caro, inclusive, do que
                  errar a foto, o anúncio ou o frete. Um centavo a menos pode estrangular sua
                  margem; um real a mais pode espantar quem estava com o dedo no botão "comprar".
                </p>

                <p className="text-lg leading-relaxed !mb-6">
                  Este guia foi feito por quem já vendeu, errou, refez planilha e voltou a vender.
                  Em vez de jargão acadêmico, você vai encontrar fórmulas práticas, exemplos com
                  números reais, planilhas de referência e, principalmente, a lógica por trás de
                  cada decisão. Se você está começando agora, vai sair sabendo precificar. Se já
                  vende há um tempo, vai descobrir furos que provavelmente está cometendo na conta.
                </p>

                <Card className="border-l-4 border-l-primary bg-primary/5 not-prose my-6">
                  <CardContent className="p-5">
                    <p className="text-base flex gap-3">
                      <Lightbulb className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Resumo rápido:</strong> precificar bem é equilibrar três forças —
                        <em> custo real</em>, <em>valor percebido</em> e <em>posição na
                        concorrência</em>. Quem ignora qualquer uma das três, quebra.
                      </span>
                    </p>
                  </CardContent>
                </Card>
              </section>

              <Separator className="my-10" />

              {/* Custo Real */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold !mb-6 flex items-center gap-3">
                  <Calculator className="w-8 h-8 text-primary" />
                  1. Calcule o custo REAL do seu produto (não só o que você pagou)
                </h2>

                <p className="text-lg leading-relaxed !mb-6">
                  O primeiro erro de quem está começando é olhar a nota fiscal de compra, dividir
                  pela quantidade e achar que aquele é o custo. <strong>Não é.</strong> Custo real
                  é tudo que sai do seu bolso até o produto chegar pronto, embalado, fotografado e
                  cadastrado na loja.
                </p>

                <p className="text-lg leading-relaxed !mb-6">
                  Vamos a um exemplo. Você comprou 50 camisetas no atacado por R$ 1.500. Custo
                  unitário aparente: R$ 30. Só que entre o boleto e a venda existem várias outras
                  contas:
                </p>

                <ul className="!mb-6 space-y-2">
                  <li>Frete da compra (rateado por unidade): R$ 2,40</li>
                  <li>Embalagem (sacola, etiqueta, papel de seda): R$ 3,10</li>
                  <li>Fotografia e edição (rateada por SKU): R$ 1,20</li>
                  <li>Cartão de visita e brinde: R$ 0,90</li>
                  <li>Perda estimada (defeitos, devolução): 3% → R$ 1,00</li>
                </ul>

                <p className="text-lg leading-relaxed !mb-6">
                  <strong>Custo total por camiseta: R$ 38,60</strong>, e não R$ 30. Esse é o número
                  que precisa entrar na sua planilha — qualquer cálculo feito sobre R$ 30 já nasce
                  com 28% de prejuízo embutido. Por isso, antes mesmo de pensar em margem, faça o
                  exercício chato (mas libertador) de listar absolutamente tudo que envolveu colocar
                  aquele item disponível para venda.
                </p>

                <p className="text-lg leading-relaxed !mb-6">
                  Se você quer aprofundar nesse raciocínio, o Sebrae mantém uma referência muito
                  didática em seu portal oficial. Vale guardar:{" "}
                  <a
                    href="https://sebrae.com.br/sites/PortalSebrae/artigos/como-precificar-corretamente-seu-produto-ou-servico,5b67438af1c92410VgnVCM100000b272010aRCRD"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    como precificar corretamente seu produto ou serviço — Sebrae
                  </a>
                  .
                </p>
              </section>

              <Separator className="my-10" />

              {/* Custos fixos e variáveis */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold !mb-6 flex items-center gap-3">
                  <BarChart3 className="w-8 h-8 text-primary" />
                  2. Separe custos fixos, variáveis e taxas de venda
                </h2>

                <p className="text-lg leading-relaxed !mb-6">
                  Depois do custo unitário, entra o segundo bloco: tudo que sua loja gasta para
                  existir, independentemente de vender 10 ou 1.000 peças no mês. São os{" "}
                  <strong>custos fixos</strong>: mensalidade da plataforma, domínio, e-mail
                  profissional, ferramenta de e-mail marketing, contador, internet, energia,
                  software de design, e por aí vai.
                </p>

                <p className="text-lg leading-relaxed !mb-6">
                  Esses custos não somem só porque o produto custa R$ 30. Eles precisam ser{" "}
                  <strong>rateados</strong> entre as vendas previstas. Se sua loja gasta R$ 1.500
                  por mês para funcionar e você projeta vender 200 unidades, cada produto carrega
                  R$ 7,50 de custo fixo. Esqueceu disso? Ralou de graça.
                </p>

                <p className="text-lg leading-relaxed !mb-6">
                  Em seguida, mapeie os <strong>custos variáveis por venda</strong>:
                </p>

                <ul className="!mb-6 space-y-2">
                  <li>Taxa do gateway de pagamento (Pix, cartão, boleto): 0,99% a 4,99%</li>
                  <li>Comissão de marketplace (se aplicável): 12% a 20%</li>
                  <li>Imposto (Simples Nacional, por exemplo): 4% a 19%</li>
                  <li>Comissão de afiliado / influenciador: 5% a 30%</li>
                  <li>Custo de tráfego pago (CPA médio): varia por nicho</li>
                </ul>

                <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 not-prose my-6">
                  <CardContent className="p-5 flex gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <p className="text-base">
                      <strong>Erro clássico:</strong> calcular preço usando 2% de taxa de cartão
                      quando, na prática, a maior parte das vendas vem parcelada e a taxa real
                      passa de 5%. Sempre use o pior cenário.
                    </p>
                  </CardContent>
                </Card>
              </section>

              <Separator className="my-10" />

              {/* Fórmulas */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold !mb-6 flex items-center gap-3">
                  <Percent className="w-8 h-8 text-primary" />
                  3. As duas fórmulas que todo lojista precisa decorar
                </h2>

                <p className="text-lg leading-relaxed !mb-6">
                  Existem dezenas de formas matemáticas de chegar a um preço, mas, na prática, duas
                  fórmulas resolvem 90% dos cenários do varejo digital brasileiro.
                </p>

                <h3 className="text-xl md:text-2xl font-semibold !mt-8 !mb-4">
                  Fórmula 1 — Markup (caminho simples)
                </h3>

                <Card className="bg-muted/40 not-prose my-4">
                  <CardContent className="p-5">
                    <p className="font-mono text-base text-center">
                      Preço de Venda = Custo Total × Markup
                    </p>
                  </CardContent>
                </Card>

                <p className="text-lg leading-relaxed !mb-6">
                  O markup é um multiplicador. Se seu custo total é R$ 40 e você aplica markup 2,5,
                  o preço sai por R$ 100. É rápido, é prático e funciona para quem precisa de uma
                  resposta agora. O problema é que ele esconde quanto realmente sobra de lucro
                  líquido — porque não considera, na conta, as taxas variáveis percentuais.
                </p>

                <h3 className="text-xl md:text-2xl font-semibold !mt-8 !mb-4">
                  Fórmula 2 — Margem (caminho estratégico)
                </h3>

                <Card className="bg-muted/40 not-prose my-4">
                  <CardContent className="p-5">
                    <p className="font-mono text-base text-center">
                      Preço = Custo ÷ (1 − Margem − Taxas %)
                    </p>
                  </CardContent>
                </Card>

                <p className="text-lg leading-relaxed !mb-6">
                  Aqui você parte de quanto quer ganhar líquido (digamos, 25%) e devolve o cálculo
                  para descobrir o preço. Exemplo: custo R$ 40, margem desejada 25%, taxas
                  variáveis somando 15% (gateway + imposto + comissão). Conta: 40 ÷ (1 − 0,25 −
                  0,15) = 40 ÷ 0,60 = <strong>R$ 66,67</strong>. Esse é o preço mínimo para
                  garantir 25% líquidos no bolso.
                </p>

                <p className="text-lg leading-relaxed !mb-6">
                  Repare como o caminho da margem é mais honesto: ele já incorpora as taxas que vão
                  ser deduzidas no momento da venda. É a fórmula que recomendamos como base. O
                  markup entra apenas como referência rápida quando você precisa precificar 200
                  itens em uma tarde.
                </p>
              </section>

              {/* Imagem meio */}
              <figure className="my-12 rounded-2xl overflow-hidden border border-border/60 not-prose">
                <img
                  src="/images/artigos/precificacao-produtos-estrategia.jpg"
                  alt="Empreendedor colocando etiqueta de preço em produto enquanto revisa cálculos de margem"
                  width={1280}
                  height={720}
                  loading="lazy"
                  className="w-full h-auto"
                />
                <figcaption className="text-xs text-center text-muted-foreground py-2 px-3 bg-muted/30">
                  Etiquetar é fácil. Decidir o número da etiqueta é o que separa loja amadora de loja lucrativa.
                </figcaption>
              </figure>

              <Separator className="my-10" />

              {/* Estratégia psicológica */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold !mb-6 flex items-center gap-3">
                  <Target className="w-8 h-8 text-primary" />
                  4. Preço psicológico: o detalhe que muda a conversão
                </h2>

                <p className="text-lg leading-relaxed !mb-6">
                  Depois de chegar ao preço mínimo via fórmula, vem a parte criativa. O cérebro do
                  consumidor não compara R$ 100 com R$ 99 — ele lê "cem reais" e "noventa e nove".
                  São mundos diferentes. Por isso, terminar preços em 9, 7 ou 5 ainda funciona, e
                  os testes A/B feitos por grandes varejistas continuam comprovando.
                </p>

                <p className="text-lg leading-relaxed !mb-6">
                  Algumas táticas comprovadas no varejo online brasileiro:
                </p>

                <ul className="!mb-6 space-y-2">
                  <li>
                    <strong>Ancoragem:</strong> exiba o preço cheio cortado (R$ 149) ao lado do
                    preço atual (R$ 97). O contraste vende mais do que o desconto absoluto.
                  </li>
                  <li>
                    <strong>Charm pricing:</strong> R$ 49,90 converte cerca de 24% a mais do que
                    R$ 50,00, segundo estudos do MIT replicados em pequenos varejos.
                  </li>
                  <li>
                    <strong>Preço por parcela:</strong> "12x de R$ 19" reduz a percepção de custo
                    e é especialmente eficiente em ticket acima de R$ 200.
                  </li>
                  <li>
                    <strong>Bundles:</strong> combo de 3 itens com 10% off aumenta o ticket médio
                    e dilui o frete na percepção do cliente.
                  </li>
                  <li>
                    <strong>Preço quebrado em centavos no Pix:</strong> R$ 87,42 transmite cálculo
                    técnico, justo. Funciona em produtos artesanais e gourmet.
                  </li>
                </ul>

                <p className="text-lg leading-relaxed !mb-6">
                  Quem se aprofunda nesse tema costuma estudar o trabalho de William Poundstone em{" "}
                  <em>Priceless</em>. Para um resumo gratuito e prático, a{" "}
                  <a
                    href="https://hbr.org/2017/06/a-refresher-on-price-elasticity"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Harvard Business Review tem um excelente refresher sobre elasticidade de preço
                  </a>{" "}
                  que ajuda a entender por que o cliente reage a um número e não a outro.
                </p>
              </section>

              <Separator className="my-10" />

              {/* Frete */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold !mb-6 flex items-center gap-3">
                  <ShoppingCart className="w-8 h-8 text-primary" />
                  5. Como precificar quando você precisa oferecer "frete grátis"
                </h2>

                <p className="text-lg leading-relaxed !mb-6">
                  Frete grátis virou expectativa. O cliente brasileiro abandona o carrinho assim
                  que vê o cálculo do envio aparecer maior do que ele esperava. Só que frete não é
                  grátis — alguém paga. E esse alguém precisa ser o seu preço, não o seu lucro.
                </p>

                <p className="text-lg leading-relaxed !mb-6">
                  O caminho é simples: pegue o relatório de envios dos últimos 30 dias, calcule o
                  frete médio e divida pelo ticket médio. Se em média você gasta R$ 18 com envio e
                  seu ticket médio é R$ 120, isso representa 15%. Você tem três opções:
                </p>

                <ol className="!mb-6 space-y-2">
                  <li>
                    <strong>Diluir tudo:</strong> aumenta o preço de todos os itens em 15%. Bom em
                    nichos onde o preço é menos sensível (cosméticos, gourmet, artesanal).
                  </li>
                  <li>
                    <strong>Diluir parcialmente:</strong> reajuste 8% e cobre o restante do cliente
                    como "frete econômico". Equilibra margem e percepção.
                  </li>
                  <li>
                    <strong>Frete grátis condicional:</strong> ofereça acima de R$ 199. Aumenta
                    ticket médio e protege a margem em pedidos pequenos.
                  </li>
                </ol>

                <p className="text-lg leading-relaxed !mb-6">
                  A regra de ouro: <strong>se o frete grátis está corroendo seu lucro líquido em
                  mais de 5 pontos percentuais, a conta está errada</strong>. Refaça.
                </p>
              </section>

              <Separator className="my-10" />

              {/* Concorrência */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold !mb-6 flex items-center gap-3">
                  <TrendingUp className="w-8 h-8 text-primary" />
                  6. Como pesquisar a concorrência sem virar refém dela
                </h2>

                <p className="text-lg leading-relaxed !mb-6">
                  Olhar o concorrente é obrigatório. Copiar o concorrente é suicídio. A diferença
                  está em <strong>entender por que ele cobra aquele preço</strong> antes de
                  reagir. Talvez ele compre em volume 10x maior, tenha CNPJ no Simples enquanto
                  você está no Lucro Real, ou esteja queimando estoque parado.
                </p>

                <p className="text-lg leading-relaxed !mb-6">
                  Um exercício útil é montar uma planilha simples com 5 concorrentes diretos,
                  registrar o preço médio, o preço de promoção, condições de frete, opções de
                  parcelamento e prazo de entrega. Você vai descobrir que muitas vezes não está
                  perdendo no preço — está perdendo na <em>condição</em>.
                </p>

                <p className="text-lg leading-relaxed !mb-6">
                  E aqui entra um ponto que pouca gente diz: <strong>preço baixo não é vantagem
                  competitiva sustentável</strong>. Sempre vai aparecer alguém mais barato,
                  geralmente alguém que não vai durar 6 meses. Sua vantagem está em construir
                  marca, atendimento e experiência. Quem compete só por preço, perde para
                  marketplaces.
                </p>
              </section>

              <Separator className="my-10" />

              {/* Plataforma */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold !mb-6 flex items-center gap-3">
                  <Store className="w-8 h-8 text-primary" />
                  7. A plataforma que você escolher afeta direto a sua precificação
                </h2>

                <p className="text-lg leading-relaxed !mb-6">
                  Pouca gente pensa nisso, mas a plataforma de e-commerce que você usa muda a sua
                  conta. Em uma marketplace como o Mercado Livre, a comissão pode chegar a 19% mais
                  taxa fixa por item. Em uma loja própria na Nuvemshop ou Shopify, a taxa cai
                  drasticamente, mas você precisa investir em tráfego.
                </p>

                <p className="text-lg leading-relaxed !mb-6">
                  Se ainda está nessa decisão, vale comparar lado a lado em nosso{" "}
                  <Link to="/ranking" className="text-primary hover:underline">
                    ranking atualizado das melhores plataformas de e-commerce do Brasil
                  </Link>{" "}
                  e ler o comparativo prático em{" "}
                  <Link
                    to="/artigo/shopify-vs-mercado-livre-2026/"
                    className="text-primary hover:underline"
                  >
                    Shopify vs Mercado Livre: qual escolher
                  </Link>
                  . A decisão muda completamente a margem que você precisa praticar.
                </p>

                <p className="text-lg leading-relaxed !mb-6">
                  Para quem está abrindo agora e quer começar sem investir, recomendamos a leitura
                  do nosso guia{" "}
                  <Link
                    to="/artigo/como-criar-loja-virtual-gratis-passo-a-passo/"
                    className="text-primary hover:underline"
                  >
                    como criar loja virtual grátis passo a passo
                  </Link>{" "}
                  — ele resolve a parte operacional para você focar 100% na estratégia de preço.
                </p>
              </section>

              <Separator className="my-10" />

              {/* Promoções */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold !mb-6 flex items-center gap-3">
                  <DollarSign className="w-8 h-8 text-primary" />
                  8. Promoções, cupons e descontos sem destruir a margem
                </h2>

                <p className="text-lg leading-relaxed !mb-6">
                  Toda promoção precisa nascer com um teto definido. Antes de criar um cupom de
                  10%, faça a conta reversa: <strong>quanto sobra de lucro líquido com esse
                  desconto?</strong> Se sobra menos de 8%, repense. Se vira prejuízo, esquece.
                </p>

                <p className="text-lg leading-relaxed !mb-6">
                  Algumas regras de bolso para promoções saudáveis:
                </p>

                <ul className="!mb-6 space-y-2">
                  <li>Black Friday: trabalhe com desconto real (mínimo 15%), nunca "maquiado".</li>
                  <li>Primeira compra: cupom de 10% é mais eficiente que frete grátis em ticket baixo.</li>
                  <li>Cupom progressivo: 5% acima de R$ 150, 10% acima de R$ 300 — eleva ticket.</li>
                  <li>Liquidação de estoque parado: aceitar margem zero é melhor que aceitar prejuízo no armazenamento.</li>
                  <li>Combo: nunca dê desconto no item de maior margem; dilua nos secundários.</li>
                </ul>
              </section>

              <Separator className="my-10" />

              {/* Reajuste */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold !mb-6 flex items-center gap-3">
                  <ArrowRight className="w-8 h-8 text-primary" />
                  9. Quando e como reajustar preços sem perder cliente
                </h2>

                <p className="text-lg leading-relaxed !mb-6">
                  Reajustar dá medo. Lojista pequeno costuma segurar preço durante meses esperando
                  o "momento certo" — que nunca chega. Resultado: a margem some, e quando ele
                  finalmente reajusta, é obrigado a subir 18% de uma vez, o que de fato afasta
                  cliente.
                </p>

                <p className="text-lg leading-relaxed !mb-6">
                  A prática saudável é revisar preços a cada 60 ou 90 dias com base em três
                  gatilhos:
                </p>

                <ol className="!mb-6 space-y-2">
                  <li>Custo do fornecedor subiu mais de 5% — repasse parcial.</li>
                  <li>Frete médio dos Correios reajustou — recalcule diluição.</li>
                  <li>Concorrência mudou de patamar — reposicione.</li>
                </ol>

                <p className="text-lg leading-relaxed !mb-6">
                  Reajustes pequenos e frequentes passam despercebidos. Reajustes grandes e raros
                  são notícia ruim. Comunique sempre que possível ("a partir de segunda, novos
                  preços"), e use o anúncio antecipado como gatilho de venda imediata.
                </p>
              </section>

              <Separator className="my-10" />

              {/* Erros comuns */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold !mb-6 flex items-center gap-3">
                  <AlertTriangle className="w-8 h-8 text-primary" />
                  10. Os 7 erros que matam a precificação do iniciante
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6">
                  {[
                    "Esquecer custos fixos no rateio",
                    "Usar taxa de cartão à vista, mas vender no parcelado",
                    "Copiar preço do concorrente sem entender a estrutura dele",
                    "Não revisar preço quando o dólar/fornecedor sobe",
                    "Dar frete grátis sem diluir no produto",
                    "Cupom sobre cupom sem teto definido",
                    "Confundir faturamento com lucro",
                  ].map((erro) => (
                    <Card key={erro} className="border-red-200 dark:border-red-900">
                      <CardContent className="p-4 flex gap-3 items-start">
                        <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <p className="text-base">{erro}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              <Separator className="my-10" />

              {/* Conclusão */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold !mb-6 flex items-center gap-3">
                  <CheckCircle className="w-8 h-8 text-primary" />
                  Conclusão: precificar é uma habilidade, não um chute
                </h2>

                <p className="text-lg leading-relaxed !mb-6">
                  Se você chegou até aqui, já está à frente de 80% dos lojistas brasileiros. A
                  maioria abre loja, joga um preço e reza. Você agora tem fórmula, lógica e
                  estratégia. O próximo passo é simples: pegue os seus 5 produtos mais vendidos,
                  refaça a conta usando o que aprendeu, e compare com o preço atual. A diferença
                  vai te assustar — para o bem ou para o mal.
                </p>

                <p className="text-lg leading-relaxed !mb-6">
                  Precificar bem não é sobre cobrar caro. É sobre cobrar <strong>justo para o
                  cliente e sustentável para o seu negócio</strong>. Quem entende essa equação não
                  precisa concorrer por preço — concorre por valor.
                </p>

                <Card className="border-l-4 border-l-primary bg-gradient-to-r from-primary/10 to-transparent not-prose my-6">
                  <CardContent className="p-6">
                    <p className="font-semibold text-lg text-center">
                      Preço é a única decisão que você toma todos os dias e que impacta diretamente
                      o seu lucro. Toma com método.
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

              {/* CTA Final - Criar Loja Virtual */}
              <Card className="bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground border-0 not-prose my-10">
                <CardContent className="p-8 md:p-10 text-center">
                  <Store className="w-12 h-12 mx-auto mb-4 opacity-90" />
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">
                    Pronto para colocar esses preços em uma loja de verdade?
                  </h3>
                  <p className="text-base md:text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                    Compare as melhores plataformas grátis do Brasil e abra sua loja virtual em
                    minutos, sem mensalidade, com Pix, cartão e domínio próprio.
                  </p>
                  <Button asChild size="lg" variant="secondary" className="gap-2 font-semibold">
                    <Link to="/ranking">
                      Criar minha loja virtual grátis
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <ArticleAuthorBio />
              <RelatedArticles currentSlug="como-precificar-produtos-para-vender-online" />

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
                    <li>1. Custo real do produto</li>
                    <li>2. Custos fixos, variáveis e taxas</li>
                    <li>3. Fórmulas de markup e margem</li>
                    <li>4. Preço psicológico</li>
                    <li>5. Frete grátis sem prejuízo</li>
                    <li>6. Como analisar a concorrência</li>
                    <li>7. Impacto da plataforma</li>
                    <li>8. Promoções saudáveis</li>
                    <li>9. Quando reajustar</li>
                    <li>10. 7 erros que matam o lucro</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <CardContent className="p-5">
                  <h4 className="font-bold mb-2">Compare plataformas</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Veja qual plataforma cobra menos comissão e libera mais margem para sua loja.
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
                        to="/artigo/como-criar-loja-virtual-gratis-passo-a-passo/"
                        className="text-primary hover:underline"
                      >
                        Como criar loja virtual grátis
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/artigo/loja-virtual-pagamento-pix-2026/"
                        className="text-primary hover:underline"
                      >
                        Loja virtual com Pix
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

export default ComoPrecificarProdutos;
