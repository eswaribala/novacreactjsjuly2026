const Policy=require('../models/policyModel');

const createPolicy = async (req, res) => {

    console.log('Received policy request:', req.body);
    try {
        const { policyNo, policyHolderName, beneficiaryType, documentType, documentNumber } = req.body;

        if (!policyNo || !policyHolderName || !beneficiaryType || !documentType || !documentNumber) {
            return res.status(400).json(
                { message: 'All fields are required' });
        }

        const existingPolicy = await Policy.findOne({ policyNo });
        if (existingPolicy) {
            return res.status(400).json(
                { message: 'Policy already exists' });
        }

        const newPolicy = new Policy({ policyNo, policyHolderName, beneficiaryType, documentType, documentNumber });
        await newPolicy.save();
        res.status(201).json(
            { message: 'Policy saved successfully' });
    } catch (error) {
        res.status(500).json(
            { message: error });
    }
};

module.exports = { createPolicy };