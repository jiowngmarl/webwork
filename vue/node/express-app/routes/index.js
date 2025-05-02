//mysql_test.js
// mysql 모듈 로드 
const mysql = require("mysql2");  
 
// mysql 접속 정보 
const conn = { host: "127.0.0.1",  
               port: "3306",  
               user: "root",  
               password: "admin",  
               database: "shop"  }; 

let pool = mysql.createPool(conn);



// const query = (sql, data) => {
//   return new Promise((resolve, reject)=>{
//     pool.query(sql, null, (err,result)=>{
//       if(err) reject();
//       resolve(result);
//     });
//   })
// }

module.exports = query