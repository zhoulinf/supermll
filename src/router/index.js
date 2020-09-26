import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const Home = ()=>import('../views/home/Home')
const Category = ()=>import('../views/category/Category')
const Shopcar = ()=>import('../views/shopcar/Shopcar')
const Profile = ()=>import('../views/profile/Profile')


const routes = [
 {
   path:'/',
   redirect: '/home'
 },
 {
  path:'/home',
  component:Home
 },
 {
  path:'/category',
  component: Category
 },
 {
  path:'/shopcar',
  component: Shopcar
 },
 {
  path:'/profile',
  component: Profile
 },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
