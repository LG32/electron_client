<template>
    <el-menu class="el-menu-vertical-demo" default-active="2" background-color="#27408B" text-color="#fff"
             active-text-color="#ffd04b">
        <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-menu"></i>
                <span slot="title">数据管理</span>
            </template>
            <el-menu-item index="1-1">
                <router-link to="/index/rightindex">
                    <div class="item-tab-item">连接</div>
                </router-link>
            </el-menu-item>
            <el-menu-item index="1-2">
                <router-link to="/index/rightmessage" class="item-tab-item">
                    <div class="item-tab-item">消息</div>
                </router-link>
            </el-menu-item>
            <el-menu-item index="1-3">
                <router-link to="/index/report" class="item-tab-item">
                    <div class="item-tab-item">报表</div>
                </router-link>
            </el-menu-item>
        </el-submenu>

        <el-submenu index="2">
            <template slot="title">
                <i class="el-icon-menu"></i>
                <span slot="title">测试功能</span>
            </template>
            <el-menu-item index="2-1">
                <router-link to="/index/camera">
                    <div class="item-tab-item">摄像头</div>
                </router-link>
            </el-menu-item>
        </el-submenu>
    </el-menu>

</template>
<script>
  export default {
    data () {
      return {}
    },
    created () {

    },
    mounted () {
    }
  }
</script>
<style scoped>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 100%;
        min-height: 100%;
    }

    .el-submenu i {
        color: #fff;
        font-size: 22px;
    }

</style>
