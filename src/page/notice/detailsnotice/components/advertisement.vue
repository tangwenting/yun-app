<template>
  <div class="main">
    <div class="ab-item">
      <div class="title">精选公告</div>
      <div class="chaintime-box flex">
        <div class="chaintime" v-for="(item, index) in 2">
        	<div class="chaintime-img">
        		<img src="@/assets/notice/jx1.png" alt="">
        	</div>
        	<ul>
        		<li v-for="(item, index) in 3">
        			<span class="text3">资讯标题急急水果蛋糕发挥共额</span>
        			<img src="@/assets/home/rd.png" alt="">
        		</li>
        	</ul>
        </div>
      </div>
    </div>
    <div class="ab-item">
      <div class="title">最新公告</div>
      <div class="chaintime-box flex">
        <div class="chaintime" v-for="(item, index) in 2">
        	<div class="chaintime-img">
        		<img src="@/assets/notice/jx2.png" alt="">
        	</div>
        	<ul>
        		<li v-for="(item, index) in 3">
        			<span class="text3">资讯标题急急水果蛋糕发挥共额</span>
        			<img src="@/assets/home/rd.png" alt="">
        		</li>
        	</ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ab',
    data() {
      return {

      }
    }
  }
</script>

<style lang="less" scoped>
  .main {
    margin: 0 30px;
    .title {
      font-size: 26px;
      color: #333;
      font-weight: bold;
      line-height: 66px;
    }
    .chaintime-box {
      justify-content: space-between;
    }
    .chaintime {
      width: 300px;
    	background: #f3f3f3;
    	.chaintime-img {
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
