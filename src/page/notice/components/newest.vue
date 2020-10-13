<template>
	<div class="mian">
		<div class="header flex">
			<div class="header-left verticallyflex">
				<div class="border"></div>
				<img src="@/assets/notice/newest.png" alt="">
				<div class="title">最新公告</div>
			</div>
			<div class="header-right verticallyflex">
				<router-link to="" class="more">
					<span>更多</span>
					<span class="jia">+</span>
				</router-link>
			</div>
		</div>
		<div class="righttxt">推荐公告</div>
		<div class="chaintime">
			<div class="chaintime-left">
				<ul>
					<li v-for="(item, index) in 7" @click="handclick">
						<div class="text3"><span>08:01</span><span class="span1">2020年一季度营业收入98,447,94元</span></div>
						<div class="hr"></div>
					</li>
				</ul>
			</div>
			<div class="chaintime-right">
				<div class="chaintime-right-img">
					<img src="@/assets/notice/gg1.png" alt="">
				</div>
				<ul>
					<li v-for="(item, index) in 3" @click="handclick">
						<div class="text3">资讯标题急急水果蛋糕发挥共额</div>
						<div><img src="@/assets/home/rd.png" alt=""></div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "newest",
		data() {
			return {
				
			}
		},
		methods: {
			handclick() {
				this.$router.push({
					path: "detailsnotice"
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.mian {
		margin: 0 30px;
	}
	.header {
		border-bottom: 3px solid #de5d54;
		margin-top: 30px;
		margin-bottom: 13px;
		line-height: 50px;
		justify-content: space-between;
	  
		.header-left {
			position: relative;
			color: #c52519;
	
			.border {
				position: absolute;
				bottom: -2px;
				width: 100%;
				height: 6px;
				border-radius: 3px;
				background: #c52519;
	
			}
	
			img {
				width: 25px
			}
	
			.title {
				font-size: 24px;
				margin-left: 8px;
			}
		}
	
		.header-right {
			font-size: 16px;
	
			.more {
	
				color: #333333;
				font-size: 20px;
	
				.jia {
					font-size: 30px;
				}
			}
		}
	}
	
	.righttxt {
		text-align: right;
		margin-bottom: 13px;
		font-size: 30px;
		font-weight: bold;
	}
	.chaintime {
		display: flex;
		margin-bottom: 50px;
		justify-content: space-between;
		.chaintime-left {
			padding: 20px;
			width: 345px;
			background: #f3f3f3;
			font-size: 14px;
			ul {
				li {
					.text3 {
						display: flex;
						color: #333;
						justify-content: space-between;
						.span1 {
							overflow: hidden;white-space: nowrap;text-overflow:ellipsis;
							margin-left: 20px;
						}
					}
					.hr {
						height: 25px;
						margin-left: 20px;
						width: 2px;
						background: #dd928c;
					}
				}
				li:nth-child(1){
					.text3 {
						color: #c72a1d;

					}
				}
				li:last-child{
					.hr {
						height: 0;
					}
				}
			}
		}
		.chaintime-right {
			width: 280px;
			background: #f3f3f3;

			.chaintime-right-img {
				width: 100%;
				img {
					width: 100%;
				}
			}
			ul{
				padding: 20px;
				li {
					display: flex;
					color: #333;
					padding: 10px 0;
					justify-content: space-between;
					.text3 {
						overflow: hidden;white-space: nowrap;text-overflow:ellipsis;

						.span1 {
							margin-left: 20px;
						}
					}
					.hr {
						height: 25px;
						margin-left: 20px;
						width: 2px;
						background: #dd928c;
					}
				}
				li:nth-child(1){
					.text3 {
						color: #c72a1d;
				
					}
				}
			}
			
		}
	}
	
</style>
