import { fetchData } from './api.js';
export const addProduct=async (productData) => {
   return await fetchData('add-product',{
    method: 'POST',
    body: JSON.stringify(productData),
   })
};