let title = {
    title: '销售额分省排名',
    subTitle: 'Sales ranking points province'
}

let ulInfo = [
    {
        title: 'No.1',
        text: '是一种以长方形的长度为变量的表达图形的统计'
    },
    {
        title: 'No.2',
        text: '是一种以长方形的长度为形的统计报告图'
    },
    {
        title: 'No.3',
        text: '是一种以长方形的长度为报告图'
    },
    {
        title: 'No.4',
        text: '是一种以长计报告图'
    },
    {
        title: 'No.5',
        text: '是一种以长方形的长度为变量的表达图形的统计报告图'
    },
]

let footRight = {
    one: [
        {
            title: '企业经营指标',
            value: 1
        },
        {
            title: '企业经营指标',
            value: 2
        }
    ],
    two: [
        {
            title: '企业经营指标',
            value: 3
        },
        {
            title: '企业经营指标',
            value: 4
        }
    ],
    three: [
        {
            title: '企业经营指标',
            value: 5
        },
        {
            title: '企业经营指标',
            value: 6
        }
    ],
}

let chartOne = {
    title: {
        text: '一季度销售进度',
        subtext: 'aaabbbccc',
    },
    series: {
        title: '销售额完成量',
        data:[
            {value:135, name:'已完成'},
            {value:310, name:'未完成'},
        ]
    },
    footer: [
        {value: '13万', name:'一季度销售1'},
        {value: '310万', name:'一季度销售2'},
    ]
}

let chartTwo = {
    title: {
        text: '一季度销售进度Two',
        subtext: 'aaabbbcccTwo',
    },
    series: {
        title: '销售额完成量Two',
        xAxis: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        data: [120, 200, 150, 80, 70, 110, 130],
    },
    footer: [
        {value: '13万', name:'一季度销售1'},
        {value: '310万', name:'一季度销售2'},
    ]
}

let chartThree = {
    title: {
        text: '一季度销售进度Three',
        subtext: 'aaabbbcccThree',
    },
    series: {
        title: '销售额完成量Three',
        xAxis: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        data: [120, 200, 150, 80, 70, 110, 130],
    },
    footer: [
        {value: '13万', name:'一季度销售1'},
        {value: '310万', name:'一季度销售2'},
    ]
}

let chartFour = {
    title: {
        text: '一季度销售进度Four',
        subtext: 'aaabbbcccFour',
    },
    series: {
        title: '2011年',
        xAxis: ['巴西','印尼','美国','印度','中国'],
        data: [18203, 23489, 29034, 104970, 131744]
    }
}

let chartFive = {
    title: {
        text: '一季度销售进度5',
        subtext: 'aaabbbccc5',
    },
    series: {
        title: '销售额完成量5',
        data:[
            {value:335, name:'商品1'},
            {value:310, name:'商品2'},
            {value:234, name:'商品3'},
            {value:135, name:'商品4'},
            {value:1548, name:'商品5'}
        ]
    },
    footer: [
        {value: '13万', name:'一季度销售1'},
        {value: '310万', name:'一季度销售2'},
    ]
}

let chartSix = {
    title: {
        text: '一季度销售进度6',
        subtext: 'aaabbbccc6',
    },
    series: {
        title: '销售额完成量6',
        data:[
            {value:335, name:'商品1'},
            {value:310, name:'商品2'},
            {value:234, name:'商品3'},
            {value:135, name:'商品4'},
            {value:1548, name:'商品5'}
        ]
    },
    footer: [
        {value: '13万', name:'一季度销售1'},
        {value: '310万', name:'一季度销售2'},
    ]
}

let chartSeven = {
    title: {
        text: '一季度销售进度',
    },
    series: {
        xAxis: ['周一','周二','周三','周四','周五','周六','周日'],
        title: '邮件营销',
        stack: '总量',
        data: [120, 132, 101, 134, 90, 230, 210],
    }
}