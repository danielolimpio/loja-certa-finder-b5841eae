import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, Database } from "lucide-react";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Política de Privacidade - LojasGrátis</title>
        <meta name="description" content="Política de Privacidade do LojasGrátis. Saiba como coletamos, usamos e protegemos seus dados pessoais em conformidade com a LGPD." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          <div className="container py-12">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center p-3 rounded-lg bg-primary/10 mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Política de <span className="text-primary">Privacidade</span>
                </h1>
                <p className="text-muted-foreground">
                  Última atualização: {new Date().toLocaleDateString('pt-BR')}
                </p>
              </div>

              {/* Introdução */}
              <div className="prose prose-gray max-w-none mb-8">
                <p className="text-lg text-muted-foreground">
                  A <strong>LojasGrátis</strong> respeita sua privacidade e está comprometida 
                  em proteger seus dados pessoais. Esta Política de Privacidade descreve como 
                  coletamos, usamos, armazenamos e protegemos suas informações, em conformidade 
                  com a <strong>Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018)</strong>.
                </p>
              </div>

              {/* Seções */}
              <div className="space-y-8">
                {/* Coleta de Dados */}
                <section className="p-6 rounded-lg border bg-card">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Database className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold">1. Dados que Coletamos</h2>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">1.1 Dados Fornecidos por Você</h3>
                  <p className="text-muted-foreground mb-4">
                    Coletamos informações que você nos fornece voluntariamente:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                    <li><strong>Nome e e-mail</strong> ao entrar em contato conosco</li>
                    <li><strong>Mensagens</strong> enviadas através de formulários</li>
                    <li><strong>Comentários e feedback</strong> sobre plataformas</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3">1.2 Dados Coletados Automaticamente</h3>
                  <p className="text-muted-foreground mb-4">
                    Ao usar nosso site, coletamos automaticamente:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li><strong>Dados de navegação:</strong> páginas visitadas, tempo de permanência, cliques</li>
                    <li><strong>Informações técnicas:</strong> endereço IP, tipo de navegador, dispositivo, sistema operacional</li>
                    <li><strong>Cookies e tecnologias similares</strong> para melhorar sua experiência</li>
                  </ul>
                </section>

                {/* Uso dos Dados */}
                <section className="p-6 rounded-lg border bg-card">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Eye className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold">2. Como Usamos Seus Dados</h2>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    Utilizamos seus dados pessoais para:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>✅ <strong>Responder suas dúvidas</strong> e solicitações de contato</li>
                    <li>✅ <strong>Melhorar nosso conteúdo</strong> com base em seus interesses</li>
                    <li>✅ <strong>Analisar o uso do site</strong> para aprimorar a experiência do usuário</li>
                    <li>✅ <strong>Enviar atualizações</strong> sobre novos rankings e análises (apenas se você consentir)</li>
                    <li>✅ <strong>Cumprir obrigações legais</strong> e regulatórias</li>
                    <li>✅ <strong>Prevenir fraudes</strong> e garantir a segurança do site</li>
                  </ul>
                </section>

                {/* Compartilhamento */}
                <section className="p-6 rounded-lg border bg-card">
                  <h2 className="text-2xl font-bold mb-4">3. Compartilhamento de Dados</h2>
                  
                  <p className="text-muted-foreground mb-4">
                    <strong>Não vendemos seus dados pessoais.</strong> Podemos compartilhar informações apenas nas seguintes situações:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li><strong>Prestadores de serviços:</strong> ferramentas de análise (Google Analytics), hospedagem, e-mail marketing</li>
                    <li><strong>Exigências legais:</strong> quando necessário para cumprir leis, regulamentos ou ordens judiciais</li>
                    <li><strong>Proteção de direitos:</strong> para proteger nossos direitos, propriedade ou segurança</li>
                  </ul>
                </section>

                {/* Segurança */}
                <section className="p-6 rounded-lg border bg-card">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Lock className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold">4. Segurança dos Dados</h2>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>🔒 <strong>Criptografia SSL/TLS</strong> em todas as transmissões de dados</li>
                    <li>🔒 <strong>Controle de acesso restrito</strong> aos dados pessoais</li>
                    <li>🔒 <strong>Backups regulares</strong> para prevenir perda de dados</li>
                    <li>🔒 <strong>Monitoramento contínuo</strong> de ameaças e vulnerabilidades</li>
                  </ul>
                </section>

                {/* Seus Direitos */}
                <section className="p-6 rounded-lg border bg-card">
                  <h2 className="text-2xl font-bold mb-4">5. Seus Direitos (LGPD)</h2>
                  
                  <p className="text-muted-foreground mb-4">
                    De acordo com a LGPD, você tem direito a:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-muted/50">
                      <h3 className="font-semibold mb-2">✓ Confirmação e Acesso</h3>
                      <p className="text-sm text-muted-foreground">
                        Confirmar se tratamos seus dados e acessá-los
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50">
                      <h3 className="font-semibold mb-2">✓ Correção</h3>
                      <p className="text-sm text-muted-foreground">
                        Corrigir dados incompletos ou desatualizados
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50">
                      <h3 className="font-semibold mb-2">✓ Exclusão</h3>
                      <p className="text-sm text-muted-foreground">
                        Solicitar a exclusão de seus dados pessoais
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50">
                      <h3 className="font-semibold mb-2">✓ Portabilidade</h3>
                      <p className="text-sm text-muted-foreground">
                        Receber seus dados em formato estruturado
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mt-4">
                    Para exercer seus direitos, entre em contato através da nossa página de contato.
                  </p>
                </section>

                {/* Retenção de Dados */}
                <section className="p-6 rounded-lg border bg-card">
                  <h2 className="text-2xl font-bold mb-4">6. Retenção de Dados</h2>
                  
                  <p className="text-muted-foreground">
                    Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir as 
                    finalidades descritas nesta política ou conforme exigido por lei. Após esse 
                    período, seus dados são excluídos ou anonimizados de forma segura.
                  </p>
                </section>

                {/* Alterações */}
                <section className="p-6 rounded-lg border bg-card">
                  <h2 className="text-2xl font-bold mb-4">7. Alterações nesta Política</h2>
                  
                  <p className="text-muted-foreground">
                    Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos 
                    você sobre mudanças significativas publicando a nova política nesta página 
                    com a data de atualização revisada.
                  </p>
                </section>

                {/* Contato */}
                <section className="p-6 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 border">
                  <h2 className="text-2xl font-bold mb-4">8. Contato</h2>
                  
                  <p className="text-muted-foreground mb-4">
                    Se você tiver dúvidas sobre esta Política de Privacidade ou sobre o tratamento 
                    de seus dados pessoais, entre em contato conosco através da nossa 
                    <strong> página de contato</strong>.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>LojasGrátis</strong> - Comprometidos com sua privacidade desde 2024.
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

export default Privacy;