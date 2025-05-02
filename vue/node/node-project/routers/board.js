const express = require("express");
const router = express.Router();
const query = require("../mysql");

router.get("", async (req, res) => {
  const result = await query("board", "selectList", null);
  res.send(result);
});

router.post("", async (req, res)=> { 
  const result = await query("board", "insertInfo", [req.body.title, req.body.writer, req.body.content]);
  res.send(result);
});

//단건조회
router.get("/:id", async (req, res)=> {
  const result = await query("board", "selectById", req.params.id);
  res.send(result);
});

//수정
router.put("/:id", async (req, res)=> { 
  const result = await query("board", "updateInfo", [req.body, req.params.id] );
  res.send(result);
});

//삭제
router.delete("/:id", async (req, res)=> {
  const result = await query("board", "deleteInfo", req.params.id);
  res.send(result);
});

module.exports = router;
