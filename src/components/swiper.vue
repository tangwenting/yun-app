<template>
	<div>
    <div class="hot_tit">最热招商平台</div>
		<div class="hot_con">
			<swiper :options="swiperOption" ref="mySwiper">
			    <swiper-slide class="swiper-slide" v-for="(item,hindex) in hotSlide" :key="hindex">
					<img :src="item.image" class="hot_img">
			    </swiper-slide>
			</swiper>
			<!-- 前进后退按钮 -->
			<div class="swiper-button-prev swiper-button-black" ></div>
			<div class="swiper-button-next swiper-button-black" ></div>
		</div>
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
		name:'hotSwiper',
		props:['hotSlide'],
		data() {
			return {
				swiperOption: {
					speed: 1000,
					autoplay: 5000,
					prevButton:'.swiper-button-prev',
					nextButton:'.swiper-button-next',
					slidesPerView : 4,
					spaceBetween : 20,
					loop:true
				},
			}
		},
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
	.hot_img {
		width: 100px;
		height: 100px;
		object-fit: cover;
	}
	.hot .swiper-container {
		width: 85%;
	}
	.hot_con {
		position: relative;
	}
	.hot .swiper-button-next,.hot .swiper-button-prev {
		outline: none;
	}
	.hot {
		padding: 10px 0 30px;
	}
  .hot_tit {
  	font-size: 22px;
  	color: #333;
  	padding-left: 20px;
  	border-left: 3px solid #C52519;
  	margin-bottom: 20px;
  }
</style>
