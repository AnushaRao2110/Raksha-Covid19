const mongoose = require('mongoose');
const Schema = mongoose.Schema;

////EACH ITEM HERE
const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        data: Buffer,
        contentType: String
    },
    tags : {
        type : [String],    
        text : true
    }
},
    {
        timestamps: true
    }
);

ItemSchema.path('tags').index({text:true});

module.exports = mongoose.model('Item', ItemSchema);
