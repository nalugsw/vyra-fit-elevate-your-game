import { X, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCart } from "@/context/CartContext";
import { Separator } from "@/components/ui/separator";

const CartDrawer = () => {
  const { items, removeItem, updateQuantity, total, isOpen, setIsOpen } = useCart();

  const formatPrice = (price: number) => {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="flex w-full flex-col sm:max-w-md">
        <SheetHeader className="space-y-0">
          <SheetTitle className="flex items-center gap-2 font-display text-xl font-bold">
            <ShoppingBag className="h-5 w-5" />
            Seu Carrinho
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
              <ShoppingBag className="h-10 w-10 text-muted-foreground" />
            </div>
            <div className="text-center">
              <p className="font-display text-lg font-bold">Carrinho vazio</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Adicione produtos para continuar
              </p>
            </div>
            <Button onClick={() => setIsOpen(false)} asChild>
              <Link to="/produtos/feminino">Explorar Produtos</Link>
            </Button>
          </div>
        ) : (
          <>
            {/* Items */}
            <div className="flex-1 overflow-y-auto py-4">
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex gap-4">
                    {/* Image */}
                    <div className="h-24 w-20 shrink-0 overflow-hidden rounded-lg bg-muted">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold">{item.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {item.selectedSize && `Tam: ${item.selectedSize}`}
                            {item.selectedSize && item.selectedColor && " • "}
                            {item.selectedColor}
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => removeItem(item.id)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="mt-auto flex items-center justify-between">
                        {/* Quantity */}
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center font-medium">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>

                        {/* Price */}
                        <span className="font-display font-bold">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t pt-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>{formatPrice(total)}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Frete</span>
                  <span className="text-primary">Calcular no checkout</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="font-display text-lg font-bold">Total</span>
                  <span className="font-display text-xl font-bold">
                    {formatPrice(total)}
                  </span>
                </div>
              </div>

              <Button
                variant="hero"
                size="lg"
                className="mt-4 w-full gap-2"
                onClick={() => setIsOpen(false)}
                asChild
              >
                <Link to="/checkout">
                  Finalizar Compra
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>

              <Button
                variant="ghost"
                className="mt-2 w-full"
                onClick={() => setIsOpen(false)}
              >
                Continuar Comprando
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
