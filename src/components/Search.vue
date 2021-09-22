<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-09-22 17:37:06
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-09-22 18:06:56
-->
<template>
  <section class="jumbotron">
  <h3 class="jumbotron-heading">Search Github Users</h3>
  <div>
    <input type="text" placeholder="enter the name you search" v-model="keyword"/>&nbsp;
    <button @click="searchUsres">Search</button>
  </div>
</section>
</template>

<script>
import axios from 'axios'
export default {
    name:'Search',
    data() {
      return {
        keyword:''
      }
    },
    methods: {
      searchUsres(){
        axios.get(`https://api.github.com/search/users?q=$(this.keyword)`).then(
          
          response=>{
              console.log("收到的数据"+response.data);
          },
         error=>{
            console.log("错误信息"+error.messge);
         }
          
          );
      }
    },
}
</script>

