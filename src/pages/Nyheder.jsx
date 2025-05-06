// src/pages/Nyheder.jsx
import { useLocation } from "react-router-dom";
import products from "../data/products";
import ProductList from "../components/ProductList";

export default function Nyheder() {
  const { pathname } = useLocation();

  // Filtrer produkter: enten alle nyheder eller kun underkategori
  const filtreredeProdukter =
    pathname === "/nyheder"
      ? products.filter((p) =>
          p.kategorier?.some((kat) => kat.startsWith("/nyheder"))
        )
      : products.filter((p) => p.kategorier?.includes(pathname));

  return (
    <ProductList
      products={filtreredeProdukter}
      title="🆕 Nyheder"
    />
  );
}
