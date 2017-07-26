<template>
	<v-container fluid grid-list-lg>
		<div class="row">
            <img src="static/share/img/icon1.png" />商品名称：
            <span>{{name}}</span>
        </div>
        <div class="row">
            <img src="static/share/img/icon2.png" />二维码来源：
            <span>{{codeName}}</span>
        </div>
        <div class="content">
            <img :src="src" class="hidden" id="shareImg" />
            <div id="divOne" class="hidden" ></div>  
            <img id='imgOne' style='width:20px; height:20px' class="hidden" />
            <div id="imgBox" style='margin: 1rem 0;' class=""  align="center"></div>
            <!-- <div id="imgBoxHidden" style='margin: 1rem 0;'  align="center"></div> -->
        </div>
            
        <!-- <router-link tag="button" :to="detailRouter" class="routerLink">返回</router-link> -->
            <!-- <button>返回</button> -->
        <!-- </div> -->
        <v-footer>
	      <v-btn block class='blue lighten-1' style='color: #fff' @click='downloadImg'>下载</v-btn>
	    </v-footer>
	</v-container>
</template>
<script >
	export default{
		data(){
			return {
				name: '',
                codeName: '',
                src: '',
                qrCode: '',
      			infoBackRout:'',
      			flag:'',
			}
		},
		mounted(){
			console.log('this.$route.query='+JSON.stringify(this.$route.query))
			this.name=this.$route.query.name;
			this.codeName=this.$route.query.codeName;
			this.src=this.$route.query.src;
			this.qrCode=this.$route.query.qrCode;
			this.infoBackRout=this.$route.query.infoBackRout;
			this.flag=this.$route.query.flag;
			
			console.log(this.$route)

			var qrcode= $('#divOne').qrcode(this.src).hide();  
	        console.log(qrcode); 
	        var canvas=qrcode.find('canvas').get(0);  
	        $('#imgOne').attr('src',canvas.toDataURL('image/jpg'));   

	        document.getElementById("shareImg").onload=()=> {
	        	this.draw();
	        }
	        
		},
		methods:{
			handleBackRout: function () {
				this.$router.push(this.infoBackRout);
			},
			draw: function () {
	            var that = this;
	            var data1= new Array();
	            for(var i=0;i<$('.content img').length;i++){
	                data1[i]=$('.content img').eq(i).attr('src');
	            }
	            var c=document.createElement('canvas'),
	                ctx=c.getContext('2d'),
	                len=data1.length;
	            let {width, height} = this.handleScreen({width: window.innerWidth, height: window.innerHeight, type: 'canvas'})    
	            c.width=width;
	            c.height=height;
	            ctx.rect(0,0,c.width,c.height);
	            ctx.fillStyle='transparent'; //画布填充颜色
	            ctx.fill();
	            that.drawing(0, len, data1, ctx, c)
	        },
	        drawing: function (n,len, data1, ctx, c) {
	            var that = this;
	            if(n<len){
	                var img=new Image();
	                img.crossOrigin = 'Anonymous'; //解决跨域
	                img.setAttribute('src', data1[n]);
	                img.onload=function(){
	                    if(n == 0){
	                    	let {width, height} = that.handleScreen({width: window.innerWidth, height: window.innerHeight, type: 'canvas'}) 
	                        ctx.drawImage(img,0,0,width,height);
	                    }else if(n==1){
	                    	let {width, height, x , y} = that.handleScreen({width: window.innerWidth, height: window.innerHeight, type: 'qrcode'}) 
	                        ctx.drawImage(img,x,y,width,height);
	                    }
	                    
	                    that.drawing(n+1, len, data1, ctx, c);//递归
	                }
	            }else{
	                //保存生成作品图片
	                that.convertCanvasToImage(c);
	            }
	        },
	        convertCanvasToImage: function (canvas) {
	            var hc_image = new Image();
	            var src = canvas.toDataURL("image/png");
	            hc_image.setAttribute('src', src);
	            $('#imgBox').html(hc_image);
	        },
	        handleScreen({width,height,type}){
	        	switch (type){
	        		case 'canvas': 
		        		if(this.flag == 'small'){
		        			if(width >= 400){
				        		return {width: 360, height: 640}
				        	}else if(width >= 360 && width <= 400){
				        		return {width: 320, height: 568}
				        	}else{
				        		return {width: 270, height: 480}
				        	}
				        	break;
		        		}else{
		        			if(width >= 400){
				        		return {width: 360, height: 960}
				        	}else if(width >= 360 && width <= 400){
				        		return {width: 320, height: 853}
				        	}else{
				        		return {width: 270, height: 720}
				        	}
				        	break;
		        		}
			        case 'qrcode':
			        	if(this.flag == 'small'){
			        		if(width >= 400){
				        		return {width: 60, height: 60, x: 170, y: 575 }
				        	}else if(width >= 360 && width <= 400){
				        		return {width: 50, height: 50, x: 155, y: 508}
				        	}else{
				        		return {width: 50, height: 50, x: 130, y: 425}
				        	}
			        	}else{
			        		if(width >= 400){
				        		return {width: 95, height: 95, x: 198, y: 487 }
				        	}else if(width >= 360 && width <= 400){
				        		return {width: 90, height: 90, x: 175, y: 430}
				        	}else{
				        		return {width: 73, height: 73, x: 148, y: 362}
				        	}
			        	}
			        	break;
			        default: break;
		        }
        	},
        	downloadImg: function () {
        		window.location.href=image;
        	}	        	
		}
	}
</script>
<style scoped>
.row{
    margin: 0.5rem 0.5rem 0;
    font-size: 0.682667rem;
}
.row img{
    width: 0.618667rem;
    height: 0.618667rem;
    margin-right: 0.3rem;
}

@media screen and (max-device-width: 320px) and (max-device-height: 480px) {
    ul#goodsList {
        height: 16.5rem;
    }
}
</style>