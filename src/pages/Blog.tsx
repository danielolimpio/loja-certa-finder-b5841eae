import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, Search, BookOpen, TrendingUp, Lightbulb, User } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { blogPosts, blogCategories } from "@/data/blogPosts";

const Blog = () => {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.slice(0, 6);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <>
      <Helmet>
        <title>Blog | Lojas Grátis - Dicas e Estratégias para E-commerce</title>
        <meta name="description" content="Aprenda tudo sobre e-commerce, marketing digital e empreendedorismo. Dicas práticas para montar e crescer sua loja virtual no Brasil." />
        <meta name="keywords" content="blog e-commerce, dicas loja virtual, marketing digital, empreendedorismo online" />
        <link rel="canonical" href="https://lojasgratis.com.br/blog" />
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Background decorativo */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="container relative">
            <BreadcrumbNav 
              items={[
                { label: "Blog" }
              ]} 
            />

            <div className="text-center max-w-4xl mx-auto mt-8">
              <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium border-primary/30 bg-primary/5">
                <BookOpen className="w-4 h-4 mr-2" />
                Conhecimento para Empreendedores
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text">
                Blog Lojas Grátis
              </h1>
              
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                Descubra dicas, estratégias e insights para criar, gerenciar e 
                escalar sua loja virtual com sucesso.
              </p>

              {/* Barra de Busca */}
              <div className="max-w-xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Buscar artigos..."
                    className="pl-12 pr-4 h-14 text-lg rounded-full border-2 border-muted bg-background/80 backdrop-blur-sm focus:border-primary/50 transition-all"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categorias */}
        <section className="py-12 border-y bg-muted/30">
          <div className="container">
            <div className="flex flex-wrap justify-center gap-3">
              {blogCategories.map((category) => (
                <Link
                  key={category.slug}
                  to={`/blog/categoria/${category.slug}`}
                  className="group"
                >
                  <Badge 
                    variant="secondary" 
                    className="px-5 py-2.5 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer"
                  >
                    {category.name}
                    {category.count > 0 && (
                      <span className="ml-2 bg-background/20 px-2 py-0.5 rounded-full text-xs">
                        {category.count}
                      </span>
                    )}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Conteúdo Principal */}
        <section className="py-20">
          <div className="container">
            {blogPosts.length === 0 ? (
              /* Estado vazio - Design premium */
              <div className="max-w-4xl mx-auto">
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-muted/50 via-background to-muted/30 border border-border/50 p-12 md:p-20">
                  {/* Elementos decorativos */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
                  
                  <div className="relative text-center">
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 mb-8">
                      <BookOpen className="w-12 h-12 text-primary" />
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                      Em breve: Conteúdo Exclusivo
                    </h2>
                    
                    <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
                      Estamos preparando artigos incríveis sobre e-commerce, 
                      marketing digital e empreendedorismo para ajudar você a 
                      ter sucesso com sua loja virtual.
                    </p>

                    {/* Cards de prévia */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                      <div className="group p-6 rounded-2xl bg-background/50 border border-border/50 hover:border-primary/30 transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                          <TrendingUp className="w-6 h-6 text-green-500" />
                        </div>
                        <h3 className="font-semibold mb-2">Estratégias de Vendas</h3>
                        <p className="text-sm text-muted-foreground">
                          Técnicas comprovadas para aumentar suas conversões
                        </p>
                      </div>

                      <div className="group p-6 rounded-2xl bg-background/50 border border-border/50 hover:border-primary/30 transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                          <Lightbulb className="w-6 h-6 text-blue-500" />
                        </div>
                        <h3 className="font-semibold mb-2">Dicas Práticas</h3>
                        <p className="text-sm text-muted-foreground">
                          Tutoriais passo a passo para iniciantes
                        </p>
                      </div>

                      <div className="group p-6 rounded-2xl bg-background/50 border border-border/50 hover:border-primary/30 transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                          <User className="w-6 h-6 text-purple-500" />
                        </div>
                        <h3 className="font-semibold mb-2">Cases de Sucesso</h3>
                        <p className="text-sm text-muted-foreground">
                          Histórias inspiradoras de empreendedores
                        </p>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-12">
                      <p className="text-sm text-muted-foreground mb-4">
                        Enquanto isso, explore nosso ranking de plataformas:
                      </p>
                      <Button asChild size="lg" className="rounded-full px-8">
                        <Link to="/ranking">
                          Ver Ranking de Plataformas
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Grid de artigos quando houver conteúdo */
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Artigos */}
                <div className="lg:col-span-2 space-y-8">
                  {featuredPosts.length > 0 && (
                    <div className="mb-12">
                      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <TrendingUp className="w-6 h-6 text-primary" />
                        Artigos em Destaque
                      </h2>
                      {/* Featured posts grid */}
                    </div>
                  )}

                  <h2 className="text-2xl font-bold mb-6">Artigos Recentes</h2>
                  
                  <div className="grid gap-8">
                    {recentPosts.map((post) => (
                      <article 
                        key={post.id}
                        className="group rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                      >
                        <Link to={`/blog/${post.slug}`} className="flex flex-col md:flex-row">
                          {post.featuredImage && (
                            <div className="md:w-72 h-48 md:h-auto overflow-hidden">
                              <img 
                                src={post.featuredImage} 
                                alt={post.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                          )}
                          <div className="flex-1 p-6">
                            <Badge variant="secondary" className="mb-3">
                              {post.category}
                            </Badge>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
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
                                {post.readingTime} min de leitura
                              </span>
                            </div>
                          </div>
                        </Link>
                      </article>
                    ))}
                  </div>
                </div>

                {/* Sidebar */}
                <aside className="space-y-8">
                  {/* Categorias */}
                  <div className="rounded-2xl bg-card border p-6">
                    <h3 className="font-bold text-lg mb-4">Categorias</h3>
                    <div className="space-y-2">
                      {blogCategories.map((category) => (
                        <Link
                          key={category.slug}
                          to={`/blog/categoria/${category.slug}`}
                          className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors"
                        >
                          <span>{category.name}</span>
                          <Badge variant="secondary" className="text-xs">
                            {category.count}
                          </Badge>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 p-6">
                    <h3 className="font-bold text-lg mb-2">Precisa de ajuda?</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Compare as melhores plataformas de e-commerce do Brasil.
                    </p>
                    <Button asChild className="w-full">
                      <Link to="/ranking">Ver Ranking</Link>
                    </Button>
                  </div>
                </aside>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Blog;
