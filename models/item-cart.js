const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemCartSchema = new Schema({
    item: {
        type: Schema.Types.ObjectId,
        ref: 'Item',
        required : true
    },
    quantity: {
        type: Number
    },
    expectedPrice: { type: Number }
});

const ItemCart = mongoose.model('ItemCart', ItemCartSchema);

module.exports = {ItemCartSchema,ItemCart};