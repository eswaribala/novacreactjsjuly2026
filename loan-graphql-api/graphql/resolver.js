
const Partnner=require('../models/partnerModel.js');
const BigInt = require('graphql-scalars').BigIntResolver;


const resolvers = {
    BigInt: BigInt,
    Query: {
        getAllPartners: async () => {
            return await Partnner.find();
        },
        getPartnerByMobileNo: async (_, { mobileNo }) => {
            return await Partnner.findOne({ mobileNo:mobileNo });
        }
    },
    Mutation: {
        createPartner: async (_, { input }) => {
            const newPartner = new Partnner(input);
            return await newPartner.save();
        },
        updatePartner: async (_, { mobileNo, input }) => {
            return await Partnner.findOneAndUpdate({ mobileNo: mobileNo }, input, { new: true });
        },
        deletePartner: async (_, { mobileNo }) => {
            await Partnner.findOneAndDelete({ mobileNo: mobileNo });
            return `Partner with mobile number ${mobileNo} deleted successfully.`;
        }
    }


    
};

module.exports = resolvers;