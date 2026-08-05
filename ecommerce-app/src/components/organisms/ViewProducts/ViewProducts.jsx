
import {useSelector,useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {fetchProducts} from "../../../redux/features/products/productSlicer.js";
import Button  from "../../atoms/Button/Button.jsx";
import EditProduct from "../EditProduct/EditProduct.jsx";
import Toast from "../../atoms/Toast/Toast";
import { toast } from "react-toastify";
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

     const handleDialogOpen=(value)=>{
      setIsEditDialogOpen(value);
      setShowToast(true);
      toast.success("Product updated successfully");
     }

     const handleEdit = (product) => {
    // Implement your edit logic here, e.g., navigate to an edit page or open a modal
    console.log(`Edit product: ${JSON.stringify(product)}`);
    setIsEditDialogOpen(true);
    setSelectedProduct(product);
    

  }
  const handleDelete = (productId) => {
    // Implement your delete logic here, e.g., dispatch a delete action or show a confirmation dialog
    console.log(`Delete product with ID: ${productId}`);
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
                    {products.map((product) => (
                        <tr key={product._id || product.id} className={` items-center ${
        products.indexOf(product) % 2 === 0 ? "bg-white" : "bg-gray-100"
      }`}>
                            <td className="border border-gray-300 px-4 py-3">{ product.productId}</td>
                            <td className="border border-gray-300 px-4 py-3">{product.name}</td>
                            <td className="border border-gray-300 px-4 py-3">{product.description}</td>
                            <td className="border border-gray-300 px-4 py-3">{product.category}</td>
                            <td className="border border-gray-300 px-4 py-3">{parseInt(product.price)}</td>
                            <td className="border border-gray-300 px-4 py-3">{product.stock}</td>
                            <td>
                                <div className="flex gap-2 justify-center items-center">
                                <Button type="button" className="w-20 inline-block rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700" onClick={() => handleEdit(product)}>
                                    Edit
                                </Button>
                           
                                <Button type="button" className="w-20 inline-block rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700" onClick={() => handleDelete(product._id || product.id)}>
                                    Delete
                                </Button>
                                </div>
                            </td>
                        </tr>
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