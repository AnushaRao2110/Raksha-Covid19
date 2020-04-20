const { model, Schema } = require('mongoose');


const OrdersSchema = new Schema({

    Post: {
        type: Schema.Types.ObjectId,
        required: true,
        ref:'Post'
    },
    Supplier: {
        type: Schema.Types.ObjectId,
        required: true,
        ref:'User'
    },
    DealPrice: {
        type: Number
    }

}, {
    timestamps: true
}
);
const OrderModel = model('Order', OrdersSchema);

module.exports = { OrderModel }