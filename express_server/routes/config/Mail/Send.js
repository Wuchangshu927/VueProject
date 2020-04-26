module.exports =async function send(auth) {
    let transporter = nodemailer.createTransport({
        host: "smtp.qq.com",
        secure: true, // true for 465, false for other ports
        auth: {
            user: '794100338@qq.com', // generated ethereal user
            pass: 'osachfrnslfxbfbc' // generated ethereal password
        }
    });
    let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <794100338@qq.com>', // sender address
        to: "271887584@qq.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>" // html body
    });
}
