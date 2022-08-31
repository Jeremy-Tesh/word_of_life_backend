const mongoose = require('mongoose');

const DetailsSchema = mongoose.Schema({
    title:String,
    desc:{
        title:String,
        name:String,
    }
    // img:{
    //     data:Buffer,
    //     contentType:String
    // },

}); 

const LessonSchema =  mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    details:[DetailsSchema],



   
});

 

module.exports = mongoose.model('Details', DetailsSchema)
module.exports = mongoose.model('Lessons', LessonSchema)