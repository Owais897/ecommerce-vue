<template>
  <div class="home">
    <Banner />
    <Product />
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import Product from "@/components/Product.vue";

export default {
  name: "Home",
  components: {
    Banner,
    Product,
  },
};
</script>

<style></style>
