import { fetchData } from "./api.js";

export const savePolicy = async (policyData) => {
    return await fetchData('create', {
        method: 'POST',
        body: JSON.stringify(policyData),
    });
}

export const getPolicies = async () => {
    return await fetchData('getAll', {
        method: 'GET',
    });
}

export const getPolicyById = async (id) => {
    return await fetchData(`get/${id}`, {
        method: 'GET',
    });
}

export const getPolicyByCustomerName = async (name) => {
    return await fetchData(`get/customerName`, {
        method: 'POST',
        body: JSON.stringify({ name }),
    });
}