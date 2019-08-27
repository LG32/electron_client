<template>
    <webview class="iframeStyle" id="content" src="http://scratchx.org/#scratch" plugins></webview>
<!--    <iframe class="iframeStyle" id="content" src="http://scratchx.org/#scratch"></iframe>-->
</template>

<script>
  export default {
    name: 'scratchDemo',
    mounted () {
      console.log(navigator.plugins)
    }
  }
</script>

<style scoped>
    .iframeStyle{
        width: 100%;
        height: 85%;
    }
</style>
