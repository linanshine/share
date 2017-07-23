const shareSpam = {
  state: {
    selectArr: [],
    lastSelectNum:8,
    smallCount: 0,
    bigCount: 0,
    bigOrSmall: true,
    loading: true,
    cardsBig: [{
        title: '我是id1',
        subtitle: '商品',
        badge: {
          value: '',
          left: true
        },
        count: 0,
        info: { name: '9.9元512M', qrcode: '个人营业厅' },
        src: 'https://vuetifyjs.com/static/doc-images/cards/sunshine.jpg',
        flex: 6,
        check: false,
        icon: 'share',
        flag: 'big'
      },
      {
        title: '我是id2',
        subtitle: '商品',
        badge: {
          value: '',
          left: true
        },
        count: 0,
        src: 'https://vuetifyjs.com/static/doc-images/cards/house.jpg',
        info: { name: '9.9元512M', qrcode: '个人营业厅' },
        flex: 6,
        check: false,
        icon: 'share',
        flag: 'big'
      }
    ],
    cardsSmall: [{
        title: '流量快餐包',
        subtitle: '商品',
        badge: {
          value: '',
          left: true
        },
        count: 0,
        info: { name: '9.9元512M', qrcode: '商家' },
        src: 'https://vuetifyjs.com/static/doc-images/cards/sunshine.jpg',
        flex: 6,
        check: false,
        icon: 'share',
        flag: 'small'
      },
      {
        title: '12121',
        subtitle: '商品',
        badge: {
          value: '',
          left: true
        },
        count: 0,
        info: { name: '9.9元512M', qrcode: '商家' },
        src: 'https://vuetifyjs.com/static/doc-images/cards/sunshine.jpg',
        flex: 6,
        check: false,
        icon: 'share',
        flag: 'small'
      },
      {
        title: '333',
        subtitle: '商品',
        badge: {
          value: '',
          left: true
        },
        count: 0,
        info: { name: '9.9元512M', qrcode: '商家' },
        src: 'https://vuetifyjs.com/static/doc-images/cards/sunshine.jpg',
        flex: 6,
        check: false,
        icon: 'share',
        flag: 'small'
      },
      {
        title: '流量安心包',
        subtitle: '商品',
        count: 0,
        badge: {
          value: '',
          left: true
        },
        src: 'https://vuetifyjs.com/static/doc-images/cards/house.jpg',
        info: { name: '9.9元512M', qrcode: '个人营业厅' },
        flex: 6,
        check: false,
        icon: 'share',
        flag: 'small'
      }
    ]
  },
  actions: {
    pushSelectArr({ commit }, item) {
      return new Promise((resolve, reject) => {
        if (item.length > 0) {
          commit('pushSelectArr', item)
          resolve()

        } else {
          reject('没有选择数据')
        }
      })
    },
    deleteSelectArr({ commit }, item) {
      return new Promise((resolve, reject) => {
        commit('deleteSelectArr', item)
        resolve()
      })
    },
    updateCardsList({ commit }, item) {
      return new Promise((resolve, reject) => {
        commit('updateCardsList', item)
        resolve()
      })
    }
  },
  mutations: {
    pushSelectArr(state, arr) {
      state.selectArr = arr;
      state.lastSelectNum -= state.selectArr.length;
    },
    deleteSelectArr(state, card) {
      if (card.flag == 'small') {
        for (let i = 0; i < state.selectArr.length; i++) {
          if (state.selectArr[i].title == card.title) {
            state.selectArr.splice(i, 1);
            card.check = false;
            card.badge.value = '';
            i--;
            state.lastSelectNum++;
          } else {
            state.selectArr[i].badge.value = i + 1;
          }
        }
      } else {
        for (let i = 0; i < state.selectArr.length; i++) {
          if (state.selectArr[i].title == card.title) {
            state.selectArr.splice(i, 1);
            card.check = false;
            card.badge.value = '';
            i--;
            state.lastSelectNum++;
          } else {
            state.selectArr[i].badge.value = i + 1;
          }
        }
      }
    },
    updateCardsList(state, obj) {
      state.cardsBig = [...obj.bigList];
      state.cardsSmall = [...obj.smaillList];
    },
  }
}
export default shareSpam
