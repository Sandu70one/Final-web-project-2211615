const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth")

const Order = require("../models/order");


router.post("/cart/:id", async (req, res) => {
  const order = new Order({ ...req.body, owner: req.params.id });
  try {
    await order.save();
    res.status(200).send(order);
  } catch (error) {
    res.status(400).send(error);
  }
});



router.get("/cart/:id", async (req, res) => {
  try {
    const orders = await Order.find({ owner: req.params.id });
    res.status(200).send(orders);
  } catch (error) {
    res.status(404).send(error);
  }
});

router.get("/cart/my",auth, async (req, res) => {
  try {
    const orders = await Order.find({ owner: req.user._id });
    res.status(200).send(orders);
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;
