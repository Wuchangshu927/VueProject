const officegen = require('officegen');
const fs = require('fs');
const Mock =require('mockjs');
const xlsx = require('node-xlsx');
const path=require('path')



module.exports = function(router) {
    router.get('/word', createword)
    router.get('/xlsx', createxlsx)
    router.get('/readxlsx',readxlsx)

}




async function createword(ctx){

// Create an empty Word object:
    let docx = officegen('docx')

// Officegen calling this function after finishing to generate the docx document:
    docx.on('finalize', function(written) {
        console.log(
            'Finish to create a Microsoft Word document.'
        )
    })


// Create a new paragraph:
    let pObj = docx.createP()

    pObj.addText('Simple')
    pObj.addText(' with color', { color: '000088' })
    pObj.addText(' and back color.', { color: '00ffff', back: '000088' })

    pObj = docx.createP()

    pObj.addText('Since ')
    pObj.addText('officegen 0.2.12', {
        back: '00ffff',
        shdType: 'pct12',
        shdColor: 'ff0000'
    }) // Use pattern in the background.
    pObj.addText(' you can do ')
    pObj.addText('more cool ', { highlight: true }) // Highlight!
    pObj.addText('stuff!', { highlight: 'darkGreen' }) // Different highlight color.

    pObj = docx.createP()

    pObj.addText('Even add                         ')
    pObj.addText('external link', { link: 'https://github.com' })
    pObj.addText('!')

    pObj = docx.createP()

    pObj.addText('Bold + underline', { bold: true, underline: true })

    pObj = docx.createP({ align: 'center' })

    pObj.addText('Center this text', {
        border: 'dotted',
        borderSize: 12,
        borderColor: '88CCFF'
    })

    pObj = docx.createP()
    pObj.options.align = 'right'

    pObj.addText('Align this text to the right.')

    pObj = docx.createP()

    pObj.addText('Those two lines are in the same paragraph,')
    pObj.addLineBreak()
    pObj.addText('but they are separated by a line break.')

    docx.putPageBreak()

    pObj = docx.createP()

    pObj.addText('Fonts face only.', { font_face: 'Arial' })
    pObj.addText(' Fonts face and size.', { font_face: 'Arial', font_size: 40 })

    docx.putPageBreak()

    pObj = docx.createP()

// We can even add images:
// pObj.addImage('some-image.png')

// Let's generate the Word document into a file:

    let out = fs.createWriteStream('example.docx')

    out.on('error', function(err) {
        console.log(err)
    })

// Async call to generate the output file:
    docx.generate(out)

}

async function createxlsx(ctx) {

    var filename='info.xlsx'


    // Create an empty Excel object:
    let xlsx = officegen('xlsx')

// Officegen calling this function after finishing to generate the xlsx document:
    xlsx.on('finalize', function(written) {
        console.log(
            '完成 Excel文件的创建'
        )
    })

// Officegen calling this function to report errors:
    xlsx.on('error', function(err) {
        console.log(err)
    })

    let sheet = xlsx.makeNewSheet()
    sheet.name = '工作信息表'

    let key=['序号','姓名','性别','年龄','电话','Email']
    let cols =['A','B','C','D','E','F']
// 生成标题数据
    for(let i=0;i<key.length;i++){
        sheet.setCell(`${cols[i]}1`, key[i])
    }
let count =100
    for (let i=0;i<count;i++){
        fillData(i)
    }

    function  fillData(i){
        sheet.setCell(`A${i+2}`,i+1);//id
        sheet.setCell(`B${i+2}`,Mock.Random.cname());//姓名
        sheet.setCell(`C${i+2}`,Mock.Random.cword('男女'));//性别
        sheet.setCell(`D${i+2}`,Mock.Random.natural(20,60));//年龄
        sheet.setCell(`E${i+2}`,Mock.mock(/^1[35]\d{9}$/)),//电话
        sheet.setCell(`F${i+2}`,Mock.Random.email())//Email
    }

// The direct option - two-dimensional array:

// Let's generate the Excel document into a file:

    let out = fs.createWriteStream('static/'+filename)

    out.on('error', function(err) {
        console.log(err)
    })

// Async call to generate the output file:
    xlsx.generate(out)
    ctx.body='http://127.0.0.1:3000/'+filename
}

async function readxlsx(ctx) {
    var filename='info.xlsx'
    var sheets = xlsx.parse(`static/${filename}`);
    var arr = [];
//sheets是一个数组，数组中的每一项对应test.xlsx这个文件里的多个表格，如sheets[0]对应test.xlsx里的“测试参数”这个表格，sheets[1]对应Sheet2这个表格
    sheets.forEach(function(sheet){
        var newSheetsArr = [];

        //sheet是一个json对象，格式为{name:"测试参数",data:[]},我们想要的数据就存储在data里
        for(var i=1; i<sheet["data"].length; i++){ //excel文件里的表格一般有标题所以不一定从0开始
       // for(var i=1; i<3; i++){ //excel文件里的表格一般有标题所以不一定从0开始
            var row=sheet['data'][i];

            if(row && row.length > 0){
                //console.log(row)
                row=dataclearn(row)
                newSheetsArr.push({
                    name: row[1] && row[1].replace(/\s/g,''), //部分文本尾部可能会有空格，要去除
                    id: row[0],
                    sex:row[2],
                    age:row[3]
                });
            }
        }

        function dataclearn(row){
            for(let i=0;i<4;i++){
                if (row[i] == undefined){
                    row.push(null)
                }
            }
            return row
        }
       // console.log(newSheetsArr)
        arr.push(newSheetsArr);
        ctx.body=arr
    });


}
