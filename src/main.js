/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-09-22 20:18:30
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-09-25 17:05:23
 */
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import  router  from './router/index.js'

Vue.config.productionTip = false
//应用插件
Vue.use(VueRouter);
new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
