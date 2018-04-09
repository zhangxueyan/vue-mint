<template>
  <div class="search">
    <mt-search v-model="value">
      <mt-cell
      v-for="item in filterResult"
      :title="item"
      :value="item">
    </mt-cell>
  </mt-search>
  </div>
</template>

<script>
import Vue from 'vue'
import {users} from '../mock'
import { Search } from 'mint-ui';
Vue.component(Search.name, Search);
export default {
  data () {
    return {
      message: 'range',
      list:users.list,
      value:'',
      defaultResult: [
        'Apple',  
        'Banana',  
        'Orange',  
        'Durian',  
        'Lemon',  
        'Peach',  
        'Cherry',  
        'Berry',  
        'Core',  
        'Fig',  
        'Haw',  
        'Melon',  
        'Plum',  
        'Pear',  
        'Peanut',  
        'Other'  
      ]
    }
  },
  mounted(){
     this.universal()
  },
  methods:{
     universal(){

    }
  },
  computed:{
    filterResult() { 
      var that = this; 
      return that.defaultResult.filter(function(item){
        return new RegExp(that.value,'i').test(item)
      }) 
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
