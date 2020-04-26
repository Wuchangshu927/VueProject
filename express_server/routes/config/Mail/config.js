var mysqlPool = require('../mysql/mysqlPool')


function findAuth(user,callback){
    console.log('wcs')
    mysqlPool.getConnection((err,conn)=>{
        if(err){
            return []
        }else{
            var sql="select user,pass from mailconfig where user='"+user+"'"
            console.log(sql)
            conn.query(sql,(error,result)=>{
                if (error){
                    console.log(error)
                    return []
                }else{
                    console.log(result)

                    callback(result)
                }

            })
        }
    })
}


let mailconfig= {
    user : '794100338@qq.com',
    pass : 'lywzgkjrisbpbegc'

}




module.exports = findAuth


