<template>
  <div class="flashscreen">
    <img src="@/assets/flashscreen.png" alt="">
    <div class="time verticallyflex">
      <div class="border"></div>
      <div>{{second}}秒</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "flashscreen",
    data() {
      return {
        second: 5
      }
    },
    methods:{
      to() {
        this.$router.push({
          path: "/home"
        })
      }
    },
    mounted() {
      var that = this;
      var time = setInterval(function () {
        if (that.second == 0) {
          //5秒后
          that.to()
          clearInterval(time)
          return;
        };
        that.second--;
      },1000)
    }
  }
</script>

<style scoped lang="less">
  .flashscreen {
    width: 100%;
    height: 100%;
    position: relative;
    img {
      width: 100%;
    }
    .time {
      width: 90px;
      font-size: 25px;
      height: 90px;
      position: absolute;
      top: 3%;
      right: 5%;
      .border {
        width: 100%;
        position: absolute;
        height: 100%;
        border: 10px solid #929292;
        border-right-color: #cccccc;
        border-radius: 50%;
        -webkit-animation:circle 1s infinite linear;/*匀速 循环*/
      }
    }
  }
  @-webkit-keyframes circle {

    0%{ transform:rotate(0deg); }

    100%{ transform:rotate(-360deg); }

  }
</style>
