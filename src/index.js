(function($, E) {
    $(function() {
        // 时间变动
        setInterval(() => {
            let nowtime = new Date();
            year = nowtime.getFullYear();
            month = nowtime.getMonth()+1;
            date = nowtime.getDate();
            document.getElementById("mytime").innerText = year+"-"+month+"-"+date+" "+nowtime.toLocaleTimeString();  
        }, 1000);

        // mock.js中的title对象
        function initTitle() {
            $('#title').text(title.title);
            $('#subTitle').text(title.subTitle);
        }

        // mock.js中的ulInfo对象
        function initContext() {
            for(let i = 0; i < ulInfo.length; i++) {
                debugger
                let li = '<li class="item"><span>'+ulInfo[i].title+'</span><div class="content"><div>'+ulInfo[i].text+'<i style="display:inline-block;width:5em;"></i>'+ulInfo[i].text+'</div></div></li>';
                $('#contentUl').append(li);
            }
        }

        function intFooterRight() {
            for(let key in footRight) {
                let itemBlock = $('<div class="item-block"></div')
                let item = footRight[key]
                item.forEach( o => {
                    let block = $('<div class="item-item-block"><div>'+ o.title +'</div><div>'+ o.value +'</div></div>');
                    itemBlock.append(block)
                });
                $('#footRight').append(itemBlock)
            }
        }

        function initDomWH() {
            $('#main').width($('#map').width());
            $('#main').height($('#map').height());
            $('#chartOneSon').width($('#chartOne').width());
            $('#chartOneSon').height($('#chartOne').height() - 55);
            $('#chartTwoSon').width($('#chartTwo').width());
            $('#chartTwoSon').height($('#chartTwo').height() - 55);
            $('#chartThreeSon').width($('#chartThree').width());
            $('#chartThreeSon').height($('#chartThree').height() - 55);
            $('#chartFourSon').width($('#chartFour').width());
            $('#chartFourSon').height($('#chartFour').height());
            $('#chartFiveSon').width($('#chartFive').width());
            $('#chartFiveSon').height($('#chartFive').height() - 55);
            $('#chartSixSon').width($('#chartSix').width());
            $('#chartSixSon').height($('#chartSix').height() - 55);
            $('#chartSevenSon').width($('#chartSeven').width());
            $('#chartSevenSon').height($('#chartSeven').height());
        }

        function initChartFoot(data, dom) {
            data.forEach( o => {
                let itemFoot = $('<div class="item"><div class="item-title">'+ o.name +'</div><div class="item-text" >'+ o.value +'</div></div>');
                dom.append(itemFoot);
            });
        }

        function setEcharts() {
            let myChart = E.init(document.querySelector("#main"));
            let myChartOne = E.init(document.querySelector('#chartOneSon'));
            let myChartOneFoot = $('#chartOneSon').next();
            let myChartTwo = E.init(document.querySelector('#chartTwoSon'));
            let myChartThree = E.init(document.querySelector('#chartThreeSon'));
            let myChartFour = E.init(document.querySelector('#chartFourSon'));
            let myChartFive = E.init(document.querySelector('#chartFiveSon'));
            let myChartSix = E.init(document.querySelector('#chartSixSon'));
            let myChartSeven = E.init(document.querySelector('#chartSevenSon'));


            myChartOne.setOption(option = {
                title: {
                    text: chartOne.title.text,
                    textStyle: {
                        fontSize: 13,
                        color: '#ffffff',
                    },
                    subtext: chartOne.title.subtext,
                    subtextStyle: {
                        color: '#ffffff'
                    }
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                series: [
                    {
                        name: chartOne.series.title,
                        type:'pie',
                        center: ['50%', '50%'],
                        radius: ['30%', '50%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '15',
                                    color: '#ffffff',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: chartOne.series.data
                    }
                ]
            });
            initChartFoot(chartOne.footer, myChartOneFoot);



            myChartTwo.setOption(option = {
                title: {
                    text: '一季度销售进度',
                    textStyle: {
                        fontSize: 13,
                        color: '#ffffff',
                    },
                    subtext: 'aaabbbccc',
                    subtextStyle: {
                        color: '#ffffff'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    axisLine: {
                        lineStyle: {
                            color: '#ffffff',
                        }
                    },
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value',
                    axisLine: {
                        lineStyle: {
                            color: '#ffffff',
                        }
                    },
                },
                series: [{
                    data: [120, 200, 150, 80, 70, 110, 130],
                    type: 'bar'
                }]
            });

            myChartThree.setOption(option = {
                title: {
                    text: '一季度销售进度',
                    textStyle: {
                        fontSize: 13,
                        color: '#ffffff',
                    },
                    subtext: 'aaabbbccc',
                    subtextStyle: {
                        color: '#ffffff'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    axisLine: {
                        lineStyle: {
                            color: '#ffffff',
                        }
                    },
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value',
                    axisLine: {
                        lineStyle: {
                            color: '#ffffff',
                        }
                    },
                },
                series: [{
                    data: [120, 200, 150, 80, 70, 110, 130],
                    type: 'bar'
                }]
            });

            myChartFour.setOption(option = {
                title: {
                    text: '一季度销售进度',
                    textStyle: {
                        fontSize: 13,
                        color: '#ffffff',
                    },
                    subtext: 'aaabbbccc',
                    subtextStyle: {
                        color: '#ffffff'
                    }
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                // legend: {
                //     data: ['2011年']
                // },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    axisLine: {
                        lineStyle: {
                            color: '#ffffff',
                        }
                    },
                    boundaryGap: [0, 0.01]
                },
                yAxis: {
                    type: 'category',
                    axisLine: {
                        lineStyle: {
                            color: '#ffffff',
                        }
                    },
                    data: ['巴西','印尼','美国','印度','中国']
                },
                series: [
                    {
                        name: '2011年',
                        type: 'bar',
                        data: [18203, 23489, 29034, 104970, 131744]
                    }
                ]
            });

            myChartFive.setOption(option = {
                title: {
                    text: '一季度销售进度',
                    textStyle: {
                        fontSize: 13,
                        color: '#ffffff',
                    },
                    subtext: 'aaabbbccc',
                    subtextStyle: {
                        color: '#ffffff'
                    }
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                // legend: {
                //     orient: 'vertical',
                //     x: 'left',
                //     data:['商品1','商品2','商品3','商品4','商品5']
                // },
                series: [
                    {
                        name:'商品',
                        type:'pie',
                        radius: ['30%', '50%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '15',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:[
                            {value:335, name:'商品1'},
                            {value:310, name:'商品2'},
                            {value:234, name:'商品3'},
                            {value:135, name:'商品4'},
                            {value:1548, name:'商品5'}
                        ]
                    }
                ]
            });
            myChartSix.setOption(option = {
                title: {
                    text: '一季度销售进度',
                    textStyle: {
                        fontSize: 13,
                        color: '#ffffff',
                    },
                    subtext: 'aaabbbccc',
                    subtextStyle: {
                        color: '#ffffff'
                    }
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                // legend: {
                //     orient: 'vertical',
                //     x: 'left',
                //     data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                // },
                series: [
                    {
                        name:'访问来源',
                        type:'pie',
                        radius: ['30%', '50%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '15',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:[
                            {value:335, name:'商品1'},
                            {value:310, name:'商品2'},
                            {value:234, name:'商品3'},
                            {value:135, name:'商品4'},
                            {value:1548, name:'商品5'}
                        ]
                    }
                ]
            });

            myChartSeven.setOption(option = {
                title: {
                    text: '一季度销售进度',
                    textStyle: {
                        fontSize: 13,
                        color: '#ffffff',
                    }
                },
                // tooltip: {
                //     trigger: 'axis'
                // },
                // legend: {
                //     data:['邮件营销']
                // },
                grid: {
                    top: 30,
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                // toolbox: {
                //     feature: {
                //         saveAsImage: {}
                //     }
                // },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    axisLine: {
                        lineStyle: {
                            color: '#ffffff',
                        }
                    },
                    data: ['周一','周二','周三','周四','周五','周六','周日']
                },
                yAxis: {
                    type: 'value',
                    axisLine: {
                        lineStyle: {
                            color: '#ffffff',
                        }
                    },
                },
                itemStyle: {
                    color: '#ffffff'
                },
                lineStyle: {
                    color: '#ffffff'
                },
                areaStyle: {
                    color: '#ffffff'
                },
                series: [
                    {
                        name:'邮件营销',
                        type:'line',
                        stack: '总量',
                        areaStyle: {},
                        data:[120, 132, 101, 134, 90, 230, 210]
                    }
                ]
            });

            $.getJSON('./data.json', function(weiboData) {
                weiboData = weiboData.map(function(serieData, idx) {
                    var px = serieData[0] / 1000;
                    var py = serieData[1] / 1000;
                    var res = [
                        [px, py]
                    ];

                    for (var i = 2; i < serieData.length; i += 2) {
                        var dx = serieData[i] / 1000;
                        var dy = serieData[i + 1] / 1000;
                        var x = px + dx;
                        var y = py + dy;
                        res.push([x.toFixed(2), y.toFixed(2), 1]);

                        px = x;
                        py = y;
                    }
                    return res;
                });
                myChart.setOption(option = {
                    title: {
                        text: '微博签到数据点亮中国',
                        subtext: 'From ThinkGIS',
                        sublink: 'http://www.thinkgis.cn/public/sina',
                        left: 'center',
                        top: 'top',
                        textStyle: {
                            color: 'red'
                        }
                    },
                    tooltip: {},
                    legend: {
                        left: 'left',
                        data: ['强', '中', '弱'],
                        textStyle: {
                            color: '#ccc'
                        }
                    },
                    geo: {
                        map: 'china',
                        roam: true,
                        label: {
                            emphasis: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                areaColor: '#323c48',
                                borderColor: '#111'
                            },
                            emphasis: {
                                areaColor: '#2a333d'
                            }
                        }
                    },
                    series: [{
                        name: '弱',
                        type: 'scatterGL',
                        coordinateSystem: 'geo',
                        symbolSize: 1,
                        itemStyle: {
                            shadowBlur: 2,
                            shadowColor: 'rgba(37, 140, 249, 0.8)',
                            color: 'rgba(37, 140, 249, 0.8)'
                        },
                        data: weiboData[0]
                    }, {
                        name: '中',
                        type: 'scatterGL',
                        coordinateSystem: 'geo',
                        symbolSize: 1,
                        itemStyle: {
                            shadowBlur: 2,
                            shadowColor: 'rgba(14, 241, 242, 0.8)',
                            color: 'rgba(14, 241, 242, 0.8)'
                        },
                        data: weiboData[1]
                    }, {
                        name: '强',
                        type: 'scatterGL',
                        coordinateSystem: 'geo',
                        symbolSize: 1,
                        itemStyle: {
                            shadowBlur: 2,
                            shadowColor: 'rgba(255, 255, 255, 0.8)',
                            color: 'rgba(255, 255, 255, 0.8)'
                        },
                        data: weiboData[2]
                    }]
                });
            });
        }
        
        function init() {
            initTitle();
            initContext();
            intFooterRight();
            initDomWH();
            setEcharts();
        }
        init();
        // $(window).resize(function() {
        //     console.log('我执行了。。。')
        //     init();
        // });
        // setInterval(() => {
        //     init();
        //     console.log('1111')
        // }, 3000);
    })
})(jQuery || window.jQuery, echarts || window.echarts);