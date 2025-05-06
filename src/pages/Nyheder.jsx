// src/pages/Nyheder.jsx
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import "./Nyheder.css"; // Husk at oprette denne

export default function Nyheder() {
  // Dummy-produkter
  const ALL_PRODUCTS = Array.from({ length: 70 }, (_, i) => ({
    id: `nyh${i + 1}`,
    name: `Produkt ${i + 1}`,
    image: `/images/nyhed${(i % 6) + 1}.jpg`, // Roterer mellem 6 billeder
    brand: "Cotonshoppen",
    price: `${99 + i * 5} kr`,
    alt: `Produkt ${i + 1}`,
  }));

  const [visibleCount, setVisibleCount] = useState(20);
  const visibleProducts = ALL_PRODUCTS.slice(0, visibleCount);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 20);
  };

  return (
    <main className="nyheder-container">
      <h1 className="nyheder-title">🆕 Nyheder</h1>
      <p className="nyheder-subtext">
        Se vores nyeste produkter og tilføjelser her:
      </p>

      <div className="nyheder-grid">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {visibleCount < ALL_PRODUCTS.length && (
        <div className="se-flere-wrapper">
          <button className="se-flere-knap" onClick={handleShowMore}>
            Se flere
          </button>
        </div>
      )}
    </main>
  );
}
