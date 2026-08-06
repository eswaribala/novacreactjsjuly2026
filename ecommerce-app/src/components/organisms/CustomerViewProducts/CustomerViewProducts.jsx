import FormField from "../../molecules/FormField/FormField.jsx";
import {useSelector,useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchProducts} from "../../../redux/features/products/productSlicer.js";
import ProductCard from "../../molecules/ProductCard/ProductCard.jsx";
import {Search} from 'lucide-react';

function CustomerViewProducts() {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.products);
         
    const handleSearchChange = (e) => {
        // Implement search functionality here
        console.log(e.target.value);
    };
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
        {/* Add a search bar or filter options here if needed */}
        <div className="relative w-full mt-4 ">
           <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" /> 
           <FormField 
           id="search"
            name="search"
            label="Search Products"
            placeholder="Search products..."
            value=""
            onChange={handleSearchChange}
            className="w-100 pl-10 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
           />
            

        </div>
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