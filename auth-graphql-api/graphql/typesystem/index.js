//design graphql type system for product query and mutation

//query and mutation for product
const typeDefs = `#graphql
type Query{
    getProducts: [Product]
    getProductById(productId: Int!): Product
    getProductsByCategory(category: String!): [Product]
  }

type Mutation {
    createProduct(input: ProductInput!): Product
    updateProduct(productId: Int!, input: ProductInput!): Product
    deleteProduct(productId: Int!): Product
  }


input ProductInput {
  productId: Int!
  name: String!
 description: String!
 price: Float!
 category: String!
   stock: Int!
}

type Product {
  productId: Int!
  name: String!
  description: String!
  price: Float!  
  category: String!
  stock: Int!
}
  `