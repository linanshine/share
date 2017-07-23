/**
 * vvue router 路由聚合页面
 */

import Vue from 'vue'
import Router from 'vue-router'

//分享活动主页
import shareIndex from '@/components/share/index.vue'
//分享聚合
import meet from '@/components/share/meet.vue'
//分享图文
import image from '@/components/share/image.vue'
//分享刷屏
import spam from '@/components/share/spam/spam.vue'
import spamSelect from '@/components/share/spam/select.vue'
import spamInfo from '@/components/share/spam/info'
//历史分享
import history from '@/components/share/history'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/share',
      name: 'index',
      component: shareIndex
    },
     {
      path: '/share/meet',
      name: 'meet',
      component: meet
    },
     {
      path: '/share/image',
      name: 'meet',
      component: image
    },
    {
      path: '/share/history',
      name: 'history',
      component: history
    },
     {
      path: '/share/spam',
      name: 'spam',
      component: spam
    },
     {
      path: '/share/spam/select',
      name: 'spamSelect',
      component: spamSelect
    },
    {
      path: '/share/spam/info',
      name: 'spamInfo',
      component: spamInfo
    }
  ]
})
