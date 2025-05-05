// src/pages/CartPage.jsx
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart } = useCart();

  const total = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(" kr", "").replace(",", "."));
    return sum + price;
  }, 0);

  return (
    <main style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
      <h1>🛒 Din Kurv</h1>

      {cart.length === 0 ? (
        <p>Din kurv er tom.</p>
      ) : (
        <>
          <ul>
            {cart.map((item, i) => (
              <li key={i} style={{ marginBottom: "10px" }}>
                {item.name} – {item.price}
              </li>
            ))}
          </ul>
          <h3>Total: {total.toFixed(2)} kr</h3>
        </>
      )}
    </main>
  );
}
