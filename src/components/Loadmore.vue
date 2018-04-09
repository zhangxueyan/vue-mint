<template>
  <div class="hello">
    <p>{{message}}</p>

    <ul v-infinite-scroll="loadMore"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="10">
    <li v-for="item in list">{{ item.number }}</li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import {users} from '../mock'
import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);
export default {
  data () {
    return {
      message: 'Welcome',
      list:users.list
    }
  },
  mounted(){
    this.loadMore()
  },
  methods:{
          loadMore() {
      this.loading = true;
            setTimeout(() => {
              let lastInfo = this.list[this.list.length - 1];
              var last = lastInfo.number;
              // console.log(last)
              for (let i = 1; i <= 10; i++) {
                this.list.push({name:"aa",number:last + i});
              }
              this.loading = false;
            }, 2000);
          }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li{
  line-height: 40px;
}
.mint-popup{
  width: 100%;
  padding: 10px;
}
</style>
