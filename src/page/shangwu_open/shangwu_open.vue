<template>
  <div class="page">
    <div class="open_content padding">
      <div class="introduce_head">
      	<span>商务中心 >></span>
      	<span>奇瑞期货开户</span>
      </div>
      <div class="open_head">
        <h5 class="open_tit">奇瑞期货开户</h5>
        <p class="open_date">开户时间段：周一至周五08:30-17:30</p>
      </div>
      <div class="open_con">
        <img src="@/static/open.jpg" alt="">
      </div>
      <!-- 最热招商平台 -->
      <div class="hot">
      	<div class="hot_con">
      		<hot-swiper :hotSlide='hotSlide'></hot-swiper>
      	</div>
      </div>
      <!-- 招商投资资讯 -->
      <div class="news">
      	<div class="news_con">
      		<news :newsList='newsList'></news>
      	</div>
      </div>
    </div>
    <!-- back -->
    <div class="back" @click="back">
    	<img src="@/static/back.png" alt="">
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
 import hotSwiper from '@/components/swiper.vue'
 import news from '@/components/news.vue'
 import vFooter from '@/components/footer.vue'
 export default {
    	components: {
    	  hotSwiper,
        news,
        vFooter
    	},
      data() {
        return {
          hotSlide:[
          	{image: require('@/static/int_logo.png')},
          	{image: require('@/static/int_logo.png')},
          	{image: require('@/static/int_logo.png')},
            {image: require('@/static/int_logo.png')},
            {image: require('@/static/int_logo.png')},
          ],
          newsList:[
          	{text:'资讯标题急急水果蛋糕发挥共额题急急水果蛋糕发挥共额题急急水果蛋糕',num:'520'},
          	{text:'资讯标题急急水果蛋糕发挥共额题急急水果蛋糕发挥共额题急急水果蛋糕',num:'520'},
          	{text:'资讯标题急急水果蛋糕发挥共额题急急水果蛋糕发挥共额题急急水果蛋糕',num:'520'},
          	{text:'资讯标题急急水果蛋糕发挥共额题急急水果蛋糕发挥共额题急急水果蛋糕',num:'520'},
          	{text:'资讯标题急急水果蛋糕发挥共额题急急水果蛋糕发挥共额题急急水果蛋糕',num:'520'},
          ],
        }
      },
      methods: {
      	back(){
      		if (window.history.length <= 1) {
      			this.$router.push({path:'/'});
      			return false
      		} else {
      			this.$router.go(-1);
      		}
      	}
      }
  }
</script>

<style>
  .back {
  	position: fixed;
  	right: 0;
  	top: 160px;
  }
  .back img {
  	height: 65px;
  }
  .open_con {
    padding-bottom: 30px;
  }
  .open_con img {
    width: 100%;
    display: block;
  }
  .open_head {
    text-align: center;
    color: #333;
    padding-bottom: 20px;
  }
  .open_tit {
    font-size: 28px;
    padding-bottom: 14px;
  }
  .open_date {
    font-size: 20px;
  }
  .introduce_head {
  	padding: 25px 0;
  }
  .introduce_head span {
  	font-size: 22px;
  	color: #333;
  	display: inline-block;
  }
</style>
