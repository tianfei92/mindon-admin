const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const mysql = require('mysql');
const models = require('../db');
const $sql = require('../sqlMap');


/**
 * 连接数据库
 * @type {Connection}
 */
let conn = mysql.createConnection(models.mysql);
conn.connect();

/**
 * 用户密码加密
 * @param data 用户输入的密码
 */
const aesEncode = function (data) {
    const cipher = crypto.createCipher('aes192', 'arieltian@1992');
    let password = cipher.update(data, 'utf-8', 'hex');
    password += cipher.final('hex')
    return password
}

/**
 * 用户密码解密
 * @param data
 */
const aesDecode = function (data) {
    const decipher = crypto.createDecipher('aes192', 'arieltian@1992');
    let password = decipher.update(data, 'hex', 'utf-8')
    password += decipher.final('utf8')
    return password
}

/**
 * 登录
 */
router.post('/login', (req, res) => {
    let params = req.body;
    let sql = `select * from user_log_in where name='${params.username}'`;

    try {
        conn.query(sql, [], function (err, result) {
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
                if (aesDecode(result[0].password) !== params.password) {
                    res.send({
                        code: 1000,
                        success: false,
                        msg: '用户密码不正确'
                    })
                } else {
                    const resData = {
                        code: 0,
                        success: true,
                        msg: '登录成功'
                    };
                    req.session.username = req.body.username;
                    req.session.password = aesDecode(result[0].password);
                    res.send(resData);
                }
            } else {
                res.send({
                    code: 1000,
                    success: false,
                    msg: '系统中不存在该用户，请确认用户名是否正确'
                })
            }
        })
    } catch (e) {
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
 * 退出登录
 */
router.post('/singOut', (req, res) => {
    req.session.username = '';
    req.session.password = '';
    res.send({
        code: 0,
        success: true,
        msg: '退出登录成功！'
    })
})

/**
 * 注册
 */
router.post('/register', (req, res) => {
    let params = req.body;
    const password = aesEncode(params.password);
    let sql = `select * from user_log_in where name='${params.username}'`;

    try {
        conn.query(sql, [], function (err, result) {
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
                    code: 1000,
                    success: false,
                    msg: '系统中已存在该用户名，请尝试使用其他用户名'
                };
                res.send(resData);
            } else {
                const insert = `insert into user_log_in(id, name, password) values(0, ?, ?)`;
                conn.query(insert, [params.username, password], function (err, result) {
                    if (err) {
                        console.error(`${err}*************系统错误*************`);
                        const resData = {
                            code: 1001,
                            success: false,
                            msg: '系统错误'
                        };
                        res.send(resData)
                    } else {
                        req.session.username = req.body.username;
                        req.session.password = password;
                        res.send({
                            code: 0,
                            success: true,
                            msg: '注册成功'
                        })
                    }
                })
            }
        })
    } catch (e) {
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
router.post('/login/check', (req, res) => {
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

/**
 * 获取登录用户信息
 */
router.get('/info', (req, res) => {
    if (req.session && req.session.username) {
        res.send({
            code: 0,
            success: true,
            data: {
                userName: req.session.username
            }
        })
    } else {
        res.send({
            code: 1001,
            success: false,
            msg: '用户未登录'
        })
    }
})

module.exports = router;
