const express = require("express");
const router = express.Router();
const User = require("../models/user");
const auth = require("../middleware/auth");

//------create user
router.post("/profile/register", async (req, res) => {
  //   console.log(req.body)
  const user = new User(req.body);

  try {
    user.save();
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

//-------------get all users
router.get("/profile", async (req, res) => {
  try {
    //clg eka dala methanata ena user ge details okoma gtahaki(acces have)
    console.log(req.user);
    const users = await User.find({});
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send(error);
  }
});

//--------------find a user, that  passes through the prams
// router.get("/profile/:id",auth, async (req, res) => {
//   const _id = req.params.id;
//   try {
//     const user = await User.find({ _id });
//     if (!user) {
//       return res.status(404).send("You have not sign in");
//     }
//     res.status(200).send(user);
//     // console.log(users)
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

//---------------------------

// params wlin id ek ywna eka oni nm Comment out krl gnna

//--------------find a user, that the token passes through the headers
router.get("/profile/me", auth, async (req, res) => {
  // const _id = req.params.id;
  const _id = req.user._id;
  try {
    const user = await User.findById({ _id });
    if (!user) {
      return res.status(404).send("You have not sign in");
    }
    res.status(200).send(user);
    // console.log(users)
  } catch (error) {
    res.status(400).send(error);
  }
});

//---------------user update
router.patch("/profile/:id", async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  try {
    if (!updatedUser) {
      return res.status(400).send("profile updating went wrong");
    }
    res.status(200).send(updatedUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/profile/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );

    const token = await user.generateAuthToken();

    res.json({
      user,
    });

  } catch (error) {
    res.status(401).send(error);
  }
});

module.exports = router;
