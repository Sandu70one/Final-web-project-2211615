// require("../dotenv").config();
const mongoose = require("mongoose")

const connection = mongoose.connection
mongoose.set('strictQuery', true)

connection.once("open", ()=>{
    console.log("Mongodb connected")
})
mongoose.connect(
  "mongodb+srv://sandu:15611sanfu@cluster0.c3ek3io.mongodb.net/EpicShop?retryWrites=true&w=majority",
  {
    // useNewUrlParse: true,
    useUnifiedTopology: true,
  }
);