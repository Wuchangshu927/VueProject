var nodemailer =require('nodemailer')
module.exports = nodemailer.createTransport({
    host : 'smtp.qq.com',
    secure: false, // true for 465, false for other ports // 使用SSL方式（安全方式，防止被窃取信息）
    port:587,
    auth : {
        user : '794100338@qq.com',
        pass : 'lywzgkjrisbpbegc'
    },
});
