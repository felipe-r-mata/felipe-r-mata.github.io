import { useState } from "react";
import { BarChart3, Database, FolderKanban, TrendingUp, ChevronDown } from "lucide-react";

const skills = [
  {
    icon: BarChart3,
    title: "Visualização & Análise de Dados",
    description: "Transformo dados complexos em insights visuais claros e acionáveis para tomada de decisão estratégica.",
    hardSkills: [
      "Power BI Avançado (DAX avançado, Power Query avançado, design de dashboards)",
      "Excel Avançado (Power Pivot, Power Query, dashboards)",
      "Transformação de dados em insights estratégicos"
    ]
  },
  {
    icon: Database,
    title: "Modelagem e Dashboards no Power BI",
    description: "Desenvolvimento de modelos de dados robustos e dashboards interativos para diferentes níveis organizacionais.",
    hardSkills: [
      "Modelagem de dados complexos e relacionamentos",
      "Criação de dashboards interativos e escaláveis",
      "SQL Server Avançado (consultas otimizadas, procedures, integração com Power BI)"
    ]
  },
  {
    icon: FolderKanban,
    title: "Gestão de Projetos",
    description: "Coordenação de projetos de BI do planejamento à entrega, garantindo qualidade e prazos.",
    hardSkills: [
      "Coordenação de projetos de BI do planejamento à entrega",
      "Experiência prática na Rumo Logística, implementando fluxo completo de BI",
      "Garantia de qualidade, prazos e alinhamento com áreas de negócio"
    ]
  },
  {
    icon: TrendingUp,
    title: "Ciência e Engenharia de Dados",
    description: "Aplicação de técnicas avançadas de análise e engenharia de dados para soluções inovadoras.",
    hardSkills: [
      "SQL Avançado (queries complexas, modelagem relacional, otimização)",
      "Python Intermediário (análise de dados e machine learning)",
      "R Intermediário (estatística e análise de dados)",
      "Machine Learning Intermediário (predição e modelagem)",
      "Spark e Airbyte Intermediário (processamento e ingestão de dados)",
      "Databricks Intermediário (orquestração e análise distribuída)",
      "Docker Intermediário (containerização de soluções)",
      "Terraform Intermediário (infraestrutura como código)",
      "AWS Intermediário (serviços em nuvem voltados para dados)",
      "Snowflake Intermediário (data warehouse em nuvem)",
      "Git Intermediário (controle de versão e colaboração)",
      "dbt Intermediário (transformações, versionamento, automação de pipelines de dados)"
    ]
  }
];

const SkillsSection = () => {
  const [expandedSkill, setExpandedSkill] = useState<number | null>(null);

  const toggleSkill = (index: number) => {
    setExpandedSkill(expandedSkill === index ? null : index);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-center">
          <span className="text-accent">|</span> Principais Habilidades
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const isExpanded = expandedSkill === index;
            
            return (
              <div 
                key={index}
                className="bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <button
                  onClick={() => toggleSkill(index)}
                  className="w-full p-6 lg:p-8 text-left hover:bg-card/80 transition-colors duration-300 flex items-center justify-between group"
                >
                  <div className="flex items-center gap-6">
                    <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-accent/20 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300" />
                    </div>
                    
                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold mb-2 text-card-foreground group-hover:text-accent transition-colors duration-300">
                        {skill.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                  
                  <ChevronDown 
                    className={`w-6 h-6 text-muted-foreground transition-transform duration-300 flex-shrink-0 ml-4 ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {isExpanded && (
                  <div className="px-6 lg:px-8 pb-6 lg:pb-8 animate-fade-in">
                    <div className="border-t border-border pt-6">
                      <h4 className="text-lg font-semibold mb-4 text-accent">Hard Skills:</h4>
                      <div className="grid gap-3">
                        {skill.hardSkills.map((hardSkill, skillIndex) => (
                          <div 
                            key={skillIndex}
                            className="flex items-start gap-3 p-3 bg-background/50 rounded-lg"
                          >
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground leading-relaxed">
                              {hardSkill}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;