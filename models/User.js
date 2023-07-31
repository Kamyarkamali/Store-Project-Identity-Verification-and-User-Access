import { Schema,model,models } from "mongoose";


const userSchema=new Schema({
    email:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
    },
    createdAat:{
        type:Date,
        default:()=>Date.now(),
        immutable:true
    }
})

const User=models.User || model("User",userSchema)

export default User