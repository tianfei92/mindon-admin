<template>
    <div class="login">
        <el-card header="系统登录" class="login-box">
            <el-form label-width="80px" label-suffix="：" size="small" ref="form" :model="formData" :rules="rules">
                <el-form-item label="用户名" prop="userName">
                    <el-input v-model="formData.userName"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="formData.password"></el-input>
                </el-form-item>
            </el-form>

            <el-button class="btn" size="medium" type="primary" plain @click="register">注册</el-button>
            <el-button class="btn" size="medium" type="primary" @click="login">登录</el-button>
        </el-card>
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
                        this.submitLogin()
                    }
                })
            },

            /**
             * 注册
             */
            register() {
                this.$refs.form.validate(valid => {
                    if (valid) {
                        this.submitRegister()
                    }
                })
            },

            /**
             * 提交登录请求
             */
            submitLogin() {
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
                            name: 'home'
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
            },

            /**
             * 提交注册请求
             */
            submitRegister() {
                this.$ajax({
                    url: '/api/user/register',
                    method: 'post',
                    data: {
                        username: this.formData.userName,
                        password: this.formData.password
                    }
                }).then(res => {
                    if (res.success) {
                        this.$router.push({
                            name: 'home'
                        })
                    } else {
                        this.$message({
                            message: res.msg,
                            type: 'error'
                        })
                    }
                }).catch(error => {
                    console.log(`注册用户异常---->${error}`);
                    this.$message({
                        message: '网络异常，请刷新重试',
                        type: 'error'
                    })
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .login {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: #35495e;
    }

    .login-box {
        position: absolute;
        width: 450px;
        height: 300px;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        text-align: center;
    }

    .btn {
        width: 40%;
        margin-top: 30px;
    }
</style>