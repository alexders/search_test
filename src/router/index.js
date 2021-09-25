/*
 * @Descripttion: 文件用于创建应用的路由器
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-09-25 16:12:07
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-09-25 20:27:33
 */

import News from "../pages/News";
import Message from "../pages/Message";
import  VueRouter  from "vue-router";
import About  from "../pages/About";
import  Home  from "../pages/Home";
import  Detail  from "../pages/Detail";
//创建一个路由器
export default new VueRouter({
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children:[
            {
                path:'news',
                component:News
             },
             {
                path:'message',
                component:Message,
                children: [
                    {  
                    name:'xiangqing',
                    path:'detail' ,
                    component: Detail
                    }
            ]
             }
        ]
        }
    ]
})

