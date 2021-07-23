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
      <a-menu-item key="3">
        <router-link to="/cart">View cart</router-link>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
export default {
  name: "Navbar",
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
