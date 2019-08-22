<template>
    <div id="app1">
        <enhanced-table
                :tableData="tableData"
                :col-configs="colConfigs">
            <el-table-column slot="options" label="操作">
                <el-button size="mini" slot-scope="{ row }">查看</el-button>
            </el-table-column>
        </enhanced-table>
    </div>
</template>
<script>
  import EnhancedTable from '../../Table/EnhancedTable'
  import PrefixPlusText from '../../Table/PrefixPlusText'

  export default {
    name: 'App',
    components: {
      EnhancedTable
    },
    data () {
      return {
        colConfigs: [
          { prop: 'date', label: '日期' },
          { prop: 'name', label: '姓名' },
          { prop: 'address', label: '地址' },
          // eslint-disable-next-line no-undef
          { prop: 'change', label: '变化', component: PrefixPlusText },
          { prop: 'trend', label: '趋势' },
          { slot: 'options', message: 'message' }
        ],
        tableData: [{
          id: '1',
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          change: '12%',
          trend: '10%'
        }, {
          id: '2',
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          change: '-12%',
          trend: '-10%'
        }]
      }
    }
  }
</script>

<style>
    #app1 {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
