<template>
  <el-table :data="tableData">
    <template v-for="colConfig in colConfigs">
      <slot v-if="colConfig.slot" :name="colConfig.slot"></slot>
      <component
        :key="colConfig.id"
        v-else-if="colConfig.component"
        :is="colConfig.component"
        :col-config="colConfig">
      </component>
      <el-table-column v-else v-bind="colConfig" :key="colConfig.id"/>
    </template>
  </el-table>
</template>

<script>
export default {
  props: { colConfigs: Array, tableData: Array }
}
</script>
