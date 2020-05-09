const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ItemCartSchema } = require('../models/item-cart');


const OrdersSchema = new Schema({

    Hospital: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    Post: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Post'
    },
    Supplier: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    Item: [ItemCartSchema],

    DealPrice: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true,
    },

},
    {
        timestamps: true
    }
);
module.exports = mongoose.model('Order', OrdersSchema);
