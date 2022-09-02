const mongoose = require('mongoose');

const DetailsSchema = mongoose.Schema({
    title:String,
    desc:{
        title:Number,
        name:String,
    }
    // img:{
    //     data:Buffer,
    //     contentType:String
    // },

}); 

const LessonSchema =  mongoose.Schema({
    title:{
        title:String,
        required:true,
    },
    details:[DetailsSchema],



   
});

 

module.exports = mongoose.model('Details', DetailsSchema)
module.exports = mongoose.model('Lessons', LessonSchema)

