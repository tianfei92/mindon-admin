<template>
    <div class="hello">
        <Welcome :message="msg" @contact="comFromChildren"></Welcome>
        <div>
            <label>用户名：<input type="text" name="username" v-model="userName"></label> <br>
            <label>密码：<input type="password" name="password" v-model="password"></label> <br>
            <button @click="addUser">登录</button>
            <button @click="addUser">注册</button>
        </div>
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
                password: ''
            }
        },
        methods: {
            addUser() {
                let self = this;
                self.$ajax({
                    url: '/api/user/login',
                    method: 'post',
                    dataType: 'json',
                    data: {
                        username: self.userName,
                        password: self.password
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