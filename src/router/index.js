import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/customer',
    name: 'customer',
    component: () => import( '../views/Customer.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import( '../views/Contact.vue')
  },
   {
    path: '/type',
    name: 'type',
    component: () => import( '../views/Type.vue')
  },
   {
    path: '/employees',
    name: 'employees',
    component: () => import( '../views/Employees.vue')
  },
   {
    path: '/add_customer',
    name: 'add_customer',
    component: () => import( '../views/Add_customer.vue')
  },
   {
    path: '/add_employees',
    name: 'add_employees',
    component: () => import( '../views/Add_employees.vue')
  },
   {
    path: '/product',
    name: 'product',
    component: () => import( '../views/Product.vue')
  } ,
   {
    path: '/product_api',
    name: 'product_api',
    component: () => import( '../views/Product_api.vue')
  } ,
   {
    path: '/sh_product',
    name: 'sh_product',
    component: () => import( '../views/Sh_product.vue')
  } ,
   {
    path: '/sh_std',
    name: 'sh_std',
    component: () => import( '../views/Sh_std.vue')
  }
   
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
