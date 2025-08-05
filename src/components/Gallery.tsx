import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  const projects = [
    {
      id: 1,
      title: "Señalización Corporativa",
      description: "Letreros luminosos y señalización para empresas",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Material Promocional",
      description: "Folletos, volantes y material publicitario",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Impresión Digital",
      description: "Banners, lonas y impresión gran formato",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=500&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Identidad Visual",
      description: "Logos, tarjetas de presentación y papelería",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=500&h=400&fit=crop"
    },
    {
      id: 5,
      title: "Rotulación Vehicular",
      description: "Decoración y rotulación de vehículos comerciales",
      image: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764?w=500&h=400&fit=crop"
    },
    {
      id: 6,
      title: "Displays Publicitarios",
      description: "Stands, displays y material POP",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=400&fit=crop&auto=format&q=80"
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nuestros <span className="text-emd-pink">Trabajos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre algunos de los proyectos que hemos realizado para nuestros clientes en Nuevo Laredo y la región.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                  <p className="text-sm text-white/90">{project.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            ¿Tienes un proyecto en mente? Contáctanos para una cotización gratuita.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;