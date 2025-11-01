import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, AlertCircle, Scale } from "lucide-react";

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Termos de Uso - LojasGrátis</title>
        <meta name="description" content="Termos de Uso do LojasGrátis. Conheça as regras e condições para utilizar nosso site de comparação de plataformas de e-commerce." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          <div className="container py-12">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center p-3 rounded-lg bg-primary/10 mb-4">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Termos de <span className="text-primary">Uso</span>
                </h1>
                <p className="text-muted-foreground">
                  Última atualização: {new Date().toLocaleDateString('pt-BR')}
                </p>
              </div>

              {/* Introdução */}
              <div className="mb-8">
                <p className="text-lg text-muted-foreground">
                  Bem-vindo ao <strong>LojasGrátis</strong>! Estes Termos de Uso regulam o acesso 
                  e uso de nosso site. Ao acessar ou utilizar nossos serviços, você concorda com 
                  estes termos. Por favor, leia-os atentamente.
                </p>
              </div>

              {/* Seções */}
              <div className="space-y-8">
                {/* Aceitação */}
                <section className="p-6 rounded-lg border bg-card">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Scale className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold">1. Aceitação dos Termos</h2>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    Ao acessar e usar o site <strong>LojasGrátis</strong>, você concorda em cumprir 
                    e estar vinculado a estes Termos de Uso e à nossa Política de Privacidade.
                  </p>
                  
                  <p className="text-muted-foreground">
                    Se você não concordar com qualquer parte destes termos, <strong>não deve usar 
                    nosso site</strong>.
                  </p>
                </section>

                {/* Descrição do Serviço */}
                <section className="p-6 rounded-lg border bg-card">
                  <h2 className="text-2xl font-bold mb-4">2. Descrição do Serviço</h2>
                  
                  <p className="text-muted-foreground mb-4">
                    O <strong>LojasGrátis</strong> é um site de comparação e análise de plataformas 
                    de e-commerce disponíveis no Brasil. Oferecemos:
                  </p>
                  
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Rankings e comparações de plataformas de e-commerce</li>
                    <li>Análises detalhadas de recursos, preços e funcionalidades</li>
                    <li>Informações sobre planos gratuitos e pagos</li>
                    <li>Conteúdo educativo sobre criação de lojas virtuais</li>
                  </ul>
                </section>

                {/* Uso Permitido */}
                <section className="p-6 rounded-lg border bg-card">
                  <h2 className="text-2xl font-bold mb-4">3. Uso Permitido</h2>
                  
                  <h3 className="text-lg font-semibold mb-3 text-green-600">✅ Você PODE:</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                    <li>Navegar e consultar informações do site gratuitamente</li>
                    <li>Compartilhar links do site em redes sociais</li>
                    <li>Entrar em contato conosco com dúvidas e sugestões</li>
                    <li>Citar nosso conteúdo com devida atribuição e link de retorno</li>
                  </ul>

                  <h3 className="text-lg font-semibold mb-3 text-red-600">❌ Você NÃO PODE:</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Copiar, reproduzir ou distribuir nosso conteúdo sem autorização</li>
                    <li>Usar o site para fins ilegais ou não autorizados</li>
                    <li>Tentar hackear, prejudicar ou sobrecarregar nossos servidores</li>
                    <li>Coletar dados de usuários ou conteúdo de forma automatizada (scraping)</li>
                    <li>Criar sites ou aplicativos que copiem nosso design ou funcionalidade</li>
                    <li>Utilizar o site para transmitir vírus, malware ou código malicioso</li>
                  </ul>
                </section>

                {/* Propriedade Intelectual */}
                <section className="p-6 rounded-lg border bg-card">
                  <h2 className="text-2xl font-bold mb-4">4. Propriedade Intelectual</h2>
                  
                  <p className="text-muted-foreground mb-4">
                    Todo o conteúdo do site <strong>LojasGrátis</strong> — incluindo textos, gráficos, 
                    logotipos, ícones, imagens, áudios, vídeos, design, código-fonte e software — 
                    é protegido por <strong>direitos autorais e propriedade intelectual</strong>.
                  </p>
                  
                  <div className="p-4 rounded-lg bg-muted/50">
                    <p className="text-sm text-muted-foreground">
                      📝 <strong>Logotipos de terceiros:</strong> Os logotipos e marcas das plataformas 
                      de e-commerce exibidas no site pertencem aos seus respectivos proprietários e são 
                      utilizados apenas para fins informativos e de identificação.
                    </p>
                  </div>
                </section>

                {/* Isenção de Responsabilidade */}
                <section className="p-6 rounded-lg border bg-card">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <AlertCircle className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold">5. Isenção de Responsabilidade</h2>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-3">5.1 Precisão das Informações</h3>
                  <p className="text-muted-foreground mb-4">
                    Embora nos esforcemos para fornecer informações precisas e atualizadas, 
                    <strong> não garantimos a precisão, completude ou atualidade</strong> de todo 
                    o conteúdo. Preços, recursos e condições das plataformas podem mudar sem aviso prévio.
                  </p>

                  <h3 className="text-lg font-semibold mb-3">5.2 Links Externos</h3>
                  <p className="text-muted-foreground mb-4">
                    Nosso site pode conter links para sites de terceiros. <strong>Não somos responsáveis</strong> 
                    pelo conteúdo, políticas de privacidade ou práticas desses sites externos.
                  </p>

                  <h3 className="text-lg font-semibold mb-3">5.3 Decisões de Negócios</h3>
                  <p className="text-muted-foreground">
                    As informações fornecidas são apenas para fins informativos e não constituem 
                    aconselhamento profissional. <strong>Você é responsável por suas próprias 
                    decisões de negócios</strong> ao escolher uma plataforma de e-commerce.
                  </p>
                </section>

                {/* Links de Afiliados */}
                <section className="p-6 rounded-lg border bg-card">
                  <h2 className="text-2xl font-bold mb-4">6. Links de Afiliados e Publicidade</h2>
                  
                  <p className="text-muted-foreground mb-4">
                    O <strong>LojasGrátis</strong> pode utilizar:
                  </p>
                  
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                    <li><strong>Links de afiliados:</strong> Podemos receber comissões quando você 
                    clica em certos links e faz uma compra ou assina um serviço</li>
                    <li><strong>Google AdSense:</strong> Exibimos anúncios que podem ser personalizados 
                    com base em seus interesses</li>
                  </ul>

                  <div className="p-4 rounded-lg bg-primary/10">
                    <p className="text-sm text-muted-foreground">
                      💡 <strong>Transparência:</strong> O uso de links de afiliados não afeta nosso 
                      compromisso com análises imparciais e honestas. Nosso ranking é baseado em 
                      critérios objetivos, não em comissões.
                    </p>
                  </div>
                </section>

                {/* Limitação de Responsabilidade */}
                <section className="p-6 rounded-lg border bg-card">
                  <h2 className="text-2xl font-bold mb-4">7. Limitação de Responsabilidade</h2>
                  
                  <p className="text-muted-foreground mb-4">
                    Na extensão máxima permitida pela lei aplicável, o <strong>LojasGrátis</strong> 
                    não será responsável por:
                  </p>
                  
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Danos diretos, indiretos, incidentais ou consequenciais</li>
                    <li>Perda de lucros, receitas ou dados</li>
                    <li>Interrupções ou erros no funcionamento do site</li>
                    <li>Ações ou omissões de plataformas de terceiros</li>
                    <li>Decisões tomadas com base em informações do site</li>
                  </ul>
                </section>

                {/* Modificações */}
                <section className="p-6 rounded-lg border bg-card">
                  <h2 className="text-2xl font-bold mb-4">8. Modificações nos Termos</h2>
                  
                  <p className="text-muted-foreground mb-4">
                    Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. 
                    As alterações entrarão em vigor imediatamente após a publicação no site.
                  </p>
                  
                  <p className="text-muted-foreground">
                    O uso continuado do site após alterações constitui sua aceitação dos novos termos.
                  </p>
                </section>

                {/* Lei Aplicável */}
                <section className="p-6 rounded-lg border bg-card">
                  <h2 className="text-2xl font-bold mb-4">9. Lei Aplicável</h2>
                  
                  <p className="text-muted-foreground">
                    Estes Termos de Uso são regidos pelas <strong>leis da República Federativa do Brasil</strong>. 
                    Quaisquer disputas serão submetidas à jurisdição exclusiva dos tribunais brasileiros.
                  </p>
                </section>

                {/* Contato */}
                <section className="p-6 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 border">
                  <h2 className="text-2xl font-bold mb-4">10. Contato</h2>
                  
                  <p className="text-muted-foreground mb-4">
                    Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco 
                    através da nossa <strong>página de contato</strong>.
                  </p>
                  
                  <div className="mt-4 p-4 rounded-lg bg-muted">
                    <p className="text-sm text-muted-foreground">
                      <strong>LojasGrátis</strong><br />
                      Site de comparação de plataformas de e-commerce<br />
                      Brasil • 2024
                    </p>
                  </div>
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