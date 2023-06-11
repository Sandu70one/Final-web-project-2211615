const mongoose = require("mongoose")
// const Schema = mongoose.Schema;

const apparelSchema = ({
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
        rating:{
            type:String,
        },
        imgURL:{
            type:String,
        },
        type:{
            type:String
        }

})
const Apparel =mongoose.model("apparelDetails",apparelSchema)
module.exports = Apparel