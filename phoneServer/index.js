const express = require("express");
// const router = express.Router();
const mysql = require("mysql");
// const pool = require("../pool");
var pool = mysql.createPool({
  host: "127.0.0.1", //数据库地址
  user: "root", //数据库用户名
  password: "", //数据库密码
  port: 3306, //数据库端口
  database: "home", //库名
  connectionLimit: 15 //15连接
});
var server = express();
server.use(express.static("public"));
server.listen(4000);
server.get("/", (req, res) => {
  var sql = `SELECT * FROM home_index_product where pid!=0 order by pid`;
  pool.query(sql, [], (err, result) => {
    if (err) {
      res.send(err);
      console.log(err);
    } else {
      //setTimeout(function(){
      res.send(result);
      //},2000)

      /*res.writeHead(200,{
        "Access-Control-Allow-Origin":
          "*"
      });
      res.write(JSON.stringify(result));
      res.end();*/
    }
  });
});
// http://127.0.0.1:5050/index
// module.exports = router;
