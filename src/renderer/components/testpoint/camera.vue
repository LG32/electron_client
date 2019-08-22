<template>
    <el-card class="box-card" :body-style="{ padding: '0px', height: '100%' }">
        <iframe class="iframeStyle" id="content" src="http://192.168.4.1/"></iframe>
    </el-card>
</template>
<script>
  export default {
    name: 'camera',
    components: {},
    data () {
      return {
        url: 'http://192.168.4.1/'
      }
    },
    mounted () {
      // window.location.href = this.url
      // window.open()
    }
  }
</script>

<style scoped>
    .box-card {
        width: 87.1%;
        height: 85.4%;
        margin: 35px;
        padding: 10px;
    }

    .iframeStyle {
        width: 100%;
        height: 100%;
    }

</style>
