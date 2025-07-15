import { Phone, MapPin, Clock, Shield, Truck, Users, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Import images
import heroImage from "@/assets/truck-hero-bg.jpg";
import venturaLogoTransparent from "/lovable-uploads/fdf8e74f-9d1d-4efb-bd43-011c858fbaf6.png";
import residentialImage from "@/assets/residential-moving.jpg";
import commercialImage from "@/assets/commercial-moving.jpg";
import constructionImage from "@/assets/construction-moving.jpg";
import storageImage from "@/assets/storage-services.jpg";

const VenturaLanding = () => {
  const whatsappUrl = "https://wa.me/5531984370150";

  const services = [
    {
      title: "Mudanças Residenciais",
      description: "Mudanças completas para residências com total segurança e cuidado especial com seus pertences.",
      image: residentialImage,
      features: ["Embalagem segura", "Desmontagem e montagem", "Transporte seguro", "Equipe especializada"]
    },
    {
      title: "Mudanças Comerciais", 
      description: "Transferência de escritórios e empresas com agilidade para não interromper seus negócios.",
      image: commercialImage,
      features: ["Planejamento detalhado", "Horários flexíveis", "Equipe especializada", "Mudanças corporativas"]
    },
    {
      title: "Canteiro de Obras",
      description: "Transporte e remoção de equipamentos e materiais de construção com segurança total.",
      image: constructionImage,
      features: ["Equipamentos especiais", "Transporte pesado", "Logística especializada", "Segurança garantida"]
    },
    {
      title: "Armazenamento Seguro",
      description: "Proteção completa dos seus bens em nossos veículos especializados, com sistemas de segurança avançados e monitoramento constante durante todo o transporte.",
      image: storageImage,
      features: ["Veículos credenciados", "Rastreamento GPS", "Segurança 24h", "Proteção contra intempéries"]
    }
  ];

  const diferenciais = [
    {
      icon: <Truck className="w-12 h-12 text-accent" />,
      title: "Embalagens Especiais",
      description: "Materiais premium para garantir a máxima segurança dos seus pertences durante o transporte."
    },
    {
      icon: <Shield className="w-12 h-12 text-accent" />,
      title: "Seguro Total",
      description: "Cobertura completa contra danos, furtos e acidentes. Sua tranquilidade é nossa prioridade."
    },
    {
      icon: <Users className="w-12 h-12 text-accent" />,
      title: "Equipe Especializada",
      description: "Profissionais treinados e experientes em mudanças residenciais e corporativas."
    },
    {
      icon: <Clock className="w-12 h-12 text-accent" />,
      title: "Pontualidade",
      description: "Cumprimos rigorosamente os prazos acordados. Seu tempo é valioso para nós."
    },
    {
      icon: <Star className="w-12 h-12 text-accent" />,
      title: "Frota Moderna",
      description: "Veículos novos e bem equipados para garantir o transporte seguro dos seus bens."
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-accent" />,
      title: "Referência Nacional",
      description: "Reconhecidos em todo o Brasil pela qualidade e confiabilidade dos nossos serviços."
    }
  ];

  const parceiros = [
    { name: "Rip", logo: "R" },
    { name: "Magazine Luiza", logo: "M" },
    { name: "Rio Verde", logo: "R" },
    { name: "Electric Minas", logo: "E" },
    { name: "Fagundes", logo: "F" },
    { name: "Express Transportes", logo: "E" },
    { name: "Patrus", logo: "P" },
    { name: "Nexus", logo: "N" },
    { name: "Infravix", logo: "I" }
  ];

  const bannerItems = [
    { icon: <Truck className="w-4 h-4 mr-2" />, text: "Mudanças municipais" },
    { icon: <MapPin className="w-4 h-4 mr-2" />, text: "Mudanças intermunicipais" },
    { icon: <Shield className="w-4 h-4 mr-2" />, text: "Mudanças interestaduais" },
    { icon: <Users className="w-4 h-4 mr-2" />, text: "Alojamentos e canteiro de obras" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <img src={venturaLogoTransparent} alt="Ventura Mudanças" className="h-20 md:h-16" />
          <div className="flex items-center space-x-2 md:space-x-4 text-xs md:text-sm">
            <div className="flex items-center space-x-1 md:space-x-2">
              <Phone className="w-3 h-3 md:w-4 md:h-4 text-primary" />
              <span className="whitespace-nowrap text-xs md:text-sm">(31) 98437-0150</span>
            </div>
            <div className="flex items-center space-x-1 md:space-x-2">
              <MapPin className="w-3 h-3 md:w-4 md:h-4 text-primary" />
              <span className="whitespace-nowrap text-xs md:text-sm">Todo o Brasil</span>
            </div>
          </div>
        </div>
        
        {/* Animated Banner */}
        <div className="bg-primary text-white py-2 overflow-hidden">
          <div className="animate-marquee-infinite">
            {bannerItems.concat(bannerItems).map((item, index) => (
              <span key={index} className="inline-flex items-center mx-8 flex-shrink-0">
                {item.icon}
                {item.text}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center justify-center hero-bg relative"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            SUA MUDANÇA SEM STRESS, COM 
            <span className="text-accent"> AGILIDADE</span>,
            <span className="text-accent"> SEGURANÇA</span> COM 
            QUEM É <span className="text-accent">REFERÊNCIA</span> EM 
            TODO O BRASIL
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Especialistas em mudanças com mais de 10 anos de experiência. 
            Proteção premium e seguro total para sua tranquilidade.
          </p>
          <Button 
            className="neon-button text-sm md:text-lg px-8 py-6 h-auto w-full max-w-sm md:max-w-none md:w-auto"
            onClick={() => window.open(whatsappUrl, '_blank')}
          >
            QUERO FAZER MEU ORÇAMENTO AGORA
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Nossos Serviços</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Oferecemos soluções completas em mudanças para atender todas as suas 
              necessidades, desde residenciais até projetos corporativos complexos.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-accent mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full neon-button mt-auto"
                    onClick={() => window.open(whatsappUrl, '_blank')}
                  >
                    SOLICITAR MEU ATENDIMENTO
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Nossos Diferenciais</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              O que nos torna únicos no mercado de mudanças é por que somos a escolha 
              preferida de milhares de clientes em todo o Brasil.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {diferenciais.map((diferencial, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="flex justify-center">{diferencial.icon}</div>
                  <h3 className="text-xl font-bold text-primary">{diferencial.title}</h3>
                  <p className="text-muted-foreground">{diferencial.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Pronto para sua mudança sem stress?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e receba um orçamento personalizado em minutos!
          </p>
          <Button 
            className="neon-button text-lg px-8 py-6 h-auto w-full max-w-sm md:max-w-none md:w-auto"
            onClick={() => window.open(whatsappUrl, '_blank')}
          >
            CONVERSAR NO WHATSAPP
          </Button>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Nossos Parceiros</h2>
            <p className="text-lg text-muted-foreground">
              Empresas que confiam na Ventura Mudanças para suas operações de transporte e mudanças.
            </p>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {parceiros.map((parceiro, index) => (
              <div key={index} className="flex flex-col items-center justify-center p-3 hover:scale-105 transition-transform duration-300">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors cursor-pointer">
                  <span className="font-bold text-white text-sm md:text-base">{parceiro.logo}</span>
                </div>
                <span className="mt-2 text-center font-semibold text-primary text-xs md:text-sm leading-tight">{parceiro.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img src={venturaLogoTransparent} alt="Ventura Mudanças" className="h-12 mb-4 filter brightness-0 invert" />
              <p className="text-sm text-white/80 italic">
                "Transportando preços como se fossem valores"
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-accent">Contato</h3>
              <div className="space-y-2 text-sm">
                <p className="text-xs break-all">📧 comercial@venturamudancas.com.br</p>
                <p>📞 (31) 98437-0150</p>
                <p>📍 Sede em Minas Gerais</p>
                <p>🚚 Atendemos todo o Brasil</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-accent">Serviços</h3>
              <div className="space-y-2 text-sm">
                <p>• Mudanças Residenciais</p>
                <p>• Mudanças Comerciais</p>
                <p>• Mudanças Interestaduais</p>
                <p>• Guarda e Armazenamento</p>
                <p>• Canteiro de Obras</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-accent">Atendimento</h3>
              <div className="space-y-2 text-sm">
                <p>📅 Segunda a Sexta</p>
                <p>🕒 08:00 às 18:00</p>
                <p>📱 Sábado até 12:00</p>
                <p>🆘 Emergência 24h</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
            <p>© 2025 Ventura Mudanças. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VenturaLanding;
