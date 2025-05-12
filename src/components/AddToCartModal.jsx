import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import products from "../data/products";
import ProductCard from "./ProductCard";
import "./AddToCartModal.css";

export default function AddToCartModal({ product, onClose }) {
  const navigate = useNavigate();
  const modalRef = useRef(null);

  // Luk med Escape
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Sæt fokus i modal
  useEffect(() => {
    modalRef.current?.focus();
  }, []);

  if (!product) return null;

  // Forslagsprodukter (fx "populær")
  const suggestions = products
    .filter((p) => p.id !== product.id && p.tags?.includes("populaer"))
    .slice(0, 4);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        ref={modalRef}
      >
        <button className="modal-close" onClick={onClose} aria-label="Luk vindue">
          &times;
        </button>

        <div className="modal-header">
        <div>
            <h2 id="modal-title">{product.name}</h2>
            <p className="modal-confirmation">Produktet er tilføjet indkøbskurven!</p>
          </div>
          <img
            src={product.image}
            alt={product.alt || product.name}
            className="modal-product-img"
          />
         
        </div>

        <div className="modal-actions">
          <button onClick={() => navigate("/kurv")}>Se indkøbskurv</button>
          <button onClick={onClose}>Shop videre</button>
        </div>

        {suggestions.length > 0 && (
          <div className="modal-suggestions">
            <h3>Forslag til dig</h3>
            <div className="modal-suggestion-grid">
              {suggestions.map((item) => (
                <ProductCard
                  key={item.id}
                  product={item}
                  className="modal-card" // ✅ Gør kort mindre og tilpasset
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
