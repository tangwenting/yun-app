<template>
  <div class="main">
    <div class="comment">
      <div class="comment-item">
        <img class="pl" src="@/assets/notice/pl.png" alt="">
        <span class="text3">共234条评论</span>
      </div>
      <div class="comment-item">
        <img  class="xx" src="@/assets/notice/xx.png" alt="">
        <span class="text3">收藏</span>
      </div>
      <el-popover
        class="comment-item"
        placement="right"
        trigger="click">
        <div class="fx flex">
          <div class="img-box">
            <img src="@/assets/notice/qq.png"/>
          </div>
          <div class="img-box">
            <img src="@/assets/notice/wx.png"/>
          </div>
          <div class="img-box">
            <img src="@/assets/notice/wb.png"/>
          </div>
          <div class="img-box">
            <img src="@/assets/notice/gj.png"/>
          </div>
          <div class="img-box">
            <img src="@/assets/notice/py.png"/>
          </div>
        </div>
        <el-button slot="reference">
          <img class="zf" src="@/assets/notice/zf.png" alt="">
          <span class="text3">转发</span>
        </el-button>
      </el-popover>

    </div>
    <div class="commentarea">
      <div class="commentarea-title verticallyflex">
        <div class="commentarea-title-img">
          <img src="@/assets/notice/exampleheader.png"/>
        </div>
        <div class="commentarea-title-inputs">
          <input type="text" placeholder="添加评论">
          <button>登录可发布</button>
        </div>
      </div>
      <div class="commentarea-item flex">
        <div class="commentarea-item-img">
          <img src="@/assets/notice/entrepreneur.png"/>
        </div>
        <div class="commentarea-item-right">
          <div class="commentarea-item-information flex">
            <div class="name">懒人</div>
            <div class="time">今天 14:23</div>
          </div>
          <div class="test">
            <div class="p text3">
              这个评论插件叫AntSay，简单三步即可在自己的网站里嵌入，超轻。
              <br>
              1. 获取APP ID
              <br>
              2. 一行代码引入组件
              <br>
              3. 配置
            </div>
            <div class="save flex">
              <div class="save-img"><img src="@/assets/notice/thumbs-up.png" alt=""></div>
              <div class="num">2</div>
            </div>
          </div>
        </div>
      </div>
      <div class="commentarea-item flex">
        <div class="commentarea-item-img">
          <img src="@/assets/notice/entrepreneur.png"/>
        </div>
        <div class="commentarea-item-right">
          <div class="commentarea-item-information flex">
            <div class="name">懒人</div>
            <div class="time">今天 14:23</div>
          </div>
          <div class="test">
            <div class="p text3">
              这个评论插件叫AntSay，简单三步即可在自己的网站里嵌入，超轻。
            </div>
            <div class="save flex">
              <div class="save-img"><img src="@/assets/notice/thumbs-b.png" alt=""></div>
              <div class="num">2</div>
            </div>
          </div>
          <ul>
            <li class="flex">
              <div class="commentarea-item-img">
                <img src="@/assets/notice/child1871104.png"/>
              </div>
              <div class="commentarea-item-right">
                <div class="commentarea-item-information flex">
                  <div class="name">懒人</div>
                  <div class="name margin">回复</div>
                  <div class="name">懒人</div>
                  <div class="time">今天 14:23</div>
                </div>
                <div class="test">
                  <div class="p text3">
                    这个评论插件叫AntSay，简单三步即可在自己的网站里嵌入，超轻。
                  </div>
                  <div class="save flex">
                    <div class="save-img"><img src="@/assets/notice/thumbs-b.png" alt=""></div>
                    <div class="num">2</div>
                  </div>
                </div>
              </div>
            </li>
            <li class="flex">
              <div class="commentarea-item-img">
                <img src="@/assets/notice/child1871104.png"/>
              </div>
              <div class="commentarea-item-right">
                <div class="commentarea-item-information flex">
                  <div class="name">懒人</div>
                  <div class="name margin">回复</div>
                  <div class="name">懒人</div>
                  <div class="time">今天 14:23</div>
                </div>
                <div class="test">
                  <div class="p text3">
                    这个评论插件叫AntSay，简单三步即可在自己的网站里嵌入，超轻。
                  </div>
                  <div class="save flex">
                    <div class="save-img"><img src="@/assets/notice/thumbs-b.png" alt=""></div>
                    <div class="num">2</div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="text-algin-center">查看更多评论</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "",
    data() {
      return {

      }
    }
  }
</script>

<style scoped lang="less">
  .fx {
    .img-box {
      border-right: 1px solid #ebebeb;
      margin: 0 2px;
      img {
        height: 43px;
      }
    }
    .img-box:last-child {
      border-right: 0;
    }
  }
  .main {
    margin: 10px 30px;

    .comment {
      display: flex;

      .comment-item {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 25px;
        .el-button {
          padding: 0;
          border: 0;
        }
        .pl {
          width: 24px;
          margin-right: 8px;
        }

        .xx {
          width: 20px;
          margin-right: 8px;
        }

        .zf {
          width: 19px;
        }
      }
    }

    .commentarea {
      margin-top: 17px;
      .commentarea-title {
        justify-content: space-between;
        .commentarea-title-img {
          width: 52px;
          img {
            width: 100%;
          }
        }
        .commentarea-title-inputs {
          display: flex;
          border: 1px solid #c93428;
          border-radius: 4px;
          height: 45px;
          input {
            width: 447px;
            padding-left: 17px;
            color: #9f9f9f;
            font-size: 14px;
          }
          button {
            padding: 0 10px;
            background: #c93428;
            font-size: 16px;
            color: #fff;
          }
        }
      }
      .commentarea-item {
        margin-top: 38px;
        .commentarea-item-img {
          width: 52px;
          height: 52px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .commentarea-item-right {
          flex: 1;
          margin-left: 19px;
          .commentarea-item-information {
            color: #9c9c9c;
            .name {
              font-size: 24px;
            }
            .margin {
              margin: 0 5px;
            }
            .time {
              margin-left: 30px;
              font-size: 14px;
              margin-top: 5px;
            }

          }
          .test {
            display: flex;
            justify-content: space-between;
            .p {
              line-height: 40px;
              margin-right: 20px;
            }
            .save {
              height: 26px;
              margin-top: 3px;
              cursor: pointer;
              justify-content: flex-end;
              .save-img {
                width: 20px;
                margin-right: 5px;
                img {
                  width: 100%;
                  margin-top: -22px;
                }
              }
              .num {
                color: #737373;
                font-size: 16px;
              }
            }
          }
          ul {
            li {
              margin-top: 35px;
            }
          }
        }
      }
      .text-algin-center {
        color: #737373;
        font-size: 16px;
        margin-top: 30px;
        cursor: pointer;
      }
    }
  }
</style>
