<template>
    <h1>{{ message }}</h1>
</template>

<script>
    export default {
        name: "welcome",
        props: ['message'],
        created() {
            this.$emit('contact')
        }
    }
</script>

<style scoped>

</style>