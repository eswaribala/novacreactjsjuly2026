
import {useSelector,useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchProducts} from "../../../redux/features/products/productSlicer.js";

function ViewProducts() {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.products);
    
    useEffect(() => {
        dispatch(fetchProducts());
        const handleFocus = () => {
    dispatch(fetchProducts());
  };

  const productChannel = new BroadcastChannel("products-channel");

  productChannel.onmessage = (event) => {
    if (event.data?.type === "PRODUCT_ADDED") {
      dispatch(fetchProducts());
    }
  };

  window.addEventListener("focus", handleFocus);

  return () => {
    window.removeEventListener("focus", handleFocus);
    productChannel.close();
  };
    }, [dispatch]);

    if (loading) {
        return <p>Loading products...</p>;
    }
    if (error) {
        return <p>Error: {error}</p>;
    }
      
    //check if products is an array and has elements before rendering the table
    if (!Array.isArray(products) || products.length === 0) {
        return <p>No products available.</p>;
    }
    return (
        <div>
            <h2>Products</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Price</th>                        
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product._id || product.id}>
                            <td>{ product.productId}</td>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.category}</td>
                            <td>{product.price}</td>                            
                            <td>{product.stock}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ViewProducts;