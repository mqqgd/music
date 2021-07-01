<template>
  <div id="app">
    <Header></Header>
    <Tabbar></Tabbar>
    <router-view></router-view>

  </div>
  
</template>
<script>
//导入组件
  import Header from './components/Header'
  import Tabbar from './components/Tabbar'
  export default {
    name:'App',
    components: {
      //注册组件
      Header,
      Tabbar,
    },
   
}
</script>

<style scoped lang="scss">


</style>


