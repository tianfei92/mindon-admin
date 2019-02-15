<template>
    <el-menu background-color="#545c64" text-color="#fff" style="border: none" @select="menuLinking">
        <template v-for="(menu, index) in menuList">
            <!--有子菜单-->
            <el-submenu v-if="menu.children && menu.children.length" :key="index" :index="menu.name">
                <template slot="title">
                    <i class="el-icon-document"></i>
                    <span>{{menu.alias}}</span>
                </template>

                <template v-for="(childMenu, index) in menu.children">
                    <el-menu-item :key="index" :index="childMenu.name">
                        <i class="el-icon-document"></i>
                        <span>{{childMenu.alias}}</span>
                    </el-menu-item>
                </template>
            </el-submenu>

            <!--没有子菜单-->
            <el-menu-item v-else :key="index" :index="menu.name">
                <template slot="title">
                    <i class="el-icon-document"></i>
                    <span>{{menu.alias}}</span>
                </template>
            </el-menu-item>
        </template>
    </el-menu>
</template>

<script>
    export default {
        name: "asideMenu",
        computed: {
            menuList() {
                return this.$store.state.menu.menuList
            }
        },
        methods: {
            /**
             * 菜单跳转
             * @param index：选中菜单项的index。这里将路由命名绑定给index
             * @param indexPath：选中菜单项的index path
             */
            menuLinking(index, indexPath) {
                let isAvailable = true;
                if (this.beforePush !== undefined) {
                    isAvailable = !!this.beforePush(index)
                }
                if (isAvailable) {
                    this.$router.push({
                        name: index
                    })
                }
            }
        }
    }
</script>

<style scoped>

</style>