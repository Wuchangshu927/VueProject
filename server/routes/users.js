var express = require('express');
var createError = require('http-errors');
var router = express.Router();
const jwt = require('jsonwebtoken');  //用来生成token
let secret = 'abct123'
let secret1 = 'abct12311'
/* GET users listing. */
router.route('/login')
    .get(function (req, res) {
        res.send('2');
    })
    .post(function (req, res) {
        console.log(req.body)
        let content =req.body.formData.username
        console.log(content)

        let token = jwt.sign({
            data: content,
            exp: Math.floor(Date.now() / 1000) + (20),
        }, secret)
        //req.session[req.body.formdata.username]=token
        if (req.body.formData.username=='wcs'&&req.body.formData.password=='123') {
            res.send({
                "status": 200,
                "msg": "登陆成功",
                "token": token
            });
        } else {
            res.send({
                "status": 401,
                "msg": "登陆失败"
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

   let token =req.get('token')
    jwt.verify(token,secret,(err,decode)=>{
        if (err){
            console.log(err.message)
        }
        else{
            console.log(decode)
        }
    })
    res.send({user:'wcs'})
});
function viled(req,res,callback){
    jwt.verify(req.get('token'),secret,(err,decode)=> {
        if (err){
            // res.error({
            //     "status": 500,
            //     "msg": "数据错误！",
            //     "token": ''
            // })
            console.log(err.message)
            res.send({
                "status": 401,
                "msg": "登录失效，请重新登录！",
                "token": ''
            })
        }else{
            callback(req,res,)
        }
    })
}
router.get('/usersData', function (req, res) {
    console.log(req.get('token'))

    viled(req,res,function (req,res) {
        res.send({
            "status": 200,
            "msg": "获取数据成功",
        })
    })
});


module.exports = router;
