const User = require("../models/user")
const jwt = require("jsonwebtoken")

const auth = async(req,res,next)=>{
    try {
        const token = req.header("Authorization").replace("Bearer ", "")
        
        //decoded ek clg krot ene _id, iat ekai
        const decoded = jwt.verify(token,"EPICSHOPsecret")

        const user = await User.findOne({
            _id:decoded._id,
            "tokens.token":token
        })

        if(!user){
            throw new Error("decoded id is not available")
        }

        req.user = user;
        req.token = token;

        next()
    } catch (error) {
        res.status(401).send({error:"authentication erro"})
    }
}

module.exports = auth