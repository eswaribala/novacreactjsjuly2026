import { useSelector, useDispatch } from "react-redux";
import { ShoppingCart } from "lucide-react";
import {useNavigate} from "react-router-dom";
import {Plus, Minus,Trash} from "lucide-react";

function Cart() {
  const navigate = useNavigate();
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
    dispatch({ type: "cart/removeFromCart", payload: productId });
  }

  const handleAddItem = (productId) => {
    // Dispatch an action to add the item to the cart
    // You can implement this function based on your Redux setup
    dispatch({ type: "cart/incrementFromCart", payload: productId });
  }
  const handleDecrementItem = (productId) => {
    // Dispatch an action to decrement the item in the cart
    // You can implement this function based on your Redux setup
    dispatch({ type: "cart/decrementFromCart", payload: productId });
  }

  const handleCheckout = () => {
    // Implement your checkout logic here
    console.log("Proceeding to checkout with items:", cartItems);
    navigate("/checkout");
  }
  return (
    <div
      className="
        overflow-hidden
        w-200
        ml-50
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
                    grid grid-cols-6 gap-2
                  "
>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">
                    Quantity: {item.quantity}
                </p>
                <p className="text-gray-800 font-bold">{new 
             Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(item.price)}</p>
                <div>
                <button
                    onClick={() =>
                      handleAddItem(
                        getProductId(item)
                      )
                    }
                    className="
                      rounded
                      w-10
                      bg-green-500
                      px-4
                      py-2
                      font-bold
                      text-white
                      hover:bg-green-600
                    "
                  >
                   <Plus size={16} />
                  </button>
                  </div>
                  <div>
                  <button
                    onClick={() =>
                      handleDecrementItem(
                        getProductId(item)
                      )
                    }
                    className="
                      rounded
                      bg-yellow-500
                      px-4
                      py-2
                      w-10
                      font-bold
                      text-white
                      hover:bg-yellow-600
                    "
                  >
                    <Minus size={16} />
                  </button>
                  </div>
                  <div>
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
                      w-15
                      font-bold
                      text-white
                      hover:bg-red-600
                    "
                  >
                    <Trash size={16} />
                  </button>
                  </div>
               </div>

              ))}
              </div>
              {cartItems.length > 0 && (
                <div>
                  {/* Additional content for non-empty cart can go here */}
                   <button
          onClick={handleCheckout}
          className="
            mt-6
            bg-orange-500
            hover:bg-orange-600
            text-white
            px-6
            py-3
            rounded-lg
            font-semibold
          "
        >
          Proceed to Checkout
        </button>
                </div>
              )}
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