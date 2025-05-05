import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./ProductCarousel.css";

export default function ProductCarousel({ title, products }) {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const next = () => {
    setStartIndex((prev) =>
      prev + itemsPerPage >= products.length ? 0 : prev + itemsPerPage
    );
  };

  const prev = () => {
    setStartIndex((prev) =>
      prev - itemsPerPage < 0 ? products.length - itemsPerPage : prev - itemsPerPage
    );
  };

  const visibleProducts = products.slice(startIndex, startIndex + itemsPerPage);

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

        <div
          className={`product-track ${
            visibleProducts.length < itemsPerPage ? "centered" : ""
          }`}
        >
          {visibleProducts.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => navigate(`/produkt/${product.id}`)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) =>
                e.key === "Enter" && navigate(`/produkt/${product.id}`)
              }
            >
              <img src={product.image} alt={product.alt} />
              <p className="brand">{product.brand}</p>
              <p>{product.name}</p>
              <p>{product.price}</p>
              <div className="card-actions">
                <button
                  className="add-to-cart"
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product);
                  }}
                >
                  Læg i kurv
                </button>
                <button
                  onClick={(e) => e.stopPropagation()}
                  aria-label="Føj til favoritter"
                >
                  🤍
                </button>
              </div>
            </div>
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
