<template>
  <div id="app">
    <tool-bar></tool-bar>
    
    <transition name="page">
      <router-view></router-view>
    </transition>
    
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue'

export default {
  components:{
    ToolBar,
  },
}
</script>

<style>
body{
  padding: 0;
  margin: 0;
}
a{
  /* a line 밑줄제거 */
  text-decoration: none;
  color: #34495e;
}
a:hover{
  color: #43b883;
  text-decoration: underline;
}
a.router-link-exact-active{
  text-decoration: underline;
}
/* router transition */
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to /* .page-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
