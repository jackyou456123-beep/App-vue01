<template>
  <div>

  <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
    <div class="container">

      <a class="navbar-brand" href="/">ร้าน DERNSAY SHOP</a>

      <button class="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarSupportedContent">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">

        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

          <li class="nav-item">
            <a class="nav-link active" href="/">Home</a>
          </li>

          
          <li class="nav-item">
            <a class="nav-link" href="/Customer">Customer</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="/Customer_crud">Customer curd</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="/Contact">Contact</a>   
          </li>

          <li class="nav-item">
            <a class="nav-link" href="/Type">Type</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="/Employees">Employees</a>
          </li>
          

          <li class="nav-item">
            <a class="nav-link" href="/Product_api">Product_api</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="/Product">Product</a>
          </li>

          <!-- Dropdown -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" 
               href="#" 
               role="button" 
               data-bs-toggle="dropdown">
              Dropdown
            </a>

            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/Employees_crud">Employees_curd</a></li>
              <li><a class="dropdown-item" href="/employee_crud2">Employees_curd2</a></li>
              <li><a class="dropdown-item" href="/product">Product</a></li>
              <li><a class="dropdown-item" href="/product_api">Product_api2</a></li>
              <li><a class="dropdown-item" href="/product_crud">product_crud</a></li>
              <li><a class="dropdown-item" href="/sh_std">Sh_std</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="/sh_product">Show Product</a></li>
              <li><a class="dropdown-item" href="/Type_crud">Type_crud</a></li>
            </ul>
          </li>
            
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>

        </ul>

       <!-- ✅ ส่วนแสดงสถานะ Login -->
        <div class="d-flex align-items-center">

          <!-- แสดงชื่อผู้ใช้ -->
          <span v-if="isLoggedIn" class="me-3">
            👤 <span class="badge bg-success">{{ userName }}</span>
          </span>

          <!-- ปุ่ม Login (ถ้ายังไม่ Login) -->
          <router-link
            v-if="!isLoggedIn"
            to="/login"
            class="btn btn-warning"
          >
            Login
          </router-link>

          <!-- ปุ่ม Logout (ถ้า Login แล้ว) -->
          <button
            v-if="isLoggedIn"
            @click="logout"
            class="btn btn-danger"
          >
            Logout
          </button>

        </div>
    </div>
  </div>
</nav>

  <router-view/>

  </div>
</template>

<script>
export default {
  data() {
    return {
      // ✅ ตัวแปรเก็บสถานะ Login
      isLoggedIn: false,

      // ✅ ตัวแปรเก็บชื่อผู้ใช้
      userName: ""
    }
  },

  // ✅ ทำงานทันทีเมื่อโหลด Component
  mounted() {
    this.checkLogin()
  },

  methods: {

    // ✅ ตรวจสอบสถานะ Login จาก localStorage
    checkLogin() {

      // ถ้ามี adminLogin → ถือว่า Login แล้ว
      this.isLoggedIn = !!localStorage.getItem("adminLogin")

      if (this.isLoggedIn) {

        // ดึงข้อมูล user
        const user = JSON.parse(localStorage.getItem("user"))

        // แสดงชื่อ ถ้าไม่มีใช้ "Admin"
        this.userName = user?.name || "Admin"
      }
    },

    // ✅ Logout
    logout() {

      // ลบข้อมูล Login
      localStorage.removeItem("adminLogin")
      localStorage.removeItem("user")

      // รีเซ็ตค่า
      this.isLoggedIn = false
      this.userName = ""

      // ไปหน้า Login
      this.$router.push("/login")
    }
  },

  // ✅ ถ้าเปลี่ยนหน้า → เช็ค Login ใหม่
  watch: {
    '$route'() {
      this.checkLogin()
    }
  }
}
</script>
