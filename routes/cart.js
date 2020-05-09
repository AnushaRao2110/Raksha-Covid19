const express = require('express');
const router = express.Router();

const { isSignedIn, isAuthenticated, isHospital } = require('../controllers/auth');
const { addToCart, getCart, deleteFromCart } = require('../controllers/cart');
const { getUserById } = require('../controllers/user');
const { getItemById } = require('../controllers/item');

router.param('userId', getUserById); //middleware
router.param('itemId', getItemById);

router.post('/cart/add/:userId', isSignedIn, isAuthenticated, isHospital, addToCart);

router.get('/cart/:userId', isSignedIn, isAuthenticated, isHospital, getCart);

router.delete('/cart/:itemId/:userId', isSignedIn, isAuthenticated, isHospital, deleteFromCart);

module.exports = router;