import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    id: "feminino",
    title: "Feminino",
    subtitle: "Performance & Estilo",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80",
    link: "/produtos/feminino",
  },
  {
    id: "masculino",
    title: "Masculino",
    subtitle: "Força & Atitude",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    link: "/produtos/masculino",
  },
  {
    id: "suplementos",
    title: "Suplementos",
    subtitle: "Nutrição & Energia",
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=800&q=80",
    link: "/produtos/suplementos",
  },
];

const CategorySection = () => {
  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="container">
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="section-subtitle mb-2 block">Explore</span>
          <h2 className="section-title">Categorias</h2>
        </div>

        {/* Categories Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={category.link}
              className="group relative overflow-hidden rounded-2xl animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <span className="text-sm font-medium uppercase tracking-widest text-primary-foreground/70">
                  {category.subtitle}
                </span>
                <h3 className="mt-2 font-display text-3xl font-black uppercase tracking-tight text-primary-foreground md:text-4xl">
                  {category.title}
                </h3>
                <div className="mt-4 flex items-center gap-2 text-primary-foreground">
                  <span className="font-semibold">Explorar</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
