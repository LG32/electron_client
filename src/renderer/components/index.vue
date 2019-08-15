<template>
<div class="RootContainer" id="root">
     <v-title></v-title>
<div class="ContainerMain" >
  <v-left></v-left>
  <v-header></v-header>
  <v-right></v-right>
</div>
</div>
</template>
<script>
import Title from '@/components/Title/mytitle'
import Leftmain from '@/components/ContainerMain/leftmain'
import Rightmain from '@/components/ContainerMain/rightmain'
import RightHeader from '@/components/navigation/header'
export default {
  components: {
    'v-title': Title,
    'v-left': Leftmain,
    'v-right': Rightmain,
    'v-header': RightHeader
  },
  data () {
    return {

    }
  },
  created () {

  }
}
</script>
<style scoped>

.RootContainer{
    width: 100%;
    height: 100%;
}
.ContainerMain{
    margin-top: 61px;
    width: 100%;
  
}

</style>
