<template>
    <div class="content-main" id="app">
        <div id="main" class="main">
            <div class="body-box">
                <div class="content-box">
                    <div class="send-box">
                        <div class="img-box">
                            <el-card class="body-card" :body-style="{ padding: '0px' }">
                                <img class="img-card" src="../../../../img/car.jpg">
                                <div style="padding: 10px">
                                    <span style="font-size: 14px">智能小车</span>
                                </div>
                            </el-card>
                            <el-card class="body-card" :body-style="{ padding: '0px' }">
                                <img class="img-card" src="../../../../img/dog.jpg">
                                <div style="padding: 10px">
                                    <span style="font-size: 14px">智能小狗</span>
                                </div>
                            </el-card>
                        </div>
                        <el-card class="box-card">
                            <div slot="header" class="clearfix">
                                <span>模块信息</span>
                                <el-button style="float: right; padding: 3px 0" type="text"
                                           @click="fresh_table">刷新
                                </el-button>
                            </div>
                            <div>
                                <my-table :data="tableData"
                                          :col-configs="colConfigs">
                                    <el-table-column slot="opt">
                                    </el-table-column>
                                </my-table>
                            </div>
                        </el-card>
                    </div>
                </div>

                <div class="tool-bar" v-bind:style="styleft2" style="width: 200px">
                    <div class="select-data">
                        <div class="form-group" @click="freshPort">
                            <label class="label-text">选择串口</label>
                            <i class="el-icon-refresh" style="margin-left: 10px"></i>
                            <el-select v-model="value" placeholder="请选择" value="">
                                <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </div>

                        <div class="form-group" style="margin-top: 15px">
                            <label class="label-text">波特率</label>
                            <el-input type="text" class="form-control" id="BaudRate" v-model="baudRate"></el-input>
                        </div>
                    </div>
                    <!--                    <div>{{flag}}</div>-->
                    <div class="submit-data">
                        <el-button type="primary" @click="serialComm" style="width: 200px" v-if="!flag">连接</el-button>
                        <el-button type="danger" @click="serialClose" style="width: 200px" v-if="flag">关闭</el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  import myTable from '../../Table/my-table'

  let SerialPort = require('serialport')
  export default {
    name: 'App',
    components: {
      myTable
    },

    beforeUpdate () {
      console.log('beforeUpdate run freshPort')
      if (this.getOldDataFlag) {
        this.$bus.$emit('getData')
        this.getOldDataFlag = false
      }
      // this.freshPort()
    },
    methods: {
      freshPort () {
        console.log('进入刷新串口函数')
        if (this.freshFlag) {
          console.log('刷新串口')
          const that = this
          // that.options = null
          const arr = []
          // eslint-disable-next-line handle-callback-err
          SerialPort.list((err, ports) => {
            for (let item of ports) {
              const temp = {
                value: '',
                label: ''
              }
              temp.label = item.comName
              temp.value = item.comName
              console.log(item.comName)
              arr.push(temp)
            }
            that.options = arr
          })
          if (that.options.length > 0) {
            this.$message({
              showClose: true,
              message: '串口刷新成功',
              type: 'success'
            })
          } else {
            this.$message({
              showClose: true,
              message: '没有设备连接',
              type: 'warning'
            })
          }
          this.freshFlag = false
        } else {
          this.freshFlag = true
        }
      },
      fresh_table () {
        this.$message({
          showClose: true,
          message: '模块信息刷新成功',
          type: 'success'
        })
      },

      /**
       * 端口连接函数
       */
      serialComm: function () {
        console.log(this.value)
        console.log(this.baudRate)
        if (this.value === '' || this.value == null || this.value === '请刷新' || this.value === '选项1') {
          this.$message({
            showClose: true,
            message: '警告,未选择串口!',
            type: 'warning'
          })
        } else {
          this.portObj = new SerialPort(this.value, {baudRate: parseInt(this.baudRate)})
          let portObj = this.portObj
          portObj.on('open', function () {
            if (portObj.isOpen) {
              this.flag = true
              this.serialCommJudgement()
              portObj.on('data', function (data) {
                console.log('data received:' + data)
              })
            }
          }.bind(this))
        }
      },
      serialCommJudgement () {
        if (this.flag === true) {
          this.serialError()
          this.serialListener()
          this.$message({
            showClose: true,
            message: '串口成功连接！！！正在监听数据。',
            type: 'success'
          })
          this.$bus.$emit('sendState', {
            msg: true,
            portObj: this.portObj,
            comName: this.value
          })
        } else {
          this.flag = false
          this.$message({
            showClose: true,
            message: '串口连接失败，串口或已被占用。',
            type: 'error'
          })
        }
      },
      /**
       * 端口关闭函数，未测试
       */
      serialClose () {
        let portObj = this.portObj
        portObj.close()
        this.portObj = portObj
        this.flag = false
        this.$message({
          showClose: true,
          message: '已关闭串口连接'
        })
        this.$bus.$emit('sendState', {
          msg: false,
          portObj: this.portObj,
          comName: ''
        })
      },

      /**
       * 端口错误信息监听
       */
      serialError () {
        let portObj = this.portObj
        portObj.on('error', function (err) {
          let error = err.message
          console.log('Error:', error)
          this.$message({
            showClose: true,
            message: error,
            type: 'error'
          })
        })
      },

      /**
       * 端口监听信息函数
       */
      serialListener () {
        let portObj = this.portObj
        portObj.on('data', function (data) {
          console.log('data received: ' + data)
        })
      }
    },
    data () {
      this.colConfigs = [
        {prop: 'id', label: '模块ID', width: 200},
        {prop: 'name', label: '模块名称', width: 200},
        {prop: 'version', label: '模块版本', width: 200}
        // 模版中的元素需要对应的有 slot="opt" 属性
        // { slot: 'opt' }
      ]
      return {
        tableData: [{
          id: '00000001',
          name: '超声波测距模块',
          version: 'v2.2'
        }, {
          id: '00000002',
          name: '全彩LED灯',
          version: 'v2.2'
        }, {
          id: '00000003',
          name: '直流有刷电机',
          version: 'v2.2'
        }, {
          id: '00000004',
          name: '按键模块',
          version: 'v2.2'
        }],
        options: [{
          value: '选项1',
          label: '请刷新'
        }],
        value: '',
        baudRate: '115200',
        freshFlag: true,
        styleft2: {
          height: '539px'
        },
        postObj: null,
        flag: false,
        getOldDataFlag: true
      }
    },

    mounted () {
      const that = this
      that.$bus.$emit('getData')
      that.styleft2.height = `${document.documentElement.clientHeight - 168}px`
      // 然后监听window的resize事件．在浏览器窗口变化时再设置下背景图高度．
      console.log(that.styleft2.height)
      window.onresize = function temp () {
        that.styleft2.height = `${document.documentElement.clientHeight - 168}px`
      }
      this.$bus.$on('postData', (data) => {
        console.log('postData listener')
        that.flag = data.flag
        that.portObj = data.portObj
        that.value = data.comName
      })
    }
  }
</script>
<style scoped>
    .content-main {
        height: 100%;
        width: 100%;
        position: fixed;
        overflow: hidden;
    }

    .main {
        height: 400px;
        /*width: 76.5%;*/
        margin: 0 auto;
    }

    .body-box {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 78.5%;
        height: 100vh;
    }

    .tool-bar {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 230px;
        height: 100%;
        padding: 15px;
        background-color: #FAFAFA;
        box-shadow: -1px 0 5px #ccc;
    }

    .content-box {
        display: flex;
        flex-direction: column;
        width: calc(100% - 250px);
        height: 100%;
        background-color: #fff;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 93%;
        margin: 15px;
    }

    .send-box {
        display: flex;
        flex-direction: column;
        height: 650px;
    }

    .label-text {
        display: inline-block;
        max-width: 100%;
        margin-bottom: 5px;
        font-weight: 700;
    }

    .img-box {
        height: 250px;
        width: 93%;
        display: flex;
        flex-direction: row;
        margin: 15px;
    }

    .img-card {
        height: 200px;
        width: 310px;
    }

    .body-card {
        margin-left: 10px;
    }
</style>
