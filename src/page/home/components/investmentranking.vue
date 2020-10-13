<template>
	<div class="mian">
		<div class="logo">
			<img src="@/assets/home/zc.png" alt="">
		</div>
		<div class="rankingb flex">
			<div 
				 class="rankingb-item" 
				 v-for="(item, index) in rankingb" 
				 :key="item.id" 
				 :class="{rankingb_item_one: item.id == 1}"
				 @click="handclick()"
			>
				<div class="rankingb-item-img">
					<img :src="item.imgUrl"/>
				</div>
				<div class="text1">{{item.text1}}</div>
				<div class="text2">{{item.text2}}</div>
			</div>
		</div>
		<ul class="rankingb_f">
			<li class="rankingb_f_item flex" v-for="(item, index) in rankingbf" :key="item.id" @click="handclick()">
				<div class="num">{{item.id}}</div>
				<div class="rankingb_f_item_img">
					<img :src="item.imgUrl" alt="">
				</div>
				<div class="text1">{{item.text1}}</div>
				<div class="text2">{{item.text2}}</div>
				<div class="text2">{{item.text3}}</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "investmentranking",
		data() {
			return {
				rankingb: [
					{
						"id": 2,
						"imgUrl": require('@/assets/home/19.png'),
						"text1": "精易操盘",
						"text2": "返佣：预留5.5美金...",
					},
					{
						"id": 1,
						"imgUrl": require('@/assets/home/20.png'),
						"text1": "精易操盘",
						"text2": "返佣：预留5.5美金...",
					},
					{
						"id": 3,
						"imgUrl": require('@/assets/home/22.png'),
						"text1": "精易操盘",
						"text2": "返佣：预留5.5美金...",
					},
				],
				rankingbf: [
					{
						"id": 4,
						"imgUrl": require('@/assets/home/23.png'),
						"text1": "精易操盘",
						"text2": "返佣：预留5.5美金...",
						"text3": "周期：日返"
					},
					{
						"id": 5,
						"imgUrl": require('@/assets/home/23.png'),
						"text1": "精易操盘",
						"text2": "返佣：预留5.5美金...",
						"text3": "周期：日返"
					},
					{
						"id": 6,
						"imgUrl": require('@/assets/home/23.png'),
						"text1": "精易操盘",
						"text2": "返佣：预留5.5美金...",
						"text3": "周期：日返"
					}
				]
			}
		},
		methods:{
			handclick() {
				this.$router.push({
					path: "/shangwu_introduce"
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	
	.mian {
		margin-top: 30px;
		.logo {
			width: 180px;
			margin: 0 auto;
			img {
				width: 100%
			}
		}
		.rankingb {
			width: 480px;
			margin: 0 auto;
			justify-content: space-between;
			.rankingb-item {
				text-align: center;
				margin-top: 21px;
				.rankingb-item-img {
					margin: 12px auto 0;
					width: 92px;
					img {
						width: 100%;
					}
				}
				.text1 {
					margin-top: 13px;
					font-size: 23px;
					color: #000;
				}
				.text2 {
					margin-top: 16px;
					font-size: 16px;
					color: #686868;
				}
			}
			.rankingb_item_one {
				.rankingb-item-img {
					width: 100px;
					margin-top: 0; 
				}
			}
		}
		.rankingb_f {
			margin: 30px auto 0;
			width: 530px;
			.rankingb_f_item {
				justify-content: space-around;
				line-height: 80px;
				border-bottom: 1px solid #e3e3e3;
				.num {
					color: #c52519;
					font-size: 30px;
					font-style:oblique;
				}
				.rankingb_f_item_img {
					width: 48px;
					display: flex;
					align-items: center;
					img {
						width: 100%
					}
				}
				.text1 {
					font-size: 23px;
					color: #000;
				}
				.text2 {
					font-size: 16px;
					color: #686868;
				}
			}
				
			
		}
	}
</style>
