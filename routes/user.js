const express = require('express');
const router = express.Router();

const { getUserById, getUser, updateUser } = require('../controllers/user');
const { isSignedIn, isAuthenticated, isAdmin } = require('../controllers/auth');

//defining url/:id id as userid
router.param('userId', getUserById);

//to check user his profile he should be signed in as well as authenticated
router.get('/user/:userId', isSignedIn, isAuthenticated, getUser);

/* //to get all users
router.get('/users', getAllUsers);
 */

//update user
router.put('/user/:userId', isSignedIn, isAuthenticated, updateUser);

router.get('/test/:userId', isSignedIn, isAuthenticated, (req, res) => {
    res.send(req.auth);
    console.log(req.profile);
})

module.exports = router;