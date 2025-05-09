import { useParams } from "react-router-dom";
import products from "../data/products";
import ProductList from "../components/ProductList";
import "./Nyheder.css";

export default function KategoriSide() {
  const { kategori = "nyheder", slug } = useParams(); // fallback til nyheder

  const sti = slug ? `/${kategori}/${slug}` : `/${kategori}`;

  const filtreredeProdukter = products.filter((p) =>
    p.kategorier?.some((kat) =>
      kat === sti || kat.startsWith(`${sti}/`) || (!slug && kat.startsWith(`/${kategori}`))
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
      title={titleMap[kategori] || "📦 Kategori"}
    />
  );
}
