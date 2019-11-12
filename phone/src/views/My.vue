<template>
  <div>
    <div class="head">
      <div class="headL">
        <img src="../assets/sao.png" />
        <p>扫一扫</p>
      </div>
      <div class="headR">
        <div>
          <img src="../assets/xiaoXi.png" alt />
          <p>消息</p>
        </div>
        <div>
          <img src="../assets/sheZhi.png" alt />
          <p>设置</p>
        </div>
      </div>
    </div>
    <div class="header">
      <router-link to="/Login">
        <div class="headB">
          <div class="headBL">
            <img src="../assets/YongHu.png" alt />
            <p>
              <span>登录/</span>
              <span>注册</span>
            </p>
          </div>
          <div class="headBR">
            <img src="../assets/jinBi.png" alt />
            <p>签到奖励积分</p>
          </div>
        </div>
      </router-link>
    </div>
    <div class="content">
      <div class="list">
        <div>
          <img src="../assets/dengDai.png" alt />
          <p>待支付</p>
        </div>
        <div>
          <img src="../assets/dingDan.png" alt />
          <p>我的订单</p>
        </div>
        <div>
          <img src="../assets/hongBao1.png" alt />
          <p>红包</p>
        </div>
        <div>
          <img src="../assets/youHuiQuan.png" alt />
          <p>优惠券</p>
        </div>
        <div>
          <img src="../assets/jiFen.png" alt />
          <p>积分</p>
        </div>
      </div>
      <div class="contentXue">
        <div class="xueXi">
          <div>
            <img src="../assets/jiangBei.png" alt />
            <p>学习时间排名</p>
          </div>
          <div>
            <img src="../assets/youJianTou.png" alt />
          </div>
        </div>
        <div class="xunZ">
          <div>
            <img src="../assets/xunZhang.png" alt />
            <p>我的勋章</p>
          </div>
          <div>
            <img src="../assets/youJianTou.png" alt />
          </div>
        </div>
      </div>
      <div class="woDe">
        <div class="zhongJian" v-for="(item, i) of zhongJian" :key="i">
          <div class="zhongJianL">
            <img :src="item.pic" alt />
            <p>{{ item.p1 }}</p>
          </div>
          <div class="zhongJianR">
            <p>{{ item.p2 }}</p>
            <img :src="item.pic2" alt />
          </div>
        </div>
      </div>
      <div style="background: #fff;padding: 5px;margin-top: 10px;width:97%">
        <div class="keFu" v-for="(item, i) of keFu" :key="i">
          <div class="tuiJian">
            <img :src="item.pic" alt />
            <p>{{ item.p1 }}</p>
          </div>
          <div class="song">
            <p style>{{ item.p2 }}</p>
            <img :src="item.pic1" alt />
          </div>
        </div>
      </div>
    </div>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import tabBar from "../components/tabBar";
export default {
  components: {
    tabBar
  },
  data() {
    return {
      zhongJian: [
        {
          pic: require("../assets/shiPin.png"),
          p1: "我的课程",
          p2: "听课记录/离线",
          pic2: require("../assets/youJianTou.png")
        },
        {
          pic: require("../assets/bi.png"),
          p1: "我的题库",
          pic2: require("../assets/youJianTou.png")
        },
        {
          pic: require("../assets/geRenZilLiao.png"),
          p1: "我的资料包",
          p2: "分享资料",
          pic2: require("../assets/youJianTou.png")
        },
        {
          pic: require("../assets/shouCang.png"),
          p1: "我的收藏/记录/关注",
          pic2: require("../assets/youJianTou.png")
        }
      ],
      keFu: [
        {
          pic: require("../assets/tuiJian.png"),
          p1: "我要推荐APP",
          p2: "送积分",
          pic1: require("../assets/youJianTou.png")
        },
        {
          pic: require("../assets/keFuActive.png"),
          p1: "客服中心",
          p2: "客服时间:8:00-23:00",
          pic1: require("../assets/youJianTou.png")
        },
        {
          pic: require("../assets/fanKui.png"),
          p1: "意见反馈",
          pic1: require("../assets/youJianTou.png")
        }
      ]
    };
  }
};
</script>

<style scoped>
.tuiJian > img {
  width: 25px;
  margin-right: 10px;
}
.keFu > .song {
  display: flex;
  align-items: center;
  font-size: 10px;
  color: rgb(165, 161, 161);
}
.keFu > .tuiJian {
  display: flex;
  font-size: 14px;
  align-items: center;
}
.keFu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  padding: 5px;
  border-top: 1px solid rgb(247, 244, 244);
}
.zhongJianR {
  display: flex;
  font-size: 10px;
  color: rgb(165, 161, 161);
}
.zhongJian:first-child {
  display: flex;
  font-size: 12px;
  border-top: 0 solid #fff;
}
.zhongJian :first-child > img {
  margin-right: 10px;
  width: 25px;
}
.zhongJian :first-child {
  display: flex;
  align-items: center;
  font-size: 14px;
}
.zhongJian {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgb(247, 244, 244);
  margin: 4px 0;
}
.woDe {
  background: #fff;
  width: 95%;
  margin-top: 10px;
  padding: 9px;
  border-radius: 4px;
}
.xunZ > div > img {
  width: 25px;
}
.xunZ > div {
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-top: 10px;
}
.xunZ {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgb(247, 244, 244);
  text-align: center;
}
.xueXi > div > img {
  width: 25px;
}
.xueXi > div > p {
  margin-left: 10px;
}
.xueXi > div {
  margin-bottom: 10px;
}
.xueXi {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.xueXi > div {
  display: flex;
  font-size: 14px;
  align-items: center;
}
.contentXue {
  margin-top: 65px;
  background: #fff;
  width: 95%;
  padding: 9px;
  border-radius: 4px;
}
.list > div > p {
  margin-top: 10px;
}
.list {
  display: flex;
  background: #fff;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  position: absolute;
  top: 140px;
  font-size: 14px;
  border-radius: 4px;
  width: 90%;
  padding: 12px;
}
.headBR > img {
  width: 20px;
}
.headBR {
  display: flex;
  align-items: center;
  border-radius: 50px;
  font-size: 12px;
  padding: 0 20px;
  background: linear-gradient(
    to right,
    rgb(241, 111, 111) 0px,
    rgb(248, 26, 26) 150px
  );
}
.headBL > div {
  font-size: 14px;
}
.headBL > img {
  border-radius: 50%;
  background: #fff;
  padding: 10px;
  margin-right: 15px;
}
.headBL {
  display: flex;
  align-items: center;
}
.headB {
  display: flex;
  color: #fff;
  justify-content: space-between;
  margin: 10px 0 40px 0;
}
.header {
  padding: 10px;
  margin-top: 51px;
  background: linear-gradient(
    to right,
    rgb(241, 111, 111) 0px,
    rgb(240, 52, 52) 150px
  );
}
.headL {
  font-size: 12px;
  color: #fff;
  margin-left: 4px;
  text-align: center;
}
.headR > div {
  margin-right: 4px;
}
.headR {
  display: flex;
  font-size: 12px;
  color: #fff;
  text-align: center;
}
.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  background: linear-gradient(
    to right,
    rgb(241, 111, 111) 0px,
    rgb(240, 52, 52) 150px
  );
}
.content {
  width: 97%;
  margin: 0 auto;
}
</style>
