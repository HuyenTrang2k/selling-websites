const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    products: [{
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product2',
            // required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        name: {
            type: String,
        },
        image: {
            type: String,
        },
        price: {
            type: Number,
        },
    }
    ]
},
    { timestamps: true });

module.exports = mongoose.model('Cart2', cartSchema);