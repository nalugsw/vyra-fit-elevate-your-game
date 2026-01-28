export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: "feminino" | "masculino" | "suplementos";
  subcategory: string;
  isNew: boolean;
  isBestseller: boolean;
  sizes: string[];
  colors: string[];
  description: string;
  rating: number;
  reviews: number;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}
