import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Mail, MapPin, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="footer-gradient text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container py-12 md:py-16">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <h3 className="font-display text-2xl font-bold md:text-3xl">
                Receba novidades exclusivas
              </h3>
              <p className="mt-2 text-primary-foreground/70">
                Cadastre-se e ganhe 10% de desconto na primeira compra
              </p>
            </div>
            <div className="flex w-full max-w-md gap-2">
              <Input
                placeholder="Seu e-mail"
                className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button variant="hero" className="shrink-0">
                Cadastrar
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block">
              <span className="font-display text-3xl font-black tracking-tighter">
                VYRA FIT
              </span>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/70">
              Moda fitness premium com confecção própria. Vista sua força, supere seus limites.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 font-display text-lg font-bold">Institucional</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>
                <Link to="/sobre" className="transition-colors hover:text-primary-foreground">
                  Sobre a VYRA
                </Link>
              </li>
              <li>
                <Link to="/confeccao" className="transition-colors hover:text-primary-foreground">
                  Nossa Confecção
                </Link>
              </li>
              <li>
                <Link to="/trabalhe-conosco" className="transition-colors hover:text-primary-foreground">
                  Trabalhe Conosco
                </Link>
              </li>
              <li>
                <Link to="/blog" className="transition-colors hover:text-primary-foreground">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="mb-4 font-display text-lg font-bold">Ajuda</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>
                <Link to="/faq" className="transition-colors hover:text-primary-foreground">
                  Perguntas Frequentes
                </Link>
              </li>
              <li>
                <Link to="/trocas" className="transition-colors hover:text-primary-foreground">
                  Trocas e Devoluções
                </Link>
              </li>
              <li>
                <Link to="/entrega" className="transition-colors hover:text-primary-foreground">
                  Prazo de Entrega
                </Link>
              </li>
              <li>
                <Link to="/privacidade" className="transition-colors hover:text-primary-foreground">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-display text-lg font-bold">Contato</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>São Paulo, SP - Brasil</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-primary" />
                <span>contato@vyrafit.com.br</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container flex flex-col items-center justify-between gap-4 py-6 text-center text-sm text-primary-foreground/50 md:flex-row md:text-left">
          <p>© 2025 VYRA FIT. Todos os direitos reservados.</p>
          <p className="font-semibold">Vista sua força. Supere seus limites.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
