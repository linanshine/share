<template>
    <div class="footer">
        <router-link tag="button"  :to="" class="routerLink">确定</router-link>
    </div>
</template>
<script>
export default {
    name：'buttontemp'
    mounted() {
       
    },
    methods:{
        
    }
}
</script>
<style scoped>
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
</style>
