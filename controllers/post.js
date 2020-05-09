const Post = require('../models/Post');
const Item = require('../models/item');

const getPostById = (req,res,next,id) => {
    Post.findById(id).exec((err,post)=>{
        if(err){
            return res.status(400).json({error: 'Post not found'});
        }
        else{
            req.post=post;
            next();
        }
    })
}


const addPost = (req,res) =>{

    const newPost = new Post(req.body);
    newPost.save()
    .then(post=>{
        res.json({post});
    })
    .catch(err=>{
        return res.status(400).json({error:'Unable to save post'});
    })
}

const getPost = (req,res) => {
   return res.json({post:req.post});
}

const getAllPosts = (req,res) => {
    Post.find()
    .exec((err,posts)=>{
        if(err) {
            return res.status(400).json({error: 'No posts to display'});
        }
        else{
            return res.json(posts);
        }
    })
}

const updatePost = (req,res) => {
    Post.findByIdAndUpdate(
        {_id:req.post._id},
        {$set:req.body},
        {new:true,useFindAndModify:false}
        ).exec((err,post)=>{
            if(err){
                return res.json(400).json({error:'Unauthorised to update post'})
            }
            res.json(post);
        })
}

const deletePost = (req,res) => {
    Post.findByIdAndRemove(
        {_id:req.post._id }
    ).exec((err,post)=>{
        if(err){
            return res.status(400).json({error:'Unable to remove post'});
        }
        else{
            res.json({message:'Post deleted successfully'})
        }
    })
}

module.exports = {getPostById,getPost,getAllPosts,addPost,updatePost,deletePost};