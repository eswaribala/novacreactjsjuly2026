//create product card component using tailwind css

function ProductCard({ product }) {
  return (
    <div className="overflow-hidden border border-gray-200  
     bg-white shadow-md rounded-lg p-4 transition-transform 
     transform hover:scale-105 hover:shadow-lg">
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-2">{product.description}</p>
      <p className="text-gray-800 font-bold">${product.price}</p>
    </div>
  );
}
export default ProductCard;