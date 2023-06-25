import { createRouter, createWebHistory  } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'

import Home from './components/Home-comp'
import My from './components/Myprofile-comp'
import Reg from './components/Reg-comp'
import Areg from './components/Areg-comp'
import Err from './components/error-comp'
import About from './components/About-comp'
import Cart from './components/Card-comp'
import CartEl from './components/CardEl-comp'
import Addcard from './components/Addcard-comp'

const router = createRouter( { 
    history: createWebHistory(),   
    routes:[{
        path:'/',
        name:'Home',
        component: Home
    },
   {
        path:'/my',
        name:'my',
        component: My
    },
    {
        path:'/reg',
        name:'reg',
        component: Reg
    },
    {
        path:'/areg',
        name:'areg',
        component: Areg
    },
    {
        path:'/err',
        name:'err',
        component: Err
    },
    {
        path:'/about',
        name:'About',
        component: About
    },
    {
        path:'/cart',
        name:'Cart',
        component: Cart
    },
    {
        path:'/cartEl',
        name:'CartEl',
        component: CartEl
    },
    {
        path:'/Addcard',
        name:'Addcard',
        component: Addcard
    },
    
]
});
createApp(App)
.use(router)
.mount('#app')




