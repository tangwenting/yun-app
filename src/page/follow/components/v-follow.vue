<template>
	<div class="follow_container">
		<div class="follow_item flex_between_center" v-for="item in followList">
			<div class="follow_lt flex_1">
				<div class="follow_user flex_items_center">
					<img class="follow_img" src="../../../assets/personal/my.png" alt="">
					<div class="follow_texts">
						<div class="follow_name">{{item.name}}</div>
						<div class="follow_remarks">{{item.text}}</div>
					</div>
				</div>
			</div>
			<div class="follow_rt" :class="item.follow_type==true?'follow_active':''">{{item.follow_type==true?'已关注':'关注'}}</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'v-follow',
		data() {
			return {
				followList:[
					{
						imgUrl:'../../../assets/personal/my.png',
						name:'粉丝1',
						text:'简介巴拉巴拉~',
						follow_type:true
					},
					{
						imgUrl:'../../../assets/personal/my.png',
						name:'粉丝2',
						text:'简介巴拉巴拉~',
						follow_type:false
					},
					{
						imgUrl:'../../../assets/personal/my.png',
						name:'粉丝3',
						text:'简介巴拉巴拉~',
						follow_type:false
					},
					{
						imgUrl:'../../../assets/personal/my.png',
						name:'粉丝4',
						text:'简介巴拉巴拉~',
						follow_type:true
					},
					{
						imgUrl:'../../../assets/personal/my.png',
						name:'粉丝5',
						text:'简介巴拉巴拉~',
						follow_type:true
					}
				]
			}
		}
	}
</script>

<style scoped="scoped">
	.follow_container {
		margin: 35px;
		border-top: 1px solid #F0F0F0;
	}
	.follow_item {
		padding: 35px 0;
		border-bottom: 1px solid #F0F0F0;
	}
	.follow_img {
		width: 90px;
		height: 90px;
		border-radius: 100%;
		margin-right: 25px;
	}
	.follow_name {
		font-size: 26px;
		color: #333;
		padding-bottom: 10px;
	}
	.follow_remarks {
		font-size: 24px;
		color: #ADABAB;
	}
	.follow_rt {
		width: 120px;
		height: 55px;
		line-height: 55px;
		text-align: center;
		font-size: 24px;
		color: #C52519;
		border: 1px solid #C52519;
		border-radius: 55px;
	}
	.follow_active {
		color: #fff;
		background: #C52519;
	}
</style>
