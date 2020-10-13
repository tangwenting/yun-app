<template>
	<div class="footer">
		<div class="link flex">
			<div class="l">L</div>
			<div class="test">
				<div class="test-link">链接</div>
				<div class="txt">LINK</div>
			</div>
		</div>
		<div class="br"></div>
		<div class="link-box">
			<div class="link-item">
				<router-link class="al" to="">中国证券网</router-link>
				<router-link class="al" to="">金融论坛</router-link>
				<router-link class="al" to="">致富网</router-link>
				<router-link class="al" to="">原油期货</router-link>
				<router-link class="al" to="">外汇导航</router-link>
				<router-link class="al" to="">迈汇数据</router-link>
			</div>
			<div class="link-item">
				<router-link class="al" to="">指股网外汇信号 </router-link>
				<router-link class="al" to="">易特外汇论坛</router-link>
				<router-link class="al" to="">恒生指数</router-link>
				<router-link class="al" to="">电鳗快报</router-link>
			</div>
		</div>
		<div class="footer-warp">
			<div>上海证券报社有限公司版权所有。本网站提供之资料或信息，仅供投资者参考，不构成投资建议</div>
			<div>联系电话：400-820-0277 地址：中国上海 浦东杨高南路1100号 E-MAIL:webmaster@cnstock.com</div>
			<div>Copyright©2016-2018 XiangDingLongXin information company All Rights Reserved</div>
			<div>备案号：赣ICP备18003754号-3 | 京公网安备11010502026503</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: "vFooter",
		data() {
			return{
				
			}
		}
	}
</script>

<style lang="less" scoped>
	.footer {
		margin-top: 20px;
		.link {
			margin-left: 30px;

			.l {
				font-size: 46px;
				color: #c52519;
			}
			.test {
				margin-left: 4px;
				.test-link {
					font-size: 20px;
					color: #c5261a;
				}
				.txt {
					color: #faa39d;
					font-size: 16px;

				}
			}
		}
		.br {
			width: 99%;
			height: 2px;
			background: #f0b3af;
			margin: 10px auto 50px;
		}
		.link-box {
			.link-item {
				text-align: center;
				.al {
					font-size: 16px;
					margin: 0 10px;
					color: #333333;
				}
			}
		}
		.footer-warp {
			margin-top: 50px;
			padding: 33px 0;
			width: 100%;
			text-align: center;
			background-color: #2f2d2d;
			div {
				font-size: 12px;
				color: #aaaaaa;
				line-height: 40px
			}
		}
	}
	
</style>
