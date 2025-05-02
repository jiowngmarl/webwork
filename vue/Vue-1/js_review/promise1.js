function wakeUp(callback) {
  setTimeout(() => {
    console.log("1. 일어났어요! ⏰");
    callback();
  }, 1000);
}

function washFace(callback) {
  setTimeout(() => {
    console.log("2. 세수했어요! 💦");
    callback();
  }, 1000);
}

function shower(callback) {
  setTimeout(() => {
    console.log("3. 샤워했어요! 💦");
    callback();
  }, 1000);
}

function eatBreakfast(callback) {
  setTimeout(() => {
    console.log("3. 아침 먹었어요! 🍞");
    callback();
  }, 1000);
}
//비동기 처리리를 동기식 처리로 바꾸는 방법 1번째 : 콜백함수를 사용
//실행할 함수가 많아지면 콜백함수 또한 여러번 중첩되는 문제가 발생 => promis로 해결
wakeUp(() => { 
  washFace(()=>{
    shower(()=> {
      eatBreakfast(()=>{
        console.log("준비완료");
      });
    })
  })
});
