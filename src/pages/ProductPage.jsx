// src/pages/ProductPage.jsx
import { useParams } from "react-router-dom";

export default function ProductPage() {
  const { id } = useParams();

  // 👉 Dummy produktdata – du kan erstatte med real data senere
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
    // osv.
  ];

  const product = products.find((p) => p.id === id);

  if (!product) return <p style={{ padding: "20px" }}>Produkt ikke fundet.</p>;

  return (
    <main style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h1>{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "100%", borderRadius: "8px", marginBottom: "20px" }}
      />
      <p><strong>Mærke:</strong> {product.brand}</p>
      <p><strong>Pris:</strong> {product.price}</p>
      <p>{product.description}</p>
      <button style={{ marginTop: "20px", padding: "10px 20px", background: "#f4a740", color: "#fff", border: "none", borderRadius: "6px" }}>
        Læg i kurv
      </button>
    </main>
  );
}
