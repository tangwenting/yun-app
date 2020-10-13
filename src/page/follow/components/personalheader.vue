<template>
  <div>
    <div class="header-personal">
        <div class="header-personal-bg">
          <img src="@/assets/personal/banner.png" />
        </div>
        <div class="personal-img">
          <img src="@/assets/personal/my.png" alt="">
          <div class="adopt">
            <img src="@/assets/personal/renzhen.png"/>
          </div>
        </div>
        <div class="box">
          <div class="flex">
            <div class="personal-item">
              <div class="personal-test1">关注</div>
              <div class="personal-test2">126</div>
            </div>
            <div class="personal-item">
              <div class="personal-test1">粉丝</div>
              <div class="personal-test2">5433</div>
            </div>
          </div>
          <div class="flex">
            <div class="personal-item">
              <div class="personal-test1">收藏</div>
              <div class="personal-test2">99</div>
            </div>
            <div class="personal-item">
              <div class="personal-test1">转发</div>
              <div class="personal-test2">299</div>
            </div>
          </div>
        </div>
    </div>
    <div class="personaldata">
      <div class="verticallyflex">
        <img src="@/assets/personal/man.png" alt="">
        <span class="text1">Candy</span>
      </div>
      <div class="text1">
        <span class="follow">关注</span>
      </div>
      <div class="text2">
        <span>简介：</span><span>撒可见度卡死萨拉角度来</span>
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

<style scoped lang="less">
	.follow {
		display: inline-block;
		color: #CD443A;
		padding: 6px 0;
		width: 120px;
		text-align: center;
		border: 1px solid #CD443A;
		border-radius: 50px;
		margin: 10px 0;
	}
  .header-personal {
    width: 100%;
    position: relative;
    .personal-img {
      width: 114px;
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      bottom: -50px;
      img {
        width: 100%;
      }
      .adopt {
        position: absolute;
        bottom: 0;
        width: 21px;
        right: 5px;
      }
    }
    .header-personal-bg {
      width: 100%;
      img {
        width: 100%;
      }
    }
    .box {
      position: absolute;
      bottom: 5px;
      left: 0;
      right: 0;
      margin: auto;
      display: flex;
      justify-content: space-between;
      width: 85%;
      color: #fff;
      .personal-item {
        justify-content: space-around;
        width: 120px;
        text-align: center;
        .personal-test1 {
          font-size: 16px;
        }
        .personal-test2 {
          font-size: 28px;
          font-weight: bold;
        }
      }
      .personal-item:nth-child(1) {
        border-right: 1px solid #fff;
      }
    }
  }

  .personaldata {
    text-align: center;
    margin-top: 50px;
    .verticallyflex {
      img {
        width: 18px;
        margin-right: 5px;
      }
    }
    .text2 {
      width: 270px;
      margin: 10px auto;
      overflow: hidden;white-space: nowrap;text-overflow:ellipsis;
    }
  }
</style>
