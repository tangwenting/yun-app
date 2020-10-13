<template>
  <div>
    <ul class="forum">
    	<li v-for="(item, index) in 5" @click="handlForum">
    		<div class="forumtime-box">
    			<div class="times">2010/03</div>
    			<div class="lis">01</div>
    		</div>
    		<div class="forum-test">
    			<div class="title-k">
    				<div class="text1">支付宝把“数字抗疫经”搬上联合国“云课堂”</div>
    				<div class="text2"><span>作者：—</span><span>来自谷歌浏览器</span></div>
    			</div>
    			<div class="hr"></div>
    			<div class="text3">
    				发起云课堂的“班主任”、联合国经济委员会执行秘书Vera Songwe表示，来自国的支付宝经验，对全球抗疫有重要启示。“零接触
    			</div>
    		</div>
    	</li>
    </ul>
  </div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods:{
			handlForum() {
				this.$router.push({
					path:'/forum_dateil'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
  .text1 {
  	font-size: 27px;
  	overflow: hidden;white-space: nowrap;text-overflow:ellipsis;
  
  }
  
  .text2 {
  	font-size: 12px;
  	margin: 10px 0;
  	overflow: hidden;white-space: nowrap;text-overflow:ellipsis;
  }
  
  .text3 {
	  font-size: 16px;
	  margin-top: 10px;
  	overflow:hidden;
  	text-overflow: 20px;
  	display:-webkit-box;
  	-webkit-box-orient:vertical;
  	-webkit-line-clamp:2;
  }
  .forum {
  	li {
  		display: -webkit-box;
		  justify-content: space-between;
  		margin-top: 49px;
  		.forumtime-box {
  			width: 120px;

  			.times {
				  font-size: 12px;
				  
		      text-align: center;
  				border: 1px solid #c52519;
  				padding: 5px;
  			}
  			.lis {
  				font-size: 50px;
  				border: 1px solid #c52519;
  				text-align: center;
				  border-top: 0;
        		padding: 5px 0;
				  
  			}
  		}
  		.hr {
  			width: 68px;
  			height: 2px;
  			background: #c52519
  		}
  		.forum-test {
  			padding-left: 30px;
  			flex: 1;
  			.title-k {
  				display: flex;
				align-items: center;
  			}
  			.text3 {
  				line-height: 33px
  			}
  		}
  	}
  }
</style>
