<template>
    <div class="hello">
        <Welcome :message="msg" @contact="comFromChildren"></Welcome>
        <form>
            <input type="text" name="username" v-model="userName"> <br>
            <input type="text" name="age" v-model="age"> <br>
            <a href="javascript:;" @click="addUser">提交</a>
        </form>
    </div>
</template>

<script>
    import Welcome from './welcome'

    export default {
        name: 'hello',
        components: {Welcome},
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                userName: '',
                age: ''
            }
        },
        methods: {
            addUser() {
                var self = this;
                self.$ajax({
                    url: '/api/user/addUser',
                    method: 'post',
                    dataType: 'json',
                    data: {
                        username: self.userName,
                        age: self.age
                    }
                }).then(res => {
                    if (res.data.success) {
                        console.log(res);
                    }
                })
            },
            comFromChildren: function () {
                console.log('子组件传来信息啦')
            }
        }
    }
</script>