
import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchProducts} from "../../../redux/features/products/productSlicer.js";

function ViewProducts() {
    const { products, loading, error } = useSelector((state) => state.products);
    const dispatch = useDispatch();
    //use effect monitors the changes happening to products 
    // and dispatches the fetchProducts action to update 
    // the products state in the redux store
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);       

    if (loading) {
        return <p>Loading products...</p>;
    }
    if (error) {
        return <p>Error: {error}</p>;
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
                        <tr key={product.id}>
                            <td>{product.id}</td>
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