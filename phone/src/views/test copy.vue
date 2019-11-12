<template>
  <div class="lunBo">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, i) of lunBo" :key="i">
        <div class="d1">
          <div>
            {{ item.d1 }}
            <span v-text="item.s"></span>
          </div>
          <div>
            <p>
              <span v-text="item.s1"></span>
              <span v-text="item.s2"></span>
            </p>
            <p>
              <span v-text="item.s3"></span>
              <span v-text="item.s4"></span>
            </p>
          </div>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lunBo: [
        {
          d1: "MR.H",
          s: "TEACHER",
          s1: "资历",
          s2: "法学博士，福建某大学法学院讲师",
          s3: "主讲",
          s4: "《经济法基础》《经济法》"
        },
        {
          d1: "MR.H",
          s: "TEACHER",
          s1: "资历",
          s2: "法学博士，福建某大学法学院讲师",
          s3: "主讲",
          s4: "《经济法基础》《经济法》"
        },
        {
          d1: "MR.H",
          s: "TEACHER",
          s1: "资历",
          s2: "法学博士，福建某大学法学院讲师",
          s3: "主讲",
          s4: "《经济法基础》《经济法》"
        },
        {
          d1: "MR.H",
          s: "TEACHER",
          s1: "资历",
          s2: "法学博士，福建某大学法学院讲师",
          s3: "主讲",
          s4: "《经济法基础》《经济法》"
        }
      ]
    };
  }
};
</script>

<style scoped>
.d1 > div:last-child > p {
  width: 60%;
  margin-top: 15px;
  line-height: 1.6rem;
  position: relative;
  min-height: 30px;
}
.d1 > div:last-child > p > span:last-child {
  font-size: 14px;
  margin-left: 10px;
}
.d1 > div:last-child > p > span:first-child {
  background: #131830;
  background-image: linear-gradient(120deg, #fe6037, #df3734);
  border-radius: 0 60px 60px 0;
  line-height: 2rem;
  height: 2rem;
  display: block;
  font-size: 14px;
  width: 30px;
  float: left;
  padding-left: 5px;
  padding-right: 8px;
}
.d1 > div:last-child {
  color: #fff;
}
.d1 > div:first-child > span {
  font-size: 1.4rem;
  color: #fff;
  font-weight: 100;
  opacity: 0.3;
  padding-left: 10px;
}
.d1 > div:first-child {
  font-size: 3rem;
  font-weight: bold;
  color: #fff;
  padding: 20px 0 0 30px;
}
.lunBo {
  width: 90%;
  position: relative;
}
.d1 {
  height: 260px;
  border-radius: 8px;
  background-image: linear-gradient(120deg, #373e5c, #131830);
}
</style>
