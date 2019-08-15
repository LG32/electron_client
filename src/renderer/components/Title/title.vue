<template>
  <div  class="titlebtn" 
    v-bind:style="style"
    v-on:click="click"/>
</template>
<script>
  const {ipcRenderer: ipc} = require('electron')
  const style = {
    min: {
      // background: 'green',
      // top:'10px',
      right: '90px'
    },
    max: {
      // backgroundColor: 'yellow',
      // top:'10px',
      right: '50px'
    },
    close: {
      // backgroundColor: 'black',
      // top:'10px',
      right: '10px'
    }
  }
export default {
    name: 'Titlebtn',
    props: ['type'],
    computed: {
      style: function () {
        return style[this.type]
      }
    },
    methods: {
      click: function () {
        ipc.send(this.type)
      }
    }
  }
</script>
<style scoped>
.titlebtn {
    position: absolute;
    width: 24px;
    height: 24px;
    top: 0;
    bottom: 0;
    margin: auto 0;
    -webkit-app-region: no-drag;
}
</style>
