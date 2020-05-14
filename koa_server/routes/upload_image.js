
const xlsx = require('xlsx')
const multer = require('koa-multer');//加载koa-multer模块

//
var storage = multer.diskStorage({
    //文件保存路径
    destination: function (req, file, cb) {
        console.log('保存路径')
        cb(null, 'public/upload/')
    },
    //修改文件名称
    filename: function (req, file, cb) {
        console.log('改文件名')
        var fileFormat = (file.originalname).split(".");  //以点分割成数组，数组的最后一项就是后缀名
        cb(null,Date.now() + "." + fileFormat[fileFormat.length - 1]);
    }
})

//加载配置
var upload = multer({ storage: storage });


module.exports = function (router) {
    router.post('/upload', find)

}



async function find(ctx) {

    upload.single('file')
    console.log('12')
    ctx.body={filename:'wcs'}
}













