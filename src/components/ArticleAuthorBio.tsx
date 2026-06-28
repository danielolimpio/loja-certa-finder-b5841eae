import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Award, Mail } from "lucide-react";

interface ArticleAuthorBioProps {
  name?: string;
  role?: string;
}

const ArticleAuthorBio = ({
  name = "Equipe Lojas Grátis",
  role = "Especialistas em E-commerce",
}: ArticleAuthorBioProps) => {
  return (
    <Card className="bg-gradient-to-br from-muted/40 via-background to-muted/20 border-border/60 mt-12">
      <CardContent className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
            <span className="text-3xl md:text-4xl font-bold text-primary">LG</span>
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <h3 className="text-xl font-bold">{name}</h3>
              <Badge variant="secondary" className="text-xs">
                <Award className="w-3 h-3 mr-1" />
                Autor verificado
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-3">{role}</p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              A equipe Lojas Grátis é formada por jornalistas, analistas de e-commerce e
              empreendedores digitais que testam, comparam e revisam plataformas de loja virtual
              no Brasil há mais de 5 anos. Cada artigo passa por checagem de fontes oficiais
              (Banco Central, ABComm, Sebrae) e atualização periódica para refletir mudanças do
              mercado.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-primary" />
                +120 artigos publicados
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-primary" />
                contato@lojasgratis.com.br
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArticleAuthorBio;
