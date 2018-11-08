<template>
    <div class="file">
        <nav class="hot">
            <router-link to="now-playing">正在热映</router-link>
            <router-link to="coming-soon">即将上映</router-link>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
export default {

}
</script>
<style>
    html,body{
        height: 100%;
    }
    .file{
        padding-left: .15rem;
        padding-right: .15rem;
        background-color: #f9f9f9;
        height: 100%;
    }
    .hot{
        height: .46rem;
        margin: 0 auto;
        border-bottom: solid #fe6e00 1px;
        display: flex;
    }
    .hot a{
        display: block;
        width: 50%;
        height: 100%;
        text-align: center;
        line-height: .46rem;
        font-size: .16rem;
        color: #fe6e00;
        box-sizing: border-box;
    }
    .hot .router-link-active{
        border-bottom:.03rem solid #fe6e00;
    }
</style>
