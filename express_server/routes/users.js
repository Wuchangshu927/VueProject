var express = require('express');
var mailOption = require('./config/Mail/mailOption')
var createError = require('http-errors');
var router = express.Router();
const jwt = require('jsonwebtoken');  //用来生成token
const nodemailer = require("nodemailer");
let secret = 'abct123'
let secret1 = 'abct12311'
/*登录*/
router.route('/login')
    .get(function (req, res) {
        res.send('2');
    })
    .post(function (req, res) {
        console.log(req.body)
        let content = req.body.formData.username
        console.log(content)

        let token = jwt.sign({
            data: content,
            exp: Math.floor(Date.now() / 1000) + (20),
        }, secret)
        //req.session[req.body.formdata.username]=token
        if (req.body.formData.username == 'wcs' && req.body.formData.password == '202cb962ac59075b964b07152d234b70') {
            res.send({
                "status": 200,
                "msg": "登陆成功",
                "token": token
            });
        } else {
            res.send({
                "status": 401,
                "msg": "用户名或密码错误"
            });
        }
    });

/*注销时间*/
router.get('/logout', function (req, res) {
    req.session.user = null;
});
router.get('/register', function (req, res) {

    res.send({})
});
router.post('/register', function (req, res) {

    let token = req.get('token')
    jwt.verify(token, secret, (err, decode) => {
        if (err) {
            console.log(err.message)
        } else {
            console.log(decode)
        }
    })
    res.send({user: 'wcs'})
});

function verify(req, res, error, success) {
    jwt.verify(req.get('token'), secret, (err, decode) => {
        if (err) {
            error()
        } else {
            success()
        }
    })
}
/*用户数据获取*/
router.get('/usersData', function (req, res) {
    console.log(req.get('token'))

    verify(req, res, function(){

        res.send({
            "status": 401,
            "msg": "登录失效，请重新登录！",
        })

    },function () {
        res.send({
            "status": 200,
            "msg": "获取数据成功",
        })
    })
});



/*邮件发送api*/
router.post('/send', function (req, res, next) {

    var x=mailOption('794100338@qq.com')
    console.log('25252522')
    console.log(x)

    // send('125545').catch(console.error);
});

module.exports = router;
