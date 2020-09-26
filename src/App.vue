<template>
  <div id="app">
    <router-view></router-view>
    <mainTabbar></mainTabbar>
  </div>
</template>

<script>
import mainTabbar from 'components/content/mainTabbar/mainTabbar'
export default {
  name: "App",
  data(){
    return {
     isActive:false
    }
  },
  components:{
    mainTabbar
  }
  
 
};
</script>>

<style>

.active{
  color: red;
}
 

</style>
