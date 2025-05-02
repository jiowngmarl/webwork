// settimeout, interval

setTimeout(()=>{console.log("타이머 후 실행")}, 2000) // timeout은 지정된 시간이후 한번 작동하는 것
setInterval(()=>{console.log(new Date())}, 1000) // interval은 지정된 시간마다 작동되는것