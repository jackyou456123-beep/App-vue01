import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { requiresAuth: true }
  },
  {
    path: '/customer',
    name: 'customer',
    component: () => import('../views/Customer.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/type',
    name: 'type',
    component: () => import('../views/Type.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/employees',
    name: 'employees',
    component: () => import('../views/Employees.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/add_customer',
    name: 'add_customer',
    component: () => import('../views/Add_customer.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/add_employees',
    name: 'add_employees',
    component: () => import('../views/Add_employees.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('../views/Product.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/product_api',
    name: 'product_api',
    component: () => import('../views/Product_api.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/sh_product',
    name: 'sh_product',
    component: () => import('../views/Sh_product.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/sh_std',
    name: 'sh_std',
    component: () => import('../views/sh_std.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/customer_crud',
    name: 'customer_crud',
    component: () => import('../views/Customer_crud.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/employees_crud',
    name: 'employees_crud',
    component: () => import('../views/Employee_crud.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/type_crud',
    name: 'type_crud',
    component: () => import('../views/Type_crud.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/employee_crud2',
    name: 'employee_crud2',
    component: () => import('../views/Employee_crud2.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/product_crud',
    name: 'product_crud',
    component: () => import('../views/product_crud.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },

  /* 🔥 แก้ไขตรงนี้ */
  {
    path: '/product-detail/:id',
    name: 'productDetail',
    component: () => import('../views/ProductDetail.vue'),
    meta: { requiresAuth: true }
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

/* ✅ ROUTE GUARD */
router.beforeEach((to, from, next) => {

  const isLoggedIn = localStorage.getItem("adminLogin")

  if (to.meta && to.meta.requiresAuth && !isLoggedIn) {
    next('/login')
  } 
  else if (to.path === '/login' && isLoggedIn) {
    next('/')
  }
  else {
    next()
  }
})

export default router