<template>
  <div class="header">
    <div class="header-left">
      <router-link to="/">
        <img src="../assets/home/logo.png" alt="">
      </router-link>
    </div>
    <div class="header-right">
      <div class="icon-item">
        <img src="../assets/home/admin.png" @click="show(2)">
      </div>
      <div class="icon-item">
        <img src="../assets/home/list.png" @click="show(1)">
      </div>
    </div>
  </div>
</template>

<script>
	import bus from "../components/bus.js"
  export default {
    name: "vheader",
    data() {
      return {
				
      }
    },
    methods: {
			show(type) {
				bus.$emit("isShow",true,type)
			}
    }
  }
</script>

<style lang="less" scoped>
  //@import "@/static/theme.less";
  .header {
		width: 100%;
		position: absolute;
		top: 0;
    background-color: #f1f1f1;
    display: flex;
    height: 80px;
    padding: 0 30px;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    .header-left {
      width: 166px;
      img {
        width: 100%;
      }
    }
    .header-right {
      display: flex;
      align-items: center;
      .icon-item {
        width: 30px;
        cursor: pointer;
        img {
          width: 100%;
        }
      }
      .icon-item:first-child {
        margin-right: 35px;
      }
    }
  }
</style>
