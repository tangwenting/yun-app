<template>
  <div class="main">
    <div class="hr"></div>
    <div class="search-box">
      <div class="search-right">
          <div class="fl">分类<i class="el-icon-arrow-down"></i></div>
          <div class="search">
            <i class="el-icon-search"></i>
            <input type="text" placeholder="请输入搜索内容关键词">
            <i class="el-icon-camera"></i>
            <button>搜索</button>
          </div>
      </div>
    </div>
    <div class="book">
      <el-tabs v-model="currentView" @tab-click="handleClick">
        <el-tab-pane :label="item.label" :name="item.name" v-for="(item, index) in bookTab" :key="item.label"></el-tab-pane>
      </el-tabs>
      <div class="tabconet" :is="currentView" keep-alive></div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        currentView: 'videos',
        bookTab: [
          {
            "label": "书籍23",
            "name": "books"
          },
          {
            "label": "视频23",
            "name": "videos"
          },
          {
            "label": "教程23",
            "name": "course"
          },
          {
            "label": "问题23",
            "name": "problem"
          },
          {
            "label": "文章23",
            "name": "articles"
          }
        ]
      };
    },
    components:{
      books: resolve => {
          require(['./books.vue'], resolve)
      },
      videos: resolve => {
          require(['./videos.vue'], resolve)
      },
      course: resolve => {
          require(['./course.vue'], resolve)
      },
      problem: resolve => {
          require(['./problem.vue'], resolve)
      },
      articles: resolve => {
          require(['./articles.vue'], resolve)
      },
    },
    methods: {
      handleClick(tab, event) {

      }
    }
  };
</script>


<style lang="less" scoped>
  .main {
    margin: 30px 30px 0;
    .hr {
      width: 100%;
      height: 1px;
      background-color: #dfdfdf;
    }
  }
  .search-box {
    // line-height: 89px;
   .search-right {
     display: flex;
     justify-content: flex-end;
     margin: 30px 0;
     align-items: center;
     .fl {
       margin-right: 10px;
       font-size: 26px;
     }
     .search {
       display: flex;
       height: 50px;
       overflow: hidden;
       border-radius: 10px;
       border: 1px solid #cd2a1d;
       align-items: center;
       color: #c9c9c9;
       i {
         font-size: 28px;
         margin: 0 10px;
         color: #c9c9c9;
       }
       input {
        padding-left: 10px;
        width: 240px;
        height: 100%;
        font-size: 16px;
       }
       button {
         width: 75px;
         height: 100%;
         cursor: pointer;
         align-items: center;
         display: flex;
         justify-content: center;
         border-top-right-radius: 10px;
         border-bottom-right-radius: 10px;
         background: #e93e2c;
         color: #fff;
       }
     }
   }
  }
  .book {
    .tabconet {
      min-height: 300px;
    }
  }

</style>
<style>
  .el-tabs__nav-wrap::after {
    background-color: transparent !important;
  }
  .el-tabs__item {
    color: #969696 !important;
    font-size: 22px !important;
  }
  .el-tabs__active-bar {
    height: 3px !important;
    background-color: #c52519 !important;
  }
  .el-tabs__item.is-active {
      color: #c52519 !important;
  }

</style>
