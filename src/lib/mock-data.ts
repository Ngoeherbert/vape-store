export type Product = {
  slug: string;
  brand: string;
  name: string;
  priceCents: number;
  imageUrl: string;
};

const img = (id: string, w = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export type Category = {
  slug: string;
  name: string;
  count: number;
  imageUrl: string;
};

export type Brand = {
  slug: string;
  name: string;
  description: string;
  productCount: number;
};

export const products: Product[] = [
  { slug: "pod-device-kit", brand: "Brand A", name: "Pod Device Kit", priceCents: 3400, imageUrl: img("1527137342181-19aab11a8ee8") },
  { slug: "nic-salt-30ml-mint", brand: "Brand B", name: "Nic Salt 30ml · Mint", priceCents: 1200, imageUrl: img("1608571423902-eed4a5ad8108") },
  { slug: "replacement-coils-x5", brand: "Brand C", name: "Replacement Coils ×5", priceCents: 1400, imageUrl: img("1585386959984-a4155224a1ad") },
  { slug: "disposable-5000-puffs", brand: "Brand A", name: "Disposable 5000 puffs", priceCents: 1600, imageUrl: img("1556742049-0cfed4f6a45d") },
  { slug: "mod-starter-kit", brand: "Brand D", name: "Mod Starter Kit", priceCents: 5800, imageUrl: img("1518770660439-4636190af475") },
  { slug: "eliquid-60ml-tobacco", brand: "Brand B", name: "E-liquid 60ml · Tobacco", priceCents: 1500, imageUrl: img("1615485290382-441e4d049cb5") },
  { slug: "pod-cartridge-x2", brand: "Brand C", name: "Pod Cartridge ×2", priceCents: 900, imageUrl: img("1523275335684-37898b6baf30") },
  { slug: "carry-case", brand: "Brand D", name: "Carry Case", priceCents: 800, imageUrl: img("1553062407-98eeb64c6a62") },
];

export const categories: Category[] = [
  { slug: "devices", name: "Devices", count: 48, imageUrl: img("1527137342181-19aab11a8ee8", 600) },
  { slug: "e-liquids", name: "E-liquids", count: 210, imageUrl: img("1608571423902-eed4a5ad8108", 600) },
  { slug: "pods", name: "Pods", count: 64, imageUrl: img("1523275335684-37898b6baf30", 600) },
  { slug: "coils", name: "Coils", count: 37, imageUrl: img("1585386959984-a4155224a1ad", 600) },
  { slug: "disposables", name: "Disposables", count: 92, imageUrl: img("1556742049-0cfed4f6a45d", 600) },
  { slug: "accessories", name: "Accessories", count: 55, imageUrl: img("1553062407-98eeb64c6a62", 600) },
  { slug: "nicotine-salts", name: "Nicotine salts", count: 118, imageUrl: img("1615485290382-441e4d049cb5", 600) },
];

export const brands: Brand[] = ["A", "B", "C", "D", "E", "F", "G", "H"].map(
  (l) => ({
    slug: `brand-${l.toLowerCase()}`,
    name: `Brand ${l}`,
    description:
      "A short description of the brand, where it comes from and what it is known for.",
    productCount: 24,
  }),
);

export const heroImage = img("1527137342181-19aab11a8ee8", 1200);

export const suggestions = [
  "Mint nic salt 30ml",
  "Menthol e-liquid 60ml",
  "Mint pod cartridge ×2",
];

export const nicotineStrengths = ["0mg", "3mg", "6mg", "12mg", "20mg"];
export const flavors = ["Tobacco", "Mint", "Fruit", "Dessert"];
export const vgPgRatios = ["50/50", "70/30", "80/20"];

export const formatPrice = (n: number) => `$${n.toFixed(2)}`;
