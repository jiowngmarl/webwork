// 비동기 방식 테스트 (ajax)
import axios from 'axios'
// function getBoard() {
// axios("http://localhost:3000/board/1").then( res => console.log("2", res.data.title) ) // 서버에서 응답이 오면 then절이 실행
// } // 서버단에 요청을 보내고 응답이 오면 then 안에있는 콜백 함수를 호출

// getBoard(); //선언된 함수를 호출
// console.log("1","the end")

// 실행시킬려면 콘솔창에 node async.js 입력

// 따라서 8행이 콘솔에 먼저 찍히고 4행의 then절 안에있는 콜백 함수가 호출 됨

async function getBoard2() {
  let res = await axios("http://localhost:3000/board/1")
  console.log("2", res.data.title);
}

getBoard2();
console.log("1", "the end");