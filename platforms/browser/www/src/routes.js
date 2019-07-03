import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home';
import About from './views/About';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },

        {
            path: '*', redirect: {
                name: 'home'
            }
        }

    ]
});

export default router;