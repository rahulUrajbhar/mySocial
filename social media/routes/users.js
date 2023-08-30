const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require("bcrypt")

//update user profile
router.put("/:id",async (req,res)=>{
    if(req.body.userId === req.params.id || req.body.isAdmin){
        if(req.body.password){
            try{
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            }catch(err){
                res.status(500).json("error releted to password error")
            }
        }
        try{
            const user = await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
            res.status(200).json("your account has been updated");
        }catch(err){
            res.status(500).json(err)
        }}
    else{
        res.status(403).json("You can update only your account")
    }})

// delete user account
router.delete("/:id",async (req,res)=>{
    if(req.body.userId === req.params.id || req.body.isAdmin){
        try{
            const user = await User.findByIdAndDelete(req.params.id);
            res.status(200).json("your account has been deleted");
        }catch(err){
            res.status(500).json(err)
        }
    }
    else{
            res.status(403).json("You can delete only your account")
        }
})

//get user account
router.get("/:id", async(req,res)=>{
    try{
        const user=await User.findById(req.params.id);
        const {password,updatedAt,__v,...other}= user._doc
        res.status(200).json(other);
    }catch(err){
        res.status(500).json(err)
    }
})

//follow user account
router.put("/:id/follow", async(req,res)=>{
if(req.body.userId !== req.params.id){
 try{
    const user = await User.findById(req.params.id);
    const currentUser = await User.findById(req.body.userId);
    if(!user.followers.includes(req.body.userId)){
        await user.updateOne({$push:{followers:req.body.userId}});
        await currentUser.updateOne({$push:{followings:req.params.id}});
        res.status(200).json("followed the user")
    }else{
        res.status(403).json("you already follow this user")
    }
 }catch(err){
    res.status(500).json(err)
 }
}
else{
    res.status(403).json("you can't follow yourself")
}
})

//unfollow user account

router.put("/:id/unfollow", async(req,res)=>{
if(req.body.userID !== req.params.id){  
try{
const user = await User.findById(req.params.id);
const currentUser = await User.findById(req.body.userId);
if(user.followers.includes(req.body.userId)){
    await user.updateOne({$pull:{followers:req.body.userId}});
    await currentUser.updateOne({$pull:{followings:req.params.id}});
    res.status(200).json("unfollowed the user")
}else{
    res.status(403).json("you don't follow this user")
}
}
catch(err){
    res.status(500).json(err)
}
}else{
    res.status(403).json("you can't unfollow yourself")
}
})

module.exports = router