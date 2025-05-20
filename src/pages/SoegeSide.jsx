import { useLocation } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import "./KategoriSide.css";

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
    <main className="kategori-side">
      <div className="kategori-layout">
       
        <aside className="filters" style={{ visibility: "hidden" }}></aside>

        <section className="produkt-oversigt">
          <h1>Søgeresultater</h1>
          <p className="intro-text">
            Resultater for: <strong>{query}</strong>
          </p>

          {resultater.length > 0 ? (
            <div className="product-grid">
              {resultater.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="intro-text">Ingen produkter matchede din søgning.</p>
          )}
        </section>
      </div>
    </main>
  );
}
