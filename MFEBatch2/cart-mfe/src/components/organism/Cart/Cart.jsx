import { useSelector, useDispatch } from "react-redux";
import { ShoppingCart } from "lucide-react";

function Cart() {
  const cartItems = useSelector(
    (state) => state.cart.items 
  );

   const getProductId = (item) => {
    return item.id || item.productId || item._id;
  }
  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const dispatch = useDispatch();
  const handleRemoveItem = (productId) => {
    // Dispatch an action to remove the item from the cart
    // You can implement this function based on your Redux setup
    dispatch({ type: "cart/removeItem", payload: productId });
  }

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
        <div className="p-5">

          {cartItems.length === 0 ? (
           <div
            className="
              flex
              min-h-64
              flex-col
              items-center
              justify-center
            "

          >
            <div className="text-7xl">
              🛒
            </div>

            <p
              className="
                mt-4
                text-lg
                text-gray-500
              "
            >
              Your cart is empty
            </p>
          </div>

          ) : (
            <>
            <div className="space-y-3">
              {cartItems.map((item) => (
               <div  key={getProductId(item)}
                  className="
                    grid grid-cols-4 gap-3
                  "
>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">
                    Quantity: {item.quantity}
                </p>
                <p className="text-gray-800 font-bold">{new 
             Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(item.price)}</p>
                 <button
                    onClick={() =>
                      handleRemoveItem(
                        getProductId(item)
                      )
                    }
                    className="
                      rounded
                      bg-red-500
                      px-4
                      py-2
                      text-white
                      hover:bg-red-600
                    "
                  >
                    Remove
                  </button>

               </div>

              ))}
              </div>
            </>
          )}
        </div>

         {/* Total */}

            <div
              className="
                mt-5
                flex
                justify-between
                border-t
                pt-4
                text-xl
                font-bold
              "
            >
              <span>Total</span>

              <span>
                {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(cartItems.reduce((total, item) => total + item.price * item.quantity, 0))}
              </span>
            </div>

            <button
              onClick={() => dispatch({ type: "cart/clearCart" })}
              className="
                mt-5
                w-full
                rounded-lg
                bg-gray-700
                py-2
                text-white
                hover:bg-gray-800
              "
            >
              Clear Cart
            </button>


    </div>
  );
}

export default Cart;