var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');

// 连接数据库
var conn = mysql.createConnection(models.mysql);

conn.connect();
var jsonWrite = function (res, ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: 1,
            success: false,
            msg: '操作失败'
        });
    } else {
        res.json({
            code: 0,
            success: true,
            data: ret
        });
    }
};

// 增加用户接口
router.post('/login', (req, res) => {
    // let sql = $sql.user.add;
    let params = req.body;
    let sql = `select count(1) from user_log_in where name='${params.username}' and password='${params.password}'`;

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
            // jsonWrite(res, result);
            const resData = {
                code: 0,
                success: true,
                msg: '登录成功'
            };
            res.send(resData)
        }
    })
});

module.exports = router;