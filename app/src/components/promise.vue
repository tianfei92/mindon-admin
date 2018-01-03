<template>
    <div class="promise">
        <button @click="promiseAll">promise.all()</button>
    </div>
</template>

<script>
    export default {
        name: 'promise',
        methods: {
            promiseAll: function(){
                let promise1 = new Promise((resolve, reject)=>{
                    resolve({
                        data: 'promise1'
                    })
                });
                let promise2 = new Promise((resolve, reject)=>{
                    resolve({
                        data: 'promise2'
                    })
                });
                let promise3 = new Promise((resolve, reject)=>{
                    reject({
                        data: 'promise3'
                    })
                });
                Promise.all([promise1, promise2]).then(res=>{
                    console.dir(`promise.all([promise1, promise2])触发成功啦`);
                },res=>{
                    console.dir(`promise.all([promise1, promise2])触发失败啦`);
                })
                Promise.all([promise1, promise3]).then(res=>{
                    console.dir(`promise.all([promise1, promise3])触发成功啦`);
                },res=>{
                    console.dir(`promise.all([promise1, promise3])触发失败啦`);
                })
            }
        }
    }
</script>

<style scoped>

</style>
