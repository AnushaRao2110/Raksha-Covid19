const Bid = require('../models/Bid').BidModel;
const Post = require ('../models/Post');

const getBidById = (req,res,next,id) => {
    Bid.findById(id).exec((err,bid)=>{
        if(err){
            return res.status(400).json({error: 'Bid not found'});
        }
        else{
            req.bid=bid;
            next();
        }
    })
}

const addBid = (req,res) =>{

    const bid = new Bid(req.body);
    const pid = req.body.Post;
    Post.findById(pid)
    .exec((err,post) => {
        if(err || !post) {
            return res.status(400).json({Error: 'Cannot find post'});
        }
        else{
            bid.save().then(doc=>{

                post.bids.unshift(bid._id);
                post.save()
                .then(post=>{
                    res.json(post);
                })
                .catch(err=>{
                    return res.status(400).json({error:'Unable to save bid to post'});
                })
            })
            .catch(err=>{
                return res.status(400).json({error:'Unable to save bid'});
            })
        }
    })

   
}

const getBid = (req,res) => {
   return res.json({bid:req.bid});
}

const getAllBids = (req,res) => {
    Bid.find().exec((err,bids)=>{
        if(err) {
            return res.status(400).json({error: 'No bids to display'});
        }
        else{
            return res.json(bids);
        }
    })
}

// const updateBid = (req,res) => {
//     Bid.findByIdAndUpdate(
//         {_id:req.bid._id},
//         {$set:req.body},
//         {new:true,useFindAndModify:false}
//         ).exec((err,bid)=>{
//             if(err){
//                 return res.json(400).json({error:'Unauthorised to update bid'})
//             }
//             res.json(bid);
//         })
// }

// const deleteBid = (req,res) => {
//     Bid.findByIdAndRemove(
//         {_id:req.bid._id }
//     ).exec((err,bid)=>{
//         if(err){
//             return res.status(400).json({error:'Unable to remove bid'});
//         }
//         else{
//             res.json({message:'Bid deleted successfully'})
//         }
//     })
// }

module.exports = { getBidById, addBid, getBid, getAllBids };