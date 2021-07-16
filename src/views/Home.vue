<template>
  <div class="home">
    <div class="banner">
      <vs-row>
        <vs-col class="wrapper" vs-type="flex" vs-justify="center" vs-align="center" w="6">
          <h2>New Brand</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo in
            dolores sunt, quia consectetur necessitatibus laboriosam earum
            perferendis corporis voluptatibus, delectus nostrum natus veritatis
            maxime temporibus illo pariatur, labore reiciendis ex ipsam nesciunt
            aperiam. Quod omnis tempora tempore quidem, at officia cumque a
            ratione quibusdam.
          </p>
          <vs-button danger square size="xl" style="display: inline-block">
            New Brand
          </vs-button>
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.banner {
  background: url('../assets/banner.jpg') no-repeat center;
  height: 500px;
  width: 100%;
  background-size: cover;
  margin-top: -35px;
}
.wrapper {
  margin: 142px 40px;
}
</style>