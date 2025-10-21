import { Button } from "@/components/ui/button";
const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted" style={{
      backgroundImage: 'radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsl(var(--accent) / 0.05) 0%, transparent 50%)'
    }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-accent">Felipe</span>{" "}
                <span className="text-foreground">Mata</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl">Especialista em Dados & BI, com pós-graduação em Ciência e Engenharia de Dados. Atuo em toda a jornada de dados, desde a construção de pipelines até o desenvolvimento de dashboards inteligentes e soluções analíticas.</p>
            </div>
            
            <Button onClick={() => scrollToSection('sobre-mim')} className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 transform hover:scale-105">
              Sobre mim
            </Button>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/10">
                <img src="/lovable-uploads/38bd747e-b679-456f-9bfa-3cf074d60da3.png" alt="Felipe Mata - Analista de BI" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 -z-10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;