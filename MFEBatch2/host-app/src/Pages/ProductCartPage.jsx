import { lazy } from "react";

const ProductList = lazy(() =>
  import("productList/ProductListMFE")
);

const Cart = lazy(() =>
  import("cart/cartMFE")
);  
function ProductCartPage() {

    return (
        <>
        <ProductList />
        <Cart/>
        
        </>
    )

    
}

export default ProductCartPage;