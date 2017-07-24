<template>
	<div>
		<span>商品名:</span>
		<label>{{name}}</label>
		<span>二维码</span>
		<label>{{qrcode}}</label>
		<img :src="src">
	</div>
</template>
<script >
	export default{
		data(){
			return {
				name:'',
				qrcode:'',
				src:''
			}
		},
		mounted(){
			console.log('this.$route.query.='+JSON.stringify(this.$route.query))
			this.name=this.$route.query.productName;
			this.qrcode=this.$route.query.info.codeType.substring($route.query.info.codeType.indexOf('-')+1);
			if(this.$route.query.flag === 'small' ){
				this.src=this.$route.query.smallPicPath;
			}else{
				this.src=this.$route.query.bigPicPath;
			}
			
			console.log(this.$route)
		}
	}
</script>