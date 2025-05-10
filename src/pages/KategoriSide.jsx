import { useParams } from "react-router-dom";
import products from "../data/products";
import ProductList from "../components/ProductList";
import "./Nyheder.css";

export default function KategoriSide() {
  const { kategori = "nyheder", slug } = useParams();

  // Sørg for at sti matcher formatering i products.js
  const sti = slug
    ? `/${decodeURIComponent(kategori).toLowerCase()}/${decodeURIComponent(slug).toLowerCase()}`
    : `/${decodeURIComponent(kategori).toLowerCase()}`;

  const filtreredeProdukter = products.filter((p) =>
    p.kategorier?.some((kat) =>
      kat === sti ||
      kat.startsWith(`${sti}/`) ||
      (!slug && kat.startsWith(`/${kategori}`))
    )
  );

  const titleMap = {
    nyheder: "🆕 Nyheder",
    tilbud: "💸 Tilbud",
    ollipet: "🐾 Ollipet",
  };

  return (
    <ProductList
      products={filtreredeProdukter}
      title={titleMap[kategori.toLowerCase()] || "📦 Kategori"}
    />
  );
}
