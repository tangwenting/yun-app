<template>
  <ul class="list">
    <li class="li-item" v-for="item in 4" @click="handlNews">
      <div class="li-item-left">
        <img src="@/assets/notice/entrepreneur.png" alt="">
      </div>
      <div class="li-item-right">
        <div class="text3">温鹏华带单融资融券亏损异常怎么办？盈途金宝合法正规吗？盈途金宝融资融券投资</div>
        <div class="news-box">
          <div class="text2">2019/12/23</div>
          <div class="news verticallyflex text2">
            <div class="news-item">
              <img class="pl" src="@/assets/notice/pl.png" alt="">
              <span>2</span>
            </div>
            <div class="news-item">
              <img class="zf" src="@/assets/notice/zf.png" alt="">
              <span>42</span>
            </div>
            <div class="news-item">
              <img class="thumbs-b" src="@/assets/notice/thumbs-b.png" alt="">
              <span>42</span>
            </div>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods:{
			handlNews() {
				this.$router.push({
					path:'/news_dateil'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
  .list {
    padding: 15px 0;
    width: 100%;
    .li-item {
      display: flex;
      padding: 16px 0;
      border-bottom: 1px solid #d2d2d2;
      .li-item-left {
        width: 80px;
        float: left;
        img {
          width: 100%;
        }
      }

      .li-item-right {
        width: calc(100% - 80px);
        padding-left: 30px;
        display: flex;
        align-content: space-between;
        flex-flow: row wrap;
        .text3 {
          font-size: 16px;
          overflow: hidden;white-space: nowrap;text-overflow:ellipsis;
        }
        .news-box {
          display: flex;
          width: 100%;
          justify-content: space-between;
          .news {

            .news-item {
              margin-left: 10px;
              display: flex;
                  align-items: center;
              span {
                margin-left: 10px;
              }
              .pl {
                width: 25px;
              }
              .zf {
                width: 27px;
              }
              .thumbs-b {
                width: 23px;
              }
            }
          }
        }

      }
    }
  }
</style>
