import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/printing-hero.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Servicios de impresión EMD"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Tu <span className="text-emd-green">Imprenta</span> de{" "}
            <span className="text-emd-pink">Confianza</span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Servicios de impresión profesional en Nuevo Laredo. 
            Calidad excepcional para todos tus proyectos publicitarios.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-emd-pink hover:bg-emd-pink/90 text-white px-8 py-4 text-lg font-semibold"
            >
              Solicitar Cotización
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg"
            >
              Ver Servicios
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emd-green mb-2">15+</div>
              <div className="text-white/80">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emd-pink mb-2">5000+</div>
              <div className="text-white/80">Proyectos Realizados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emd-green mb-2">99%</div>
              <div className="text-white/80">Clientes Satisfechos</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center items-center text-3xl md:text-4xl font-bold text-emd-pink mb-2">
                <Star className="h-8 w-8 fill-current mr-1" />
                4.9
              </div>
              <div className="text-white/80">Calificación</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;