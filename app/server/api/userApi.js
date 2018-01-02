const models = require('../db');
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const $sql = require('../sqlMap');

// 连接数据库
let conn = mysql.createConnection(models.mysql);

conn.connect();

// 增加用户接口
router.post('/login', (req, res) => {
    // let sql = $sql.user.add;
    let params = req.body;
    let sql = `select count(1) from user_log_in where name='${params.username}' and password='${params.password}'`;

    try {
        conn.query(sql, [params.username, params.password], function (err, result) {
            if (err) {
                console.log(`${err}*************系统错误*************`);
                const resData = {
                    code: 1001,
                    success: false,
                    msg: '系统错误'
                };
                res.send(resData)
            }
            if (result) {
                const resData = {
                    code: 0,
                    success: true,
                    msg: '登录成功'
                };
                res.send(resData);
            }
        })
    }
    catch (e){
        console.log('*****************系统错误*****************')
    }
});

module.exports = router;