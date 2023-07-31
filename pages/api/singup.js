import connectDB from "@/utils/coonection";
import User from "@/models/User";
import { hashPassword } from "@/utils/hashdPassword";

export default async function handelr(req,res){

    if(req.method!=="POST"){
        return
    }

    try{
        await connectDB()
        return res.status(201).json({status:"succses",message:"conection to dataBase"})
    }catch(err){
        console.log("problem to connection")
    }

    const {email,password}=req.body

    if(!email || password){
        return res.status(422).json({status:"failed"})
    }

    const exsitings=await User.findOne({email:email})

    if(exsitings){
        return res.status(401).json({status:"failed",message:"User allredy acount"})
    }

    const hasheddPasword=await hashPassword(password)

    const newUser=await User.create({email:email,password:hasheddPasword})

    console.log(newUser)

    res.status(201).json({status:"succses",message:"User created"})
}