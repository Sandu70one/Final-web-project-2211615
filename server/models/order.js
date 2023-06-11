const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    orderDefault: {
        type: Boolean,
        default: false,
    },
    comments: {
        type: String,
        trim: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        
        // required: true,
        ref: "User",
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const Order = mongoose.model("Order", orderSchema)

module.exports = Order