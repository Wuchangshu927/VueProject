module.exports = function(router) {
    router.get('/login', login)
    router.get('/home/:access_token', home)
    router.get('/proxy', proxy)
    router.get('/home', home)
}



async function proxy(ctx) {
    await ctx.render('proxy')
}

async function login(ctx) {
    await ctx.render('login')
}

async function home(ctx){
    // let token = ctx.params.access_token
    // let resp = await axios.get('https://graph.qq.com/oauth2.0/me',{params:{access_token: token}})
    // let {client_id,openid}= eval(resp.data)


    // await ctx.render('home', {name:resp.data.nickname})
    ctx.body='123'
    function callback(params) {
        return params
    }
}
