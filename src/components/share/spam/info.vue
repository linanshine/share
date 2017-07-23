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
			this.name=this.$route.query.info.name;
			this.qrcode=this.$route.query.info.qrcode;
			this.src=this.$route.query.src;
			console.log(this.$route)
		}
	}
</script>