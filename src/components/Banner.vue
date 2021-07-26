<template>
  <div class="banner">
    <a-carousel autoplay>
      <div class="carousel-wrapper">
        <img src="../assets/images/banner/banner.jpg" width="100%" alt="" />
        <div>
          <a-row type="flex" justify="start">
            <a-col :span="12">
              <h2>New Brand One</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quaerat, id praesentium! Possimus quod qui voluptate dolore
                suscipit et nostrum dicta vero dolores minus vel ullam obcaecati
                quos dolor eos assumenda nesciunt iste enim, aut nobis
                perferendis inventore corporis illum? Pariatur, obcaecati nam.
                Officiis doloremque atque illo impedit odio cumque perspiciatis.
              </p>
            </a-col>
          </a-row>
        </div>
      </div>
      <div>
        <div class="carousel-wrapper">
          <img src="../assets/images/banner/banner2.jpg" width="100%" alt="" />
          <div>
            <a-row type="flex" justify="start">
              <a-col :span="12">
                <h2>New Brand two</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quaerat, id praesentium! Possimus quod qui voluptate dolore
                  suscipit et nostrum dicta vero dolores minus vel ullam
                  obcaecati quos dolor eos assumenda nesciunt iste enim, aut
                  nobis perferendis inventore corporis illum? Pariatur,
                  obcaecati nam. Officiis doloremque atque illo impedit odio
                  cumque perspiciatis.
                </p>
              </a-col>
            </a-row>
          </div>
        </div>
      </div>
    </a-carousel>
  </div>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style scoped>
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 500px;
  background: #364d79;
  overflow: hidden;
}
.ant-carousel >>> .slick-slide h3 {
  color: #000;
}
.ant-carousel >>> .slick-dots li button {
  background: #000;
}
.ant-carousel >>> .slick-dots li.slick-active button {
  background: #1890ff !important;
}
.carousel-wrapper {
  position: relative;
}
.carousel-wrapper > div {
  position: absolute;
  top: 160px;
  left: 120px;
}
</style>
