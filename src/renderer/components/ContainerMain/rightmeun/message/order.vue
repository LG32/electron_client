<template>
    <el-card style="margin: 15px">
        <el-table
                :data="tableData3"
                height="450"
                border
                style="width: 100%"
                :row-class-name="tableRowClassName">
            <el-table-column
                    prop="date"
                    label="日期"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="order_id"
                    label="消息ID"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="message"
                    label="消息">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="目标设备">
            </el-table-column>
            <el-table-column
                    prop="serial_id"
                    label="设备ID">
            </el-table-column>
            <el-table-column
                    prop="state"
                    label="执行情况">
            </el-table-column>
        </el-table>
    </el-card>
</template>
<script>
  export default {
    data () {
      return {
        tableData3: []
      }
    },
    created () {
      var that = this
      this.$http
        .get('/static/meus.json')
        .then(function (params) {
          that.tableData3 = params.data
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    methods: {
      tableRowClassName ({row, rowIndex}) {
        if (this.tableData3[rowIndex].state === '失败') {
          return 'error-row'
        }
      }
    }
  }
</script>
<style>
    .el-table .error-row {
        background: #ffebee;
    }
</style>
