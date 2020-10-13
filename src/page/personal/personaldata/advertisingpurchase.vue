<template>
  <div class="main">
    <div class="header">
      <router-link to class="header-left">
        <img src="@/assets/logins/c.png" @click="$router.back(-1)">
      </router-link>
    </div>
    <div class="box" v-if="purchasing">
      <div class="verticallyflex adve">
        <div>
          <div class="img-box flex">
            <img src="@/assets/personal/jingg.png" alt="">
            <span>确定购买 {{goldcoin}} 广告位吗？</span>
          </div>
          <div class="buttons flex">
            <el-button type="primary" @click="successful">确定</el-button>
            <el-button @click="$router.back(-1)">取消</el-button>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="box">
      <div class="verticallyflex adve">
        <div>
          <div class="img-boxs flex">
            <img src="@/assets/personal/yuangou.png" alt="">
          </div>
          <div class="test">
            {{goldcoin}}广告位购买成功！赶紧发布广告吧！
          </div>
          <div class="text-algin-center">
            <span>3 秒自动跳转</span> | <span @click="$router.back(-1)">手动跳转</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        goldcoin: "",
        purchasing: true,
      }
    },
    methods: {
      successful() {
        var that = this;
        that.purchasing = false;
        setTimeout(function() {
          that.$router.back(-1);
        },3000)
      }
    },
    mounted() {
      console.log(this.$route.query.name[0])
      this.goldcoin = this.$route.query.name[0];
    }
  }
</script>

<style scoped lang="less">
  .main {
    height: 100%;
    display: flex;
    flex-direction: column;

    .box {
      flex: 1;
      display: flex;
      align-items: center;
    }

    .header {
      padding: 60px 30px 0 30px;
      overflow: hidden;

      .header-left {
        float: left;
        width: 1.875rem;
        height: 1.875rem;
        cursor: pointer;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    .adve {
      flex: 1;
      justify-content: center;
      display: flex;

      .img-box {
        align-items: center;

        img {
          width: 90px;
        }

        .test {
          margin-top: 40px;
        }

        span {
          font-size: 26px;
          margin-left: 20px;
          color: #333;
        }
      }

      .img-boxs {
        justify-content: center;
        align-items: center;

        img {
          width: 160px;
        }

      }

      .test {
        font-size: 26px;
        margin-top: 40px;
        color: #333;
      }

      span {
        font-size: 26px;
        color: #333;
      }

      .buttons {
        margin-top: 60px;
        justify-content: center;
      }
    }
  }
</style>
