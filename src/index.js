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
                let li = '<li class="item"><span>'+ulInfo[i].title+'</span><div class="content"><div>'+ulInfo[i].text+'<i style="display:inline-block;width:5em;"></i>'+ulInfo[i].text+'</div></div></li>';
                $('#contentUl').append(li);
            }
        }
        // mock.js中的footRight对象
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

        // 设置各区域块高、宽
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

        // 设置图表底部数据
        function initChartFoot(data, dom) {
            data.forEach( o => {
                let itemFoot = $('<div class="item"><div class="item-title">'+ o.name +'</div><div class="item-text" >'+ o.value +'</div></div>');
                dom.append(itemFoot);
            });
        }
        // 图1-饼图
        function setEchartOne() {
            let myChartOne = E.init(document.querySelector('#chartOneSon'));
            let myChartOneFoot = $('#chartOneSon').next();
            initChartFoot(chartOne.footer, myChartOneFoot);

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
        }
        // 图2-柱状图
        function setEchartTwo() {
            let myChartTwo = E.init(document.querySelector('#chartTwoSon'));
            let myChartTwoFoot = $('#chartTwoSon').next();
            initChartFoot(chartTwo.footer, myChartTwoFoot);
            myChartTwo.setOption(option = {
                title: {
                    text: chartTwo.title.text,
                    textStyle: {
                        fontSize: 13,
                        color: '#ffffff',
                    },
                    subtext: chartTwo.title.subtext,
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
                    data: chartTwo.series.xAxis,
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
                    data: chartTwo.series.data,
                    type: 'bar'
                }]
            });
        }
        // 图3-柱状图
        function setEchartThree() {
            let myChartThree = E.init(document.querySelector('#chartThreeSon'));
            let myChartThreeFoot = $('#chartThreeSon').next();
            initChartFoot(chartThree.footer, myChartThreeFoot);
            myChartThree.setOption(option = {
                title: {
                    text: chartThree.title.text,
                    textStyle: {
                        fontSize: 13,
                        color: '#ffffff',
                    },
                    subtext: chartThree.title.subtext,
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
                    data: chartThree.series.xAxis,
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
                    data: chartThree.series.data,
                    type: 'bar'
                }]
            });
        }
        // 图4-柱状图
        function setEchartFour() {
            let myChartFour = E.init(document.querySelector('#chartFourSon'));
            myChartFour.setOption(option = {
                title: {
                    text: chartFour.title.text,
                    textStyle: {
                        fontSize: 13,
                        color: '#ffffff',
                    },
                    subtext: chartFour.title.subtext,
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
                    data: chartFour.series.yAxis
                },
                series: [
                    {
                        name: chartFour.series.title,
                        type: 'bar',
                        data: chartFour.series.data
                    }
                ]
            });
        }
        // 图5-饼图
        function setEchartFive() {
            let myChartFive = E.init(document.querySelector('#chartFiveSon'));
            let myChartFiveFoot = $('#chartFiveSon').next();
            initChartFoot(chartFive.footer, myChartFiveFoot);
            myChartFive.setOption(option = {
                title: {
                    text: chartFive.title.text,
                    textStyle: {
                        fontSize: 13,
                        color: '#ffffff',
                    },
                    subtext: chartFive.title.subtext,
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
                        name: chartFive.series.title,
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
                        data: chartFive.series.data
                    }
                ]
            });
        }
        // 图6-饼图
        function setEchartSix() {
            let myChartSix = E.init(document.querySelector('#chartSixSon'));
            let myChartSixFoot = $('#chartSixSon').next();
            initChartFoot(chartSix.footer, myChartSixFoot);
            myChartSix.setOption(option = {
                title: {
                    text: chartSix.title.text,
                    textStyle: {
                        fontSize: 13,
                        color: '#ffffff',
                    },
                    subtext: chartSix.title.subtext,
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
                        name: chartSix.series.title,
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
                        data: chartSix.series.data
                    }
                ]
            });
        }
        // 图7-折线图
        function setEchartSeven() {
            let myChartSeven = E.init(document.querySelector('#chartSevenSon'));
            myChartSeven.setOption(option = {
                title: {
                    text: chartSeven.title.text,
                    textStyle: {
                        fontSize: 13,
                        color: '#ffffff',
                    }
                },
                grid: {
                    top: 30,
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    axisLine: {
                        lineStyle: {
                            color: '#ffffff',
                        }
                    },
                    data: chartSeven.series.xAxis
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
                        name: chartSeven.series.title,
                        type:'line',
                        stack: chartSeven.series.stack,
                        areaStyle: {},
                        data: chartSeven.series.data
                    }
                ]
            });
        }
        // 地图
        function setEchartMap() {
            let myChart = E.init(document.querySelector('#main'));
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

        function setEcharts() {
            setEchartOne();
            setEchartTwo();
            setEchartThree();
            setEchartFour();
            setEchartFive();
            setEchartSix();
            setEchartSeven();
            setEchartMap();
        }
        
        function init() {
            initTitle();
            initContext();
            intFooterRight();
            initDomWH();
            setEcharts();
        }
        init();
    })
})(jQuery || window.jQuery, echarts || window.echarts);