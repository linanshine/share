<template>
 <v-container fluid class="text-xs-center">
    <div class="hr"> </div>
    <v-layout row wrap>
    
      <v-flex xs12 >

        <v-card height="185px" class="elevation-0 white">

          <v-card-text>
            <div v-for='item in indexArr'>
            <router-link class="routerLink"  :to='item.route'>
              {{item.text}}</v-btn>
            </router-link>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>

    </v-layout>
  </v-container>
</template>
<script >
	export default{
		data(){
			return this.$store.state
		},
    mounted(){
      let that = this;
      // setTimeout(function () {
      //   leadeon.userStatus({
      //     success: function (data) {
      //       let status = data.status; // 状态：0未登录；1服务密码登录；2短信验证码登录
      //       if (status == '0') {
      //           leadeon.showLogin();
      //       } else {
      //         leadeon.getUserInfo({
      //           success: function (data) {
      //               data.token = util.removeSpace(data.token);
      //               ojsons = data;
      //               that.clientObj = data;
      //           },
      //           error: function (data) {
      //               util.showDialogPlug(data, '知道了')
      //           }
      //         })
      //       }
      //     },
      //     error: function (data) {
      //         util.showDialogPlug(data, '知道了')
      //     }
      //   })
      // }, 500);
    }
	}
</script>
<style scoped>
  .hr {
    border-bottom: 1px solid #dddddd;
    margin: 1rem 0;
}

.routerLink {
  display: block;
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    color: #999999;
    border: 1px solid #dddddd;
    text-decoration: none;
    font-size: 0.8rem;
    margin: 0.3rem auto 0.7rem;
    border-radius: 5px;
}
</style>
