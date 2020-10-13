<template>
  <div class="mains">
    <!-- 新闻 -->
    <div class="header flex">
      <div class="header-left verticallyflex">
        <div class="border"></div>
        <img src="@/assets/home/news.png" alt />
        <div class="title">新闻资讯</div>
      </div>
      <div class="header-right verticallyflex">
        <router-link to='news_dateil' class="more">
          <span>更多</span>
          <span class="jia">+</span>
        </router-link>
      </div>
    </div>
    <ul class="news">
      <li v-for="item in news" @click="handclick()">
        <div class="news-img-box">
          <img src="@/assets/home/pexels.png" alt />
        </div>
        <div class="new-rest">
          <div class="text1">宝莱特2019年实现净利润6471.28万元 拟10派2</div>
          <div class="text2">
            <span>作者：滕飞</span>|
            <span>来源：中国证券报</span>|
            <span>2020-04-24 12:01:42</span>
          </div>
          <div class="text3">上证报中国证券网讯（记者 滕飞）宝莱特4月24日午间公告，公司2019年度实现归属于上市公司股东的净利润为6471.28万元，拟以</div>
        </div>
      </li>
    </ul>
    <!-- 公告快讯 -->
    <div class="header flex">
      <div class="header-left verticallyflex">
        <div class="border"></div>
        <img src="@/assets/home/notice.png"/>
        <div class="title">公告快讯</div>
      </div>
      <div class="header-right verticallyflex">
        <router-link to="detailsnotice" class="more">
          <span>更多</span>
          <span class="jia">+</span>
        </router-link>
      </div>
    </div>
    <ul class="notice">
      <li v-for="(iten, index) in notice" @click="handnotice()">
        <div class="notice-img-box">
          <img src="@/assets/home/notice1.png" alt />
        </div>
        <div class="test">
          <div class="text1">民德电子下修2019年业绩</div>
          <div class="text3">上证报中国证券网讯（记者 滕飞）宝莱特4月24日午间公告，司2019年度实现归属于上市公司</div>
          <div class="time">2020/4/24 16:45</div>
        </div>
      </li>
    </ul>
    <!-- 论坛文章 -->
    <div class="header flex">
      <div class="header-left verticallyflex">
        <div class="border"></div>
        <img src="@/assets/home/notice.png" />
        <div class="title">论坛文章</div>
      </div>
      <div class="header-right verticallyflex">
        <router-link to="forum_dateil" class="more">
          <span>更多</span>
          <span class="jia">+</span>
        </router-link>
      </div>
    </div>
    <ul class="forum">
      <li v-for="(item, index) in forum" @click="forum_dateil" :key="item">
        <div class="forumtime-box">
          <div class="times">2010/03</div>
          <div class="lis">01</div>
        </div>
        <div class="forum-test">
          <div class="title-k">
            <div class="text1">支付宝把“数字抗疫经”搬上联合国“云课堂”</div>
            <div class="text2">
              <span>作者：—</span>
              <span>来自谷歌浏览器</span>
            </div>
          </div>
          <div class="hr"></div>
          <div class="text3">发起云课堂的“班主任”、联合国经济委员会执行秘书Vera Songwe表示，来自国的支付宝经验，对全球抗疫有重要启示。“零接触</div>
        </div>
      </li>
    </ul>
    <!-- 投教信息 -->
    <div class="header flex">
      <div class="header-left verticallyflex">
        <div class="border"></div>
        <img src="@/assets/home/investment.png" />
        <div class="title">投教信息</div>
      </div>
      <div class="header-right verticallyflex">
        <router-link to="book_dateil" class="more">
          <span>更多</span>
          <span class="jia">+</span>
        </router-link>
      </div>
    </div>
    <div style="margin-top: 20px;">
      <v-book :list="bookList" :type="3"></v-book>
    </div>
    <div class="sj">
      <img src="@/assets/home/ad.png" alt />
    </div>
    <div style="margin-top: 20px;">
      <v-book :list="bookLists" :type="3"></v-book>
    </div>
    <!-- <ul class="investment">
			<li class="investment-title">
				<img src="@/assets/home/tj1.png"/>
			</li>
			<li v-for="(item, index) in Investment">
				<div class="investment-img-box">
					<img src="@/assets/home/tj2.png" />
				</div>
				<div class="times1"><span>23:16</span></div>
				<div class="text3">国家邮政局：3月快递 速重回20%以上0%以1000</div>
				<div class="operation">
					<div class="xz">
						<router-link to="">
							<img src="@/assets/home/xz.png"/>
						</router-link>
					</div>
					<div class="watch"><span>1028</span>观看</div>
				</div>
			</li>
		</ul>
		<div class="sj">
			<img src="@/assets/home/ad.png" alt="">
		</div>
		<ul class="investment investment1">
			<li class="investment-title">
				<img src="@/assets/home/ads.png"/>
			</li>
			<li v-for="item in 7">
				<div class="investment-img-box">
					<img src="@/assets/home/tj2.png" />
				</div>
				<div class="times1"><span></span></div>
				<div class="text3">国家邮政局：3月快递 速重回20%以上0%以1000</div>
				<div class="operation">
					<div class="xz">
						<router-link to="">
							<img src="@/assets/home/xz.png"/>
						</router-link>
					</div>
					<div class="watch">
						<span class="rd"><img src="@/assets/home/rd.png"/></span>
						<span>1028</span>阅读
					</div>
				</div>
			</li>
    </ul>-->
  </div>
</template>

<script>
import vBook from "@/components/book.vue";
export default {
  name: "newsletter",
  components: { vBook },
  data() {
    return {
      news: [1, 2, 3],
      notice: [1, 2, 3, 4],
      forum: [1, 2, 3, 4],
      Investment: [1, 2, 3, 4, 5],
      bookList: [
        {
          imgUrl: require("@/assets/home/tj2.png"),
          title: "xxx公司助力A股首家 上市开始就法兰克福",
          num: "10086",
          time:'10:23'
        },
        {
          imgUrl: require("@/assets/home/tj2.png"),
          title: "xxx公司助力A股首家 上市开始就法兰克福",
          num: "10086",
          time:'10:23'
        },
        {
          imgUrl: require("@/assets/home/tj2.png"),
          title: "xxx公司助力A股首家 上市开始就法兰克福",
          num: "10086",
          time:'10:23'
        },
        {
          imgUrl: require("@/assets/home/tj2.png"),
          title: "xxx公司助力A股首家 上市开始就法兰克福",
          num: "10086",
          time:'10:23'
        },
        {
          imgUrl: require("@/assets/home/tj2.png"),
          title: "xxx公司助力A股首家 上市开始就法兰克福",
          num: "10086",
          time:'10:23'
        }
      ],
      bookLists: [
        {
          imgUrl: require("@/static/book.jpg"),
          title: "xxx公司助力A股首家 上市开始就法兰克福",
          num: "10086",
        },
        {
          imgUrl: require("@/assets/home/tj2.png"),
          title: "xxx公司助力A股首家 上市开始就法兰克福",
          num: "10086",
        },
        {
          imgUrl: require("@/assets/home/tj2.png"),
          title: "xxx公司助力A股首家 上市开始就法兰克福",
          num: "10086",
        },
        {
          imgUrl: require("@/assets/home/tj2.png"),
          title: "xxx公司助力A股首家 上市开始就法兰克福",
          num: "10086",
        },
        {
          imgUrl: require("@/assets/home/tj2.png"),
          title: "xxx公司助力A股首家 上市开始就法兰克福",
          num: "10086",
        }
      ]
    };
  },
  methods: {
	handclick() {
		this.$router.push({
			path: "news_dateil"
		})
	},
	handnotice() {
		this.$router.push({
			path: "detailsnotice"
		})
	},
	forum_dateil() {
		this.$router.push({
			path: "forum_dateil"
		})
	},
	toujiao() {

	}
  }
};
</script>

<style lang="less" scoped>
//@import "../../static/theme.less";

.mains {
  margin: 0 30px;
}

.text1 {
  font-size: 27px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.text2 {
  font-size: 12px;
  margin: 10px 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.text3 {
  font-size: 16px;
  overflow: hidden;
  text-overflow: 20px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.header {
  border-bottom: 3px solid #de5d54;
  margin-top: 30px;
  line-height: 50px;
  justify-content: space-between;

  .header-left {
    position: relative;
    color: #c52519;

    .border {
      position: absolute;
      bottom: -2px;
      width: 100%;
      height: 6px;
      border-radius: 3px;
      background: #c52519;
    }

    img {
      width: 25px;
    }

    .title {
      font-size: 24px;
      margin-left: 8px;
    }
  }

  .header-right {
    font-size: 16px;

    .more {
      color: #333333;
      font-size: 20px;

      .jia {
        font-size: 30px;
      }
    }
  }
}

.news {
  li {
    display: -webkit-box;
    padding: 20px 0;
    justify-content: space-between;
    border-bottom: 1px solid #e2e2e2;
    .news-img-box {
      width: 190px;
      // height: 120px;
      img {
        width: 100%;
        height: 100%;
      }
    }

    .new-rest {
      flex: 1;
      padding-left: 20px;
    }
  }
}
.notice {
  width: 570px;
  margin: 0 auto;
  overflow: hidden;
  li {
    float: left;
    width: 265px;
    background: #f1f1f1;
    margin-top: 30px;
    .notice-img-box {
      width: 265px;
      img {
        width: 100%;
      }
    }
    .test {
      padding: 24px 21px;
      line-height: 35px;
      .text1 {
        font-weight: bold;
      }
      .text3 {
        -webkit-line-clamp: 3;
      }
      .time {
        color: #7f7f7f;
        text-align: right;
        font-size: 16px;
      }
    }
  }
  li:nth-child(2n) {
    margin-left: 40px;
  }
}

.forum {
  li {
    display: -webkit-box;
    justify-content: space-between;
    margin-top: 30px;
    .forumtime-box {
      width: 120px;
      text-align: center;
      .times {
        font-size: 12px;
        border: 1px solid #c52519;
        padding: 5px;
      }
      .lis {
        font-size: 50px;
        border: 1px solid #c52519;
        text-align: center;
        border-top: 0;
        padding: 5px 0;
      }
    }
    .hr {
      width: 68px;
      height: 2px;
      background: #c52519;
    }
    .forum-test {
      padding-left: 30px;
      flex: 1;
      .title-k {
        display: flex;
        align-items: center;
      }
      .text3 {
        line-height: 33px;
        margin-top: 8px;
      }
    }
  }
}

.investment {
  // margin-top: 15px;
  padding: 15px 0;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  li {
    margin-top: 15px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    width: 197px;
    .investment-img-box {
      img {
        width: 100%;
      }
    }
    .times1 {
      // height: 20px;

      span {
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
      justify-content: space-between;
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
        color: #b2b2b2;
      }
    }
  }
  li:nth-child(3n) {
    margin-right: 0;
  }
  .investment-title {
    img {
      width: 100%;
    }
  }
}
.sj {
  // margin-top: 42px;
  margin-top: 12px;
  img {
    width: 100%;
  }
}
.investment1 {
  margin-top: 0;
  margin-bottom: 65px;
  li {
    .times1 {
      span {
        background: #fff;
      }
    }
    .rd {
      width: 13px;
      img {
        width: 13px;
      }
    }
  }
}
</style>
