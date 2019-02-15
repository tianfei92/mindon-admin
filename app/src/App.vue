<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style lang="less">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }

    body {
        margin: 0;
        padding: 0;
    }

    ul {
        margin: 0;
        padding: 0;

        li {
            display: block;
            list-style: none;
        }
    }

    p {
        margin: 0;
        padding: 0;
    }
</style>
