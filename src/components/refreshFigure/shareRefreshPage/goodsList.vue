<template>
    <div class="sharerefresh-list">
        <ul id="menu">
            <li class="cur">小图</li>
            <li>大图</li>
            <div id="switch"></div>
        </ul>
        <div class="tip">
            <p>批量分享还可添加
                <span  v-text='lastNum'></span>个刷屏图</p>
            <p>点击按钮切换刷屏图二维码类型</p>
        </div>
        <ul id="goodsList" >
            <li class="flex-parent" v-for='(item, index) in listType'> 
                <span class="radio" @click='save($event)' v-text="number" :id='index'></span>
                <img class="img" :src="item.productImage" />
                <div class="info">
                    <p class="tip1">{{item.picName}}</p>
                    <p class="tip2">二维码：
                        <span>商品</span>
                    </p>
                    <p class="tip3">¥{{item.productPrice}}元/月</p>
                </div>
                <div class="opts">
                    <p class="date"> 
                        <img src="static/refreshFigure/img/img3.png" />
                        <span>2017.5.20</span>
                    </p>
                    <router-link tag="button" to="/refreshFigure/shareRefreshPage/shareRefreshPageDetail" class="routerLink">查看</router-link>
                    <p class="btnGroup flex-parent">
                        <input type="radio" :name="`goodsType${index}`" checked="checked" class="" id="sp"><label for='sp'>商品</label>
                        <input type="radio" :name="`goodsType${index}`" class="" id="gt"><label for='gt'>个厅</label>
                    </p>
                </div>
            </li>
        </ul>
        <div class="footer">
            <router-link tag="button" to="/refreshFigure/shareRefreshPage" class="routerLink">确定</router-link>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return this.$store.state.refreshFigure;
    },
    mounted() {
        this.detailRouter = '/refreshFigure/shareRefreshPage/shareRefreshPageList';
        let that = this;
        setTitle("图库-刷屏图");
        let liArray = document.getElementById("menu").children;
        let line = document.getElementById("switch");
        // this.getList();
        // that.listType = new Map(that.list.smaillList.map(( item, i ) => [ i, item ]));
        this.listType = that.list.smaillList;
        // console.log(that.listType);
        //40为根元素大小
        setTimeout(function () {
            line.style.width = liArray[0].offsetWidth + "px";
            line.style.left = liArray[0].offsetLeft + "px";
        }, 1500);

        for (let i = 0; i < liArray.length; i++) {
            (function (i) {
                if (liArray[i].nodeName != "LI") { return; }
                liArray[i].addEventListener("click", function () {
                    let width = this.offsetWidth;
                    let left = this.offsetLeft;

                    line.style.width = width + "px";
                    line.style.left = left + "px";

                    $("ul>li").removeClass("cur");
                    $("ul>li:eq(" + i + ")").addClass("cur");

                    $("#menuContent>div").addClass("hidden");
                    $("#menuContent>div:eq(" + i + ")").removeClass("hidden");

                    if(i == 0){
                        that.listType = that.list.smaillList;
                    }else{
                        that.listType = that.list.bigList;
                    }

                    console.log(that.listType);
                    
                }, false);
            })(i);
        }
    },
    // computed:{
    //     num: function(){

    //     }
    // },
    methods:{
        getList : function(){
            ajaxCommon({
                'url': 'refreshImage/list',
                'param': {},
                'callback': (data) => {
                    this.list = new Map(data.resbody);
                    console.log(this.list);
                    // for(let item of list.smaillList){

                    //     this.listType =
                    // }    

                    this.listType = list.smaillList;
                    console.log(this.listType);
                }
            });
        },
        save: function(e){         
                if(this.chooseGoodsList.length <= 0){
                this.listType[parseInt(e.target.id)]['chooseTag'] = '1';                
                }else{
                    if(this.chooseGoodsList.has(`${e.target.id}`)){
                        this.chooseGoodsList.delete(`${e.target.id}`);
                         e.target.innerHTML = "";
                    }else{
                        this.listType[parseInt(e.target.id)]['chooseTag'] = this.chooseGoodsList.length + 1;   
                    }
                }

            this.chooseGoodsList.set(`${e.target.id}`, this.listType[parseInt(e.target.id)]);
            e.target.innerHTML =  this.listType[parseInt(e.target.id)]['chooseTag'];

            console.log();
        }
    }
}
</script>
<style scoped>
ul#menu {
    list-style: none;
    width: 100%;
    height: 2rem;
    margin: 0 auto;
    position: fixed;
    background-color: #fff;
    text-align: center;
    color: #666666;
    font-size: 0.8rem;
    z-index: 999;
}

ul#menu li {
    text-align: center;
    width: 50%;
    height: 2rem;
    line-height: 2rem;
    float: left;
    padding: 0 1.5rem;
}

ul#menu #switch {
    border-bottom: 2px solid #159deb;
    position: absolute;
    bottom: 0;
    transition: all .5s;
}

ul#menu li.cur {
    color: #159deb;
}

.tip {
    width: 100%;
    position: fixed;
    top: 2rem;
    border-bottom: 1px solid #dddddd;
    border-top: 1px solid #dddddd;
    text-align: center;
    color: #666;
    padding: 0.5rem 0;
    z-index: 999;
}

.tip>p:first-child {
    font-size: 0.64rem;
}

.tip>p:first-child>span {
    color: #f6154a;
}

.tip>p:last-child {
    font-size: 0.512rem;
}

ul#goodsList {
    position: fixed;
    top: 4.9rem;
    height: 21rem;
    overflow-y: scroll;
}

ul#goodsList li {
    border-bottom: 1px solid rgb(221, 221, 221);
    padding: 0.5rem 0.3rem;
    width: 16rem;
}

ul#goodsList li .radio {
    width: 0.768rem;
    height: 0.768rem;
    border: 1px solid #dddddd;
    border-radius: 100%;
    text-align: center;
    color: #999;
    display: block;
    line-height: 0.768rem;
    font-size: 0.5973rem;
}

ul#goodsList li .img {
    width: 2.6453rem;
    height: 2.88rem;
    margin: 0 0.5rem 0 0.3rem;
}

ul#goodsList li .info {
    width: 7.8rem;
    height: 2.88rem;
    position: relative;
}

ul#goodsList li .info .tip1 {
    color: #333333;
    font-size: 0.5973rem;
}

ul#goodsList li .info .tip2 {
    color: #999999;
    font-size: 0.512rem;
}

ul#goodsList li .info .tip3 {
    color: #f90078;
    font-size: 0.6146rem;
    position: absolute;
    bottom: 0;
    line-height: 0.7;
}

ul#goodsList li .opts {
    text-align: right;
    font-size: 0.5547rem;
    height: 2.88rem;
    position: relative;
}

ul#goodsList li .opts p.date {
    color: #999999;
}

ul#goodsList li .opts p img {
    width: 0.448rem;
    height: 0.448rem;
}

ul#goodsList li .opts button {
    background-color: transparent;
    outline: none;
    color: #0085d0;
    text-decoration: underline;
}

ul#goodsList li .opts .btnGroup {
    background-color: #fff;
    color: #0085d0;
    width: 5rem;
    border: 1px solid #0085d0;
    border-radius: 3px;
    text-align: center;
    position: absolute;
    bottom: 0;
    right: 0;
}

ul#goodsList li .opts .btnGroup label {
    display: inline-block;
    width: 50%;
}

ul#goodsList li .opts .btnGroup label:first-child {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
}

ul#goodsList li .opts .btnGroup label:last-child {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
}

ul#goodsList li .opts .btnGroup span.active {
    background-color: #0085d0;
    color: #ffffff;
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
input[name*='goodsType']{
        width: 50%;
        position: absolute;
        opacity: 0;
}
input:checked + label{
    background-color: #0085d0;
    color: #ffffff;
}
@media screen and (max-device-width: 320px) and (max-device-height: 480px) {
    ul#goodsList {
        height: 16.5rem;
    }
}
</style>
