<template>
  <div class="page">
    <div class="padding">
      <div class="toujiao_head flex_between_center">
        <!-- search 搜索框 -->
        <div class="toujiao_search flex_between_center">
          <div class="flex_1 flex_row" style="flex-wrap: initial;">
            <img class="search_icon" src="@/static/search.png" alt="">
            <input class="flex_1 search_bar" type="text" placeholder="请输入搜索内容关键词">
          </div>
          <div class="toujiao_btn flex_items_center">
            <img class="toujiao_camera" src="@/static/camera.png" alt="">
            <div class="toujiao_submit">搜索</div>
          </div>
        </div>
        <!-- 收藏 -->
        <div class="toujiao_collect flex_row">
          <img src="@/static/xin.png" alt="">
          <span>我的收藏</span>
        </div>
      </div>

      <!-- 详情内容 -->
      <div class="course_dateil">
        <div class="course_tit">打水漂的35万养老金打水漂的35万养老金</div>
        <div class="course_author">
          <span>作者：拉菲特</span>
          <div class="course_upload flex_items_center">
            <div>
              <img src="@/static/upload.png" alt="">
            </div>
            <div>
              <img src="@/static/share.png" alt="">
            </div>
          </div>
        </div>
        <div class="course_texts">
          <p>	内容详情 1929年10月美国华尔街股票市场的两次惨跌。由于美国和欧洲的经济陷入极度危机失业率居高不下、整个市场一片萧条，从而引起10月24日和29日的两次股市狂泻。特别是29日的下跌成为华尔街历史上最惨的跌势，跌幅达13%。它使美国股票市场进入黑暗，引发美国乃至整个世界长达十几年的经济大萧条。内容详情 1929年10月美国华尔街股票市场的两次惨跌。由于美国和欧洲的经济陷入极度危机、失业率居高不下、整个市场一片萧条，从而引起10月24日和29日的两次股市狂泻。特别是29日的下跌成为华尔街历史上最惨的跌势，跌幅达13%。它使美国股票市场进入黑暗，引发美国乃至整个世界长达十几年的经济大萧条。</p>
          <img src="../../assets/home/swiper_02.jpg" alt="">
        </div>
      </div>

      <!-- 评论区 -->
      <div class="comment_box">
        <div class="comment_head">
          <div class="comment_ipt_txt"></div>
          <div class="comment_forward flex_items_center">
              <span>被收藏：1234</span>
              <span>评论：34 </span>
              <span>转发：3456</span>
          </div>
          <div class="comment_ipt flex_between">
            <img class="comment_user" src="../../assets/home/user.png" alt="">
            <div class="comment_input_box flex_1">
              <input class="comment_input" type="text" placeholder="添加评论">
              <span class="comment_input_btn">评论</span>
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

      <!-- 精选问题 -->
      <div class="course_ask">
        <h5 class="dateil_recomm_tit">精选问题</h5>
        <infomation :recommList='recommList'></infomation>
      </div>

    </div>
    <div class="comms" @click="handclick">
      <i class="el-icon-edit-outline"></i>
    </div>
    <v-comm></v-comm>
    <v-footer></v-footer>
  </div>
</template>

<script>
   import vFooter from '@/components/footer.vue'
   import vComm from "@/components/comm"
   import infomation from '@/components/infomation.vue'
   export default {
     components:{
       infomation,
       vFooter,
       vComm
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
     },
     methods: {
       handclick() {
         this.$router.push({
           path:'/enduit',
         })
       }
     }
   }
</script>

<style scoped>
  @import url("../video_dateil/video_dateil.css");
  .course_ask {
    padding: 30px 0;
  }
  .dateil_recomm_tit {
    font-size: 24px;
    color: #333;
    padding-bottom: 20px;
  }
  .dateil_recomm_text img {
    display: none !important;
  }
  .comment_forward {
    font-size: 20px;
    color: #333;
    padding-bottom: 30px;
  }
  .comment_forward span {
    display: inline-block;
    padding-right: 30px;
  }
  .course_texts {
    font-size: 20px;
    color: #333;
    line-height: 36px;
    padding-top: 20px;
  }
  .course_texts img {
    display: block;
    width: 100%;
    margin: 30px 0;
  }
  .course_tit {
    font-size: 28px;
    line-height: 40px;
    color: #333;
    font-weight: 600px;
    text-align: center;
    padding-bottom: 8px;
  }
  .course_author {
    font-size: 22px;
    color: #333;
    text-align: center;
    line-height: 36px;
    position: relative;
  }
  .course_upload {
    position: absolute;
    top: 3px;
    right: 0;
  }
  .course_upload img {
    height: 25px;
    padding: 0 20px;
  }
  .comms {
    position: absolute;
    right: 2.6rem;
    top: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    font-size: 37x;
    color: #fff;
    border-radius: 50%;
    box-shadow: 0 0 0.1875rem rgba(0,0,0,.12);
    cursor: pointer;
    background: rgba(0, 0, 0, 0.5);
  }
</style>
