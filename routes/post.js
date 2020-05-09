const express = require('express');
const router = express.Router();

const { isSignedIn, isAuthenticated, isHospital } = require('../controllers/auth');
const { getPostById, getPost, getAllPosts, addPost, updatePost, deletePost } = require('../controllers/post');
const { getUserById } = require('../controllers/user');

router.param('postId', getPostById); //middleware
router.param('userId', getUserById); //middleware

router.post('/post/add/:userId', isSignedIn, isAuthenticated, isHospital, addPost);

router.get('/post/:postId',isSignedIn,getPost); 
router.get('/posts',isSignedIn,getAllPosts); 

router.put('/post/:postId/:userId',isSignedIn, isAuthenticated, isHospital, updatePost); 

router.delete('/post/:postId/:userId', isSignedIn, isAuthenticated, isHospital, deletePost); 

module.exports = router;