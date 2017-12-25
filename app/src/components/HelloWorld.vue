<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <form>
            <input type="text" name="username" v-model="userName"> <br>
            <input type="text" name="age" v-model="age"> <br>
            <a href="javascript:;" @click="addUser">提交</a>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'hello',
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
                    if (res.success) {
                        console.log(response);
                    }
                })
            }
        }
    }
</script>