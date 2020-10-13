<template>
  <div class="tab">
    <div class="tab-item"
      v-for="(item, index) in tablist"
      @click="tab(item.title)"
      :key="item.title"
    >
      <div class="tab-item-icon" :class="{active: item.title == activeIndex}">
        <img :src="item.icon">
      </div>
      <div class="tab-item-title">{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tab",
    data() {
      return {
        activeIndex: "主页",
        tablist: [
          {
            title: "主页",
            icon: require("@/assets/home/tab01.png"),
            url: "/home"
          },
          {
            title: "使用指南",
            icon: require("@/assets/home/tab02.png"),
            url: ""
          },
          {
            title: "服务热线",
            icon: require("@/assets/home/tab03.png"),
            url: ""
          },
          {
            title: "咨询",
            icon: require("@/assets/home/tab04.png"),
            url: ""
          }
        ]
      }
    },
    methods: {
      tab(name) {
        this.activeIndex = name;
        if(name == "主页") {
          this.$router.push({
            path: "home"
          })
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  //@import "../../static/theme.less";
  .tab {
    background-color: #f1f1f1;
    display: flex;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    align-items: center;
    .tab-item {
      width: 25%;
      cursor: pointer;
      text-align: center;
      .tab-item-icon{
        opacity: 0.6;
        img {
          max-width: 40px;
        }
      }
      .tab-item-icon.active{
        opacity: 1;
      }

      .tab-item-title {
        font-size: 16px;
        color: #333;
      }
    }
  }
</style>
