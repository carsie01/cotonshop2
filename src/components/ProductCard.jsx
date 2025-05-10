import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import AddToCartModal from "./AddToCartModal";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [showModal, setShowModal] = useState(false);

  console.log("Klikbart produkt:", product?.id); // ✅ nu er det inde i funktionen

  const handleNavigate = () => {
    if (!product?.id) return;
    navigate(`/produkt/${product.id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation(); // forhindrer klik på kortet
    addToCart(product);
    setShowModal(true);
  };

  return (
    <>
      <article
        className="product-card"
        onClick={handleNavigate}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && handleNavigate()}
      >
        <img
          src={product.image}
          alt={product.alt || product.name}
          className="product-image"
        />
        <p className="brand">{product.brand}</p>
        <p className="product-name">{product.name}</p>
        <p className="product-price">{product.price}</p>

        <div className="card-actions">
          <button
            className="add-to-cart"
            onClick={handleAddToCart}
            type="button"
          >
            Læg i kurv
          </button>
          <button
            onClick={(e) => e.stopPropagation()}
            type="button"
            aria-label="Føj til favoritter"
          >
            🤍
          </button>
        </div>
      </article>

      {showModal && (
        <AddToCartModal
          product={product}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}
