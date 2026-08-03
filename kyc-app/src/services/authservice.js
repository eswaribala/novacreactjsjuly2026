import { fetchData } from "./api.js";

export const register = async (userData) => {
    return await fetchData('register', {
        method: 'POST',
        body: JSON.stringify(userData),
    });
}

export const login = async (credentials) => {
    return await fetchData('login', {
        method: 'POST',
        body: JSON.stringify(credentials),
    });
}