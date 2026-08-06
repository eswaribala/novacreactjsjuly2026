
import {useSelector,useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {fetchProducts,deleteProductAsync} from "../../../redux/features/products/productSlicer.js";
import EditProduct from "../EditProduct/EditProduct.jsx";
import Toast from "../../atoms/Toast/Toast";
import { toast } from "react-toastify";
import ProductRow from "../../molecules/ProductRow/ProductRow.jsx";
import {useCallback} from "react";
function ViewProducts() {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.products);
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showToast, setShowToast] = useState(false);
   

       
    
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

   
     const handleDialogOpen=useCallback((value)=>{
      setIsEditDialogOpen(value);
      setShowToast(true);
      toast.success("Product updated successfully");
     }, []);

     const handleEdit = useCallback((product) => {
    // Implement your edit logic here, e.g., navigate to an edit page or open a modal
    console.log(`Edit product: ${JSON.stringify(product)}`);
    setIsEditDialogOpen(true);
    setSelectedProduct(product);
    

  }, []);
  const handleDelete = useCallback((productId) => {
    // Implement your delete logic here, e.g., dispatch a delete action or show a confirmation dialog
    console.log(`Delete product with ID: ${productId}`);
    dispatch(deleteProductAsync(productId))
      .then((response) => {
        if (!response.error) {  
          setShowToast(true);
          toast.success("Product deleted successfully");
        }
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
        setShowToast(true);
        toast.error("Failed to delete product");
      });
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
                        <th>Actions</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {products.map((product,index) => (
                        <ProductRow
                          key={product._id}
                          index={index}
                          product={product}
                          onEdit={handleEdit}
                          onDelete={handleDelete}
                        />
                    ))}
                </tbody>
            </table>
        </div>
       {isEditDialogOpen && selectedProduct && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
    onMouseDown={() => setIsEditDialogOpen(false)}
  >
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="edit-product-dialog-title"
      className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-white p-6 shadow-2xl"
      onMouseDown={(e) => e.stopPropagation()}
    >
      <div className="mb-4 flex items-center justify-between border-b pb-3">
        <h2
          id="edit-product-dialog-title"
          className="text-2xl font-semibold text-gray-800"
        >
          Edit Product
        </h2>

        <button
          type="button"
          onClick={() => setIsEditDialogOpen(false)}
          className="text-3xl leading-none text-gray-500 hover:text-red-600"
          aria-label="Close dialog"
        >
          &times;
        </button>
      </div>

      <EditProduct
        product={selectedProduct}
        onOpen={handleDialogOpen}
        onClose={() => setIsEditDialogOpen(false)}
        onUpdated={() => setIsEditDialogOpen(false)}
      />
    </div>
  </div>
)}

      {showToast && <Toast />}
        </>
    );
}

export default ViewProducts;