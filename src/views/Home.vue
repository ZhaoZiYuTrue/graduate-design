<template>
    <div>
        <div class="top">&nbsp;&nbsp; 云加密系统</div>
        <router-view/>
        <ul class="footer"> 
            <li class="icons"><router-link :to="{name: 'retrieval'}">检索
            </router-link></li>
            <li class="icons"><router-link :to="{name: 'hardware'}">硬件状态监控
            </router-link></li>
            <li class="icons"><router-link :to="{name: 'internet'}">网络统计
            </router-link></li>
            <li class="icons"><router-link :to="{name: 'slow'}">慢查询统计
            </router-link></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped lang = 'scss'>
li{
    list-style: none;
}
.footer {
    position: fixed;
    width: 100%;
    height: 60px;
    line-height: 60px;
    left: 0;
    bottom: 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
}
.icons{
    font-size: 16px;
    flex: 1;
    text-align: center;
    border-top: 1px solid #42b893;
    border-bottom: 1px solid #42b893;
    border-left: 0.5px solid #42b893;
    border-right: 0.5px solid #42b893;
    a{
        color: #42b893;
        display: block;
        &.active{
            color: #fff;
            background: #42b893;
        }

    }
}
</style>