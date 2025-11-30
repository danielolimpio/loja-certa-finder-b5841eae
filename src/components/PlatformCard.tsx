import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CheckCircle2, Star, TrendingUp } from "lucide-react";

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
  return (
    <Card className="relative overflow-hidden transition-all hover:shadow-[var(--shadow-card-hover)] [transition:var(--transition-smooth)]">
      {isRecommended && (
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1.5 text-xs font-semibold rounded-lg shadow-md">
          ⭐ Recomendado
        </div>
      )}
      
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Section - Rank and Logo */}
          <div className="flex items-center gap-4 md:min-w-[200px]">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center text-3xl font-bold text-primary">
              #{rank}
            </div>
            <div className="flex items-center justify-center w-20 h-20">
              {typeof logo === 'string' && (logo.startsWith('/') || logo.includes('data:image') || logo.match(/\.(jpg|jpeg|png|gif|svg|webp)$/i)) ? (
                <img src={logo} alt={`${name} logo`} className="w-full h-full object-contain rounded-lg" />
              ) : (
                <span className="text-5xl">{logo}</span>
              )}
            </div>
          </div>

          {/* Middle Section - Name, Rating, Price */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <h3 className="text-2xl font-bold">{name}</h3>
              {isFree ? (
                <Badge className="bg-accent hover:bg-accent/90">Grátis</Badge>
              ) : (
                <Badge variant="secondary">Pago</Badge>
              )}
            </div>
            
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
              <span className="text-sm font-semibold ml-2">{rating.toFixed(1)}</span>
            </div>

            <div className="grid md:grid-cols-2 gap-3 mb-4">
              {features.slice(0, 4).map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>

            {(visits || products || setupTime) && (
              <div className="flex flex-wrap gap-4 text-sm">
                {visits && (
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Visitas:</span>
                    <span className="font-semibold">{visits}</span>
                  </div>
                )}
                {products && (
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground">Produtos:</span>
                    <span className="font-semibold">{products}</span>
                  </div>
                )}
                {setupTime && (
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground">Configuração:</span>
                    <span className="font-semibold">{setupTime}</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Section - Price and CTA */}
          <div className="flex flex-col items-center justify-center gap-4 md:min-w-[200px] md:border-l md:pl-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-1">A partir de</p>
              <p className="text-3xl font-bold text-primary">
                {priceFrom}
              </p>
              <p className="text-sm text-muted-foreground">/mês</p>
            </div>
            
            <Link to={`/plataformas/${slug}`} className="w-full">
              <Button 
                className="w-full" 
                size="lg"
                variant={isRecommended ? "default" : "outline"}
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
