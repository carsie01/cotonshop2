import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import AddToCartModal from "./AddToCartModal";
import { Heart } from "lucide-react";
import "./ProductCard.css";

export default function ProductCard({ product, className = "" }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [showModal, setShowModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false); // 💖 favoritstatus

  const handleNavigate = () => {
    if (!product?.id) return;
    navigate(`/produkt/${product.id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
    setShowModal(true);
  };

  const toggleFavorite = (e) => {
    e.stopPropagation();
    setIsFavorite((prev) => !prev);
    // Her kan du evt. tilføje localStorage eller context-sync
  };

  return (
    <>
      <article
        className={`product-card ${className}`}
        onClick={handleNavigate}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && handleNavigate()}
      >
        <div className="image-wrapper">
          {product?.rabat && (
            <span className="product-badge badge-discount">-{product.rabat}%</span>
          )}
          {product?.nyhed && (
            <span className="product-badge badge-new">NYHED</span>
          )}
          <img
            src={product.image}
            alt={product.alt || product.name}
            className="product-image"
          />
        </div>

        <p className="product-name">{product.name}</p>
        <p className="brand">{product.brand}</p>

        <div className="price-wrapper">
          <span className="product-price">{product.price} </span>
          {product.oldPrice && (
            <span className="old-price">{product.oldPrice} kr</span>
          )}
        </div>

        {product.oldPrice && (
          <p className="savings">
            Du sparer: {(parseFloat(product.oldPrice) - parseFloat(product.price)).toFixed(2)} kr
          </p>
        )}

        <p className="shipping-info">ekskl. levering</p>

        <div className="card-actions">
          <button
            className="add-to-cart"
            onClick={handleAddToCart}
            type="button"
          >
            Læg i kurv
          </button>
          <button
            onClick={toggleFavorite}
            type="button"
            aria-label="Føj til favoritter"
            className="heart-button"
          >
            <Heart
              size={20}
              strokeWidth={1.75}
              fill={isFavorite ? "#E37500" : "none"}
              color={isFavorite ? "#E37500" : "#333"}
            />
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
