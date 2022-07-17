<template>
    <div>
        <h3 > 我是$attrs/ $listeners传值的孙组件,我接收到祖先组件的值为：</h3>
        <div >{{$attrs.message.info}}</div>
    </div>
</template>
<script>
    export default{
        name:'grandson',
        data() {
            return {
                grandsonData:'我是孙组件传给父组件的值'
            }
        },
          mounted() {
        this.$emit("grandsonData",this.grandsonData)
    },
   

    }
</script>