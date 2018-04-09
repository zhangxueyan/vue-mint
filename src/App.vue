<template>
  <div id="app">
  	<div class="navItems">
  		<router-link to='/more'>more</router-link>
  		<router-link to='/swipe'>swipe</router-link>
  		<router-link to='/lazy'>lazy</router-link>

  		<router-link to='/range'>range</router-link>
  		<router-link to='/tabbar'>tabbar</router-link>
  		<router-link to='/navbar'>navbar</router-link>

  		<router-link to='/search'>search</router-link>
  	</div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-top: 50px;
}
.navItems{
	position: fixed;
	top:0;
	z-index: 100;
}
.navItems a{
	display: inline-block;
	font-size: 16px;
	line-height: 50px;
	width: 48px;
	border: 1px solid #ccc;
	text-align: center;
}
</style>
