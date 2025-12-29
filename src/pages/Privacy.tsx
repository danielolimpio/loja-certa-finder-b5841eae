import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  Share2, 
  Globe, 
  Cookie, 
  Users, 
  Clock, 
  ShieldCheck,
  Baby,
  UserCheck,
  Settings,
  MapPin,
  RefreshCw,
  Mail,
  FileEdit,
  CheckCircle2,
  XCircle,
  Search,
  Scale,
  Handshake,
  AlertTriangle,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const sections = [
  { id: "resumo", title: "Resumo dos Pontos Principais", icon: CheckCircle2 },
  { id: "coleta", title: "1. Que Informações Coletamos?", icon: Database },
  { id: "processamento", title: "2. Como Processamos?", icon: Settings },
  { id: "bases-legais", title: "3. Bases Legais", icon: Scale },
  { id: "compartilhamento", title: "4. Compartilhamento", icon: Share2 },
  { id: "terceiros", title: "5. Sites de Terceiros", icon: Globe },
  { id: "cookies", title: "6. Cookies e Rastreamento", icon: Cookie },
  { id: "redes-sociais", title: "7. Logins em Redes Sociais", icon: Users },
  { id: "retencao", title: "8. Retenção de Dados", icon: Clock },
  { id: "seguranca", title: "9. Segurança", icon: ShieldCheck },
  { id: "menores", title: "10. Menores de Idade", icon: Baby },
  { id: "direitos", title: "11. Seus Direitos", icon: UserCheck },
  { id: "dnt", title: "12. Do Not Track", icon: Eye },
  { id: "eua", title: "13. Residentes dos EUA", icon: MapPin },
  { id: "outras-regioes", title: "14. Outras Regiões", icon: Globe },
  { id: "atualizacoes", title: "15. Atualizações", icon: RefreshCw },
  { id: "contato", title: "16. Contato", icon: Mail },
  { id: "revisao", title: "17. Revisar/Excluir Dados", icon: FileEdit },
];

const Privacy = () => {
  const [activeSection, setActiveSection] = useState("resumo");

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
        <title>Política de Privacidade - Lojas Grátis</title>
        <meta name="description" content="Política de Privacidade da Lojas Grátis. Saiba como coletamos e protegemos seus dados." />
        <link rel="canonical" href="https://lojasgratis.com.br/privacidade" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-secondary/20">
        <Header />
        
        <main className="flex-1">
          <div className="container py-8 lg:py-12">
            <BreadcrumbNav items={[{ label: "Política de Privacidade" }]} />
            
            {/* Header Premium */}
            <div className="text-center mb-12 mt-6">
              <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 mb-6 shadow-lg">
                <Shield className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text">
                Política de <span className="text-primary">Privacidade</span>
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
                <p className="text-lg leading-relaxed text-foreground relative z-10">
                  Este Aviso de Privacidade para <strong className="text-primary">Lojas Grátis</strong> ("nós", "nos" ou "nosso") descreve como e por que podemos acessar, coletar, armazenar, usar e/ou compartilhar ("processar") suas informações pessoais quando você usa nossos serviços ("Serviços"), incluindo quando você:
                </p>
                <ul className="mt-4 space-y-2 relative z-10">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Visita nosso site em <strong className="text-foreground">https://lojasgratis.com.br</strong> ou qualquer outro site que contenha um link para este Aviso de Privacidade;</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Interage conosco de outras maneiras relacionadas, incluindo ações de marketing (ex: inscrição em newsletter).</span>
                  </li>
                </ul>
              </div>

              {/* Contact Box */}
              <div className="mt-6 p-4 rounded-xl bg-muted/30 border border-border/50 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground flex-1">
                  <strong className="text-foreground">Tem dúvidas ou preocupações?</strong> Entre em contato conosco pelo endereço: <a href="mailto:privacidade@lojasgratis.com.br" className="text-primary hover:underline font-medium">privacidade@lojasgratis.com.br</a>
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
                {/* Resumo */}
                <section id="resumo" className="scroll-mt-28">
                  <SectionCard
                    icon={CheckCircle2}
                    title="Resumo dos Pontos Principais"
                    variant="highlight"
                  >
                    <p className="text-muted-foreground mb-6">
                      Este resumo apresenta os pontos principais do nosso Aviso de Privacidade. Detalhes completos estão nas seções abaixo.
                    </p>
                    
                    <div className="grid gap-4">
                      <SummaryItem 
                        icon={CheckCircle2}
                        iconColor="text-green-500"
                        title="Que informações pessoais processamos?"
                        description="Coletamos apenas nome e endereço de e-mail, caso você opte por se inscrever voluntariamente em nossa newsletter. Não exigimos cadastro para navegar no site."
                      />
                      <SummaryItem 
                        icon={XCircle}
                        iconColor="text-red-500"
                        title="Processamos informações pessoais sensíveis?"
                        description="Não. Não solicitamos, coletamos nem processamos dados sensíveis (como origem racial, orientação sexual, crenças religiosas, saúde, etc.)."
                      />
                      <SummaryItem 
                        icon={Search}
                        iconColor="text-blue-500"
                        title="Coletamos informações de terceiros?"
                        description="Não coletamos ativamente de terceiros. Porém, plataformas como Google (AdSense/Analytics) podem coletar dados anônimos de navegação via cookies — conforme suas próprias políticas."
                      />
                      <SummaryItem 
                        icon={Settings}
                        iconColor="text-orange-500"
                        title="Como processamos suas informações?"
                        description="Para enviar a newsletter (com seu consentimento); exibir anúncios via Google AdSense; análise técnica/anônima; segurança do site; cumprir obrigações legais."
                      />
                      <SummaryItem 
                        icon={Scale}
                        iconColor="text-purple-500"
                        title="Bases legais"
                        description="Consentimento (newsletter), interesse legítimo (segurança, anúncios) e obrigações legais."
                      />
                      <SummaryItem 
                        icon={Handshake}
                        iconColor="text-teal-500"
                        title="Com quem compartilhamos?"
                        description="Apenas com Google LLC (AdSense/Analytics) e plataforma de e-mail marketing. Não vendemos seus dados."
                      />
                      <SummaryItem 
                        icon={ShieldCheck}
                        iconColor="text-green-600"
                        title="Como protegemos suas informações?"
                        description="Usamos HTTPS, atualizações regulares e boas práticas de segurança. Contudo, nenhuma transmissão online é 100% segura."
                      />
                      <SummaryItem 
                        icon={UserCheck}
                        iconColor="text-indigo-500"
                        title="Seus direitos"
                        description="Acessar, corrigir, solicitar cópia/exclusão dos seus dados; revogar consentimento; opor-se ao processamento para fins de marketing."
                      />
                    </div>

                    <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/20">
                      <p className="text-sm text-muted-foreground flex items-start gap-2">
                        <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span><strong className="text-foreground">Como exercer seus direitos?</strong> Envie um e-mail para <a href="mailto:privacidade@lojasgratis.com.br" className="text-primary hover:underline">privacidade@lojasgratis.com.br</a> ou use o link de descadastro nos e-mails da newsletter.</span>
                      </p>
                    </div>
                  </SectionCard>
                </section>

                {/* 1. Coleta */}
                <section id="coleta" className="scroll-mt-28">
                  <SectionCard icon={Database} title="1. Que Informações Coletamos?">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-primary" />
                          Informações pessoais que você nos divulga
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          Somente coletamos informações que você nos fornece voluntariamente, como ao se inscrever na nossa newsletter:
                        </p>
                        <div className="grid sm:grid-cols-2 gap-3">
                          <InfoBox label="Nome" description="Opcional, dependendo do formulário" />
                          <InfoBox label="Endereço de e-mail" description="Necessário para envio" />
                        </div>
                        <HighlightBox className="mt-4">
                          Não exigimos cadastro para acessar conteúdos.
                        </HighlightBox>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-primary" />
                          Informações coletadas automaticamente
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          Ao visitar https://lojasgratis.com.br, podemos coletar:
                        </p>
                        <ul className="space-y-2">
                          <ListItem>Endereço IP (geralmente anonimizado)</ListItem>
                          <ListItem>Tipo de dispositivo, navegador, sistema operacional</ListItem>
                          <ListItem>Páginas acessadas, tempo de visita, origem do tráfego</ListItem>
                        </ul>
                        <p className="text-sm text-muted-foreground mt-4">
                          Esses dados são coletados via logs do servidor (finalidade técnica) e cookies de terceiros (ex: Google AdSense).
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                        <h3 className="text-lg font-semibold mb-2 flex items-center gap-2 text-red-600 dark:text-red-400">
                          <XCircle className="h-5 w-5" />
                          Informação sensível
                        </h3>
                        <p className="text-muted-foreground">
                          <strong>Não processamos informações pessoais sensíveis</strong> sob nenhuma circunstância.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-muted/30 border border-border/50">
                        <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                          <Users className="h-5 w-5 text-muted-foreground" />
                          Dados de login de redes sociais
                        </h3>
                        <p className="text-muted-foreground">
                          <strong>Não oferecemos</strong> opção de login via redes sociais. Não coletamos dados de contas do Facebook, X ou outras plataformas.
                        </p>
                      </div>

                      <HighlightBox variant="warning">
                        Todas as informações que você nos fornecer devem ser verdadeiras, completas e precisas. Notifique-nos sobre alterações relevantes, se aplicável.
                      </HighlightBox>
                    </div>
                  </SectionCard>
                </section>

                {/* 2. Processamento */}
                <section id="processamento" className="scroll-mt-28">
                  <SectionCard icon={Settings} title="2. Como Processamos Suas Informações?">
                    <p className="text-muted-foreground mb-6">
                      Processamos suas informações pessoais para:
                    </p>
                    <div className="grid gap-3">
                      <ProcessItem icon="✉️" title="Enviar conteúdos da newsletter" description="(ex: ofertas, novidades, dicas), apenas com seu consentimento" />
                      <ProcessItem icon="📊" title="Melhorar a experiência" description="e otimizar o desempenho do site (com dados agregados/anônimos)" />
                      <ProcessItem icon="🛠️" title="Manter a segurança" description="integridade e funcionamento técnico dos Serviços" />
                      <ProcessItem icon="📢" title="Exibir anúncios personalizados" description="via Google AdSense (baseados em comportamento anônimo)" />
                      <ProcessItem icon="⚖️" title="Cumprir obrigações legais" description="(ex: ordem judicial, autoridade fiscal)" />
                    </div>
                    <HighlightBox className="mt-6">
                      Também podemos processar informações para outros fins, somente com seu consentimento prévio e explícito.
                    </HighlightBox>
                  </SectionCard>
                </section>

                {/* 3. Bases Legais */}
                <section id="bases-legais" className="scroll-mt-28">
                  <SectionCard icon={Scale} title="3. Em Que Bases Legais Nos Apoiamos?">
                    <p className="text-muted-foreground mb-6">
                      Conforme a LGPD (Brasil), GDPR (UE), e demais leis aplicáveis, nossa base legal inclui:
                    </p>
                    <div className="space-y-4">
                      <LegalBasisCard
                        title="Consentimento"
                        reference="art. 7º, I da LGPD / art. 6.1.a do GDPR"
                        description="Para newsletter e uso de cookies não essenciais. Você pode revogá-lo a qualquer momento."
                        color="green"
                      />
                      <LegalBasisCard
                        title="Interesse legítimo"
                        reference="art. 7º, X da LGPD / art. 6.1.f do GDPR"
                        description="Para segurança do site, análise técnica, exibição de anúncios relevantes."
                        color="blue"
                      />
                      <LegalBasisCard
                        title="Obrigação legal"
                        reference="art. 7º, II da LGPD"
                        description="Se exigido por autoridade competente."
                        color="purple"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground mt-6">
                      Para residentes da UE/Reino Unido/Canadá/Suíça: aplicam-se as bases legais específicas dessas jurisdições.
                    </p>
                  </SectionCard>
                </section>

                {/* 4. Compartilhamento */}
                <section id="compartilhamento" className="scroll-mt-28">
                  <SectionCard icon={Share2} title="4. Quando e Com Quem Compartilhamos?">
                    <p className="text-muted-foreground mb-6">
                      Compartilhamos dados apenas em situações limitadas e com terceiros essenciais:
                    </p>
                    <div className="space-y-4">
                      <SharePartnerCard
                        name="Google LLC"
                        description="Para exibição de anúncios (AdSense) e, se implementado, análise de tráfego (Google Analytics). O Google opera como controlador independente para fins publicitários."
                      />
                      <SharePartnerCard
                        name="Plataforma de e-mail marketing"
                        description="Apenas para disparo da newsletter (ex: plugin nativo do WordPress, Mailchimp, etc.), com medidas contratuais de proteção."
                      />
                      <SharePartnerCard
                        name="Transferências de negócios"
                        description="Em caso de fusão, aquisição ou venda de ativos, seus dados podem ser transferidos — notificaremos previamente, se possível."
                      />
                    </div>
                    <div className="mt-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                      <p className="text-green-700 dark:text-green-400 font-medium flex items-center gap-2">
                        <XCircle className="h-5 w-5" />
                        Não vendemos, alugamos ou comercializamos sua lista de e-mails ou qualquer dado pessoal.
                      </p>
                    </div>
                  </SectionCard>
                </section>

                {/* 5. Terceiros */}
                <section id="terceiros" className="scroll-mt-28">
                  <SectionCard icon={Globe} title="5. Qual É a Nossa Posição em Relação a Sites de Terceiros?">
                    <p className="text-muted-foreground mb-4">
                      Nosso site pode conter links para sites de terceiros (ex: lojas parceiras, redes sociais). Esses sites têm suas próprias políticas de privacidade e práticas de segurança.
                    </p>
                    <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                      <p className="text-amber-700 dark:text-amber-400 flex items-start gap-2">
                        <AlertTriangle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                        <span><strong>Não nos responsabilizamos</strong> pelo conteúdo, políticas ou práticas de privacidade de terceiros. Recomendamos que você leia as políticas desses sites antes de fornecer suas informações.</span>
                      </p>
                    </div>
                  </SectionCard>
                </section>

                {/* 6. Cookies */}
                <section id="cookies" className="scroll-mt-28">
                  <SectionCard icon={Cookie} title="6. Utilizamos Cookies e Outras Tecnologias?">
                    <p className="text-muted-foreground mb-6">Sim, usamos:</p>
                    <div className="grid gap-4 mb-6">
                      <CookieTypeCard
                        type="Cookies essenciais"
                        description="Para funcionalidade básica (ex: preferências de sessão, segurança)."
                        essential
                      />
                      <CookieTypeCard
                        type="Cookies de terceiros"
                        description="Via Google AdSense, que podem coletar dados anônimos para personalização de anúncios (ex: páginas visitadas, tempo no site, tipo de dispositivo)."
                      />
                    </div>

                    <div className="p-4 rounded-xl bg-muted/30 border border-border/50 mb-6">
                      <h4 className="font-semibold mb-2">Google Analytics (opcional)</h4>
                      <p className="text-sm text-muted-foreground mb-3">Se ativado, os dados são coletados anonimamente. Você pode desativar o rastreamento:</p>
                      <div className="flex flex-wrap gap-2">
                        <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
                          <ExternalLink className="h-3 w-3" />
                          Google Analytics Opt-out
                        </a>
                        <a href="https://optout.networkadvertising.org" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
                          <ExternalLink className="h-3 w-3" />
                          Network Advertising Opt-out
                        </a>
                      </div>
                    </div>

                    <HighlightBox>
                      Você pode gerenciar cookies nas configurações do seu navegador. Bloqueá-los pode afetar a experiência no site.
                    </HighlightBox>
                  </SectionCard>
                </section>

                {/* 7. Redes Sociais */}
                <section id="redes-sociais" className="scroll-mt-28">
                  <SectionCard icon={Users} title="7. Como Lidamos com Logins em Redes Sociais?">
                    <div className="p-6 rounded-xl bg-muted/30 border border-border/50 text-center">
                      <XCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-lg font-medium mb-2">Não oferecemos login ou cadastro via redes sociais</p>
                      <p className="text-muted-foreground">Esta seção não se aplica atualmente ao Lojas Grátis.</p>
                    </div>
                  </SectionCard>
                </section>

                {/* 8. Retenção */}
                <section id="retencao" className="scroll-mt-28">
                  <SectionCard icon={Clock} title="8. Por Quanto Tempo Guardamos Suas Informações?">
                    <div className="space-y-4">
                      <RetentionCard
                        title="Nome e e-mail da newsletter"
                        period="Enquanto inscrito"
                        description="Após o descadastro ou solicitação de exclusão, removemos os dados em até 30 dias."
                      />
                      <RetentionCard
                        title="Logs do servidor"
                        period="Até 6 meses"
                        description="Por motivos de segurança."
                      />
                      <RetentionCard
                        title="Backups"
                        period="Temporário"
                        description="Podem conter dados temporariamente — excluímos ou anonimizamos quando não houver mais finalidade legítima."
                      />
                    </div>
                    <p className="text-sm text-muted-foreground mt-6">
                      Se exigido por lei (ex: obrigações fiscais), poderemos reter por períodos mais longos — mas isso não se aplica à newsletter.
                    </p>
                  </SectionCard>
                </section>

                {/* 9. Segurança */}
                <section id="seguranca" className="scroll-mt-28">
                  <SectionCard icon={ShieldCheck} title="9. Como Mantemos Suas Informações Seguras?" variant="security">
                    <p className="text-muted-foreground mb-6">
                      Adotamos medidas razoáveis de segurança:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      <SecurityFeature icon={Lock} title="HTTPS (SSL/TLS)" description="Conexão criptografada em todo o site" />
                      <SecurityFeature icon={RefreshCw} title="Atualizações regulares" description="WordPress e plugins sempre atualizados" />
                      <SecurityFeature icon={UserCheck} title="Controle de acesso" description="Acesso restrito a administradores" />
                      <SecurityFeature icon={Shield} title="Monitoramento" description="Proteção contra ameaças" />
                    </div>
                    <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                      <p className="text-amber-700 dark:text-amber-400 text-sm flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <span><strong>Importante:</strong> Nenhuma transmissão pela internet é 100% segura. Não podemos garantir que hackers ou terceiros mal-intencionados não venham a acessar dados indevidamente. Você é responsável por proteger suas credenciais e dispositivos.</span>
                      </p>
                    </div>
                  </SectionCard>
                </section>

                {/* 10. Menores */}
                <section id="menores" className="scroll-mt-28">
                  <SectionCard icon={Baby} title="10. Coletamos Informações de Menores de Idade?">
                    <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/20 text-center mb-6">
                      <XCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
                      <p className="text-lg font-medium text-red-700 dark:text-red-400 mb-2">Não.</p>
                      <p className="text-muted-foreground">Nosso site não é direcionado a menores de 18 anos, e não coletamos dados de crianças ou adolescentes intencionalmente.</p>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Ao usar os Serviços, você declara ter pelo menos 18 anos ou ser responsável legal por um menor.
                    </p>
                    <HighlightBox>
                      Se soubermos que coletamos dados de um menor, excluiremos imediatamente. Denúncias: <a href="mailto:contato@lojasgratis.com.br" className="text-primary hover:underline">contato@lojasgratis.com.br</a>
                    </HighlightBox>
                  </SectionCard>
                </section>

                {/* 11. Direitos */}
                <section id="direitos" className="scroll-mt-28">
                  <SectionCard icon={UserCheck} title="11. Quais São Seus Direitos de Privacidade?" variant="highlight">
                    <p className="text-muted-foreground mb-6">Você tem direito a:</p>
                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      <RightCard title="Confirmar" description="Se há tratamento de seus dados" />
                      <RightCard title="Acessar" description="Seus dados pessoais" />
                      <RightCard title="Corrigir" description="Atualizar informações incorretas" />
                      <RightCard title="Solicitar cópia" description="Dos dados que mantemos" />
                      <RightCard title="Anonimização" description="Bloqueio ou eliminação" />
                      <RightCard title="Revogar" description="Consentimento a qualquer momento" />
                      <RightCard title="Portabilidade" description="Receber dados em formato portável (ex: CSV)" />
                      <RightCard title="Oposição" description="Ao tratamento para marketing" />
                    </div>

                    <div className="p-6 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Mail className="h-5 w-5 text-primary" />
                        Como exercer seus direitos?
                      </h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary mt-1" />
                          <span>Envie um e-mail para: <a href="mailto:privacidade@lojasgratis.com.br" className="text-primary hover:underline font-medium">privacidade@lojasgratis.com.br</a></span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary mt-1" />
                          <span>Assunto: "Solicitação de Titular – [seu nome]"</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-primary mt-1" />
                          <span>Responderemos em até <strong className="text-foreground">15 dias úteis</strong>.</span>
                        </li>
                      </ul>
                      <p className="text-sm text-muted-foreground mt-4">
                        <strong className="text-foreground">Newsletter:</strong> clique em "Cancelar inscrição" no rodapé dos e-mails.
                      </p>
                    </div>
                  </SectionCard>
                </section>

                {/* 12. DNT */}
                <section id="dnt" className="scroll-mt-28">
                  <SectionCard icon={Eye} title="12. Controles para Recursos de Não Rastrear">
                    <p className="text-muted-foreground mb-4">
                      Não respondemos automaticamente a sinais "Do Not Track" (DNT), pois não há padrão universal.
                    </p>
                    <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                      <p className="text-green-700 dark:text-green-400 flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
                        <span><strong>Reconhecemos e respeitamos o Global Privacy Control (GPC):</strong> se detectado, aplicamos automaticamente sua preferência de não participação em publicidade direcionada (ex: CCPA).</span>
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      Saiba mais: <a href="https://globalprivacycontrol.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://globalprivacycontrol.org</a>
                    </p>
                  </SectionCard>
                </section>

                {/* 13. EUA */}
                <section id="eua" className="scroll-mt-28">
                  <SectionCard icon={MapPin} title="13. Residentes dos EUA Têm Direitos Específicos?">
                    <p className="text-muted-foreground mb-6">
                      Sim. Residentes da Califórnia, Virgínia, Colorado, etc., têm direitos sob CCPA/CPRA, VCDPA, CPA, etc., incluindo direito de saber, exclusão, correção e não venda/compartilhamento.
                    </p>
                    
                    <h4 className="font-semibold mb-4">Categorias coletadas nos últimos 12 meses:</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left p-3 font-semibold">Categoria</th>
                            <th className="text-left p-3 font-semibold">Exemplos</th>
                            <th className="text-center p-3 font-semibold">Coletado?</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-border/50">
                            <td className="p-3">A. Identificadores</td>
                            <td className="p-3 text-muted-foreground">Nome, e-mail (se inscrito)</td>
                            <td className="p-3 text-center"><span className="inline-flex items-center gap-1 text-green-600"><CheckCircle2 className="h-4 w-4" /> Voluntário</span></td>
                          </tr>
                          <tr className="border-b border-border/50">
                            <td className="p-3">F. Atividade na Internet</td>
                            <td className="p-3 text-muted-foreground">Páginas visitadas, interações com anúncios</td>
                            <td className="p-3 text-center"><span className="inline-flex items-center gap-1 text-green-600"><CheckCircle2 className="h-4 w-4" /> Anônimo</span></td>
                          </tr>
                          <tr className="border-b border-border/50">
                            <td className="p-3">Demais categorias (B a L)</td>
                            <td className="p-3 text-muted-foreground">Dados financeiros, biométricos, localização precisa, etc.</td>
                            <td className="p-3 text-center"><span className="inline-flex items-center gap-1 text-red-500"><XCircle className="h-4 w-4" /> Não</span></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </SectionCard>
                </section>

                {/* 14. Outras Regiões */}
                <section id="outras-regioes" className="scroll-mt-28">
                  <SectionCard icon={Globe} title="14. Outras Regiões Possuem Direitos Específicos?">
                    <p className="text-muted-foreground mb-6">Sim. Reconhecemos direitos em:</p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <RegionCard country="Brasil" law="LGPD" authority="ANPD como autoridade" />
                      <RegionCard country="UE/EEE/Reino Unido" law="GDPR" authority="Direito a reclamação junto à autoridade nacional" />
                      <RegionCard country="Suíça" law="nFADP" authority="Autoridade local de proteção de dados" />
                      <RegionCard country="Canadá" law="PIPEDA" authority="Privacy Commissioner" />
                      <RegionCard country="Austrália" law="Privacy Act" authority="OAIC" />
                      <RegionCard country="África do Sul" law="POPIA" authority="Information Regulator" />
                    </div>
                    <p className="text-sm text-muted-foreground mt-6">
                      Entre em contato se desejar exercer direitos locais: <a href="mailto:privacidade@lojasgratis.com.br" className="text-primary hover:underline">privacidade@lojasgratis.com.br</a>
                    </p>
                  </SectionCard>
                </section>

                {/* 15. Atualizações */}
                <section id="atualizacoes" className="scroll-mt-28">
                  <SectionCard icon={RefreshCw} title="15. Atualizamos Este Aviso?">
                    <p className="text-muted-foreground mb-4">
                      Sim. Atualizamos esta Política conforme necessário para cumprir leis ou refletir mudanças nos Serviços.
                      A data da última revisão está no topo.
                    </p>
                    <HighlightBox>
                      Alterações significativas serão comunicadas por aviso no site. Recomendamos revisão periódica.
                    </HighlightBox>
                  </SectionCard>
                </section>

                {/* 16. Contato */}
                <section id="contato" className="scroll-mt-28">
                  <SectionCard icon={Mail} title="16. Como Entrar em Contato?" variant="contact">
                    <p className="text-muted-foreground mb-6">Para dúvidas, solicitações ou reclamações:</p>
                    <div className="grid gap-4">
                      <ContactCard
                        icon={Mail}
                        title="E-mail geral"
                        value="contato@lojasgratis.com.br"
                        href="mailto:contato@lojasgratis.com.br"
                      />
                      <ContactCard
                        icon={Shield}
                        title="Assuntos de privacidade/LGPD/GDPR"
                        value="privacidade@lojasgratis.com.br"
                        href="mailto:privacidade@lojasgratis.com.br"
                      />
                      <ContactCard
                        icon={MapPin}
                        title="Endereço (para fins legais)"
                        value="Lojas Grátis — João Pessoa, Paraíba — Brasil"
                      />
                    </div>
                  </SectionCard>
                </section>

                {/* 17. Revisão */}
                <section id="revisao" className="scroll-mt-28">
                  <SectionCard icon={FileEdit} title="17. Como Revisar, Atualizar ou Excluir Dados?">
                    <p className="text-muted-foreground mb-6">Você tem o direito de solicitar acesso, cópia, correção, portabilidade ou exclusão dos seus dados, bem como revogar o consentimento para tratamento.</p>
                    
                    <div className="p-6 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 mb-6">
                      <h4 className="font-semibold mb-3">Como solicitar?</h4>
                      <p className="text-muted-foreground mb-4">
                        Envie um e-mail claro para <a href="mailto:privacidade@lojasgratis.com.br" className="text-primary hover:underline font-medium">privacidade@lojasgratis.com.br</a>, com:
                      </p>
                      <ul className="space-y-2">
                        <ListItem>Seu nome e e-mail cadastrado</ListItem>
                        <ListItem>Tipo de solicitação</ListItem>
                        <ListItem>Documento de identificação, se necessário para confirmação</ListItem>
                      </ul>
                      <p className="text-sm text-muted-foreground mt-4">
                        Processaremos sua solicitação em até <strong className="text-foreground">15 dias úteis</strong>, conforme exigido pela LGPD e outras leis.
                      </p>
                    </div>
                  </SectionCard>
                </section>

                {/* Compliance Footer */}
                <div className="p-6 rounded-2xl bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 border border-border/50">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                    <h3 className="font-bold text-lg">Esta Política está em conformidade com:</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <ComplianceBadge label="LGPD" description="Lei nº 13.709/2018" />
                    <ComplianceBadge label="GDPR" description="Regulamento UE" />
                    <ComplianceBadge label="CCPA/CPRA" description="California" />
                    <ComplianceBadge label="+ Normas internacionais" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

// Component helpers
const SectionCard = ({ 
  icon: Icon, 
  title, 
  children, 
  variant = "default" 
}: { 
  icon: React.ElementType; 
  title: string; 
  children: React.ReactNode; 
  variant?: "default" | "highlight" | "security" | "contact";
}) => {
  const variants = {
    default: "bg-card border-border/50",
    highlight: "bg-gradient-to-br from-primary/5 to-card border-primary/20",
    security: "bg-gradient-to-br from-green-500/5 to-card border-green-500/20",
    contact: "bg-gradient-to-br from-blue-500/5 to-card border-blue-500/20",
  };

  return (
    <div className={cn("p-6 md:p-8 rounded-2xl border shadow-lg", variants[variant])}>
      <div className="flex items-start gap-4 mb-6">
        <div className={cn(
          "p-3 rounded-xl",
          variant === "highlight" ? "bg-primary/10" : 
          variant === "security" ? "bg-green-500/10" :
          variant === "contact" ? "bg-blue-500/10" :
          "bg-primary/10"
        )}>
          <Icon className={cn(
            "h-6 w-6",
            variant === "highlight" ? "text-primary" : 
            variant === "security" ? "text-green-500" :
            variant === "contact" ? "text-blue-500" :
            "text-primary"
          )} />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold pt-1">{title}</h2>
      </div>
      {children}
    </div>
  );
};

const SummaryItem = ({ 
  icon: Icon, 
  iconColor, 
  title, 
  description 
}: { 
  icon: React.ElementType; 
  iconColor: string; 
  title: string; 
  description: string;
}) => (
  <div className="p-4 rounded-xl bg-card border border-border/50 flex items-start gap-4 hover:shadow-md transition-shadow">
    <div className={cn("p-2 rounded-lg bg-muted/50", iconColor)}>
      <Icon className={cn("h-5 w-5", iconColor)} />
    </div>
    <div>
      <h4 className="font-semibold mb-1">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </div>
);

const InfoBox = ({ label, description }: { label: string; description: string }) => (
  <div className="p-4 rounded-xl bg-muted/30 border border-border/50">
    <p className="font-semibold">{label}</p>
    <p className="text-sm text-muted-foreground">{description}</p>
  </div>
);

const HighlightBox = ({ 
  children, 
  className, 
  variant = "info" 
}: { 
  children: React.ReactNode; 
  className?: string; 
  variant?: "info" | "warning";
}) => (
  <div className={cn(
    "p-4 rounded-xl border",
    variant === "warning" 
      ? "bg-amber-500/10 border-amber-500/20" 
      : "bg-primary/5 border-primary/20",
    className
  )}>
    <p className={cn(
      "text-sm",
      variant === "warning" ? "text-amber-700 dark:text-amber-400" : "text-muted-foreground"
    )}>
      {children}
    </p>
  </div>
);

const ListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3 text-muted-foreground">
    <ChevronRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
    <span>{children}</span>
  </li>
);

const ProcessItem = ({ icon, title, description }: { icon: string; title: string; description: string }) => (
  <div className="p-4 rounded-xl bg-muted/30 border border-border/50 flex items-start gap-3">
    <span className="text-2xl">{icon}</span>
    <p className="text-muted-foreground">
      <strong className="text-foreground">{title}</strong> {description}
    </p>
  </div>
);

const LegalBasisCard = ({ 
  title, 
  reference, 
  description, 
  color 
}: { 
  title: string; 
  reference: string; 
  description: string; 
  color: "green" | "blue" | "purple";
}) => {
  const colors = {
    green: "border-l-green-500 bg-green-500/5",
    blue: "border-l-blue-500 bg-blue-500/5",
    purple: "border-l-purple-500 bg-purple-500/5",
  };

  return (
    <div className={cn("p-4 rounded-r-xl border-l-4", colors[color])}>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-xs text-muted-foreground mb-2">{reference}</p>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

const SharePartnerCard = ({ name, description }: { name: string; description: string }) => (
  <div className="p-4 rounded-xl bg-muted/30 border border-border/50">
    <h4 className="font-semibold mb-2">{name}</h4>
    <p className="text-sm text-muted-foreground">{description}</p>
  </div>
);

const CookieTypeCard = ({ 
  type, 
  description, 
  essential = false 
}: { 
  type: string; 
  description: string; 
  essential?: boolean;
}) => (
  <div className={cn(
    "p-4 rounded-xl border",
    essential ? "bg-green-500/5 border-green-500/20" : "bg-muted/30 border-border/50"
  )}>
    <div className="flex items-center gap-2 mb-2">
      <h4 className="font-semibold">{type}</h4>
      {essential && (
        <span className="px-2 py-0.5 rounded-full text-xs bg-green-500/20 text-green-700 dark:text-green-400">
          Essencial
        </span>
      )}
    </div>
    <p className="text-sm text-muted-foreground">{description}</p>
  </div>
);

const RetentionCard = ({ 
  title, 
  period, 
  description 
}: { 
  title: string; 
  period: string; 
  description: string;
}) => (
  <div className="p-4 rounded-xl bg-muted/30 border border-border/50 flex items-start gap-4">
    <div className="p-2 rounded-lg bg-primary/10">
      <Clock className="h-5 w-5 text-primary" />
    </div>
    <div className="flex-1">
      <div className="flex items-center justify-between mb-1">
        <h4 className="font-semibold">{title}</h4>
        <span className="text-sm font-medium text-primary">{period}</span>
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </div>
);

const SecurityFeature = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
}) => (
  <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/20 flex items-start gap-3">
    <Icon className="h-5 w-5 text-green-500 flex-shrink-0" />
    <div>
      <h4 className="font-semibold text-sm">{title}</h4>
      <p className="text-xs text-muted-foreground">{description}</p>
    </div>
  </div>
);

const RightCard = ({ title, description }: { title: string; description: string }) => (
  <div className="p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors">
    <div className="flex items-center gap-2 mb-1">
      <CheckCircle2 className="h-4 w-4 text-primary" />
      <h4 className="font-semibold">{title}</h4>
    </div>
    <p className="text-sm text-muted-foreground">{description}</p>
  </div>
);

const RegionCard = ({ 
  country, 
  law, 
  authority 
}: { 
  country: string; 
  law: string; 
  authority: string;
}) => (
  <div className="p-4 rounded-xl bg-muted/30 border border-border/50">
    <h4 className="font-semibold">{country}</h4>
    <p className="text-sm text-primary font-medium">{law}</p>
    <p className="text-xs text-muted-foreground">{authority}</p>
  </div>
);

const ContactCard = ({ 
  icon: Icon, 
  title, 
  value, 
  href 
}: { 
  icon: React.ElementType; 
  title: string; 
  value: string; 
  href?: string;
}) => (
  <div className="p-4 rounded-xl bg-muted/30 border border-border/50 flex items-start gap-4">
    <div className="p-2 rounded-lg bg-primary/10">
      <Icon className="h-5 w-5 text-primary" />
    </div>
    <div>
      <p className="text-sm text-muted-foreground">{title}</p>
      {href ? (
        <a href={href} className="font-semibold text-primary hover:underline">{value}</a>
      ) : (
        <p className="font-semibold">{value}</p>
      )}
    </div>
  </div>
);

const ComplianceBadge = ({ label, description }: { label: string; description?: string }) => (
  <div className="px-4 py-2 rounded-full bg-card border border-border/50 flex items-center gap-2">
    <CheckCircle2 className="h-4 w-4 text-green-500" />
    <span className="font-medium">{label}</span>
    {description && <span className="text-xs text-muted-foreground hidden sm:inline">({description})</span>}
  </div>
);

export default Privacy;
