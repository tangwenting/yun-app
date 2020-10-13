<template>
	<div class="page">
		<div class="content padding">
			<div class="introduce_head">
				<span>商务中心 >></span>
				<span>平台列表 >></span>
				<span>精益操盘</span>
			</div>
			<!-- 精益操盘招商平台 -->
			<div class="introduce_1">
				<div class="introduce_1_bg flex_items_center">
					<img src="@/static/int1.png" alt="">
					<span>精益操盘招商平台</span>
				</div>
				<div class="introduce_1_con">
					<div class="introduce_1_lt flex_row">
						<div class="introduce_1_img">
							<img src="@/static/int_logo.png" alt="">
						</div>
						<div class="introduce_1_detail">
							<p>公   司   名：jxxxxxxx xx</p>
							<p>公司地址：jxxxxxxx xx</p>
							<p>公司网址：jxxxxxxx xx</p>
							<p>信誉评级：jxxxxxxx xx</p>
							<p>浏览热度：jxxxxxxx xx</p>
							<p>招商姓名： jxxxxxxx xx</p>
							<p>QQ:12345678</p>
							<p>微信:12345678</p>
							<p>电话:12345678</p>
							<p>备注：联系记得备注XXxxXXX</p>
						</div>
					</div>

				</div>
			</div>
			<!-- 公司情况 -->
			<div class="introduce_2">
				<div class="introduce_1_bg flex_items_center">
					<img src="@/static/int2.png" alt="">
					<span>公司情况</span>
				</div>
				<div class="company">
					<p>{{company}}</p>
				</div>
			</div>
			<!-- 软件介绍 -->
			<div class="introduce_2">
				<div class="introduce_1_bg flex_items_center">
					<img src="@/static/int3.png" alt="">
					<span>软件介绍</span>
				</div>
				<div class="company">
					<p>{{company}}</p>
				</div>
			</div>
			<!-- 下载包 -->
			<div class="download">
				<div class="download_tabs flex_row">
					<span v-for="(tab,tindex) in tabs" :key='tindex' @click="handlTab(tindex)" :class="tabIndex==tindex?'tab_active':'' ">{{tab.name}}</span>
				</div>
				<div class="download_con">
					<div class="download_1 flex_between" v-if="tabIndex==0">
						<div class="download_1_sel flex_center">
							<img src="@/static/pc.png" alt="">
							<div class="download_1_btn">
								<span>pc软件1</span><br>
								<span>pc软件2</span>
							</div>
						</div>
						<div class="download_1_sel flex_center">
							<img src="@/static/web.png" alt="">
							<div class="download_1_btn">
								<span>移动端软件1</span><br>
								<span>移动端软件2</span>
							</div>
						</div>
					</div>
					<div class="download_2 flex_row" v-if="tabIndex==1">
						<div class="download_2_item" v-for="(zip,zindex) in zipList" :key='zindex'>
							<img :src="zip.image" alt="">
							<p>{{zip.name}}</p>
						</div>
					</div>
					<div class="download_3 flex_between"  v-if="tabIndex==2">
						<div class="video_item" v-for="(video,vindex) in videoUrl" :key='vindex'>
							<video class="video" :src="video.url" controls="controls"></video>
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
					{image:'@/static/int_logo.png'},
					{image:'@/static/int_logo.png'},
					{image:'@/static/int_logo.png'},
					{image:'@/static/int_logo.png'},
					{image:'@/static/int_logo.png'},
				],
				tabIndex:0,
				tabs:[
					{name:'软件下载'},{name:'资料包下载'},{name:'视频'}
				],
				company:'国王金融(www.kingsfintech.com)集团是金融交易国际化的引领者，是专注于国际金融服务的互联网金融科技集团公司，也是受新西兰权威机构(FSP)监管和美国全国期货协会( NFA )监管的国际投资服务商、国际交易经纪商、软件服务商。致力于为全球华人提供一流的国际金融交易服务。国王金融服务各类投资公司及资产管理机构，投资品种丰富，提供包括国际期货、国际股票、期权交易、私募基金等金融产品服务，覆盖全球主流交易品种，提供一站式服务平台，让资产配置全球化变得简单。',
				zipList:[
					{image:'@/static/ya.png',name:'文件名'},
					{image:'@/static/ya.png',name:'文件名'},
					{image:'@/static/ya.png',name:'文件名'}
				],
				videoUrl:[
					{url:'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'}
				],
				newsList:[
					{text:'资讯标题急急水果蛋糕发挥共额题急急水果蛋糕发挥共额题急急水果蛋糕',num:'520'},
					{text:'资讯标题急急水果蛋糕发挥共额题急急水果蛋糕发挥共额题急急水果蛋糕',num:'520'},
					{text:'资讯标题急急水果蛋糕发挥共额题急急水果蛋糕发挥共额题急急水果蛋糕',num:'520'},
					{text:'资讯标题急急水果蛋糕发挥共额题急急水果蛋糕发挥共额题急急水果蛋糕',num:'520'},
					{text:'资讯标题急急水果蛋糕发挥共额题急急水果蛋糕发挥共额题急急水果蛋糕',num:'520'},
				]
			}
		},

		methods: {
			handlTab(index) {
				this.tabIndex = index;
			}

		}
	}
</script>

<style>
	@import url("./shangwu_introduce.css");
</style>
