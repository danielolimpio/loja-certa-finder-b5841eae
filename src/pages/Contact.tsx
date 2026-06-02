import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { Mail, MessageSquare, Clock, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contato Lojas Grátis: Tire Suas Dúvidas sobre Loja Virtual</title>
        <meta name="description" content="Fale com a equipe Lojas Grátis. Tire dúvidas sobre qual plataforma escolher, peça uma análise personalizada ou sugira uma plataforma — respondemos rápido." />
        <meta name="keywords" content="contato lojas grátis, ajuda escolher plataforma ecommerce, consultoria loja virtual grátis, fale conosco lojas grátis" />
        <link rel="canonical" href="https://lojasgratis.com.br/contato/" />
        <meta property="og:title" content="Contato Lojas Grátis: Tire Suas Dúvidas sobre Loja Virtual" />
        <meta property="og:description" content="Fale com a equipe Lojas Grátis e descubra a melhor plataforma para sua loja virtual." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lojasgratis.com.br/contato/" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          <div className="container py-12">
            <BreadcrumbNav items={[{ label: "Contato" }]} />
            {/* Hero Section */}
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Fale <span className="text-primary">Conosco</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Tem alguma dúvida, sugestão ou quer compartilhar sua experiência? 
                Estamos aqui para ajudar!
              </p>
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
              {/* Formulário de Contato */}
              <div className="order-2 md:order-1">
                <div className="p-8 rounded-lg border bg-card">
                  <h2 className="text-2xl font-bold mb-6">Envie sua Mensagem</h2>
                  
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="name">Nome Completo</Label>
                      <Input 
                        id="name" 
                        type="text" 
                        placeholder="Seu nome" 
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">E-mail</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="seu@email.com" 
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject">Assunto</Label>
                      <Input 
                        id="subject" 
                        type="text" 
                        placeholder="Sobre o que você quer falar?" 
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Mensagem</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Escreva sua mensagem aqui..."
                        className="mt-2 min-h-[150px]"
                      />
                    </div>

                    <Button className="w-full" size="lg">
                      <Mail className="h-4 w-4 mr-2" />
                      Enviar Mensagem
                    </Button>
                  </form>
                </div>
              </div>

              {/* Informações de Contato */}
              <div className="order-1 md:order-2 space-y-6">
                <div className="p-6 rounded-lg border bg-card">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <MessageSquare className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Dúvidas Gerais</h3>
                      <p className="text-muted-foreground">
                        Tem dúvidas sobre como usar nosso site ou sobre alguma 
                        plataforma específica? Envie sua pergunta pelo formulário.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-lg border bg-card">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <HelpCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Sugestões</h3>
                      <p className="text-muted-foreground">
                        Quer sugerir uma nova plataforma para análise ou melhorias 
                        para o site? Adoraríamos ouvir sua opinião!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-lg border bg-card">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Parcerias</h3>
                      <p className="text-muted-foreground">
                        Interessado em parcerias ou colaborações? Entre em contato 
                        e vamos conversar sobre oportunidades.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-lg border bg-card">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Tempo de Resposta</h3>
                      <p className="text-muted-foreground">
                        Respondemos todas as mensagens em até <strong>48 horas úteis</strong>. 
                        Sua mensagem é importante para nós!
                      </p>
                    </div>
                  </div>
                </div>

                {/* FAQ Rápido */}
                <div className="p-6 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 border">
                  <h3 className="text-lg font-semibold mb-3">💡 Perguntas Frequentes</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Como vocês avaliam as plataformas?</strong><br/>
                    Baseamos em testes reais, dados oficiais e feedback de usuários.</li>
                    <li>• <strong>O ranking é pago?</strong><br/>
                    Não! Nossas análises são 100% imparciais e independentes.</li>
                    <li>• <strong>Posso sugerir uma plataforma?</strong><br/>
                    Claro! Use o formulário para enviar sua sugestão.</li>
                  </ul>
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

export default Contact;