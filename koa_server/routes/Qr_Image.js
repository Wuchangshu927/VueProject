const qr_image = require("qr-image");

module.exports = function(router) {
    router.get('/qr', sendQr)

}
async function sendQr(ctx){

    const text={name:'wcs',age:24}

    const img = qr_image.image(JSON.toString(text),{type:'png'});
    ctx.status=200;
    ctx.type='text';
    ctx.body=img
}
