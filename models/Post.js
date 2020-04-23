const { model, Schema } = require('mongoose');
const { ItemCartSchema } = require('./Item');

const PostSchema = new Schema({

    Item: [ItemCartSchema]
    ,
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    tags: {
        type: [String],
        index: true
    },
    bids:[BidSchema]
}, {
    timestamps: true
}
);

const PostModel = model('Post', PostSchema);


module.exports = { PostModel, PostSchema }