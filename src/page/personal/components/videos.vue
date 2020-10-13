<template>
  <div>
    <v-book :list='bookList' :type="1"></v-book>
    <!-- <ul class="investment">
      <li v-for="item in 8">
      	<div class="investment-img-box">
      		<img src="@/assets/home/tj2.png" />
      	</div>
      	<div class="times1"><span>14:23</span></div>
      	<div class="text3">国家邮政局：3月快递 速重回20%以上0%以1000</div>
      	<div class="operation">
      		<div class="watch">
      			<span class="rd"><img src="@/assets/home/rd.png"/></span>
      			<span>1028</span>阅读
      		</div>
      	</div>
      </li>
    </ul> -->
  </div>
</template>

<script>
  import vBook from '@/components/book.vue'
  export default {
    components:{
      vBook
    },
    data() {
      return {
        bookList:[
          {
            imgUrl: require('@/static/book.jpg'),
            title:'xxx公司助力A股首家 上市开始就法兰克福',
            num:'10086'
          },
          {
            imgUrl: require('@/static/book.jpg'),
            title:'xxx公司助力A股首家 上市开始就法兰克福',
            num:'10086'
          },
          {
            imgUrl: require('@/static/book.jpg'),
            title:'xxx公司助力A股首家 上市开始就法兰克福',
            num:'10086'
          },
          {
            imgUrl: require('@/static/book.jpg'),
            title:'xxx公司助力A股首家 上市开始就法兰克福',
            num:'10086'
          }
        ],
      }
    }
  }
</script>

<style lang="less" scoped>
  .investment {
  	padding: 15px 0;
  	overflow: hidden;
  	display: flex;
  	flex-wrap: wrap;
  	li {
  		margin-top: 15px;
      box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  		margin-right: 49px;
  		width: 197px;
  		.investment-img-box {
  			img {
  				width: 100%
  			}
  		}
  		.times1 {
  			span{
  				margin-left: 25px;
  				border-radius: 8px;
  				font-size: 18px;
  				color: #fff;
  				background: #b2b2b2;
  				padding: 2px 10px;
  			}
  		}
  		.text3 {
  			font-size: 20px;
  			line-height: 33px;
  		}
  		.operation {
  			display: flex;
  			justify-content: flex-end;
  			align-items: center;
  			line-height: 40px;
  			padding-bottom: 5px;
  			.xz {
  				width: 20px;
  				margin-left: 10px;
  				img {
  					width: 100%;

  				}
  			}
  			.watch {
  				margin-right: 10px;
  				font-size: 16px;
  				color: #b2b2b2
  			}
  		}
  	}
  	li:nth-child(3n) {
  		margin-right: 0;
  	}
  	.investment-title {
  		img{
  			width: 100%
  		}
  	}
  }
</style>
