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
    meta: { requiresAuth: true } // เช็คตัวพิมพ์ใหญ่เล็กให้ตรงไฟล์จริง
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
    component: () => import('../views/Login.vue'),
   
  },
  {
    path: '/productDetail',
    name: 'productDetail',
    component: () => import('../views/ProductDetail.vue')
   
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

/* ✅ ROUTE GUARD */
router.beforeEach((to, from, next) => {

  const isLoggedIn = localStorage.getItem("adminLogin")

  // ถ้าหน้านั้นต้อง login แต่ยังไม่ login
  if (to.meta.requiresAuth && !isLoggedIn) {
    next('/login')
  } 
  // ถ้า login แล้วแต่พยายามเข้าหน้า login
  else if (to.path === '/login' && isLoggedIn) {
    next('/')   // หรือ dashboard
  }
  else {
    next()
  }
})


export default router
