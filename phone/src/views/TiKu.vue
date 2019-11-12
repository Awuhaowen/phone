<template>
  <div>
    <my-header></my-header>
    <lun-bo></lun-bo>

    <div style="width:97%;margin:0 auto">
      <div class="list" v-for="(item, i) of list" :key="i">
        <div class="listL">
          <div>
            <h4>{{item.h}}</h4>
            <p>{{item.p}}</p>
          </div>
          <img :src="item.pic" alt />
        </div>
        <div class="listR">
          <div>
            <h4>{{item.h1}}</h4>
            <p>{{item.p1}}</p>
          </div>
          <img :src="item.pic1" alt />
        </div>
      </div>
      <div class="title">
        <h3>我的题库</h3>
        <p>昨日题量 0</p>
      </div>
      <div class="TB">
        <div v-for="(item, i) of list1" :key="i">
          <img :src="item.pic" alt />
          <p>{{item.p}}</p>
        </div>
      </div>
    </div>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import lunBo from "../components/lunBo";
import MyHeader from "../components/MyHeader";
import tabBar from "../components/tabBar";
export default {
  components: {
    lunBo,
    MyHeader,
    tabBar
  },
  data() {
    return {
      list1: [
        { pic: require("../assets/qianDao.png"), p: "评估报告" },
        { pic: require("../assets/qianDao.png"), p: "收藏试题" },
        { pic: require("../assets/qianDao.png"), p: "错题集" },
        { pic: require("../assets/qianDao.png"), p: "做题记录" },
        { pic: require("../assets/qianDao.png"), p: "我的解析" },
        { pic: require("../assets/qianDao.png"), p: "我的纠错" },
        { pic: require("../assets/qianDao.png"), p: "试卷评价" }
      ],
      list: [
        {
          h: "章节练习",
          p: "高频考点",
          pic: require("../assets/lianXi.png"),
          h1: "模拟试题",
          p1: "全镇实战演练",
          pic1: require("../assets/shiTi.png")
        },
        {
          h: "历年真题",
          p: "往年真题库",
          pic: require("../assets/lianXi.png"),
          h1: "每日一练",
          p1: "打卡提升能里",
          pic1: require("../assets/meiRi.png")
        },
        {
          h: "易错题",
          p: "消除难点知识点",
          pic: require("../assets/lianXi.png"),
          h1: "挑战赢积分",
          p1: "挑战难题赢积分",
          pic1: require("../assets/xunZhang.png")
        },
        {
          h: "离线题库",
          p: "免流量",
          pic: require("../assets/lianXi.png"),
          h1: "资料下载",
          p1: "分享积攒,打包下载",
          pic1: require("../assets/shiTi.png")
        },
        {
          h: "考前点题",
          p: "靠前10天开放",
          pic: require("../assets/lianXi.png"),
          h1: "做题闯关",
          p1: "闯关送资料",
          pic1: require("../assets/shiTi.png")
        },
        {
          h: "模考大赛",
          p: "一起期末考赢奖品",
          pic: require("../assets/jiangBei.png"),
          h1: "每日一讲",
          p1: "高品质课程",
          pic1: require("../assets/keChen.png")
        }
      ]
    };
  }
};
</script>

<style scoped>
.TB > div {
  width: 85px;
}
.TB > div > p {
  font-size: 14px;
  margin: 10px 0;
}
.TB > div > img {
  width: 25px;
}
.TB {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  background: #fff;
  text-align: center;
  padding: 10px 10px;
  border-radius: 5px;
}
.listR > img {
  width: 25px;
}
.listL > img {
  width: 25px;
}
.title > p {
  font-size: 12px;
  color: #7d7e80;
}
.title {
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.listR > div > p {
  font-size: 10px;
  color: #7d7e80;
  margin-top: 4px;
}
.listL > div > p {
  font-size: 10px;
  color: #7d7e80;
  margin-top: 4px;
}
.listR {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  width: 47%;
  padding: 7px 3px;
  border-radius: 5px;
}
.listL {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  width: 47%;
  padding: 7px 3px;
  border-radius: 5px;
}
.list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
}
body {
  background: #eee;
}
</style>