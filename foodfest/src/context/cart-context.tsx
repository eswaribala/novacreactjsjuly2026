import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

export type CartItem = {
  title: string;
  price: string;
  quantity: number;
};

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (title: string, price: string) => void;
  removeFromCart: (title: string) => void;
};

const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (title: string, price: string) => {
    setCartItems((previousItems) => {
      const existingItem = previousItems.find(
        (item) => item.title === title
      );

      if (existingItem) {
        return previousItems.map((item) =>
          item.title === title
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...previousItems,
        {
          title,
          price,
          quantity: 1,
        },
      ];
    });
  };

  const removeFromCart = (title: string) => {
    setCartItems((previousItems) =>
      previousItems
        .map((item) =>
          item.title === title
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}