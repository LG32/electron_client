<template>
  <el-table :data="tableData">
    <template v-for="colConfig in colConfigs">
      <slot v-if="colConfig.slot" :name="colConfig.slot" />
      <el-table-column v-bind="colConfig" v-bind:key="colConfig.id" />
    </template>
  </el-table>
</template>

<script>
export default {
  props: {
    colConfigs: Array,
    tableData: Array
  },
  data () {
    return {
    }
  }
}
</script>
