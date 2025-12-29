import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Home, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Página Não Encontrada - Lojas Grátis</title>
        <meta name="description" content="A página que você está procurando não foi encontrada. Volte para o início e explore nosso ranking de plataformas de e-commerce." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Header />

      <main className="min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-background to-muted/20">
        <div className="container py-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-8">
              <span className="text-5xl font-extrabold text-primary">404</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Página não encontrada
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              A página que você está procurando não existe ou foi movida. 
              Que tal explorar nosso ranking de plataformas de e-commerce?
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="outline" className="gap-2">
                <Link to="/">
                  <ArrowLeft className="h-5 w-5" />
                  Voltar
                </Link>
              </Button>
              <Button asChild size="lg" className="gap-2">
                <Link to="/ranking">
                  <Home className="h-5 w-5" />
                  Ver Ranking
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default NotFound;
