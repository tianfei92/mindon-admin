const models = require('../db');
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const $sql = require('../sqlMap');
let crypto = require('crypto');

/**
 * 连接数据库
 * @type {Connection}
 */
let conn = mysql.createConnection(models.mysql);

conn.connect();

/**
 * 登录
 */
router.post('/login', (req, res) => {
    const md5 = crypto.createHash('md5');
    let params = req.body;
    const password = md5.update(params.password).digest('base64');
    let sql = `select * from user_log_in where name='${params.username}' and password='${params.password}'`;

    try {
        conn.query(sql, [params.username, params.password], function (err, result) {
            if (err) {
                console.error(`${err}*************系统错误*************`);
                const resData = {
                    code: 1001,
                    success: false,
                    msg: '系统错误'
                };
                res.send(resData)
            }
            if (result && result.length) {
                const resData = {
                    code: 0,
                    success: true,
                    msg: '登录成功'
                };
                req.session.username = req.body.username;
                req.session.password = password;
                res.send(resData);
            } else {
                res.send({
                    code: 1000,
                    success: false,
                    msg: '账号或密码不正确'
                })
            }
        })
    }
    catch (e) {
        console.error('*****************登录时系统错误*****************');
        const resData = {
            code: 1001,
            success: false,
            msg: '系统错误'
        };
        res.send(resData)
    }
});


/**
 * 登录校验
 */
router.post('/login/check', (req, res, next) => {
    if (req.session && req.session.username) {
        res.send({
            code: 0,
            success: true,
            msg: '已登录'
        })
    } else {
        res.send({
            code: 1001,
            success: false,
            msg: '未登录'
        })
    }
})

module.exports = router;
