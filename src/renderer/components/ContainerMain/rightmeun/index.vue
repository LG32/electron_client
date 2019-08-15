<template>
  <div class="content-main">
   <div id="main" class="main" style="height: 400px;"></div>
  </div>
</template>
<script>
var echarts = require('echarts')
export default {
  methods: {},
  data () {
    return {}
  },
  mounted () {
    var myChart = echarts.init(document.getElementById('main'))

    function getVirtulData (year) {
      year = year || '2017'
      var date = +echarts.number.parseDate(year + '-01-01')
      var end = +echarts.number.parseDate(+year + 1 + '-01-01')
      var dayTime = 3600 * 24 * 1000
      var data = []
      for (var time = date; time < end; time += dayTime) {
        data.push([
          echarts.format.formatTime('yyyy-MM-dd', time),
          Math.floor(Math.random() * 10000)
        ])
      }
      return data
    }

    var data = getVirtulData(2016)

    var option = {
      // backgroundColor: "#404a59",

      title: {
        top: 10,
        text: '2016年用户注册量',
        subtext: '单位(人)',
        left: 'center',
        textStyle: {
          color: '#fff'
        }
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '30',
        left: '50',
        data: ['人数', 'Top1'],
        textStyle: {
          color: '#fff'
        }
      },
      calendar: [
        {
          top: 80,
          left: 'center',
          range: ['2016-01-01', '2016-06-30'],
          splitLine: {
            show: true,
            lineStyle: {
              color: '#000',
              width: 4,
              type: 'solid'
            },
            dayLabel: {
              nameMap: 'cn'
            }
          },
          yearLabel: {
            nameMap: 'cn',
            formatter: '上半年{start}',
            textStyle: {
              color: '#fff',
              fontSize: 14
            }
          },
          itemStyle: {
            normal: {
              color: '#323c48',
              borderWidth: 1,
              borderColor: '#111'
            }
          }
        },
        {
          top: 250,
          left: 'center',
          range: ['2016-07-01', '2016-12-31'],
          splitLine: {
            show: true,
            lineStyle: {
              color: '#000',
              width: 4,
              type: 'solid'
            },
            dayLabel: {
              nameMap: 'cn'
            }
          },
          yearLabel: {
            nameMap: 'cn',
            formatter: '下半年{start}',
            textStyle: {
              color: '#fff',
              fontSize: 14
            }
          },
          itemStyle: {
            normal: {
              color: '#323c48',
              borderWidth: 1,
              borderColor: '#111'
            }
          }
        }
      ],
      series: [
        {
          name: '人数',
          type: 'scatter',
          coordinateSystem: 'calendar',
          data: data,
          symbolSize: function (val) {
            return val[1] / 500
          },
          itemStyle: {
            normal: {
              color: '#ddb926'
            }
          }
        },
        {
          name: '人数',
          type: 'scatter',
          coordinateSystem: 'calendar',
          calendarIndex: 1,
          data: data,
          symbolSize: function (val) {
            return val[1] / 500
          },
          itemStyle: {
            normal: {
              color: '#ddb926'
            }
          }
        },
        {
          name: 'Top1',
          type: 'effectScatter',
          coordinateSystem: 'calendar',
          calendarIndex: 1,
          data: data
            .sort(function (a, b) {
              return b[1] - a[1]
            })
            .slice(0, 12),
          symbolSize: function (val) {
            return val[1] / 500
          },
          showEffectOn: 'render',
          rippleEffect: {
            brushType: 'stroke'
          },
          hoverAnimation: true,
          itemStyle: {
            normal: {
              color: '#f4e925',
              shadowBlur: 10,
              shadowColor: '#333'
            }
          },
          zlevel: 1
        },
        {
          name: 'Top1',
          type: 'effectScatter',
          coordinateSystem: 'calendar',
          data: data
            .sort(function (a, b) {
              return b[1] - a[1]
            })
            .slice(0, 12),
          symbolSize: function (val) {
            return val[1] / 500
          },
          showEffectOn: 'render',
          rippleEffect: {
            brushType: 'stroke'
          },
          hoverAnimation: true,
          itemStyle: {
            normal: {
              color: '#f4e925',
              shadowBlur: 10,
              shadowColor: '#333'
            }
          },
          zlevel: 1
        }
      ]
    }

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option)
  }
}
</script>
<style scoped>
  .content-main{
    height: 100%;
    width: 100%;
    position: fixed;
    overflow: hidden;
    background: #404a59;
  }
  .main{
    /* height: 400px; */
    width: 85%;
    margin: 0 auto;
  }
</style>
