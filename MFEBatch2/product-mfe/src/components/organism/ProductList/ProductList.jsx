import {useSelector,useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchProducts} from "../../../redux/features/products/productSlicer.js";
import ProductCard from "../../molecules/ProductCard/ProductCard.jsx";

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
        
        
         
        <div className="grid grid-cols-1 gap-4 
           sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 py-6">
           
            
                    {products.map((product,index) => (
                        
                        <ProductCard
                            key={product._id}
                            index={index}
                            product={product}
                        />
                    ))}
                
        </div>
       
  


      
        </>
    );
}

export default CustomerViewProducts;