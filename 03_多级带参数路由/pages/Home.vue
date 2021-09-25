<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-09-25 13:49:21
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-09-25 19:13:04
-->
<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link active-class="active" class="list-group-item" to="/home/news">News</router-link>
        </li>
        <li>
          <router-link  active-class="active" class="list-group-item" to="/home/message">Message</router-link>
        </li>
      </ul>
     <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
</style>