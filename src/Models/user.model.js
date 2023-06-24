const { Schema, model } = require("mongoose");

const userSchema=new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    socialhandle:{
        type:String,
        required:true
    }

})

const userModel=model("user",userSchema)

module.exports=userModel