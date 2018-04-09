<template>
  <div class="tabbar">
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="外卖">
        <mt-cell v-for="n in 8" title="外卖"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="订单">
        <mt-cell v-for="n in 5" title="订单"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="发现">
        <mt-cell v-for="n in 7" title="发现"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="我的">
        <mt-cell v-for="n in 7" title="我的"></mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="外卖">
        <img slot="icon" src="../assets/logo.png">
        外卖
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img slot="icon" src="../assets/logo.png">
        订单
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src="../assets/logo.png">
        发现
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="../assets/logo.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import Vue from 'vue'
import {users} from '../mock'
import { Tabbar, TabItem } from 'mint-ui';
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

import { TabContainer, TabContainerItem } from 'mint-ui';
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);

export default {
  data () {
    return {
      message: 'range',
      list:users.list,
      selected:"外卖"
    }
  },
  mounted(){
     this.universal()
  },
  methods:{
     universal(){

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p{
  line-height: 40px;
  text-align: center;
}
.tabbar{
  padding-top: 40px;
}
</style>
