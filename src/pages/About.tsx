import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { Target, Users, Award, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <>
      <Helmet>
        <title>Sobre Nós - LojasGrátis | Ranking de Plataformas de E-commerce</title>
        <meta name="description" content="Conheça a LojasGrátis, o guia definitivo para comparar e escolher a melhor plataforma de e-commerce no Brasil. Análises imparciais e detalhadas." />
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