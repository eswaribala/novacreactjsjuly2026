//create product card component using tailwind css
const cardColors=["bg-red-100",
    "bg-green-100","bg-blue-100","bg-yellow-100",
    "bg-purple-100","bg-pink-100","bg-indigo-100","bg-gray-100"];

function ProductCard({ product,index }) {
    const randomColor = cardColors[index % cardColors.length];
  return (
    <div className={`overflow-hidden border border-gray-200  
     ${randomColor} shadow-md rounded-lg p-4 transition-transform 
     transform hover:scale-105 hover:shadow-lg`}>
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-2">{product.description}</p>
      <p className="text-gray-800 font-bold">{new 
             Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(product.price)}</p>
    </div>
  );
}
export default ProductCard;