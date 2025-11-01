import { Link } from "react-router-dom";
import { Store, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <Store className="h-6 w-6 text-primary" />
          <span>Lojas<span className="text-primary">Grátis</span></span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Início
          </Link>
          <Link to="/sobre" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Sobre
          </Link>
          <Link to="/ranking" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Ranking
          </Link>
          <Link to="/comparar" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Comparar
          </Link>
          <Link to="/contato" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Contato
          </Link>
        </nav>

        <Button variant="outline" size="sm">
          <Search className="h-4 w-4 mr-2" />
          Buscar
        </Button>
      </div>
    </header>
  );
};

export default Header;
