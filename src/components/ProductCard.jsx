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
  const [isFavorite, setIsFavorite] = useState(false);

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
  };

  return (
    <>
      <article
        className={`product-card ${className}`}
        onClick={handleNavigate}
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && handleNavigate()}
        role="group"
        aria-label={`Produkt: ${product.name}, mærke: ${product.brand}, pris: ${product.price} kr${product.oldPrice ? `, førpris: ${product.oldPrice} kr` : ""}${product.rabat ? `, rabat: ${product.rabat}%` : ""}`}
      >
        <a
          href={`/produkt/${product.id}`}
          className="sr-only"
          aria-hidden="false"
        >
          Gå til produkt: {product.name}
        </a>

        <div className="image-wrapper">
          {product?.rabat && (
            <span
              className="product-badge badge-discount"
              aria-label={`Rabat: ${product.rabat}%`}
            >
              -{product.rabat}%
            </span>
          )}
          {product?.nyhed && (
            <span className="product-badge badge-new" aria-label="Nyhed">
              NYHED
            </span>
          )}
       <div className="product-image-container">
  <img
    src={product.image}
    alt={product.alt || `Billede af ${product.name}`}
    className="product-image main"
  />
  {product.hoverImage && (
    <img
      src={product.hoverImage}
      alt=""
      aria-hidden="true"
      className="product-image hover"
    />
  )}
</div>
        </div>

        <h3 className="product-name">{product.name}</h3>
        <p className="brand">{product.brand}</p>

        <div className="price-wrapper">
          <span className="product-price">{product.price} kr</span>
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
    aria-label="Føj til kurv"
  >
    Tilføj kurv
  </button>

  <button
    onClick={toggleFavorite}
    type="button"
    aria-label={isFavorite ? "Fjern fra favoritter" : "Føj til favoritter"}
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
