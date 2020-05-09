const express = require("express");
const router = express.Router();
const { isSignedIn, isAuthenticated, isAdmin, isHospital } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");
const { getOrderById, getOrder, addOrder, getAllOrders, getOrders } = require('../controllers/order');


router.param("userId", getUserById);
router.param("orderId", getOrderById);

router.post('/order/add/:userId', isSignedIn, isAuthenticated, isHospital ,addOrder);

router.get('/order/:orderId', getOrder);
router.get('/orders/all/:userId', isSignedIn, isAuthenticated, isAdmin, getAllOrders);
router.get('/user/orders/:userId', isSignedIn, isAuthenticated, isHospital, getOrders);


module.exports = router;
