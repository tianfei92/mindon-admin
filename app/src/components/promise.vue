<template>
    <div class="promise">
        <button @click="promiseTest">promise</button>
    </div>
</template>

<script>
    export default {
        name: 'promise',
        methods: {
            promiseTest: function(){
                let promise1 = new Promise((resolve, reject)=>{
                    resolve('promise1 OK')
                });
                let promise2 = new Promise((resolve, reject)=>{
                    resolve('promise2 OK')
                });
                let promise3 = new Promise((resolve, reject)=>{
                    reject('promise3 fail')
                });

                Promise.all([promise1, promise2]).then(res=>{
                    console.dir(`promise.all([promise1, promise2])执行成功：${res}`);
                },res=>{
                    console.dir(`promise.all([promise1, promise2])执行失败：${res}`);
                });

                Promise.all([promise1, promise3]).then(res=>{
                    console.dir(`promise.all([promise1, promise3])执行成功：${res}`);
                },res=>{
                    console.dir(`promise.all([promise1, promise3])执行失败：${res}`);
                });

                Promise.race([promise1, promise2]).then(res=>{
                    console.dir(`promise.race([promise1, promise2])执行成功：${res}`);
                },res=>{
                    console.dir(`promise.race([promise1, promise2])执行失败：${res}`);
                });

                Promise.race([promise1, promise3]).then(res=>{
                    console.dir(`promise.race([promise1, promise3])执行成功：${res}`);
                },res=>{
                    console.dir(`promise.race([promise1, promise3])执行失败：${res}`);
                });

                Promise.race([promise3, promise1]).then(res=>{
                    console.dir(`promise.race([promise3, promise1])执行成功：${res}`);
                },res=>{
                    console.dir(`promise.race([promise3, promise1])执行失败：${res}`);
                })
            }
        }
    }
</script>

<style scoped>

</style>
