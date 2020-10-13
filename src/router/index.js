import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import("../page/index"),
      redirect: "/login",
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import("../page/home/home"),
        },
        {
        	path: 'personal',
        	name: 'personal',
        	component: () => import("../page/personal/personal"),
        },
        {
        	path: 'forum',
        	name: 'forum',
        	component: () => import("../page/forum/forum"),
        },
        {
        	path: 'forum_dateil',
        	name: 'forum_dateil',
        	component: () => import("../page/forum_dateil/forum_dateil"),
        },
        {
        	path: 'shangwu',
        	name: 'shangwu',
        	component: () => import("../page/shangwu/shangwu"),
        },
        {
        	path: 'shangwu_dateil',
        	name: 'shangwu_dateil',
        	component: () => import("../page/shangwu_dateil/shangwu_dateil"),
        },
        {
        	path: 'shangwu_list',
        	name: 'shangwu_list',
        	component: () => import("../page/shangwu_list/shangwu_list"),
        },
        {
        	path: 'shangwu_open',
        	name: 'shangwu_open',
        	component: () => import("../page/shangwu_open/shangwu_open"),
        },
        {
        	path: 'shangwu_introduce',
        	name: 'shangwu_introduce',
        	component: () => import("../page/shangwu_introduce/shangwu_introduce"),
        },
        {
        	path: 'personaldata',
        	name: 'personaldata',
        	component: () => import("../page/personal/personaldata/personaldata"),
        },
        {
        	path: 'news',
        	name: 'news',
        	component: () => import("../page/news/news"),
        },
        {
        	path: 'toujiao',
        	name: 'toujiao',
        	component: () => import("../page/toujiao/toujiao"),
        },
        {
          path: 'video_dateil',
          name: 'video_dateil',
          component: () => import("../page/video_dateil/video_dateil"),
        },
        {
          path: 'book_dateil',
          name: 'book_dateil',
          component: () => import("../page/book_dateil/book_dateil"),
        },
        {
          path: 'course_dateil',
          name: 'course_dateil',
          component: () => import("../page/course_dateil/course_dateil"),
        },
        {
        	path: 'news_dateil',
        	name: 'news_dateil',
        	component: () => import("../page/news_dateil/news_dateil"),
        },
        {
        	path: 'postarticle',
        	name: 'postarticle',
        	component: () => import("../page/personal/personaldata/postarticle"),
        },
        {
        	path: 'investment',
        	name: 'investment',
        	component: () => import("../page/personal/personaldata/investment"),
        },
        {
        	path: 'advertising',
        	name: 'advertising',
        	component: () => import("../page/personal/personaldata/advertising"),
        },
        {
        	path: 'questions',
        	name: 'questions',
        	component: () => import("../page/personal/personaldata/questions"),
        },
        {
        	path: 'platform',
        	name: 'platform',
        	component: () => import("../page/platform/platform"),
        },
        {
          path: 'notice',
          name: 'notice',
          component: () => import("../page/notice/notice"),
        },
        {
          path: 'detailsnotice',
          name: 'detailsnotice',
          component: () => import("../page/notice/detailsnotice/detailsnotice"),
        },
        {
          path: 'releases',
          name: 'releases',
          component: () => import("../page/releases/releases"),
        },
        {
          path: 'recharge',
          name: 'recharge',
          component: () => import("../page/recharge/recharge"),
        },
        {
          path: 'withdrawal',
          name: 'withdrawal',
          component: () => import("../page/recharge/withdrawal"),
        },
        {
          path: 'download',
          name: 'download',
          component: () => import("../page/download/download"),
        },
        {
          path: 'follow',
          name: 'follow',
          component: () => import("../page/follow/follow"),
        },
        {
          path: 'message',
          name: 'message',
          component: () => import("../page/message/message"),
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import("../page/login")
    },
    {
      path: '/register',
      name: 'register',
      component: () => import("../page/register")
    },
    {
      path: '/reset',
      name: 'reset',
      component: () => import("../page/reset")
    },
    {
      path: '/register_fail',
      name: 'register_fail',
      component: () => import("../page/register_fail")
    },
    {
      path: '/advertisingpurchase',//发布广告广告位
      name: 'advertisingpurchase',
      component: () => import("../page/personal/personaldata/advertisingpurchase"),
    },
    {
      path: '/flashscreen',//闪屏页
      name: 'flashscreen',
      component: () => import("../page/flashscreen")
    },
    {
      path: '/enduit',//编辑
      name: 'enduit',
      component: () => import("../components/enduit")
    },
  ]
})



export default router
