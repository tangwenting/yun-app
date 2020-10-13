<template>
	<div class="page">
		<div class="list padding">
			<div class="introduce_head">
				<span>商务中心 >></span>
				<span>平台列表 >></span>
			</div>
			<!-- 招商平台 -->
			<div class="list_platform">
				<div class="hot_tit">招商平台</div>
				<div class="list_platform_con">
					<div class="list_platform_item flex_items_center" v-for="(item,lindex) in list" :key="lindex" @click="handlIntroduce">
						<div class="list_platform_img">
							<img :src="item.image" alt="">
						</div>
						<div class="list_platform_texts flex_1">
							<h5 class="list_platform_tit">{{item.title}}</h5>
							<div class="list_platform_text flex_between">
								<div class="list_platform_lt">
									<p>公司网址：{{item.website}}</p>
									<p>信誉评级：{{item.score}}</p>
									<p>浏览热度：{{item.hot}}次</p>
								</div>
								<div class="list_platform_rt">
									<p>返佣时间：{{item.time}}</p>
									<p>招商姓名：{{item.name}}</p>
									<p>联系电话：{{item.mobile}}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
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
    <v-footer></v-footer>
	</div>
</template>

<script>
  import hotSwiper from '@/components/swiper'
  import news from '@/components/news'
  import vFooter from '@/components/footer'
	export default {
		components: {
		  hotSwiper,
      vFooter,
      news
		},
		data() {
			return {
				list:[
					{
            image: require('@/static/int_logo.png'),
						title:'联准外汇交易商',
						website:'www.baidu.com',
						score:'',
						hot:'520',
						time:'日返',
						name:'郝先生',
						mobile:'13379556286'
					},
					{
						image: require('@/static/int_logo.png'),
						title:'联准外汇交易商',
						website:'www.baidu.com',
						score:'',
						hot:'520',
						time:'日返',
						name:'郝先生',
						mobile:'13379556286'
					}
				],
				newsList:[
					{text:'资讯标题急急水果蛋糕发挥共额题急急水果蛋糕发挥共额题急急水果蛋糕',num:'520'},
					{text:'资讯标题急急水果蛋糕发挥共额题急急水果蛋糕发挥共额题急急水果蛋糕',num:'520'},
					{text:'资讯标题急急水果蛋糕发挥共额题急急水果蛋糕发挥共额题急急水果蛋糕',num:'520'},
					{text:'资讯标题急急水果蛋糕发挥共额题急急水果蛋糕发挥共额题急急水果蛋糕',num:'520'},
					{text:'资讯标题急急水果蛋糕发挥共额题急急水果蛋糕发挥共额题急急水果蛋糕',num:'520'},
				],
				hotSlide:[
          {image: require('@/static/int_logo.png')},
          {image: require('@/static/int_logo.png')},
          {image: require('@/static/int_logo.png')},
          {image: require('@/static/int_logo.png')},
          {image: require('@/static/int_logo.png')},
          {image: require('@/static/int_logo.png')}
				],
			}
		},
		methods: {
			handlIntroduce() {
				this.$router.push({
					path:'/shangwu_introduce',
					query: {

					}
				});
			}
		}
	}
</script>

<style>
	@import url("../shangwu_introduce/shangwu_introduce.css");
	.list_platform {
		padding-bottom: 30px;
	}
	.list_platform_item {
		padding: 20px 0;
		border-bottom: 1px solid #F0F0F0;
	}
	.list_platform_img img {
		display: block;
		width: 130px;
		height: 130px;
		margin-right: 20px;
	}
	.list_platform_tit {
		font-size: 18px;
		color: #000;
		padding-bottom: 6px;
	}
	.list_platform_text p {
		font-size: 16px;
		color: #333;
		line-height: 36px;
	}
	.list_platform_lt {
		padding-right: 18px;
	}
	.list_platform_lt,.list_platform_rt {
		width: 49%;
	}
</style>
