import { Link } from "react-router-dom";
import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import logo from "@/assets/logo-lojas-gratis.png";
import { useState } from "react";
import SearchModal from "./SearchModal";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Início" },
    { to: "/sobre", label: "Sobre" },
    { to: "/ranking", label: "Ranking" },
    { to: "/comparar", label: "Comparar" },
    { to: "/blog", label: "Blog" },
    { to: "/contato", label: "Contato" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Lojas Grátis" className="h-10 w-auto" />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.to}
                to={link.to} 
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="hidden sm:flex"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="h-4 w-4 mr-2" />
              Buscar
              <kbd className="ml-2 px-1.5 py-0.5 bg-muted rounded text-[10px] font-mono text-muted-foreground">⌘K</kbd>
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="sm:hidden"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                    <Link to="/" onClick={() => setIsOpen(false)}>
                      <img src={logo} alt="Lojas Grátis" className="h-8 w-auto" />
                    </Link>
                  </div>
                  
                  <nav className="flex flex-col gap-1">
                    {navLinks.map((link) => (
                      <SheetClose asChild key={link.to}>
                        <Link 
                          to={link.to}
                          className="flex items-center py-3 px-4 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>

                  <div className="mt-auto pt-6 border-t">
                    <SheetClose asChild>
                      <Button 
                        className="w-full" 
                        size="lg"
                        onClick={() => {
                          setIsOpen(false);
                          setTimeout(() => setSearchOpen(true), 100);
                        }}
                      >
                        <Search className="h-4 w-4 mr-2" />
                        Buscar Plataformas
                      </Button>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <SearchModal open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
};

export default Header;
