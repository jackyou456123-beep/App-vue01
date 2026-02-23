<template>
  <div class="container my-5">
    <!-- หัวข้อหลัก -->
    <h2 class="text-center mb-4">รายการสินค้า</h2>

    <!-- Loading -->
    <div v-if="loading" class="text-center my-4">
      <div class="spinner-border text-primary"></div>
      <p class="mt-2">กำลังโหลดข้อมูล...</p>
    </div>

    <!-- Error -->
    <div v-else-if="error" class="alert alert-danger text-center">
      {{ error }}
    </div>

    <!-- ใช้ Bootstrap แบ่ง row -->
    <div class="row" v-else>
      <!-- วน loop แสดงสินค้าแต่ละตัว ด้วย v-for -->
      <div class="col-md-3" v-for="data in Alldata" :key="data.product_id">

        <!-- card แสดงข้อมูลสินค้า -->
        <div class="card shadow-sm mb-4">
          
          <!-- แสดงรูปสินค้า -->
          <img
            :src="'http://localhost/App-vue01/php_api/uploads/' + data.image"
            width="100%"
            height="300"
            class="card-img-top"
            style="object-fit: cover;"
            :alt="data.product_name"
          >

          <!-- เนื้อหาใน card -->
          <div class="card-body text-center">
            <h5 class="card-title">{{ data.product_name }}</h5>
            <p class="card-text text-primary fw-bold">
              {{ data.price }} บาท
            </p>

            <!-- 🔥 ปุ่มดูรายละเอียด -->
            <router-link
              class="btn btn-outline-primary btn-sm w-100 mb-2"
              :to="`/product-detail/${data.product_id}`"
            >
              ดูรายละเอียด
            </router-link>

            <!-- ปุ่มสั่งซื้อ -->
            <button class="btn btn-primary btn-sm w-100">
              สั่งซื้อ
            </button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  name: "DataList",
  setup() {
    const Alldata = ref([]);
    const loading = ref(true);
    const error = ref(null);

    // ฟังก์ชันดึงข้อมูลจาก API
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost/App-vue01/php_api/show_product.php");
        if (!response.ok) {
          throw new Error("ไม่สามารถดึงข้อมูลได้");
        }

        const result = await response.json();
        Alldata.value = result;

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
      error
    };
  }
};
</script>