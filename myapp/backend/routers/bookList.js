const express = require("express");
const router = express.Router();
const query = require("../mysql");

router.get("", async (req, res) => {
  const result = await query("booklist", "selectList", null)
  res.send(result);
});

module.exports = router;