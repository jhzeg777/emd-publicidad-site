import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MapPin } from "lucide-react";
import logo from "@/assets/emd-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-background shadow-lg border-b border-emd-pink/20 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="EMD Publicidad" className="h-8 w-auto" />
            <h1 className="text-xl font-bold text-emd-black">EMD Publicidad</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
              Inicio
            </a>
            <a href="#servicios" className="text-foreground hover:text-primary transition-colors">
              Servicios
            </a>
            <a href="#galeria" className="text-foreground hover:text-primary transition-colors">
              Galería
            </a>
            <a href="#nosotros" className="text-foreground hover:text-primary transition-colors">
              Nosotros
            </a>
            <a href="#contacto" className="text-foreground hover:text-primary transition-colors">
              Contacto
            </a>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4 text-sm">
            <div className="flex items-center text-muted-foreground">
              <Phone className="h-4 w-4 mr-1" />
              <span>Contáctanos</span>
            </div>
            <Button variant="default" size="sm">
              Cotizar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md hover:bg-muted transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-slide-in">
            <nav className="flex flex-col space-y-4">
              <a
                href="#inicio"
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground hover:text-primary transition-colors"
              >
                Inicio
              </a>
              <a
                href="#servicios"
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground hover:text-primary transition-colors"
              >
                Servicios
              </a>
              <a
                href="#galeria"
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground hover:text-primary transition-colors"
              >
                Galería
              </a>
              <a
                href="#nosotros"
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground hover:text-primary transition-colors"
              >
                Nosotros
              </a>
              <a
                href="#contacto"
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground hover:text-primary transition-colors"
              >
                Contacto
              </a>
              <Button variant="default" size="sm" className="w-fit">
                Cotizar
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;