import { createRouter, createWebHistory } from 'vue-router'

import DealsListPage from '../views/DealsListPage.vue'
import DealsDetailsPage from '../views/DealsDetailsPage.vue'
import ErrorPage from '../views/ErrorPage.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: DealsListPage,
        },
        {
            path: '/deals-details',
            component: DealsDetailsPage,
            props: (route) => ({ dealsID: route.query.dealsID }),
        },
        {
            path: '/error',
            component: ErrorPage,
        },
    ],
})
