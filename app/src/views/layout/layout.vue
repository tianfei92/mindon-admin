<template>
    <el-container>
        <!--导航菜单-->
        <el-aside>
            <aside-menu></aside-menu>
        </el-aside>

        <!--内容区-->
        <el-container class="page-container">
            <el-header class="page-container-header">
                <div class="breadcrumb">
                    <breadcrumb></breadcrumb>
                </div>
                <p class="nick-name">
                    欢迎您，{{userInfo.userName}}
                    &nbsp;|&nbsp;
                    <span style="color: #008aff; cursor: pointer;" @click="singOut">退出</span>
                </p>
            </el-header>

            <el-main class="page-container-main">
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import {mapActions, mapState} from 'vuex';
    import asideMenu from './asideMenu'
    import breadcrumb from './breadcrumb'

    export default {
        name: "layout",
        components: {asideMenu, breadcrumb},
        computed: {
            ...mapState('user', [
                'userInfo'
            ]),
        },
        created() {
            this.getUserInfo()
        },
        methods: {
            ...mapActions('user', [
                'getUserInfo'
            ]),
            /**
             * 退出登录
             */
            singOut() {
                this.$ajax({
                    url: '/api/user/singOut',
                    method: 'post'
                }).then(res => {
                    if (res.success) {
                        window.location.reload()
                    }
                }).catch(e => {
                    console.log(`退出登录时发生异常 ****** ${e}`)
                })
            }
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

    .el-header {
        font-size: 12px;
        box-shadow: 0 5px 3px #eee;
    }
</style>

<style lang="less" scoped>
    .page-container {
        position: absolute;
        padding-left: 200px;

        .page-container-header {
            position: relative;
            overflow: hidden;
            zoom: 1;
            line-height: 60px;

            .breadcrumb {
                float: left;

                .el-breadcrumb {
                    line-height: 60px;
                }
            }

            .nick-name {
                float: right;
            }
        }
    }
</style>