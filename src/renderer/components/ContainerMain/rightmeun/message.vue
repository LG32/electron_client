<template>
  <div>
    <div class="message-header">
      <div class="message-header-tab">
        <div class="header-tab-item" v-bind:class="{active:item1}" @click="chikcs1">订单消息</div>
         <div class="header-tab-item" v-bind:class="{active:item2}" @click="chikcs2">客户消息</div>
          <div class="header-tab-item" v-bind:class="{active:item3}" @click="chikcs3">商品消息</div>
          <div class="header-tab-item" v-bind:class="{active:item4}" @click="chikcs4">朋友消息</div>
        <div class="header-tab-item" v-bind:class="{active:item5}" @click="chikcs5">系统消息</div>
      </div>
      </div>
      <div class="message-main">
        <transition >
         <component :is="view"></component>
        </transition>
      </div>
  </div>
</template>
<script>
import orderM from '@/components/ContainerMain/rightmeun/message/order'
export default {
  components: {
    't-a': orderM
  },
  data () {
    return {
      item1: true,
      item2: false,
      item3: false,
      item4: false,
      item5: false,
      view: 't-a'
    }
  },
  methods: {
    chikcs1: function () {
      this.item1 = true
      this.item2 = false
      this.item3 = false
      this.item4 = false
      this.item5 = false
    },
    chikcs2: function () {
      this.item1 = false
      this.item2 = true
      this.item3 = false
      this.item4 = false
      this.item5 = false
    },
    chikcs3: function () {
      this.item1 = false
      this.item2 = false
      this.item3 = true
      this.item4 = false
      this.item5 = false
    },
    chikcs4: function () {
      this.item1 = false
      this.item2 = false
      this.item3 = false
      this.item4 = true
      this.item5 = false
    },
    chikcs5: function () {
      this.item1 = false
      this.item2 = false
      this.item3 = false
      this.item4 = false
      this.item5 = true
    }
  }
}
</script>
<style scoped>
.message-header {
  height: 40px;
  line-height: 40px;
  width: 100%;
  border-bottom: 1px solid #f1f1f1;
}
.message-header-tab {
  width: 60%;
  margin: 0 auto;
  display: flex;
  display: -webkit-flex;
  /* for uc */
  display: -webkit-box;
  display: -ms-flexbox;
}
.header-tab-item {
  -ms-flex: 1; /* IE 10 */
  -webkit-flex: 1;
  flex: 1;
  /* for uc */
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  text-align: center;
  cursor: pointer;
}
.message-main{
    width: 100%;
}
.active{
border-bottom: 2px solid #27408B;
color: #27408B;
}
</style>
