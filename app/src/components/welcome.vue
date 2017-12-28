<template>
    <!--接受父组件传来的消息-->
    <h1>{{ message }}</h1>
</template>

<script>
    export default {
        name: "welcome",
        props: ['message'],
        created() {
            this.$emit('contact'); //通知父组件
        }
    }
</script>

<style scoped>

</style>