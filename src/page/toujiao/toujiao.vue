<template>
  <div class="page">
    <div class="toujiao_content padding">
      <div class="toujiao_head flex_between_center">
        <!-- search 搜索框 -->
        <div class="toujiao_search flex_between_center">
          <div class="flex_1 flex_between_center">
            <img class="search_icon" src="@/static/search.png" alt="">
            <input class="flex_1 search_bar" type="text" placeholder="请输入搜索内容关键词">
          </div>
          <div class="toujiao_btn flex_between_center">
            <img class="toujiao_camera" src="@/static/camera.png" alt="">
            <div class="toujiao_submit">搜索</div>
          </div>
        </div>
        <!-- 收藏 -->
        <div class="toujiao_collect flex_row" @click="personal">
          <img src="@/static/xin.png" alt="">
          <span>我的收藏</span>
        </div>
      </div>
      <div class="list_wrap">
        <!-- book -->
        <div class="book">
          <div class="book_head verticallyflex">
            <div class="red">B</div>
            <div>
              <div class="booktest1">书籍</div>
              <div class="booktest2">BOOK</div>
            </div>
          </div>
          <v-book :list='bookList' :type='0'></v-book>
          <div class="book_more"><span>查看更多</span><img src="@/static/up.png" alt=""></div>
        </div>
        <!-- video -->
        <div class="book">
          <div class="book_head verticallyflex">
            <div class="red">V</div>
            <div>
              <div class="booktest1">视频</div>
              <div class="booktest2">VEDIO</div>
            </div>
          </div>
             <v-book :list='videoList' :type='1'></v-book>
             <div class="book_more"><span>查看更多</span><img src="@/static/up.png" alt=""></div>
        </div>
        <!-- course -->
        <div class="book">
          <div class="book_head verticallyflex">
            <div class="red">C</div>
            <div>
              <div class="booktest1">教程</div>
              <div class="booktest2">CONTENT</div>
            </div>
          </div>
             <v-book :list='courseList' :type='2'></v-book>
             <div class="book_more"><span>查看更多</span><img src="@/static/up.png" alt=""></div>
        </div>
      </div>
    </div>
    <!-- banner图 -->
    <div>
      <img class="tjbanner_img" src="@/static/news_banner.jpg" alt="">
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import vBook from '@/components/book.vue'
  import vFooter from '@/components/footer.vue'
  export default {
    components:{
      vBook,
      vFooter
    },
    data() {
      return {
        bookList:[
          {
            imgUrl: require('@/static/book.jpg'),
            title:'xxx公司助力A股首家 上市开始就法兰克福',
            num:'10086'
          },
          {
            imgUrl: require('@/static/book.jpg'),
            title:'xxx公司助力A股首家 上市开始就法兰克福',
            num:'10086'
          }
        ],
        videoList:[
          {
            imgUrl: require('@/static/book.jpg'),
            time:'12:03',
            title:'xxx公司助力A股首家 上市开始就法兰克福',
            num:'10086'
          },
          {
            imgUrl: require('@/static/book.jpg'),
            time:'12:03',
            title:'xxx公司助力A股首家 上市开始就法兰克福',
            num:'10086'
          }
        ],
        courseList:[
          {
            imgUrl: require('@/static/book.jpg'),
            title:'xxx公司助力A股首家 上市开始就法兰克福',
            num:'10086'
          },
          {
            imgUrl: require('@/static/book.jpg'),
            title:'xxx公司助力A股首家 上市开始就法兰克福',
            num:'10086'
          }
        ]
      }
    },
    methods:{
      personal() {
        this.$router.push({
          path: "personal"
        })
      }
    }
  }
</script>

<style>
  @import url("toujiao.css");
</style>
