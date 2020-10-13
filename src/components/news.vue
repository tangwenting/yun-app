<template>
  <div class="news_con">
    <div class="hot_tit">招商投资资讯</div>
  	<div class="news_item flex_between_center" v-for="(item,nindex) in newsList" :key="nindex" v-if="newsList.length!=0">
  		<div class="news_texts">
  			<p class="text_ellipsis"><span>*</span>{{item.text}}</p>
  		</div>
  		<div class="news_hot flex_center">
  			<span>{{item.num}}热度</span>
  			<img src="@/static/hot.png" alt="">
  		</div>
  	</div>
  </div>
</template>

<script>
  export default {
    name:'news',
    props:['newsList'],
    data() {
      return {

      }
    }
  }
</script>

<style>
  .news_texts {
  	width: 65%;
  	font-size: 18px;
  	color: #333;
  }
  .news_hot span {
  	font-size: 16px;
  	color: #B0B0B0;
  	padding-right: 10px;
  }
  .news_texts span {
  	color: #C52519;
  	display: inline-block;
  	padding-right: 10px;
  }
  .news_hot img {
  	width: 22px;
  }
  .news_item {
  	margin-bottom: 18px;
  }
  .news {
  	padding-bottom: 30px;
  }
</style>
