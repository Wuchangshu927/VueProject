const jwt = require('jsonwebtoken');  //用来生成token
module.exports = function (router) {
    router.post('/users/login', tologin)
}

let secret = 'wcs'

async function tologin(ctx) {
    let content = ctx.request.body.username

    let token = jwt.sign({
        data: 'wcs',//content,
        exp: Math.floor(Date.now() / 1000) + (20),
    }, secret)
    if (ctx.request.body.username == 'wcs') {
        console.log('成功请求')
        ctx.body = {
            "status": 200,
            "msg": "登陆成功",
            "token": token
        }

    }
    ctx.body = {
        "status": 200,
        "msg": "登陆成功",
        "token": token
    }
    console.log('程序异质性到')
    // if (ctx.request.body.formData.username == 'wcs' && ctx.request.body.formData.password == '72d06cb904796af7f578e71087140ac0') {
    //     console.log(200)
    //     console.log(token)
    //     ctx.body = {
    //         "status": 200,
    //         "msg": "登陆成功",
    //         "token": token
    //     }
    //     //     );
    // }
    if (ctx.request.body.formData.username == 'wcs') {
        console.log(200)
        console.log(token)
        ctx.body = {
            "status": 200,
            "msg": "登陆成功",
            "token": token
        }
        //     );
    } else {

        ctx.body =  {
            "status": 401,
            "msg": "用户名或密码错误",
            "token": token
        }
    }

}

async function fail(ctx) {
    ctx.body = '非法获取'

}