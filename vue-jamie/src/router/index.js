
import Vue from 'vue';
import VueRouter from 'vue-router';
import AskView from '../views/AskView.vue'
import NewsView from '../views/NewsView.vue'
import JobsView from '../views/JobsView.vue'

Vue.use(VueRouter);

export const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/news',
        },
        {
            path: '/ask',
            component: AskView,
        },
        {
            path: '/news',
            component: NewsView,
        },
        {
            path: '/jobs',
            component: JobsView,
        }
    ]
});