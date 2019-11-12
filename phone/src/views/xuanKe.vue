<template>
  <div>
    <my-header></my-header>
    <div class="content">
      <div class="headImg">
        <img src="../assets/157286136864201.jpg" alt />
        <img src="../assets/boFang.png" alt="" />
      </div>
      <div class="ctnT">
        <div class="zuHe">
          <img src="../assets/shuXian.png" alt="" />
          <h2></h2>
          <p>热门套餐, 高效通关之选</p>
        </div>
        <div v-for="(item, i) of ctnMain" :key="i" class="ctnMain">
          <img :src="item.pic" alt="" />
          <div>
            <h4 v-text="item.h4"></h4>
            <p v-text="item.p"></p>
            <div class="san">
              <span v-text="item.s1"></span>
              <span v-text="item.s2"></span>
              <p v-text="item.p1"></p>
            </div>
            <p class="p1" v-text="item.p2"></p>
            <div class="yuan">
              <p v-text="item.s3"></p>
              <p v-text="item.s4"></p>
            </div>
          </div>
        </div>
      </div>
      <div class="ctnJC">
        <div class="jiChu">
          <img src="../assets/shuXian.png" alt="" />
          <h2></h2>
          <p>不同阶段, 针对性提分</p>
        </div>
        <ul>
          <li v-for="(item, i) of JC" :key="i">
            <div>
              <img :src="item.pic" alt="" />
            </div>
            <h5 v-text="item.h"></h5>
            <p v-text="item.p"></p>
            <div>
              <span v-text="item.s1"></span>
              <span v-text="item.s2"></span>
            </div>
          </li>
        </ul>
      </div>
      <div class="ctnMF">
        <div class="mianFei">
          <img src="../assets/shuXian.png" alt="" />
          <h2></h2>
          <p>超<span>20%</span>好课免费试听试学</p>
        </div>
        <div class="listen">
          <div>
            <img src="../assets/157197080610941.jpg" alt="" />
            <img src="../assets/boFang.png" alt="" />
          </div>
          <ul>
            <li>
              <a href="javascript:;">会计<br />刘胜花</a>
            </li>
            <li>
              <a href="javascript:;">经济法<br />MR.H</a>
            </li>
            <li>
              <a href="javascript:;">财管<br />葛广宇</a>
            </li>
            <li>
              <a href="javascript:;">公司战略<br />黄静</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <tabBar></tabBar>
  </div>
</template>

<script>
import MyHeader from "../components/MyHeader";
import tabBar from "../components/tabBar";
import lunBo from "../components/lunBo";
export default {
  components: { MyHeader, lunBo, tabBar },
  data() {
    return {
      JC: [
        {
          pic: require("../assets/156861594546131.jpg"),
          h: "2020年注会零基础入门班",
          p: "15.6万人报名",
          s1: "¥150",
          s2: "报名试听"
        },
        {
          pic: require("../assets/156861574921671.jpg"),
          h: "2020年注册会计教材精讲班",
          p: "2568人报名",
          s1: "¥350",
          s2: "报名试听"
        },
        {
          pic: require("../assets/157196650923731.jpg"),
          h: "2020年注册会计主观题专题班",
          p: "243人报名",
          s1: "¥150",
          s2: "报名试听"
        },
        {
          pic: require("../assets/156861609797351.jpg"),
          h: "2020年注册会计冲刺提分班",
          p: "1257人报名",
          s1: "¥200",
          s2: "报名试听"
        }
      ],
      ctnMain: [
        {
          pic: require("../assets/157292129582221.jpg"),
          h4: "2020注册会计高端班",
          p: "两科取正班1.6元/天=5大班级+2本教辅+1次重学, 零基础快",
          s1: "三色考点",
          s2: "送收费题库",
          p1: "1.7万人报名",
          p2: "折后价",
          s3: "¥1537",
          s4: "报名试听"
        },
        {
          pic: require("../assets/157292133619731.jpg"),
          h4: "2020注册会计取证班",
          p: "梳理全科教材, 精讲核心考点, 高效突破提分, 送重学",
          s1: "三色考点",
          s2: "送真题汇编电子版",
          p1: "7287人报名",
          p2: "折后价",
          s3: "¥216-1148",
          s4: "报名试听"
        }
      ]
    };
  }
};
</script>

<style scoped>
.listen > ul > li > a {
  display: block;
  color: #fff;
  font-size: 14px;
}
.listen > ul > li:first-child {
  background: #fc5e37;
  background-image: linear-gradient(120deg, #fe6037, #e03834);
  overflow: hidden;
}
.listen > ul > li {
  width: 25%;
  position: relative;
  background: #262d47;
  padding: 10px 0 11px 0;
  height: 50px;
  position: relative;
  text-align: center;
}
.listen > ul {
  background: #262d47;
  display: flex;
  margin-top: -4px;
}
.listen {
  position: relative;
}
.listen > div > img:last-child {
  position: absolute;
  width: 15%;
  left: 160px;
  top: 70px;
  z-index: 1;
}
.listen > div > img:first-child {
  width: 100%;
}
.ctnMF {
  background: #fff;
  margin-top: 10px;
  padding: 10px 10px;
}
.mianFei > p > span {
  color: #7d7e80;
}
.mianFei > p {
  font-size: 10px;
  border-radius: 10px;
  background: #eee;
  color: #201e1e;
  padding: 3px 10px;
}
.mianFei > img {
  width: 30px;
  height: 30px;
  margin-left: -10px;
}
.mianFei > h2 {
  margin-right: 10px;
  background: url(../assets/biaoTi.png) no-repeat 3px -74px;
  width: 100px;
  height: 25px;
  background-size: 200px auto;
}
.mianFei {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.ctnJC > ul {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
}
.ctnJC > ul > li > div > span:last-child {
  background: rgb(240, 8, 8);
  color: #fff;
  padding: 0 5px;
  border-radius: 2px;
}
.ctnJC > ul > li > div > span:first-child {
  color: rgb(240, 8, 8);
}
.ctnJC > ul > li > div {
  display: flex;
  align-items: center;
  margin: 10px 0;
  justify-content: space-between;
}
.ctnJC > ul > li {
  width: 48%;
}
.ctnJC > ul > li > p {
  font-size: 10px;
  color: rgb(150, 148, 148);
}
.ctnJC > ul > li > h5 {
  font-weight: bold;
  margin: 5px 0;
  white-space: nowrap;
  overflow: hidden;
}
.ctnJC > ul > li > div > img {
  width: 100%;
}
.ctnJC {
  background: #fff;
  margin-top: 10px;
  padding: 0 10px;
}
.jiChu > p {
  font-size: 10px;
  border-radius: 10px;
  background: #eee;
  color: #7d7e80;
  padding: 3px 10px;
}
.jiChu > img {
  width: 30px;
  height: 30px;
  margin-left: -10px;
}
.jiChu {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}
.jiChu > h2 {
  margin-right: 10px;
  background: url(../assets/biaoTi.png) no-repeat 3px -25px;
  width: 100px;
  height: 25px;
  background-size: 200px auto;
}

.ctnMain > div > .yuan {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.ctnMain > div > .yuan > p:last-child {
  background: rgb(240, 8, 8);
  color: #fff;
  padding: 2px 5px;
  font-size: 14px;
  border-radius: 2px;
}
.ctnMain > div > .yuan > p:first-child {
  color: rgb(240, 8, 8);
  font-weight: 600;
}
.ctnMain > div > .p1 {
  color: rgb(240, 8, 8);
  font-weight: bold;
  font-size: 14px;
}
.ctnMain > div > .san > p {
  font-size: 10px;
  color: rgb(150, 148, 148);
  margin-top: 5px;
  margin-bottom: 30px;
}
.ctnMain > div > .san > span:nth-child(2) {
  font-size: 10px;
  border: 1px solid rgb(15, 160, 10);
  padding: 2px;
  color: rgb(15, 160, 10);
  margin-left: 5px;
}
.ctnMain > div > div > span:first-child {
  font-size: 10px;
  border: 1px solid rgb(245, 83, 83);
  padding: 2px;
  color: rgb(245, 83, 83);
}
.ctnMain > div > p {
  font-size: 12px;
  color: #080808;
  margin: 4px 0;
}
.ctnMain > div > h4 {
  font-weight: 900;
}
.ctnMain {
  display: flex;
  padding-bottom: 15px;
}
.ctnMain > img {
  width: 50%;
  margin-right: 10px;
}
.zuHe > p {
  font-size: 10px;
  border-radius: 10px;
  background: #eee;
  color: #7d7e80;
  padding: 3px 10px;
}
.zuHe > img {
  width: 30px;
  height: 30px;
  margin-left: -10px;
}
.zuHe {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}
.ctnT {
  background: #fff;
  padding: 0 10px;
}
.zuHe > h2 {
  margin-right: 10px;
  background: url(../assets/biaoTi.png) no-repeat;
  width: 100px;
  height: 25px;
  background-size: 200px auto;
}
.headImg > img:last-child {
  position: absolute;
  z-index: 3;
  top: 35%;
  width: 15%;
  left: 40%;
}
.headImg > img:first-child {
  width: 100%;
  height: 250px;
}
.headImg {
  position: relative;
}
.content {
  margin-top: 48px;
}
</style>
