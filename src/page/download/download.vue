<template>
  <div class="page">
    <!-- banner -->
    <div class="banner_img">
    	<img src="@/assets/home/swiper_02.jpg" alt="">
    </div>

    <div class="download_content padding">
      <!-- 分类 tab -->
      <div class="download_tabs flex_items_center">
        <div class="download_tab" v-for="(tab,tindex) in tabs" :key='tindex' @click="handlTab(tindex)">
          <span class="tab_sp" :class="tabIndex==tindex?'tab_active':'' ">{{tab.name}}</span>
          <img class="tab_icon" :src="require('@/static/'+(tabIndex==tindex?'xa_1':'xa')+'.png' )" alt="">
          <div class="tab_two" :class="tabIndex==tindex?'show':'' ">
            <p v-for="item in tab.twoName" @click.stop="">{{item}}</p>
          </div>
        </div>
      </div>

      <!-- tab 内容 -->
      <div class="download_con">
        <v-book :list='videoList' :type="1"></v-book>
        <!-- page 分页 -->
        <div class="download_page flex_center">
          <div class="download_prve" @click="handlCut"><img src="@/static/prve.png" alt=""></div>
          <div class="download_num">
            <span>{{pagesize}}</span>/<span>{{totall}}</span>
          </div>
          <div class="download_next" @click="handlAdd"><img src="@/static/next.png" alt=""></div>
        </div>
      </div>

    </div>

    <!-- 广告图 -->
    <div class="guanggao_box">
      <img class="guanggao" src="@/static/news_banner.jpg" alt="">
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
        tabIndex:null,
        pagesize:1,
        totall:25,
        tabs:[
          {
            name:'视频',
            twoName:['财经类','期货类']
          },
          {
            name:'文章',
            twoName:['财经类','期货类']
          },
          {
            name:'教程',
            twoName:['财经类','期货类']
          },
          {
            name:'其他',
            twoName:['财经类','期货类']
          }
        ],
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
    methods: {
      handlTab(index) {
        this.tabIndex = index;
      },
      handlCut() {
        if(this.pagesize>1) {
          this.pagesize--;
        }
      },
      handlAdd() {
        if(this.pagesize<this.totall) {
          this.pagesize++;
        }
      }
    }
  }
</script>

<style scoped>
  .download_page {
    line-height: 30px;
    font-size: 28px;
    color: #333;
  }
  .download_prve,.download_next {
    padding: 5px 20px;
  }
  .download_page img {
    width: 30px;
    margin-top: 4px;
  }
  .download_con {
    padding: 30px 0;
  }
  .download_tab {
    line-height: 30px;
    position: relative;
    margin-top: 30px;
    margin-right: 50px;
    width: 110px;
  }
  .tab_two {
    width: 130%;
    position: absolute;
    text-align: center;
    left: 0;
    top: 40px;
    color: #fff;
    background: rgba(0,0,0,.6);
    font-size: 22px;
    z-index: 9;
    display: none;
  }
  .show {
    display: block!important;
  }
  .tab_active {
    color: #C52519!important;
  }
  .tab_two p {
    padding: 15px;
    border-bottom: 1px solid #797772;
  }
  .tab_two p:last-child {
    border-bottom: 0;
  }
  .tab_sp {
    font-size: 24px;
    color: #333;
    display: inline-block;
    vertical-align: middle;
    padding-right: 6px;
  }
  .tab_icon {
    display: inline-block;
    vertical-align: middle;
    max-height: 24px;
    max-width: 24px;
  }
</style>
