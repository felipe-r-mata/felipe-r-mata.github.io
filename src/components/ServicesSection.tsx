import { Monitor, Users } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Desenvolvimento de Dashboards",
    description: "Criação de dashboards personalizados no Power BI para visualização eficiente de KPIs e métricas de negócio."
  },
  {
    icon: Users,
    title: "Consultoria na Área de Dados",
    description: "Consultoria especializada em estratégias de dados, modelagem e implementação de soluções de Business Intelligence."
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-center">
          <span className="text-accent">|</span> Como posso te ajudar
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 group text-center"
              >
                <div className="mb-6 p-6 bg-primary/10 rounded-full w-fit mx-auto group-hover:bg-accent/20 transition-colors duration-300">
                  <Icon className="w-12 h-12 text-primary group-hover:text-accent transition-colors duration-300" />
                </div>
                
                <h3 className="text-2xl font-bold mb-6 text-card-foreground group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;