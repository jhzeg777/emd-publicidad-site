import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, Clock, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Calidad Superior",
      description: "Utilizamos la mejor tecnología y materiales premium para garantizar resultados excepcionales."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Atención Personalizada", 
      description: "Cada cliente es único. Brindamos asesoría personalizada para cada proyecto."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Entregas Puntuales",
      description: "Respetamos los tiempos de entrega acordados para que tu proyecto esté listo cuando lo necesites."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Pasión por el Detalle",
      description: "Nos preocupamos por cada detalle para que el resultado final supere tus expectativas."
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Sobre <span className="text-primary">EMD Publicidad</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Con más de 15 años de experiencia en el sector de la impresión y publicidad, 
                <strong className="text-foreground"> EMD Publicidad</strong> se ha consolidado como 
                la imprenta de confianza en Nuevo Laredo.
              </p>
              
              <p>
                Ubicados estratégicamente en Guerrero 1729, ofrecemos servicios integrales de 
                impresión digital, diseño gráfico y material publicitario para empresas, 
                comercios y particulares.
              </p>
              
              <p>
                Nuestro compromiso es brindar <span className="text-secondary font-semibold">calidad excepcional</span>, 
                <span className="text-primary font-semibold"> precios competitivos</span> y 
                <span className="text-secondary font-semibold"> atención personalizada</span> en cada proyecto.
              </p>
            </div>

            <div className="mt-8">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Conoce Nuestro Equipo
              </Button>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30">
                <CardContent className="p-6 text-center">
                  <div className="text-primary mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;