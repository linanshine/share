<template>
  <section>
    <v-tabs fixed light centered @input='handleTabsSelect'>
      <v-tabs-bar slot="activators" style='background-color: #fff' light>
        <v-tabs-slider class="#0085d0"></v-tabs-slider>
        <v-tabs-item href="#tab-1" style='font-size: 0.7rem'>
          小图
        </v-tabs-item>
        <v-tabs-item href="#tab-2" style='font-size: 0.7rem'>
          大图
        </v-tabs-item>
      </v-tabs-bar>
      <v-tabs-content v-for="i in 2" :key="i" :id="'tab-' + i">
        <div class="text-xs-center" v-if='loading'>
          <v-progress-circular v-bind:size="20" indeterminate class="primary--text"></v-progress-circular>
        </div>
        <v-card flat v-if='!loading'>
          <v-card-title class='text-xs-center' style='background-color: #F6F6F6'>
            <div style="width: 100%">
              <h5 class="mb-0 text-xs-center">批量分享还可以添加<span class="text--darken-1 pink--text">{{lastSelectNum}}个</span>刷屏图</h5>
              <h6 class="mb-0 text-xs-center">点击按钮切换刷屏图二维码类型</h6>
            </div>
          </v-card-title>
          <v-card-text>
            <!-- 大图 -->
            <v-list v-if='bigOrSmall' two-line subheader>
              <v-list-tile v-for="item in cardsBig" v-bind:key="item.productName">
                <v-list-tile-avatar>
                  <!-- <v-icon large v-badge="item.badge" @click='handleBigSelect(item)' class="grey--text text--lighten-1"></v-icon> -->
                  <img :src="item.productImage">
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.productName }}</v-list-tile-title>
                  <v-list-tile-sub-title class="grey--text text--darken-4">二维码：{{item.info.name}}</v-list-tile-sub-title>
                  <v-list-tile-sub-title class="text--darken-1 pink--text">&yen;：{{ item.productPrice }}元/月</v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-action class='text-xs-right'>
                  <v-list-tile-action-text><v-icon class="standard grey--text text--lighten-1" style='font-size: 16px;'>   
                  </style>access_time</v-icon>{{ item.releaseTime }}</v-list-tile-action-text>
                  <v-list-tile-action-text class='blue--text text--lighten-1' @click='detail(item)'>查看</v-list-tile-action-text>
                  <v-list-tile-action-text>
                     <span v-for='elem in item.productType' @click='handleTypeClick(elem, item)' :class='{active: elem.check}'>[{{elem.name}}]</span>
                  </v-list-tile-action-text>
                </v-list-tile-action>    
              </v-list-tile>
            </v-list>
            <!-- 小图 -->
            <v-list v-if='!bigOrSmall' two-line subheader>
              <v-list-tile v-for="item in cardsSmall" v-bind:key="item.productName">
                <v-list-tile-avatar>
                  <!-- <v-icon large v-badge="item.badge" @click='handleSmallSelect(item)' class="grey--text text--lighten-1"></v-icon> -->
                  <img :src="item.productImage">
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.productName }}</v-list-tile-title>
                  <v-list-tile-sub-title class="grey--text text--darken-4">二维码：{{item.info.name}}</v-list-tile-sub-title>
                  <v-list-tile-sub-title class="text--darken-1 pink--text">&yen;：{{ item.productPrice }}元/月</v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-action class='text-xs-right'>
                  <v-list-tile-action-text><v-icon class="standard grey--text text--lighten-1" style='font-size: 16px;'>   
                  </style>access_time</v-icon>{{ item.releaseTime }}</v-list-tile-action-text>
                  <v-list-tile-action-text class='blue--text text--lighten-1' @click='detail(item)'>查看</v-list-tile-action-text>
                  <v-list-tile-action-text>
                     <span v-for='elem in item.productType' @click='handleTypeClick(elem, item)' :class='{active: elem.check}'>[{{elem.name}}]</span>
                  </v-list-tile-action-text>
                </v-list-tile-action>       
              </v-list-tile>
            </v-list>
          </v-card-text>
        </v-card>
      </v-tabs-content>
    </v-tabs>
   <!--  <v-footer>
      <v-btn block class='blue lighten-1' style='color: #fff' @click='handleSeletClick'>确定</v-btn>
    </v-footer> -->
  </section>
</template>
<script>
let _selectArr = [];
export default {
  data() {
    return this.$store.state.shareSpam;
  },
  methods: {
    detail:function(card){
      let that = this;
        // util.showLoadPlug();
        // leadeon.encryptString({
        //     str: this.clientObj.phoneNumber,
        //     success: function (res) {
              ajaxCommon({
                // 'url': 'refreshImage/getQrCode',
                'url': 'static/share/jsons/getQrCode.json',
                // 'param': {'id':card.id, 'type':card.info.codeType,'enCodePhoneNum': res.encryptString},
                'param': false,
                'callback': (data) => {
                    let param = {
                      'name': card.productName,
                      'codeName': card.info.name,
                      'src': card.picPath,
                      'qrCode': data.resBody.qrCode,
                      'infoBackRout': '/share/spam/select',
                      'flag': card.flag,
                    }
                    that.$router.push({path:'/share/spam/info', query:param})
                }
              });
            // },
            // error: function (res) {
            //     util.showDialogPlug(res, '好的');
            // }
        // });       
    },
     getList : function(){
          ajaxCommon({
              // 'url': 'refreshImage/list',
              'url': 'static/share/jsons/list.json',
              'param': false,
              'callback': (data) => {
                for(let elem in data.resBody){
                  for(let item in data.resBody[elem]){
                    data.resBody[elem][item]['count'] = 0;
                     data.resBody[elem][item]['badge'] = {
                      value: '',
                      left: true
                    };
                    data.resBody[elem][item]['flex'] = 6;
                    data.resBody[elem][item]['check'] = false;
                    data.resBody[elem][item]['productType'] = [{name:'商品', check: true, type:'1'},{name: '个厅', check: false, type:'2'}];
                    data.resBody[elem][item]['info'] = {codeType: '1', name: '商品'};
                    if(elem.indexOf('small') != -1){
                      data.resBody[elem][item]['flag'] = 'small';
                    }else{
                      data.resBody[elem][item]['flag'] = 'big';
                    }
                  }
                }
                this.$store.dispatch('updateCardsList',data.resBody)
              }
          });
      },
      handleTypeClick(elem, card){
        if(elem.check){
           return;
        }else{
          for(let item of card.productType){
            item.check = false;
          }
          elem.check = !elem.check
          card.info.codeType =elem.type
          card.info.name =elem.name;
        }
      },

    //处理选择图片完后的 点事件
    handleSeletClick() {
      this.$store.dispatch('pushSelectArr', _selectArr).then(() => {
        this.$router.push('/share/spam')
      }).catch((item) => {
        alert(item)
      })
    },
    handleSmallSelect(card) {   
       if(_selectArr.length>=8){
            util.showDialogPlug('最多只能选择8张刷屏图','好的');
            return;
        }
      if (card.badge.value > 0) {
        console.log(this.lastSelectNum);
        card.badge.value = ''
        card.check = false;
        this.smallCount--;        
        if (card.flag = 'small') {
          for (let i = 0; i < _selectArr.length; i++) {
            if (_selectArr[i].productName == card.productName) {
              _selectArr.splice(i, 1);
              i--;
              this.lastSelectNum++;
              console.log(this.lastSelectNum);
            } else {
              _selectArr[i].badge.value=i+1;   //重新 给他们 从 1 到 length 排序       
            }
          }
        }
        this.$forceUpdate()
        return
      }
      // this.smallCount++;
      card.badge.value = _selectArr.length+1;

      card.check = !card.check; //是否选择了对应的图片
      // !card.check ? card.icon = 'share' : card.icon = 'favorite'; //选择后切换 icon

      //如果 选择 则装填数据
      if (card.check) {
        this.lastSelectNum--;
        _selectArr.push(card);
      } else {
        _selectArr.forEach((item, index) => {
          if (item.productName == card.productName) {
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
        card.badge.value = ''//选择按钮的值
        card.check = false;
        this.smallCount--;
        if (card.flag = 'big') {
          for (let i = 0; i < _selectArr.length; i++) {
            if (_selectArr[i].productName == card.productName) {
              _selectArr.splice(i, 1);
              i--;
              this.lastSelectNum++;
              console.log(this.lastSelectNum);
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
     // !card.check ? card.icon = 'share' : card.icon = 'favorite'; //选择后切换 icon

      //如果 选择 则装填数据
      if (card.check) {
        this.lastSelectNum--;
        _selectArr.push(card)
      } else {
        _selectArr.forEach((item, index) => {
          if (item.productName == card.productName) {
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
        this.getList();
        console.log(this.lastSelectNum);
      }, 1000)
    }
     
  }
}

</script>
<style scoped>
.footer{
    margin-top: 1rem;
}
.active{
  color: #559ade;
}
</style>