<template>
    <div>
        <div class="message-header">
            <div class="message-header-tab">
                <div class="header-tab-item" v-bind:class="{active:item2}" @click="chikcs2">发送消息</div>
                <div class="header-tab-item" v-bind:class="{active:item1}" @click="chikcs1">历史消息</div>
            </div>
        </div>
        <div class="message-main">
            <transition name="el-fade-in-linear">
                <component :is="view" v-show="flag"></component>
            </transition>
        </div>
    </div>
</template>
<script>
  import orderM from '@/components/ContainerMain/rightmeun/message/order'
  import sendM from './message/send'

  export default {
    components: {
      't-a': orderM,
      't-b': sendM
    },
    data () {
      return {
        item1: true,
        item2: false,
        view: 't-a',
        flag: true
      }
    },
    methods: {
      chikcs1: function () {
        this.item1 = true
        this.item2 = false
        this.view = 't-a'
        // this.flag = false
      },
      chikcs2: function () {
        this.item1 = false
        this.item2 = true
        this.view = 't-b'
        // this.flag = true
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

    .message-main {
        width: 100%;
    }

    .active {
        border-bottom: 2px solid #27408B;
        color: #27408B;
    }
</style>
