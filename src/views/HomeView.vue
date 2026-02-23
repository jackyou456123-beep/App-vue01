<template>
  <div class="container mt-0">

    <!-- Hero -->
    <div class="bg-light p-5 mb-4 shadow-sm rounded">
      <div class="container text-center">
        <h1 class="fw-bold">ยินดีต้อนรับสู่ร้านค้า DERNSAY SHOP</h1>
        <p class="text-muted">สินค้าคุณภาพ ราคาพิเศษ</p>
        <router-link to="/sh_product" class="btn btn-primary">
          เลือกซื้อสินค้า
        </router-link>
      </div>
    </div>

    <!-- Loading -->
    <div v-if="loading" class="text-center my-5">
      <div class="spinner-border text-primary"></div>
      <p class="mt-3">กำลังโหลดสินค้า...</p>
    </div>

    <!-- Error -->
    <div v-else-if="error" class="alert alert-danger text-center">
      {{ error }}
    </div>

    <!-- Product -->
    <div v-else class="mb-5">
      <h3 class="mb-4 fw-bold">สินค้าแนะนำ</h3>

      <div class="row">
        <div 
          class="col-md-3 mb-4" 
          v-for="product in Alldata" 
          :key="product.product_id"
        >
          <div class="card h-100 shadow-sm">

            <img 
              :src="getImage(product.image)" 
              class="card-img-top"
              style="height: 200px; object-fit: cover;"
            />

            <div class="card-body">
              <h6 class="card-title">
                {{ product.product_name }}
              </h6>

              <p class="text-primary fw-bold">
                {{ product.price }} บาท
              </p>
            </div>

            <div class="card-footer bg-white border-0">

              <!-- ปุ่มดูรายละเอียด (แก้ไขแล้ว) -->
              <router-link 
                class="btn btn-sm btn-outline-primary w-100 mb-2"
                :to="`/product-detail/${product.product_id}`"
              >
                ดูรายละเอียด
              </router-link>

              <button class="btn btn-sm btn-primary w-100">
                เพิ่มลงตะกร้า
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="text-center p-3 rounded" style="background-color: #afbfff;">
      <p class="mb-0">
        © 2026 ร้านค้าออนไลน์. สงวนลิขสิทธิ์.
      </p>
    </footer>

  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  name: "Home",
  setup() {

    const Alldata = ref([]);
    const loading = ref(true);
    const error = ref(null);

    const getImage = (image) => {
      if (!image) {
        return "https://via.placeholder.com/300x200?text=No+Image";
      }
      return `http://localhost/App-vue01/php_api/uploads/${image}`;
    };

    const fetchData = async () => {
      try {

        const response = await fetch(
          "http://localhost/App-vue01/php_api/api_product.php"
        );

        const data = await response.json();

        if (data.success) {
          // แสดงแค่ 4 ตัวแรก
          Alldata.value = data.data.slice(0, 4);
        } else {
          error.value = "โหลดข้อมูลไม่สำเร็จ";
        }

      } catch (err) {
        error.value = err.message;
      } finally {
        loading.value = false;
      }
    };

    onMounted(() => {
      fetchData();
    });

    return {
      Alldata,
      loading,
      error,
      getImage
    };
  }
};
</script>