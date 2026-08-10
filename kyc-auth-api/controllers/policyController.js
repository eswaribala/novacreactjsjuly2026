const Policy=require('../models/policyModel');
const User = require('../models/userModel');

const createPolicy = async (req, res) => {

    console.log('Received policy request:', req.body);
    try {
        const { userName, policyNo, policyHolderName, beneficiaryType, documentType, documentNumber } = req.body;

        if (!userName || !policyNo || !policyHolderName || !beneficiaryType || !documentType || !documentNumber) {
            return res.status(400).json(
                { message: 'All fields are required' });
        }

        const existingPolicy = await Policy.findOne({ policyNo });
        if (existingPolicy) {
            return res.status(400).json(
                { message: 'Policy already exists' });
        }
        //get user for the given userName
        const user = await User.findOne({ name: userName });
        console.log('Found user:', user);
        if (!user) {
            return res.status(404).json(
                { message: 'User not found' });
        }
        
        const newPolicy = new Policy({ policyNo, policyHolderName, beneficiaryType, documentType, documentNumber, customerId: user.email });
        await newPolicy.save();
        res.status(201).json(
            { message: 'Policy saved successfully' });
    } catch (error) {
        res.status(500).json(
            { message: error });
    }
};


const getAllPolicies = async (req, res) => {
    try {
        const policies = await Policy.find();
        res.status(200).json(policies);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}

const getPolicyById = async (req, res) => {
    try {
        const { id } = req.params;
        const policy = await Policy.findOne({ policyNo: id });
        if (!policy) {
            return res.status(404).json({ message: 'Policy not found' });
        }
        res.status(200).json(policy);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const getPolicyByCustomerId= async (req, res) => {
    const { name } = req.body;

    const user = await User.findOne({ name: name });
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    
    try {
        const policies = await Policy.find({ customerId: user.email });
        if (policies.length === 0) {
            return res.status(404).json({ message: 'No policies found for this customer' });
        }
        res.status(200).json(policies);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}

const verifyDocumentNo = async (req, res) => {
    try {
        const { documentNumber } = req.body;
        console.log('Received document number:', documentNumber);
        const verifiedDoc= await Policy.findOne({ documentNumber: documentNumber });
        console.log('Verified document:', verifiedDoc);
        if (!verifiedDoc) {
            return res.status(404).json({ message: 'Document not found' });
        }
        res.status(200).json({ message: 'Document verified successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};


module.exports = { createPolicy, getAllPolicies, getPolicyById,getPolicyByCustomerId, verifyDocumentNo };