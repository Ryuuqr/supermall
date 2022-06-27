import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Catagory = () => import('../views/catagory/Catagory.vue')
const Profile = () => import('../views/profile/Profile.vue')


Vue.use(VueRouter)

const routes = [
    {
        path: '',
        redirect: '/home'
      },
      {
        path: '/home',
        component: Home
      },
      {
        path: '/cart',
        component: Cart
      },
      {
        path: '/catagory',
        component: Catagory
      },
      {
        path: '/profile',
        component: Profile
      },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router