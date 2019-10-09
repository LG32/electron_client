<template>
    <el-card style="margin: 15px">
        <div class="receive-box">
            <h4 class="send-header">
                <label>发送信息</label>
            </h4>
            <el-row :gutter="20" style="padding: 15px">
                <el-col :span="12">
                    <el-card shadow="hover" style="background-color: #f44336; color: #fff" @click.native="btnClick1">
                        智能小车控制
                    </el-card>
                </el-col>
                <el-col :span="12">
                    <el-card shadow="hover" style="background-color: #304ffe; color: #fff" @click.native="btnClick2">
                        智能小狗控制
                    </el-card>
                </el-col>
            </el-row>

            <el-collapse-transition>
                <div v-show="show1">
                    <el-form ref="form" :model="form" label-width="80px" :label-position='labelPosition'>
                        <el-form-item label="激光测距">
                            <el-switch v-model="form.lDistance"></el-switch>
                        </el-form-item>
                        <el-form-item label="前进(米/秒)">
                            <el-input-number v-model="form.step" :step="1"></el-input-number>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit">发送</el-button>
                            <el-button @click="cleanForm">清除</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-collapse-transition>

            <el-collapse-transition>
                <div v-show="show2">

                </div>
            </el-collapse-transition>
        </div>
    </el-card>
</template>

<script>
  import { saveAs } from 'file-saver'

  export default {
    name: 'send',
    data () {
      return {
        firstFlag: true,
        labelPosition: 'left',
        portObj: null,
        portFlag: false,
        value: '',
        show1: false,
        show2: false,
        form: {
          step: 1,
          lDistance: false
        },
        historyData: ''
      }
    },
    beforeUpdate () {
      if (this.firstFlag) {
        console.log('send beforeUpdate run freshPort')
        this.$bus.$emit('getDataFromSend')
        this.firstFlag = false
      }
    },
    methods: {
      btnClick1 () {
        if (this.show1 === false) {
          this.show1 = true
          this.show2 = false
        }
      },
      btnClick2 () {
        if (this.show2 === false) {
          this.show1 = false
          this.show2 = true
        }
      },
      onSubmit () {
        if (this.postFlag) {
          this.$message({
            message: '发送成功!',
            type: 'success'
          })
        } else {
          this.$message({
            message: '请连接设备',
            type: 'error'
          })
        }
      },
      cleanForm () {
        this.form.step = 1
        this.form.lDistance = false
        this.$message({
          message: '清除成功！',
          type: 'warning'
        })
        this.saveHistory()
      },
      /**
       * 将发送数据的记录保存到本地
       */
      saveHistory () {
        let that = this
        this.$http
          .get('/static/meus.json')
          .then(function (params) {
            that.historyData = params.data
            that.writeNewData()
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      writeNewData () {
        let newHistory = this.historyData
        for (let i = 0; i < newHistory.length; i++) {
          console.log(newHistory[i].date)
          console.log(newHistory[i].address)
        }
        let dataObj = {
          date: '',
          order_id: '',
          message: '',
          address: '',
          serial_id: '',
          state: ''
        }
        dataObj.date = '2019-08-28'
        dataObj.order_id = '212121'
        dataObj.message = '发送'
        dataObj.address = '智能小狗'
        dataObj.serial_id = '00000002'
        dataObj.state = '成功'
        newHistory[newHistory.length] = dataObj
        // for (let i = 0; i < newHistory.length; i++) {
        //   console.log(newHistory[i].date)
        //   console.log(newHistory[i].address)
        // }
        // console.log(newHistory)
        let blob = new Blob([JSON.stringify(newHistory)], {type: 'text/plain;charset=utf-8'})
        saveAs(blob, 'json.json')
      }
    },
    mounted () {
      this.$bus.$on('postDataFromSend', (data) => {
        console.log('message`s postData listener')
        this.postFlag = data.flag
        this.portObj = data.portObj
        this.value = data.comName
        console.log(data)
      })
    },
    destroyed () {
      console.log('send destroyed')
      this.$bus.$off('postDataFromSend')
    }
  }
</script>

<style scoped>
    .receive-box {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: calc(100% - 230px);
    }

    .receive-windows {
        width: 100%;
        height: calc(100% - 26px);
        padding: 15px;
        overflow-y: scroll;
        overflow-x: hidden;
    }

    .send-header {
        height: 40px;
        padding-left: 15px;
        line-height: 26px;
        background-color: #FAFAFA;
        /*margin-bottom: 0;*/
    }
</style>
