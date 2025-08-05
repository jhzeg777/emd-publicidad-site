import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Printer, 
  FileText, 
  Calendar, 
  Palette, 
  Gift, 
  Building2,
  ArrowRight,
  Check
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Printer className="h-8 w-8" />,
      title: "Impresión Digital",
      description: "Impresión de alta calidad en diversos formatos y materiales",
      features: ["Tarjetas de presentación", "Volantes y folletos", "Carteles y pósters", "Documentos oficiales"]
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Material Publicitario",
      description: "Diseño e impresión de material promocional para tu negocio",
      features: ["Catálogos", "Brochures", "Flyers promocionales", "Material corporativo"]
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Productos Personalizados",
      description: "Calendarios, agendas y productos con tu marca personal",
      features: ["Calendarios anuales", "Agendas personalizadas", "Libretas corporativas", "Planificadores"]
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Diseño Gráfico",
      description: "Servicios de diseño profesional para todos tus proyectos",
      features: ["Logotipos", "Identidad corporativa", "Diseño de packaging", "Banners digitales"]
    },
    {
      icon: <Gift className="h-8 w-8" />,
      title: "Artículos Promocionales",
      description: "Productos promocionales personalizados para tu marca",
      features: ["Playeras y uniformes", "Tazas personalizadas", "USB corporativos", "Llaveros y pins"]
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Señalización",
      description: "Señalética profesional para empresas y comercios",
      features: ["Letreros luminosos", "Señalización interior", "Vinilos decorativos", "Rótulos exteriores"]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Nuestros <span className="text-primary">Servicios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios de impresión y publicidad 
            para satisfacer todas las necesidades de tu negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50 group"
            >
              <CardHeader>
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Más información
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4">
            Ver Todos los Servicios
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;