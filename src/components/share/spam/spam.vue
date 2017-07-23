<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12 sm12 md6 offset-md3>
        <v-card>
          <v-card-text class="grey lighten-5 text-xs-left">
            请添加您要分享的刷屏图<span style="color: #999; font-size: 0.6rem;">（最多可添加8张）</span>
            <v-text-field style='font-size:0.7rem; color:#666;' name="input-3-4" label="备注" single-line></v-text-field>
          </v-card-text>
          <v-card-text style=" position: relative">
            <v-fab-transition>
              <v-btn class="pink" dark absolute small top left fab @click='handleAdd'>
                <v-icon class='add'>+</v-icon>
              </v-btn>
            </v-fab-transition>
          </v-card-text>
          <v-container fluid grid-list-md class="grey lighten-4">
            <v-layout row wrap>
              <v-flex v-bind="{ [`xs${card.flex}`]: true }" v-for="card in selectArr" :key="card.title">
                <v-card>
                  <v-card-media :src="card.src" height="150px">
                       <v-container fill-height fluid>
                          <v-layout fill-height>
                            <v-flex xs12 align-start flexbox>
                              <span class=" white--text" v-text="card.title"></span>
                            </v-flex>
                          </v-layout>
                        </v-container>
                  </v-card-media>
                  <v-card-actions class="white">
                    <v-spacer></v-spacer>
                    <v-btn icon  @click='handleInfoClick(card)'>
                      <v-icon>sort</v-icon>
                    </v-btn>
                    <v-btn icon @click='handleDeleteClick(card)'>
                      <v-icon>clear</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
     <v-footer>
      <v-btn style='margin-left:40%' @click='handleShareClike' >立刻分享</v-btn>
      </div>
    </v-footer>
  </v-container>
</template>
<script>
export default {
  data() {
    return this.$store.state.shareSpam
  },

  methods: {
    handleInfoClick(card){
      this.$router.push({path:'/share/spam/info',query:card})
    },
    handleDeleteClick(card){
      this.$store.dispatch('deleteSelectArr',card)
         this.$emit('xxd')
    },
    handleShareClike(){
      if(this.selectArr.length<=0){
        util.showDialogPlug('未选择分享刷屏图', '好的')
        return;
      }
      leadeon.enableShared({
                debug: false,
                enable: true,
                shareObj: {
                    title: '模块一分享',
                    link: "",
                    imgUrl: "",
                    content:"",
                    type: '',
                    dataUrl: ''
                },
                success: function (res) {
                    return;
                },
                error: function (res) {
                    return;
                }
            })
    },
    handleAdd() {
      this.$router.push('/share/spam/select')
    }
  }
}

</script>

<style scoped>
.btn--floating .btn__content .icon{
    color: #fff;
  }

.footer{
    width: 100%;
    padding: 2rem 1rem;
    left: 0;
    margin-top: 1rem;
    background-color: #fff;
}

.footer>button{
      width: 100%;
    margin: 0 auto !important;;
    background-color: #0085d0;
    color: #fff;
}
</style>
