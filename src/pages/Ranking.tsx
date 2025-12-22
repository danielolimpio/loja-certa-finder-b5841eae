import { Helmet } from "react-helmet";
import { Trophy, TrendingUp, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PlatformCard from "@/components/PlatformCard";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { platforms } from "@/data/platforms";

const Ranking = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <Helmet>
        <title>Ranking das Melhores Plataformas de E-commerce 2024</title>
        <meta 
          name="description" 
          content="Ranking atualizado das 20 melhores plataformas de e-commerce do Brasil. Compare custos, recursos e escolha a melhor opção." 
        />
        <link rel="canonical" href="https://lojasgratis.com.br/ranking" />
        <meta name="keywords" content="ranking ecommerce, melhores plataformas, loja virtual, comparação plataformas" />
      </Helmet>

      <Header />
      
      <div className="container mt-6">
        <BreadcrumbNav items={[{ label: "Ranking" }]} />
      </div>
      
      {/* Hero Section */}
      <section className="container py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            <Trophy className="h-4 w-4" />
            Ranking Atualizado 2024
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ranking Completo das <span className="text-primary">Plataformas de E-commerce</span>
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Confira nossa análise detalhada das 20 principais plataformas de e-commerce do Brasil. 
            Avaliamos custos, facilidade de uso, recursos, integrações e suporte para cada uma.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card border">
              <Trophy className="h-8 w-8 text-primary" />
              <h3 className="font-semibold">20 Plataformas</h3>
              <p className="text-sm text-muted-foreground text-center">Análise completa e imparcial</p>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card border">
              <TrendingUp className="h-8 w-8 text-primary" />
              <h3 className="font-semibold">Dados Reais</h3>
              <p className="text-sm text-muted-foreground text-center">Informações atualizadas 2024</p>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card border">
              <Award className="h-8 w-8 text-primary" />
              <h3 className="font-semibold">100% Gratuito</h3>
              <p className="text-sm text-muted-foreground text-center">Sem cadastro necessário</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ranking Section */}
      <section className="container pb-20">
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

      <Footer />
    </div>
  );
};

export default Ranking;
