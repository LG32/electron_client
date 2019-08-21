<template>
    <el-card style="margin: 15px">
        <div class="receive-box">
            <h4 class="send-header">
                <label>发送信息</label>
            </h4>
            <div class="receive-windows">
            </div>
        </div>
    </el-card>
</template>

<script>
  export default {
    name: 'send'
  }
</script>

<style scoped>
    .receive-box {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: calc(100% - 230px);
    }

    .receive-windows {
        width: 100%;
        height: calc(100% - 26px);
        padding: 15px;
        overflow-y: scroll;
        overflow-x: hidden;
    }

    .send-header {
        height: 40px;
        padding-left: 15px;
        line-height: 26px;
        background-color: #FAFAFA;
        /*margin-bottom: 0;*/
    }
</style>
