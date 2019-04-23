import Vue from 'vue'
import Router from 'vue-router'
import mainRouters from './main.js';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [ ...mainRouters]
});


router.beforeEach((to, from, next) => {
    if (to.meta.title) {
      document.title = to.meta.title
    }
    next()
})
export default router;
