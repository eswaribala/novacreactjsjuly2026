const mongoose = require('mongoose');

const partnerSchema = new mongoose.Schema({
    mobileNo:{
        type: Number,
        required: true,
        unique: true,
    },
    partnerCode: {
        type: String,
        required: true,
        unique: true,
        trim: true,
       
    },
    partnerName: {
        type: String,
        required: true,       
        trim: true,
        
    }
  
});

const Partner = mongoose.model('Partner', partnerSchema);
module.exports = Partner;