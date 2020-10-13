<template>
  <div>
    <div class="header">
      <router-link to="/">
        <img class="header-left" src="../assets/logins/c.png">
      </router-link>
    </div>
    <div class="main">
      <img src="../assets/logins/f.png" alt="" class="logo">
      <div class="p1">
        注册失败！请返回注册页面重新注册！
      </div>
      <div class="p p2">
        失败原因。如有问题，请联系审核人员或者
        <br>        拨打客服电话400-400-400
      </div>
      <div class="p p3">
        <router-link to="/" class="black">返回首页</router-link>|
        3 秒后自动跳转页面
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "",
    data() {
      return {

      }
    }
  }
</script>

<style lang="less" scoped="">
  .header {
  	margin: 60px 30px 0 30px;
  	overflow: hidden;

  	.header-left {
  		float: left;
  		width: 1.875rem;
  		height: 1.875rem;
      cursor: pointer;
  	}
  }
  .main {
    text-align: center;
    margin-top: 339px;
    .logo {
      width: 83px;
      display: inline-block;
      margin-bottom: 70px;
    }
    .p {
      margin-top: 30px;
    }
    .p1 {
      font-size: 30px;
      color: #000;
      font-weight: bold;
    }
    .p2 {
      font-size: 24px;
      color: #979797;
    }
    .p3 {
      font-weight: bold;
      font-size: 24px;
      .black {
        color: #000;
      }
    }
  }
</style>
