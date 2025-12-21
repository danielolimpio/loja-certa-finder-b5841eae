import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { 
  FileText, 
  Scale, 
  Shield, 
  Ban,
  Users,
  Settings,
  Clock,
  RefreshCw,
  MapPin,
  AlertTriangle,
  ShieldX,
  HandshakeIcon,
  Database,
  Mail,
  FileCheck,
  ChevronRight,
  CheckCircle2,
  XCircle,
  ExternalLink,
  Gavel,
  Globe,
  BookOpen,
  Edit3,
  Briefcase
} from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const sections = [
  { id: "servicos", title: "1. Nossos Serviços", icon: Globe },
  { id: "propriedade", title: "2. Propriedade Intelectual", icon: Shield },
  { id: "representacoes", title: "3. Representações do Usuário", icon: Users },
  { id: "proibidas", title: "4. Atividades Proibidas", icon: Ban },
  { id: "contribuicoes", title: "5. Contribuições do Usuário", icon: Edit3 },
  { id: "gestao", title: "6. Gestão dos Serviços", icon: Settings },
  { id: "vigencia", title: "7. Vigência e Rescisão", icon: Clock },
  { id: "modificacoes", title: "8. Modificações e Interrupções", icon: RefreshCw },
  { id: "lei", title: "9. Lei Aplicável e Foro", icon: Gavel },
  { id: "correcoes", title: "10. Correções", icon: Edit3 },
  { id: "isencao", title: "11. Isenção de Responsabilidade", icon: ShieldX },
  { id: "limitacoes", title: "12. Limitações de Responsabilidade", icon: Scale },
  { id: "indenizacao", title: "13. Indenização", icon: HandshakeIcon },
  { id: "dados", title: "14. Dados do Usuário", icon: Database },
  { id: "comunicacoes", title: "15. Comunicações Eletrônicas", icon: Mail },
  { id: "disposicoes", title: "16. Disposições Gerais", icon: FileCheck },
  { id: "contato", title: "17. Contate-nos", icon: Mail },
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

const InfoBox = ({ label, description }: { label: string; description: string }) => (
  <div className="p-4 rounded-xl bg-muted/50 border border-border/50">
    <p className="font-semibold text-foreground mb-1">{label}</p>
    <p className="text-sm text-muted-foreground">{description}</p>
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

const ServiceItem = ({ icon, title, description }: { icon: string; title: string; description?: string }) => (
  <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/30 border border-border/50">
    <span className="text-2xl flex-shrink-0">{icon}</span>
    <div>
      <p className="font-medium text-foreground">{title}</p>
      {description && <p className="text-sm text-muted-foreground mt-1">{description}</p>}
    </div>
  </div>
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

const Terms = () => {
  const [activeSection, setActiveSection] = useState("servicos");

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
        <title>Termos de Uso - Lojas Grátis</title>
        <meta name="description" content="Termos de Uso da Lojas Grátis. Conheça as regras, condições e direitos para utilizar nosso site de informações sobre e-commerce e lojas virtuais." />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-secondary/20">
        <Header />
        
        <main className="flex-1">
          <div className="container py-8 lg:py-12">
            <BreadcrumbNav items={[{ label: "Termos de Uso" }]} />
            
            {/* Header Premium */}
            <div className="text-center mb-12 mt-6">
              <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 mb-6 shadow-lg">
                <FileText className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text">
                Termos de <span className="text-primary">Uso</span>
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
                
                <h2 className="text-xl font-bold mb-4 text-foreground relative z-10">ACEITAÇÃO DOS NOSSOS TERMOS</h2>
                
                <p className="text-muted-foreground mb-4 relative z-10">
                  Nós somos <strong className="text-primary">Lojas Grátis</strong> ("Empresa", "nós", "nosso" ou "nossa").
                  Operamos o site <strong className="text-foreground">https://lojasgratis.com.br</strong> e quaisquer outros produtos ou serviços relacionados que façam referência ou estejam vinculados a estes Termos de Uso (coletivamente, os "Serviços").
                </p>

                <div className="grid sm:grid-cols-2 gap-3 mb-6 relative z-10">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 border border-border/50">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">E-mail geral</p>
                      <a href="mailto:contato@lojasgratis.com.br" className="text-sm font-medium text-primary hover:underline">contato@lojasgratis.com.br</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 border border-border/50">
                    <Shield className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">Privacidade/LGPD</p>
                      <a href="mailto:privacidade@lojasgratis.com.br" className="text-sm font-medium text-primary hover:underline">privacidade@lojasgratis.com.br</a>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 relative z-10">
                  Estes Termos de Uso constituem um acordo juridicamente vinculativo celebrado entre você (seja pessoalmente ou em nome de uma entidade) e o Lojas Grátis. Ao acessar ou usar os Serviços, você declara que:
                </p>

                <ul className="space-y-2 relative z-10 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Leu, entendeu e aceita estar vinculado a todos estes Termos;</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Tem capacidade legal para usar os Serviços;</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Não é menor de 18 anos.</span>
                  </li>
                </ul>

                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 relative z-10">
                  <p className="text-sm font-semibold text-red-600 dark:text-red-400 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    CASO NÃO CONCORDE COM ESTES TERMOS, VOCÊ DEVE INTERROMPER IMEDIATAMENTE O ACESSO AOS NOSSOS SERVIÇOS.
                  </p>
                </div>

                <p className="text-sm text-muted-foreground mt-4 relative z-10">
                  Reservamo-nos o direito de alterar estes Termos a qualquer momento. As alterações entram em vigor após publicação da nova data de "Última atualização" no topo deste documento. É sua responsabilidade revisar periodicamente esta página.
                </p>
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
                
                {/* 1. Nossos Serviços */}
                <section id="servicos" className="scroll-mt-28">
                  <SectionCard icon={Globe} title="1. Nossos Serviços">
                    <p className="text-muted-foreground mb-6">
                      O <strong className="text-foreground">Lojas Grátis</strong> é um site informativo que divulga lojas, ofertas, cupons e conteúdos gratuitos ou promocionais. <strong>Não somos loja virtual, nem realizamos vendas diretas.</strong>
                    </p>

                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      Os Serviços incluem:
                    </h3>

                    <div className="grid gap-3 mb-6">
                      <ServiceItem icon="📝" title="Conteúdos editoriais" description="Textos, listas e dicas sobre e-commerce" />
                      <ServiceItem icon="🔗" title="Links para lojas parceiras" description="Afiliados ou não" />
                      <ServiceItem icon="✉️" title="Newsletter opcional" description="Requer nome e e-mail" />
                      <ServiceItem icon="📢" title="Anúncios do Google AdSense" />
                    </div>

                    <HighlightBox variant="warning">
                      O uso dos Serviços é gratuito, não comercial e destinado apenas a informação e entretenimento. Não fornecemos consultoria jurídica, financeira, médica ou de consumo.
                    </HighlightBox>

                    <p className="text-sm text-muted-foreground mt-4">
                      Ao acessar os Serviços de fora do Brasil, você o faz por iniciativa própria e é responsável por cumprir as leis locais.
                    </p>
                  </SectionCard>
                </section>

                {/* 2. Propriedade Intelectual */}
                <section id="propriedade" className="scroll-mt-28">
                  <SectionCard icon={Shield} title="2. Direitos de Propriedade Intelectual">
                    <p className="text-muted-foreground mb-6">
                      Somos proprietários ou licenciados de todos os direitos sobre os Serviços, incluindo:
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3 mb-6">
                      <InfoBox label="Código e Design" description="Código-fonte, design, layout e funcionalidades" />
                      <InfoBox label="Conteúdo" description="Textos, imagens, logos e marca 'Lojas Grátis'" />
                    </div>

                    <p className="text-sm text-muted-foreground mb-6">
                      Esse material é protegido por leis brasileiras e internacionais de direitos autorais e marcas.
                    </p>

                    <div className="p-5 rounded-xl bg-green-500/10 border border-green-500/20 mb-6">
                      <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-green-600 dark:text-green-400">
                        <CheckCircle2 className="h-5 w-5" />
                        Licença limitada para uso pessoal
                      </h3>
                      <p className="text-muted-foreground mb-3">
                        Concedemos a você uma licença não exclusiva, não transferível, revogável e gratuita para:
                      </p>
                      <ul className="space-y-2">
                        <ListItem variant="check">Acessar os Serviços</ListItem>
                        <ListItem variant="check">Ler e compartilhar links para nossos conteúdos (com crédito)</ListItem>
                        <ListItem variant="check">Baixar ou imprimir cópias para uso pessoal e não comercial</ListItem>
                      </ul>
                    </div>

                    <div className="p-5 rounded-xl bg-red-500/10 border border-red-500/20">
                      <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-red-600 dark:text-red-400">
                        <XCircle className="h-5 w-5" />
                        Expressamente proibido (sem autorização prévia)
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Contato para autorização: <a href="mailto:contato@lojasgratis.com.br" className="text-primary hover:underline">contato@lojasgratis.com.br</a>
                      </p>
                      <ul className="space-y-2">
                        <ListItem variant="x">Copiar, republicar ou traduzir conteúdos inteiros</ListItem>
                        <ListItem variant="x">Criar compilações, bancos de dados ou diretórios com nossos dados</ListItem>
                        <ListItem variant="x">Usar nosso conteúdo para fins comerciais, revenda ou geração de receita</ListItem>
                        <ListItem variant="x">Remover créditos, avisos de direitos autorais ou marcas</ListItem>
                      </ul>
                    </div>

                    <p className="text-sm text-muted-foreground mt-4 font-medium">
                      Reservamos todos os direitos não expressamente concedidos.
                    </p>
                  </SectionCard>
                </section>

                {/* 3. Representações do Usuário */}
                <section id="representacoes" className="scroll-mt-28">
                  <SectionCard icon={Users} title="3. Representações do Usuário">
                    <p className="text-muted-foreground mb-6">
                      Ao usar os Serviços, você declara e garante que:
                    </p>

                    <ul className="space-y-3 mb-6">
                      <ListItem variant="check">Tem pelo menos 18 anos</ListItem>
                      <ListItem variant="check">Usará os Serviços apenas para fins lícitos e pessoais</ListItem>
                      <ListItem variant="check">Não utilizará bots, scrapers, scripts automatizados ou ferramentas de coleta de dados</ListItem>
                      <ListItem variant="check">Não violará nenhuma lei, regulamento ou direito de terceiros</ListItem>
                      <ListItem variant="check">Suas informações (se fornecidas) são verdadeiras e atualizadas</ListItem>
                    </ul>

                    <HighlightBox variant="danger">
                      <strong>Fornecer dados falsos ou enganosos pode resultar no bloqueio imediato do acesso.</strong>
                    </HighlightBox>
                  </SectionCard>
                </section>

                {/* 4. Atividades Proibidas */}
                <section id="proibidas" className="scroll-mt-28">
                  <SectionCard icon={Ban} title="4. Atividades Proibidas" variant="warning">
                    <p className="text-muted-foreground mb-6">
                      Você <strong className="text-red-500">não poderá</strong> usar os Serviços para:
                    </p>

                    <div className="grid gap-3 mb-6">
                      <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                        <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Extrair dados em massa (ex: scraping de ofertas, e-mails)</span>
                      </div>
                      <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                        <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Interferir na segurança, desempenho ou funcionamento do site</span>
                      </div>
                      <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                        <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Carregar vírus, malware, spam ou conteúdo abusivo</span>
                      </div>
                      <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                        <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Fingir ser outra pessoa ou entidade</span>
                      </div>
                      <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                        <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Assediar, difamar ou prejudicar terceiros</span>
                      </div>
                      <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                        <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Violar direitos autorais, marcas ou propriedade intelectual</span>
                      </div>
                      <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                        <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Usar os Serviços para concorrência desleal ou criação de sites similares</span>
                      </div>
                      <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                        <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Violar a LGPD, Código de Defesa do Consumidor ou qualquer lei brasileira</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-muted/30 border border-border/50">
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Observação:</strong> Atualmente, não há área de comentários, cadastro de usuário ou envio de conteúdo — portanto, atividades como publicação de textos, vídeos ou fotos não são possíveis no momento.
                      </p>
                    </div>
                  </SectionCard>
                </section>

                {/* 5. Contribuições do Usuário */}
                <section id="contribuicoes" className="scroll-mt-28">
                  <SectionCard icon={Edit3} title="5. Contribuições Geradas pelo Usuário">
                    <div className="p-6 rounded-xl bg-muted/30 border border-border/50 text-center">
                      <div className="inline-flex items-center justify-center p-3 rounded-full bg-muted/50 mb-4">
                        <XCircle className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <p className="text-muted-foreground">
                        No estágio atual, os Serviços <strong className="text-foreground">não oferecem funcionalidade</strong> para envio ou publicação de conteúdo por usuários (ex: comentários, avaliações, formulários abertos).
                      </p>
                      <p className="text-sm text-muted-foreground mt-3">
                        Se, no futuro, introduzirmos tal recurso, novos termos específicos serão publicados e destacados.
                      </p>
                    </div>
                  </SectionCard>
                </section>

                {/* 6. Gestão dos Serviços */}
                <section id="gestao" className="scroll-mt-28">
                  <SectionCard icon={Settings} title="6. Gestão dos Serviços">
                    <p className="text-muted-foreground mb-6">
                      Reservamo-nos o direito, mas não a obrigação, de:
                    </p>

                    <ul className="space-y-3 mb-6">
                      <ListItem variant="bullet">Monitorar o uso dos Serviços</ListItem>
                      <ListItem variant="bullet">Remover ou bloquear acesso a conteúdo ou IPs que violem estes Termos</ListItem>
                      <ListItem variant="bullet">Modificar, suspender ou descontinuar qualquer parte dos Serviços sem aviso prévio</ListItem>
                      <ListItem variant="bullet">Tomar medidas legais contra abusos</ListItem>
                    </ul>

                    <p className="text-sm text-muted-foreground">
                      Não somos obrigados a moderar ou revisar conteúdo de terceiros (ex: anúncios do Google AdSense).
                    </p>
                  </SectionCard>
                </section>

                {/* 7. Vigência e Rescisão */}
                <section id="vigencia" className="scroll-mt-28">
                  <SectionCard icon={Clock} title="7. Vigência e Rescisão">
                    <p className="text-muted-foreground mb-4">
                      Estes Termos permanecem em vigor enquanto você usar os Serviços.
                    </p>
                    <p className="text-muted-foreground mb-6">
                      Podemos, a nosso exclusivo critério e sem aviso prévio, suspender ou encerrar seu acesso por qualquer motivo, incluindo violação destes Termos.
                    </p>

                    <HighlightBox variant="warning">
                      <strong>Após rescisão, você deve cessar imediatamente qualquer uso dos Serviços.</strong>
                    </HighlightBox>
                  </SectionCard>
                </section>

                {/* 8. Modificações e Interrupções */}
                <section id="modificacoes" className="scroll-mt-28">
                  <SectionCard icon={RefreshCw} title="8. Modificações e Interrupções">
                    <p className="text-muted-foreground mb-4">
                      Os Serviços podem sofrer atualizações, manutenções ou interrupções temporárias.
                    </p>
                    <p className="text-muted-foreground mb-6">
                      <strong className="text-foreground">Não garantimos disponibilidade 24/7</strong> e não seremos responsáveis por danos decorrentes de indisponibilidade, lentidão ou erros técnicos.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Podemos alterar conteúdos, layout, funcionalidades ou encerrar o site totalmente, a qualquer momento.
                    </p>
                  </SectionCard>
                </section>

                {/* 9. Lei Aplicável e Foro */}
                <section id="lei" className="scroll-mt-28">
                  <SectionCard icon={Gavel} title="9. Lei Aplicável e Foro">
                    <div className="p-5 rounded-xl bg-primary/5 border border-primary/20">
                      <p className="text-muted-foreground mb-4">
                        Estes Termos são regidos pelas <strong className="text-foreground">leis da República Federativa do Brasil</strong>.
                      </p>
                      <p className="text-muted-foreground">
                        Para dirimir quaisquer controvérsias decorrentes destes Termos, as partes elegem o foro da comarca de <strong className="text-foreground">João Pessoa, Paraíba</strong>, como único competente.
                      </p>
                    </div>
                  </SectionCard>
                </section>

                {/* 10. Correções */}
                <section id="correcoes" className="scroll-mt-28">
                  <SectionCard icon={Edit3} title="10. Correções">
                    <p className="text-muted-foreground mb-4">
                      Podem ocorrer erros, imprecisões ou omissões em conteúdos (ex: datas de promoções, preços, disponibilidade de cupons).
                    </p>
                    <p className="text-muted-foreground mb-6">
                      Não assumimos responsabilidade por tais falhas e nos reservamos o direito de corrigir ou atualizar informações a qualquer momento.
                    </p>

                    <HighlightBox variant="info">
                      <strong>Sempre verifique os detalhes diretamente no site da loja parceira antes de concluir qualquer ação.</strong>
                    </HighlightBox>
                  </SectionCard>
                </section>

                {/* 11. Isenção de Responsabilidade */}
                <section id="isencao" className="scroll-mt-28">
                  <SectionCard icon={ShieldX} title="11. Isenção de Responsabilidade" variant="warning">
                    <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20 mb-6">
                      <p className="font-semibold text-yellow-600 dark:text-yellow-400 text-center">
                        OS SERVIÇOS SÃO FORNECIDOS "NO ESTADO EM QUE SE ENCONTRAM" E "CONFORME DISPONIBILIZADOS".
                      </p>
                    </div>

                    <p className="text-muted-foreground mb-4">Você concorda que:</p>

                    <ul className="space-y-3 mb-6">
                      <ListItem variant="bullet">O uso é por sua conta e risco</ListItem>
                      <ListItem variant="bullet">Não oferecemos garantias de precisão, atualização, segurança ou desempenho</ListItem>
                    </ul>

                    <p className="text-muted-foreground mb-3">Não nos responsabilizamos por:</p>

                    <ul className="space-y-2 mb-6">
                      <ListItem variant="x">Danos diretos, indiretos ou consequenciais decorrentes do uso dos Serviços</ListItem>
                      <ListItem variant="x">Conteúdo de terceiros (ex: anúncios do Google, sites vinculados)</ListItem>
                      <ListItem variant="x">Compras, inscrições ou interações realizadas em lojas parceiras</ListItem>
                      <ListItem variant="x">Interrupções, vírus, falhas de segurança ou perda de dados</ListItem>
                    </ul>

                    <HighlightBox variant="warning">
                      <strong>Não somos responsáveis por transações entre você e lojas terceiras.</strong> Os links para lojas são fornecidos apenas para conveniência.
                    </HighlightBox>
                  </SectionCard>
                </section>

                {/* 12. Limitações de Responsabilidade */}
                <section id="limitacoes" className="scroll-mt-28">
                  <SectionCard icon={Scale} title="12. Limitações de Responsabilidade">
                    <p className="text-muted-foreground mb-6">
                      Na máxima extensão permitida por lei, nossa responsabilidade total por quaisquer danos relacionados aos Serviços será limitada a <strong className="text-foreground">R$ 100,00 (cem reais)</strong> — considerando que o uso é gratuito e sem contraprestação.
                    </p>

                    <p className="text-sm text-muted-foreground">
                      Caso a legislação aplicável não permita tal limitação, a responsabilidade será restrita ao mínimo legal.
                    </p>
                  </SectionCard>
                </section>

                {/* 13. Indenização */}
                <section id="indenizacao" className="scroll-mt-28">
                  <SectionCard icon={HandshakeIcon} title="13. Indenização">
                    <p className="text-muted-foreground mb-6">
                      Você concorda em nos defender, indenizar e isentar de qualquer reivindicação, dano, custo ou despesa (incluindo honorários advocatícios) decorrentes de:
                    </p>

                    <ul className="space-y-3">
                      <ListItem variant="bullet">Seu uso indevido dos Serviços</ListItem>
                      <ListItem variant="bullet">Violação destes Termos</ListItem>
                      <ListItem variant="bullet">Violação de direitos de terceiros (ex: direitos autorais, LGPD)</ListItem>
                      <ListItem variant="bullet">Atos ilícitos cometidos por você em conexão com os Serviços</ListItem>
                    </ul>
                  </SectionCard>
                </section>

                {/* 14. Dados do Usuário */}
                <section id="dados" className="scroll-mt-28">
                  <SectionCard icon={Database} title="14. Dados do Usuário">
                    <div className="grid gap-4 mb-6">
                      <div className="p-4 rounded-xl bg-muted/30 border border-border/50">
                        <div className="flex items-center gap-3 mb-2">
                          <Mail className="h-5 w-5 text-primary" />
                          <h4 className="font-semibold text-foreground">Newsletter</h4>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Nome e e-mail são coletados apenas com consentimento e usados exclusivamente para envio de conteúdos promocionais.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-muted/30 border border-border/50">
                        <div className="flex items-center gap-3 mb-2">
                          <Settings className="h-5 w-5 text-primary" />
                          <h4 className="font-semibold text-foreground">Cookies</h4>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Usados por Google AdSense para personalização de anúncios (ver nossa Política de Privacidade).
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-muted/30 border border-border/50">
                        <div className="flex items-center gap-3 mb-2">
                          <Database className="h-5 w-5 text-primary" />
                          <h4 className="font-semibold text-foreground">Backups e logs</h4>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          São mantidos por segurança, mas você é responsável por quaisquer dados que enviar.
                        </p>
                      </div>
                    </div>

                    <HighlightBox variant="success">
                      <strong>Não armazenamos senhas, dados financeiros ou informações sensíveis.</strong>
                    </HighlightBox>
                  </SectionCard>
                </section>

                {/* 15. Comunicações Eletrônicas */}
                <section id="comunicacoes" className="scroll-mt-28">
                  <SectionCard icon={Mail} title="15. Comunicações Eletrônicas">
                    <p className="text-muted-foreground mb-4">Você concorda que:</p>

                    <ul className="space-y-3">
                      <ListItem variant="check">E-mails e mensagens enviados por nós (ex: newsletter, respostas de suporte) satisfazem o requisito legal de comunicação escrita</ListItem>
                      <ListItem variant="check">O uso de assinaturas eletrônicas é válido e vinculante</ListItem>
                    </ul>
                  </SectionCard>
                </section>

                {/* 16. Disposições Gerais */}
                <section id="disposicoes" className="scroll-mt-28">
                  <SectionCard icon={FileCheck} title="16. Disposições Gerais">
                    <ul className="space-y-3">
                      <ListItem variant="bullet">Estes Termos constituem o acordo integral entre você e o Lojas Grátis</ListItem>
                      <ListItem variant="bullet">Nossa falha em exigir o cumprimento de qualquer cláusula não significa renúncia a ela</ListItem>
                      <ListItem variant="bullet">Se alguma cláusula for considerada inválida, as demais permanecem em vigor</ListItem>
                      <ListItem variant="bullet">Não há vínculo empregatício, sociedade ou representação entre você e nós</ListItem>
                      <ListItem variant="bullet">Estes Termos foram redigidos de forma clara e equilibrada — não serão interpretados contra nós apenas por termos sido os redatores</ListItem>
                    </ul>
                  </SectionCard>
                </section>

                {/* 17. Contato */}
                <section id="contato" className="scroll-mt-28">
                  <SectionCard icon={Mail} title="17. Contate-nos" variant="highlight">
                    <p className="text-muted-foreground mb-6">
                      Para dúvidas, reclamações ou solicitações sobre estes Termos:
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
                      <ComplianceBadge text="Código Civil Brasileiro" />
                      <ComplianceBadge text="CDC" />
                      <ComplianceBadge text="LGPD" />
                      <ComplianceBadge text="Marco Civil da Internet" />
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

export default Terms;