const userModel=require("../Models/user.model")
const jwt=require("jsonwebtoken")
require("dotenv").config();


const signup = async(req,res) => {
    const {email,password,name,dob,socialhandle}=req.body
    try{
        const user=await userModel.findOne({email,socialhandle})
        if (user) {
            res.status(404).send("You are a register user")
        } else {
            await userModel.create({email,password,name,dob,socialhandle})
            return res.status(200).send("User Created successfully")
        }
    }catch(e){
        console.log(e)
        return res.status(404).send(e.message)
    }
}







module.exports={signup}