import { Product } from "@/types/product";

import productLegging from "@/assets/product-legging.jpg";
import productTop from "@/assets/product-top.jpg";
import productShorts from "@/assets/product-shorts.jpg";
import productWhey from "@/assets/product-whey.jpg";
import productCreatina from "@/assets/product-creatina.jpg";
import productPreworkout from "@/assets/product-preworkout.jpg";
import productConjunto from "@/assets/product-conjunto.jpg";
import productTank from "@/assets/product-tank.jpg";
import productCamiseta from "@/assets/product-camiseta.jpg";

export const products: Product[] = [
  {
    id: "1",
    name: "Legging Power Pro",
    price: 189.90,
    originalPrice: 229.90,
    image: productLegging,
    category: "feminino",
    subcategory: "leggings",
    isNew: true,
    isBestseller: true,
    sizes: ["P", "M", "G", "GG"],
    colors: ["Roxo", "Preto", "Cinza"],
    description: "Legging de alta compressão com tecnologia dry-fit para máxima performance. Tecido premium com elasticidade e conforto incomparáveis.",
    rating: 4.9,
    reviews: 234,
  },
  {
    id: "2",
    name: "Top Training Elite",
    price: 129.90,
    image: productTop,
    category: "feminino",
    subcategory: "tops",
    isNew: false,
    isBestseller: true,
    sizes: ["P", "M", "G"],
    colors: ["Preto", "Branco", "Rosa"],
    description: "Top esportivo com suporte médio, ideal para treinos de alta intensidade. Design moderno e acabamento premium.",
    rating: 4.8,
    reviews: 189,
  },
  {
    id: "3",
    name: "Shorts Performance",
    price: 149.90,
    image: productShorts,
    category: "masculino",
    subcategory: "shorts",
    isNew: true,
    isBestseller: false,
    sizes: ["P", "M", "G", "GG", "XG"],
    colors: ["Preto/Roxo", "Preto/Branco", "Cinza"],
    description: "Shorts de treino com tecnologia de ventilação e secagem rápida. Perfeito para crossfit, corrida e academia.",
    rating: 4.7,
    reviews: 156,
  },
  {
    id: "4",
    name: "VYRA Whey Protein Isolado",
    price: 249.90,
    originalPrice: 299.90,
    image: productWhey,
    category: "suplementos",
    subcategory: "proteinas",
    isNew: false,
    isBestseller: true,
    sizes: ["900g", "1.8kg"],
    colors: [],
    description: "Whey Protein Isolado de alta pureza com 27g de proteína por dose. Sabor chocolate premium com dissolução instantânea.",
    rating: 4.9,
    reviews: 412,
  },
  {
    id: "5",
    name: "Conjunto Seamless",
    price: 299.90,
    image: productConjunto,
    category: "feminino",
    subcategory: "conjuntos",
    isNew: true,
    isBestseller: false,
    sizes: ["P", "M", "G"],
    colors: ["Roxo", "Verde", "Rosa"],
    description: "Conjunto seamless de top e legging sem costuras. Máximo conforto e modelagem perfeita para o corpo.",
    rating: 4.8,
    reviews: 98,
  },
  {
    id: "6",
    name: "Regata Dry Fit",
    price: 89.90,
    image: productTank,
    category: "masculino",
    subcategory: "regatas",
    isNew: false,
    isBestseller: true,
    sizes: ["P", "M", "G", "GG", "XG"],
    colors: ["Preto", "Cinza", "Branco"],
    description: "Regata masculina com tecnologia dry-fit e corte atlético. Ideal para todos os tipos de treino.",
    rating: 4.6,
    reviews: 267,
  },
  {
    id: "7",
    name: "VYRA Creatina Monohidratada",
    price: 149.90,
    image: productCreatina,
    category: "suplementos",
    subcategory: "creatina",
    isNew: true,
    isBestseller: true,
    sizes: ["300g", "500g"],
    colors: [],
    description: "Creatina monohidratada pura de alta absorção. Aumenta força, potência e massa muscular.",
    rating: 4.9,
    reviews: 328,
  },
  {
    id: "8",
    name: "VYRA Pré-Treino Extreme",
    price: 179.90,
    image: productPreworkout,
    category: "suplementos",
    subcategory: "pre-treino",
    isNew: true,
    isBestseller: false,
    sizes: ["300g", "600g"],
    colors: [],
    description: "Pré-treino de alta performance com cafeína, beta-alanina e citrulina. Energia explosiva para treinos intensos.",
    rating: 4.7,
    reviews: 156,
  },
  {
    id: "9",
    name: "Camiseta Compression",
    price: 119.90,
    image: productCamiseta,
    category: "masculino",
    subcategory: "camisetas",
    isNew: true,
    isBestseller: true,
    sizes: ["P", "M", "G", "GG", "XG"],
    colors: ["Preto", "Cinza", "Azul"],
    description: "Camiseta de compressão com tecnologia dry-fit e proteção UV. Design slim e confortável.",
    rating: 4.8,
    reviews: 203,
  },
  {
    id: "10",
    name: "Legging Sculpt",
    price: 169.90,
    image: productLegging,
    category: "feminino",
    subcategory: "leggings",
    isNew: false,
    isBestseller: true,
    sizes: ["P", "M", "G", "GG"],
    colors: ["Preto", "Roxo", "Verde"],
    description: "Legging modeladora com cintura alta e tecido que valoriza as curvas. Conforto durante todo o dia.",
    rating: 4.7,
    reviews: 312,
  },
  {
    id: "11",
    name: "Shorts 2 em 1",
    price: 139.90,
    image: productShorts,
    category: "masculino",
    subcategory: "shorts",
    isNew: false,
    isBestseller: false,
    sizes: ["P", "M", "G", "GG"],
    colors: ["Preto", "Cinza", "Azul"],
    description: "Shorts com bermuda de compressão interna. Ideal para corrida e treinos de alta intensidade.",
    rating: 4.6,
    reviews: 178,
  },
  {
    id: "12",
    name: "Top Minimal",
    price: 99.90,
    image: productTop,
    category: "feminino",
    subcategory: "tops",
    isNew: true,
    isBestseller: false,
    sizes: ["P", "M", "G"],
    colors: ["Preto", "Branco", "Bege"],
    description: "Top minimalista com alças finas e suporte leve. Perfeito para yoga e pilates.",
    rating: 4.5,
    reviews: 87,
  },
];

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((product) => product.category === category);
};

export const getBestsellers = (): Product[] => {
  return products.filter((product) => product.isBestseller);
};

export const getNewArrivals = (): Product[] => {
  return products.filter((product) => product.isNew);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};
