//create product card component using tailwind css
import defaultImage from "../../../assets/defaultimage.png";
const cardColors=["bg-red-100",
    "bg-green-100","bg-blue-100","bg-yellow-100",
    "bg-purple-100","bg-pink-100","bg-indigo-100","bg-gray-100"];

function CategoryCard({ product,index }) {
    const randomColor = cardColors[index % cardColors.length];
    const generatedImageUrl = `https://loremflickr.com/600/400/${product.category.substring(0,5)? "placeholder" : product.category}?lock=${product.productId}`;
  return (
    <div className={`overflow-hidden border border-gray-200  
     ${randomColor} shadow-md rounded-lg p-4 transition-transform 
     transform hover:scale-105 hover:shadow-lg`}>
      <img src={product.image || generatedImageUrl || defaultImage} alt={product.category} className="w-full h-48 object-cover mb-4 rounded" />
      <h3 className="text-lg font-semibold mb-2">{product.category}</h3>
          </div>
  );
}
export default CategoryCard;