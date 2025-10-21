import { Button } from "@/components/ui/button";
import { ExternalLink, BarChart3, Database, Brain, ArrowLeft } from "lucide-react";
import { useState } from "react";

const projectCategories = {
  "business-intelligence": {
    name: "Business Intelligence",
    icon: BarChart3,
    description: "Dashboards e análises estratégicas",
    projects: [
      {
        title: "DASHBOARD COMERCIAL",
        description: "Dashboard completo para análise de vendas e performance comercial. Inclui indicadores de receita, quantidade de vendas, ticket médio e análise geográfica por continente.",
        image: "/lovable-uploads/ea2f8c1f-14c7-4272-91ac-4aa2a85b2883.png",
        link: "https://app.powerbi.com/view?r=eyJrIjoiNjg0YTJiNGUtNGNjMC00ZWZlLTkwYWUtMmRjZTUzNzJkMjE0IiwidCI6ImFhMmRkZTY0LWI4MDItNGNjNC1iNDE3LWJiNjBlMWIxODVlYyJ9"
      },
      {
        title: "PLATAFORMA DE FINANÇAS",
        description: "Plataforma completa de gestão financeira corporativa com controle de gastos, orçamento, recursos humanos e indicadores financeiros. Inclui visão geral VP, gestão de metas, análise de custos variáveis e acompanhamento de veículos.",
        image: "/lovable-uploads/e729e0f6-a2c4-4a66-8827-503c0afbaca2.png",
        link: "https://app.powerbi.com/view?r=eyJrIjoiZmYxYjQxYmYtZGU2Zi00YTI5LTkxNTEtMGUzZjI2MDg1ODg1IiwidCI6ImFhMmRkZTY0LWI4MDItNGNjNC1iNDE3LWJiNjBlMWIxODVlYyJ9"
      }
    ]
  },
  "data-engineering": {
    name: "Engenharia de Dados",
    icon: Database,
    description: "Pipelines e infraestrutura de dados",
    projects: [
      {
        title: "PROJETO DE ENGENHARIA DE DADOS E DATAOPS",
        description: "Projeto de Engenharia de Dados com Docker, PostgreSQL, Airbyte, Snowflake e dbt. Pipeline completo de ELT, desde banco transacional até Data Warehouse, aplicando boas práticas de DataOps para ingestão, transformação e análise de dados.",
        image: "/lovable-uploads/p_dataops.jpg",
        link: "https://github.com/felipe-r-mata/PROJETO_DATAOPS"
      },
      {
        title: "DATA LAKE LOCAL COM DOCKER, HDFS E APACHE SPARK",
        description: "Este projeto implementa um Data Lake local utilizando containers Docker para simular um ambiente distribuído de armazenamento e processamento de dados. A solução combina o HDFS (Hadoop Distributed File System) para armazenamento resiliente e o Apache Spark para processamento paralelo, permitindo escalabilidade horizontal com múltiplos workers. Além disso, inclui um pipeline completo de Machine Learning distribuído com PySpark, reforçando boas práticas em engenharia de dados e análise preditiva.",
        image: "/lovable-uploads/projeto_datalake.jpg",
        link: "https://github.com/felipe-r-mata/Projeto_DataLake_Local"
      }
    ]
  },
  "data-science": {
    name: "Ciência de Dados",
    icon: Brain,
    description: "Machine Learning e análise preditiva",
    projects: [
      {
        title: "ANÁLISE E PREVISÃO DE MORTALIDADE POR FEBRE AMARELA",
        description: "Projeto de Machine Learning para prever a mortalidade em casos de Febre Amarela no Brasil, integrando dados epidemiológicos, socioeconômicos, sanitários e de vacinação. Inclui análise exploratória, visualizações geográficas e avaliação de modelos preditivos.",
        image: "/lovable-uploads/21c5c695-5556-4294-9312-3b6b01fe4fea.png",
        link: "https://github.com/felipe-r-mata/TCC_Febre_Amarela_no_Brasil"
      }
    ]
  }
};

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleCategoryClick = (categoryKey: string) => {
    setActiveCategory(categoryKey);
  };

  const handleBackToCategories = () => {
    setActiveCategory(null);
  };

  if (activeCategory) {
    const category = projectCategories[activeCategory as keyof typeof projectCategories];
    
    return (
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="animate-fade-in">
            <Button
              onClick={handleBackToCategories}
              variant="ghost"
              className="mb-8 hover:bg-primary/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para Categorias
            </Button>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-center">
              <span className="text-accent">|</span> {category.name}
            </h2>
            
            <p className="text-center text-muted-foreground mb-16 text-lg">
              {category.description}
            </p>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {category.projects.map((project, index) => (
                <div 
                  key={index}
                  className="bg-background rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 group flex flex-col h-full animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-6 lg:p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                      {project.description}
                    </p>
                    
                    <Button 
                      asChild
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 mt-auto"
                    >
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        Ver detalhes
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-center">
          <span className="text-accent">|</span> Explore alguns projetos que já desenvolvi:
        </h2>
        
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Selecione uma categoria para visualizar os projetos
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {Object.entries(projectCategories).map(([key, category]) => {
            const IconComponent = category.icon;
            return (
              <button
                key={key}
                onClick={() => handleCategoryClick(key)}
                className="group bg-gradient-to-br from-primary/10 to-accent/10 hover:from-primary/20 hover:to-accent/20 border border-primary/20 rounded-3xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {category.name}
                  </h3>
                  
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {category.description}
                  </p>
                  
                  <div className="text-sm text-primary/70 group-hover:text-primary transition-colors duration-300">
                    {category.projects.length} projeto{category.projects.length !== 1 ? 's' : ''}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;