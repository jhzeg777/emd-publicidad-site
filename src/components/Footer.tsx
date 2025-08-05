import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";
import logo from "@/assets/emd-logo.png";

const Footer = () => {
  return (
    <footer className="bg-emd-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="EMD Publicidad" className="h-8 w-auto brightness-0 invert" />
              <h3 className="text-xl font-bold text-white">EMD Publicidad</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Tu imprenta de confianza en Nuevo Laredo. 
              Más de 15 años brindando servicios de impresión 
              y publicidad de la más alta calidad.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emd-pink transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emd-pink transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emd-green transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-emd-pink">Servicios</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-emd-green transition-colors">Impresión Digital</a></li>
              <li><a href="#" className="hover:text-emd-green transition-colors">Material Publicitario</a></li>
              <li><a href="#" className="hover:text-emd-green transition-colors">Diseño Gráfico</a></li>
              <li><a href="#" className="hover:text-emd-green transition-colors">Productos Personalizados</a></li>
              <li><a href="#" className="hover:text-emd-green transition-colors">Señalización</a></li>
              <li><a href="#" className="hover:text-emd-green transition-colors">Artículos Promocionales</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-emd-green">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#inicio" className="hover:text-emd-pink transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-emd-pink transition-colors">Servicios</a></li>
              <li><a href="#nosotros" className="hover:text-emd-pink transition-colors">Nosotros</a></li>
              <li><a href="#contacto" className="hover:text-emd-pink transition-colors">Contacto</a></li>
              <li><a href="#" className="hover:text-emd-pink transition-colors">Galería</a></li>
              <li><a href="#" className="hover:text-emd-pink transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-emd-pink">Contacto</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 text-emd-green flex-shrink-0" />
                <span>
                  Guerrero 1729<br />
                  Nuevo Laredo, México<br />
                  C.P. 88000
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-emd-green" />
                <a href="tel:+528671234567" className="hover:text-emd-pink transition-colors">
                  +52 (867) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-emd-green" />
                <a href="mailto:info@emdpublicidad.com" className="hover:text-emd-pink transition-colors">
                  info@emdpublicidad.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>
              © 2024 EMD Publicidad. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-emd-green transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-emd-green transition-colors">Términos de Servicio</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;