<template>
	<div class="rightmenu" v-show="show">
		<div class="row"></div>
		<div class="menu">
			<div class="menu-box">
				<div class="fork" @click="close">×</div>
				<ul class="list">
					<li class="list-item" v-for="(item, index) in list" :key="item.title">
						<router-link :to="item.url" class="to">
							<div class="icon">
								<img :src="item.icon" alt="">
							</div>
							<div class="title">{{item.title}}</div>
						</router-link>
						<ul class="list-item-ul" v-if="item.children">
							<li v-for="(o,i) in item.children" :key="o.title">
								<router-link :to="o.url" class="to">{{ o.title }}</router-link>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import bus from "./bus.js"
	export default {
		name: "vRightMenu",
		data() {
			return {
				show: false,
				list: [],
				list1: [{
						"title": "主页",
						"icon": require("../assets/home/home.png"),
						"url": "home"
					},
					{
						"title": "论坛",
						"icon": require("../assets/home/forum.png"),
						"url": "forum"
					},
					{
						"title": "商务中心",
						"icon": require("../assets/home/Fastbusiness.png"),
						"url": "shangwu"
					},
					{
						"title": "资讯中心",
						"icon": require("../assets/home/Finance.png"),
						"url": "news",
					},
					{
						"title": "投教中心",
						"icon": require("../assets/home/education.png"),
						"url": "toujiao",
					},
					{
						"title": "公告中心",
						"icon": require("../assets/home/Announcement.png"),
						"url": "notice",
					},
					{
						"title": "下载中心",
						"icon": require("../assets/home/download.png"),
						"url": "download",
					},
					{
						"title": "个人中心",
						"icon": require("../assets/home/user.png"),
						"url": "personal",
					},
				],
				list2: [{
						"title": "个人中心",
						"icon": require("../assets/home/user.png"),
						"url": "personal",
						"children": [{
								"title": "个人资料",
								"url": "personaldata",
							},
							{
								"title": "发布文章",
								"url": "postarticle",
							},
						]
					},
					{
						"title": "商务信息",
						"icon": require("../assets/home/Fastbusiness.png"),
						"url": "",
						"children": [{
								"title": "发布招商",
								"url": "investment",
							},
							{
								"title": "发布广告",
								"url": "advertising",
							},
							{
								"title": "发布问题",
								"url": "questions",
							}
						]
					},
					{
						"title": "入驻平台",
						"icon": require("../assets/home/rz.png"),
						"url": "platform",
					},
					{
						"title": "我的发布",
						"icon": require("../assets/home/fb.png"),
						"url": "releases",
					},
					{
						"title": "我的余额",
						"icon": require("../assets/home/yue.png"),
						"url": "",
						"children": [{
								"title": "充值",
								"url": "recharge",
							},
							{
								"title": "提现",
								"url": "withdrawal",
							}
						]
					},
					{
						"title": "我的收藏",
						"icon": require("../assets/home/sc.png"),
						"url": "personal",
						
					},
					{
						"title": "消息中心",
						"icon": require("../assets/home/msg.png"),
						"url": "message",
						
					},
					{
						"title": "设置",
						"icon": require("../assets/home/sz.png"),
						"url": "",
						"children": [{
								"title": "切换账号",
								"url": "login",
							},
							{
								"title": "退出账号",
								"url": "login",
							}
						]
					},
				]
			}
		},
		methods: {
			close() {
				this.show = !this.show;
			}
		},
		mounted() {
			bus.$on('isShow', (e, type) => {
				this.show = e;
				if (type == 1) {
					this.list = this.list1
				} else {
					this.list = this.list2
				}
			})
		}
	}
</script>

<style lang="less" scoped>
	.rightmenu {
		width: 100%;
		height: 100%;
		position: fixed;
		z-index: 9999;
		display: flex;

		.row {
			width: 241px;
			height: 100%;
			opacity: 0.5;
			background: #000;
		}

		.menu {
			width: calc(100% - 241px);
			height: 100%;
			background: #ee594d;

			.menu-box {
				background: #fff;
				width: 90%;
				height: 92%;
				overflow: hidden;

				.fork {
					font-size: 70px;
					width: 100px;
					height: 100px;
					cursor: pointer;
					text-align: center;
					color: #000;
				}

				.list {
					padding: 0 50px;
					overflow: auto;
					height: calc(100% - 100px);

					.list-item {
						padding: 35px 0;
						border-bottom: 1px solid #dfdfdf;

						.list-item-ul {
							li {
								padding-top: 20px;

								a {
									font-size: 24px;
									color: #000;
									margin-left: 40%;
								}
							}

						}

						.to {
							display: flex;
							margin-left: 28%;
							// justify-content: center;

							.icon {
								width: 30px;
								margin-right: 10px;

								img {
									width: 100%;
									margin-top: -5px;
								}
							}

							.title {
								color: #000;
								font-size: 30px;
							}
						}
					}
				}
			}
		}
	}
</style>
