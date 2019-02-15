<template>
    <el-breadcrumb>
        <el-breadcrumb-item
                v-for="(item, index) in currentCrumb"
                :key="index"
                :to="{path: item.path}"
        >
            {{item.name}}
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
    export default {
        name: "breadcrumb",
        computed: {
            currentCrumb() {
                return this.$store.state.app.currentCrumb
            }
        }
    }
</script>

<style scoped>

</style>