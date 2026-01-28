import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductSection from "@/components/ProductSection";
import { getProductById, products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, Star, Truck, RefreshCw, Shield, ChevronRight } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id || "");
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");

  if (!product) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container py-32 text-center">
          <h1 className="font-display text-2xl font-bold">Produto não encontrado</h1>
          <Button asChild className="mt-6">
            <Link to="/produtos">Ver todos os produtos</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    const size = selectedSize || product.sizes[0];
    const color = selectedColor || product.colors[0];
    addItem(product, size, color);
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        {/* Breadcrumb */}
        <div className="border-b bg-muted/30">
          <div className="container py-4">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground">
                Início
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link
                to={`/produtos/${product.category}`}
                className="capitalize hover:text-foreground"
              >
                {product.category}
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">{product.name}</span>
            </nav>
          </div>
        </div>

        {/* Product Section */}
        <section className="py-8 md:py-16">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
              {/* Images */}
              <div className="space-y-4">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                  {product.isNew && (
                    <span className="badge-new text-primary-foreground">Novo</span>
                  )}
                  {product.originalPrice && (
                    <span className="badge-sale">
                      -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                    </span>
                  )}
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-col">
                {/* Category */}
                <span className="text-sm font-medium uppercase tracking-widest text-primary">
                  {product.subcategory}
                </span>

                {/* Name */}
                <h1 className="mt-2 font-display text-3xl font-black md:text-4xl">
                  {product.name}
                </h1>

                {/* Rating */}
                <div className="mt-4 flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? "fill-primary text-primary"
                            : "fill-muted text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-medium">{product.rating}</span>
                  <span className="text-muted-foreground">
                    ({product.reviews} avaliações)
                  </span>
                </div>

                {/* Price */}
                <div className="mt-6 flex items-baseline gap-3">
                  <span className="font-display text-4xl font-black">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xl text-muted-foreground line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  ou 10x de {formatPrice(product.price / 10)} sem juros
                </p>

                {/* Description */}
                <p className="mt-6 text-muted-foreground">{product.description}</p>

                {/* Size Selector */}
                {product.sizes.length > 0 && (
                  <div className="mt-8">
                    <label className="mb-3 block text-sm font-semibold uppercase tracking-wider">
                      Tamanho
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`flex h-12 min-w-[3rem] items-center justify-center rounded-lg border-2 px-4 font-semibold transition-all ${
                            selectedSize === size
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border hover:border-primary"
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Color Selector */}
                {product.colors.length > 0 && (
                  <div className="mt-6">
                    <label className="mb-3 block text-sm font-semibold uppercase tracking-wider">
                      Cor
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {product.colors.map((color) => (
                        <button
                          key={color}
                          onClick={() => setSelectedColor(color)}
                          className={`rounded-lg border-2 px-4 py-2 text-sm font-medium transition-all ${
                            selectedColor === color
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border hover:border-primary"
                          }`}
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Add to Cart */}
                <div className="mt-8 flex gap-4">
                  <Button
                    variant="hero"
                    size="xl"
                    className="flex-1 gap-2"
                    onClick={handleAddToCart}
                  >
                    <ShoppingBag className="h-5 w-5" />
                    Adicionar ao Carrinho
                  </Button>
                </div>

                {/* Benefits */}
                <div className="mt-8 grid gap-4 rounded-xl border bg-muted/30 p-6 sm:grid-cols-3">
                  <div className="flex items-center gap-3">
                    <Truck className="h-6 w-6 text-primary" />
                    <div>
                      <p className="text-sm font-semibold">Frete Grátis</p>
                      <p className="text-xs text-muted-foreground">Acima de R$ 299</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <RefreshCw className="h-6 w-6 text-primary" />
                    <div>
                      <p className="text-sm font-semibold">Troca Fácil</p>
                      <p className="text-xs text-muted-foreground">Até 30 dias</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="h-6 w-6 text-primary" />
                    <div>
                      <p className="text-sm font-semibold">Compra Segura</p>
                      <p className="text-xs text-muted-foreground">100% protegida</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <ProductSection
            title="Produtos Relacionados"
            subtitle="Você também pode gostar"
            products={relatedProducts}
          />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
