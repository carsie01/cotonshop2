import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import { Heart } from "lucide-react";
import "./ProductPage.css";

export default function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [isFavorite, setIsFavorite] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const product = products.find((p) => p.id === id);
  const related = products.filter((p) => p.id !== id).slice(0, 3);
  const isPopular = product?.tags?.includes("populaer");

  const calculateDiscount = (oldPrice, newPrice) =>
    Math.round(((oldPrice - newPrice) / oldPrice) * 100);

  const discount = product?.oldPrice
    ? calculateDiscount(product.oldPrice, product.price)
    : null;

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites") || "[]");
    setIsFavorite(favs.includes(product?.id));
  }, [product?.id]);

  const toggleFavorite = () => {
    const favs = JSON.parse(localStorage.getItem("favorites") || "[]");
    const updated = isFavorite
      ? favs.filter((pid) => pid !== product.id)
      : [...favs, product.id];

    localStorage.setItem("favorites", JSON.stringify(updated));
    setIsFavorite(!isFavorite);
  };

  if (!product) return <p className="not-found">Produkt ikke fundet: {id}</p>;

  return (
    <main className="product-detail">
      <div className="product-container">
        {/* Billede */}
        <div className="product-images">
          {(isPopular || discount) && (
            <div className="top-badges">
              {isPopular && <span className="badge">POPULÆR</span>}
              {discount && (
                <span className="discount-badge">SPAR {discount}%</span>
              )}
            </div>
          )}
          <img
            src={product.image}
            alt={product.alt || product.name}
            className="main-image"
          />
        </div>

        {/* Info */}
        <div className="product-info">
        <h1>{product.name}</h1>
          <p className="brand">Fra: {product.brand}</p>
          

          {/* Highlights */}
          {product.highlights?.length > 0 && (
            <>
              <ul className="highlights">
                {product.highlights.map((point, i) => (
                  <li key={i}>✔️ {point}</li>
                ))}
              </ul>
              <a href="#product-description" className="see-more-link">
                Læs mere om produktet her
              </a>
            </>
          )}

          {/* Pris */}
          <div className="price-box">
            <p className="product-price">
              {product.price} kr
              {product.oldPrice && (
                <>
                  <span className="old-price">{product.oldPrice} kr</span>
                </>
              )}
            </p>
          </div>

          {/* Kurv og favorit */}
          <div className="cart-actions">
            <input type="number" defaultValue={1} min={1} />
            <button onClick={() => addToCart(product)} className="buy-button">
              Læg i kurv
            </button>
            <button
              className="fav-button"
              onClick={toggleFavorite}
              aria-label="Føj til favoritter"
            >
              <Heart
                size={20}
                strokeWidth={1.75}
                fill={isFavorite ? "#E37500" : "none"}
                color={isFavorite ? "#E37500" : "#333"}
              />
            </button>
          </div>

          {/* Trust info */}
          <div className="shipping-info fixed">
            <p>✅ Dansk kundeservice og topkarakter på Trustpilot</p>
            <p>✅ Tryghed, når du handler</p>
            <p>✅ Gratis fragt over 499 kr. og 60 dages returret</p>
            <p>✅ Mulighed for afhentning i Aarhus</p>
          </div>
        </div>
      </div>

      {/* HTML-beskrivelse */}
      <section id="product-description" className="product-description">
        <h2>Om produktet</h2>
        <div className={`description-html ${showFullDescription ? "expanded" : "collapsed"}`}>
          <div className="html-inner" dangerouslySetInnerHTML={{ __html: product.description }} />
        </div>
        {!showFullDescription && (
          <button
            onClick={() => setShowFullDescription(true)}
            className="read-more-button"
          >
            Læs mere
          </button>
        )}
      </section>

      {/* Relaterede produkter */}
      <section className="related-products">
        <h2>Relaterede produkter</h2>
        <div className="related-grid">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>

      {/* Anbefalet */}
      {products.some((p) => p.tags?.includes("anbefalet")) && (
        <section className="recommended-products">
          <h2>Anbefalet til dig</h2>
          <div className="related-grid">
            {products
              .filter((p) => p.tags?.includes("anbefalet") && p.id !== product.id)
              .slice(0, 3)
              .map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
          </div>
        </section>
      )}
    </main>
  );
}
