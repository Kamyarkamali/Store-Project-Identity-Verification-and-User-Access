import User from "@/models/User"
import { hashPassword } from "@/utils/hashdPassword"
import connectDB from "@/utils/coonection"

export default async function handler(req,res){
    if(req.method!=="POST"){
        return
    }

    try{
       await connectDB()
    }catch(err){
        return res.status(500).json({status:"failed",message:"Error to connection db"})
    }

    const {email,password,conformPassword}=req.body

    if(!email || !password || !conformPassword){
        return res.status(422).json({status:"failde",message:"invalid data"})
    }

    const exsitingUser=await User.findOne({email:email})

    if(exsitingUser){
        return res.status(422).json({status:"failed",message:"user exsits alredy"})
    }

    const hashedPassword=await hashPassword(password)

    const newUser=await User.create({email:email,password:hashedPassword,confirmpassword:hashedPassword})

    console.log(newUser)

    res.status(201).json({status:"success",message:"user created"})
}