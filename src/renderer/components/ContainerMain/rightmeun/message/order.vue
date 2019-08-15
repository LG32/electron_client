<template>
  <el-table
    :data="tableData3"
    height="250"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="oderid"
      label="ID"
      width="180">
    </el-table-column>
    <el-table-column
      prop="message"
      label="消息">
    </el-table-column>
     <el-table-column
      prop="addrees"
      label="收货地址">
    </el-table-column>
     <el-table-column
      prop="phone"
      label="联系电话">
    </el-table-column>
     <el-table-column
      prop="level"
      label="用户等级">
    </el-table-column>
  </el-table>
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
        console.log(params)
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  methods () {

  },
  methods: {}
}
</script>
<style scoped>

</style>
