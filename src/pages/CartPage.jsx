
import { useCart } from "../context/CartContext";
import "./CartPage.css";

export default function CartPage() {
  const {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    totalPrice,
  } = useCart();

  const shipping = totalPrice >= 499 ? 0 : 39;
  const freeShippingLeft = Math.max(0, 499 - totalPrice).toFixed(2);
  const totalWithShipping = (totalPrice + shipping).toFixed(2);

  return (
    <main className="cart-page">
      <h1>Indkøbskurv</h1>

      {cart.length === 0 ? (
        <p>Din kurv er tom.</p>
      ) : (
        <div className="cart-container">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Produkt</th>
                <th>Beskrivelse</th>
                <th>Antal</th>
                <th>Pris</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img src={item.image} alt={item.name} className="cart-img" />
                  </td>
                  <td>
                    <div className="product-name">{item.name}</div>
                    <small>{item.brand}</small>
                  </td>
                  <td>
                    <div className="quantity-control">
                      <button onClick={() => removeFromCart(item.id)}>-</button>
                      <input type="text" readOnly value={item.quantity} />
                      <button onClick={() => addToCart(item)}>+</button>
                    </div>
                  </td>
                  <td>{(item.price * item.quantity).toFixed(2)} DKK</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="cart-summary">
            <p><strong>Sub-Total:</strong> {totalPrice.toFixed(2)} DKK</p>
            <p><strong>Levering:</strong> {shipping.toFixed(2)} DKK</p>
            <p><strong>Total:</strong> {totalWithShipping} DKK</p>

            {shipping > 0 && (
              <div className="free-shipping-alert">
                Gratis levering ved køb over 499,00 DKK!<br />
                <strong>Tilføj {freeShippingLeft} DKK for at få gratis fragt</strong>
              </div>
            )}

            <div className="summary-actions">
              <button className="checkout">Til kassen</button>
              <button className="clear" onClick={clearCart}>Tøm kurv</button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
