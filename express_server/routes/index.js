var express = require('express');
var router = express.Router();
var svgCaptcha = require('svg-captcha');
var mysqlPool = require('./config/mysql/mysqlPool')
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});
router.get('/verifyCode', function (req, res, next) {


    var codeConfig = {
        size: 4,// 验证码长度
        ignoreChars: '0o1i', // 验证码字符中排除 0o1i
        noise: 6, // 干扰线条的数量
        height: 35,
        width: 100
    }
    var captcha = svgCaptcha.create(codeConfig);
    req.session.captcha = captcha.text.toLowerCase(); //存session用于验证接口获取文字码
    var codeData = {
        img: captcha.data
    }
    res.send(codeData.img);
});
//处理登录
router.post('/doLogin', function (req, res, next) {
    console.log(req.body)
    mysqlPool.getConnection((err, conn) => {
        if (err) {
            console.log(err);
        } else {
            console.log('和mysql数据库连接成功');
            // conn.query("SELECT * FROM hr AS a,hr_role as b,role AS c  WHERE a.id=3 AND a.id=b.hrid and b.rid=c.id" , (err2, data) => {
            conn.query("select hr.id, hr.name, hr.phone, hr.telephone, hr.address, hr.enabled, hr.username, hr.userface," +
                " hr.remark,r.`id` as rid,r.`name` as rname,r.`nameZh` as rnameZh " +
                "from hr left join hr_role hrr on" +
                " hr.`id`=hrr.`hrid` left join role r on hrr.`rid`=r.`id` where hr.`username`='" + req.body.username + "'", (err2, data) => {
                if (err2) {
                    console.log(err2);
                } else {
                    //mysqlPool.end();
                    console.log(data)
                    var roles = []
                    if (data.length > 0) {
                        for (let i = 0; i < data.length; i++) {
                            var role = {
                                id: '',
                                name: '',
                                nameZh: ''
                            }
                            role.id = data[i].rid
                            role.name = data[i].rname
                            role.nameZh = data[i].rnameZh
                            console.log(role.nameZh)
                            delete data[i].rid
                            delete data[i].rname
                            delete data[i].rnameZh
                            roles.push(role)
                        }
                        //console.log(roles);
                        data[0]['roles'] = roles
                        var obj = data[0]
                        var resp = {
                            "status": 200,
                            "msg": "登录成功！",
                            "obj": {
                                "id": 3,
                                "name": "系统管理员",
                                "phone": "18568887789",
                                "telephone": "029-82881234",
                                "address": "深圳南山",
                                "enabled": true,
                                "username": "admin",
                                "remark": null,
                                "roles": roles,
                            }
                        }


                        res.send(resp);
                    }
                }
            })
        }
    });
});//处理登录
router.post('/getMenu', function (req, res, next) {
    console.log(req.body)
    mysqlPool.getConnection((err, conn) => {
        if (err) {
            console.log(err);
        } else {
            console.log('和mysql数据库连接成功');
            // conn.query("SELECT * FROM hr AS a,hr_role as b,role AS c  WHERE a.id=3 AND a.id=b.hrid and b.rid=c.id" , (err2, data) => {
            conn.query("select distinct m1.*,m2.`id` as id2,m2.`component` as component2,\n" +
                "m2.`enabled` as enabled2,m2.`iconCls` as iconCls2,m2.`keepAlive` as keepAlive2,\n" +
                "m2.`name` as name2,m2.`parentId` as parentId2,m2.`requireAuth` as requireAuth2,\n" +
                "m2.`path` as path2 from menu m1,menu m2,hr_role hrr,menu_role mr where m1.`id`=m2.`parentId` \n" +
                "and hrr.`hrid`=3 and hrr.`rid`=mr.`rid` and mr.`mid`=m2.`id` and m2.`enabled`=true order by m1.`id`,m2.`id`", (err2, data) => {
                if (err2) {
                    console.log(err2);
                } else {
                    //mysqlPool.end();
                    console.log(data[0].rname)
                    var roles = []

                    for (let i = 0; i < data.length; i++) {
                        var role = {
                            id: '',
                            name: '',
                            nameZh: ''
                        }
                        role.id = data[i].rid
                        role.name = data[i].rname
                        role.nameZh = data[i].rnameZh
                        console.log(role.nameZh)
                        delete data[i].rid
                        delete data[i].rname
                        delete data[i].rnameZh
                        //console.log(data[i])
                        roles.push(role)
                    }
                    //console.log(roles);
                    data[0]['roles'] = roles
                    var obj = data[0]
                    console.log(data[0])
                    var resp = {
                        "status": 200,
                        "msg": "登录成功！",
                        "obj": {
                            "id": 3,
                            "name": "系统管理员",
                            "phone": "18568887789",
                            "telephone": "029-82881234",
                            "address": "深圳南山",
                            "enabled": true,
                            "username": "admin",
                            "remark": null,
                            "roles": roles,
                        }
                    }


                    res.send(resp);
                }
            })
        }
    });

});
module.exports = router;
