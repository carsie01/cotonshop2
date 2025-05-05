import { createContext, useContext, useState } from "react";

// Opret context
const CartContext = createContext();

// Hook til at bruge kurven
export function useCart() {
  return useContext(CartContext);
}

// Provider-komponenten
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Tilføj produkt til kurv
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  // Fjern produkt fra kurv (efter id)
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
    return sum + price;
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
