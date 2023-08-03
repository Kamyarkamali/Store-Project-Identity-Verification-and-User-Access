import mongoose from "mongoose";

async function connectDB(){
    try{
        if(mongoose.connections[0].readyState) return

        await mongoose.connect("mongodb+srv://kamyar021:kamyar021@cluster0.biigvzd.mongodb.net/?retryWrites=true&w=majority")
        console.log("connection")
    }catch(err){
        console.log("connection failed");
    }
}


export default connectDB;