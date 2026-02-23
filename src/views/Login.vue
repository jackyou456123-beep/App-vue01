<template>
  <div class="login-wrapper">
    <div class="login-box">

      <div class="logo">
        <i class="bi bi-shield-lock-fill"></i>
      </div>

      <h3>Admin Login</h3>
      <p class="subtitle">User : admin Password : 123</p>

      <!-- Username -->
      <div class="input-group-custom">
        <i class="bi bi-person"></i>
        <input
          v-model="username"
          type="text"
          placeholder="Username"
          @keyup.enter="login"
        />
      </div>

      <!-- Password -->
      <div class="input-group-custom">
        <i class="bi bi-lock"></i>
        <input
          v-model="password"
          :type="showPassword ? 'text' : 'password'"
          placeholder="Password"
          @keyup.enter="login"
        />
        <i
          class="bi"
          :class="showPassword ? 'bi-eye-slash' : 'bi-eye'"
          @click="showPassword = !showPassword"
        ></i>
      </div>

      <button @click="login" :disabled="loading">
        <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
        LOGIN
      </button>

      <div v-if="error" class="error-box">
        {{ error }}
      </div>

    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      username: "",
      password: "",
      error: "",
      loading: false,
      showPassword: false,
    };
  },

  methods: {
    async login() {
      this.error = "";

      if (!this.username || !this.password) {
        this.error = "กรุณากรอกข้อมูลให้ครบ";
        return;
      }

      try {
        this.loading = true;

        const res = await axios.post(
          "http://localhost/app-vue01/php_api/login.php",
          {
            username: this.username,
            password: this.password,
          }
        );

        if (res.data.success) {
          localStorage.setItem("adminLogin", "true");
          localStorage.setItem("user", JSON.stringify(res.data.user));
          this.$router.push("/product_crud");
        } else {
          this.error = res.data.message;
        }

      } catch (err) {
        this.error = "เชื่อมต่อ Server ไม่ได้";
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>


<style scoped>
.login-wrapper {
  height: 100vh;
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Segoe UI', sans-serif;
}

.login-box {
  width: 380px;
  padding: 45px;
  border-radius: 20px;
  background: #1c1f2b;
  box-shadow: 0 0 40px rgba(0, 255, 255, 0.2);
  text-align: center;
  color: white;
  transition: 0.3s;
}

.login-box:hover {
  box-shadow: 0 0 60px rgba(0, 255, 255, 0.4);
}

.logo {
  font-size: 45px;
  margin-bottom: 15px;
  color: #00f5ff;
}

.subtitle {
  font-size: 13px;
  opacity: 0.6;
  margin-bottom: 30px;
}

.input-group-custom {
  position: relative;
  margin-bottom: 20px;
}

.input-group-custom input {
  width: 100%;
  padding: 12px 40px;
  border-radius: 10px;
  border: none;
  outline: none;
  background: #2a2f45;
  color: white;
  transition: 0.3s;
}

.input-group-custom input:focus {
  box-shadow: 0 0 10px #00f5ff;
}

.input-group-custom i {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #aaa;
}

.input-group-custom i:first-child {
  left: 12px;
}

.input-group-custom i:last-child {
  right: 12px;
  cursor: pointer;
}

button {
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  border: none;
  background: #00f5ff;
  color: black;
  font-weight: bold;
  transition: 0.3s;
}

button:hover {
  background: white;
  transform: translateY(-3px);
}

.error-box {
  margin-top: 15px;
  padding: 10px;
  background: #ff4d4d;
  border-radius: 8px;
}
</style>

















