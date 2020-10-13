<template>
  <div class="page">
    <div class="forum padding">
      <!-- 我发布的 -->
      <div>
        <div class="forum_head">我的论坛</div>
        <div class="my_forum flex_start" v-for="(item,mindex) in myForum" @click="handlDateil">
          <div class="my_forum_time">
            <p>{{item.time}}</p>
            <div class="my_forum_sort">{{item.sort}}</div>
          </div>
          <div class="my_forum_con">
            <h5 class="text_ellipsis my_forum_tit">{{item.title}}</h5>
            <p class="my_forum_txt text_clamp2">{{item.text}}</p>
            <div class="my_forum_forward flex_between_center">
              <div class="my_forum_icon">
                <img src="@/assets/notice/xx.png" alt="">
                <span>{{item.collect}}</span>
                <img src="@/assets/notice/pl.png" alt="">
                <span>{{item.common}}</span>
                <img src="@/assets/notice/zf.png" alt="">
                <span>{{item.forward}}</span>
              </div>
              <!-- <div class="my_forum_from flex_1">
                来自谷歌浏览器
              </div> -->
            </div>
          </div>
        </div>
        <div class="my_forum_more">
          <span>展开</span>
          <img src="@/static/up.png" alt="">
        </div>
      </div>
      <!-- 全部动态 -->
      <div>
        <div class="forum_head">我的论坛</div>
        <div class="all_forum" v-for="(item,mindex) in myForum"  @click="handlDateil">
          <div class="flex_start">
            <div class="my_forum_time">
              <p>{{item.time}}</p>
              <div class="my_forum_sort">{{item.sort}}</div>
            </div>
            <div class="my_forum_con">
              <div class="all_tits flex_between">
                <h5 class="text_ellipsis my_forum_tit">{{item.title}}</h5>
                <div class="all_lz">
                  <span>拉菲特</span>
                  <span class="follow">+关注</span>
                </div>
              </div>
              <p class="my_forum_txt text_clamp2">{{item.text}}</p>
              <div class="my_forum_forward flex_between_center">
                <div class="my_forum_icon">
                  <img src="@/assets/notice/xx.png" alt="">
                <span>{{item.collect}}</span>
                <img src="@/assets/notice/pl.png" alt="">
                <span>{{item.common}}</span>
                <img src="@/assets/notice/zf.png" alt="">
                <span>{{item.forward}}</span>
                </div>
                <!-- <div class="my_forum_from flex_1">
                  来自谷歌浏览器
                </div> -->
              </div>
            </div>
          </div>
          <div class="comment_ipt forum_common flex_between">
            <img class="comment_user" src="@/assets/home/user.png" alt="">
            <div class="comment_input_box flex_1">
              <input class="comment_input" type="text" placeholder="添加评论">
              <span class="comment_input_btn">评论</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="comms" @click="handclick">
      <i class="el-icon-edit-outline"></i>
    </div>
    <v-comm></v-comm>
    <v-adver></v-adver>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import vFooter from "@/components/footer"
  import vAdver from "@/components/advertisement"
  import vComm from "@/components/comm"
  export default {
    data() {
      return {
        myForum: [{
            time: '2020/06/20',
            sort: '01',
            title: '支付宝把“数字抗疫经”搬上联合国“云课堂”',
            text: '发起云课堂的“班主任”、联合国经济委员会执行秘书Vera Songwe表示，来自中国的支付宝经，对全球抗疫有重要启示。“零接触”数字生活法和数活法和',
            collect: '25',
            common: '5',
            forward: '6'
          },
          {
            time: '2020/06/20',
            sort: '01',
            title: '支付宝把“数字抗疫经”搬上联合国“云课堂”',
            text: '发起云课堂的“班主任”、联合国经济委员会执行秘书Vera Songwe表示，来自中国的支付宝经，对全球抗疫有重要启示。“零接触”数字生活法和数活法和',
            collect: '25',
            common: '5',
            forward: '6'
          }
        ],
      }
    },
    components: {
      vFooter,
      vAdver,
      vComm
    },
    methods: {
      handlDateil() {
        this.$router.push({
          path: '/forum_dateil'
        })
      },
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
  @import url("forum.css");
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
