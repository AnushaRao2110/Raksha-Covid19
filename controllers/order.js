const Order = require('../models/order');
const User = require('../models/user');

const getOrderById = (req, res, next, id) => {
    Order.findById(id)
        .exec((err, order) => {
            if (err || !order) {
                return res.status(400).json({
                    error: "No order found in DB"
                });
            }
            req.order = order;
            next();
        });
};

const getOrder = (req, res) => {
    return res.json({ order: req.order });
}

const addOrder = (req, res) => {
    // req.body.order.user = req.profile;
    const order = new Order(req.body);
    order.save((err, order) => {
        if (err) {
            return res.status(400).json({
                error: "Failed to save order in DB"
            });
        }
        else {
            User.findById(req.profile._id)
                .then(user => {
                    user.OrderHistory.unshift(order._id);
                    user.save()
                        .then(userOrder => {
                            res.json(userOrder);
                        })
                        .catch(err => {
                            return res.status(400).json({ Error: 'Unable to save user order history' });
                        })
                })
                .catch(err => {
                    return res.status(400).json({ Error: 'Unable to find user' });
                })
        }

    });
};

const getAllOrders = (req, res) => {
    Order.find()
        .populate('Item.item', ['name'])
        .populate('Hospital', ['name', 'email'])
        .populate('Supplier', ['name', 'email'])
        .exec((err, orders) => {
            if (err || !orders) {
                return res.status(400).json({
                    error: "No orders found in DB"
                });
            }
            res.json(orders);
        });
};

const getOrders = (req, res) => {
    Order.find({ 'Hospital': req.profile._id })
        .select('-address -Post')
        .populate('Hospital', ['name', 'email'])
        .populate('Supplier', ['name', 'email'])
        .exec((err, orders) => {
            if (err || !orders) {
                return res.status(400).json({
                    error: "No order found in DB"
                });
            }

            
            res.json(orders);
        });
}

module.exports = { getOrderById, getOrder, addOrder, getAllOrders, getOrders };
