const mongoose = require("mongoose")
const Schema = mongoose.Schema
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const userSchema = new Schema({
    name:{
        type: String,
        trim: true
    },
    email:{
        type:String,
        required:true,
        unique: true,
        trim: true
    },
    address: {
        type:String,
        required:false,
        trim: true
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    userDeleted:{
        type:Boolean,
        default:false
    },
    items: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
        },
    ],
    totalAmount: {
        type: Number,
        default: 0,
    },
    tokens:[
        {
            token:{
                type:String
            }
        }
    ]
})

userSchema.pre("save", async function (next){
    const user = this;

    if(user.isModified("password")){
        user.password = await bcrypt.hash(user.password, 8)
        console.log(user)
    }
    next()
})


//--------login confirmation
userSchema.statics.findByCredentials = async (email,password) =>{
    
    const user =await User.findOne({email})
    if(!user){
        throw new Error()
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch){
        throw new Error()
    }
    return user;
}

userSchema.methods.generateAuthToken = async function(){
    const user= this;
    const token = jwt.sign({_id: user._id.toString()}, "EPICSHOPsecret")
    user.tokens = user.tokens.concat({token})

    await user.save()
    return token;

}

const User =mongoose.model("User", userSchema)
module.exports= User