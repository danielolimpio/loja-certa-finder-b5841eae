import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, BookOpen, Calendar, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { blogPosts, blogCategories } from "@/data/blogPosts";

// SEO metadata for each category
const categoryMetadata: Record<string, { title: string; description: string }> = {
  'plataformas': {
    title: 'Artigos sobre Plataformas de E-commerce – Lojas Grátis',
    description: 'Leia análises, comparações e tutoriais sobre as principais plataformas de e-commerce: Nuvemshop, Shopify, VTEX, WooCommerce e mais.'
  },
  'marketing-digital': {
    title: 'Marketing Digital para Lojas Online – Lojas Grátis',
    description: 'Estratégias de marketing digital para e-commerce: tráfego pago, SEO, redes sociais e conversão. Dicas práticas e atualizadas.'
  },
  'e-commerce': {
    title: 'Guias e Tendências de E-commerce – Lojas Grátis',
    description: 'Tudo sobre e-commerce no Brasil: tendências, tecnologia, logística, pagamentos e crescimento de vendas online.'
  },
  'empreendedorismo': {
    title: 'Empreendedorismo Digital e Lojas Virtuais – Lojas Grátis',
    description: 'Dicas e estratégias para empreendedores que querem iniciar ou escalar sua loja virtual. Histórias de sucesso e insights práticos.'
  },
  'tutoriais': {
    title: 'Tutoriais e Guias Passo a Passo – Lojas Grátis',
    description: 'Tutoriais completos para configurar, otimizar e gerenciar sua loja virtual. Aprenda do básico ao avançado.'
  }
};

const BlogCategory = () => {
  const { slug } = useParams();
  const category = blogCategories.find((c) => c.slug === slug);
  const categoryPosts = blogPosts.filter((post) => post.category.toLowerCase().replace(/\s+/g, '-') === slug);

  const metadata = categoryMetadata[slug || ''] || {
    title: `${category?.name || 'Categoria'} – Blog Lojas Grátis`,
    description: category?.description || 'Artigos e conteúdos sobre e-commerce e lojas virtuais.'
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  if (!category) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Categoria não encontrada</h1>
          <Link to="/blog">
            <Button>Voltar para o Blog</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href={`https://lojasgratis.com.br/blog/categoria/${slug}/`} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={`https://lojasgratis.com.br/blog/categoria/${slug}/`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          
          <div className="container relative">
            <BreadcrumbNav 
              items={[
                { label: "Blog", href: "/blog" },
                { label: category.name }
              ]} 
            />

            <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 mt-4 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Voltar para o Blog
            </Link>

            <div className="max-w-3xl">
              <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-medium border-primary/30 bg-primary/5">
                <BookOpen className="w-4 h-4 mr-2" />
                Categoria
              </Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {category.name}
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                {category.description}
              </p>
            </div>
          </div>
        </section>

        {/* Posts Section */}
        <section className="py-16">
          <div className="container">
            {categoryPosts.length === 0 ? (
              <div className="max-w-2xl mx-auto text-center py-16">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted mb-6">
                  <BookOpen className="w-10 h-10 text-muted-foreground" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Em breve</h2>
                <p className="text-muted-foreground mb-8">
                  Estamos preparando artigos sobre {category.name.toLowerCase()}. 
                  Enquanto isso, explore outras categorias ou confira nosso ranking de plataformas.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild variant="outline">
                    <Link to="/blog">Ver todas categorias</Link>
                  </Button>
                  <Button asChild>
                    <Link to="/ranking">Ver Ranking</Link>
                  </Button>
                </div>
              </div>
            ) : (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {categoryPosts.map((post) => (
                  <article 
                    key={post.id}
                    className="group rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                  >
                    <Link to={`/blog/${post.slug}`}>
                      {post.featuredImage && (
                        <div className="h-48 overflow-hidden">
                          <img 
                            src={post.featuredImage} 
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {formatDate(post.publishedAt)}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readingTime} min
                          </span>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Other Categories */}
        <section className="py-12 border-t bg-muted/30">
          <div className="container">
            <h2 className="text-xl font-bold mb-6 text-center">Outras Categorias</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {blogCategories
                .filter(c => c.slug !== slug)
                .map((cat) => (
                  <Link key={cat.slug} to={`/blog/categoria/${cat.slug}/`}>
                    <Badge 
                      variant="secondary" 
                      className="px-5 py-2.5 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer"
                    >
                      {cat.name}
                    </Badge>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default BlogCategory;
