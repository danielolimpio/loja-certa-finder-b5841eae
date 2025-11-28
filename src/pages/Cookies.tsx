import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { Cookie, Settings, BarChart, Shield } from "lucide-react";

const Cookies = () => {
  return (
    <>
      <Helmet>
        <title>Política de Cookies - LojasGrátis</title>
        <meta name="description" content="Saiba como o LojasGrátis utiliza cookies e tecnologias similares para melhorar sua experiência de navegação." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          <div className="container py-12">
            <BreadcrumbNav items={[{ label: "Cookies" }]} />
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center p-3 rounded-lg bg-primary/10 mb-4">
                  <Cookie className="h-8 w-8 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Política de <span className="text-primary">Cookies</span>
                </h1>
                <p className="text-muted-foreground">
                  Última atualização: {new Date().toLocaleDateString('pt-BR')}
                </p>
              </div>

              {/* Introdução */}
              <div className="mb-8">
                <p className="text-lg text-muted-foreground">
                  O <strong>LojasGrátis</strong> utiliza cookies e tecnologias similares para 
                  melhorar sua experiência de navegação, analisar o tráfego do site e personalizar 
                  conteúdo. Esta política explica o que são cookies, como os utilizamos e como 
                  você pode controlá-los.
                </p>
              </div>

              {/* Seções */}
              <div className="space-y-8">
                {/* O que são Cookies */}
                <section className="p-6 rounded-lg border bg-card">
                  <h2 className="text-2xl font-bold mb-4">1. O Que São Cookies?</h2>
                  
                  <p className="text-muted-foreground mb-4">
                    Cookies são pequenos arquivos de texto armazenados no seu dispositivo (computador, 
                    tablet ou smartphone) quando você visita um site. Eles são amplamente utilizados 
                    para fazer os sites funcionarem de forma mais eficiente e fornecer informações 
                    aos proprietários do site.
                  </p>
                  
                  <div className="p-4 rounded-lg bg-muted/50">
                    <p className="text-sm text-muted-foreground">
                      💡 <strong>Os cookies não são vírus</strong> e não podem executar programas 
                      ou danificar seu dispositivo. Eles simplesmente armazenam informações sobre 
                      sua navegação.
                    </p>
                  </div>
                </section>

                {/* Tipos de Cookies */}
                <section className="p-6 rounded-lg border bg-card">
                  <h2 className="text-2xl font-bold mb-6">2. Tipos de Cookies que Utilizamos</h2>
                  
                  <div className="space-y-4">
                    {/* Essenciais */}
                    <div className="p-4 rounded-lg bg-muted/50">
                      <div className="flex items-start gap-3 mb-2">
                        <Shield className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <h3 className="text-lg font-semibold">Cookies Essenciais</h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            Necessários para o funcionamento básico do site.
                          </p>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Segurança e proteção contra fraudes</li>
                            <li>• Manutenção de sessões de navegação</li>
                            <li>• Funcionalidades básicas do site</li>
                          </ul>
                          <p className="text-xs text-muted-foreground mt-2">
                            <strong>Duração:</strong> Sessão ou até 1 ano
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Analíticos */}
                    <div className="p-4 rounded-lg bg-muted/50">
                      <div className="flex items-start gap-3 mb-2">
                        <BarChart className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <h3 className="text-lg font-semibold">Cookies Analíticos</h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            Ajudam-nos a entender como os visitantes interagem com o site.
                          </p>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Google Analytics (dados de navegação anônimos)</li>
                            <li>• Páginas mais visitadas</li>
                            <li>• Tempo de permanência no site</li>
                            <li>• Origem do tráfego</li>
                          </ul>
                          <p className="text-xs text-muted-foreground mt-2">
                            <strong>Duração:</strong> Até 2 anos
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Funcionalidade */}
                    <div className="p-4 rounded-lg bg-muted/50">
                      <div className="flex items-start gap-3 mb-2">
                        <Settings className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <h3 className="text-lg font-semibold">Cookies de Funcionalidade</h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            Permitem que o site lembre suas preferências.
                          </p>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Preferências de idioma</li>
                            <li>• Tema (claro/escuro)</li>
                            <li>• Configurações de exibição</li>
                          </ul>
                          <p className="text-xs text-muted-foreground mt-2">
                            <strong>Duração:</strong> Até 1 ano
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Publicidade */}
                    <div className="p-4 rounded-lg bg-muted/50">
                      <div className="flex items-start gap-3 mb-2">
                        <Cookie className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <h3 className="text-lg font-semibold">Cookies de Publicidade</h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            Utilizados para exibir anúncios relevantes.
                          </p>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Google AdSense (anúncios personalizados)</li>
                            <li>• Medição de eficácia de campanhas</li>
                            <li>• Limitação de frequência de anúncios</li>
                          </ul>
                          <p className="text-xs text-muted-foreground mt-2">
                            <strong>Duração:</strong> Até 2 anos
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Cookies de Terceiros */}
                <section className="p-6 rounded-lg border bg-card">
                  <h2 className="text-2xl font-bold mb-4">3. Cookies de Terceiros</h2>
                  
                  <p className="text-muted-foreground mb-4">
                    Utilizamos serviços de terceiros que podem definir cookies no seu dispositivo:
                  </p>
                  
                  <div className="space-y-3">
                    <div className="p-4 rounded-lg bg-muted/50">
                      <h3 className="font-semibold mb-2">🔹 Google Analytics</h3>
                      <p className="text-sm text-muted-foreground">
                        Análise de tráfego e comportamento do usuário (dados anônimos).
                      </p>
                      <a 
                        href="https://policies.google.com/privacy" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline"
                      >
                        Política de Privacidade do Google →
                      </a>
                    </div>

                    <div className="p-4 rounded-lg bg-muted/50">
                      <h3 className="font-semibold mb-2">🔹 Google AdSense</h3>
                      <p className="text-sm text-muted-foreground">
                        Exibição de anúncios relevantes e medição de desempenho.
                      </p>
                      <a 
                        href="https://policies.google.com/technologies/ads" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline"
                      >
                        Como o Google usa cookies em publicidade →
                      </a>
                    </div>
                  </div>
                </section>

                {/* Gerenciar Cookies */}
                <section className="p-6 rounded-lg border bg-card">
                  <h2 className="text-2xl font-bold mb-4">4. Como Gerenciar Cookies</h2>
                  
                  <h3 className="text-lg font-semibold mb-3">Configurações do Navegador</h3>
                  <p className="text-muted-foreground mb-4">
                    Você pode controlar e/ou excluir cookies através das configurações do seu navegador:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-3 mb-6">
                    <div className="p-3 rounded-lg bg-muted/50">
                      <p className="font-semibold text-sm mb-1">Google Chrome</p>
                      <p className="text-xs text-muted-foreground">
                        Configurações → Privacidade e segurança → Cookies
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-muted/50">
                      <p className="font-semibold text-sm mb-1">Firefox</p>
                      <p className="text-xs text-muted-foreground">
                        Opções → Privacidade e segurança
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-muted/50">
                      <p className="font-semibold text-sm mb-1">Safari</p>
                      <p className="text-xs text-muted-foreground">
                        Preferências → Privacidade
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-muted/50">
                      <p className="font-semibold text-sm mb-1">Edge</p>
                      <p className="text-xs text-muted-foreground">
                        Configurações → Cookies e permissões
                      </p>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold mb-3">Desativar Anúncios Personalizados</h3>
                  <p className="text-muted-foreground mb-2">
                    Para desativar anúncios personalizados do Google:
                  </p>
                  <a 
                    href="https://adssettings.google.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-2"
                  >
                    Configurações de anúncios do Google →
                  </a>

                  <div className="mt-4 p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                    <p className="text-sm text-muted-foreground">
                      ⚠️ <strong>Atenção:</strong> Desabilitar cookies pode afetar a funcionalidade 
                      do site e limitar sua experiência de navegação.
                    </p>
                  </div>
                </section>

                {/* Atualizações */}
                <section className="p-6 rounded-lg border bg-card">
                  <h2 className="text-2xl font-bold mb-4">5. Atualizações desta Política</h2>
                  
                  <p className="text-muted-foreground">
                    Podemos atualizar esta Política de Cookies periodicamente para refletir mudanças 
                    em nossas práticas ou por razões operacionais, legais ou regulatórias. 
                    Recomendamos que você revise esta página regularmente.
                  </p>
                </section>

                {/* Contato */}
                <section className="p-6 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 border">
                  <h2 className="text-2xl font-bold mb-4">6. Dúvidas sobre Cookies?</h2>
                  
                  <p className="text-muted-foreground">
                    Se você tiver dúvidas sobre o uso de cookies no LojasGrátis, entre em 
                    contato conosco através da nossa <strong>página de contato</strong>.
                  </p>
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