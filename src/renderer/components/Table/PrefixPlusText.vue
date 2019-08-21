<template>
  <el-table-column :label="colConfig.label">
    <span slot-scope="{ row }">
      {{ parseInt(row[colConfig.prop]) > 0 ? '+' + row[colConfig.prop] : row[colConfig.prop] }}
    </span>
  </el-table-column>
</template>

<script>
export default {
  props: ['colConfig']
}
</script>

<style>

</style>
