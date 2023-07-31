import mongoose from "mongoose";

async function connectDB(){
    try{
        if(mongoose.connections[0].readyState) return

        await mongoose.connect("mongodb://kamyar021:kamyar021@ac-o8dnolh-shard-00-00.8xyk3do.mongodb.net:27017,ac-o8dnolh-shard-00-01.8xyk3do.mongodb.net:27017,ac-o8dnolh-shard-00-02.8xyk3do.mongodb.net:27017/?ssl=true&replicaSet=atlas-6ai97h-shard-0&authSource=admin&retryWrites=true&w=majority")
        console.log("connection")
    }catch(err){
        console.log("connection failed");
    }
}


export default connectDB;