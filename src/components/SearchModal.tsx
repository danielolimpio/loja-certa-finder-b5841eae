import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X, ArrowRight, Star, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { platforms } from "@/data/platforms";

interface SearchModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SearchModal = ({ open, onOpenChange }: SearchModalProps) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  // Reset query when modal opens
  useEffect(() => {
    if (open) {
      setQuery("");
    }
  }, [open]);

  // Filter platforms based on query
  const filteredPlatforms = useMemo(() => {
    if (!query.trim()) return platforms.slice(0, 6);
    
    const lowerQuery = query.toLowerCase();
    return platforms.filter(platform => {
      // Search by name
      if (platform.name.toLowerCase().includes(lowerQuery)) return true;
      // Search by type
      if (platform.type.toLowerCase().includes(lowerQuery)) return true;
      // Search by features
      if (platform.features.some(f => f.text.toLowerCase().includes(lowerQuery))) return true;
      // Search by idealFor
      if (platform.idealFor.toLowerCase().includes(lowerQuery)) return true;
      // Search by description
      if (platform.description.toLowerCase().includes(lowerQuery)) return true;
      // Search by best product types
      if (platform.bestProductTypes?.some(t => t.toLowerCase().includes(lowerQuery))) return true;
      return false;
    });
  }, [query]);

  const handleSelect = (slug: string) => {
    navigate(`/plataformas/${slug}`);
    onOpenChange(false);
  };

  // Keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onOpenChange(!open);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onOpenChange]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl p-0 gap-0 overflow-hidden">
        <DialogHeader className="p-4 pb-0">
          <DialogTitle className="sr-only">Buscar plataformas</DialogTitle>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Buscar por nome, tipo, recurso..."
              className="pl-10 pr-10 h-12 text-lg border-0 border-b rounded-none focus-visible:ring-0 focus-visible:border-primary"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-muted transition-colors"
              >
                <X className="h-4 w-4 text-muted-foreground" />
              </button>
            )}
          </div>
        </DialogHeader>

        <div className="p-4 max-h-[60vh] overflow-y-auto">
          {/* Quick filters */}
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge 
              variant="outline" 
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              onClick={() => setQuery("grátis")}
            >
              🆓 Gratuitas
            </Badge>
            <Badge 
              variant="outline" 
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              onClick={() => setQuery("marketplace")}
            >
              🏪 Marketplaces
            </Badge>
            <Badge 
              variant="outline" 
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              onClick={() => setQuery("loja própria")}
            >
              🛒 Loja Própria
            </Badge>
            <Badge 
              variant="outline" 
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              onClick={() => setQuery("produtos digitais")}
            >
              📱 Produtos Digitais
            </Badge>
          </div>

          {/* Results */}
          <div className="space-y-2">
            {filteredPlatforms.length === 0 ? (
              <div className="py-12 text-center">
                <p className="text-muted-foreground">Nenhuma plataforma encontrada para "{query}"</p>
                <button
                  onClick={() => setQuery("")}
                  className="text-primary hover:underline mt-2 text-sm"
                >
                  Limpar busca
                </button>
              </div>
            ) : (
              <>
                <p className="text-xs text-muted-foreground mb-3">
                  {query ? `${filteredPlatforms.length} resultado(s) encontrado(s)` : "Plataformas populares"}
                </p>
                {filteredPlatforms.map((platform) => (
                  <button
                    key={platform.slug}
                    onClick={() => handleSelect(platform.slug)}
                    className="w-full flex items-center gap-4 p-3 rounded-lg hover:bg-muted transition-colors text-left group"
                  >
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                      <img 
                        src={platform.logo} 
                        alt={platform.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold truncate">{platform.name}</span>
                        {platform.isRecommended && (
                          <Badge variant="default" className="text-xs">Recomendado</Badge>
                        )}
                        {platform.isFree && (
                          <Badge variant="secondary" className="text-xs">Grátis</Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          {platform.rating}
                        </span>
                        <span>•</span>
                        <span>{platform.type}</span>
                        <span>•</span>
                        <span>{platform.priceFrom}</span>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 py-3 border-t bg-muted/30 flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-muted rounded text-[10px] font-mono">↵</kbd>
              selecionar
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-muted rounded text-[10px] font-mono">ESC</kbd>
              fechar
            </span>
          </div>
          <span className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 bg-muted rounded text-[10px] font-mono">⌘K</kbd>
            busca rápida
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchModal;
