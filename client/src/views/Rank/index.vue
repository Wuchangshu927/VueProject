<template>
    <v-container>
        <v-card>
            <v-card-title>
                GDP排行
            </v-card-title>
            <v-card-text>
                <v-menu
                        v-model="menu"
                        :close-on-content-click="false"
                        offset-x
                        min-width="500"
                        style="position: fixed; top: 250px; right: 35px; border-radius: 8px;"
                        right
                >
                    <template v-slot:activator="{ on }">
                        <v-btn
                                v-on="on"
                        >
                            配置
                        </v-btn>
                    </template>

                    <v-card class="pa-2">
                        <v-list>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-slider
                                            v-model="slider"
                                            class="align-center"
                                            :max="2000"
                                            :min="500"
                                            label="动画间隔"
                                            hide-details
                                    >
                                        <template v-slot:append>
                                            <v-text-field
                                                    v-model="slider"
                                                    class="mt-0 pt-0"
                                                    hide-details
                                                    single-line
                                                    type="number"
                                                    style="width: 60px"
                                            ></v-text-field>
                                        </template>
                                    </v-slider>

                                </v-list-item-content>

                            </v-list-item>
                        </v-list>

                        <v-divider></v-divider>

                        <v-list>
                            <v-list-item>
                                <v-range-slider
                                        v-model="range"
                                        max="2020"
                                        min="1970"
                                        hide-details
                                        class="align-center"
                                >
                                    <template v-slot:prepend>
                                        <v-text-field
                                                :value="range[0]"
                                                class="mt-0 pt-0"
                                                hide-details
                                                single-line
                                                type="number"
                                                style="width: 60px"
                                                @change="$set(range, 0, $event)"
                                        ></v-text-field>
                                    </template>
                                    <template v-slot:append>
                                        <v-text-field
                                                :value="range[1]"
                                                class="mt-0 pt-0"
                                                hide-details
                                                single-line
                                                type="number"
                                                style="width: 60px"
                                                @change="$set(range, 1, $event)"
                                        ></v-text-field>
                                    </template>
                                </v-range-slider>
                            </v-list-item>

                            <v-list-item>

                            </v-list-item>
                        </v-list>

                        <v-card-actions>
                            <v-spacer></v-spacer>

                            <v-btn text @click="menu = false">取消</v-btn>
                            <v-btn color="primary" text @click="menu = false">保存</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-menu>

                <v-divider/>
                <v-divider/>
                <div id="main"></div>

            </v-card-text>
        </v-card>
    </v-container>

</template>

<script>
    import * as d3 from 'd3';

    export default {
        name: "index",
        data() {
            return {
                top_n: 10,//前几名
                height: 400,
                width: 600,
                tickDuration: 1000,
                delayDuration: 1000,
                startYear: 1970,
                endYear: 2018,
                title: `前 10 GDP年增长最高的国家 (1970-2019)`,
                slider: 1000,
                menu: false,
                range: [1970, 2020],
                subTitle: "(亿)",
                year: 1970
            }
        },
        created() {
            this
                .getData()
        },
        methods: {
            getData() {
                let vm = this
                this.getRequest('rankdata').then(res => {
                    vm.init(res)
                })
            },
            init(data) {
                console.log(data)
                let vm = this
                const svg = d3.select('#main')
                    .append("svg")
                    .attr('width', this.width)
                    .attr('height', this.height);
                const margin = {
                    top: 80,
                    right: 0,
                    bottom: 5,
                    left: 50
                };

                const barPadding = (this.height - (margin.bottom + margin.top)) / (this.top_n * 10);

                //添加标题
                // svg.append('text')
                //     .attr('class', 'title')
                //     .attr('y', 24)
                //     .html(this.title);
                // //添加副标题
                // svg.append('text')
                //     .attr("class", "subTitle")
                //     .attr("y", 55)
                //     .html(this.subTitle);

                //添加年份的标签
                svg.append('text')
                    .attr('class', 'caption')
                    .attr('x', this.width)
                    .attr('y', this.height - 5)
                    .style('text-anchor', 'end')
                    .html('年份');

                let year = this.startYear;
                //添加颜色
                data.forEach(d => {
                    d.colour = d3.hsl(Math.random() * 360, 0.75, 0.75)
                })

                //年份划分
                let lastValues = {};
                //数据标准化
                function _normalizeData() {
                    const values = {};
                    const ret = [];
                    data.forEach(d => {
                        const name = d["Country Name"];
                        const cname = d["cname"]
                        const lbl = `${year} [YR${year}]`;
                        const txt = d[lbl];
                        let val = 0;
                        if (txt != '..')
                            val = parseFloat(txt);

                        //取整
                        val = Math.round(val * 1e2) / 1e2; //round 2 digits

                        let lastValue = lastValues[name];
                        if (lastValue == null)
                            lastValue = 0;
                        ret.push({
                            name: name,
                            cname: cname,
                            colour: d.colour,
                            value: val,
                            lastValue: lastValue
                        });
                        values[name] = val;
                    });

                    lastValues = values;

                    return ret.sort(
                        (a, b) =>
                            b.value - a.value).slice(0, vm.top_n);
                }


                let yearSlice = _normalizeData();
                console.log(yearSlice)
                yearSlice.forEach((d, i) => d.rank = i)
                console.log(yearSlice)

                //构建X比例尺
                let x = d3.scaleLinear()
                    .domain([0, d3.max(yearSlice, d => d.value)])
                    .range([margin.left, this.width - margin.right - 65])//构建X比例尺
                //构建Y比例尺
                let y = d3.scaleLinear()
                    .domain([this.top_n, 0])
                    .range([this.height - margin.bottom, margin.top])

                //创建x轴
                let xAxis = d3.axisTop()
                    .scale(x)
                    .ticks(this.width > 500 ? 5 : 2)
                    .tickSize(-(this.height - margin.top - margin.bottom))
                    .tickFormat(d => d3.format(',')(d));


                svg.append('g')
                    .attr('class', 'axis xAxis')
                    .attr('transform', `translate(0, ${margin.top})`)
                    .call(xAxis)
                    .selectAll('.tick line')
                    .classed('origin', d => d == 0);


                //创建 矩形条
                let rect = svg.selectAll('rect.bar')
                    .data(yearSlice, d => d.name)
                    .enter()
                    .append('rect')
                    .attr('class', 'bar')
                    .attr('x', x(0) + 1)
                    .attr('width', d => x(d.lastValue) - x(0)

                    )
                    .attr('y', d => y(d.rank) + 5)
                    .attr('height', y(1) - y(0) - barPadding)
                    .style('fill', d => d.colour);

                //矩形条文字标签
                svg.selectAll('text.label')
                    .data(yearSlice, d => d.name)
                    .enter()
                    .append('text')
                    .attr('class', 'label')
                    .attr('x', d => x(d.lastValue) - 8)
                    .attr('y', d => y(d.rank) + 5 + ((y(1) - y(0)) / 2) + 1)
                    .style('text-anchor', 'end')
                    .html(d => d.name);


                //矩形条数字标签
                svg.selectAll('text.valueLabel')
                    .data(yearSlice, d => d.name)
                    .enter()
                    .append('text')
                    .attr('class', 'valueLabel')
                    .attr('x', d => x(d.lastValue) + 5)
                    .attr('y', d => y(d.rank) + 5 + ((y(1) - y(0)) / 2) + 1)
                    .text(d => d.lastValue);

                let yearText = svg.append('text')
                    .attr('class', 'yearText')
                    .attr('x', this.width - margin.right)
                    .attr('y', this.height - 25)
                    .style('text-anchor', 'end')
                    .html(year);

                let ticker=d3.interval(e=>{
                    yearSlice = _normalizeData();
                    yearSlice.forEach((d, i) => d.rank = i);

                    x.domain([0, d3.max(yearSlice, d => d.value)]);
                    //重新生成x轴
                    svg.select('.xAxis')
                        .transition()
                        .duration(vm.tickDuration)
                        .ease(d3.easeLinear)
                        .call(xAxis);

                    const bars = svg
                        .selectAll('.bar')
                        .data(yearSlice, d => d.name);

                    bars
                        .enter()
                        .append('rect')
                        .attr('class', d => `bar ${d.name.replace(/\s/g, '_')}`)
                        .attr('x', x(0) + 1)
                        .attr('width', d => x(d.value) - x(0))
                        .attr('y', d => y(vm.top_n + 1) + 5)
                        .attr('height', y(1) - y(0) - barPadding)
                        .style('fill', d => d.colour)
                        .transition()
                        .duration(vm.tickDuration)
                        .ease(d3.easeLinear)
                        .attr('y', d => y(d.rank) + 5);


                    bars
                        .transition()
                        .duration(vm.tickDuration)
                        .ease(d3.easeLinear)
                        .attr('width', d => Math.max(0, x(d.value) - x(0)))
                        .attr('y', d => y(d.rank) + 5);

                    bars
                        .exit()
                        .transition()
                        .duration(vm.tickDuration)
                        .ease(d3.easeLinear)
                        .attr('width', d => Math.max(0, x(d.value) - x(0)))
                        .attr('y', d => y(vm.top_n + 1) + 5)
                        .remove();


                    const labels = svg.selectAll('.label')
                        .data(yearSlice, d => d.name);

                    labels
                        .enter()
                        .append('text')
                        .attr('class', 'label')
                        .attr('x', d => x(d.value) - 8)
                        .attr('y', d => y(vm.top_n + 1) + 5 + ((y(1) - y(0)) / 2))
                        .style('text-anchor', 'end')
                        .html(d => d.name)
                        .transition()
                        .duration(vm.tickDuration)
                        .ease(d3.easeLinear)
                        .attr('y', d => y(d.rank) + 5 + ((y(1) - y(0)) / 2) + 1);


                    labels
                        .transition()
                        .duration(vm.tickDuration)
                        .ease(d3.easeLinear)
                        .attr('x', d => x(d.value) - 8)
                        .attr('y', d => y(d.rank) + 5 + ((y(1) - y(0)) / 2) + 1);

                    labels
                        .exit()
                        .transition()
                        .duration(vm.tickDuration)
                        .ease(d3.easeLinear)
                        .attr('x', d => x(d.value) - 8)
                        .attr('y', d => y(top_n + 1) + 5)
                        .remove();



                    //  创建值的标签
                    const valueLabels = svg
                        .selectAll('.valueLabel')
                        .data(yearSlice, d => d.name);

                    valueLabels
                        .enter()
                        .append('text')
                        .attr('class', 'valueLabel')
                        .attr('x', d => x(d.value) + 5)
                        .attr('y', d => y(vm.top_n + 1) + 5)
                        .text(d => d.value)
                        .transition()
                        .duration(vm.tickDuration)
                        .ease(d3.easeLinear)
                        .attr('y', d => y(d.rank) + 5 + ((y(1) - y(0)) / 2) + 1);

                    valueLabels
                        .transition()
                        .duration(vm.tickDuration)
                        .ease(d3.easeLinear)
                        .attr('x', d => x(d.value) + 5)
                        .attr('y', d => y(d.rank) + 5 + ((y(1) - y(0)) / 2) + 1)
                        .tween("text", function (d) {
                            const i = d3.interpolateNumber(d.lastValue, d.value);
                            //return i(interpolator);
                            return function (t) {
                                let v = i(t);
                                if (v < 0)
                                    v = 0;
                                this.textContent = v.toFixed(2);
                            };
                        });

                    valueLabels
                        .exit()
                        .transition()
                        .duration(vm.tickDuration)
                        .ease(d3.easeLinear)
                        .attr('x', d => x(d.value) + 5)
                        .attr('y', d => y(vm.top_n + 1) + 5)
                        .remove();

                    yearText.html(~~year);
                    year++;
                    if (year > vm.endYear)
                        //year=vm.startYear
                    ticker.stop();
                },vm.delayDuration)
            }
        }
    }
</script>

<style scoped>
    svg {
        #border: thin solid gray;
    }

    text {
        font-size: 16px;
        font-family: Open Sans, sans-serif;
    }

    text.title {
        font-size: 24px;
        font-weight: 700;
    }

    text.subTitle {
        font-weight: 500;
        fill: #777777;
    }

    text.caption {
        font-weight: 400;
        font-size: 14px;
        fill: #777777;
    }

    text.label {
        font-weight: 600;
    }

    text.valueLabel {
        font-weight: 300;
    }

    text.yearText {
        font-size: 64px;
        font-weight: 700;
        opacity: 0.25;
    }

    .tick text {
        fill: #770c2a;
    }

    .xAxis .tick:nth-child(2) text {
        text-anchor: start;
    }

    .tick line {
        shape-rendering: CrispEdges;
        stroke: #dddddd;
    }

    .tick line.origin {
        stroke: #aaaaaa;
    }

    /*path.domain {*/
    /*    display: none;*/
    /*}*/
</style>
