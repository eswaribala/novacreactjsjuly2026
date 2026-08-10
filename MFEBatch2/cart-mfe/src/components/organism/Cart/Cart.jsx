import {useDispatch, useSelector} from "react-redux";
import { ShoppingCart } from "lucide-react";

function Cart() {

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return(
    <>
    {/*header*/}
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4"><ShoppingCart className="inline-block mr-2" />Added To Cart</h1>
      <span>  <p>{cartCount} items in your cart</p> </span>

    </div>
    </>
  )
}

export default Cart;