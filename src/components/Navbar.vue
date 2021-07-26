<template>
  <div class="nav-container">
    <div class="logo"></div>
    <a-menu
      theme="dark"
      mode="horizontal"
      :default-selected-keys="['1']"
      :style="{ lineHeight: '64px' }"
    >
      <a-menu-item key="1">
        <router-link to="/">Home</router-link>
      </a-menu-item>
      <a-menu-item key="2">
        <router-link to="/about">About</router-link>
      </a-menu-item>
      <a-menu-item key="3" :style="{ float: 'right' }">
        <router-link to="/cart">
          <a-badge :count="allProductLength">
            <a href="#" class="head-example" />
            <a-icon
              type="shopping-cart"
              :style="{ fontSize: '20px', marginTop: '3px' }"
            />
          </a-badge>
        </router-link>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Navbar",
  computed: {
    ...mapGetters(["allProductLength"]),
  },
};
</script>

<style>
.nav-container .logo {
  width: 120px;
  height: 31px;
  background: url("../assets/logo.png") no-repeat center;
  background-size: contain;
  margin: 16px 28px 16px 0;
  float: left;
}
</style>
