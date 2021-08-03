const jwt = require("jsonwebtoken");
const Blog = require('../models/Blog');



exports.addBlog = (req,res) => {
    if (!req.body.text ||
        !req.body.author){
        return res.status(400).json({msg: "Invalid Data"})
    }
    let newBlog = new Blog({
        text: req.body.text,
        author:req.body.author
    });
    newBlog.save()
    .then(b=>{
        return res.status(200).json({blog:b})
    })
    .catch(err=>{
        res.status(400).send({msg:"Something went wrong"})
    })
        
}



exports.editBlog = (req,res) => {
    if(!req.body.text ||
        !req.body.author ||
        !req.body.id){
        return res.status(400).json({msg: "Invalid Data"})
    }
    Blog.findById(id)
    .then(b=>{
        b.text = req.body.text;
        b.author = req.body.author;
        b.save()
        .then(edited=>{
            return res.status(200).json({edited:edited})
        })
    .catch(err=>{
            res.status(400).send({msg:"Something went wrong"})
        })
    })
    .catch(err=>{
        res.status(400).send({msg:"Something went wrong"})
    })     
}


exports.delete = (req,res) => {
    if( !req.query.id){
        return res.status(400).json({msg: "Invalid Data"})
    }
    Blog.findByIdAndDelete(req.query.id)
    .then(info=>{
        return res.status(200).json({msg:"Blog Deleted"})
    })
    .catch(err=>{
        return res.status(400).json({msg: "Something went wrong"})
    })      
}