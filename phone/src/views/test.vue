<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="@/assets/233logo.png" alt=""></div>
      <div class="swiper-slide"><img src="@/assets/233logo.png" alt=""></div>
      <div class="swiper-slide"><img src="@/assets/233logo.png" alt=""></div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
var mySwiper = new Swiper(".swiper-container", {
  /* ... */
});

//ES

var mySwiper = new Swiper(".swiper-container", {
  /* ... */
});
var mySwiper = new Swiper(".swiper-container", {
  direction: "vertical", // 垂直切换选项
  loop: true, // 循环模式选项

  // 如果需要分页器
  pagination: {
    el: ".swiper-pagination"
  },

  // 如果需要前进后退按钮
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },

  // 如果需要滚动条
  scrollbar: {
    el: ".swiper-scrollbar"
  }
});
export default {
};
</script>

<style scoped>
.swiper-container {
  width: 600px;
  height: 300px;
}
</style>
