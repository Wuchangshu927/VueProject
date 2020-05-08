import Mock from 'mockjs';
export default {
    //首页数据
    home:function(){
        var ret= {
            "card":{
                'user_name':Mock.Random.cname(),
                'his_card_num':Mock.Random.natural(10000),
                'avavtar':Mock.Random.img()
            }
        };
        return ret;
    },
    //获取用户已绑定的就诊卡
    getAllCard:function(){
        var ret = {card_list:[]};
        var is_default = 1;
        var time = parseInt((new Date()).getTime()/1000);
        for (var i=1;i<5;i++) {
            if(i == 2){
                is_default = 2;
            }else{
                is_default = 1;
            }
            ret.card_list.push(Mock.mock({
                card_id:i,
                user_name:Mock.Random.cname(),
                his_card_num:Mock.Random.natural(10000),
                user_identify_num:Mock.Random.natural(10000),
                is_default:is_default,
                create_time:time,
                user_birthday:Mock.Random.date(),
                'user_mobile':/^1[3|4|5|6|7|8|9]\d{9}$/,
                'user_sex|1':[1,2],
                user_address:Mock.Random.province(),
                user_area:'区县乡镇',
                user_area_code:'区县乡镇code'
            }));
        }
        log(ret);
        return ret;
    },

    getUserData:function(){
        var ret = {card_list:[]};
        var is_default = 1;
        var time = parseInt((new Date()).getTime()/1000);
        for (var i=1;i<5;i++) {
            if(i == 2){
                is_default = 2;
            }else{
                is_default = 1;
            }
            ret.card_list.push(Mock.mock({
                card_id:i,
                user_name:Mock.Random.cname(),
                his_card_num:Mock.Random.natural(10000),
                user_identify_num:Mock.Random.natural(10000),
                is_default:is_default,
                create_time:time,
                user_birthday:Mock.Random.date(),
                'user_mobile':/^1[3|4|5|6|7|8|9]\d{9}$/,
                'user_sex|1':[1,2],
                user_address:Mock.Random.province(),
                user_area:'区县乡镇',
                user_area_code:'区县乡镇code'
            }));
        }
        //log(ret);
        console.log(ret)
        return ret;
    },
    tableData:function(){
        var list=[]
        var is_default = 1;
        for (var i=1;i<500;i++) {
            if(i == 2){
                is_default = 2;
            }else{
                is_default = 1;
            }
            list.push(Mock.mock({
                id:i,
                name:Mock.Random.cname(),
                age:Mock.Random.natural(18,70),
                addr:Mock.Random.county(true),
                tell:/^1[3|4|5|6|7|8|9]\d{9}$/,
                email:Mock.Random.natural(10,100),
            }));
        }
        //log(ret);
        console.log(list)
        return list ;
    },
    mockData:function(){
            let data=[]
            let count =10
            let startYear=1970
            let endYear=2020
            for (let i=0;i<count;i++){
                let temp=createData(startYear,endYear)
                data.push(temp)
            }
            return data

        function createData(startYear,endYear) {
            let temp={
                "Serirs Name":"GDP growth (annual %)",
                "Country Name":Mock.Random.name(),
                "cname":Mock.Random.cname(),
            }
            for (let i=startYear;i<endYear;i++){
                temp[`${i} [YR${i}]`]=Mock.Random.natural(1,1000)
            }
            return temp
        }
    },
}
