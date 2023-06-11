const mongoose = require("mongoose")
// const Schema = mongoose.Schema;

const modelSchema = ({
        name:{
            type:String,
            require:true
        },
        desc:{
            type:String,
            require:true
        },
        price:{
            type:String,
            require:true
        },
        imgURL:{
            type:String,
        },
        type:{
            type:String
        }
        

})
const Model =mongoose.model("modelDetails",modelSchema)
module.exports = Model