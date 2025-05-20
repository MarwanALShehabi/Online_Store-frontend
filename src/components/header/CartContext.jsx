import { createContext, useContext, useState } from "react";

// إنشاء الـ Context
// @ts-ignore
const CartContext = createContext();

// توفير الـ Context للأطفال
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // إضافة منتج للسلة
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  // إزالة منتج من السلة
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook لاستخدام السلة بسهولة
export const useCart = () => useContext(CartContext);
