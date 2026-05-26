import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Calendar, Clock, ArrowLeft, Share2, BookmarkPlus, User, Tag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { blogPosts, blogCategories } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{post.title} | Blog Lojas Grátis</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.tags.join(', ')} />
        <link rel="canonical" href={`https://lojasgratis.com/blog/${post.slug}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://lojasgratis.com/blog/${post.slug}`} />
        {post.featuredImage && <meta property="og:image" content={post.featuredImage} />}
        
        {/* Article metadata */}
        <meta property="article:published_time" content={post.publishedAt} />
        {post.updatedAt && <meta property="article:modified_time" content={post.updatedAt} />}
        <meta property="article:author" content={post.author.name} />
        <meta property="article:section" content={post.category} />
        {post.tags.map(tag => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            image: post.featuredImage ? `https://lojasgratis.com.br${post.featuredImage}` : undefined,
            datePublished: post.publishedAt,
            dateModified: post.updatedAt || post.publishedAt,
            author: {
              "@type": "Person",
              name: post.author.name,
            },
            publisher: {
              "@type": "Organization",
              name: "Lojas Grátis",
              logo: {
                "@type": "ImageObject",
                url: "https://lojasgratis.com.br/logo.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://lojasgratis.com.br/blog/${post.slug}`,
            },
            keywords: post.tags.join(", "),
          })}
        </script>
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-gradient-to-b from-background via-muted/10 to-background">
        {/* Hero do Artigo */}
        <section className="relative py-12 md:py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          
          <div className="container relative">
            <BreadcrumbNav 
              items={[
                { label: "Blog", href: "/blog" },
                { label: post.title }
              ]} 
            />

            <div className="max-w-4xl mx-auto mt-8">
              {/* Voltar */}
              <Link 
                to="/blog" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar para o Blog
              </Link>

              {/* Categoria */}
              <Badge variant="secondary" className="mb-4">
                {post.category}
              </Badge>

              {/* Título */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Meta info */}
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{post.author.name}</p>
                    {post.author.role && (
                      <p className="text-sm">{post.author.role}</p>
                    )}
                  </div>
                </div>
                
                <Separator orientation="vertical" className="h-8" />
                
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {formatDate(post.publishedAt)}
                </span>
                
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readingTime} min de leitura
                </span>
              </div>

              {/* Ações */}
              <div className="flex gap-3 mb-8">
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Compartilhar
                </Button>
                <Button variant="outline" size="sm">
                  <BookmarkPlus className="w-4 h-4 mr-2" />
                  Salvar
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Imagem Destaque */}
        {post.featuredImage && (
          <section className="container mb-12">
            <div className="max-w-5xl mx-auto">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={post.featuredImage} 
                  alt={post.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </section>
        )}

        {/* Conteúdo */}
        <section className="container pb-20">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Artigo */}
              <article className="lg:col-span-8">
                <div 
                  className="prose prose-lg max-w-none
                    prose-headings:font-bold prose-headings:text-foreground
                    prose-p:text-muted-foreground prose-p:leading-relaxed
                    prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                    prose-strong:text-foreground
                    prose-ul:text-muted-foreground prose-ol:text-muted-foreground
                    prose-blockquote:border-l-primary prose-blockquote:bg-muted/30 prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:rounded-r-lg
                    prose-code:bg-muted prose-code:px-2 prose-code:py-1 prose-code:rounded
                    prose-img:rounded-xl prose-img:shadow-lg"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Tags */}
                <div className="mt-12 pt-8 border-t">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Tag className="w-4 h-4 text-muted-foreground" />
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="hover:bg-muted cursor-pointer">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Autor Bio */}
                <div className="mt-8 p-6 rounded-2xl bg-muted/30 border">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <User className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{post.author.name}</h3>
                      {post.author.role && (
                        <p className="text-sm text-muted-foreground mb-2">{post.author.role}</p>
                      )}
                      <p className="text-muted-foreground">
                        Especialista em e-commerce e marketing digital, ajudando empreendedores 
                        a criar e escalar suas lojas virtuais com sucesso.
                      </p>
                    </div>
                  </div>
                </div>
              </article>

              {/* Sidebar */}
              <aside className="lg:col-span-4 space-y-8">
                {/* Índice */}
                <div className="sticky top-24 space-y-8">
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
                          <span className="text-sm">{category.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 p-6">
                    <h3 className="font-bold text-lg mb-2">Compare Plataformas</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Descubra qual a melhor plataforma de e-commerce para o seu negócio.
                    </p>
                    <Button asChild className="w-full">
                      <Link to="/ranking">Ver Ranking</Link>
                    </Button>
                  </div>
                </div>
              </aside>
            </div>

            {/* Artigos Relacionados */}
            {relatedPosts.length > 0 && (
              <div className="mt-16 pt-12 border-t">
                <h2 className="text-2xl font-bold mb-8">Artigos Relacionados</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      to={`/blog/${relatedPost.slug}`}
                      className="group rounded-2xl overflow-hidden bg-card border hover:border-primary/30 hover:shadow-lg transition-all"
                    >
                      {relatedPost.featuredImage && (
                        <div className="h-40 overflow-hidden">
                          <img 
                            src={relatedPost.featuredImage}
                            alt={relatedPost.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      )}
                      <div className="p-4">
                        <Badge variant="secondary" className="mb-2 text-xs">
                          {relatedPost.category}
                        </Badge>
                        <h3 className="font-semibold group-hover:text-primary transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-2">
                          {relatedPost.readingTime} min de leitura
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default BlogPost;
