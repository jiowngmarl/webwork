/*캡슐화 : 접근,노출 범위를 제어하기 위해서 모듈화 */

function myfunc(msg){
  console.log(msg);
}

function myinfunc(msg){
  console.log(msg);
}

function defFunction(msg) {
  console.log('default:',msg);
}
export default defFunction;
export{ myfunc, myinfunc}