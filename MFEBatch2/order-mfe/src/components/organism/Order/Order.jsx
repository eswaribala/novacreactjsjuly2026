import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

function Order() {
    const navigate = useNavigate();
    const cartItems = useSelector((state) => state.cart.items||[]);
    const total = cartItems.reduce((acc, item) => acc + Number(item.price) * item.quantity, 0);
    const placeOrder = () => {
        // Here you can add logic to handle order placement, such as sending data to a backend server.
        // For now, we'll just navigate to the order confirmation page.
       navigate("/payment", {
    state: {
      amount: total
    }
  });
    }
    return (
        <>
        <div className="max-w-4xl mx-auto p-6">

      <h1 className="text-2xl font-bold mb-6">
        Checkout
      </h1>

      {cartItems.map((item) => (
        <div
          key={item.productId}
          className="
            flex
            justify-between
            border-b
            py-4
          "
        >
          <div>
            <h3 className="font-semibold">
              {item.name}
            </h3>

            <p>
              Quantity: {item.quantity}
            </p>
          </div>

          <div>
            ₹{Number(item.price) * item.quantity}
          </div>

        </div>
      ))}

      <div className="mt-6 text-right">

        <h2 className="text-xl font-bold">
          Total: ₹{total}
        </h2>

        <button
          onClick={placeOrder}
          className="
            mt-4
            bg-green-600
            text-white
            px-6
            py-3
            rounded-lg
          "
        >
          Place Order
        </button>   

      </div>

    </div>
  
        </>
    )
}

export default Order;