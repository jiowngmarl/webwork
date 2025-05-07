const express = require("express");
const router = express.Router();

// 로그인 처리
// get방식은 query, post방식은 body,  :id는 param방식
router.post("/login", (req,res) => {
  const {email, pw} = req.body
  req.session.email = email;
  req.session.save( err => {
    if(err) throw err;
    res.send({code : "success"});
  });
})

router.get("/info", (req,res)=>{
  res.send( {email:req.session.email})
})

// 로그아웃 처리
router.post("/logout", (req,res) => {
  req.session.destroy();
  res.send("logout success");
})

module.exports = router;