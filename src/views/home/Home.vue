<template>
  <div>
    <NavBar class="home-nav">
    
      <span slot="center">购物街</span>
    
    </NavBar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
   name:'Home',
   components:{
      NavBar
   }
}
</script>

<style>
  .home-nav{
    background-color: var(--color-tint);
    color: white;
  }

</style>
