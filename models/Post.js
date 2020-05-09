const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {ItemCartSchema} = require('./item-cart');
const {BidSchema} = require('../models/Bid');

const PostSchema = new Schema({

    Item: [ItemCartSchema],
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    bids:[{
        bidId : {
            type: Schema.Types.ObjectId,
            ref : 'Bid'
        }
    }]
}, {
    timestamps: true
}
);

module.exports = mongoose.model('Post', PostSchema);
