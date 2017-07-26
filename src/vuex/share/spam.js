const shareSpam = {
  state: {
    selectArr: [],
    lastSelectNum:8,
    smallCount: 0,
    bigCount: 0,
    bigOrSmall: true,
    loading: true,
    cardsBig: [],
    cardsSmall: [],
    clientObj:{},
    infoBackRout:'/share/spam',
  },
  actions: {
    pushSelectArr({ commit }, item) {
      return new Promise((resolve, reject) => {
        if (item.length > 0) {
          commit('pushSelectArr', item)
          resolve()

        } else {
          util.showDialogPlug('还未选择刷屏图哦！','好的');
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
    },
    getClientObj({ commit }, item){
      return new Promise((resolve, reject) => {
        commit('getClientObj', item)
        resolve()
      })
    }
  },
  mutations: {
    pushSelectArr(state, arr) {
      state.selectArr = arr;
    },
    deleteSelectArr(state, card) {
      if (card.flag == 'small') {
        for (let i = 0; i < state.selectArr.length; i++) {
          if (state.selectArr[i].productName == card.productName) {
            state.selectArr.splice(i, 1);
            card.check = false;
            card.badge.value = '';
            i--;
          } else {
            state.selectArr[i].badge.value = i + 1;
          }
        }
      } else {
        for (let i = 0; i < state.selectArr.length; i++) {
          if (state.selectArr[i].productName == card.title) {
            state.selectArr.splice(i, 1);
            card.check = false;
            card.badge.value = '';
            i--;
          } else {
            state.selectArr[i].badge.value = i + 1;
          }
        }
      }
    },
    updateCardsList(state, obj) {
      state.cardsBig = [...obj.bigList];
      state.cardsSmall = [...obj.smallList];
    },
    getClientObj(state, obj) {
      state.clientObj = obj;
    },
  }
}
export default shareSpam
