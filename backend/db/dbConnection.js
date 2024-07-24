import mongoose from "mongoose";

export const dbConnection = ()=>{

    mongoose.connect(process.env.MONGO_URI,{
        dbName :"RESTAURANT"
    }).then(()=>{
        console.log("Database connected successfully...")
    }).catch((e)=>{
        console.log(e);
    })
}