<template>
    <el-menu background-color="#545c64" text-color="#fff">
        <template v-for="(menu, index) in menuList">
            <!--有子菜单-->
            <el-submenu v-if="menu.children && menu.children.length" :key="index" :index="index.toString()">
                <template slot="title">
                    <i class="el-icon-document"></i>
                    <span>{{menu.name}}</span>
                </template>

                <template v-for="(childMenu, index) in menu.children">
                    <el-menu-item :key="index" :index="index.toString()">
                        <i class="el-icon-document"></i>
                        <span>{{childMenu.name}}</span>
                    </el-menu-item>
                </template>
            </el-submenu>

            <!--没有子菜单-->
            <el-menu-item v-else :key="index" :index="index.toString()">
                <template slot="title">
                    <i class="el-icon-document"></i>
                    <span>{{menu.name}}</span>
                </template>
            </el-menu-item>
        </template>
    </el-menu>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "asideMenu",
        computed: {
            ...mapState('menu', [
                'menuList'
            ])
        }
    }
</script>

<style scoped>

</style>