const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },    
}, {
    timestamps: true
});


const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;