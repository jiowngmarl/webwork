function wakeUp() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("1. 일어났어요! ⏰");
      resolve(); // resolve가 가르키는것이 다음 then절
    }, 1000);
  })
}

function washFace() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("2. 세수했어요! 💦");
      resolve();
    }, 1000);
  })
}

function eatBreakfast() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("3. 아침 먹었어요! 🍞");
      resolve();
    }, 1000);
  })
}

// await를 사용할려면 반드시 비동기 함수가 필요함
const morningRoutin = async () => {
  await wakeUp()
  await washFace()
  await eatBreakfast()
  console.log("준비완료")
}
morningRoutin()