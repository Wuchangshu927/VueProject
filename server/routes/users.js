var express = require('express');
var mailTransport = require('./config/Mail/mailOption')
var createError = require('http-errors');
var router = express.Router();
const jwt = require('jsonwebtoken');  //用来生成token
const nodemailer = require("nodemailer");
let secret = 'abct123'
let secret1 = 'abct12311'
/* GET users listing. */
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
        if (req.body.formData.username == 'wcs' && req.body.formData.password == '123') {
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

function viled(req, res, error, success) {
    jwt.verify(req.get('token'), secret, (err, decode) => {
        if (err) {
            error()
        } else {
            success()
        }
    })
}

router.get('/usersData', function (req, res) {
    console.log(req.get('token'))

    viled(req, res, function(){

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


router.post('/send', function (req, res, next) {

// async..await is not allowed in global scope, must use a wrapper
    async function main() {
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        let testAccount = await nodemailer.createTestAccount();

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp.qq.com",
            secure: true, // true for 465, false for other ports
            auth: {
                user: '794100338@qq.com', // generated ethereal user
                pass: 'osachfrnslfxbfbc' // generated ethereal password
            }
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: '"Fred Foo 👻" <794100338@qq.com>', // sender address
            to: "271887584@qq.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>" // html body
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }

    main().catch(console.error);
});

module.exports = router;
