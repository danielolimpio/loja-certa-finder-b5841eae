import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Map, Home, BarChart3, GitCompare, Info, Mail, Shield, Cookie, FileText, Eye } from "lucide-react";

const Sitemap = () => {
  return (
    <>
      <Helmet>
        <title>Mapa do Site - Lojas Grátis</title>
        <meta name="description" content="Navegue facilmente por todas as seções do Lojas Grátis. Encontre análises, comparações e guias completos sobre plataformas de e-commerce." />
      </Helmet>

      <Header />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Map className="h-16 w-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Mapa do Site</h1>
            <p className="text-lg text-muted-foreground">
              Veja todas as seções do site organizadas para facilitar sua navegação.
            </p>
          </div>

          {/* Main Sections */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Menu Principal */}
            <div className="bg-card border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Home className="h-5 w-5 text-primary" />
                Menu Principal
              </h2>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    → Início
                  </Link>
                </li>
                <li>
                  <Link to="/ranking" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    <BarChart3 className="h-4 w-4" />
                    Ranking
                  </Link>
                </li>
                <li>
                  <Link to="/comparar" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    <GitCompare className="h-4 w-4" />
                    Comparar Plataformas
                  </Link>
                </li>
                <li>
                  <Link to="/sobre" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    <Info className="h-4 w-4" />
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link to="/contato" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Contato
                  </Link>
                </li>
              </ul>
            </div>

            {/* Plataformas */}
            <div className="bg-card border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                Plataformas de E-commerce
              </h2>
              <ul className="space-y-3">
                <li>
                  <Link to="/plataformas/nuvemshop" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    → Nuvemshop
                  </Link>
                </li>
                <li>
                  <Link to="/plataformas/shopify" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    → Shopify
                  </Link>
                </li>
                <li>
                  <Link to="/plataformas/shopee" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    → Shopee
                  </Link>
                </li>
                <li>
                  <Link to="/plataformas/mercado-livre" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    → Mercado Livre
                  </Link>
                </li>
                <li>
                  <Link to="/plataformas/tray" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    → Tray
                  </Link>
                </li>
                <li>
                  <Link to="/plataformas/wix" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    → Wix
                  </Link>
                </li>
                <li>
                  <Link to="/plataformas/dooca" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    → Dooca
                  </Link>
                </li>
                <li>
                  <Link to="/plataformas/magalu" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    → Magazine Luiza
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Legal Section */}
          <div className="bg-card border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Informações Legais
            </h2>
            <ul className="grid md:grid-cols-2 gap-3">
              <li>
                <Link to="/privacidade" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <Cookie className="h-4 w-4" />
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link to="/termos" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link to="/transparencia" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  Política de Transparência
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Sitemap;