const Koa = require('koa')
const Router = require('koa-router')
const cors= require('koa-cors')

const app = new Koa()
const router = new Router()

const body_parser = require('koa-bodyparser')()
const views = require('koa-views')(__dirname + '/views',{ extension: 'html' })
const static_server = require('koa-static-server')({rootDir: 'static', rootPath: '/static'})
app.use(cors())
// 加载路由
require('./routes/authorize')(router)
require('./routes/login')(router)

require('./routes/user')(router)




app.use(views)
    .use(static_server)
    .use(body_parser)
    .use(router.routes())
    .use(router.allowedMethods())








app.listen(3000)
