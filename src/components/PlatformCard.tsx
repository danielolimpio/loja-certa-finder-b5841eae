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
        <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold rounded-bl-lg">
          Recomendado
        </div>
      )}
      
      <CardContent className="pt-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center text-2xl font-bold text-primary">
            #{rank}
          </div>
          
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-bold">{name}</h3>
              {isFree ? (
                <Badge className="bg-accent hover:bg-accent/90">Grátis</Badge>
              ) : (
                <Badge variant="secondary">Pago</Badge>
              )}
            </div>
            
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
              <span className="text-sm text-muted-foreground ml-1">
                {rating.toFixed(1)}
              </span>
            </div>

            <p className="text-2xl font-bold text-primary mb-4">
              {priceFrom}
              <span className="text-sm font-normal text-muted-foreground">/mês</span>
            </p>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          {features.slice(0, 4).map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
              <span>{feature.text}</span>
            </div>
          ))}
        </div>

        {(visits || products || setupTime) && (
          <div className="grid grid-cols-3 gap-2 pt-4 border-t">
            {visits && (
              <div className="text-center">
                <TrendingUp className="h-4 w-4 mx-auto mb-1 text-muted-foreground" />
                <p className="text-xs text-muted-foreground">Visitas</p>
                <p className="text-sm font-semibold">{visits}</p>
              </div>
            )}
            {products && (
              <div className="text-center">
                <p className="text-xs text-muted-foreground">Produtos</p>
                <p className="text-sm font-semibold">{products}</p>
              </div>
            )}
            {setupTime && (
              <div className="text-center">
                <p className="text-xs text-muted-foreground">Config.</p>
                <p className="text-sm font-semibold">{setupTime}</p>
              </div>
            )}
          </div>
        )}
      </CardContent>

      <CardFooter className="pt-0">
        <Link to={`/plataformas/${slug}`} className="w-full">
          <Button className="w-full" variant={isRecommended ? "default" : "outline"}>
            Ver análise completa
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default PlatformCard;
