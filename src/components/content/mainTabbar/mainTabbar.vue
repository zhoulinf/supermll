<template>
  <div>
    <Tabbar>
      <Tabbaritem path='/home' activeColor="#ff8198">
        <svg class="icon" aria-hidden="true" slot="img" >
          <use xlink:href="#icon-shouye1" />
        </svg>
        <div slot="text">首页</div>
      </Tabbaritem>
      <Tabbaritem path='/category' activeColor="#ff8198">
        <svg class="icon" aria-hidden="true" slot="img">
          <use xlink:href="#icon-leimupinleifenleileibie
" />
        </svg>
        <div slot="text">分类</div>
      </Tabbaritem>
      <Tabbaritem path='/shopcar' activeColor="#ff8198">
        <svg class="icon" aria-hidden="true" slot="img">
          <use xlink:href="#icon-gouwuche1" />
        </svg>
        <div slot="text">购物车</div>
      </Tabbaritem>
      <Tabbaritem path='/profile' activeColor="#ff8198">
        <svg class="icon" aria-hidden="true" slot="img">
          <use xlink:href="#icon-geren" />
        </svg>
        <div slot="text">我的</div>
      </Tabbaritem>
    </Tabbar>
  </div>
</template>
<script>
import Tabbar from "components/common/tabbar/Tabbar";
import Tabbaritem from "components/common/tabbar/Tabbaritem";

export default {
  name:'mainTabbar',
   data() {
      return {
     }
   },
   methods:{
   },
   components: {
    Tabbar,
    Tabbaritem,
  },
}
</script>
<style>


.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  margin: 5px;
 
}
</style>
