<template>
  <div>
    <!-- 轮播 -->
    <div class="lunBo">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, index) of images" :key="index">
          <img style="width: 110%;border-radius:5px;" :src="item.src" alt />
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { src: require("../assets/lunBo1.jpg") },
        { src: require("../assets/lunBo2.jpg") },
        { src: require("../assets/lunBo3.jpg") },
        { src: require("../assets/lunBo4.jpg") }
      ]
    };
  }
};
</script>

<style scoped>
.lunBo {
  width: 97%;
  margin: 0 auto;
}
</style>