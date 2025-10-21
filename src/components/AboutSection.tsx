const AboutSection = () => {
  return (
    <section id="sobre-mim" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-center">
            <span className="text-accent">|</span> Sobre mim:
          </h2>
          
          <div className="bg-background/50 rounded-2xl p-8 lg:p-12 shadow-xl">
            <div className="text-xl lg:text-2xl text-muted-foreground leading-relaxed text-justify space-y-6">
              <p>
                Seja muito bem-vindo(a) ao meu portfólio. Tenho <span className="text-4xl lg:text-5xl font-bold text-highlight">10+</span> anos de experiência em Gestão Financeira, com sólida atuação em planejamento, controle e análise de resultados.
              </p>
              
              <p>
                Nos últimos anos, direcionei minha carreira para a área de Dados, com ênfase na construção de pipelines e na estruturação de bases históricas para análises avançadas. Possuo conhecimentos robustos em Engenharia de Dados, atuando em modelagem, tratamento e integração de diferentes fontes para garantir qualidade e escalabilidade das soluções.
              </p>
              
              <p>
                Além da criação de dashboards estratégicos em Business Intelligence, desenvolvo modelos preditivos com Machine Learning, aplicando algoritmos para antecipar cenários e apoiar decisões estratégicas. Aplico meus conhecimentos em diferentes áreas de negócio, sempre com foco em transformar dados em decisões inteligentes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;