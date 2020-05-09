const mongoose = require('mongoose');
const Schema = mongoose.Schema;


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
    Item: [
        {
            item: {
                type: Schema.Types.ObjectId,
                ref: 'Item',
                required: true
            },
            DealPrice: {
                type: Number
            }
        }
    ]

}, {
    timestamps: true
});

const BidModel = mongoose.model('Bid', BidSchema);

module.exports = { BidSchema, BidModel };