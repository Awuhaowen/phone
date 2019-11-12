<template>
  <div>
    <my-header></my-header>
    <!-- 轮播 -->
    <lun-bo></lun-bo>
    <div class="content">
      <div class="list">
        <ul class="listT">
          <li>
            <img src="../assets/xuanKe.png" alt />
            <p>选课试听</p>
          </li>
          <li>
            <img src="../assets/keChen.png" alt />
            <p>我的课程</p>
          </li>
          <li>
            <img src="../assets/lianXi.png" alt />
            <p>章节练习</p>
          </li>
          <li>
            <img src="../assets/meiRi.png" alt />
            <p>每日一练</p>
          </li>
          <li>
            <img src="../assets/qianDao.png" alt />
            <p>签到有礼</p>
          </li>
          <li>
            <img src="../assets/zhiBo.png" alt />
            <p>直播课程</p>
          </li>
          <li>
            <img src="../assets/ziLiao.png" alt />
            <p>我的资料包</p>
          </li>
          <li>
            <img src="../assets/biJi.png" alt />
            <p>干货笔记</p>
          </li>
          <li>
            <img src="../assets/cuoTi.png" alt />
            <p>错题集</p>
          </li>
          <li>
            <img src="../assets/quanBu.png" alt />
            <p>全部</p>
          </li>
        </ul>
        <div class="listB">
          <div>
            <img src="../assets/shiJian.png" alt />
            <h3>考试日历</h3>
            <p>
              ·距离考试还有
              <span>20</span> 天
            </p>
          </div>
          <img src="../assets/youJianTou.png" alt />
        </div>
      </div>
      <div>
        <h3 class="reMen">热门活动</h3>
        <div class="huoDong">
          <div>
            <h3>21天打卡</h3>
            <p>一起来学习吧</p>
          </div>
          <div>
            <h3>21天打卡</h3>
            <p>一起来学习吧</p>
          </div>
          <div>
            <h3>21天打卡</h3>
            <p>一起来学习吧</p>
          </div>
        </div>
      </div>
      <div class="ganHuo">
        <div>
          <h3>干货笔记</h3>
          <p class="mianFei">免费</p>
        </div>
        <div>
          <p class="gengDuo">更多</p>
          <img width="30px" src="../assets/youJianTou.png" alt />
        </div>
      </div>
      <div class="ganHuoBottom">
        <img src="../assets/book.png" alt />
        <div>
          <div>
            <p>基金法律法规 高频考点</p>
            <p>干货笔记</p>
          </div>
          <div class="liJi">
            <p>已有3593人通过分享获得</p>
            <a href="javascript:;">立即阅读</a>
          </div>
        </div>
      </div>
      <h3 style="margin: 10px 0">资料下载</h3>
      <div class="ziLiao">
        <div class="ziLiaoTop">
          <p>刚刚更新</p>
          <h4>第22批: 10月基金真题及答案</h4>
        </div>
      </div>
      <div class="ziLiaoContent">
        <div v-for="(item, i) of datacontent" :key="i">
          <img :src="item.pic" alt />
          <div class="ziLiaoZhong">
            <p>{{item.p}}</p>
            <div class="bi">
              <img :src="item.p1" alt />
              <p>{{item.p1}}</p>
              <span>{{item.span}}</span>
            </div>
          </div>
          <a class="a1" href="javascript:;">下载</a>
        </div>
        <div class="ziLiaoXia">
          <a href="javascript:;">
            <img src="../assets/gengDuo.png" alt />
            <p>下载更多资料</p>
          </a>
          <a href="javascript:;" @click="huan">
            <img src="../assets/huanYiPi.png" alt />
            <p>换一批</p>
          </a>
        </div>
      </div>
      <van-divider
        :style="{ color: 'rgb(128, 127, 127)', borderColor: 'rgb(128, 127, 127)', padding: '0 16px' }"
      >我也是有底线的</van-divider>
    </div>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import lunBo from "../components/lunBo";
import tabBar from "../components/tabBar";
import MyHeader from "../components/MyHeader";
export default {
  components: {
    tabBar,
    lunBo,
    MyHeader
  },
  data() {
    return {
      list: [
        {
          pic: require("../assets/ti.png"),
          p: "2019年10月 股权投资基金 真替及解析",
          pic1: require("../assets/jinBi.png"),
          p1: "10个下载币",
          span: "下载:511"
        },
        {
          pic: require("../assets/ti.png"),
          p: "股权投资基金靠前冲刺35个考点",
          pic1: require("../assets/jinBi.png"),
          p1: "5个下载币",
          span: "下载:728"
        },
        {
          pic: require("../assets/ti.png"),
          p: "基金法规考前冲刺48个考点",
          pic1: require("../assets/jinBi.png"),
          p1: "10个下载币",
          span: "下载:942"
        },
        {
          pic: require("../assets/ti.png"),
          p: "证券投资基金基础知识15个提点类考点",
          pic1: require("../assets/jinBi.png"),
          p1: "10个下载币",
          span: "下载:345"
        }
      ],
      datacontent: [], // 用来存放每次点击换一批出来的三个对象
      num2: "", // 用来放三个随机数
      arr: [] // 用来放三个随机数的数组，用来循环
    };
  },
  mounted() {
    for (var i = 0; i < 4; i++) {
      this.datacontent.push(this.list[i]);
    }
  },
  methods: {
    huan() {
      this.num2 = "";
      this.arr = [];
      this.datacontent = []; // 每次点击换一批就让之前的数据全清空
      while (this.arr.length < 4) {
        // 用while来判断是否循环三次
        let num = parseInt(Math.random() * 4); // 随机出三个0-9之间的随机数
        if (this.arr.indexOf(num) == -1) {
          // 获得不重复的三个数
          this.arr.push(num);
          this.num2 = num;
          this.datacontent.push(this.list[this.num2]); // 将随机数当作下标来便利data里的内容
        }
      }
    }
  }
};
</script>

<style scoped>
.foot {
  text-align: center;
  color: rgb(128, 127, 127);
  margin: 15px 0;
  font-size: 14px;
}
.ziLiaoXia > a > img {
  width: 15px;
  height: 15px;
  margin-right: 5px;
}
.ziLiaoXia a {
  font-size: 12px;
  align-items: center;
  display: flex;
  background: #cac8c8;
  border-radius: 10px;
  padding: 3px 34px;
  color: rgb(128, 127, 127);
}
.ziLiaoContent > div > .a1 {
  color: rgb(240, 18, 18);
  font-weight: 800;
  background: rgb(243, 208, 208);
  border-radius: 20px;
  padding: 2px 10px;
  text-align: center;
}
.bi > span {
  color: #8a8888;
}
.bi > p {
  margin: 0 40px 0 10px;
}
.bi > div {
  margin-top: 10px;
}
.ziLiaoZhong > div > img {
  width: 20px;
  height: 20px;
}
.ziLiaoZhong > p {
  width: 210px;
}
.ziLiaoZhong > div {
  display: flex;
  font-size: 12px;
  align-items: center;
}
.ziLiaoContent > div > img {
  width: 40px;
  height: 40px;
}
.ziLiaoContent > div {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  background: #fff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
.ziLiaoTop > p {
  font-size: 10px;
  background: red;
  border-radius: 9px;
  text-align: center;
  padding: 2px;
  margin-right: 10px;
}
.ziLiaoTop {
  color: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  padding: 15px;
  height: 100%;
  background: url(../assets/bj.jpg) left 62px;
}
.liJi > a {
  color: rgb(240, 18, 18);
  border-radius: 13px;
  padding: 5px;
  font-weight: 800;
  margin-left: 15px;
  background: rgb(243, 208, 208);
}
.liJi > p {
  font-size: 12px;
  color: rgb(128, 127, 127);
}
.liJi {
  display: flex;
  margin-top: 50px;
  align-items: center;
}
.ganHuoBottom > div > div > p:last-child {
  font-size: 12px;
  border-radius: 8px;
  border: 1px solid rgb(247, 84, 84);
  width: 55px;
  text-align: center;
  color: rgb(247, 84, 84);
}
.ganHuoBottom > img {
  width: 80px;
}
.ganHuoBottom {
  background: #fff;
  display: flex;
  padding: 20px;
  justify-content: space-around;
}
.ganHuo > div > .mianFei {
  background: red;
  border-radius: 8px;
  border-bottom-left-radius: 0;
  font-size: 12px;
  color: #fff;
  padding: 2px;
  margin-left: 10px;
}
.ganHuo > div > .gengDuo {
  font-size: 14px;
  color: rgb(153, 149, 149);
}
.ganHuo :last-child {
  display: flex;
  align-items: center;
}
.ganHuo :first-child {
  display: flex;
  align-items: center;
}
.ganHuo {
  display: flex;
  margin: 10px 0;
  justify-content: space-between;
}
.huoDong > div > p {
  font-size: 12px;
  margin-top: 5px;
}
.huoDong > div:last-child {
  background: rgb(245, 244, 184);
  color: rgb(165, 162, 9);
}
.huoDong > div:nth-child(2) {
  background: rgb(186, 235, 179);
  color: rgb(28, 126, 15);
}
.huoDong > div:first-child {
  background: rgb(210, 208, 221);
  color: rgb(121, 106, 206);
}
.huoDong > div {
  padding: 15px 25px 15px 5px;
  border-radius: 10px;
}
.huoDong {
  display: flex;
  justify-content: space-between;
}
.reMen {
  margin: 15px 0;
}
.listB > div > p > span {
  color: red;
  font-size: 16px;
  font-weight: 700;
}
.listB > div > p {
  font-size: 12px;
  color: #aaa;
}
.listB > div > h3 {
  font-size: 16px;
  font-weight: 700;
  margin: 0 10px 0 4px;
}
.listB {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #eee;
  padding-top: 6px;
}
.listB div > img {
  width: 20px;
}
.listB div {
  display: flex;
  align-items: center;
}
.list > ul > li > img {
  background: #eee;
  padding: 5px;
  width: 27px;
  border-radius: 8px;
}
.list > ul > li {
  width: 60px;
  height: 60px;
}
.list ul > li p {
  font-size: 12px;
}
.list > .listT {
  display: flex;
  text-align: center;
  justify-content: space-around;
  flex-wrap: wrap;
}
.list {
  background: #fff;
  padding: 10px;
  border-radius: 5px;
}
.content {
  width: 97%;
  margin: 0 auto;
}
body {
  background: #eee;
}
/* .headR > img {
  width: 30px;
  padding: 3px;
  margin-right: 10px;
  height: 30px;
  background: #fff;
}
.headR > div > img {
  width: 30px;
  height: 23px;
}
.headR > div > p {
  font-size: 12px;
  text-align: center;
}
.headR {
  display: flex;
  align-items: center;
  margin-right: 8px;
}
.head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;
  background: #eee;
  z-index: 10;
}
.head > img {
  width: 30px;
  height: 30px;
  margin-left: 8px;
} */
</style>
