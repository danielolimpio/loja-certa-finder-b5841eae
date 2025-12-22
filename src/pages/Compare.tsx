import { Helmet } from "react-helmet";
import { useState } from "react";
import { ArrowLeftRight, Check, X, Star, ExternalLink, Plus, Trash2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { platforms, Platform } from "@/data/platforms";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Compare = () => {
  const [selectedSlugs, setSelectedSlugs] = useState<string[]>([]);

  const selectedPlatforms = selectedSlugs
    .map(slug => platforms.find(p => p.slug === slug))
    .filter((p): p is Platform => p !== undefined);

  const addPlatform = (slug: string) => {
    if (selectedSlugs.length < 3 && !selectedSlugs.includes(slug)) {
      setSelectedSlugs([...selectedSlugs, slug]);
    }
  };

  const removePlatform = (slug: string) => {
    setSelectedSlugs(selectedSlugs.filter(s => s !== slug));
  };

  const clearAll = () => {
    setSelectedSlugs([]);
  };

  const availablePlatforms = platforms.filter(p => !selectedSlugs.includes(p.slug));

  // Get all unique features for comparison
  const allFeatures = Array.from(
    new Set(selectedPlatforms.flatMap(p => p.features.map(f => f.text)))
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <Helmet>
        <title>Compare Plataformas de E-commerce | LojasGrátis</title>
        <meta 
          name="description" 
          content="Compare lado a lado as melhores plataformas de e-commerce do Brasil. Analise recursos, preços e escolha a ideal para seu negócio." 
        />
        <link rel="canonical" href="https://lojasgratis.com.br/comparar" />
        <meta name="keywords" content="comparar ecommerce, comparação plataformas, melhor plataforma ecommerce" />
      </Helmet>

      <Header />
      
      <div className="container mt-6">
        <BreadcrumbNav items={[{ label: "Comparar" }]} />
      </div>
      
      {/* Hero Section */}
      <section className="container py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            <ArrowLeftRight className="h-4 w-4" />
            Ferramenta de Comparação
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Compare as <span className="text-primary">Melhores Plataformas</span>
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Selecione até 3 plataformas e compare recursos, preços, facilidade de uso e muito mais. 
            Tome a decisão certa para o seu negócio.
          </p>
        </div>
      </section>

      {/* Selection Section */}
      <section className="container pb-12">
        <div className="max-w-6xl mx-auto">
          {/* Platform Selector */}
          <Card className="p-6 md:p-8 mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <h2 className="text-2xl font-bold">Selecione as Plataformas</h2>
              {selectedSlugs.length > 0 && (
                <Button variant="outline" size="sm" onClick={clearAll}>
                  <Trash2 className="h-4 w-4 mr-2" />
                  Limpar Seleção
                </Button>
              )}
            </div>

            {/* Selected Platform Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {selectedPlatforms.map((platform) => (
                <div 
                  key={platform.slug}
                  className="relative group border rounded-xl p-4 bg-card hover:shadow-md transition-shadow"
                >
                  <button
                    onClick={() => removePlatform(platform.slug)}
                    className="absolute -top-2 -right-2 p-1.5 bg-destructive text-destructive-foreground rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-md hover:scale-110"
                  >
                    <X className="h-3 w-3" />
                  </button>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                      <img 
                        src={platform.logo} 
                        alt={platform.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold truncate">{platform.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        {platform.rating}
                        <span>•</span>
                        <span>{platform.priceFrom}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Add Platform Slot */}
              {selectedSlugs.length < 3 && (
                <div className="border-2 border-dashed rounded-xl p-4 flex items-center justify-center min-h-[80px]">
                  <Select onValueChange={addPlatform} value="">
                    <SelectTrigger className="border-0 shadow-none h-auto p-0 w-auto">
                      <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                        <Plus className="h-5 w-5" />
                        <span>Adicionar plataforma</span>
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      {availablePlatforms.map((platform) => (
                        <SelectItem key={platform.slug} value={platform.slug}>
                          <div className="flex items-center gap-2">
                            <img 
                              src={platform.logo} 
                              alt={platform.name}
                              className="w-5 h-5 rounded object-cover"
                            />
                            {platform.name}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>

            {selectedSlugs.length === 0 && (
              <p className="text-center text-muted-foreground py-4">
                Selecione pelo menos 2 plataformas para começar a comparação
              </p>
            )}
          </Card>

          {/* Comparison Table */}
          {selectedPlatforms.length >= 2 && (
            <Card className="overflow-hidden">
              {/* Cards Side by Side View */}
              <div className="grid gap-0 divide-x" style={{ gridTemplateColumns: `repeat(${selectedPlatforms.length}, 1fr)` }}>
                {selectedPlatforms.map((platform) => (
                  <div key={platform.slug} className="p-6">
                    {/* Platform Header */}
                    <div className="text-center mb-6 pb-6 border-b">
                      <div className="w-20 h-20 mx-auto rounded-xl overflow-hidden bg-muted mb-4">
                        <img 
                          src={platform.logo} 
                          alt={platform.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{platform.name}</h3>
                      <div className="flex items-center justify-center gap-2 mb-3">
                        {platform.isRecommended && (
                          <Badge variant="default">Recomendado</Badge>
                        )}
                        {platform.isFree && (
                          <Badge variant="secondary">Gratuito</Badge>
                        )}
                      </div>
                      <div className="flex items-center justify-center gap-1 text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < Math.floor(platform.rating) ? 'fill-current' : 'text-muted'}`} 
                          />
                        ))}
                        <span className="ml-1 text-foreground font-semibold">{platform.rating}</span>
                      </div>
                    </div>

                    {/* Key Metrics */}
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-muted-foreground text-sm">Ranking</span>
                        <span className="font-bold text-primary text-lg">#{platform.rank}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-muted-foreground text-sm">Preço</span>
                        <span className="font-bold text-lg">{platform.priceFrom}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-muted-foreground text-sm">Produtos</span>
                        <span className="font-medium">{platform.products}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-muted-foreground text-sm">Configuração</span>
                        <span className="font-medium">{platform.setupTime}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-muted-foreground text-sm">Tipo</span>
                        <span className="font-medium">{platform.type}</span>
                      </div>
                      {platform.reclameAquiScore && (
                        <div className="flex justify-between items-center py-2 border-b">
                          <span className="text-muted-foreground text-sm">Reclame Aqui</span>
                          <span className="font-medium">{platform.reclameAquiScore}/10</span>
                        </div>
                      )}
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">Recursos</h4>
                      <ul className="space-y-2">
                        {allFeatures.map((featureText, idx) => {
                          const hasFeature = platform.features.some(f => f.text === featureText);
                          return (
                            <li key={idx} className="flex items-center gap-2 text-sm">
                              {hasFeature ? (
                                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                              ) : (
                                <X className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                              )}
                              <span className={hasFeature ? '' : 'text-muted-foreground line-through'}>
                                {featureText}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    {/* Pros & Cons */}
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide text-green-600">Vantagens</h4>
                        <ul className="space-y-1">
                          {platform.pros.slice(0, 3).map((pro, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <Check className="h-3.5 w-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide text-red-600">Desvantagens</h4>
                        <ul className="space-y-1">
                          {platform.cons.slice(0, 3).map((con, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <X className="h-3.5 w-3.5 text-red-500 mt-0.5 flex-shrink-0" />
                              <span>{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* CTA */}
                    <Button asChild className="w-full" size="lg">
                      <Link to={`/plataformas/${platform.slug}`}>
                        Ver Análise Completa
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Empty State */}
          {selectedPlatforms.length === 1 && (
            <Card className="p-12 text-center">
              <ArrowLeftRight className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-lg font-medium mb-2">Adicione mais uma plataforma</p>
              <p className="text-muted-foreground">
                Selecione pelo menos 2 plataformas para ver a comparação lado a lado
              </p>
            </Card>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Compare;
