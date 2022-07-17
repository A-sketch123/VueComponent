<template>
    <div>
        <h3 > 我是事件总线传值的孙组件,我接收到祖先组件的值为：</h3>

        <div >{{passMsg}}</div>
    </div>
</template>
<script>
import {bus} from '../main'
    export default{
        name:'grandson',
        data () {
            return {
                passMsg:''
            }
        },
        // 孙组件注入依赖访问父组件,使用provide/inject
        mounted() {
            bus.$on('eventBus',(data)=>
                this.passMsg = data
            )
        },
    
    }
</script>