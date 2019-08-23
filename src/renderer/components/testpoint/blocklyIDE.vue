<template>
    <iframe class="iframeStyle" id="content" src="../../../../static/my-blockly/demos/code/index.html"></iframe>
</template>

<script>
  export default {
    name: 'blocklyIDE',
    data () {
      return {
        url: 'http://192.168.4.1/'
      }
    }
  }
</script>

<style scoped>
.iframeStyle{
    width: 100%;
    height: 85%;
}
</style>
