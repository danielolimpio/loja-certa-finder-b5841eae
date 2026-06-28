import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/data/blogPosts";

interface RelatedArticlesProps {
  currentSlug: string;
  limit?: number;
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

const RelatedArticles = ({ currentSlug, limit = 3 }: RelatedArticlesProps) => {
  const related = blogPosts.filter((p) => p.slug !== currentSlug).slice(0, limit);

  if (related.length === 0) return null;

  return (
    <section className="mt-16">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-bold">Artigos recomendados</h2>
        <Link
          to="/blog/"
          className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
        >
          Ver todos <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {related.map((post) => (
          <Link
            key={post.id}
            to={`/artigo/${post.slug}/`}
            className="group rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-primary/40 hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            {post.featuredImage && (
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  loading="lazy"
                  width={1280}
                  height={720}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}
            <div className="p-5 flex flex-col flex-1">
              <Badge variant="secondary" className="self-start mb-3 text-xs">
                {post.category}
              </Badge>
              <h3 className="text-base font-bold leading-snug mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                {post.excerpt}
              </p>
              <div className="mt-auto flex items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {formatDate(post.publishedAt)}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readingTime} min
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedArticles;
