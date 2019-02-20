
import Vue from 'vue';
import VueRouter from 'vue-router';
import AskView from '../views/AskView.vue'
import NewsView from '../views/NewsView.vue'
import JobsView from '../views/JobsView.vue'
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',// url 에 붙는 # 삭제
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
        },
        {
            path: '/user/:id',
            component: UserView,
        },
        {
            path: '/item/:id',
            component: ItemView,
        }
    ]
});