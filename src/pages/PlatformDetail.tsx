import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, XCircle, Star, Clock, Shield, CreditCard, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { platforms } from "@/data/platforms";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const PlatformDetail = () => {
  const { slug } = useParams();
  const platform = platforms.find((p) => p.slug === slug);

  if (!platform) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Plataforma não encontrada</h1>
          <Link to="/">
            <Button>Voltar para o ranking</Button>
          </Link>
        </div>
      </div>
    );
  }

  const complexityLabel = ["", "Muito Fácil", "Fácil", "Moderado", "Difícil", "Muito Difícil"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container py-8">
        <BreadcrumbNav 
          items={[
            { label: "Ranking", href: "/ranking" },
            { label: platform.name }
          ]} 
        />
        
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" />
          Voltar para o ranking
        </Link>

        {/* Hero */}
        <div className="mb-12">
          <div className="flex items-start gap-8 mb-8">
            <div className="flex items-center justify-center w-28 h-28 rounded-2xl bg-gradient-to-br from-background to-muted/20 p-4 shadow-lg border-2 border-border/50 transition-all duration-300 hover:shadow-xl hover:scale-105">
              {typeof platform.logo === 'string' && (platform.logo.startsWith('/') || platform.logo.includes('data:image') || platform.logo.match(/\.(jpg|jpeg|png|gif|svg|webp)$/i)) ? (
                <img src={platform.logo} alt={`${platform.name} logo`} className="w-full h-full object-contain" />
              ) : (
                <span className="text-6xl">{platform.logo}</span>
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">{platform.name}</h1>
                {platform.isFree ? (
                  <Badge className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground font-semibold text-lg px-4 py-1.5 rounded-full shadow-sm">Grátis</Badge>
                ) : (
                  <Badge variant="secondary" className="bg-gradient-to-r from-secondary to-secondary/80 font-semibold text-lg px-4 py-1.5 rounded-full shadow-sm">Pago</Badge>
                )}
                {platform.isRecommended && (
                  <Badge className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-bold text-lg px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                    ⭐ Recomendado
                  </Badge>
                )}
              </div>
              
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 transition-all ${
                      i < Math.floor(platform.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-muted-foreground/30"
                    }`}
                  />
                ))}
                <span className="text-lg font-bold ml-2">{platform.rating.toFixed(1)}</span>
                <span className="text-sm text-muted-foreground">de 5.0</span>
              </div>

              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">{platform.description}</p>

              <Button size="lg" className="gap-2 bg-gradient-to-r from-primary via-primary to-primary/90 hover:from-primary/90 hover:via-primary/80 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-semibold">
                Começar na {platform.name}
              </Button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Visão Geral */}
            <Card>
              <CardHeader>
                <CardTitle>Visão Geral</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <span className="font-semibold">Tipo:</span> {platform.type}
                </div>
                <div>
                  <span className="font-semibold">Ideal para:</span> {platform.idealFor}
                </div>
                <div>
                  <span className="font-semibold">A partir de:</span>{" "}
                  <span className="text-2xl font-bold text-primary">{platform.priceFrom}</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
              </CardContent>
            </Card>

            {/* Planos e Preços */}
            <Card>
              <CardHeader>
                <CardTitle>Planos e Preços</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {platform.plans.map((plan, index) => (
                    <div
                      key={index}
                      className="border-2 border-border/50 rounded-xl p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-to-br from-card to-card/95"
                    >
                      <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                      <p className="text-3xl font-bold bg-gradient-to-br from-primary to-primary/70 bg-clip-text text-transparent mb-4">{plan.price}</p>
                      <ul className="space-y-2">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Facilidade de Configuração */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Facilidade de Configuração
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">Complexidade</span>
                      <span className="text-sm text-muted-foreground">
                        {complexityLabel[platform.setupComplexity]}
                      </span>
                    </div>
                    <Progress value={platform.setupComplexity * 20} />
                  </div>
                  {platform.setupTime && (
                    <p className="text-sm text-muted-foreground">
                      Tempo estimado: <span className="font-semibold text-foreground">{platform.setupTime}</span>
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Recursos Técnicos */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Recursos Técnicos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    {platform.customDomain ? (
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                    ) : (
                      <XCircle className="h-5 w-5 text-destructive" />
                    )}
                    <span>Domínio próprio</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {platform.checkoutTransparent ? (
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                    ) : (
                      <XCircle className="h-5 w-5 text-destructive" />
                    )}
                    <span>Checkout transparente</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {platform.sslIncluded ? (
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                    ) : (
                      <XCircle className="h-5 w-5 text-destructive" />
                    )}
                    <span>SSL incluído</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    <span>{platform.products || "Produtos ilimitados"}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pagamento e Recebimento */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Métodos de Pagamento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {platform.paymentMethods.map((method, index) => (
                    <Badge key={index} variant="secondary">
                      {method}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Integrações */}
            <Card>
              <CardHeader>
                <CardTitle>Integrações Disponíveis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {platform.integrations.map((integration, index) => (
                    <Badge key={index} variant="outline">
                      {integration}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Vantagens e Desvantagens */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-accent">Vantagens</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {platform.pros.map((pro, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-destructive">Desvantagens</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {platform.cons.map((con, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Suporte */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Suporte e Atendimento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {platform.supportChannels.map((channel, index) => (
                    <Badge key={index} variant="secondary">
                      {channel}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="sticky top-20">
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <p className="text-sm text-muted-foreground mb-2">Avaliação Geral</p>
                  <p className="text-5xl font-bold text-primary mb-2">{platform.rating}</p>
                  <div className="flex justify-center items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(platform.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    #{platform.rank} no ranking geral
                  </p>
                </div>

                <Button className="w-full mb-4 bg-gradient-to-r from-primary via-primary to-primary/90 hover:from-primary/90 hover:via-primary/80 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-semibold" size="lg">
                  Começar agora
                </Button>

                <div className="space-y-3 pt-4 border-t">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tipo</span>
                    <span className="font-semibold">{platform.type}</span>
                  </div>
                  {platform.visits && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Visitas/mês</span>
                      <span className="font-semibold">{platform.visits}</span>
                    </div>
                  )}
                  {platform.setupTime && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Configuração</span>
                      <span className="font-semibold">{platform.setupTime}</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PlatformDetail;
