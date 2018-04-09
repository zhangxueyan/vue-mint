<template>
  <div class="range">
    <mt-index-list>
      <mt-index-section v-for="item in list" :index="item.titl">
        <mt-cell :title="childItem.subt" v-for="childItem in item.subts"></mt-cell>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>

<script>
import Vue from 'vue'
import {cities} from '../mock'
import { IndexList, IndexSection } from 'mint-ui';
Vue.component(IndexList.name, IndexList);
Vue.component(IndexSection.name, IndexSection);
export default {
  data () {
    return {
      message: 'range',
      list:cities.list
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
.mint-indexsection-index{
   background: #8e8282!important;
}
</style>
