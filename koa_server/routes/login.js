
module.exports = function(router) {
    router.get('/login', fail)
        .post('/login',tologin)
}



async function tologin(ctx){
    let id = ctx
    console.log(ctx.req)
    ctx.body='I love you'

}
async function fail(ctx){
    ctx.body='非法获取'

}
