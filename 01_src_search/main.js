/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-09-22 20:18:30
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-09-22 20:55:59
 */
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
}).$mount('#app')
