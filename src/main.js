import { createRouter, createWebHistory  } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'



import Home from './components/Home-comp'
import My from './components/Myprofile-comp'
import Game from './components/Gamewin-comp'

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
        path:'/game',
        name:'game',
        component: Game
    },
]
});
createApp(App)
.use(router)
.mount('#app')

