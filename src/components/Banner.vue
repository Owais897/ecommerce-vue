<template>
  <div class="banner">
    <a-carousel autoplay arrows>
      <div
        slot="prevArrow"
        class="custom-slick-arrow"
        style="left: 10px; z-index: 10"
      >
        <a-icon type="left-circle" />
      </div>
      <div slot="nextArrow" class="custom-slick-arrow" style="right: 10px">
        <a-icon type="right-circle" />
      </div>
      <div class="carousel-wrapper">
        <img
          src="https://themepure.net/template/vue/vue/img/bg/bg.jpg"
          width="100%"
          alt=""
        />
        <div>
          <a-row type="flex" justify="end" style="margin-right: 30px">
            <a-col :span="14">
              <h2>Furniture</h2>
              <p class="smallfont">
                The vital part of every home is furniture, and it’s the first
                thing to be considered while planning a home decor. Your home
                furniture has to be presentable and classy, as it depicts your
                values and mood. It also represents the first impression of your
                home, and we are sure that you want it to look luxurious and
                stylish. Always choose to buy furniture online in Pakistan from
                reputed online furniture and decor store.
              </p>
            </a-col>
          </a-row>
        </div>
      </div>
      <div class="carousel-wrapper">
        <img src="../assets/images/banner/c1.jpeg" width="100%" alt="" />
      </div>

      <div class="carousel-wrapper">
        <img src="../assets/images/banner/c2.jpeg" width="100%" alt="" />
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

.ant-carousel >>> .custom-slick-arrow {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: rgb(2, 2, 2);
  /* background-color: rgba(31, 45, 61, 0.11); */
  opacity: 0.3;
}
.ant-carousel >>> .custom-slick-arrow:before {
  display: none;
}
.ant-carousel >>> .custom-slick-arrow:hover {
  color: rgb(2, 2, 2);
  opacity: 0.7;
}

@media (max-width: 1000px) {
  .ant-carousel >>> .slick-slide {
    text-align: center;
    height: 350px;
    overflow: hidden;
  }
  .carousel-wrapper > div {
    position: absolute;
    top: 100px;
    left: 120px;
  }
  .smallfont {
    font-size: 12px;
  }
}
@media (max-width: 700px) {
  .ant-carousel >>> .slick-slide {
    text-align: center;
    height: 250px;
    overflow: hidden;
  }
  .carousel-wrapper > div {
    position: absolute;
    top: 20px;
    left: 120px;
  }
  .smallfont {
    font-size: 10px;
  }
}
@media (max-width: 550px) {
  .smallfont {
    font-size: 7px;
  }
}
@media (max-width: 450px) {
  .ant-carousel >>> .slick-slide {
    text-align: center;
    height: 250px;
    overflow: hidden;
  }
  .carousel-wrapper > div {
    position: absolute;
    top: 40px;
    left: 80px;
  }
  .smallfont {
    font-size: 7px;
  }
}
@media (max-width: 360px) {
  .ant-carousel >>> .slick-slide {
    text-align: center;
    height: 150px;
    overflow: hidden;
  }
  .carousel-wrapper > div {
    position: absolute;
    top: 10px;
    left: 60px;
  }
  .smallfont {
    font-size: 5px;
  }
}
</style>
