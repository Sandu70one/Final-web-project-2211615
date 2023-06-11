require("dotenv").config();
require ("./db/mongoose.js")

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// const router = require("./routes/_index.routes");
const apparelRouter = require("./routes/apparels.routes.js");
const modelRouter = require("./routes/models.routes.js")
const userRouter = require("./routes/user.routes.js")
const orderRouter = require("./routes/order.routes.js")


const app = express();
const PORT = 8000;
app.use(cors({ origin: "*" }));


app.use(bodyParser.json())

app.use(apparelRouter)
app.use(modelRouter)
app.use(orderRouter)
app.use(userRouter)
//* ==> base_URL eka denne


app.get("/test", (req, res) => {
  res.send("test ok from server!");
});


app.listen(PORT, () => {
  console.log("server is running on port:" + PORT);
});
