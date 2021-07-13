const express = require("express");
const User = require("../model/user");
const router = express.Router();
const bcrypt = require('bcrypt');
router.post('/signup',(req,res)=>{
    bcrypt.hash(req.body.password , 10 , (error , hash)=>{
        if(error)
        {
            res.status(400).json(error);
        }
        else 
        {
           const user = new User({
               email: req.body.email,
               password: hash
           });
           user.save()
           .then(user=>{
               res.status(200).json(user);
           })
           .catch(err=>{ 
               res.status(400).json(err);
           })

        }
    })   
})
module.exports = router
 