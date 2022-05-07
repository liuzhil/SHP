import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../../pages/Home'
import Search from '../../pages/Search'
import Login from '../../pages/Login'
import Register from '../../pages/Register'

export default new VueRouter({
    routes:[
        {
            path:'/home',
            meta:{
                show:true
            },
            component:Home
        },
        {   
            name:'search',
            path:'/search',
            // props:true,
            // props:{},
            // props:($route)=>{
            //     return {}
            // },
            meta:{
                show:true
            },
            component:Search
        },
        {
            path:'/login',
            component:Login
        },
        {
            path:'/register',
            component:Register
        },
        {
            path:'/',
            component:Home
        }
    ]
})