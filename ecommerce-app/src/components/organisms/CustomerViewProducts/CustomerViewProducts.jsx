
import {useSelector,useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchProducts} from "../../../redux/features/products/productSlicer.js";

function CustomerViewProducts() {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.products);
         
    
    useEffect(() => {
        dispatch(fetchProducts());
        
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
        <>
        <div className="p-4 w-full">
            <h2>Products</h2>
            <table className="w-full border-collapse border border-gray-300">
                <thead className="bg-gray-200">
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
                        <tr key={product._id}>
                            <td>{product.productId}</td>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.category}</td>
                            <td>{product.price}</td>
                            <td>{product.stock}</td>
                            <td>
                                {/* Actions like view, add to cart, etc. can be added here */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
       
  


      
        </>
    );
}

export default CustomerViewProducts;