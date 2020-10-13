<template>
	<div class="page">
		<!-- banner 图 -->
		<div class="banner_img">
			<img src="@/assets/home/swiper_02.jpg" alt="">
		</div>
		<!-- 平台中心 -->
		<div class="b_platform flex_row padding">
			<div class="platform_lt">
				<div class="platform_item flex_items_center" :class="platformTab==iindex?'platform_bg':''" v-for="(item,iindex) in platformItem" :key='iindex' @click="handlPlatform(iindex,item.rlimg)">
					<div>
						<img class="platform_item_img" :src="item.image" alt="">
					</div>
					<div class="platform_item_con">
						<h5 class="platform_item_tit">{{item.title}}</h5>
						<p class="text_ellipsis platform_item_text" :class="platformTab==iindex?'platform_active':'' " >{{item.text}}</p>
					</div>
				</div>
			</div>
			<div class="platform_rt flex_1">
				<img class="platform_img" :src="investmentImage" alt="">
			</div>
		</div>
		<!-- 招商排行  平台下载 -->
		<div class="easy_handle padding">
			<!-- 招商排行 -->
			<div class="investment">
				<div class="investment_head flex_between_center">
					<div class="investment_tit">
						<img class="investment_tit_icon" src="@/static/easy1.png" alt="">
						<p class="investment_tit_text">招商排行</p>
					</div>
					<div class="investment_more">更多+</div>
				</div>
				<div class="investment_con">
					<div class="investment_con_box">
						<div class="investment_item flex_between_center" v-for="(item,sindex) in investmentList" :key='sindex' @click="handlInvestment(sindex)">
							<div class="investment_rank" :class="investmentTab==sindex?'active':'' ">{{item.num}}</div>
							<div class="investment_detail flex_1">
								<h5 class="investment_con_tit" :class="investmentTab==sindex?'active':'' ">{{item.name}}</h5>
								<div class="investment_money flex_between_center" :class="investmentTab==sindex?'active':'' ">
									<div class="investment_rake">返佣：预留{{item.money}}美金</div>
									<div class="investment_cycle">周期：{{item.cycle}}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- 平台下载 -->
			<div class="download">
				<div class="investment_head flex_between_center">
					<div class="investment_tit">
						<img class="investment_tit_icon" src="@/static/easy2.png" alt="">
						<p class="investment_tit_text">平台下载</p>
					</div>
					<div class="investment_more">更多+</div>
				</div>
				<div class="download_con">
					<div class="download_item flex_between_center" v-for="(item,dindex) in downloadList" :key='dindex'>
						<div class="download_lt flex_between_center">
							<div class="download_item_img">
								<img :src="item.image" alt="">
							</div>
							<div>
								<h5 class="download_item_tit">{{item.title}}</h5>
								<p class="download_item_num">{{item.num}}次下载</p>
							</div>
						</div>
						<div class="download_btn">点击下载</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 新闻资讯 -->
		<div class="news padding">
			<div class="investment_head flex_between_center">
				<div class="investment_tit">
					<img class="investment_tit_icon" src="@/static/news.png" alt="">
					<p class="investment_tit_text">资讯要闻</p>
				</div>
				<div class="investment_more" @click="hanldNewsd">更多+</div>
			</div>
			<div class="news_con">
				<div class="news_box flex_between">
					<div class="news_item" v-for="(item,nindex) in newsList" :key='nindex' @click="hanldNewsd">
						<div class="news_img">
							<img :src="item.image" alt="">
						</div>
						<div class="news_text_con">
							<h5 class="news_tit text_ellipsis">{{item.title}}</h5>
							<div class="news_texts text_clamp2">{{item.text}}</div>
							<div class="news_date">{{item.date}}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 广告位 -->
		<v-adver></v-adver>
    <v-footer></v-footer>
	</div>
</template>

<script>
  import vAdver from "@/components/advertisement"
  import vFooter from "@/components/footer"
	export default {
		data() {
			return {
				investmentTab:0,
				investmentImage: require('@/static/shangwu.jpg'),
				platformTab:1, //保存期货平台列表当前点击的下标
				platformItem:[
					{
						id:0,
						title:'期货平台',
						text:'期货内容期货内容期货内容期货内',
						image: require('@/static/shangwu1.png'),
						rlimg: require('@/static/book.jpg')
					},
					{
						id:1,
						title:'期货平台',
						text:'期货内容期货内容期货内容期货内',
						image: require('@/static/shangwu2.png'),
						rlimg: require('@/static/shangwu.jpg')
					},
					{
						id:2,
						title:'期货平台',
						text:'期货内容期货内容期货内容期货内',
						image:require('@/static/shangwu1.png'),
						rlimg: require('@/static/book.jpg')
					},
					{
						id:3,
						title:'期货平台',
						text:'期货内容期货内容期货内容期货内',
						image:require('@/static/shangwu4.png'),
						rlimg: require('@/static/shangwu.jpg')
					}
				],
				investmentList:[
					{
						num:'01',
						name:'精易操盘',
						money:'5.5',
						cycle:'日返'
					},
					{
						num:'02',
						name:'精易操盘',
						money:'5.5',
						cycle:'日返'
					},
					{
						num:'03',
						name:'精易操盘',
						money:'5.5',
						cycle:'日返'
					},
					{
						num:'04',
						name:'精易操盘',
						money:'5.5',
						cycle:'日返'
					},
					{
						num:'05',
						name:'精易操盘',
						money:'5.5',
						cycle:'日返'
					},
					{
						num:'06',
						name:'精易操盘',
						money:'5.5',
						cycle:'日返'
					},
				],
				downloadList:[
					{
						image: require('@/static/easy.png'),
						title:'精易操盘',
						num:555
					},
					{
						image: require('@/static/easy.png'),
						title:'精易操盘',
						num:555
					},
					{
						image: require('@/static/easy.png'),
						title:'精易操盘',
						num:555
					}
				],
				newsList:[
					{
						image: require('@/static/shangwu.jpg'),
						title:'EXNESS合法正规吗？EXNESS可',
						text:'以高额收益回报为诱导吸引投资者从事 证券活动，以骗服务费或投资理财款...',
						date:'2019/12/04  12:01：30'
					},
					{
						image: require('@/static/shangwu.jpg'),
						title:'EXNESS合法正规吗？EXNESS可',
						text:'以高额收益回报为诱导吸引投资者从事 证券活动，以骗服务费或投资理财款...',
						date:'2019/12/04  12:01：30'
					},
					{
						image: require('@/static/shangwu.jpg'),
						title:'EXNESS合法正规吗？EXNESS可',
						text:'以高额收益回报为诱导吸引投资者从事 证券活动，以骗服务费或投资理财款...',
						date:'2019/12/04  12:01：30'
					}
				],
			}
		},
    components: {vFooter,vAdver},
		methods: {
			hanldNewsd() {
				this.$router.push({
					path:'/news_dateil',
					query: {

					}
				});
			},
			handlPlatform(index, imgurl) {  //平台列表点击事件
				this.platformTab = index;  //保存当前点击的下标
				this.investmentImage = imgurl;
			},
			handlInvestment(index) {
				this.investmentTab = index;
				this.$router.push({
					path:'/shangwu_list',
					query: {

					}
				});
			}
		}
	}
</script>

<style lang="less" scoped>
	.active {
		color: #C52519!important;
	}
	.news_banner {
		padding: 30px 0;
	}
	.news_banner img {
		display: block;
		width: 100%;
		height: 150px;
		object-fit: cover;
	}
	.news_item {
		padding-bottom: 30px;
	}
	.news_date {
		font-size: 16px;
		color: #828181;
		padding-top: 18px;
	}
	.news_text_con {
		padding: 0 18px;
		background: #F3F3F3;
		height: 200px;
	}
	.news_item {
		width: 48%;
	}
	.news_texts {
		font-size: 16px;
		color: #333;
		line-height: 28px;
	}
	.news_tit {
		font-size: 20px;
		color: #333;
		padding: 18px 0;
	}
	.news_img img {
		display: block;
		height: 205px;
		width: 100%;
		object-fit: cover;
	}
	.news_con {
		padding: 0 24px;
	}
	.news {
		padding-top: 30px;
	}
	.download {
		padding-top: 30px;
	}
	.download_item {
		margin-bottom: 20px;
	}
	.download_btn {
		font-size: 20px;
		color: #fff;
		background: #C52519;
		padding: 14px 20px;
		border-radius: 8px;
	}
	.download_item_tit {
		font-size: 22px;
		padding-bottom: 5px;
		color: #333;
	}
	.download_item_num {
		font-size: 16px;
		color: #333;
	}
	.download_item_img {
		width: 220px;
		text-align: center;
		height: 100px;
		line-height: 100px;
		background: #F3F3F3;
		margin-right: 20px;
	}
	.download_item_img img {
		max-width: 100%;
		max-height: 100%;
	}
	.investment_money {
		font-size: 14px;
		color: #787878;
	}
	.investment_head {
		border-bottom: 1px solid #C52519;
		margin-bottom: 20px;
		.investment_tit {
			padding-bottom: 8px;
			border-bottom: 4px solid #C52519;
			.investment_tit_text {
				font-size: 22px;
				color: #C52519;
				display: inline-block;
				vertical-align: middle;
				padding-left: 4px;
			}
			.investment_tit_icon {
				width: 22px;
				vertical-align: middle;
			}
		}
		.investment_more {
			font-size: 14px;
			color: #333;
			padding-top: 5px;
		}
	}

	.investment_con {
		// height: 500px;
		background: #F3F3F3;
		.investment_con_box {
			padding: 36px 35px;
			.investment_item {
				margin-bottom: 25px;
				.investment_rank {
					font-size: 46px;
					color: #C52519;
					color: #333;
					font-family: Arial, "Microsoft YaHei";
				}
				.investment_detail {
					padding-left: 16px;
					.investment_con_tit {
						font-size: 22px;
						padding-bottom: 5px;
						color: #333;
					}
				}
			}
		}
	}
	.easy_handle {
		padding-top: 30px;
	}
	.banner_img {
    width: 100%;
    height: 400px;
    overflow: hidden;
		img {
			display: block;
			width: 100%;
      height: 100%;
			object-fit: cover;
		}
	}
	.platform_bg {
		background-image: url(../../static/active_bg.png);
		background-size: 100% 100%;
	}
	.platform_active {
		color: #333!important;
	}
	.b_platform {
		padding-top: 30px;
	}
	.platform_lt {
		background: #F3F3F3;
		width: 290px;
		.platform_item {
			position: relative;
			padding: 12px;
			height: 96px;
			width: 335px;
			.platform_item_img {
				width: 35px;
				margin-right: 20px;
			}
			.platform_item_con {
				width: calc(100% - 115px);
				.platform_item_tit {
					font-size: 14px;
					color: #333;
					padding-bottom: 4px;
				}
				.platform_item_text {
					font-size: 12px;
					color: #8A8A8A;
				}
			}
		}
	}
	.platform_img {
		width: 100%;
		display: block;
		height: 100%;
		object-fit: cover;
	}
</style>
