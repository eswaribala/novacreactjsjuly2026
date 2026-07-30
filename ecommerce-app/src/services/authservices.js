import { fetchData } from './api.js';
export const register=async (userData) => {
   fetchData('/register',{
    method: 'POST',
    body: JSON.stringify(userData),
   })
};

export const login=async (userData) => {
   fetchData('/login',{
    method: 'POST',
    body: JSON.stringify(userData),
   })
}