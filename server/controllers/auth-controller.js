const User=require("../models/user-model");


const home =async(req,res)=>{
    try{
        res.status(200).send("welcome to world best series by vaishnavi technical using router");

    }catch(err){
        console.log(err);
    }

}
const register=async(req,res)=>{
    try{
        console.log(req.body);
        const {username,email,phone,password}=req.body;
        const userExist=await User.findOne({email});
        if(userExist){
            return res.status(400).json({msg:"eamil already exist"});
        }
        const userCreated=await User.create({username,email,phone,password});
        res.status(200).json({msg:userCreated});

    }catch(error){
        res.status(500).json(error.message);
    }
}
module.exports={home,register};