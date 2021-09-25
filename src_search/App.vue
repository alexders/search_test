<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-09-15 10:59:06
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-09-22 20:55:11
-->
<template>
  <div class="container">
    <Search></Search>
    <List></List>
  </div> 
</template>

<script>
import Search from './components/Search.vue'
import List  from './components/List.vue'
export default {
  name: 'App',
  components: {
    Search,List
  }
}
</script>

