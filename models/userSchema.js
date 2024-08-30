import mongoose  from "mongoose";
import validator from "validator";
import bcrpyt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema =new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please provide your name!"],
        minLength:[3,"Name Must contain at least 3 characters!"],
        maxLength:[30,"Name Cannot exceed 30 characters"],
    },
    email:{
        type:String,
        required:[true,"Please Provide your email!"],
        validate:[validator.isEmail,"Please Provide a valid Email!"],
    },
    phone:{
        type:Number,
        required:[true,"Please Provide your phone Number."]
    },
    password:{
        type:String,
        required:[true,"Please Provide your Password!"],
        minLength:[8,"Name Must contain at least 8 characters!"],
        maxLength:[32,"Name Cannot exceed 32 characters"],
        select:false,
    },
    role:{
        type:String,
        required:[true,"Please Provide your role"],
        enum:["Job Seeker","Employer"],
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
});


//hashing  The PAssword
userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next()
    }
    this.password =await bcrpyt.hash(this.password,10);
});

//comparing  a password
userSchema.methods.comparePassword =async function(enteredPassword){
    return await bcrpyt.compare(enteredPassword,this.password);
};

//generating  a  jwt webtoken for authorization
userSchema.methods.getJWTToken =function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET_KEY,{
        expiresIn:process.env.JWT_EXPIRE
    });
};

export const User =mongoose.model("User",userSchema);


