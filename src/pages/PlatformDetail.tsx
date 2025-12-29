import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, CheckCircle2, XCircle, Star, Clock, Shield, CreditCard, Zap, Globe, Users, TrendingUp, Package, Award, Smartphone, Code, DollarSign, BarChart3, AlertCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { platforms } from "@/data/platforms";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

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
    <>
      <Helmet>
        <title>{platform.name} - Análise Completa | LojasGrátis - Ranking de Plataformas</title>
        <meta name="description" content={`${platform.description} Confira preços, recursos, prós e contras da ${platform.name}. Avaliação ${platform.rating}/5.`} />
        <link rel="canonical" href={`https://lojasgratis.com.br/plataformas/${platform.slug}/`} />
        <meta property="og:title" content={`${platform.name} - Análise Completa | LojasGrátis`} />
        <meta property="og:description" content={platform.description} />
        <meta property="og:url" content={`https://lojasgratis.com.br/plataformas/${platform.slug}`} />
        <meta property="og:type" content="article" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
      
      <div className="container py-8">
        <BreadcrumbNav 
          items={[
            { label: "Ranking", href: "/ranking" },
            { label: platform.name }
          ]} 
        />
        
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Voltar para o ranking
        </Link>

        {/* Hero Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row items-start gap-8 mb-8">
            <div className="flex items-center justify-center w-32 h-32 rounded-2xl bg-gradient-to-br from-background to-muted/20 p-5 shadow-xl border-2 border-border/50 transition-all duration-300 hover:shadow-2xl hover:scale-105">
              {typeof platform.logo === 'string' && (platform.logo.startsWith('/') || platform.logo.includes('data:image') || platform.logo.match(/\.(jpg|jpeg|png|gif|svg|webp)$/i)) ? (
                <img src={platform.logo} alt={`${platform.name} logo`} className="w-full h-full object-contain" />
              ) : (
                <span className="text-6xl">{platform.logo}</span>
              )}
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h1 className="text-5xl font-extrabold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">{platform.name}</h1>
                {platform.isFree ? (
                  <Badge className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground font-bold text-base px-4 py-1.5 rounded-full shadow-md">
                    Grátis
                  </Badge>
                ) : (
                  <Badge 
                    style={{ 
                      backgroundColor: 'transparent',
                      borderColor: 'hsl(var(--badge-paid-border))',
                      color: 'black'
                    }}
                    className="font-bold text-base px-4 py-1.5 rounded-full shadow-md border-2"
                  >
                    Pago
                  </Badge>
                )}
                {platform.isRecommended && (
                  <Badge 
                    style={{ 
                      backgroundColor: 'hsl(var(--badge-recommended))',
                      borderColor: 'hsl(var(--badge-recommended-border))',
                      color: 'white'
                    }}
                    className="font-bold text-base px-4 py-1.5 rounded-full shadow-lg flex items-center gap-2 border-2"
                  >
                    <Star className="h-4 w-4 fill-white" />
                    Recomendado
                  </Badge>
                )}
              </div>
              
              <div className="flex items-center gap-2 mb-5">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-6 w-6 transition-all ${
                        i < Math.floor(platform.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xl font-bold ml-2">{platform.rating.toFixed(1)}</span>
                <span className="text-sm text-muted-foreground">de 5.0</span>
                <span className="ml-4 text-sm text-muted-foreground">#{platform.rank} no ranking geral</span>
              </div>

              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">{platform.description}</p>

              <Button size="lg" className="gap-2 bg-gradient-to-r from-primary via-primary to-primary/90 hover:from-primary/90 hover:via-primary/80 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-bold text-lg px-8 py-6">
                Começar na {platform.name}
                <ArrowLeft className="h-5 w-5 rotate-180" />
              </Button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Descrição Completa */}
            {platform.fullDescription && (
              <Card className="border-2 border-primary/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Package className="h-6 w-6 text-primary" />
                    Sobre a Plataforma
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base leading-relaxed text-muted-foreground">{platform.fullDescription}</p>
                </CardContent>
              </Card>
            )}

            {/* Estatísticas e Mercado */}
            {(platform.yearFounded || platform.countries || platform.totalCustomers || platform.globalTraffic) && (
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <BarChart3 className="h-6 w-6 text-primary" />
                    Estatísticas e Presença Global
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {platform.yearFounded && (
                      <div className="flex flex-col gap-2 p-4 rounded-lg bg-gradient-to-br from-muted/50 to-muted/20 border border-border/50">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          Fundação
                        </div>
                        <div className="text-2xl font-bold">{platform.yearFounded}</div>
                        <div className="text-xs text-muted-foreground">{platform.marketYears} anos no mercado</div>
                      </div>
                    )}
                    {platform.totalCustomers && (
                      <div className="flex flex-col gap-2 p-4 rounded-lg bg-gradient-to-br from-muted/50 to-muted/20 border border-border/50">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Users className="h-4 w-4" />
                          Clientes Ativos
                        </div>
                        <div className="text-2xl font-bold text-primary">{platform.totalCustomers}</div>
                        <div className="text-xs text-muted-foreground">lojas ativas</div>
                      </div>
                    )}
                    {platform.globalTraffic && (
                      <div className="flex flex-col gap-2 p-4 rounded-lg bg-gradient-to-br from-muted/50 to-muted/20 border border-border/50">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <TrendingUp className="h-4 w-4" />
                          Tráfego Global
                        </div>
                        <div className="text-2xl font-bold text-accent">{platform.globalTraffic}</div>
                        <div className="text-xs text-muted-foreground">visitantes mensais</div>
                      </div>
                    )}
                    {platform.countries && (
                      <div className="flex flex-col gap-2 p-4 rounded-lg bg-gradient-to-br from-muted/50 to-muted/20 border border-border/50">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Globe className="h-4 w-4" />
                          Presença Global
                        </div>
                        <div className="text-sm font-semibold mt-1">{platform.countries.join(", ")}</div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Gráfico de Dificuldade */}
            {platform.setupDifficulty && (
              <Card className="shadow-lg border-2 border-accent/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <AlertCircle className="h-6 w-6 text-accent" />
                    Nível de Dificuldade para Configurar
                  </CardTitle>
                  <CardDescription>Avaliação baseada na curva de aprendizado e tempo de setup</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-3">
                        <span className="text-lg font-bold">Complexidade</span>
                        <span className="text-lg font-bold text-primary">{platform.setupDifficulty.score}/10</span>
                      </div>
                      <Progress value={platform.setupDifficulty.score * 10} className="h-4" />
                      <div className="flex justify-between text-xs text-muted-foreground mt-2">
                        <span>Muito Fácil</span>
                        <span>Muito Difícil</span>
                      </div>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50 border border-border/50">
                      <p className="text-sm text-muted-foreground leading-relaxed">{platform.setupDifficulty.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Visão Geral */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Visão Geral</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-border/50">
                  <span className="font-semibold text-muted-foreground">Tipo de Plataforma:</span>
                  <Badge variant="secondary" className="text-sm">{platform.type}</Badge>
                </div>
                <div className="flex justify-between items-start py-3 border-b border-border/50">
                  <span className="font-semibold text-muted-foreground">Ideal para:</span>
                  <span className="text-right font-medium max-w-xs">{platform.idealFor}</span>
                </div>
                {platform.platformStyle && (
                  <div className="flex justify-between items-start py-3 border-b border-border/50">
                    <span className="font-semibold text-muted-foreground">Estilo da Plataforma:</span>
                    <span className="text-right font-medium max-w-xs">{platform.platformStyle}</span>
                  </div>
                )}
                <div className="flex justify-between items-center py-3">
                  <span className="font-semibold text-muted-foreground">A partir de:</span>
                  <div className="text-right">
                    <span className="text-3xl font-bold text-primary">{platform.priceFrom}</span>
                    <span className="text-muted-foreground text-sm">/mês</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Melhores Tipos de Produtos */}
            {platform.bestProductTypes && platform.bestProductTypes.length > 0 && (
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Package className="h-6 w-6 text-primary" />
                    Melhores Tipos de Produtos
                  </CardTitle>
                  <CardDescription>Categorias que melhor se adequam a esta plataforma</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {platform.bestProductTypes.map((product, index) => (
                      <Badge key={index} variant="secondary" className="text-sm px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
                        {product}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Marketing Recomendado */}
            {platform.recommendedMarketing && platform.recommendedMarketing.length > 0 && (
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <TrendingUp className="h-6 w-6 text-primary" />
                    Estratégias de Marketing Recomendadas
                  </CardTitle>
                  <CardDescription>Canais e táticas mais eficazes para esta plataforma</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-3">
                    {platform.recommendedMarketing.map((strategy, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20">
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                        <span className="font-medium">{strategy}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Planos e Preços */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <DollarSign className="h-6 w-6 text-primary" />
                  Planos e Preços
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {platform.plans.map((plan, index) => (
                    <div
                      key={index}
                      className="border-2 border-border/50 rounded-xl p-6 hover:border-primary/40 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-card to-card/95"
                    >
                      <h3 className="text-2xl font-bold mb-3">{plan.name}</h3>
                      <p className="text-4xl font-extrabold bg-gradient-to-br from-primary to-primary/70 bg-clip-text text-transparent mb-6">{plan.price}</p>
                      <ul className="space-y-3">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm">
                            <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recursos Técnicos */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Zap className="h-6 w-6 text-primary" />
                  Recursos Técnicos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                    {platform.customDomain ? (
                      <CheckCircle2 className="h-6 w-6 text-accent" />
                    ) : (
                      <XCircle className="h-6 w-6 text-destructive" />
                    )}
                    <span className="font-medium">Domínio próprio</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                    {platform.checkoutTransparent ? (
                      <CheckCircle2 className="h-6 w-6 text-accent" />
                    ) : (
                      <XCircle className="h-6 w-6 text-destructive" />
                    )}
                    <span className="font-medium">Checkout transparente</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                    {platform.sslIncluded ? (
                      <CheckCircle2 className="h-6 w-6 text-accent" />
                    ) : (
                      <XCircle className="h-6 w-6 text-destructive" />
                    )}
                    <span className="font-medium">SSL incluído</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                    <CheckCircle2 className="h-6 w-6 text-accent" />
                    <span className="font-medium">{platform.products || "Produtos ilimitados"}</span>
                  </div>
                  {platform.mobileApp !== undefined && (
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                      {platform.mobileApp ? (
                        <CheckCircle2 className="h-6 w-6 text-accent" />
                      ) : (
                        <XCircle className="h-6 w-6 text-destructive" />
                      )}
                      <span className="font-medium">App Mobile</span>
                    </div>
                  )}
                  {platform.apiAvailable !== undefined && (
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                      {platform.apiAvailable ? (
                        <CheckCircle2 className="h-6 w-6 text-accent" />
                      ) : (
                        <XCircle className="h-6 w-6 text-destructive" />
                      )}
                      <span className="font-medium">API Disponível</span>
                    </div>
                  )}
                  {platform.multiCurrency !== undefined && (
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                      {platform.multiCurrency ? (
                        <CheckCircle2 className="h-6 w-6 text-accent" />
                      ) : (
                        <XCircle className="h-6 w-6 text-destructive" />
                      )}
                      <span className="font-medium">Multi-moeda</span>
                    </div>
                  )}
                  {platform.multiLanguage !== undefined && (
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                      {platform.multiLanguage ? (
                        <CheckCircle2 className="h-6 w-6 text-accent" />
                      ) : (
                        <XCircle className="h-6 w-6 text-destructive" />
                      )}
                      <span className="font-medium">Multi-idioma</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Pagamento e Recebimento */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <CreditCard className="h-6 w-6 text-primary" />
                  Métodos de Pagamento
                </CardTitle>
                {platform.avgTransactionFee && (
                  <CardDescription>Taxa média: {platform.avgTransactionFee}</CardDescription>
                )}
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {platform.paymentMethods.map((method, index) => (
                    <Badge key={index} variant="secondary" className="text-sm px-4 py-2 bg-gradient-to-r from-secondary/80 to-secondary/60">
                      {method}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Integrações */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Code className="h-6 w-6 text-primary" />
                  Integrações Disponíveis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {platform.integrations.map((integration, index) => (
                    <Badge key={index} variant="outline" className="text-sm px-4 py-2 border-primary/30">
                      {integration}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Segurança */}
            {platform.securityFeatures && platform.securityFeatures.length > 0 && (
              <Card className="shadow-lg border-2 border-accent/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Shield className="h-6 w-6 text-accent" />
                    Recursos de Segurança
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-3">
                    {platform.securityFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-accent/10 border border-accent/20">
                        <Shield className="h-5 w-5 text-accent flex-shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Vantagens e Desvantagens */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-lg border-2 border-accent/30">
                <CardHeader>
                  <CardTitle className="text-accent flex items-center gap-2 text-2xl">
                    <CheckCircle2 className="h-6 w-6" />
                    Vantagens
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {platform.pros.map((pro, index) => (
                      <li key={index} className="flex items-start gap-3 p-2 rounded-lg hover:bg-accent/5 transition-colors">
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-2 border-destructive/30">
                <CardHeader>
                  <CardTitle className="text-destructive flex items-center gap-2 text-2xl">
                    <XCircle className="h-6 w-6" />
                    Desvantagens
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {platform.cons.map((con, index) => (
                      <li key={index} className="flex items-start gap-3 p-2 rounded-lg hover:bg-destructive/5 transition-colors">
                        <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{con}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Suporte */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Shield className="h-6 w-6 text-primary" />
                  Suporte e Atendimento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {platform.supportChannels.map((channel, index) => (
                    <Badge key={index} variant="secondary" className="text-sm px-4 py-2 bg-gradient-to-r from-secondary/80 to-secondary/60">
                      {channel}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Requisitos Técnicos */}
            {platform.technicalRequirements && platform.technicalRequirements.length > 0 && (
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Smartphone className="h-6 w-6 text-primary" />
                    Requisitos Técnicos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {platform.technicalRequirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Escalabilidade */}
            {platform.scalability && (
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <TrendingUp className="h-6 w-6 text-primary" />
                    Escalabilidade
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{platform.scalability}</p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="sticky top-20 shadow-xl border-2 border-primary/20">
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <p className="text-sm text-muted-foreground mb-2">Avaliação Geral</p>
                  <p className="text-6xl font-extrabold text-primary mb-3">{platform.rating}</p>
                  <div className="flex justify-center items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-6 w-6 ${
                          i < Math.floor(platform.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <Badge variant="secondary" className="text-sm px-4 py-2">
                    #{platform.rank} no ranking geral
                  </Badge>
                </div>

                <Button className="w-full mb-6 bg-gradient-to-r from-primary via-primary to-primary/90 hover:from-primary/90 hover:via-primary/80 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-bold text-base py-6" size="lg">
                  Começar agora
                </Button>

                <Separator className="my-6" />

                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground font-medium">Tipo</span>
                    <Badge variant="outline" className="font-semibold">{platform.type}</Badge>
                  </div>
                  {platform.visits && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground font-medium">Visitas/mês</span>
                      <span className="font-bold text-primary">{platform.visits}</span>
                    </div>
                  )}
                  {platform.setupTime && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground font-medium">Configuração</span>
                      <span className="font-bold">{platform.setupTime}</span>
                    </div>
                  )}
                  {platform.avgTransactionFee && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground font-medium">Taxa média</span>
                      <span className="font-bold text-accent">{platform.avgTransactionFee}</span>
                    </div>
                  )}
                </div>

                <Separator className="my-6" />

                {/* Reclame Aqui */}
                {platform.reclameAquiScore && platform.reclameAquiLink && (
                  <div className="text-center p-4 rounded-lg bg-gradient-to-br from-muted/50 to-muted/20 border border-border/50">
                    <p className="text-xs text-muted-foreground mb-2">Reclame Aqui</p>
                    <p className="text-3xl font-extrabold text-primary mb-2">{platform.reclameAquiScore.toFixed(1)}</p>
                    <Progress value={platform.reclameAquiScore * 10} className="h-2 mb-3" />
                    <a 
                      href={platform.reclameAquiLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-primary hover:underline font-medium"
                    >
                      Ver avaliações completas →
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

        <Footer />
      </div>
    </>
  );
};

export default PlatformDetail;
