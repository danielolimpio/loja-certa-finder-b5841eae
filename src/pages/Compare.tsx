import { Helmet } from "react-helmet";
import { useState } from "react";
import { ArrowLeftRight, Check, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { platforms } from "@/data/platforms";
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

const Compare = () => {
  const [platform1, setPlatform1] = useState<string>("");
  const [platform2, setPlatform2] = useState<string>("");
  const [platform3, setPlatform3] = useState<string>("");

  const selectedPlatforms = [
    platforms.find(p => p.slug === platform1),
    platforms.find(p => p.slug === platform2),
    platforms.find(p => p.slug === platform3),
  ].filter(Boolean);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <Helmet>
        <title>Compare Plataformas de E-commerce | LojasGrátis</title>
        <meta 
          name="description" 
          content="Compare lado a lado as melhores plataformas de e-commerce do Brasil. Analise recursos, preços e escolha a ideal para seu negócio." 
        />
        <meta name="keywords" content="comparar ecommerce, comparação plataformas, melhor plataforma ecommerce" />
      </Helmet>

      <Header />
      
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
          <Card className="p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Selecione as Plataformas</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Plataforma 1</label>
                <Select value={platform1} onValueChange={setPlatform1}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione..." />
                  </SelectTrigger>
                  <SelectContent>
                    {platforms.map((platform) => (
                      <SelectItem key={platform.slug} value={platform.slug}>
                        {platform.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Plataforma 2</label>
                <Select value={platform2} onValueChange={setPlatform2}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione..." />
                  </SelectTrigger>
                  <SelectContent>
                    {platforms.map((platform) => (
                      <SelectItem key={platform.slug} value={platform.slug}>
                        {platform.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Plataforma 3 (opcional)</label>
                <Select value={platform3} onValueChange={setPlatform3}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione..." />
                  </SelectTrigger>
                  <SelectContent>
                    {platforms.map((platform) => (
                      <SelectItem key={platform.slug} value={platform.slug}>
                        {platform.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {selectedPlatforms.length > 0 && (
              <div className="mt-4 flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => {
                    setPlatform1("");
                    setPlatform2("");
                    setPlatform3("");
                  }}
                >
                  Limpar Seleção
                </Button>
              </div>
            )}
          </Card>

          {/* Comparison Table */}
          {selectedPlatforms.length >= 2 && (
            <div className="overflow-x-auto">
              <Card className="p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-6">Comparação Detalhada</h2>
                <div className="space-y-6">
                  {/* Header - Platform Names */}
                  <div className="grid gap-4" style={{ gridTemplateColumns: `200px repeat(${selectedPlatforms.length}, 1fr)` }}>
                    <div className="font-semibold text-lg"></div>
                    {selectedPlatforms.map((platform) => (
                      <div key={platform!.slug} className="text-center">
                        <div className="font-bold text-lg mb-2">{platform!.name}</div>
                        {platform!.isRecommended && (
                          <Badge variant="default" className="mb-2">Recomendado</Badge>
                        )}
                        {platform!.isFree && (
                          <Badge variant="secondary">Gratuito</Badge>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Ranking */}
                  <div className="grid gap-4 py-4 border-t" style={{ gridTemplateColumns: `200px repeat(${selectedPlatforms.length}, 1fr)` }}>
                    <div className="font-semibold">Posição no Ranking</div>
                    {selectedPlatforms.map((platform) => (
                      <div key={platform!.slug} className="text-center">
                        <span className="text-2xl font-bold text-primary">#{platform!.rank}</span>
                      </div>
                    ))}
                  </div>

                  {/* Rating */}
                  <div className="grid gap-4 py-4 border-t" style={{ gridTemplateColumns: `200px repeat(${selectedPlatforms.length}, 1fr)` }}>
                    <div className="font-semibold">Avaliação</div>
                    {selectedPlatforms.map((platform) => (
                      <div key={platform!.slug} className="text-center">
                        <span className="text-xl font-bold">{platform!.rating}</span>
                        <span className="text-muted-foreground">/5.0</span>
                      </div>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="grid gap-4 py-4 border-t" style={{ gridTemplateColumns: `200px repeat(${selectedPlatforms.length}, 1fr)` }}>
                    <div className="font-semibold">Preço Inicial</div>
                    {selectedPlatforms.map((platform) => (
                      <div key={platform!.slug} className="text-center">
                        <span className="text-xl font-bold text-primary">{platform!.priceFrom}</span>
                      </div>
                    ))}
                  </div>

                  {/* Products */}
                  <div className="grid gap-4 py-4 border-t" style={{ gridTemplateColumns: `200px repeat(${selectedPlatforms.length}, 1fr)` }}>
                    <div className="font-semibold">Limite de Produtos</div>
                    {selectedPlatforms.map((platform) => (
                      <div key={platform!.slug} className="text-center text-sm">
                        {platform!.products}
                      </div>
                    ))}
                  </div>

                  {/* Setup Time */}
                  <div className="grid gap-4 py-4 border-t" style={{ gridTemplateColumns: `200px repeat(${selectedPlatforms.length}, 1fr)` }}>
                    <div className="font-semibold">Tempo de Configuração</div>
                    {selectedPlatforms.map((platform) => (
                      <div key={platform!.slug} className="text-center text-sm">
                        {platform!.setupTime}
                      </div>
                    ))}
                  </div>

                  {/* Features Comparison */}
                  <div className="border-t pt-4">
                    <h3 className="font-semibold text-lg mb-4">Recursos Principais</h3>
                    {/* Get all unique features */}
                    {Array.from(new Set(selectedPlatforms.flatMap(p => p!.features.map(f => f.text)))).map((featureText, idx) => (
                      <div key={`feature-${idx}`} className="grid gap-4 py-2" style={{ gridTemplateColumns: `200px repeat(${selectedPlatforms.length}, 1fr)` }}>
                        <div className="text-sm">{featureText}</div>
                        {selectedPlatforms.map((platform) => (
                          <div key={platform!.slug} className="text-center">
                            {platform!.features.some(f => f.text === featureText) ? (
                              <Check className="h-5 w-5 text-green-500 mx-auto" />
                            ) : (
                              <X className="h-5 w-5 text-muted-foreground mx-auto" />
                            )}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="grid gap-4 pt-6 border-t" style={{ gridTemplateColumns: `200px repeat(${selectedPlatforms.length}, 1fr)` }}>
                    <div className="font-semibold">Ver Análise</div>
                    {selectedPlatforms.map((platform) => (
                      <div key={platform!.slug} className="text-center">
                        <Button asChild className="w-full">
                          <a href={`/plataformas/${platform!.slug}`}>Ver Detalhes</a>
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          )}

          {selectedPlatforms.length < 2 && selectedPlatforms.length > 0 && (
            <Card className="p-8 text-center">
              <p className="text-muted-foreground">
                Selecione pelo menos 2 plataformas para comparar
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
