const Partner=require('../models/partnerModel');


const createPartner = async (req, res) => {

    console.log('Received partner request:', req.body);
    try {
        const { mobileNo, partnerCode, partnerName } = req.body;

        if (!mobileNo || !partnerCode || !partnerName) {
            return res.status(400).json(
                { message: 'All fields are required' });
        }

        const existingPartner = await Partner.findOne({ mobileNo });
        if (existingPartner) {
            return res.status(400).json(
                { message: 'Partner already exists' });
        }

        const newPartner = new Partner({ mobileNo, partnerCode, partnerName });
        await newPartner.save();
        res.status(201).json(
            { message: 'Partner saved successfully' });
    } catch (error) {
        res.status(500).json(
            { message: error });
    }
};


const getAllPartners = async (req, res) => {
    try {
        const partners = await Partner.find();
        res.status(200).json(partners);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}

const getPartnerByMobileNo = async (req, res) => {
    try {
        const { mobileNo, partnerCode,partnerName } = req.body;
        const partner = await Partner.findOne({ mobileNo: mobileNo });
        if (!partner) {
            return res.status(404).json({ message: 'Partner not found' });
        }
        if (partner.partnerCode !== partnerCode || partner.partnerName !== partnerName) { 
            return res.status(400).json({ message: 'Partner details do not match' });
        }
        
        res.status(200).json(partner);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};



module.exports = { createPartner, getAllPartners, getPartnerByMobileNo };