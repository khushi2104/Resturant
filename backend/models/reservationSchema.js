import mongoose, { Schema } from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
        firstName : {
            type : String ,
            required : true,
        },
        lastName : {
            type : String,
            required : true,
        },
        email : {
            type : String,
            required : true,
            validate : [validator.isEmail, "Please provide valid email"]
        },
        phone : {
            type : String ,
            required : true,
            minLength : [10,"No should contain only 10 digits"],
            maxLength : [10,"No should contain only 10 digits"],
        },
        time :{
            type :String,
            required :true
        },
        date : {
            type :String,
            required : true,
        }
});

export const Reservation = new mongoose.model("Reservation",reservationSchema);