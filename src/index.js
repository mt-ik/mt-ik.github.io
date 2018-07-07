(function($, E) {
    $(function() {
        debugger
        $('#main').width($('#map').width());
        $('#main').height($('#map').height());
        $('#pieOneSon').width($('#pieOne').width() - 10);
        $('#pieOneSon').height($('#pieOne').height() - 10);
        $('#barOneSon').width($('#barOne').width() - 10);
        $('#barOneSon').height($('#barOne').height() - 10);
        
        let myChart = E.init(document.querySelector("#main"));
        let myBar = E.init(document.querySelector('#barOneSon'));
        let myPie = E.init(document.querySelector('#pieOneSon'));
        
        myPie.setOption(option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
            },
            series: [
                {
                    name:'访问来源',
                    type:'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
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
                        {value:335, name:'直接访问'},
                        {value:310, name:'邮件营销'},
                        {value:234, name:'联盟广告'},
                        {value:135, name:'视频广告'},
                        {value:1548, name:'搜索引擎'}
                    ]
                }
            ]
        });

        myBar.setOption(option = {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar'
            }]
        })
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
        // $.getJSON("./map.json", function(data) {
        //   let option = chinaOption(data);
        //   console.log(option)
        //   debugger
        //   myChart.setOption(option);
        // });
    })

    function chinaOption(chinadata) {
        let chinaoption = {
            backgroundColor: '#1b1b1b',
            color: ['rgba(255, 255, 255, 0.8)', 'rgba(14, 241, 242, 0.8)', 'rgba(37, 140, 249, 0.8)'],
            title: {
                text: '签到数据点亮中国',
                x: 'center',
                textStyle: {
                    color: '#fff'
                }
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: ['强', '中', '弱'],
                textStyle: {
                    color: '#fff'
                }
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                x: 'right',
                y: 'center',
                feature: {
                    mark: {
                        show: true
                    },
                    dataView: {
                        show: true,
                        readOnly: false
                    },
                    restore: {
                        show: true
                    },
                    saveAsImage: {
                        show: true
                    }
                }
            },
            series: [{
                name: '弱',
                type: 'map',
                mapType: 'china',
                scaleLimit: {
                    max: 2,
                    min: 0.8
                },
                itemStyle: {
                    normal: {
                        borderColor: 'rgba(100,149,237,1)',
                        borderWidth: 1.5,
                        areaStyle: {
                            color: '#1b1b1b'
                        }
                    }
                },
                data: [],
                markPoint: {
                    symbolSize: 1,
                    large: true,
                    effect: {
                        show: false
                    },
                    data: chinadata[0]
                }
            }, {
                name: '中',
                type: 'map',
                mapType: 'china',
                data: [],
                markPoint: {
                    symbolSize: 1,
                    large: true,
                    effect: {
                        show: false
                    },
                    data: chinadata[1]
                }
            }, {
                name: '强',
                type: 'map',
                mapType: 'china',
                hoverable: false,
                roam: false,
                data: [],
                markPoint: {
                    symbol: 'diamond',
                    symbolSize: 1,
                    large: true,
                    effect: {
                        show: false
                    },
                    data: chinadata[2]
                }
            }
            ]
        }
        return chinaoption;
    }
})(jQuery || window.jQuery, echarts || window.echarts);