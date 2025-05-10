import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import products from "../data/products"; // ✅ brug dine rigtige produkter
import ProductCard from "../components/ProductCard";

export default function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === id);
  const related = products.filter((p) => p.id !== id).slice(0, 3);

  if (!product)
    return <p style={{ padding: "20px" }}>Produkt ikke fundet: {id}</p>;

  return (
    <main style={{ padding: "20px", maxWidth: "1000px", margin: "auto" }}>
      <section>
        <h1>{product.name}</h1>
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%",
            borderRadius: "8px",
            marginBottom: "20px",
          }}
        />
        <p>
          <strong>Mærke:</strong> {product.brand}
        </p>
        <p>
          <strong>Pris:</strong> {product.price}
        </p>
        <p>{product.description}</p>
        <button
          onClick={() => addToCart(product)}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            background: "#f4a740",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Læg i kurv
        </button>
      </section>

      {/* 🔁 Relaterede produkter */}
      <section style={{ marginTop: "50px" }}>
        <h2>Relaterede produkter</h2>
        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            marginTop: "20px",
          }}
        >
          {related.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </main>
  );
}
