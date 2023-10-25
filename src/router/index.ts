import { createRouter, createWebHistory } from 'vue-router'
import DealsListPage from '../views/DealsListPage.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: DealsListPage,
        },
        {
            path: '/teste',
            component: DealsListPage,
        },
    ],
})
