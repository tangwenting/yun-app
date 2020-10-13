<template>
  <div class="page">
    <div class="book padding">

      <div class="toujiao_head flex_between_center">
        <!-- search 搜索框 -->
        <div class="toujiao_search flex_between_center">
          <div class="flex_1 flex_row" style="flex-wrap: initial;">
            <img class="search_icon" src="@/static/search.png" alt="">
            <input class="flex_1 search_bar" type="text" placeholder="请输入搜索内容关键词">
          </div>
          <div class="toujiao_btn flex_items_center">
            <img class="toujiao_camera" src="@/static/camera.png" alt="">
            <div class="toujiao_submit">搜索</div>
          </div>
        </div>
        <!-- 收藏 -->
        <div class="toujiao_collect flex_row" @click="handclick">
          <img src="@/static/xin.png" alt="">
          <span>我的收藏</span>
        </div>
      </div>

       <!-- 书籍介绍 -->
       <div class="book_dateil flex_row">
         <div>
           <img class="book_img" src="@/static/book.jpg" alt="">
         </div>
         <div class="book_d flex_1">
          <div class="book_name">大崩盘</div>
          <div class="book_author">
            <span>作者：拉菲特.著</span>
            <span>字数：5万字</span>
            <span>收藏：520</span>
            <img src="@/static/share.png" alt="">
          </div>
          <div class="book_texts">
            <p class="text_clamp4">书籍简介： 1929年10月美国华尔街股票市场的两次惨跌。由于美国和欧洲的经济陷入极度危机、失业率居高不下、整个市场一片萧条，从而引起10月24日和29日的两次股市狂泻。特别是29日的下跌成为华尔街历史上最惨的跌势，跌幅达13%。它使美国股票市场进入黑暗，引发美国乃至整个世界长达十几年的经济大萧条。</p>
          </div>
          <div class="book_btns flex_row">
            <span>开始阅读</span>
            <span>离线下载</span>
            <span>加入收藏</span>
          </div>
         </div>
       </div>

      <!-- 评论区 -->
      <div class="comment_box">
        <div class="comment_head">
          <div class="comment_ipt_txt"></div>
          <div class="comment_ipt flex_between">
            <img class="comment_user" src="@/assets/home/user.png" alt="">
            <div class="comment_input_box flex_1">
              <input class="comment_input" type="text" placeholder="添加评论">
              <span class="comment_input_btn">评论</span>
            </div>
          </div>
        </div>
        <div class="comment_con">
          <!-- 评论 -->
          <div class="comment_item flex_start">
            <div>
              <img class="comment_user" src="@/assets/home/user.png" alt="">
            </div>
            <div class="comment_texts flex_1">
              <div class="comment_name flex_between">
                <div>
                  <span>懒人</span>
                  <span class="comment_time">今天 15:52</span>
                </div>
                <div @click="handlFabulous">
                  <img v-if="zanstatuc" class="fabulous_icon" src="@/static/fabulous.png" alt="">
                  <img v-else class="fabulous_icon" src="@/static/fabulous_active.png" alt="">
                  
                  <span class="fabulous">2</span>
                </div>
              </div>
              <div class="comment_txt">
                <p>这个评论插件叫AntSay，简单三步即可在自己的网站里嵌入。</p>
                <p>1. 获取APP ID</p>
                <p>2. 一行代码引入组件</p>
                <p>3. 配置几个参数</p>
                <p>赶紧使用吧，地址：http://say.alipay.net/</p>
              </div>
              <!-- 回复 -->
              <div class="comment_reply">
                <div class="reply_item flex_start">
                  <div>
                    <img class="comment_user" src="@/assets/home/user.png" alt="">
                  </div>
                  <div class="reply_texts flex_1">
                    <div class="reply_top flex_between_center">
                      <div>
                        <span>懒人</span>
                        <span class="reply">回复</span>
                        <span>人懒</span>
                        <span class="comment_time">今天 15:52</span>
                      </div>
                      <div>
                        <img class="fabulous_icon" src="@/static/fabulous.png" alt="">
                        <span class="fabulous">2</span>
                      </div>
                    </div>
                    <div class="comment_txt">
                      <p>真贴心 <span class="cull">@禺彊</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 查看更多评论 -->
          <div class="comment_more">查看更多评论</div>
        </div>
      </div>

      <!-- 作者其他作品: -->
      <div class="book_swiper">
        <div class="book_swiper_tit">作者其他作品:</div>
        <div class="hot_con">
        	<swiper :options="swiperOption" ref="mySwiper">
        	    <swiper-slide class="swiper-slide" v-for="(item,hindex) in bookAther" :key="hindex">
                <img :src="item.image" class="hot_img">
                <p class="text_ellipsis book_slide_name">{{item.text}}</p>
        	    </swiper-slide>
        	</swiper>
          <img src="" alt="">
        	<!-- 前进后退按钮 -->
        	<div class="swiper-button-prev swiper-button-black swiper-button-prev0" ></div>
        	<div class="swiper-button-next swiper-button-black swiper-button-next0" ></div>
        </div>
      </div>

      <!-- 猜你喜欢： -->
      <div class="book_swiper like_book">
        <div class="book_swiper_tit">猜你喜欢：</div>
        <div class="hot_con">
        	<swiper :options="swiperOption1" ref="mySwiper">
        	    <swiper-slide class="swiper-slide" v-for="(item,hindex) in bookAther" :key="hindex">
                <img :src="item.image" class="hot_img">
                <p class="text_ellipsis book_slide_name">{{item.text}}</p>
        	    </swiper-slide>
        	</swiper>
          <img src="" alt="">
        	<!-- 前进后退按钮 -->
        	<div class="swiper-button-prev swiper-button-black swiper-button-prev1" ></div>
        	<div class="swiper-button-next swiper-button-black swiper-button-next1" ></div>
        </div>
      </div>

    </div>
    <v-comm></v-comm>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import vFooter from '@/components/footer.vue'
  import vComm from "@/components/comm"
  import 'swiper/dist/css/swiper.css'    //在全局没引入，这里记得要！
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
  	components: {
  	  swiper,
  	  swiperSlide,
      vFooter,
      vComm
  	},
    data() {
    	return {
    		zanstatuc:true,
    		swiperOption: {
    			speed: 1000,
    			// autoplay: 5000,
    			prevButton:'.swiper-button-prev0',
    			nextButton:'.swiper-button-next0',
    			slidesPerView : 3,
    			spaceBetween : 20,
    			loop:true
        },
        swiperOption1: {
    			speed: 1000,
    			// autoplay: 5000,
    			prevButton:'.swiper-button-prev1',
    			nextButton:'.swiper-button-next1',
    			slidesPerView : 3,
    			spaceBetween : 20,
    			loop:true
    		},
        bookAther:[
          {image:require('@/static/book.jpg'),text:'赌神高盛'},
          {image:require('@/static/book.jpg'),text:'赌神高盛'},
          {image:require('@/static/book.jpg'),text:'赌神高盛'},
          {image:require('@/static/book.jpg'),text:'赌神高盛'}
        ]
    	}
    },
    methods: {
      handclick() {
        this.$router.push({
          "path": "personal"
        })
        personal
      },
      handlFabulous() {
      	this.zanstatuc = !this.zanstatuc;
      }
    }
    // computed: {
    //     swiper () {
    //       return this.$refs.mySwiper.swiper
    //     }
    // },
    // mounted () {
    //     this.swiper.slideTo(1, 1000, false)
    // },

   }
</script>

<style>
  @import url("../video_dateil/video_dateil.css");
  .book_swiper {
    padding-top: 30px;
  }
  .like_book {
    padding-top: 0;
  }
  .book_swiper_tit {
    font-size: 24px;
    color: #333;
    padding-bottom: 20px;
  }
  .book_slide_name {
    text-align: center;
    font-size: 20px;
    color: #333;
    padding: 8px 0;
  }
  .book_btns {
    padding-top: 20px;
  }
  .book_btns span {
    padding: 6px 14px;
    font-size: 20px;
    color: #333;
    border-radius: 6px;
    border: 1px solid #D6675E;
    margin-right: 8px;
  }
  .book_btns span:last-child {
    margin-right: 0;
  }
  .book_texts {
    font-size: 20px;
    color: #999;
    line-height: 36px;
  }
  .book_d {
    padding-left: 15px;
  }
  .book_author {
    font-size: 20px;
    color: #333;
    line-height: 36px;
  }
  .book_author span {
    display: inline-block;
    padding-right: 18px;
    vertical-align: middle;
  }
  .book_author img {
    height: 26px;
    display: inline-block;
    vertical-align: middle;
  }
  .book_img {
    width: 220px;
    height: 310px;
    object-fit: cover;
  }
  .book_name {
    font-size: 28px;
    color: #333;
    font-weight: 600;
    padding-bottom: 6px;
  }
  .hot_img {
  	width: 100%;
  	height: 200px;
  	object-fit: cover;
    display: block;
  }
  .book_swiper .swiper-container {
  	width: 85%;
  }
  .hot_con {
  	position: relative;
  }
  .book_swiper .swiper-button-next,.book_swiper .swiper-button-prev {
  	outline: none;
    margin-top: -60px;
  }
</style>
