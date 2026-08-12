import {gql} from '@apollo/client';

export const CREATE_PRODUCT = gql`
  mutation CreateProduct($input:ProductInput!) {
    createProduct(input: $input) {
      productId
      name
      price
      description
      category
      stock
    }
  }
`;
export const UPDATE_PRODUCT = gql`
  mutation UpdateProduct($productId: Int!, $input: UpdateProductInput!) {
    updateProduct(productId: $productId, input: $input) {
      productId
      name
      price
      description
      category
      stock
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation DeleteProduct($productId: Int!) {
    deleteProduct(productId: $productId) {
        productId
    }
  }
`;

