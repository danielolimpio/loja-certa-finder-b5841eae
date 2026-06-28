import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, CheckCircle2, Trophy, Search, Calendar, Clock, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PlatformCard from "@/components/PlatformCard";
import { platforms } from "@/data/platforms";
import { blogPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Loja Virtual Grátis 2026: As 20 Melhores Plataformas do Brasil</title>
        <meta name="description" content="Descubra a plataforma ideal para criar sua loja virtual grátis em 2026. Ranking imparcial com Nuvemshop, Shopify, Shopee e Mercado Livre — compare preços e comece a vender hoje." />
        <link rel="canonical" href="https://lojasgratis.com.br/" />
        <meta name="keywords" content="loja virtual grátis, criar loja virtual grátis, plataforma loja virtual, plataforma e-commerce grátis, melhor plataforma e-commerce, criar loja online grátis, melhor site para vender online, plataforma para vender online, loja online grátis, e-commerce gratuito, criar loja virtual sem mensalidade, nuvemshop, shopify brasil, shopee, mercado livre, melhor plataforma loja virtual, abrir loja virtual grátis, comparar plataformas ecommerce, loja virtual grátis para sempre, plataforma vendas online" />
        <meta property="og:title" content="Loja Virtual Grátis 2026: As 20 Melhores Plataformas do Brasil" />
        <meta property="og:description" content="Ranking 2026 das melhores plataformas grátis para criar sua loja online. Compare preços, recursos e comece a vender hoje mesmo." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lojasgratis.com.br/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Loja Virtual Grátis 2026: As 20 Melhores Plataformas do Brasil" />
        <meta name="twitter:description" content="Ranking imparcial das melhores plataformas grátis para abrir sua loja online no Brasil." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Ranking das Melhores Plataformas de E-commerce do Brasil 2026",
            "itemListOrder": "https://schema.org/ItemListOrderAscending",
            "numberOfItems": platforms.length,
            "itemListElement": platforms.slice(0, 10).map((p) => ({
              "@type": "ListItem",
              position: p.rank,
              name: p.name,
              url: `https://lojasgratis.com.br/plataformas/${p.slug}`
            }))
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Lojas Grátis",
            url: "https://lojasgratis.com.br/",
            description: "Compare as melhores plataformas para criar sua loja virtual no Brasil.",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://lojasgratis.com.br/?s={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Lojas Grátis",
            url: "https://lojasgratis.com.br/",
            logo: "https://lojasgratis.com.br/logo.png",
            description: "Guia brasileiro para comparar e escolher as melhores plataformas de e-commerce.",
          })}
        </script>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
        />
        
        {/* Dark Overlay for contrast */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Content */}
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm text-white text-sm font-semibold mb-6 border border-white/20">
              <Trophy className="h-4 w-4" />
              Ranking 2025 Atualizado
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              As Melhores Plataformas para <span className="text-primary">Criar sua Loja Virtual</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Compare características, custos e recursos das principais plataformas de e-commerce do Brasil. 
              Análise completa e imparcial para você fazer a escolha certa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="gap-2">
                <Search className="h-5 w-5" />
                Ver Ranking Completo
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20">
                Comparar Plataformas
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-white">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span className="font-medium">100% Gratuito</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <CheckCircle2 className="h-5 w-5 text-blue-400" />
                <span className="font-medium">Análises Detalhadas</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <CheckCircle2 className="h-5 w-5 text-yellow-400" />
                <span className="font-medium">Atualizado 2025</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-12 animate-bounce">
            <ArrowDown className="h-6 w-6 text-white/80" />
          </div>
        </div>
      </section>

      {/* Ranking Section */}
      <section className="container pb-20 pt-16">
        <div className="mb-12 text-center">
          <div className="flex justify-center mb-4">
            <Trophy className="h-12 w-12 text-yellow-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ranking das Plataformas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Avaliamos custos, facilidade de uso, recursos, integrações e suporte para cada plataforma
          </p>
        </div>

        <div className="space-y-4 max-w-6xl mx-auto">
          {platforms.map((platform) => (
            <PlatformCard
              key={platform.slug}
              rank={platform.rank}
              name={platform.name}
              slug={platform.slug}
              logo={platform.logo}
              isFree={platform.isFree}
              isRecommended={platform.isRecommended}
              rating={platform.rating}
              priceFrom={platform.priceFrom}
              features={platform.features}
              visits={platform.visits}
              products={platform.products}
              setupTime={platform.setupTime}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-16 mb-20">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ainda em dúvida sobre qual escolher?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Confira nosso guia completo com dicas para escolher a plataforma ideal para o seu negócio
          </p>
          <Button size="lg" variant="secondary">
            Ler o Guia Completo
          </Button>
        </div>
      </section>

      {/* Últimos artigos */}
      <section className="container pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-4">
              <BookOpen className="h-7 w-7 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Últimos artigos do blog
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tutoriais, comparativos e estratégias atualizados para vender mais na sua loja virtual.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(0, 6).map((post) => (
              <Link
                key={post.id}
                to={`/artigo/${post.slug}/`}
                className="group rounded-2xl overflow-hidden bg-card border border-border/60 hover:border-primary/40 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {post.featuredImage && (
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      loading="lazy"
                      width={1280}
                      height={720}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-5 flex flex-col flex-1">
                  <Badge variant="secondary" className="self-start mb-3 text-xs capitalize">
                    {post.category}
                  </Badge>
                  <h3 className="text-base font-bold leading-snug mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.publishedAt).toLocaleDateString("pt-BR", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readingTime} min
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <Button asChild size="lg" variant="outline" className="gap-2 rounded-full px-8">
              <Link to="/blog/">
                Ver Todos Artigos
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </>
  );
};

export default Index;
