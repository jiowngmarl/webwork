const express = require("express");
const router = express.Router();
const query = require("../mysql");

router.get("/:id", async (req, res) => {
  const result = await query("comment", "selectList", req.params.id);
  res.send(result);
});

module.exports = router;