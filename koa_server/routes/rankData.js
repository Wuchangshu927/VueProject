const Mock =require('mockjs')
module.exports = function (router) {
    router.get('/rankdata', rankdata)

}
async function rankdata(ctx) {
    let data=[]
    let count =10
    let startYear=1970
    let endYear=2020
    for (let i=0;i<count;i++){



    let temp=createData(startYear,endYear)
    data.push(temp)
    }
    ctx.body=data
}
function createData(startYear,endYear) {
    let temp={
        "Serirs":"GDP growth (annual %)",
        "Country Name":Mock.Random.province(),
    }
    for (let i=startYear;i<endYear;i++){
        temp[`${i} [YR${i}]`]=(Mock.Random.natural(10,30))
    }
    return temp
}
