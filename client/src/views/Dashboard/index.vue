<template>
    <v-container class="ma-0">
        <v-card ref="live">
            <svg width="1000" height="800">
                <g style="transform: translate(0, 10px)">
                    <path :d="line" />
                </g>
            </svg>


        </v-card>


        <v-card class="ma-2 px-1 ">
            <v-btn @click="test">连接到服务器</v-btn>
            <v-btn @click="close">关闭连接</v-btn>
            <v-btn @click="getData">测试连接</v-btn>
            <v-btn @click="init">Nme</v-btn>
            <v-card-text>{{$store.commit('getLogin')}}</v-card-text>
            <v-card-text  class="  d-inline-flex ma-0 py-0 px-2" v-for="item,i in msg" :key="i">
                <p>{{item.username+":   "}}</p>
                <p>{{item.msgContent}}</p>
                <v-spacer></v-spacer>
                <p> {{item.sendTime}}</p>
            </v-card-text>
            <v-footer class="">
                <v-text-field v-model="msgContent"  class="mx-2"></v-text-field><v-btn @click="send">发送</v-btn>
            </v-footer>
        </v-card>
    </v-container>
</template>


<script>
    import moment from 'moment'

    import * as d3 from 'd3';
    export default {
        data(){
            return{
                data: [99, 71, 78, 25, 36, 92],
                line: '',
                msg:[],
                width:0,
                height:0,
                margin:{left:10,
                top:10},
                username:this.$store.state.username,
                msgContent:'',
                ws:false,
                marge:{top:50, bottom:0, left:10, right:0}
            }
        },
        mounted(){
            this.init()
        },
        methods:{

            init(){

               var marge={top:50, bottom:0, left:30, right:0}
                var svg = d3.select("svg");
                var width = svg.attr("width");
                var height = svg.attr("height");

                var g = svg.append("g")
                    .attr("transform","translate("+marge.top+","+marge.left+")");

                var scale = svg.append("g")
                    .attr("transform","translate("+marge.top+","+marge.left+")");
                //数据
                var dataset = {
                    name:"中国",
                    children:[
                        {
                            name:"浙江",
                            children:[
                                {name:"杭州" ,value:100},
                                {name:"宁波",value:100},
                                {name:"温州",value:100},
                                {name:"绍兴",value:100}
                            ]
                        },
                        {
                            name:"广西",
                            children:[
                                {
                                    name:"桂林",
                                    children:[
                                        {name:"秀峰区",value:100},
                                        {name:"叠彩区",value:100},
                                        {name:"象山区",value:100},
                                        {name:"七星区",value:100}
                                    ]
                                },
                                {name:"南宁",value:100},
                                {name:"柳州",value:100},
                                {name:"防城港",value:100}
                            ]
                        },
                        {
                            name:"黑龙江",
                            children:[
                                {name:"哈尔滨",value:100},
                                {name:"齐齐哈尔",value:100},
                                {name:"牡丹江",value:100},
                                {name:"大庆",value:100}
                            ]
                        },
                        {
                            name:"新疆" ,
                            children:
                                [
                                    {name:"乌鲁木齐"},
                                    {name:"克拉玛依"},
                                    {name:"吐鲁番"},
                                    {name:"哈密"}
                                ]
                        }
                    ]
                };

                //创建一个hierarchy layout
                var hierarchyData = d3.hierarchy(dataset)
                    .sum(function(d){
                        return d.value;
                    });

                //创建一个树状图
                var tree = d3.tree()
                    .size([width-300,height-200])
                    .separation(function(a,b){
                        return (a.parent==b.parent?1:2) / a.depth;
                    })

                //初始化树状图，也就是传入数据,并得到绘制树基本数据
                var treeData = tree(hierarchyData);
                console.log(treeData);
                //得到节点
                var nodes = treeData.descendants();
                var links = treeData.links();

                //输出节点和边
                console.log(nodes);
                console.log(links);

                //创建一个贝塞尔生成曲线生成器
                var Bézier_curve_generator = d3.linkHorizontal()
                    .x(function(d) { return d.y; })
                    .y(function(d) { return d.x; });

                //有了节点和边集的数据后，我们就可以开始绘制了，
                //绘制边
                g.append("g")
                    .selectAll("path")
                    .data(links)
                    .enter()
                    .append("path")
                    .attr("d",function(d){
                        var start = {x:d.source.x,y:d.source.y};
                        var end = {x:d.target.x,y:d.target.y};
                        return Bézier_curve_generator({source:start,target:end});
                    })
                    .attr("fill","none")
                    .attr("stroke","yellow")
                    .attr("stroke-width",1);

                //绘制节点和文字
                //老规矩，先创建用以绘制每个节点和对应文字的分组<g>
                var gs = g.append("g")
                    .selectAll("g")
                    .data(nodes)
                    .enter()
                    .append("g")
                    .attr("transform",function(d){
                        var cx = d.x;
                        var cy= d.y;
                        return "translate("+cy+","+cx+")";
                    });
                //绘制节点
                gs.append("circle")
                    .attr("r",6)
                    .attr("fill","white")
                    .attr("stroke","blue")
                    .attr("stroke-width",10);

                //文字
                gs.append("text")
                    .attr("x",function(d){
                        return d.children?-40:8;
                    })
                    .attr("y",-5)
                    .attr("dy",10)
                    .text(function(d){
                        return d.data.name;
                    });

            },

            test(){
                // eslint-disable-next-line no-undef
                let vm=this
                let ws = io('ws://127.0.0.1:3000');
                console.log(ws)
                this.ws=ws
                ws.on('receiveMsg', function (data) {
                    console.log(data)
                    vm.msg.push(data.msg)
                })

                ws.on('connect', function (e) {
                    console.log("连接服务器成功");
                    ws.emit('login',{userid: vm.username});
                    vm.$store.commit('setConnected',true)
                    console.log(ws)
                })



            },
            getMsg(){
                console.log(this.msg)
            },
            send(){
                let vm=this
                if(vm.ws){
                    let to=''
                    if(vm.username=='wcs'){
                        to='wcc'
                    }
                    if(vm.username=='wcc'){
                        to='wcs'
                    }
                    let time=Date.now()
                    let timestr=moment(time).format("YYYY年MM月DD日 HH:mm:ss")
                    let msg1={
                        username:this.username,
                        sendTime:time,
                        msgContent:this.msgContent
                    }
                    vm.msg.push(msg1)
                    // let m='i love you'
                    vm.ws.emit('sendMsg',{from: this.username, to: to, msg:msg1
                    });
                    this.msgContent=''
                }
            },

            close(){
                // this.ws.close()
                this.$store.commit('setConnected',false)
                // console.log(this.ws)
            },
            getData(){
                this.getRequest('users/usersData').then(response=>{
                    console.log(response)
                }).catch(error=>{
                    console.log('获取失败')
                })
            },
            getName(){
                console.log(this.$route.name)
            }
        }
    }
</script>

<style scoped>

</style>
