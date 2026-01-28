import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCart } from "@/context/CartContext";
import { Separator } from "@/components/ui/separator";
import { ChevronRight, CreditCard, Truck, Check, ShoppingBag } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Checkout = () => {
  const { items, total, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [orderComplete, setOrderComplete] = useState(false);

  const formatPrice = (price: number) => {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setOrderComplete(true);
      clearCart();
    }
  };

  if (items.length === 0 && !orderComplete) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container py-32 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-muted">
            <ShoppingBag className="h-10 w-10 text-muted-foreground" />
          </div>
          <h1 className="mt-6 font-display text-2xl font-bold">
            Seu carrinho está vazio
          </h1>
          <p className="mt-2 text-muted-foreground">
            Adicione produtos para continuar
          </p>
          <Button asChild className="mt-6">
            <Link to="/produtos/feminino">Explorar Produtos</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  if (orderComplete) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container py-32 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary">
            <Check className="h-10 w-10 text-primary-foreground" />
          </div>
          <h1 className="mt-6 font-display text-3xl font-bold">
            Pedido Confirmado!
          </h1>
          <p className="mt-2 text-muted-foreground">
            Obrigado pela sua compra. Você receberá um e-mail com os detalhes.
          </p>
          <p className="mt-4 font-semibold text-primary">
            Número do pedido: #VF2025{Math.floor(Math.random() * 10000)}
          </p>
          <Button asChild className="mt-8">
            <Link to="/">Voltar para a Loja</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <Navbar />

      <main className="py-8 md:py-12">
        <div className="container">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">
              Início
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Checkout</span>
          </nav>

          {/* Steps */}
          <div className="mb-8 flex items-center justify-center gap-4">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full font-bold ${
                    step >= s
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {step > s ? <Check className="h-5 w-5" /> : s}
                </div>
                <span
                  className={`hidden sm:block ${
                    step >= s ? "font-semibold" : "text-muted-foreground"
                  }`}
                >
                  {s === 1 ? "Dados" : s === 2 ? "Entrega" : "Pagamento"}
                </span>
                {s < 3 && (
                  <div className="mx-4 hidden h-px w-16 bg-border sm:block" />
                )}
              </div>
            ))}
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="rounded-xl border bg-card p-6 md:p-8">
                <form onSubmit={handleSubmit}>
                  {step === 1 && (
                    <div className="space-y-6">
                      <h2 className="font-display text-xl font-bold">
                        Dados Pessoais
                      </h2>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <Label htmlFor="name">Nome Completo</Label>
                          <Input id="name" placeholder="Seu nome" required />
                        </div>
                        <div>
                          <Label htmlFor="email">E-mail</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="seu@email.com"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="cpf">CPF</Label>
                          <Input id="cpf" placeholder="000.000.000-00" required />
                        </div>
                        <div>
                          <Label htmlFor="phone">Telefone</Label>
                          <Input
                            id="phone"
                            placeholder="(00) 00000-0000"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-6">
                      <h2 className="font-display text-xl font-bold">
                        Endereço de Entrega
                      </h2>
                      <div className="grid gap-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div>
                            <Label htmlFor="cep">CEP</Label>
                            <Input id="cep" placeholder="00000-000" required />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="address">Endereço</Label>
                          <Input
                            id="address"
                            placeholder="Rua, número"
                            required
                          />
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div>
                            <Label htmlFor="complement">Complemento</Label>
                            <Input id="complement" placeholder="Apto, bloco..." />
                          </div>
                          <div>
                            <Label htmlFor="neighborhood">Bairro</Label>
                            <Input id="neighborhood" placeholder="Bairro" required />
                          </div>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div>
                            <Label htmlFor="city">Cidade</Label>
                            <Input id="city" placeholder="Cidade" required />
                          </div>
                          <div>
                            <Label htmlFor="state">Estado</Label>
                            <Input id="state" placeholder="UF" required />
                          </div>
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <h3 className="mb-4 font-semibold">
                          Método de Entrega
                        </h3>
                        <RadioGroup defaultValue="normal">
                          <div className="flex items-center justify-between rounded-lg border p-4">
                            <div className="flex items-center gap-3">
                              <RadioGroupItem value="normal" id="normal" />
                              <Label htmlFor="normal" className="cursor-pointer">
                                <span className="font-semibold">
                                  Entrega Normal
                                </span>
                                <span className="block text-sm text-muted-foreground">
                                  5-8 dias úteis
                                </span>
                              </Label>
                            </div>
                            <span className="font-semibold text-primary">
                              Grátis
                            </span>
                          </div>
                          <div className="flex items-center justify-between rounded-lg border p-4">
                            <div className="flex items-center gap-3">
                              <RadioGroupItem value="express" id="express" />
                              <Label htmlFor="express" className="cursor-pointer">
                                <span className="font-semibold">
                                  Entrega Express
                                </span>
                                <span className="block text-sm text-muted-foreground">
                                  2-3 dias úteis
                                </span>
                              </Label>
                            </div>
                            <span className="font-semibold">R$ 29,90</span>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-6">
                      <h2 className="font-display text-xl font-bold">
                        Pagamento
                      </h2>
                      <RadioGroup defaultValue="card">
                        <div className="rounded-lg border p-4">
                          <div className="flex items-center gap-3">
                            <RadioGroupItem value="card" id="card" />
                            <Label htmlFor="card" className="cursor-pointer">
                              <span className="font-semibold">
                                Cartão de Crédito
                              </span>
                            </Label>
                          </div>
                          <div className="mt-4 grid gap-4 pl-6">
                            <div>
                              <Label htmlFor="cardNumber">Número do Cartão</Label>
                              <Input
                                id="cardNumber"
                                placeholder="0000 0000 0000 0000"
                              />
                            </div>
                            <div className="grid gap-4 sm:grid-cols-3">
                              <div className="sm:col-span-2">
                                <Label htmlFor="cardName">Nome no Cartão</Label>
                                <Input id="cardName" placeholder="Nome impresso" />
                              </div>
                              <div>
                                <Label htmlFor="cvv">CVV</Label>
                                <Input id="cvv" placeholder="123" />
                              </div>
                            </div>
                            <div className="grid gap-4 sm:grid-cols-2">
                              <div>
                                <Label htmlFor="expiry">Validade</Label>
                                <Input id="expiry" placeholder="MM/AA" />
                              </div>
                              <div>
                                <Label htmlFor="installments">Parcelas</Label>
                                <Input
                                  id="installments"
                                  placeholder="10x sem juros"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="rounded-lg border p-4">
                          <div className="flex items-center gap-3">
                            <RadioGroupItem value="pix" id="pix" />
                            <Label htmlFor="pix" className="cursor-pointer">
                              <span className="font-semibold">PIX</span>
                              <span className="ml-2 text-sm text-primary">
                                5% de desconto
                              </span>
                            </Label>
                          </div>
                        </div>
                        <div className="rounded-lg border p-4">
                          <div className="flex items-center gap-3">
                            <RadioGroupItem value="boleto" id="boleto" />
                            <Label htmlFor="boleto" className="cursor-pointer">
                              <span className="font-semibold">Boleto Bancário</span>
                            </Label>
                          </div>
                        </div>
                      </RadioGroup>
                    </div>
                  )}

                  <div className="mt-8 flex gap-4">
                    {step > 1 && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setStep(step - 1)}
                      >
                        Voltar
                      </Button>
                    )}
                    <Button type="submit" variant="hero" className="flex-1 gap-2">
                      {step < 3 ? (
                        <>
                          Continuar
                          <ChevronRight className="h-5 w-5" />
                        </>
                      ) : (
                        <>
                          <CreditCard className="h-5 w-5" />
                          Finalizar Pedido
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <div className="sticky top-24 rounded-xl border bg-card p-6">
                <h3 className="font-display text-lg font-bold">Resumo do Pedido</h3>

                <div className="mt-4 space-y-4">
                  {items.map((item) => (
                    <div
                      key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
                      className="flex gap-3"
                    >
                      <div className="h-16 w-14 shrink-0 overflow-hidden rounded-lg bg-muted">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold">{item.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {item.selectedSize && `Tam: ${item.selectedSize}`}
                          {item.selectedSize && item.selectedColor && " • "}
                          {item.selectedColor}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Qtd: {item.quantity}
                        </p>
                      </div>
                      <p className="text-sm font-semibold">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  ))}
                </div>

                <Separator className="my-4" />

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Frete</span>
                    <span className="text-primary">Grátis</span>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="flex justify-between">
                  <span className="font-display text-lg font-bold">Total</span>
                  <span className="font-display text-xl font-bold">
                    {formatPrice(total)}
                  </span>
                </div>

                <div className="mt-4 flex items-center gap-2 rounded-lg bg-primary/10 p-3 text-sm text-primary">
                  <Truck className="h-5 w-5" />
                  <span>Frete grátis para todo o Brasil!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
