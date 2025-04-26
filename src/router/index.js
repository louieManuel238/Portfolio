import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import WorkPage from '../pages/WorkPage.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/work/:id',
            name: 'work',
            component: WorkPage
        }
    ]
})

export default router;