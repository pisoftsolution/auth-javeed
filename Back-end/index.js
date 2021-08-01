const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require('cors');

const authRoute = require('./routes/auth');
const sgRoute = require('./routes/sendgrid');
const twilio = require('./routes/twilio');
const blog = require('./routes/blog');

const dbURI = "mongodb+srv://root:javeed@cluster0.fxudz.mongodb.net/test";
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use('/api/auth' , authRoute);
app.use('/api/verify' , sgRoute);
app.use('/api/verify' ,twilio);
app.use('/api/blog' ,blog);


mongoose.connect(dbURI , {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on("error", (err)=> {console.error(err)});

db.once("open", ()=>{console.log("DB started successfully")});

app.listen(8096, ()=>{console.log("Server started : 8096")});














// const express= require("express");  
// const mongoose =require("mongoose");
// const authroute  =require('./routes/auth');
// const sendgridRoute  =require('./routes/sendgrid');
// const twilioRoute = require ('./routes/twilio');
// const blogsRoute = require ('./routes/blogs');
// const jwt = require("jsonwebtoken"); 
// var cors = require('cors')

// const app=express();

// const dbURI="mongodb+srv://root:junaid@cluster0.qxafi.mongodb.net/test"; 

// app.use(express.json()); 
// app.use(cors())
// app.use(express.urlencoded());
// app.use('/api/auth',authroute);
// app.use('/api/sendgrid',sendgridRoute);
// app.use('/api/twilio',twilioRoute);
// app.use('/api/Blogs',blogsRoute);

// mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true});
// const db= mongoose.connection;

// db.on("error",(err)=>{console.error(err)})
// db.once("open",()=>{console.log("Mongodb connected successfully")});

// app.listen(8095,()=>{
//     console.log("server started 8095");
// })