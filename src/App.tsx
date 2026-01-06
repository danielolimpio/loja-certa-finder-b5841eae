import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import PlatformDetail from "./pages/PlatformDetail";
import MelhoresPlataformasEcommerceGratuitas2026 from "./pages/articles/MelhoresPlataformasEcommerceGratuitas2026";
import ComocriarLojaVirtualGratis from "./pages/articles/ComocriarLojaVirtualGratis";
import Ranking from "./pages/Ranking";
import Compare from "./pages/Compare";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Cookies from "./pages/Cookies";
import Terms from "./pages/Terms";
import Transparency from "./pages/Transparency";
import Sitemap from "./pages/Sitemap";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import BlogCategory from "./pages/BlogCategory";
import NotFound from "./pages/NotFound";
import { usePageTracking } from "./hooks/usePageTracking";
import { useScrollToTop } from "./hooks/useScrollToTop";

const queryClient = new QueryClient();

const AppContent = () => {
  usePageTracking();
  useScrollToTop();
  
  return (
    <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/plataformas/:slug" element={<PlatformDetail />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/comparar" element={<Compare />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/privacidade" element={<Privacy />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/termos" element={<Terms />} />
          <Route path="/transparencia" element={<Transparency />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/categoria/:slug" element={<BlogCategory />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/artigo/melhores-plataformas-e-commerce-gratuitas-2026" element={<MelhoresPlataformasEcommerceGratuitas2026 />} />
          <Route path="/artigo/como-criar-loja-virtual-gratis-passo-a-passo" element={<ComocriarLojaVirtualGratis />} />
          <Route path="/artigo/como-criar-loja-virtual-gratis-passo-a-passo/" element={<ComocriarLojaVirtualGratis />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
  );
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
