<template>
  <div class="rightmain" v-bind:style="style1">
    <router-view></router-view>
  </div>
</template>
<script>
 export default {
   methods: {
 
   },
   data () {
     return {
       style1: {
         height: '498px'
       }
     }
   },
   mounted () {
     this.style1.height = `${document.documentElement.clientHeight - 102}px`
     // 然后监听window的resize事件．在浏览器窗口变化时再设置下背景图高度．
     const that = this
     window.onresize = function temp () {
       that.style1.height = `${document.documentElement.clientHeight - 102}px`
     }
   }
 }
</script>
<style scoped>
 .rightmain{
  position: fixed;
  left: 21%;
  top: 102px;
  right: 0;
  width: 79%;
  bottom: 0;
  padding:0 5px; 
  border-radius: 20px;
  overflow-x:hidden; 
 }
</style>
