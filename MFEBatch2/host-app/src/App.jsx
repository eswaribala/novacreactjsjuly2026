import { Suspense, lazy } from "react";
import {useDispatch} from 'react-redux';  
import { fetchProducts } from "./redux/features/products/productSlicer.js";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ProductCartPage from "./Pages/ProductCartPage.jsx";

const Order = lazy(() =>
  import("order/OrderMFE")
);
function App() {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);


  return (
    <Suspense fallback={<p>Loading product list...</p>}>
     <Routes>
        <Route path="/" element={<ProductCartPage />} />
         <Route path="/checkout" element={<Order />} />
        <Route path="*" element={<p>Page not found</p>} />
     </Routes>
     </Suspense>
  );
}

export default App;