//regExp.js : 정규표현식

let text = "Visit W3Schools!";
const exp = /3Visit/i;
let n = text.search(exp);
console.log(n);

let bool = exp.test(text)
console.log(bool);

let numExp = /[0-9a-z]{1,3}/
let numText = `A11`
bool = numExp.test(numText)
console.log(bool);