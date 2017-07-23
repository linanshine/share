<template>
  <section>
    <v-tabs fixed light centered @input='handleTabsSelect'>
      <v-tabs-bar slot="activators" class="grey lighten-4" light>
        <v-tabs-slider class="yellow"></v-tabs-slider>
        <v-tabs-item href="#tab-1">
          小图
        </v-tabs-item>
        <v-tabs-item href="#tab-2">
          大图
        </v-tabs-item>
      </v-tabs-bar>
      <v-tabs-content v-for="i in 2" :key="i" :id="'tab-' + i">
        <div class="text-xs-center" v-if='loading'>
          <v-progress-circular v-bind:size="100" indeterminate class="primary--text"></v-progress-circular>
        </div>
        <v-card flat v-if='!loading'>
          <v-card-title primary-title class='text-xs-center'>
            <div>
              <h3 class="headline mb-0">批量分享还可以添加个'100个帅哥'刷屏图</h3>
              <div>点击按钮切换刷屏图二维码类型</div>
            </div>
          </v-card-title>
          <v-card-text>
            <!-- 大图 -->
            <v-list v-if='bigOrSmall' two-line subheader>
              <v-list-tile @click='handleBigSelect(item)' v-for="item in cardsBig" v-bind:key="item.title">
                <v-list-tile-avatar>
                  <v-icon large v-badge="item.badge" class="grey--text text--lighten-1">{{item.icon}}</v-icon>
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-btn ripple>
                    {{item.info.qrcode}}
                  </v-btn>
                </v-list-tile-action>
              </v-list-tile>
            </v-list>
            <!-- 小图 -->
            <v-list v-if='!bigOrSmall' two-line subheader>
              <v-list-tile @click='handleSmallSelect(item)' v-for="item in cardsSmall" v-bind:key="item.title">
                <v-list-tile-avatar>
                  <v-icon large v-badge="item.badge" class="grey--text text--lighten-1">{{item.icon}}</v-icon>
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-btn ripple>
                    {{item.info.qrcode}}
                  </v-btn>
                </v-list-tile-action>
              </v-list-tile>
            </v-list>
          </v-card-text>
        </v-card>
      </v-tabs-content>
    </v-tabs>
    <v-footer>
      <v-btn style='margin-left:40%' @click='handleSeletClick'>确定</v-btn>
      </div>
    </v-footer>
  </section>
</template>
<script>
let _selectArr = [];
export default {
  data() {
    return this.$store.state.shareSpam;
  },
  methods: {
    //处理选择图片完后的 缺点事件
    handleSeletClick() {
      this.$store.dispatch('pushSelectArr', _selectArr).then(() => {
        this.$router.push('/share/spam')
      }).catch((item) => {
        alert(item)
      })
    },
    handleSmallSelect(card) {
      if (card.badge.value > 0) {
        card.badge.value = ''
        card.check = false;
        this.smallCount--;
        if (card.flag = 'small') {
          for (let i = 0; i < _selectArr.length; i++) {
            if (_selectArr[i].title == card.title) {
              _selectArr.splice(i, 1);
              i--;
            } else {
              _selectArr[i].badge.value=i+1;

            }
          }
       
        }
        this.$forceUpdate()
        return
      }
      // this.smallCount++;
      card.badge.value = _selectArr.length+1;

      card.check = !card.check; //是否选择了对应的图片
      !card.check ? card.icon = 'share' : card.icon = 'favorite'; //选择后切换 icon

      //如果 选择 则装填数据
      if (card.check) {
        _selectArr.push(card)
      } else {
        _selectArr.forEach((item, index) => {
          if (item.title == card.title) {
            _selectArr.splice(index, 1);
          }
        })
      }
      this.$forceUpdate()
    },
    //tabs切换事件
    handleTabsSelect(index) {
      index == 'tab-1' ? this.bigOrSmall = false : this.bigOrSmall = true;

    },
    //大图模式选择事件
    handleBigSelect(card) {
    if (card.badge.value > 0) {
        card.badge.value = ''
        card.check = false;
        this.smallCount--;
        if (card.flag = 'big') {
          for (let i = 0; i < _selectArr.length; i++) {
            if (_selectArr[i].title == card.title) {
              _selectArr.splice(i, 1);
              i--;
            } else {
              _selectArr[i].badge.value=i+1;

            }
          }
       
        }
        this.$forceUpdate()
        return
      }
      // this.smallCount++;
      card.badge.value = _selectArr.length+1;

      card.check = !card.check; //是否选择了对应的图片
      !card.check ? card.icon = 'share' : card.icon = 'favorite'; //选择后切换 icon

      //如果 选择 则装填数据
      if (card.check) {
        _selectArr.push(card)
      } else {
        _selectArr.forEach((item, index) => {
          if (item.title == card.title) {
            _selectArr.splice(index, 1);
          }
        })
      }
      this.$forceUpdate()
    }
  },
  mounted() {
    //如果已经有数据则不请求api
    if (_selectArr.length > 0) {
      this.loading = false;
    } else {
      //通过ajax请求数据 填充 this.cardsBig 等数据
      setTimeout(() => {
        this.loading = false;
      }, 1000)
    }

  }
}

</script>
