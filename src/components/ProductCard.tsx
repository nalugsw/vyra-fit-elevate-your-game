import { Link } from "react-router-dom";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Star } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();

  const formatPrice = (price: number) => {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <div className="card-product group">
      {/* Image Container */}
      <Link to={`/produto/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Badges */}
          {product.isNew && (
            <span className="badge-new text-primary-foreground">Novo</span>
          )}
          {product.originalPrice && (
            <span className="badge-sale">
              -{Math.round((1 - product.price / product.originalPrice) * 100)}%
            </span>
          )}

          {/* Quick Add Button */}
          <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-gradient-to-t from-background/90 to-transparent p-4 transition-transform duration-300 group-hover:translate-y-0">
            <Button
              className="w-full gap-2"
              onClick={(e) => {
                e.preventDefault();
                addItem(product, product.sizes[0], product.colors[0]);
              }}
            >
              <ShoppingBag className="h-4 w-4" />
              Adicionar
            </Button>
          </div>
        </div>
      </Link>

      {/* Info */}
      <div className="p-4">
        {/* Category */}
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {product.subcategory}
        </p>

        {/* Name */}
        <Link to={`/produto/${product.id}`}>
          <h3 className="mt-1 font-display text-lg font-bold text-foreground transition-colors hover:text-primary">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-1">
          <Star className="h-4 w-4 fill-primary text-primary" />
          <span className="text-sm font-medium">{product.rating}</span>
          <span className="text-sm text-muted-foreground">
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="mt-3 flex items-center gap-2">
          <span className="font-display text-xl font-bold text-foreground">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Colors */}
        {product.colors.length > 0 && (
          <div className="mt-3 flex gap-1">
            {product.colors.slice(0, 4).map((color, index) => (
              <span
                key={index}
                className="text-xs text-muted-foreground"
              >
                {color}{index < Math.min(product.colors.length, 4) - 1 && " • "}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
