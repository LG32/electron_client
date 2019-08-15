<template>
<el-menu class="el-menu-vertical-demo" default-active="2"  background-color="#27408B" text-color="#fff" active-text-color="#ffd04b">
  <el-submenu index="1">
    <template slot="title">
      <i class="el-icon-menu"></i>
      <span slot="title">数据管理</span>
    </template>
    <el-menu-item index="1-1">
      <router-link to="/index/rightindex">
        <div class="item-tab-item">图表</div>  
      </router-link>  
        </el-menu-item>
      <el-menu-item index="1-2">
        <router-link to="/index/rightmessage">
        <div class="item-tab-item">消息</div>
        </router-link>
          </el-menu-item>
      <el-menu-item index="1-3">
          <div class="item-tab-item">报表</div>
          </el-menu-item>
  </el-submenu>
  <el-submenu index="2">
     <template slot="title">
      <i class="el-icon-mobile-phone"></i>
    <span slot="title">用户管理</span>
    </template>
     <el-menu-item index="2-1">
       <div class="item-tab-item">  用户列表</div>
         </el-menu-item>
      <el-menu-item index="2-2">
         <div class="item-tab-item"> 用户操作</div>
          </el-menu-item>
      <el-menu-item index="3-3">
          <div class="item-tab-item">用户数据</div>
          </el-menu-item>
  </el-submenu>
   <el-submenu index="3">
        <template slot="title">
        <i class="el-icon-document"></i>
        <span slot="title">
            订单管理
            </span>
        </template>
        <el-menu-item index="3-1">
           <div class="item-tab-item"> 订单列表</div>
            </el-menu-item>
        <el-menu-item index="3-2">
            <div class="item-tab-item">订单操作</div>
            </el-menu-item>
        <el-menu-item index="3-3">
           <div class="item-tab-item"> 订单数据</div>
            </el-menu-item>
    </el-submenu>
     <el-submenu index="4">
        <template slot="title">
        <i class="el-icon-goods"></i>
        <span slot="title">
            采购管理
            </span>
        </template>
        <el-menu-item index="4-1">
            <div class="item-tab-item">采购列表</div>
            </el-menu-item>
        <el-menu-item index="4-2">
            <div class="item-tab-item">采购操作</div>
            </el-menu-item>
        <el-menu-item index="4-3">
           <div class="item-tab-item"> 采购数据</div>
            </el-menu-item>
    </el-submenu>
     <el-submenu index="5">
        <template slot="title">
        <i class="el-icon-sold-out"></i>
        <span slot="title">财务管理</span>
        </template>
        <el-menu-item index="5-1">财务列表</el-menu-item>
        <el-menu-item index="5-2">财务操作</el-menu-item>
        <el-menu-item index="5-3">财务数据</el-menu-item>
    </el-submenu>
     <el-submenu index="6">
        <template slot="title">
        <i class="el-icon-setting"></i>
        <span slot="title">系统管理</span>
        </template>
        <el-menu-item index="6-1">管理员列表</el-menu-item>
        <el-menu-item index="6-2">管理员操作</el-menu-item>
        <el-menu-item index="6-3">系统参数</el-menu-item>
    </el-submenu>
     <el-submenu index="7">
        <template slot="title">
        <i class="el-icon-news"></i>
        <span slot="title">广告管理</span>
        </template>
        <el-menu-item index="7-1">广告列表</el-menu-item>
        <el-menu-item index="7-2">广告操作</el-menu-item>
        
    </el-submenu>
     <el-submenu index="8">
        <template slot="title">
        <i class="el-icon-picture-outline"></i>
        <span slot="title">图片管理</span>
        </template>
        <el-menu-item index="8-1">图片列表</el-menu-item>
        <el-menu-item index="8-2">图片操作</el-menu-item>
        <el-menu-item index="8-3">图片参数</el-menu-item>
    </el-submenu>
     <el-submenu index="9">
        <template slot="title">
        <i class="el-icon-sort"></i>
        <span slot="title">合作管理</span>
        </template>
        <el-menu-item index="9-1">合作列表</el-menu-item>
        <el-menu-item index="9-2">合作操作</el-menu-item>
        <el-menu-item index="9-3">参数</el-menu-item>
    </el-submenu>
     <el-submenu index="10">
        <template slot="title">
        <i class="el-icon-sort-down"></i>
        <span slot="title">人事管理</span>
        </template>
        <el-menu-item index="10-1">人员列表</el-menu-item>
        <el-menu-item index="10-2">人员操作</el-menu-item>
       
    </el-submenu>
     <el-submenu index="11">
        <template slot="title">
        <i class="el-icon-more"></i>
        <span slot="title">其他</span>
        </template>
        <el-menu-item index="11-1">事件列表</el-menu-item>
        <el-menu-item index="10-2">事件操作</el-menu-item>
        
    </el-submenu>
    </el-menu>
  
</template>
<script>
export default {
  data () {
    return {

    }
  },
  created () {

  },
  mounted () {

  },
  methods: {

  }
}
</script>
<style scoped>
 .el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 100%;
  min-height: 100%;
}
.el-submenu i{
    color: 	#080808;
    font-size: 22px;
}

</style>
