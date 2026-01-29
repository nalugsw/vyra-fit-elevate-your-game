import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { getProductsByCategory, products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { SlidersHorizontal, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const categoryTitles: Record<string, { title: string; subtitle: string }> = {
  feminino: { title: "Feminino", subtitle: "Performance & Estilo" },
  masculino: { title: "Masculino", subtitle: "Força & Atitude" },
  suplementos: { title: "Suplementos", subtitle: "Nutrição & Energia" },
  lancamentos: { title: "Lançamentos", subtitle: "Novidades da Coleção" },
};

const Products = () => {
  const { category } = useParams();
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts = category
    ? category === "lancamentos"
      ? products.filter((p) => p.isNew)
      : getProductsByCategory(category)
    : products;

  const categoryInfo = category && categoryTitles[category]
    ? categoryTitles[category]
    : { title: "Todos os Produtos", subtitle: "Coleção Completa" };

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "newest":
        return a.isNew ? -1 : 1;
      case "bestseller":
        return a.isBestseller ? -1 : 1;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        {/* Hero Banner */}
        <section className="bg-gradient-to-r from-primary to-accent py-16 text-primary-foreground md:py-24">
          <div className="container text-center">
            <span className="section-subtitle mb-2 block text-primary-foreground/70">
              {categoryInfo.subtitle}
            </span>
            <h1 className="section-title text-4xl md:text-5xl">
              {categoryInfo.title}
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
              {category === "suplementos"
                ? "Suplementos de alta qualidade para maximizar seus resultados."
                : "Roupas fitness premium com confecção própria. Qualidade e estilo para seu treino."}
            </p>
          </div>
        </section>

        {/* Products */}
        <section className="py-12 md:py-16">
          <div className="container">
            {/* Filters Bar */}
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted-foreground">
                {sortedProducts.length} produto(s) encontrado(s)
              </p>

              <div className="flex gap-4">
                <Button variant="outline" className="gap-2">
                  <SlidersHorizontal className="h-4 w-4" />
                  Filtros
                </Button>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="gap-2">
                      Ordenar
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem onClick={() => setSortBy("featured")}>
                      Em destaque
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSortBy("bestseller")}>
                      Mais vendidos
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSortBy("newest")}>
                      Lançamentos
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSortBy("price-low")}>
                      Menor preço
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSortBy("price-high")}>
                      Maior preço
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
              {sortedProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>

            {sortedProducts.length === 0 && (
              <div className="py-16 text-center">
                <p className="text-lg text-muted-foreground">
                  Nenhum produto encontrado nesta categoria.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
