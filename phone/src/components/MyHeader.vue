<template>
  <div>
    <div class="head">
      <img src="../assets/233logo.png" alt />
      <p>基金从业</p>
      <div class="headR">
        <img src="../assets/hongBao.png" alt />
        <div>
          <img src="../assets/keFu.png" alt />
          <p>客服</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.headR > img {
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
  background: #fff;
  z-index: 10;
}
.head > img {
  width: 30px;
  height: 30px;
  margin-left: 8px;
}
</style>