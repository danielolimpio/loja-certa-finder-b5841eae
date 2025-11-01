import { ArrowDown, CheckCircle2, Trophy, Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PlatformCard from "@/components/PlatformCard";
import { platforms } from "@/data/platforms";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
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
              Ranking 2024 Atualizado
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
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span>100% Gratuito</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span>Análises Detalhadas</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span>Atualizado 2024</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-12 animate-bounce">
            <ArrowDown className="h-6 w-6 text-white/80" />
          </div>
        </div>
      </section>

      {/* Ranking Section */}
      <section className="container pb-20">
        <div className="mb-12 text-center">
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

      <Footer />
    </div>
  );
};

export default Index;
