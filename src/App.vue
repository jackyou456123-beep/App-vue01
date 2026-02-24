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

          
          <li class="nav-item dropdown">
  <a 
    class="nav-link dropdown-toggle" 
    href="#" 
    id="productDropdown" 
    role="button" 
    data-bs-toggle="dropdown" 
    aria-expanded="false"
  >
    Customer
  </a>
  <ul class="dropdown-menu">
    <li>
      <router-link class="dropdown-item" to="/Customer">
        Customer
      </router-link>
    </li>
    <li>
      <router-link class="dropdown-item" to="/Customer_crud">
        Customer_crud
      </router-link>
    </li>
    
  </ul>
</li>

          <li class="nav-item">
            <a class="nav-link" href="/Contact">Contact</a>   
          </li>


          <li class="nav-item dropdown">
  <a 
    class="nav-link dropdown-toggle" 
    href="#" 
    id="productDropdown" 
    role="button" 
    data-bs-toggle="dropdown" 
    aria-expanded="false"
  >
    Type
  </a>
  <ul class="dropdown-menu">
    <li>
      <router-link class="dropdown-item" to="/Type">
        Type
      </router-link>
    </li>
    <li>
      <router-link class="dropdown-item" to="/Type_crud">
        Type_crud
      </router-link>
    </li>
    
  </ul>
</li>

          <li class="nav-item dropdown">
  <a 
    class="nav-link dropdown-toggle" 
    href="#" 
    id="productDropdown" 
    role="button" 
    data-bs-toggle="dropdown" 
    aria-expanded="false"
  >
    Employees
  </a>
  <ul class="dropdown-menu">
    <li>
      <router-link class="dropdown-item" to="/Employees">
        Employees
      </router-link>
    </li>
    <li>
      <router-link class="dropdown-item" to="/Employees_crud">
        Employees_crud
      </router-link>
    </li>
    <li>
      <router-link class="dropdown-item" to="/employee_crud2">
        Employees_crud2
      </router-link>
    </li>
  </ul>
</li>
          

          <li class="nav-item dropdown">
  <a 
    class="nav-link dropdown-toggle" 
    href="#" 
    id="productDropdown" 
    role="button" 
    data-bs-toggle="dropdown" 
    aria-expanded="false"
  >
    Product
  </a>
  <ul class="dropdown-menu">
    <li>
      <router-link class="dropdown-item" to="/product">
        Product
      </router-link>
    </li>
    <li>
      <router-link class="dropdown-item" to="/product_api">
        Product_api
      </router-link>
    </li>
    <li>
      <router-link class="dropdown-item" to="/product_crud">
        Product_crud
      </router-link>
    </li>
  </ul>
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
              <li><a class="dropdown-item" href="/sh_std">Sh_student</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="/sh_product">Show Product</a></li>
            </ul>
          </li>
            
          <li class="nav-item">
            <a class="nav-link disabled"></a>
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
