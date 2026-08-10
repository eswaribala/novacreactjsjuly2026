import { useSelector } from "react-redux";
import { ShoppingCart } from "lucide-react";

function Cart() {
  const cartItems = useSelector(
    (state) => state.cart.items 
  );

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div
      className="
        overflow-hidden
        rounded-xl
        border-2
        border-orange-500
        bg-white
        shadow-lg
      "
    >
      {/* Header */}

      <div
        className="
          flex
          items-center
          justify-between
          bg-orange-500
          px-6
          py-4
          text-white
        "
      >
        <h2 className="text-xl font-bold">
          🛒 Cart
        </h2>

        <span
          className="
            rounded-full
            bg-red-600
            px-3
            py-1
            font-bold
          "
        >
          {cartCount}
        </span>
      </div>

        {/* Cart Items */}
        <div className="p-4">
          {cartItems.length === 0 ? (
            <p className="text-gray-500">
              Your cart is empty.
            </p>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li key={item.id} className="mb-2">
                  {item.name} - Quantity: {item.quantity}
                </li>
              ))}
            </ul>
          )}
        </div>

    </div>
  );
}

export default Cart;