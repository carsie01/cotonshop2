import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

// Hook til brug
export function useCart() {
  return useContext(CartContext);
}

// Provider
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Hent fra localStorage ved første load
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) setCart(storedCart);
  }, []);

  // Gem i localStorage når cart ændres
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Tilføj produkt – læg til mængde hvis eksisterer
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Fjern ét produkt helt (kan også udvides til "decreaseQuantity")
  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  // Tøm hele kurven
  const clearCart = () => {
    setCart([]);
  };

  // Udregn samlet pris
  const totalPrice = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(" kr", "").replace(",", "."));
    return sum + price * item.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
