<template>
  <div class="center">
    <vs-navbar center-collapsed v-model="active" fixed>
      <template #left>
        <img class="brand" src="../assets/logo.png" alt="" />
      </template>
      <vs-navbar-item id="home" :active="active == 'home'">
        <router-link to="/">Home</router-link>
      </vs-navbar-item>
      <vs-navbar-item id="about" :active="active == 'about'">
        <router-link to="/about">About</router-link>
      </vs-navbar-item>
      <template #right>
        <vs-button flat>Login</vs-button>
        <vs-button>Get Started</vs-button>
      </template>
    </vs-navbar>
    <div class="square">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      active: "home",
    };
  },
};
</script>

<style>
.center .vs-navbar {
  min-height: 60px !important;
}
.center .vs-navbar__item {
  padding: 0;
}
.center .vs-navbar__item a {
  color: #2c3e50;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  padding: 15px;
}
.brand {
  width: auto;
  height: 40px;
}
.square {
  margin-top: 70px;
}
</style>
