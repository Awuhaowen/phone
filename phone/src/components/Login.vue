<template>
  <div>
    <van-nav-bar
      title="登陆"
      left-text="返回"
      right-text="立即注册"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-cell-group>
      <van-field
        v-model="username"
        clearable
        label="用户名"
        placeholder="请输入用户名"
        @click-right-icon="$toast('question')"
        error-message
      />
      <p style="text-align:center">{{ msg }}</p>
      <van-field
        v-model="password"
        type="password"
        label="密码"
        clearable
        placeholder="请输入密码"
      />
      <p style="text-align:center">{{ msgM }}</p>
    </van-cell-group>
    <van-button @click="login" type="danger" size="large" round
      >登录</van-button
    >
  </div>
</template>

<script>
import { Dialog } from "vant";
export default {
  data() {
    return {
      username: "",
      password: "",
      msg: "",
      queRen: "",
      msgM: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("/My");
    },
    onClickRight() {},
    login() {
      if (/^\w{3,6}$/i.test(this.username) == true) {
        Dialog.alert({ message: "登陆成功" });
      } else {
        Dialog.alert({ message: "登陆失败" });
      }
      if (/^[a-z0-9]{3,12}$/i.test(this.password) == true) {
        Dialog.alert({ message: "登陆成功" });
      } else {
        Dialog.alert({ message: "登陆失败" });
      }
      var url = "http://127.0.0.1:4000/Login";
      var obj = { uname: this.username, upwd: this.password };
      this.axios.get(url, { params: obj }).then(res => {
        console.log(res);
        if (res.data.code < 0) {
          Dialog.alert({ message: "用户名或密码有误" });
        } else {
          //跳转Product组件 //9:47
          this.$router.push("/My");
          location.reload();
        }
      });
    }
  }
};
</script>

<style scoped></style>
