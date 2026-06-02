import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { Target, Users, Award, TrendingUp, Globe, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import danielOlimpioPhoto from "@/assets/daniel-olimpio.jpg";

const About = () => {
  const [showFullBio, setShowFullBio] = useState(false);

  return (
    <>
      <Helmet>
        <title>Sobre o Lojas Grátis: Metodologia Imparcial de Análise 2026</title>
        <meta name="description" content="Quem somos e como ranqueamos as melhores plataformas de e-commerce do Brasil. Critérios transparentes, testes reais e análises 100% independentes desde 2023." />
        <meta name="keywords" content="sobre lojas grátis, metodologia ranking ecommerce, análise imparcial plataformas, quem somos lojas grátis" />
        <link rel="canonical" href="https://lojasgratis.com.br/sobre/" />
        <meta property="og:title" content="Sobre o Lojas Grátis: Metodologia Imparcial de Análise 2026" />
        <meta property="og:description" content="Quem somos e como avaliamos as melhores plataformas de e-commerce do Brasil de forma 100% independente." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lojasgratis.com.br/sobre/" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          <div className="container py-12">
            <BreadcrumbNav items={[{ label: "Sobre" }]} />
            {/* Hero Section */}
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Sobre o <span className="text-primary">LojasGrátis</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Ajudamos empreendedores brasileiros a escolher a melhor plataforma 
                para criar sua loja virtual com transparência e informações de qualidade.
              </p>
            </div>

            {/* Perfil do Desenvolvedor */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-card via-card to-primary/5 border shadow-lg">
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                  {/* Foto */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden ring-4 ring-primary/20 shadow-xl">
                        <img 
                          src={danielOlimpioPhoto} 
                          alt="Daniel Olimpio - Desenvolvedor Web" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                        20+ anos
                      </div>
                    </div>
                  </div>

                  {/* Informações */}
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold mb-1">Daniel Olimpio</h2>
                    <p className="text-primary font-medium text-lg mb-4">Desenvolvedor Web</p>
                    
                    <div className="mb-4">
                      <p className="text-muted-foreground italic mb-4">
                        "Combinando tecnologia e criatividade para criar soluções digitais impactantes"
                      </p>
                    </div>

                    {/* Descrição com Ver Tudo */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-3">Minha Jornada</h3>
                      <div className={`text-muted-foreground space-y-3 ${!showFullBio ? 'line-clamp-3' : ''}`}>
                        <p>
                          Com mais de 20 anos de atuação no mercado digital, sou especializado em desenvolvimento web e design de interfaces, unindo performance, usabilidade e identidade visual em cada projeto.
                        </p>
                        {showFullBio && (
                          <>
                            <p>
                              Minha expertise está em transformar ideias complexas em soluções digitais funcionais, escaláveis e visualmente marcantes. Trabalho com foco na harmonia entre código limpo, arquitetura eficiente e design responsivo, sempre priorizando a experiência do usuário e os objetivos do negócio.
                            </p>
                            <p>
                              Do front-end moderno ao back-end robusto, da prototipagem à entrega final, meu compromisso é construir produtos digitais que unem forma, função e tecnologia.
                            </p>
                          </>
                        )}
                      </div>
                      <Button 
                        variant="link" 
                        className="p-0 h-auto mt-2 text-primary font-semibold"
                        onClick={() => setShowFullBio(!showFullBio)}
                      >
                        {showFullBio ? 'Ver menos' : 'Ver tudo'}
                      </Button>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
                      <Badge variant="secondary" className="px-3 py-1">Full Stack Development</Badge>
                      <Badge variant="secondary" className="px-3 py-1">UI/UX Design</Badge>
                      <Badge variant="secondary" className="px-3 py-1">Brand Identity</Badge>
                    </div>

                    {/* Redes Sociais */}
                    <div className="flex gap-3 justify-center md:justify-start">
                      <a 
                        href="https://danielolimpio.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                        title="Website"
                      >
                        <Globe className="w-5 h-5" />
                      </a>
                      <a 
                        href="https://x.com/danielolimpio_" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        title="X (Twitter)"
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </a>
                      <a 
                        href="https://www.linkedin.com/in/danielolimpio-com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        title="LinkedIn"
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                      <a 
                        href="https://www.instagram.com/danielolimpio_com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        title="Instagram"
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                        </svg>
                      </a>
                      <a 
                        href="https://www.facebook.com/danielolimpio.com.br" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        title="Facebook"
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Missão */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Nossa Missão</h2>
                  <p className="text-muted-foreground mb-4">
                    Simplificar a escolha da plataforma ideal de e-commerce, oferecendo 
                    <strong> comparações transparentes, análises detalhadas e informações 
                    atualizadas</strong> sobre as principais soluções do mercado brasileiro.
                  </p>
                  <p className="text-muted-foreground">
                    Acreditamos que todo empreendedor merece acesso a <strong>informações 
                    claras e imparciais</strong> para tomar a melhor decisão para seu negócio, 
                    seja iniciante ou experiente.
                  </p>
                </div>
              </div>
            </div>

            {/* O Que Fazemos */}
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-2xl font-bold mb-8 text-center">O Que Fazemos</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 rounded-lg border bg-card">
                  <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Análises Detalhadas</h3>
                  <p className="text-muted-foreground">
                    Avaliamos cada plataforma com base em critérios objetivos: 
                    custos, recursos, facilidade de uso e suporte.
                  </p>
                </div>

                <div className="p-6 rounded-lg border bg-card">
                  <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Rankings Atualizados</h3>
                  <p className="text-muted-foreground">
                    Mantemos nosso ranking sempre atualizado com as últimas 
                    mudanças em planos, recursos e preços.
                  </p>
                </div>

                <div className="p-6 rounded-lg border bg-card">
                  <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Foco no Empreendedor</h3>
                  <p className="text-muted-foreground">
                    Criado por empreendedores, para empreendedores. 
                    Entendemos suas dores e necessidades reais.
                  </p>
                </div>
              </div>
            </div>

            {/* Por Que Confiar */}
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-2xl font-bold mb-6">Por Que Confiar em Nós?</h2>
              
              <div className="space-y-4">
                <div className="p-6 rounded-lg border bg-card">
                  <h3 className="text-lg font-semibold mb-2">✅ Análises Imparciais</h3>
                  <p className="text-muted-foreground">
                    Não somos ligados a nenhuma plataforma específica. Nossas avaliações 
                    são baseadas em <strong>testes reais, dados verificados e feedback 
                    de usuários</strong>.
                  </p>
                </div>

                <div className="p-6 rounded-lg border bg-card">
                  <h3 className="text-lg font-semibold mb-2">✅ Transparência Total</h3>
                  <p className="text-muted-foreground">
                    Revelamos nossos critérios de avaliação e <strong>metodologia de 
                    ranking</strong>. Você sabe exatamente como cada plataforma é avaliada.
                  </p>
                </div>

                <div className="p-6 rounded-lg border bg-card">
                  <h3 className="text-lg font-semibold mb-2">✅ Informações Completas</h3>
                  <p className="text-muted-foreground">
                    Cobrimos <strong>custos reais, recursos técnicos, integrações, 
                    facilidade de uso</strong> e muito mais. Nada fica de fora.
                  </p>
                </div>

                <div className="p-6 rounded-lg border bg-card">
                  <h3 className="text-lg font-semibold mb-2">✅ Sempre Atualizado</h3>
                  <p className="text-muted-foreground">
                    O mercado de e-commerce muda rapidamente. <strong>Atualizamos 
                    constantemente</strong> nossas informações para refletir as mudanças 
                    em planos, preços e recursos.
                  </p>
                </div>
              </div>
            </div>

            {/* Compromisso */}
            <div className="max-w-4xl mx-auto">
              <div className="p-8 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 border">
                <h2 className="text-2xl font-bold mb-4">Nosso Compromisso com Você</h2>
                <p className="text-muted-foreground mb-4">
                  Estamos comprometidos em fornecer as <strong>informações mais precisas, 
                  atualizadas e úteis</strong> sobre plataformas de e-commerce no Brasil.
                </p>
                <p className="text-muted-foreground">
                  Se você tiver dúvidas, sugestões ou quiser compartilhar sua experiência 
                  com alguma plataforma, entre em contato conosco. Sua opinião nos ajuda 
                  a melhorar continuamente.
                </p>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default About;