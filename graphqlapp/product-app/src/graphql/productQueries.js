import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query GetProducts {
    getProducts {
      productId
      name
      price
      description
      category
      stock
    }
  }
`;

export const GET_PRODUCT_BY_ID = gql`
  query GetProductById($productId: Int!) {
    getProductById(productId: $productId) {
      productId
      name
      price
      description
      category
      stock
    }
  }
`;

export const GET_PRODUCTS_BY_CATEGORY = gql`
  query GetProductsByCategory($category: String!) {
    getProductsByCategory(category: $category) {
      productId
      name
      price
      description
      category
      stock
    }
  }
`;