import Axios from 'axios'
// import router from '../router'
// import store from '../store/index'

// if (window.localStorage.getItem('token')) {
//   Axios.defaults.headers['Authorization'] = window.localStorage.getItem('token')
// }
Axios.defaults.headers['Content-Type'] = 'application/json'
// Axios.defaults.withCredentials = true
// Axios.defaults.headers['type'] = 'pc'
let instance = Axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? './md/'
      : './md/'
})

// instance.interceptors.request.use(
//   function (config) {
//     return config
//   },
//   function (error) {
//     return Promise.reject(error)
//   }
// )
// instance.interceptors.response.use(
//   (response) => {
//     return response
//   },
//   (error) => {
//     if (error.response) {
//       switch (error.response.status) {
//         case 401:
//           store.dispatch('logOut')
//           router.replace({
//             path: '/login/index/wechat'
//           })
//           break
//         case 402:
//           store
//             .dispatch('toRefresh')
//             .then((res) => {
//               window.location.reload()
//             })
//             .catch((error) => {
//               console.log(error)
//             })
//           break
//       }
//     }
//     return Promise.reject(error.response)
//   }
// )
window.Axios = Axios

export default instance
