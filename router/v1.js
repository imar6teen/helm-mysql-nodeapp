const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("fak yu");
});

module.exports = router;
