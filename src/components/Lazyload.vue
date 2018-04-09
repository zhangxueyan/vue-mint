<template>
  <div class="load">
    <p>{{message}}</p>
    <ul>
      <li v-for="item in list">
        <!-- <img v-lazy="item.img"> -->
        <p v-if="item.sex">男</p>
        <p v-else>女</p>
        <p>{{item}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import {users} from '../mock'
import { Lazyload } from 'mint-ui';
Vue.use(Lazyload);
export default {
  data () {
    return {
      message: 'Lazyload',
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
