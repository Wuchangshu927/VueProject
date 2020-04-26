var nodemailer =require('nodemailer')
var config =require('./config')

function mailOption(user){
    var userauth =config(user,(user)=>{
        console.log('12323***************************')
        console.log(user[0].user)

        if (user.length>0){
            var transporter=nodemailer.createTransport({
                host : 'smtp.qq.com',
                secure: false, // true for 465, false for other ports // 使用SSL方式（安全方式，防止被窃取信息）
                port:587,
                auth : {
                    user : user[0].user,
                    pass : user[0].pass
                },
            });
            return transporter
        }
    })
}

module.exports = mailOption
