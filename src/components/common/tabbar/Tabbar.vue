<template>
  <div id="tab-bar">
   <slot></slot>
  </div>
</template>
<script>
export default {
  name: "Tabbar",
  
};
</script>
<style>


#tab-bar {
  display: flex;
  position: fixed;
  background: lightgray;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -3px 2px gray;
}

</style>
