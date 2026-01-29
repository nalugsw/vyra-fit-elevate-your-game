import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-fitness.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="VYRA FIT - Moda Fitness"
          className="h-full w-full object-cover"
        />
        <div className="hero-gradient absolute inset-0" />
      </div>

      {/* Content */}
      <div className="container relative z-10 flex min-h-[90vh] flex-col justify-center py-20">
        <div className="max-w-3xl animate-slide-up">
          {/* Badge */}
          <span className="mb-6 inline-block rounded-full bg-primary/20 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-primary-foreground backdrop-blur-sm">
            Nova Coleção 2026
          </span>

          {/* Title */}
          <h1 className="hero-title mb-6 text-primary-foreground">
            Vista sua força.
            <br />
            <span className="text-gradient bg-gradient-to-r from-primary-foreground via-purple-300 to-primary-foreground bg-clip-text text-transparent">
              Supere seus limites.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle mb-10 max-w-xl text-primary-foreground/80">
            Moda fitness premium com confecção própria. Performance, estilo e
            identidade em cada peça. Para quem vive o esporte de verdade.
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button variant="hero" size="xl" asChild>
              <Link to="/produtos" className="gap-2">
                Ver Coleção
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/produtos/suplementos">Suplementos</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-primary-foreground/20 pt-8">
            <div>
              <p className="font-display text-3xl font-black text-primary-foreground md:text-4xl">
                10K+
              </p>
              <p className="text-sm text-primary-foreground/60">Clientes Ativos</p>
            </div>
            <div>
              <p className="font-display text-3xl font-black text-primary-foreground md:text-4xl">
                500+
              </p>
              <p className="text-sm text-primary-foreground/60">Produtos</p>
            </div>
            <div>
              <p className="font-display text-3xl font-black text-primary-foreground md:text-4xl">
                4.9★
              </p>
              <p className="text-sm text-primary-foreground/60">Avaliação</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-primary-foreground/30 p-2">
          <div className="h-2 w-1 rounded-full bg-primary-foreground/60" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
