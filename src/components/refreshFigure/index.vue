<template>
    <div>
        <div class="hr"></div>
        <router-link to="/refreshFigure/shareRefreshPage" class="routerLink">分享刷屏图</router-link>
        <router-link to="/refreshFigure/shareAggregationPage" class="routerLink">分享聚合页</router-link>
        <router-link to="/refreshFigure/shareImgPage" class="routerLink">分享图文</router-link>
        <router-link to="/refreshFigure/historicalSharePage" class="routerLink">历史分享</router-link>
    </div>
</template>
<script>
export default {
    mounted() {
        console.log("========开始啦=========");
        for(let a of document.getElementsByTagName('a')){
            a.addEventListener("touchstart", this.touchstart.bind(a), false);
            a.addEventListener("touchend", this.touchend.bind(a), false);
        }
    },
    methods:{
        "touchstart": function(e){
            e.touches[0].target.style.border = '1px solid #0085d0';
            e.touches[0].target.style.color = '#0085d0';
        },
        "touchend": function(e){
            $('a').css({
                'color': '#999999',
                'border': '1px solid #dddddd'
            })
        },
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
    width: 85%;
    height: 3rem;
    line-height: 3rem;
    text-align: center;
    color: #999999;
    border: 1px solid #dddddd;
    text-decoration: none;
    font-size: 0.8rem;
    margin: 0.3rem auto 0.7rem;
    border-radius: 5px;
}
</style>
