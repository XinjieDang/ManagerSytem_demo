import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
//子路由的设置
//路由和子路由
//选择文件状态 +++
//检出文件，
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  
]

const router = new VueRouter({
  routes
})

export default router
