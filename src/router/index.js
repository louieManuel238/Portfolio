import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import WorkPage from '../pages/WorkPage.vue';
import ProjectPage from '../pages/ProjectPage.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        // {
        //     path: '/work/:id',
        //     name: 'work',
        //     component: WorkPage
        // },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectPage
        }
    ],
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
          } else {
            return { top: 0 }
          }
      }
})

export default router;