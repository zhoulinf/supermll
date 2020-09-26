<template>

    
    <div  @click="itemActive" class="tab-bar-item" :style="activeStyle ">
      <slot name="img"></slot>
      <slot name="text"></slot>
    </div>

    
</template>
<script>

export default {
   name:'Tabbaritem',
   props:{
     path:String,
     activeColor:{
       type:String,
       default:'red'
     }
   },
   data(){
     return {
      active:''
     }
   },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
     
      return this.isActive ? {color:this.activeColor}: {}
    }
  },
  methods:{
     itemActive(){
       this.$router.push(this.path)
     }
   }
}
</script>
 
<style>
  
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}


</style>
