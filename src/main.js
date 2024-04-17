import './assets/main.css'
import {createRouter, createWebHistory} from 'vue-router'
import {createApp} from 'vue'
import {store} from '@/store/index.js'
import App from './App.vue'
import GetStartedView from '@/components/Pages/GetStartedView.vue'
import AchievementsView from '@/components/Pages/AchievementsView.vue'
import MessagesView from '@/components/Pages/MessagesView.vue'
import TrainingView from '@/components/Pages/TrainingView.vue'
import HomeView from '@/components/Pages/HomeView.vue'
import LogOutView from '@/components/Pages/LogOutView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'Home',
            path: '/',
            component: HomeView,
        },
        {
            name: 'GetStarted',
            path: '/started',
            component: GetStartedView
        },
        {
            name: 'Achievements',
            path: '/achievements',
            component: AchievementsView
        },
        {
            name: 'Messages',
            path: '/messages',
            component: MessagesView
        },
        {
            name: 'Training',
            path: '/training',
            component: TrainingView
        }
        , {
            name: 'Logout',
            path: '/logout',
            component: LogOutView
        },
    ]
})

window.store = store

createApp(App).use(store).use(router).mount('#app')

