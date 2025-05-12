import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import "./ProductCarousel.css";

export default function ProductCarousel({ title, products }) {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  // Responsivt: Juster items per page
  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width < 600) {
        setItemsPerPage(1);
      } else if (width < 900) {
        setItemsPerPage(2);
      } else if (width < 1200) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(4);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const next = () => {
    setStartIndex((prev) =>
      prev + itemsPerPage >= products.length ? 0 : prev + itemsPerPage
    );
  };

  const prev = () => {
    setStartIndex((prev) =>
      prev - itemsPerPage < 0
        ? products.length - itemsPerPage
        : prev - itemsPerPage
    );
  };

  const visibleProducts = products.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <section className="product-carousel" aria-label={title}>
      <h2>{title}</h2>

      <div className="carousel-content">
        <button
          className="arrow-button left"
          onClick={prev}
          aria-label="Forrige produkter"
        >
          ◀
        </button>

        <div className="product-track">
          {visibleProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              className="carousel-card"
            />
          ))}
        </div>

        <button
          className="arrow-button right"
          onClick={next}
          aria-label="Næste produkter"
        >
          ▶
        </button>
      </div>

      <div className="carousel-dots" role="tablist">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            className={`dot ${
              i === Math.floor(startIndex / itemsPerPage) ? "active" : ""
            }`}
            aria-label={`Gå til side ${i + 1}`}
            role="tab"
            onClick={() => setStartIndex(i * itemsPerPage)}
          />
        ))}
      </div>
    </section>
  );
}
