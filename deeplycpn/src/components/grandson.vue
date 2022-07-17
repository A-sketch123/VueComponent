<template>
    <div>
        <h3 > 我是provide / inject传值的孙组件,我接收到祖先组件的值为：</h3>

        <div >{{fatherTxet.info}}</div>
    </div>
</template>
<script>
    export default{
        name:'grandson',
        // 孙组件注入依赖访问父组件,使用provide/inject
        inject:['fatherTxet']

    }
</script>