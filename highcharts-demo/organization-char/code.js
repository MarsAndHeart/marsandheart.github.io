Highcharts.chart('container', {
    chart: {
        height: 600,
        inverted: true
    },

    title: {
        text: '恒格组织机构图'
    },

    accessibility: {
        point: {
            descriptionFormatter: function (point) {
                var nodeName = point.toNode.name,
                    nodeId = point.toNode.id,
                    nodeDesc = nodeName === nodeId ? nodeName : nodeName + ', ' + nodeId,
                    parentDesc = point.fromNode.id;
                return point.index + '. ' + nodeDesc + ', reports to ' + parentDesc + '.';
            }
        }
    },

    series: [{
        type: 'organization',
        name: 'Hungraim',
        keys: ['from', 'to'],
        data: [
            ['CEO', 'TP'],
            ['CEO', 'TPT'],
            ['CEO', 'SZ'],
            ['CEO', 'AIA'],
            ['CEO', 'HR'],
            ['CEO', 'JY'],
            ['HR', 'HR team'],
            ['TP', 'Product'],
            ['TP', 'Web'],
            ['TPT', 'TPT DEV'],
            ['SZ', 'Sales'],
            ['AIA', 'Market'],
            ['JY', 'JY DEV']
        ],
        levels: [
            {
                level: 0,
                color: '#980104'
            }, {
                level: 1,
                color: '#009999'
            }, {
                level: 2,
                color: '#359154'
            }, {
                level: 3,
                color: '#359154'
            }, {
                level: 4,
                color: '#999900'
            }],
        nodes: [{
            id: 'CEO',
            title: 'CEO',
            name: '万军民',
        }, {
            id: 'HR',
            title: '人事经理',
            name: '王雁丽',
            column: 1,
            offset: '75%',
            layout: 'hanging'
        }, {
            id: 'TP',
            title: '太平项目总监',
            name: '齐雷雨',
            column: 3,
            layout: 'hanging'
        }, {
            id: 'TPT',
            title: '太平通项目总监',
            name: '江渔剑',
            column: 3,
        }, {
            id: 'SZ',
            title: '深圳项目总监',
            name: '常志鹏',
            column: 3,
            layout: 'hanging'
        }, {
            id: 'AIA',
            title: '友邦项目经理',
            name: '张于非',
            column: 3,
            layout: 'hanging'
        }, {
            id: 'JY',
            title: '交银项目经理',
            name: '袁炳亮',
            column: 3,
            layout: 'hanging'
        }, {
            id: 'HR team',
            name: '人事团队'
        }, {
            id: 'Product',
            name: '卡园路团队'
        }, {
            id: 'Web',
            name: '涛飞团队'
        }, {
            id: 'TPT DEV',
            name: '太平通团队'
        }, {
            id: 'Sales',
            name: '深圳团队'
        }, {
            id: 'Market',
            name: '友邦团队'
        }, {
            id: 'JY DEV',
            name: '交银团队'
        }],
        colorByPoint: false,
        color: '#007ad0',
        dataLabels: {
            color: 'white'
        },
        borderColor: 'white',
        nodeWidth: 65
    }],
    tooltip: {
        outside: true
    },
    exporting: {
        allowHTML: true,
        sourceWidth: 800,
        sourceHeight: 800
    }

});