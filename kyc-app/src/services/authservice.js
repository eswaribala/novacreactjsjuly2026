import { fetchData } from "./api.js";

export const register = async (userData) => {
    return await fetchData('register', {
        method: 'POST',
        body: JSON.stringify(userData),
    });
}