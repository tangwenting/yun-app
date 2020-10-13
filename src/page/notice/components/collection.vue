<template>
  <div class="mian">
    <div class="header flex">
    	<div class="header-left verticallyflex">
    		<div class="border"></div>
    		<img src="@/static/notice.png" alt="">
    		<div class="title">公司集锦</div>
    	</div>
    	<div class="header-right verticallyflex">
    		<router-link to="" class="more">
    			<span>更多</span>
    			<span class="jia">+</span>
    		</router-link>
    	</div>
    </div>
    <ul class="collection">
      <li class="collection-item" v-for="(item, index) in 4">
        <router-link to="/detailsnotice">
					<div class="text1">
					  韵达股份年报拟10转3派2.39元 阿里创投新进前十大股东
					</div>
					<div class="text3 text_clamp2">
						上证报中国证券网讯（记者 骆民）韵达股份披露年报。公司2019年实现营业收入同比增长148.30%；
						实现归属于上市公司股东的净利润2,647,196,861.81元，同比下降1.88%；基本每股收益1.19元/股。
						公司2019年度利润分配预案为：以利润分配实施时股权登记日的公司总股本为基数，
					</div>
					<div class="flex text2">
						<div><span>作者：--  来源</span>：财经网</div>
						<div>2020/04/29  23：09</div>
					</div>
				</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "vCollection",
    data() {
      return {
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

  .collection-item {
		border-bottom: 1px solid #e9e9e9;
		padding: 30px 0;
		.text1 {
		font-weight: bold;
				font-size: 24px;
		}
		.text3 {
			margin-top: 10px;
			font-size: 20px;
			line-height: 34px;
			-webkit-line-clamp: 3;
		}
		
		.text2 {
			margin-top: 10px;
			justify-content: space-between;
		}
  }
</style>
