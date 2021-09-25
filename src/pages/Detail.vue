<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-09-25 19:32:04
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-09-25 20:15:28
-->
<template>
  <ul>
      <li>消息编号:{{$route.query.id}}</li>
      <li>消息标题:{{$route.query.title}}</li>
  </ul>
</template>

<script>
export default {
    name:'Detail'
}
</script>

<style>

</style>