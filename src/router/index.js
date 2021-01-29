import Vue from 'vue'
import Router from 'vue-router'
// import store from '../store/index'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// import instance from '@/api/config.js';
// import routers from '/md/router.json';
let routers = require('../../public/md/router.json').nav
// console.log(routers);
Vue.use(Router)
NProgress.configure({
	easing: 'ease',
	speed: 1000
})

const router = new Router({
	mode: 'hash',
	routes: routers,
})
router.beforeEach((to, from, next) => {
	NProgress.start()
	if (to.fullPath === '/') {
		next({
			path: '/index/index'
		})
	} else {
		next()
	}
})

router.afterEach(() => {
	NProgress.done()
})

export default router