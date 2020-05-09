const User = require('../models/user');
const Item = require('../models/item');

const addToCart = (req, res) => {

    User.findById(req.profile._id)
        .then(user => {
            if (user.cart.filter(cartItem => (cartItem.itemId.toString() === req.body.itemId)).length > 0) {
                return res.status(400).json({ 'Error': 'Item already added to cart' });
            }
            else {
                user.cart.unshift({ itemId: req.body.itemId });
                user.save()
                    .then(cart => {
                        res.json(cart);
                    })
                    .catch(err => {
                        res.status(400).json({ Error: 'Error saving item to cart' });
                    })
            }
        })
        .catch(err => {
            res.status(400).json({ Error: 'No user found in DB' });
        })

}

const getCart = (req, res) => {
    User.findById(req.profile._id)
        .populate('cart.itemId', ['name'])
        .exec((err, user) => {
            if (err) {
                return res.status(400).json({ error: 'No user found in DB' });
            }
            else {
                return res.json(user.cart);
            }
        })
}

const deleteFromCart = (req, res) => {

    User.findById(req.profile._id)
        .exec((err, user) => {
            if (err) {
                return res.status(400).json({ error: 'No user found in DB' });
            }
            else {
                const removeIndex = user.cart.map(cartItem => cartItem.itemId.toString()).indexOf(req.item._id);
                user.cart.splice(removeIndex, 1);
                user.save()
                    .then(cart => {
                        res.json({ Message: 'Cart Item deleted successfully' });
                    })
                    .catch(err => {
                        return res.status(400).json({ Error: 'Unable to delete item from cart' });
                    })
            }
        })
}

module.exports = { addToCart, getCart, deleteFromCart };