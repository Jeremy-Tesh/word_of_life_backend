const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const bodyparser =require('body-parser')
const app = express();
const cors = require('cors');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage').GridFsStorage;
const methodOverride = require('method-override');
const crypto = require('crypto');
const Grid = require('gridfs-stream')





//Cors middleware
app.use(cors());
app.use




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

//Init gfs
let gfs;
const connection = mongoose.connection;
connection.once('open',()=>{
    gfs = Grid(connection.db, mongoose.mongo)
    gfs.collection('uploads')
});


//create storage engine

const storage = new GridFsStorage({
    url: uri,
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
          if (err) {
            return reject(err);
          }
          const filename = buf.toString('hex') + path.extname(file.originalname);
          const fileInfo = {
            filename: filename,
            bucketName: 'uploads'
          };
          resolve(fileInfo);
        });
      });
    }
  });
  const upload = multer({ storage });





//listening to server on port 3000
let port = process.env.PORT || 3000
app.listen(port)