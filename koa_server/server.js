const Koa = require('koa')
const Router = require('koa-router')
const cors= require('koa-cors')

const app = new Koa()
const router = new Router()

const body_parser = require('koa-bodyparser')()
const views = require('koa-views')(__dirname + '/views',{ extension: 'html' })
const static_server = require('koa-static-server')({rootDir: 'static', rootPath: '/static'})
app.use(require('koa-static')(__dirname + '/static'))
app.use(cors())

// 加载路由
require('./routes/authorize')(router)
require('./routes/login')(router)
require('./routes/user')(router)
require('./routes/Qr_Image')(router)
require('./routes/pay')(router)
require('./routes/rankData')(router)
require('./routes/createWord')(router)
require('./routes/upload_image')(router)



app.use(views)
    .use(static_server)
    .use(body_parser)
    .use(router.routes())
    .use(router.allowedMethods())

const port =3000
app.listen(port)
console.log('程序已经运行！端口号：'+port)
