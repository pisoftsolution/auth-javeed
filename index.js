const express = require("express");
const mongoose = require("mongoose");
const authroute = require('./routes/auth'); 
const sendgridroute = require('./routes/sendgrid');
const app = express();

const dbURI="mongodb://localhost/authentication";
app.use(express.json());
app.use(express.urlencoded());
 
//To connect to the db
app.use('/api/auth', authroute);
app.use('/api/sendgrid', sendgridroute);
mongoose.connect(dbURI, { useNewUrlParser:true , useUnifiedTopology:true });
const db = mongoose.connection;
db.on("error" , (err)=>{console.error(err)});
db.once("open", ()=> {console.log("mongo DB connected right here")});
app.listen( 8080 , ()=>{
    console.log("server started at 8080");
})