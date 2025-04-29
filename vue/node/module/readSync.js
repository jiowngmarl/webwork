//readSync.js
const fs = require("fs");
//동기, 블록킹 함수로 호출됨
var text = fs.readFileSync("c:/temp/data.txt", "utf-8");
console.log(text);
console.log("the end");