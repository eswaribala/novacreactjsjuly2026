import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../graphql/productQueries.js";
import ProductCard from "../molecules/ProductCard.jsx";

function ProductList() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  console.log("GraphQL data:", data);

  const products = data?.getProducts ?? [];

  console.log("Products:", products);

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!Array.isArray(products) || products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <div
      className="
        grid grid-cols-1 gap-4
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        px-4 py-6
      "
    >
      {products.map((product, index) => (
        <ProductCard
          key={product.productId}
          index={index}
          product={product}
        />
      ))}
    </div>
  );
}

export default ProductList;