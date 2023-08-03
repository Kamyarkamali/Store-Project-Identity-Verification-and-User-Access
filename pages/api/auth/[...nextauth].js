import User from "@/models/User";
import connectDB from "@/utils/coonection";
import { verufiPassword } from "@/utils/hashdPassword";
import NextAuth from "next-auth/next";

import  CredentialsProvider  from "next-auth/providers/credentials";

const authOptions={
    session:{strategy:"jwt"},
    providers:[
        CredentialsProvider({
            async authorize(credentials,req){
                const {email,password}=credentials

                try{
                    await connectDB()
                }catch(err){
                    throw new Error("Error")
                }
                if(!email || !password){
                    throw new Error("Invalid Data")
                }

                const user=await User.findOne({email:email})

                if(!user) throw new Error("user Dos'ent")

                const isValid=await verufiPassword(password,user.password)
                
                if(!isValid) throw new Error("userName or Password is Not Valid")

                return {email}
            },
        })
    ]
}


export default NextAuth(authOptions)