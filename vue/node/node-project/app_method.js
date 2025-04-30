const express = require('express')

const multer  = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'c:/temp/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})

const upload = multer({ storage: storage })

// express instance 생성
const app = express()
const port = 80

app.use(express.urlencoded({ extended: false })); 
app.use(express.json()) 

// 로그 미들웨어 morgan 부분
const morgan = require('morgan')
app.use(morgan('[:date[iso]] :method :url :remote-addr'))

//라우트 설정 시작 부분
app.get('/download', (req, res, next) => {
  const filepath = 'c:/temp/uploads/scott.sql';  
  const downname = 'scott.sql';
  res.setHeader('Content-Disposition', `attachment; filename=${downname}`); // 이게 핵심 
  res.sendFile(filepath);
});  

app.post('/profile', upload.single('avatar'), function (req, res, next) {
  console.log(req.file.size)
  console.log(req.file.filename)
  console.log(req.file.originalname)
  res.send("ok")
  // req.file 은 `avatar` 라는 필드의 파일 정보입니다.
  // 텍스트 필드가 있는 경우, req.body가 이를 포함할 것입니다.
})

let boards = [
  {id:1, title:"제목1", content:"내용1"},
  {id:2, title:"제목2", content:"내용2"}
] // id, title, content

app.get('/' , (req ,res) => {
  res.send("hello")
})

// 전체조회
app.get('/board' , (req ,res) => {
  res.send(boards)
})

// 단건조회
app.get('/board' , (req ,res) => {
  res.send("hello")
})

// 등록
app.post('/board' , (req ,res) => {
  const board = req.body;  //VO와 같은역할
  boards.push(board);
  res.send(board);
  console.log("받은 파마리터", board);
})

// 수정
app.put('/board/:id' , (req ,res) => {
  const id = req.params.id
  const board = req.body;
  
  //find를 이용하여 idx 번호를 찾기?
  const idx = boards.findIndex( board => board.id == id);
  if(idx >= 0) {
    boards[idx] = board;
    res.send(board)
  } else{
    res.send("not found");
  }
  
})

// 삭제
app.delete('/board/:id' , (req ,res) => {
  const id = req.params.id;
  
  //find를 이용하여 idx 번호를 찾기?
  const idx = boards.findIndex( board => board.id == id);
  if(idx >= 0) {
    // boards.splice(idx, 1)
    boards = boards.filter( board => board.id != id )
    res.send(boards)
  } else{
    res.send("not found");
  }
  
})

let emps = [ {id:0, name:"길동"},{id:1, name:"순신"} ]
//route()로 묶어서 같은 리소스(url) method 종류별로 라우트를 지정
app.route("/emp")
  .get( (req, res) => { res.send(emps) } )
  // .get( (req, res) => { res.send(emps[ req.params.id ]) } )
  .post( (req, res) => { res.send(req.body) } )
  .put( (req, res) => { res.send(req.body) } )
  .delete( (req, res) => { res.send(req.body.id) } )

  //Router를 이용하여 모듈 분리하여 리소스별로 라우트 지정
app.use("/product" ,require('./routers/product'))

app.listen(port, () => {
  console.log(`http://localhost:${port}`) // 서버가 실행될때 콘솔창에 주소를 보여주는 기능의 콜백 함수 (참조만 하기)
});

