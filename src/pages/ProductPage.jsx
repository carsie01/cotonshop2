// src/pages/ProductPage.jsx
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard"; // Husk at importere det


export default function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const products = [
    {
      id: "123",
      name: "Paris City sæt",
      image: "/images/product1.jpg",
      price: "376 kr",
      brand: "Ollipet",
      description: "Komfortabelt sæt til byens hunde.",
    },
    {
      id: "456",
      name: "Hvalpegård",
      image: "/images/product2.jpg",
      price: "449 kr",
      brand: "PawHut",
      description: "Sikker foldbar hvalpegård til hjemmet.",
    },
    {
      id: "789",
      name: "Hundevogn",
      image: "/images/product3.jpg",
      price: "999 kr",
      brand: "DogRider",
      description: "Tre-hjulet vogn til små og ældre hunde.",
    },
    {
      id: "321",
      name: "Hundeseng XL",
      image: "/images/product4.jpg",
      price: "299 kr",
      brand: "LuksusBed",
      description: "Blød og rummelig hundeseng.",
    },
  ];

  const product = products.find((p) => p.id === id);
  const related = products.filter((p) => p.id !== id).slice(0, 3); // Vælg 3 relaterede

  if (!product)
    return <p style={{ padding: "20px" }}>Produkt ikke fundet.</p>;

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
