const Item = require('../models/item');
const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs');

const getItemById = (req, res, next, id) => {
    Item.findById(id).exec((err, item) => {
        if (err || !item) {
            return res.status(400).json({ error: 'Unable to get item' });
        }
        req.item = item;
        next();
    })
}

const addItem = (req, res) => {

    let form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse(req, (err, fields, file) => {
        if (err) {
            return res.status(400).json({
                error: "problem with image"
            });
        }

        let tags = fields.tags.split(',');
        fields.tags = tags;

        const item = new Item(fields);

        if (file.image) {
            if (file.image.size > 4000000) {
                return res.status(400).json({ error: 'Image size too big' });
            }
            item.image.data = fs.readFileSync(file.image.path);
            item.image.contentType = file.image.type;
        }

        item.save()
            .then(prod => {
                res.json({ item: prod });
            })
            .catch(err => {
                return res.status(400).json({ error: 'Unable to save item' });
            })
    });
}

//sending everyhting except image as it would be too slow
const getItem = (req, res) => {
    req.item.image = undefined;              //(optional)
    return res.json({ item: req.item });
}

//middleware for loading image separately to optimise performance (optional)
const loadImage = (req, res, next) => {
    if (req.item.image.data) {
        res.set("Content-Type", req.item.image.contentType);
        return res.send(req.item.image.data);
    }
    next();
}

const getAllItems = (req, res) => {
    Item.find().exec((err, items) => {
        if (err) {
            return res.status(400).json({ error: 'No items to display' });
        }
        else {
            items.forEach(item => {
                item.image = undefined;
            })
            return res.json(items);
        }
    })
}

const updateItem = (req, res) => {
    Item.findByIdAndUpdate(
        { _id: req.item._id },
        { $set: req.body },
        { new: true, useFindAndModify: false } 
    ).exec((err, item) => {
        if (err || !item) {
            return res.json(400).json({ error: 'Unauthorised to update item' })
        }
        item.image = undefined;
        res.json(item);
    })
}

const deleteItem = (req, res) => {
    Item.findByIdAndRemove(
        { _id: req.item._id }
    ).exec((err, item) => {
        if (err) {
            return res.status(400).json({ error: 'Unable to remove item' });
        }
        else {
            res.json({ message: 'Item deleted successfully' })
        }
    })
}

const searchItem = (req, res) => {

    const { searchString } = req.body;

    let tagArray = searchString.split(' ');

    var regex = [];
    for (var i = 0; i < tagArray.length; i++) {
        regex[i] = new RegExp(tagArray[i]);
    }

    Item.find({
        tags: { $in: regex }
    })
        .exec((err, items) => {
            if (err || !items) {
                return res.status(400).json({ Error: 'No matches found' });
            }
            else {
                items.forEach(item => {
                    item.image = undefined;
                })
                res.json(items);
            }
        })
}


module.exports = { getItemById, addItem, getItem, getAllItems, loadImage, updateItem, deleteItem, searchItem };