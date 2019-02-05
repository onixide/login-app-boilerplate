const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  try {
    throw new Error("XXXXAAAAAAAAAAAAAAA");
  } catch (err) {
    next(err);
  }
});



module.exports = router;
