const express = require('express');
const router = express.Router();
 
const { isSignedIn, isAuthenticated, isAdmin } = require('../controllers/auth');
const { getItemById, addItem, getItem, getAllItems, loadImage, updateItem, deleteItem, searchItem } = require('../controllers/item');
const { getUserById } = require('../controllers/user');

router.param('itemId', getItemById); //middleware
router.param('userId', getUserById); //middleware

router.post('/item/add/:userId', isSignedIn, isAuthenticated, isAdmin, addItem);

router.get('/item/:itemId', getItem);
router.get ('/item/image/:itemId', loadImage);
router.get('/items', getAllItems);
router.get('/item/search', searchItem);  //Hospital searches for item

router.put('/item/:itemId/:userId', isSignedIn, isAuthenticated, isAdmin, updateItem); 

router.delete('/item/:itemId/:userId', isSignedIn, isAuthenticated, isAdmin, deleteItem);

module.exports = router;