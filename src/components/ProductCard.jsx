import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import AddToCartModal from "./AddToCartModal";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [showModal, setShowModal] = useState(false);

  const handleNavigate = () => {
    navigate(`/produkt/${product.id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
    setShowModal(true);
  };

  return (
    <>
      <div
        className="product-card"
        onClick={handleNavigate}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && handleNavigate()}
      >
        <img src={product.image} alt={product.alt || product.name} />
        <p className="brand">{product.brand}</p>
        <p>{product.name}</p>
        <p>{product.price}</p>
        <div className="card-actions">
          <button className="add-to-cart" onClick={handleAddToCart}>
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

      {showModal && (
        <AddToCartModal
          product={product}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}
