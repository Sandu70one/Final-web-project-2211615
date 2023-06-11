const express = require("express")
const router = express.Router();
const Model = require("../models/models.js")

router.post("/models", async(req,res)=>{
    const model = new Model(req.body) 
    
    try {
        await model.save()
        res.status(201).send(model)
    } catch (error) {
        res.status(400).send(error)
        
    }
})
module.exports = router;