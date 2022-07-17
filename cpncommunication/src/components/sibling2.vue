<template>
  <div>
    <h1>sibling2</h1>
    <p>{{ receiveValue }}</p>
  </div>
</template>
<script>
    import {bus} from "../main"
export default {
  name: 'sibling2',
  data () {
    return {
      receiveValue: '我是子组件2，点击子组件1按钮后我会变成子组件1传来的数据',
    }
  },
  mounted() {
    // 兄弟组件中注册的事件总线handle事件;
    bus.$on('handle', (data) => { 
      console.log('params: ', data);
      this.receiveValue = data;
    })
  }
}
</script>
