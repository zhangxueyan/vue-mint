<template>
  <div class="navbar">
<mt-navbar v-model="selected">
  <mt-tab-item id="1">选项一</mt-tab-item>
  <mt-tab-item id="2">选项二</mt-tab-item>
  <mt-tab-item id="3">选项三</mt-tab-item>
</mt-navbar>

<!-- tab-container -->
<mt-tab-container v-model="selected">
  <mt-tab-container-item id="1">
    <mt-cell v-for="n in 4" :title="'内容 ' + n" />
  </mt-tab-container-item>
  <mt-tab-container-item id="2">
    <mt-cell v-for="n in 4" :title="'测试 ' + n" />
  </mt-tab-container-item>
  <mt-tab-container-item id="3">
    <mt-cell v-for="n in 6" :title="'选项 ' + n" />
  </mt-tab-container-item>
</mt-tab-container>
  </div>
</template>

<script>
import Vue from 'vue'
import {users} from '../mock'
import { Navbar, TabItem } from 'mint-ui';

Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);

import { TabContainer, TabContainerItem } from 'mint-ui';

Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
export default {
  data () {
    return {
      message: 'range',
      list:users.list,
      selected:"2"
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
