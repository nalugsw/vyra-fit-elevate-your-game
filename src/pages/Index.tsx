import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import CategorySection from "@/components/CategorySection";
import Footer from "@/components/Footer";
import { getBestsellers, getNewArrivals } from "@/data/products";

const Index = () => {
  const bestsellers = getBestsellers();
  const newArrivals = getNewArrivals();

  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* New Arrivals */}
        <ProductSection
          title="Lançamentos"
          subtitle="Novidades"
          products={newArrivals}
          viewAllLink="/produtos/lancamentos"
        />

        {/* Categories */}
        <CategorySection />

        {/* Bestsellers */}
        <ProductSection
          title="Mais Vendidos"
          subtitle="Favoritos"
          products={bestsellers}
          viewAllLink="/produtos"
        />

        {/* Features Banner */}
        <section className="bg-primary py-12 md:py-16">
          <div className="container">
            <div className="grid gap-8 text-center text-primary-foreground md:grid-cols-4">
              <div className="animate-fade-in" style={{ animationDelay: "0ms" }}>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/10">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display text-lg font-bold">Confecção Própria</h3>
                <p className="mt-1 text-sm text-primary-foreground/70">Qualidade garantida</p>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/10">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8 4-8-4m16 0v10l-8 4m8-14L12 3 4 7m16 0l-8 4m8 10V7m0 10l-8-4m0 4L4 13m8 4v-4" />
                  </svg>
                </div>
                <h3 className="font-display text-lg font-bold">Frete Grátis</h3>
                <p className="mt-1 text-sm text-primary-foreground/70">Acima de R$ 299</p>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/10">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="font-display text-lg font-bold">Troca Fácil</h3>
                <p className="mt-1 text-sm text-primary-foreground/70">Até 30 dias</p>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: "300ms" }}>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/10">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="font-display text-lg font-bold">Pagamento Seguro</h3>
                <p className="mt-1 text-sm text-primary-foreground/70">100% protegido</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
