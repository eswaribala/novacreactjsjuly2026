import { fetchData } from './api.js';
export const addProduct=async (productData) => {
   return await fetchData('add-product',{
    method: 'POST',
    body: JSON.stringify(productData),
   })
};

export const getProducts=async () => {
   return await fetchData('fetch-products',{
    method: 'GET',
   })
}

export const updateProduct=async (productData) => {
   return await fetchData(`update-product`,{
    method: 'PUT',
    body: JSON.stringify(productData),
   })
}

export const deleteProduct=async (productId) => {
   return await fetchData(`delete-product/${productId}`,{
    method: 'DELETE',
   })
}