import Vue from 'vue'
import Vuex from 'vuex'

//分享主页的vuex
import shareSpam from './share/spam'
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    indexArr: [{
        text: '分享刷屏图',
        route: '/share/spam'
      },
      {
        text: '分享聚合页',
        route: '/share/meet'
      },
      {
        text: '分享图文',
        route: '/share/image'
      }, {
        text: '历史分享',
        route: '/share/history'
      }

    ]
  },
  modules: {
    shareSpam
  }
})
export default store;
