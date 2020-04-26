const mysql = require('mysql');
// 创建一个数据库连接池
module.exports = mysql.createPool({
    host: 'localhost',
    port: 3306,
    database: 'vhr',
    user: 'root',
    password: '12345678'
})
