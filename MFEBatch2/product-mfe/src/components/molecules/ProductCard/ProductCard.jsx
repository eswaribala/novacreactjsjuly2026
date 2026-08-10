//create product card component using tailwind css
import defaultImage from "../../../assets/defaultimage.png";
import Button from "../../atoms/Button/Button.jsx";
import {useDispatch} from "react-redux";
const cardColors=["bg-red-100",
    "bg-green-100","bg-blue-100","bg-yellow-100",
    "bg-purple-100","bg-pink-100","bg-indigo-100","bg-gray-100"];

function ProductCard({ product,index }) {
    const randomColor = cardColors[index % cardColors.length];
    const generatedImageUrl = `https://loremflickr.com/600/400/${product.name.substring(0,5)? "placeholder" : product.name}?lock=${product.productId}`;
    
    const dispatch = useDispatch();
    const handleAddToCart = () => {
      dispatch({ type: "cart/addToCart",
      payload: product,
});
    }
  return (
    <div className={`overflow-hidden border border-gray-200  
     ${randomColor} shadow-md rounded-lg p-4 transition-transform 
     transform hover:scale-105 hover:shadow-lg`}>
      <img src={product.image || generatedImageUrl || defaultImage} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-2">{product.description}</p>
      <p className="text-gray-800 font-bold">{new 
             Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(product.price)}</p>
    
    <Button 
    id="add-to-cart-button" 
    type="button"
    onClick={() => {handleAddToCart()}}
    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
    Add to Cart  
    </Button>
    </div>
  );
}
export default ProductCard;