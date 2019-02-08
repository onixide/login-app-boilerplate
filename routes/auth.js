const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const passport = require("passport");
const db = require("../config/db");
const User = require("../models/user");
const bcrypt = require("bcrypt");

router.post("/", async (req, res, next) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (!user)
      return res.json({ success: false, msg: "User not found" }).status(400);

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    console.log(validPassword);
    if (!validPassword)
      return res.json({ success: false, msg: "Incorrect password" }).status(400);

    const token = jwt.sign({ data: user, www: "WWZXCAWER" }, db.secret, {
      expiresIn: 604800 // 1 week
    });

    res.json({
      success: true,
      token: `Bearer ${token}`,
      user: {
        id: user._id,
        email: user.email
      }
    });
  }
  catch (ex) {
    next(ex);
  }
});

// Profile
router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }), (req, res, next) => {
    res.json({ user: req.user });
  }
);

module.exports = router;
