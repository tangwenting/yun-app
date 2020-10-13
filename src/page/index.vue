<template>
  <div class="box">
    <v-header></v-header>
    <v-right></v-right>
    <router-view class="mains" ref="main"></router-view>
    <el-backtop target=".mains" :bottom="350" :visibility-height="visibilityHeight">
      <i class="el-icon-arrow-up"></i>
    </el-backtop>
    <v-tab></v-tab>
  </div>
</template>

<script>
  import vHeader from "../components/header"
  import vTab from "../components/tab"
  import vRight from "../components/rightmenu"
  export default {
    name: "v-index",
    components: {
      vHeader,
      vTab,
      vRight
    },
    data() {
      return {
        visibilityHeight: 300,
        top: "",
      }
    },
    mounted() {
      // 监听这个dom的scroll事件
      var dom = document.getElementsByClassName("mains")[0];
      dom.addEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        this.top = document.getElementsByClassName("mains")[0].scrollTop;
        //console.log(this.top)
      }
    },
    watch: {
      //监听路由变化
      $route(to, from) {
        //刷新页面，回到顶部bug
        location.reload(true);
      }
    },
  }
</script>

<style lang="less" scoped>
  .box {
    height: 100%;
    overflow: hidden
  }

  .mains {
    width: 100%;
    margin-top: 2.5rem;
    height: calc(100% - 5.625rem);
    overflow: auto;
  }

  .el-backtop {
    width: 70px;
    height: 70px;
    font-size: 40px;
    color: #fff;
    background: rgba(0, 0, 0, 0.5);
  }
</style>
