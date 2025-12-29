import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { Eye, DollarSign, CheckCircle, Target } from "lucide-react";

const Transparency = () => {
  return (
    <>
      <Helmet>
        <title>Política de Transparência - Lojas Grátis</title>
        <meta name="description" content="Conheça nossa metodologia de análise, critérios de ranking e como mantemos a transparência." />
        <link rel="canonical" href="https://lojasgratis.com.br/transparencia" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          <div className="container py-12">
            <BreadcrumbNav items={[{ label: "Transparência" }]} />
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center p-3 rounded-lg bg-primary/10 mb-4">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Política de <span className="text-primary">Transparência</span>
                </h1>
                <p className="text-muted-foreground">
                  Última atualização: {new Date().toLocaleDateString('pt-BR')}
                </p>
              </div>

              {/* Introdução */}
              <div className="mb-8">
                <p className="text-lg text-muted-foreground">
                  No <strong>LojasGrátis</strong>, acreditamos que a transparência é fundamental 
                  para construir confiança. Esta política explica nossa metodologia de análise, 
                  critérios de ranking, fontes de receita e compromisso com a imparcialidade.
                </p>
              </div>

              {/* Seções */}
              <div className="space-y-8">
                {/* Nossa Missão */}
                <section className="p-6 rounded-lg border bg-card">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Target className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold">1. Nossa Missão</h2>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    Nosso objetivo é <strong>ajudar empreendedores brasileiros a escolher a melhor 
                    plataforma de e-commerce</strong> para suas necessidades, fornecendo informações 
                    claras, imparciais e atualizadas.
                  </p>
                  
                  <div className="p-4 rounded-lg bg-primary/10">
                    <p className="text-sm text-muted-foreground">
                      💡 <strong>Compromisso:</strong> Nossas análises são baseadas em dados objetivos, 
                      testes reais e feedback de usuários — não em interesses financeiros.
                    </p>
                  </div>
                </section>

                {/* Metodologia de Ranking */}
                <section className="p-6 rounded-lg border bg-card">
                  <h2 className="text-2xl font-bold mb-6">2. Metodologia de Ranking</h2>
                  
                  <p className="text-muted-foreground mb-4">
                    Nosso ranking é construído com base em <strong>critérios objetivos e mensuráveis</strong>:
                  </p>

                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-muted/50">
                      <h3 className="font-semibold mb-2">📊 Custo-Benefício (25%)</h3>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Planos gratuitos disponíveis</li>
                        <li>• Preços de planos pagos</li>
                        <li>• Taxas de transação</li>
                        <li>• Custos ocultos (domínio, SSL, apps)</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-lg bg-muted/50">
                      <h3 className="font-semibold mb-2">⚙️ Recursos e Funcionalidades (25%)</h3>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Número de produtos permitidos</li>
                        <li>• Temas e personalização</li>
                        <li>• Integrações disponíveis (Pix, correios, ERP)</li>
                        <li>• Apps e extensões</li>
                        <li>• Checkout transparente</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-lg bg-muted/50">
                      <h3 className="font-semibold mb-2">🚀 Facilidade de Uso (20%)</h3>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Curva de aprendizado</li>
                        <li>• Interface intuitiva</li>
                        <li>• Tempo médio para montar a loja</li>
                        <li>• Documentação e tutoriais</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-lg bg-muted/50">
                      <h3 className="font-semibold mb-2">💳 Pagamentos e Recebimento (15%)</h3>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Métodos de pagamento aceitos</li>
                        <li>• Prazo de repasse das vendas</li>
                        <li>• Taxas de intermediação</li>
                        <li>• Segurança de transações</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-lg bg-muted/50">
                      <h3 className="font-semibold mb-2">🛟 Suporte e Comunidade (10%)</h3>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Canais de atendimento disponíveis</li>
                        <li>• Qualidade do suporte técnico</li>
                        <li>• Fóruns e comunidade ativa</li>
                        <li>• Documentação técnica</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-lg bg-muted/50">
                      <h3 className="font-semibold mb-2">📈 Performance e Confiabilidade (5%)</h3>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Velocidade de carregamento</li>
                        <li>• Uptime e estabilidade</li>
                        <li>• Certificado SSL incluso</li>
                        <li>• Segurança contra fraudes</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Fontes de Dados */}
                <section className="p-6 rounded-lg border bg-card">
                  <h2 className="text-2xl font-bold mb-4">3. Fontes de Dados</h2>
                  
                  <p className="text-muted-foreground mb-4">
                    Nossas análises são baseadas em:
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-semibold">Testes Práticos</p>
                        <p className="text-sm text-muted-foreground">
                          Criamos lojas reais em cada plataforma para testar funcionalidades
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-semibold">Dados Oficiais</p>
                        <p className="text-sm text-muted-foreground">
                          Informações de preços e recursos dos sites oficiais das plataformas
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-semibold">Feedback de Usuários</p>
                        <p className="text-sm text-muted-foreground">
                          Avaliações e experiências compartilhadas por empreendedores reais
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-semibold">Análise de Mercado</p>
                        <p className="text-sm text-muted-foreground">
                          Pesquisas de mercado e tendências do setor de e-commerce
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Fontes de Receita */}
                <section className="p-6 rounded-lg border bg-card">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <DollarSign className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold">4. Como Ganhamos Dinheiro</h2>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    Somos transparentes sobre nossas fontes de receita:
                  </p>

                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-muted/50">
                      <h3 className="font-semibold mb-2">🔗 Links de Afiliados</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Quando você clica em um link e se inscreve em uma plataforma, podemos 
                        receber uma pequena comissão. Isso <strong>não afeta o preço que você 
                        paga</strong> e nos ajuda a manter o site gratuito.
                      </p>
                      <p className="text-xs text-muted-foreground italic">
                        ⚠️ A presença de links de afiliados NÃO influencia nosso ranking ou análises.
                      </p>
                    </div>

                    <div className="p-4 rounded-lg bg-muted/50">
                      <h3 className="font-semibold mb-2">📢 Google AdSense</h3>
                      <p className="text-sm text-muted-foreground">
                        Exibimos anúncios através do Google AdSense. Esses anúncios são claramente 
                        identificados e separados do nosso conteúdo editorial.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 p-4 rounded-lg bg-primary/10">
                    <p className="text-sm text-muted-foreground">
                      <strong>Garantia de Imparcialidade:</strong> Nossas avaliações são baseadas 
                      exclusivamente em critérios objetivos. Uma plataforma não recebe uma posição 
                      melhor no ranking por pagar mais ou ter um link de afiliado.
                    </p>
                  </div>
                </section>

                {/* Atualização de Informações */}
                <section className="p-6 rounded-lg border bg-card">
                  <h2 className="text-2xl font-bold mb-4">5. Atualização de Informações</h2>
                  
                  <p className="text-muted-foreground mb-4">
                    O mercado de e-commerce muda rapidamente. Nosso compromisso:
                  </p>
                  
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li><strong>Revisão mensal</strong> de preços e recursos principais</li>
                    <li><strong>Atualização imediata</strong> quando uma plataforma lança novos recursos</li>
                    <li><strong>Monitoramento contínuo</strong> de mudanças em planos e condições</li>
                    <li><strong>Indicação de data</strong> da última atualização em cada análise</li>
                  </ul>
                </section>

                {/* Conflitos de Interesse */}
                <section className="p-6 rounded-lg border bg-card">
                  <h2 className="text-2xl font-bold mb-4">6. Declaração de Conflitos de Interesse</h2>
                  
                  <div className="space-y-3">
                    <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                      <p className="text-sm text-muted-foreground">
                        ✅ <strong>Independência Editorial:</strong> Não somos propriedade de nenhuma 
                        plataforma de e-commerce e não recebemos pagamentos para alterar rankings.
                      </p>
                    </div>

                    <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                      <p className="text-sm text-muted-foreground">
                        ✅ <strong>Sem Conteúdo Patrocinado:</strong> Todas as análises são criadas 
                        de forma independente. Conteúdo patrocinado (se houver no futuro) será 
                        claramente identificado.
                      </p>
                    </div>

                    <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                      <p className="text-sm text-muted-foreground">
                        ✅ <strong>Transparência Total:</strong> Links de afiliados são claramente 
                        identificados e não afetam nossas recomendações.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Feedback */}
                <section className="p-6 rounded-lg border bg-card">
                  <h2 className="text-2xl font-bold mb-4">7. Feedback e Correções</h2>
                  
                  <p className="text-muted-foreground mb-4">
                    Se você identificar <strong>informações desatualizadas ou incorretas</strong>, 
                    por favor, entre em contato conosco imediatamente. Revisaremos e corrigiremos 
                    o mais rápido possível.
                  </p>
                  
                  <p className="text-muted-foreground">
                    Seu feedback é essencial para mantermos a qualidade e precisão de nossas análises.
                  </p>
                </section>

                {/* Compromisso */}
                <section className="p-6 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 border">
                  <h2 className="text-2xl font-bold mb-4">8. Nosso Compromisso com Você</h2>
                  
                  <p className="text-muted-foreground mb-4">
                    No <strong>LojasGrátis</strong>, estamos comprometidos em:
                  </p>
                  
                  <ul className="text-muted-foreground space-y-2">
                    <li>🎯 <strong>Transparência total</strong> sobre nossa metodologia e fontes de receita</li>
                    <li>🎯 <strong>Análises imparciais</strong> baseadas em dados objetivos</li>
                    <li>🎯 <strong>Informações atualizadas</strong> para ajudá-lo a tomar a melhor decisão</li>
                    <li>🎯 <strong>Honestidade</strong> sobre vantagens e desvantagens de cada plataforma</li>
                  </ul>

                  <p className="text-muted-foreground mt-4">
                    Se você tiver dúvidas sobre nossa política de transparência, entre em contato 
                    conosco através da nossa <strong>página de contato</strong>.
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

export default Transparency;