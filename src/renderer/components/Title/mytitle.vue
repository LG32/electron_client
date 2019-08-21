<template>
 <el-menu class="el-menu-demo" mode="horizontal"  background-color="#27408B" text-color="#fff" active-text-color="#ffd04b">
    <el-menu-item index="0">
      <!-- <img src="/static/image/logo.png" alt=""> -->
      <i class="el-icon-upload"></i>
    </el-menu-item>
     <el-menu-item index="1">模块管理</el-menu-item>
            <Titlebtn type="min" class="min el-icon-minus"/>
            <Titlebtn type="max" class="max el-icon-rank"/>
        <Titlebtn type="close" class="mac el-icon-close" />
    </el-menu>
</template>
<script>
import Titlebtn from '@/components/Title/title'
export default {
  components: {
    Titlebtn
  },
  data () {
    return {}
  },
  methods: {
    back: function () {
      window.history.back()
    }
  }
}
</script>
<style scoped>
.el-menu {
  position: fixed;
  width: 100%;
  /* margin-bottom: 53px; */
  /* height: 53px; */
  -webkit-app-region: drag;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  border-bottom: 1px solid #ccc;
}
.el-menu-item,
.el-submenu {
  -webkit-app-region: no-drag;
}
.el-menu-item img{
  height: 40px;
  width: 40px;
}
.mac, .min, .max{
    color: #fff;
    border: none ;
    outline:none;
}

</style>
