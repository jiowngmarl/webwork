const express = require("express");
const router = express.Router();
const query = require("../mysql");

router.get("", async (req, res) => {
  const result = await query("booklist", "selectList", null)
  res.send(result);
});

router.get("/:id", async (req,res) => {
  const result = await query("booklist", "selectById", req.params.id)
  res.send(result);
})
module.exports = router;