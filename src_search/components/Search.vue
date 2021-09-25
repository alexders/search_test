<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-09-22 17:37:06
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-09-23 00:07:22
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
        //请求前初始化列表数据
        this.$bus.$emit('updataListData', {isFirst:false,isLoading:true,errMessage:'', users:[]});
        axios.get(`https://api.github.com/search/users?q=${this.keyword}`).then(
          
          response => {
              console.log("请求成功");
              //请求成功后，更新List数据
              this.$bus.$emit('updataListData', {isLoading:false,errMessage:'',users:response.data.items});
          },
         error => {
            console.log("请求失败",error.message);
            //请求失败后，更新List数据
            this.$bus.$emit('updataListData', {isLoading:false,errMessage:error.message,users:[]});
         }
          
          );
      }
    },
}
</script>

