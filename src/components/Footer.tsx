import { Link } from "react-router-dom";
import { Store } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/50 mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 font-bold text-xl mb-4">
              <Store className="h-6 w-6 text-primary" />
              <span>Lojas<span className="text-primary">Grátis</span></span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-md">
              O guia completo para escolher a melhor plataforma de e-commerce no Brasil. 
              Comparamos as principais soluções para você criar sua loja online.
            </p>
          </div>

          {/* Menu Principal */}
          <div>
            <h3 className="font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/ranking" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Ranking
                </Link>
              </li>
              <li>
                <Link to="/comparar" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Comparar
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Menu Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacidade" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link to="/termos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link to="/transparencia" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Política de Transparência
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} LojasGrátis. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;