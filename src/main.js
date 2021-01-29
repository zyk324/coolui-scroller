import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuescroll from 'vuescroll'
import store from './vuex'
import './assets/scss/app.scss'
import './assets/scss/color.scss'
import './assets/scss/fonts.scss'
import './assets/scss/mp.scss'
import './assets/scss/base.scss'
import './assets/scss/animate.scss'
import './assets/scss/ui.scss'
import 'animate.css'
import atui from 'at-ui'
import 'at-ui-style'
// import instance from '@/api/config.js';
Vue.config.productionTip = false
Vue.use(vuescroll)
Vue.use(atui)

new Vue({
	render: h => h(App),
	router,
	store
}).$mount('#app')