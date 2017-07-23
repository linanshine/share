<template>
 <v-container fluid class="text-xs-center">
    <v-layout row wrap>
    
      <v-flex xs12 >

        <v-card height="185px" class="elevation-0 white">


          <v-card-text>
            <div v-for='item in indexArr'>
              <v-btn flat :to='item.route'>{{item.text}}</v-btn>
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

    }
	}
</script>
