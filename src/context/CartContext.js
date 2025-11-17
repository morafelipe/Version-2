"use client";
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

// --- Proveedor del carrito ---
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((current) => {
      const existing = current.find((p) => p.title === product.title);

      if (existing) {
        return current.map((p) =>
          p.title === product.title
            ? { ...p, quantity: p.quantity + 1 }
            : p
        );
      }

      return [...current, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (title, delta) => {
    setCartItems((current) =>
      current
        .map((item) =>
          item.title === title
            ? { ...item, quantity: Math.max(1, item.quantity + delta) }
            : item
        )
    );
  };

  const removeItem = (title) => {
    setCartItems((current) => current.filter((item) => item.title !== title));
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, updateQuantity, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
