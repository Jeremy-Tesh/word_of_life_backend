const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const bodyparser =require('body-parser')
const app = express();
const cors = require('cors')





//Cors middleware
app.use(cors());




//Import Route
const lessonsRoute =  require('./routes/lessons')

//middleware
app.use(bodyparser.json())
app.use('/lessons',lessonsRoute);

//routes



//Database connection

const uri =process.env.ATLAS_URI;
// mongoose.connect(uri)
// const connection = mongoose.connection;
// connection.once('open',()=>{
//     console.log("mongoDb success")
// })

mongoose.connect(uri,()=>console.log('db worked'))



//listening to server on port 3000
let port = process.env.PORT || 3000
app.listen(port)