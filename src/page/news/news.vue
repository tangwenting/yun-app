<template>
  <div class="page">
    <!-- banner  图 -->
    <div class="news_banner">
      <img class="news_banner_img" src="@/assets/home/swiper_02.jpg" alt="">
    </div>
    <div class="news_content padding">
      <!-- 最新资讯 -->
      <div class="news_con">
        <div class="investment_head flex_between_center">
        	<div class="investment_tit">
        		<img class="investment_tit_icon" src="@/static/news.png" alt="">
        		<p class="investment_tit_text">最新资讯</p>
        	</div>
        	<div class="investment_more" @click="handlNews">更多+</div>
        </div>
        <div class="news_item" v-for="(item,nindex) in newsList" :key='nindex' @click="handlNews">
          <div class="news_tit text_ellipsis">{{item.title}}</div>
          <div class="news_item_con flex_row">
            <img class="news_item_img" :src="item.imgUrl" alt="">
            <div class="news_texts flex_1">
              <p class="news_txt text_clamp3">{{item.text}}</p>
              <div class="news_text_bt flex_between_center">
                <div class="news_author">
                  来源：<span>{{item.source}}</span>
                  <!-- | <span>作者：{{item.author}}</span> -->
                </div>
                <div class="news_time">{{item.time}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 专题报道 -->
      <div class="special_con">
        <div class="investment_head flex_between_center">
        	<div class="investment_tit">
        		<img class="investment_tit_icon" src="@/static/baodao.png" alt="">
        		<p class="investment_tit_text">专题报道</p>
        	</div>
        	<div class="investment_more" @click="handlNews">更多+</div>
        </div>
        <div class="special_box flex_between">
          <div class="special_item" v-for="(item,sindex) in specialList" :key='sindex' @click="handlNews">
            <img class="special_img" :src="item.imgUrl" alt="">
            <div class="special_texts">
              <div class="special_tit text_ellipsis">{{item.title}}</div>
              <div class="special_text text_ellipsis">{{item.text}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 广告图 -->
    <div class="news_bn">
      <img src="@/static/news_banner.jpg" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        newsList:[
          {
            title:'国家卫健委最新通报 25日新增确诊病例11例 5例为境外输入',
            imgUrl: require('@/static/shangwu.jpg'),
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis  ultrices gravida. Risus commodo viverra ...',
            source:'中国财经网',
            author:'拉菲特',
            time:'2020/06/18'
          },
          {
            title:'国家卫健委最新通报 25日新增确诊病例11例 5例为境外输入',
            imgUrl: require('@/static/shangwu.jpg'),
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis  ultrices gravida. Risus commodo viverra ...',
            source:'中国财经网',
            author:'拉菲特',
            time:'2020/06/18'
          }
        ],
        specialList:[
          {
            imgUrl: require('@/static/shangwu.jpg'),
            title:'国家卫健委最新通报 25日新增'
          },
          {
            imgUrl: require('@/static/shangwu.jpg'),
            title:'国家卫健委最新通报 25日新增',
            text:'国家卫健委最新通报 25日新增确诊病例11例 5例为境外输入'
          },
          {
            imgUrl:require('@/static/shangwu.jpg'),
            title:'国家卫健委最新通报 25日新增',
            text:'国家卫健委最新通报 25日新增确诊病例11例 5例为境外输入'
          }
        ]
      }
    },
    methods:{
      handlNews() {
        this.$router.push({
          path:'/news_dateil'
        })
      }
    }
  }
</script>

<style>
  @import url("news.css");
</style>
