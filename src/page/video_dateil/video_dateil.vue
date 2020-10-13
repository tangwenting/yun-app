<template>
  <div class="page">
    <div class="video_content padding">
      <div class="toujiao_head flex_between_center">
        <!-- search 搜索框 -->
        <div class="toujiao_search flex_between_center">
          <div class="flex_1 flex_row">
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
      <!-- video -->
      <div class="video_box">
        <video class="videos" src="https://blz-videos.nosdn.127.net/1/OverWatch/OVR-S03_E03_McCree_REUNION_zhCN_1080P_mb78.mp4" controls></video>
      </div>
      <!-- 评论区 -->
      <div class="comment_box">
        <div class="comment_head">
          <div class="comment_ipt_txt">评论区</div>
          <div class="comment_ipt flex_between">
            <img class="comment_user" src="@/assets/home/user.png" alt="">
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
              <img class="comment_user" src="@/assets/home/user.png" alt="">
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
                    <img class="comment_user" src="@/assets/home/user.png" alt="">
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
      <!-- 推荐视频 -->
      <div class="recommend_videos">
        <div class="recommend_videos_tit">推荐视频</div>
        <v-book :list='videoList'></v-book>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import vFooter from '@/components/footer.vue'
  import vBook from '@/components/book.vue'
  export default {
    components:{
      vBook,
      vFooter
    },
    data() {
      return {
        videoList:[
          {
            imgUrl: require('@/static/book.jpg'),
            time:'12:03',
            title:'xxx公司助力A股首家 上市开始就法兰克福',
            num:'10086'
          },
          {
            imgUrl: require('@/static/book.jpg'),
            time:'12:03',
            title:'xxx公司助力A股首家 上市开始就法兰克福',
            num:'10086'
          }
        ],
      }
    },
    methods:{
			
    }
  }
</script>

<style>
  @import url("video_dateil.css");
</style>
