//mysql_test.js
const pool = require("./mysql") 

  // 2. SQL 실행 
  const data = {name:"윤길동", email:"v@v.v", phone:"01055555555"}
  sql = "insert customers (name,email,phone) values (?,?,?)"; 
  pool.query(sql, [data.name, data.email, data.phone], function (err, results, fields) { 
    if (err) {     
    console.log(err);    
    } 
    // 3. 결과 처리 
    console.log(results); 
  }); 
