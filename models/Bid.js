const { model, Schema } = require('mongoose');


const BidSchema = new Schema({
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
    DealPrice: {
        type: Number
    }
}, {
    timestamps: true
});




const BidModel = model('Bid', BidSchema);

module.exports = { BidModel, BidSchema }