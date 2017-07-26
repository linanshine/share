<template>
    <div class="sharerefresh-detail">
        <div class="row">
            <img src="static/refreshFigure/img/icon1.png" />商品名称：
            <span>9.9元5120M</span>
        </div>
        <div class="row">
            <img src="static/refreshFigure/img/icon2.png" />二维码来源：
            <span>个人营业厅</span>
        </div>
        <div class="content">
            <img src="static/refreshFigure/img/imgad1.png" class="hidden" />
            <div id="divOne" class="hidden" ></div>  
            <img id='imgOne' style='width:20px; height:20px' class="hidden" />
        </div>
            <div id="imgBox" style='margin-top: 1rem;'  align="center"></div>
        <div class="footer">
        <router-link tag="button" :to="detailRouter" class="routerLink">返回</router-link>
            <!-- <button>返回</button> -->
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return this.$store.state.refreshFigure;
    },
    mounted() {
        setTitle("刷屏图");
       
         //如果内容中有中文，在生成二维码钱就要把字符串转换成utf-8  
        function toUtf8(str) {  
            var out, i, len, c;  
            out = "";  
            len = str.length;  
            for (i = 0; i < len; i++) {  
                c = str.charCodeAt(i);  
                if ((c >= 0x0001) && (c <= 0x007F)) {  
                    out += str.charAt(i);  
                } else if (c > 0x07FF) {  
                    out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));  
                    out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));  
                    out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));  
                } else {  
                    out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));  
                    out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));  
                }  
            }  
            return out; 
        }  
      
        var qrcode= $('#divOne').qrcode('http://www.gongjuji.net/').hide();  
        console.log(qrcode); 
        var canvas=qrcode.find('canvas').get(0);  
        $('#imgOne').attr('src',canvas.toDataURL('image/jpg'));   

        this.draw();
    },
    methods: {
        draw: function () {
            var that = this;
            var data1= new Array();
            for(var i=0;i<$('.content img').length;i++){
                data1[i]=$('.content img').eq(i).attr('src');
            }
            var c=document.createElement('canvas'),
                ctx=c.getContext('2d'),
                len=data1.length;
            c.width="209";
            c.height="290";
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
                        ctx.drawImage(img,0,0,209,290);
                    }else if(n==1){
                        ctx.drawImage(img,120,230,50,50);
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

.footer {
    width: 100%;
    border-top: 1px solid #dddddd;
    position: fixed;
    bottom: 0;
    padding: 0.35rem;
    background-color: #fff;
}

.footer button {
    width: 100%;
    height: 1.7067rem;
    line-height: 1.7067rem;
    text-align: center;
    font-size: 0.64rem;
    border-radius: 5px;
    color: #fff;
    background-color: #0085d0;
}
/*canvas{
    width: 500px;
    height: 500px;
}*/
#imgBox>img{
    width: 12.501333rem;
    height: 17.898667rem;
}
@media screen and (max-device-width: 320px) and (max-device-height: 480px) {
    ul#goodsList {
        height: 16.5rem;
    }
}
</style>
