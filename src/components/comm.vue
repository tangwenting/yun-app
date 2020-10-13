<template>
  <div class="comm verticallyflex">
    <div class="comm-img verticallyflex">
      <img src="@/assets/personal/my.png" alt="">
      <div class="renzhen">
        <img src="@/assets/personal/renzhen.png" alt="">
      </div>
    </div>
    <div class="comm-content flex">
      <div v-show="show">
        <div class="can flex">
          <div>Candy</div>
          <div class="sex">
            <img src="@/assets/personal/man.png"/>
          </div>
          <div class="comm-content-img">
            <img src="@/assets/personal/weiruzhu.png" alt="">
          </div>
        </div>
        <div class="comm-test flex">
            <span>粉丝：</span>
            <span>3452</span>
            <span style="margin: 0 5px;">|</span>
            <span>关注：</span>
            <span>125</span>
        </div>
      </div>
      <div class="comm-right verticallyflex" @click="hadclick()">
        <i :class="[show ? 'el-icon-arrow-right' : 'el-icon-arrow-left']"></i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "",
    data() {
      return {
        icon: "el-icon-arrow-right",
        show: false
      }
    },
    methods: {
      hadclick() {
        this.show = !this.show;
      }
    }
  }
</script>

<style scoped lang="less">
  .comm {
    position: fixed;
    color: #fff;
    top: 150px;
    right: 0;
    font-size: 24px;
    padding: 3px 0;
    // width: 245px;
    .comm-img {
      padding: 0 8px;
      background: rgba(0,0,0,0.6);
      height: 70px;
      border-radius: 100px 0  0 100px;
      position: relative;
      .renzhen {
        width: 15px;
        position: absolute;
        bottom: 5px;
        right: 5px;
        img {
          width: 100%;
        }
      }
      img {
        width: 50px;
      }
    }
    .comm-content {
      height: 70px;
      background: rgba(0,0,0,0.6);
      .can {
        .sex {
          margin: 0 10px;
        }
      }
      .comm-test {
        font-size: 14px;
      }
      .sex {
        img {
          height: 18px;
        }
      }
      .comm-content-img {
        height: 30px;
        img {
          height: 100%;
        }
      }
    }
    .comm-right {
      padding: 0 8px;
      cursor: pointer;
    }
  }
</style>
