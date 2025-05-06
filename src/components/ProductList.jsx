// src/components/ProductList.jsx
import { useState } from "react";
import ProductCard from "./ProductCard";
import "./ProductList.css";

export default function ProductList({ products, title }) {
  const [visibleCount, setVisibleCount] = useState(20);
  const visibleProducts = products.slice(0, visibleCount);

  return (
    <main className="productlist-container" aria-label="Produktliste">
      <h1 className="productlist-title">{title}</h1>

      {visibleProducts.length === 0 ? (
        <p className="productlist-empty">Ingen produkter fundet.</p>
      ) : (
        <>
          <div className="productlist-grid">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {visibleCount < products.length && (
            <div className="productlist-button-wrapper">
              <button
                onClick={() => setVisibleCount((prev) => prev + 20)}
                className="productlist-button"
              >
                Se flere
              </button>
            </div>
          )}
        </>
      )}
    </main>
  );
}
