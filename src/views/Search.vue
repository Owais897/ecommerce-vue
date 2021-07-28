<template>
  <div class="home">
    <Product :searchTerm="searchTerm" />
  </div>
</template>

<script>
import Product from "@/components/Product.vue";

export default {
  name: "Search",
  components: {
    Product,
  },
  data() {
    return {
      searchTerm: "",
    };
  },
  created() {
    const { searchTerm } = this.$route.params;
    if (searchTerm) {
      this.searchTerm = searchTerm;
    }
  },
};
</script>

<style></style>
