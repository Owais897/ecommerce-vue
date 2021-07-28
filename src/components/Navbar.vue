<template>
  <div class="nav-container">
    <router-link to="/">
      <div class="logo"></div>
    </router-link>
    <a-input-search
      placeholder="input search text"
      enter-button
      style="width: 250px"
      @search="onSearch"
      v-model="searchTerm"
    />
    <router-link to="/cart">
      <a-badge :count="allProductLength">
        <a href="#" class="head-example" />
        <a-icon
          type="shopping-cart"
          :style="{ fontSize: '20px', marginTop: '3px' }"
        />
      </a-badge>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Navbar",
  data() {
    return {
      searchTerm: "",
    };
  },
  computed: {
    ...mapGetters(["allProductLength"]),
  },
  methods: {
    onSearch(searchTerm) {
      this.searchTerm = "";
      this.$router.push({ name: "Search", params: { searchTerm } });
    },
  },
};
</script>

<style>
.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-container .logo {
  width: 120px;
  height: 31px;
  background: url("../assets/logo.png") no-repeat center;
  background-size: contain;
  margin: 16px 28px 16px 0;
  float: left;
}
</style>
