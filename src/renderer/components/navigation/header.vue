<template>
    <div class="height-header title" style="display: block">
        <strong>模块管理</strong>
        <el-button type="danger" disabled="disabled" v-if="!flag" style="float: right; margin-right: 10px">
            未连接
            <i class="el-icon-link el-icon--right"></i>
        </el-button>
        <el-button type="primary" disabled="disabled" v-if="flag" style="float: right; margin-right: 10px">已连接{{comName}}
            <i class="el-icon-link el-icon--right"></i>
        </el-button>
    </div>
</template>
<script>
  // import {busOfLink} from '../bus/busOfLink'
  // eslint-disable-next-line no-undef
  // let busOfLink = new Vue()

  export default {
    data () {
      return {
        flag: false,
        portObj: null,
        comName: ''
      }
    },

    methods: {},

    mounted () {
      this.$bus.$on('sendState', (data) => {
        this.flag = data.msg
        this.portObj = data.portObj
        this.comName = data.comName
      })
      this.$bus.$on('getData', function () {
        this.$bus.$emit('postData', {
          flag: this.flag,
          portObj: this.portObj,
          comName: this.comName
        })
      }.bind(this))
    }
  }
</script>
<style scoped>
    .title {
        margin: 10px;
        padding: 10px;
    }

    .height-header {
        position: fixed;
        height: 40px;
        line-height: 40px;
        width: 78%;
        top: 61px;
        left: 20%;
        right: 0;
        border-bottom: 1px solid #cccccc;
    }
</style>
