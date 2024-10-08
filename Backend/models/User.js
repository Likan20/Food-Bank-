const mongoose=require('mongoose')
const { Schema } = mongoose;

const UserInfo = new Schema({
    name :{
        type:String,
        required:true
    },
    location :{
        type:String,
        required:true
    },
    phone :{
        type:Number,
        required:true
    },
    password :{
        type:String,
        required:true
    },
    email :{
        type:String,
        required:true
    },
    date: { 
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model('user',UserInfo)