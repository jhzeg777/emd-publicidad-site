import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare,
  Send,
  Facebook,
  Instagram,
  Twitter
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            <span className="text-primary">Contáctanos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos aquí para ayudarte con tu próximo proyecto. 
            Contáctanos y recibe una cotización personalizada.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <MapPin className="h-5 w-5 mr-2" />
                  Ubicación
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Guerrero 1729<br />
                  Nuevo Laredo, México<br />
                  C.P. 88000
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Ver en Google Maps
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Phone className="h-5 w-5 mr-2" />
                  Teléfono
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  <a href="tel:+528671234567" className="hover:text-primary transition-colors">
                    +52 (867) 123-4567
                  </a>
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  <Phone className="h-4 w-4 mr-2" />
                  Llamar Ahora
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Clock className="h-5 w-5 mr-2" />
                  Horarios
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Lunes - Viernes:</span>
                    <span>8:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábados:</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingos:</span>
                    <span>Cerrado</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Síguenos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Instagram className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Twitter className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-center mb-2">
                  Solicita tu <span className="text-primary">Cotización</span>
                </CardTitle>
                <p className="text-muted-foreground text-center">
                  Completa el formulario y te contactaremos a la brevedad
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Nombre *
                    </label>
                    <Input placeholder="Tu nombre completo" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Empresa
                    </label>
                    <Input placeholder="Nombre de tu empresa" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Teléfono *
                    </label>
                    <Input placeholder="Tu número de teléfono" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email *
                    </label>
                    <Input type="email" placeholder="tu@email.com" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Servicio de Interés
                  </label>
                  <Input placeholder="¿Qué servicio necesitas?" />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Mensaje *
                  </label>
                  <Textarea 
                    placeholder="Cuéntanos sobre tu proyecto, cantidades, fechas de entrega, etc."
                    className="min-h-[120px]"
                  />
                </div>

                <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                  <Send className="h-5 w-5 mr-2" />
                  Enviar Cotización
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  * Campos obligatorios. Te responderemos en menos de 24 horas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;