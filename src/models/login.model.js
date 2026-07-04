import mongoose, { model, Types } from "mongoose";

const loginschema = mongoose.Schema({
    email:{
        Types:String,
        required: [true, "email id required"]
    },
     password:{
        Types:String,
        required: [true,"password"]
    }
    

},

{
        timestamps: true
}
);
export const logindetails = mongoose.schema("logindetails",loginschema);