<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide class="swiper-slide" v-for="(item,index) in slide" :key="index">
        <img :src="item.imgUrl" class="swiper-img">
      </swiper-slide>
      <!-- 分页器 -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'    //在全局没引入，这里记得要！
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        swiperOption: {
          autoplay: 5000,
					pagination : '.swiper-pagination',
        },
        slide: [
					{
						imgUrl: require("@/assets/home/swiper_02.jpg"),
					},
					{
						imgUrl: require("@/assets/home/swiper_02.jpg"),
					},
					{
						imgUrl: require("@/assets/home/swiper_02.jpg"),
					}
				]
      };
    }
  }

</script>
<style>
	.wrapper  .swiper-pagination-bullet {
		background: #fff;
		opacity: 1;
	}
	.wrapper  .swiper-pagination-bullet-active{
		background: #ef7b1c
	}
</style>
<style lang="less" scoped>

 //  .wrapper {
	// 	overflow: hidden;
	// 	width: 100%;
	// 	height: 0;
	// 	padding-bottom: 53.33%;
	// 	background: #eee;
	// 	.swiper-img {
	// 		width: 100%
	// 	}
	// }
  .wrapper {
  	overflow: hidden;
  	width: 100%;
  	height: 400px;
  	.swiper-img {
  		width: 100%;
      height: 100%;
  	}
  }
</style>
