import { Suspense, lazy } from "react";
import {useDispatch} from 'react-redux';  
import { fetchProducts } from "./redux/features/products/productSlicer.js";
import { useEffect } from "react";
const ProductList = lazy(() =>
  import("productList/ProductListMFE")
);

function App() {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);


  return (
    <Suspense fallback={<p>Loading product list...</p>}>
      <ProductList />
    </Suspense>
  );
}

export default App;