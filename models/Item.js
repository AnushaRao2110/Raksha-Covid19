const { model, Schema } = require('mongoose');

////EACH ITEM HERE
const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    }
}, {
    timestamps: true
}
);
const Item = model('Item', ItemSchema);


////ITEM CART HERE
const ItemCartSchema = new Schema({
    item: { type: Schema.Types.ObjectId, ref: 'Item', required: true },
    quantity: { type: Number, required: true },
    expectedPrice: { type: Number }
});

const ItemCart = model('ItemCart', ItemCartSchema);


module.exports = { Item, ItemSchema, ItemCartSchema, ItemCart }