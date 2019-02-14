<template>
    <el-container>
        <!--导航菜单-->
        <el-aside>
            <aside-menu></aside-menu>
        </el-aside>

        <!--内容区-->
        <el-container class="page-container">
            <el-header style="text-align: right; font-size: 12px">
                <p>欢迎您，{{}}</p>
            </el-header>

            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import asideMenu from './asideMenu'

    export default {
        name: "layout",
        components: {
            asideMenu
        }
    }
</script>

<style lang="less">
    .el-container {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .el-aside {
        position: absolute;
        top: 0;
        left: 0;
        width: 200px !important;
        height: 100%;
        background-color: #545c64;
        z-index: 999;
    }

    .page-container {
        position: absolute;
        padding-left: 200px;
    }
</style>