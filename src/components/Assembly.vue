<template>
  <div class="world">
    <p>{{message}}</p>
    <div class="wraper">
      <mt-swipe :auto="4000" @change="handleChange">
        <mt-swipe-item>1</mt-swipe-item>
        <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>
      </mt-swipe>
    </div>

  </div>
</template>

<script>
import Vue from 'vue'
import {users} from '../mock'
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
  data () {
    return {
      message: 'Welcome',
      list:users.list
    }
  },
  mounted(){
     this.universal()
  },
  methods:{
     universal(){

    },
    handleChange(index) {
      console.log(index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wraper{
  height: 200px;
  border: 1px solid red;
  background: #e6c3d8;
}
.mint-swipe-item{
  line-height: 200px;
}
</style>
