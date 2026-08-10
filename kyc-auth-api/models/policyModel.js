const mongoose = require('mongoose');
const User = require('./userModel');
const policySchema = new mongoose.Schema({
    policyNo: {
        type: Number,
        required: true,
             
    },
    policyHolderName: {
        type: String,
        required: true,
        trim: true,
        
    },
    customerId: {
        type: mongoose.Schema.Types.String,
        ref: 'User',
        required: true,
    },
    beneficiaryType: {
        type: String,
        required: true,
      
    },
    documentType:{
        type: String,
        required: true,
        trim: true,
    },
    documentNumber: {
        type: String,
        required: true,
    }

});

const Policy = mongoose.model('Policy', policySchema);
module.exports = Policy;