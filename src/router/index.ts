import { createRouter, createWebHistory } from 'vue-router'
import DealsListPage from '../views/DealsListPage.vue'
import ErrorPage from '../views/ErrorPage.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: DealsListPage,
        },
        {
            path: '/error',
            component: ErrorPage,
        },
    ],
})
