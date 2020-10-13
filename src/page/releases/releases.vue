<template>
  <div class="box">
    <div class="main">
      <div class="header">
        <div class="hrs"></div>
        <div class="title">我的发布</div>
      </div>
      <el-tabs class="tabs" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="招商信息 1" name="first">
          <ul class="list">
            <li class="li-item" v-for="item in 3">
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
                    <div class="news-item">
                      <i class="el-icon-edit"></i>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="广告 23" name="second">
          <ul class="list">
            <li class="li-item" v-for="item in 2">
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
                    <div class="news-item">
                      <i class="el-icon-edit"></i>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="问题 23" name="third">
          <ul class="list">
            <li class="li-item" v-for="item in 5">
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
                    <div class="news-item">
                      <i class="el-icon-edit"></i>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="文章 5" name="fourth">
          <ul class="list">
            <li class="li-item" v-for="item in 7">
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
                    <div class="news-item" @click="handrouter()">
                      <img class="thumbs-b" src="@/assets/notice/bj.png" alt="">
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </el-tab-pane>
      </el-tabs>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import vFooter from "@/components/footer.vue"
  export default {
    data() {
      return {
        activeName: 'fourth'
      };
    },
    components: {vFooter},
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      handrouter() {
        this.$router.push({
          path: "enduit"
        })
      }
    }
  };
</script>

<style lang="less" scoped>
  .main {
    padding: 30px;
    .header {
      display: flex;
      .hrs {
        width: 6px;
        background: #c52519;
      }
      .title {
        margin-left: 20px;
        font-size: 28px;
      }
    }
    .tabs {
      margin-top: 30px;
    }
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
                .el-icon-edit {
                  cursor: pointer;
                  font-size: 30px;
                  margin: 0 10px;
                }
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
  }
</style>
