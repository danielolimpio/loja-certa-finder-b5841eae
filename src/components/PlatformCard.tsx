import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Star, TrendingUp, Sparkles, Shield, Globe, Zap, Package,
  Award, AppWindow, Rocket, TrendingUp as Growth, ShoppingCart,
  MessageSquare, Banknote, Clock, Layers, Warehouse, Crown,
  Store, Users, Gift, Palette, Boxes, Network, Building2,
  Sparkle, Heart, Shirt, Tag, MapPin, Box, BadgeCheck,
  Smartphone, Megaphone, Target
} from "lucide-react";

interface Feature {
  text: string;
}

interface PlatformCardProps {
  rank: number;
  name: string;
  slug: string;
  logo: string;
  isFree: boolean;
  isRecommended?: boolean;
  rating: number;
  priceFrom: string;
  features: Feature[];
  visits?: string;
  products?: string;
  setupTime?: string;
}

const PlatformCard = ({
  rank,
  name,
  slug,
  logo,
  isFree,
  isRecommended,
  rating,
  priceFrom,
  features,
  visits,
  products,
  setupTime,
}: PlatformCardProps) => {
  const getRankSuffix = (n: number) => {
    return `${n}º`;
  };

  // Função para mapear features para ícones premium exclusivos
  const getFeatureIcon = (featureText: string) => {
    const text = featureText.toLowerCase();
    
    // Checkout e Pagamento
    if (text.includes("checkout")) return Shield;
    if (text.includes("transparente")) return Shield;
    if (text.includes("otimizado")) return Rocket;
    
    // Domínio e Web
    if (text.includes("domínio")) return Globe;
    if (text.includes("internacional")) return Globe;
    
    // Produtos e Estoque
    if (text.includes("produtos ilimitados") || text.includes("ilimitado")) return Package;
    if (text.includes("estoque")) return Boxes;
    
    // Integração e Apps
    if (text.includes("integração")) return Zap;
    if (text.includes("whatsapp") || text.includes("pix")) return Zap;
    if (text.includes("apps") || text.includes("temas")) return AppWindow;
    
    // Liderança e Qualidade
    if (text.includes("líder") || text.includes("lider")) return Award;
    if (text.includes("plataforma internacional")) return Award;
    if (text.includes("maior")) return Crown;
    
    // Crescimento e Performance
    if (text.includes("escalabilidade")) return Growth;
    if (text.includes("visitantes") || text.includes("milhões")) return TrendingUp;
    
    // Frete e Logística
    if (text.includes("frete") || text.includes("envios") || text.includes("logística")) return Warehouse;
    if (text.includes("fba")) return Warehouse;
    
    // Marketing e Vendas
    if (text.includes("gamificação") || text.includes("cupons")) return Gift;
    if (text.includes("reputação")) return BadgeCheck;
    if (text.includes("prime")) return Crown;
    if (text.includes("credibilidade")) return BadgeCheck;
    
    // Mobile e App
    if (text.includes("app mobile") || text.includes("mobile")) return Smartphone;
    
    // Gratuito e Preço
    if (text.includes("gratuito") || text.includes("grátis") || text.includes("100%")) return Sparkle;
    if (text.includes("sem taxa") || text.includes("sem mensalidade")) return Banknote;
    
    // Marketplace
    if (text.includes("marketplace")) return Store;
    
    // Enterprise e Business
    if (text.includes("enterprise")) return Building2;
    if (text.includes("omnichannel")) return Network;
    if (text.includes("headless")) return Layers;
    
    // Multi e Gestão
    if (text.includes("multi-loja") || text.includes("multi loja")) return Layers;
    if (text.includes("erp") || text.includes("gestão")) return Target;
    
    // Nicho e Comunidade
    if (text.includes("artesanato") || text.includes("criativa")) return Palette;
    if (text.includes("comunidade")) return Users;
    
    // Digital
    if (text.includes("digital") || text.includes("infoprodutos")) return Box;
    if (text.includes("membros") || text.includes("área")) return Users;
    if (text.includes("afiliados")) return Network;
    
    // Moda e Categorias
    if (text.includes("moda") || text.includes("usados")) return Shirt;
    if (text.includes("sustentabilidade")) return Heart;
    
    // Local e Anúncios
    if (text.includes("classificados") || text.includes("anúncios")) return Megaphone;
    if (text.includes("local")) return MapPin;
    
    // Assistente
    if (text.includes("lu -") || text.includes("assistente")) return MessageSquare;
    
    // Comissões
    if (text.includes("comissões") || text.includes("comissão")) return Banknote;
    
    // Default
    return Sparkles;
  };

  return (
    <Card className="relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 border border-border/50 bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-sm group">
      {isRecommended && (
        <div className="absolute top-4 right-4 z-10">
          <Badge 
            style={{ 
              backgroundColor: 'hsl(var(--badge-recommended))',
              borderColor: 'hsl(var(--badge-recommended-border))',
              color: 'white'
            }}
            className="px-3 py-1 text-xs font-bold rounded-md shadow-lg flex items-center gap-1.5 border-2 hover:scale-105 transition-transform"
          >
            <Sparkles className="h-3 w-3" />
            Recomendado
          </Badge>
        </div>
      )}
      
      <CardContent className="p-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Section - Rank and Logo */}
          <div className="flex items-center gap-6 md:min-w-[240px]">
            <div className="relative flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 via-primary/5 to-background flex items-center justify-center text-xl font-extrabold text-primary border border-primary/40 shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/25 group-hover:scale-110 group-hover:border-primary/60">
                {getRankSuffix(rank)}
              </div>
              {rank <= 3 && (
                <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-md">
                  <Star className="h-3 w-3 text-white fill-white" />
                </div>
              )}
            </div>
            <div className="flex items-center justify-center w-40 h-40 rounded-xl bg-gradient-to-br from-background to-muted/20 p-5 shadow-md border border-border/50 transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
              {typeof logo === 'string' && (logo.startsWith('/') || logo.includes('data:image') || logo.match(/\.(jpg|jpeg|png|gif|svg|webp)$/i)) ? (
                <img src={logo} alt={`${name} logo`} className="w-full h-full object-contain" />
              ) : (
                <span className="text-6xl">{logo}</span>
              )}
            </div>
          </div>

          {/* Middle Section - Name, Rating, Features */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">{name}</h3>
              {isFree ? (
                <Badge className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground font-semibold px-3 py-1 rounded-full shadow-sm">
                  Grátis
                </Badge>
              ) : (
                <Badge 
                  style={{ 
                    backgroundColor: 'transparent',
                    borderColor: 'hsl(var(--badge-paid-border))',
                    color: 'black'
                  }}
                  className="font-semibold px-3 py-1 rounded-full shadow-sm border-2"
                >
                  Pago
                </Badge>
              )}
            </div>
            
            <div className="flex items-center gap-2 mb-5">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 transition-all duration-200 ${
                      i < Math.floor(rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-bold text-foreground">{rating.toFixed(1)}</span>
              <span className="text-xs text-muted-foreground">de 5.0</span>
            </div>

            <div className="grid md:grid-cols-2 gap-3 mb-5">
              {features.slice(0, 4).map((feature, index) => {
                const FeatureIcon = getFeatureIcon(feature.text);
                return (
                  <div key={index} className="flex items-start gap-2.5 text-sm group/feature">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center border border-primary/20 transition-all duration-300 group-hover/feature:scale-110 group-hover/feature:shadow-md group-hover/feature:shadow-primary/20 group-hover/feature:border-primary/40">
                        <FeatureIcon className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                    <span className="text-muted-foreground leading-relaxed flex-1">{feature.text}</span>
                  </div>
                );
              })}
            </div>

            {(visits || products || setupTime) && (
              <div className="flex flex-wrap gap-6 text-sm">
                {visits && (
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-primary/70" />
                    <span className="text-muted-foreground">Visitas:</span>
                    <span className="font-bold text-foreground">{visits}</span>
                  </div>
                )}
                {products && (
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground">Produtos:</span>
                    <span className="font-bold text-foreground">{products}</span>
                  </div>
                )}
                {setupTime && (
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground">Configuração:</span>
                    <span className="font-bold text-foreground">{setupTime}</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Section - Price and CTA */}
          <div className="flex flex-col items-center justify-center gap-5 md:min-w-[220px] md:border-l md:border-border/50 md:pl-8">
            <div className="text-center">
              <p className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">A partir de</p>
              <p className="text-4xl font-bold bg-gradient-to-br from-primary to-primary/70 bg-clip-text text-transparent">
                {priceFrom}
              </p>
              <p className="text-sm text-muted-foreground mt-1 font-medium">/mês</p>
            </div>
            
            <Link to={`/plataformas/${slug}`} className="w-full">
              <Button 
                className={`w-full font-bold shadow-xl transition-all duration-300 ${
                  isRecommended 
                    ? "bg-gradient-to-r from-primary via-primary to-primary/80 hover:from-primary/95 hover:via-primary/85 hover:to-primary/75 text-primary-foreground shadow-primary/40 hover:shadow-2xl hover:shadow-primary/50 hover:scale-105 border border-primary/30" 
                    : "bg-gradient-to-r from-accent via-accent to-accent/90 hover:from-accent/95 hover:via-accent/85 hover:to-accent/80 text-accent-foreground shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 hover:scale-105 border border-accent/30"
                }`}
                size="lg"
              >
                Ver análise completa
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlatformCard;
