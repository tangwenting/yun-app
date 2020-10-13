<template>
  <div class="page">
    <div class="dateil_content padding">
      <div class="introduce_head">
        <span>资讯中心>></span>
        <span>油价大反弹</span>
      </div>
      <!-- 新闻内容 -->
      <div class="dateil_con">
        <h5 class="dateil_tit">油价大反弹 抄底基金亏损却加大！国内基金也踩雷</h5>
        <div class="dateil_author">
          <span>作者：xxx </span>
          <span>来源：— </span>
          <span>时间：2019/09/30  15:45:00</span>
        </div>
        <div class="dateil_texts">
          <p>月24日，纽约期货原油6月合约价格连续两个交易日暴涨22%之后，在亚洲交易时段继续上涨国内一些投资者，又开始不淡定了，还有人在社交媒体上在大声高呼去“抄底”。实际上，纽约油价暴涨，却并没有带来抄底“原油基金”的暴涨，反而这些原油基金的实际亏损幅度仍然加大。就在暴涨22.9%的当天，美国最大原油基金ETF——USO基金暴跌了10.68%。4月23日，纽约油价强劲反弹22.42%之后，USO基金仅小幅上涨了5.18%。目前，包括USO在内的原油基金已经开始为进一步亏损做准备了。4月22日，全球最大的原油期货ETF——USO（UnitedStates Oil Fund）提出，将美国原油基金将进行所谓的反向拆分。股东每持有8份该基金的份额将合并成1份，大大降低了流通股数量。同时，将原油期货投资比例再度调整为“40%六月合约+55%七月合约+5%八月合约”，将建仓合约进一步拉长。</p>
          <img src="@/static/book.jpg" alt="">
        </div>
        <!-- 评论区 -->
        <div class="dateil_comment">
          <!-- 评论区 -->
          <div class="comment_box">
            <div class="comment_head">
              <div class="comment_forward flex_items_center">
                <div>
                  <img src="@/static/xinxi.png" alt="">
                  <span>共234条评论</span>
                </div>
                <div>
                  <img src="@/static/collect.png" alt="">
                  <span>收藏</span>
                </div>
                <div>
                  <img src="@/static/forward.png" alt="">
                  <span>转发</span>
                </div>
              </div>
              <div class="comment_ipt flex_between">
                <img class="comment_user" src="../../assets/home/user.png" alt="">
                <div class="comment_input_box flex_1">
                  <input class="comment_input" type="text" placeholder="添加评论">
                  <span class="comment_input_btn">登录可发布</span>
                </div>
              </div>
            </div>
            <div class="comment_con">
              <!-- 评论 -->
              <div class="comment_item flex_start">
                <div>
                  <img class="comment_user" src="../../assets/home/user.png" alt="">
                </div>
                <div class="comment_texts flex_1">
                  <div class="comment_name flex_between">
                    <div>
                      <span>懒人</span>
                      <span class="comment_time">今天 15:52</span>
                    </div>
                    <div>
                      <img class="fabulous_icon" src="@/static/fabulous.png" alt="">
                      <span class="fabulous">2</span>
                    </div>
                  </div>
                  <div class="comment_txt">
                    <p>这个评论插件叫AntSay，简单三步即可在自己的网站里嵌入。</p>
                    <p>1. 获取APP ID</p>
                    <p>2. 一行代码引入组件</p>
                    <p>3. 配置几个参数</p>
                    <p>赶紧使用吧，地址：http://say.alipay.net/</p>
                  </div>
                  <!-- 回复 -->
                  <div class="comment_reply">
                    <div class="reply_item flex_start">
                      <div>
                        <img class="comment_user" src="../../assets/home/user.png" alt="">
                      </div>
                      <div class="reply_texts flex_1">
                        <div class="reply_top flex_between_center">
                          <div>
                            <span>懒人</span>
                            <span class="reply">回复</span>
                            <span>人懒</span>
                            <span class="comment_time">今天 15:52</span>
                          </div>
                          <div>
                            <img class="fabulous_icon" src="@/static/fabulous.png" alt="">
                            <span class="fabulous">2</span>
                          </div>
                        </div>
                        <div class="comment_txt">
                          <p>真贴心 <span class="cull">@禺彊</span></p>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>
              </div>
              <!-- 查看更多评论 -->
              <div class="comment_more">查看更多评论</div>
            </div>
          </div>
        </div>

        <!-- 推荐资讯 -->
        <div class="dateil_recomm">
          <h5 class="dateil_recomm_tit">推荐资讯</h5>
          <infomation :recommList='recommList'></infomation>
        </div>
        <!-- 最新资讯 -->
        <div class="dateil_recomm dateil_newest">
          <h5 class="dateil_recomm_tit">最新资讯</h5> 
          <infomation :recommList='recommList'></infomation>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import infomation from '@/components/infomation.vue'
  export default {
    components:{
      infomation
    },
    data() {
      return {
        recommList:[
          {
            imgUrl: require('@/static/book.jpg'),
            news:['资讯标题急急水果蛋糕发挥共额...','资讯标题急急水果蛋糕发挥共额...','资讯标题急急水果蛋糕发挥共额...']
          },
          {
            imgUrl: require('@/static/book.jpg'),
            news:['资讯标题急急水果蛋糕发挥共额...','资讯标题急急水果蛋糕发挥共额...','资讯标题急急水果蛋糕发挥共额...']
          }
        ]
      }
    }
  }
</script>

<style>
  @import url("news_dateil.css");
  @import url("../video_dateil/video_dateil.css");
</style>
