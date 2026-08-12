import { fetchData } from "./api.js";

export const createPartner = async (partnerData) => {
    return await fetchData('create', {
        method: 'POST',
        body: JSON.stringify(partnerData),
    });
}

export const getPartners = async () => {
    return await fetchData('getAll', {
        method: 'GET',
    });
}

export const getPartnerByMobileNo = async (partnerData) => {
    return await fetchData(`getPartner`, {
        method: 'POST',
        body: JSON.stringify(partnerData),
    });
}

