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
app.use('/api/phone-verify' ,twilio);
app.use('/api/blog' ,blog);


mongoose.connect(dbURI , {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on("error", (err)=> {console.error(err)});

db.once("open", ()=>{console.log("DB started successfully")});

app.listen(8096, ()=>{console.log("Server started : 8096")});