import { createRouter, createWebHistory  } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'



import Home from './components/Home-comp'
import My from './components/Myprofile-comp'
import Reg from './components/Reg-comp'

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
]
});
createApp(App)
.use(router)
.mount('#app')

