// src/pages/SoegeSide.jsx
import { useLocation } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function SoegeSide() {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get("q")?.toLowerCase() || "";

  const resultater = products.filter((p) => {
    const inName = p.name?.toLowerCase().includes(query);
    const inDesc = p.description?.toLowerCase().includes(query);
    const inBrand = p.brand?.toLowerCase().includes(query);
    const inAlt = p.alt?.toLowerCase().includes(query);
    const inCategory = p.kategorier?.some((kat) => kat.toLowerCase().includes(query));
    return inName || inDesc || inBrand || inAlt || inCategory;
  });

  return (
    <main className="nyheder-container">
      <h1 className="nyheder-title">🔍 Søgeresultater</h1>
      <p className="nyheder-subtext">
        Resultater for: <strong>{query}</strong>
      </p>

      {resultater.length > 0 ? (
        <div className="nyheder-grid">
          {resultater.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="nyheder-subtext">Ingen produkter matchede din søgning.</p>
      )}
    </main>
  );
}
