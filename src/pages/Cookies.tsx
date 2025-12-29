import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { 
  Cookie, 
  Shield, 
  BarChart, 
  Settings,
  RefreshCw,
  AlertTriangle,
  ExternalLink,
  ChevronRight,
  CheckCircle2,
  XCircle,
  Eye,
  Globe,
  Megaphone,
  Sliders,
  Mail,
  MapPin,
  Lock,
  Fingerprint,
  MonitorSmartphone,
  Clock
} from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const sections = [
  { id: "oque-sao", title: "O que são cookies?", icon: Cookie },
  { id: "porque", title: "Por que usamos cookies?", icon: Settings },
  { id: "especificos", title: "Cookies específicos", icon: Fingerprint },
  { id: "outras-tecnologias", title: "Outras tecnologias", icon: Eye },
  { id: "flash", title: "Cookies Flash/LSOs", icon: XCircle },
  { id: "publicidade", title: "Publicidade direcionada", icon: Megaphone },
  { id: "controle", title: "Como controlar cookies", icon: Sliders },
  { id: "atualizacoes", title: "Atualizações", icon: RefreshCw },
  { id: "contato", title: "Mais informações", icon: Mail },
];

// Componentes Reutilizáveis
interface SectionCardProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
  variant?: "default" | "highlight" | "warning";
}

const SectionCard = ({ icon: Icon, title, children, variant = "default" }: SectionCardProps) => (
  <div className={cn(
    "p-6 md:p-8 rounded-2xl border shadow-sm transition-all duration-300",
    variant === "highlight" && "bg-gradient-to-br from-primary/10 via-card to-card border-primary/20",
    variant === "warning" && "bg-gradient-to-br from-yellow-500/10 via-card to-card border-yellow-500/20",
    variant === "default" && "bg-card border-border/50 hover:border-primary/30 hover:shadow-md"
  )}>
    <div className="flex items-start gap-4 mb-6">
      <div className={cn(
        "p-3 rounded-xl flex-shrink-0",
        variant === "highlight" ? "bg-primary/20" : variant === "warning" ? "bg-yellow-500/20" : "bg-primary/10"
      )}>
        <Icon className={cn(
          "h-6 w-6",
          variant === "highlight" ? "text-primary" : variant === "warning" ? "text-yellow-600 dark:text-yellow-400" : "text-primary"
        )} />
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h2>
    </div>
    {children}
  </div>
);

const HighlightBox = ({ children, variant = "info", className }: { children: React.ReactNode; variant?: "info" | "warning" | "success" | "danger"; className?: string }) => (
  <div className={cn(
    "p-4 rounded-xl border flex items-start gap-3",
    variant === "info" && "bg-blue-500/10 border-blue-500/20",
    variant === "warning" && "bg-yellow-500/10 border-yellow-500/20",
    variant === "success" && "bg-green-500/10 border-green-500/20",
    variant === "danger" && "bg-red-500/10 border-red-500/20",
    className
  )}>
    {variant === "info" && <AlertTriangle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />}
    {variant === "warning" && <AlertTriangle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />}
    {variant === "success" && <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />}
    {variant === "danger" && <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />}
    <p className="text-sm text-muted-foreground">{children}</p>
  </div>
);

const ListItem = ({ children, variant = "check" }: { children: React.ReactNode; variant?: "check" | "x" | "bullet" }) => (
  <li className="flex items-start gap-3">
    {variant === "check" && <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />}
    {variant === "x" && <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />}
    {variant === "bullet" && <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />}
    <span className="text-muted-foreground">{children}</span>
  </li>
);

interface CookieTypeCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  items?: string[];
  status?: "active" | "optional" | "inactive";
}

const CookieTypeCard = ({ icon: Icon, title, description, items, status }: CookieTypeCardProps) => (
  <div className="p-5 rounded-xl bg-muted/30 border border-border/50">
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-xl bg-primary/10 flex-shrink-0">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          {status === "active" && (
            <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20">Em uso</span>
          )}
          {status === "optional" && (
            <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border border-yellow-500/20">Opcional</span>
          )}
          {status === "inactive" && (
            <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-muted text-muted-foreground border border-border">Não utilizado</span>
          )}
        </div>
        <p className="text-sm text-muted-foreground mb-3">{description}</p>
        {items && items.length > 0 && (
          <ul className="space-y-1">
            {items.map((item, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  </div>
);

const BrowserCard = ({ name, path, url }: { name: string; path: string; url: string }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="p-4 rounded-xl bg-muted/30 border border-border/50 hover:border-primary/30 hover:bg-muted/50 transition-all duration-200 group"
  >
    <p className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{name}</p>
    <p className="text-xs text-muted-foreground">{path}</p>
    <div className="flex items-center gap-1 text-xs text-primary mt-2">
      <span>Ver instruções</span>
      <ExternalLink className="h-3 w-3" />
    </div>
  </a>
);

const ContactCard = ({ icon, label, value, href }: { icon: React.ElementType; label: string; value: string; href?: string }) => {
  const Icon = icon;
  return (
    <div className="p-4 rounded-xl bg-muted/30 border border-border/50 flex items-center gap-4">
      <div className="p-3 rounded-xl bg-primary/10">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        {href ? (
          <a href={href} className="font-medium text-primary hover:underline">{value}</a>
        ) : (
          <p className="font-medium text-foreground">{value}</p>
        )}
      </div>
    </div>
  );
};

const ComplianceBadge = ({ text }: { text: string }) => (
  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
    <CheckCircle2 className="h-4 w-4 text-green-500" />
    <span className="text-sm font-medium text-green-600 dark:text-green-400">{text}</span>
  </div>
);

const Cookies = () => {
  const [activeSection, setActiveSection] = useState("oque-sao");

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(s => ({
        id: s.id,
        element: document.getElementById(s.id)
      }));

      for (const section of sectionElements) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Política de Cookies - Lojas Grátis</title>
        <meta name="description" content="Política de Cookies da Lojas Grátis. Saiba como utilizamos cookies e como controlá-los." />
        <link rel="canonical" href="https://lojasgratis.com.br/cookies" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-secondary/20">
        <Header />
        
        <main className="flex-1">
          <div className="container py-8 lg:py-12">
            <BreadcrumbNav items={[{ label: "Política de Cookies" }]} />
            
            {/* Header Premium */}
            <div className="text-center mb-12 mt-6">
              <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 mb-6 shadow-lg">
                <Cookie className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text">
                Política de <span className="text-primary">Cookies</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-2">Lojas Grátis</p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50">
                <RefreshCw className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Última atualização: 22 de dezembro de 2025</span>
              </div>
            </div>

            {/* Intro Card Premium */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-card to-card border border-primary/20 shadow-xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                
                <p className="text-lg leading-relaxed text-foreground relative z-10 mb-4">
                  Esta Política de Cookies explica como o <strong className="text-primary">Lojas Grátis</strong> ("nós", "nosso" ou "nossa") utiliza cookies e tecnologias semelhantes quando você visita nosso site em <strong className="text-foreground">https://lojasgratis.com.br</strong>.
                </p>

                <p className="text-muted-foreground relative z-10 mb-4">
                  Ela detalha o que são cookies, por que os usamos, quais tipos são implantados em nossos Serviços e como você pode gerenciá-los.
                </p>

                <HighlightBox variant="warning" className="relative z-10">
                  <strong>Importante:</strong> Atualmente, não implantamos cookies próprios (de primeira parte) em nosso site, pois não há login, formulários ativos ou funcionalidades que exijam armazenamento local. No entanto, terceiros (como o Google) podem definir cookies em seu dispositivo ao exibir anúncios ou, no futuro, ao coletar dados anônimos de uso.
                </HighlightBox>
              </div>
            </div>

            {/* Main Content with Sidebar */}
            <div className="flex gap-8 lg:gap-12 relative">
              {/* Sidebar - Desktop */}
              <aside className="hidden lg:block w-72 flex-shrink-0">
                <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
                  <div className="p-4 rounded-2xl bg-card border border-border/50 shadow-lg">
                    <h3 className="text-sm font-bold text-foreground mb-4 flex items-center gap-2">
                      <div className="w-1 h-4 rounded-full bg-primary" />
                      ÍNDICE
                    </h3>
                    <nav className="space-y-1">
                      {sections.map((section) => {
                        const Icon = section.icon;
                        return (
                          <button
                            key={section.id}
                            onClick={() => scrollToSection(section.id)}
                            className={cn(
                              "w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 flex items-center gap-2 group",
                              activeSection === section.id
                                ? "bg-primary/10 text-primary font-medium border-l-2 border-primary"
                                : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                            )}
                          >
                            <Icon className={cn(
                              "h-4 w-4 flex-shrink-0 transition-colors",
                              activeSection === section.id ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                            )} />
                            <span className="truncate">{section.title}</span>
                          </button>
                        );
                      })}
                    </nav>
                  </div>
                </div>
              </aside>

              {/* Content */}
              <div className="flex-1 max-w-4xl space-y-8">
                
                {/* O que são cookies */}
                <section id="oque-sao" className="scroll-mt-28">
                  <SectionCard icon={Cookie} title="O que são cookies?">
                    <p className="text-muted-foreground mb-6">
                      Cookies são pequenos arquivos de texto armazenados no seu computador ou dispositivo móvel quando você visita um site. Eles são amplamente usados para:
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3 mb-6">
                      <div className="p-4 rounded-xl bg-muted/30 border border-border/50 flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">Garantir o funcionamento básico dos sites</span>
                      </div>
                      <div className="p-4 rounded-xl bg-muted/30 border border-border/50 flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">Melhorar a experiência do usuário</span>
                      </div>
                      <div className="p-4 rounded-xl bg-muted/30 border border-border/50 flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">Coletar dados estatísticos anônimos</span>
                      </div>
                      <div className="p-4 rounded-xl bg-muted/30 border border-border/50 flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">Personalizar anúncios com base nos seus interesses</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      Existem dois tipos principais:
                    </h3>

                    <div className="space-y-4">
                      <div className="p-5 rounded-xl bg-muted/30 border border-border/50">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 rounded-lg bg-blue-500/10">
                            <Globe className="h-5 w-5 text-blue-500" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">Cookies próprios (primeira parte)</h4>
                            <span className="text-xs text-muted-foreground">Criados pelo próprio site que você está visitando</span>
                          </div>
                        </div>
                        <div className="ml-12 p-3 rounded-lg bg-muted/50 border border-border/30">
                          <p className="text-sm text-muted-foreground">
                            → <strong>Atualmente, não usamos esse tipo no Lojas Grátis.</strong>
                          </p>
                        </div>
                      </div>

                      <div className="p-5 rounded-xl bg-primary/5 border border-primary/20">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <Megaphone className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">Cookies de terceiros</h4>
                            <span className="text-xs text-muted-foreground">Criados por empresas externas (ex: Google)</span>
                          </div>
                        </div>
                        <div className="ml-12 p-3 rounded-lg bg-primary/10 border border-primary/20">
                          <p className="text-sm text-muted-foreground">
                            → <strong className="text-primary">São os únicos em uso atualmente — via Google AdSense.</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </SectionCard>
                </section>

                {/* Por que usamos cookies */}
                <section id="porque" className="scroll-mt-28">
                  <SectionCard icon={Settings} title="Por que usamos cookies?">
                    <p className="text-muted-foreground mb-6">
                      No Lojas Grátis, cookies e tecnologias semelhantes são usados exclusivamente pelos seguintes motivos:
                    </p>

                    <div className="space-y-4">
                      <CookieTypeCard
                        icon={Lock}
                        title="Cookies estritamente necessários"
                        description="Não utilizamos ativamente — mas alguns podem ser definidos por plugins ou pelo próprio WordPress para segurança básica (ex: prevenção de spam). São temporários e não coletam dados pessoais."
                        status="inactive"
                      />

                      <CookieTypeCard
                        icon={BarChart}
                        title="Cookies de análise"
                        description="Caso ativemos o Google Analytics no futuro, ele poderá usar cookies para entender:"
                        items={[
                          "Quantos usuários visitam o site",
                          "Quais páginas são mais acessadas",
                          "De onde os visitantes vêm (país, dispositivo, navegador)",
                          "Dados são anônimos e agregados — não identificam você pessoalmente"
                        ]}
                        status="optional"
                      />

                      <CookieTypeCard
                        icon={Megaphone}
                        title="Cookies de publicidade"
                        description="Usamos o Google AdSense para exibir anúncios relevantes. O Google pode implantar cookies de terceiros para:"
                        items={[
                          "Verificar se seu navegador aceita cookies",
                          "Evitar que o mesmo anúncio seja exibido repetidamente",
                          "Personalizar anúncios com base em seu comportamento de navegação geral"
                        ]}
                        status="active"
                      />
                    </div>

                    <div className="mt-6 p-4 rounded-xl bg-muted/30 border border-border/50">
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Nota:</strong> Os cookies de publicidade são gerenciados pelo Google e regidos pela{" "}
                        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                          Política de Privacidade do Google <ExternalLink className="h-3 w-3" />
                        </a>
                      </p>
                    </div>

                    <div className="mt-4 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong className="text-foreground">🔍 Desativar rastreamento do Google Analytics:</strong>
                      </p>
                      <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1 text-sm">
                        tools.google.com/dlpage/gaoptout <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </SectionCard>
                </section>

                {/* Cookies específicos */}
                <section id="especificos" className="scroll-mt-28">
                  <SectionCard icon={Fingerprint} title="Cookies específicos que podem ser usados">
                    <p className="text-muted-foreground mb-6">
                      Abaixo listamos os cookies de terceiros que podem ser implantados em seu dispositivo ao visitar https://lojasgratis.com.br:
                    </p>

                    {/* Table */}
                    <div className="overflow-x-auto rounded-xl border border-border/50">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-muted/50 border-b border-border/50">
                            <th className="text-left p-4 font-semibold text-foreground">Nome</th>
                            <th className="text-left p-4 font-semibold text-foreground">Fornecedor</th>
                            <th className="text-left p-4 font-semibold text-foreground">Finalidade</th>
                            <th className="text-left p-4 font-semibold text-foreground">Tipo</th>
                            <th className="text-left p-4 font-semibold text-foreground">Expiração</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-border/30 hover:bg-muted/30 transition-colors">
                            <td className="p-4 font-mono text-xs text-primary">IDE, id, DSID, test_cookie</td>
                            <td className="p-4 text-muted-foreground">Google (DoubleClick/AdSense)</td>
                            <td className="p-4 text-muted-foreground">Verificar suporte a cookies e personalizar anúncios</td>
                            <td className="p-4"><span className="px-2 py-1 rounded-full text-xs bg-orange-500/10 text-orange-600 dark:text-orange-400">Terceiro</span></td>
                            <td className="p-4 text-muted-foreground">15 min a 1 ano</td>
                          </tr>
                          <tr className="hover:bg-muted/30 transition-colors">
                            <td className="p-4 font-mono text-xs text-primary">_ga, _gat, _gid</td>
                            <td className="p-4 text-muted-foreground">Google Analytics (se ativado)</td>
                            <td className="p-4 text-muted-foreground">Análise de tráfego anônima</td>
                            <td className="p-4"><span className="px-2 py-1 rounded-full text-xs bg-orange-500/10 text-orange-600 dark:text-orange-400">Terceiro</span></td>
                            <td className="p-4 text-muted-foreground">1 dia a 2 anos</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <HighlightBox variant="success" className="mt-6">
                      <strong>Nenhum desses cookies coleta seu nome, e-mail ou dados pessoais</strong> a menos que você os forneça voluntariamente (ex: ao se inscrever na newsletter no futuro).
                    </HighlightBox>
                  </SectionCard>
                </section>

                {/* Outras tecnologias */}
                <section id="outras-tecnologias" className="scroll-mt-28">
                  <SectionCard icon={Eye} title="Outras tecnologias de rastreamento">
                    <p className="text-muted-foreground mb-6">
                      Além de cookies, os serviços de terceiros (como o Google AdSense) podem usar:
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      <div className="p-5 rounded-xl bg-muted/30 border border-border/50">
                        <h4 className="font-semibold text-foreground mb-2">Web beacons (ou "pixels")</h4>
                        <p className="text-sm text-muted-foreground">
                          Pequenos arquivos gráficos usados para medir eficácia de anúncios ou e-mails.
                        </p>
                      </div>
                      <div className="p-5 rounded-xl bg-muted/30 border border-border/50">
                        <h4 className="font-semibold text-foreground mb-2">Tags de script</h4>
                        <p className="text-sm text-muted-foreground">
                          Códigos que carregam funcionalidades de publicidade.
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground">
                      Essas tecnologias geralmente dependem de cookies para funcionar — portanto, <strong>bloquear cookies também limita seu alcance</strong>.
                    </p>
                  </SectionCard>
                </section>

                {/* Flash/LSOs */}
                <section id="flash" className="scroll-mt-28">
                  <SectionCard icon={XCircle} title="Cookies Flash ou Local Shared Objects (LSOs)?">
                    <div className="p-6 rounded-xl bg-green-500/10 border border-green-500/20 text-center">
                      <div className="inline-flex items-center justify-center p-3 rounded-full bg-green-500/20 mb-4">
                        <XCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                      </div>
                      <p className="text-muted-foreground">
                        <strong className="text-foreground">Não usamos Flash nem LSOs.</strong>
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        A tecnologia Flash está descontinuada desde 2021, e nosso site não depende dela.
                      </p>
                    </div>
                  </SectionCard>
                </section>

                {/* Publicidade direcionada */}
                <section id="publicidade" className="scroll-mt-28">
                  <SectionCard icon={Megaphone} title="Publicidade direcionada">
                    <p className="text-muted-foreground mb-6">
                      <strong className="text-foreground">Sim</strong> — por meio do Google AdSense, você pode ver anúncios baseados em:
                    </p>

                    <ul className="space-y-3 mb-6">
                      <ListItem variant="bullet">Seus interesses (inferidos pelo Google com base em navegação em outros sites)</ListItem>
                      <ListItem variant="bullet">Localização aproximada (país/região)</ListItem>
                      <ListItem variant="bullet">Tipo de dispositivo</ListItem>
                    </ul>

                    <p className="text-muted-foreground mb-6">
                      Mas <strong className="text-foreground">não vinculamos isso ao seu nome ou e-mail</strong>, a menos que você esteja logado em uma conta do Google e tenha compartilhado esses dados com o Google.
                    </p>

                    <div className="p-5 rounded-xl bg-primary/5 border border-primary/20">
                      <h4 className="font-semibold text-foreground mb-3">🔧 Desativar anúncios personalizados:</h4>
                      <div className="space-y-2">
                        <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline text-sm">
                          <ExternalLink className="h-4 w-4" /> adssettings.google.com
                        </a>
                        <a href="https://myadcenter.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline text-sm">
                          <ExternalLink className="h-4 w-4" /> myadcenter.google.com
                        </a>
                        <a href="https://optout.networkadvertising.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline text-sm">
                          <ExternalLink className="h-4 w-4" /> optout.networkadvertising.org
                        </a>
                      </div>
                    </div>
                  </SectionCard>
                </section>

                {/* Como controlar cookies */}
                <section id="controle" className="scroll-mt-28">
                  <SectionCard icon={Sliders} title="Como posso controlar os cookies?">
                    <p className="text-muted-foreground mb-6">
                      <strong className="text-foreground">Você tem total controle sobre cookies.</strong> Pode:
                    </p>

                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      1. Gerenciar via navegador
                    </h3>

                    <p className="text-muted-foreground mb-4">
                      A maioria dos navegadores permite que você bloqueie todos os cookies (exceto os essenciais), exclua cookies manualmente, ou configure regras por site.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3 mb-6">
                      <BrowserCard name="Google Chrome" path="Configurações → Privacidade e segurança → Cookies" url="https://support.google.com/chrome/answer/95647" />
                      <BrowserCard name="Mozilla Firefox" path="Opções → Privacidade e segurança" url="https://support.mozilla.org/kb/cookies-information-websites-store-on-your-computer" />
                      <BrowserCard name="Safari" path="Preferências → Privacidade" url="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" />
                      <BrowserCard name="Microsoft Edge" path="Configurações → Cookies e permissões" url="https://support.microsoft.com/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" />
                      <BrowserCard name="Opera" path="Configurações → Privacidade → Cookies" url="https://help.opera.com/en/latest/web-preferences/#cookies" />
                    </div>

                    <HighlightBox variant="warning" className="mb-6">
                      <strong>Atenção:</strong> Bloquear cookies de terceiros pode reduzir a personalização dos anúncios — mas não afeta a navegação básica no Lojas Grátis, já que não exigimos cookies para exibir conteúdo.
                    </HighlightBox>

                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      2. Usar o Global Privacy Control (GPC)
                    </h3>

                    <p className="text-muted-foreground mb-4">
                      Reconhecemos o sinal GPC (Global Privacy Control). Se seu navegador ou extensão (ex: Brave, Privacy Badger) enviar esse sinal, trataremos automaticamente como uma solicitação de exclusão de venda/compartilhamento de dados para fins publicitários, conforme a CCPA e outras leis estaduais dos EUA.
                    </p>

                    <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                      <a href="https://globalprivacycontrol.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline font-medium">
                        <Shield className="h-5 w-5" />
                        Saiba mais: globalprivacycontrol.org
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </SectionCard>
                </section>

                {/* Atualizações */}
                <section id="atualizacoes" className="scroll-mt-28">
                  <SectionCard icon={RefreshCw} title="Com que frequência atualizamos esta Política?">
                    <p className="text-muted-foreground mb-4">
                      Podemos atualizar esta Política sempre que houver mudanças nas tecnologias usadas (ex: inclusão de novos serviços) ou por exigência legal.
                    </p>
                    <p className="text-muted-foreground mb-6">
                      A data da última revisão aparece no topo.
                    </p>

                    <HighlightBox variant="info">
                      <strong>Recomendamos que você consulte esta página periodicamente.</strong>
                    </HighlightBox>
                  </SectionCard>
                </section>

                {/* Contato */}
                <section id="contato" className="scroll-mt-28">
                  <SectionCard icon={Mail} title="Onde obter mais informações?" variant="highlight">
                    <p className="text-muted-foreground mb-6">
                      Para dúvidas, solicitações ou exercer seus direitos (ex: LGPD, CCPA), entre em contato:
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      <ContactCard icon={Mail} label="E-mail Geral" value="contato@lojasgratis.com.br" href="mailto:contato@lojasgratis.com.br" />
                      <ContactCard icon={Shield} label="LGPD / Privacidade" value="privacidade@lojasgratis.com.br" href="mailto:privacidade@lojasgratis.com.br" />
                    </div>

                    <div className="p-4 rounded-xl bg-muted/30 border border-border/50 mb-6">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-foreground mb-1">Endereço (para fins legais)</p>
                          <p className="text-sm text-muted-foreground">
                            Lojas Grátis<br />
                            João Pessoa, Paraíba — Brasil
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <ComplianceBadge text="LGPD" />
                      <ComplianceBadge text="GDPR" />
                      <ComplianceBadge text="CCPA/CPRA" />
                      <ComplianceBadge text="Diretrizes ANPD" />
                    </div>
                  </SectionCard>
                </section>

              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Cookies;