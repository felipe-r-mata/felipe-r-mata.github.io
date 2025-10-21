import { Mail, Linkedin, MessageCircle } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "felipe.mata@hotmail.com",
    link: "mailto:felipe.mata@hotmail.com"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "felipe-r-mata",
    link: "https://www.linkedin.com/in/felipe-r-mata/"
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "(41) 99165-4919",
    link: "https://api.whatsapp.com/send?phone=5541991654919"
  }
];

const ContactSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-center">
          <span className="text-accent">|</span> Entre em contato comigo:
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 group text-center block"
              >
                <div className="mb-6 p-4 bg-primary/10 rounded-full w-fit mx-auto group-hover:bg-accent/20 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-accent transition-colors duration-300">
                  {contact.label}
                </h3>
                
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {contact.value}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;