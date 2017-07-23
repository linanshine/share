<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12 sm12 md6 offset-md3>
        <v-card>
          <v-card-text class="grey lighten-5 text-xs-left">
            请添加您要分享的刷屏图（最多8张）
            <v-text-field name="input-3-4" label="备注" single-line></v-text-field>
          </v-card-text>
          <v-card-text style=" position: relative">
            <v-fab-transition>
              <v-btn class="pink" dark absolute top left fab @click='handleAdd'>
                <v-icon>add</v-icon>
              </v-btn>
            </v-fab-transition>
          </v-card-text>
          <v-container fluid grid-list-md class="grey lighten-4">
            <v-layout row wrap>
              <v-flex v-bind="{ [`xs${card.flex}`]: true }" v-for="card in selectArr" :key="card.title">
                <v-card>
                  <v-card-media :src="card.src" height="200px">
                    <v-container fill-height fluid>
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                          <span class="headline white--text" v-text="card.title"></span>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-media>
                  <v-card-actions class="white">
                    <v-btn @click='handleInfoClick(card)'>
                    详情
                    </v-btn>
                     <v-btn @click='handleDeleteClick(card)'>
                    删除
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
      alert('立即分享')
    },
    handleAdd() {
      this.$router.push('/share/spam/select')
    }
  }
}

</script>
