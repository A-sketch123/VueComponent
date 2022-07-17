<template>
    <div>
        <h3>{{passmes}}</h3>
    </div>
</template>
<script>

    export default{
        name:'sibling4',
        props:['mes'],
        computed:{
            passmes(){
                if(this.mes == ''){
                    return '我是子组件3，点击子组件4按钮会传值给我改变我的值'
                }else{
                    return this.mes
                }
            }
        }

    }
</script>