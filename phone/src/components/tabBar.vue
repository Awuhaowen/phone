<template>
  <div style="margin-top:60px;">
    <van-tabbar route v-model="active">
      <van-tabbar-item replace to="/">
        <span>首页</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? shouYe.active : shouYe.normal"
        />
      </van-tabbar-item>
      <van-tabbar-item to="/xuanKe">
        <span>选课</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? xuanKe.active : xuanKe.normal"
        />
      </van-tabbar-item>
      <van-tabbar-item replace to="/TiKu">
        <span>题库</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? tiKu.active : tiKu.normal"
        />
      </van-tabbar-item>
      <van-tabbar-item replace to="/My">
        <span>我的</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? woDe.active : woDe.normal"
        />
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      shouYe: {
        normal: require("../assets/ShouYe.png"),
        active: require("../assets/shouYeActive.png")
      },
      xuanKe: {
        normal: require("../assets/liBao.png"),
        active: require("../assets/liBaoActive.png")
      },
      tiKu: {
        normal: require("../assets/hongBao2.png"),
        active: require("../assets/hongBaoActive.png")
      },
      woDe: {
        normal: require("../assets/woDe.png"),
        active: require("../assets/woDeActive.png")
      }
    };
  }
};
</script>

<style scoped></style>
