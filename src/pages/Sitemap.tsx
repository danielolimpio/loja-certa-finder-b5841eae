import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { Map, Home, BarChart3, GitCompare, Info, Mail, Shield, Cookie, FileText, Eye, BookOpen, Tag } from "lucide-react";

const Sitemap = () => {
  // Todas as plataformas do site
  const platforms = [
    { name: "Nuvemshop", slug: "nuvemshop" },
    { name: "Shopify", slug: "shopify" },
    { name: "Mercado Livre", slug: "mercado-livre" },
    { name: "Shopee", slug: "shopee" },
    { name: "WooCommerce", slug: "woocommerce" },
    { name: "Tray", slug: "tray" },
    { name: "Loja Integrada", slug: "loja-integrada" },
    { name: "VTEX", slug: "vtex" },
    { name: "Bagy", slug: "bagy" },
    { name: "Amazon Brasil", slug: "amazon-brasil" },
    { name: "Magazord", slug: "magazord" },
    { name: "Elo7", slug: "elo7" },
    { name: "Hotmart", slug: "hotmart" },
    { name: "Eduzz", slug: "eduzz" },
    { name: "Americanas Marketplace", slug: "americanas-marketplace" },
    { name: "Enjoei", slug: "enjoei" },
    { name: "OLX", slug: "olx" },
    { name: "Magalu Marketplace", slug: "magalu-marketplace" },
    { name: "Kiwify", slug: "kiwify" },
    { name: "Yampi", slug: "yampi" },
  ];

  // Categorias do blog
  const blogCategories = [
    { name: "E-commerce", slug: "e-commerce" },
    { name: "Plataformas", slug: "plataformas" },
    { name: "Marketing Digital", slug: "marketing-digital" },
    { name: "Empreendedorismo", slug: "empreendedorismo" },
    { name: "Tutoriais", slug: "tutoriais" },
  ];

  return (
    <>
      <Helmet>
        <title>Mapa do Site - Lojas Grátis</title>
        <meta name="description" content="Navegue por todas as seções do Lojas Grátis. Encontre análises e guias sobre e-commerce." />
        <link rel="canonical" href="https://lojasgratis.com.br/sitemap/" />
      </Helmet>

      <Header />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <BreadcrumbNav items={[{ label: "Mapa do Site" }]} />
          
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
                  <Link to="/ranking/" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    <BarChart3 className="h-4 w-4" />
                    Ranking
                  </Link>
                </li>
                <li>
                  <Link to="/comparar/" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    <GitCompare className="h-4 w-4" />
                    Comparar Plataformas
                  </Link>
                </li>
                <li>
                  <Link to="/blog/" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/sobre/" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    <Info className="h-4 w-4" />
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link to="/contato/" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Contato
                  </Link>
                </li>
              </ul>
            </div>

            {/* Blog Categorias */}
            <div className="bg-card border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Tag className="h-5 w-5 text-primary" />
                Categorias do Blog
              </h2>
              <ul className="space-y-3">
                {blogCategories.map((category) => (
                  <li key={category.slug}>
                    <Link 
                      to={`/blog/categoria/${category.slug}/`} 
                      className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                    >
                      → {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Plataformas */}
          <div className="bg-card border rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              Plataformas de E-commerce ({platforms.length})
            </h2>
            <ul className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
              {platforms.map((platform) => (
                <li key={platform.slug}>
                  <Link 
                    to={`/plataformas/${platform.slug}/`} 
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                  >
                    → {platform.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Section */}
          <div className="bg-card border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Informações Legais
            </h2>
            <ul className="grid md:grid-cols-2 gap-3">
              <li>
                <Link to="/privacidade/" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/cookies/" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <Cookie className="h-4 w-4" />
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link to="/termos/" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link to="/transparencia/" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
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
