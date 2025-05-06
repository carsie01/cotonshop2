// src/pages/CartPage.jsx
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    totalPrice,
  } = useCart();

  return (
    <main style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
      <h1>🛒 Din Kurv</h1>

      {cart.length === 0 ? (
        <p>Din kurv er tom.</p>
      ) : (
        <>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cart.map((item) => (
              <li
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "1px solid #ccc",
                  padding: "10px 0",
                }}
              >
                <div>
                  <strong>{item.name}</strong> <br />
                  {item.price} × {item.quantity}
                </div>
                <div style={{ display: "flex", gap: "6px" }}>
                  <button onClick={() => addToCart(item)}>+</button>
                  <button onClick={() => removeFromCart(item.id)}>-</button>
                </div>
              </li>
            ))}
          </ul>

          <h3 style={{ marginTop: "20px" }}>
            Total: {totalPrice.toFixed(2)} kr
          </h3>

          <button
            onClick={clearCart}
            style={{
              marginTop: "10px",
              backgroundColor: "#f44336",
              color: "#fff",
              border: "none",
              padding: "10px 15px",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Tøm kurv
          </button>
        </>
      )}
    </main>
  );
}
