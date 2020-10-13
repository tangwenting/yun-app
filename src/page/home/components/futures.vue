<template>
	<div class="wrapper">
		<swiper :options="swiperOption">
			<swiper-slide class="swiper-slide" v-for="(item,index) in slide" :key="index">
				<img :src="item.imgUrl" class="swiper-img" @click="handclick()">
			</swiper-slide>
			
			<!-- 分页器 -->
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
		<div class="swiper-button-prev"></div>
		<!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
		<div class="swiper-button-next"></div>
		<!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
	</div>
</template>

<script>
	import 'swiper/dist/css/swiper.css' //在全局没引入，这里记得要！
	import {
		swiper,
		swiperSlide
	} from 'vue-awesome-swiper'

	export default {
		components: {
			swiper,
			swiperSlide
		},
		data() {
			return {
				swiperOption: {
					autoplay: 3000,
					speed: 1000,
					// autoplayDisableOnInteraction: false,
					loop: true,
					centeredSlides: true,
					slidesPerView: 3,
					pagination: '.swiper-pagination',
					paginationClickable: true,
					prevButton: '.swiper-button-prev',
					nextButton: '.swiper-button-next',
					paginationType : 'progress',
				    paginationProgressRender: function (swiper, progressbarClass) {
					  return '<span class="' + progressbarClass + '"></span>';
				    }
				},
				slide: [
					{
						imgUrl: require("@/assets/home/qh2.png"),
					},
					{
						imgUrl: require("@/assets/home/qh1.png"),
					},
					{
						imgUrl: require("@/assets/home/qh3.png"),
					},
					{
						imgUrl: require("@/assets/home/qh2.png"),
					},
				]
			};
		},
		methods: {
			handclick() {
				this.$router.push({
					path: "/shangwu_list"
				})
			}
		}
	}
</script>
<style>
	.swiper-pagination-progress .swiper-pagination-progressbar{
		background: #ff9019;
	}
</style>
<style lang="less" scoped>
	.wrapper {
		overflow: hidden;
		margin-top: 40px;
		width: 100%;
		position: relative;
		.swiper-pagination {
			width: 100px;
			margin: auto;
			height: 10px;
			border-radius: 8px;
			bottom: 0;
			left: 0;
			right: 0;
			top: inherit;
			background: #fac385;
		}
		.swiper-button-prev {
			background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l4.2%2C4.2L8.4%2C22l17.8%2C17.8L22%2C44L0%2C22z'%20fill%3D'%23ff9019'%2F%3E%3C%2Fsvg%3E");
			
		}
		.swiper-button-next{
			background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L5%2C44l-4.2-4.2L18.6%2C22L0.8%2C4.2L5%2C0z'%20fill%3D'%23ff9019'%2F%3E%3C%2Fsvg%3E");
			
		}
		.swiper-slide {
			transform: scale(0.9);
			transition: transform 1.0s;
			.swiper-img {
				width: 100%;
			}
		}
		.swiper-slide-active {
			transform: scale(1);

		}
		
	}
</style>
