const express = require('express');
const router = express.Router();

const { isSignedIn,isAuthenticated,isSupplier } = require('../controllers/auth');
const { getBidById, addBid, getBid, getAllBids } = require('../controllers/bid');
const {getUserById} = require('../controllers/user');

router.param('bidId', getBidById); //middleware
router.param('userId', getUserById); //middleware

router.post('/bid/add/:userId', isSignedIn, isAuthenticated, isSupplier, addBid);

router.get('/bid/:bidId/:userId', isSignedIn, isAuthenticated, getBid);
router.get('/bids/:userId', isSignedIn, isAuthenticated, getAllBids);

module.exports = router;