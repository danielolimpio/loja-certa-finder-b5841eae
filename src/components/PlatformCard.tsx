import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Star, TrendingUp, Sparkles } from "lucide-react";

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

  return (
    <Card className="relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 border border-border/50 bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-sm group">
      {isRecommended && (
        <div className="absolute top-4 right-4 z-10">
          <Badge className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground px-4 py-1.5 text-xs font-bold rounded-full shadow-lg flex items-center gap-1.5 border border-primary/20">
            <Sparkles className="h-3.5 w-3.5" />
            Recomendado
          </Badge>
        </div>
      )}
      
      <CardContent className="p-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Section - Rank and Logo */}
          <div className="flex items-center gap-6 md:min-w-[220px]">
            <div className="relative flex-shrink-0">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 flex items-center justify-center text-2xl font-bold text-primary border-2 border-primary/20 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:shadow-primary/20 group-hover:scale-105 group-hover:border-primary/30">
                {getRankSuffix(rank)}
              </div>
              {rank <= 3 && (
                <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-md">
                  <Star className="h-3.5 w-3.5 text-white fill-white" />
                </div>
              )}
            </div>
            <div className="flex items-center justify-center w-24 h-24 rounded-xl bg-gradient-to-br from-background to-muted/20 p-3 shadow-sm border border-border/50 transition-all duration-300 group-hover:shadow-md group-hover:scale-105">
              {typeof logo === 'string' && (logo.startsWith('/') || logo.includes('data:image') || logo.match(/\.(jpg|jpeg|png|gif|svg|webp)$/i)) ? (
                <img src={logo} alt={`${name} logo`} className="w-full h-full object-contain" />
              ) : (
                <span className="text-5xl">{logo}</span>
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
                <Badge variant="secondary" className="bg-gradient-to-r from-secondary to-secondary/80 font-semibold px-3 py-1 rounded-full shadow-sm">
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
              {features.slice(0, 4).map((feature, index) => (
                <div key={index} className="flex items-start gap-2.5 text-sm group/feature">
                  <div className="flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="h-4 w-4 text-accent transition-transform duration-200 group-hover/feature:scale-110" />
                  </div>
                  <span className="text-muted-foreground leading-relaxed">{feature.text}</span>
                </div>
              ))}
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
                className={`w-full font-semibold shadow-lg transition-all duration-300 ${
                  isRecommended 
                    ? "bg-gradient-to-r from-primary via-primary to-primary/90 hover:from-primary/90 hover:via-primary/80 hover:to-primary/70 text-primary-foreground shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-105" 
                    : "bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary/80 border-2 border-border/50 hover:border-primary/30 hover:shadow-xl hover:scale-105"
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
