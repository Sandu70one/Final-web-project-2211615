const express = require("express")
const router = express.Router();
const Apparel = require("../models/apparels.js")

// router.post("/apparels", async(req,res)=>{
//     const apparel = new Apparel(req.body) 
    
//     try {
//         await apparel.save()
//         res.status(201).send(apparel)
//     } catch (error) {
//         res.status(400).send(error)
        
//     }
// })

router.get("/apparels",async (req,res) =>{
    try {
        const apparel = await Apparel.find({})
        res.json({
            apparel
        });
        res.status(200)
    } catch (error) {
        res.status(400).send(error)
    }
  })
module.exports = router;

