<template>
    <div class="login">
        <el-form label-width="80px" label-suffix="：" size="small" ref="form" :model="formData" :rules="rules">
            <el-form-item label="用户名" prop="userName">
                <el-input v-model="formData.userName"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="formData.password"></el-input>
            </el-form-item>
            <el-button type="primary" @click="login">登录</el-button>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: 'hello',
        data() {
            return {
                formData: {
                    userName: '',
                    password: ''
                }
            }
        },
        computed: {
            /**
             * 表单校验规则
             */
            rules() {
                return {
                    userName: [
                        {required: true, type: 'string', message: '请填写用户名', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, type: 'string', message: '请填写密码', trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            /**
             * 登录
             */
            login() {
                this.$refs.form.validate((valid) => {
                    if (valid) {
                        this.submit()
                    } else {
                        // this.$message({
                        //     message: '请填写用户名和密码',
                        //     type: 'error'
                        // })
                    }
                })
            },

            /**
             * 提交登录请求
             */
            submit() {
                this.$ajax({
                    url: '/api/user/login',
                    method: 'post',
                    data: {
                        username: this.formData.userName,
                        password: this.formData.password
                    }
                }).then(res => {
                    if (res.success) {
                        this.$router.push({
                            name: 'index'
                        })
                    } else {
                        this.$message({
                            message: res.msg,
                            type: 'error'
                        })
                    }
                }).catch(error => {
                    console.log(`登录异常---->${error}`);
                    this.$message({
                        message: '网络异常，请刷新重试',
                        type: 'error'
                    })
                })
            }
        }
    }
</script>

<style lang="less" scoped></style>