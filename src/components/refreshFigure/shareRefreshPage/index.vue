<template>
    <div class="sharerefresh-index">
        <div class="hr"></div>
        <p class="tip1">请添加您要分享的刷屏图
            <span>（最多可添加8张）</span>
        </p>
        <div class="row">
            <label>备注:</label>
            <input type="text" placeholder="选填" />
        </div>
        <div class="content">
            <ul id="goodsList">
                 <router-link tag="li" to="/refreshFigure/shareRefreshPage/shareRefreshPageDetail" v-for="item in chooseGoodsList">
                    <img :src="item.productImage" class="img1">
                    <img src="static/refreshFigure/img/delete.png" class="delete" @click.prevent='deleteImg($event)'>
                 </router-link>
            </ul>
              <router-link tag="div" to="/refreshFigure/shareRefreshPage/shareRefreshPageList" class="noChoice">
                   <span>+</span>
                    <p>
                        <img src="static/refreshFigure/img/img1.png">添加图片
                    </p>
              </router-link>
        </div>
       
        <div class="footer">
            <button @click='share'>立即分享</button>
        </div>
    </div>
</template>
<script>
export default {
data(){
    return this.$store.state.refreshFigure;

},
    mounted() {
        this.detailRouter = '/refreshFigure/shareRefreshPage';
        console.log(this)
        setTitle("添加刷屏图");

    },
    methods:{
        'share': function(){
            util.showDialogPlug('分享成功', '好的');
        },
        deleteImg: function(e){
            console.log(e);
            e.target.parentNode.style.display = 'none';
        }
    },
}
</script>
<style scoped>
.hr {
    border-bottom: 1px solid #dddddd;
    margin: 0.5rem 0;
}

.tip1 {
    padding: 0 0.5rem;
    color: #333333;
    font-size: 0.75rem;
}

.tip1>span {
    color: #999;
    font-size: 0.6rem;
}

.row {
    padding: 0 0.5rem;
}

.row label {
    color: #666666;
    font-size: 0.7rem;
}

.row input {
    color: #999999;
    font-size: 0.7rem;
    border: 1px solid #e9e9e9;
}
.content{
    width: 100%;
    position: fixed;
    overflow-y: scroll;
}
ul {
    /*float: left;*/
}

li {
    width: 4.416rem;
    height: 6.2293rem;
    border: 1px solid #dddddd;
    margin: 0.392rem;
    float: left;
    position: relative;
}

li .img1 {
    width: 4.3733rem;
    height: 6.1867rem;
}

li .delete {
    width: 0.6827rem;
    height: 0.6827rem;
    position: absolute;
    top: 0.1rem;
    left: 0.1rem;
}

div.noChoice{
     width: 4.416rem;
    height: 6.2293rem;
    border: 1px solid #dddddd;
    margin: 0.392rem;
    float: left;
    position: relative;
    text-align: center;
    color: #dddddd;
}

.noChoice span {
    font-size: 4.5rem;
    line-height: 1rem;
    margin-top: 2rem;
    display: inline-block;
}

.noChoice p {
    height: 0.7rem;
    line-height: 0.7rem;
    font-size: 0.7rem;
}

.noChoice p img {
    width: 0.75rem;
    height: 0.6rem;
    vertical-align: middle;
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

@media screen and (max-device-width: 320px) and (max-device-height: 480px) {
    .content{
        height: 18rem;
    }
}
</style>
