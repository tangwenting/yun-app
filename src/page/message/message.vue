<template>
	<div>
		<div class="message">
			<div class="message_head">消息中心</div>
			<div class="message_item flex_start" v-for="item in messageList">
				<div class="message_img">
					<img  src="../../assets/personal/my.png" alt="">
				</div>
				<!-- 评论 -->
				<div class="message_rt flex_1" v-if="item.message_type==1">
					<div class="message_tit">
						<span class="message_name">{{item.name}}</span>
						<span class="message_type">评论了你的文章</span>
						<span class="message_name">{{item.article}} </span>
						<span class="message_time">{{item.time}}</span>
					</div>
					<div class="message_texts">{{item.text}}</div>
				</div>
				<!-- 回复 -->
				<div class="message_rt flex_1" v-if="item.message_type==2">
					<div class="message_tit">
						<span class="message_name">{{item.name}}</span>
						<span class="message_type">回复了你的招商</span>
						<span class="message_name">{{item.article}}  </span>
						<span class="message_type">的评论</span>
						<span class="message_time">{{item.time}}</span>
					</div>
					<div class="message_texts">{{item.text}}</div>
					<div class="message_content_box">
						<div class="message_me">我：</div>
						<div class="message_content">{{item.content}}</div>
					</div>
				</div>
				<!-- 关注 -->
				<div class="message_rt flex_1" v-if="item.message_type==3">
					<div class="message_tit">
						<span class="message_name">{{item.name}}</span>
						<span class="message_time">{{item.time}}</span>
					</div>
					<div class="message_texts">{{item.text}}</div>
				</div>
				<!-- 收藏 -->
				<div class="message_rt flex_1" v-if="item.message_type==4">
					<div class="message_tit">
						<span class="message_name">{{item.name}}</span>
						<span class="message_time">{{item.time}}</span>
					</div>
					<div class="message_texts">收藏了你的 文章 {{item.article}}</div>
				</div>
			</div>
		</div>
		
		<v-footer></v-footer>
		<v-comm></v-comm>
	</div>
</template>

<script>
	import vFooter from "@/components/footer"
	 import vComm from "@/components/comm"
	export default {
		components:{
			vFooter,
			vComm
		},
		data() {
			return {
				messageList:[
					{
						imgUrl:'../../assets/personal/my.png', //头像
						name:'夏寒冬暖',  //昵称
						article:'教你如何理财', //文章
						time:'2020-07-26',  //时间
						text:'这篇文章真心不错！期待下次佳作！',
						content:'这篇文章真心不错', //回复信息
						message_type:1  //1评论的  2回复的  3关注的  4收藏
					},
					{
						imgUrl:'../../assets/personal/my.png', //头像
						name:'会飞的鱼',  //昵称
						article:'教你如何理财', //文章
						time:'2020-07-26',  //时间
						text:'多谢指点',
						content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', //回复信息
						message_type:2,  //1评论的  2回复的  3关注的  4收藏
					},
					{
						imgUrl:'../../assets/personal/my.png', //头像
						name:'是你的猫',  //昵称
						article:'教你如何理财', //文章
						time:'2020-07-26',  //时间
						text:'关注了你',
						content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', //回复信息
						message_type:3,  //1评论的  2回复的  3关注的  4收藏
					},
					{
						imgUrl:'../../assets/personal/my.png', //头像
						name:'期货公司',  //昵称
						article:'教你如何理财', //文章
						time:'2020-07-26',  //时间
						text:'',
						content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', //回复信息
						message_type:4,  //1评论的  2回复的  3关注的  4收藏
					},
					
				]
			}
		}
	}
</script>

<style scoped>
	.message {
		padding: 35px;
	}
	.message_head {
		font-size: 30px;
		color: #333;
		padding-left: 20px;
		border-left: 5px solid #C52519;
	}
	.message_item {
		padding: 25px 0;
		border-bottom: 1px solid #F2F2F2;
	}
	.message_img img {
		width: 90px;
		height: 90px;
		border-radius: 100%;
		margin-right: 25px;
	}
	.message_tit {
		font-size: 24px;
		color: #C7C7C7;
		line-height: 36px;
	}
	.message_name {
		color: #C52519;
	}
	.message_name,.message_type,.message_time {
		display: inline-block;
		padding-right: 10px;
	}
	.message_texts {
		font-size: 24px;
		line-height: 36px;
	}
	.message_content_box {
		background: #F7F7F7;
		padding: 18px;
		font-size: 24px;
		color: #666;
	}
</style>
