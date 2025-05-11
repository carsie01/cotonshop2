import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import "./ProductPage.css";

export default function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === id);
  const related = products.filter((p) => p.id !== id).slice(0, 3);
  const isPopular = product?.tags?.includes("populaer");

  if (!product) return <p className="not-found">Produkt ikke fundet: {id}</p>;

  return (
    <main className="product-detail">
      <div className="product-container">
        {/* Venstre: billede */}
        <div className="product-images">
          {isPopular && <span className="badge">POPULÆR</span>}
          <img
            src={product.image}
            alt={product.alt || product.name}
            className="main-image"
          />
          
        </div>

        {/* Højre: info */}
        <div className="product-info">
          <p className="brand">Fra: {product.brand}</p>
          <h1>{product.name}</h1>

          {/* Highlights + se mere */}
          {product.highlights?.length > 0 && (
            <>
              <ul className="highlights">
                {product.highlights.map((point, i) => (
                  <li key={i}>✔️ {point}</li>
                ))}
              </ul>
              <a href="#product-description" className="see-more-link">
                Se mere om produktet ↓
              </a>
            </>
          )}

          <p className="product-price">{product.price}</p>

          <div className="cart-actions">
            <input type="number" defaultValue={1} min={1} />
            <button onClick={() => addToCart(product)} className="buy-button">
              Læg i kurv
            </button>
            <button className="fav-button" aria-label="Føj til favoritter">🤍</button>
          </div>

          {/* Faste shipping info – vises altid */}
          <div className="shipping-info fixed">
            <p>✅ Dansk kundeservice og topkarakter på Trustpilot</p>
            <p>✅ Tryghed, når du handler</p>
            <p>✅ Gratis fragt over 499 kr. og 60 dages returret</p>
            <p>✅ Mulighed for afhentning i Aarhus</p>
          </div>
        </div>
      </div>

      {/* Beskrivelse */}
      <section id="product-description" className="product-description">
        <h2>Om produktet</h2>
        <p>{product.description}</p>
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
      {/* ⭐ Anbefalede produkter */}
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
