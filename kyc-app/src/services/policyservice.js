import { fetchData } from "./api.js";

export const savePolicy = async (policyData) => {
    return await fetchData('create', {
        method: 'POST',
        body: JSON.stringify(policyData),
    });
}