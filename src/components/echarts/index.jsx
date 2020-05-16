import React, { Component } from 'react'
import echarts from 'echarts'
import './style.less'

export default class index extends Component {

  componentDidMount () {
    var myChart = echarts.init(document.querySelector('#main'))
    
      var option = {
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            areaStyle: {}
        }]
    }
        myChart.setOption(option)

        var myChart = echarts.init(document.querySelector('#main1'))
    
        var option1 = {
          xAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
              type: 'value'
          },
          series: [{
              data: [120, 200, 150, 80, 70, 110, 130],
              type: 'bar',
              showBackground: true,
              backgroundStyle: {
                  color: 'rgba(220, 220, 220, 0.8)'
              }
          }]
      }
          myChart.setOption(option1)

          var myChart = echarts.init(document.querySelector('#main2'))
    
        var option2 = {
          xAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
              type: 'value'
          },
          series: [{
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: 'line'
          }]
      }
      
          myChart.setOption(option2)

          var myChart = echarts.init(document.querySelector('#main3'))
    
        var option3 = {
          tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          legend: {
              orient: 'vertical',
              left: 10,
              data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
          },
          series: [
              {
                  name: '访问来源',
                  type: 'pie',
                  radius: ['50%', '70%'],
                  avoidLabelOverlap: false,
                  label: {
                      show: false,
                      position: 'center'
                  },
                  emphasis: {
                      label: {
                          show: true,
                          fontSize: '30',
                          fontWeight: 'bold'
                      }
                  },
                  labelLine: {
                      show: false
                  },
                  data: [
                      {value: 335, name: '直接访问'},
                      {value: 310, name: '邮件营销'},
                      {value: 234, name: '联盟广告'},
                      {value: 135, name: '视频广告'},
                      {value: 1548, name: '搜索引擎'}
                  ]
              }
          ]
      }
      
          myChart.setOption(option3)

   
  }

  render() {
    return (
      <div className="ech">
        <div className="box">
          <div id="main" style={{ width: '100%', height: '100%' }}></div>
        </div>
        <div className="box">
          <div id="main1" style={{ width: '100%', height: '100%' }}></div>
        </div>
        <div className="box">
          <div id="main2" style={{ width: '100%', height: '100%' }}></div>
        </div>
        <div className="box">
          <div id="main3" style={{ width: '100%', height: '100%' }}></div>
        </div>
      </div>
    )
  }
}
